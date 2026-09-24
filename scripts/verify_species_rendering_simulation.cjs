/**
 * scripts/verify_species_rendering_simulation.cjs
 * Simulates the exact rendering logic of SpeciesDetailPage.tsx in Bengali mode
 */

const fs = require('fs');
const path = require('path');

const SEED_FILE = path.join(__dirname, '..', 'src', 'data', 'seedSpecies.ts');
const content = fs.readFileSync(SEED_FILE, 'utf8');
const startIdx = content.indexOf('= [') + 2;
const endIdx = content.lastIndexOf(']');
const list = JSON.parse(content.slice(startIdx, endIdx + 1));

const testSpecies = [
  'sp-chiloscyllium-indicum',      // Elasmobranch (Shark)
  'sp-catla-catla',                // Fish (Teleost)
  'sp-scylla-olivacea',            // Arthropoda (Crab)
  'sp-sepia-officinalis',          // Mollusca (Cephalopod)
  'sp-pila-globosa',               // Mollusca (Gastropod)
  'sp-metaphire-posthuma',         // Annelida (Earthworm)
  'sp-porites-lutea',              // Cnidaria (Coral)
  'sp-duttaphrynus-melanostictus', // Amphibia (Toad)
  'sp-crocodylus-porosus',         // Reptilia (Crocodile)
  'sp-ophiophagus-hannah',         // Reptilia (King Cobra)
  'sp-alcedo-atthis',              // Aves (Kingfisher)
  'sp-orcaella-brevirostris'       // Mammalia (Dolphin)
];

console.log('SIMULATING SpeciesDetailPage.tsx RENDERING (language === "bn"):');
console.log('================================================================');

let allPassed = true;

testSpecies.forEach(id => {
  const sp = list.find(s => s.id === id);
  if (!sp) {
    console.log('ERROR: Missing', id);
    allPassed = false;
    return;
  }
  
  // Exact logic from SpeciesDetailPage.tsx:
  const morphologyDesc = sp.morphology?.descriptionBn || sp.morphology?.description;
  const diagnosticFeatures = (sp.morphology?.diagnosticFeaturesBn && sp.morphology.diagnosticFeaturesBn.length > 0)
    ? sp.morphology.diagnosticFeaturesBn
    : sp.morphology?.diagnosticFeatures;
  const coloration = sp.morphology?.colorationBn || sp.morphology?.coloration;
  const dietSummary = sp.ecology?.dietSummaryBn || sp.ecology?.dietSummary;
  const behavior = sp.ecology?.behaviorBn || sp.ecology?.behavior;
  const reproduction = sp.ecology?.reproductionBn || sp.ecology?.reproduction;
  const ecologicalRole = sp.ecology?.ecologicalRoleBn || sp.ecology?.ecologicalRole;
  const threats = (sp.conservation?.threatsBn && sp.conservation.threatsBn.length > 0)
    ? sp.conservation.threatsBn
    : sp.conservation?.threats;
  const bdRegions = (sp.bangladeshOccurrence?.regionsBn && sp.bangladeshOccurrence.regionsBn.length > 0)
    ? sp.bangladeshOccurrence.regionsBn
    : sp.bangladeshOccurrence?.regions;
  const bdNotes = sp.bangladeshOccurrence?.notesBn || sp.bangladeshOccurrence?.notes;

  const isBn = (str) => /[\u0980-\u09FF]/.test(str || '');
  
  const descPass = !morphologyDesc || isBn(morphologyDesc);
  const diagPass = !diagnosticFeatures || diagnosticFeatures.every(f => isBn(f));
  const colPass = !coloration || isBn(coloration);
  const dietPass = !dietSummary || isBn(dietSummary);
  const behPass = !behavior || isBn(behavior);
  const reproPass = !reproduction || isBn(reproduction);
  const rolePass = !ecologicalRole || isBn(ecologicalRole);
  const threatPass = !threats || threats.every(t => isBn(t));

  console.log(`Species: ${sp.scientificName} (${sp.commonNames?.bn?.[0] || 'N/A'})`);
  console.log(`  Description Bengali : ${descPass ? 'PASS' : 'FAIL'}`);
  console.log(`  Diagnostic Bengali  : ${diagPass ? 'PASS' : 'FAIL'}`);
  console.log(`  Coloration Bengali  : ${colPass ? 'PASS' : 'FAIL'}`);
  console.log(`  Diet Bengali        : ${dietPass ? 'PASS' : 'FAIL'}`);
  console.log(`  Behavior Bengali    : ${behPass ? 'PASS' : 'FAIL'}`);
  console.log(`  Repro Bengali       : ${reproPass ? 'PASS' : 'FAIL'}`);
  console.log(`  Role Bengali        : ${rolePass ? 'PASS' : 'FAIL'}`);
  console.log(`  Threats Bengali     : ${threatPass ? 'PASS' : 'FAIL'}`);

  if (!descPass || !diagPass || !colPass || !dietPass || !behPass || !reproPass || !rolePass || !threatPass) {
    allPassed = false;
  }

  if (sp.bangladeshOccurrence?.present) {
    const notesPass = !bdNotes || isBn(bdNotes);
    const regionsPass = !bdRegions || bdRegions.every(r => isBn(r));
    console.log(`  BD Notes Bengali    : ${notesPass ? 'PASS' : 'FAIL'}`);
    console.log(`  BD Regions Bengali  : ${regionsPass ? 'PASS' : 'FAIL'}`);
    if (!notesPass || !regionsPass) allPassed = false;
  }
});

console.log('================================================================');
console.log(`OVERALL SIMULATION RESULT: ${allPassed ? 'ALL PASS ✅' : 'FAIL ❌'}`);
console.log('================================================================');
