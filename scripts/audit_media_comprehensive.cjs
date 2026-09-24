// Comprehensive Media Audit for all 238 Canonical Species in BiotaElite 2.0
'use strict';
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const code = fs.readFileSync(path.join(root, 'src/data/seedSpecies.ts'), 'utf8');
const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const m = { exports: {} };
new Function('module', 'exports', 'require', js)(m, m.exports, require);
const species = m.exports.SEED_SPECIES;

const report = {
  totalSpecies: species.length,
  speciesWithMedia: 0,
  speciesWithoutMedia: 0,
  totalMediaItems: 0,
  verifiedMediaItems: 0,
  pendingMediaItems: 0,
  byPhylum: {},
  byClass: {},
  imageVerificationStatusCounts: {},
  speciesWithoutMediaList: [],
  issues: []
};

for (const s of species) {
  const phylum = (s.taxonomy && s.taxonomy.phylum) ? s.taxonomy.phylum : 'Unknown';
  const cls = (s.taxonomy && s.taxonomy.class) ? s.taxonomy.class : 'Unknown';
  report.byPhylum[phylum] = (report.byPhylum[phylum] || 0) + 1;
  report.byClass[cls] = (report.byClass[cls] || 0) + 1;

  const ivs = s.imageVerificationStatus || 'missing';
  report.imageVerificationStatusCounts[ivs] = (report.imageVerificationStatusCounts[ivs] || 0) + 1;

  const mediaList = s.media || [];
  if (mediaList.length === 0) {
    report.speciesWithoutMedia++;
    report.speciesWithoutMediaList.push({
      id: s.id,
      scientificName: s.scientificName,
      commonEn: (s.commonNames && s.commonNames.en && s.commonNames.en[0]) ? s.commonNames.en[0] : '',
      phylum: phylum,
      class: cls,
      bangladesh: (s.bangladeshOccurrence && s.bangladeshOccurrence.present) ? true : false,
      imageVerificationStatus: s.imageVerificationStatus
    });
  } else {
    report.speciesWithMedia++;
    for (const med of mediaList) {
      report.totalMediaItems++;
      if (med.isVerified && med.verificationStatus === 'verified') {
        report.verifiedMediaItems++;
      } else {
        report.pendingMediaItems++;
      }

      // Integrity checks
      if (med.speciesId !== s.id) {
        report.issues.push('[SPECIES_ID_MISMATCH] Species ' + s.id + ' has media ' + med.id + ' with speciesId ' + med.speciesId);
      }
      if (!med.url) {
        report.issues.push('[MISSING_URL] Species ' + s.id + ' media ' + med.id + ' has no URL');
      }
      if (!med.license) {
        report.issues.push('[MISSING_LICENSE] Species ' + s.id + ' media ' + med.id + ' has no license');
      }
      if (!med.sourceUrl) {
        report.issues.push('[MISSING_SOURCE_URL] Species ' + s.id + ' media ' + med.id + ' has no sourceUrl');
      }
      if (!med.photographer && !med.creator) {
        report.issues.push('[MISSING_PHOTOGRAPHER] Species ' + s.id + ' media ' + med.id + ' has no photographer');
      }
      if (!med.attribution) {
        report.issues.push('[MISSING_ATTRIBUTION] Species ' + s.id + ' media ' + med.id + ' has no attribution');
      }
    }
  }
}

console.log('AUDIT SUMMARY:');
console.log('Total Canonical Species:', report.totalSpecies);
console.log('Species With Media:', report.speciesWithMedia);
console.log('Species Without Media:', report.speciesWithoutMedia);
console.log('Total Media Records:', report.totalMediaItems);
console.log('Verified Media Records:', report.verifiedMediaItems);
console.log('Pending Media Records:', report.pendingMediaItems);
console.log('Image Verification Statuses:', JSON.stringify(report.imageVerificationStatusCounts, null, 2));
console.log('\nSpecies Without Media:');
console.log(JSON.stringify(report.speciesWithoutMediaList, null, 2));
console.log('\nIntegrity Issues Found:', report.issues.length);
if (report.issues.length > 0) {
  console.log(report.issues.join('\n'));
}

fs.writeFileSync(path.join(__dirname, 'data_media_audit_report.json'), JSON.stringify(report, null, 2));
console.log('\nWrote report to scripts/data_media_audit_report.json');
