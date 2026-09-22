const fs = require('fs');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

const knowledge = loadTs('./src/data/seedTaxonKnowledge.ts').SEED_TAXON_KNOWLEDGE;
const taxa = loadTs('./src/data/seedTaxa.ts').SEED_TAXA;

const orderNodes = taxa.filter(t => t.rank === 'order' && (t.module === 'fish' || t.module === 'general'));
const kOrderMap = new Map(knowledge.filter(k => k.rank === 'order').map(k => [k.taxonId, k]));

console.log(`=== AUDITING EXACT 11 KNOWLEDGE CATEGORIES FOR ALL ${orderNodes.length} FISH ORDERS ===\n`);

let passCount = 0;
let failCount = 0;

orderNodes.forEach((ord, i) => {
  const k = kOrderMap.get(ord.id);
  if (!k) {
    console.error(`[FAIL] ${ord.scientificName} (${ord.id}): NO KNOWLEDGE RECORD FOUND!`);
    failCount++;
    return;
  }

  const missing = [];
  
  // 1. Classification
  if (!k.classificationHierarchy || k.classificationHierarchy.length === 0 || !k.authoritySource) missing.push('1. Classification');
  // 2. Identifying Characteristics
  if (!k.diagnosticCharacteristics || !k.diagnosticCharacteristics.en || !k.diagnosticCharacteristics.bn) missing.push('2. Diagnostic Characteristics');
  // 3. Habitat
  if (!k.habitat || !k.habitat.en || !k.habitat.bn) missing.push('3. Habitat');
  // 4. Ecosystem
  if (!k.ecosystem || !k.ecosystem.en || !k.ecosystem.bn) missing.push('4. Ecosystem');
  // 5. Feeding
  if (!k.feeding || !k.feeding.en || !k.feeding.bn) missing.push('5. Feeding');
  // 6. Reproduction
  if (!k.reproduction || !k.reproduction.en || !k.reproduction.bn) missing.push('6. Reproduction');
  // 7. Distribution
  if (!k.distribution || !k.distribution.en || !k.distribution.bn) missing.push('7. Distribution');
  // 8. Important Families
  if (!k.importantFamilies || k.importantFamilies.length === 0) missing.push('8. Important Families');
  // 9. Scientific Names
  if (!k.scientificNamesSummary || !k.scientificNamesSummary.en || !k.scientificNamesSummary.bn) missing.push('9. Scientific Names Summary');
  // 10. Examples
  if (!k.examplesSummary || !k.examplesSummary.en || !k.examplesSummary.bn) missing.push('10. Examples Summary');
  // 11. Additional info
  if (!k.additionalInformation || !k.additionalInformation.en || !k.additionalInformation.bn) missing.push('11. Additional Information');

  if (missing.length > 0) {
    console.warn(`[WARN] ${(i+1)}. ${ord.scientificName} (${ord.id}) missing: ${missing.join(', ')}`);
    failCount++;
  } else {
    passCount++;
  }
});

console.log(`\nResults: ${passCount} orders fully have all 11 categories, ${failCount} issues.`);
