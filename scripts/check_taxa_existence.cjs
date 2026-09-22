const fs = require('fs');
const code = fs.readFileSync('./src/data/seedTaxa.ts', 'utf8');
const idMatches = code.match(/["']id["']:\s*["']([^"']+)["']/g) || [];
const ids = idMatches.map(m => m.replace(/["']id["']:\s*["']/, '').replace(/["']$/, ''));
console.log('Total Taxa IDs:', ids.length);
const checkList = [
  'taxon-calcarea', 'taxon-hexactinellida', 'taxon-hydrozoa', 'taxon-cubozoa',
  'taxon-tentaculata', 'taxon-nuda', 'taxon-polychaeta', 'taxon-clitellata',
  'taxon-gastropoda', 'taxon-bivalvia', 'taxon-polyplacophora', 'taxon-insecta',
  'taxon-merostomata', 'taxon-chilopoda', 'taxon-echinoidea', 'taxon-ophiuroidea',
  'taxon-holothuroidea', 'taxon-leptocardii', 'taxon-ascidiacea', 'taxon-anura',
  'taxon-caudata', 'taxon-gymnophiona', 'taxon-rhynchocephalia', 'taxon-struthioniformes',
  'taxon-sphenisciformes', 'taxon-accipitriformes', 'taxon-coraciiformes', 'taxon-passeriformes',
  'taxon-monotremata', 'taxon-diprotodontia', 'taxon-chiroptera', 'taxon-primates', 'taxon-rodentia'
];
checkList.forEach(id => {
  console.log(id.padEnd(26), ids.includes(id) ? 'EXISTS' : 'MISSING');
});
