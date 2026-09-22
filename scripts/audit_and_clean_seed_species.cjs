// MASTER-FIX-07 Species Data & Real Image Integrity Sanitizer
const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/data/seedSpecies.ts');
let content = fs.readFileSync(targetPath, 'utf8');

console.log('--- MASTER-FIX-07: SPECIES DATA & IMAGE INTEGRITY AUDIT ---');

// Audit existing media records
const mediaMatches = [...content.matchAll(/media:\s*\[\s*\{[^\]]+\}\s*\]/g)];
console.log(`Found ${mediaMatches.length} non-empty media blocks to audit and purge.`);

// 1. Remove the 6 non-empty media arrays and replace with media: []
content = content.replace(/media:\s*\[\s*\{\s*id:\s*'med-[^\]]+\}\s*\]/g, 'media: []');

// 2. Add speciesVerificationStatus: 'verified', imageVerificationStatus: 'unavailable' where missing
// Check all occurrences of isVerified: true
content = content.replace(/isVerified:\s*true(,\s*isPublished:\s*true)?/g, (match, p1) => {
  return `isVerified: true, speciesVerificationStatus: 'verified', imageVerificationStatus: 'unavailable'${p1 || ''}`;
});

// Also handle any where isVerified: true, but without isPublished right next to it
// Check if speciesVerificationStatus was duplicated anywhere
content = content.replace(/(speciesVerificationStatus:\s*'verified',\s*)+/g, "speciesVerificationStatus: 'verified', ");
content = content.replace(/(imageVerificationStatus:\s*'unavailable',\s*)+/g, "imageVerificationStatus: 'unavailable', ");

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated src/data/seedSpecies.ts with sanitized integrity fields.');
