const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
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
const { DEPTH_SPECIES_RECORDS } = require('./data_depth_species.cjs');

const existingMap = new Map(SEED_SPECIES.map(s => [s.id, s]));

for (const s of DEPTH_SPECIES_RECORDS) {
  if (existingMap.has(s.id)) {
    const curr = existingMap.get(s.id);
    console.log(`Comparing ${s.id}:`);
    console.log(`  Current media count: ${curr.media ? curr.media.length : 0}, Depth media count: ${s.media ? s.media.length : 0}`);
    console.log(`  Current verified: ${curr.isVerified}, Depth verified: ${s.isVerified}`);
    console.log(`  Current taxonId: ${curr.taxonId}, Depth taxonId: ${s.taxonId}`);
  }
}
