const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (reqPath) => {
    if (reqPath.startsWith('../') || reqPath.startsWith('./')) {
      const resolved = path.join(path.dirname(fullPath), reqPath);
      if (fs.existsSync(resolved + '.ts')) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved + '.ts'));
      if (fs.existsSync(resolved + '.tsx')) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved + '.tsx'));
      if (fs.existsSync(resolved)) return loadTs(path.relative(path.resolve(__dirname, '..'), resolved));
    }
    return require(reqPath);
  };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
const { SEED_REFERENCES } = loadTs('src/data/seedReferences.ts');

const { NEW_TAXA_NODES } = require('./data_depth_taxa.cjs');
const { DEPTH_SPECIES_RECORDS } = require('./data_depth_species.cjs');

console.log('=== CURRENT BASELINE COUNTS ===');
console.log('Current SEED_TAXA:', SEED_TAXA.length);
console.log('Current SEED_SPECIES:', SEED_SPECIES.length);
console.log('Current SEED_REFERENCES:', SEED_REFERENCES.length);

console.log('\n=== CURATED EXPANSION COUNTS ===');
console.log('NEW_TAXA_NODES:', NEW_TAXA_NODES.length);
console.log('DEPTH_SPECIES_RECORDS:', DEPTH_SPECIES_RECORDS.length);

// 1. Check for duplicates in current seed
const taxaIdMap = new Map(SEED_TAXA.map(t => [t.id, t]));
const speciesIdMap = new Map(SEED_SPECIES.map(s => [s.id, s]));
const refIdMap = new Map(SEED_REFERENCES.map(r => [r.id, r]));

// 2. Classify new taxa
const trulyNewTaxa = [];
const duplicateTaxa = [];
for (const t of NEW_TAXA_NODES) {
  if (taxaIdMap.has(t.id)) {
    duplicateTaxa.push(t);
  } else {
    trulyNewTaxa.push(t);
    taxaIdMap.set(t.id, t);
  }
}
console.log(`Taxa: ${trulyNewTaxa.length} truly new, ${duplicateTaxa.length} already existing in SEED_TAXA`);

// 3. Check parental links for all taxa
let brokenTaxaParent = 0;
for (const t of trulyNewTaxa) {
  const pId = t.parentId || t.parentTaxonId;
  if (!pId) {
    console.error(`❌ Taxon ${t.id} (${t.scientificName}) has no parentId`);
    brokenTaxaParent++;
  } else if (!taxaIdMap.has(pId)) {
    console.error(`❌ Taxon ${t.id} (${t.scientificName}) has missing parent: ${pId}`);
    brokenTaxaParent++;
  }
}
console.log(`Parent links check for new taxa: ${brokenTaxaParent === 0 ? 'ALL VALID ✅' : brokenTaxaParent + ' BROKEN ❌'}`);

// 4. Classify new species
const trulyNewSpecies = [];
const duplicateSpecies = [];
for (const s of DEPTH_SPECIES_RECORDS) {
  if (speciesIdMap.has(s.id)) {
    duplicateSpecies.push(s);
  } else {
    trulyNewSpecies.push(s);
    speciesIdMap.set(s.id, s);
  }
}
console.log(`Species: ${trulyNewSpecies.length} truly new, ${duplicateSpecies.length} already existing in SEED_SPECIES`);

// 5. Check species taxonId and taxonomy path
let speciesTaxonErrors = 0;
for (const s of trulyNewSpecies) {
  if (!taxaIdMap.has(s.taxonId)) {
    console.error(`❌ Species ${s.id} taxonId ${s.taxonId} not in taxa map!`);
    speciesTaxonErrors++;
  }
  if (!s.taxonomy || !s.taxonomy.kingdom || !s.taxonomy.phylum || !s.taxonomy.genus || !s.taxonomy.species) {
    console.error(`❌ Species ${s.id} missing required taxonomy levels!`);
    speciesTaxonErrors++;
  }
}
console.log(`Species taxonId & path check: ${speciesTaxonErrors === 0 ? 'ALL VALID ✅' : speciesTaxonErrors + ' ERRORS ❌'}`);

// 6. Check species images and references
let imageErrors = 0;
let missingRefs = new Set();
for (const s of trulyNewSpecies) {
  if (!s.media || s.media.length === 0) {
    console.error(`❌ Species ${s.id} has no media!`);
    imageErrors++;
  } else {
    for (const m of s.media) {
      if (!m.url && !m.imageUrl) {
        console.error(`❌ Species ${s.id} media has no url!`);
        imageErrors++;
      }
      if (!m.license || !m.photographer || !m.sourceUrl) {
        console.error(`❌ Species ${s.id} media incomplete license/photographer/source!`);
        imageErrors++;
      }
    }
  }
  if (s.referenceIds) {
    for (const rId of s.referenceIds) {
      if (!refIdMap.has(rId)) {
        missingRefs.add(rId);
      }
    }
  }
}
console.log(`Species images check: ${imageErrors === 0 ? 'ALL VALID ✅' : imageErrors + ' ERRORS ❌'}`);
console.log(`Missing references count: ${missingRefs.size}`);
if (missingRefs.size > 0) {
  console.log('Missing reference IDs:', Array.from(missingRefs));
}
