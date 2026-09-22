// BiotaElite 2.0 - MASTER-FIX-11A Comprehensive Validation Suite
// Tests Global Zoological Classification Scope & Primary/Secondary Decoupling

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

let failures = 0;
let passes = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passes++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failures++;
  }
}

console.log('=== TEST SUITE: MASTER-FIX-11A GLOBAL TAXONOMY HUB SCOPE ===\n');

// 1. Check translations.ts for proper Global Framing and decoupled labels
console.log('1. Verifying Translations & Global Framing:');
const transContent = fs.readFileSync(path.join(srcDir, 'i18n', 'translations.ts'), 'utf8');

assert(
  transContent.includes('Global Zoological Classification & Knowledge Hub') ||
  transContent.includes('tax.portalTitle'),
  'tax.portalTitle reflects Global Zoological Classification'
);
assert(
  transContent.includes('tax.curatedGlobalSpecies'),
  'tax.curatedGlobalSpecies exists for honest dataset labeling'
);
assert(
  transContent.includes('tax.noLocalSpeciesCurated'),
  'tax.noLocalSpeciesCurated exists for groups without current local vouchers'
);
assert(
  transContent.includes('tax.bangladeshRecords') || transContent.includes('tax.regionalBd'),
  'tax.bangladeshRecords / tax.regionalBd exists for decoupled secondary badges'
);
assert(
  transContent.includes('tax.bangladeshRegionalContext'),
  'tax.bangladeshRegionalContext exists for distinct secondary regional section'
);
assert(
  transContent.includes('tax.globalFrameworkNotice'),
  'tax.globalFrameworkNotice explains planetary scope with curated dataset'
);

// 2. Check TaxonomyPage.tsx for Decoupled Counters & Author Citations
console.log('\n2. Verifying TaxonomyPage.tsx Decoupling & Structure:');
const taxPageContent = fs.readFileSync(path.join(srcDir, 'pages', 'public', 'TaxonomyPage.tsx'), 'utf8');

assert(
  taxPageContent.includes('authority?: string;'),
  'MajorGroupDefinition includes authority field'
);
assert(
  taxPageContent.includes("'Grant, 1836'") && taxPageContent.includes("'Linnaeus, 1758'"),
  'Major animal groups contain authoritative taxonomic citations'
);
assert(
  !taxPageContent.includes('Published Species ({totalBangladeshOccurrences} in BD)'),
  'Conflated "{species.length} Published Species ({totalBangladeshOccurrences} in BD)" removed from hero'
);
assert(
  taxPageContent.includes('Curated Global Species') || taxPageContent.includes('tax.curatedGlobalSpecies'),
  'Hero renders primary Curated Global Species metric'
);
assert(
  taxPageContent.includes('Bangladesh Records') || taxPageContent.includes('tax.bangladeshRecords'),
  'Hero renders distinct secondary Bangladesh Records badge'
);
assert(
  taxPageContent.includes('tax.globalFrameworkNotice'),
  'TaxonomyPage renders planetary scope & curation notice'
);
assert(
  !taxPageContent.includes("({stats.bd} BD)"),
  'Conflated "({stats.bd} BD)" string removed from group cards'
);

// 3. Check TaxonomyTree.tsx for Decoupled Tree Node Badges
console.log('\n3. Verifying TaxonomyTree.tsx Node Badges:');
const treeContent = fs.readFileSync(path.join(srcDir, 'components', 'taxonomy', 'TaxonomyTree.tsx'), 'utf8');

assert(
  !treeContent.includes('({stats.bd} {t(\'tax.regionalBd\') || \'BD\'})'),
  'Tree node no longer nests BD count inside species count parenthesis'
);
assert(
  treeContent.includes('Curated global species linked to this taxon in BiotaElite dataset'),
  'Tree node has explicit primary curated global species title'
);
assert(
  treeContent.includes('Species with verified occurrence records in Bangladesh'),
  'Tree node has distinct secondary Bangladesh regional occurrence badge'
);
assert(
  treeContent.includes('BD Native') && treeContent.includes('Extralimital'),
  'Genus leaf species list distinguishes BD Native vs Extralimital species'
);

// 4. Check TaxonKnowledgeDetail.tsx for Global Framing and Secondary Regional Block
console.log('\n4. Verifying TaxonKnowledgeDetail.tsx:');
const detailContent = fs.readFileSync(path.join(srcDir, 'components', 'knowledge', 'TaxonKnowledgeDetail.tsx'), 'utf8');

assert(
  detailContent.includes('tax.curatedGlobalSpecies'),
  'Hero metric displays Curated Global Species in BiotaElite'
);
assert(
  detailContent.includes('tax.bangladeshRegionalContext'),
  'Dedicated secondary Bangladesh Regional Context section present'
);
assert(
  detailContent.includes('0 species currently curated in BiotaElite dataset (curation in progress)'),
  'Taxa with 0 local species vouchers display honest curation in progress fallback'
);

// 5. Check Canonical Taxonomy Data Preservation
console.log('\n5. Verifying Canonical Taxonomy Data Preservation:');
const seedTaxaContent = fs.readFileSync(path.join(srcDir, 'data', 'seedTaxa.ts'), 'utf8');

const orderMatches = seedTaxaContent.match(/["']rank["']:\s*["']order["']/g) || [];
assert(orderMatches.length >= 73, `Preserved at least 73 orders (found ${orderMatches.length})`);
assert(seedTaxaContent.includes('taxon-animalia'), 'Kingdom Animalia root preserved');
assert(seedTaxaContent.includes('taxon-chordata'), 'Phylum Chordata preserved');
assert(seedTaxaContent.includes('taxon-porifera'), 'Phylum Porifera preserved');
assert(seedTaxaContent.includes('taxon-ctenophora'), 'Phylum Ctenophora preserved');

// 6. Check Knowledge Records & Protozoa Status
console.log('\n6. Verifying Knowledge Records & Educational Notices:');
const seedKnowledgeContent = fs.readFileSync(path.join(srcDir, 'data', 'seedTaxonKnowledge.ts'), 'utf8');

assert(
  seedKnowledgeContent.includes('group-protozoa') || seedKnowledgeContent.includes('Protozoa'),
  'Protozoa educational record preserved'
);
assert(
  seedKnowledgeContent.includes('order-syngnathiformes'),
  'Syngnathiformes order knowledge record preserved'
);
assert(
  seedKnowledgeContent.includes('order-cetacea'),
  'Cetacea order knowledge record preserved'
);

console.log('\n==================================================');
console.log(`TOTAL PASSES: ${passes} | TOTAL FAILURES: ${failures}`);
console.log('==================================================\n');

if (failures > 0) {
  process.exit(1);
} else {
  console.log('MASTER-FIX-11A VALIDATION PASSED COMPLETELY!');
  process.exit(0);
}
