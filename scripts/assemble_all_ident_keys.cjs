// scripts/assemble_all_ident_keys.cjs
// Combines and validates all 16 Identification Keys
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, relPath);
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

const { SEED_SPECIES } = loadTs('../src/data/seedSpecies.ts');
const { SEED_TAXA } = loadTs('../src/data/seedTaxa.ts');
const { SEED_REFERENCES } = loadTs('../src/data/seedReferences.ts');
const { SEED_IDENTIFICATION_KEYS: existingKeys } = loadTs('../src/data/seedIdentKeys.ts');

const speciesMap = new Map(SEED_SPECIES.map(s => [s.id, s]));
const taxaMap = new Map(SEED_TAXA.map(t => [t.id, t]));
const refMap = new Map(SEED_REFERENCES.map(r => [r.id, r]));

// 1. Preserved Global Keys
const keyMajorGroups = existingKeys.find(k => k.id === 'key-global-major-animal-groups');
const keyVertClasses = existingKeys.find(k => k.id === 'key-global-vertebrate-classes');
const keyFishLineages = existingKeys.find(k => k.id === 'key-global-fish-lineages');

// 2. Expanded / Newly Created Global Keys
const keySpongesCnidarians = require('./data_keys/key_sponges_cnidarians.cjs');
const keyMollusca = require('./data_keys/key_mollusca.cjs');
const keyAnnelida = require('./data_keys/key_annelida.cjs');
const keyArthropoda = require('./data_keys/key_arthropoda.cjs');
const keyEchinodermata = require('./data_keys/key_echinodermata.cjs');
const keyAmphibia = require('./data_keys/key_amphibia.cjs');
const keyReptilia = require('./data_keys/key_reptilia.cjs');
const keyAves = require('./data_keys/key_aves.cjs');
const keyMammalia = require('./data_keys/key_mammalia.cjs');

// 3. Preserved Bangladesh Regional Keys
const keyBdAquaticVert = existingKeys.find(k => k.id === 'key-major-aquatic-vertebrates');
const keyBdCarps = existingKeys.find(k => k.id === 'key-major-carps-bangladesh');
const keyBdCatfishes = existingKeys.find(k => k.id === 'key-catfishes-bangladesh');
const keyBdSnakeheads = existingKeys.find(k => k.id === 'key-snakeheads-bangladesh');

const ALL_KEYS = [
  keyMajorGroups,
  keyVertClasses,
  keyFishLineages,
  keySpongesCnidarians,
  keyMollusca,
  keyAnnelida,
  keyArthropoda,
  keyEchinodermata,
  keyAmphibia,
  keyReptilia,
  keyAves,
  keyMammalia,
  keyBdAquaticVert,
  keyBdCarps,
  keyBdCatfishes,
  keyBdSnakeheads
];

console.log('=== VALIDATING ALL 16 KEYS ===');
let errors = 0;
const reachableSpecies = new Set();
const seenKeyIds = new Set();

ALL_KEYS.forEach((k, idx) => {
  if (!k) {
    console.error(`Error: Key index ${idx} is undefined!`);
    errors++;
    return;
  }
  
  if (seenKeyIds.has(k.id)) {
    console.error(`Duplicate key ID: ${k.id}`);
    errors++;
  }
  seenKeyIds.add(k.id);

  if (k.targetTaxonId && !taxaMap.has(k.targetTaxonId)) {
    console.error(`Key ${k.id} references non-existent targetTaxonId: ${k.targetTaxonId}`);
    errors++;
  }

  if (!Array.isArray(k.sourceReferenceIds) || k.sourceReferenceIds.length === 0) {
    console.error(`Key ${k.id} missing source references`);
    errors++;
  } else {
    k.sourceReferenceIds.forEach(refId => {
      if (!refMap.has(refId)) {
        console.error(`Key ${k.id} references invalid reference ID: ${refId}`);
        errors++;
      }
    });
  }

  const stepIds = new Set();
  k.steps.forEach(s => {
    if (stepIds.has(s.id)) {
      console.error(`Key ${k.id} has duplicate step ID: ${s.id}`);
      errors++;
    }
    stepIds.add(s.id);

    if (s.couplets.length > 6) {
      console.error(`Key ${k.id} step ${s.id} has ${s.couplets.length} options (exceeds mobile limit of 6)`);
      errors++;
    }

    s.couplets.forEach((c, cIdx) => {
      if (!c.lead || c.lead.length < 5) {
        console.error(`Key ${k.id} step ${s.id} couplet ${cIdx} has invalid lead`);
        errors++;
      }
      if (!c.leadBn || c.leadBn.length < 1) {
        console.error(`Key ${k.id} step ${s.id} couplet ${cIdx} has invalid leadBn`);
        errors++;
      }
      if (!c.diagnosticFeature || c.diagnosticFeature.length < 1) {
        console.error(`Key ${k.id} step ${s.id} couplet ${cIdx} missing diagnosticFeature`);
        errors++;
      }
      if (!c.diagnosticFeatureBn || c.diagnosticFeatureBn.length < 1) {
        console.error(`Key ${k.id} step ${s.id} couplet ${cIdx} missing diagnosticFeatureBn`);
        errors++;
      }

      if (c.resultType === 'next_step') {
        if (!c.nextStepId) {
          console.error(`Key ${k.id} step ${s.id} couplet ${cIdx} next_step missing nextStepId`);
          errors++;
        }
      } else if (c.resultType === 'species') {
        if (!c.speciesId || !speciesMap.has(c.speciesId)) {
          console.error(`Key ${k.id} step ${s.id} couplet ${cIdx} references invalid speciesId: ${c.speciesId}`);
          errors++;
        } else {
          reachableSpecies.add(c.speciesId);
          // Verify canonical image exists
          const sp = speciesMap.get(c.speciesId);
          const hasImage = sp.media && sp.media.some(m => m.imageUrl && m.license);
          if (!hasImage) {
            console.error(`Species ${sp.scientificName} (${sp.id}) in key ${k.id} lacks verified media`);
            errors++;
          }
        }
      } else if (c.resultType === 'taxon') {
        if (!c.taxonId || !taxaMap.has(c.taxonId)) {
          console.error(`Key ${k.id} step ${s.id} couplet ${cIdx} references invalid taxonId: ${c.taxonId}`);
          errors++;
        }
      }
    });
  });

  // Check that all nextStepIds point to existing steps
  k.steps.forEach(s => {
    s.couplets.forEach(c => {
      if (c.resultType === 'next_step') {
        if (!stepIds.has(c.nextStepId)) {
          console.error(`Key ${k.id} step ${s.id} nextStepId ${c.nextStepId} not found in step IDs`);
          errors++;
        }
      }
    });
  });
});

console.log(`Validation finished with ${errors} errors.`);
console.log(`Total keys: ${ALL_KEYS.length} (Global: ${ALL_KEYS.filter(k => k.scope === 'global').length}, BD: ${ALL_KEYS.filter(k => k.scope === 'bangladesh').length})`);
console.log(`Total distinct reachable species: ${reachableSpecies.size}`);

if (errors === 0) {
  const targetFile = path.resolve(__dirname, '../src/data/seedIdentKeys.ts');
  const content = `import type { IdentificationKey } from '../types/biodiversity';\n\nexport const SEED_IDENTIFICATION_KEYS: IdentificationKey[] = ` +
    JSON.stringify(ALL_KEYS, null, 2) + `;\n`;
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Successfully wrote ${ALL_KEYS.length} keys to ${targetFile}!`);
} else {
  console.error('Did NOT write to seedIdentKeys.ts due to validation errors.');
  process.exit(1);
}
