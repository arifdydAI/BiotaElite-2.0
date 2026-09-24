/**
 * Merges verified Bengali species monographs into src/data/seedSpecies.ts
 *
 * Preserves 100% invariance on:
 * - Scientific names & authorship citations
 * - Taxonomy nodes & ranks (Latin/standard)
 * - Canonical IDs & taxon IDs
 * - Numerical measurements (lengths, depths, dates)
 * - Global & national IUCN status codes (LC, VU, EN, etc.)
 * - Media assets, references, and existing 24 localized records
 */

const fs = require('fs');
const path = require('path');

const SEED_FILE = path.join(__dirname, '..', 'src', 'data', 'seedSpecies.ts');

const b1 = require('./data_bengali_monographs/batch1_sharks_primitives.cjs');
const b2a = require('./data_bengali_monographs/batch2a_bangladesh_fishes.cjs');
const b2b = require('./data_bengali_monographs/batch2b_global_fishes.cjs');
const b3 = require('./data_bengali_monographs/batch3_tetrapods.cjs');
const b4 = require('./data_bengali_monographs/batch4_invertebrates.cjs');

const ALL_BATCHES = {
  ...b1,
  ...b2a,
  ...b2b,
  ...b3,
  ...b4
};

console.log(`Loaded ${Object.keys(ALL_BATCHES).length} batch monograph records.`);

function toArray(val) {
  if (!val) return undefined;
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') {
    if (val.includes(';')) {
      return val.split(';').map(s => {
        const trimmed = s.trim();
        if (!trimmed) return null;
        return trimmed.endsWith('।') || trimmed.endsWith('.') ? trimmed : trimmed + '।';
      }).filter(Boolean);
    }
    const trimmed = val.trim();
    return [trimmed.endsWith('।') || trimmed.endsWith('.') ? trimmed : trimmed + '।'];
  }
  return undefined;
}

function normalizeEntry(entry) {
  return {
    descriptionBn: entry.morphology?.descriptionBn || entry.descriptionBn,
    diagnosticFeaturesBn: toArray(entry.morphology?.diagnosticFeaturesBn || entry.diagnosticFeaturesBn),
    colorationBn: entry.morphology?.colorationBn || entry.colorationBn,
    dietSummaryBn: entry.ecology?.dietSummaryBn || entry.dietSummaryBn,
    behaviorBn: entry.ecology?.behaviorBn || entry.behaviorBn,
    reproductionBn: entry.ecology?.reproductionBn || entry.reproductionBn,
    ecologicalRoleBn: entry.ecology?.ecologicalRoleBn || entry.ecologicalRoleBn,
    threatsBn: toArray(entry.conservation?.threatsBn || entry.threatsBn),
    notesBn: entry.bangladeshOccurrence?.notesBn || entry.notesBn,
    regionsBn: entry.bangladeshOccurrence?.regionsBn || entry.regionsBn,
  };
}

function applyMonographs() {
  const content = fs.readFileSync(SEED_FILE, 'utf8');
  const startIdx = content.indexOf('= [') + 2;
  const endIdx = content.lastIndexOf(']');
  const prefix = content.slice(0, startIdx);
  const suffix = content.slice(endIdx + 1);
  const jsonStr = content.slice(startIdx, endIdx + 1);

  const speciesList = JSON.parse(jsonStr);
  console.log(`Read ${speciesList.length} species records from seedSpecies.ts.`);

  let updatedCount = 0;
  let untouchedExisting = 0;

  for (const sp of speciesList) {
    const batchData = ALL_BATCHES[sp.id];
    if (!batchData) {
      untouchedExisting++;
      continue;
    }

    const norm = normalizeEntry(batchData);

    // Morphology
    if (!sp.morphology) sp.morphology = {};
    if (norm.descriptionBn && !sp.morphology.descriptionBn) {
      sp.morphology.descriptionBn = norm.descriptionBn;
    }
    if (norm.diagnosticFeaturesBn && (!sp.morphology.diagnosticFeaturesBn || sp.morphology.diagnosticFeaturesBn.length === 0)) {
      sp.morphology.diagnosticFeaturesBn = norm.diagnosticFeaturesBn;
    }
    if (norm.colorationBn && !sp.morphology.colorationBn) {
      sp.morphology.colorationBn = norm.colorationBn;
    }

    // Ecology
    if (!sp.ecology) sp.ecology = {};
    if (norm.dietSummaryBn && !sp.ecology.dietSummaryBn) {
      sp.ecology.dietSummaryBn = norm.dietSummaryBn;
    }
    if (norm.behaviorBn && !sp.ecology.behaviorBn) {
      sp.ecology.behaviorBn = norm.behaviorBn;
    }
    if (norm.reproductionBn && !sp.ecology.reproductionBn) {
      sp.ecology.reproductionBn = norm.reproductionBn;
    }
    if (norm.ecologicalRoleBn && !sp.ecology.ecologicalRoleBn) {
      sp.ecology.ecologicalRoleBn = norm.ecologicalRoleBn;
    }

    // Conservation
    if (!sp.conservation) sp.conservation = {};
    if (norm.threatsBn && (!sp.conservation.threatsBn || sp.conservation.threatsBn.length === 0)) {
      sp.conservation.threatsBn = norm.threatsBn;
    }

    // Bangladesh Occurrence
    if (!sp.bangladeshOccurrence) sp.bangladeshOccurrence = { present: false, regions: [], habitatTypes: [], residencyStatus: 'native' };
    if (norm.notesBn && !sp.bangladeshOccurrence.notesBn) {
      sp.bangladeshOccurrence.notesBn = norm.notesBn;
    }
    if (norm.regionsBn && (!sp.bangladeshOccurrence.regionsBn || sp.bangladeshOccurrence.regionsBn.length === 0)) {
      sp.bangladeshOccurrence.regionsBn = norm.regionsBn;
    }

    updatedCount++;
  }

  console.log(`Updated ${updatedCount} species with verified Bengali monographs.`);
  console.log(`Kept ${untouchedExisting} species untouched (already localized).`);

  const updatedJson = JSON.stringify(speciesList, null, 2);
  const updatedContent = prefix + updatedJson + suffix;

  fs.writeFileSync(SEED_FILE, updatedContent, 'utf8');
  console.log('Successfully wrote updated content to seedSpecies.ts!');
}

applyMonographs();
