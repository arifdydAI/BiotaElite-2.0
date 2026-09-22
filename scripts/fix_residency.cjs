const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function fixResidency(filePath) {
  const fullPath = path.resolve(rootDir, filePath);
  if (!fs.existsSync(fullPath)) return;
  let text = fs.readFileSync(fullPath, 'utf8');
  text = text.replace(/"residencyStatus": "extralimital"/g, '"residencyStatus": "not_recorded"');
  text = text.replace(/residencyStatus: 'extralimital'/g, "residencyStatus: 'not_recorded'");
  fs.writeFileSync(fullPath, text, 'utf8');
  console.log('Fixed residencyStatus in:', filePath);
}

fixResidency('src/data/seedSpecies.ts');
fixResidency('scripts/data_depth_species.cjs');
