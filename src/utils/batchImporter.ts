// BiotaElite 2.0 Batch Import Engine
// Safe, governed pipeline for CSV/JSON batch ingestion of species records

import type { SpeciesRecord, IUCNStatus, LifecycleStatus } from '../types/biodiversity';
import type { BatchImportRecord, ImportPreview, ImportRowPreview } from '../types/provenance';
import { normalizeScientificName, normalizeAuthorship, normalizeCSVRow } from './normalizer';
import { validateImportRow } from './validator';

/** Standard CSV column headers for BiotaElite batch import format */
export const STANDARD_CSV_HEADERS = [
  'scientific_name',
  'authorship',
  'family',
  'order',
  'class',
  'common_en',
  'common_bn',
  'bangladesh_present',
  'regions',
  'iucn_global',
  'iucn_national',
  'reference_id',
  'description',
  'diagnostic_features',
  'max_length_cm',
  'dorsal_formula',
  'anal_formula',
  'systems',
  'diet_category',
  'notes'
];

/**
 * Parses a CSV file content string into an array of normalized row objects.
 * Supports standard comma-delimited CSV with quoted fields.
 */
export function parseCSV(content: string): Record<string, string>[] {
  const lines = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length < 2) return [];

  // Parse headers from first line
  const headers = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));

  const rows: Record<string, string>[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue; // Skip empty lines

    const values = parseCSVLine(line);
    const row: Record<string, string> = {};
    headers.forEach((header, idx) => {
      row[header] = values[idx]?.trim() ?? '';
    });
    rows.push(normalizeCSVRow(row));
  }

  return rows;
}

/** Parse a single CSV line supporting quoted fields */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

/**
 * Parses a JSON file content string (expects an array of objects).
 */
export function parseJSON(content: string): Record<string, string>[] {
  try {
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed)) {
      throw new Error('JSON import must be an array of objects at the top level.');
    }
    return parsed.map(item => {
      const stringified: Record<string, string> = {};
      for (const [key, value] of Object.entries(item)) {
        stringified[key.toLowerCase().replace(/\s+/g, '_')] = String(value ?? '');
      }
      return normalizeCSVRow(stringified);
    });
  } catch (err) {
    throw new Error(`JSON parse error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

/**
 * Maps a raw parsed row to an ImportRowPreview object for validation.
 */
function mapRowToPreview(row: Record<string, string>, rowIndex: number): ImportRowPreview {
  return {
    rowIndex,
    rawData: row,
    parsedScientificName: normalizeScientificName(row['scientific_name'] || ''),
    parsedFamily: row['family']?.trim() || '',
    parsedOrder: row['order']?.trim() || '',
    parsedCommonEn: row['common_en']?.trim() || '',
    parsedCommonBn: row['common_bn']?.trim() || '',
    parsedIucnGlobal: row['iucn_global']?.trim().toUpperCase() || '',
    parsedIucnNational: row['iucn_national']?.trim().toUpperCase() || '',
    status: 'valid',
    errors: [],
    warnings: []
  };
}

/**
 * Generates a UUID-like batch ID (crypto.randomUUID if available, fallback to Math.random).
 */
export function generateBatchId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `batch-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Main batch preview generation function.
 * Takes raw file content + format, runs normalization + validation against existing records,
 * and returns a full ImportPreview for curator review before committing.
 */
export function generateImportPreview(
  fileContent: string,
  format: 'csv' | 'json',
  fileName: string,
  existingRecords: SpeciesRecord[]
): ImportPreview {
  const batchId = generateBatchId();
  const rawRows = format === 'csv' ? parseCSV(fileContent) : parseJSON(fileContent);

  // Map to preview rows and validate each
  const rows: ImportRowPreview[] = rawRows.map((row, idx) => {
    const preview = mapRowToPreview(row, idx + 1);
    return validateImportRow(preview, existingRecords);
  });

  const summary = {
    valid: rows.filter(r => r.status === 'valid').length,
    invalid: rows.filter(r => r.status === 'invalid').length,
    duplicates: rows.filter(r => r.status === 'duplicate').length,
    conflicts: rows.filter(r => r.status === 'conflict').length,
    missingReferences: rows.filter(r => r.status === 'missing_reference').length
  };

  return {
    batchId,
    sourceFile: fileName,
    totalRows: rows.length,
    rows,
    summary,
    generatedAt: new Date().toISOString()
  };
}

/**
 * Commits valid rows from an ImportPreview into the local species store.
 * Attaches importBatchId to each created record for rollback support.
 * Returns a BatchImportRecord describing the operation.
 *
 * NOTE: In production (Firebase), this would write to Firestore.
 * In the local fallback mode, it returns records that the caller should append.
 */
export function commitImportBatch(
  preview: ImportPreview,
  importedBy: string,
  existingReferences: { id: string }[]
): { batchRecord: BatchImportRecord; newSpeciesRecords: SpeciesRecord[] } {
  const validRows = preview.rows.filter(r => r.status === 'valid');
  const now = new Date().toISOString();

  const newSpeciesRecords: SpeciesRecord[] = validRows.map((row, idx) => {
    const authorship = normalizeAuthorship(row.rawData['authorship'] || '');
    const referenceId = row.rawData['reference_id']?.trim();
    const validReferenceId = existingReferences.some(r => r.id === referenceId) ? referenceId : undefined;

    // Parse regions from pipe or comma-separated string
    const regionsRaw = row.rawData['regions'] || '';
    const regions = regionsRaw.split(/[|,]/).map(s => s.trim()).filter(Boolean);

    // Parse systems
    const systemsRaw = row.rawData['systems'] || 'freshwater';
    const systems = systemsRaw.split(/[|,]/).map(s => s.trim()).filter(Boolean) as SpeciesRecord['habitat']['systems'];

    // Parse diagnostic features
    const featuresRaw = row.rawData['diagnostic_features'] || '';
    const diagnosticFeatures = featuresRaw.split(/[|;]/).map(s => s.trim()).filter(Boolean);

    const scientificName = row.parsedScientificName!;
    const speciesId = `sp-import-${scientificName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}-${idx}`;

    return {
      id: speciesId,
      scientificName,
      scientificNameAuthorship: authorship ? `(${authorship})` : '',
      taxonomicStatus: 'accepted',
      synonyms: [],
      commonNames: {
        en: row.parsedCommonEn ? [row.parsedCommonEn] : [],
        bn: row.parsedCommonBn ? [row.parsedCommonBn] : []
      },
      taxonomy: {
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: row.parsedOrder ? '' : (row.rawData['class']?.trim() || 'Actinopterygii'),
        order: row.parsedOrder || '',
        family: row.parsedFamily || '',
        genus: scientificName.split(' ')[0],
        species: scientificName
      },
      morphology: {
        diagnosticFeatures,
        description: row.rawData['description']?.trim() || '',
        maxStandardLengthCm: row.rawData['max_length_cm'] ? parseFloat(row.rawData['max_length_cm']) : undefined,
        dorsalSpinesRays: row.rawData['dorsal_formula']?.trim() || undefined,
        analSpinesRays: row.rawData['anal_formula']?.trim() || undefined
      },
      habitat: {
        systems: systems.length > 0 ? systems : ['freshwater'],
        zones: []
      },
      bangladeshOccurrence: {
        present: row.rawData['bangladesh_present']?.toLowerCase() !== 'false',
        regions,
        habitatTypes: [],
        residencyStatus: 'native',
        threatCategoryNational: (row.parsedIucnNational || 'NE') as IUCNStatus
      },
      ecology: {},
      conservation: {
        iucnGlobalStatus: (row.parsedIucnGlobal || 'NE') as IUCNStatus,
        iucnAssessmentYear: new Date().getFullYear(),
        threats: []
      },
      lifecycleStatus: 'draft' as LifecycleStatus,
      isVerified: false,
      isPublished: false,
      referenceIds: validReferenceId ? [validReferenceId] : [],
      media: [],
      importBatchId: preview.batchId,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
  });

  const batchRecord: BatchImportRecord = {
    id: preview.batchId,
    importedAt: now,
    importedBy,
    sourceFile: preview.sourceFile,
    sourceFormat: preview.sourceFile.toLowerCase().endsWith('.json') ? 'json' : 'csv',
    totalRows: preview.totalRows,
    validRows: preview.summary.valid,
    invalidRows: preview.summary.invalid,
    duplicateRows: preview.summary.duplicates,
    conflictRows: preview.summary.conflicts,
    committedCount: newSpeciesRecords.length,
    status: 'committed'
  };

  return { batchRecord, newSpeciesRecords };
}

/**
 * Rolls back all species records that belong to a specific importBatchId.
 * Returns the filtered species list with those records removed.
 */
export function rollbackImportBatch(
  batchId: string,
  currentSpecies: SpeciesRecord[],
  currentBatches: BatchImportRecord[]
): { filteredSpecies: SpeciesRecord[]; updatedBatches: BatchImportRecord[] } {
  const filteredSpecies = currentSpecies.filter(sp => sp.importBatchId !== batchId);
  const updatedBatches = currentBatches.map(b =>
    b.id === batchId
      ? { ...b, status: 'rolled_back' as const, rollbackAt: new Date().toISOString(), rollbackBy: 'Admin' }
      : b
  );
  return { filteredSpecies, updatedBatches };
}

/**
 * Generates a downloadable CSV validation report from an ImportPreview.
 */
export function generateValidationReportCSV(preview: ImportPreview): string {
  const headers = ['row', 'scientific_name', 'status', 'errors', 'warnings'];
  const lines = [headers.join(',')];

  for (const row of preview.rows) {
    const line = [
      String(row.rowIndex),
      `"${row.parsedScientificName || ''}"`,
      row.status,
      `"${row.errors.join('; ')}"`,
      `"${row.warnings.join('; ')}"`
    ].join(',');
    lines.push(line);
  }

  return lines.join('\n');
}
