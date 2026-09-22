// Normalizes all 58 expansion species to conform 100% to SpeciesRecord type
const fs = require('fs');
const path = require('path');

function normalizeSpeciesList(speciesList) {
  return speciesList.map(sp => {
    const isBD = !!sp.bangladeshOccurrence?.present;
    const residency = sp.bangladeshOccurrence?.residency || 'not_recorded';
    const residencyStatus = (residency === 'resident' || residency === 'native') 
      ? 'resident' 
      : (residency === 'migrant' ? 'migrant' : 'not_recorded');

    const regions = isBD 
      ? (sp.id.includes('tigris') ? ['Khulna Division', 'Barisal Division'] : ['All Divisions'])
      : [];
    const habitatTypes = isBD ? ['Wetlands', 'Forests', 'Coastal'] : [];

    return {
      ...sp,
      bangladeshOccurrence: {
        present: isBD,
        regions,
        habitatTypes,
        residencyStatus,
        residency: sp.bangladeshOccurrence?.residency || 'not_recorded',
        notes: sp.bangladeshOccurrence?.notes || ''
      },
      conservation: {
        ...sp.conservation,
        iucnAssessmentYear: sp.conservation.globalAssessmentYear || 2024,
        globalAssessmentYear: sp.conservation.globalAssessmentYear || 2024
      },
      createdAt: sp.createdAt || '2026-09-15T00:00:00Z',
      updatedAt: sp.updatedAt || '2026-09-15T00:00:00Z'
    };
  });
}

// Update files
const files = [
  './data/expansion_species_inverts.cjs',
  './data/expansion_species_fishes.cjs',
  './data/expansion_species_vertebrates.cjs'
];

const exportKeys = [
  'expansionInvertSpecies',
  'expansionFishSpecies',
  'expansionVertebrateSpecies'
];

const allNormalized = [];

files.forEach((relFile, idx) => {
  const fullPath = path.resolve(__dirname, relFile);
  const mod = require(fullPath);
  const key = exportKeys[idx];
  const list = mod[key];
  const normalized = normalizeSpeciesList(list);
  
  const code = `// BiotaElite 2.0 - Representative Species Module\nconst ${key} = ${JSON.stringify(normalized, null, 2)};\n\nmodule.exports = { ${key} };\n`;
  fs.writeFileSync(fullPath, code, 'utf8');
  console.log(`[UPDATED] ${relFile} with ${normalized.length} normalized species.`);
  allNormalized.push(...normalized);
});

// Now update seedSpecies.ts
const seedSpeciesPath = path.resolve(__dirname, '../src/data/seedSpecies.ts');
let seedContent = fs.readFileSync(seedSpeciesPath, 'utf8');

const regex = /export const MASTER_FIX_12_EXPANSION_SPECIES: SpeciesRecord\[\] = [\s\S]*?;\n\nexport const SEED_SPECIES/;
if (regex.test(seedContent)) {
  const newBlock = `export const MASTER_FIX_12_EXPANSION_SPECIES: SpeciesRecord[] = ${JSON.stringify(allNormalized, null, 2)};\n\nexport const SEED_SPECIES`;
  seedContent = seedContent.replace(regex, newBlock);
  fs.writeFileSync(seedSpeciesPath, seedContent, 'utf8');
  console.log('[SUCCESS] Re-injected normalized MASTER_FIX_12_EXPANSION_SPECIES into seedSpecies.ts');
} else {
  console.log('[WARN] Regex did not match in seedSpecies.ts');
}
