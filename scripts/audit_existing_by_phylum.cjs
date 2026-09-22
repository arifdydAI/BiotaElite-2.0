const fs = require('fs');
const path = require('path');

const speciesContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedSpecies.ts'), 'utf8');
const spMatches = [...speciesContent.matchAll(/"id":\s*"([^"]+)",\s*"scientificName":\s*"([^"]+)"[\s\S]*?"commonNames":\s*\{[\s\S]*?"en":\s*\[\s*"([^"]+)"[\s\S]*?"taxonomy":\s*\{[\s\S]*?"phylum":\s*"([^"]+)"[\s\S]*?"class":\s*"([^"]+)"[\s\S]*?"order":\s*"([^"]+)"/g)];

const byPhylum = {};
spMatches.forEach(m => {
  const [_, id, sciName, comName, phylum, cls, order] = m;
  if (!byPhylum[phylum]) byPhylum[phylum] = [];
  byPhylum[phylum].push({ id, sciName, comName, cls, order });
});

for (const [phylum, list] of Object.entries(byPhylum)) {
  if (phylum === 'Chordata') continue;
  console.log(`\n=== Phylum ${phylum} (${list.length}) ===`);
  list.forEach(s => console.log(`  - [${s.id}] ${s.sciName} ("${s.comName}") -> ${s.cls} > ${s.order}`));
}
