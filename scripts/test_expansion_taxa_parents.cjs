const fs = require('fs');
const seedTaxaContent = fs.readFileSync('src/data/seedTaxa.ts', 'utf8');
const idRegex = /"id":\s*"([^"]+)"/g;
const seedIds = new Set();
let match;
while ((match = idRegex.exec(seedTaxaContent)) !== null) {
  seedIds.add(match[1]);
}

const { expansionTaxa } = require('./data/expansion_taxa.cjs');
expansionTaxa.forEach(t => seedIds.add(t.id));

console.log('Total pool IDs:', seedIds.size);

const missingParents = [];
expansionTaxa.forEach(t => {
  const p = t.parentId || t.parentTaxonId;
  if (p && !seedIds.has(p)) {
    missingParents.push({ id: t.id, name: t.scientificName, rank: t.rank, parent: p });
  }
});

console.log('Missing parents in expansion taxa:', missingParents);
