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
const { SEED_TAXON_KNOWLEDGE } = loadTs('src/data/seedTaxonKnowledge.ts');

const speciesIds = new Set(SEED_SPECIES.map(s => s.id));
let broken = 0;
for (const k of SEED_TAXON_KNOWLEDGE) {
  if (k.exampleSpeciesIds) {
    for (const sid of k.exampleSpeciesIds) {
      if (!speciesIds.has(sid)) {
        console.log(`Missing example species: ${sid} in knowledge record ${k.id}`);
        broken++;
      }
    }
  }
}
console.log(`Broken exampleSpeciesIds count: ${broken}`);
