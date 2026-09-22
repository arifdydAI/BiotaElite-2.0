// BiotaElite 2.0 Automated Verification Suite for MASTER-BUILD-02D
// Complete Global Marine Life Portal & Strict Fish Separation
import { TRANSLATIONS } from './src/i18n/translations';
import { SEED_TAXON_KNOWLEDGE } from './src/data/seedTaxonKnowledge';
import { SEED_TAXA } from './src/data/seedTaxa';
import { SEED_SPECIES } from './src/data/seedSpecies';

let totalChecks = 0;
let passedChecks = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`✓ [PASS] ${testName}`);
  } else {
    console.error(`✗ [FAIL] ${testName} ${detail ? `(${detail})` : ''}`);
  }
}

console.log('================================================================');
console.log('STARTING MASTER-BUILD-02D AUTOMATED VERIFICATION SUITE');
console.log('================================================================\n');

// 1. PAGE TITLE & GLOBAL IDENTITY (Section 4 & 5)
console.log('--- 1. Page Title & Global Scientific Identity ---');
assert(
  TRANSLATIONS['marine.mainHeading']?.en === 'Marine Life' &&
  TRANSLATIONS['marine.mainHeading']?.bn === 'সামুদ্রিক জীববৈচিত্র্য',
  'Page primary title is "Marine Life" / "সামুদ্রিক জীববৈচিত্র্য"'
);

assert(
  TRANSLATIONS['marine.portalTitle']?.en === 'Marine Life' &&
  TRANSLATIONS['marine.portalTitle']?.bn === 'সামুদ্রিক জীববৈচিত্র্য',
  'Portal title is "Marine Life" / "সামুদ্রিক জীববৈচিত্র্য"'
);

assert(
  TRANSLATIONS['marine.subtitle']?.en === 'Global Marine Animal Biodiversity' &&
  TRANSLATIONS['marine.subtitle']?.bn === 'বিশ্বের সামুদ্রিক প্রাণীজগত',
  'Subtitle is "Global Marine Animal Biodiversity" / "বিশ্বের সামুদ্রিক প্রাণীজগত"'
);

assert(
  TRANSLATIONS['marine.lead']?.en.includes('Explore the diversity of marine animals across oceans') &&
  TRANSLATIONS['marine.lead']?.bn.includes('মহাসাগর, সাগর, উপকূলীয় অঞ্চল'),
  'Global scientific introduction is present in English and Bengali'
);

// 2. FISH SEPARATION (Section 2 & 17)
console.log('\n--- 2. Fish Separation Enforcement ---');
assert(
  TRANSLATIONS['marine.finfishNotice']?.en.includes('Marine fishes are catalogued in the Fish Biodiversity portal') &&
  TRANSLATIONS['marine.finfishNotice']?.bn.includes('সামুদ্রিক মাছ Fish Biodiversity পোর্টালে'),
  'Fish separation notice is present and informs users that fishes belong under /fish'
);

assert(
  TRANSLATIONS['marine.goToFish']?.en.includes('Go to Fish Biodiversity') &&
  TRANSLATIONS['marine.goToFish']?.bn.includes('মৎস্য পোর্টালে যান'),
  'Navigation link to Fish Biodiversity portal is present'
);

const fishInMarine = SEED_TAXON_KNOWLEDGE.filter(
  t => t.category === 'marine_non_fish' &&
  ['Chondrichthyes', 'Actinopterygii', 'Sarcopterygii'].includes(t.scientificName)
);
assert(
  fishInMarine.length === 0,
  'No fish classes (Chondrichthyes, Actinopterygii, Sarcopterygii) are catalogued under marine_non_fish'
);

const marineFinfishes = SEED_SPECIES.filter(
  s => ['sp-tenualosa-ilisha', 'sp-chiloscyllium-indicum', 'sp-lates-calcarifer'].includes(s.id)
);
assert(
  marineFinfishes.every(f => f.taxonomy.class === 'Actinopterygii' || f.taxonomy.class === 'Chondrichthyes'),
  'Marine finfishes remain catalogued under their respective fish classes'
);

// 3. GLOBAL MARINE ENVIRONMENTS (Section 6, 12, 19)
console.log('\n--- 3. Global Marine Environments & Habitats ---');
const requiredEnvironments = [
  'openOcean', 'coastal', 'estuarine', 'coralReef', 'mangrove',
  'seagrass', 'kelp', 'deepSea', 'hydrothermal', 'polar',
  'continentalShelf', 'continentalSlope', 'abyssal'
];

let allEnvsPresent = true;
for (const env of requiredEnvironments) {
  if (!TRANSLATIONS[`marine.env.${env}`]?.en || !TRANSLATIONS[`marine.env.${env}`]?.bn) {
    allEnvsPresent = false;
    console.error(`Missing translation for marine.env.${env}`);
  }
}
assert(allEnvsPresent, 'All 13 global marine environment translations are defined in English and Bengali');

// 4. REGIONAL DISCOVERY & DEFAULT STATE (Section 10 & 11)
console.log('\n--- 4. Marine Regional Discovery & Default State ---');
const requiredRegions = [
  'global', 'indoPacific', 'indianOcean', 'pacificOcean', 'atlanticOcean',
  'arcticOcean', 'southernOcean', 'mediterranean', 'redSea', 'arabianSea',
  'bayOfBengal', 'bdCoast'
];

let allRegionsPresent = true;
for (const reg of requiredRegions) {
  if (!TRANSLATIONS[`marine.region.${reg}`]?.en || !TRANSLATIONS[`marine.region.${reg}`]?.bn) {
    allRegionsPresent = false;
    console.error(`Missing translation for marine.region.${reg}`);
  }
}
assert(allRegionsPresent, 'All 12 oceanic and regional discovery filter translations are defined');

assert(
  TRANSLATIONS['marine.region.global']?.en.includes('Global'),
  'Global region option exists for the default state'
);

// 5. TAXONOMIC STRUCTURE & ANIMAL PHYLA (Section 7, 8, 9, 20)
console.log('\n--- 5. Taxonomic Structure & Verified Animal Groups ---');
const marinePhyla = SEED_TAXON_KNOWLEDGE.filter(k => k.category === 'marine_non_fish' && k.rank === 'phylum');
const phylaNames = marinePhyla.map(p => p.scientificName);

assert(phylaNames.includes('Porifera'), 'Phylum Porifera (Sponges) is catalogued');
assert(phylaNames.includes('Cnidaria'), 'Phylum Cnidaria (Corals & Jellyfish) is catalogued');
assert(phylaNames.includes('Ctenophora'), 'Phylum Ctenophora (Comb Jellies) is catalogued');
assert(phylaNames.includes('Annelida'), 'Phylum Annelida (Marine Segmented Worms) is catalogued');
assert(phylaNames.includes('Mollusca'), 'Phylum Mollusca (Octopuses, Squids, Clams) is catalogued');
assert(phylaNames.includes('Arthropoda'), 'Phylum Arthropoda (Marine Crustaceans) is catalogued');
assert(phylaNames.includes('Echinodermata'), 'Phylum Echinodermata (Sea Stars, Urchins) is catalogued');
assert(phylaNames.includes('Chordata'), 'Phylum Chordata (Non-fish Marine Chordates) is catalogued');

assert(marinePhyla.length >= 8, `At least 8 marine animal phyla are supported (found: ${marinePhyla.length})`);

// 6. MARINE MAMMALS (Section 8)
console.log('\n--- 6. Marine Mammal Pathways ---');
const cetacea = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'order-cetacea');
assert(!!cetacea, 'Order Cetacea is catalogued under non-fish marine life');

const sirenia = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'order-sirenia');
assert(!!sirenia, 'Order Sirenia (Dugongs & Manatees) is catalogued');

const pinnipedia = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'order-pinnipedia');
assert(!!pinnipedia, 'Order Pinnipedia (Seals & Walruses) is catalogued');

const orcaella = SEED_SPECIES.find(s => s.id === 'sp-orcaella-brevirostris');
assert(!!orcaella, 'Orcaella brevirostris exists in verified species dataset');
assert(
  orcaella?.taxonomy.class === 'Mammalia' && orcaella?.taxonomy.order.includes('Cetacea'),
  'Orcaella brevirostris is strictly classified under Mammalia / Cetacea'
);
assert(
  orcaella?.habitat.systems.includes('marine') && orcaella?.habitat.systems.includes('brackish'),
  'Orcaella brevirostris has verified marine & brackish habitat systems'
);

// 7. MARINE REPTILES (Section 9)
console.log('\n--- 7. Marine Reptile Pathways ---');
const chelonioidea = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'order-chelonioidea');
assert(!!chelonioidea, 'Order Chelonioidea (Sea Turtles) is catalogued');

const hydrophiinae = SEED_TAXON_KNOWLEDGE.find(k => k.id === 'order-hydrophiinae');
assert(!!hydrophiinae, 'Order Hydrophiinae (True Sea Snakes) is catalogued');

// 8. BANGLADESH REGIONAL CONTEXT (Section 18)
console.log('\n--- 8. Bangladesh Marine Context Section ---');
assert(
  TRANSLATIONS['marine.bdContextTitle']?.en === 'Bangladesh Marine Context' &&
  TRANSLATIONS['marine.bdContextTitle']?.bn === 'বাংলাদেশের সামুদ্রিক প্রেক্ষাপট',
  'Dedicated "Bangladesh Marine Context" section title is localized'
);

assert(
  !!TRANSLATIONS['marine.bdBayOfBengal'] &&
  !!TRANSLATIONS['marine.bdSundarbans'] &&
  !!TRANSLATIONS['marine.bdSaintMartin'] &&
  !!TRANSLATIONS['marine.bdSwatch'],
  'All 4 regional focal contexts (Bay of Bengal, Sundarbans, Saint Martin, Swatch) are localized'
);

// 9. DATA INTEGRITY & HONEST ZERO STATE (Section 21 & 22)
console.log('\n--- 9. Data Integrity & Scientific Honesty ---');
assert(
  TRANSLATIONS['marine.noVerifiedRecords']?.en === 'No verified records are currently available.' &&
  TRANSLATIONS['marine.noVerifiedRecords']?.bn === 'বর্তমানে যাচাইকৃত রেকর্ড পাওয়া যায়নি।',
  'Exact honest zero-record text is defined in English and Bengali'
);

const zeroCountClades = ['phylum-ctenophora', 'phylum-annelida-marine', 'order-sirenia', 'order-pinnipedia', 'order-chelonioidea', 'order-hydrophiinae'];
for (const cladeId of zeroCountClades) {
  const rec = SEED_TAXON_KNOWLEDGE.find(k => k.id === cladeId);
  assert(
    rec?.exampleSpeciesIds.length === 0,
    `Clade ${cladeId} honestly reports 0 verified species records in exampleSpeciesIds`
  );
}

// 10. TAXONOMIC BACKBONE CONSISTENCY
console.log('\n--- 10. Taxonomic Backbone Consistency (seedTaxa) ---');
const taxaIds = SEED_TAXA.map(t => t.id);
assert(taxaIds.includes('taxon-ctenophora'), 'taxon-ctenophora is present in SEED_TAXA');
assert(taxaIds.includes('taxon-annelida-marine'), 'taxon-annelida-marine is present in SEED_TAXA');
assert(taxaIds.includes('taxon-reptilia'), 'taxon-reptilia is present in SEED_TAXA');
assert(taxaIds.includes('taxon-sirenia'), 'taxon-sirenia is present in SEED_TAXA');
assert(taxaIds.includes('taxon-pinnipedia'), 'taxon-pinnipedia is present in SEED_TAXA');
assert(taxaIds.includes('taxon-chelonioidea'), 'taxon-chelonioidea is present in SEED_TAXA');
assert(taxaIds.includes('taxon-hydrophiinae'), 'taxon-hydrophiinae is present in SEED_TAXA');

// Summary
console.log('\n================================================================');
console.log(`VERIFICATION SUMMARY: ${passedChecks} / ${totalChecks} CHECKS PASSED`);
console.log('================================================================');

if (passedChecks === totalChecks) {
  console.log('ALL MASTER-BUILD-02D ASSERTIONS PASSED SUCCESSFULLY!');
  process.exit(0);
} else {
  console.error(`FAILED: ${totalChecks - passedChecks} assertions failed.`);
  process.exit(1);
}
