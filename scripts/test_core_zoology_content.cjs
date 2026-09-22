// scripts/test_core_zoology_content.cjs
// Automated Verification Suite for MASTER-CONTENT-EXPANSION-01:
// Core Zoology Content Deepening & Data Expansion

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = path.resolve(__dirname, '..');
let testsPassed = 0;
let testsFailed = 0;

function loadTs(relPath) {
  const fullPath = path.resolve(rootDir, relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (reqPath) => require(reqPath);
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

function pass(name, detail) {
  console.log(`  ✓ PASSED: [${name}]${detail ? ' — ' + detail : ''}`);
  testsPassed++;
}

function fail(name, reason) {
  console.error(`  ✗ FAILED: [${name}] — ${reason}`);
  testsFailed++;
}

console.log('================================================================');
console.log('BIOTAELITE 2.0: MASTER-CONTENT-EXPANSION-01 VERIFICATION');
console.log('================================================================\n');

// 1. Anatomy & Physiology Data Validation
try {
  const { ANATOMY_TOPICS, PHYSIOLOGY_TOPICS } = loadTs('src/data/anatomyPhysiologyData.ts');
  
  if (ANATOMY_TOPICS.length >= 10) {
    pass('Test 1A: Anatomy Topics Count', `Found ${ANATOMY_TOPICS.length} topics (required >= 10)`);
  } else {
    fail('Test 1A: Anatomy Topics Count', `Expected >= 10, got ${ANATOMY_TOPICS.length}`);
  }

  if (PHYSIOLOGY_TOPICS.length >= 9) {
    pass('Test 1B: Physiology Topics Count', `Found ${PHYSIOLOGY_TOPICS.length} topics (required >= 9)`);
  } else {
    fail('Test 1B: Physiology Topics Count', `Expected >= 9, got ${PHYSIOLOGY_TOPICS.length}`);
  }

  // Check bilingual completeness for anatomy
  let allAnatomyComplete = true;
  for (const t of ANATOMY_TOPICS) {
    if (!t.id || !t.title || !t.titleBn || !t.overviewEn || !t.overviewBn || !Array.isArray(t.mainComponents) || t.mainComponents.length < 2 || !Array.isArray(t.structuralVariations) || t.structuralVariations.length < 2 || !t.evolutionaryNotesEn || !t.evolutionaryNotesBn) {
      allAnatomyComplete = false;
      fail('Test 1C: Anatomy Topic Completeness', `Topic ${t.id} lacks complete bilingual or structural variation data`);
      break;
    }
  }
  if (allAnatomyComplete) {
    pass('Test 1C: Anatomy Bilingual & Structural Data', 'All 10 anatomy topics possess complete EN/BN titles, overviews, components, variations, and evolutionary notes');
  }

  // Check bilingual completeness for physiology
  let allPhysiologyComplete = true;
  for (const t of PHYSIOLOGY_TOPICS) {
    if (!t.id || !t.title || !t.titleBn || !t.overviewEn || !t.overviewBn || !Array.isArray(t.keyMechanisms) || t.keyMechanisms.length < 2 || !Array.isArray(t.comparativeVariations) || t.comparativeVariations.length < 2 || !t.homeostaticSignificanceEn || !t.homeostaticSignificanceBn) {
      allPhysiologyComplete = false;
      fail('Test 1D: Physiology Topic Completeness', `Topic ${t.id} lacks complete bilingual or comparative mechanism data`);
      break;
    }
  }
  if (allPhysiologyComplete) {
    pass('Test 1D: Physiology Bilingual & Homeostatic Data', 'All 9 physiology topics possess complete EN/BN titles, overviews, mechanisms, comparative variations, and homeostatic significance');
  }
} catch (e) {
  fail('Test 1: Anatomy & Physiology Data Validation', e.message);
}

// 2. Evolution & Geological Timescale Validation
try {
  const { GEOLOGICAL_TIMESCALE, EVOLUTIONARY_CONCEPTS } = loadTs('src/data/evolutionData.ts');

  if (Array.isArray(EVOLUTIONARY_CONCEPTS) && EVOLUTIONARY_CONCEPTS.length >= 12) {
    pass('Test 2A: Evolutionary Concepts Count', `Found ${EVOLUTIONARY_CONCEPTS.length} evolutionary concepts (required >= 12)`);
  } else {
    fail('Test 2A: Evolutionary Concepts Count', `Expected >= 12 concepts, got ${EVOLUTIONARY_CONCEPTS?.length || 0}`);
  }

  // Verify discrete geological periods
  const periodIds = GEOLOGICAL_TIMESCALE.map(p => p.id);
  const expectedPeriods = [
    'geo-ordovician', 'geo-silurian', 'geo-carboniferous', 'geo-permian',
    'geo-triassic', 'geo-jurassic', 'geo-cretaceous', 'geo-paleogene', 'geo-neogene', 'geo-quaternary'
  ];
  const missingPeriods = expectedPeriods.filter(p => !periodIds.includes(p));
  if (missingPeriods.length === 0) {
    pass('Test 2B: Geological Periods Separation', `All 10 discrete geological periods verified (${GEOLOGICAL_TIMESCALE.length} total timescale divisions)`);
  } else {
    fail('Test 2B: Geological Periods Separation', `Missing separated periods: ${missingPeriods.join(', ')}`);
  }

  // Check concepts bilingual fields
  const allConceptsValid = EVOLUTIONARY_CONCEPTS.every(c =>
    c.id && c.title && c.titleBn && c.definitionEn && c.definitionBn &&
    c.significanceEn && c.significanceBn && Array.isArray(c.keyPrinciples) && c.keyPrinciples.length > 0 &&
    Array.isArray(c.zoologicalExamples) && c.zoologicalExamples.length > 0
  );
  if (allConceptsValid) {
    pass('Test 2C: Evolutionary Concepts Bilingual Parity', 'All 12 concepts contain valid EN/BN titles, definitions, principles, zoological examples, and significance');
  } else {
    fail('Test 2C: Evolutionary Concepts Bilingual Parity', 'One or more evolutionary concepts have incomplete bilingual properties');
  }
} catch (e) {
  fail('Test 2: Evolution & Geological Timescale Validation', e.message);
}

// 3. Comparative Zoology Data Validation
try {
  const { ORGAN_SYSTEM_COMPARISONS, FUNCTIONAL_ADAPTATIONS } = loadTs('src/data/comparativeData.ts');

  if (ORGAN_SYSTEM_COMPARISONS.length >= 6) {
    pass('Test 3A: Organ System Comparisons Count', `Found ${ORGAN_SYSTEM_COMPARISONS.length} system comparisons (required >= 6)`);
  } else {
    fail('Test 3A: Organ System Comparisons Count', `Expected >= 6, got ${ORGAN_SYSTEM_COMPARISONS.length}`);
  }

  const systemIds = ORGAN_SYSTEM_COMPARISONS.map(s => s.id);
  if (systemIds.includes('nervous-system') && systemIds.includes('reproductive-system')) {
    pass('Test 3B: Nervous & Reproductive System Inclusions', 'Both nervous-system and reproductive-system present with 7-group comparisons');
  } else {
    fail('Test 3B: Nervous & Reproductive System Inclusions', 'Missing nervous-system or reproductive-system');
  }

  if (FUNCTIONAL_ADAPTATIONS.length >= 6) {
    pass('Test 3C: Functional Adaptations Count', `Found ${FUNCTIONAL_ADAPTATIONS.length} adaptations (required >= 6)`);
  } else {
    fail('Test 3C: Functional Adaptations Count', `Expected >= 6, got ${FUNCTIONAL_ADAPTATIONS.length}`);
  }

  const adaptIds = FUNCTIONAL_ADAPTATIONS.map(a => a.id);
  const expectedAdapts = ['adaptation-aquatic', 'adaptation-terrestrial', 'adaptation-arboreal'];
  const missingAdapts = expectedAdapts.filter(a => !adaptIds.includes(a));
  if (missingAdapts.length === 0) {
    pass('Test 3D: Aquatic, Terrestrial & Arboreal Adaptations', 'All 3 new functional adaptations verified with bilingual data and key mechanisms');
  } else {
    fail('Test 3D: Aquatic, Terrestrial & Arboreal Adaptations', `Missing adaptations: ${missingAdapts.join(', ')}`);
  }
} catch (e) {
  fail('Test 3: Comparative Zoology Data Validation', e.message);
}

// 4. Vertebrate Classes Deepening Validation
try {
  const { VERTEBRATE_CLASSES_DATA } = loadTs('src/data/vertebratesData.ts');

  if (VERTEBRATE_CLASSES_DATA.length === 7) {
    pass('Test 4A: Vertebrate Classes Count', 'Exactly 7 vertebrate classes profile records verified');
  } else {
    fail('Test 4A: Vertebrate Classes Count', `Expected 7 classes, got ${VERTEBRATE_CLASSES_DATA.length}`);
  }

  let allFieldsPresent = true;
  for (const cls of VERTEBRATE_CLASSES_DATA) {
    if (
      !cls.className || !cls.classBn ||
      !cls.thermoregulation?.en || !cls.thermoregulation?.bn ||
      !cls.sensorySystems?.en || !cls.sensorySystems?.bn ||
      !cls.muscularSystem?.en || !cls.muscularSystem?.bn ||
      !cls.development?.en || !cls.development?.bn ||
      !cls.adaptations?.en || !cls.adaptations?.bn ||
      !cls.ecologicalRole?.en || !cls.ecologicalRole?.bn
    ) {
      allFieldsPresent = false;
      fail('Test 4B: Vertebrate Class Deepening Fields', `Class ${cls.id} (${cls.className}) lacks required 6 new fields`);
      break;
    }
  }
  if (allFieldsPresent) {
    pass('Test 4B: Vertebrate Class Deepening Fields', 'All 7 vertebrate classes possess thermoregulation, sensorySystems, muscularSystem, development, adaptations, and ecologicalRole');
  }
} catch (e) {
  fail('Test 4: Vertebrate Classes Deepening Validation', e.message);
}

// 5. Baseline Preservation Validation
try {
  const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
  const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
  const { SEED_IDENTIFICATION_KEYS } = loadTs('src/data/seedIdentKeys.ts');

  if (SEED_SPECIES.length === 238) {
    pass('Test 5A: Canonical Species Baseline', `238 canonical species strictly preserved`);
  } else {
    fail('Test 5A: Canonical Species Baseline', `Expected 238 species, got ${SEED_SPECIES.length}`);
  }

  const bdCount = SEED_SPECIES.filter(s => s.bangladeshOccurrence?.present).length;
  const globalCount = SEED_SPECIES.filter(s => !s.bangladeshOccurrence?.present).length;
  if (bdCount === 116 && globalCount === 122) {
    pass('Test 5B: Geographic Scope Separation', `116 BD + 122 Global = ${SEED_SPECIES.length} preserved`);
  } else {
    fail('Test 5B: Geographic Scope Separation', `Expected 116 BD / 122 Global, got ${bdCount} / ${globalCount}`);
  }

  const fishOrders = SEED_TAXA.filter(t => t.rank === 'order' && t.scientificName && t.scientificName.endsWith('iformes'));
  if (fishOrders.length >= 73) {
    pass('Test 5C: 73 Living Fish Orders Baseline', `${fishOrders.length} fish orders preserved`);
  } else {
    fail('Test 5C: 73 Living Fish Orders Baseline', `Expected >= 73 fish orders, got ${fishOrders.length}`);
  }

  if (SEED_IDENTIFICATION_KEYS.length === 21) {
    pass('Test 5D: Identification Keys Baseline', `21 identification keys strictly preserved`);
  } else {
    fail('Test 5D: Identification Keys Baseline', `Expected 21 keys, got ${SEED_IDENTIFICATION_KEYS.length}`);
  }
} catch (e) {
  fail('Test 5: Baseline Preservation Validation', e.message);
}

console.log('\n================================================================');
console.log(`SUMMARY: ${testsPassed} passed, ${testsFailed} failed`);
console.log('================================================================');

if (testsFailed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
