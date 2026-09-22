const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Update scripts/data_textbook_expansion.cjs
const textbookExpPath = path.join(__dirname, 'data_textbook_expansion.cjs');
let exp = fs.readFileSync(textbookExpPath, 'utf8');

// Fix branchiopoda parent
exp = exp.replace(
  /parentId:\s*'taxon-crustacea',\s*parentTaxonId:\s*'taxon-crustacea'/,
  "parentId: 'taxon-arthropoda',\n    parentTaxonId: 'taxon-arthropoda'"
);

const forcipulatidaBlock = `  {
    id: 'taxon-forcipulatida',
    scientificName: 'Forcipulatida',
    name: 'Forcipulatida',
    rank: 'order',
    parentId: 'taxon-asteroidea',
    parentTaxonId: 'taxon-asteroidea',
    status: 'accepted',
    module: 'marine',
    authorYear: 'Perrier, 1884',
    commonNameEn: 'Forcipulate sea stars',
    commonNameBn: 'ফরসিপুলেটা তারা মাছ বর্গ',
    description: 'Order of sea stars characterized by distinctive pedunculate pedicellariae with three skeletal ossicles.',
    isVerified: true
  },
`;

if (!exp.includes("'taxon-forcipulatida'")) {
  exp = exp.replace(
    "id: 'taxon-asteriidae',",
    forcipulatidaBlock + "    id: 'taxon-asteriidae',"
  );
}
fs.writeFileSync(textbookExpPath, exp, 'utf8');
console.log('[SUCCESS] scripts/data_textbook_expansion.cjs updated.');

// 2. Update src/data/seedTaxa.ts
const seedTaxaPath = path.join(rootDir, 'src/data/seedTaxa.ts');
let seedTaxa = fs.readFileSync(seedTaxaPath, 'utf8');

seedTaxa = seedTaxa.replace(
  /"parentId":\s*"taxon-crustacea",\s*"parentTaxonId":\s*"taxon-crustacea"/,
  '"parentId": "taxon-arthropoda",\n    "parentTaxonId": "taxon-arthropoda"'
);

const forcipulatidaJson = `  {
    "id": "taxon-forcipulatida",
    "scientificName": "Forcipulatida",
    "name": "Forcipulatida",
    "rank": "order",
    "parentId": "taxon-asteroidea",
    "parentTaxonId": "taxon-asteroidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Perrier, 1884",
    "commonNameEn": "Forcipulate sea stars",
    "commonNameBn": "ফরসিপুলেটা তারা মাছ বর্গ",
    "description": "Order of sea stars characterized by distinctive pedunculate pedicellariae with three skeletal ossicles.",
    "isVerified": true
  },
`;

if (!seedTaxa.includes('"taxon-forcipulatida"')) {
  seedTaxa = seedTaxa.replace(
    '"id": "taxon-asteriidae",',
    forcipulatidaJson + '    "id": "taxon-asteriidae",'
  );
}
fs.writeFileSync(seedTaxaPath, seedTaxa, 'utf8');
console.log('[SUCCESS] src/data/seedTaxa.ts updated.');
