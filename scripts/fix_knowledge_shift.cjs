const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/seedTaxonKnowledge.ts');
let content = fs.readFileSync(filePath, 'utf8');

const CORRECTIONS = {
  'taxon-porifera': [
    'sp-spongia-officinalis',
    'sp-sycon-ciliatum',
    'sp-euplectella-aspergillum',
    'sp-suberites-domuncula',
    'sp-hyalonema-sieboldii'
  ],
  'taxon-cnidaria': [
    'sp-aurelia-aurita',
    'sp-acropora-cervicornis',
    'sp-physalia-physalis',
    'sp-chironex-fleckeri',
    'sp-actinia-equina',
    'sp-chrysaora-hysoscella',
    'sp-obelia-geniculata'
  ],
  'taxon-mollusca': [
    'sp-octopus-vulgaris',
    'sp-helix-pomatia',
    'sp-tridacna-gigas',
    'sp-tonicella-lineata',
    'sp-nautilus-pompilius',
    'sp-mytilus-edulis',
    'sp-crassostrea-gigas',
    'sp-conus-geographus'
  ],
  'taxon-arthropoda': [
    'sp-scylla-serrata',
    'sp-limulus-polyphemus',
    'sp-danaus-plexippus',
    'sp-apis-mellifera',
    'sp-homarus-gammarus',
    'sp-scolopendra-gigantea',
    'sp-callinectes-sapidus',
    'sp-panulirus-argus',
    'sp-latrodectus-mactans',
    'sp-aedes-aegypti',
    'sp-scarabaeus-sacer'
  ],
  'taxon-echinodermata': [
    'sp-acanthaster-planci',
    'sp-strongylocentrotus-purpuratus',
    'sp-ophiothrix-fragilis',
    'sp-holothuria-atra',
    'sp-protoreaster-nodosus',
    'sp-mesocentrotus-franciscanus'
  ],
  'taxon-chordata': [
    'sp-branchiostoma-lanceolatum',
    'sp-ciona-intestinalis',
    'sp-panthera-tigris',
    'sp-tenualosa-ilisha',
    'sp-struthio-camelus'
  ],
  'taxon-cetacea': [
    'sp-balaenoptera-musculus',
    'sp-orcaella-brevirostris',
    'sp-platanista-gangetica'
  ],
  'taxon-ctenophora': [
    'sp-pleurobrachia-pileus',
    'sp-beroe-ovata',
    'sp-mnemiopsis-leidyi'
  ],
  'taxon-annelida-marine': [
    'sp-lumbricus-terrestris',
    'sp-hirudo-medicinalis',
    'sp-arenicola-marina',
    'sp-alitta-virens',
    'sp-tubifex-tubifex'
  ],
  'taxon-sirenia': [
    'sp-dugong-dugon'
  ]
};

// Transpile and parse to inspect objects
const ts = require('typescript');
const js = ts.transpileModule(content, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const m = { exports: {} };
new Function('module', 'exports', 'require', js)(m, m.exports, require);
const data = m.exports.SEED_TAXON_KNOWLEDGE;

let updatedCount = 0;
for (const item of data) {
  const tId = item.taxonId;
  if (tId && CORRECTIONS[tId]) {
    item.exampleSpeciesIds = CORRECTIONS[tId];
    updatedCount++;
  }
}

console.log(`Updated ${updatedCount} knowledge records in memory.`);

const newContent = `import { TaxonKnowledgeRecord } from '../types/biodiversity';\n\nexport const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ` +
  JSON.stringify(data, null, 2) + `;\n`;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully saved updated seedTaxonKnowledge.ts!');
