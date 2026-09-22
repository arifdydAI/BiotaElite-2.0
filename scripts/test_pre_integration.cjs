const fs = require('fs');

const seedTaxaContent = fs.readFileSync('src/data/seedTaxa.ts', 'utf8');
const idRegex = /"id":\s*"([^"]+)"/g;
const taxonIds = new Set();
let match;
while ((match = idRegex.exec(seedTaxaContent)) !== null) {
  taxonIds.add(match[1]);
}

const { expansionTaxa } = require('./data/expansion_taxa.cjs');
expansionTaxa.forEach(t => taxonIds.add(t.id));

const seedSpeciesContent = fs.readFileSync('src/data/seedSpecies.ts', 'utf8');
const spRegex = /id:\s*'([^']+)'/g;
const existingSpIds = new Set();
while ((match = spRegex.exec(seedSpeciesContent)) !== null) {
  if (match[1].startsWith('sp-')) {
    existingSpIds.add(match[1]);
  }
}

const { expansionInvertSpecies } = require('./data/expansion_species_inverts.cjs');
const { expansionFishSpecies } = require('./data/expansion_species_fishes.cjs');
const { expansionVertebrateSpecies } = require('./data/expansion_species_vertebrates.cjs');

const allExpansionSpecies = [
  ...expansionInvertSpecies,
  ...expansionFishSpecies,
  ...expansionVertebrateSpecies
];

console.log('Total expansion species count:', allExpansionSpecies.length);
console.log('Existing species count:', existingSpIds.size);

const errors = [];
const seenIds = new Set();

allExpansionSpecies.forEach(sp => {
  if (seenIds.has(sp.id)) errors.push(`Duplicate expansion ID: ${sp.id}`);
  seenIds.add(sp.id);
  if (existingSpIds.has(sp.id)) errors.push(`Collision with existing seed species ID: ${sp.id}`);

  if (!taxonIds.has(sp.taxonId)) {
    errors.push(`Taxon ID not found for ${sp.id}: ${sp.taxonId}`);
  }

  if (!sp.media || sp.media.length !== 1) {
    errors.push(`Species ${sp.id} does not have exactly 1 media item`);
  } else {
    const m = sp.media[0];
    if (!m.url || !m.url.startsWith('https://upload.wikimedia.org/')) {
      errors.push(`Invalid media url for ${sp.id}: ${m.url}`);
    }
    if (!m.photographer || m.photographer.trim() === '') {
      errors.push(`Missing photographer for ${sp.id}`);
    }
    if (!m.license) {
      errors.push(`Missing license for ${sp.id}`);
    }
    if (!m.isVerified || m.verificationStatus !== 'verified') {
      errors.push(`Media verification status failed for ${sp.id}`);
    }
  }

  if (typeof sp.bangladeshOccurrence?.present !== 'boolean') {
    errors.push(`Missing boolean present in bangladeshOccurrence for ${sp.id}`);
  }
});

console.log('Validation errors:', errors);
if (errors.length === 0) {
  console.log('ALL 58 EXPANSION SPECIES ARE 100% VALID!');
}
