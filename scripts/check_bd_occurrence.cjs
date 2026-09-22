const fs = require('fs');
const path = require('path');

const speciesContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedSpecies.ts'), 'utf8');

const bdOccMatches = [...speciesContent.matchAll(/"id":\s*"([^"]+)",\s*"scientificName":\s*"([^"]+)"[\s\S]*?"bangladeshOccurrence":\s*\{[\s\S]*?"hasOccurrence":\s*true/g)];
console.log('Species with bangladeshOccurrence.hasOccurrence = true:', bdOccMatches.length);
bdOccMatches.forEach((m, idx) => {
  if (idx < 25 || idx > bdOccMatches.length - 10) {
    console.log(`  - [${m[1]}] ${m[2]}`);
  } else if (idx === 25) {
    console.log(`  ... and ${bdOccMatches.length - 35} more ...`);
  }
});
