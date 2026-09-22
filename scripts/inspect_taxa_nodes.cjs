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

const { SEED_TAXA } = loadTs('../src/data/seedTaxa.ts');
const b = SEED_TAXA.find(t => t.id === 'taxon-bufonidae');
console.log('Bufonidae:', JSON.stringify(b, null, 2));

const anura = SEED_TAXA.find(t => t.scientificName.toLowerCase() === 'anura' || t.id.includes('anura'));
console.log('Anura:', JSON.stringify(anura, null, 2));

const decapod = SEED_TAXA.find(t => t.scientificName.toLowerCase() === 'decapoda' || t.id.includes('decapoda'));
console.log('Decapoda:', JSON.stringify(decapod, null, 2));

const malacostraca = SEED_TAXA.find(t => t.scientificName.toLowerCase() === 'malacostraca' || t.id.includes('malacostraca'));
console.log('Malacostraca:', JSON.stringify(malacostraca, null, 2));
