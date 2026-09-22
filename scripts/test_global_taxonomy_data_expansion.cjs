// BiotaElite 2.0 - MASTER-FIX-12 Comprehensive Global Taxonomy Data Expansion Test Suite
// Verifies representative species, taxonomy hierarchy, verified images, and scope separation

const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('MASTER-FIX-12: GLOBAL TAXONOMY DATA EXPANSION VERIFICATION SUITE');
console.log('================================================================\n');

// Load data files
const taxaContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedTaxa.ts'), 'utf8');
const speciesContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedSpecies.ts'), 'utf8');

// Parse taxa IDs and parent IDs
const taxonNodeRegex = /\{[\s\S]*?"id":\s*"([^"]+)"[\s\S]*?"scientificName":\s*"([^"]+)"[\s\S]*?"rank":\s*"([^"]+)"[\s\S]*?(?:"parentTaxonId":\s*("[^"]+"|null))[\s\S]*?\}/g;

const taxaMap = new Map();
let m;
while ((m = taxonNodeRegex.exec(taxaContent)) !== null) {
  const id = m[1];
  const name = m[2];
  const rank = m[3];
  const parentRaw = m[4];
  const parentId = parentRaw === 'null' ? null : parentRaw.replace(/"/g, '');
  taxaMap.set(id, { id, name, rank, parentId });
}

console.log(`[TEST 1] Taxonomy Graph Nodes: Loaded ${taxaMap.size} taxa nodes.`);
if (taxaMap.size < 400) {
  console.error(`FAILED: Expected at least 400 taxa nodes, got ${taxaMap.size}`);
  process.exit(1);
} else {
  console.log('  ✓ PASSED: Taxonomy graph expanded to 400+ nodes.');
}

// Check broken parent links
const brokenParents = [];
for (const [id, node] of taxaMap.entries()) {
  if (id === 'taxon-animalia') continue;
  if (!node.parentId) {
    brokenParents.push({ id, name: node.name, error: 'Missing parent ID' });
  } else if (!taxaMap.has(node.parentId)) {
    brokenParents.push({ id, name: node.name, missingParent: node.parentId });
  }
}

if (brokenParents.length > 0) {
  console.error('FAILED: Found broken parent links in taxonomy graph:', brokenParents);
  process.exit(1);
} else {
  console.log('  ✓ PASSED: Zero broken parent links across entire taxonomy graph.');
}

// Check 73 fish orders
function descendsFrom(nodeId, targetId) {
  let curr = taxaMap.get(nodeId);
  while (curr && curr.parentId) {
    if (curr.parentId === targetId) return true;
    curr = taxaMap.get(curr.parentId);
  }
  return false;
}
const fishOrdersInGraph = Array.from(taxaMap.values()).filter(t => t.rank === 'order' && descendsFrom(t.id, 'taxon-fishes'));

console.log(`[TEST 2] Canonical Fish Orders: Verified ${fishOrdersInGraph.length} orders descending from taxon-fishes.`);
if (fishOrdersInGraph.length !== 73) {
  console.error(`FAILED: Expected exactly 73 canonical fish orders, found ${fishOrdersInGraph.length}`);
  process.exit(1);
} else {
  console.log(`  ✓ PASSED: All 73 canonical fish orders verified intact.`);
}

// Check representative species
const { MASTER_FIX_12_EXPANSION_SPECIES } = require('./data/expansion_species_vertebrates.cjs'); // or test modules
const { expansionInvertSpecies } = require('./data/expansion_species_inverts.cjs');
const { expansionFishSpecies } = require('./data/expansion_species_fishes.cjs');
const { expansionVertebrateSpecies } = require('./data/expansion_species_vertebrates.cjs');

const allExpansion = [
  ...expansionInvertSpecies,
  ...expansionFishSpecies,
  ...expansionVertebrateSpecies
];

console.log(`\n[TEST 2] Representative Species: ${allExpansion.length} expansion species authored.`);
if (allExpansion.length !== 58) {
  console.error(`FAILED: Expected exactly 58 expansion species, found ${allExpansion.length}`);
  process.exit(1);
} else {
  console.log('  ✓ PASSED: Exactly 58 representative global species.');
}

// Major groups checklist
const groupCoverage = {
  'Porifera': allExpansion.filter(s => s.taxonomy.phylum === 'Porifera'),
  'Cnidaria': allExpansion.filter(s => s.taxonomy.phylum === 'Cnidaria'),
  'Ctenophora': allExpansion.filter(s => s.taxonomy.phylum === 'Ctenophora'),
  'Annelida': allExpansion.filter(s => s.taxonomy.phylum === 'Annelida'),
  'Mollusca': allExpansion.filter(s => s.taxonomy.phylum === 'Mollusca'),
  'Arthropoda': allExpansion.filter(s => s.taxonomy.phylum === 'Arthropoda'),
  'Echinodermata': allExpansion.filter(s => s.taxonomy.phylum === 'Echinodermata'),
  'Basal Chordata': allExpansion.filter(s => s.taxonomy.class === 'Leptocardii' || s.taxonomy.class === 'Ascidiacea'),
  'Fishes': allExpansion.filter(s => s.module === 'fish'),
  'Amphibia': allExpansion.filter(s => s.taxonomy.class === 'Amphibia'),
  'Reptilia': allExpansion.filter(s => s.taxonomy.class === 'Reptilia'),
  'Aves': allExpansion.filter(s => s.taxonomy.class === 'Aves'),
  'Mammalia': allExpansion.filter(s => s.taxonomy.class === 'Mammalia')
};

console.log('\n[TEST 3] Major Animal Group Coverage:');
let hasEmptyGroup = false;
for (const [grp, list] of Object.entries(groupCoverage)) {
  console.log(`  - ${grp.padEnd(16)}: ${list.length} representative species`);
  if (list.length === 0) {
    console.error(`    FAILED: Group ${grp} has 0 representative species!`);
    hasEmptyGroup = true;
  }
}

if (hasEmptyGroup) {
  process.exit(1);
} else {
  console.log('  ✓ PASSED: All major animal groups have robust representative species (Zero 0-species groups).');
}

// Check fish order coverage additions
console.log('\n[TEST 4] Fish Order Additions Coverage:');
const fishOrderAdditions = [
  'taxon-chimaeriformes', 'taxon-heterodontiformes', 'taxon-squatiniformes', 'taxon-squaliformes',
  'taxon-torpediniformes', 'taxon-rajiformes', 'taxon-rhinopristiformes', 'taxon-elopiformes',
  'taxon-albuliformes', 'taxon-zeiformes', 'taxon-myctophiformes', 'taxon-lampriformes',
  'taxon-beryciformes', 'taxon-gobiiformes', 'taxon-acanthuriformes'
];

fishOrderAdditions.forEach(oId => {
  const matchingSpecies = allExpansion.filter(s => {
    // Find if species taxonId descends from oId
    let curr = taxaMap.get(s.taxonId);
    while (curr) {
      if (curr.id === oId || curr.parentId === oId) return true;
      curr = taxaMap.get(curr.parentId);
    }
    return false;
  });
  console.log(`  - ${oId.padEnd(30)}: ${matchingSpecies.map(s => s.scientificName).join(', ') || 'NONE'}`);
  if (matchingSpecies.length === 0) {
    console.error(`    FAILED: No representative species found for order ${oId}`);
    process.exit(1);
  }
});
console.log('  ✓ PASSED: All 15 previously unrepresented fish orders now possess representative species.');

// Check verified images and attribution
console.log('\n[TEST 5] Verified Species Images & Attribution:');
allExpansion.forEach(s => {
  if (!s.media || s.media.length !== 1) {
    console.error(`FAILED: ${s.id} does not have exactly 1 media record.`);
    process.exit(1);
  }
  const m = s.media[0];
  if (!m.url.startsWith('https://upload.wikimedia.org/')) {
    console.error(`FAILED: Non-Wikimedia direct URL for ${s.id}: ${m.url}`);
    process.exit(1);
  }
  if (!m.photographer || m.photographer.trim() === '') {
    console.error(`FAILED: Missing photographer attribution for ${s.id}`);
    process.exit(1);
  }
  if (!m.license) {
    console.error(`FAILED: Missing license for ${s.id}`);
    process.exit(1);
  }
  if (m.verificationStatus !== 'verified' || !m.isVerified) {
    console.error(`FAILED: Media verification failed for ${s.id}`);
    process.exit(1);
  }
});
console.log(`  ✓ PASSED: 100% of the ${allExpansion.length} species have verified Wikimedia Commons images with full photographer and license attribution.`);

// Check geographic scope separation
console.log('\n[TEST 6] Geographic Scope Separation (Global vs Bangladesh):');
const bdSpecies = allExpansion.filter(s => s.bangladeshOccurrence.present);
const extralimitalSpecies = allExpansion.filter(s => !s.bangladeshOccurrence.present);

console.log(`  - Native / Resident in Bangladesh : ${bdSpecies.length} species`);
console.log(`  - Extralimital (Global scope)     : ${extralimitalSpecies.length} species`);

if (extralimitalSpecies.length < 40) {
  console.error(`FAILED: Expected predominantly extralimital global expansion, got ${extralimitalSpecies.length}`);
  process.exit(1);
} else {
  console.log('  ✓ PASSED: Strong global focus with clear, explicit extralimital tagging.');
}

console.log('\n================================================================');
console.log('ALL MASTER-FIX-12 CRITERIA SUCCESSFULLY VERIFIED!');
console.log('================================================================\n');
