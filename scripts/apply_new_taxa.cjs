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

const taxaFile = path.resolve(__dirname, '../src/data/seedTaxa.ts');
const { SEED_TAXA } = loadTs(taxaFile);
console.log('Current taxa count:', SEED_TAXA.length);

const newTaxa = [
  {
    id: "taxon-penaeidae",
    scientificName: "Penaeidae",
    name: "Penaeidae",
    rank: "family",
    parentTaxonId: "taxon-decapoda",
    parentId: "taxon-decapoda",
    status: "accepted",
    module: "marine",
    authorYear: "Rafinesque, 1815",
    commonNameEn: "Penaeid Shrimps & Tiger Prawns",
    commonNameBn: "পেনেইড চিংড়ি পরিবার",
    isVerified: true,
    sourceReferences: [
      {
        source: "World Register of Marine Species",
        citation: "WoRMS, 2026."
      }
    ]
  },
  {
    id: "taxon-penaeus",
    scientificName: "Penaeus",
    name: "Penaeus",
    rank: "genus",
    parentTaxonId: "taxon-penaeidae",
    parentId: "taxon-penaeidae",
    status: "accepted",
    module: "marine",
    authorYear: "Fabricius, 1798",
    commonNameEn: "Tiger Prawns",
    commonNameBn: "পেনিয়াস চিংড়ি",
    isVerified: true,
    sourceReferences: [
      {
        source: "World Register of Marine Species",
        citation: "WoRMS, 2026."
      }
    ]
  },
  {
    id: "taxon-duttaphrynus",
    scientificName: "Duttaphrynus",
    name: "Duttaphrynus",
    rank: "genus",
    parentTaxonId: "taxon-bufonidae",
    parentId: "taxon-bufonidae",
    status: "accepted",
    module: "general",
    authorYear: "Frost et al., 2006",
    commonNameEn: "Asian Toads",
    commonNameBn: "কুনোব্যাঙ",
    isVerified: true,
    sourceReferences: [
      {
        source: "AmphibiaWeb",
        citation: "AmphibiaWeb, 2026."
      }
    ]
  }
];

const existingIds = new Set(SEED_TAXA.map(t => t.id));
const toAdd = newTaxa.filter(t => !existingIds.has(t.id));

if (toAdd.length === 0) {
  console.log('All new taxa already present!');
} else {
  console.log(`Adding ${toAdd.length} new taxa...`);
  const updatedTaxa = [...SEED_TAXA, ...toAdd];
  
  // Format as TypeScript file
  const header = `import type { TaxonNode } from '../types/biodiversity';\n\nexport const SEED_TAXA: TaxonNode[] = `;
  fs.writeFileSync(taxaFile, header + JSON.stringify(updatedTaxa, null, 2) + ';\n', 'utf8');
  console.log('Successfully updated seedTaxa.ts! New count:', updatedTaxa.length);
}
