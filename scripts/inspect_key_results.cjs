const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, '../src/data/seedIdentKeys.ts'), 'utf8');
const rawKeys = content.split(/\n  \{\n/);

for (let i = 1; i < rawKeys.length; i++) {
  const chunk = '  {\n' + rawKeys[i];
  const idMatch = chunk.match(/"id":\s*"([^"]+)"/);
  const titleMatch = chunk.match(/"title":\s*"([^"]+)"/);
  
  const speciesResults = [...chunk.matchAll(/"resultType":\s*"species",\s*"speciesId":\s*"([^"]+)"/g)].map(m => m[1]);
  const taxonResults = [...chunk.matchAll(/"resultType":\s*"taxon",\s*"taxonId":\s*"([^"]+)"/g)].map(m => m[1]);
  const stepsCount = (chunk.match(/"id":\s*\d+,\s*"title":/g) || []).length;
  
  console.log(`\nKey ${i}: ${idMatch ? idMatch[1] : 'unknown'} (${titleMatch ? titleMatch[1] : ''})`);
  console.log(`  Steps: ${stepsCount}`);
  console.log(`  Taxon results (${taxonResults.length}):`, taxonResults.slice(0, 8).join(', ') + (taxonResults.length > 8 ? '...' : ''));
  console.log(`  Species results (${speciesResults.length}):`, speciesResults.slice(0, 8).join(', ') + (speciesResults.length > 8 ? '...' : ''));
}
