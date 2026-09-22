// BiotaElite 2.0 Validation & Duplicate/Conflict Detection Engine

import type { SpeciesRecord, IUCNStatus } from '../types/biodiversity';
import type { ImportRowPreview } from '../types/provenance';
import { normalizeForComparison } from './normalizer';

// ICZN binomial: Genus (uppercase) space specific epithet (lowercase), both Latin alphabet
const BINOMIAL_REGEX = /^[A-Z][a-z]+ [a-z]+( [a-z]+)?$/;
const AUTHORSHIP_YEAR_REGEX = /\b(1[6-9]\d{2}|20[0-2]\d)\b/;
const VALID_IUCN_STATUSES: IUCNStatus[] = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'NE'];

/**
 * Validates a scientific name for ICZN binomial compliance.
 */
export function validateScientificName(name: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!name || name.trim() === '') {
    errors.push('Scientific name is required and cannot be empty.');
    return { valid: false, errors };
  }

  if (/\d/.test(name)) {
    errors.push(`Scientific name "${name}" contains numeric characters, which violates ICZN nomenclature.`);
  }

  if (!BINOMIAL_REGEX.test(name.trim())) {
    errors.push(
      `Scientific name "${name}" does not conform to ICZN binomial format. ` +
      'Expected: "Genus species" with genus capitalized and epithet lowercase (Latin alphabet only).'
    );
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validates authorship/authority string:
 * - Must not be empty
 * - Year, if present, must be within valid range for zoological nomenclature (1758–present)
 * - Parentheses must be matched
 */
export function validateAuthorship(authorship: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!authorship || authorship.trim() === '') {
    errors.push('Authorship/authority string is required.');
    return { valid: false, errors };
  }

  // Check for year validity if a year is present
  const yearMatch = authorship.match(AUTHORSHIP_YEAR_REGEX);
  if (!yearMatch) {
    // Year is optional but common; no error if absent
  } else {
    const year = parseInt(yearMatch[0], 10);
    const currentYear = new Date().getFullYear();
    if (year < 1758) {
      errors.push(
        `Authority year ${year} predates 1758, the starting point of ICZN zoological nomenclature ` +
        '(Linnaeus Systema Naturae 10th edition).'
      );
    } else if (year > currentYear) {
      errors.push(`Authority year ${year} is in the future.`);
    }
  }

  // Check matched parentheses
  const openCount = (authorship.match(/\(/g) || []).length;
  const closeCount = (authorship.match(/\)/g) || []).length;
  if (openCount !== closeCount) {
    errors.push(`Authorship "${authorship}" has unmatched parentheses (${openCount} open, ${closeCount} close).`);
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validates an IUCN status code.
 */
export function validateIUCNStatus(status: string): { valid: boolean; errors: string[] } {
  if (!status || status.trim() === '') {
    return { valid: true, errors: [] }; // Status is optional; NE is default
  }
  if (!VALID_IUCN_STATUSES.includes(status.trim().toUpperCase() as IUCNStatus)) {
    return {
      valid: false,
      errors: [`"${status}" is not a valid IUCN Red List category. Valid codes: ${VALID_IUCN_STATUSES.join(', ')}.`]
    };
  }
  return { valid: true, errors: [] };
}

/**
 * Detects duplicates for a candidate scientific name against the existing species list.
 * Checks:
 *   1. Exact binomial match (case-insensitive normalized comparison)
 *   2. Synonym collision (candidate is already a synonym in an existing record)
 *   3. Vernacular name collision (same primary English/Bangla name already assigned)
 */
export function detectDuplicates(
  candidateName: string,
  candidateCommonEn: string,
  existingRecords: SpeciesRecord[]
): { isDuplicate: boolean; duplicateOf?: string; matchType?: string } {
  const normalizedCandidate = normalizeForComparison(candidateName);

  for (const record of existingRecords) {
    // Exact binomial match
    if (normalizeForComparison(record.scientificName) === normalizedCandidate) {
      return { isDuplicate: true, duplicateOf: record.id, matchType: 'exact_binomial' };
    }

    // Check if the candidate is an existing synonym
    for (const synonym of record.synonyms) {
      if (normalizeForComparison(synonym.name) === normalizedCandidate) {
        return { isDuplicate: true, duplicateOf: record.id, matchType: 'synonym_collision' };
      }
    }

    // Check vernacular name collision (English common name)
    if (
      candidateCommonEn &&
      record.commonNames.en.some(
        cn => cn.toLowerCase().trim() === candidateCommonEn.toLowerCase().trim()
      )
    ) {
      return { isDuplicate: true, duplicateOf: record.id, matchType: 'vernacular_collision' };
    }
  }

  return { isDuplicate: false };
}

/**
 * Detects conflicts between an incoming record preview and existing records.
 * Checks:
 *   - Family mismatch: same binomial but placed in different family
 *   - Bangladesh residency conflict: contradictory occurrence assertions
 */
export function detectConflicts(
  candidateName: string,
  candidateFamily: string,
  candidateIucnGlobal: string,
  candidateIucnNational: string,
  existingRecords: SpeciesRecord[]
): { hasConflict: boolean; conflictWith?: string; conflictType?: string; detail?: string } {
  const normalizedCandidate = normalizeForComparison(candidateName);

  for (const record of existingRecords) {
    if (normalizeForComparison(record.scientificName) !== normalizedCandidate) continue;

    // Family mismatch
    if (
      candidateFamily &&
      record.taxonomy.family.toLowerCase() !== candidateFamily.toLowerCase().trim()
    ) {
      return {
        hasConflict: true,
        conflictWith: record.id,
        conflictType: 'family_mismatch',
        detail: `Candidate places ${candidateName} in family "${candidateFamily}" but existing record uses "${record.taxonomy.family}".`
      };
    }

    // IUCN global status conflict
    if (
      candidateIucnGlobal &&
      record.conservation.iucnGlobalStatus !== candidateIucnGlobal.toUpperCase().trim()
    ) {
      return {
        hasConflict: true,
        conflictWith: record.id,
        conflictType: 'iucn_status_conflict',
        detail: `Candidate IUCN Global status "${candidateIucnGlobal}" conflicts with existing value "${record.conservation.iucnGlobalStatus}".`
      };
    }

    // Bangladesh national status conflict
    if (
      candidateIucnNational &&
      record.bangladeshOccurrence.threatCategoryNational &&
      record.bangladeshOccurrence.threatCategoryNational !== candidateIucnNational.toUpperCase().trim()
    ) {
      return {
        hasConflict: true,
        conflictWith: record.id,
        conflictType: 'national_status_conflict',
        detail: `Candidate BD National status "${candidateIucnNational}" conflicts with existing value "${record.bangladeshOccurrence.threatCategoryNational}".`
      };
    }
  }

  return { hasConflict: false };
}

/**
 * Validates a complete import row preview object, attaching errors and warnings.
 * Returns the updated row preview.
 */
export function validateImportRow(
  row: ImportRowPreview,
  existingRecords: SpeciesRecord[]
): ImportRowPreview {
  const updatedRow = { ...row, errors: [...row.errors], warnings: [...row.warnings] };

  // Validate scientific name
  if (!updatedRow.parsedScientificName) {
    updatedRow.errors.push('Missing scientific_name column.');
  } else {
    const nameValidation = validateScientificName(updatedRow.parsedScientificName);
    if (!nameValidation.valid) {
      updatedRow.errors.push(...nameValidation.errors);
    }
  }

  // Validate IUCN statuses if provided
  if (updatedRow.parsedIucnGlobal) {
    const iucnValidation = validateIUCNStatus(updatedRow.parsedIucnGlobal);
    if (!iucnValidation.valid) {
      updatedRow.warnings.push(...iucnValidation.errors);
    }
  }

  if (updatedRow.parsedIucnNational) {
    const iucnNatValidation = validateIUCNStatus(updatedRow.parsedIucnNational);
    if (!iucnNatValidation.valid) {
      updatedRow.warnings.push(...iucnNatValidation.errors);
    }
  }

  // Skip further checks if name is invalid
  if (updatedRow.errors.length > 0) {
    updatedRow.status = 'invalid';
    return updatedRow;
  }

  // Duplicate detection
  const dupCheck = detectDuplicates(
    updatedRow.parsedScientificName!,
    updatedRow.parsedCommonEn || '',
    existingRecords
  );
  if (dupCheck.isDuplicate) {
    updatedRow.status = 'duplicate';
    updatedRow.duplicateOf = dupCheck.duplicateOf;
    updatedRow.warnings.push(
      `Duplicate detected: "${updatedRow.parsedScientificName}" matches existing record ` +
      `(${dupCheck.duplicateOf}) by ${dupCheck.matchType}.`
    );
    return updatedRow;
  }

  // Conflict detection
  const conflictCheck = detectConflicts(
    updatedRow.parsedScientificName!,
    updatedRow.parsedFamily || '',
    updatedRow.parsedIucnGlobal || '',
    updatedRow.parsedIucnNational || '',
    existingRecords
  );
  if (conflictCheck.hasConflict) {
    updatedRow.status = 'conflict';
    updatedRow.conflictWith = conflictCheck.conflictWith;
    updatedRow.warnings.push(conflictCheck.detail || 'Taxonomic or status conflict detected.');
    return updatedRow;
  }

  updatedRow.status = 'valid';
  return updatedRow;
}
