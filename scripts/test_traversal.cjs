const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

const taxa = loadTs('./src/data/seedTaxa.ts').SEED_TAXA;
const species = loadTs('./src/data/seedSpecies.ts').SEED_SPECIES;
const taxaMap = new Map(taxa.map(t => [t.id, t]));

console.log('=== VERIFYING GRAPH TRAVERSAL FOR ALL FISH SPECIES ===\n');

let allValid = true;

species.filter(s => s.module === 'fish').forEach(sp => {
  const chain = [sp.scientificName];
  let curId = sp.taxonId;
  let hasOrder = false;
  let hasClass = false;
  let reachesFishRoot = false;

  while (curId) {
    const node = taxaMap.get(curId);
    if (!node) {
      console.error(`Broken link in chain for ${sp.scientificName}: missing taxon node ${curId}`);
      allValid = false;
      break;
    }
    chain.push(`${node.name} (${node.rank})`);
    if (node.rank === 'order') hasOrder = true;
    if (node.rank === 'class' || node.rank === 'subclass') hasClass = true;
    if (node.id === 'taxon-fishes' || node.id === 'taxon-root-fish') reachesFishRoot = true;

    curId = node.parentId || node.parentTaxonId;
    if (curId === 'taxon-root' || curId === 'taxon-life' || curId === null) {
      break;
    }
  }

  const status = reachesFishRoot && hasOrder ? 'OK' : 'FAIL';
  console.log(`[${status}] ${sp.scientificName}:`);
  console.log('     Path: ' + chain.join(' -> '));
  if (!reachesFishRoot) {
    console.error(`     ERROR: Did not reach fish root!`);
    allValid = false;
  }
});

console.log('\nGraph traversal status for fish species:', allValid ? 'ALL VALID' : 'FAILED');
