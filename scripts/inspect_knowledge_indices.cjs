const fs = require('fs');
const lines = fs.readFileSync('./src/data/seedTaxonKnowledge.ts', 'utf8').split('\n');
const targetIds = [
  'group-fishes',
  'group-agnatha',
  'class-chondrichthyes',
  'superclass-osteichthyes',
  'class-actinopterygii',
  'class-sarcopterygii',
  'phylum-porifera',
  'phylum-cnidaria',
  'phylum-mollusca',
  'phylum-arthropoda-marine',
  'phylum-echinodermata',
  'phylum-chordata-marine',
  'phylum-ctenophora',
  'phylum-annelida-marine',
  'order-cetacea',
  'order-pinnipedia',
  'order-chelonioidea',
  'order-hydrophiinae'
];

targetIds.forEach(id => {
  const lineIdx = lines.findIndex(l => l.includes(`"id": "${id}"`));
  console.log(`${id.padEnd(28)} line ${lineIdx + 1}`);
});
