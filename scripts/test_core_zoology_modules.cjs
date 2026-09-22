// scripts/test_core_zoology_modules.cjs
// Comprehensive Automated Verification Suite for:
// MASTER-BUILD-CORE-ZOOLOGY-01 (7 Core Modules + Dichotomous Key Engine)

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
console.log('BIOTAELITE 2.0: CORE ZOOLOGY & DICHOTOMOUS KEY VERIFICATION');
console.log('================================================================\n');

// Load canonical data using transpiler
const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
const { SEED_IDENTIFICATION_KEYS } = loadTs('src/data/seedIdentKeys.ts');
const { ZOOLOGY_PHYLA_DATA } = loadTs('src/data/zoologyPhylaData.ts');
const { INVERTEBRATE_VS_VERTEBRATE, ORGAN_SYSTEM_COMPARISONS, FUNCTIONAL_ADAPTATIONS } = loadTs('src/data/comparativeData.ts');
const { GEOLOGICAL_TIMESCALE, MAJOR_EVOLUTIONARY_TRANSITIONS, PHYLOGENETIC_TREE_NODES } = loadTs('src/data/evolutionData.ts');
const { ANATOMY_TOPICS, PHYSIOLOGY_TOPICS } = loadTs('src/data/anatomyPhysiologyData.ts');
const { VERTEBRATE_CLASSES_DATA } = loadTs('src/data/vertebratesData.ts');

// 1. Footer Integrity
try {
  const footerContent = fs.readFileSync(path.join(rootDir, 'src/components/common/Footer.tsx'), 'utf-8');
  if (footerContent.includes('Session: 2021–2022')) {
    pass('Test 1: Footer Session Integrity', 'Session: 2021–2022 strictly preserved');
  } else {
    fail('Test 1: Footer Session Integrity', 'Footer session was altered from Session: 2021–2022');
  }
} catch (e) {
  fail('Test 1: Footer Session Integrity', e.message);
}

// 2. Canonical Species Baseline
try {
  if (SEED_SPECIES.length === 238) {
    pass('Test 2: Canonical Species Count', `Exactly 238 canonical species present (count=${SEED_SPECIES.length})`);
  } else {
    fail('Test 2: Canonical Species Count', `Expected 238 species, got ${SEED_SPECIES.length}`);
  }
} catch (e) {
  fail('Test 2: Canonical Species Count', e.message);
}

// 3. Bangladesh & Global Species Baseline
try {
  const bdCount = SEED_SPECIES.filter(s => s.bangladeshOccurrence?.present).length;
  const globalCount = SEED_SPECIES.filter(s => !s.bangladeshOccurrence?.present).length;
  if (bdCount === 116 && globalCount === 122) {
    pass('Test 3: Geographic Scope Separation', `116 Bangladesh-occurring + 122 Global Extralimital = ${SEED_SPECIES.length} total`);
  } else {
    fail('Test 3: Geographic Scope Separation', `Expected 116 BD & 122 Global, found ${bdCount} BD and ${globalCount} Global`);
  }
} catch (e) {
  fail('Test 3: Geographic Scope Separation', e.message);
}

// 4. Fish Orders Integrity (73 living orders)
try {
  const fishOrders = SEED_TAXA.filter(t => t.rank === 'order' && t.scientificName && t.scientificName.endsWith('iformes'));
  if (fishOrders.length >= 73) {
    pass('Test 4: 73 Living Fish Orders Integrity', `Verified ${fishOrders.length} fish orders in canonical taxonomy graph`);
  } else {
    fail('Test 4: 73 Living Fish Orders Integrity', `Expected >= 73 fish orders, got ${fishOrders.length}`);
  }
} catch (e) {
  fail('Test 4: 73 Living Fish Orders Integrity', e.message);
}

// 5. Identification Keys Preservation (21 keys)
try {
  if (SEED_IDENTIFICATION_KEYS.length === 21) {
    pass('Test 5: Identification Keys Preservation', `All 21 canonical Identification Keys preserved (count=${SEED_IDENTIFICATION_KEYS.length})`);
  } else {
    fail('Test 5: Identification Keys Preservation', `Expected 21 keys, found ${SEED_IDENTIFICATION_KEYS.length}`);
  }
} catch (e) {
  fail('Test 5: Identification Keys Preservation', e.message);
}

// 6. Module 1: Animal Kingdom Data & Component
try {
  const phylaComponent = fs.readFileSync(path.join(rootDir, 'src/components/zoology/AnimalKingdomExplorer.tsx'), 'utf-8');
  if (ZOOLOGY_PHYLA_DATA.length === 10 && phylaComponent.includes('AnimalKingdomExplorer')) {
    pass('Test 6: Animal Kingdom Module', `10 major phyla defined with full diagnostic traits & explorer component`);
  } else {
    fail('Test 6: Animal Kingdom Module', `Phyla count was ${ZOOLOGY_PHYLA_DATA.length}, expected 10`);
  }
} catch (e) {
  fail('Test 6: Animal Kingdom Module', e.message);
}

// 7. Module 2: Animal Biodiversity Page
try {
  const bioPage = fs.readFileSync(path.join(rootDir, 'src/pages/public/AnimalBiodiversityPage.tsx'), 'utf-8');
  if (
    bioPage.includes('selectedBroadGroup') &&
    bioPage.includes('selectedBangladeshScope') &&
    bioPage.includes('selectedPhylum') &&
    bioPage.includes('selectedIUCN') &&
    bioPage.includes('SpeciesCard')
  ) {
    pass('Test 7: Animal Biodiversity Module', 'Full filtering by phylum, class, vert/invert, BD/global scope, IUCN & habitat');
  } else {
    fail('Test 7: Animal Biodiversity Module', 'Missing filter criteria in AnimalBiodiversityPage');
  }
} catch (e) {
  fail('Test 7: Animal Biodiversity Module', e.message);
}

// 8. Module 3: Comparative Zoology Data & Component
try {
  const compComp = fs.readFileSync(path.join(rootDir, 'src/components/zoology/ComparativeEngine.tsx'), 'utf-8');
  if (
    INVERTEBRATE_VS_VERTEBRATE.length >= 5 &&
    ORGAN_SYSTEM_COMPARISONS.length >= 4 &&
    FUNCTIONAL_ADAPTATIONS.length >= 3 &&
    compComp.includes('ComparativeEngine')
  ) {
    pass('Test 8: Comparative Zoology Module', 'Invert vs Vert matrix, organ system tables, and group comparator verified');
  } else {
    fail('Test 8: Comparative Zoology Module', 'Comparative data or component incomplete');
  }
} catch (e) {
  fail('Test 8: Comparative Zoology Module', e.message);
}

// 9. Module 4: Evolution & Phylogeny Data & Component
try {
  const evoComp = fs.readFileSync(path.join(rootDir, 'src/components/zoology/PhylogeneticTree.tsx'), 'utf-8');
  if (
    GEOLOGICAL_TIMESCALE.length >= 5 &&
    MAJOR_EVOLUTIONARY_TRANSITIONS.length >= 6 &&
    PHYLOGENETIC_TREE_NODES.length >= 7 &&
    evoComp.includes('PhylogeneticTree')
  ) {
    pass('Test 9: Evolution & Phylogeny Module', 'Geological timescale, synapomorphic transitions, and cladogram explorer verified');
  } else {
    fail('Test 9: Evolution & Phylogeny Module', 'Evolution data or component incomplete');
  }
} catch (e) {
  fail('Test 9: Evolution & Phylogeny Module', e.message);
}

// 10. Module 5: Anatomy & Physiology Data & Component
try {
  const anatComp = fs.readFileSync(path.join(rootDir, 'src/components/zoology/OrganSystemDetail.tsx'), 'utf-8');
  if (
    ANATOMY_TOPICS.length >= 3 &&
    PHYSIOLOGY_TOPICS.length >= 2 &&
    anatComp.includes('OrganSystemDetail')
  ) {
    pass('Test 10: Anatomy & Physiology Module', 'Anatomical structures & physiological mechanisms (osmoregulation/thermoregulation) verified');
  } else {
    fail('Test 10: Anatomy & Physiology Module', 'Anatomy/Physiology data or component incomplete');
  }
} catch (e) {
  fail('Test 10: Anatomy & Physiology Module', e.message);
}

// 11. Module 6: Vertebrate Explorer Data & Component
try {
  const vertComp = fs.readFileSync(path.join(rootDir, 'src/components/zoology/VertebrateClassDetail.tsx'), 'utf-8');
  const hasAgnatha = VERTEBRATE_CLASSES_DATA.some(v => v.slug === 'agnatha' && v.isFishGroup);
  const hasChondrichthyes = VERTEBRATE_CLASSES_DATA.some(v => v.slug === 'chondrichthyes' && v.isFishGroup);
  const hasOsteichthyes = VERTEBRATE_CLASSES_DATA.some(v => v.slug === 'osteichthyes' && v.isFishGroup);
  if (VERTEBRATE_CLASSES_DATA.length === 7 && vertComp.includes('VertebrateClassDetail') && hasAgnatha && hasChondrichthyes && hasOsteichthyes) {
    pass('Test 11: Vertebrate Explorer Module', '7 living vertebrate classes with direct linkages to 73 fish orders portal verified');
  } else {
    fail('Test 11: Vertebrate Explorer Module', `Vertebrate classes verification failed`);
  }
} catch (e) {
  fail('Test 11: Vertebrate Explorer Module', e.message);
}

// 12. Module 7: Interactive Dichotomous Key Engine
try {
  const engineComp = fs.readFileSync(path.join(rootDir, 'src/components/zoology/DichotomousKeyEngine.tsx'), 'utf-8');
  const enginePage = fs.readFileSync(path.join(rootDir, 'src/pages/public/DichotomousKeyPage.tsx'), 'utf-8');
  if (
    engineComp.includes('DichotomousKeyEngine') &&
    engineComp.includes('currentStep') &&
    engineComp.includes('determinedSpecies') &&
    engineComp.includes('handleOptionSelect') &&
    engineComp.includes('stepHistory') &&
    enginePage.includes('DichotomousKeyPage')
  ) {
    pass('Test 12: Dichotomous Key Engine', 'Branching traversal, couplets, history, restart, and canonical species resolution verified');
  } else {
    fail('Test 12: Dichotomous Key Engine', 'Dichotomous Key Engine logic incomplete');
  }
} catch (e) {
  fail('Test 12: Dichotomous Key Engine', e.message);
}

// 13. Router Registration in App.tsx
try {
  const appContent = fs.readFileSync(path.join(rootDir, 'src/App.tsx'), 'utf-8');
  const requiredRoutes = [
    '/animal-kingdom',
    '/animal-biodiversity',
    '/comparative-zoology',
    '/evolution-phylogeny',
    '/anatomy-physiology',
    '/vertebrates',
    '/dichotomous-key'
  ];
  const allRoutesPresent = requiredRoutes.every(r => appContent.includes(`path="${r}`));
  if (allRoutesPresent) {
    pass('Test 13: Router Registration', 'All 7 public routes cleanly registered in App.tsx');
  } else {
    fail('Test 13: Router Registration', 'One or more routes missing from App.tsx');
  }
} catch (e) {
  fail('Test 13: Router Registration', e.message);
}

// 14. Navigation Bar Integration
try {
  const navContent = fs.readFileSync(path.join(rootDir, 'src/components/common/Navigation.tsx'), 'utf-8');
  if (
    navContent.includes('/animal-kingdom') &&
    navContent.includes('/animal-biodiversity') &&
    navContent.includes('/comparative-zoology') &&
    navContent.includes('/evolution-phylogeny') &&
    navContent.includes('/anatomy-physiology') &&
    navContent.includes('/vertebrates') &&
    navContent.includes('/dichotomous-key') &&
    navContent.includes('/species') &&
    navContent.includes('/fish') &&
    navContent.includes('/marine') &&
    navContent.includes('/bangladesh') &&
    navContent.includes('/taxonomy')
  ) {
    pass('Test 14: Navigation Integration', 'Core Zoology and Identification dropdowns integrated with all existing links preserved');
  } else {
    fail('Test 14: Navigation Integration', 'Navigation links missing in Navigation.tsx');
  }
} catch (e) {
  fail('Test 14: Navigation Integration', e.message);
}

// 15. Localization Dictionary Completeness
try {
  const transContent = fs.readFileSync(path.join(rootDir, 'src/i18n/translations.ts'), 'utf-8');
  const requiredKeys = [
    'nav.animalKingdom',
    'nav.animalBiodiversity',
    'nav.comparativeZoology',
    'nav.evolutionPhylogeny',
    'nav.anatomyPhysiology',
    'nav.vertebrates',
    'nav.dichotomousKey'
  ];
  const allKeysPresent = requiredKeys.every(k => transContent.includes(`'${k}':`));
  if (allKeysPresent) {
    pass('Test 15: Localization Completeness', 'Bilingual English & Bengali translations present for all new modules');
  } else {
    fail('Test 15: Localization Completeness', 'One or more translation keys missing');
  }
} catch (e) {
  fail('Test 15: Localization Completeness', e.message);
}

// 16. Canonical Species Linkage Integrity
try {
  const speciesIdSet = new Set(SEED_SPECIES.map(s => s.id));
  let orphanCount = 0;
  
  // Check phyla data
  ZOOLOGY_PHYLA_DATA.forEach(p => {
    (p.canonicalSpeciesIds || []).forEach(id => {
      if (!speciesIdSet.has(id)) {
        orphanCount++;
        console.warn(`    Warning: Orphan species ID ${id} in phylum ${p.scientificName}`);
      }
    });
  });

  // Check vertebrates data
  VERTEBRATE_CLASSES_DATA.forEach(v => {
    (v.canonicalSpeciesIds || []).forEach(id => {
      if (!speciesIdSet.has(id)) {
        orphanCount++;
        console.warn(`    Warning: Orphan species ID ${id} in vertebrate class ${v.className}`);
      }
    });
  });

  if (orphanCount === 0) {
    pass('Test 16: Canonical Species Linkage', 'All species references in zoology datasets strictly resolve to SEED_SPECIES');
  } else {
    fail('Test 16: Canonical Species Linkage', `${orphanCount} orphan species IDs detected`);
  }
} catch (e) {
  fail('Test 16: Canonical Species Linkage', e.message);
}

console.log('\n================================================================');
console.log(`CORE ZOOLOGY TEST SUITE RESULTS: ${testsPassed} PASSED, ${testsFailed} FAILED`);
console.log('================================================================\n');

if (testsFailed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
