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
const targetIds = [
  'sp-lumbricus-terrestris',
  'sp-eisenia-fetida',
  'sp-tubifex-tubifex',
  'sp-hirudo-medicinalis',
  'sp-sabella-spallanzanii',
  'sp-arenicola-marina',
  'sp-alitta-virens'
];

for (const id of targetIds) {
  const s = SEED_SPECIES.find(x => x.id === id);
  if (!s) {
    console.log('NOT FOUND:', id);
    continue;
  }
  console.log('Species:', s.scientificName, `(${s.id})`);
  console.log('  taxonId:', s.taxonId);
  console.log('  speciesPriority:', s.speciesPriority);
  console.log('  provenance:', JSON.stringify(s.provenance));
  console.log('  referenceIds:', s.referenceIds);
  console.log('  media count:', s.media ? s.media.length : 0);
  if (s.media && s.media.length > 0) {
    console.log('    image[0] id:', s.media[0].id);
    console.log('    image[0] url:', s.media[0].url);
    console.log('    image[0] verified:', s.media[0].isVerified);
  }
}
