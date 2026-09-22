const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = path.resolve(__dirname, '..');

function loadTs(relPath) {
  const fullPath = path.resolve(rootDir, relPath);
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

const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');

const withProv = SEED_SPECIES.filter(s => s.provenance);
console.log('Species with provenance count:', withProv.length);
if (withProv.length > 0) {
  console.log('Sample provenance:', JSON.stringify(withProv[0].provenance, null, 2));
}

const badResidency = SEED_SPECIES.filter(s => s.bangladeshOccurrence && s.bangladeshOccurrence.residencyStatus === 'extralimital');
console.log('Species with residencyStatus extralimital:', badResidency.length);
