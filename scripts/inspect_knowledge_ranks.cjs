const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

const knowledge = loadTs('./src/data/seedTaxonKnowledge.ts').SEED_TAXON_KNOWLEDGE;

console.log('=== ALL NON-ORDER KNOWLEDGE RECORDS ===');
knowledge.filter(k => k.rank !== 'order').forEach(k => {
  console.log(`ID: ${k.id.padEnd(30)} | Rank: ${k.rank.padEnd(14)} | Category: ${k.category.padEnd(8)} | Name: ${k.scientificName} | TaxonId: ${k.taxonId} | Parent: ${k.parentTaxonId}`);
});

console.log('\n=== KNOWLEDGE SUMMARY BY RANK & CATEGORY ===');
const counts = {};
knowledge.forEach(k => {
  const key = `${k.category} - ${k.rank}`;
  counts[key] = (counts[key] || 0) + 1;
});
console.log(counts);
