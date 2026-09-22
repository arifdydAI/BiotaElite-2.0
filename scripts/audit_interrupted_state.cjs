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

const { SEED_IDENTIFICATION_KEYS } = loadTs('../src/data/seedIdentKeys.ts');
const { SEED_SPECIES } = loadTs('../src/data/seedSpecies.ts');
const { SEED_TAXA } = loadTs('../src/data/seedTaxa.ts');

console.log('--- 1. Check Penaeus monodon & Duttaphrynus melanostictus ---');
const spPenaeus = SEED_SPECIES.find(s => s.id === 'sp-penaeus-monodon' || s.scientificName.toLowerCase().includes('penaeus monodon'));
const spDutta = SEED_SPECIES.find(s => s.id === 'sp-duttaphrynus-melanostictus' || s.scientificName.toLowerCase().includes('duttaphrynus melanostictus'));
console.log('Penaeus monodon in SEED_SPECIES:', spPenaeus ? `YES (${spPenaeus.id})` : 'NO');
console.log('Duttaphrynus melanostictus in SEED_SPECIES:', spDutta ? `YES (${spDutta.id})` : 'NO');

const taxonPenaeus = SEED_TAXA.find(t => t.id.includes('penaeus'));
const taxonDutta = SEED_TAXA.find(t => t.id.includes('duttaphrynus'));
console.log('Penaeus in SEED_TAXA:', taxonPenaeus ? `YES (${taxonPenaeus.id})` : 'NO');
console.log('Duttaphrynus in SEED_TAXA:', taxonDutta ? `YES (${taxonDutta.id})` : 'NO');

console.log('\n--- 2. Check Annelida Key targetTaxonId ---');
const annelidaKey = SEED_IDENTIFICATION_KEYS.find(k => k.id === 'key-global-annelida-lineages');
if (annelidaKey) {
  console.log('Annelida Key targetTaxonId:', annelidaKey.targetTaxonId);
  console.log('Annelida Key taxonScope:', annelidaKey.taxonScope);
  const targetNode = SEED_TAXA.find(t => t.id === annelidaKey.targetTaxonId);
  console.log('Target Node in SEED_TAXA:', targetNode ? `${targetNode.id} -> ${targetNode.name} (rank: ${targetNode.rank})` : 'NOT FOUND');
}

console.log('\n--- 3. Check All Annelida Nodes in SEED_TAXA ---');
const annelidaNodes = SEED_TAXA.filter(t => t.scientificName.toLowerCase() === 'annelida' || t.name.toLowerCase() === 'annelida' || t.id.includes('annelida'));
annelidaNodes.forEach(t => console.log(`  - [${t.id}] ${t.name} (rank: ${t.rank}, parent: ${t.parentId})`));

console.log('\n--- 4. Check Beroe species in SEED_SPECIES & Keys ---');
const beroeSpecies = SEED_SPECIES.filter(s => s.scientificName.toLowerCase().includes('beroe'));
beroeSpecies.forEach(s => console.log(`  - Species: [${s.id}] ${s.scientificName} (${s.taxonomicStatus})`));
SEED_IDENTIFICATION_KEYS.forEach(k => {
  k.steps.forEach(st => {
    st.couplets.forEach(c => {
      if (c.speciesId && c.speciesId.includes('beroe')) {
        console.log(`  - Referenced in key ${k.id} step ${st.id}: speciesId = ${c.speciesId}`);
      }
    });
  });
});

console.log('\n--- 5. Audit Mammalia Species in SEED_SPECIES ---');
const mammaliaSpecies = SEED_SPECIES.filter(s => s.taxonomy?.class?.toLowerCase() === 'mammalia');
console.log(`Total Mammalia in SEED_SPECIES: ${mammaliaSpecies.length}`);
mammaliaSpecies.forEach(s => console.log(`  - [${s.id}] ${s.scientificName} ("${s.commonNames?.en?.[0] || ''}")`));

console.log('\n--- 6. Check Bangladesh Wetland Herpetofauna Key ---');
const bdHerpKey = SEED_IDENTIFICATION_KEYS.find(k => k.id.includes('herpetofauna') || k.id.includes('wetland') || k.id.includes('amphibian') || k.title.toLowerCase().includes('herpetofauna'));
console.log('Bangladesh Wetland Herpetofauna Key:', bdHerpKey ? `FOUND: ${bdHerpKey.id}` : 'NOT FOUND');

console.log('\n--- 7. Total Species Count in SEED_SPECIES ---');
console.log(`Total SEED_SPECIES: ${SEED_SPECIES.length}`);

console.log('\n--- 8. Distinct Species in Identification Keys ---');
const allReferencedSpecies = new Set();
SEED_IDENTIFICATION_KEYS.forEach(k => {
  k.steps.forEach(st => {
    st.couplets.forEach(c => {
      if (c.resultType === 'species' && c.speciesId) {
        allReferencedSpecies.add(c.speciesId);
      }
    });
  });
});
console.log(`Distinct species in all keys: ${allReferencedSpecies.size}`);
