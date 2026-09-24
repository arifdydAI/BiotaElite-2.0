// BiotaElite 2.0 Species Monograph Localization & Field-Level Resolution Engine
import type { SpeciesRecord } from '../types/biodiversity';

export interface LocalizedSpeciesMonograph {
  // Descriptive Monograph Sections
  description: string;
  hasBengaliDescription: boolean;

  diagnosticFeatures: string[];
  hasBengaliDiagnosticFeatures: boolean;

  coloration: string;
  hasBengaliColoration: boolean;

  dietSummary: string;
  hasBengaliDietSummary: boolean;

  behavior: string;
  hasBengaliBehavior: boolean;

  reproduction: string;
  hasBengaliReproduction: boolean;

  ecologicalRole: string;
  hasBengaliEcologicalRole: boolean;

  threats: string[];
  hasBengaliThreats: boolean;

  conservationExplanation: string;
  hasBengaliConservation: boolean;

  habitatNotes: string;
  hasBengaliHabitatNotes: boolean;

  bdRegions: string[];
  hasBengaliBdRegions: boolean;

  bdSeasonalNotes: string;
  hasBengaliBdSeasonalNotes: boolean;

  bdNotes: string;
  hasBengaliBdNotes: boolean;

  distribution: string;
  hasBengaliDistribution: boolean;

  researchSignificance: string;
  hasBengaliResearchSignificance: boolean;

  similarSpecies: string[];
  hasBengaliSimilarSpecies: boolean;

  // Ecological & Habitat Categorical Mappings
  localizedDietCategory: string;
  localizedSystems: string[];
  localizedZones: string[];
}

const BENGALI_REGEX = /[\u0980-\u09FF]/;

export function isBengaliText(val: unknown): val is string {
  return typeof val === 'string' && val.trim().length > 0 && BENGALI_REGEX.test(val);
}

export function isBengaliArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.length > 0 && arr.some(item => isBengaliText(item));
}

// Curated Zoological Ecological Dictionaries
export const DIET_CATEGORY_BN: Record<string, string> = {
  carnivore: 'মাংসাশী (Carnivore)',
  herbivore: 'তৃণভোজী (Herbivore)',
  omnivore: 'সর্বভুক (Omnivore)',
  planktivore: 'প্ল্যাঙ্কটনভোজী (Planktivore)',
  detritivore: 'পচনভোজী / ডেট্রিটিভোর (Detritivore)',
  filter_feeder: 'পরিশ্রাবণভোজী / ফিল্টার ফিডার (Filter Feeder)',
};

export const HABITAT_SYSTEM_BN: Record<string, string> = {
  terrestrial: 'স্থলজ',
  marine: 'সামুদ্রিক',
  freshwater: 'মিঠাপানি',
  brackish: 'লোনাপানি / মোহনা',
};

export const ECOLOGICAL_ZONE_BN: Record<string, string> = {
  'epigeic': 'এপিজেইক (মাটির উপরিভাগ)',
  'endogeic': 'এন্ডোজেইক (মাটির অভ্যন্তর)',
  'anecic': 'অ্যানেসিক (গভীর মাটি)',
  'humus-rich soil': 'হিউমাসসমৃদ্ধ মাটি',
  'organic litter layer': 'জৈব স্তুপ ও পাতার স্তর',
  'demersal': 'তলদেশীয় (Demersal)',
  'pelagic': 'ভাসমান (Pelagic)',
  'neritic': 'নেরিটিক উপকূলীয় অঞ্চল',
  'neritic continental shelf': 'নেরিটিক মহীসোপান',
  'benthic': 'বেন্থিক গভীর তলদেশ',
  'littoral': 'উপকূলীয় জোয়ার-ভাটা অঞ্চল',
  'sublittoral': 'সাবলিটোরাল অগভীর অঞ্চল',
  'intertidal': 'আন্তঃজোয়ার অঞ্চল',
  'coral reef': 'প্রবাল প্রাচীর',
  'coral reef fringes': 'প্রবাল প্রাচীর কিনারা',
  'coral reef rubble': 'প্রবাল খণ্ডস্তর',
  'tidal flats': 'জোয়ার-ভাটার কাদাভূমি',
  'inshore rocky reefs': 'উপকূলবর্তী পাথুরে প্রাচীর',
  'sandy-mud continental shelf': 'বালু-কাদাময় মহীসোপান',
  'estuarine': 'মোহনা অঞ্চল',
  'mangrove': 'ম্যানগ্রোভ বাস্তুতন্ত্র',
  'freshwater rivers': 'মিঠাপানির নদী',
  'floodplains': 'প্লাবনভূমি',
  'haor basins': 'হাওর অববাহিকা',
  'deep sea': 'গভীর সমুদ্র',
  'oceanic': 'উন্মুক্ত মহাসাগর',
  'vermicomposting beds': 'ভার্মিকম্পোস্ট চাষস্তর',
  'agricultural humus': 'কৃষি হিউমাস মাটি',
  'organic gardens': 'জৈব বাগান',
};

/**
 * Resolves a species record into localized monograph display content.
 * Strictly respects language mode:
 * - When language === 'en': returns authoritative English fields without translation.
 * - When language === 'bn': prefers rich Bengali (*_bn, *Bn) monograph content.
 *   If Bengali content is genuinely absent, gracefully falls back to English.
 * - Never modifies scientific names, author citations, taxonomy, or IUCN status codes.
 */
export function getLocalizedSpeciesMonograph(
  species: SpeciesRecord,
  language: 'en' | 'bn'
): LocalizedSpeciesMonograph {
  const isBn = language === 'bn';

  // 1. Description / Overview
  const rawDescBn = isBn
    ? (species.morphology?.descriptionBn ||
       species.morphology?.description_bn ||
       species.morphology_bn ||
       species.description_bn ||
       species.descriptionBn)
    : undefined;
  const hasBengaliDescription = Boolean(rawDescBn && typeof rawDescBn === 'string' && rawDescBn.trim().length > 0);
  const description = (isBn && hasBengaliDescription)
    ? rawDescBn!.trim()
    : (species.morphology?.description || '');

  // 2. Diagnostic Features
  const rawDiagBn = isBn
    ? (species.morphology?.diagnosticFeaturesBn ||
       species.morphology?.diagnostic_features_bn ||
       (species as any)?.diagnosticFeatures_bn ||
       (species as any)?.diagnostic_features_bn)
    : undefined;
  const hasBengaliDiagnosticFeatures = Boolean(Array.isArray(rawDiagBn) && rawDiagBn.length > 0 && rawDiagBn.some(f => typeof f === 'string' && f.trim().length > 0));
  const diagnosticFeatures = (isBn && hasBengaliDiagnosticFeatures)
    ? (rawDiagBn as string[]).filter(f => typeof f === 'string' && f.trim().length > 0)
    : (species.morphology?.diagnosticFeatures || []);

  // 3. Coloration
  const rawColorBn = isBn
    ? (species.morphology?.colorationBn ||
       species.morphology?.coloration_bn ||
       (species as any)?.coloration_bn ||
       (species as any)?.colorationBn)
    : undefined;
  const hasBengaliColoration = Boolean(rawColorBn && typeof rawColorBn === 'string' && rawColorBn.trim().length > 0);
  const coloration = (isBn && hasBengaliColoration)
    ? rawColorBn!.trim()
    : (species.morphology?.coloration || '');

  // 4. Feeding / Diet Summary
  const rawDietBn = isBn
    ? (species.ecology?.dietSummaryBn ||
       species.ecology?.diet_summary_bn ||
       (species as any)?.dietSummary_bn ||
       (species as any)?.diet_bn ||
       (species as any)?.dietSummaryBn)
    : undefined;
  const hasBengaliDietSummary = Boolean(rawDietBn && typeof rawDietBn === 'string' && rawDietBn.trim().length > 0);
  const dietSummary = (isBn && hasBengaliDietSummary)
    ? rawDietBn!.trim()
    : (species.ecology?.dietSummary || '');

  // 5. Behaviour
  const rawBehavBn = isBn
    ? (species.ecology?.behaviorBn ||
       species.ecology?.behavior_bn ||
       (species as any)?.behavior_bn ||
       (species as any)?.behaviorBn)
    : undefined;
  const hasBengaliBehavior = Boolean(rawBehavBn && typeof rawBehavBn === 'string' && rawBehavBn.trim().length > 0);
  const behavior = (isBn && hasBengaliBehavior)
    ? rawBehavBn!.trim()
    : (species.ecology?.behavior || '');

  // 6. Reproduction / Life Cycle
  const rawReproBn = isBn
    ? (species.ecology?.reproductionBn ||
       species.ecology?.reproduction_bn ||
       species.reproduction_bn ||
       species.reproductionBn)
    : undefined;
  const hasBengaliReproduction = Boolean(rawReproBn && typeof rawReproBn === 'string' && rawReproBn.trim().length > 0);
  const reproduction = (isBn && hasBengaliReproduction)
    ? rawReproBn!.trim()
    : (species.ecology?.reproduction || '');

  // 7. Ecological Role
  const rawRoleBn = isBn
    ? (species.ecology?.ecologicalRoleBn ||
       species.ecology?.ecological_role_bn ||
       species.ecologicalRole_bn ||
       species.ecologicalRoleBn)
    : undefined;
  const hasBengaliEcologicalRole = Boolean(rawRoleBn && typeof rawRoleBn === 'string' && rawRoleBn.trim().length > 0);
  const ecologicalRole = (isBn && hasBengaliEcologicalRole)
    ? rawRoleBn!.trim()
    : (species.ecology?.ecologicalRole || '');

  // 8. Threats
  let rawThreatsBn = isBn
    ? (species.conservation?.threatsBn ||
       species.conservation?.threats_bn ||
       species.threats_bn ||
       species.threatsBn)
    : undefined;
  if (typeof rawThreatsBn === 'string') {
    rawThreatsBn = [rawThreatsBn];
  }
  const hasBengaliThreats = Boolean(Array.isArray(rawThreatsBn) && rawThreatsBn.length > 0 && rawThreatsBn.some(t => typeof t === 'string' && t.trim().length > 0));
  const threats = (isBn && hasBengaliThreats)
    ? (rawThreatsBn as string[]).filter(t => typeof t === 'string' && t.trim().length > 0)
    : (species.conservation?.threats || []);

  // 9. Conservation Explanation
  const rawConservBn = isBn
    ? (species.conservation?.descriptionBn ||
       species.conservation?.conservation_bn ||
       species.conservation_bn ||
       species.conservationBn)
    : undefined;
  const hasBengaliConservation = Boolean(rawConservBn && typeof rawConservBn === 'string' && rawConservBn.trim().length > 0);
  const conservationExplanation = (isBn && hasBengaliConservation)
    ? rawConservBn!.trim()
    : (species.conservation?.description || '');

  // 10. Habitat Notes
  const rawHabBn = isBn
    ? (species.habitat?.descriptionBn ||
       species.habitat?.habitat_bn ||
       species.habitat?.notesBn ||
       species.habitat_bn ||
       species.habitatBn)
    : undefined;
  const hasBengaliHabitatNotes = Boolean(rawHabBn && typeof rawHabBn === 'string' && rawHabBn.trim().length > 0);
  const habitatNotes = (isBn && hasBengaliHabitatNotes)
    ? rawHabBn!.trim()
    : (species.habitat?.description || '');

  // 11. Bangladesh Occurrence Regions
  const rawRegionsBn = isBn
    ? (species.bangladeshOccurrence?.regionsBn ||
       species.bangladeshOccurrence?.regions_bn)
    : undefined;
  const hasBengaliBdRegions = Boolean(Array.isArray(rawRegionsBn) && rawRegionsBn.length > 0 && rawRegionsBn.some(r => typeof r === 'string' && r.trim().length > 0));
  const bdRegions = (isBn && hasBengaliBdRegions)
    ? (rawRegionsBn as string[]).filter(r => typeof r === 'string' && r.trim().length > 0)
    : (species.bangladeshOccurrence?.regions || []);

  // 12. Bangladesh Seasonal Notes
  const rawSeasonalBn = isBn
    ? (species.bangladeshOccurrence?.seasonalNotesBn ||
       species.bangladeshOccurrence?.seasonal_notes_bn)
    : undefined;
  const hasBengaliBdSeasonalNotes = Boolean(rawSeasonalBn && typeof rawSeasonalBn === 'string' && rawSeasonalBn.trim().length > 0);
  const bdSeasonalNotes = (isBn && hasBengaliBdSeasonalNotes)
    ? rawSeasonalBn!.trim()
    : (species.bangladeshOccurrence?.seasonalNotes || '');

  // 13. Bangladesh Regional & Local Significance Notes
  const rawBdNotesBn = isBn
    ? (species.bangladeshOccurrence?.notesBn ||
       species.bangladeshOccurrence?.notes_bn)
    : undefined;
  const hasBengaliBdNotes = Boolean(rawBdNotesBn && typeof rawBdNotesBn === 'string' && rawBdNotesBn.trim().length > 0);
  const bdNotes = (isBn && hasBengaliBdNotes)
    ? rawBdNotesBn!.trim()
    : (species.bangladeshOccurrence?.notes || '');

  // 14. Distribution
  const rawDistBn = isBn
    ? (species.bangladeshOccurrence?.distribution_bn ||
       species.bangladeshOccurrence?.distributionBn ||
       species.distribution_bn ||
       species.distributionBn ||
       rawBdNotesBn)
    : undefined;
  const hasBengaliDistribution = Boolean(rawDistBn && typeof rawDistBn === 'string' && rawDistBn.trim().length > 0);
  const distribution = (isBn && hasBengaliDistribution)
    ? rawDistBn!.trim()
    : (species.bangladeshOccurrence?.notes || '');

  // 15. Research Significance
  const rawResBn = isBn
    ? (species.researchSignificanceBn ||
       species.researchSignificance_bn ||
       (species as any)?.research_significance_bn)
    : undefined;
  const hasBengaliResearchSignificance = Boolean(rawResBn && typeof rawResBn === 'string' && rawResBn.trim().length > 0);
  const researchSignificance = (isBn && hasBengaliResearchSignificance)
    ? rawResBn!.trim()
    : (species.researchSignificance || '');

  // 16. Similar Species & Differential Diagnosis
  let rawSimBn = isBn
    ? (species.similarSpeciesBn ||
       species.similar_species_bn)
    : undefined;
  if (typeof rawSimBn === 'string') {
    rawSimBn = [rawSimBn];
  }
  const hasBengaliSimilarSpecies = Boolean(Array.isArray(rawSimBn) && rawSimBn.length > 0 && rawSimBn.some(s => typeof s === 'string' && s.trim().length > 0));
  const similarSpecies = (isBn && hasBengaliSimilarSpecies)
    ? (rawSimBn as string[]).filter(s => typeof s === 'string' && s.trim().length > 0)
    : (species.similarSpecies || []);

  // 17. Localized Diet Category
  let localizedDietCategory = species.ecology?.dietCategory || '';
  if (isBn && species.ecology?.dietCategory) {
    localizedDietCategory = DIET_CATEGORY_BN[species.ecology.dietCategory] || species.ecology.dietCategory;
  }

  // 18. Localized Habitat Systems
  const rawSystems = species.habitat?.systems || [];
  const localizedSystems = rawSystems.map(sys => {
    if (isBn && HABITAT_SYSTEM_BN[sys]) {
      return HABITAT_SYSTEM_BN[sys];
    }
    return sys;
  });

  // 19. Localized Ecological Zones
  const rawZones = species.habitat?.zones || [];
  const localizedZones = rawZones.map(zone => {
    if (isBn && ECOLOGICAL_ZONE_BN[zone.toLowerCase()]) {
      return ECOLOGICAL_ZONE_BN[zone.toLowerCase()];
    }
    return zone;
  });

  return {
    description,
    hasBengaliDescription,
    diagnosticFeatures,
    hasBengaliDiagnosticFeatures,
    coloration,
    hasBengaliColoration,
    dietSummary,
    hasBengaliDietSummary,
    behavior,
    hasBengaliBehavior,
    reproduction,
    hasBengaliReproduction,
    ecologicalRole,
    hasBengaliEcologicalRole,
    threats,
    hasBengaliThreats,
    conservationExplanation,
    hasBengaliConservation,
    habitatNotes,
    hasBengaliHabitatNotes,
    bdRegions,
    hasBengaliBdRegions,
    bdSeasonalNotes,
    hasBengaliBdSeasonalNotes,
    bdNotes,
    hasBengaliBdNotes,
    distribution,
    hasBengaliDistribution,
    researchSignificance,
    hasBengaliResearchSignificance,
    similarSpecies,
    hasBengaliSimilarSpecies,
    localizedDietCategory,
    localizedSystems,
    localizedZones,
  };
}
