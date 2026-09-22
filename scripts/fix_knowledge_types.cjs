const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/data/seedTaxonKnowledge.ts');
let code = fs.readFileSync(targetPath, 'utf8');

// Check matches of authorYear
const matches = code.match(/"authorYear":\s*"[^"]*",?\r?\n?/g);
console.log('Matches for authorYear:', matches ? matches.length : 0);

// Remove authorYear lines
code = code.replace(/\s*"authorYear":\s*"[^"]*",?/g, '');

fs.writeFileSync(targetPath, code, 'utf8');
console.log('Removed authorYear successfully.');
