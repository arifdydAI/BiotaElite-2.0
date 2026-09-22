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

const targets = [
  {
    id: 'sp-penaeus-monodon',
    scientificName: 'Penaeus monodon',
    genus: 'Penaeus',
    epithet: 'monodon',
    synonyms: ['Penaeus (Penaeus) monodon', 'Cancer monodon']
  },
  {
    id: 'sp-duttaphrynus-melanostictus',
    scientificName: 'Duttaphrynus melanostictus',
    genus: 'Duttaphrynus',
    epithet: 'melanostictus',
    synonyms: ['Bufo melanostictus', 'Bufo melanostictus Schneider, 1799']
  }
];

console.log('=== DUPLICATE AUDIT FOR 2 NEW CANDIDATE SPECIES ===\n');

targets.forEach(tgt => {
  console.log(`Checking candidate: ${tgt.scientificName} [${tgt.id}]...`);
  
  // 1. speciesId
  const idMatch = SEED_SPECIES.find(s => s.id === tgt.id);
  console.log(`  - speciesId '${tgt.id}': ${idMatch ? 'CONFLICT: Found ' + idMatch.scientificName : 'CLEAN: No collision'}`);

  // 2. accepted scientific name
  const nameMatch = SEED_SPECIES.find(s => s.scientificName.toLowerCase() === tgt.scientificName.toLowerCase());
  console.log(`  - accepted scientific name '${tgt.scientificName}': ${nameMatch ? 'CONFLICT: Found ' + nameMatch.id : 'CLEAN: No collision'}`);

  // 3. normalized scientific name
  const normMatch = SEED_SPECIES.find(s => s.scientificName.replace(/[^a-zA-Z]/g, '').toLowerCase() === tgt.scientificName.replace(/[^a-zA-Z]/g, '').toLowerCase());
  console.log(`  - normalized scientific name: ${normMatch ? 'CONFLICT: Found ' + normMatch.id : 'CLEAN: No collision'}`);

  // 4. genus + specific epithet
  const genusEpMatch = SEED_SPECIES.find(s => s.taxonomy?.genus?.toLowerCase() === tgt.genus.toLowerCase() && s.taxonomy?.species?.toLowerCase().includes(tgt.epithet.toLowerCase()));
  console.log(`  - genus + epithet '${tgt.genus} ${tgt.epithet}': ${genusEpMatch ? 'CONFLICT: Found ' + genusEpMatch.id : 'CLEAN: No collision'}`);

  // 5. synonyms
  const synMatches = [];
  SEED_SPECIES.forEach(s => {
    if (s.synonyms) {
      s.synonyms.forEach(syn => {
        if (tgt.synonyms.some(ts => ts.toLowerCase() === syn.name?.toLowerCase()) || syn.name?.toLowerCase() === tgt.scientificName.toLowerCase()) {
          synMatches.push({ speciesId: s.id, syn: syn.name });
        }
      });
    }
  });
  console.log(`  - synonym matches: ${synMatches.length > 0 ? 'CONFLICT: ' + JSON.stringify(synMatches) : 'CLEAN: No collision'}`);

  // 6. Taxa presence
  const genusTaxon = SEED_TAXA.find(t => t.scientificName.toLowerCase() === tgt.genus.toLowerCase());
  console.log(`  - genus taxon '${tgt.genus}': ${genusTaxon ? 'Exists (' + genusTaxon.id + ')' : 'Not in taxa backbone (needs creation)'}`);
  console.log();
});
