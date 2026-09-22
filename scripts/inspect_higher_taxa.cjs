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

const higher = taxa.filter(t => ['root', 'kingdom', 'phylum', 'subphylum', 'infraphylum', 'superclass', 'class', 'subclass', 'infraclass'].includes(t.rank) || t.id.includes('fish') || t.id.includes('agnatha') || t.id.includes('chondrichthyes') || t.id.includes('osteichthyes'));

console.log('=== HIGHER TAXA IN SEEDTAXA.TS ===');
higher.forEach(t => {
  console.log(`ID: ${t.id.padEnd(30)} | Name: ${t.name.padEnd(20)} | Rank: ${t.rank.padEnd(12)} | Parent: ${t.parentId || t.parentTaxonId}`);
});
