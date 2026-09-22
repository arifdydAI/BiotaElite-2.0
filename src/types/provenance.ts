// BiotaElite 2.0 Field-Level Provenance & Source Authority System

/**
 * Five-tier authority classification for biodiversity data sources.
 * Tier 1 is the highest (primary taxonomic literature); Tier 5 is unconfirmed observations.
 */
export type AuthorityTier =
  | 'tier_1'                          // Short form (backward compat)
  | 'tier_1_primary_literature'       // Primary taxonomic monographs & peer-reviewed journals
  | 'tier_2'                          // Short form (backward compat)
  | 'tier_2_authoritative_database'   // Global authoritative biodiversity databases (FishBase, WoRMS)
  | 'tier_3'                          // Short form (backward compat)
  | 'tier_3_government_report'        // Government/institutional technical reports (IUCN Bangladesh, DoF)
  | 'tier_4'                          // Short form (backward compat)
  | 'tier_4_secondary_literature'     // Secondary scientific literature & review articles
  | 'tier_5'                          // Short form (backward compat)
  | 'tier_5_unconfirmed';             // Preliminary or unconfirmed observations

export type FieldConfidence =
  | 'high_certainty'  // Field verified against primary literature with explicit citation
  | 'provisional'     // Field derived from secondary or database sources; awaiting primary verification
  | 'disputed';       // Field has conflicting values across different authoritative sources

/**
 * Field-level provenance record: tracks the source authority for a specific data field
 * (e.g., scientific name, Bangladesh status, global IUCN status) on a per-field basis.
 */
export interface FieldProvenance {
  sourceId: string;               // References a ReferenceSource.id
  sourceTier: AuthorityTier;
  retrievedDate: string;          // ISO 8601 date string: YYYY-MM-DD
  pageNumber?: string;            // Page or figure reference within the source
  citationText?: string;          // Full formatted citation string for display
  verifiedBy?: string;            // Reviewer/verifier name or institution
  verifiedAt?: string;            // ISO 8601 datetime when field was verified
  confidence: FieldConfidence;
  notes?: string;                 // Any additional traceability notes
}

/**
 * Provenance map: keyed by field name, value is the provenance record for that field.
 * Used within SpeciesRecord.provenance to track per-field source authority.
 */
export type ProvenanceMap = Record<string, FieldProvenance | string>;

/**
 * Batch import record: metadata about a single import operation.
 */
export interface BatchImportRecord {
  id: string;                             // Unique batch ID (UUID)
  importedAt: string;                     // ISO 8601 datetime
  importedBy: string;                     // User UID or display name
  sourceFile: string;                     // Original filename
  sourceFormat: 'csv' | 'json';
  totalRows: number;
  validRows: number;
  invalidRows: number;
  duplicateRows: number;
  conflictRows: number;
  committedCount: number;
  status: 'staged' | 'committed' | 'rolled_back';
  rollbackAt?: string;
  rollbackBy?: string;
  notes?: string;
}

/**
 * Import row preview: represents one candidate row from a batch import before committing.
 */
export interface ImportRowPreview {
  rowIndex: number;
  rawData: Record<string, string>;
  parsedScientificName?: string;
  parsedFamily?: string;
  parsedOrder?: string;
  parsedCommonEn?: string;
  parsedCommonBn?: string;
  parsedIucnGlobal?: string;
  parsedIucnNational?: string;
  status: 'valid' | 'invalid' | 'duplicate' | 'conflict' | 'missing_reference';
  errors: string[];
  warnings: string[];
  duplicateOf?: string;           // ID of existing species if duplicate detected
  conflictWith?: string;          // ID of existing species if conflict detected
}

/**
 * Full import preview report generated before committing a batch.
 */
export interface ImportPreview {
  batchId: string;
  sourceFile: string;
  totalRows: number;
  rows: ImportRowPreview[];
  summary: {
    valid: number;
    invalid: number;
    duplicates: number;
    conflicts: number;
    missingReferences: number;
  };
  generatedAt: string;
}

/**
 * Conflict record: documents a detected conflict between an incoming record and
 * an existing accepted species record.
 */
export interface ConflictRecord {
  id: string;
  importBatchId?: string;
  detectedAt: string;
  conflictType:
    | 'family_mismatch'        // Incoming record places species in different family
    | 'authorship_mismatch'    // Differing authorship / year for same binomial
    | 'bd_status_conflict'     // Conflicting Bangladesh residency or occurrence assertions
    | 'iucn_status_conflict'   // Conflicting global IUCN status
    | 'national_status_conflict' // Conflicting Bangladesh Red List status
    | 'synonym_collision';     // Synonym listed as accepted in another record
  existingSpeciesId: string;
  conflictingValue: string;
  existingValue: string;
  field: string;
  resolution?: 'accept_incoming' | 'keep_existing' | 'manual_merge' | 'deferred';
  resolvedAt?: string;
  resolvedBy?: string;
  resolutionNote?: string;
}

/**
 * Duplicate detection report for a single candidate record.
 */
export interface DuplicateReport {
  candidateScientificName: string;
  matchType: 'exact_binomial' | 'normalized_lowercase' | 'synonym_collision' | 'vernacular_collision';
  existingSpeciesId: string;
  existingScientificName: string;
  similarity?: number;           // 0.0–1.0 for fuzzy matches
  recommendation: 'reject_as_duplicate' | 'review_as_possible_duplicate' | 'merge_as_synonym';
}
