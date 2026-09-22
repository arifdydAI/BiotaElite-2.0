// BiotaElite 2.0 - MASTER-FIX-12 Expansion Integration Script
// Injects 168 expansion taxa and 58 representative global species into seed data

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Load data
const { expansionTaxa } = require('./data/expansion_taxa.cjs');
const { expansionInvertSpecies } = require('./data/expansion_species_inverts.cjs');
const { expansionFishSpecies } = require('./data/expansion_species_fishes.cjs');
const { expansionVertebrateSpecies } = require('./data/expansion_species_vertebrates.cjs');

const allExpansionSpecies = [
  ...expansionInvertSpecies,
  ...expansionFishSpecies,
  ...expansionVertebrateSpecies
];

console.log(`[INFO] Loaded ${expansionTaxa.length} expansion taxa.`);
console.log(`[INFO] Loaded ${allExpansionSpecies.length} expansion species.`);

// Create backups
['src/data/seedTaxa.ts', 'src/data/seedSpecies.ts', 'src/context/BiodiversityContext.tsx', 'src/data/seedTaxonKnowledge.ts'].forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  const bakPath = fullPath + '.bak';
  if (!fs.existsSync(bakPath)) {
    fs.copyFileSync(fullPath, bakPath);
    console.log(`[BACKUP] Created ${relPath}.bak`);
  }
});

// 2. Inject into seedTaxa.ts
const seedTaxaPath = path.join(rootDir, 'src/data/seedTaxa.ts');
let seedTaxaContent = fs.readFileSync(seedTaxaPath, 'utf8');

if (seedTaxaContent.includes('MASTER_FIX_12_EXPANSION_TAXA')) {
  console.log('[WARN] MASTER_FIX_12_EXPANSION_TAXA already present in seedTaxa.ts. Skipping duplicate injection.');
} else {
  // Find closing of SEED_TAXA array
  const lastIndex = seedTaxaContent.lastIndexOf('];');
  if (lastIndex === -1) {
    throw new Error('Could not locate closing "];" in seedTaxa.ts');
  }

  const taxaJson = JSON.stringify(expansionTaxa, null, 2);
  // Indent properly
  const formattedTaxa = ',\n' + taxaJson.slice(1, -1).trim();

  // Insert before the closing bracket of SEED_TAXA
  const updatedSeedTaxa = seedTaxaContent.slice(0, lastIndex) + formattedTaxa + '\n];\n';
  fs.writeFileSync(seedTaxaPath, updatedSeedTaxa, 'utf8');
  console.log('[SUCCESS] Injected expansion taxa into seedTaxa.ts');
}

// 3. Inject into seedSpecies.ts
const seedSpeciesPath = path.join(rootDir, 'src/data/seedSpecies.ts');
let seedSpeciesContent = fs.readFileSync(seedSpeciesPath, 'utf8');

if (seedSpeciesContent.includes('MASTER_FIX_12_EXPANSION_SPECIES')) {
  console.log('[WARN] MASTER_FIX_12_EXPANSION_SPECIES already present in seedSpecies.ts. Skipping duplicate injection.');
} else {
  // We define a new block for MASTER_FIX_12_EXPANSION_SPECIES and spread it in SEED_SPECIES
  const speciesJson = JSON.stringify(allExpansionSpecies, null, 2);
  const speciesBlock = `
// ─────────────────────────────────────────────────────────────────────────────
// MASTER-FIX-12 GLOBAL ZOOLOGICAL REPRESENTATIVE DATASET (58 SPECIES)
// ─────────────────────────────────────────────────────────────────────────────

export const MASTER_FIX_12_EXPANSION_SPECIES: SpeciesRecord[] = ${speciesJson};
`;

  // Insert before export const SEED_SPECIES
  const targetSpread = 'export const SEED_SPECIES: SpeciesRecord[] = [';
  if (!seedSpeciesContent.includes(targetSpread)) {
    throw new Error('Could not find "export const SEED_SPECIES: SpeciesRecord[] = [" in seedSpecies.ts');
  }

  seedSpeciesContent = seedSpeciesContent.replace(
    targetSpread,
    speciesBlock + '\n' + targetSpread + '\n  ...MASTER_FIX_12_EXPANSION_SPECIES,'
  );

  fs.writeFileSync(seedSpeciesPath, seedSpeciesContent, 'utf8');
  console.log('[SUCCESS] Injected 58 expansion species into seedSpecies.ts');
}

// 4. Update BiodiversityContext.tsx seed version
const contextPath = path.join(rootDir, 'src/context/BiodiversityContext.tsx');
let contextContent = fs.readFileSync(contextPath, 'utf8');
const versionRegex = /const CURRENT_SEED_VERSION = ['"][^'"]+['"];/;
if (versionRegex.test(contextContent)) {
  contextContent = contextContent.replace(
    versionRegex,
    "const CURRENT_SEED_VERSION = 'v2j_global_taxonomy_expansion';"
  );
  fs.writeFileSync(contextPath, contextContent, 'utf8');
  console.log("[SUCCESS] Bumped CURRENT_SEED_VERSION to 'v2j_global_taxonomy_expansion' in BiodiversityContext.tsx");
} else {
  console.log('[WARN] Could not find CURRENT_SEED_VERSION in BiodiversityContext.tsx');
}

// 5. Update seedTaxonKnowledge.ts exampleSpeciesIds
const knowledgePath = path.join(rootDir, 'src/data/seedTaxonKnowledge.ts');
let knowledgeContent = fs.readFileSync(knowledgePath, 'utf8');

const groupToSpecies = {
  'taxon-porifera': ['sp-spongia-officinalis', 'sp-sycon-ciliatum', 'sp-euplectella-aspergillum'],
  'taxon-calcarea': ['sp-sycon-ciliatum'],
  'taxon-hexactinellida': ['sp-euplectella-aspergillum'],
  'taxon-demospongiae': ['sp-spongia-officinalis'],
  'taxon-cnidaria': ['sp-aurelia-aurita', 'sp-acropora-cervicornis', 'sp-physalia-physalis', 'sp-chironex-fleckeri'],
  'taxon-anthozoa': ['sp-acropora-cervicornis'],
  'taxon-hydrozoa': ['sp-physalia-physalis'],
  'taxon-cubozoa': ['sp-chironex-fleckeri'],
  'taxon-scyphozoa': ['sp-aurelia-aurita'],
  'taxon-ctenophora': ['sp-pleurobrachia-pileus', 'sp-beroe-ovata'],
  'taxon-tentaculata': ['sp-pleurobrachia-pileus'],
  'taxon-nuda': ['sp-beroe-ovata'],
  'taxon-annelida-marine': ['sp-arenicola-marina', 'sp-lumbricus-terrestris', 'sp-hirudo-medicinalis'],
  'taxon-polychaeta': ['sp-arenicola-marina'],
  'taxon-clitellata': ['sp-lumbricus-terrestris', 'sp-hirudo-medicinalis'],
  'taxon-mollusca': ['sp-octopus-vulgaris', 'sp-helix-pomatia', 'sp-tridacna-gigas', 'sp-tonicella-lineata', 'sp-nautilus-pompilius'],
  'taxon-gastropoda': ['sp-helix-pomatia'],
  'taxon-bivalvia': ['sp-tridacna-gigas'],
  'taxon-polyplacophora': ['sp-tonicella-lineata'],
  'taxon-cephalopoda': ['sp-octopus-vulgaris', 'sp-nautilus-pompilius'],
  'taxon-arthropoda': ['sp-scylla-serrata', 'sp-limulus-polyphemus', 'sp-danaus-plexippus', 'sp-apis-mellifera', 'sp-homarus-gammarus', 'sp-scolopendra-gigantea'],
  'taxon-insecta': ['sp-danaus-plexippus', 'sp-apis-mellifera'],
  'taxon-merostomata': ['sp-limulus-polyphemus'],
  'taxon-chilopoda': ['sp-scolopendra-gigantea'],
  'taxon-echinodermata': ['sp-acanthaster-planci', 'sp-strongylocentrotus-purpuratus', 'sp-ophiothrix-fragilis', 'sp-holothuria-atra'],
  'taxon-echinoidea': ['sp-strongylocentrotus-purpuratus'],
  'taxon-ophiuroidea': ['sp-ophiothrix-fragilis'],
  'taxon-holothuroidea': ['sp-holothuria-atra'],
  'taxon-chordata': ['sp-branchiostoma-lanceolatum', 'sp-ciona-intestinalis', 'sp-panthera-tigris'],
  'taxon-leptocardii': ['sp-branchiostoma-lanceolatum'],
  'taxon-ascidiacea': ['sp-ciona-intestinalis'],
  'taxon-chimaeriformes': ['sp-chimaera-monstrosa'],
  'taxon-heterodontiformes': ['sp-heterodontus-portusjacksoni'],
  'taxon-squatiniformes': ['sp-squatina-squatina'],
  'taxon-squaliformes': ['sp-squalus-acanthias'],
  'taxon-torpediniformes': ['sp-torpedo-marmorata'],
  'taxon-rajiformes': ['sp-raja-clavata'],
  'taxon-rhinopristiformes': ['sp-rhina-ancylostoma'],
  'taxon-elopiformes': ['sp-elops-machnata'],
  'taxon-albuliformes': ['sp-albula-vulpes'],
  'taxon-zeiformes': ['sp-zeus-faber'],
  'taxon-myctophiformes': ['sp-myctophum-punctatum'],
  'taxon-lampriformes': ['sp-lampris-guttatus'],
  'taxon-beryciformes': ['sp-beryx-decadactylus'],
  'taxon-gobiiformes': ['sp-periophthalmodon-schlosseri'],
  'taxon-acanthuriformes': ['sp-acanthurus-triostegus'],
  'taxon-amphibia': ['sp-bufo-bufo', 'sp-hoplobatrachus-tigerinus', 'sp-salamandra-salamandra', 'sp-ichthyophis-bannanicus'],
  'taxon-anura': ['sp-bufo-bufo', 'sp-hoplobatrachus-tigerinus'],
  'taxon-caudata': ['sp-salamandra-salamandra'],
  'taxon-gymnophiona': ['sp-ichthyophis-bannanicus'],
  'taxon-reptilia': ['sp-chelonia-mydas', 'sp-lepidochelys-olivacea', 'sp-hydrophis-platurus', 'sp-chelonoidis-niger', 'sp-varanus-komodoensis', 'sp-ophiophagus-hannah', 'sp-sphenodon-punctatus'],
  'taxon-testudines': ['sp-chelonia-mydas', 'sp-lepidochelys-olivacea', 'sp-chelonoidis-niger'],
  'taxon-squamata': ['sp-hydrophis-platurus', 'sp-varanus-komodoensis', 'sp-ophiophagus-hannah'],
  'taxon-rhynchocephalia': ['sp-sphenodon-punctatus'],
  'taxon-aves': ['sp-struthio-camelus', 'sp-aptenodytes-forsteri', 'sp-haliaeetus-leucocephalus', 'sp-alcedo-atthis', 'sp-copsychus-saularis'],
  'taxon-struthioniformes': ['sp-struthio-camelus'],
  'taxon-sphenisciformes': ['sp-aptenodytes-forsteri'],
  'taxon-accipitriformes': ['sp-haliaeetus-leucocephalus'],
  'taxon-coraciiformes': ['sp-alcedo-atthis'],
  'taxon-passeriformes': ['sp-copsychus-saularis'],
  'taxon-mammalia': ['sp-balaenoptera-musculus', 'sp-orcaella-brevirostris', 'sp-platanista-gangetica', 'sp-phoca-vitulina', 'sp-dugong-dugon', 'sp-ornithorhynchus-anatinus', 'sp-osphranter-rufus', 'sp-pteropus-medius', 'sp-pan-troglodytes', 'sp-hydrochoerus-hydrochaeris', 'sp-panthera-tigris'],
  'taxon-monotremata': ['sp-ornithorhynchus-anatinus'],
  'taxon-diprotodontia': ['sp-osphranter-rufus'],
  'taxon-chiroptera': ['sp-pteropus-medius'],
  'taxon-primates': ['sp-pan-troglodytes'],
  'taxon-rodentia': ['sp-hydrochoerus-hydrochaeris'],
  'taxon-carnivora': ['sp-phoca-vitulina', 'sp-panthera-tigris']
};

let updatedCount = 0;
for (const [taxonId, speciesIds] of Object.entries(groupToSpecies)) {
  // Pattern in JSON-like structure: "taxonId": "taxon-...", followed eventually by "exampleSpeciesIds": [...]
  const taxonBlockRegex = new RegExp(`("taxonId":\\s*"${taxonId}"[\\s\\S]*?"exampleSpeciesIds":\\s*\\[)[^\\]]*(\\])`, 'g');
  if (taxonBlockRegex.test(knowledgeContent)) {
    const formattedIds = speciesIds.map(id => `\n      "${id}"`).join(',') + '\n    ';
    knowledgeContent = knowledgeContent.replace(taxonBlockRegex, `$1${formattedIds}$2`);
    updatedCount++;
  }
}

fs.writeFileSync(knowledgePath, knowledgeContent, 'utf8');
console.log(`[SUCCESS] Connected exampleSpeciesIds for ${updatedCount} taxon knowledge profiles in seedTaxonKnowledge.ts`);

console.log('[COMPLETE] MASTER-FIX-12 Data Expansion applied successfully!');
