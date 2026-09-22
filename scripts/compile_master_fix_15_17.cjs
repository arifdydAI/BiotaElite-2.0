// scripts/compile_master_fix_15_17.cjs
// Script to compile and integrate MASTER-FIX-15-17 data expansion cleanly into BiotaElite 2.0
const fs = require('fs');
const path = require('path');

console.log('Beginning MASTER-FIX-15-17 data compilation...');

const SEED_TAXA_PATH = path.resolve(__dirname, '../src/data/seedTaxa.ts');
const SEED_SPECIES_PATH = path.resolve(__dirname, '../src/data/seedSpecies.ts');
const SEED_REFS_PATH = path.resolve(__dirname, '../src/data/seedReferences.ts');
const SEED_KEYS_PATH = path.resolve(__dirname, '../src/data/seedIdentKeys.ts');

// Read files
let taxaContent = fs.readFileSync(SEED_TAXA_PATH, 'utf8');
let speciesContent = fs.readFileSync(SEED_SPECIES_PATH, 'utf8');
let refsContent = fs.readFileSync(SEED_REFS_PATH, 'utf8');
let keysContent = fs.readFileSync(SEED_KEYS_PATH, 'utf8');

console.log('Read existing files successfully.');
