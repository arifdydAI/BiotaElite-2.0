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

// 1. Update seedTaxa.ts
console.log('--- Refining seedTaxa.ts ---');
let taxa = loadTs(taxaPath).SEED_TAXA;

taxa = taxa.map(t => {
  if (t.id === 'taxon-carangiformes') {
    return {
      ...t,
      commonNameEn: "Jacks, Pompanos, Trevallies, Remoras, and Billfishes",
      description: "Diverse global marine radiation of active pelagic predators uniting jacks, pompanos, trevallies (Carangidae), remoras (Echeneidae), cobias (Rachycentridae), dolphinfishes (Coryphaenidae), and billfishes. Note: Eschmeyer (2026) cladistically subsumes flatfishes within Carangiformes as Suborder Pleuronectoidei, while FishBase, Nelson (2016), and WoRMS retain Pleuronectiformes as an independent order.",
      sourceReferences: [
        {
          source: "Eschmeyer's Catalog of Fishes (2026)",
          citation: "California Academy of Sciences. Species by Family/Subfamily on-line database."
        },
        {
          source: "FishBase (2026)",
          citation: "FishBase OrdersSummary: Carangiformes (7 families)."
        },
        {
          source: "Nelson et al. (2016)",
          citation: "Fishes of the World (5th ed.). John Wiley & Sons."
        },
        {
          source: "WoRMS (2026)",
          citation: "World Register of Marine Species: Carangiformes (AphiaID: 1517532)."
        }
      ]
    };
  }
  if (t.id === 'taxon-pleuronectiformes') {
    return {
      ...t,
      commonNameEn: "Flatfishes (Flounders, Soles, Tonguesoles, Turbots)",
      description: "Highly specialized benthic marine and estuarine bony fishes characterized by ontogenetic cranial asymmetry (both eyes migrating to one side of the head in adults), extreme lateral compression, and absence of a swimbladder. Accepted as an independent order in FishBase (2026), Nelson et al. (2016), and WoRMS (AphiaID: 10331); treated as Suborder Pleuronectoidei within Carangiformes by Eschmeyer's Catalog of Fishes (2026) and Betancur-R. et al. (2017).",
      sourceReferences: [
        {
          source: "FishBase (2026)",
          citation: "FishBase OrdersSummary: Pleuronectiformes (16 families)."
        },
        {
          source: "Nelson et al. (2016)",
          citation: "Fishes of the World (5th ed.). John Wiley & Sons. Order Pleuronectiformes."
        },
        {
          source: "WoRMS (2026)",
          citation: "World Register of Marine Species: Pleuronectiformes (AphiaID: 10331, Accepted Order)."
        },
        {
          source: "Catalogue of Life (2026)",
          citation: "Catalogue of Life: Order Pleuronectiformes."
        },
        {
          source: "Eschmeyer's Catalog of Fishes (2026)",
          citation: "CAS: Alternative treatment as Suborder Pleuronectoidei within Carangiformes."
        }
      ]
    };
  }
  return t;
});

const taxaTsContent = `// BiotaElite 2.0 Normalized Hierarchical Taxonomic Classification Graph
// MASTER-FIX-09A: Final Pleuronectiformes Authority Verification & Multi-Source Reconciliation
// Authoritative Sources: Eschmeyer's Catalog of Fishes (CAS, August 2026), FishBase (2026), Nelson et al. (2016), WoRMS (2026)
import type { TaxonNode } from '../types/biodiversity';

export const SEED_TAXA: TaxonNode[] = ${JSON.stringify(taxa, null, 2)};
`;

fs.writeFileSync(taxaPath, taxaTsContent, 'utf8');
console.log(`Successfully updated ${taxaPath}`);


// 2. Update seedTaxonKnowledge.ts
console.log('\n--- Refining seedTaxonKnowledge.ts ---');
let knowledge = loadTs(tkPath).SEED_TAXON_KNOWLEDGE;

knowledge = knowledge.map(k => {
  if (k.id === 'order-carangiformes') {
    return {
      ...k,
      englishName: "Jacks, Pompanos, Remoras & Billfishes",
      authoritySource: "Eschmeyer's Catalog of Fishes (2026); FishBase (2026); Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
      importantFamilies: [
        {
          name: "Carangidae",
          commonEn: "Jacks, Trevallies & Pompanos",
          commonBn: "জ্যাক, চান্দা ও পম্পানো গোত্র",
          diagnosticEn: "Lateral scutes on caudal peduncle, fast swimmers, two dorsal fins; includes Caranx, Trachinotus, and Seriola.",
          diagnosticBn: "লেজের গোড়ায় শক্ত আঁইশ, অত্যন্ত দ্রুতগামী শিকারী মাছ; Caranx, Trachinotus অন্তর্ভুক্ত।"
        },
        {
          name: "Coryphaenidae",
          commonEn: "Dolphinfishes / Mahi-mahi",
          commonBn: "ডলফিনফিশ বা মাহি-মাহি গোত্র",
          diagnosticEn: "Steep forehead in mature males, brilliant iridescent blue-green coloration, long continuous dorsal fin.",
          diagnosticBn: "পুরুষ মাছে খাড়া কপাল, উজ্জ্বল নীল-সবুজ বর্ণ, অবিচ্ছিন্ন দীর্ঘ পৃষ্ঠপাখনা।"
        },
        {
          name: "Echeneidae",
          commonEn: "Remoras / Sharksuckers",
          commonBn: "রেমোরা বা হাঙ্গর চোষক গোত্র",
          diagnosticEn: "Oval laminated sucking disc on head, attaches to sharks and whales; includes Remora and Echeneis.",
          diagnosticBn: "মাথায় চোষক ডিস্ক যা দিয়ে হাঙ্গর ও তিমির সাথে আটকে থাকে; Remora গণ অন্তর্ভুক্ত।"
        },
        {
          name: "Rachycentridae",
          commonEn: "Cobias",
          commonBn: "কোবিয়া গোত্র",
          diagnosticEn: "Depressed head, broad longitudinal dark stripe, short isolated dorsal spines; monotypic family Rachycentron canadum.",
          diagnosticBn: "চ্যাপ্টা মাথা, দেহের পাশে স্পষ্ট কালো রেখা, খাটো বিচ্ছিন্ন পৃষ্ঠকাঁটা; Rachycentron canadum।"
        },
        {
          name: "Istiophoridae",
          commonEn: "Billfishes / Sailfishes",
          commonBn: "সেইলফিশ বা মার্লিন গোত্র",
          diagnosticEn: "Upper jaw prolonged into spear, huge sail-like dorsal fin; includes Istiophorus.",
          diagnosticBn: "উপরের চোয়াল বর্শার মতো লম্বা, পালতোলা নৌকার মতো বিশাল পৃষ্ঠপাখনা; Istiophorus অন্তর্ভুক্ত।"
        }
      ],
      additionalInformation: {
        en: "Taxonomic reconciliation note: In Eschmeyer's Catalog of Fishes (CAS, August 2026) and Betancur-R. et al. (2017), Carangiformes is expanded to subsume flatfishes as Suborder Pleuronectoidei. However, FishBase (2026), Fishes of the World 5th ed. (Nelson et al. 2016), and WoRMS maintain Carangiformes restricted to pelagic carangoids/billfishes and retain Pleuronectiformes as an independent order. BiotaElite adopts the multi-authority consensus recognizing both orders while documenting this phylogenetic relationship.",
        bn: "শ্রেণীবিন্যাস সমন্বয় নোট: এশমেয়ার্স ক্যাটালগ অব ফিশেস (CAS, ২০২৬) এবং বেতানকুয়ার-আর. (২০১৭) এ চ্যাপ্টা মাছগুলোকে কারাঞ্জিফর্মিসের অধীনে 'সাব-অর্ডার প্লুরোনেক্টয়ডি' হিসেবে অন্তর্ভুক্ত করা হয়েছে। তবে ফিশবেস (২০২৬), নেলসন (২০১৬), এবং WoRMS কারাঞ্জিফর্মিসকে স্বতন্ত্র রেখে প্লুরোনেক্টিফর্মিসকে স্বাধীন বর্গ হিসেবে স্বীকৃতি দেয়। বায়োটাএলিট উভয় বর্গের বৈশিষ্ট্য ও বিবর্তনীয় সম্পর্ক স্পষ্টভাবে নথিভুক্ত করেছে।"
      },
      notes: "Taxonomic status: Recognized in FishBase (7 families) and Nelson (2016, 6 families). Broadened in Eschmeyer (2026) to include flatfishes as suborder Pleuronectoidei."
    };
  }
  if (k.id === 'order-pleuronectiformes') {
    return {
      ...k,
      englishName: "Flatfishes (Flounders, Soles, Tonguesoles & Turbots)",
      authoritySource: "FishBase (2026); Nelson et al. (2016) Fishes of the World (5th ed.); WoRMS (2026, AphiaID: 10331); Catalogue of Life (2026)",
      importantFamilies: [
        {
          name: "Pleuronectidae",
          commonEn: "Righteye Flounders",
          commonBn: "ডানচোখা ফ্লাউন্ডার গোত্র",
          diagnosticEn: "Both eyes typically on right side of head, preoperculum margin free, fins without spines; includes Platichthys, Hippoglossus, and Pseudopleuronectes.",
          diagnosticBn: "উভয় চোখ মাথার ডানপাশে, স্পষ্ট প্রাক-কানকো কিনারা, কাঁটাহীন পাখনা; Platichthys, Hippoglossus।"
        },
        {
          name: "Bothidae",
          commonEn: "Lefteye Flounders",
          commonBn: "বামচোখা ফ্লাউন্ডার গোত্র",
          diagnosticEn: "Both eyes on left side of head, pelvic fin base on eyed side longer than blind side; includes Bothus and Arnoglossus.",
          diagnosticBn: "উভয় চোখ মাথার বামপাশে, চোখের পাশের শ্রোণীপাখনা দীর্ঘতর; Bothus এবং Arnoglossus।"
        },
        {
          name: "Soleidae",
          commonEn: "True Soles",
          commonBn: "পাতামাছ গোত্র",
          diagnosticEn: "Right-eyed (dextral), rounded snout, small eyes, preopercular margin covered by skin; includes Solea and Zebrias.",
          diagnosticBn: "ডানচোখা, গোলাকার তুন্ড, চামড়ায় ঢাকা প্রাক-কানকো; Solea এবং Zebrias।"
        },
        {
          name: "Cynoglossidae",
          commonEn: "Tonguesoles",
          commonBn: "জিভমাছ বা কুত্তা-জিভ গোত্র",
          diagnosticEn: "Left-eyed (sinistral), teardrop-shaped body, dorsal and anal fins confluent with pointed caudal fin, hook over mouth; includes Cynoglossus.",
          diagnosticBn: "বামচোখা, পাতার মতো চ্যাপ্টা দেহ, লেজের সাথে পাখনার একীভূত কিনারা; Cynoglossus (জিভমাছ)।"
        },
        {
          name: "Paralichthyidae",
          commonEn: "Large-tooth Flounders",
          commonBn: "বড়দাঁত ফ্লাউন্ডার গোত্র",
          diagnosticEn: "Left-eyed, large mouth with sharp canine teeth, caudal fin separate; includes Paralichthys and Pseudorhombus.",
          diagnosticBn: "বামচোখা, ধারালো দাঁতযুক্ত বড় মুখ, পৃথক পুচ্ছপাখনা; Paralichthys এবং Pseudorhombus।"
        }
      ],
      additionalInformation: {
        en: "Taxonomic status and authoritative evaluation: Order Pleuronectiformes is officially recognized as an accepted Order by FishBase (2026, 16 families), Fishes of the World 5th edition (Nelson et al. 2016, 14 families), WoRMS (AphiaID: 10331), and the Catalogue of Life (2026). Eschmeyer's Catalog of Fishes (CAS, August 2026) and Betancur-R. et al. (2017) alternatively classify flatfishes as Suborder Pleuronectoidei within an expanded Order Carangiformes. BiotaElite 2.0 adopts the prevailing consensus of FishBase and Nelson (2016) retaining Pleuronectiformes as an independent order, while documenting the molecular phylogenomic evidence supporting its relationship to Carangaria.",
        bn: "শ্রেণীবিন্যাসগত প্রামাণ্য মূল্যায়ন: ফিশবেস (২০২৬), নেলসনের ফিশেস অব দ্য ওয়ার্ল্ড (৫ম সংস্করণ, ২০১৬), ওয়ার্ল্ড রেজিস্টার অব মেরিন স্পিসিজ (WoRMS: AphiaID 10331) এবং ক্যাটালগ অব লাইফ (২০২৬) প্লুরোনেক্টিফর্মিসকে স্বতন্ত্র ও প্রামাণ্য বর্গ হিসেবে স্বীকৃতি প্রদান করেছে। অপরদিকে এশমেয়ার্স ক্যাটালগ অব ফিশেস (CAS, ২০২৬) আণবিক ফাইলোজেনির ভিত্তিতে চ্যাপ্টা মাছগুলোকে কারাঞ্জিফর্মিসের উপ-বর্গ হিসেবে স্থান দিয়েছে। বায়োটাএলিট প্রধান আন্তর্জাতিক ডাটাবেসগুলোর ঐকমত্য অনুসরণ করে একে স্বাধীন বর্গ হিসেবে সংরক্ষণ করেছে।"
      },
      notes: "Taxonomic status: Accepted Order in FishBase, Nelson (2016), WoRMS, and CoL. Regarded as Suborder Pleuronectoidei within Carangiformes in Eschmeyer (2026)."
    };
  }
  return k;
});

const tkTsContent = `// BiotaElite 2.0 Taxonomic Knowledge Base (11 Comprehensive Zoological Categories)
// MASTER-FIX-09A: Final Pleuronectiformes Authority Verification & Multi-Source Reconciliation
// Authoritative Sources: Eschmeyer's Catalog of Fishes (CAS, August 2026), FishBase (2026), Nelson et al. (2016), WoRMS (2026)
import type { TaxonKnowledgeRecord } from '../types/biodiversity';

export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ${JSON.stringify(knowledge, null, 2)};
`;

fs.writeFileSync(tkPath, tkTsContent, 'utf8');
console.log(`Successfully updated ${tkPath}`);
