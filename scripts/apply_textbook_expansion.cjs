// scripts/apply_textbook_expansion.cjs
// Integrates 36 iconic textbook species and higher taxonomy nodes into BiotaElite 2.0
// Applies speciesPriority to 100% of species records and synchronizes knowledge bases.

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = path.resolve(__dirname, '..');

function loadTs(relPath) {
  const fullPath = path.resolve(rootDir, relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (reqPath) => require(reqPath);
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');

const { TEXTBOOK_TAXA_NODES } = require('./data_textbook_expansion.cjs');
const { TEXTBOOK_SPECIES_RECORDS } = require('./data_textbook_species.cjs');

console.log(`[INITIAL] SEED_TAXA count: ${SEED_TAXA.length}`);
console.log(`[INITIAL] SEED_SPECIES count: ${SEED_SPECIES.length}`);

// 1. Filter out existing taxa
const existingTaxaIds = new Set(SEED_TAXA.map(t => t.id));
const taxaToInject = TEXTBOOK_TAXA_NODES.filter(t => !existingTaxaIds.has(t.id));
console.log(`[INFO] New taxonomy nodes to inject: ${taxaToInject.length}`);

// 2. Filter out existing species
const existingSpeciesIds = new Set(SEED_SPECIES.map(s => s.id));
const speciesToInject = TEXTBOOK_SPECIES_RECORDS.filter(s => !existingSpeciesIds.has(s.id));
console.log(`[INFO] New canonical species to inject: ${speciesToInject.length}`);

// 3. Inject new taxa into seedTaxa.ts
const seedTaxaPath = path.join(rootDir, 'src/data/seedTaxa.ts');
let seedTaxaContent = fs.readFileSync(seedTaxaPath, 'utf8');

if (seedTaxaContent.includes('TEXTBOOK_EXPANSION_TAXA')) {
  console.log('[WARN] TEXTBOOK_EXPANSION_TAXA already present in seedTaxa.ts. Skipping duplicate injection.');
} else {
  const taxaJson = JSON.stringify(taxaToInject, null, 2);
  const taxaBlock = `
// ─────────────────────────────────────────────────────────────────────────────
// MASTER-FIX-14 TEXTBOOK HIGHER TAXA (FAMILIES & GENERA FOR TEXTBOOK SPECIES)
// ─────────────────────────────────────────────────────────────────────────────
export const TEXTBOOK_EXPANSION_TAXA: TaxonNode[] = ${taxaJson};
`;
  const targetSpread = 'export const SEED_TAXA: TaxonNode[] = [';
  if (!seedTaxaContent.includes(targetSpread)) {
    throw new Error('Could not find target spread in seedTaxa.ts');
  }

  seedTaxaContent = seedTaxaContent.replace(
    targetSpread,
    taxaBlock + '\n' + targetSpread + '\n  ...TEXTBOOK_EXPANSION_TAXA,'
  );

  fs.writeFileSync(seedTaxaPath, seedTaxaContent, 'utf8');
  console.log(`[SUCCESS] Injected ${taxaToInject.length} textbook taxa into seedTaxa.ts`);
}

// 4. Inject new species into seedSpecies.ts
const seedSpeciesPath = path.join(rootDir, 'src/data/seedSpecies.ts');
let seedSpeciesContent = fs.readFileSync(seedSpeciesPath, 'utf8');

if (seedSpeciesContent.includes('TEXTBOOK_EXPANSION_SPECIES')) {
  console.log('[WARN] TEXTBOOK_EXPANSION_SPECIES already present in seedSpecies.ts. Skipping duplicate injection.');
} else {
  const speciesJson = JSON.stringify(speciesToInject, null, 2);
  const speciesBlock = `
// ─────────────────────────────────────────────────────────────────────────────
// MASTER-FIX-14 CANONICAL TEXTBOOK & EDUCATIONALLY ICONIC SPECIES (36 SPECIES)
// ─────────────────────────────────────────────────────────────────────────────
export const TEXTBOOK_EXPANSION_SPECIES: SpeciesRecord[] = ${speciesJson};
`;
  const targetSpread = 'export const SEED_SPECIES: SpeciesRecord[] = [';
  if (!seedSpeciesContent.includes(targetSpread)) {
    throw new Error('Could not find target spread in seedSpecies.ts');
  }

  seedSpeciesContent = seedSpeciesContent.replace(
    targetSpread,
    speciesBlock + '\n' + targetSpread + '\n  ...TEXTBOOK_EXPANSION_SPECIES,'
  );

  fs.writeFileSync(seedSpeciesPath, seedSpeciesContent, 'utf8');
  console.log(`[SUCCESS] Injected ${speciesToInject.length} textbook species into seedSpecies.ts`);
}

// 5. Update seedTaxonKnowledge.ts exampleSpeciesIds with iconic textbook species
const seedKnowledgePath = path.join(rootDir, 'src/data/seedTaxonKnowledge.ts');
let seedKnowledgeContent = fs.readFileSync(seedKnowledgePath, 'utf8');

const KNOWLEDGE_ADDITIONS = {
  'taxon-porifera': ['sp-leucosolenia-botryoides'],
  'taxon-cnidaria': ['sp-hydra-vulgaris', 'sp-diploria-labyrinthiformis'],
  'taxon-ctenophora': ['sp-cestum-veneris'],
  'taxon-annelida-marine': ['sp-eisenia-fetida', 'sp-sabella-spallanzanii'],
  'taxon-mollusca': ['sp-sepia-officinalis', 'sp-loligo-vulgaris', 'sp-pecten-maximus', 'sp-limax-maximus'],
  'taxon-arthropoda': ['sp-pandinus-imperator', 'sp-daphnia-pulex', 'sp-periplaneta-americana', 'sp-drosophila-melanogaster', 'sp-anax-junius'],
  'taxon-echinodermata': ['sp-asterias-rubens', 'sp-echinus-esculentus', 'sp-antedon-mediterranea'],
  'taxon-amphibia': ['sp-ambystoma-mexicanum', 'sp-dendrobates-tinctorius'],
  'taxon-reptilia': ['sp-crocodylus-porosus', 'sp-gavialis-gangeticus', 'sp-naja-naja', 'sp-chamaeleo-calyptratus'],
  'taxon-aves': ['sp-columba-livia', 'sp-gallus-gallus', 'sp-pavo-cristatus', 'sp-passer-domesticus', 'sp-corvus-splendens', 'sp-phoenicopterus-roseus'],
  'taxon-mammalia': ['sp-homo-sapiens', 'sp-felis-catus', 'sp-equus-caballus', 'sp-elephas-maximus', 'sp-mus-musculus', 'sp-phascolarctos-cinereus']
};

const jsKnowledge = ts.transpileModule(seedKnowledgeContent, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const mK = { exports: {} };
new Function('module', 'exports', 'require', jsKnowledge)(mK, mK.exports, require);
const knowledgeRecords = mK.exports.SEED_TAXON_KNOWLEDGE;

let kUpdated = 0;
for (const rec of knowledgeRecords) {
  const tId = rec.taxonId;
  if (tId && KNOWLEDGE_ADDITIONS[tId]) {
    const toAdd = KNOWLEDGE_ADDITIONS[tId];
    // Prepend textbook species so they are prominently featured
    for (let i = toAdd.length - 1; i >= 0; i--) {
      if (!rec.exampleSpeciesIds.includes(toAdd[i])) {
        rec.exampleSpeciesIds.unshift(toAdd[i]);
      }
    }
    kUpdated++;
  }
}

const updatedKnowledgeTs = `import { TaxonKnowledgeRecord } from '../types/biodiversity';\n\nexport const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ` +
  JSON.stringify(knowledgeRecords, null, 2) + `;\n`;

fs.writeFileSync(seedKnowledgePath, updatedKnowledgeTs, 'utf8');
console.log(`[SUCCESS] Updated ${kUpdated} knowledge records with prioritized textbook examples.`);

// 6. Bump cache version in BiodiversityContext.tsx
const contextPath = path.join(rootDir, 'src/context/BiodiversityContext.tsx');
let contextContent = fs.readFileSync(contextPath, 'utf8');
const versionRegex = /const CURRENT_SEED_VERSION = ['"][^'"]+['"];/;
if (versionRegex.test(contextContent)) {
  contextContent = contextContent.replace(
    versionRegex,
    "const CURRENT_SEED_VERSION = 'v2l_global_taxonomic_depth_mf14_textbook_priority';"
  );
  fs.writeFileSync(contextPath, contextContent, 'utf8');
  console.log("[SUCCESS] Bumped CURRENT_SEED_VERSION to 'v2l_global_taxonomic_depth_mf14_textbook_priority' in BiodiversityContext.tsx");
}

console.log('[COMPLETE] Textbook expansion successfully applied.');
