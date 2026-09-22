const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, relPath);
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

const { SEED_SPECIES } = loadTs('../src/data/seedSpecies.ts');

console.log('--- ARTHROPODA SPECIES ---');
const arth = SEED_SPECIES.filter(s => s.taxonomy?.phylum === 'Arthropoda');
console.log(`Total Arthropoda species: ${arth.length}`);
arth.forEach((s, i) => {
  console.log(`${i+1}. [${s.id}] ${s.scientificName} (${s.commonNames?.en?.[0] || 'no common'}) - subphylum: ${s.taxonomy?.subphylum || 'none'}, class: ${s.taxonomy?.class}`);
});

console.log('\n--- AMPHIBIA SPECIES ---');
const amph = SEED_SPECIES.filter(s => s.taxonomy?.class === 'Amphibia');
console.log(`Total Amphibia species: ${amph.length}`);
amph.forEach((s, i) => {
  console.log(`${i+1}. [${s.id}] ${s.scientificName} (${s.commonNames?.en?.[0] || 'no common'}) - order: ${s.taxonomy?.order}`);
});

console.log('\n--- CTENOPHORA SPECIES ---');
const cteno = SEED_SPECIES.filter(s => s.taxonomy?.phylum === 'Ctenophora');
console.log(`Total Ctenophora species: ${cteno.length}`);
cteno.forEach((s, i) => {
  console.log(`${i+1}. [${s.id}] ${s.scientificName} (${s.commonNames?.en?.[0] || 'no common'}) - class: ${s.taxonomy?.class}, order: ${s.taxonomy?.order}`);
});
