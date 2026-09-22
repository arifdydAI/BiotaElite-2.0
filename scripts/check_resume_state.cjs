const fs = require('fs');
const path = require('path');

const taxaTs = fs.readFileSync(path.resolve(__dirname, '../src/data/seedTaxa.ts'), 'utf8');
const specTs = fs.readFileSync(path.resolve(__dirname, '../src/data/seedSpecies.ts'), 'utf8');
const specBak = fs.existsSync(path.resolve(__dirname, '../src/data/seedSpecies.ts.bak'))
  ? fs.readFileSync(path.resolve(__dirname, '../src/data/seedSpecies.ts.bak'), 'utf8')
  : '';

const { NEW_TAXA_NODES } = require('./data_depth_taxa.cjs');
const { DEPTH_SPECIES_RECORDS } = require('./data_depth_species.cjs');

console.log('=== TAXA BREAKDOWN ===');
const presentTaxa = NEW_TAXA_NODES.filter(t => taxaTs.includes("'" + t.id + "'") || taxaTs.includes('"' + t.id + '"'));
const missingTaxa = NEW_TAXA_NODES.filter(t => !taxaTs.includes("'" + t.id + "'") && !taxaTs.includes('"' + t.id + '"'));
console.log('Present Taxa count:', presentTaxa.length);
console.log('Missing Taxa count:', missingTaxa.length);

console.log('\n=== SPECIES BREAKDOWN ===');
const presentSpec = DEPTH_SPECIES_RECORDS.filter(s => specTs.includes("'" + s.id + "'") || specTs.includes('"' + s.id + '"'));
const missingSpec = DEPTH_SPECIES_RECORDS.filter(s => !specTs.includes("'" + s.id + "'") && !specTs.includes('"' + s.id + '"'));
console.log('Present Species count:', presentSpec.length);
console.log('Present Species IDs:', presentSpec.map(s => s.id));
console.log('Missing Species count:', missingSpec.length);
console.log('Missing Species IDs:', missingSpec.map(s => s.id));

console.log('\n=== WERE THE 8 PRESENT SPECIES IN BAK? ===');
for (const s of presentSpec) {
  const inBak = specBak.includes("'" + s.id + "'") || specBak.includes('"' + s.id + '"');
  console.log(s.id, '-> In bak?:', inBak);
}
