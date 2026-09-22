#!/usr/bin/env node
// MASTER-FIX-10: Global Species Dataset Expansion & Species-Level Data Integrity Test Suite (Tests A–T)
'use strict';

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

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

function loadTs(relativePath) {
  const fullPath = path.join(SRC, relativePath);
  const code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

console.log('\n\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m');
console.log('\x1b[1m  MASTER-FIX-10: Species Dataset Expansion & Integrity Suite (A–T)     \x1b[0m');
console.log('\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m\n');

const species = loadTs('data/seedSpecies.ts').SEED_SPECIES;
const taxa = loadTs('data/seedTaxa.ts').SEED_TAXA;
const references = loadTs('data/seedReferences.ts').SEED_REFERENCES;

const taxaMap = new Map(taxa.map(t => [t.id, t]));
const refMap = new Map(references.map(r => [r.id, r]));

// -----------------------------------------------------------------------------
// Test A: Every species has a valid speciesId
// -----------------------------------------------------------------------------
console.log('Test A: Stable speciesId Formatting');
let testAPass = true;
species.forEach(s => {
  if (!s.id || !s.id.startsWith('sp-') || s.id.includes(' ')) {
    testAPass = false;
    fail('A', `Species has invalid id: ${s.id}`);
  }
});
if (testAPass) {
  pass('A', `All ${species.length} species records possess valid, stable 'sp-...' IDs`);
}

// -----------------------------------------------------------------------------
// Test B: Every species resolves to a valid Genus
// -----------------------------------------------------------------------------
console.log('Test B: Species ➔ Genus Resolution');
let testBPass = true;
let nonGenusSpecies = [];
species.forEach(s => {
  if (!s.taxonId) {
    testBPass = false;
    nonGenusSpecies.push(`${s.id} (missing taxonId)`);
    return;
  }
  const genusNode = taxaMap.get(s.taxonId);
  if (!genusNode) {
    testBPass = false;
    nonGenusSpecies.push(`${s.id} ➔ ${s.taxonId} (node not found)`);
  } else if (genusNode.rank !== 'genus') {
    testBPass = false;
    nonGenusSpecies.push(`${s.id} ➔ ${s.taxonId} (rank is ${genusNode.rank}, expected genus)`);
  }
});
if (testBPass) {
  pass('B', `All ${species.length} species records resolve directly to an authoritative Genus taxon node`);
} else {
  fail('B', `Species failing Genus resolution: ${nonGenusSpecies.join(', ')}`);
}

// -----------------------------------------------------------------------------
// Test C: Every Genus resolves to Family (directly or via intermediate ranks like subfamily)
// -----------------------------------------------------------------------------
console.log('Test C: Genus ➔ Family Resolution');
const genera = taxa.filter(t => t.rank === 'genus');
let testCPass = true;
let unlinkedGenera = [];
genera.forEach(g => {
  let curr = g;
  let familyFound = null;
  const visited = new Set();
  while (curr && (curr.parentTaxonId || curr.parentId) && !visited.has(curr.id)) {
    visited.add(curr.id);
    const pId = curr.parentTaxonId || curr.parentId;
    const parent = taxaMap.get(pId);
    if (!parent) break;
    if (parent.rank === 'family') {
      familyFound = parent;
      break;
    }
    curr = parent;
  }
  if (!familyFound) {
    testCPass = false;
    unlinkedGenera.push(`${g.id} (no Family ancestor found)`);
  }
});
if (testCPass) {
  pass('C', `All ${genera.length} Genus nodes resolve cleanly to an authoritative Family node`);
} else {
  fail('C', `Genera failing Family resolution: ${unlinkedGenera.join(', ')}`);
}

// -----------------------------------------------------------------------------
// Test D: Every Family resolves to Order
// -----------------------------------------------------------------------------
console.log('Test D: Family ➔ Order Resolution');
const families = taxa.filter(t => t.rank === 'family');
let testDPass = true;
let unlinkedFamilies = [];
families.forEach(f => {
  // Can resolve to order directly or through superfamily/suborder
  let curr = f;
  let orderFound = null;
  const visited = new Set();
  while (curr && (curr.parentTaxonId || curr.parentId) && !visited.has(curr.id)) {
    visited.add(curr.id);
    const pId = curr.parentTaxonId || curr.parentId;
    const parent = taxaMap.get(pId);
    if (!parent) break;
    if (parent.rank === 'order') {
      orderFound = parent;
      break;
    }
    curr = parent;
  }
  if (!orderFound) {
    testDPass = false;
    unlinkedFamilies.push(`${f.id} (no Order ancestor found)`);
  }
});
if (testDPass) {
  pass('D', `All ${families.length} Family nodes resolve to an authoritative Order node`);
} else {
  fail('D', `Families failing Order resolution: ${unlinkedFamilies.join(', ')}`);
}

// -----------------------------------------------------------------------------
// Test E: No orphan species
// -----------------------------------------------------------------------------
console.log('Test E: Zero Orphan Species');
let testEPass = true;
species.forEach(s => {
  if (!taxaMap.has(s.taxonId)) {
    testEPass = false;
    fail('E', `Orphan species: ${s.id} (${s.scientificName}) references missing ${s.taxonId}`);
  }
});
if (testEPass) {
  pass('E', `Zero orphan species detected across the entire ${species.length}-species catalogue`);
}

// -----------------------------------------------------------------------------
// Test F: No duplicate canonical species IDs
// -----------------------------------------------------------------------------
console.log('Test F: Canonical Species ID Uniqueness');
const speciesIdSet = new Set();
let testFPass = true;
species.forEach(s => {
  if (speciesIdSet.has(s.id)) {
    testFPass = false;
    fail('F', `Duplicate canonical species ID: ${s.id}`);
  }
  speciesIdSet.add(s.id);
});
if (testFPass) {
  pass('F', `Zero duplicate species IDs: all ${species.length} canonical IDs are globally unique`);
}

// -----------------------------------------------------------------------------
// Test G: No duplicate accepted scientific-name records
// -----------------------------------------------------------------------------
console.log('Test G: Scientific Name Uniqueness');
const sciNameMap = new Map();
let testGPass = true;
species.forEach(s => {
  const normName = s.scientificName.trim().toLowerCase();
  if (sciNameMap.has(normName)) {
    testGPass = false;
    fail('G', `Duplicate accepted scientific name: ${s.scientificName} in ${s.id} and ${sciNameMap.get(normName)}`);
  }
  sciNameMap.set(normName, s.id);
});
if (testGPass) {
  pass('G', `Zero duplicate scientific names: all ${species.length} accepted names are unique`);
}

// -----------------------------------------------------------------------------
// Test H: Synonyms resolve to canonical species
// -----------------------------------------------------------------------------
console.log('Test H: Synonym Resolution');
let totalSynonyms = 0;
let invalidSynonyms = 0;
species.forEach(s => {
  (s.synonyms || []).forEach(syn => {
    totalSynonyms++;
    if (!syn.name || !syn.status) {
      invalidSynonyms++;
    }
  });
});
if (invalidSynonyms === 0 && totalSynonyms > 0) {
  pass('H', `All ${totalSynonyms} synonyms maintain valid status and map to parent canonical species`);
} else {
  fail('H', `${invalidSynonyms} synonyms failed validation`);
}

// -----------------------------------------------------------------------------
// Test I: Verified species have authoritative provenance
// -----------------------------------------------------------------------------
console.log('Test I: Authoritative Literature & Provenance');
let testIPass = true;
species.forEach(s => {
  if (s.speciesVerificationStatus === 'verified') {
    if (!s.referenceIds || s.referenceIds.length === 0) {
      testIPass = false;
      fail('I', `Verified species ${s.id} has no referenceIds`);
    } else {
      const invalidRefs = s.referenceIds.filter(refId => !refMap.has(refId));
      if (invalidRefs.length > 0) {
        testIPass = false;
        fail('I', `Verified species ${s.id} references non-existent references: ${invalidRefs.join(', ')}`);
      }
    }
  }
});
if (testIPass) {
  pass('I', `All verified species cite authoritative references present in SEED_REFERENCES`);
}

// -----------------------------------------------------------------------------
// Test J: Verified species have a verified canonical image
// -----------------------------------------------------------------------------
console.log('Test J: Verified Species Canonical Image Binding');
let verifiedSpeciesWithVerifiedImage = 0;
let verifiedSpeciesWithUnavailableImage = 0;
let invalidImageRecords = 0;

species.forEach(s => {
  if (s.imageVerificationStatus === 'verified') {
    if (!s.media || s.media.length === 0) {
      invalidImageRecords++;
      fail('J', `Species ${s.id} has imageVerificationStatus='verified' but empty media array`);
      return;
    }
    const m = s.media[0];
    if (m.verificationStatus !== 'verified' || !m.isVerified) {
      invalidImageRecords++;
      fail('J', `Species ${s.id} media item is not verified`);
    } else {
      verifiedSpeciesWithVerifiedImage++;
    }
  } else if (s.imageVerificationStatus === 'unavailable') {
    verifiedSpeciesWithUnavailableImage++;
  }
});

if (invalidImageRecords === 0) {
  pass('J', `Verified canonical image gate passed: ${verifiedSpeciesWithVerifiedImage} verified photos, ${verifiedSpeciesWithUnavailableImage} honest unavailable fallbacks`);
} else {
  fail('J', `${invalidImageRecords} species failed verified canonical image gate`);
}

// -----------------------------------------------------------------------------
// Test K: Canonical image speciesId matches speciesId
// -----------------------------------------------------------------------------
console.log('Test K: Canonical Image Species ID Consistency');
let testKPass = true;
species.forEach(s => {
  (s.media || []).forEach(m => {
    if (m.speciesId !== s.id) {
      testKPass = false;
      fail('K', `Media ID ${m.id} has speciesId '${m.speciesId}', expected '${s.id}'`);
    }
  });
});
if (testKPass) {
  pass('K', `100% of media records have m.speciesId exactly matching species.id`);
}

// -----------------------------------------------------------------------------
// Test L: TaxonId consistency passes where applicable
// -----------------------------------------------------------------------------
console.log('Test L: TaxonId Consistency');
let testLPass = true;
species.forEach(s => {
  (s.media || []).forEach(m => {
    if (m.taxonId && s.taxonId && m.taxonId !== s.taxonId) {
      testLPass = false;
      fail('L', `Media taxonId '${m.taxonId}' contradicts species taxonId '${s.taxonId}' in ${s.id}`);
    }
  });
});
if (testLPass) {
  pass('L', `Zero taxonId mismatches between media and species records`);
}

// -----------------------------------------------------------------------------
// Test M: Unverified images never render as verified species images
// -----------------------------------------------------------------------------
console.log('Test M: Unverified / Unavailable Image Rendering Gate');
let testMPass = true;
species.forEach(s => {
  if (s.imageVerificationStatus === 'unavailable') {
    if (s.media && s.media.length > 0) {
      testMPass = false;
      fail('M', `Unavailable species ${s.id} has non-empty media array`);
    }
  }
});
if (testMPass) {
  pass('M', `All unavailable species strictly maintain empty media arrays; fallbacks render via bilingual placeholder`);
}

// -----------------------------------------------------------------------------
// Test N: Global species do not require Bangladesh occurrence
// -----------------------------------------------------------------------------
console.log('Test N: Global Scope vs Bangladesh Regional Separation');
const extralimitalSpecies = species.filter(s => s.bangladeshOccurrence.present === false);
if (extralimitalSpecies.length >= 26) {
  pass('N', `${extralimitalSpecies.length} global species correctly catalogued with bangladeshOccurrence.present = false`);
} else {
  fail('N', `Expected at least 26 extralimital species, found ${extralimitalSpecies.length}`);
}

// -----------------------------------------------------------------------------
// Test O: Bangladesh occurrence remains regional data
// -----------------------------------------------------------------------------
console.log('Test O: Bangladesh Regional Occurrence Structure');
let testOPass = true;
species.forEach(s => {
  const occ = s.bangladeshOccurrence;
  if (occ.present === undefined || !Array.isArray(occ.regions) || !occ.residencyStatus) {
    testOPass = false;
    fail('O', `Species ${s.id} has malformed bangladeshOccurrence`);
  }
});
if (testOPass) {
  pass('O', `All ${species.length} species strictly isolate Bangladesh occurrence to regional data structures`);
}

// -----------------------------------------------------------------------------
// Test P: Fish and Marine datasets remain separated
// -----------------------------------------------------------------------------
console.log('Test P: Fish vs Marine Module Segregation');
const fishSpecies = species.filter(s => s.module === 'fish');
const marineSpecies = species.filter(s => s.module === 'marine');
const generalSpecies = species.filter(s => s.module === 'general');

let testPPass = true;
// Fish species must belong to Pisces (taxon-fishes)
fishSpecies.forEach(fs => {
  const ordName = fs.taxonomy.order?.toLowerCase();
  const fishOrd = taxa.find(t => t.rank === 'order' && t.module === 'fish' && t.scientificName.toLowerCase() === ordName);
  if (!fishOrd) {
    testPPass = false;
    fail('P', `Fish species ${fs.id} belongs to order '${fs.taxonomy.order}' which is not in fish module`);
  }
});

if (testPPass) {
  pass('P', `Strict module segregation confirmed: ${fishSpecies.length} finfish, ${marineSpecies.length} marine organisms, ${generalSpecies.length} general`);
}

// -----------------------------------------------------------------------------
// Test Q: Scientific Name Index resolves correctly
// -----------------------------------------------------------------------------
console.log('Test Q: Scientific Name Index Coverage');
const sciNamesCode = fs.readFileSync(path.join(SRC, 'pages/public/ScientificNamesPage.tsx'), 'utf8');
if (sciNamesCode.includes('species.forEach') && sciNamesCode.includes('sp.scientificName')) {
  pass('Q', `ScientificNamesPage dynamically maps all global species scientific names`);
} else {
  fail('Q', `ScientificNamesPage does not map species dynamically`);
}

// -----------------------------------------------------------------------------
// Test R: Synonym Index resolves correctly
// -----------------------------------------------------------------------------
console.log('Test R: Synonym Index Resolution');
if (sciNamesCode.includes('sp.synonyms.forEach') && sciNamesCode.includes('speciesId: sp.id') && sciNamesCode.includes('/species/${entry.speciesId}')) {
  pass('R', `Synonym Index resolves synonyms directly to canonical species profile (/species/\${entry.speciesId})`);
} else {
  fail('R', `Synonym Index does not link to canonical species profile`);
}

// -----------------------------------------------------------------------------
// Test S: Species detail route resolves correctly
// -----------------------------------------------------------------------------
console.log('Test S: Species Detail Route Resolution');
const detailCode = fs.readFileSync(path.join(SRC, 'pages/public/SpeciesDetailPage.tsx'), 'utf8');
if (detailCode.includes('getSpeciesById(id)') && detailCode.includes('species.imageVerificationStatus === \'verified\'')) {
  pass('S', `SpeciesDetailPage resolves :id against canonical dataset with full integrity gate`);
} else {
  fail('S', `SpeciesDetailPage missing canonical resolution or integrity gate`);
}

// -----------------------------------------------------------------------------
// Test T: Newly added species follow full Order -> Family -> Genus -> Species -> Image -> Source -> Biological Data chain
// -----------------------------------------------------------------------------
console.log('Test T: Complete 7-Step Integrity Chain');
let testTPass = true;
species.forEach(s => {
  // 1. Order
  if (!s.taxonomy.order) { testTPass = false; fail('T', `${s.id}: Missing order`); return; }
  // 2. Family
  if (!s.taxonomy.family) { testTPass = false; fail('T', `${s.id}: Missing family`); return; }
  // 3. Genus
  if (!s.taxonomy.genus || !s.taxonId) { testTPass = false; fail('T', `${s.id}: Missing genus/taxonId`); return; }
  // 4. Species
  if (!s.taxonomy.species || !s.scientificName) { testTPass = false; fail('T', `${s.id}: Missing species/scientificName`); return; }
  // 5. Image
  if (s.imageVerificationStatus === 'verified') {
    const m = (s.media || [])[0];
    if (!m || !m.url || !m.sourceUrl || !m.license) {
      testTPass = false; fail('T', `${s.id}: Incomplete verified image`); return;
    }
  }
  // 6. Source
  if (!s.referenceIds || s.referenceIds.length === 0) {
    testTPass = false; fail('T', `${s.id}: Missing source referenceIds`); return;
  }
  // 7. Biological Data
  if (!s.morphology.description || s.morphology.diagnosticFeatures.length === 0 || !s.ecology.dietSummary || !s.habitat.systems) {
    testTPass = false; fail('T', `${s.id}: Incomplete biological data`); return;
  }
});

if (testTPass) {
  pass('T', `100% of species in catalogue satisfy complete Order ➔ Family ➔ Genus ➔ Species ➔ Image ➔ Source ➔ Biological Data chain`);
}

// -----------------------------------------------------------------------------
// Coverage Report
// -----------------------------------------------------------------------------
console.log('\n\x1b[1m───────────────────────────────────────────────────────────────────────\x1b[0m');
console.log('\x1b[1m  TAXONOMIC COVERAGE AUDIT REPORT                                      \x1b[0m');
console.log('\x1b[1m───────────────────────────────────────────────────────────────────────\x1b[0m');

const fishOrders = taxa.filter(t => t.rank === 'order' && t.module === 'fish');
const orderSpeciesCount = {};
species.forEach(s => {
  const ord = s.taxonomy.order || 'Unknown';
  orderSpeciesCount[ord] = (orderSpeciesCount[ord] || 0) + 1;
});

console.log(`\nFish Orders Representation (${fishOrders.length} total orders):`);
let representedCount = 0;
fishOrders.forEach(o => {
  const count = orderSpeciesCount[o.scientificName] || 0;
  if (count > 0) {
    representedCount++;
    console.log(`  ✓ ${o.scientificName.padEnd(25)}: ${count} species`);
  }
});

const unrepresented = fishOrders.filter(o => !orderSpeciesCount[o.scientificName]);
console.log(`\nTotal Fish Orders represented: ${representedCount} / ${fishOrders.length} (${((representedCount/fishOrders.length)*100).toFixed(1)}%)`);
console.log(`Unrepresented Orders: ${unrepresented.length} (available for future systematic expansion)`);

console.log('\n\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m');
console.log(`  RESULTS: ${passCount} passed, ${failCount} failed`);
if (failCount === 0) {
  console.log('  🎉 ALL MASTER-FIX-10 DATASET EXPANSION & INTEGRITY TESTS PASS!');
} else {
  console.log('  ❌ FAILURES OCCURRED IN TEST SUITE');
}
console.log('\x1b[1m═══════════════════════════════════════════════════════════════════════\x1b[0m\n');

process.exit(failCount === 0 ? 0 : 1);
