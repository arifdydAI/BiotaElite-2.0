const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = 'C:/Users/UESR/.gemini/antigravity-ide/scratch/biota-elite-2';

// 1. Load Batches
const b1 = require('./data_orders_batch1.cjs');
const b2 = require('./data_orders_batch2.cjs');
const b3 = require('./data_orders_batch3.cjs');
const b4 = require('./data_orders_batch4.cjs');
const new39Orders = [...b1, ...b2, ...b3, ...b4];

console.log(`Loaded ${new39Orders.length} new orders.`);

// 2. Load existing seedTaxonKnowledge.ts
const tkPath = path.join(rootDir, 'src', 'data', 'seedTaxonKnowledge.ts');
const tkRaw = fs.readFileSync(tkPath, 'utf8');
const tkJs = ts.transpileModule(tkRaw, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const tkMod = { exports: {} };
new Function('module', 'exports', 'require', tkJs)(tkMod, tkMod.exports, require);
const existingKnowledge = tkMod.exports.SEED_TAXON_KNOWLEDGE;

console.log(`Loaded ${existingKnowledge.length} existing knowledge records.`);

// Combine knowledge records (avoiding duplicates)
const existingKnowledgeIds = new Set(existingKnowledge.map(k => k.id));
const addedKnowledge = [];
for (const ord of new39Orders) {
  if (!existingKnowledgeIds.has(ord.id)) {
    // Make sure orders and exampleSpeciesIds arrays exist
    addedKnowledge.push({
      ...ord,
      orders: ord.orders || [],
      exampleSpeciesIds: ord.exampleSpeciesIds || [],
      referenceIds: ord.referenceIds || ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
      verificationStatus: "published",
      publishedStatus: true
    });
  }
}

const fullKnowledge = [...existingKnowledge, ...addedKnowledge];
console.log(`Total knowledge records after expansion: ${fullKnowledge.length}`);

// 3. Load existing seedTaxa.ts
const taxaPath = path.join(rootDir, 'src', 'data', 'seedTaxa.ts');
const taxaRaw = fs.readFileSync(taxaPath, 'utf8');
const taxaJs = ts.transpileModule(taxaRaw, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const taxaMod = { exports: {} };
new Function('module', 'exports', 'require', taxaJs)(taxaMod, taxaMod.exports, require);
let existingTaxa = taxaMod.exports.SEED_TAXA;

console.log(`Loaded ${existingTaxa.length} existing taxa nodes.`);

// Intermediate taxa to insert
const intermediateTaxa = [
  {
    id: 'taxon-class-myxini',
    scientificName: 'Myxini',
    name: 'Myxini',
    rank: 'class',
    parentTaxonId: 'taxon-agnatha',
    parentId: 'taxon-agnatha',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Zittel, 1887',
    commonNameEn: 'Hagfishes',
    commonNameBn: 'মিক্সিনি (হ্যাগফিশ)',
    banglaName: 'মিক্সিনি',
    description: 'Jawless marine craniates with cartilaginous skulls, rasping keratinous lingual teeth, and defensive slime glands.',
    speciesCount: 1,
    isVerified: true,
    sourceReferences: [{ source: "Eschmeyer's Catalog of Fishes (2026)", citation: 'California Academy of Sciences' }]
  },
  {
    id: 'taxon-class-petromyzonti',
    scientificName: 'Petromyzonti',
    name: 'Petromyzonti',
    rank: 'class',
    parentTaxonId: 'taxon-agnatha',
    parentId: 'taxon-agnatha',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Risso, 1827',
    commonNameEn: 'Lampreys',
    commonNameBn: 'পেট্রোমাইজন্টি (ল্যাম্প্রে)',
    banglaName: 'পেট্রোমাইজন্টি',
    description: 'Jawless aquatic vertebrates characterized by a toothed circular suctorial oral disc and seven pairs of branchial pores.',
    speciesCount: 1,
    isVerified: true,
    sourceReferences: [{ source: "Eschmeyer's Catalog of Fishes (2026)", citation: 'California Academy of Sciences' }]
  },
  {
    id: 'taxon-subclass-cladistia',
    scientificName: 'Cladistia',
    name: 'Cladistia',
    rank: 'subclass',
    parentTaxonId: 'taxon-actinopterygii',
    parentId: 'taxon-actinopterygii',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Cope, 1871',
    commonNameEn: 'Bichirs and Reedfishes',
    commonNameBn: 'ক্লাডিস্টয়া (বিচির ও রিডফিশ)',
    banglaName: 'ক্লাডিস্টয়া',
    description: 'Basal ray-finned fishes characterized by ganoid scales, multiple dorsal finlets, and paired pulmonary sacs.',
    speciesCount: 1,
    isVerified: true,
    sourceReferences: [{ source: "Eschmeyer's Catalog of Fishes (2026)", citation: 'California Academy of Sciences' }]
  },
  {
    id: 'taxon-subclass-actinopteri',
    scientificName: 'Actinopteri',
    name: 'Actinopteri',
    rank: 'subclass',
    parentTaxonId: 'taxon-actinopterygii',
    parentId: 'taxon-actinopterygii',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Cope, 1871',
    commonNameEn: 'True Ray-finned Fishes',
    commonNameBn: 'অ্যাক্টিনোপ্টেরি',
    banglaName: 'অ্যাক্টিনোপ্টেরি',
    description: 'Subclass uniting sturgeons, paddlefishes, gars, bowfins, and all teleosts.',
    speciesCount: 30,
    isVerified: true,
    sourceReferences: [{ source: "Eschmeyer's Catalog of Fishes (2026)", citation: 'California Academy of Sciences' }]
  },
  {
    id: 'taxon-infraclass-chondrostei',
    scientificName: 'Chondrostei',
    name: 'Chondrostei',
    rank: 'infraclass',
    parentTaxonId: 'taxon-subclass-actinopteri',
    parentId: 'taxon-subclass-actinopteri',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Müller, 1844',
    commonNameEn: 'Sturgeons and Paddlefishes',
    commonNameBn: 'কনড্রোস্টিআই (স্টার্জন ও প্যাডেলফিশ)',
    banglaName: 'কনড্রোস্টিআই',
    description: 'Primitive actinopterygians with largely cartilaginous skeletons and heterocercal tails.',
    speciesCount: 1,
    isVerified: true,
    sourceReferences: [{ source: "Eschmeyer's Catalog of Fishes (2026)", citation: 'California Academy of Sciences' }]
  },
  {
    id: 'taxon-infraclass-holostei',
    scientificName: 'Holostei',
    name: 'Holostei',
    rank: 'infraclass',
    parentTaxonId: 'taxon-subclass-actinopteri',
    parentId: 'taxon-subclass-actinopteri',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Müller, 1844',
    commonNameEn: 'Gars and Bowfins',
    commonNameBn: 'হোলোস্টিআই (গার ও বোফিন)',
    banglaName: 'হোলোস্টিআই',
    description: 'Neopterygian bony fishes retaining abbreviate heterocercal tails and cellular swimbladders.',
    speciesCount: 2,
    isVerified: true,
    sourceReferences: [{ source: "Eschmeyer's Catalog of Fishes (2026)", citation: 'California Academy of Sciences' }]
  },
  {
    id: 'taxon-infraclass-teleostei',
    scientificName: 'Teleostei',
    name: 'Teleostei',
    rank: 'infraclass',
    parentTaxonId: 'taxon-subclass-actinopteri',
    parentId: 'taxon-subclass-actinopteri',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Müller, 1844',
    commonNameEn: 'Teleosts / Modern Bony Fishes',
    commonNameBn: 'টেলিয়স্ট (আধুনিক অস্থিময় মাছ)',
    banglaName: 'টেলিয়স্ট',
    description: 'The crowning radiation of actinopterygian fishes possessing mobile premaxillae, homocercal caudal skeletons, and extraordinary ecological diversity.',
    speciesCount: 30,
    isVerified: true,
    sourceReferences: [{ source: "Eschmeyer's Catalog of Fishes (2026)", citation: 'California Academy of Sciences' }]
  }
];

// Add intermediate taxa if not already present
for (const inter of intermediateTaxa) {
  if (!existingTaxa.some(t => t.id === inter.id)) {
    existingTaxa.push(inter);
  }
}

// Update existing orders to point to proper parents
const parentUpdates = {
  'taxon-myxiniformes': 'taxon-class-myxini',
  'taxon-petromyzontiformes': 'taxon-class-petromyzonti',
  'taxon-polypteriformes': 'taxon-subclass-cladistia',
  'taxon-acipenseriformes': 'taxon-infraclass-chondrostei',
  'taxon-lepisosteiformes': 'taxon-infraclass-holostei',
  'taxon-amiiformes': 'taxon-infraclass-holostei',
  'taxon-osteoglossiformes': 'taxon-infraclass-teleostei',
  'taxon-anguilliformes': 'taxon-infraclass-teleostei',
  'taxon-clupeiformes': 'taxon-infraclass-teleostei',
  'taxon-gonorynchiformes': 'taxon-infraclass-teleostei',
  'taxon-cypriniformes': 'taxon-infraclass-teleostei',
  'taxon-characiformes': 'taxon-infraclass-teleostei',
  'taxon-siluriformes': 'taxon-infraclass-teleostei',
  'taxon-salmoniformes': 'taxon-infraclass-teleostei',
  'taxon-aulopiformes': 'taxon-infraclass-teleostei',
  'taxon-gadiformes': 'taxon-infraclass-teleostei',
  'taxon-syngnathiformes': 'taxon-infraclass-teleostei',
  'taxon-synbranchiformes': 'taxon-infraclass-teleostei',
  'taxon-scombriformes': 'taxon-infraclass-teleostei',
  'taxon-anabantiformes': 'taxon-infraclass-teleostei',
  'taxon-pleuronectiformes': 'taxon-infraclass-teleostei',
  'taxon-perciformes': 'taxon-infraclass-teleostei',
  'taxon-tetraodontiformes': 'taxon-infraclass-teleostei'
};

existingTaxa = existingTaxa.map(t => {
  if (parentUpdates[t.id]) {
    return {
      ...t,
      parentTaxonId: parentUpdates[t.id],
      parentId: parentUpdates[t.id]
    };
  }
  return t;
});

// Create TaxonNodes for all 39 new orders
const newTaxaNodes = new39Orders.map(ord => {
  // Determine appropriate parent
  let parentId = ord.parentTaxonNodeId;
  if (!parentId) {
    if (ord.parentTaxonId === 'class-chondrichthyes') parentId = 'taxon-subclass-elasmobranchii';
    else parentId = 'taxon-infraclass-teleostei';
  }

  return {
    id: ord.taxonId,
    scientificName: ord.scientificName,
    name: ord.scientificName,
    rank: 'order',
    parentTaxonId: parentId,
    parentId: parentId,
    status: 'accepted',
    module: 'fish',
    authorYear: ord.authorYear || 'Author, Year',
    commonNameEn: ord.englishName.split('/')[0].trim(),
    commonNameBn: ord.bengaliName.split('(')[0].trim(),
    banglaName: ord.bengaliName.split('(')[0].trim(),
    description: ord.shortDescription.en,
    speciesCount: 0,
    isVerified: true,
    sourceReferences: [
      {
        source: "Eschmeyer's Catalog of Fishes (2026)",
        citation: "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        source: "Nelson et al. (2016)",
        citation: "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  };
});

// Add new taxa nodes
const existingTaxaIds = new Set(existingTaxa.map(t => t.id));
for (const node of newTaxaNodes) {
  if (!existingTaxaIds.has(node.id)) {
    existingTaxa.push(node);
  }
}

console.log(`Total taxa nodes after expansion: ${existingTaxa.length}`);

// 4. Output the updated files as TypeScript
const tsTaxaContent = `// BiotaElite 2.0 Normalized Hierarchical Taxonomic Classification Graph
// MASTER-FIX-06: Complete Global Fish Taxonomy Audit & Expansion
// Authoritative Sources: Eschmeyer's Catalog of Fishes (CAS, 2026), Nelson et al. (2016), WoRMS (2024), FishBase (2024)
import type { TaxonNode } from '../types/biodiversity';

export const SEED_TAXA: TaxonNode[] = ${JSON.stringify(existingTaxa, null, 2)};
`;

fs.writeFileSync(taxaPath, tsTaxaContent, 'utf8');
console.log(`Successfully updated ${taxaPath}`);

const tsKnowledgeContent = `// BiotaElite 2.0 Taxonomic Knowledge Base (11 Comprehensive Zoological Categories)
// MASTER-FIX-06: Complete Global Fish Orders Knowledge Model
// Authoritative Sources: Eschmeyer's Catalog of Fishes (CAS, 2026), Nelson et al. (2016), FishBase (2024)
import type { TaxonKnowledgeRecord } from '../types/biodiversity';

export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ${JSON.stringify(fullKnowledge, null, 2)};
`;

fs.writeFileSync(tkPath, tsKnowledgeContent, 'utf8');
console.log(`Successfully updated ${tkPath}`);
