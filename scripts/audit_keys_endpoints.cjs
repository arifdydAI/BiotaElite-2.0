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

const { SEED_IDENTIFICATION_KEYS } = loadTs('../src/data/seedIdentKeys.ts');
const { SEED_SPECIES } = loadTs('../src/data/seedSpecies.ts');
const { SEED_TAXA } = loadTs('../src/data/seedTaxa.ts');

const spMap = new Map(SEED_SPECIES.map(s => [s.id, s]));
const txMap = new Map(SEED_TAXA.map(t => [t.id, t]));

console.log(`--- CURRENT KEYS IN SEED_IDENTIFICATION_KEYS (${SEED_IDENTIFICATION_KEYS.length} keys) ---`);
SEED_IDENTIFICATION_KEYS.forEach((k, idx) => {
  const speciesList = [];
  const taxonList = [];
  k.steps.forEach(s => {
    s.couplets.forEach(c => {
      if (c.resultType === 'species' && c.speciesId) speciesList.push(c.speciesId);
      if (c.resultType === 'taxon' && c.taxonId) taxonList.push(c.taxonId);
    });
  });
  console.log(`\n${idx + 1}. [${k.scope}] [${k.majorGroup}] (${k.keyType}) ID: ${k.id}`);
  console.log(`   Title: ${k.title}`);
  console.log(`   Target Taxon: ${k.targetTaxonId}`);
  console.log(`   Steps: ${k.steps.length}`);
  console.log(`   Species endpoints (${speciesList.length}): ${speciesList.join(', ')}`);
  console.log(`   Taxon endpoints (${taxonList.length}): ${taxonList.join(', ')}`);
});
