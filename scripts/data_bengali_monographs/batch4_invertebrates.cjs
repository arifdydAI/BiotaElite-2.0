/**
 * Batch 4: Invertebrates (92 species)
 * Combines:
 * - Batch 4A: Molluscs (22) + Annelids (6) = 28 species
 * - Batch 4B: Arthropods = 30 species
 * - Batch 4C: Cnidaria (11) + Ctenophora (4) + Echinodermata (12) + Porifera (7) = 34 species
 */

const b4a = require('./batch4a_molluscs_annelids.cjs');
const b4b = require('./batch4b_arthropods.cjs');
const b4c = require('./batch4c_cnidaria_echino_porifera.cjs');

module.exports = {
  ...b4a,
  ...b4b,
  ...b4c
};
