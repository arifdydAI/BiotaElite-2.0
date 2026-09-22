// Generator script to build full 11-category knowledge records for all 24 missing fish orders
// Based on Nelson et al. (2016) Fishes of the World (5th ed.) and Eschmeyer Catalog of Fishes (2024)
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const seedPath = path.join(__dirname, '..', 'src', 'data', 'seedTaxonKnowledge.ts');
const rawCode = fs.readFileSync(seedPath, 'utf8');

// Load current records
const js = ts.transpileModule(rawCode, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const m = { exports: {} };
const fn = new Function('module', 'exports', 'require', js);
fn(m, m.exports, require);
const records = m.exports.SEED_TAXON_KNOWLEDGE;

console.log(`Loaded ${records.length} existing records.`);

const newOrders = [
  // =========================================================================
  // AGNATHA (2 Orders)
  // =========================================================================
  {
    id: "order-myxiniformes",
    taxonId: "taxon-myxiniformes",
    rank: "order",
    scientificName: "Myxiniformes",
    bengaliName: "হ্যাগফিশ বর্গ",
    englishName: "Hagfishes",
    parentTaxonId: "group-agnatha",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "subphylum", name: "Craniata", nameBn: "ক্রেনিয়াটা" },
      { rank: "superclass", name: "Agnatha", nameBn: "চোয়ালবিহীন মাছ" },
      { rank: "class", name: "Myxini", nameBn: "মিক্সিনি" },
      { rank: "order", name: "Myxiniformes", nameBn: "হ্যাগফিশ বর্গ" }
    ],
    shortDescription: {
      en: "Primitive jawless, eel-like benthic marine scavengers with a cartilaginous skull, fibrous sheath, keratinous lingual cusps, and mucous slime pores.",
      bn: "আদিম চোয়ালহীন ও সর্পিল সামুদ্রিক মেথর মাছ, যাদের তরুণাস্থিময় করোটিকা, শৃঙ্গীয় জিহ্বা-দাঁত এবং প্রচুর মিউকাস নিঃসরণকারী শ্লেষ্মা গ্রন্থি রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Jawless; persistent notochord lacking true vertebral centra; mouth surrounded by 3-4 pairs of sensory barbels; tongue with eversible bilateral rows of horny keratin teeth; 1 to 16 pairs of external gill pores; body scaleless, naked, and surrounded by ventrolateral slime glands producing voluminous defensive microfilament mucus.",
      bn: "চোয়ালবিহীন; প্রকৃত কশেরুকার সেন্ট্রামহীন স্থায়ী নটোকর্ড; ৩-৪ জোড়া সংবেদনশীল বার্বেল বা শুঙ্গবেষ্টিত মুখ; বিপরীতমুখী কেরাটিনাস দাঁতযুক্ত জিহ্বা; ১ থেকে ১৬ জোড়া বাহ্যিক ফুলকা রন্ধ্র; আঁইশহীন ত্বক এবং আত্মরক্ষামূলক বিপুল মিউকাস ক্ষরণকারী শ্লেষ্মা গ্রন্থি বিদ্যমান।",
      keyFeatures: {
        en: [
          "Complete absence of true articulated jaws and paired limbs",
          "Single median nasohypophyseal aperture connecting to pharynx",
          "Ventrolateral series of specialized slime glands yielding defensive microfibrous mucus",
          "Eversible keratinized dental plates on cartilaginous lingual apparatus"
        ],
        bn: [
          "প্রকৃত চোয়াল ও যুগ্ম পাখনার সম্পূর্ণ অনুপস্থিতি",
          "গলবিলের সাথে যুক্ত একক মধ্যম নাসারন্ধ্রীয় পথ",
          "দেহের দুই পাশে আত্মরক্ষামূলক বিপুল শ্লেষ্মা নিঃসরণকারী গ্রন্থি",
          "তরুণাস্থিময় জিহ্বায় উল্টানো যায় এমন কেরাটিনাস দাঁতের প্লেট"
        ]
      }
    },
    habitat: {
      en: "Cold-temperate and deep-sea marine benthic habitats, continental slopes, soft bathyal muds, and abyssal trenches at depths of 20 to 5,000 meters.",
      bn: "শীতল-নাতিশীতোষ্ণ ও গভীর সমুদ্রের তলদেশ, মহীঢাল, গভীর সমুদ্রের কর্দমাক্ত তল এবং ২০ থেকে ৫,০০০ মিটার গভীর গিরিখাত।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Vital benthic scavengers and detritivores, consuming decaying carcasses and whale-falls on the deep seabed to accelerate abyssal organic nutrient cycling.",
      bn: "গভীর সমুদ্রের প্রধান মেথর প্রাণী; সমুদ্রের তলদেশের মৃত তিমি ও অন্যান্য পচনশীল মৃতদেহ খেয়ে পুষ্টি উপাদান দ্রুত পুনর্ব্যবহারযোগ্য করে।"
    },
    feeding: {
      en: "Opportunistic carrion feeders and burrowing detritivores. Tying their slender bodies into overhand knots to gain leverage while shearing flesh with rasping lingual teeth.",
      bn: "পচনশীল মাংসাশী ও কর্দমভোজী। মৃতদেহের মাংস ছেঁড়ার সুবিধার্থে এরা নিজেদের দেহে বিশেষ গিঁট বেঁধে বল প্রয়োগ করে।"
    },
    reproduction: {
      en: "Oviparous. Large yolky eggs (20–25 mm) enclosed in tough horny capsules with hooked anchoring filaments, bypassing any larval phase into direct miniature juveniles.",
      bn: "ডিম্বপ্রসবকারী। ২০-২৫ মিলিমিটার দৈর্ঘ্যের শক্ত কুসুমময় খোলসযুক্ত ডিম পাড়ে যা হুকের মতো আঁকড়ে থাকে; কোনো রূপান্তর বা লার্ভা দশা নেই।"
    },
    distribution: {
      en: "Circumglobal in cold-temperate and deep tropical ocean basins. Strictly absent in Bangladesh tropical shallow waters.",
      bn: "বিশ্বের শীতল ও গভীর মহাসাগরে বিস্তৃত। বাংলাদেশের অগভীর গ্রীষ্মমন্ডলীয় জলসীমায় কোনো জীবিত প্রজাতি নেই।"
    },
    importantFamilies: [
      {
        name: "Myxinidae",
        commonEn: "Hagfishes",
        commonBn: "হ্যাগফিশ গোত্র",
        diagnosticEn: "Body eel-shaped, eyes rudimentary and skin-covered, single nostril, barbels around mouth, slime pores present.",
        diagnosticBn: "সর্পিল দেহ, ত্বক দ্বারা আবৃত চোখ, একক নাসারন্ধ্র, মুখের চারদিকে শুঙ্গ এবং শ্লেষ্মা রন্ধ্র বিদ্যমান।"
      }
    ],
    scientificNamesSummary: {
      en: "Notable genera: Myxine, Eptatretus, Nemamyxine, and Neomyxine. Verified type binomials: Myxine glutinosa Linnaeus, 1758 and Eptatretus burgeri (Girard, 1855).",
      bn: "উল্লেখযোগ্য গণ: Myxine, Eptatretus, Nemamyxine এবং Neomyxine। প্রামাণ্য বৈজ্ঞানিক নাম: Myxine glutinosa Linnaeus, 1758 এবং Eptatretus burgeri (Girard, 1855)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Atlantic Hagfish (Myxine glutinosa), Inshore Hagfish (Eptatretus burgeri), Pacific Hagfish (Eptatretus stoutii), and Broadgilled Hagfish (Eptatretus cirrhatus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: আটলান্টিক হ্যাগফিশ (Myxine glutinosa), উপকূলীয় হ্যাগফিশ (Eptatretus burgeri), প্যাসিফিক হ্যাগফিশ (Eptatretus stoutii) এবং ব্রডগিল্ড হ্যাগফিশ (Eptatretus cirrhatus)।"
    },
    additionalInformation: {
      en: "Myxiniformes preserves primitive craniate anatomical traits prior to the evolution of articulated jaws, offering benchmark evidence in vertebrate paleontology. Zero living species occur in Bangladesh.",
      bn: "হ্যাগফিশ আদিম করোটিকাধারীদের দৈহিক গঠন ধারণ করে যা চোয়ালযুক্ত মেরুদণ্ডীর বিবর্তনের ভিত্তি বুঝতে অত্যন্ত গুরুত্বপূর্ণ। বাংলাদেশে এদের কোনো প্রজাতি নেই।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Fernholm (1998)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-petromyzontiformes",
    taxonId: "taxon-petromyzontiformes",
    rank: "order",
    scientificName: "Petromyzontiformes",
    bengaliName: "ল্যাম্প্রে বর্গ",
    englishName: "Lampreys",
    parentTaxonId: "group-agnatha",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "subphylum", name: "Craniata", nameBn: "ক্রেনিয়াটা" },
      { rank: "superclass", name: "Agnatha", nameBn: "চোয়ালবিহীন মাছ" },
      { rank: "class", name: "Petromyzontida", nameBn: "পেট্রোমাইজন্টিডা" },
      { rank: "order", name: "Petromyzontiformes", nameBn: "ল্যাম্প্রে বর্গ" }
    ],
    shortDescription: {
      en: "Jawless, eel-like parasitic or non-parasitic aquatic vertebrates characterized by a toothed, circular sucking oral disc and seven lateral gill pores.",
      bn: "চোয়ালহীন সর্পিল মেরুদণ্ডী জলজ প্রাণী, যাদের বৃত্তাকার দাঁতযুক্ত চোষক মুখ ও দুই পাশে ৭ জোড়া পৃথক ফুলকা রন্ধ্র রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Absence of true articulated jaws; oral sucker expanded into an open disc armed with cornified keratinous teeth and a central rasping tongue; 7 pairs of external gill pores opening independently; single dorsal nasohypophyseal pore; prominent well-developed eyes in adults; persistent notochord with rudimentary cartilaginous arcualia (vertebral precursors).",
      bn: "প্রকৃত চোয়াল অনুপস্থিত; মুখ প্রশস্ত বৃত্তাকার চোষক ডিস্কে রূপান্তরিত যা শৃঙ্গীয় কেরাটিনাস দাঁত ও কেন্দ্রীয় দাঁতযুক্ত জিহ্বাবেষ্টিত; দুই পাশে ৭ জোড়া ফুলকা ছিদ্র স্বাধীনভাবে উন্মুক্ত; মাথার উপরে একক নাসারন্ধ্র; প্রাপ্তবয়স্কদের সুস্পষ্ট চোখ এবং আদিম কশেরুকার নিদর্শনযুক্ত স্থায়ী নটোকর্ড বিদ্যমান।",
      keyFeatures: {
        en: [
          "Circular suctorial oral disc equipped with concentric series of horny teeth",
          "Seven external lateral gill pores on each side of the branchial region",
          "Ammocoete larval phase living as blind microphagous burrowers in river sand",
          "Single dorsal nasohypophyseal opening not penetrating the oral cavity"
        ],
        bn: [
          "কেরাটিনাস দাঁতযুক্ত বৃত্তাকার চোষক মুখ ডিস্ক",
          "দেহের উভয় পাশে ৭টি করে পৃথক বাহ্যিক ফুলকা ছিদ্র",
          "নদীর বালিতে বাস করা অন্ধ অ্যামোসিট লার্ভা দশা",
          "মাথার উপরের পৃষ্ঠে অবস্থিত একক নাসারন্ধ্রীয় ছিদ্র"
        ]
      }
    },
    habitat: {
      en: "Anadromous coastal marine corridors and clear, cold temperate freshwater rivers, streams, and gravel beds.",
      bn: "পরিযায়ী উপকূলীয় সমুদ্র এবং নাতিশীতোষ্ণ অঞ্চলের স্বচ্ছ ও শীতল মিঠাপানির নদী ও পাথুরে পাহাড়ি ঝর্ণা।",
      systems: ["marine", "freshwater"]
    },
    ecosystem: {
      en: "Adults act as ectoparasites or apex micropredators on larger pelagic teleosts and elasmobranchs; ammocoete larvae serve as critical substrate biofilters in riverine nursery zones.",
      bn: "প্রাপ্তবয়স্করা বড় মাছের ত্বকে চোষক লাগিয়ে রক্তভোজী এক্টোপ্যারাসাইট হিসেবে কাজ করে; এদের লার্ভা নদীর তলদেশের বালি ছেঁকে পুষ্টিকণা গ্রহণ করে পানি বিশুদ্ধ রাখে।"
    },
    feeding: {
      en: "Parasitic forms attach via oral suction, using the rasping tongue to puncture host skin and secrete anticoagulant lamphredin while feeding on blood and fluids; non-parasitic species do not feed as adults.",
      bn: "পরজীবী প্রজাতিগুলো চোষক মুখ দিয়ে ধারক মাছের গায়ে আটকে যায় এবং জিহ্বা দিয়ে ত্বক ছিদ্র করে রক্তক্ষরণরোধক ল্যাম্ফ্রেডিন নিঃসরণ করে রক্ত ও রস চুষে খায়; অপরজীবী প্রজাতি প্রাপ্তবয়স্ক অবস্থায় খাবার খায় না।"
    },
    reproduction: {
      en: "Anadromous semelparity: migrating upstream to build gravel depression nests; adults spawn once and die; eggs hatch into blind ammocoete filter-feeding larvae lasting 3–7 years before metamorphosis.",
      bn: "একবার প্রজননকারী (সেমেলপ্যারাস); উজানের নদীতে নুড়িপাথরে বাসা বানিয়ে ডিম পেড়েই প্রাপ্তবয়স্করা মারা যায়; ডিম ফুটে অ্যামোসিট লার্ভা বের হয় যা ৩-৭ বছর রূপান্তরের অপেক্ষায় থাকে।"
    },
    distribution: {
      en: "North and South temperate zones (Holarctic and Southern Hemisphere cool waters). Completely absent in tropical Bangladesh inland or coastal waters.",
      bn: "উত্তর ও দক্ষিণ নাতিশীতোষ্ণ অঞ্চলে সীমাবদ্ধ। গ্রীষ্মমন্ডলীয় বাংলাদেশে অভ্যন্তরীণ নদী বা সাগরে এদের কোনো উপস্থিতি নেই।"
    },
    importantFamilies: [
      {
        name: "Petromyzontidae",
        commonEn: "Northern Lampreys",
        commonBn: "উত্তুরে ল্যাম্প্রে গোত্র",
        diagnosticEn: "Oral disc with well-developed keratin teeth, dorsal fins separated or notched, Holarctic distribution.",
        diagnosticBn: "উন্নত কেরাটিন দাঁতযুক্ত চোষক মুখ, পৃথক বা খাঁজযুক্ত পৃষ্ঠপাখনা, উত্তর গোলার্ধে বিস্তৃত।"
      },
      {
        name: "Geotriidae",
        commonEn: "Southern Pouched Lampreys",
        commonBn: "দক্ষিণী থলিযুক্ত ল্যাম্প্রে গোত্র",
        diagnosticEn: "Adult males develop large gular pouch beneath head, widely separated dorsal fins, Southern Hemisphere.",
        diagnosticBn: "প্রাপ্তবয়স্ক পুরুষের গলার নিচে বড় থলি গঠিত হয়, দক্ষিণ গোলার্ধে বিস্তৃত।"
      }
    ],
    scientificNamesSummary: {
      en: "Notable genera: Petromyzon, Lampetra, Entosphenus, Ichthyomyzon, and Geotria. Verified binomials: Petromyzon marinus Linnaeus, 1758 and Lampetra fluviatilis (Linnaeus, 1758).",
      bn: "উল্লেখযোগ্য গণ: Petromyzon, Lampetra, Entosphenus, Ichthyomyzon এবং Geotria। প্রামাণ্য বৈজ্ঞানিক নাম: Petromyzon marinus Linnaeus, 1758 এবং Lampetra fluviatilis (Linnaeus, 1758)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Sea Lamprey (Petromyzon marinus), European River Lamprey (Lampetra fluviatilis), Pacific Lamprey (Entosphenus tridentatus), and Pouched Lamprey (Geotria australis).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: সামুদ্রিক ল্যাম্প্রে (Petromyzon marinus), ইউরোপীয় নদী ল্যাম্প্রে (Lampetra fluviatilis), প্রশান্ত মহাসাগরীয় ল্যাম্প্রে (Entosphenus tridentatus) এবং থলেযুক্ত ল্যাম্প্রে (Geotria australis)।"
    },
    additionalInformation: {
      en: "Petromyzontiformes offers crucial evolutionary insights into the adaptive immune system (variable lymphocyte receptors) and neurobiology. Zero native occurrences in Bangladesh.",
      bn: "ল্যাম্প্রে মেরুদণ্ডী প্রাণীদের বিকল্প অনাক্রম্যতা ও স্নায়ুতন্ত্রের বিবর্তন গবেষণায় অত্যন্ত গুরুত্বপূর্ণ মডেল। বাংলাদেশে কোনো দেশীয় প্রজাতি নেই।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Potter et al. (2015)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // =========================================================================
  // CHONDRICHTHYES (8 Orders)
  // =========================================================================
  {
    id: "order-carcharhiniformes",
    taxonId: "taxon-carcharhiniformes",
    rank: "order",
    scientificName: "Carcharhiniformes",
    bengaliName: "গ্রাউন্ড হাঙ্গর বর্গ",
    englishName: "Ground Sharks & Requiem Sharks",
    parentTaxonId: "class-chondrichthyes",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Carcharhiniformes", nameBn: "গ্রাউন্ড হাঙ্গর বর্গ" }
    ],
    shortDescription: {
      en: "The largest order of living sharks, characterized by two spineless dorsal fins, an anal fin, five gill slits, and eyes protected by a movable nictitating membrane.",
      bn: "জীবিত হাঙ্গরদের বৃহত্তম বর্গ; যাদের কাঁটাহীন দুটি পৃষ্ঠপাখনা, একটি পায়ুপাখনা, ৫ জোড়া ফুলকা ছিদ্র এবং চোখ সুরক্ষিত রাখার নিকটিটেটিং পর্দা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Two dorsal fins lacking spines; anal fin present; five lateral gill slits with the last 1–3 slits situated over or behind the pectoral fin origin; true movable internal nictitating eyelid; mouth extends well behind anterior margin of eyes; intestinal spiral valve typically scroll-type.",
      bn: "কাঁটাহীন দুটি পৃষ্ঠপাখনা; পায়ুপাখনা বিদ্যমান; ৫ জোড়া ফুলকা ছিদ্র যার শেষ ১-৩টি বক্ষপাখনার গোড়ার ওপর অবস্থিত; সঞ্চালনক্ষম নিকটিটেটিং পর্দাযুক্ত চোখ; চোখের পেছনের কিনারা পর্যন্ত বিস্তৃত মুখগহ্বর এবং অন্ত্রে স্ক্রল-ধরনের স্পাইরাল ভালভ বিদ্যমান।",
      keyFeatures: {
        en: [
          "Movable nictitating third eyelid covering and shielding the eye",
          "Two spineless dorsal fins and an anal fin present",
          "Five pairs of gill slits on lateral sides of head",
          "Dominant predatory shark group in coastal and tropical shelf waters"
        ],
        bn: [
          "চোখ সুরক্ষায় সঞ্চালনক্ষম নিকটিটেটিং চোখের পর্দা",
          "কাঁটাহীন দুটি পৃষ্ঠপাখনা এবং পায়ুপাখনা বিদ্যমান",
          "মাথার দুই পাশে ৫ জোড়া ফুলকা ছিদ্র",
          "উপকূলীয় ও গ্রীষ্মমন্ডলীয় সাগরে শীর্ষ শিকারী হাঙ্গর গোষ্ঠী"
        ]
      }
    },
    habitat: {
      en: "Coastal neritic shelves, tropical coral reefs, estuarine river mouths, and pelagic open oceanic waters.",
      bn: "উপকূলীয় মহীসোপান, প্রবাল প্রাচীর, মোহনাজ নদীমুখ এবং উন্মুক্ত মহাসাগরীয় পেলাজিক জলসীমা।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Apex and mesopredators maintaining marine trophic health across the Bay of Bengal continental shelf, the Swatch of No Ground, and coastal estuaries.",
      bn: "বঙ্গোপসাগর মহীসোপান, সোয়াচ অব নো গ্রাউন্ড এবং সুন্দরবনের মোহনায় শীর্ষ শিকারী হিসেবে সামুদ্রিক খাদ্যশৃঙ্খলের ভারসাম্য রক্ষা করে।"
    },
    feeding: {
      en: "Active carnivores preying upon bony teleosts, rays, smaller sharks, cephalopods, and marine crabs.",
      bn: "সক্রিয় মাংসাশী শিকারী; অস্থিময় মাছ, শঙ্কর মাছ, ছোট হাঙ্গর, স্কুইড এবং সামুদ্রিক কাঁকড়া শিকার করে।"
    },
    reproduction: {
      en: "Predominantly viviparous with placental yolk-sac attachment; select primitive taxa (Scyliorhinidae) oviparous with mermaid's purse egg cases.",
      bn: "অধিকাংশ প্রজাতি অমরাযুক্ত কুসুমথলির মাধ্যমে জরায়ুজ শাবক প্রসবকারী (ভিভিপ্যারাস); কিছু আদিম প্রজাতি ডিম্বপ্রসবকারী।"
    },
    distribution: {
      en: "Circumglobal in tropical and temperate oceans. Well represented in the northern Bay of Bengal and Bangladesh EEZ.",
      bn: "বিশ্বের গ্রীষ্মমন্ডলীয় ও নাতিশীতোষ্ণ সাগরে ব্যাপক বিস্তৃত। উত্তর বঙ্গোপসাগর ও বাংলাদেশের অর্থনৈতিক জলসীমায় প্রচুর উপস্থিতি।"
    },
    importantFamilies: [
      {
        name: "Carcharhinidae",
        commonEn: "Requiem Sharks",
        commonBn: "রেকিউম হাঙ্গর গোত্র",
        diagnosticEn: "Round eyes with internal nictitating membrane, precaudal pits present, scroll-type intestinal valve.",
        diagnosticBn: "অভ্যন্তরীণ নিকটিটেটিং পর্দাযুক্ত গোলাকার চোখ, প্রিকডাল পিট বিদ্যমান, স্ক্রল স্পাইরাল ভালভ।"
      },
      {
        name: "Sphyrnidae",
        commonEn: "Hammerhead Sharks",
        commonBn: "হাতুড়িমাথা হাঙ্গর গোত্র",
        diagnosticEn: "Head laterally expanded into flattened hammer-like cephalofoil with eyes at lateral extremities.",
        diagnosticBn: "মাথা দুই পাশে হাতুড়ির মতো প্রসারিত এবং প্রান্তভাগে চোখ অবস্থিত।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Carcharhinus, Sphyrna, Scoliodon, Galeocerdo, and Triaenodon. Binomials: Carcharhinus leucas (Müller & Henle, 1839) and Sphyrna lewini (Griffith & Smith, 1834).",
      bn: "প্রধান গণ: Carcharhinus, Sphyrna, Scoliodon, Galeocerdo এবং Triaenodon। বৈজ্ঞানিক নাম: Carcharhinus leucas (Müller & Henle, 1839) এবং Sphyrna lewini (Griffith & Smith, 1834)।"
    },
    examplesSummary: {
      en: "Five verified representative examples: Bull Shark (Carcharhinus leucas), Scalloped Hammerhead (Sphyrna lewini), Spadenose Shark (Scoliodon laticaudus), Tiger Shark (Galeocerdo cuvier), and Blacktip Shark (Carcharhinus limbatus).",
      bn: "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: ষাঁড় হাঙ্গর (Carcharhinus leucas), হাতুড়িমাথা হাঙ্গর (Sphyrna lewini), কোদালমুখ হাঙ্গর (Scoliodon laticaudus), বাঘ হাঙ্গর (Galeocerdo cuvier) এবং কালোপাখনা হাঙ্গর (Carcharhinus limbatus)।"
    },
    additionalInformation: {
      en: "Several carcharhinid species enter the Sundarbans mangrove channels and Lower Meghna estuary. Many are critically endangered due to targeted shark finning and gillnet bycatch.",
      bn: "বেশ কিছু প্রজাতি সুন্দরবনের খাঁড়ি ও মেঘনা মোহনায় প্রবেশ করে। পাখনার বাণিজ্য ও অসতর্ক জালের কারণে এদের অনেকে চরম বিপন্ন।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024", "ref-iucn-bd-2015"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Compagno (1984)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-lamniformes",
    taxonId: "taxon-lamniformes",
    rank: "order",
    scientificName: "Lamniformes",
    bengaliName: "ম্যাকেরেল হাঙ্গর বর্গ",
    englishName: "Mackerel Sharks",
    parentTaxonId: "class-chondrichthyes",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Lamniformes", nameBn: "ম্যাকেরেল হাঙ্গর বর্গ" }
    ],
    shortDescription: {
      en: "Large, powerful oceanic predatory and filter-feeding sharks lacking a nictitating membrane, with five gill slits all placed before pectoral fins, and regional endothermy in advanced clades.",
      bn: "বৃহৎ ও শক্তিশালী পেলাজিক শিকারী হাঙ্গর যাদের চোখে নিকটিটেটিং পর্দা নেই, ৫টি ফুলকা ছিদ্রই বক্ষপাখনার সামনে অবস্থিত এবং উন্নত প্রজাতিতে আঞ্চলিক উষ্ণরক্তীয়তা দেখা যায়।"
    },
    diagnosticCharacteristics: {
      en: "Two dorsal fins lacking spines; anal fin present; 5 lateral gill slits situated entirely anterior to pectoral fin origin; eyes lack nictitating eyelid; mouth extends far behind eyes; ring-type intestinal spiral valve; intrauterine oophagy (cannibalism) prevalent during gestation; vascular countercurrent rete mirabile supporting regional endothermy in Lamnidae.",
      bn: "কাঁটাহীন দুটি পৃষ্ঠপাখনা; পায়ুপাখনা উপস্থিত; ৫টি ফুলকা ছিদ্রের সবগুলোই বক্ষপাখনার গোড়ার সামনে অবস্থিত; চোখে নিকটিটেটিং পর্দা নেই; মুখ চোখের বেশ পেছনে বিস্তৃত; ভ্রূণাবস্থায় জরায়ুতে ডিম ভক্ষণের স্বভাব (উওফেজি); ল্যামনিডি গোত্রে শরীরের তাপমাত্রা নিয়ন্ত্রণের বিশেষ রক্তনালী জালিকা বিদ্যমান।",
      keyFeatures: {
        en: [
          "All five gill slits situated anterior to the pectoral fin base",
          "Absence of nictitating membrane over eyes",
          "Oophagy where embryonic pups consume unfertilized eggs in utero",
          "Regional endothermy maintaining elevated muscle and brain temperature"
        ],
        bn: [
          "ফুলকার ৫টি ছিদ্রই বক্ষপাখনার গোড়ার সামনে অবস্থিত",
          "চোখে নিকটিটেটিং মেমব্রেনের অনুপস্থিতি",
          "জরায়ুর ভেতর ভ্রূণ কর্তৃক অপ্রস্ফুটিত ডিম খাওয়ার স্বভাব (উওফেজি)",
          "পেশী ও মস্তিষ্কের তাপমাত্রা আশেপাশের পানির চেয়ে বেশি রাখার ক্ষমতা"
        ]
      }
    },
    habitat: {
      en: "Pelagic open ocean, epipelagic to bathypelagic oceanic waters, continental shelf edges, and deep submarine canyons.",
      bn: "উন্মুক্ত মহাসাগরের উপরিভাগ থেকে গভীর পেলাজিক স্তর, মহীসোপানের প্রান্তভাগ এবং গভীর সামুদ্রিক ক্যানিয়ন।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Apex pelagic predators regulating oceanic food webs (tunas, seals, cetaceans) and colossal planktivores (Basking shark, Megamouth shark) harvesting zooplankton.",
      bn: "উন্মুক্ত মহাসাগরে শীর্ষ শিকারী হিসেবে টুনা ও সামুদ্রিক স্তন্যপায়ীর সংখ্যা নিয়ন্ত্রণ করে, এবং কিছু প্রজাতি বিশালাকার প্লাঙ্কটন ভক্ষক হিসেবে কাজ করে।"
    },
    feeding: {
      en: "High-speed pursuit of pelagic fishes, tunas, and marine mammals, or continuous ram-filter feeding on oceanic copepods and euphausiids.",
      bn: "দ্রুতগতিতে তাড়া করে পেলাজিক মাছ ও টুনা শিকার করে; অথবা অবিরাম মুখ হা করে সামুদ্রিক জুপ্লাঙ্কটন ছেঁকে খায়।"
    },
    reproduction: {
      en: "Aplacental viviparity with intrauterine oophagy (oviphagy), yielding extraordinarily robust, active newborn pups.",
      bn: "অমরাহীন জরায়ুজ প্রসব (উওফেজি); জরায়ুর ভেতরে থাকা ভ্রূণ অন্য ডিম খেয়ে পুষ্টি পেয়ে অত্যন্ত বলবান ও কর্মক্ষম অবস্থায় জন্ম নেয়।"
    },
    distribution: {
      en: "Worldwide in temperate, subtropical, and tropical oceanic realms. Occasional pelagic occurrences in outer Bay of Bengal deep waters.",
      bn: "বিশ্বের নাতিশীতোষ্ণ ও ক্রান্তীয় মহাসাগরে বিস্তৃত। গভীর বঙ্গোপসাগরের উন্মুক্ত পেলাজিক অঞ্চলে এদের উপস্থিতি নথিভুক্ত।"
    },
    importantFamilies: [
      {
        name: "Lamnidae",
        commonEn: "Mackerel Sharks & White Sharks",
        commonBn: "ম্যাকেরেল হাঙ্গর গোত্র",
        diagnosticEn: "Fusiform hydrodynamic body, lunate caudal fin, strong lateral keels, regional endothermy.",
        diagnosticBn: "তীরবেগী দেহ, অর্ধচন্দ্রাকার পুচ্ছপাখনা, পুচ্ছদণ্ডে শক্ত পার্শ্বীয় খাঁজ, উষ্ণরক্তীয় ব্যবস্থা।"
      },
      {
        name: "Alopiidae",
        commonEn: "Thresher Sharks",
        commonBn: "চাবুকলেজী হাঙ্গর গোত্র",
        diagnosticEn: "Upper lobe of caudal fin immensely elongated, nearly equal to remainder of body length.",
        diagnosticBn: "পুচ্ছপাখনার উপরের অংশ দেহের সমান দীর্ঘ চাবুকের মতো প্রসারিত যা দিয়ে এরা শিকারকে আঘাত করে।"
      }
    ],
    scientificNamesSummary: {
      en: "Prominent genera: Carcharodon, Isurus, Lamna, Alopias, and Cetorhinus. Binomials: Carcharodon carcharias (Linnaeus, 1758) and Isurus oxyrinchus Rafinesque, 1810.",
      bn: "প্রধান গণ: Carcharodon, Isurus, Lamna, Alopias এবং Cetorhinus। বৈজ্ঞানিক নাম: Carcharodon carcharias (Linnaeus, 1758) এবং Isurus oxyrinchus Rafinesque, 1810।"
    },
    examplesSummary: {
      en: "Five verified representative examples: Great White Shark (Carcharodon carcharias), Shortfin Mako (Isurus oxyrinchus), Pelagic Thresher (Alopias pelagicus), Basking Shark (Cetorhinus maximus), and Sand Tiger Shark (Carcharias taurus).",
      bn: "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: গ্রেট হোয়াইট হাঙ্গর (Carcharodon carcharias), শর্টফিন মাকো (Isurus oxyrinchus), পেলাজিক থ্রেশার (Alopias pelagicus), বাস্কিং হাঙর (Cetorhinus maximus) এবং স্যান্ড টাইগার হাঙ্গর (Carcharias taurus)।"
    },
    additionalInformation: {
      en: "Shortfin mako is considered the fastest swimming shark on Earth, capable of bursts exceeding 70 km/h. Pelagic threshers are occasionally caught by offshore deep-sea longlines in Bangladesh waters.",
      bn: "শর্টফিন মাকো হাঙ্গর বিশ্বের দ্রুততম হাঙ্গর যা ঘন্টায় ৭০ কিমি বেগে ছুটতে পারে। গভীর সমুদ্রে চলাচলকারী চাবুকলেজী হাঙ্গর কখনো কখনো বঙ্গোপসাগরে দীর্ঘ বড়শিতে ধরা পড়ে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Compagno (2001)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-squaliformes",
    taxonId: "taxon-squaliformes",
    rank: "order",
    scientificName: "Squaliformes",
    bengaliName: "ডগফিশ হাঙ্গর বর্গ",
    englishName: "Dogfish Sharks & Bramble Sharks",
    parentTaxonId: "class-chondrichthyes",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Squaliformes", nameBn: "ডগফিশ হাঙ্গর বর্গ" }
    ],
    shortDescription: {
      en: "Cartilaginous fishes completely lacking an anal fin, bearing two dorsal fins (often preceded by stout defensive spines), and large spiracles behind the eyes.",
      bn: "পায়ুপাখনা সম্পূর্ণ অনুপস্থিত এমন তরুণাস্থিময় হাঙ্গর, যাদের দুটি পৃষ্ঠপাখনা (প্রায়ই শক্ত কাঁটাযুক্ত) এবং চোখের পেছনে বড় স্পাইরাকল বিদ্যমান।"
    },
    diagnosticCharacteristics: {
      en: "Complete absence of anal fin; two dorsal fins, usually armed with a hard anterior spine; 5 lateral gill slits all anterior to pectoral fins; large spiracles situated immediately behind eyes; no nictitating membrane; mouth ventral and transverse.",
      bn: "পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি; দুটি পৃষ্ঠপাখনা যা সাধারণত সামনের দিকে ধারালো কাঁটাযুক্ত; ৫ জোড়া ফুলকা ছিদ্র যা বক্ষপাখনার সামনে অবস্থিত; চোখের ঠিক পেছনে বড় স্পাইরাকল; চোখে নিকটিটেটিং পর্দা নেই; মুখ অঙ্কীয় দিকে অবস্থিত।",
      keyFeatures: {
        en: [
          "Total absence of an anal fin",
          "Two dorsal fins frequently bearing sharp rigid spines",
          "Prominent spiracles positioned close behind the eyes",
          "Deep-water bioluminescent species equipped with ventral photophores (Etmopteridae)"
        ],
        bn: [
          "পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি",
          "দুটি পৃষ্ঠপাখনায় শক্ত ও ধারালো কাঁটার উপস্থিতি",
          "চোখের ঠিক পেছনে সুস্পষ্ট বড় স্পাইরাকল",
          "গভীর সমুদ্রের প্রজাতিতে পেটের নিচে আলো জ্বালানো ফটোফোর বিদ্যমান"
        ]
      }
    },
    habitat: {
      en: "Bathyal continental slopes, deep-sea trenches, and cold-temperate continental shelf seabeds down to depths exceeding 4,000 meters.",
      bn: "মহীঢাল, গভীর সমুদ্রের তলদেশ এবং নাতিশীতোষ্ণ মহীসোপান, যা ৪,০০০ মিটারেরও বেশি গভীরতায় বিস্তৃত।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Benthic scavengers and mesopredators in the deep aphotic zone, controlling deep-sea teleost and cephalopod communities.",
      bn: "আলোকহীন গভীর সমুদ্রের মেথর ও শিকারী; গভীর সমুদ্রের মাছ ও সেফালোপডের সংখ্যা নিয়ন্ত্রণে ভূমিকা রাখে।"
    },
    feeding: {
      en: "Benthic and bathypelagic carnivores consuming small deep-sea squids, bony fishes, crustaceans, and carrion.",
      bn: "তলদেশীয় ও গভীর সমুদ্রের মাংসাশী; ছোট স্কুইড, গভীরের মাছ, কাঁকড়া এবং তলদেশের মৃতদেহ খায়।"
    },
    reproduction: {
      en: "Yolk-sac viviparity (ovoviviparity) with prolonged gestation periods (up to two years in Squalus acanthias, the longest known among non-mammalian vertebrates).",
      bn: "কুসুমথলিযুক্ত জরায়ুজ প্রসব (ওভোভিভিপ্যারাস); এদের গর্ভধারণ কাল অত্যন্ত দীর্ঘ (স্পাইনি ডগফিশে প্রায় দুই বছর যা অ-স্তন্যপায়ী প্রাণীদের মধ্যে দীর্ঘতম)।"
    },
    distribution: {
      en: "Cosmopolitan from polar seas to tropical bathyal depths. Occurs in the deep offshore canyons (Swatch of No Ground) of the Bay of Bengal.",
      bn: "মেরু অঞ্চল থেকে ক্রান্তীয় গভীর সমুদ্র পর্যন্ত বিশ্বব্যাপী বিস্তৃত। বঙ্গোপসাগরের সোয়াচ অব নো গ্রাউন্ডের গভীর খাতে এদের উপস্থিতি রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Squalidae",
        commonEn: "Spurdog / Dogfish Sharks",
        commonBn: "স্পারডগ বা কাঁটাযুক্ত ডগফিশ গোত্র",
        diagnosticEn: "Both dorsal fins bearing stout spines, teeth similar in upper and lower jaws.",
        diagnosticBn: "উভয় পৃষ্ঠপাখনায় ধারালো কাঁটা বিদ্যমান, উভয় চোয়ালে একই রকম দাঁত।"
      },
      {
        name: "Etmopteridae",
        commonEn: "Lanternsharks",
        commonBn: "লণ্ঠন হাঙ্গর গোত্র",
        diagnosticEn: "Small deep-sea sharks with dense ventral bioluminescent light organs.",
        diagnosticBn: "গভীর সমুদ্রের ছোট হাঙ্গর যাদের পেটের নিচে আলোক উৎপন্নকারী অঙ্গ থাকে।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Squalus, Etmopterus, Centrophorus, Somniosus, and Dalatias. Binomials: Squalus acanthias Linnaeus, 1758 and Somniosus microcephalus (Bloch & Schneider, 1801).",
      bn: "প্রধান গণ: Squalus, Etmopterus, Centrophorus, Somniosus এবং Dalatias। বৈজ্ঞানিক নাম: Squalus acanthias Linnaeus, 1758 এবং Somniosus microcephalus (Bloch & Schneider, 1801)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Spiny Dogfish (Squalus acanthias), Greenland Shark (Somniosus microcephalus), Velvet Belly Lanternshark (Etmopterus spinax), and Leafscale Gulper Shark (Centrophorus squamosus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: স্পাইনি ডগফিশ (Squalus acanthias), গ্রিনল্যান্ড হাঙ্গর (Somniosus microcephalus), ভেলভেট লণ্ঠন হাঙ্গর (Etmopterus spinax) এবং গালপার হাঙ্গর (Centrophorus squamosus)।"
    },
    additionalInformation: {
      en: "Greenland Shark (Somniosus microcephalus) has been scientifically validated to live for over 400 years, making it the longest-lived vertebrate known to science.",
      bn: "গ্রিনল্যান্ড হাঙ্গর ৪০০ বছরেরও বেশি সময় বাঁচে, যা বিজ্ঞানীদের মতে পৃথিবীর দীর্ঘতম পরমায়ুযুক্ত মেরুদণ্ডী প্রাণী।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Ebert et al. (2013)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-torpediniformes",
    taxonId: "taxon-torpediniformes",
    rank: "order",
    scientificName: "Torpediniformes",
    bengaliName: "বৈদ্যুতিক শঙ্কর বর্গ",
    englishName: "Electric Rays & Numbfishes",
    parentTaxonId: "class-chondrichthyes",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Torpediniformes", nameBn: "বৈদ্যুতিক শঙ্কর বর্গ" }
    ],
    shortDescription: {
      en: "Flattened batoid fishes possessing large kidney-shaped branchial electric organs capable of generating painful defensive and offensive electrical discharges.",
      bn: "চ্যাপ্টা দেহাকৃতির শঙ্কর মাছ, যাদের কানকোর দুই পাশে বৃক্কাকার বৈদ্যুতিক অঙ্গ থাকে যা আত্মরক্ষা ও শিকারে শক্তিশালী বিদ্যুৎ উৎপন্ন করতে পারে।"
    },
    diagnosticCharacteristics: {
      en: "Disc rounded and flabby with loose naked skin devoid of dermal denticles; massive paired kidney-shaped electric organs derived from branchial musculature situated in disc margins; tail stout and muscular with well-developed caudal fin; 0 to 2 dorsal fins; mouth small with feeble teeth; eyes dorsal with large spiracles immediately behind.",
      bn: "আঁইশহীন নরম ও শিথিল ত্বকযুক্ত গোলাকার ডিস্ক; কানকো অঞ্চলে ফুলকা পেশী থেকে উদ্ভূত একজোড়া বিশালাকার বৃক্কাকার বিদ্যুৎ উৎপাদক অঙ্গ; সুগঠিত পুচ্ছপাখনাযুক্ত শক্তিশালী লেজ; ০-২টি পৃষ্ঠপাখনা; ছোট মুখ ও দুর্বল দাঁত; চোখের ঠিক পেছনে বড় স্পাইরাকল বিদ্যমান।",
      keyFeatures: {
        en: [
          "Kidney-shaped electrogenic organs derived from modified branchial muscle columns",
          "Voltage output ranging from 8 volts up to 220 volts in large torpedoes",
          "Smooth, scaleless skin entirely lacking dermal denticles or thorns",
          "Thick, fleshy tail supporting a functional paddle-like caudal fin"
        ],
        bn: [
          "ফুলকা পেশী থেকে পরিবর্তিত বৃক্কাকার শক্তিশালী বৈদ্যুতিক অঙ্গ",
          "৮ ভোল্ট থেকে সর্বোচ্চ ২২০ ভোল্ট পর্যন্ত বিদ্যুৎ উৎপাদনের ক্ষমতা",
          "সম্পূর্ণ আঁইশ ও কাঁটাহীন মসৃণ ত্বক",
          "সুগঠিত পুচ্ছপাখনাযুক্ত মাংসল ও শক্ত লেজ"
        ]
      }
    },
    habitat: {
      en: "Benthic muddy, sandy, or coral shelf bottoms, ranging from intertidal shallow bays down to bathyal depths of 1,000 meters.",
      bn: "উপকূলীয় বালুকাময়, কর্দমাক্ত বা প্রবালীয় তলদেশ থেকে শুরু করে ১,০০০ মিটার গভীর সামুদ্রিক খাত।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Nocturnal ambush benthic predators in neritic lagoons and shelf ecosystems, immobilizing bottom fishes and crustaceans with electrical shocks.",
      bn: "উপকূলীয় ও মহীসোপান অঞ্চলে নিশাচর শিকারী; বৈদ্যুতিক শক দিয়ে তলদেশের মাছ ও ক্রাস্টাশিয়ান নিস্তেজ করে শিকার করে।"
    },
    feeding: {
      en: "Ambush predators using high-voltage bioelectric stunning to incapacitate live teleosts, worms, and crabs before swallowing them whole.",
      bn: "বালিতে লুকিয়ে থেকে শক্তিশালী বিদ্যুৎ চমক দিয়ে জীবন্ত মাছ ও কাঁকড়াকে অবশ করে আস্ত গিলে খায়।"
    },
    reproduction: {
      en: "Aplacental viviparity (ovoviviparity), with embryos nourished primarily by yolk and uterine secretions (histotroph).",
      bn: "অমরাহীন জরায়ুজ প্রসব (ওভোভিভিপ্যারাস); ভ্রূণ কুসুমথলি ও জরায়ুর নিঃসরণ (হিস্টোট্রফ) থেকে পুষ্টি পায়।"
    },
    distribution: {
      en: "Widespread in tropical and warm-temperate seas. Verified along Cox's Bazar coast, Saint Martin's Island, and Sundarbans offshore shelf.",
      bn: "গ্রীষ্মমন্ডলীয় ও উষ্ণ সাগরে বিস্তৃত। কক্সবাজার, সেন্ট মার্টিন দ্বীপ এবং সুন্দরবনের বাইরের মহীসোপানে এদের উপস্থিতি রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Torpedinidae",
        commonEn: "Torpedo Electric Rays",
        commonBn: "টরপেডো বৈদ্যুতিক শঙ্কর গোত্র",
        diagnosticEn: "Disc truncated anteriorly, mouth broadly arched, high-voltage capacity (up to 220V).",
        diagnosticBn: "সামনের দিকে কিছুটা খাঁজযুক্ত ডিস্ক, ধনুকের মতো বাঁকানো মুখ, উচ্চ ভোল্টেজ উৎপাদনের সক্ষমতা।"
      },
      {
        name: "Narcinidae",
        commonEn: "Numbfishes",
        commonBn: "অবশকারী শঙ্কর গোত্র",
        diagnosticEn: "Rostrum supported by cartilage, deep groove around mouth, moderate voltage discharges.",
        diagnosticBn: "তরুণাস্থি দ্বারা সমর্থিত তুন্ড, মুখের চারপাশে গভীর খাঁজ, মাঝারি ধরনের ভোল্টেজ ক্ষরণ।"
      }
    ],
    scientificNamesSummary: {
      en: "Prominent genera: Torpedo, Narcine, Narke, and Tetronarce. Binomials: Narcine timlei (Bloch & Schneider, 1801) and Torpedo marmorata Risso, 1810.",
      bn: "প্রধান গণ: Torpedo, Narcine, Narke এবং Tetronarce। বৈজ্ঞানিক নাম: Narcine timlei (Bloch & Schneider, 1801) এবং Torpedo marmorata Risso, 1810।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Black-spotted Electric Ray (Narcine timlei), Marbled Electric Ray (Torpedo marmorata), Atlantic Torpedo (Tetronarce nobiliana), and Onefin Electric Ray (Narke dipterygia).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কালো-ফোঁটা বৈদ্যুতিক শঙ্কর (Narcine timlei), মার্বেল বৈদ্যুতিক শঙ্কর (Torpedo marmorata), আটলান্টিক টরপেডো (Tetronarce nobiliana) এবং একপাখনা বৈদ্যুতিক শঙ্কর (Narke dipterygia)।"
    },
    additionalInformation: {
      en: "Narcine timlei is native to the northern Bay of Bengal and frequently landed by coastal artisanal shrimp trawlers off Cox's Bazar.",
      bn: "কালো-ফোঁটা বৈদ্যুতিক শঙ্কর (Narcine timlei) উত্তর বঙ্গোপসাগরের স্থানীয় প্রজাতি এবং কক্সবাজার উপকূলে ট্রলারের জালে মাঝে মাঝে ধরা পড়ে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Carvalho (1999)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-rajiformes",
    taxonId: "taxon-rajiformes",
    rank: "order",
    scientificName: "Rajiformes",
    bengaliName: "স্কেট বর্গ",
    englishName: "Skates",
    parentTaxonId: "class-chondrichthyes",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Rajiformes", nameBn: "স্কেট বর্গ" }
    ],
    shortDescription: {
      en: "Flattened batoids with a rhombic pectoral disc, slender tail lacking a serrated stinging barb, bilobed pelvic fins, and exclusively oviparous reproduction with horny egg capsules.",
      bn: "রম্বসাকৃতির চ্যাপ্টা দেহবিশিষ্ট শঙ্কর যাদের লেজে কোনো বিষাক্ত কাঁটা থাকে না, খণ্ডিত শ্রোণীপাখনা এবং শক্ত চারকোনা ডিমের খোলস প্রসবকারী।"
    },
    diagnosticCharacteristics: {
      en: "Disc distinctly rhomboid; tail slender and typically bearing rows of thorns or denticles along midline, but completely lacking a serrated venomous stinging barb; pelvic fins distinctly bilobed; two small dorsal fins positioned near the tip of tail; caudal fin reduced to small fleshy fold; strictly oviparous laying rectangular horn-shelled egg cases with corner tendrils ('mermaid's purses').",
      bn: "সুস্পষ্ট রম্বসাকার ডিস্ক; সরু লেজ যার মাঝবরাবর কাঁটার সারি থাকে কিন্তু কোনো বিষাক্ত ডাঁশ বা স্টিং থাকে না; শ্রোণীপাখনা দ্বিখণ্ডিত; লেজের ডগায় দুটি ক্ষুদ্র পৃষ্ঠপাখনা; পুচ্ছপাখনা ক্ষুদ্র ভাঁজে পরিণত; ডিম্বপ্রসবকারী এবং চারকোণায় আঁকশিযুক্ত শক্ত চারকোনা ডিম পাড়ে।"
      ,
      keyFeatures: {
        en: [
          "Complete absence of a serrated stinging barb on the tail",
          "Distinctly bilobed pelvic fins divided into anterior and posterior lobes",
          "Strictly oviparous producing keratinous rectangular egg cases with corner horns",
          "Weak electrogenic organs in lateral tail muscles used for communication"
        ],
        bn: [
          "লেজে কোনো বিষাক্ত বা খাঁজযুক্ত দংশক কাঁটার অনুপস্থিতি",
          "দ্বিখণ্ডিত শ্রোণীপাখনা (অগ্র ও পশ্চাৎ ভাগে বিভক্ত)",
          "চারকোণায় হুকযুক্ত চারকোনা শক্ত খোলসের ডিম পাড়ে",
          "লেজের মাংসপেশীতে যোগাযোগের জন্য দুর্বল বৈদ্যুতিক অঙ্গের উপস্থিতি"
        ]
      }
    },
    habitat: {
      en: "Cold-temperate to subpolar continental shelves and deep bathyal waters; less abundant in shallow tropical waters.",
      bn: "শীতল-নাতিশীতোষ্ণ এবং মেরু অঞ্চলের মহীসোপান ও গভীর সামুদ্রিক তলদেশ; অগভীর ক্রান্তীয় সাগরে এদের সংখ্যা সীমিত।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Benthic predators churning marine sediment and preying upon burrowing infauna and bottom-dwelling crustaceans.",
      bn: "সমুদ্রের তলদেশের বালি খুঁড়ে পুষ্টি ও শিকার খোঁজা শিকারী; তলদেশের কাঁকড়া ও কৃমি খেয়ে ভারসাম্য রাখে।"
    },
    feeding: {
      en: "Benthic carnivores crushing hard-shelled molluscs, crabs, polychaete worms, and small demersal teleosts using pavement-like dentition.",
      bn: "চ্যাপ্টা ও মজবুত দাঁতের প্লেট দিয়ে শক্ত খোলসযুক্ত শামুক, কাঁকড়া ও তলদেশীয় মাছ চিবিয়ে খায়।"
    },
    reproduction: {
      en: "Strictly oviparous: females deposit rectangular collagenous egg capsules on the seafloor where embryos develop over 4 to 15 months before hatching.",
      bn: "সম্পূর্ণ ডিম্বপ্রসবকারী; শক্ত কোলাজেনাস খোলসের ভেতর ডিম পাড়ে যা সমুদ্রের তলদেশে ৪ থেকে ১৫ মাস বৃদ্ধির পর ফুটে বের হয়।"
    },
    distribution: {
      en: "Worldwide, showing highest biodiversity in temperate and cold bathyal seas. Deep waters of the northern Indian Ocean and Bay of Bengal.",
      bn: "বিশ্বব্যাপী বিস্তৃত হলেও শীতল ও গভীর সাগরে সর্বাধিক বৈচিত্র্যময়। উত্তর ভারত মহাসাগর ও গভীর বঙ্গোপসাগরে এদের বিস্তৃতি রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Rajidae",
        commonEn: "Hardnose Skates",
        commonBn: "শক্তনাক স্কেট গোত্র",
        diagnosticEn: "Stiff rostral cartilage, rhombic disc, bilobed pelvic fins, rows of thorns along tail.",
        diagnosticBn: "শক্ত রোস্ট্রাল তরুণাস্থি, রম্বসাকার ডিস্ক, দ্বিখণ্ডিত শ্রোণীপাখনা, লেজে কাঁটার সারি।"
      },
      {
        name: "Anacanthobatidae",
        commonEn: "Legskates",
        commonBn: "পায়ের মতো পাখনাবিশিষ্ট স্কেট গোত্র",
        diagnosticEn: "Anterior pelvic lobe modified into slender leg-like walking appendage.",
        diagnosticBn: "শ্রোণীপাখনার অগ্রভাগ সরু পায়ের মতো রূপান্তরিত যা দিয়ে এরা তলদেশে হাঁটে।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Raja, Dipturus, Amblyraja, and Rostroraja. Binomials: Raja clavata Linnaeus, 1758 and Dipturus batis (Linnaeus, 1758).",
      bn: "প্রধান গণ: Raja, Dipturus, Amblyraja এবং Rostroraja। বৈজ্ঞানিক নাম: Raja clavata Linnaeus, 1758 এবং Dipturus batis (Linnaeus, 1758)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Thornback Ray (Raja clavata), Common Skate (Dipturus batis), Starry Skate (Amblyraja radiata), and White Skate (Rostroraja alba).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কাঁটাওয়ালা স্কেট (Raja clavata), সাধারণ স্কেট (Dipturus batis), তারাময় স্কেট (Amblyraja radiata) এবং সাদা স্কেট (Rostroraja alba)।"
    },
    additionalInformation: {
      en: "Rajiformes represents one of the few entirely oviparous batoid orders. Their empty egg capsules frequently wash ashore on beaches worldwide as 'mermaid's purses'.",
      bn: "স্কেট শঙ্কর মাছের একমাত্র সম্পূর্ণ ডিম্বপ্রসবকারী বর্গ। এদের ফাঁকা ডিমের খোলস সৈকতে ভেসে আসে যাকে 'মারমেইডস পার্স' বলা হয়।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); McEachran & Aschliman (2004)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-myliobatiformes",
    taxonId: "taxon-myliobatiformes",
    rank: "order",
    scientificName: "Myliobatiformes",
    bengaliName: "স্টিংরে বা শাপলাপাতা মাছ বর্গ",
    englishName: "Stingrays, Eagle Rays & Manta Rays",
    parentTaxonId: "class-chondrichthyes",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Myliobatiformes", nameBn: "স্টিংরে বা শাপলাপাতা মাছ বর্গ" }
    ],
    shortDescription: {
      en: "Broad-disced batoids characterized by whip-like tails often armed with venomous serrated stinging spines, wing-like pectoral fins, and histotrophic viviparous reproduction.",
      bn: "প্রশস্ত ডিস্কবিশিষ্ট শঙ্কর যাদের চাবুকের মতো লেজে প্রায়ই বিষাক্ত খাঁজকাটা কাঁটা থাকে, ডানার মতো বক্ষপাখনা এবং জরায়ুর পুষ্টির মাধ্যমে বাচ্চা প্রসব করে।"
    },
    diagnosticCharacteristics: {
      en: "Pectoral fins greatly expanded and confluent with sides of head, forming an oval, rhombic, or diamond-shaped disc; tail whip-like or slender, usually bearing 1 to 3 serrated venomous caudal spines on its dorsal surface; dorsal fin single, small, or absent; caudal fin reduced to dorsal/ventral skin folds or absent; spiracles large and dorsal behind eyes; reproduction strictly viviparous with uterine milk (histotroph) secreted by trophonemata.",
      bn: "বক্ষপাখনা মাথার দুই পাশে যুক্ত হয়ে বিশালাকার ডিম্বাকার বা হীরকাকার ডিস্ক গঠন করে; লেজ চাবুকের মতো লম্বা ও সরু যার ওপর ১ থেকে ৩টি বিষাক্ত খাঁজকাটা কাঁটা থাকে; একক ক্ষুদ্র পৃষ্ঠপাখনা বা অনুপস্থিত; পুচ্ছপাখনা ত্বকের ভাঁজে রূপান্তরিত বা অনুপস্থিত; জরায়ুতে থাকা ট্রফোনেমাটার মাধ্যমে তরল দুধসদৃশ হিস্টোট্রফ নিঃসরণ করে জরায়ুজ প্রসব ঘটে।",
      keyFeatures: {
        en: [
          "Whip-like tail armed with one or more serrated venomous defensive spines",
          "Broad wing-like pectoral fins facilitating sinusoidal or flapping propulsion",
          "Viviparity with trophonemata secreting nutrient-rich histotroph (uterine milk)",
          "Crushing dental plates in benthic rays or filter-feeding cephalic lobes in mantas"
        ],
        bn: [
          "লেজের ওপর এক বা একাধিক বিষাক্ত খাঁজকাটা দংশক কাঁটা",
          "ডানার মতো প্রশস্ত পাখনা যা দিয়ে এরা পানিতে ডানা ঝাপটানোর মতো সাঁতার কাটে",
          "জরায়ু থেকে পুষ্টিকর হিস্টোট্রফ দুধ খাইয়ে বাচ্চা প্রসবের উন্নত ব্যবস্থা",
          "শামুক ভাঙার শক্ত দাঁতের প্লেট অথবা ম্যানটাতে ফিল্টার ফিডিং লোব"
        ]
      }
    },
    habitat: {
      en: "Coastal neritic shelves, estuarine mangrove waterways, sandy lagoons, coral reefs, and pelagic open ocean (Mantas).",
      bn: "উপকূলীয় মহীসোপান, ম্যানগ্রোভ মোহনা, বালুকাময় খাঁড়ি, প্রবাল প্রাচীর এবং উন্মুক্ত মহাসাগর (ম্যান্টা রে)।",
      systems: ["marine", "brackish"]
    },
    ecosystem: {
      en: "Key benthic bioturbators aerating marine sediments in the Bay of Bengal, plus pelagic filter feeders regulating coastal plankton blooms.",
      bn: "বঙ্গোপসাগরের তলদেশের বালি ও কাদা আলোড়িত করে পুষ্টি পুনর্ব্যবহারযোগ্য রাখে এবং বিশালাকার ম্যানটা রে সমুদ্রের প্লাঙ্কটন নিয়ন্ত্রণ করে।"
    },
    feeding: {
      en: "Benthic species crush crabs, bivalves, and polychaetes with pavement-like dental plates; mobulids filter-feed on epipelagic krill and zooplankton.",
      bn: "তলদেশের প্রজাতিগুলো শক্ত দাঁতের প্লেট দিয়ে কাঁকড়া ও শামুক চূর্ণ করে খায়; মোবুলিড প্রজাতিগুলো জুপ্লাঙ্কটন ও ক্রিল ছেঁকে খায়।"
    },
    reproduction: {
      en: "Viviparity with histotrophy: developing embryos absorb lipid- and protein-rich uterine milk via vascularized villi (trophonemata) projecting into embryonic spiracles.",
      bn: "হিস্টোট্রফিক জরায়ুজ প্রসব; জরায়ুর ট্রফোনেমাটা থেকে নির্গত আমিষ ও চর্বিসমৃদ্ধ দুধ ভ্রূণের স্পাইরাকলে প্রবেশ করে পুষ্টি যোগায়।"
    },
    distribution: {
      en: "Worldwide in tropical and subtropical marine waters. Abundant throughout the northern Bay of Bengal, Sundarbans coast, and Meghna estuary.",
      bn: "বিশ্বের গ্রীষ্মমন্ডলীয় ও উষ্ণ সাগরে বিস্তৃত। উত্তর বঙ্গোপসাগর, সুন্দরবন উপকূল ও মেঘনা মোহনায় অত্যন্ত প্রাচুর্যময়।"
    },
    importantFamilies: [
      {
        name: "Dasyatidae",
        commonEn: "Whiptail Stingrays",
        commonBn: "শাপলাপাতা মাছ গোত্র",
        diagnosticEn: "Disc oval or rhomboid, whip-like tail longer than disc, serrated venomous spine present.",
        diagnosticBn: "ডিম্বাকার বা রম্বসাকার ডিস্ক, ডিস্কের চেয়ে লম্বা চাবুক লেজ, বিষাক্ত খাঁজকাটা কাঁটাযুক্ত।"
      },
      {
        name: "Mobulidae",
        commonEn: "Manta and Devil Rays",
        commonBn: "ম্যান্টা ও শয়তান মাছ গোত্র",
        diagnosticEn: "Gigantic disc, paddle-like cephalic fins flanking mouth, filter-feeding gill plates.",
        diagnosticBn: "বিশালাকার ডানাবিশিষ্ট দেহ, মুখের দুই পাশে দিকনির্দেশক লোব, প্লাঙ্কটন ছাঁকার ফুলকা প্লেট।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Himantura, Pastinachus, Mobula, Aetobatus, and Gymnura. Binomials: Himantura uarnak (Gmelin, 1789) and Mobula birostris (Walbaum, 1792).",
      bn: "প্রধান গণ: Himantura, Pastinachus, Mobula, Aetobatus এবং Gymnura। বৈজ্ঞানিক নাম: Himantura uarnak (Gmelin, 1789) এবং Mobula birostris (Walbaum, 1792)।"
    },
    examplesSummary: {
      en: "Five verified representative examples: Reticulate Whipray (Himantura uarnak), Cowtail Stingray (Pastinachus sephen), Giant Oceanic Manta (Mobula birostris), Spotted Eagle Ray (Aetobatus narinari), and Longtail Butterfly Ray (Gymnura poecilura).",
      bn: "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: জালিকা শাপলাপাতা (Himantura uarnak), কাউটেল স্টিংরে (Pastinachus sephen), বিশালাকার সমুদ্র ম্যান্টা (Mobula birostris), চিত্রা চিলমাছ (Aetobatus narinari) এবং প্রজাপতি শঙ্কর (Gymnura poecilura)।"
    },
    additionalInformation: {
      en: "Commercially significant in coastal artisanal fisheries across Cox's Bazar and Dublar Char, but several species are heavily threatened by non-selective gillnetting.",
      bn: "কক্সবাজার ও দুবলার চরের উপকূলে শুঁটকি ও মাংসের জন্য অত্যন্ত চাহিদাসম্পন্ন হলেও অসতর্ক ফাঁদ জালের কারণে বহু প্রজাতি সংকটাপন্ন।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024", "ref-iucn-bd-2015"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Last et al. (2016)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-rhinopristiformes",
    taxonId: "taxon-rhinopristiformes",
    rank: "order",
    scientificName: "Rhinopristiformes",
    bengaliName: "করাতমাছ ও গিটারফিশ বর্গ",
    englishName: "Sawfishes, Guitarfishes & Wedgefishes",
    parentTaxonId: "class-chondrichthyes",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Rhinopristiformes", nameBn: "করাতমাছ ও গিটারফিশ বর্গ" }
    ],
    shortDescription: {
      en: "Elongate, shark-like rays possessing a wedge-shaped head, shovel-like snout or elongated saw-like rostrum armed with lateral teeth, two distinct dorsal fins, and a robust swimming tail.",
      bn: "হাঙ্গরসদৃশ দীর্ঘদেহী শঙ্কর মাছ, যাদের মাথা কীলকাকার বা করাতের মতো লম্বা ও দুপাশে দাঁতযুক্ত, পিঠে দুটি সুগঠিত পাখনা এবং শক্তিশালী লেজ বিদ্যমান।"
    },
    diagnosticCharacteristics: {
      en: "Body transitional between sharks and rays: depressed anteriorly with pectoral fins fused to head, but trunk and tail stout, muscular, and shark-like; rostrum extended into a shovel-shaped snout or an elongated blade (rostral saw) bearing transverse rows of modified placoid peg-like teeth set in deep sockets; two large, well-developed dorsal fins positioned behind pelvic fins; gill slits ventral; aplacental viviparity.",
      bn: "হাঙ্গর ও শঙ্করের মধ্যবর্তী শারীরিক গঠন: সম্মুখভাগ চ্যাপ্টা ও বক্ষপাখনা মাথার সাথে যুক্ত, তবে দেহকাণ্ড ও লেজ পেশীবহুল হাঙ্গরের মতো; মুখ বা তুন্ড শাবলের মতো চ্যাপ্টা অথবা গভীর গর্তে বসানো দাঁতযুক্ত করাতের মতো ব্লেডে রূপান্তরিত; দুটি সুগঠিত পৃষ্ঠপাখনা; ফুলকা ছিদ্রগুলো পেটের দিকে; অমরাহীন জরায়ুজ প্রসব।",
      keyFeatures: {
        en: [
          "Elongated rostrum modified into a tooth-bearing saw (Pristidae) or wedge-like shovel (Guitarfishes)",
          "Shark-like muscular posterior body and heterocercal or bilobed caudal fin",
          "Two large, well-separated dorsal fins lacking spines",
          "Ventral gill slits positioning them firmly within Batoidea despite shark-like silhouette"
        ],
        bn: [
          "করাতের মতো ধারালো দাঁতযুক্ত ব্লেড (করাতমাছ) বা বেলচার মতো তুন্ড (গিটারফিশ)",
          "হাঙ্গরসদৃশ শক্তিশালী পেশীবহুল লেজ ও পুচ্ছপাখনা",
          "কাঁটাহীন দুটি সুস্পষ্ট ও উন্নত পৃষ্ঠপাখনা",
          "হাঙ্গরসদৃশ হলেও ফুলকা পেটের দিকে থাকায় এরা মূলত শঙ্কর মাছের অন্তর্ভুক্ত"
        ]
      }
    },
    habitat: {
      en: "Shallow coastal neritic waters, estuarine mudflats, tidal mangrove rivers, and shallow tropical bays; sawfishes frequently ascend inland freshwaters.",
      bn: "অগভীর উপকূলীয় সাগর, মোহনার কাদাভূমি, জোয়ারভাটার ম্যানগ্রোভ নদী এবং অগভীর খাঁড়ি; করাতমাছ প্রায়ই মিষ্টি পানিতে প্রবেশ করে।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Benthic predators using the electrosensory saw to detect and slash schooling fishes or excavate buried crustaceans in coastal muddy estuaries.",
      bn: "তলদেশীয় শিকারী; করাতের ইলেক্ট্রো-সেন্সরের সাহায্যে বালি বা পানিতে লুকিয়ে থাকা মাছ শনাক্ত করে এবং করাত দিয়ে কুপিয়ে শিকার ধরে।"
    },
    feeding: {
      en: "Carnivorous: sawfishes slash laterally into schools of mullets, shads, and sciaenids, stunning or impaling prey before pinning it to the seafloor.",
      bn: "মাংসাশী; করাতমাছ মাছের ঝাঁকের মধ্যে করাত দিয়ে এপাশ-ওপাশ চাবুকের মতো আঘাত করে শিকারকে ক্ষতবিক্ষত করে খায়।"
    },
    reproduction: {
      en: "Aplacental viviparity: embryos nourished by yolk and uterine histotroph; rostral teeth of embryos covered by protective gelatinous sheaths until birth to protect mother.",
      bn: "অমরাহীন জরায়ুজ প্রসব; মাতৃগর্ভকে সুরক্ষায় ভ্রূণের করাতের দাঁতগুলো জন্মের আগ পর্যন্ত একটি নরম জেলির আবরণে মোড়ানো থাকে।"
    },
    distribution: {
      en: "Tropical and warm-temperate coastal waters circumglobally. Historically abundant in the Bay of Bengal, Sundarbans, and Lower Meghna estuary.",
      bn: "বিশ্বের উষ্ণ ও ক্রান্তীয় উপকূলীয় সাগরে বিস্তৃত। বঙ্গোপসাগর, সুন্দরবন ও মেঘনা মোহনায় ঐতিহাসিকভাবে বিখ্যাত।"
    },
    importantFamilies: [
      {
        name: "Pristidae",
        commonEn: "Sawfishes",
        commonBn: "করাতমাছ গোত্র",
        diagnosticEn: "Rostrum greatly elongated into blade with lateral teeth embedded in calcified sockets.",
        diagnosticBn: "তুন্ড দীর্ঘ ব্লেডে রূপান্তরিত যার দুই পাশে শক্ত দাঁত সারিবদ্ধভাবে সাজানো।"
      },
      {
        name: "Rhinobatidae",
        commonEn: "Guitarfishes",
        commonBn: "গিটারফিশ গোত্র",
        diagnosticEn: "Snout pointed and wedge-shaped without teeth, body transitional between shark and ray.",
        diagnosticBn: "তুন্ড সূঁচালো ও কীলকাকার দাঁতহীন, হাঙ্গর ও শঙ্করের মাঝামাঝি শারীরিক গঠন।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Pristis, Anoxypristis, Rhynchobatus, Glaucostegus, and Rhina. Binomials: Pristis pristis (Linnaeus, 1758) and Rhynchobatus djiddensis (Forsskål, 1775).",
      bn: "প্রধান গণ: Pristis, Anoxypristis, Rhynchobatus, Glaucostegus এবং Rhina। বৈজ্ঞানিক নাম: Pristis pristis (Linnaeus, 1758) এবং Rhynchobatus djiddensis (Forsskål, 1775)।"
    },
    examplesSummary: {
      en: "Five verified representative examples: Common Sawfish (Pristis pristis), Narrowsnout Sawfish (Anoxypristis cuspidata), Giant Guitarfish (Rhynchobatus djiddensis), Granulated Guitarfish (Glaucostegus granulatus), and Bowmouth Guitarfish (Rhina ancylostoma).",
      bn: "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: সাধারণ করাতমাছ (Pristis pristis), চিকনমুখ করাতমাছ (Anoxypristis cuspidata), দানব গিটারফিশ (Rhynchobatus djiddensis), দানাদার গিটারফিশ (Glaucostegus granulatus) এবং ধনুকমুখ গিটারফিশ (Rhina ancylostoma)।"
    },
    additionalInformation: {
      en: "All sawfishes (Pristidae) are critically endangered worldwide. Pristis pristis was historically caught in the Sundarbans and Chittagong coast, but populations have collapsed due to gillnet entanglement.",
      bn: "সকল করাতমাছ আন্তর্জাতিকভাবে মহাবিপন্ন। বাংলাদেশে সুন্দরবন ও চট্টগ্রাম উপকূলে একসময় প্রচুর পাওয়া যেত, কিন্তু জালে জড়িয়ে এরা প্রায় বিলুপ্তির মুখে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024", "ref-iucn-bd-2015"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Last et al. (2016)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-chimaeriformes",
    taxonId: "taxon-chimaeriformes",
    rank: "order",
    scientificName: "Chimaeriformes",
    bengaliName: "কাইমেরা বা ভুতুড়ে হাঙ্গর বর্গ",
    englishName: "Chimaeras, Ghost Sharks & Rabbitfishes",
    parentTaxonId: "class-chondrichthyes",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Holocephali", nameBn: "হোলোসেফালি" },
      { rank: "order", name: "Chimaeriformes", nameBn: "কাইমেরা বা ভুতুড়ে হাঙ্গর বর্গ" }
    ],
    shortDescription: {
      en: "Deep-sea cartilaginous fishes of subclass Holocephali with smooth scaleless skin, an upper jaw fused to the skull (holostylic), crushing tooth-plates, and a single gill opening covered by a soft opercular flap.",
      bn: "হোলোসেফালি উপশ্রেণীর গভীর সমুদ্রের তরুণাস্থিময় মাছ, যাদের ত্বক আঁইশহীন, খুলির সাথে উপরের চোয়াল সম্পূর্ণ জোড়া লাগানো, পেষণকারী দাঁতের প্লেট এবং একক অপারকুলামযুক্ত ফুলকা ছিদ্র রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Holostylic jaw suspension (palatoquadrate completely fused to neurocranium); four pairs of internal gill slits opening into a single chamber covered by a fleshy opercular flap with one external aperture; permanent crushing tooth plates (2 pairs upper, 1 pair lower) lacking continuous replacement; first dorsal fin armed with a long, erect, often venomous spine; body scaleless and smooth; males possess cephalic clasper (tentaculum) on forehead in addition to pelvic claspers.",
      bn: "খুলির সাথে চোয়ালের সম্পূর্ণ সংমিশ্রণ (হোলোস্টাইলিক); ৪ জোড়া ফুলকা ছিদ্র একটি প্রকোষ্ঠে উন্মুক্ত এবং নরম অপারকুলাম দিয়ে ঢাকা একক বাহ্যিক ছিদ্রযুক্ত; ৩ জোড়া স্থায়ী পেষণ দাঁতের প্লেট যা প্রতিস্থাপিত হয় না; প্রথম পৃষ্ঠপাখনার সাথে দীর্ঘ খাড়া বিষাক্ত কাঁটা; আঁইশহীন মসৃণ ত্বক; পুরুষদের মাথায় বিশেষ ধারণক্ষম অঙ্গ (টেন্টাকুলাম) থাকে।",
      keyFeatures: {
        en: [
          "Upper jaw solidly fused to the braincase (holostylic suspension)",
          "Single external opercular gill aperture covering four internal slits",
          "Permanent non-replaceable crushing dental plates instead of individual shedding teeth",
          "Frontal cephalic tentaculum clasper on forehead of adult males"
        ],
        bn: [
          "করোটিকার সাথে উপরের চোয়ালের সম্পূর্ণ দৃঢ় সংমিশ্রণ",
          "চারটি অভ্যন্তরীণ ফুলকা ছিদ্রকে আবৃতকারী একক বাহ্যিক অপারকুলাম ছিদ্র",
          "ঝরে পড়ার পরিবর্তে স্থায়ী ও শক্ত পেষণ দাঁতের প্লেট",
          "প্রাপ্তবয়স্ক পুরুষ মাছের কপালে বিশেষ ক্ল্যাসপার বা টেন্টাকুলাম"
        ]
      }
    },
    habitat: {
      en: "Deep-sea bathyal continental slopes, submarine ridges, cold-temperate continental shelves, and oceanic trenches from 200 to over 3,000 meters.",
      bn: "গভীর সমুদ্রের মহীঢাল, শৈলশিরা, নাতিশীতোষ্ণ মহীসোপান এবং ২০০ থেকে ৩,০০০ মিটারের বেশি গভীর সামুদ্রিক গিরিখাত।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Specialized benthic deep-water predators utilizing sensory ampullary pores on snout to navigate and forage in complete darkness.",
      bn: "গভীর সমুদ্রের তলদেশীয় শিকারী; তুন্ডে থাকা সংবেদনশীল অঙ্গের সাহায্যে সম্পূর্ণ অন্ধকারে তলদেশের প্রাণীদের শনাক্ত করে।"
    },
    feeding: {
      en: "Durophagous carnivores: crushing hard-shelled benthic molluscs, sea urchins, crabs, and brittle stars with their heavy tooth plates.",
      bn: "শক্ত খোলসভোজী মাংসাশী; ভারী ও শক্ত দাঁতের প্লেট দিয়ে সমুদ্রের তলদেশের শামুক, অর্চিন ও শক্ত কাঁকড়া গুঁড়িয়ে খায়।"
    },
    reproduction: {
      en: "Strictly oviparous: females lay large elongated ribbed keratinous egg capsules with lateral feathery fins, which incubate on deep ocean sediments for up to 12 months.",
      bn: "সম্পূর্ণ ডিম্বপ্রসবকারী; শক্ত কেরাটিনের লম্বা খাঁজযুক্ত ডিমের খোলস পাড়ে যা সমুদ্রের তলদেশে প্রায় ১২ মাস ধরে ফুটে বের হয়।"
    },
    distribution: {
      en: "Worldwide in deep temperate and tropical marine waters. Recorded from deep offshore trenches of the northern Indian Ocean.",
      bn: "বিশ্বের গভীর মহাসাগরে বিস্তৃত। উত্তর ভারত মহাসাগরের গভীর সামুদ্রিক খাদে এদের নির্ভরযোগ্য নথি রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Chimaeridae",
        commonEn: "Shortnose Chimaeras / Rabbitfishes",
        commonBn: "ছোটনাক কাইমেরা গোত্র",
        diagnosticEn: "Snout short and rounded, venomous first dorsal spine, diphycercal or filament tail.",
        diagnosticBn: "ছোট ও গোলাকার তুন্ড, প্রথম পৃষ্ঠপাখনার গোড়ায় বিষাক্ত কাঁটা, সুতোর মতো সরু লেজ।"
      },
      {
        name: "Callorhinchidae",
        commonEn: "Ploughnose Chimaeras / Elephant Sharks",
        commonBn: "লাঙলমুখ কাইমেরা গোত্র",
        diagnosticEn: "Flexible hoe-shaped hook on tip of snout used to probe seafloor for buried prey.",
        diagnosticBn: "তুন্ডের ডগায় লাঙলের মতো বাঁকানো নমনীয় হুক যা দিয়ে এরা বালির তলদেশে শিকার খোঁজে।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Chimaera, Hydrolagus, Callorhinchus, and Harriotta. Binomials: Chimaera monstrosa Linnaeus, 1758 and Callorhinchus milii Bory de Saint-Vincent, 1823.",
      bn: "প্রধান গণ: Chimaera, Hydrolagus, Callorhinchus এবং Harriotta। বৈজ্ঞানিক নাম: Chimaera monstrosa Linnaeus, 1758 এবং Callorhinchus milii Bory de Saint-Vincent, 1823।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Rabbitfish (Chimaera monstrosa), Spotted Ratfish (Hydrolagus colliei), Elephant Shark / Australian Ghost Shark (Callorhinchus milii), and Longnose Chimaera (Harriotta raleighana).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: খরগোশ মাছ (Chimaera monstrosa), চিত্রা র‍্যাটফিশ (Hydrolagus colliei), হাতি হাঙ্গর বা অস্ট্রেলীয় ভুতুড়ে হাঙ্গর (Callorhinchus milii) এবং লম্বানাক কাইমেরা (Harriotta raleighana)।"
    },
    additionalInformation: {
      en: "Chimaeriformes represents an ancient evolutionary divergence from sharks and rays dating back over 400 million years to the Devonian. No native shallow-water records exist in Bangladesh.",
      bn: "কাইমেরা ৪০০ মিলিয়ন বছর পূর্বে ডেভোনিয়ান যুগে হাঙ্গর ও শঙ্কর থেকে পৃথক হয়ে যাওয়া প্রাচীনতম বংশধারা। বাংলাদেশে অগভীর জলে এদের কোনো উপস্থিতি নেই।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Didier (1995)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // =========================================================================
  // ACTINOPTERYGII (14 Missing Orders)
  // =========================================================================
  {
    id: "order-polypteriformes",
    taxonId: "taxon-polypteriformes",
    rank: "order",
    scientificName: "Polypteriformes",
    bengaliName: "বিচির ও রিডফিশ বর্গ",
    englishName: "Bichirs & Reedfishes",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "order", name: "Polypteriformes", nameBn: "বিচির ও রিডফিশ বর্গ" }
    ],
    shortDescription: {
      en: "The most primitive surviving order of ray-finned fishes, characterized by a series of 5 to 18 dorsal finlets (each supported by a rigid spine), thick rhomboid ganoid armor, and functional paired ventral lungs.",
      bn: "রশ্মিপাখনাযুক্ত মাছের সর্বাধিক আদিম জীবিত বর্গ, যাদের পিঠে ৫ থেকে ১৮টি ছোট ছোট পাখনাংশ (প্রতিটি শক্ত কাঁটাসহ), ভারী গ্যানয়েড আঁইশের বর্ম এবং কার্যকরী জোড়া ফুসফুস রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Dorsal fin divided into a series of 5 to 18 independent flag-like finlets, each bearing a stout spine and branched rays; body encased in heavy, interlocking rhomboid ganoid scales coated with ganoine; paired pectoral fins supported by fleshy muscular bases with internal radials; functional paired lungs connected to the ventral floor of the oesophagus allowing obligate air-breathing; spiracles present on top of head.",
      bn: "পৃষ্ঠপাখনা ৫ থেকে ১৮টি পৃথক পতাকাসদৃশ পাখনাংশে বিভক্ত যার প্রতিটিতে শক্ত কাঁটা ও রশ্মি থাকে; দেহ ভারী খাঁজযুক্ত রম্বসাকার গ্যানয়েড আঁইশের বর্মে আবৃত; বক্ষপাখনার গোড়া মাংসল ও পেশীবহুল; খাদ্যনালীর অঙ্কীয় তলে যুক্ত কার্যকরী জোড়া ফুসফুস যা সরাসরি বাতাস থেকে শ্বাস নিতে সক্ষম; মাথার উপরে স্পাইরাকল বিদ্যমান।",
      keyFeatures: {
        en: [
          "Dorsal fin composed of 5–18 separate finlets each with an erectile spine",
          "Heavy interlocking rhomboid ganoid scales forming protective body armor",
          "Functional paired ventral lungs allowing obligate aerial respiration",
          "Fleshy, lobe-like pectoral fin bases with unique actinopterygian skeleton"
        ],
        bn: [
          "পৃষ্ঠপাখনায় ৫-১৮টি পৃথক কাঁটাযুক্ত ক্ষুদ্র পাখনাংশ",
          "ভারী ও পরস্পরের সাথে যুক্ত রম্বসাকার গ্যানয়েড আঁইশের বর্ম",
          "বাতাস থেকে শ্বাস নেওয়ার জন্য কার্যকরী জোড়া ফুসফুস",
          "মাংসল ও লতিযুক্ত বক্ষপাখনার গোড়া"
        ]
      }
    },
    habitat: {
      en: "Tropical freshwater rivers, floodplains, sluggish swamps, and weed-choked river margins of Central and West Africa.",
      bn: "মধ্য ও পশ্চিম আফ্রিকার গ্রীষ্মমন্ডলীয় মিঠাপানির নদী, প্লাবনভূমি, ধীরগতির জলাভূমি ও উদ্ভিদে পূর্ণ নদীর খাঁড়ি।",
      systems: ["freshwater"]
    },
    ecosystem: {
      en: "Benthic nocturnal predators in stagnant, deoxygenated tropical freshwater marshes, surviving extreme hypoxia through continuous atmospheric lung ventilation.",
      bn: "অক্সিজেনহীন গ্রীষ্মমন্ডলীয় জলাভূমির তলদেশীয় নিশাচর শিকারী; বাতাসে শ্বাস নেওয়ার ক্ষমতার কারণে তীব্র প্রতিকূল পরিবেশেও টিকে থাকে।"
    },
    feeding: {
      en: "Carnivorous: stalker ambush predators consuming small fishes, aquatic frogs, freshwater crustaceans, and insect larvae.",
      bn: "মাংসাশী; পানির তলদেশে ধীরে ধীরে এগিয়ে গিয়ে শিকারকে মুখে পুরে নেয়, খাদ্য হিসেবে ছোট মাছ, ব্যাঙ ও জলজ পোকা গ্রহণ করে।"
    },
    reproduction: {
      en: "External fertilization with courtship dances; males cup anal fin to fertilize adhesive eggs deposited on dense submerged vegetation; larvae possess prominent external branched feathery gills.",
      bn: "বাহ্যিক নিষেক; পুরুষ মাছ পায়ুপাখনা বাঁকিয়ে ডিম্বাণু নিষিক্ত করে এবং আঠালো ডিম জলজ উদ্ভিদে আটকে থাকে; লার্ভায় স্পষ্ট বাহ্যিক ফুলকা বিদ্যমান।"
    },
    distribution: {
      en: "Endemic to tropical freshwater river basins of Africa (Nile, Congo, Niger, Lake Chad). Completely absent in Bangladesh naturally.",
      bn: "আফ্রিকার গ্রীষ্মমন্ডলীয় নদী অববাহিকায় (নীল, কঙ্গো, নাইজার) সীমাবদ্ধ। বাংলাদেশের প্রাকৃতিক পরিবেশে সম্পূর্ণ অনুপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Polypteridae",
        commonEn: "Bichirs and Reedfishes",
        commonBn: "বিচির ও রিডফিশ গোত্র",
        diagnosticEn: "Series of dorsal finlets, ganoid scales, paired ventral lungs, larval external gills.",
        diagnosticBn: "পৃষ্ঠপাখনাংশে বিভক্ত পৃষ্ঠপাখনা, গ্যানয়েড আঁইশ, জোড়া ফুসফুস, লার্ভায় বাহ্যিক ফুলকা।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Polypterus and Erpetoichthys. Binomials: Polypterus senegalus Cuvier, 1829 and Erpetoichthys calabaricus Smith, 1865.",
      bn: "প্রধান গণ: Polypterus এবং Erpetoichthys। বৈজ্ঞানিক নাম: Polypterus senegalus Cuvier, 1829 এবং Erpetoichthys calabaricus Smith, 1865।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Senegal Bichir (Polypterus senegalus), Nile Bichir (Polypterus bichir), Reedfish / Ropefish (Erpetoichthys calabaricus), and Saddled Bichir (Polypterus endlicheri).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: সেনেগাল বিচির (Polypterus senegalus), নীল বিচির (Polypterus bichir), রিডফিশ বা রোপফিশ (Erpetoichthys calabaricus) এবং স্যাডলড বিচির (Polypterus endlicheri)।"
    },
    additionalInformation: {
      en: "Polypteriformes forms the sister clade to all other living ray-finned fishes (Actinopteri). Popular in specialized ornamental aquaria worldwide, but strictly non-native to South Asia.",
      bn: "বিচির সকল আধুনিক রশ্মিপাখনাযুক্ত মাছের প্রাচীনতম জীবিত বোন-শাখা। সৌখিন অ্যাকোয়ারিয়ামে এদের পালন করা হলেও বাংলাদেশে কোনো বুনো প্রজাতি নেই।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-acipenseriformes",
    taxonId: "taxon-acipenseriformes",
    rank: "order",
    scientificName: "Acipenseriformes",
    bengaliName: "স্টার্জন ও প্যাডেলফিশ বর্গ",
    englishName: "Sturgeons & Paddlefishes",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "order", name: "Acipenseriformes", nameBn: "স্টার্জন ও প্যাডেলফিশ বর্গ" }
    ],
    shortDescription: {
      en: "Ancient, largely cartilaginous relict fishes characterized by an unconstricted persistent notochord, a heterocercal tail, sensory rostral barbels or rostrum, and five longitudinal rows of bony scutes or naked skin.",
      bn: "প্রাচীন ও মূলত তরুণাস্থিময় অবশেষ মাছ, যাদের স্থায়ী নটোকর্ড, হেটারোসার্কাল লেজ, সংবেদনশীল তুন্ড এবং পাঁচ সারির অস্থিময় স্কিউট বা আঁইশহীন ত্বক রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Internal skeleton secondarily largely cartilaginous; persistent unconstricted notochord lacking vertebral centra; tail heterocercal with an upturned vertebral axis; mouth inferior and protrusible, preceded by sensory barbels (sturgeons) or massive spatulate paddle-like electroreceptive rostrum (paddlefishes); sturgeons bear 5 longitudinal rows of sharp bony scutes along trunk; spiracle present.",
      bn: "অন্তঃকঙ্কাল দ্বিতীয়বার তরুণাস্থিময় রূপ ধারণ করেছে; সেন্ট্রামবিহীন স্থায়ী নটোকর্ড; হেটারোসার্কাল বা অসম পুচ্ছপাখনা; পেটের দিকে অবস্থিত প্রসারিত মুখ, যার সামনে সংবেদনশীল বার্বেল বা বিশালাকার বেলচাসদৃশ সংবেদনশীল তুন্ড থাকে; স্টার্জনের শরীরে ৫ সারির শক্ত অস্থিময় স্কিউট বিদ্যমান; স্পাইরাকল উপস্থিত।",
      keyFeatures: {
        en: [
          "Secondary cartilaginous skeleton and persistent unconstricted notochord",
          "Heterocercal caudal fin resembling that of primitive sharks",
          "Five longitudinal rows of protective bony scutes in Acipenseridae",
          "Inferior protrusible mouth with sensitive barbels or huge electroreceptive paddle"
        ],
        bn: [
          "গৌণ তরুণাস্থিময় কঙ্কাল এবং আজীবন নটোকর্ডের স্থায়িত্ব",
          "হাঙ্গরসদৃশ অসম বা হেটারোসার্কাল পুচ্ছপাখনা",
          "দেহে ৫টি সারিবদ্ধ শক্ত অস্থিময় স্কিউটের উপস্থিতি (স্টার্জনে)",
          "নিচের দিকে অবস্থিত নমনীয় মুখ এবং সংবেদনশীল শুঙ্গ"
        ]
      }
    },
    habitat: {
      en: "Large temperate freshwater rivers, lakes, estuaries, and anadromous coastal marine waters of the Northern Hemisphere.",
      bn: "উত্তর গোলার্ধের নাতিশীতোষ্ণ বৃহৎ মিঠাপানির নদী, হ্রদ, মোহনা এবং পরিযায়ী উপকূলীয় সমুদ্র।",
      systems: ["freshwater", "marine", "brackish"]
    },
    ecosystem: {
      en: "Major benthic detritivores, molluscivores, and pelagic filter-feeders (paddlefishes) in major Holarctic drainage basins.",
      bn: "উত্তর গোলার্ধের নদী অববাহিকায় তলদেশীয় মেথর, শামুকভোজী এবং বিশালাকার প্লাঙ্কটন ফিল্টারকারী মাছ হিসেবে গুরুত্বপূর্ণ।"
    },
    feeding: {
      en: "Sturgeons vacuum benthic invertebrates, insect larvae, molluscs, and small fishes with protrusible tubelike jaws; paddlefishes ram-filter pelagic zooplankton through dense gill rakers.",
      bn: "স্টার্জন টিউবের মতো মুখ দিয়ে তলদেশের শামুক, পোকা ও ছোট মাছ চুষে খায়; প্যাডেলফিশ মুখ হা করে পানির জুপ্লাঙ্কটন ফুলকা চিরুনি দিয়ে ছেঁকে খায়।"
    },
    reproduction: {
      en: "Anadromous or potamodromous broadcast spawners migrating upstream onto fast-flowing gravel shoals; highly adhesive dark eggs (the source of luxury caviar); very late sexual maturity (up to 20 years).",
      bn: "উজানের পাথুরে নদীতে ডিম পাড়া পরিযায়ী মাছ; অত্যন্ত আঠালো কালো ডিম পাড়ে (যা ক্যাভিয়ারের প্রধান উৎস); প্রজননক্ষম হতে বহু বছর (১০-২০ বছর) সময় লাগে।"
    },
    distribution: {
      en: "Holarctic (Eurasia and North America: Caspian, Black Sea, Danube, Mississippi, Yangtze). Completely absent in Bangladesh native biodiversity.",
      bn: "উত্তর গোলার্ধে (কাস্পিয়ান, কৃষ্ণ সাগর, দানিয়ুব, মিসিসিপি ও ইয়াংসিকিয়াং) সীমাবদ্ধ। বাংলাদেশে কোনো দেশীয় প্রজাতি নেই।"
    },
    importantFamilies: [
      {
        name: "Acipenseridae",
        commonEn: "Sturgeons",
        commonBn: "স্টার্জন গোত্র",
        diagnosticEn: "Five rows of bony scutes along body, four sensory barbels anterior to protrusible mouth.",
        diagnosticBn: "দেহে ৫ সারির অস্থিময় স্কিউট, মুখের সামনে ৪টি সংবেদনশীল বার্বেল।"
      },
      {
        name: "Polyodontidae",
        commonEn: "Paddlefishes",
        commonBn: "প্যাডেলফিশ গোত্র",
        diagnosticEn: "Massive flattened paddle-like rostrum packed with ampullary electroreceptors, naked body.",
        diagnosticBn: "ইলেক্ট্রো-রিসেপ্টরে পূর্ণ বিশাল চ্যাপ্টা বেলচাসদৃশ তুন্ড, আঁইশহীন মসৃণ দেহ।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Acipenser, Huso, Scaphirhynchus, and Polyodon. Binomials: Acipenser sturio Linnaeus, 1758, Huso huso (Linnaeus, 1758), and Polyodon spathula (Walbaum, 1792).",
      bn: "প্রধান গণ: Acipenser, Huso, Scaphirhynchus এবং Polyodon। বৈজ্ঞানিক নাম: Acipenser sturio Linnaeus, 1758, Huso huso (Linnaeus, 1758), এবং Polyodon spathula (Walbaum, 1792)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: European Sturgeon (Acipenser sturio), Beluga Sturgeon (Huso huso), American Paddlefish (Polyodon spathula), and Sterlet (Acipenser ruthenus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ইউরোপীয় স্টার্জন (Acipenser sturio), বেলুগা স্টার্জন (Huso huso), আমেরিকান প্যাডেলফিশ (Polyodon spathula) এবং স্টারলেট (Acipenser ruthenus)।"
    },
    additionalInformation: {
      en: "Beluga sturgeon (Huso huso) is one of the largest freshwater fishes in history, reaching over 7 meters in length and over a metric ton. Severely endangered globally due to historic overharvesting for caviar.",
      bn: "বেলুগা স্টার্জন পৃথিবীর অন্যতম বৃহত্তম মিঠাপানির মাছ, যা ৭ মিটারেরও বেশি লম্বা এবং ১ টনের বেশি ভারী হতে পারে। ক্যাভিয়ারের লোভ ও বাঁধ নির্মাণের কারণে এরা মহাবিপন্ন।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Bemis et al. (1997)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-lepisosteiformes",
    taxonId: "taxon-lepisosteiformes",
    rank: "order",
    scientificName: "Lepisosteiformes",
    bengaliName: "গার বর্গ",
    englishName: "Gars",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Lepisosteiformes", nameBn: "গার বর্গ" }
    ],
    shortDescription: {
      en: "Archaic holostean neopterygian fishes armed with heavy, interlocking rhomboid ganoid scales, an elongated beak-like snout with needle-sharp teeth, and a vascularized lung-like swim bladder.",
      bn: "প্রাচীন নিওপটেরিজিয়ান মাছ, যাদের দেহ শক্ত গ্যানয়েড আঁইশের বর্মে আবৃত, লম্বা চঞ্চুর মতো চোয়ালে ধারালো দাঁত এবং শ্বাস নেওয়ার উপযোগী রক্তনালীপূর্ণ পটকা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body elongated, cylindrical, encased in heavy interlocking rhomboid ganoid scales; jaws elongated into a beak armed with sharp needle-like conical teeth; opisthocoelous vertebrae (centrum convex anteriorly, concave posteriorly, unique among living fishes); abbreviate heterocercal caudal fin; dorsal and anal fins placed far back near tail; highly vascularized swim bladder functioning as a respiratory lung.",
      bn: "লম্বা নলাকার দেহ যা পরস্পরের সাথে খাঁজযুক্ত শক্ত গ্যানয়েড আঁইশে ঢাকা; চোয়াল প্রসারিত হয়ে পাখির ঠোঁটের মতো গঠন তৈরি করে যা ধারালো সুইয়ের মতো দাঁতে পূর্ণ; অপিস্থোসেলিক কশেরুকা (কশেরুকার সামনের দিক উত্তল ও পেছনের দিক অবতল, যা জীবিত মাছে অনন্য); খাটো হেটারোসার্কাল লেজ; পিঠ ও পায়ুর পাখনা লেজের খুব কাছে অবস্থিত; রক্তনালীপূর্ণ পটকা যা বাতাসের অক্সিজেন গ্রহণ করতে পারে।",
      keyFeatures: {
        en: [
          "Heavily armored with thick interlocking ganoid scales coated with enameloid ganoine",
          "Elongated jaws with rows of sharp conical teeth adapted for ambush capture",
          "Opisthocoelous vertebral centra unique among living fish lineages",
          "Vascularized physostomous gas bladder enabling obligate aerial breathing in stagnant waters"
        ],
        bn: [
          "শক্ত এনামেলযুক্ত গ্যানয়েড আঁইশের দুর্ভেদ্য বর্ম",
          "শিকার ধরার সুবিধার্থে ধারালো সূঁচালো দাঁতযুক্ত লম্বা চোয়াল",
          "অপিস্থোসেলিক কশেরুকা (অন্য জীবিত মাছে বিরল)",
          "অক্সিজেনহীন পানিতে শ্বাস নিতে সক্ষম রক্তনালীপূর্ণ পটকা"
        ]
      }
    },
    habitat: {
      en: "Sluggish rivers, oxbow lakes, bayous, heavily vegetated swamps, and brackish coastal estuaries of North and Central America.",
      bn: "উত্তর ও মধ্য আমেরিকার ধীরগতির নদী, অশ্বখুরাকৃতি হ্রদ, জলাবদ্ধ খাঁড়ি এবং লোনাপানির মোহনা।",
      systems: ["freshwater", "brackish"]
    },
    ecosystem: {
      en: "Apex and upper-trophic ambush predators in warm, slow-moving floodplains and bayous, utilizing camouflage to stalk waterbirds, teleosts, and crabs.",
      bn: "উষ্ণ জলাভূমি ও প্লাবনভূমির শীর্ষ শিকারী; পানির ওপর কাঠের গুঁড়ির মতো ভেসে থেকে নিঃশব্দে মাছ ও জলচর পাখি শিকার করে।"
    },
    feeding: {
      en: "Voracious piscivores and opportunistic carnivores: floating motionless like logs and striking rapidly sideways to impale fishes, blue crabs, and waterbirds.",
      bn: "হিংস্র মাছখেকো শিকারী; পানিতে কাঠের গুঁড়ির মতো স্থির ভেসে থাকে এবং শিকার কাছে এলে চোখের পলকে মাথা বাঁকিয়ে ধারালো দাঁতে গেঁথে ফেলে।"
    },
    reproduction: {
      en: "Oviparous broadcast spawners in shallow flooded vegetation; green, highly adhesive eggs that are violently toxic to birds, mammals, and humans if ingested.",
      bn: "অগভীর প্লাবনভূমিতে ডিম ছড়ানো ডিম্বপ্রসবকারী; এদের সবুজ ও অত্যন্ত আঠালো ডিম মানুষ ও স্তন্যপায়ী প্রাণীর জন্য অত্যন্ত বিষাক্ত।"
    },
    distribution: {
      en: "Native to North and Central America and Cuba. Strictly non-native in Bangladesh, though occasionally imported illegally for luxury home aquariums.",
      bn: "উত্তর ও মধ্য আমেরিকা এবং কিউবায় সীমাবদ্ধ। বাংলাদেশের প্রাকৃতিক পরিবেশে সম্পূর্ণ অনুপস্থিত (তবে সৌখিন অ্যাকোয়ারিয়ামে কখনো দেখা যায়)।"
    },
    importantFamilies: [
      {
        name: "Lepisosteidae",
        commonEn: "Gars",
        commonBn: "গার গোত্র",
        diagnosticEn: "Elongated snouts with conical teeth, ganoid scales, dorsal and anal fins posterior.",
        diagnosticBn: "লম্বা দাঁতযুক্ত তুন্ড, গ্যানয়েড আঁইশ, দেহের পেছনের দিকে অবস্থিত পাখনা।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Atractosteus and Lepisosteus. Binomials: Atractosteus spatula (Lacepède, 1803) and Lepisosteus osseus (Linnaeus, 1758).",
      bn: "প্রধান গণ: Atractosteus এবং Lepisosteus। বৈজ্ঞানিক নাম: Atractosteus spatula (Lacepède, 1803) এবং Lepisosteus osseus (Linnaeus, 1758)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Alligator Gar (Atractosteus spatula), Longnose Gar (Lepisosteus osseus), Spotted Gar (Lepisosteus oculatus), and Cuban Gar (Atractosteus tristoechus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: অ্যালিগেটর গার (Atractosteus spatula), লম্বানাক গার (Lepisosteus osseus), চিত্রা গার (Lepisosteus oculatus) এবং কিউবান গার (Atractosteus tristoechus)।"
    },
    additionalInformation: {
      en: "Alligator Gar (Atractosteus spatula) can exceed 3 meters in length and 150 kg, possessing a broad double row of upper teeth. Strictly invasive if released into South Asian waterways.",
      bn: "অ্যালিগেটর গার ৩ মিটারেরও বেশি লম্বা ও ১৫০ কেজি ওজনের হতে পারে। এ মাছ বাংলাদেশের প্রাকৃতিক নদী বা জলাশয়ে ছড়িয়ে পড়লে দেশীয় প্রজাতির জন্য মারাত্মক হুমকি।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Wiley (1976)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-amiiformes",
    taxonId: "taxon-amiiformes",
    rank: "order",
    scientificName: "Amiiformes",
    bengaliName: "বোফিন বর্গ",
    englishName: "Bowfins",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Amiiformes", nameBn: "বোফিন বর্গ" }
    ],
    shortDescription: {
      en: "Archaic holostean fishes featuring a long, continuous undulating dorsal fin, a prominent throat gular plate, cycloid scales, a cellular air-breathing gas bladder, and a circular dark caudal spot.",
      bn: "প্রাচীন নিওপটেরিজিয়ান মাছ যাদের পিঠে লম্বা অবিচ্ছিন্ন তরঙ্গায়িত পৃষ্ঠপাখনা, গলার নিচে শক্ত গুলার প্লেট, সাইক্লয়েড আঁইশ এবং লেজের গোড়ায় স্পষ্ট গোলাকার কালো দাগ রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Dorsal fin exceptionally long with 45–50 rays, extending along most of the back and capable of bidirectional undulating locomotion; large single median bony gular plate on the underside of the lower jaw; cycloid scales lacking ganoine; skull heavily armored with thick dermal bones; abbreviate heterocercal tail with a distinctive black eye-spot (ocellus) near upper base in males; vascularized cellular swim bladder enabling aerial respiration.",
      bn: "পৃষ্ঠপাখনা অত্যন্ত দীর্ঘ (৪৫-৫০টি রশ্মিবিশিষ্ট) যা পিঠের বেশিরভাগ অংশ জুড়ে বিস্তৃত এবং সামনে-পেছনে তরঙ্গায়িত সাঁতারে সক্ষম; নিচের চোয়ালের নিচে একক শক্ত অস্থিময় গুলার প্লেট; গ্যানয়েডহীন সাইক্লয়েড আঁইশ; মাথার শক্ত অস্থিময় খুলি; লেজের গোড়ার উপরে উজ্জ্বল কালো চোখের মতো দাগ (ওসেলাস); সরাসরি বাতাস থেকে শ্বাস নেওয়ার উপযোগী রক্তনালীপূর্ণ ফুসফুস-সদৃশ পটকা।",
      keyFeatures: {
        en: [
          "Long continuous dorsal fin with over 45 soft rays for precise undulating swimming",
          "Large bony median gular plate situated between the mandibular rami",
          "Abbreviate heterocercal tail with prominent caudal ocellus in males",
          "Functional cellular gas bladder allowing air-breathing in stagnant waters"
        ],
        bn: [
          "৪৫টির বেশি নরম রশ্মিযুক্ত অবিচ্ছিন্ন লম্বা পৃষ্ঠপাখনা",
          "নিচের চোয়ালের মাঝখানে শক্ত একক অস্থিময় গুলার প্লেট",
          "লেজের গোড়ায় পুরুষ মাছে স্পষ্ট গোলাকার কালো ওসেলাস দাগ",
          "অক্সিজেনহীন জলাশয়ে বাতাস থেকে শ্বাস নেওয়ার পটকা"
        ]
      }
    },
    habitat: {
      en: "Lowland freshwater rivers, sluggish oxbow lakes, swamp bayous, and heavily vegetated backwaters of eastern North America.",
      bn: "উত্তর আমেরিকার পূর্বাঞ্চলের সমতল ভূমির মিঠাপানির নদী, ধীরগতির বাওড়, জলাভূমি এবং জলজ উদ্ভিদে পূর্ণ অববাহিকা।",
      systems: ["freshwater"]
    },
    ecosystem: {
      en: "Voracious nocturnal and crepuscular predator in warm-water wetland ecosystems, enduring extreme seasonal drought and hypoxia by breathing air directly at the surface.",
      bn: "উষ্ণ জলাভূমির নিশাচর শিকারী; চরম খরা ও অক্সিজেনহীন পানিতে সরাসরি বাতাসে শ্বাস নিয়ে বেঁচে থাকে।"
    },
    feeding: {
      en: "Aggressive opportunistic carnivore: preying upon crawfish, teleost fishes, frogs, and aquatic insects using strong conical teeth and suction feeding.",
      bn: "আক্রমণাত্মক মাংসাশী শিকারী; শক্তিশালী দাঁত ও চোষক বল প্রয়োগ করে চিংড়ি, ছোট মাছ, ব্যাঙ ও জলজ পোকা খায়।"
    },
    reproduction: {
      en: "Males construct circular bowl-shaped nests in dense vegetation, ferociously guarding eggs and schooling young fry for weeks with exemplary paternal care.",
      bn: "পুরুষ মাছ জলজ উদ্ভিদের ভেতর গোলাকার বাসা তৈরি করে এবং ডিম ফুটে বের হওয়া পোনাদের কয়েক সপ্তাহ ধরে আক্রমণাত্মকভাবে পাহারা দেয়।"
    },
    distribution: {
      en: "Endemic to eastern and central North America (Mississippi basin, St. Lawrence, Gulf Coast). Strictly zero native occurrence in Bangladesh.",
      bn: "উত্তর আমেরিকার পূর্ব ও মধ্যাঞ্চলে সীমাবদ্ধ। বাংলাদেশে প্রাকৃতিক কোনো প্রজাতি নেই।"
    },
    importantFamilies: [
      {
        name: "Amiidae",
        commonEn: "Bowfins",
        commonBn: "বোফিন গোত্র",
        diagnosticEn: "Long undulating dorsal fin, gular plate on throat, cycloid scales, caudal ocellus.",
        diagnosticBn: "লম্বা তরঙ্গায়িত পৃষ্ঠপাখনা, গলায় গুলার প্লেট, সাইক্লয়েড আঁইশ, পুচ্ছ ওসেলাস।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genus: Amia. Verified living binomials: Amia calva Linnaeus, 1766 and Amia ocellicauda Todd, 1836.",
      bn: "একমাত্র জীবিত গণ: Amia। প্রামাণ্য বৈজ্ঞানিক নাম: Amia calva Linnaeus, 1766 এবং Amia ocellicauda Todd, 1836।"
    },
    examplesSummary: {
      en: "Two verified representative living species: Bowfin (Amia calva) and Eyespot Bowfin (Amia ocellicauda).",
      bn: "দুটি যাচাইকৃত প্রামাণ্য জীবিত প্রজাতি: সাধারণ বোফিন (Amia calva) এবং ওসেলাসযুক্ত বোফিন (Amia ocellicauda)।"
    },
    additionalInformation: {
      en: "Amiiformes is the sole surviving order of the Halecomorphi, representing the closest extant sister lineage to the massive Teleostei clade. Zero living records in Bangladesh.",
      bn: "বোফিন হ্যালিকোমরফি গোষ্ঠীর একমাত্র জীবিত অবশেষ এবং আধুনিক টেলিয়স্ট মাছের সবচেয়ে নিকটবর্তী আত্মীয়। বাংলাদেশে কোনো প্রজাতি নেই।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Grande & Bemis (1998)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-anguilliformes",
    taxonId: "taxon-anguilliformes",
    rank: "order",
    scientificName: "Anguilliformes",
    bengaliName: "বাইম ও মোরে বর্গ (আসল বানমাছ)",
    englishName: "True Eels & Morays",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Anguilliformes", nameBn: "বাইম ও মোরে বর্গ" }
    ],
    shortDescription: {
      en: "Elongated serpentiform teleosts lacking pelvic fins, with dorsal, caudal, and anal fins confluent, embedded or absent scales, and passing through a transparent pelagic leptocephalus larval phase.",
      bn: "সর্পিল দীর্ঘদেহী টেলিয়স্ট মাছ যাদের শ্রোণীপাখনা সম্পূর্ণ অনুপস্থিত, পিঠ-লেজ-পায়ুপাখনা অবিচ্ছিন্নভাবে যুক্ত, ত্বক পিচ্ছিল ও আঁইশহীন এবং স্বচ্ছ লেপ্টোসেফালাস লার্ভা দশা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body elongated and cylindrical (serpentiform); pelvic fins and pelvic girdle completely absent in all extant taxa; dorsal and anal fins long and confluent with the caudal fin (or caudal fin lost); scales minute cycloid and embedded in skin or entirely absent; gill openings typically narrow and restricted; maxilla tooth-bearing and entering gape; highly characteristic transparent, leaf-like, pelagic leptocephalus larvae.",
      bn: "সর্পিল ও নলাকার দেহ; শ্রোণীপাখনা ও শ্রোণীচক্রের সম্পূর্ণ অনুপস্থিতি; পৃষ্ঠ ও পায়ুপাখনা পুচ্ছপাখনার সাথে একীভূত হয়ে অবিচ্ছিন্ন কিনারা গঠন করে; অতি সূক্ষ্ম সাইক্লয়েড আঁইশ ত্বকে বসানো থাকে অথবা সম্পূর্ণ অনুপস্থিত; ফুলকা ছিদ্র সরু ও ছোট; পাতা-সদৃশ স্বচ্ছ সামুদ্রিক লেপ্টোসেফালাস লার্ভা দশা বিদ্যমান।",
      keyFeatures: {
        en: [
          "Complete absence of pelvic fins and pelvic girdle (apodal anatomy)",
          "Confluent continuous dorsal, caudal, and anal fins forming a continuous swimming fringe",
          "Distinct leaf-like, transparent marine leptocephalus larval phase",
          "Catadromous life cycle in freshwater eels migrating thousands of miles to ocean abysses"
        ],
        bn: [
          "শ্রোণীপাখনা ও শ্রোণী চক্রের সম্পূর্ণ অনুপস্থিতি (অ্যাপোডাল)",
          "পিঠ, লেজ ও পায়ুপাখনার একীভূত হয়ে অবিচ্ছিন্ন পাখনা গঠন",
          "পাতার মতো চ্যাপ্টা ও কাচের মতো স্বচ্ছ লেপ্টোসেফালাস লার্ভা দশা",
          "ক্যাটাড্রোমাস স্বভাব: মিঠাপানিতে বড় হয়ে ডিম পাড়ার জন্য গভীর সমুদ্রে হাজার মাইল পাড়ি দেওয়া"
        ]
      }
    },
    habitat: {
      en: "Freshwater river potamon, hill streams, tidal mangrove creeks, coastal mudflats, coral reef crevices, and deep bathyal ocean depths.",
      bn: "মিঠাপানির নদী, পাহাড়ি ঝর্ণা, জোয়ারভাটার ম্যানগ্রোভ খাঁড়ি, উপকূলীয় কাদাভূমি, প্রবাল প্রাচীরের গুহা এবং গভীর সমুদ্রের খাত।",
      systems: ["freshwater", "marine", "brackish"]
    },
    ecosystem: {
      en: "Crucial nocturnal predators in freshwater wetlands and marine coral reefs; catadromous freshwater eels transport massive marine-freshwater nutrient subsidies.",
      bn: "মিঠাপানির জলাভূমি ও সামুদ্রিক প্রবাল প্রাচীরের নিশাচর শীর্ষ শিকারী; পরিযায়ী বানমাছ নদী ও সমুদ্রের মধ্যে পুষ্টি প্রবাহের প্রধান মাধ্যম।"
    },
    feeding: {
      en: "Carnivorous: hunting small teleost fishes, crabs, prawns, molluscs, and polychaetes; moray eels possess mobile pharyngeal jaws capable of dragging prey down the oesophagus.",
      bn: "মাংসাশী; ছোট মাছ, চিংড়ি, কাঁকড়া ও কৃমি শিকার করে; মোরে মাছের গলায় অতিরিক্ত গলবিলীয় চোয়াল থাকে যা শিকারকে গলার ভেতর টেনে নেয়।"
    },
    reproduction: {
      en: "Catadromous spawning (in Anguillidae) where adult yellow eels transform into silver eels, migrate to deep ocean trenches, spawn pelagic eggs at depths of 400–1,000 meters, and die.",
      bn: "ক্যাটাড্রোমাস প্রজনন (অ্যাঙ্গুইলিডিতে); প্রাপ্তবয়স্ক বানমাছ নদী ছেড়ে গভীর সমুদ্রে চলে যায়, ৪০০-১,০০০ মিটার গভীরে ডিম পেড়ে মারা যায় এবং ডিম ফুটে লার্ভা আবার নদীতে ফিরে আসে।"
    },
    distribution: {
      en: "Cosmopolitan across tropical, subtropical, and temperate waters. Well represented in Bangladesh freshwaters, Sundarbans, and the Bay of Bengal.",
      bn: "বিশ্বব্যাপী বিস্তৃত। বাংলাদেশের নদী-নালা, সুন্দরবনের মোহনা এবং বঙ্গোপসাগরে প্রচুর প্রজাতি বিদ্যমান।"
    },
    importantFamilies: [
      {
        name: "Anguillidae",
        commonEn: "Freshwater Eels",
        commonBn: "মিঠাপানির বানমাছ গোত্র",
        diagnosticEn: "Catadromous, minute embedded scales, well-developed pectoral fins, confluent median fins.",
        diagnosticBn: "পরিযায়ী বানমাছ, ত্বকে সূক্ষ্ম আঁইশ, বক্ষপাখনা সুগঠিত, লেজের অবিচ্ছিন্ন পাখনা।"
      },
      {
        name: "Muraenidae",
        commonEn: "Moray Eels",
        commonBn: "মোরে বানমাছ গোত্র",
        diagnosticEn: "Pectoral fins completely lost, large mouth with fangs, pharyngeal jaw apparatus.",
        diagnosticBn: "বক্ষপাখনা সম্পূর্ণ অনুপস্থিত, ধারালো দাঁতযুক্ত মুখ, গলবিলীয় অতিরিক্ত চোয়াল।"
      },
      {
        name: "Ophichthidae",
        commonEn: "Snake Eels",
        commonBn: "সাপ-বানমাছ গোত্র",
        diagnosticEn: "Hard, pointed burrowing tail tip lacking caudal fin, sharp conical teeth.",
        diagnosticBn: "কাদায় গর্ত করার শক্ত সূঁচালো লেজ, পুচ্ছপাখনা অনুপস্থিত, ধারালো দাঁত।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Anguilla, Gymnothorax, Pisodonophis, and Conger. Binomials: Anguilla bengalensis (Gray, 1831), Gymnothorax tile (Hamilton, 1822), and Pisodonophis boro (Hamilton, 1822).",
      bn: "প্রধান গণ: Anguilla, Gymnothorax, Pisodonophis এবং Conger। বৈজ্ঞানিক নাম: Anguilla bengalensis (Gray, 1831), Gymnothorax tile (Hamilton, 1822), এবং Pisodonophis boro (Hamilton, 1822)।"
    },
    examplesSummary: {
      en: "Five verified representative examples: Indian Mottled Eel / Tel-Baim (Anguilla bengalensis), Freshwater Moray (Gymnothorax tile), Rice-Paddy Eel / Boro Baim (Pisodonophis boro), European Eel (Anguilla anguilla), and European Conger (Conger conger).",
      bn: "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: তেল বাইম (Anguilla bengalensis), মিঠাপানির মোরে বাইম (Gymnothorax tile), বোরো বাইম (Pisodonophis boro), ইউরোপীয় বানমাছ (Anguilla anguilla) এবং ইউরোপীয় কঙ্গার (Conger conger)।"
    },
    additionalInformation: {
      en: "Indian Mottled Eel (Anguilla bengalensis) is a prized food and medicinal fish in rural Bangladesh, migrating from the Padma-Meghna system into the Indian Ocean abyss to breed.",
      bn: "তেল বাইম (Anguilla bengalensis) বাংলাদেশের গ্রামীণ পুষ্টি ও ঔষধি মাছ হিসেবে অত্যন্ত সমাদৃত; এটি পদ্মা-মেঘনা নদী থেকে ভারত মহাসাগরের অতল খাদে গিয়ে ডিম পাড়ে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024", "ref-rahman-2005"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Inoue et al. (2010)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-gonorynchiformes",
    taxonId: "taxon-gonorynchiformes",
    rank: "order",
    scientificName: "Gonorynchiformes",
    bengaliName: "মিল্কফিশ ও বালিমাছ বর্গ",
    englishName: "Milkfishes & Sandfishes",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Gonorynchiformes", nameBn: "মিল্কফিশ ও বালিমাছ বর্গ" }
    ],
    shortDescription: {
      en: "Basal otophysan teleosts possessing toothless jaws, an epibranchial organ for microphagy, a primitive Weberian apparatus precursor, and high ecological importance in tropical aquaculture.",
      bn: "আদিম ওটোফাইসান টেলিয়স্ট মাছ যাদের চোয়াল দাঁতহীন, খাদ্য ছাঁকার এপিপ্রাঙ্কিয়াল অঙ্গ রয়েছে, আদিম ওয়েবেরিয়ান যন্ত্রের পূর্বসূরী এবং গ্রীষ্মমন্ডলীয় জলজ চাষে অত্যন্ত গুরুত্বপূর্ণ।"
    },
    diagnosticCharacteristics: {
      en: "Mouth toothless or jaws virtually toothless (bearing microscopic teeth only on tongue or basibranchials); primitive anterior vertebral modifications acting as a prototype Weberian apparatus; epibranchial organs (paired pharyngeal pouches behind fourth gill arches used for processing food particles) present; single dorsal fin; cycloid or ctenoid scales present; swim bladder present or secondarily reduced.",
      bn: "দাঁতহীন চোয়াল (বা জিহ্বা ও গলবিলে অতি সূক্ষ্ম দাঁত); আদিম ওয়েবেরিয়ান যন্ত্রের মতো কশেরুকার প্রাথমিক পরিবর্তন; এপিপ্রাঙ্কিয়াল অঙ্গ (৪র্থ ফুলকা আর্চের পেছনে খাদ্য কণা প্রক্রিয়াজাত করার বিশেষ থলি) বিদ্যমান; একক পৃষ্ঠপাখনা; সাইক্লয়েড বা টিনয়েড আঁইশ; পটকা উপস্থিত বা কোনো প্রজাতিতে হ্রাসপ্রাপ্ত।",
      keyFeatures: {
        en: [
          "Jaws toothless, mouth adapted for bottom foraging and microphagy",
          "Epibranchial organ behind fourth gill cleft for filtering microorganisms",
          "Basal sister lineage to the mega-diverse Otophysi (Cypriniformes, Siluriformes)",
          "Single dorsal fin positioned around midpoint of compressed silvery body"
        ],
        bn: [
          "দাঁতহীন চোয়াল, তলদেশের কণা ও অণুজীব খাওয়ার উপযোগী মুখ",
          "অণুজীব খাদ্য ছাঁকার জন্য চতুর্থ ফুলকা আর্চের পেছনে এপিপ্রাঙ্কিয়াল অঙ্গ",
          "বিশাল ওটোফাইসি (কার্প ও ক্যাটফিশ) মহাবর্গের নিকটতম আদিম বোন-শাখা",
          "রূপালী চ্যাপ্টা দেহের মাঝখানে অবস্থিত একক পৃষ্ঠপাখনা"
        ]
      }
    },
    habitat: {
      en: "Coastal marine waters, shallow sandy surf zones, brackish mangrove lagoons, and freshwater rivers (Kneriidae in Africa).",
      bn: "উপকূলীয় সমুদ্র, অগভীর বালুকাময় সৈকত, লোনাপানির ম্যানগ্রোভ হ্রদ এবং মিঠাপানির নদী (আফ্রিকান নেরিডি গোত্রে)।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Crucial herbivorous and detritivorous primary consumers, converting benthic algae, diatoms, and detritus into protein in tropical coastal ecosystems.",
      bn: "উপকূলীয় বাস্তুতন্ত্রের প্রধান নিরামিষাশী ও মেথর প্রাণী; শ্যাওলা, ডায়াটম ও জৈব কণা খেয়ে প্রোটিনে রূপান্তর করে।"
    },
    feeding: {
      en: "Herbivorous and microphagous: grazing benthic cyanobacteria, filamentous algae, diatoms, and detritus processed in epibranchial pouches.",
      bn: "তৃণভোজী ও অণুজীবভোজী; তলদেশের শৈবাল, ডায়াটম ও গলিত জৈব কণা এপিপ্রাঙ্কিয়াল অঙ্গ দিয়ে ছেঁকে খায়।"
    },
    reproduction: {
      en: "Marine broadcast spawning in shallow coastal waters; high fecundity (up to 5–7 million pelagic eggs per female); larvae migrate into brackish mangrove nursery habitats.",
      bn: "উপকূলীয় সমুদ্রে লক্ষ লক্ষ ভাসমান ডিম ছাড়ে; ডিম ফুটে বের হওয়া লার্ভা জোয়ারের সাথে ম্যানগ্রোভ ও মোহনার নার্সারি অঞ্চলে প্রবেশ করে।"
    },
    distribution: {
      en: "Indo-Pacific and Atlantic warm marine and tropical African freshwaters. Milkfish (Chanos chanos) occurs throughout the northern Bay of Bengal and coastal estuaries.",
      bn: "ভারত-প্রশান্ত মহাসাগরীয় উষ্ণ অঞ্চল এবং আফ্রিকার মিঠাপানিতে বিস্তৃত। মিল্কফিশ (Chanos chanos) উত্তর বঙ্গোপসাগর ও সুন্দরবন উপকূলে পাওয়া যায়।"
    },
    importantFamilies: [
      {
        name: "Chanidae",
        commonEn: "Milkfishes",
        commonBn: "মিল্কফিশ গোত্র",
        diagnosticEn: "Toothless mouth, silvery compressed body, deeply forked caudal fin, single dorsal fin.",
        diagnosticBn: "দাঁতহীন মুখ, রূপালী চ্যাপ্টা দেহ, গভীর খাঁজযুক্ত লেজ, একক পৃষ্ঠপাখনা।"
      },
      {
        name: "Gonorynchidae",
        commonEn: "Beaked Sandfishes",
        commonBn: "চঞ্চুমুখ বালিমাছ গোত্র",
        diagnosticEn: "Elongated cylindrical body, fleshy rostral barbel, ctenoid scales, burrowing habit.",
        diagnosticBn: "লম্বা নলাকার দেহ, তুন্ডে মাংসল শুঙ্গ, টিনয়েড আঁইশ, বালিতে গর্ত করার স্বভাব।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Chanos, Gonorynchus, Kneria, and Phractolaemus. Binomials: Chanos chanos (Forsskål, 1775) and Gonorynchus gonorynchus (Linnaeus, 1766).",
      bn: "প্রধান গণ: Chanos, Gonorynchus, Kneria এবং Phractolaemus। বৈজ্ঞানিক নাম: Chanos chanos (Forsskål, 1775) এবং Gonorynchus gonorynchus (Linnaeus, 1766)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Milkfish (Chanos chanos), Beaked Sandfish (Gonorynchus gonorynchus), Shell-ear / Ear-spot Kneria (Kneria auriculata), and African Hingemouth (Phractolaemus ansorgii).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: মিল্কফিশ বা দুধমাছ (Chanos chanos), চঞ্চুমুখ বালিমাছ (Gonorynchus gonorynchus), কানের মতো দাগযুক্ত নেরিয়া (Kneria auriculata) এবং আফ্রিকান হিঞ্জমাউথ (Phractolaemus ansorgii)।"
    },
    additionalInformation: {
      en: "Milkfish (Chanos chanos) is a monumental commercial aquaculture species throughout Southeast and South Asia, supporting large-scale coastal pen farming in the Indo-Pacific.",
      bn: "মিল্কফিশ (Chanos chanos) দক্ষিণ-পূর্ব এশিয়া ও বঙ্গোপসাগরীয় অঞ্চলে অত্যন্ত গুরুত্বপূর্ণ চাষযোগ্য মাছ, যা দ্রুত বর্ধনশীল এবং রোগ প্রতিরোধী।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Grande & Poyato-Ariza (1999)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-characiformes",
    taxonId: "taxon-characiformes",
    rank: "order",
    scientificName: "Characiformes",
    bengaliName: "কারাসিন, টেট্রা ও পিরানহা বর্গ",
    englishName: "Characins, Tetras & Piranhas",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Characiformes", nameBn: "কারাসিন, টেট্রা ও পিরানহা বর্গ" }
    ],
    shortDescription: {
      en: "Diverse freshwater otophysan teleosts characterized by a fully developed Weberian apparatus, well-toothed jaws (often multicuspid or serrated), and an adipose fin situated behind the dorsal fin.",
      bn: "বৈচিত্র্যময় মিঠাপানির ওটোফাইসান মাছ যাদের পূর্ণাঙ্গ ওয়েবেরিয়ান যন্ত্র, চোয়ালে মজবুত খাঁজকাটা বা বহুমুখী দাঁত এবং পৃষ্ঠপাখনার পেছনে একটি চর্বিযুক্ত অ্যাডিপোজ পাখনা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Well-developed Weberian apparatus connecting swim bladder to inner ear; body typically covered with cycloid scales (rarely ctenoid); multicuspid or sharp interlocking teeth firmly anchored in premaxilla and dentary; presence of an adipose fin (a small fleshy rayless fin behind the rayed dorsal fin) in almost all species; strictly freshwater; no barbels on jaws.",
      bn: "পটকা ও অন্তঃকর্ণকে যুক্তকারী পূর্ণাঙ্গ ওয়েবেরিয়ান যন্ত্র; সাধারণত সাইক্লয়েড আঁইশে ঢাকা দেহ; চোয়ালে বহুমুখী বা অত্যন্ত ধারালো দাঁত শক্তভাবে বসানো থাকে; প্রায় সকল প্রজাতিতে পৃষ্ঠপাখনার পেছনে ছোট মাংসল অ্যাডিপোজ পাখনার উপস্থিতি; সম্পূর্ণ মিঠাপানিতে বসবাসকারী; চোয়ালে কোনো সংবেদনশীল বার্বেল বা শুঙ্গ থাকে না।",
      keyFeatures: {
        en: [
          "Presence of a fleshy rayless adipose fin between dorsal and caudal fins",
          "Multicuspid, razor-sharp, or crushing jaw teeth firmly implanted in jaw bones",
          "Four anterior modified vertebrae forming functional Weberian ossicles",
          "Strictly freshwater distribution restricted to Neotropical and Afrotropical realms"
        ],
        bn: [
          "পৃষ্ঠপাখনা ও লেজের মাঝখানে ছোট মাংসল রশ্মিহীন অ্যাডিপোজ পাখনা",
          "চোয়ালে শক্তভাবে প্রোথিত খাঁজকাটা বা ক্ষুরের মতো ধারালো দাঁত",
          "শুনতে সাহায্যকারী প্রথম চারটি কশেরুকা গঠিত ওয়েবেরিয়ান অস্থিকা",
          "দক্ষিণ আমেরিকা ও আফ্রিকার মিঠাপানিতে প্রাকৃতিকভাবে সীমাবদ্ধ"
        ]
      }
    },
    habitat: {
      en: "Tropical freshwater rivers, Amazonian floodplains, fast-flowing clearwater streams, and African Great Lakes.",
      bn: "গ্রীষ্মমন্ডলীয় মিঠাপানির নদী, আমাজন প্লাবনভূমি, পাহাড়ি স্বচ্ছ ঝর্ণা এবং আফ্রিকার হ্রদসমূহ।",
      systems: ["freshwater"]
    },
    ecosystem: {
      en: "Dominant trophic drivers in Neotropical river basins, spanning herbivorous seed dispersers, apex pack predators, scale-eaters, and insectivores.",
      bn: "আমাজন ও আফ্রিকান নদীর বাস্তুতন্ত্রের প্রধান মেরুদণ্ড; ফল ও বীজ ছড়ানো তৃণভোজী থেকে শুরু করে দলবদ্ধ শীর্ষ শিকারী হিসেবে কাজ করে।"
    },
    feeding: {
      en: "Extremely diverse: predatory piscivores with interlocking razor teeth (Piranhas), crushing frugivores eating river fruits (Pacus), planktivores, and micro-insectivores (Tetras).",
      bn: "অত্যন্ত বৈচিত্র্যময়; ক্ষুরের মতো দাঁতে দলবদ্ধ মাছ শিকারী (পিরানহা), শক্ত দাঁত দিয়ে নদীর ফল ও বীজ চর্বণকারী (পাকু), এবং ছোট পোকাখেকো (টেট্রা)।"
    },
    reproduction: {
      en: "Oviparous broadcast spawners in submerged aquatic vegetation; splash tetras (Copella arnoldi) lay eggs out of water on terrestrial leaves and splash them with water.",
      bn: "জলজ উদ্ভিদে ডিম ছড়ানো ডিম্বপ্রসবকারী; স্প্ল্যাশ টেট্রা পানির উপরে ঝুলন্ত গাছে ডিম পেড়ে লেজ দিয়ে পানি ছিটিয়ে তা সিক্ত রাখে।"
    },
    distribution: {
      en: "Strictly native to South/Central America (over 1,800 species) and Sub-Saharan Africa (over 250 species). Zero native species in Bangladesh (though Piranha is an illegal prohibited invasive).",
      bn: "দক্ষিণ/মধ্য আমেরিকা ও সাব-সাহারান আফ্রিকায় সীমাবদ্ধ। বাংলাদেশে কোনো দেশীয় প্রজাতি নেই (তবে রাক্ষুসে পিরানহা সরকারিভাবে নিষিদ্ধ ও ক্ষতিকর অনুপ্রবেশকারী)।"
    },
    importantFamilies: [
      {
        name: "Characidae",
        commonEn: "Tetras & True Characins",
        commonBn: "টেট্রা ও আসল কারাসিন গোত্র",
        diagnosticEn: "Small silvery or brilliantly colored freshwater fishes with adipose fin and toothed jaws.",
        diagnosticBn: "উজ্জ্বল রঙের ছোট মিঠাপানির মাছ, অ্যাডিপোজ পাখনা ও দাঁতযুক্ত চোয়ালবিশিষ্ট।"
      },
      {
        name: "Serrasalmidae",
        commonEn: "Piranhas and Pacus",
        commonBn: "পিরানহা ও পাকু গোত্র",
        diagnosticEn: "Deep compressed body, serrae along ventral midline, razor-sharp or molariform teeth.",
        diagnosticBn: "চ্যাপ্টা গভীর দেহ, পেটের নিচে করাতের মতো খাঁজ, ক্ষুরের মতো ধারালো বা চ্যাপ্টা পেষণ দাঁত।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Pygocentrus, Paracheirodon, Hydrocynus, Brycon, and Colossoma. Binomials: Pygocentrus nattereri Kner, 1858 and Paracheirodon axelrodi (Schultz, 1956).",
      bn: "প্রধান গণ: Pygocentrus, Paracheirodon, Hydrocynus, Brycon এবং Colossoma। বৈজ্ঞানিক নাম: Pygocentrus nattereri Kner, 1858 এবং Paracheirodon axelrodi (Schultz, 1956)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Red-bellied Piranha (Pygocentrus nattereri), Cardinal Tetra (Paracheirodon axelrodi), Goliath Tigerfish (Hydrocynus goliath), and Tambaqui / Pacu (Colossoma macropomum).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: লালপেট পিরানহা (Pygocentrus nattereri), কার্ডিনাল টেট্রা (Paracheirodon axelrodi), গলিয়াথ টাইগারফিশ (Hydrocynus goliath) এবং তাম্বাকি বা পাকু (Colossoma macropomum)।"
    },
    additionalInformation: {
      en: "Red-bellied Piranha (Pygocentrus nattereri) is strictly banned in Bangladesh under the Protection and Conservation of Fish Act due to extreme risk to indigenous biodiversity if released.",
      bn: "লালপেট পিরানহা মৎস্য সংরক্ষণ আইনের অধীনে বাংলাদেশে চাষ, বিক্রি ও অবমুক্তকরণ সম্পূর্ণ নিষিদ্ধ কারণ এটি দেশীয় জলজ প্রাণীদের জন্য বিধ্বংসী।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Mirande (2010)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-salmoniformes",
    taxonId: "taxon-salmoniformes",
    rank: "order",
    scientificName: "Salmoniformes",
    bengaliName: "স্যামন ও ট্রাউট বর্গ",
    englishName: "Salmons, Trouts & Chars",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Salmoniformes", nameBn: "স্যামন ও ট্রাউট বর্গ" }
    ],
    shortDescription: {
      en: "Cold-water anadromous and freshwater teleosts characterized by a fleshy adipose fin, a physostomous swim bladder, cycloid scales, and legendary upstream natal homing migrations.",
      bn: "শীতল পানির পরিযায়ী ও মিঠাপানির মাছ যাদের পিঠে একটি মাংসল অ্যাডিপোজ পাখনা, সাইক্লয়েড আঁইশ এবং প্রজননের জন্য জন্মভূমির পাহাড়ি নদীতে ফিরে আসার স্বভাব রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Adipose fin present behind rayed dorsal fin; all fins lack true hard spines; pelvic fins abdominal in position with an axillary process; maxilla toothed and included in the gape; physostomous swim bladder connected to oesophagus by a pneumatic duct; cycloid scales; lack of Weberian apparatus; whole-genome duplication (autotetraploid ancestry).",
      bn: "রশ্মিযুক্ত পৃষ্ঠপাখনার পেছনে ছোট মাংসল অ্যাডিপোজ পাখনা বিদ্যমান; পাখনার কোথাও শক্ত খাঁজযুক্ত কাঁটা নেই; শ্রোণীপাখনা পেটের দিকে অবস্থিত; চোয়ালে দাঁত বিদ্যমান; খাদ্যনালীর সাথে নালীযুক্ত সাইসোস্টোমাস পটকা; সাইক্লয়েড আঁইশ; কোনো ওয়েবেরিয়ান যন্ত্র নেই; প্রাচীন সম্পূর্ণ জিনোম দ্বিগুণ হওয়ার ইতিহাস।",
      keyFeatures: {
        en: [
          "Fleshy adipose fin positioned between the dorsal and homocercal caudal fin",
          "Entirely devoid of rigid spiny fin rays in all fins",
          "Anadromous homing migrations using olfaction to return to natal gravel riverbeds",
          "High physiological dependency on cold, oxygen-saturated waters"
        ],
        bn: [
          "পৃষ্ঠপাখনা ও পুচ্ছপাখনার মাঝে অবস্থিত মাংসল অ্যাডিপোজ পাখনা",
          "পাখনাগুলোতে কোনো শক্ত বা ধারালো কাঁটা নেই",
          "ঘ্রাণশক্তির সাহায্যে জন্মভূমির নদীতে ফিরে আসার পরিযায়ী স্বভাব (হোমিং)",
          "চরম শীতল ও অক্সিজেনসমৃদ্ধ পানির ওপর নির্ভরশীলতা"
        ]
      }
    },
    habitat: {
      en: "Cold-temperate and Arctic freshwater rivers, oligotrophic alpine lakes, and cold epipelagic marine ocean waters of the Northern Hemisphere.",
      bn: "উত্তর গোলার্ধের শীতল ও আর্কটিক মিঠাপানির নদী, পাহাড়ি স্বচ্ছ হ্রদ এবং শীতল মহাসাগরের উপরিভাগ।",
      systems: ["freshwater", "marine"]
    },
    ecosystem: {
      en: "Keystone ecosystem engineers: anadromous salmon runs transport millions of tons of marine nitrogen and phosphorus into terrestrial river basins, fertilizing riparian forests and supporting bears, eagles, and river life.",
      bn: "বাস্তুতন্ত্রের প্রধান নিয়ন্ত্রক; সমুদ্র থেকে নদীতে পরিযানের মাধ্যমে এরা লাখ লাখ টন সামুদ্রিক নাইট্রোজেন ও ফসফরাস পাহাড়ি বনে সরবরাহ করে।"
    },
    feeding: {
      en: "Carnivorous: feeding on aquatic insect nymphs, crustaceans, amphipods, and smaller teleost schooling fishes (herrings, capelin, sand lances).",
      bn: "মাংসাশী; নদীর পোকা, জলজ ক্রাস্টাশিয়ান এবং সমুদ্রে হেরিং ও ক্যাপেলিন মাছ শিকার করে।"
    },
    reproduction: {
      en: "Anadromous: adult salmons migrate thousands of miles upstream to natal gravel river beds, dig nests (redds), spawn large orange yolky eggs, and frequently exhibit semelparity (Pacific salmon dying after spawning).",
      bn: "পরিযায়ী; সমুদ্র থেকে উজানের পাহাড়ি নদীতে উঠে নুড়িপাথরে বাসা খুঁড়ে ডিম পাড়ে; প্রশান্ত মহাসাগরীয় স্যামন মাছ ডিম পেড়েই মারা যায় (সেমেলপ্যারাস)।"
    },
    distribution: {
      en: "Native to the Northern Hemisphere (North Atlantic, North Pacific, Arctic drainages). Strictly absent from native South Asian biodiversity.",
      bn: "উত্তর গোলার্ধের শীতল সাগরে ও নদীতে সীমাবদ্ধ। গ্রীষ্মমন্ডলীয় বাংলাদেশে কোনো দেশীয় প্রজাতি নেই।"
    },
    importantFamilies: [
      {
        name: "Salmonidae",
        commonEn: "Salmons, Trouts, and Chars",
        commonBn: "স্যামন ও ট্রাউট গোত্র",
        diagnosticEn: "Adipose fin present, cycloid scales, pelvic axillary process present, cold-water affinity.",
        diagnosticBn: "অ্যাডিপোজ পাখনা বিদ্যমান, সাইক্লয়েড আঁইশ, পেলভিক অ্যাক্সিলারি প্রক্রিয়া, শীতল পানির মাছ।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Salmo, Oncorhynchus, Salvelinus, and Coregonus. Binomials: Salmo salar Linnaeus, 1758 and Oncorhynchus mykiss (Walbaum, 1792).",
      bn: "প্রধান গণ: Salmo, Oncorhynchus, Salvelinus এবং Coregonus। বৈজ্ঞানিক নাম: Salmo salar Linnaeus, 1758 এবং Oncorhynchus mykiss (Walbaum, 1792)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Atlantic Salmon (Salmo salar), Rainbow Trout (Oncorhynchus mykiss), Arctic Charr (Salvelinus alpinus), and Sockeye Salmon (Oncorhynchus nerka).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: আটলান্টিক স্যামন (Salmo salar), রেইনবো ট্রাউট (Oncorhynchus mykiss), আর্কটিক চার (Salvelinus alpinus) এবং সোকআই স্যামন (Oncorhynchus nerka)।"
    },
    additionalInformation: {
      en: "Atlantic salmon and rainbow trout are among the most heavily farmed commercial finfish species in global temperate aquaculture. Zero wild populations exist in Bangladesh.",
      bn: "বিশ্বের শীতল দেশগুলোতে বাণিজ্যিকভাবে সর্বাধিক চাষ করা মাছের মধ্যে স্যামন ও রেইনবো ট্রাউট শীর্ষে। বাংলাদেশে কোনো প্রাকৃতিকভাবে টেকসই প্রজাতি নেই।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Campbell et al. (2013)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-aulopiformes",
    taxonId: "taxon-aulopiformes",
    rank: "order",
    scientificName: "Aulopiformes",
    bengaliName: "টিকটিকি মাছ ও ত্রিপদ মাছ বর্গ",
    englishName: "Lizardfishes & Tripod Fishes",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Aulopiformes", nameBn: "টিকটিকি মাছ ও ত্রিপদ মাছ বর্গ" }
    ],
    shortDescription: {
      en: "Marine benthic and bathypelagic predatory teleosts characterized by specialized gill arches, a large gaping mouth armed with multiple rows of sharp needle teeth, and synchronous hermaphroditism in deep-sea clades.",
      bn: "সামুদ্রিক তলদেশীয় ও গভীর সমুদ্রের শিকারী মাছ, যাদের মুখগহ্বর বিস্তৃত ও সুইয়ের মতো ধারালো দাঁতে পূর্ণ এবং গভীরের প্রজাতিগুলোতে যুগপত উভয়লিঙ্গতা দেখা যায়।"
    },
    diagnosticCharacteristics: {
      en: "Specialized branchial skeleton with an elongated uncinate process on the second epibranchial; mouth large with numerous needle-like or barbed teeth on jaws, palate, and tongue; adipose fin typically present; cycloid or ctenoid scales; swim bladder absent in most adult taxa; deep-sea representatives (Bathypteroidae, Alepisauridae) exhibit functional simultaneous (synchronous) hermaphroditism.",
      bn: "দ্বিতীয় এপিপ্রাঙ্কিয়ালে বিশেষ অস্থিময় প্রক্রিয়াযুক্ত ফুলকা কঙ্কাল; বিস্তৃত হাঁ-মুখ যার চোয়াল, তালু ও জিহ্বায় সুইয়ের মতো ধারালো দাঁতের একাধিক সারি থাকে; অ্যাডিপোজ পাখনা সাধারণত উপস্থিত; বেশিরভাগ প্রাপ্তবয়স্ক প্রজাতিতে পটকা অনুপস্থিত; গভীর সমুদ্রের প্রজাতিগুলো যুগপৎ উভয়লিঙ্গ (একই সাথে শুক্রাণু ও ডিম্বাণু উৎপন্নকারী)।",
      keyFeatures: {
        en: [
          "Specialized pharyngobranchial and epibranchial bone architecture",
          "Wide gape packed with needle-sharp teeth extending onto the tongue and palate",
          "Simultaneous hermaphroditism prevalent in deep-water lineages",
          "Specialized stilt-like elongated pelvic and caudal rays in tripodfishes (Bathypterois)"
        ],
        bn: [
          "ফুলকা আর্চের বিশেষ অস্থিময় বিন্যাস",
          "জিহ্বা ও তালু পর্যন্ত বিস্তৃত সূঁচালো দাঁতের সারিযুক্ত প্রশস্ত মুখগহ্বর",
          "গভীর সমুদ্রের প্রজাতিতে যুগপৎ উভয়লিঙ্গ প্রজনন ব্যবস্থা",
          "ত্রিপদ মাছে দীর্ঘায়িত পাখনা রশ্মি যার ওপর ভর দিয়ে এরা সমুদ্রের তলদেশে দাঁড়িয়ে থাকে"
        ]
      }
    },
    habitat: {
      en: "Shallow sandy neritic shelves, coral reef lagoons, continental slopes, and abyssal seafloors down to depths exceeding 5,000 meters.",
      bn: "অগভীর বালুকাময় মহীসোপান, প্রবাল প্রাচীর এবং ৫,০০০ মিটারেরও বেশি গভীর সমুদ্রের তলদেশ।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Ambush benthic predators: coastal lizardfishes lie camouflaged in sediment to seize passing fishes; deep-sea tripod fishes stand above abyssal mud facing currents to capture drifting zooplankton.",
      bn: "তলদেশীয় শিকারী; অগভীর সৈকতে এরা বালির নিচে লুকিয়ে থেকে মাছ শিকার করে; এবং গভীরের ত্রিপদ মাছ লেজ ও পাখনার ওপর দাঁড়িয়ে স্রোতের ভাসমান প্লাঙ্কটন ধরে।"
    },
    feeding: {
      en: "Voracious carnivores seizing demersal teleosts, squids, and crustaceans with hinged needle teeth that fold inward to prevent prey escape.",
      bn: "মাংসাশী শিকারী; ভেতরের দিকে বাঁকানো সুইয়ের মতো দাঁত দিয়ে মাছ ও স্কুইড শিকার করে যাতে শিকার কোনোভাবেই মুখ থেকে পিছলে বের হতে না পারে।"
    },
    reproduction: {
      en: "Pelagic broadcast spawning with buoyant pelagic eggs; deep-sea bathyal taxa are synchronous hermaphrodites capable of self-fertilization when mates are absent in the abyssal void.",
      bn: "সমুদ্রে ভাসমান ডিম ছাড়ে; গভীর সমুদ্রের নিঃসঙ্গ পরিবেশে সঙ্গীর অভাবে এরা নিজের ডিম্বাণুকে নিজের শুক্রাণু দ্বারা স্বনিষিক্ত করতে পারে।"
    },
    distribution: {
      en: "Worldwide across tropical, temperate, and abyssal marine basins. Highly abundant along the Bay of Bengal continental shelf and Cox's Bazar coast.",
      bn: "বিশ্বের সকল উষ্ণ ও গভীর মহাসাগরে বিস্তৃত। বঙ্গোপসাগরের মহীসোপান ও কক্সবাজার উপকূলে প্রচুর পরিমাণে বিদ্যমান।"
    },
    importantFamilies: [
      {
        name: "Synodontidae",
        commonEn: "Lizardfishes",
        commonBn: "টিকটিকি মাছ গোত্র",
        diagnosticEn: "Cylindrical body, lizard-like head, mouth filled with needle teeth, adipose fin present.",
        diagnosticBn: "নলাকার দেহ, টিকটিকির মতো চ্যাপ্টা মাথা, সুইয়ের মতো দাঁতযুক্ত মুখ, অ্যাডিপোজ পাখনাযুক্ত।"
      },
      {
        name: "Bathypteroidae",
        commonEn: "Tripod Fishes",
        commonBn: "ত্রিপদ মাছ গোত্র",
        diagnosticEn: "Pelvic and lower caudal fin rays enormously elongated into stilt-like supports.",
        diagnosticBn: "শ্রোণীপাখনা ও লেজের নিচের অংশ বিশালাকার খুঁটির মতো লম্বা যা দিয়ে তলদেশে দাঁড়ায়।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Saurida, Synodus, Trachinocephalus, Bathypterois, and Alepisaurus. Binomials: Saurida tumbil (Bloch, 1795) and Synodus variegatus (Lacepède, 1803).",
      bn: "প্রধান গণ: Saurida, Synodus, Trachinocephalus, Bathypterois এবং Alepisaurus। বৈজ্ঞানিক নাম: Saurida tumbil (Bloch, 1795) এবং Synodus variegatus (Lacepède, 1803)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Greater Lizardfish (Saurida tumbil), Variegated Lizardfish (Synodus variegatus), Abyssal Tripodfish (Bathypterois grallator), and Longnose Lancetfish (Alepisaurus ferox).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: বড় টিকটিকি মাছ (Saurida tumbil), চিত্রা টিকটিকি মাছ (Synodus variegatus), অতল ত্রিপদ মাছ (Bathypterois grallator) এবং লম্বানাক ল্যানসেটফিশ (Alepisaurus ferox)।"
    },
    additionalInformation: {
      en: "Greater Lizardfish (Saurida tumbil) is one of the most commercially abundant demersal finfishes harvested by bottom trawlers in the Bangladesh Bay of Bengal shelf.",
      bn: "বড় টিকটিকি মাছ (Saurida tumbil) বঙ্গোপসাগরে ট্রলারের জালে প্রচুর পরিমাণে ধরা পড়ে এবং এটি স্থানীয় বাজারে শুঁটকি ও তাজা মাছ হিসেবে বিক্রি হয়।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Davis (2010)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-gadiformes",
    taxonId: "taxon-gadiformes",
    rank: "order",
    scientificName: "Gadiformes",
    bengaliName: "কড ও হেক বর্গ",
    englishName: "Cods, Hakes & Grenadiers",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Gadiformes", nameBn: "কড ও হেক বর্গ" }
    ],
    shortDescription: {
      en: "Cold-water and deep-sea marine paracanthopterygian teleosts characterized by jugular or thoracic pelvic fins, multiple subdivided dorsal fins lacking true spines, and a sensory chin barbel.",
      bn: "শীতল পানি ও গভীর সমুদ্রের মাছ যাদের শ্রোণীপাখনা গলার কাছে অবস্থিত, পৃষ্ঠপাখনা দুই বা তিনটি অংশে বিভক্ত এবং থুতনিতে সংবেদনশীল বার্বেল বা শুঙ্গ থাকে।"
    },
    diagnosticCharacteristics: {
      en: "Pelvic fins thoracic or jugular (inserted below or anterior to pectoral fins), often with narrow bases; fins lack true sharp spines; dorsal fin typically subdivided into two or three distinct parts; anal fin divided into one or two parts; caudal fin often lost or merged with long dorsal/anal fringe (in macrourids); single sensory chin barbel typically present; physoclistous swim bladder lacking pneumatic duct.",
      bn: "শ্রোণীপাখনা গলার নিচে বা বক্ষপাখনার সামনে অবস্থিত; পাখনার কোথাও প্রকৃত কাঁটা নেই; পৃষ্ঠপাখনা সাধারণত দুই বা তিনটি পৃথক অংশে বিভক্ত; থুতনির নিচে একক সংবেদনশীল শুঙ্গ (বার্বেল); পটকায় খাদ্যনালীর কোনো নালী থাকে না (ফাইসোক্লিস্টাস); গভীরের প্রজাতিতে লেজ ছুঁচলো হয়ে বিলীন হয়ে যায়।",
      keyFeatures: {
        en: [
          "Pelvic fins inserted jugularly (anterior to the pectoral fin base)",
          "Absence of true spiny rays; multiple divided dorsal and anal fins",
          "Sensory chin barbel used to probe benthic substrate for hidden prey",
          "Enormously high fecundity yielding up to tens of millions of pelagic eggs"
        ],
        bn: [
          "বক্ষপাখনার সামনে বা গলার নিচে অবস্থিত শ্রোণীপাখনা",
          "ধারালো কাঁটাহীন বিভক্ত পৃষ্ঠ ও পায়ুপাখনা",
          "তলদেশের খাদ্য খুঁজতে থুতনির নিচে সংবেদনশীল একক শুঙ্গ",
          "বিশাল ডিম উৎপাদন ক্ষমতা (একটি মাছে লক্ষ লক্ষ ডিম)"
        ]
      }
    },
    habitat: {
      en: "Cold-temperate continental shelves, subpolar oceanic banks, and deep-sea bathyal to abyssal trenches down to 4,000 meters.",
      bn: "উত্তর গোলার্ধের শীতল মহীসোপান, সমুদ্রের অগভীর ব্যাংক এবং গভীর সমুদ্রের খাত যা ৪,০০০ মিটার পর্যন্ত বিস্তৃত।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Foundational benthic and demersal predators across the North Atlantic, North Pacific, and global bathyal trenches (where rattails/macrourids dominate biomass).",
      bn: "উত্তর আটলান্টিক ও গভীর সমুদ্রের খাদ্যশৃঙ্খলের প্রধান ভিত্তি; গভীর সমুদ্রের তলদেশের জীবভরের বেশিরভাগ অংশই এদের দখলে।"
    },
    feeding: {
      en: "Carnivorous demersal predators eating capelin, sand lances, herrings, crabs, shrimps, and benthic polychaetes detected by their chin barbel.",
      bn: "মাংসাশী শিকারী; থুতনির শুঙ্গ দিয়ে কাদার ভেতর চিংড়ি, কাঁকড়া ও কৃমি শনাক্ত করে এবং ছোট মাছ শিকার করে।"
    },
    reproduction: {
      en: "Pelagic broadcast spawning: massive aggregations releasing floating buoyant eggs; a single large female Atlantic cod can spawn over five million eggs in a single season.",
      bn: "সমুদ্রে ভাসমান কোটি কোটি ডিম ছাড়ে; একটি প্রাপ্তবয়স্ক স্ত্রী কড মাছ এক প্রজনন মৌসুমেই ৫০ লক্ষেরও বেশি ডিম পাড়ে।"
    },
    distribution: {
      en: "Predominantly Northern Hemisphere cool-temperate and polar waters, with deep-water grenadiers (Macrouridae) extending into tropical bathyal slopes. Absent from shallow Bangladesh waters.",
      bn: "উত্তর গোলার্ধের শীতল সাগরে প্রধান বিস্তার, তবে গভীরের র‍্যাটটেইল মাছ ক্রান্তীয় গভীর সমুদ্রেও বাস করে। অগভীর বাংলাদেশে অনুপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Gadidae",
        commonEn: "True Cods",
        commonBn: "আসল কড গোত্র",
        diagnosticEn: "Three dorsal fins, two anal fins, sensory barbel on chin, homocercal tail.",
        diagnosticBn: "তিনটি পৃষ্ঠপাখনা, দুটি পায়ুপাখনা, থুতনিতে সংবেদনশীল শুঙ্গ, সুষম পুচ্ছপাখনা।"
      },
      {
        name: "Macrouridae",
        commonEn: "Grenadiers or Rattails",
        commonBn: "র‍্যাটটেইল বা গ্রেনেডিয়ার গোত্র",
        diagnosticEn: "Tapering whiplike tail lacking caudal fin, large head, deep bathyal habitat.",
        diagnosticBn: "লেজ পুচ্ছপাখনা ছাড়া সরু চাবুকের মতো ক্রমশ মিলিয়ে যায়, বড় মাথা, গভীর সমুদ্রের মাছ।"
      }
    ],
    scientificNamesSummary: {
      en: "Key genera: Gadus, Melanogrammus, Merluccius, and Coryphaenoides. Binomials: Gadus morhua Linnaeus, 1758 and Melanogrammus aeglefinus (Linnaeus, 1758).",
      bn: "প্রধান গণ: Gadus, Melanogrammus, Merluccius এবং Coryphaenoides। বৈজ্ঞানিক নাম: Gadus morhua Linnaeus, 1758 এবং Melanogrammus aeglefinus (Linnaeus, 1758)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Atlantic Cod (Gadus morhua), Haddock (Melanogrammus aeglefinus), European Hake (Merluccius merluccius), and Abyssal Grenadier (Coryphaenoides armatus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: আটলান্টিক কড (Gadus morhua), হ্যাডক (Melanogrammus aeglefinus), ইউরোপীয় হেক (Merluccius merluccius) এবং অতল গ্রেনেডিয়ার (Coryphaenoides armatus)।"
    },
    additionalInformation: {
      en: "Atlantic cod (Gadus morhua) historically shaped human civilization, maritime trade, and colonization in the North Atlantic. No native shallow-water records occur in Bangladesh.",
      bn: "আটলান্টিক কড মাছ উত্তর আটলান্টিক অঞ্চলের মানব সভ্যতার ইতিহাস ও অর্থনৈতিক উন্নয়নে ঐতিহাসিক ভূমিকা রেখেছে। বাংলাদেশের জলসীমায় কোনো অগভীর প্রজাতি নেই।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Roa-Varón & Ortí (2009)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-syngnathiformes",
    taxonId: "taxon-syngnathiformes",
    rank: "order",
    scientificName: "Syngnathiformes",
    bengaliName: "ঘোড়ামাছ, পাইপমাছ ও রেজরফিশ বর্গ",
    englishName: "Seahorses, Pipefishes & Dragonets",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Syngnathiformes", nameBn: "ঘোড়ামাছ, পাইপমাছ ও রেজরফিশ বর্গ" }
    ],
    shortDescription: {
      en: "Specialized teleosts characterized by an elongated tubular snout terminating in a tiny toothless mouth, a body encased in protective bony rings or plates, and extraordinary male parental pregnancy.",
      bn: "বিশেষ গঠনবিশিষ্ট মাছ যাদের মুখ নলের মতো লম্বা ও দাঁতহীন, দেহ শক্ত অস্থিময় আংটির মতো বর্মে ঢাকা এবং প্রাণিজগতের মধ্যে পুরুষ কর্তৃক অনন্য সন্তান গর্ভধারণের স্বভাব রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Snout greatly elongated into a slender tube with a tiny, toothless terminal mouth adapted for rapid elastic suction feeding; body encased in external dermal bony plates or rigid rings; pelvic fins abdominal or completely absent; gills specialized into tufted lophobranch lobules; ribs absent; male brooding: males possess a specialized ventral brood pouch (marsupium) or abdominal brooding patch to fertilize, carry, nourish, and give birth to live offspring.",
      bn: "নল-সদৃশ দীর্ঘায়িত তুন্ড যার ডগায় দাঁতহীন ক্ষুদ্র মুখ বিদ্যমান; দেহ ত্বকীয় অস্থিময় প্লেট বা শক্ত আংটির বর্মে আবৃত; শ্রোণীপাখনা হ্রাসপ্রাপ্ত বা সম্পূর্ণ অনুপস্থিত; ফুলকা লোফোব্রাঙ্ক ধরনের ক্ষুদ্র ক্ষুদ্র গুচ্ছে পরিণত; পুরুষ কর্তৃক অনন্য গর্ভধারণ: পুরুষের পেটের নিচে বিশেষ ব্রুড পাউচ (মারসুপিয়াম) থাকে যেখানে স্ত্রী মাছ ডিম দেয় এবং পুরুষ মাছ ভ্রূণকে পুষ্টি জুগিয়ে সন্তান প্রসব করে।",
      keyFeatures: {
        en: [
          "Tubular elongated snout with elastic rapid recoil suction mechanics",
          "Body enclosed within segmented dermal armor rings instead of typical scales",
          "Male pregnancy where males nurture and give birth to fully formed fry",
          "Tufted lophobranch gill filaments housed within a reduced gill aperture"
        ],
        bn: [
          "দ্রুত চোষক বল প্রয়োগকারী লম্বা নলাকার মুখ",
          "আঁইশের বদলে শক্ত অস্থিময় বলয়ে ঘেরা দেহ",
          "পুরুষের পেটের থলিতে ডিম লালনপালন ও সন্তান প্রসবের বিরল প্রজনন",
          "ক্ষুদ্র ছিদ্রযুক্ত বিশেষ লোফোব্রাঙ্ক ফুলকা"
        ]
      }
    },
    habitat: {
      en: "Coastal seagrass meadows, tropical coral reefs, mangrove roots, macroalgal beds, and shallow sandy coastal margins.",
      bn: "উপকূলীয় সামুদ্রিক ঘাসের বন, প্রবাল প্রাচীর, সুন্দরবনের ম্যানগ্রোভ শিকড় এবং অগভীর বালুময় সৈকত।",
      systems: ["marine", "brackish"]
    },
    ecosystem: {
      en: "Cryptic ambush micro-predators camouflaged among seaweeds and corals, consuming minute planktonic crustaceans and maintaining seagrass microfauna balance.",
      bn: "সামুদ্রিক ঘাস ও প্রবালের ভেতর নিখুঁতভাবে লুকিয়ে থাকা শিকারী; ক্ষুদ্র কোপেপড ও ক্রাস্টাশিয়ান শিকার করে জলজ ঘাসবনের ভারসাম্য রাখে।"
    },
    feeding: {
      en: "Precision suction feeding: creating rapid sub-ambient pressure inside the tubular snout to vacuum copepods, amphipods, and mysids in milliseconds.",
      bn: "চোষক নল দিয়ে শিকার; চোখের পলকে নলের ভেতর তীব্র ভ্যাকুয়াম সৃষ্টি করে পানিতে ভাসমান ক্ষুদ্র জুপ্লাঙ্কটন ও চিংড়ির লার্ভা গিলে নেয়।"
    },
    reproduction: {
      en: "Obligate male pregnancy: female deposits ripe unfertilized eggs into the male's vascularized ventral brood pouch; male fertilizes them internally, regulates osmolality, provides nutrients, and undergoes labor to expel live miniature seahorses.",
      bn: "পুরুষের গর্ভধারণ; স্ত্রী মাছ পুরুষের পেটের থলিতে ডিম স্থানান্তর করে এবং পুরুষ নিজের ভেতরেই ডিম্বাণু নিষিক্ত করে গর্ভধারণের মাধ্যমে পূর্ণাঙ্গ বাচ্চার জন্ম দেয়।"
    },
    distribution: {
      en: "Worldwide in tropical, subtropical, and warm-temperate shallow marine waters. Present in the Bay of Bengal, Saint Martin's Island coral beds, and Cox's Bazar coast.",
      bn: "বিশ্বের সকল উষ্ণ ও ক্রান্তীয় সাগরে বিস্তৃত। সেন্ট মার্টিন দ্বীপের প্রবাল বলয়, সুন্দরবনের মোহনা এবং কক্সবাজার উপকূলে পাওয়া যায়।"
    },
    importantFamilies: [
      {
        name: "Syngnathidae",
        commonEn: "Seahorses and Pipefishes",
        commonBn: "ঘোড়ামাছ ও পাইপমাছ গোত্র",
        diagnosticEn: "Body encased in bony rings, tubular snout, toothless mouth, male pregnancy pouch.",
        diagnosticBn: "অস্থিময় বলয়ে আবৃত দেহ, নলাকার তুন্ড, দাঁতহীন মুখ, পুরুষের পেটে ব্রুড পাউচ।"
      },
      {
        name: "Fistulariidae",
        commonEn: "Cornetfishes / Flutemouths",
        commonBn: "বাঁশিমাছ গোত্র",
        diagnosticEn: "Extremely elongated depressed body, long tubular snout, caudal filament extending from middle of tail.",
        diagnosticBn: "চ্যাপ্টা দীর্ঘ দেহ, লম্বা বাঁশির মতো নল-মুখ, লেজের মাঝখান থেকে সুতোর মতো ফিলামেন্ট বের হয়।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Hippocampus, Syngnathus, Fistularia, and Aeoliscus. Binomials: Hippocampus kuda Bleeker, 1852 and Fistularia commersonii Rüppell, 1838.",
      bn: "প্রধান গণ: Hippocampus, Syngnathus, Fistularia এবং Aeoliscus। বৈজ্ঞানিক নাম: Hippocampus kuda Bleeker, 1852 এবং Fistularia commersonii Rüppell, 1838।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Spotted Seahorse / Yellow Seahorse (Hippocampus kuda), Bluespotted Cornetfish (Fistularia commersonii), Greater Pipefish (Syngnathus acus), and Razorfish (Aeoliscus strigatus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: হলুদ ঘোড়ামাছ বা চিত্রা সি-হর্স (Hippocampus kuda), নীলফোঁটা বাঁশিমাছ (Fistularia commersonii), বড় পাইপমাছ (Syngnathus acus) এবং রেজরফিশ (Aeoliscus strigatus)।"
    },
    additionalInformation: {
      en: "Hippocampus kuda occurs in Saint Martin's Island seagrass and coral formations. All seahorse species are listed under CITES Appendix II due to international overexploitation for traditional medicine and souvenirs.",
      bn: "হলুদ ঘোড়ামাছ (Hippocampus kuda) সেন্ট মার্টিন দ্বীপে পাওয়া যায়। ঐতিহ্যবাহী ওষুধ ও স্যুভেনিরের জন্য পাচার হওয়ায় সাইটিস (CITES) চুক্তির অধীনে এরা সংরক্ষিত।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Hamilton et al. (2017)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-scombriformes",
    taxonId: "taxon-scombriformes",
    rank: "order",
    scientificName: "Scombriformes",
    bengaliName: "ম্যাকেরেল, টুনা ও রূপচাঁদা বর্গ",
    englishName: "Mackerels, Tunas, Bonitos & Pomfrets",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Scombriformes", nameBn: "ম্যাকেরেল, টুনা ও রূপচাঁদা বর্গ" }
    ],
    shortDescription: {
      en: "Fast-swimming pelagic marine teleosts featuring hydrodynamic spindle-shaped or compressed bodies, finlets behind the dorsal and anal fins, slender caudal peduncles with lateral keels, and regional endothermy in advanced tunas.",
      bn: "উন্মুক্ত সাগরের দ্রুত সাঁতারু টেলিয়স্ট মাছ, যাদের দেহ মসৃণ ও তীরবেগী, পিঠ ও পায়ুর পেছনে ছোট ছোট আলাদা পাখনাংশ (ফিনলেট), লেজের গোড়ায় শক্ত পার্শ্বীয় খাঁজ এবং টুনা মাছে উষ্ণরক্তীয়তা দেখা যায়।"
    },
    diagnosticCharacteristics: {
      en: "Streamlined hydrodynamic fusiform or deeply compressed body; second dorsal and anal fins followed by a series of 5 to 10 detached finlets; caudal peduncle slender with one to three stabilizing lateral keels; caudal fin deeply forked or lunate, rigid and non-collapsible; cycloid scales forming a corselet over anterior trunk or tiny and embedded; tunas possess vascular countercurrent heat exchangers (rete mirabile) maintaining elevated red muscle and visceral temperatures.",
      bn: "তীরবেগী মসৃণ দেহকাঠামো; দ্বিতীয় পৃষ্ঠ ও পায়ুপাখনার পেছনে ৫ থেকে ১০টি মুক্ত ক্ষুদ্র পাখনাংশ (ফিনলেট); লেজের গোড়া সরু ও শক্ত পার্শ্বীয় খাঁজযুক্ত; পুচ্ছপাখনা দৃঢ় ও অর্ধচন্দ্রাকার; ক্ষুদ্র সাইক্লয়েড আঁইশ মাথার পেছনে বর্ম বা কর্সলেট গঠন করে; টুনা মাছে রক্তনালীর বিশেষ জালিকা থাকে যা এদের পেশী ও চোখের তাপমাত্রা পানির চেয়ে উষ্ণ রাখে।"
      ,
      keyFeatures: {
        en: [
          "Series of 5–10 isolated finlets trailing dorsal and anal fins to reduce hydrodynamic drag",
          "Rigid, high-aspect-ratio lunate caudal fin driven by high-frequency oscillation",
          "Regional endothermy in tunas allowing sustained high-speed pelagic cruising",
          "Slender, non-collapsible caudal peduncle equipped with prominent lateral keels"
        ],
        bn: [
          "পানির ঘর্ষণ কমাতে পৃষ্ঠ ও পায়ুপাখনার পেছনে ৫-১০টি ক্ষুদ্র মুক্ত ফিনলেট",
          "দ্রুত সাঁতারের জন্য অর্ধচন্দ্রাকার মজবুত পুচ্ছপাখনা",
          "টুনা মাছে উষ্ণরক্তীয়তা যা এদের একটানা দ্রুতগতিতে সাঁতার কাটতে সাহায্য করে",
          "লেজের গোড়ায় স্থিতিশীলতা প্রদানকারী শক্ত পার্শ্বীয় খাঁজ"
        ]
      }
    },
    habitat: {
      en: "Pelagic epipelagic open oceans, coastal neritic continental shelves, and deep submarine drop-offs.",
      bn: "উন্মুক্ত মহাসাগরের উপরিভাগ, উপকূলীয় মহীসোপান এবং গভীর সামুদ্রিক অঞ্চলের প্রান্তভাগ।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Apex and upper-trophic pelagic predators driving oceanic food webs, preying upon immense schools of clupeids, anchovies, and squids across the high seas.",
      bn: "উন্মুক্ত মহাসাগরের শীর্ষ শিকারী; সাগরে চলাচলকারী কোটি কোটি সার্ডিন, অ্যানচোভি ও স্কুইড খেয়ে সামুদ্রিক খাদ্যশৃঙ্খল সচল রাখে।"
    },
    feeding: {
      en: "High-speed continuous pursuit of pelagic schooling teleosts, squids, and flying fishes, or ram-filtering zooplankton through elongated gill rakers in mackerels.",
      bn: "তীরবেগে তাড়া করে পেলাজিক মাছ, স্কুইড ও উড়ুক্কু মাছ শিকার করে; ম্যাকেরেল মাছ মুখ হা করে প্লাঙ্কটন ছেঁকে খায়।"
    },
    reproduction: {
      en: "Pelagic broadcast spawning in warm tropical and subtropical waters; immense fecundity with females releasing millions of buoyant pelagic eggs.",
      bn: "উন্মুক্ত সমুদ্রে লাখ লাখ ভাসমান ডিম ছাড়ে; উষ্ণ পানির স্রোতে ডিম দ্রুত ফুটে লার্ভায় রূপ নেয়।"
    },
    distribution: {
      en: "Circumglobal across tropical, subtropical, and temperate oceans. Massive commercial presence across the Bay of Bengal EEZ and Bangladesh landing centers.",
      bn: "বিশ্বের সকল উষ্ণ ও ক্রান্তীয় সাগরে বিস্তৃত। বঙ্গোপসাগরে এবং কক্সবাজার ও চট্টগ্রাম মৎস্য অবতরণ কেন্দ্রে এদের বিপুল অর্থনৈতিক উপস্থিতি।"
    },
    importantFamilies: [
      {
        name: "Scombridae",
        commonEn: "Tunas, Mackerels and Bonitos",
        commonBn: "টুনা ও ম্যাকেরেল গোত্র",
        diagnosticEn: "Finlets behind dorsal and anal fins, slender peduncle with keels, lunate caudal fin.",
        diagnosticBn: "পাখনার পেছনে ফিনলেট, খাঁজযুক্ত সরু পুচ্ছদণ্ড, অর্ধচন্দ্রাকার লেজ।"
      },
      {
        name: "Trichiuridae",
        commonEn: "Cutlassfishes / Ribbonfishes",
        commonBn: "ছুঁড়িমাছ বা ফিতা মাছ গোত্র",
        diagnosticEn: "Extremely elongated ribbon-like body, fang-like teeth, caudal fin reduced to hairlike filament.",
        diagnosticBn: "চ্যাপ্টা ফিতার মতো চকচকে রূপালী দেহ, ধারালো হিংস্র দাঁত, লেজ সুতোর মতো ছুঁচলো।"
      },
      {
        name: "Stromateidae",
        commonEn: "Butterfishes & True Pomfrets",
        commonBn: "রূপচাঁদা গোত্র",
        diagnosticEn: "Deep compressed body, continuous dorsal fin, toothed pharyngeal sacs.",
        diagnosticBn: "চ্যাপ্টা হীরকাকৃতির রূপালী দেহ, কাঁটাবিহীন ডানা, অত্যন্ত সুস্বাদু সামুদ্রিক মাছ।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Rastrelliger, Thunnus, Scomberomorus, Lepturacanthus, and Pampus. Binomials: Rastrelliger kanagurta (Cuvier, 1816), Thunnus albacares (Bonnaterre, 1788), and Pampus argenteus (Euphrasen, 1788).",
      bn: "প্রধান গণ: Rastrelliger, Thunnus, Scomberomorus, Lepturacanthus এবং Pampus। বৈজ্ঞানিক নাম: Rastrelliger kanagurta (Cuvier, 1816), Thunnus albacares (Bonnaterre, 1788), এবং Pampus argenteus (Euphrasen, 1788)।"
    },
    examplesSummary: {
      en: "Five verified representative examples: Indian Mackerel (Rastrelliger kanagurta), Yellowfin Tuna (Thunnus albacares), Silver Pomfret / Rupchanda (Pampus argenteus), Narrow-barred Spanish Mackerel (Scomberomorus commerson), and Largehead Hairtail (Trichiurus lepturus).",
      bn: "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: ভারতীয় ম্যাকেরেল (Rastrelliger kanagurta), হলুদপাখনা টুনা (Thunnus albacares), রূপচাঁদা (Pampus argenteus), সুরমাই মাছ (Scomberomorus commerson) এবং ছুরি মাছ (Trichiurus lepturus)।"
    },
    additionalInformation: {
      en: "Silver Pomfret (Pampus argenteus) and Indian Mackerel are top commercial export finfishes in Bangladesh. Yellowfin tuna supports industrial deep-sea longline fishing in the outer Bay of Bengal.",
      bn: "রূপচাঁদা ও সুরমাই বাংলাদেশের সবচেয়ে সমাদৃত ও মূল্যবান সামুদ্রিক মাছ। গভীর বঙ্গোপসাগরে টুনা মাছ আহরণ জাতীয় সুনীল অর্থনীতির (Blue Economy) অন্যতম প্রধান স্তম্ভ।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-pleuronectiformes",
    taxonId: "taxon-pleuronectiformes",
    rank: "order",
    scientificName: "Pleuronectiformes",
    bengaliName: "চ্যাপ্টা মাছ বর্গ (ফ্লাউন্ডার ও পাতামাছ)",
    englishName: "Flatfishes, Flounders, Soles & Tonguesoles",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Pleuronectiformes", nameBn: "চ্যাপ্টা মাছ বর্গ" }
    ],
    shortDescription: {
      en: "Asymmetric benthic teleosts in which both eyes migrate to one side of the head during larval metamorphosis, enabling the fish to rest camouflaged on the seabed with its eyeless blind side downward.",
      bn: "অপ্রতিসম তলদেশীয় মাছ যাদের লার্ভা দশায় দুটি চোখই মাথার যেকোনো একদিকে সরে আসে, ফলে এরা সমুদ্রের তলদেশে একপাশে শুয়ে নিখুঁত ছদ্মবেশে বাস করে।"
    },
    diagnosticCharacteristics: {
      en: "Profound bilateral asymmetry in adults: both eyes situated on either the right (dextral) or left (sinistral) side of the head; body strongly compressed laterally; fish rests and swims with the blind unpigmented side facing the substrate; dorsal fin long-based, extending anteriorly onto the head; swim bladder lost in adults; exceptional physiological chromatic camouflage matching substrate texture within seconds.",
      bn: "প্রাপ্তবয়স্ক অবস্থায় চরম শারীরিক অপ্রতিসাম্য: দুটি চোখই মাথার ডানপাশে (ডেক্সট্রাল) বা বামপাশে (সিনিস্ট্রাল) স্থানান্তরিত হয়; দেহ চরমভাবে চ্যাপ্টা; অন্ধ সাদাটে অংশ তলদেশের দিকে রেখে এরা একপাশে সাঁতার কাটে; পৃষ্ঠপাখনা দীর্ঘ এবং মাথা পর্যন্ত বিস্তৃত; প্রাপ্তবয়স্কদের পটকা সম্পূর্ণ বিলুপ্ত; চোখের পলকে সমুদ্রের তলদেশের রঙের সাথে গায়ের রঙ বদলানোর অনন্য ছদ্মবেশ ক্ষমতা।",
      keyFeatures: {
        en: [
          "Cranial ontogenetic asymmetry where one eye migrates over the skull to the opposite side",
          "Habitual resting and swimming on the blind unpigmented side",
          "Long-based dorsal and anal fins flanking the flattened margin",
          "Complete absence of a swim bladder in benthic adults"
        ],
        bn: [
          "লার্ভা বৃদ্ধির সময় করোটিকা ঘুরে এক চোখ অপরপাশে চলে যাওয়া",
          "অন্ধ সাদা পাশ নিচে রেখে তলদেশে শুয়ে থাকা",
          "দেহের দুই প্রান্ত ঘিরে থাকা দীর্ঘ পৃষ্ঠ ও পায়ুপাখনা",
          "তলদেশীয় প্রাপ্তবয়স্ক মাছে পটকার সম্পূর্ণ অনুপস্থিতি"
        ]
      }
    },
    habitat: {
      en: "Benthic sandy, muddy, or silty continental shelves, shallow coastal bays, mangrove estuaries, and deep bathyal ocean trenches down to 2,000 meters.",
      bn: "বালুকাময় বা কর্দমাক্ত মহীসোপান, উপকূলীয় অগভীর উপসাগর, ম্যানগ্রোভ মোহনা এবং ২,০০০ মিটার পর্যন্ত গভীর তলদেশ।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Key benthic predators and infaunal consumers in coastal estuaries, ambushing crustaceans and demersal teleosts while buried in silt.",
      bn: "উপকূলীয় ও মোহনাজ বাস্তুতন্ত্রের প্রধান তলদেশীয় শিকারী; বালির নিচে চোখদুটো জাগিয়ে রেখে শিকারের অপেক্ষায় থাকে।"
    },
    feeding: {
      en: "Carnivorous: preying upon small teleosts, marine polychaete worms, burrowing crabs, and bivalve molluscs using asymmetric jaws.",
      bn: "মাংসাশী; কাদার ভেতর লুকিয়ে থাকা ছোট মাছ, পলিকিট কৃমি, কাঁকড়া ও শামুক শিকার করে।"
    },
    reproduction: {
      en: "Pelagic broadcast spawning; transparent symmetrical larvae hatch and swim upright like normal fishes before undergoing cranial metamorphic rotation at 1–3 cm length.",
      bn: "ভাসমান ডিম ছাড়ে; ডিম ফুটে বের হওয়া লার্ভা স্বাভাবিক মাছের মতো সোজা সাঁতার কাটে, কিন্তু ১-৩ সেমি বড় হলে চোখের স্থানান্তরের মাধ্যমে চ্যাপ্টা রূপ ধারণ করে।"
    },
    distribution: {
      en: "Worldwide in tropical, temperate, and subpolar marine waters. Abundant throughout the northern Bay of Bengal, Cox's Bazar coast, and Sundarbans channels.",
      bn: "বিশ্বের সকল মহাসাগরে বিস্তৃত। উত্তর বঙ্গোপসাগর, কক্সবাজার উপকূল এবং সুন্দরবনের খাঁড়িতে অত্যন্ত প্রাচুর্যময়।"
    },
    importantFamilies: [
      {
        name: "Cynoglossidae",
        commonEn: "Tonguesoles",
        commonBn: "জিভমাছ বা কুত্তা-জিভ গোত্র",
        diagnosticEn: "Left-eyed (sinistral), teardrop-shaped body, dorsal and anal fins confluent with pointed caudal fin, hook over mouth.",
        diagnosticBn: "বামচোখা, পাতার মতো চ্যাপ্টা দেহ, লেজের সাথে পাখনার একীভূত কিনারা, মুখের ওপর হুকসদৃশ বাঁক।"
      },
      {
        name: "Soleidae",
        commonEn: "True Soles",
        commonBn: "পাতামাছ গোত্র",
        diagnosticEn: "Right-eyed (dextral), rounded snout, small eyes, preopercular margin covered by skin.",
        diagnosticBn: "ডানচোখা, গোলাকার তুন্ড, ছোট চোখ, মসৃণ চ্যাপ্টা দেহ।"
      },
      {
        name: "Paralichthyidae",
        commonEn: "Large-tooth Flounders",
        commonBn: "বড়দাঁত ফ্লাউন্ডার গোত্র",
        diagnosticEn: "Left-eyed, large mouth with sharp canine teeth, caudal fin separate.",
        diagnosticBn: "বামচোখা, ধারালো দাঁতযুক্ত বড় মুখ, পৃথক পুচ্ছপাখনা।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Cynoglossus, Pseudorhombus, Solea, and Zebrias. Binomials: Cynoglossus lingua Hamilton, 1822 and Pseudorhombus arsius (Hamilton, 1822).",
      bn: "প্রধান গণ: Cynoglossus, Pseudorhombus, Solea এবং Zebrias। বৈজ্ঞানিক নাম: Cynoglossus lingua Hamilton, 1822 এবং Pseudorhombus arsius (Hamilton, 1822)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Long Tongue Sole (Cynoglossus lingua), Largetooth Flounder (Pseudorhombus arsius), Zebra Sole (Zebrias zebra), and Common Sole (Solea solea).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: লম্বা জিভমাছ (Cynoglossus lingua), বড়দাঁত ফ্লাউন্ডার (Pseudorhombus arsius), জেব্রা পাতামাছ (Zebrias zebra) এবং সাধারণ সোল (Solea solea)।"
    },
    additionalInformation: {
      en: "Cynoglossus lingua and related tongue soles are heavily harvested by bottom trawl and artisanal bag net fisheries across the Bangladesh coastline, marketed fresh or sun-dried.",
      bn: "লম্বা জিভমাছ ও সংশ্লিষ্ট পাতামাছগুলো বাংলাদেশের উপকূলীয় ট্রলার ও বেহুন্দি জালে প্রচুর ধরা পড়ে এবং চমৎকার স্বাদের জন্য সমাদৃত।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Campbell et al. (2014)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-tetraodontiformes",
    taxonId: "taxon-tetraodontiformes",
    rank: "order",
    scientificName: "Tetraodontiformes",
    bengaliName: "টেপা, পটকা ও পcupinefish বর্গ",
    englishName: "Pufferfishes, Filefishes, Boxfishes & Sunfishes",
    parentTaxonId: "class-actinopterygii",
    category: "fish",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিপাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Neopterygii", nameBn: "নিওপটেরিগি" },
      { rank: "order", name: "Tetraodontiformes", nameBn: "টেপা, পটকা ও পcupinefish বর্গ" }
    ],
    shortDescription: {
      en: "Highly derived teleosts characterized by beak-like jaws with fused teeth, ability to inflate the body with water or air, skin often armed with spines or carapace, and potent defensive neurotoxins (tetrodotoxin).",
      bn: "অত্যন্ত রূপান্তরিত মাছ যাদের দাঁত জোড়া লেগে পাখির ঠোঁটের মতো গঠন তৈরি করে, আত্মরক্ষায় পানি বা বাতাস টেনে শরীর বেলুনের মতো ফোলাতে পারে এবং দেহে মারাত্মক বিষ (টেট্রোডোটক্সিন) ধারণ করে।"
    },
    diagnosticCharacteristics: {
      en: "Teeth fused into solid beak-like crushing dental plates (4 plates in Tetraodontidae, 2 plates in Diodontidae); body capable of rapid inflation with water or air via specialized diverticulum of the stomach; skin naked and embedded with erectile spinules or encased in a rigid bony carapace (boxfishes); ribs, parietal bones, and pelvic fins reduced or absent; viscera (liver, gonads) frequently laden with lethal tetrodotoxin (TTX).",
      bn: "দাঁতগুলো একত্রিত হয়ে পাখির ঠোঁটের মতো শক্ত পেষণ প্লেট গঠন করে (টেট্রোডন্টিডিতে ৪টি প্লেট, ডায়োডন্টিডিতে ২টি প্লেট); পাকস্থলীর বিশেষ প্রকোষ্ঠে দ্রুত পানি বা বাতাস টেনে দেহকে বলের মতো ফোলানোর ক্ষমতা; ত্বক আঁইশহীন তবে কাঁটায় পূর্ণ বা শক্ত বাক্সের মতো বর্মে মোড়ানো; শ্রোণীপাখনা ও পাঁজরের অস্থি হ্রাসপ্রাপ্ত বা অনুপস্থিত; যকৃৎ ও ডিম্বাশয়ে মারাত্মক প্রাণঘাতী টেট্রোডোটক্সিন (TTX) বিষের উপস্থিতি।",
      keyFeatures: {
        en: [
          "Beak-like dental plates formed by fusion of jaw teeth to crush hard-shelled prey",
          "Dynamic defensive inflation inflating body diameter multiple times to deter predators",
          "Accumulation of lethal neurotoxic tetrodotoxin (TTX) in liver, ovaries, and skin",
          "Absence of true ribs and pelvic fins in most derived families"
        ],
        bn: [
          "শামুকের শক্ত খোলস ভাঙার জন্য ঠোঁটের মতো জোড়া লাগানো দাঁতের প্লেট",
          "শিকারী প্রাণীকে ভয় দেখাতে শরীর কয়েকগুণ ফুলিয়ে বেলুন বানানোর ক্ষমতা",
          "যকৃৎ, ডিম ও ত্বকে প্রাণঘাতী নিউরোটক্সিক টেট্রোডোটক্সিন বিষের উপস্থিতি",
          "পাঁজরের অস্থি এবং শ্রোণীপাখনার অনুপস্থিতি"
        ]
      }
    },
    habitat: {
      en: "Freshwater rivers, floodplains, mangrove creeks, tropical coral reefs, and pelagic open ocean (Molidae).",
      bn: "মিঠাপানির নদী, হাওর-বিল, ম্যানগ্রোভ খাঁড়ি, প্রবাল প্রাচীর এবং উন্মুক্ত মহাসাগর (মহাসমুদ্রের সূর্যমাছ বা মোলা মোলা)।",
      systems: ["freshwater", "marine", "brackish"]
    },
    ecosystem: {
      en: "Essential benthic durophagous predators controlling populations of snails, crabs, and sea urchins; open ocean sunfishes harvest colossal masses of jellyfish.",
      bn: "জলজ বাস্তুতন্ত্রের শক্ত খোলসভোজী শিকারী; শামুক, কাঁকড়া ও সামুদ্রিক অর্চিন নিয়ন্ত্রণ করে; মহাসাগরীয় সূর্যমাছ জেলিফিশের সংখ্যা নিয়ন্ত্রণে রাখে।"
    },
    feeding: {
      en: "Durophagous carnivores: using powerful parrot-like beaks to crush bivalves, gastropods, hermit crabs, and corals; oceanic sunfishes consume gelatinous scyphozoans and salps.",
      bn: "শক্ত খোলসভোজী; তোতাপাখির ঠোঁটের মতো মজবুত চোয়াল দিয়ে শক্ত শামুক, ঝিনুক ও কাঁকড়া ভেঙে ভেতরের নরম মাংস খায়।"
    },
    reproduction: {
      en: "Oviparous: freshwater puffers construct subtle nests or deposit adhesive eggs on rocks and plants; marine species lay demersal or pelagic eggs; oceanic sunfishes (Mola mola) produce over 300 million eggs, the highest fecundity among all vertebrates.",
      bn: "ডিম্বপ্রসবকারী; মিঠাপানির টেপা মাছ পাথরে আঠালো ডিম পাড়ে; সামুদ্রিক সূর্যমাছ (Mola mola) একসাথে ৩০ কোটিরও বেশি ডিম ছাড়ে যা মেরুদণ্ডী প্রাণীদের মধ্যে বিশ্বরেকর্ড।"
    },
    distribution: {
      en: "Circumglobal across tropical and temperate waters. Abundantly represented in Bangladesh inland freshwaters (Tetraodon cutcutia), coastal mangroves, and the Bay of Bengal.",
      bn: "বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ অঞ্চলে বিস্তৃত। বাংলাদেশের নদী-নালা, খাল-বিল (টেপা মাছ), সুন্দরবনের মোহনা এবং বঙ্গোপসাগরে প্রচুর প্রজাতি বিদ্যমান।"
    },
    importantFamilies: [
      {
        name: "Tetraodontidae",
        commonEn: "True Pufferfishes",
        commonBn: "আসল টেপা বা পটকা মাছ গোত্র",
        diagnosticEn: "Four fused dental plates (two upper, two lower), body inflatable with tiny prickles, tetrodotoxin present.",
        diagnosticBn: "চারটি যুক্ত দাঁতের প্লেট (উপরে দুটি, নিচে দুটি), শরীর ফোলানো যায়, মারাত্মক টেট্রোডোটক্সিন বিষাক্ত।"
      },
      {
        name: "Diodontidae",
        commonEn: "Porcupinefishes",
        commonBn: "সজারু মাছ বা কাঁটাযুক্ত পটকা গোত্র",
        diagnosticEn: "Two fused dental plates (one upper, one lower), body covered in large sharp erectile spines.",
        diagnosticBn: "দুটি অবিচ্ছিন্ন দাঁতের প্লেট, সারা শরীরে দীর্ঘ ও ধারালো সজারুর মতো খাড়া কাঁটা বিদ্যমান।"
      },
      {
        name: "Molidae",
        commonEn: "Ocean Sunfishes",
        commonBn: "মহাসমুদ্রীয় সূর্যমাছ গোত্র",
        diagnosticEn: "Massive laterally compressed body ending in clavus instead of caudal fin, beaklike jaws.",
        diagnosticBn: "বিশালাকার চ্যাপ্টা বৃত্তাকার দেহ, পুচ্ছপাখনার বদলে ক্লাভাস প্রান্ত, ঠোঁটযুক্ত চোয়াল।"
      }
    ],
    scientificNamesSummary: {
      en: "Dominant genera: Tetraodon, Chelonodontops, Diodon, Lagocephalus, and Mola. Binomials: Tetraodon cutcutia Hamilton, 1822, Chelonodontops patoca (Hamilton, 1822), and Mola mola (Linnaeus, 1758).",
      bn: "প্রধান গণ: Tetraodon, Chelonodontops, Diodon, Lagocephalus এবং Mola। বৈজ্ঞানিক নাম: Tetraodon cutcutia Hamilton, 1822, Chelonodontops patoca (Hamilton, 1822), এবং Mola mola (Linnaeus, 1758)।"
    },
    examplesSummary: {
      en: "Five verified representative examples: Ocellated Pufferfish / Tepa (Tetraodon cutcutia), Gangetic Pufferfish / Patoka Tepa (Chelonodontops patoca), Spot-fin Porcupinefish (Diodon hystrix), Ocean Sunfish (Mola mola), and Silver-cheeked Toadfish (Lagocephalus sceleratus).",
      bn: "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: টেপা মাছ (Tetraodon cutcutia), গঙ্গেয় পটকা মাছ (Chelonodontops patoca), সজারু পটকা (Diodon hystrix), মহাসমুদ্রের সূর্যমাছ (Mola mola) এবং রূপালী চিবুক পটকা (Lagocephalus sceleratus)।"
    },
    additionalInformation: {
      en: "Tetraodon cutcutia is an iconic native freshwater puffer found throughout Bangladesh floodplains and haors. Ingesting marine puffers (Lagocephalus) causes deadly tetrodotoxin poisoning and remains a major public health warning in coastal Bangladesh.",
      bn: "টেপা মাছ (Tetraodon cutcutia) বাংলাদেশের অভ্যন্তরীণ হাওর ও বিলের অত্যন্ত পরিচিত মাছ। অসাবধানতাবশত সামুদ্রিক বিষাক্ত পটকা মাছ খেয়ে প্রতি বছর উপকূলীয় অঞ্চলে প্রাণহানি ঘটে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024", "ref-rahman-2005"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Santini et al. (2013)",
    verificationStatus: "published",
    publishedStatus: true
  }
];

console.log(`Generated ${newOrders.length} new order records.`);

// Update existing higher taxa order lists
const chondrichthyesOrders = [
  "order-carcharhiniformes",
  "order-lamniformes",
  "order-orectolobiformes",
  "order-squaliformes",
  "order-torpediniformes",
  "order-rajiformes",
  "order-myliobatiformes",
  "order-rhinopristiformes",
  "order-chimaeriformes"
];

const actinopterygiiOrders = [
  "order-polypteriformes",
  "order-acipenseriformes",
  "order-lepisosteiformes",
  "order-amiiformes",
  "order-osteoglossiformes",
  "order-anguilliformes",
  "order-clupeiformes",
  "order-gonorynchiformes",
  "order-cypriniformes",
  "order-characiformes",
  "order-siluriformes",
  "order-salmoniformes",
  "order-aulopiformes",
  "order-gadiformes",
  "order-syngnathiformes",
  "order-synbranchiformes",
  "order-scombriformes",
  "order-anabantiformes",
  "order-pleuronectiformes",
  "order-perciformes",
  "order-tetraodontiformes"
];

const osteichthyesOrders = [
  ...actinopterygiiOrders,
  "order-coelacanthiformes",
  "order-ceratodontiformes"
];

const existingOrderKeyFeatures = {
  'order-clupeiformes': {
    en: [
      "Sharp serrated abdominal scutes forming a ventral keel",
      "Otophysic connection linking swim bladder to inner ear bullae",
      "Easily shed deciduous cycloid scales and compressed silvery body",
      "Single short dorsal fin near midbody and deeply forked caudal fin"
    ],
    bn: [
      "পেটের নিচে ধারালো করাতের মতো স্কিউটের সারি",
      "উচ্চ কম্পাঙ্কের শব্দ শোনার সহায়ক ওটোফিসিক সংযোগ",
      "সহজেই খসে পড়ে এমন সাইক্লয়েড আঁইশ ও রূপালী চ্যাপ্টা দেহ",
      "দেহের মধ্যভাগে একক পৃষ্ঠপাখনা এবং খাঁজযুক্ত পুচ্ছপাখনা"
    ]
  },
  'order-cypriniformes': {
    en: [
      "Completely toothless jaws with well-developed pharyngeal teeth",
      "Functional Weberian apparatus connecting gas bladder to inner ear",
      "Protractile mouth often flanked by sensory barbels",
      "Scaleless head and cycloid scales on trunk"
    ],
    bn: [
      "দাঁতহীন চোয়াল ও উন্নত গলবিলীয় দাঁতের সারি",
      "তীব্র শ্রবণ সহায়ক ওয়েবেরিয়ান যন্ত্র",
      "সামনে প্রসারিত মুখ এবং সংবেদনশীল বার্বেল বা শুঙ্গ",
      "আঁইশহীন মাথা এবং শরীরে সাইক্লয়েড আঁইশ"
    ]
  },
  'order-siluriformes': {
    en: [
      "Scaleless body or encased in bony dermal scute plates",
      "Up to 4 pairs of prominent tactile barbels around mouth",
      "Sharp, locking pectoral and dorsal spines often mildly venomous",
      "Prominent Weberian apparatus and reduced swim bladder"
    ],
    bn: [
      "সম্পূর্ণ আঁইশহীন ত্বক বা শক্ত অস্থিময় প্লেটযুক্ত দেহ",
      "মুখের চারদিকে ১ থেকে ৪ জোড়া সংবেদনশীল শুঙ্গ (বার্বেল)",
      "পিঠ ও বক্ষপাখনার গোড়ায় শক্ত ও ধারালো আত্মরক্ষামূলক কাঁটা",
      "ওয়েবেরিয়ান যন্ত্র ও অস্থিপরিবেষ্টিত পটকা"
    ]
  },
  'order-anabantiformes': {
    en: [
      "Auxiliary suprabranchial labyrinth organ enabling obligate aerial respiration",
      "Ability to survive in warm, highly hypoxic stagnant waters and crawl overland",
      "Elongated dorsal and anal fins with spiny anterior rays",
      "Parental bubble-nest construction and brood guarding"
    ],
    bn: [
      "বাতাস থেকে শ্বাস নেওয়ার জন্য অতিরিক্ত ল্যাবাইরিন্থ অঙ্গ",
      "অক্সিজেনহীন জলাশয় ও ডাঙায় বেঁচে থাকার ক্ষমতা",
      "পৃষ্ঠ ও পায়ুপাখনার অগ্রভাগে শক্ত কাঁটা",
      "বাতাসের বুদ্বুদ দিয়ে বাসা তৈরি ও অভিভাবকত্ব"
    ]
  },
  'order-osteoglossiformes': {
    en: [
      "Bony toothed tongue biting against parasphenoid on roof of mouth",
      "Elongated body with dorsal and anal fins positioned far back near tail",
      "Heavy mosaic-like ganoid or large cycloid scales",
      "Primitive teleost branch with fossils dating back to the Jurassic"
    ],
    bn: [
      "মুখের তালুর অস্থির সাথে ঘষা খাওয়া অস্থিময় দাঁতযুক্ত জিহ্বা",
      "দেহের পেছনের দিকে অবস্থিত পৃষ্ঠ ও পায়ুপাখনা",
      "ভারী মোজাইকের মতো শক্ত আঁইশ",
      "জুরাসিক যুগ থেকে টিকে থাকা আদিমতম টেলিয়স্ট শাখা"
    ]
  },
  'order-synbranchiformes': {
    en: [
      "Eel-like scaleless body lacking pectoral and pelvic fins",
      "Branchial apertures fused into a single transverse ventral gill slit beneath throat",
      "Auxiliary buccopharyngeal air-breathing vascular chambers",
      "Protogynous hermaphroditism (transforming from female to male with age)"
    ],
    bn: [
      "বক্ষ ও শ্রোণীপাখনা ছাড়া সর্পিল আঁইশহীন দেহ",
      "গলার নিচে একক অনুভূমিক ফুলকা ছিদ্র",
      "মুখ ও গলবিলীয় বিশেষ রক্তনালীর সাহায্যে বায়বীয় শ্বাসকার্য",
      "বয়সের সাথে স্ত্রী থেকে পুরুষে লিঙ্গান্তর (প্রোটোগাইনাস)"
    ]
  },
  'order-perciformes': {
    en: [
      "Ctenoid scales covering body and cheeks",
      "Dorsal fin divided into anterior spiny and posterior soft-rayed sections",
      "Thoracic pelvic fins bearing one spine and five soft rays",
      "Absence of Weberian apparatus; physoclistous swim bladder"
    ],
    bn: [
      "টিনয়েড আঁইশে আবৃত দেহ ও গাল",
      "পৃষ্ঠপাখনা সামনের শক্ত কাঁটাযুক্ত এবং পেছনের নরম রশ্মিযুক্ত অংশে বিভক্ত",
      "একটি শক্ত কাঁটা ও পাঁচটি রশ্মিযুক্ত বক্ষীয় শ্রোণীপাখনা",
      "ওয়েবেরিয়ান যন্ত্রহীন ও ফাইসোক্লিস্টাস পটকা"
    ]
  },
  'order-coelacanthiformes': {
    en: [
      "Muscular lobed paired fins with internal skeletal elements",
      "Three-lobed diphycercal tail with central axial filament",
      "Intracranial skull joint allowing upper jaw elevation",
      "Rostral electrosensory gel-filled organ for hunting in deep submarine caves"
    ],
    bn: [
      "অভ্যন্তরীণ অস্থিসমৃদ্ধ পেশীবহুল মাংসল যুগ্ম পাখনা",
      "তিনটি খণ্ডযুক্ত ডাইফাইসার্কাল পুচ্ছপাখনা",
      "করোটিকার নমনীয় জয়েন্ট যা চোয়াল তুলতে সাহায্য করে",
      "গভীর সমুদ্রের আগ্নেয়গিরির গুহায় শিকার শনাক্তে রোস্ট্রাল অঙ্গ"
    ]
  },
  'order-ceratodontiformes': {
    en: [
      "Functional vascularized lungs derived from modified swim bladder",
      "Massive fan-shaped crushing tooth plates fused to jaws",
      "Aestivation inside underground mud-mucus cocoons during drought in African forms",
      "Internal nostrils (choanae) and fleshy paired fins"
    ],
    bn: [
      "রক্তনালীপূর্ণ কার্যকরী ফুসফুস যা দিয়ে সরাসরি বাতাস গ্রহণ করে",
      "শক্ত শামুক ও খাদ্য চূর্ণ করার মজবুত পাখনার মতো দাঁতের প্লেট",
      "খরায় মাটির নিচে মিউকাসের কোকুন তৈরি করে দীর্ঘ সুপ্তাবস্থা (এস্টিভেশন)",
      "অভ্যন্তরীণ নাসারন্ধ্র ও মাংসল যুগ্ম পাখনা"
    ]
  }
};

const updatedExistingRecords = records.map(r => {
  if (r.id === 'class-chondrichthyes') {
    return { ...r, orders: chondrichthyesOrders };
  }
  if (r.id === 'superclass-osteichthyes') {
    return { ...r, orders: osteichthyesOrders };
  }
  if (r.id === 'class-actinopterygii') {
    return { ...r, orders: actinopterygiiOrders };
  }
  if (existingOrderKeyFeatures[r.id]) {
    return {
      ...r,
      diagnosticCharacteristics: {
        ...r.diagnosticCharacteristics,
        keyFeatures: existingOrderKeyFeatures[r.id]
      }
    };
  }
  return r;
});

// Insert new orders before phylum-porifera (which is the first non-fish marine record)
const poriferaIndex = updatedExistingRecords.findIndex(r => r.id === 'phylum-porifera');
if (poriferaIndex === -1) {
  throw new Error('Could not find phylum-porifera in existing records');
}

const finalRecords = [
  ...updatedExistingRecords.slice(0, poriferaIndex),
  ...newOrders,
  ...updatedExistingRecords.slice(poriferaIndex)
];

console.log(`Total final records: ${finalRecords.length} (was ${records.length})`);

// Validation checks
const orderRecords = finalRecords.filter(r => r.rank === 'order' && r.category === 'fish');
console.log(`Total fish order records: ${orderRecords.length}`);
if (orderRecords.length !== 34) {
  throw new Error(`Expected 34 fish order records, got ${orderRecords.length}`);
}

// Check that each of the 34 orders has all 11 categories
const requiredCategories = [
  'shortDescription',
  'diagnosticCharacteristics',
  'habitat',
  'ecosystem',
  'feeding',
  'reproduction',
  'distribution',
  'importantFamilies',
  'scientificNamesSummary',
  'examplesSummary',
  'additionalInformation'
];

for (const ord of orderRecords) {
  for (const cat of requiredCategories) {
    if (!ord[cat]) {
      throw new Error(`Order ${ord.id} is missing category: ${cat}`);
    }
  }
  if (!ord.diagnosticCharacteristics.keyFeatures) {
    throw new Error(`Order ${ord.id} is missing diagnosticCharacteristics.keyFeatures`);
  }
  if (!ord.habitat.systems || !ord.habitat.systems.length) {
    throw new Error(`Order ${ord.id} is missing habitat.systems`);
  }
  if (!ord.importantFamilies.length) {
    throw new Error(`Order ${ord.id} has empty importantFamilies`);
  }
}

console.log('All 34 orders validated for complete 11-category knowledge schema.');

// Write back to seedTaxonKnowledge.ts
const fileHeader = `// BiotaElite 2.0 Comprehensive Taxonomic Knowledge Base
// MASTER-FIX-02+03 & MASTER-FIX-05: Complete 34 Global Fish Orders & Non-Fish Marine Life
// Implements full 11 Order-Level Knowledge Categories and Rank-Aware Graph Linking
import type { TaxonKnowledgeRecord } from '../types/biodiversity';

export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ${JSON.stringify(finalRecords, null, 2)};
`;

fs.writeFileSync(seedPath, fileHeader, 'utf8');
console.log(`Successfully written ${seedPath}`);
