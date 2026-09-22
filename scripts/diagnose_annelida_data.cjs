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

const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
const { SEED_TAXON_KNOWLEDGE } = loadTs('src/data/seedTaxonKnowledge.ts');
const { compareSpeciesByPriority, getSpeciesPriorityRank } = loadTs('src/types/biodiversity.ts');

const taxaMap = new Map(SEED_TAXA.map(t => [t.id, t]));
const speciesMap = new Map(SEED_SPECIES.map(s => [s.id, s]));

console.log('Total taxa:', SEED_TAXA.length);
console.log('Total species:', SEED_SPECIES.length);
console.log('Total taxon knowledge:', SEED_TAXON_KNOWLEDGE.length);

const targetSpeciesIds = [
  'sp-lumbricus-terrestris',
  'sp-eisenia-fetida',
  'sp-tubifex-tubifex',
  'sp-hirudo-medicinalis',
  'sp-sabella-spallanzanii',
  'sp-arenicola-marina',
  'sp-alitta-virens'
];

console.log('\n--- 1. TARGET ANNELIDA SPECIES INSPECTION ---');
for (const spId of targetSpeciesIds) {
  const sp = speciesMap.get(spId);
  if (!sp) {
    console.error(`MISSING SPECIES: ${spId}`);
    continue;
  }
  
  // Trace ancestry
  const lineage = [];
  let curr = taxaMap.get(sp.taxonId);
  while (curr) {
    lineage.push(`${curr.rank}: ${curr.scientificName} (${curr.id})`);
    if (curr.rank === 'kingdom' || !curr.parentTaxonId) break;
    curr = taxaMap.get(curr.parentTaxonId);
  }
  
  console.log(`\nSpecies: ${sp.scientificName} [${sp.id}]`);
  console.log(`  Priority: ${sp.speciesPriority} (Rank: ${getSpeciesPriorityRank(sp)})`);
  console.log(`  Taxon: ${sp.taxonId}`);
  console.log(`  Taxonomy obj: Phylum=${sp.taxonomy?.phylum}, Class=${sp.taxonomy?.class}, Order=${sp.taxonomy?.order}, Family=${sp.taxonomy?.family}, Genus=${sp.taxonomy?.genus}`);
  console.log(`  Lineage traversal: ${lineage.join(' -> ')}`);
}

console.log('\n--- 2. CTENOPHORA SPECIES CHECK ---');
const ctenoSpeciesIds = [
  'sp-pleurobrachia-pileus',
  'sp-beroe-ovata',
  'sp-mnemiopsis-leidyi',
  'sp-cestum-veneris'
];
for (const spId of ctenoSpeciesIds) {
  const sp = speciesMap.get(spId);
  if (!sp) {
    console.log(`Ctenophora species ${spId}: not found in speciesMap directly, checking by name...`);
  } else {
    console.log(`Ctenophora species: ${sp.scientificName} [${sp.id}]`);
    console.log(`  Taxonomy phylum: ${sp.taxonomy?.phylum}, taxonId: ${sp.taxonId}`);
    let curr = taxaMap.get(sp.taxonId);
    const lineage = [];
    while (curr) {
      lineage.push(curr.scientificName);
      curr = taxaMap.get(curr.parentTaxonId);
    }
    console.log(`  Lineage: ${lineage.join(' -> ')}`);
  }
}

console.log('\n--- 3. ALL SPECIES WITH PHYLUM ANNELIDA ---');
const annelidaSpecies = SEED_SPECIES.filter(s => {
  if (s.taxonomy?.phylum?.toLowerCase() === 'annelida') return true;
  let curr = taxaMap.get(s.taxonId);
  while (curr) {
    if (curr.id === 'taxon-annelida' || curr.id === 'taxon-annelida-marine' || curr.scientificName.toLowerCase() === 'annelida') return true;
    curr = taxaMap.get(curr.parentTaxonId);
  }
  return false;
});
console.log(`Found ${annelidaSpecies.length} species matching Annelida:`);
annelidaSpecies.sort(compareSpeciesByPriority);
for (const sp of annelidaSpecies) {
  console.log(`  - [${sp.speciesPriority || 'default'}] ${sp.scientificName} (${sp.commonNames?.en?.[0] || 'No common name'})`);
}

console.log('\n--- 4. TAXON KNOWLEDGE RECORD FOR ANNELIDA ---');
const tk = SEED_TAXON_KNOWLEDGE.find(k => k.canonicalSlug === 'annelida' || k.scientificName.toLowerCase() === 'annelida');
if (tk) {
  console.log(`ID: ${tk.id}`);
  console.log(`Scientific Name: ${tk.scientificName}`);
  console.log(`English Name: ${tk.englishName}`);
  console.log(`Bengali Name: ${tk.bengaliName}`);
  console.log(`Category: ${tk.category}`);
  console.log(`Systems: ${JSON.stringify(tk.habitat?.systems)}`);
  console.log(`Example Species IDs: ${JSON.stringify(tk.exampleSpeciesIds)}`);
} else {
  console.log('No Taxon Knowledge record found for Annelida!');
}
