const fs = require('fs');
const path = require('path');

const speciesContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedSpecies.ts'), 'utf8');
const taxaContent = fs.readFileSync(path.resolve(__dirname, '../src/data/seedTaxa.ts'), 'utf8');

// Quick parse of species
const spDetails = [...speciesContent.matchAll(/"id":\s*"([^"]+)",\s*"scientificName":\s*"([^"]+)"[\s\S]*?"taxonId":\s*"([^"]+)"/g)].map(m => ({
  id: m[1],
  scientificName: m[2],
  taxonId: m[3]
}));

console.log('Parsed detailed species:', spDetails.length);

// Check groups
const targetExamples = [
  // Annelida
  'Lumbricus terrestris', 'Eisenia fetida', 'Hirudo medicinalis', 'Tubifex tubifex', 'Alitta virens', 'Arenicola marina', 'Sabella spallanzanii',
  // Porifera
  'Sycon ciliatum', 'Euplectella aspergillum', 'Spongia officinalis', 'Cliona celata', 'Spongilla lacustris',
  // Ctenophora
  'Pleurobrachia pileus', 'Beroe cucumis', 'Beroe gracilis', 'Mnemiopsis leidyi',
  // Echinodermata
  'Acanthaster planci', 'Asterias rubens', 'Ophiothrix fragilis', 'Strongylocentrotus purpuratus', 'Echinus esculentus', 'Holothuria atra', 'Antedon bifida',
  // Mollusca
  'Tonicella lineata', 'Tridacna gigas', 'Helix pomatia', 'Octopus vulgaris', 'Sepia officinalis', 'Loligo vulgaris', 'Nautilus pompilius', 'Mytilus edulis', 'Crassostrea virginica', 'Arion ater',
  // Arthropoda
  'Limulus polyphemus', 'Homarus gammarus', 'Scolopendra gigantea', 'Apis mellifera', 'Penaeus monodon', 'Scylla serrata', 'Cancer pagurus', 'Periplaneta americana', 'Drosophila melanogaster', 'Pandinus imperator',
  // Amphibia
  'Ichthyophis bannanicus', 'Bufo bufo', 'Salamandra salamandra', 'Hoplobatrachus tigerinus', 'Duttaphrynus melanostictus', 'Ambystoma mexicanum',
  // Reptilia
  'Chelonoidis niger', 'Sphenodon punctatus', 'Varanus komodoensis', 'Crocodylus porosus', 'Naja naja', 'Chamaeleo calyptratus', 'Gehyra mutilata',
  // Aves
  'Struthio camelus', 'Aptenodytes forsteri', 'Haliaeetus leucocephalus', 'Alcedo atthis', 'Copsychus saularis', 'Columba livia', 'Corvus splendens', 'Passer domesticus', 'Psittacula krameri', 'Gallus gallus', 'Pavo cristatus',
  // Mammalia
  'Ornithorhynchus anatinus', 'Osphranter rufus', 'Pteropus medius', 'Balaenoptera musculus', 'Dugong dugon', 'Panthera tigris', 'Hydrochoerus hydrochaeris', 'Pan troglodytes', 'Homo sapiens', 'Felis catus', 'Canis lupus familiaris', 'Elephas maximus'
];

console.log('\nChecking target educational & scientific species in seedSpecies.ts:');
const existingNames = new Map(spDetails.map(s => [s.scientificName.toLowerCase(), s]));

targetExamples.forEach(name => {
  const found = existingNames.get(name.toLowerCase());
  if (found) {
    console.log(`  ✓ EXISTS: ${name} -> [${found.id}] (taxon: ${found.taxonId})`);
  } else {
    console.log(`  ✗ MISSING: ${name}`);
  }
});
