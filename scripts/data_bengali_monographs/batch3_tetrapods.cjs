/**
 * Batch 3: Tetrapods (57 species)
 * Combines Batch 3A (28 species) and Batch 3B (29 species)
 */

const b3a = require('./batch3a_tetrapods.cjs');
const b3b = require('./batch3b_tetrapods.cjs');

module.exports = {
  ...b3a,
  ...b3b
};
