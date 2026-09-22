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

// Check duplicate names by rank
const nameRankMap = {};
taxa.forEach(t => {
  const key = `${t.rank}:${t.name.toLowerCase()}`;
  if (!nameRankMap[key]) nameRankMap[key] = [];
  nameRankMap[key].push(t);
});

console.log('=== DUPLICATE TAXA IN SEEDTAXA.TS ===');
let dupCount = 0;
for (const [key, list] of Object.entries(nameRankMap)) {
  if (list.length > 1) {
    dupCount++;
    console.log(`Duplicate found for [${key}]:`);
    list.forEach(item => {
      console.log(`  - ID: ${item.id}, Parent: ${item.parentId || item.parentTaxonId}, Status: ${item.status}`);
    });
  }
}
if (dupCount === 0) console.log('No duplicate taxa found by rank & name.');

// Check for orphan taxa (parent does not exist)
console.log('\n=== ORPHAN TAXA IN SEEDTAXA.TS ===');
const idMap = new Set(taxa.map(t => t.id));
let orphanCount = 0;
taxa.forEach(t => {
  const p = t.parentId || t.parentTaxonId;
  if (p && !idMap.has(p) && p !== 'taxon-life' && p !== 'taxon-root') {
    orphanCount++;
    console.log(`Orphan Taxon: ${t.name} (${t.id}, rank=${t.rank}) -> missing parent: ${p}`);
  }
});
if (orphanCount === 0) console.log('No orphan taxa found in seedTaxa.ts.');
