const { NEW_TAXA_NODES } = require('./data_depth_taxa.cjs');
const { DEPTH_SPECIES_RECORDS } = require('./data_depth_species.cjs');

console.log('=== TAXA BY RANK ===');
const ranks = {};
for (const t of NEW_TAXA_NODES) {
  ranks[t.rank] = (ranks[t.rank] || 0) + 1;
}
console.log(ranks);

console.log('\n=== SPECIES BY PHYLUM / CLASS ===');
const speciesGroups = {};
for (const s of DEPTH_SPECIES_RECORDS) {
  const grp = s.taxonomy.phylum + ' -> ' + s.taxonomy.class;
  speciesGroups[grp] = (speciesGroups[grp] || 0) + 1;
}
console.log(speciesGroups);

console.log('\n=== SPECIES COUNT BY PHYLUM ===');
const phyla = {};
for (const s of DEPTH_SPECIES_RECORDS) {
  phyla[s.taxonomy.phylum] = (phyla[s.taxonomy.phylum] || 0) + 1;
}
console.log(phyla);
