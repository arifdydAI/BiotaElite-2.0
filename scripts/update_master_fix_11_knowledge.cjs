// scripts/update_master_fix_11_knowledge.cjs
// Script to enrich SEED_TAXON_KNOWLEDGE with major group biology-specific knowledge records
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(file) {
  const code = fs.readFileSync(file, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

const originalKnowledge = loadTs('./src/data/seedTaxonKnowledge.ts').SEED_TAXON_KNOWLEDGE;
console.log('Loaded original knowledge records:', originalKnowledge.length);

// Import major groups biology definition
const majorGroupsData = require('./data_major_groups_knowledge.cjs');

// Map updated records
const updatedList = originalKnowledge.map(rec => {
  if (majorGroupsData.updates[rec.id]) {
    console.log('Applying enriched knowledge to:', rec.id);
    return {
      ...rec,
      ...majorGroupsData.updates[rec.id]
    };
  }
  return rec;
});

// Append new records that don't exist yet
majorGroupsData.newRecords.forEach(newRec => {
  const exists = updatedList.some(r => r.id === newRec.id);
  if (!exists) {
    console.log('Adding new group knowledge record:', newRec.id);
    updatedList.push(newRec);
  }
});

console.log('Total knowledge records after update:', updatedList.length);

const outContent = `// BiotaElite 2.0 Taxonomic Knowledge Base (11 Comprehensive Zoological Categories & Major Group Hub)
// MASTER-FIX-11: Core Zoological Classification & Major Animal Groups Knowledge Hub
// Authoritative Sources: Eschmeyer's Catalog of Fishes (2026), WoRMS (2026), Hickman et al. (2020), Ruppert et al. (2004), Kardong (2018), AmphibiaWeb (2026), IOC World Bird List (2026)
import type { TaxonKnowledgeRecord } from '../types/biodiversity';

export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ${JSON.stringify(updatedList, null, 2)};
`;

fs.writeFileSync('./src/data/seedTaxonKnowledge.ts', outContent, 'utf8');
console.log('Successfully wrote updated SEED_TAXON_KNOWLEDGE to src/data/seedTaxonKnowledge.ts');
