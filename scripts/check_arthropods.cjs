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

const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
const arthropods = SEED_TAXA.filter(t => 
  t.id.includes('arthropod') || 
  t.parentId === 'taxon-arthropoda' || 
  t.parentTaxonId === 'taxon-arthropoda' ||
  (t.name && (t.name.toLowerCase().includes('arthropod') || t.scientificName.toLowerCase().includes('arthropod')))
);
console.log('Arthropod direct children in seedTaxa:');
console.log(arthropods.map(t => ({ id: t.id, scientificName: t.scientificName, rank: t.rank, parentId: t.parentId })));

// Let's see all subphyla/classes under Arthropoda
const allArthropodTree = [];
function findDescendants(parentId) {
  const children = SEED_TAXA.filter(t => t.parentId === parentId || t.parentTaxonId === parentId);
  for (const c of children) {
    allArthropodTree.push(c);
    findDescendants(c.id);
  }
}
findDescendants('taxon-arthropoda');
console.log('All descendants under taxon-arthropoda in seedTaxa:', allArthropodTree.map(t => ({ id: t.id, name: t.name, rank: t.rank, parent: t.parentId })));
