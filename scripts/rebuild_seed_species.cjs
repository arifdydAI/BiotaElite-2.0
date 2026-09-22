// scripts/rebuild_seed_species.cjs
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = path.resolve(__dirname, '..');

function loadTsCode(code) {
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, require, process.cwd(), '');
  return m.exports;
}

let bakCode = fs.readFileSync(path.join(rootDir, 'src/data/seedSpecies.ts.bak'), 'utf8');
bakCode = bakCode.replace(/const (BUILD0[1245]_[A-Z_]+)/g, 'export const $1');
const currContent = fs.readFileSync(path.join(rootDir, 'src/data/seedSpecies.ts'), 'utf8');

const bakExports = loadTsCode(bakCode);
const currExports = loadTsCode(currContent);

const build01 = bakExports.BUILD01_SPECIES || [];
const build02 = bakExports.BUILD02_SPECIES || [];
const build04 = bakExports.BUILD04_MARINE_SPECIES || [];
const build05 = bakExports.BUILD05_EXPANSION_SPECIES || [];

const mf12 = currExports.MASTER_FIX_12_EXPANSION_SPECIES || [];
const mf14 = currExports.MASTER_FIX_14_DEPTH_SPECIES || [];
const textbook = currExports.TEXTBOOK_EXPANSION_SPECIES || [];

console.log(`Counts from source modules:`);
console.log(`  BUILD01: ${build01.length}`);
console.log(`  BUILD02: ${build02.length}`);
console.log(`  BUILD04: ${build04.length}`);
console.log(`  BUILD05: ${build05.length}`);
console.log(`  MF12: ${mf12.length}`);
console.log(`  MF14: ${mf14.length}`);
console.log(`  TEXTBOOK: ${textbook.length}`);

// Priority assignment for the 60 base species
const SCIENTIFICALLY_IMPORTANT_BASE_IDS = new Set([
  'sp-chiloscyllium-indicum',
  'sp-mystus-cavasius',
  'sp-eutropiichthys-vacha',
  'sp-synodus-saurus'
]);

function assignPriority(speciesList) {
  for (const s of speciesList) {
    if (!s.speciesPriority) {
      if (SCIENTIFICALLY_IMPORTANT_BASE_IDS.has(s.id)) {
        s.speciesPriority = 'scientifically_important';
      } else {
        s.speciesPriority = 'common_educational';
      }
    }
  }
}

assignPriority(build01);
assignPriority(build02);
assignPriority(build04);
assignPriority(build05);
assignPriority(mf12);
assignPriority(mf14);
assignPriority(textbook);

const allCombined = [
  ...textbook,
  ...mf14,
  ...mf12,
  ...build01,
  ...build02,
  ...build04,
  ...build05
];

console.log(`Total combined species: ${allCombined.length}`);

// Verify uniqueness
const idSet = new Set();
for (const s of allCombined) {
  if (idSet.has(s.id)) {
    throw new Error(`Duplicate species ID found: ${s.id}`);
  }
  idSet.add(s.id);
}

const nameSet = new Set();
for (const s of allCombined) {
  const norm = s.scientificName.trim().toLowerCase();
  if (nameSet.has(norm)) {
    throw new Error(`Duplicate scientific name found: ${s.scientificName}`);
  }
  nameSet.add(norm);
}

console.log(`Uniqueness checks PASSED: ${idSet.size} unique IDs, ${nameSet.size} unique scientific names.`);

// Generate clean seedSpecies.ts
const header = `// src/data/seedSpecies.ts
// BiotaElite 2.0 Canonical Global Species Repository
// Curated Global Representative Zoological Dataset: 188 Canonical Species Monographs
// Preserving all modules: Textbook & Iconic (36), MF14 Depth (34), MF12 Expansion (58), Base Framework (60)

import { SpeciesRecord } from '../types/biodiversity';

`;

const tsFileContent = header +
  `export const TEXTBOOK_EXPANSION_SPECIES: SpeciesRecord[] = ` + JSON.stringify(textbook, null, 2) + `;\n\n` +
  `export const MASTER_FIX_14_DEPTH_SPECIES: SpeciesRecord[] = ` + JSON.stringify(mf14, null, 2) + `;\n\n` +
  `export const MASTER_FIX_12_EXPANSION_SPECIES: SpeciesRecord[] = ` + JSON.stringify(mf12, null, 2) + `;\n\n` +
  `export const BUILD01_SPECIES: SpeciesRecord[] = ` + JSON.stringify(build01, null, 2) + `;\n\n` +
  `export const BUILD02_SPECIES: SpeciesRecord[] = ` + JSON.stringify(build02, null, 2) + `;\n\n` +
  `export const BUILD04_MARINE_SPECIES: SpeciesRecord[] = ` + JSON.stringify(build04, null, 2) + `;\n\n` +
  `export const BUILD05_EXPANSION_SPECIES: SpeciesRecord[] = ` + JSON.stringify(build05, null, 2) + `;\n\n` +
  `export const SEED_SPECIES: SpeciesRecord[] = [\n` +
  `  ...TEXTBOOK_EXPANSION_SPECIES,\n` +
  `  ...MASTER_FIX_14_DEPTH_SPECIES,\n` +
  `  ...MASTER_FIX_12_EXPANSION_SPECIES,\n` +
  `  ...BUILD01_SPECIES,\n` +
  `  ...BUILD02_SPECIES,\n` +
  `  ...BUILD04_MARINE_SPECIES,\n` +
  `  ...BUILD05_EXPANSION_SPECIES\n` +
  `];\n`;

fs.writeFileSync(path.join(rootDir, 'src/data/seedSpecies.ts'), tsFileContent, 'utf8');
console.log(`[SUCCESS] Wrote ${allCombined.length} species into src/data/seedSpecies.ts`);
