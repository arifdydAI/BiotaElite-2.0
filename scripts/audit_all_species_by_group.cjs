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

const byGroup = {};
SEED_SPECIES.forEach(sp => {
  const phylum = sp.taxonomy?.phylum || 'Unknown Phylum';
  const cls = sp.taxonomy?.class || 'Unknown Class';
  const key = `${phylum} -> ${cls}`;
  if (!byGroup[key]) byGroup[key] = [];
  byGroup[key].push(sp);
});

console.log('--- CANONICAL SPECIES BY PHYLUM & CLASS ---');
Object.keys(byGroup).sort().forEach(k => {
  console.log(`\n${k} (${byGroup[k].length} species):`);
  byGroup[k].forEach(s => {
    console.log(`  - [${s.id}] ${s.scientificName} (${s.commonNames?.en?.[0] || 'No common name'})`);
  });
});
