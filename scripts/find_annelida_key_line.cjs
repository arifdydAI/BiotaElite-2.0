const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, '../src/data/seedIdentKeys.ts'), 'utf8');
const lines = content.split('\n');
console.log('Total lines in seedIdentKeys.ts:', lines.length);

lines.forEach((l, idx) => {
  if (l.includes('key-global-annelida-lineages')) {
    console.log(`Found on line ${idx + 1}: ${l}`);
  }
});
