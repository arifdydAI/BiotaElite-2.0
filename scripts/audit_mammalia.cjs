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
const { SEED_TAXA } = loadTs('../src/data/seedTaxa.ts');
const { SEED_IDENTIFICATION_KEYS } = loadTs('../src/data/seedIdentKeys.ts');

console.log('Total Canonical Species in seedSpecies.ts:', SEED_SPECIES.length);

const mammals = SEED_SPECIES.filter(s => s.taxonomy?.class === 'Mammalia');
console.log(`\nFound ${mammals.length} canonical Mammalia species:`);
mammals.forEach((m, i) => {
  console.log(`  ${i + 1}. [${m.id}] ${m.scientificName} (${m.commonNames?.en?.[0] || 'no common name'}) - order: ${m.taxonomy?.order}`);
});

console.log('\n--- Existing Mammalia Key ---');
const mamKey = SEED_IDENTIFICATION_KEYS.find(k => k.id === 'key-global-mammalia-lineages');
if (mamKey) {
  const reachableSp = new Set();
  mamKey.steps.forEach(st => {
    st.couplets.forEach(c => {
      if (c.resultType === 'species' && c.speciesId) reachableSp.add(c.speciesId);
    });
  });
  console.log(`Key ${mamKey.id} steps: ${mamKey.steps.length}`);
  console.log(`Species reachable in key: ${reachableSp.size}`);
  reachableSp.forEach(id => {
    const sp = SEED_SPECIES.find(s => s.id === id);
    console.log(`  - ${id}: ${sp ? sp.scientificName : 'NOT FOUND'}`);
  });
}
