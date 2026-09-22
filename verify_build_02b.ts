// BiotaElite 2.0 - MASTER-BUILD-02B Automated Verification Suite (ESM)
import http from 'http';
import { SEED_SPECIES } from './src/data/seedSpecies.js';
import { SEED_TAXON_KNOWLEDGE } from './src/data/seedTaxonKnowledge.js';
import { SEED_TAXA } from './src/data/seedTaxa.js';

console.log('================================================================');
console.log('BIOTAELITE 2.0 / MASTER-BUILD-02B AUTOMATED VERIFICATION SUITE');
console.log('================================================================\n');

let assertionsPassed = 0;
let assertionsFailed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    assertionsPassed++;
  } else {
    console.error(`  [FAIL] ${message}`);
    assertionsFailed++;
  }
}

console.log('--- 1. Taxonomic Knowledge Base Verification ---');
assert(Array.isArray(SEED_TAXON_KNOWLEDGE), 'SEED_TAXON_KNOWLEDGE is an array');
console.log(`  Total Taxon Knowledge Records: ${SEED_TAXON_KNOWLEDGE.length}`);

// 3 Fish Classes
const fishClasses = SEED_TAXON_KNOWLEDGE.filter(k => k.category === 'fish' && k.rank === 'class');
assert(fishClasses.length === 3, `Expected exactly 3 fish classes, found ${fishClasses.length}`);

const classNames = fishClasses.map(c => c.scientificName).sort();
assert(classNames.includes('Chondrichthyes'), 'Chondrichthyes class record present');
assert(classNames.includes('Actinopterygii'), 'Actinopterygii class record present');
assert(classNames.includes('Sarcopterygii'), 'Sarcopterygii class record present');

// Fish Orders
const fishOrders = SEED_TAXON_KNOWLEDGE.filter(k => k.category === 'fish' && k.rank === 'order');
assert(fishOrders.length >= 10, `Expected at least 10 fish orders, found ${fishOrders.length}`);
console.log(`  Documented Fish Orders (${fishOrders.length}): ${fishOrders.map(o => o.scientificName).join(', ')}`);

// // Non-Fish Marine Phyla
const marinePhyla = SEED_TAXON_KNOWLEDGE.filter(k => k.category === 'marine_non_fish' && k.rank === 'phylum');
assert(marinePhyla.length === 6, `Expected exactly 6 non-fish marine phyla, found ${marinePhyla.length}`);
const phylaNames = marinePhyla.map(p => p.scientificName).sort();
assert(phylaNames.includes('Porifera'), 'Porifera phylum record present');
assert(phylaNames.includes('Cnidaria'), 'Cnidaria phylum record present');
assert(phylaNames.includes('Mollusca'), 'Mollusca phylum record present');
assert(phylaNames.includes('Arthropoda'), 'Arthropoda phylum record present');
assert(phylaNames.includes('Echinodermata'), 'Echinodermata phylum record present');
assert(phylaNames.includes('Chordata'), 'Chordata phylum record present');

console.log('\n--- 2. Mandatory 9-Point Knowledge Standard Completeness ---');
let pointsValid = true;
for (const record of SEED_TAXON_KNOWLEDGE) {
  if (!record.scientificName || !record.englishName || !record.bengaliName) {
    pointsValid = false;
    console.error(`  Missing names in ${record.id}`);
  }
  if (!record.classificationHierarchy || record.classificationHierarchy.length === 0) {
    pointsValid = false;
    console.error(`  Missing classificationHierarchy in ${record.id}`);
  }
  if (!record.diagnosticCharacteristics || !record.diagnosticCharacteristics.en || !record.diagnosticCharacteristics.bn) {
    pointsValid = false;
    console.error(`  Missing diagnosticCharacteristics in ${record.id}`);
  }
  if (!record.habitat || !record.habitat.en || !record.habitat.bn) {
    pointsValid = false;
    console.error(`  Missing habitat in ${record.id}`);
  }
  if (!record.ecosystem || !record.ecosystem.en || !record.ecosystem.bn) {
    pointsValid = false;
    console.error(`  Missing ecosystem in ${record.id}`);
  }
  if (!record.feeding || !record.feeding.en || !record.feeding.bn) {
    pointsValid = false;
    console.error(`  Missing feeding in ${record.id}`);
  }
  if (!record.reproduction || !record.reproduction.en || !record.reproduction.bn) {
    pointsValid = false;
    console.error(`  Missing reproduction in ${record.id}`);
  }
  if (!record.distribution || !record.distribution.en || !record.distribution.bn) {
    pointsValid = false;
    console.error(`  Missing distribution in ${record.id}`);
  }
  if (!record.authoritySource) {
    pointsValid = false;
    console.error(`  Missing authoritySource in ${record.id}`);
  }
}
assert(pointsValid, 'All TaxonKnowledgeRecords adhere strictly to the 9-Point Knowledge Standard with full English & Bengali localization');

console.log('\n--- 3. Strict Scientific Data Honesty & Canonical Species Mappings ---');
// Sarcopterygii honesty check:
const sarcopterygiiRecord = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'class-sarcopterygii');
assert(sarcopterygiiRecord !== undefined, 'Sarcopterygii record exists');
assert(sarcopterygiiRecord?.exampleSpeciesIds.length === 0, 'Sarcopterygii honestly maps to 0 verified native species in Bangladesh');
assert(sarcopterygiiRecord?.notes !== undefined && (sarcopterygiiRecord.notes.includes('0') || sarcopterygiiRecord.notes.toLowerCase().includes('zero')), 'Sarcopterygii includes explicit transparency notice regarding living coelacanths/lungfishes');

// Chondrichthyes canonical species:
const chondrichthyesRecord = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'class-chondrichthyes');
assert(chondrichthyesRecord?.exampleSpeciesIds.includes('sp-chiloscyllium-indicum') ?? false, 'Chondrichthyes maps to canonical Chiloscyllium indicum');

// Cetacea canonical species:
const cetaceaRecord = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'order-cetacea');
assert(cetaceaRecord?.exampleSpeciesIds.includes('sp-orcaella-brevirostris') ?? false, 'Order Cetacea maps to canonical Orcaella brevirostris');

// Total species in dataset:
console.log(`  Total Verified Species in BiotaElite 2.0: ${SEED_SPECIES.length}`);
assert(SEED_SPECIES.length === 22, `Expected 22 verified species, found ${SEED_SPECIES.length}`);

// Finfishes vs Mammals separation:
const finfishes = SEED_SPECIES.filter(s => s.taxonomy.class === 'Actinopterygii' || s.taxonomy.class === 'Chondrichthyes');
const mammals = SEED_SPECIES.filter(s => s.taxonomy.class === 'Mammalia');
assert(finfishes.length === 20, `Expected exactly 20 finfish species (19 Ray-finned, 1 Shark), found ${finfishes.length}`);
assert(mammals.length === 2, `Expected exactly 2 aquatic mammals (1 Marine: Orcaella, 1 Freshwater: Platanista), found ${mammals.length}`);
const marineMammals = mammals.filter(m => m.habitat.systems.includes('marine') || m.habitat.systems.includes('brackish'));
assert(marineMammals.length === 1 && marineMammals[0].scientificName === 'Orcaella brevirostris', 'Marine portal strictly contains 1 marine mammal: Orcaella brevirostris');

console.log('\n--- 4. HTTP Routes & Dev Server Availability ---');
const routesToTest = [
  '/',
  '/species',
  '/fish',
  '/fish/class/class-chondrichthyes',
  '/fish/class/class-actinopterygii',
  '/fish/class/class-sarcopterygii',
  '/fish/order/order-cypriniformes',
  '/fish/order/order-orectolobiformes',
  '/marine',
  '/marine/phylum/phylum-mollusca',
  '/marine/phylum/phylum-cnidaria',
  '/marine/order/order-cetacea',
  '/bangladesh',
  '/taxonomy',
  '/scientific-names',
  '/identification',
  '/references',
  '/search',
  '/about',
  '/admin/taxonomy'
];

let routesChecked = 0;
for (const route of routesToTest) {
  const req = http.get(`http://localhost:2021${route}`, (res) => {
    routesChecked++;
    assert(res.statusCode === 200, `Route ${route} returned HTTP ${res.statusCode}`);
    if (routesChecked === routesToTest.length) {
      console.log('\n================================================================');
      console.log(`VERIFICATION SUMMARY: ${assertionsPassed} PASSED, ${assertionsFailed} FAILED`);
      console.log('================================================================');
      process.exit(assertionsFailed > 0 ? 1 : 0);
    }
  });
  req.on('error', (err) => {
    console.error(`  [FAIL] Route ${route} connection error: ${err.message}`);
    assertionsFailed++;
    routesChecked++;
    if (routesChecked === routesToTest.length) {
      process.exit(1);
    }
  });
}
