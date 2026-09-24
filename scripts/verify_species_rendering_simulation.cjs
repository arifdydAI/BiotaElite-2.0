/**
 * scripts/verify_species_rendering_simulation.cjs
 * Comprehensive Species Profile Rendering & Data-Mapping Simulation
 * Verifies that the rendering layer consumes Bengali monograph data in bn mode,
 * English in en mode, handles controlled fallback, and preserves scientific invariants.
 */

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  code = code.replace(/import\.meta/g, '({ env: { VITE_USE_LOCAL_FALLBACK: "true" } })');
  const js = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.React,
    }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (reqPath) => {
    if (reqPath.startsWith('../') || reqPath.startsWith('./')) {
      const resolved = path.join(path.dirname(fullPath), reqPath);
      if (fs.existsSync(resolved + '.ts')) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved + '.ts'));
      if (fs.existsSync(resolved + '.tsx')) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved + '.tsx'));
      if (fs.existsSync(resolved)) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved));
    }
    return require(reqPath);
  };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
const { getLocalizedSpeciesMonograph, isBengaliText, isBengaliArray } = loadTs('src/utils/speciesLocalization.ts');

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    process.exit(1);
  }
  console.log(`  ✓ ${message}`);
}

const BENGALI_REGEX = /[\u0980-\u09FF]/;

console.log('================================================================');
console.log('SPECIES PROFILE RENDERING & LOCALIZATION VERIFICATION SUITE');
console.log('================================================================\n');

// 1. Mandatory Taxa to Test
const MANDATORY_SPECIES = [
  { id: 'sp-eisenia-fetida', name: 'Eisenia fetida', group: 'Annelida' },
  { id: 'sp-chiloscyllium-indicum', name: 'Chiloscyllium indicum', group: 'Elasmobranchii' },
  { id: 'sp-sepia-officinalis', name: 'Sepia officinalis', group: 'Mollusca' },
  { id: 'sp-pila-globosa', name: 'Pila globosa', group: 'Mollusca' },
  { id: 'sp-scylla-olivacea', name: 'Scylla olivacea', group: 'Arthropoda' },
  { id: 'sp-daphnia-pulex', name: 'Daphnia pulex', group: 'Arthropoda' },
  { id: 'sp-duttaphrynus-melanostictus', name: 'Duttaphrynus melanostictus', group: 'Amphibia' },
  { id: 'sp-crocodylus-porosus', name: 'Crocodylus porosus', group: 'Reptilia' },
  { id: 'sp-alcedo-atthis', name: 'Alcedo atthis', group: 'Aves' },
  { id: 'sp-copsychus-saularis', name: 'Copsychus saularis', group: 'Aves' },
  { id: 'sp-orcaella-brevirostris', name: 'Orcaella brevirostris', group: 'Mammalia' },
  { id: 'sp-panthera-tigris', name: 'Panthera tigris', group: 'Mammalia' }
];

console.log('[SECTION 1] Testing Rendering for Mandatory Species in BOTH Languages:');
console.log('----------------------------------------------------------------');

for (const target of MANDATORY_SPECIES) {
  const sp = SEED_SPECIES.find(s => s.id === target.id);
  assert(Boolean(sp), `Species record exists: ${target.name} (${target.id})`);

  console.log(`\nEvaluating: ${sp.scientificName} [${target.group}]`);

  // --- Test A: English Mode ---
  const enMono = getLocalizedSpeciesMonograph(sp, 'en');
  assert(enMono.description === (sp.morphology?.description || ''), `[EN] Description strictly matches canonical English`);
  assert(enMono.diagnosticFeatures === (sp.morphology?.diagnosticFeatures || []), `[EN] Diagnostic features strictly match canonical English`);
  assert(enMono.coloration === (sp.morphology?.coloration || ''), `[EN] Coloration strictly matches canonical English`);
  assert(enMono.dietSummary === (sp.ecology?.dietSummary || ''), `[EN] Diet summary strictly matches canonical English`);
  assert(enMono.behavior === (sp.ecology?.behavior || ''), `[EN] Behavior strictly matches canonical English`);
  assert(enMono.reproduction === (sp.ecology?.reproduction || ''), `[EN] Reproduction strictly matches canonical English`);
  assert(enMono.ecologicalRole === (sp.ecology?.ecologicalRole || ''), `[EN] Ecological role strictly matches canonical English`);

  // --- Test B: Bengali Mode ---
  const bnMono = getLocalizedSpeciesMonograph(sp, 'bn');
  assert(bnMono.hasBengaliDescription, `[BN] Bengali description flag is TRUE`);
  assert(isBengaliText(bnMono.description), `[BN] Description rendered in authentic Bengali script`);
  assert(bnMono.hasBengaliDiagnosticFeatures, `[BN] Bengali diagnostic features flag is TRUE`);
  assert(isBengaliArray(bnMono.diagnosticFeatures), `[BN] Diagnostic features rendered in Bengali script`);
  
  if (sp.morphology?.coloration || sp.morphology?.colorationBn) {
    assert(isBengaliText(bnMono.coloration), `[BN] Coloration rendered in Bengali script`);
  }
  if (sp.ecology?.dietSummary || sp.ecology?.dietSummaryBn) {
    assert(isBengaliText(bnMono.dietSummary), `[BN] Diet summary rendered in Bengali script`);
  }
  if (sp.ecology?.behavior || sp.ecology?.behaviorBn) {
    assert(isBengaliText(bnMono.behavior), `[BN] Behavior rendered in Bengali script`);
  }
  if (sp.ecology?.reproduction || sp.ecology?.reproductionBn) {
    assert(isBengaliText(bnMono.reproduction), `[BN] Reproduction rendered in Bengali script`);
  }
  if (sp.ecology?.ecologicalRole || sp.ecology?.ecologicalRoleBn) {
    assert(isBengaliText(bnMono.ecologicalRole), `[BN] Ecological role rendered in Bengali script`);
  }
  if (sp.conservation?.threats?.length || sp.conservation?.threatsBn?.length) {
    assert(isBengaliArray(bnMono.threats), `[BN] Threats rendered in Bengali script`);
  }

  if (sp.bangladeshOccurrence?.present) {
    if (bnMono.bdNotes) {
      assert(isBengaliText(bnMono.bdNotes), `[BN] Bangladesh notes rendered in Bengali script`);
    }
    if (bnMono.bdRegions && bnMono.bdRegions.length > 0) {
      assert(isBengaliArray(bnMono.bdRegions), `[BN] Bangladesh regions rendered in Bengali script`);
    }
  }

  // Localized Systems and Zones
  assert(bnMono.localizedSystems.length === sp.habitat.systems.length, `[BN] Habitat systems count matches`);
  assert(bnMono.localizedZones.length === sp.habitat.zones.length, `[BN] Habitat zones count matches`);

  // --- Test C: Scientific & Taxonomic Invariance ---
  assert(sp.scientificName === target.name, `Scientific name is untouched Latin binomial`);
  assert(!BENGALI_REGEX.test(sp.scientificName), `Scientific name contains 0 Bengali characters`);
  assert(!BENGALI_REGEX.test(sp.scientificNameAuthorship), `Authorship contains 0 Bengali characters`);
  assert(!BENGALI_REGEX.test(sp.taxonomy.kingdom), `Kingdom is strictly Latin`);
  assert(!BENGALI_REGEX.test(sp.taxonomy.phylum), `Phylum is strictly Latin`);
  assert(!BENGALI_REGEX.test(sp.taxonomy.class), `Class is strictly Latin`);
  assert(!BENGALI_REGEX.test(sp.taxonomy.order), `Order is strictly Latin`);
  assert(!BENGALI_REGEX.test(sp.taxonomy.family), `Family is strictly Latin`);
  assert(!BENGALI_REGEX.test(sp.taxonomy.genus), `Genus is strictly Latin`);
  assert(!BENGALI_REGEX.test(sp.taxonomy.species), `Species taxon is strictly Latin`);
}

console.log('\n[SECTION 2] Controlled Fallback Verification:');
console.log('----------------------------------------------------------------');

// Create synthetic record lacking Bengali data
const mockUnlocalizedSpecies = {
  id: 'sp-mock-unlocalized',
  scientificName: 'Mockus testus',
  scientificNameAuthorship: 'Linnaeus, 1758',
  taxonomicStatus: 'accepted',
  synonyms: [],
  commonNames: { en: ['Mock Species'], bn: [] },
  taxonomy: {
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Actinopterygii',
    order: 'Perciformes',
    family: 'Percidae',
    genus: 'Mockus',
    species: 'Mockus testus'
  },
  morphology: {
    description: 'English description for mock species without Bengali monograph.',
    diagnosticFeatures: ['Diagnostic feature 1 in English', 'Diagnostic feature 2 in English'],
    coloration: 'Silver-grey body.'
  },
  habitat: { systems: ['freshwater'], zones: ['pelagic'] },
  bangladeshOccurrence: { present: false, regions: [], habitatTypes: [], residencyStatus: 'not_recorded' },
  ecology: {
    dietCategory: 'carnivore',
    dietSummary: 'Feeds on smaller organisms.',
    behavior: 'Active during the day.',
    reproduction: 'Broadcast spawner.',
    ecologicalRole: 'Primary aquatic predator.'
  },
  conservation: { iucnGlobalStatus: 'LC', iucnAssessmentYear: 2024, threats: ['Habitat loss'] },
  lifecycleStatus: 'published',
  isVerified: true,
  isPublished: true,
  referenceIds: [],
  media: [],
  createdAt: '2026-09-24T00:00:00Z'
};

const fallbackBn = getLocalizedSpeciesMonograph(mockUnlocalizedSpecies, 'bn');
assert(!fallbackBn.hasBengaliDescription, `Fallback hasBengaliDescription is false`);
assert(fallbackBn.description === mockUnlocalizedSpecies.morphology.description, `Description correctly falls back to English`);
assert(!fallbackBn.hasBengaliDiagnosticFeatures, `Fallback hasBengaliDiagnosticFeatures is false`);
assert(fallbackBn.diagnosticFeatures[0] === mockUnlocalizedSpecies.morphology.diagnosticFeatures[0], `Diagnostic features fall back to English`);
assert(fallbackBn.coloration === mockUnlocalizedSpecies.morphology.coloration, `Coloration falls back to English`);
assert(fallbackBn.dietSummary === mockUnlocalizedSpecies.ecology.dietSummary, `Diet summary falls back to English`);
assert(fallbackBn.behavior === mockUnlocalizedSpecies.ecology.behavior, `Behavior falls back to English`);
assert(fallbackBn.reproduction === mockUnlocalizedSpecies.ecology.reproduction, `Reproduction falls back to English`);
assert(fallbackBn.ecologicalRole === mockUnlocalizedSpecies.ecology.ecologicalRole, `Ecological role falls back to English`);
assert(fallbackBn.threats[0] === mockUnlocalizedSpecies.conservation.threats[0], `Threats fall back to English`);

console.log('\n[SECTION 3] Context Hydration Simulation:');
console.log('----------------------------------------------------------------');

// Simulate a browser opening with stale cache lacking Bengali fields
const staleCachedSpecies = SEED_SPECIES.map(s => ({
  ...s,
  morphology: {
    ...s.morphology,
    descriptionBn: undefined,
    diagnosticFeaturesBn: undefined,
    colorationBn: undefined
  },
  ecology: {
    ...s.ecology,
    dietSummaryBn: undefined,
    behaviorBn: undefined,
    reproductionBn: undefined,
    ecologicalRoleBn: undefined
  },
  conservation: {
    ...s.conservation,
    threatsBn: undefined
  }
}));

// Hydration logic as defined in BiodiversityContext:
const seedSpeciesMap = new Map(SEED_SPECIES.map(s => [s.id, s]));
const hydratedSpecies = staleCachedSpecies.map(sp => {
  const seed = seedSpeciesMap.get(sp.id);
  if (!seed) return sp;
  return {
    ...sp,
    morphology: {
      ...sp.morphology,
      descriptionBn: sp.morphology?.descriptionBn || seed.morphology?.descriptionBn,
      diagnosticFeaturesBn: (sp.morphology?.diagnosticFeaturesBn && sp.morphology.diagnosticFeaturesBn.length > 0)
        ? sp.morphology.diagnosticFeaturesBn
        : seed.morphology?.diagnosticFeaturesBn,
      colorationBn: sp.morphology?.colorationBn || seed.morphology?.colorationBn,
    },
    ecology: {
      ...sp.ecology,
      dietSummaryBn: sp.ecology?.dietSummaryBn || seed.ecology?.dietSummaryBn,
      behaviorBn: sp.ecology?.behaviorBn || seed.ecology?.behaviorBn,
      reproductionBn: sp.ecology?.reproductionBn || seed.ecology?.reproductionBn,
      ecologicalRoleBn: sp.ecology?.ecologicalRoleBn || seed.ecology?.ecologicalRoleBn,
    },
    conservation: {
      ...sp.conservation,
      threatsBn: (sp.conservation?.threatsBn && sp.conservation.threatsBn.length > 0)
        ? sp.conservation.threatsBn
        : seed.conservation?.threatsBn,
    }
  };
});

const eiseniaHydrated = hydratedSpecies.find(s => s.id === 'sp-eisenia-fetida');
assert(Boolean(eiseniaHydrated), `Eisenia fetida found in hydrated list`);
assert(isBengaliText(eiseniaHydrated.morphology.descriptionBn), `Eisenia fetida descriptionBn successfully hydrated`);
assert(isBengaliArray(eiseniaHydrated.morphology.diagnosticFeaturesBn), `Eisenia fetida diagnosticFeaturesBn successfully hydrated`);
assert(isBengaliText(eiseniaHydrated.ecology.dietSummaryBn), `Eisenia fetida dietSummaryBn successfully hydrated`);
assert(isBengaliText(eiseniaHydrated.conservation.threatsBn[0]), `Eisenia fetida threatsBn successfully hydrated`);

const eiseniaMonograph = getLocalizedSpeciesMonograph(eiseniaHydrated, 'bn');
assert(isBengaliText(eiseniaMonograph.description), `Hydrated Eisenia fetida renders Bengali description`);
assert(isBengaliArray(eiseniaMonograph.diagnosticFeatures), `Hydrated Eisenia fetida renders Bengali diagnostic features`);

console.log('\n================================================================');
console.log('✅ ALL SPECIES PROFILE RENDERING SIMULATION TESTS PASSED!');
console.log('================================================================\n');
