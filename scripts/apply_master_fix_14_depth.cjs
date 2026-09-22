// scripts/apply_master_fix_14_depth.cjs
// Safely injects MASTER-FIX-14 depth taxa and canonical species records into seed files.
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

const { NEW_TAXA_NODES } = require('./data_depth_taxa.cjs');
const { DEPTH_SPECIES_RECORDS } = require('./data_depth_species.cjs');

console.log(`[BASELINE] Existing SEED_TAXA: ${SEED_TAXA.length}`);
console.log(`[BASELINE] Existing SEED_SPECIES: ${SEED_SPECIES.length}`);

// 1. Filter out existing items
const existingTaxaIds = new Set(SEED_TAXA.map(t => t.id));
const taxaToInject = NEW_TAXA_NODES.filter(t => !existingTaxaIds.has(t.id));
console.log(`[INFO] Filtering taxa: ${NEW_TAXA_NODES.length} curated -> ${taxaToInject.length} truly new to inject.`);

const existingSpeciesIds = new Set(SEED_SPECIES.map(s => s.id));
const speciesToInject = DEPTH_SPECIES_RECORDS.filter(s => !existingSpeciesIds.has(s.id));
console.log(`[INFO] Filtering species: ${DEPTH_SPECIES_RECORDS.length} curated -> ${speciesToInject.length} truly new to inject.`);

// 2. Inject into seedTaxa.ts
const seedTaxaPath = path.join(rootDir, 'src/data/seedTaxa.ts');
let seedTaxaContent = fs.readFileSync(seedTaxaPath, 'utf8');

if (seedTaxaContent.includes('MASTER_FIX_14_DEPTH_TAXA')) {
  console.log('[WARN] MASTER_FIX_14_DEPTH_TAXA already present in seedTaxa.ts. Skipping duplicate injection.');
} else {
  const taxaJson = JSON.stringify(taxaToInject, null, 2);
  const taxaBlock = `
// ─────────────────────────────────────────────────────────────────────────────
// MASTER-FIX-14 GLOBAL TAXONOMIC DEPTH (75 NEW FAMILIES, GENERA & ORDERS)
// ─────────────────────────────────────────────────────────────────────────────
export const MASTER_FIX_14_DEPTH_TAXA: TaxonNode[] = ${taxaJson};
`;
  // Insert before export const SEED_TAXA: TaxonNode[] = [
  const targetSpread = 'export const SEED_TAXA: TaxonNode[] = [';
  if (!seedTaxaContent.includes(targetSpread)) {
    throw new Error('Could not find target spread in seedTaxa.ts');
  }

  seedTaxaContent = seedTaxaContent.replace(
    targetSpread,
    taxaBlock + '\n' + targetSpread + '\n  ...MASTER_FIX_14_DEPTH_TAXA,'
  );

  fs.writeFileSync(seedTaxaPath, seedTaxaContent, 'utf8');
  console.log(`[SUCCESS] Injected ${taxaToInject.length} depth taxa into seedTaxa.ts`);
}

// 3. Inject into seedSpecies.ts
const seedSpeciesPath = path.join(rootDir, 'src/data/seedSpecies.ts');
let seedSpeciesContent = fs.readFileSync(seedSpeciesPath, 'utf8');

if (seedSpeciesContent.includes('MASTER_FIX_14_DEPTH_SPECIES')) {
  console.log('[WARN] MASTER_FIX_14_DEPTH_SPECIES already present in seedSpecies.ts. Skipping duplicate injection.');
} else {
  const speciesJson = JSON.stringify(speciesToInject, null, 2);
  const speciesBlock = `
// ─────────────────────────────────────────────────────────────────────────────
// MASTER-FIX-14 CANONICAL REPRESENTATIVE MONOGRAPHS (34 NEW SPECIES)
// ─────────────────────────────────────────────────────────────────────────────
export const MASTER_FIX_14_DEPTH_SPECIES: SpeciesRecord[] = ${speciesJson};
`;
  const targetSpread = 'export const SEED_SPECIES: SpeciesRecord[] = [';
  if (!seedSpeciesContent.includes(targetSpread)) {
    throw new Error('Could not find target spread in seedSpecies.ts');
  }

  seedSpeciesContent = seedSpeciesContent.replace(
    targetSpread,
    speciesBlock + '\n' + targetSpread + '\n  ...MASTER_FIX_14_DEPTH_SPECIES,'
  );

  fs.writeFileSync(seedSpeciesPath, seedSpeciesContent, 'utf8');
  console.log(`[SUCCESS] Injected ${speciesToInject.length} canonical species into seedSpecies.ts`);
}

// 4. Update BiodiversityContext.tsx cache version
const contextPath = path.join(rootDir, 'src/context/BiodiversityContext.tsx');
let contextContent = fs.readFileSync(contextPath, 'utf8');
const versionRegex = /const CURRENT_SEED_VERSION = ['"][^'"]+['"];/;
if (versionRegex.test(contextContent)) {
  contextContent = contextContent.replace(
    versionRegex,
    "const CURRENT_SEED_VERSION = 'v2k_global_taxonomic_depth_mf14';"
  );
  fs.writeFileSync(contextPath, contextContent, 'utf8');
  console.log("[SUCCESS] Bumped CURRENT_SEED_VERSION to 'v2k_global_taxonomic_depth_mf14' in BiodiversityContext.tsx");
}

console.log('[COMPLETE] MASTER-FIX-14 depth data application finished.');
