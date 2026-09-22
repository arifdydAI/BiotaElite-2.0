const fs = require('fs');
const path = require('path');

const speciesContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedSpecies.ts'), 'utf8');

const bdMatches = [...speciesContent.matchAll(/"id":\s*"([^"]+)",\s*"scientificName":\s*"([^"]+)"[\s\S]*?"bangladeshOccurrence":\s*\{[\s\S]*?"present":\s*true/g)];

console.log('Total species with present: true in Bangladesh:', bdMatches.length);
bdMatches.forEach((m, idx) => {
  console.log(`  ${idx + 1}. [${m[1]}] ${m[2]}`);
});
