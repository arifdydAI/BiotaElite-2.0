const fs = require('fs');
const path = require('path');

const speciesContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedSpecies.ts'), 'utf8');

const queries = ['penaeus', 'prawn', 'shrimp', 'duttaphrynus', 'bufo', 'dog', 'canis', 'parrot', 'psittacula', 'oyster', 'crassostrea', 'antedon', 'beroe', 'spongilla', 'cliona'];

queries.forEach(q => {
  const reg = new RegExp(q, 'i');
  const matches = [...speciesContent.matchAll(new RegExp(`"id":\\s*"([^"]+)",\\s*"scientificName":\\s*"([^"]+)"[\\s\\S]*?"commonNames":\\s*\\{[\\s\\S]*?"en":\\s*\\[([^\\]]+)\\]`, 'g'))]
    .filter(m => reg.test(m[1]) || reg.test(m[2]) || reg.test(m[3]));
  
  if (matches.length > 0) {
    console.log(`Query "${q}":`);
    matches.forEach(m => console.log(`  - [${m[1]}] ${m[2]} (${m[3].replace(/\\s+/g, ' ').trim()})`));
  } else {
    console.log(`Query "${q}": NO MATCHES`);
  }
});
