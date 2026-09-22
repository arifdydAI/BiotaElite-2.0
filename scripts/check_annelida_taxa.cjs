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
const hasAnnelidaPlain = SEED_TAXA.find(t => t.id === 'taxon-annelida');
const hasAnnelidaMarine = SEED_TAXA.find(t => t.id === 'taxon-annelida-marine');

console.log('taxon-annelida exists:', !!hasAnnelidaPlain);
console.log('taxon-annelida-marine exists:', !!hasAnnelidaMarine);
if (hasAnnelidaMarine) {
  console.log('hasAnnelidaMarine details:', JSON.stringify({
    id: hasAnnelidaMarine.id,
    name: hasAnnelidaMarine.name,
    rank: hasAnnelidaMarine.rank,
    parentId: hasAnnelidaMarine.parentId
  }));
}
