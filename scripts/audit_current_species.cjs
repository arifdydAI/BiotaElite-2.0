const fs = require('fs');
const ts = require('typescript');

function loadTs(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

const species = loadTs('./src/data/seedSpecies.ts').SEED_SPECIES;
const taxa = loadTs('./src/data/seedTaxa.ts').SEED_TAXA;

const taxaMap = new Map(taxa.map(t => [t.id, t]));
const fishOrders = taxa.filter(t => t.rank === 'order' && (t.module === 'fish' || t.module === 'general'));

console.log('====================================================');
console.log('CURRENT SPECIES DATASET AUDIT (MASTER-FIX-10 STEP 1)');
console.log('====================================================\n');

console.log(`Total species in seedSpecies.ts: ${species.length}`);
console.log(`Fish species: ${species.filter(s => s.module === 'fish').length}`);
console.log(`Marine species: ${species.filter(s => s.module === 'marine').length}`);
console.log(`Total Fish Orders in seedTaxa.ts: ${fishOrders.length}`);

// Check orders represented
const speciesOrders = new Set();
const speciesFamilies = new Set();
const speciesGenera = new Set();

const orderCounts = {};
species.forEach(s => {
  const ord = s.taxonomy.order || 'Unknown';
  orderCounts[ord] = (orderCounts[ord] || 0) + 1;
  speciesOrders.add(ord.toLowerCase());
  if (s.taxonomy.family) speciesFamilies.add(s.taxonomy.family.toLowerCase());
  if (s.taxonomy.genus) speciesGenera.add(s.taxonomy.genus.toLowerCase());
});

console.log('\n--- Species by Order in seedSpecies.ts ---');
Object.entries(orderCounts).forEach(([ord, count]) => {
  console.log(`  ${ord.padEnd(25)}: ${count} species`);
});

console.log(`\nUnique Orders represented: ${speciesOrders.size}`);
console.log(`Unique Families represented: ${speciesFamilies.size}`);
console.log(`Unique Genera represented: ${speciesGenera.size}`);

// Which of the 73 fish orders currently have 0 species?
const unrepresentedFishOrders = fishOrders.filter(o => !speciesOrders.has(o.scientificName.toLowerCase()));
console.log(`\nFish Orders with ZERO species records (${unrepresentedFishOrders.length} / ${fishOrders.length}):`);
unrepresentedFishOrders.forEach((o, idx) => {
  console.log(`  ${(idx + 1).toString().padStart(2, ' ')}. ${o.scientificName} (${o.id})`);
});

// Image verification stats
let verifiedImages = 0;
let unavailableImages = 0;
let emptyMedia = 0;
let missingProvenance = 0;

species.forEach(s => {
  if (s.imageVerificationStatus === 'verified') verifiedImages++;
  else if (s.imageVerificationStatus === 'unavailable') unavailableImages++;
  
  if (!s.media || s.media.length === 0) {
    emptyMedia++;
  } else {
    const m = s.media[0];
    if (!m.sourceUrl || !m.license || !m.sourceName) missingProvenance++;
  }
});

console.log('\n--- Image & Provenance Status ---');
console.log(`Species with verified images: ${verifiedImages}`);
console.log(`Species with unavailable images: ${unavailableImages}`);
console.log(`Species with empty media array: ${emptyMedia}`);
console.log(`Species with missing provenance metadata: ${missingProvenance}`);

// Check species taxonomy link integrity
let brokenTaxonId = 0;
species.forEach(s => {
  if (!s.taxonId || !taxaMap.has(s.taxonId)) brokenTaxonId++;
});
console.log(`Species with broken taxonId: ${brokenTaxonId}`);
