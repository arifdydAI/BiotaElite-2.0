const fs = require('fs');
const content = fs.readFileSync('src/data/seedTaxa.ts', 'utf8');
const orders = [
  'chimaeriformes', 'heterodontiformes', 'squatiniformes', 'squaliformes', 
  'torpediniformes', 'rajiformes', 'rhinopristiformes', 'elopiformes', 
  'albuliformes', 'zeiformes', 'myctophiformes', 'lampriformes', 
  'beryxiformes', 'gobiiformes', 'acanthuriformes'
];

orders.forEach(o => {
  const regex = new RegExp(`"id":\\s*"([^"]*${o}[^"]*)"`, 'i');
  const m = content.match(regex);
  console.log(`${o}: ${m ? m[1] : 'NOT FOUND'}`);
});
