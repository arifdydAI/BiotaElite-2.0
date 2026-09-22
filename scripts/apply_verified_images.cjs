// Applies verified image data to src/data/seedSpecies.ts safely and deterministically
const fs = require('fs');
const path = require('path');
const { VERIFIED_IMAGES } = require('./verified_images_data.cjs');

const FILE_PATH = path.join(__dirname, '../src/data/seedSpecies.ts');
let content = fs.readFileSync(FILE_PATH, 'utf8');

// For each verified image, update the species record in seedSpecies.ts
let updatedCount = 0;
let unavailableCount = 0;

for (const [speciesId, imgData] of Object.entries(VERIFIED_IMAGES)) {
  // Format the media block string
  const mediaStr = `media: [
      {
        id: '${imgData.id}',
        speciesId: '${imgData.speciesId}',
        taxonId: '${imgData.taxonId}',
        url: '${imgData.url}',
        imageUrl: '${imgData.url}',
        caption: '${imgData.caption.replace(/'/g, "\\'")}',
        sourceName: '${imgData.sourceName.replace(/'/g, "\\'")}',
        sourceUrl: '${imgData.sourceUrl}',
        photographer: '${imgData.photographer.replace(/'/g, "\\'")}',
        license: '${imgData.license}',
        attribution: '${imgData.attribution.replace(/'/g, "\\'")}',
        isVerified: true,
        verificationStatus: 'verified',
        imageType: '${imgData.imageType}',
        type: '${imgData.imageType}',
        verifiedBy: '${imgData.verifiedBy}',
        verifiedAt: '${imgData.verifiedAt}',
        notes: '${imgData.notes.replace(/'/g, "\\'")}'
      }
    ]`;

  // Locate the species block
  // Pattern: id: 'sp-xyz'[...up to media: []...]
  // We want to replace imageVerificationStatus: '...' with imageVerificationStatus: 'verified'
  // and media: [] with mediaStr
  const spRegex = new RegExp(`(id:\\s*'${speciesId}'[\\s\\S]*?imageVerificationStatus:\\s*)'[^']+'([\\s\\S]*?media:\\s*)\\[\\s*\\]`);
  if (spRegex.test(content)) {
    content = content.replace(spRegex, `$1'verified'$2${mediaStr}`);
    updatedCount++;
  } else {
    console.warn(`Could not match species block for ${speciesId}`);
  }
}

console.log(`Applied verified images to ${updatedCount} species.`);

// Verify the two unavailable species
const unavailableSpecies = ['sp-pangasius-pangasius', 'sp-eutropiichthys-vacha'];
for (const spId of unavailableSpecies) {
  const checkRegex = new RegExp(`id:\\s*'${spId}'[\\s\\S]*?imageVerificationStatus:\\s*'unavailable'[\\s\\S]*?media:\\s*\\[\\s*\\]`);
  if (checkRegex.test(content)) {
    console.log(`Verified unavailable status preserved for ${spId}`);
    unavailableCount++;
  } else {
    console.warn(`Unavailable check failed for ${spId}`);
  }
}

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log(`Successfully updated ${FILE_PATH}. Verified: ${updatedCount}, Unavailable: ${unavailableCount}`);
