const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = path.join(__dirname, '..');
const taxaPath = path.join(rootDir, 'src', 'data', 'seedTaxa.ts');
const tkPath = path.join(rootDir, 'src', 'data', 'seedTaxonKnowledge.ts');

function loadTs(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports;
}

// 1. Process SEED_TAXA
console.log('--- Updating SEED_TAXA ---');
let taxa = loadTs(taxaPath).SEED_TAXA;
console.log(`Initial taxa count: ${taxa.length}`);

// Remove obsolete duplicate nodes
taxa = taxa.filter(t => t.id !== 'taxon-myxini' && t.id !== 'taxon-petromyzontida');

// Ensure taxon-fishes exists
if (!taxa.some(t => t.id === 'taxon-fishes')) {
  const fishRoot = {
    id: 'taxon-fishes',
    scientificName: 'Pisces',
    name: 'Pisces (Fishes)',
    rank: 'grade',
    parentTaxonId: 'taxon-chordata',
    parentId: 'taxon-chordata',
    status: 'accepted',
    module: 'fish',
    authorYear: 'Linnaeus, 1758',
    commonNameEn: 'Fishes',
    commonNameBn: 'মাছসমূহ',
    banglaName: 'মাছসমূহ',
    description: 'Aquatic craniate vertebrates characterized by gills throughout life and paired or median limbs in the shape of fins.',
    speciesCount: 34000,
    isVerified: true,
    sourceReferences: [
      {
        source: "Eschmeyer's Catalog of Fishes (2026)",
        citation: 'California Academy of Sciences. On-line database.'
      },
      {
        source: 'Nelson et al. (2016)',
        citation: 'Fishes of the World (5th ed.). John Wiley & Sons.'
      }
    ]
  };
  // Insert right after taxon-chordata
  const chordataIdx = taxa.findIndex(t => t.id === 'taxon-chordata');
  if (chordataIdx !== -1) {
    taxa.splice(chordataIdx + 1, 0, fishRoot);
  } else {
    taxa.unshift(fishRoot);
  }
}

// Update top fish lineages to have parent taxon-fishes
taxa = taxa.map(t => {
  if (t.id === 'taxon-agnatha' || t.id === 'taxon-chondrichthyes' || t.id === 'taxon-osteichthyes') {
    return {
      ...t,
      parentTaxonId: 'taxon-fishes',
      parentId: 'taxon-fishes'
    };
  }
  return t;
});

console.log(`Updated taxa count: ${taxa.length}`);

const taxaTsContent = `// BiotaElite 2.0 Normalized Hierarchical Taxonomic Classification Graph
// MASTER-FIX-09: Complete Global Fish Taxonomy Audit & Authoritative Reconciliation
// Authoritative Sources: Eschmeyer's Catalog of Fishes (CAS, August 2026), Nelson et al. (2016), FishBase (2026)
import type { TaxonNode } from '../types/biodiversity';

export const SEED_TAXA: TaxonNode[] = ${JSON.stringify(taxa, null, 2)};
`;

fs.writeFileSync(taxaPath, taxaTsContent, 'utf8');
console.log(`Successfully written ${taxaPath}`);


// 2. Process SEED_TAXON_KNOWLEDGE
console.log('\n--- Updating SEED_TAXON_KNOWLEDGE ---');
let knowledge = loadTs(tkPath).SEED_TAXON_KNOWLEDGE;
console.log(`Initial knowledge count: ${knowledge.length}`);

// Ensure Pisces / Fishes root knowledge record exists
if (!knowledge.some(k => k.id === 'group-fishes' || k.taxonId === 'taxon-fishes')) {
  const fishKnowledge = {
    id: 'group-fishes',
    taxonId: 'taxon-fishes',
    rank: 'grade',
    scientificName: 'Pisces',
    bengaliName: 'মাছসমূহ (ফিশেস)',
    englishName: 'Fishes / Pisces',
    parentTaxonId: 'taxon-chordata',
    category: 'fish',
    classificationHierarchy: [
      { rank: 'kingdom', name: 'Animalia', nameBn: 'প্রাণিজগৎ' },
      { rank: 'phylum', name: 'Chordata', nameBn: 'কর্ডাটা' },
      { rank: 'grade', name: 'Pisces', nameBn: 'মাছসমূহ' }
    ],
    shortDescription: {
      en: 'Diverse aquatic gill-bearing craniate vertebrates lacking limbs with digits, spanning jawless fishes (Agnatha), cartilaginous fishes (Chondrichthyes), and bony fishes (Osteichthyes).',
      bn: 'ফুলকাযুক্ত ও আঙুলবিহীন পাখনাধারী জলজ ক্রেনিয়েট মেরুদণ্ডী প্রাণী, যার মধ্যে চোয়ালবিহীন মাছ (অ্যাগনাথা), তরুণাস্থিময় মাছ (কনড্রিকথিস) এবং অস্থিময় মাছ (অস্টিকথিস) অন্তর্ভুক্ত।'
    },
    diagnosticCharacteristics: {
      en: 'Aquatic poikilothermic craniates possessing gills for respiration throughout ontogeny, locomotion facilitated by median and paired fins supported by dermal rays, sensory lateral line system, and specialized osmoregulatory organs.',
      bn: 'জলজ শীতলরক্তের মেরুদণ্ডী প্রাণী যাদের আজীবন শ্বাসকার্যের জন্য ফুলকা থাকে, চর্মীয় রশ্মিযুক্ত যুগ্ম ও অযুগ্ম পাখনা দ্বারা সন্তরণ হয়, পার্শ্বরেখা সংবেদী অঙ্গ এবং অভিস্রবণ নিয়ন্ত্রণকারী বিশেষায়িত অঙ্গ বিদ্যমান।',
      keyFeatures: {
        en: [
          'Permanent branchial apparatus (gills) for aquatic gas exchange',
          'Locomotion via muscular undulation and membranous/rayed fins',
          'Hydrodynamic scale-covered integument with lateral line mechanoreception',
          'Two-chambered branchial heart (one atrium, one ventricle)'
        ],
        bn: [
          'জলে গ্যাসীয় বিনিময়ের জন্য স্থায়ী ফুলকা কাঠামো',
          'পেশিবহুল আন্দোলন ও পাখনার সাহায্যে সন্তরণ',
          'আঁইশযুক্ত ত্বক এবং পার্শ্বরেখা সংবেদন ব্যবস্থা',
          'দ্বি-প্রকোষ্ঠবিশিষ্ট ফুলকা-সংবহন সংবহন হৃদপিণ্ড'
        ]
      }
    },
    habitat: {
      en: 'Inhabits all aquatic biomes globally from high-altitude montane streams to hadal ocean trenches exceeding 8,000 meters depth.',
      bn: 'উচ্চ পার্বত্য হিমশীতল নদী থেকে শুরু করে ৮,০০০ মিটারেরও বেশি গভীর সমুদ্রের খাদ পর্যন্ত বিশ্বের সকল জলজ পরিবেশে বিস্তৃত।'
    },
    ecosystem: {
      en: 'Foundational apex, mesopredator, and primary consumer keystones across marine, estuarine, and freshwater food webs globally.',
      bn: 'বিশ্বের সামুদ্রিক, মোহনা ও স্বাদু পানির খাদ্যজালে শীর্ষ শিকারী, মধ্যবর্তী খাদক এবং প্রাথমিক খাদ্য উৎসের প্রধান চালিকাশক্তি।'
    },
    feeding: {
      en: 'Remarkable trophic breadth ranging from microscopic filter feeding and herbivory to apex macrophagy and ambush predation.',
      bn: 'মাইক্রোস্কোপিক ফিল্টার ফিডিং এবং তৃণভোজিতা থেকে শুরু করে শীর্ষ শিকার ও অতর্কিত আক্রমণকারী বিভিন্ন খাদ্যাভ্যাস।'
    },
    reproduction: {
      en: 'Extreme reproductive diversity: oviparity with broadcast spawning, ovoviviparity, and advanced placental viviparity.',
      bn: 'অত্যন্ত বৈচিত্র্যময় প্রজনন: বহিঃনিষেকসহ ডিম্বপ্রসব, ডিম্ব-জরায়ুজ প্রজনন এবং উন্নত অমরাযুক্ত জরায়ুজ প্রসব।'
    },
    distribution: {
      en: 'Cosmopolitan across all oceans, seas, coastal estuaries, river basins, and freshwater wetlands globally.',
      bn: 'বিশ্বের সমস্ত মহাসাগর, সমুদ্র, উপকূলীয় মোহনা, নদী অববাহিকা এবং মিঠা পানির জলাভূমিতে সার্বজনীনভাবে বিস্তৃত।'
    },
    importantFamilies: [
      { name: 'Myxinidae', commonEn: 'Hagfishes', commonBn: 'হ্যাগফিশ' },
      { name: 'Carcharhinidae', commonEn: 'Requiem Sharks', commonBn: 'হাঙর' },
      { name: 'Cyprinidae', commonEn: 'Carps and Minnows', commonBn: 'কার্প মাছ' }
    ],
    scientificNamesSummary: {
      en: 'Grade Pisces Linnaeus, 1758; comprising superclasses Agnatha, Chondrichthyes, and Osteichthyes.',
      bn: 'গ্রেড পিসেস লিনিয়াস, ১৭৫৮; যার অন্তর্গত সুপারক্লাস অ্যাগনাথা, কনড্রিকথিস এবং অস্টিকথিস।'
    },
    exampleSpeciesIds: ['sp-tenualosa-ilisha', 'sp-labeo-rohita', 'sp-chiloscyllium-indicum'],
    examplesSummary: {
      en: 'Iconic examples include Tenualosa ilisha (Hilsa), Labeo rohita (Rui), and Chiloscyllium indicum (Ridge-back catshark).',
      bn: 'উল্লেখযোগ্য উদাহরণ: তেনুয়ালোসা ইলিশা (ইলিশ), লাবেও রোহিতা (রুই), এবং কাইলোসিলিয়াম ইন্ডিকাম (পাকপাটি হাঙর)।'
    },
    additionalInformation: {
      en: 'Modern phylogenetic classifications emphasize Pisces as an evolutionary grade rather than a monophyletic clade, recognizing its three primary extant lineages: Agnatha, Chondrichthyes, and Osteichthyes.',
      bn: 'আধুনিক ফাইলোজেনেটিক শ্রেণীবিন্যাস পিসেসকে একটি একক ক্ল্যাড না বলে বিবর্তনীয় গ্রেড হিসেবে গণ্য করে, যার তিনটি প্রধান জীবিত শাখা হলো অ্যাগনাথা, কনড্রিকথিস এবং অস্টিকথিস।'
    },
    referenceIds: ['ref-nelson-2016', 'ref-fishbase-2024', 'ref-eschmeyer-2024'],
    authoritySource: "Eschmeyer's Catalog of Fishes (2026); Nelson et al. (2016) Fishes of the World (5th ed.)",
    verificationStatus: 'published',
    publishedStatus: true
  };
  // Insert at the beginning
  knowledge.unshift(fishKnowledge);
}

// Update top fish knowledge records to link to taxon-fishes
knowledge = knowledge.map(k => {
  if (k.id === 'group-agnatha' || k.id === 'class-chondrichthyes' || k.id === 'superclass-osteichthyes') {
    return {
      ...k,
      parentTaxonId: 'taxon-fishes'
    };
  }
  // Ensure sp-clarias-magur is in Siluriformes
  if (k.id === 'order-siluriformes') {
    const ex = k.exampleSpeciesIds || [];
    if (!ex.includes('sp-clarias-magur')) {
      ex.push('sp-clarias-magur');
    }
    return { ...k, exampleSpeciesIds: ex };
  }
  return k;
});

console.log(`Updated knowledge count: ${knowledge.length}`);

const tkTsContent = `// BiotaElite 2.0 Taxonomic Knowledge Base (11 Comprehensive Zoological Categories)
// MASTER-FIX-09: Complete Global Fish Orders Knowledge Model
// Authoritative Sources: Eschmeyer's Catalog of Fishes (CAS, August 2026), Nelson et al. (2016), FishBase (2026)
import type { TaxonKnowledgeRecord } from '../types/biodiversity';

export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ${JSON.stringify(knowledge, null, 2)};
`;

fs.writeFileSync(tkPath, tkTsContent, 'utf8');
console.log(`Successfully written ${tkPath}`);
