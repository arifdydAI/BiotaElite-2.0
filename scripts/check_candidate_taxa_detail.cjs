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

console.log('--- TAXA CHECK FOR PENAEUS & DUTTAPHRYNUS ---');
const penaeusTaxa = SEED_TAXA.filter(t => t.scientificName.toLowerCase().includes('penae') || t.id.includes('penae'));
console.log('Penaeus / Penaeidae taxa in SEED_TAXA:', penaeusTaxa.map(t => `${t.id} (${t.rank}: ${t.scientificName})`));

const duttaTaxa = SEED_TAXA.filter(t => t.scientificName.toLowerCase().includes('dutta') || t.scientificName.toLowerCase().includes('bufon') || t.id.includes('dutta') || t.id.includes('bufon'));
console.log('Duttaphrynus / Bufonidae taxa in SEED_TAXA:', duttaTaxa.map(t => `${t.id} (${t.rank}: ${t.scientificName})`));
