// BiotaElite 2.0 Matrix-Based Character Types for Multi-Entry Identification Engine

/**
 * Body form categories for the morphological identification matrix.
 */
export type BodyForm =
  | 'fusiform'              // Streamlined, torpedo-shaped (e.g., tuna, hilsa)
  | 'laterally_compressed'  // Disc-like, flattened from side to side (e.g., chital, rohu)
  | 'cylindrical'           // Rounded cross-section, elongated (e.g., moray eel)
  | 'eel_like'              // Extremely elongated, snake-like (e.g., baim, mastacembelids)
  | 'depressed'             // Flattened dorso-ventrally (e.g., rays, catfishes)
  | 'deep_oval'             // Tall oval body (e.g., some cichlids, moonfishes)
  | 'unknown';

export type BarbelsPresent =
  | 'absent'
  | '1_pair'                // One pair (maxillary or nasal)
  | '2_pairs'               // Two pairs (maxillary + mandibular/nasal)
  | '4_pairs'               // Four pairs (siluriform catfishes)
  | 'more_than_4_pairs'
  | 'unknown';

export type MouthPosition =
  | 'terminal'              // At tip of snout
  | 'inferior'              // Below snout (bottom feeders)
  | 'superior'              // Facing upward (surface feeders)
  | 'unknown';

export type ScaleCoverage =
  | 'completely_scaled_cycloid'   // Smooth cycloid scales all over (carps, hilsa)
  | 'completely_scaled_ctenoid'   // Ctenoid (rough-edged) scales all over
  | 'scaleless_naked'             // No scales (catfishes like shing, magur)
  | 'partially_scaled'            // Scales on parts of body only
  | 'bony_plates'                 // Bony plates/scutes (as in some loaches)
  | 'unknown';

export type SalinitySystem =
  | 'freshwater'
  | 'brackish'
  | 'marine'
  | 'unknown';

export type FinCharacteristic =
  | 'adipose_fin_present'           // Small fleshy fin between dorsal and caudal (catfishes)
  | 'dorsal_serrated_spine_present' // Hard, serrated dorsal spine (catfishes, perches)
  | 'continuous_dorsal_caudal'      // Dorsal and caudal fin continuous (eels, baim)
  | 'pelvic_fin_absent'             // No ventral/pelvic fins (eels)
  | 'forked_caudal'                 // Deeply forked caudal fin (hilsa, carps)
  | 'rounded_caudal'                // Rounded caudal fin (gobies, murrels)
  | 'dorsal_fin_absent'             // No dorsal fin
  | 'unknown';

/**
 * Observation certainty for matrix identification engine.
 * Allows the user to mark traits as confirmed, uncertain, or not applicable.
 */
export type ObservationCertainty =
  | 'confirmed'        // Trait observed with certainty
  | 'uncertain'        // Trait possibly observed but not certain
  | 'not_applicable'   // Trait cannot apply (e.g., asking about barbels on a mammal)
  | 'not_observed';    // Trait not visible in specimen

/**
 * A single matrix character observation: the user's input trait with certainty.
 */
export interface MatrixCharacterObservation {
  characterId: string;
  value: string;
  certainty: ObservationCertainty;
}

/**
 * Matrix character definition: defines a single identifiable character for the matrix key.
 */
export interface MatrixCharacter {
  id: string;
  label: string;
  description: string;
  characterGroup: 'body_form' | 'mouth' | 'fins' | 'scales' | 'barbels' | 'habitat' | 'size' | 'other';
  possibleValues: {
    value: string;
    label: string;
    description?: string;
  }[];
  allowsUnknown: boolean;
}

/**
 * Matrix identification match result for a species candidate.
 */
export interface MatrixMatchResult {
  speciesId: string;
  scientificName: string;
  commonNameEn: string;
  commonNameBn: string;
  matchScore: number;             // 0.0–1.0 weighted match score
  confirmedTraits: number;        // Count of traits that match with confirmed certainty
  totalScoredTraits: number;      // Total scored character slots
  confidence: 'confirmed_diagnostic' | 'likely_match' | 'possible_match' | 'unlikely';
  matchedCharacters: {
    characterId: string;
    label: string;
    observedValue: string;
    speciesValue: string;
    matched: boolean;
  }[];
  diagnosticNotes?: string;
}

/**
 * Matrix character profile for a species: maps character IDs to expected trait values.
 * Used by the identification engine to score candidate species against observations.
 */
export interface SpeciesMatrixProfile {
  speciesId: string;
  characters: Record<string, string>;  // characterId → expected trait value
}
