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

const { SEED_TAXON_KNOWLEDGE } = loadTs('src/data/seedTaxonKnowledge.ts');
console.log('Total SEED_TAXON_KNOWLEDGE records:', SEED_TAXON_KNOWLEDGE.length);

const knowledgeWithExamples = SEED_TAXON_KNOWLEDGE.filter(k => k.exampleSpeciesIds && k.exampleSpeciesIds.length > 0);
console.log('Knowledge records with example species IDs:', knowledgeWithExamples.length);
