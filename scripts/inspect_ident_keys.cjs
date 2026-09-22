const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, '../src/data/seedIdentKeys.ts'), 'utf8');

// Parse keys by splitting on '  {'
const rawKeys = content.split(/\n  \{\n/);
console.log('Split chunks:', rawKeys.length);

const keys = [];
for (let i = 1; i < rawKeys.length; i++) {
  const chunk = '  {\n' + rawKeys[i];
  const idMatch = chunk.match(/"id":\s*"([^"]+)"/);
  const titleMatch = chunk.match(/"title":\s*"([^"]+)"/);
  const scopeMatch = chunk.match(/"scope":\s*"([^"]+)"/);
  const majorGroupMatch = chunk.match(/"majorGroup":\s*"([^"]+)"/);
  const targetTaxonIdMatch = chunk.match(/"targetTaxonId":\s*"([^"]+)"/);
  const keyTypeMatch = chunk.match(/"keyType":\s*"([^"]+)"/);
  
  if (idMatch && titleMatch) {
    keys.push({
      id: idMatch[1],
      title: titleMatch[1],
      scope: scopeMatch ? scopeMatch[1] : 'unknown',
      majorGroup: majorGroupMatch ? majorGroupMatch[1] : 'unknown',
      targetTaxonId: targetTaxonIdMatch ? targetTaxonIdMatch[1] : 'none',
      keyType: keyTypeMatch ? keyTypeMatch[1] : 'dichotomous'
    });
  }
}

console.log('Parsed keys count:', keys.length);
keys.forEach((k, idx) => {
  console.log(`${idx + 1}. [${k.scope}] [${k.majorGroup}] (${k.keyType}) ${k.id} -> ${k.title}`);
});
