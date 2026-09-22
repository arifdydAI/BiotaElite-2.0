// scripts/assign_all_species_priority.cjs
// Normalizes and sets speciesPriority on 100% of species records in src/data/seedSpecies.ts

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = path.resolve(__dirname, '..');
const seedSpeciesPath = path.join(rootDir, 'src/data/seedSpecies.ts');

const TIER_1_COMMON_EDUCATIONAL_IDS = new Set([
  // Invertebrates
  'sp-eisenia-fetida',
  'sp-lumbricus-terrestris',
  'sp-hirudo-medicinalis',
  'sp-arenicola-marina',
  'sp-sabella-spallanzanii',
  'sp-sepia-officinalis',
  'sp-loligo-vulgaris',
  'sp-pecten-maximus',
  'sp-limax-maximus',
  'sp-helix-pomatia',
  'sp-octopus-vulgaris',
  'sp-nautilus-pompilius',
  'sp-mytilus-edulis',
  'sp-crassostrea-gigas',
  'sp-spongia-officinalis',
  'sp-leucosolenia-botryoides',
  'sp-euplectella-aspergillum',
  'sp-sycon-ciliatum',
  'sp-hydra-vulgaris',
  'sp-diploria-labyrinthiformis',
  'sp-aurelia-aurita',
  'sp-physalia-physalis',
  'sp-chironex-fleckeri',
  'sp-actinia-equina',
  'sp-acropora-cervicornis',
  'sp-obelia-geniculata',
  'sp-pleurobrachia-pileus',
  'sp-beroe-ovata',
  'sp-cestum-veneris',
  'sp-pandinus-imperator',
  'sp-daphnia-pulex',
  'sp-periplaneta-americana',
  'sp-drosophila-melanogaster',
  'sp-anax-junius',
  'sp-apis-mellifera',
  'sp-danaus-plexippus',
  'sp-aedes-aegypti',
  'sp-limulus-polyphemus',
  'sp-homarus-gammarus',
  'sp-scylla-serrata',
  'sp-callinectes-sapidus',
  'sp-latrodectus-mactans',
  'sp-scolopendra-gigantea',
  'sp-asterias-rubens',
  'sp-echinus-esculentus',
  'sp-antedon-mediterranea',
  'sp-strongylocentrotus-purpuratus',
  'sp-acanthaster-planci',
  'sp-protoreaster-nodosus',

  // Non-vertebrate Chordates & Basal Vertebrates
  'sp-branchiostoma-lanceolatum',
  'sp-ciona-intestinalis',
  'sp-petromyzon-marinus',
  'sp-myxine-glutinosa',

  // Fishes
  'sp-tenualosa-ilisha',
  'sp-labeo-rohita',
  'sp-catla-catla',
  'sp-cirrhinus-mrigala',
  'sp-clarias-magur',
  'sp-clarias-batrachus',
  'sp-heteropneustes-fossilis',
  'sp-wallago-attu',
  'sp-channa-striata',
  'sp-anabas-testudineus',
  'sp-carcharodon-carcharias',
  'sp-rhincodon-typus',
  'sp-latimeria-chalumnae',
  'sp-protopterus-annectens',
  'sp-polypterus-senegalus',
  'sp-acipenser-sturio',
  'sp-anguilla-anguilla',
  'sp-electrophorus-electricus',
  'sp-hippocampus-erectus',
  'sp-salmo-trutta',
  'sp-gadus-morhua',
  'sp-pygocentrus-nattereri',
  'sp-lophius-piscatorius',
  'sp-platichthys-flesus',
  'sp-tetraodon-mbu',
  'sp-diodon-hystrix',
  'sp-phycodurus-eques',
  'sp-zeus-faber',
  'sp-galeocerdo-cuvier',
  'sp-mobula-birostris',
  'sp-chimaera-monstrosa',
  'sp-squalus-acanthias',
  'sp-torpedo-marmorata',
  'sp-raja-clavata',
  'sp-arapaima-gigas',
  'sp-exocoetus-volitans',
  'sp-scomber-scombrus',
  'sp-periophthalmodon-schlosseri',

  // Amphibia
  'sp-ambystoma-mexicanum',
  'sp-dendrobates-tinctorius',
  'sp-hoplobatrachus-tigerinus',
  'sp-bufo-bufo',
  'sp-lithobates-catesbeianus',
  'sp-salamandra-salamandra',
  'sp-ichthyophis-bannanicus',

  // Reptilia
  'sp-crocodylus-porosus',
  'sp-gavialis-gangeticus',
  'sp-naja-naja',
  'sp-chamaeleo-calyptratus',
  'sp-chelonia-mydas',
  'sp-chelonoidis-niger',
  'sp-alligator-mississippiensis',
  'sp-sphenodon-punctatus',
  'sp-varanus-komodoensis',
  'sp-ophiophagus-hannah',
  'sp-crotalus-atrox',
  'sp-boa-constrictor',

  // Aves
  'sp-columba-livia',
  'sp-gallus-gallus',
  'sp-pavo-cristatus',
  'sp-passer-domesticus',
  'sp-corvus-splendens',
  'sp-phoenicopterus-roseus',
  'sp-struthio-camelus',
  'sp-aptenodytes-forsteri',
  'sp-haliaeetus-leucocephalus',
  'sp-bubo-bubo',
  'sp-ara-macao',
  'sp-alcedo-atthis',
  'sp-copsychus-saularis',

  // Mammalia
  'sp-homo-sapiens',
  'sp-felis-catus',
  'sp-equus-caballus',
  'sp-elephas-maximus',
  'sp-mus-musculus',
  'sp-phascolarctos-cinereus',
  'sp-panthera-leo',
  'sp-panthera-tigris',
  'sp-canis-lupus',
  'sp-gorilla-gorilla',
  'sp-pan-troglodytes',
  'sp-balaenoptera-musculus',
  'sp-dugong-dugon',
  'sp-phoca-vitulina',
  'sp-ornithorhynchus-anatinus',
  'sp-osphranter-rufus',
  'sp-pteropus-vampyrus',
  'sp-pteropus-medius',
  'sp-hydrochoerus-hydrochaeris',
  'sp-platanista-gangetica'
]);

let content = fs.readFileSync(seedSpeciesPath, 'utf8');

// Use typescript transpile to read and edit the structures
const js = ts.transpileModule(content, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const m = { exports: {} };
new Function('module', 'exports', 'require', js)(m, m.exports, require);

const allSpecies = m.exports.SEED_SPECIES;
console.log(`Auditing and setting priority across all ${allSpecies.length} species...`);

let tier1Count = 0;
let tier2Count = 0;

for (const sp of allSpecies) {
  if (TIER_1_COMMON_EDUCATIONAL_IDS.has(sp.id)) {
    sp.speciesPriority = 'common_educational';
    tier1Count++;
  } else {
    sp.speciesPriority = 'scientifically_important';
    tier2Count++;
  }
}

console.log(`Priority Distribution: Tier 1 (Common/Educational): ${tier1Count}, Tier 2 (Scientifically Important): ${tier2Count}`);

// Now replace in file
// We can reconstruct the file cleanly by preserving sub-arrays or writing export
// Notice seedSpecies.ts exports arrays: MASTER_FIX_14_DEPTH_SPECIES, TEXTBOOK_EXPANSION_SPECIES, MASTER_FIX_12_EXPANSION_SPECIES, BUILD01_SPECIES, BUILD02_SPECIES, BUILD04_MARINE_SPECIES, BUILD05_EXPANSION_SPECIES
// We can map each sub-array or rewrite SEED_SPECIES cleanly.

// Let's update each sub-array export
const exportNames = [
  'TEXTBOOK_EXPANSION_SPECIES',
  'MASTER_FIX_14_DEPTH_SPECIES',
  'MASTER_FIX_12_EXPANSION_SPECIES',
  'BUILD01_SPECIES',
  'BUILD02_SPECIES',
  'BUILD04_MARINE_SPECIES',
  'BUILD05_EXPANSION_SPECIES'
];

let updatedFile = `// BiotaElite 2.0 Authoritative Verified Species Dataset\nimport type { SpeciesRecord } from '../types/biodiversity';\n\n`;

for (const exp of exportNames) {
  const arr = m.exports[exp] || [];
  for (const sp of arr) {
    if (TIER_1_COMMON_EDUCATIONAL_IDS.has(sp.id)) {
      sp.speciesPriority = 'common_educational';
    } else {
      sp.speciesPriority = 'scientifically_important';
    }
  }
  updatedFile += `export const ${exp}: SpeciesRecord[] = ` + JSON.stringify(arr, null, 2) + `;\n\n`;
}

updatedFile += `export const SEED_SPECIES: SpeciesRecord[] = [\n` +
  exportNames.map(e => `  ...${e}`).join(',\n') + `\n];\n`;

fs.writeFileSync(seedSpeciesPath, updatedFile, 'utf8');
console.log('Successfully written updated seedSpecies.ts with 100% prioritized species!');
