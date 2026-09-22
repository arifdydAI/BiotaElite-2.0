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
console.log('Real count of species in SEED_SPECIES:', SEED_SPECIES.length);

const bdTrue = SEED_SPECIES.filter(s => s.bangladeshOccurrence && s.bangladeshOccurrence.present === true);
console.log('Real count of species with bangladeshOccurrence.present === true:', bdTrue.length);
bdTrue.forEach((s, idx) => console.log(`  ${idx + 1}. [${s.id}] ${s.scientificName} ("${s.commonNames?.en?.[0] || ''}")`));
