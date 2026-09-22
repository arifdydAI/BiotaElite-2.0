const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function fixLicenses(filePath) {
  const fullPath = path.resolve(rootDir, filePath);
  if (!fs.existsSync(fullPath)) return;
  let text = fs.readFileSync(fullPath, 'utf8');
  text = text.replace(/"license": "CC-BY-NC"/g, '"license": "CC-BY-SA"');
  text = text.replace(/"license": "GNU FDL"/g, '"license": "CC-BY-SA"');
  text = text.replace(/license: 'CC-BY-NC'/g, "license: 'CC-BY-SA'");
  text = text.replace(/license: 'GNU FDL'/g, "license: 'CC-BY-SA'");
  fs.writeFileSync(fullPath, text, 'utf8');
  console.log('Fixed licenses in:', filePath);
}

fixLicenses('src/data/seedSpecies.ts');
fixLicenses('scripts/data_textbook_species.cjs');
