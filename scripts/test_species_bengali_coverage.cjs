// Comprehensive Bengali Monograph Coverage & Invariance Diagnostic Suite
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

const BENGALI_REGEX = /[\u0980-\u09FF]/;

function isBengaliText(str) {
  return typeof str === 'string' && str.trim().length > 0 && BENGALI_REGEX.test(str);
}

function isBengaliArray(arr) {
  return Array.isArray(arr) && arr.length > 0 && arr.some(item => isBengaliText(item));
}

console.log('================================================================');
console.log('BIOTAELITE 2.0: FULL 238-SPECIES MONOGRAPH BENGALI COVERAGE AUDIT');
console.log('================================================================\n');

const totalSpecies = SEED_SPECIES.length;
console.log(`Total Canonical Species: ${totalSpecies}\n`);

// Measure Coverage
const metrics = {
  description: { bn: 0, enFallback: 0, missing: 0 },
  diagnosticFeatures: { bn: 0, enFallback: 0, missing: 0 },
  coloration: { bn: 0, enFallback: 0, missing: 0 },
  dietSummary: { bn: 0, enFallback: 0, missing: 0 },
  behavior: { bn: 0, enFallback: 0, missing: 0 },
  reproduction: { bn: 0, enFallback: 0, missing: 0 },
  ecologicalRole: { bn: 0, enFallback: 0, missing: 0 },
  threats: { bn: 0, enFallback: 0, missing: 0 },
  bdRegions: { bn: 0, enFallback: 0, missing: 0, applicable: 0 },
  bdNotes: { bn: 0, enFallback: 0, missing: 0, applicable: 0 },
  bdSeasonalNotes: { bn: 0, enFallback: 0, missing: 0, applicable: 0 }
};

const speciesUsingFallback = [];

for (const sp of SEED_SPECIES) {
  const isBd = sp.bangladeshOccurrence && sp.bangladeshOccurrence.present;
  let spFallbackFields = [];

  // 1. Description
  if (isBengaliText(sp.morphology?.descriptionBn)) {
    metrics.description.bn++;
  } else if (sp.morphology?.description) {
    metrics.description.enFallback++;
    spFallbackFields.push('description');
  } else {
    metrics.description.missing++;
  }

  // 2. Diagnostic Features
  if (isBengaliArray(sp.morphology?.diagnosticFeaturesBn)) {
    metrics.diagnosticFeatures.bn++;
  } else if (sp.morphology?.diagnosticFeatures?.length > 0) {
    metrics.diagnosticFeatures.enFallback++;
    spFallbackFields.push('diagnosticFeatures');
  } else {
    metrics.diagnosticFeatures.missing++;
  }

  // 3. Coloration
  if (isBengaliText(sp.morphology?.colorationBn)) {
    metrics.coloration.bn++;
  } else if (sp.morphology?.coloration) {
    metrics.coloration.enFallback++;
    spFallbackFields.push('coloration');
  } else {
    metrics.coloration.missing++;
  }

  // 4. Diet Summary
  if (isBengaliText(sp.ecology?.dietSummaryBn)) {
    metrics.dietSummary.bn++;
  } else if (sp.ecology?.dietSummary) {
    metrics.dietSummary.enFallback++;
    spFallbackFields.push('dietSummary');
  } else {
    metrics.dietSummary.missing++;
  }

  // 5. Behavior
  if (isBengaliText(sp.ecology?.behaviorBn)) {
    metrics.behavior.bn++;
  } else if (sp.ecology?.behavior) {
    metrics.behavior.enFallback++;
    spFallbackFields.push('behavior');
  } else {
    metrics.behavior.missing++;
  }

  // 6. Reproduction
  if (isBengaliText(sp.ecology?.reproductionBn)) {
    metrics.reproduction.bn++;
  } else if (sp.ecology?.reproduction) {
    metrics.reproduction.enFallback++;
    spFallbackFields.push('reproduction');
  } else {
    metrics.reproduction.missing++;
  }

  // 7. Ecological Role
  if (isBengaliText(sp.ecology?.ecologicalRoleBn)) {
    metrics.ecologicalRole.bn++;
  } else if (sp.ecology?.ecologicalRole) {
    metrics.ecologicalRole.enFallback++;
    spFallbackFields.push('ecologicalRole');
  } else {
    metrics.ecologicalRole.missing++;
  }

  // 8. Threats
  if (isBengaliArray(sp.conservation?.threatsBn)) {
    metrics.threats.bn++;
  } else if (sp.conservation?.threats?.length > 0) {
    metrics.threats.enFallback++;
    spFallbackFields.push('threats');
  } else {
    metrics.threats.missing++;
  }

  // 9. Bangladesh Regions
  if (isBd) {
    metrics.bdRegions.applicable++;
    if (isBengaliArray(sp.bangladeshOccurrence?.regionsBn)) {
      metrics.bdRegions.bn++;
    } else if (sp.bangladeshOccurrence?.regions?.length > 0) {
      metrics.bdRegions.enFallback++;
      spFallbackFields.push('bdRegions');
    } else {
      metrics.bdRegions.missing++;
    }
  }

  // 10. Bangladesh Notes
  if (isBd) {
    metrics.bdNotes.applicable++;
    if (isBengaliText(sp.bangladeshOccurrence?.notesBn)) {
      metrics.bdNotes.bn++;
    } else if (sp.bangladeshOccurrence?.notes) {
      metrics.bdNotes.enFallback++;
      spFallbackFields.push('bdNotes');
    } else {
      metrics.bdNotes.missing++;
    }
  }

  // 11. Bangladesh Seasonal Notes
  if (isBd && sp.bangladeshOccurrence?.seasonalNotes) {
    metrics.bdSeasonalNotes.applicable++;
    if (isBengaliText(sp.bangladeshOccurrence?.seasonalNotesBn)) {
      metrics.bdSeasonalNotes.bn++;
    } else {
      metrics.bdSeasonalNotes.enFallback++;
      spFallbackFields.push('bdSeasonalNotes');
    }
  }

  if (spFallbackFields.length > 0) {
    speciesUsingFallback.push({
      id: sp.id,
      scientificName: sp.scientificName,
      fallbackFields: spFallbackFields
    });
  }
}

console.log('FIELD-BY-FIELD BENGALI LOCALIZATION BREAKDOWN:');
console.log('----------------------------------------------------------------');
console.log(`Description (Overview)  : ${metrics.description.bn}/${totalSpecies} Bengali (${metrics.description.enFallback} English fallback)`);
console.log(`Diagnostic Features     : ${metrics.diagnosticFeatures.bn}/${totalSpecies} Bengali (${metrics.diagnosticFeatures.enFallback} English fallback)`);
console.log(`Coloration              : ${metrics.coloration.bn}/${totalSpecies} Bengali (${metrics.coloration.enFallback} English fallback)`);
console.log(`Feeding / Diet Summary  : ${metrics.dietSummary.bn}/${totalSpecies} Bengali (${metrics.dietSummary.enFallback} English fallback)`);
console.log(`Behavior                : ${metrics.behavior.bn}/${totalSpecies} Bengali (${metrics.behavior.enFallback} English fallback)`);
console.log(`Reproduction            : ${metrics.reproduction.bn}/${totalSpecies} Bengali (${metrics.reproduction.enFallback} English fallback)`);
console.log(`Ecological Role         : ${metrics.ecologicalRole.bn}/${totalSpecies} Bengali (${metrics.ecologicalRole.enFallback} English fallback)`);
console.log(`Conservation Threats    : ${metrics.threats.bn}/${totalSpecies} Bengali (${metrics.threats.enFallback} English fallback)`);
console.log(`BD Basin Distribution   : ${metrics.bdRegions.bn}/${metrics.bdRegions.applicable} Bengali (${metrics.bdRegions.enFallback} English fallback)`);
console.log(`BD Regional Notes       : ${metrics.bdNotes.bn}/${metrics.bdNotes.applicable} Bengali (${metrics.bdNotes.enFallback} English fallback)`);
console.log(`BD Seasonal Occurrence  : ${metrics.bdSeasonalNotes.bn}/${metrics.bdSeasonalNotes.applicable} Bengali (${metrics.bdSeasonalNotes.enFallback} English fallback)`);
console.log('----------------------------------------------------------------\n');

console.log(`Total species with >= 1 English fallback field: ${speciesUsingFallback.length} / ${totalSpecies}`);

// Target Verification: Chiloscyllium indicum
const target = SEED_SPECIES.find(s => s.scientificName === 'Chiloscyllium indicum');
console.log('\n[Target Verification: Chiloscyllium indicum]');
if (target) {
  console.log(`  ID: ${target.id}`);
  console.log(`  Description Bengali: ${isBengaliText(target.morphology?.descriptionBn) ? '✅ PRESENT' : '❌ FALLBACK TO ENGLISH'}`);
  console.log(`  Diagnostic Bengali : ${isBengaliArray(target.morphology?.diagnosticFeaturesBn) ? '✅ PRESENT' : '❌ FALLBACK TO ENGLISH'}`);
  console.log(`  Coloration Bengali : ${isBengaliText(target.morphology?.colorationBn) ? '✅ PRESENT' : '❌ FALLBACK TO ENGLISH'}`);
  console.log(`  Diet Bengali       : ${isBengaliText(target.ecology?.dietSummaryBn) ? '✅ PRESENT' : '❌ FALLBACK TO ENGLISH'}`);
  console.log(`  Threats Bengali    : ${isBengaliArray(target.conservation?.threatsBn) ? '✅ PRESENT' : '❌ FALLBACK TO ENGLISH'}`);
  console.log(`  BD Notes Bengali   : ${isBengaliText(target.bangladeshOccurrence?.notesBn) ? '✅ PRESENT' : '❌ FALLBACK TO ENGLISH'}`);
} else {
  console.error('❌ Chiloscyllium indicum not found in canonical dataset!');
}

console.log('\n================================================================');
