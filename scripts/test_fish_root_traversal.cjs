const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

let taxa = loadTs('./src/data/seedTaxa.ts').SEED_TAXA;

// 1. Check if taxon-fishes exists
if (!taxa.some(t => t.id === 'taxon-fishes')) {
  const fishRoot = {
    id: 'taxon-fishes',
    scientificName: 'Pisces',
    name: 'Pisces (Fishes)',
    rank: 'grade',
    parentTaxonId: 'taxon-chordata',
    parentId: 'taxon-chordata',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Linnaeus, 1758',
    commonNameEn: 'Fishes',
    commonNameBn: 'মাছসমূহ',
    banglaName: 'মাছসমূহ',
    description: 'Aquatic craniate vertebrates characterized by gills throughout life and paired or median limbs in the shape of fins.',
    speciesCount: 34000,
    isVerified: true,
    sourceReferences: [
      {
        source: "Eschmeyer's Catalog of Fishes (2026)",
        citation: 'California Academy of Sciences. On-line database.'
      },
      {
        source: 'Nelson et al. (2016)',
        citation: 'Fishes of the World (5th ed.). John Wiley & Sons.'
      }
    ]
  };
  taxa.unshift(fishRoot);
}

// 2. Update parents of top fish groups
taxa = taxa.map(t => {
  if (t.id === 'taxon-agnatha' || t.id === 'taxon-chondrichthyes' || t.id === 'taxon-osteichthyes') {
    return { ...t, parentTaxonId: 'taxon-fishes', parentId: 'taxon-fishes' };
  }
  return t;
});

// 3. Remove obsolete duplicate nodes taxon-myxini and taxon-petromyzontida
taxa = taxa.filter(t => t.id !== 'taxon-myxini' && t.id !== 'taxon-petromyzontida');

// 4. Verify traversal from every fish species up to taxon-fishes
const species = loadTs('./src/data/seedSpecies.ts').SEED_SPECIES;
const taxaMap = new Map(taxa.map(t => [t.id, t]));

let failures = 0;
species.filter(s => s.module === 'fish').forEach(sp => {
  let curId = sp.taxonId;
  let reachesRoot = false;
  let path = [sp.scientificName];
  while (curId) {
    const node = taxaMap.get(curId);
    if (!node) break;
    path.push(`${node.name} (${node.rank})`);
    if (node.id === 'taxon-fishes') {
      reachesRoot = true;
      break;
    }
    curId = node.parentId || node.parentTaxonId;
  }
  if (!reachesRoot) {
    console.error(`FAILED to reach taxon-fishes for ${sp.scientificName}: ${path.join(' -> ')}`);
    failures++;
  }
});

console.log(`Fish species reaching taxon-fishes: ${failures === 0 ? 'ALL REACH FISH ROOT' : failures + ' FAILED'}`);
