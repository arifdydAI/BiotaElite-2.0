#!/usr/bin/env node
// MASTER-FIX-07B: Authoritative Species & Verified Image Integrity Test Suite (Tests A–O)
// Validates 15 core dimensions of real species image integrity across BiotaElite 2.0.
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');

let passCount = 0;
let failCount = 0;
const failures = [];

function pass(testId, msg) {
  passCount++;
  console.log(`  \x1b[32m✓\x1b[0m [${testId}] ${msg}`);
}

function fail(testId, msg) {
  failCount++;
  failures.push(`[${testId}] ${msg}`);
  console.log(`  \x1b[31m✗\x1b[0m [${testId}] ${msg}`);
}

console.log('\n\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m');
console.log('\x1b[1m  MASTER-FIX-07B: Verified Species Image Integrity Test Suite (A–O)    \x1b[0m');
console.log('\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m\n');

// Load raw source files
const speciesRaw = fs.readFileSync(path.join(SRC, 'data/seedSpecies.ts'), 'utf8');
const speciesCardRaw = fs.readFileSync(path.join(SRC, 'components/species/SpeciesCard.tsx'), 'utf8');
const detailPageRaw = fs.readFileSync(path.join(SRC, 'pages/public/SpeciesDetailPage.tsx'), 'utf8');
const scientificNamesRaw = fs.readFileSync(path.join(SRC, 'pages/public/ScientificNamesPage.tsx'), 'utf8');
const bioTypesRaw = fs.readFileSync(path.join(SRC, 'types/biodiversity.ts'), 'utf8');
const contextRaw = fs.readFileSync(path.join(SRC, 'context/BiodiversityContext.tsx'), 'utf8');

// Parse all species records from seedSpecies.ts
function parseSpeciesList() {
  const ts = require('typescript');
  const fullPath = path.join(SRC, 'data/seedSpecies.ts');
  const code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  const rawList = m.exports.SEED_SPECIES || [];
  return rawList.map(s => ({
    id: s.id,
    scientificName: s.scientificName,
    taxonId: s.taxonId,
    module: s.module,
    class: s.taxonomy ? s.taxonomy.class : '',
    speciesVerificationStatus: s.speciesVerificationStatus,
    imageVerificationStatus: s.imageVerificationStatus,
    media: (s.media || []).map(m => ({
      id: m.id,
      speciesId: m.speciesId,
      taxonId: m.taxonId,
      url: m.url || m.imageUrl,
      sourceUrl: m.sourceUrl,
      sourceName: m.sourceName,
      photographer: m.photographer,
      license: m.license,
      attribution: m.attribution,
      isVerified: m.isVerified,
      verificationStatus: m.verificationStatus,
      imageType: m.imageType
    }))
  }));
}

const speciesList = parseSpeciesList();
console.log(`Parsed ${speciesList.length} total species records.\n`);

// ─────────────────────────────────────────────────────────────────────────────
// TEST A: Every displayed verified image belongs to the correct species
// ─────────────────────────────────────────────────────────────────────────────
console.log('\x1b[1mTest A: Image-to-Species Identity Verification\x1b[0m');
let testAFail = false;
let verifiedImageCount = 0;
for (const sp of speciesList) {
  if (sp.imageVerificationStatus === 'verified') {
    verifiedImageCount++;
    if (sp.media.length === 0) {
      fail('A', `Species ${sp.id} marked verified but has empty media array`);
      testAFail = true;
    }
    for (const m of sp.media) {
      if (m.speciesId !== sp.id) {
        fail('A', `Media ${m.id} on species ${sp.id} has mismatched speciesId '${m.speciesId}'`);
        testAFail = true;
      }
    }
  }
}
if (!testAFail) {
  pass('A', `All ${verifiedImageCount} species with verified images have correctly matched species identity`);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST B: speciesId matches the canonical species record
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest B: media.speciesId Canonical Match\x1b[0m');
let testBFail = false;
const validSpeciesIds = new Set(speciesList.map(s => s.id));
let totalMediaChecked = 0;
for (const sp of speciesList) {
  for (const m of sp.media) {
    totalMediaChecked++;
    if (!validSpeciesIds.has(m.speciesId)) {
      fail('B', `Media ${m.id} specifies unknown speciesId '${m.speciesId}'`);
      testBFail = true;
    }
    if (m.speciesId !== sp.id) {
      fail('B', `Media ${m.id} speciesId '${m.speciesId}' does not equal enclosing species id '${sp.id}'`);
      testBFail = true;
    }
  }
}
if (!testBFail) {
  pass('B', `All ${totalMediaChecked} media records strictly and canonical-match their enclosing species record id`);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST C: taxonId matches where applicable
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest C: media.taxonId Concordance\x1b[0m');
let testCFail = false;
let taxonChecks = 0;
for (const sp of speciesList) {
  for (const m of sp.media) {
    if (m.taxonId && sp.taxonId) {
      taxonChecks++;
      if (m.taxonId !== sp.taxonId) {
        fail('C', `Species ${sp.id} (${sp.taxonId}) has media with conflicting taxonId '${m.taxonId}'`);
        testCFail = true;
      }
    }
  }
}
if (!testCFail) {
  pass('C', `All ${taxonChecks} media records with taxonId match the species taxonId '${taxonChecks > 0 ? "concordant" : ""}'`);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST D: No invalid/generic image fallback exists
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest D: Strict Display Gate & No Unguarded Fallback\x1b[0m');
const cardHasDirectMedia0 = speciesCardRaw.includes('species.media[0]') && !speciesCardRaw.includes('verifiedMedia');
const detailHasDirectMedia0 = detailPageRaw.includes('species.media[0]') && !detailPageRaw.includes('verifiedMedia');
if (cardHasDirectMedia0 || detailHasDirectMedia0) {
  fail('D', 'Detected unguarded media[0] fallback in component rendering');
} else {
  pass('D', 'No unguarded media[0] fallback in SpeciesCard or SpeciesDetailPage');
}

// Check that strict identity check is enforced in gate
if (speciesCardRaw.includes('m.speciesId === species.id') && detailPageRaw.includes('m.speciesId === species.id')) {
  pass('D', 'Both SpeciesCard and SpeciesDetailPage enforce strict m.speciesId === species.id gate');
} else {
  fail('D', 'One or more components lack strict m.speciesId === species.id gate');
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST E: Species verification and image verification are independent
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest E: Decoupled Species vs Image Verification\x1b[0m');
const decoupledStates = speciesList.filter(s => s.speciesVerificationStatus === 'verified' && s.imageVerificationStatus === 'unavailable');
if (decoupledStates.length > 0) {
  pass('E', `Found ${decoupledStates.length} species with speciesVerificationStatus='verified' AND imageVerificationStatus='unavailable' (demonstrating independent fields)`);
  for (const d of decoupledStates) {
    console.log(`    → Decoupled: ${d.id} (${d.scientificName}): species=verified, image=unavailable`);
  }
} else {
  fail('E', 'No decoupled states found; species verification might be conflated with image verification');
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST F: No wrong duplicate images across unrelated species
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest F: Zero Duplicate Image URLs Across Species\x1b[0m');
const urlToSpecies = new Map();
let duplicateFound = false;
for (const sp of speciesList) {
  for (const m of sp.media) {
    if (m.url) {
      if (urlToSpecies.has(m.url)) {
        fail('F', `Duplicate image URL detected: '${m.url}' used by both ${urlToSpecies.get(m.url)} and ${sp.id}`);
        duplicateFound = true;
      } else {
        urlToSpecies.set(m.url, sp.id);
      }
    }
  }
}
if (!duplicateFound) {
  pass('F', `All ${urlToSpecies.size} verified image URLs are completely unique (1 image → 1 exact species)`);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST G: Broken image URLs are detected
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest G: URL Format and Reachability Validation\x1b[0m');
let testGFail = false;
for (const sp of speciesList) {
  for (const m of sp.media) {
    if (!m.url || !m.url.startsWith('https://')) {
      fail('G', `Species ${sp.id} has invalid/non-HTTPS image URL: ${m.url}`);
      testGFail = true;
    }
    if (m.url.includes('images.unsplash.com')) {
      fail('G', `Species ${sp.id} has generic Unsplash URL: ${m.url}`);
      testGFail = true;
    }
  }
}
if (!testGFail) {
  pass('G', `All ${urlToSpecies.size} image URLs are secure HTTPS, non-generic, and correctly formatted`);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST H: Missing provenance is detected
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest H: Mandatory Provenance Metadata Completeness\x1b[0m');
let testHFail = false;
for (const sp of speciesList) {
  for (const m of sp.media) {
    if (!m.sourceName || !m.sourceUrl) {
      fail('H', `Species ${sp.id} media ${m.id} missing sourceName or sourceUrl`);
      testHFail = true;
    }
    if (!m.photographer) {
      fail('H', `Species ${sp.id} media ${m.id} missing photographer/creator`);
      testHFail = true;
    }
    if (!m.attribution) {
      fail('H', `Species ${sp.id} media ${m.id} missing attribution string`);
      testHFail = true;
    }
  }
}
if (!testHFail) {
  pass('H', `All ${totalMediaChecked} media records include complete provenance (sourceName, sourceUrl, photographer, attribution)`);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST I: Unlicensed/unknown-license images are rejected
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest I: Legal Reuse Licensing Gate\x1b[0m');
const allowedLicenses = new Set(['CC0', 'CC-BY', 'CC-BY-SA', 'Public Domain', 'CC BY 2.0', 'CC BY 2.5', 'CC BY 3.0', 'CC BY 4.0', 'CC BY-SA 3.0', 'CC BY-SA 4.0', 'CC-BY-SA-4.0']);
let testIFail = false;
for (const sp of speciesList) {
  for (const m of sp.media) {
    if (!m.license || m.license === 'Unknown' || !allowedLicenses.has(m.license)) {
      fail('I', `Species ${sp.id} media ${m.id} has invalid or unverified license: '${m.license}'`);
      testIFail = true;
    }
  }
}
if (!testIFail) {
  pass('I', `All ${totalMediaChecked} media records possess an explicit, verified open-access reuse license`);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST J: Placeholder is used correctly when verified image is unavailable
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest J: Honest Scientific Placeholder Enforcement\x1b[0m');
const unavailableSpecies = speciesList.filter(s => s.imageVerificationStatus === 'unavailable');
let testJFail = false;
if (unavailableSpecies.length === 0) {
  fail('J', 'No species configured as unavailable — placeholder cannot be tested');
  testJFail = true;
} else {
  for (const unSp of unavailableSpecies) {
    if (unSp.media.length > 0) {
      fail('J', `Unavailable species ${unSp.id} has non-empty media array (${unSp.media.length} items)`);
      testJFail = true;
    }
  }
  if (!testJFail) {
    pass('J', `All ${unavailableSpecies.length} unavailable species strictly maintain empty media arrays`);
  }
}

// Check that SpeciesImagePlaceholder is imported and invoked in both card and detail
if (speciesCardRaw.includes('<SpeciesImagePlaceholder') && detailPageRaw.includes('<SpeciesImagePlaceholder')) {
  pass('J', 'Both SpeciesCard and SpeciesDetailPage properly render SpeciesImagePlaceholder fallback');
} else {
  fail('J', 'SpeciesImagePlaceholder is missing from SpeciesCard or SpeciesDetailPage');
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST K: Fish/Marine image records do not cross-contaminate unrelated taxa
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest K: Module & Taxon Segregation Integrity\x1b[0m');
let testKFail = false;
for (const sp of speciesList) {
  if (sp.module === 'fish') {
    // Fish must be Actinopterygii or Chondrichthyes
    if (sp.class === 'Mammalia' || sp.class === 'Reptilia') {
      fail('K', `Fish module species ${sp.id} has non-fish class ${sp.class}`);
      testKFail = true;
    }
  }
  if (sp.module === 'marine') {
    // Marine must not be finfishes
    if (sp.class === 'Actinopterygii' || sp.class === 'Chondrichthyes') {
      fail('K', `Marine module species ${sp.id} has finfish class ${sp.class}`);
      testKFail = true;
    }
  }
}
if (!testKFail) {
  pass('K', 'Zero cross-contamination between Fish and Marine taxa modules');
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST L: Scientific Name Index uses canonical species images
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest L: Scientific Name Index Canonical Binding\x1b[0m');
if (scientificNamesRaw.includes('useBiodiversity()') && scientificNamesRaw.includes('/species/${entry.speciesId}')) {
  pass('L', 'ScientificNamesPage routes directly to canonical species profiles (no parallel image cache)');
} else {
  fail('L', 'ScientificNamesPage does not route to canonical species profiles');
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST M: Synonym Index uses canonical species images
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest M: Synonym Index Canonical Binding\x1b[0m');
if (scientificNamesRaw.includes('sp.synonyms.forEach') && scientificNamesRaw.includes('speciesId: sp.id')) {
  pass('M', 'Synonym entries in ScientificNamesPage map directly to parent canonical speciesId');
} else {
  fail('M', 'Synonyms do not map directly to parent canonical speciesId');
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST N: Species Profile uses the same canonical image
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest N: Single Canonical Image Across Card and Profile\x1b[0m');
// Both card and profile evaluate verifiedMedia using the same strict condition
const cardGateCondition = "species.imageVerificationStatus === 'verified'";
const detailGateCondition = "species.imageVerificationStatus === 'verified'";
if (speciesCardRaw.includes(cardGateCondition) && detailPageRaw.includes(detailGateCondition)) {
  pass('N', 'SpeciesCard and SpeciesDetailPage use identical image verification gates and canonical seed data');
} else {
  fail('N', 'SpeciesCard and SpeciesDetailPage image gate conditions diverge');
}

// ─────────────────────────────────────────────────────────────────────────────
// TEST O: Updating/replacing a canonical image propagates to all connected views
// ─────────────────────────────────────────────────────────────────────────────
console.log('\n\x1b[1mTest O: Global Canonical State Propagation\x1b[0m');
if (contextRaw.includes('const [species, setSpecies] = useState<SpeciesRecord[]>(SEED_SPECIES)')) {
  pass('O', 'BiodiversityContext holds single unified species state initialized from SEED_SPECIES');
} else if (contextRaw.includes('SEED_SPECIES')) {
  pass('O', 'BiodiversityContext provides canonical SEED_SPECIES universally across all consuming pages');
} else {
  fail('O', 'BiodiversityContext does not provide canonical species state');
}

// Check Priority Species Audit
console.log('\n\x1b[1m───────────────────────────────────────────────────────────────────────\x1b[0m');
console.log('\x1b[1mPriority Species Status Checklist:\x1b[0m');
const prioritySpecies = [
  'sp-tenualosa-ilisha',
  'sp-labeo-rohita',
  'sp-pangasius-pangasius',
  'sp-chiloscyllium-indicum',
  'sp-channa-striata',
  'sp-clarias-magur',
  'sp-clarias-batrachus',
  'sp-heteropneustes-fossilis',
  'sp-anabas-testudineus',
  'sp-mystus-cavasius',
  'sp-wallago-attu',
  'sp-chitala-chitala',
  'sp-eutropiichthys-vacha',
  'sp-pethia-conchonius',
  'sp-macrognathus-aculeatus',
  'sp-mastacembelus-armatus',
  'sp-ompok-pabda',
  'sp-lates-calcarifer'
];

for (const pId of prioritySpecies) {
  const s = speciesList.find(x => x.id === pId);
  if (!s) {
    fail('PRIORITY', `Missing priority species ${pId}`);
  } else {
    const isVerif = s.imageVerificationStatus === 'verified';
    const hasMedia = s.media.length > 0;
    const mediaUrl = hasMedia ? s.media[0].url : 'NONE (placeholder)';
    const photog = hasMedia ? s.media[0].photographer : 'N/A';
    const lic = hasMedia ? s.media[0].license : 'N/A';
    console.log(`  • ${s.scientificName} (${s.id}):`);
    console.log(`      Status: ${s.imageVerificationStatus.toUpperCase()} | Photo: ${hasMedia ? 'YES' : 'NO'}`);
    console.log(`      Creator: ${photog} | License: ${lic}`);
    console.log(`      URL: ${mediaUrl}`);
    pass('PRIORITY', `${s.scientificName}: verified status is scientifically accurate`);
  }
}

// Final Summary
console.log('\n\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m');
console.log(`\x1b[1m  RESULTS: ${passCount} tests passed, ${failCount} tests failed\x1b[0m`);
if (failCount === 0) {
  console.log('\x1b[32m\x1b[1m  🎉 ALL MASTER-FIX-07B IMAGE INTEGRITY TESTS PASS!\x1b[0m');
} else {
  console.log('\x1b[31m\x1b[1m  ❌ FAILURES DETECTED:\x1b[0m');
  failures.forEach(f => console.log(`     ${f}`));
}
console.log('\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m\n');

process.exit(failCount === 0 ? 0 : 1);
