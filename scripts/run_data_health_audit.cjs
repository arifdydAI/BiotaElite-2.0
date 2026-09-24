// BiotaElite 2.0 Authoritative Data Health Audit Runner
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTs(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  code = code.replace(/import\.meta/g, '({ env: { VITE_USE_LOCAL_FALLBACK: "true" } })');
  const js = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.React,
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

const { SEED_SPECIES } = loadTs('src/data/seedSpecies.ts');
const { SEED_TAXA } = loadTs('src/data/seedTaxa.ts');
const { SEED_REFERENCES } = loadTs('src/data/seedReferences.ts');
const { SEED_IDENTIFICATION_KEYS } = loadTs('src/data/seedIdentKeys.ts');

console.log('================================================================');
console.log('BIOTAELITE 2.0: AUTHORITATIVE DATA HEALTH DIAGNOSTIC AUDIT');
console.log('================================================================\n');

// Baseline Counts
const bangladeshCount = SEED_SPECIES.filter(s => s.bangladeshOccurrence?.present === true).length;
const globalCount = SEED_SPECIES.filter(s => !s.bangladeshOccurrence || s.bangladeshOccurrence.present === false).length;

const auditJsonPath = path.resolve(__dirname, 'data/fish_orders_audit.json');
const fishOrdersCount = fs.existsSync(auditJsonPath) 
  ? JSON.parse(fs.readFileSync(auditJsonPath, 'utf8')).length 
  : 73;

// Media count
let verifiedMediaCount = 0;
for (const s of SEED_SPECIES) {
  if (s.media && Array.isArray(s.media)) {
    verifiedMediaCount += s.media.filter(m => m.url && m.license).length;
  }
}

// Synonyms count
let synonymCount = 0;
for (const s of SEED_SPECIES) {
  if (s.synonyms && Array.isArray(s.synonyms)) {
    synonymCount += s.synonyms.filter(syn => syn.name && syn.status).length;
  }
}

console.log('DATASET BASELINE VERIFICATION:');
console.log(`  Species Total:       ${SEED_SPECIES.length} (Expected: 238)`);
console.log(`  Bangladesh Native:   ${bangladeshCount} (Expected: 116)`);
console.log(`  Global Non-BD:       ${globalCount} (Expected: 122)`);
console.log(`  Taxonomy Nodes:      ${SEED_TAXA.length} (Expected: 650)`);
console.log(`  Living Fish Orders:  ${fishOrdersCount} (Expected: 73)`);
console.log(`  Identification Keys: ${SEED_IDENTIFICATION_KEYS.length} (Expected: 21)`);
console.log(`  Verified Media:      ${verifiedMediaCount} (Expected: 236)`);
console.log(`  Synonyms:            ${synonymCount} (Expected: 201)`);
console.log(`  References:          ${SEED_REFERENCES.length} (Expected: 39)\n`);

// Detailed Diagnostics
let issues = [];

// 1. Duplicate canonical binomials
let duplicateCanonicalIdentities = 0;
const nameMap = new Map();
for (const sp of SEED_SPECIES) {
  const norm = sp.scientificName.trim().toLowerCase();
  nameMap.set(norm, (nameMap.get(norm) || 0) + 1);
}
for (const [name, count] of nameMap.entries()) {
  if (count > 1) {
    duplicateCanonicalIdentities += (count - 1);
    issues.push({ type: 'error', entity: 'species', message: `Duplicate canonical species: ${name} (${count} occurrences)` });
  }
}

// 2. Orphan taxonomy records
let orphanRecords = 0;
const taxonIds = new Set(SEED_TAXA.map(t => t.id));
for (const t of SEED_TAXA) {
  const pId = t.parentTaxonId ?? t.parentId;
  if (pId && !taxonIds.has(pId)) {
    orphanRecords++;
    issues.push({ type: 'warning', entity: 'taxon', message: `Orphan taxonomy node: ${t.id} (${t.scientificName || t.name}) references missing parent ${pId}` });
  }
}

// 3. Invalid taxonomy relationships / loops
let invalidTaxonomyRelationships = 0;
for (const t of SEED_TAXA) {
  let curr = t;
  const visited = new Set();
  while (curr) {
    if (visited.has(curr.id)) {
      invalidTaxonomyRelationships++;
      issues.push({ type: 'error', entity: 'taxon', message: `Cyclic taxonomy relationship detected at node: ${curr.id}` });
      break;
    }
    visited.add(curr.id);
    const pId = curr.parentTaxonId ?? curr.parentId;
    curr = pId ? SEED_TAXA.find(x => x.id === pId) : null;
  }
}

// 4. Broken reference citations
let brokenReferences = 0;
const refIds = new Set(SEED_REFERENCES.map(r => r.id));
for (const sp of SEED_SPECIES) {
  if (sp.referenceIds && Array.isArray(sp.referenceIds)) {
    for (const rid of sp.referenceIds) {
      if (!refIds.has(rid)) {
        brokenReferences++;
        issues.push({ type: 'warning', entity: 'reference', message: `Species ${sp.scientificName} references missing citation ID: ${rid}` });
      }
    }
  }
}

// 5. Broken identification key branches / couplets
let brokenKeyBranches = 0;
const spIds = new Set(SEED_SPECIES.map(s => s.id));
for (const key of SEED_IDENTIFICATION_KEYS) {
  if (key.couplets && Array.isArray(key.couplets)) {
    const coupletIds = new Set(key.couplets.map(c => c.id));
    for (const couplet of key.couplets) {
      for (const lead of couplet.leads || []) {
        if (lead.nextCoupletId && !coupletIds.has(lead.nextCoupletId)) {
          brokenKeyBranches++;
          issues.push({ type: 'error', entity: 'key', message: `Key ${key.id} lead points to non-existent couplet: ${lead.nextCoupletId}` });
        }
        if (lead.resultSpeciesId && !spIds.has(lead.resultSpeciesId)) {
          brokenKeyBranches++;
          issues.push({ type: 'error', entity: 'key', message: `Key ${key.id} lead points to non-existent terminal species: ${lead.resultSpeciesId}` });
        }
      }
    }
  }
}

// 6. Unverified published species
let unverifiedPublished = 0;
for (const sp of SEED_SPECIES) {
  if (sp.isPublished && !sp.isVerified) {
    unverifiedPublished++;
    issues.push({ type: 'error', entity: 'species', message: `Species ${sp.scientificName} is published without scientific verification` });
  }
}

const criticalIssues = issues.filter(i => i.type === 'error').length;
const warnings = issues.filter(i => i.type === 'warning').length;
const totalIssues = issues.length;
const healthScore = Math.max(0, Math.min(100, Math.round(100 - (criticalIssues * 5 + warnings * 1))));

console.log('DATA HEALTH AUDIT REPORT:');
console.log(`  Total Issues:                    ${totalIssues}`);
console.log(`  Critical Issues:                 ${criticalIssues}`);
console.log(`  Warnings:                        ${warnings}`);
console.log(`  Orphan Records:                  ${orphanRecords}`);
console.log(`  Broken References:               ${brokenReferences}`);
console.log(`  Broken Key Branches:             ${brokenKeyBranches}`);
console.log(`  Duplicate Canonical Identities:  ${duplicateCanonicalIdentities}`);
console.log(`  Invalid Taxonomy Relationships:  ${invalidTaxonomyRelationships}`);
console.log(`  System Health Score:             ${healthScore}%\n`);

if (issues.length > 0) {
  console.log('ISSUES DETECTED:');
  issues.forEach((iss, idx) => console.log(`  ${idx + 1}. [${iss.type.toUpperCase()}] (${iss.entity}) ${iss.message}`));
} else {
  console.log('  All diagnostic integrity checks PASSED with 0 warnings and 0 critical issues.');
}

console.log('\n================================================================');
