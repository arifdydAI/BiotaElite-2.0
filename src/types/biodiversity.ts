// BiotaElite 2.0 Biodiversity & Zoological Data Types
import type { ProvenanceMap } from './provenance';
export type { ProvenanceMap };

export type TaxonomicRank = 
  | 'kingdom' 
  | 'phylum' 
  | 'subphylum'
  | 'infraphylum'
  | 'superclass'
  | 'class' 
  | 'subclass'
  | 'infraclass'
  | 'superorder'
  | 'order' 
  | 'suborder'
  | 'infraorder'
  | 'superfamily'
  | 'family' 
  | 'subfamily'
  | 'genus' 
  | 'species' 
  | 'subspecies'
  | 'grade';

export type IUCNStatus = 
  | 'EX' // Extinct
  | 'EW' // Extinct in the Wild
  | 'CR' // Critically Endangered
  | 'EN' // Endangered
  | 'VU' // Vulnerable
  | 'NT' // Near Threatened
  | 'LC' // Least Concern
  | 'DD' // Data Deficient
  | 'NE'; // Not Evaluated

export type LifecycleStatus = 
  | 'draft' 
  | 'under_review' 
  | 'verified' 
  | 'published' 
  | 'archived' 
  | 'rejected'
  | 'requires_review';

export type AquaticSystem = 'freshwater' | 'marine' | 'brackish' | 'terrestrial';

export type BangladeshResidency = 
  | 'native' 
  | 'resident'
  | 'migrant'
  | 'endemic' 
  | 'introduced' 
  | 'invasive'
  | 'extirpated'
  | 'uncertain'
  | 'not_recorded';

export interface SynonymRecord {
  name: string;
  authorship: string;
  status: 'homotypic' | 'heterotypic' | 'misapplied' | 'provisional';
  year?: number;
  isBasionym?: boolean;    // True if this is the original basionym before combination
  sourceId?: string;       // Reference ID supporting this synonymy
}

export type ImageVerificationStatus = 'verified' | 'pending' | 'rejected' | 'unavailable';
export type SpeciesVerificationStatus = 'verified' | 'pending' | 'rejected' | 'published' | 'archived';

export interface MediaMetadata {
  id: string;
  speciesId?: string;
  taxonId?: string;
  url: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  caption: string;
  sourceName?: string;
  sourceUrl: string;
  photographer?: string;
  creator?: string;
  institution?: string;
  license: 'CC0' | 'CC-BY' | 'CC-BY-SA' | 'CC-BY-NC' | 'Public Domain' | 'All Rights Reserved (Permitted)' | string;
  attribution?: string;
  isVerified: boolean;
  verificationStatus: ImageVerificationStatus;
  type?: 'specimen_photo' | 'habitat_photo' | 'diagnostic_drawing' | 'distribution_map' | 'field_photo' | 'scientific_illustration' | 'unverified';
  imageType?: 'specimen_photo' | 'habitat_photo' | 'diagnostic_drawing' | 'distribution_map' | 'field_photo' | 'scientific_illustration' | 'unverified';
  width?: number;
  height?: number;
  rating?: number;
  verifiedBy?: string;
  verifiedAt?: string;
  notes?: string;
}

export type ImageRecord = MediaMetadata;

export interface SpeciesRecord {
  id: string;
  scientificName: string;
  scientificNameAuthorship: string;
  taxonomicStatus: 'accepted' | 'synonym' | 'provisionally_accepted';
  acceptedNameId?: string;
  synonyms: SynonymRecord[];
  
  commonNames: {
    en: string[];
    bn: string[];
  };

  taxonomy: {
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    species: string;
    subspecies?: string;
  };

  taxonId?: string; // Stable ID referencing genus or taxon node
  module?: 'fish' | 'marine' | 'general'; // Strict module separation

  morphology: {
    diagnosticFeatures: string[];
    description: string;
    maxStandardLengthCm?: number;
    dorsalSpinesRays?: string;
    analSpinesRays?: string;
    coloration?: string;
  };

  habitat: {
    systems: AquaticSystem[];
    zones: string[];
    depthRangeMeters?: { min: number; max: number };
    temperatureRangeC?: { min: number; max: number };
    elevationMeters?: { min: number; max: number };
  };

  bangladeshOccurrence: {
    present: boolean;
    regions: string[];
    habitatTypes: string[];
    residencyStatus: BangladeshResidency;
    residency?: string;
    threatCategoryNational?: IUCNStatus;
    bangladeshNationalStatus?: IUCNStatus;
    nationalAssessmentYear?: number;
    nationalStatusSource?: string;
    localNamesBn?: string[];
    seasonalNotes?: string;
    notes?: string;
  };

  ecology: {
    dietCategory?: 'carnivore' | 'herbivore' | 'omnivore' | 'planktivore' | 'detritivore' | 'filter_feeder';
    dietSummary?: string;
    behavior?: string;
    reproduction?: string;
    ecologicalRole?: string;
  };

  conservation: {
    iucnGlobalStatus: IUCNStatus;
    globalIucnStatus?: IUCNStatus;
    iucnAssessmentYear: number;
    globalAssessmentYear?: number;
    globalStatusSource?: string;
    bangladeshNationalStatus?: IUCNStatus;
    nationalAssessmentYear?: number;
    nationalStatusSource?: string;
    iucnCriteria?: string;
    threats: string[];
    citesAppendix?: 'I' | 'II' | 'III' | 'None';
  };

  lifecycleStatus: LifecycleStatus;
  isVerified: boolean;
  speciesVerificationStatus?: SpeciesVerificationStatus;
  imageVerificationStatus?: ImageVerificationStatus;
  speciesPriority?: SpeciesPriorityLevel;
  isPublished: boolean;
  referenceIds: string[];
  media: MediaMetadata[];

  // MASTER-BUILD-02: Provenance, versioning & batch import tracking
  provenance?: ProvenanceMap;           // Field-level source authority mapping
  version?: number;                     // Increments on each verified update
  previousVersionId?: string;           // ID of prior version for audit trail
  importBatchId?: string;               // Links record to a batch import operation
  dataCompleteness?: number;            // 0–100: percentage of optional fields populated

  createdAt: string;
  updatedAt: string;
  verifiedAt?: string;
  verifiedBy?: string;
}

export interface TaxonSourceReference {
  source: string;
  citation?: string;
  sourceId?: string;
  url?: string;
  notes?: string;
}

export interface TaxonNode {
  id: string;                         // Stable identifier, e.g. 'txn-osteichthyes'
  scientificName: string;             // Canonical Latin name
  name: string;                       // Backwards-compatibility alias for scientificName
  rank: TaxonomicRank;                // Explicit taxonomic rank
  parentTaxonId: string | null;       // Parent taxon ID in normalized graph
  parentId: string | null;            // Backwards-compatibility alias for parentTaxonId
  acceptedName?: string;              // Accepted scientific name if synonym
  acceptedTaxonId?: string;           // Target taxon ID if synonym
  synonymOf?: string;                 // Scientific name of accepted taxon
  status?: 'accepted' | 'synonym' | 'uncertain';
  module?: 'fish' | 'marine' | 'general';
  geographicScope?: string[];
  sourceReferences?: TaxonSourceReference[];
  isVerified?: boolean;
  commonName?: string;
  commonNameEn?: string;
  commonNameBn?: string;
  banglaName?: string;
  authorYear?: string;
  description?: string;
  speciesCount?: number;
}

export interface ReferenceSource {
  id: string;
  title: string;
  authors: string[];
  year: number;
  sourceType: 'journal_article' | 'monograph' | 'database' | 'government_report' | 'iucn_assessment';
  publicationName: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  authorityTier:
    | 'tier_1_primary_literature'       // Primary taxonomic monographs, peer-reviewed journals
    | 'tier_2_authoritative_database'   // FishBase, WoRMS, Catalog of Fishes, GBIF
    | 'tier_3_government_report'        // IUCN Bangladesh, DoF, BFRI technical reports
    | 'tier_4_secondary_literature'     // Review articles, textbooks
    | 'tier_5_observation';             // Preliminary or grey literature observations
  accessedDate?: string;
  notes?: string;
}

export type KeyScope = 'global' | 'bangladesh';
export type KeyType = 'dichotomous' | 'multichoice' | 'matrix';
export type KeyEducationalLevel = 'introductory' | 'intermediate' | 'advanced' | 'professional';
export type KeyResultType = 'species' | 'taxon' | 'next_step' | 'unresolved';
export type KeyMajorGroup =
  | 'major_groups'
  | 'invertebrates'
  | 'vertebrates'
  | 'fishes'
  | 'amphibia'
  | 'reptilia'
  | 'aves'
  | 'mammalia'
  | 'porifera'
  | 'cnidaria'
  | 'mollusca'
  | 'arthropoda'
  | 'echinodermata'
  | 'annelida';

export interface KeyStepOption {
  id?: string;
  lead: string;
  leadBn?: string;
  diagnosticFeature: string;
  diagnosticFeatureBn?: string;
  resultType: KeyResultType;
  speciesId?: string;
  taxonId?: string;
  nextStepId?: number;
  candidateTaxonIds?: string[];
  rationaleEn?: string;
  rationaleBn?: string;
}

export interface KeyStep {
  id: number;
  title?: string;
  titleBn?: string;
  character?: string;
  characterBn?: string;
  couplets: KeyStepOption[];
}

export interface IdentificationKey {
  id: string;
  title: string;
  titleBn?: string;
  scope: KeyScope;
  targetTaxonId?: string;
  targetTaxonRank?: TaxonomicRank;
  majorGroup?: KeyMajorGroup;
  taxonScope: string;
  taxonScopeBn?: string;
  description: string;
  descriptionBn?: string;
  educationalLevel?: KeyEducationalLevel;
  keyType?: KeyType;
  steps: KeyStep[];
  sourceReferenceIds?: string[];
  verificationStatus?: LifecycleStatus;
}

export interface BilingualText {
  en: string;
  bn: string;
}

export interface TaxonKnowledgeSection {
  key: string;
  titleEn: string;
  titleBn: string;
  contentEn: string;
  contentBn: string;
  order: number;
  icon?: string;
  keyFeatures?: { en: string[]; bn: string[] };
  references?: string[];
  verificationStatus?: LifecycleStatus;
}

export interface TaxonKnowledgeRecord {
  id: string;
  taxonId?: string; // Stable reference to TaxonNode
  rank: TaxonomicRank;
  scientificName: string;
  bengaliName: string;
  englishName: string;
  parentTaxonId: string | null;
  category: 'fish' | 'marine_non_fish' | 'general' | 'zoology';
  canonicalSlug?: string;
  classificationHierarchy: { rank: string; name: string; nameBn?: string }[];
  shortDescription: BilingualText;

  // Optional configurable biology-specific sections for Major Zoological Groups
  sections?: TaxonKnowledgeSection[];

  // 11 Order-Level Knowledge Categories (Zoological Standard):
  // 1. Classification (classificationHierarchy + authoritySource)
  // 2. Diagnostic Identifying Characteristics
  diagnosticCharacteristics: BilingualText & { keyFeatures?: { en: string[]; bn: string[] } };
  // 3. Habitat
  habitat: BilingualText & { systems?: AquaticSystem[] };
  // 4. Ecosystem
  ecosystem: BilingualText;
  // 5. Feeding
  feeding: BilingualText;
  // 6. Reproduction
  reproduction: BilingualText;
  // 7. Distribution
  distribution: BilingualText;
  subclasses?: Array<{ id: string; name: string; commonEn: string; commonBn: string; descriptionEn: string; descriptionBn: string }>;
  orders?: string[];
  // 8. Important Families
  importantFamilies?: Array<{
    name: string;
    commonEn?: string;
    commonBn?: string;
    diagnosticEn?: string;
    diagnosticBn?: string;
  }>;
  // 9. Scientific Names (distinct category)
  scientificNamesSummary?: BilingualText;
  // 10. Examples (distinct category)
  exampleSpeciesIds: string[];
  examplesSummary?: BilingualText;
  // 11. Additional Taxonomic / Biological Information (distinct category)
  additionalInformation?: BilingualText;

  referenceIds: string[];
  authoritySource: string;
  verificationStatus: LifecycleStatus;
  publishedStatus: boolean;
  notes?: string;
}

export const TaxonKnowledgeRecord = {};
export const SpeciesRecord = {};

// MASTER-FIX-14: Educational & Textbook Species Display Priority
export type SpeciesPriorityLevel = 1 | 2 | 3 | 'common_educational' | 'scientifically_important' | 'broader_representative';

export function getSpeciesPriorityRank(s: SpeciesRecord): number {
  if (s.speciesPriority === 1 || s.speciesPriority === 'common_educational') return 1;
  if (s.speciesPriority === 2 || s.speciesPriority === 'scientifically_important') return 2;
  if (s.speciesPriority === 3 || s.speciesPriority === 'broader_representative') return 3;
  return 2; // Default to scientifically important if unspecified
}

export function compareSpeciesByPriority(a: SpeciesRecord, b: SpeciesRecord): number {
  const pA = getSpeciesPriorityRank(a);
  const pB = getSpeciesPriorityRank(b);
  if (pA !== pB) return pA - pB;
  return a.scientificName.localeCompare(b.scientificName);
}
