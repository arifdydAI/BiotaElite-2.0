const fs = require('fs');
const path = require('path');

const taxaContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedTaxa.ts'), 'utf8');

const targetTaxa = ['penaeus', 'duttaphrynus', 'spongilla', 'psittacula', 'beroe', 'annelida', 'clitellata', 'polychaeta'];

targetTaxa.forEach(q => {
  const reg = new RegExp(q, 'i');
  const matches = [...taxaContent.matchAll(/"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)"[,\s\S]*?"rank":\s*"([^"]+)"/g)]
    .filter(m => reg.test(m[1]) || reg.test(m[2]));
  
  if (matches.length > 0) {
    console.log(`Query "${q}":`);
    matches.slice(0, 5).forEach(m => console.log(`  - [${m[1]}] ${m[2]} (${m[3]})`));
  } else {
    console.log(`Query "${q}": NO MATCHES`);
  }
});
