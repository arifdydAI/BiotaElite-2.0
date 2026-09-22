// Script to upgrade seedTaxonKnowledge.ts to include Agnatha, Osteichthyes, and all 11 order knowledge categories
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seedTaxonKnowledge.ts');
const rawCode = fs.readFileSync(filePath, 'utf8');

// Load current records
const js = ts.transpileModule(rawCode, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const m = { exports: {} };
const fn = new Function('module', 'exports', 'require', js);
fn(m, m.exports, require);
const records = m.exports.SEED_TAXON_KNOWLEDGE;

console.log(`Loaded ${records.length} records.`);

// Additional / updated knowledge dictionary
const knowledgeEnhancements = {
  'class-chondrichthyes': {
    taxonId: 'taxon-chondrichthyes',
    parentTaxonId: 'taxon-chordata',
    scientificNamesSummary: {
      en: 'Prominent genera include Chiloscyllium, Carcharhinus, Sphyrna, Pristis, Rhynchobatus, and Chimaera. Classical binomials: Chiloscyllium indicum (Gmelin, 1789), Carcharhinus leucas (Müller & Henle, 1839), and Pristis pristis (Linnaeus, 1758).',
      bn: 'উল্লেখযোগ্য গণের মধ্যে রয়েছে Chiloscyllium, Carcharhinus, Sphyrna, Pristis, Rhynchobatus এবং Chimaera। প্রামাণ্য বৈজ্ঞানিক নাম: Chiloscyllium indicum (Gmelin, 1789), Carcharhinus leucas (Müller & Henle, 1839), এবং Pristis pristis (Linnaeus, 1758)।'
    },
    examplesSummary: {
      en: 'Five verified representative examples: Slender Bamboo Shark (Chiloscyllium indicum), Bull Shark (Carcharhinus leucas), Common Sawfish (Pristis pristis), Bowmouth Guitarfish (Rhina ancylostoma), and Rabbitfish (Chimaera monstrosa).',
      bn: 'পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: সরু বাঁশ হাঙ্গর (Chiloscyllium indicum), ষাঁড় হাঙ্গর (Carcharhinus leucas), সাধারণ করাত মাছ (Pristis pristis), ধনুকমুখ গিটারফিশ (Rhina ancylostoma) এবং খরগোশ মাছ (Chimaera monstrosa)।'
    },
    additionalInformation: {
      en: 'Cartilaginous fishes have inhabited the oceans for more than 400 million years. Because of slow sexual maturation, extended gestation, and low fecundity, elasmobranchs are extraordinarily vulnerable to commercial overfishing and coastal habitat disruption in the Bay of Bengal.',
      bn: 'তরুণাস্থিময় মাছ ৪০০ মিলিয়নেরও বেশি বছর ধরে সমুদ্রে টিকে রয়েছে। অত্যন্ত ধীর বৃদ্ধি, দীর্ঘ গর্ভধারণ এবং অল্প সংখ্যক সন্তান উৎপাদনের কারণে বঙ্গোপসাগরে অতিরিক্ত মৎস্য আহরণ ও আবাসস্থল ধ্বংসের মুখে এরা চরম সংকটাপন্ন।'
    }
  },
  'class-actinopterygii': {
    taxonId: 'taxon-actinopterygii',
    parentTaxonId: 'superclass-osteichthyes',
    scientificNamesSummary: {
      en: 'Includes dominant teleost lineages: Cypriniformes, Siluriformes, Clupeiformes, Perciformes, Anabantiformes, and Synbranchiformes. Classical binomials: Tenualosa ilisha (Hamilton, 1822), Labeo rohita (Hamilton, 1822), and Wallago attu (Bloch & Schneider, 1801).',
      bn: 'প্রধান প্রধান টেলিয়স্ট বর্গসমূহ অন্তর্ভুক্ত: Cypriniformes, Siluriformes, Clupeiformes, Perciformes, Anabantiformes এবং Synbranchiformes। প্রখ্যাত বৈজ্ঞানিক নাম: Tenualosa ilisha (Hamilton, 1822), Labeo rohita (Hamilton, 1822) এবং Wallago attu (Bloch & Schneider, 1801)।'
    },
    examplesSummary: {
      en: 'Verified examples include Hilsa Shad (Tenualosa ilisha), Rohu (Labeo rohita), Catla (Catla catla), Mrigal Carp (Cirrhinus mrigala), and Native Deshi Magur (Clarias magur).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে জাতীয় মাছ ইলিশ (Tenualosa ilisha), রুই (Labeo rohita), কাতলা (Catla catla), মৃগেল (Cirrhinus mrigala) এবং দেশি মাগুর (Clarias magur)।'
    },
    additionalInformation: {
      en: 'Actinopterygii represents the most ecologically dominant vertebrate clade in aquatic ecosystems. In Bangladesh, ray-finned fishes provide over 60% of national animal protein intake and support extensive rural aquaculture and riverine capture fisheries.',
      bn: 'অ্যাক্টিনোপ্টেরিগি জলজ বাস্তুতন্ত্রের সবচেয়ে প্রভাবশালী মেরুদণ্ডী শ্রেণী। বাংলাদেশে এ মাছগুলো জাতীয় প্রাণীজ আমিষের ৬০%-এরও বেশি সরবরাহ করে এবং গ্রামীণ অর্থনীতি ও নদীজ মৎস্যজীবীদের জীবিকার প্রধান উৎস।'
    }
  },
  'class-sarcopterygii': {
    taxonId: 'taxon-sarcopterygii',
    parentTaxonId: 'superclass-osteichthyes',
    scientificNamesSummary: {
      en: 'Notable genera include Latimeria (marine coelacanths), Protopterus (African lungfishes), Lepidosiren (South American lungfish), and Neoceratodus (Australian lungfish). Binomials: Latimeria chalumnae Smith, 1939 and Neoceratodus forsteri (Krefft, 1870).',
      bn: 'উল্লেখযোগ্য গণের মধ্যে রয়েছে Latimeria (সামুদ্রিক সিল্যাকান্থ), Protopterus (আফ্রিকান ফুসফুসযুক্ত মাছ), Lepidosiren (দক্ষিণ আমেরিকান ফুসফুসযুক্ত মাছ) এবং Neoceratodus (অস্ট্রেলীয় ফুসফুসযুক্ত মাছ)। বৈজ্ঞানিক নাম: Latimeria chalumnae Smith, 1939 এবং Neoceratodus forsteri (Krefft, 1870)।'
    },
    examplesSummary: {
      en: 'Five verified living representative examples: West Indian Ocean Coelacanth (Latimeria chalumnae), Indonesian Coelacanth (Latimeria menadoensis), West African Lungfish (Protopterus annectens), South American Lungfish (Lepidosiren paradoxa), and Queensland Lungfish (Neoceratodus forsteri).',
      bn: 'পাঁচটি যাচাইকৃত জীবিত প্রামাণ্য উদাহরণ: পশ্চিম ভারত মহাসাগরের সিল্যাকান্থ (Latimeria chalumnae), ইন্দোনেশীয় সিল্যাকান্থ (Latimeria menadoensis), পশ্চিম আফ্রিকান লাংফিশ (Protopterus annectens), দক্ষিণ আমেরিকান লাংফিশ (Lepidosiren paradoxa) এবং কুইন্সল্যান্ড লাংফিশ (Neoceratodus forsteri)।'
    },
    additionalInformation: {
      en: 'Sarcopterygians hold immense evolutionary significance as the sister clade to all terrestrial tetrapods. Living species are living fossils whose pectoral and pelvic bone architecture directly mirrors the limbs of land vertebrates. Zero living species occur in Bangladesh.',
      bn: 'সারকোপ্টেরিগিয়ানরা সকল স্থলচর চতুস্পদ প্রাণীদের নিকটতম জ্ঞাতি হিসেবে বিবর্তনীয় গবেষণায় অমূল্য। এদের বক্ষ ও শ্রোণীপাখনার কঙ্কাল চতুষ্পদীদের হাত ও পায়ের আদি রূপ। বাংলাদেশে এদের কোনো জীবিত সদস্য নেই।'
    }
  },
  'order-orectolobiformes': {
    taxonId: 'taxon-orectolobiformes',
    scientificNamesSummary: {
      en: 'Key genera: Chiloscyllium, Rhincodon, Stegostoma, Orectolobus. Prominent binomials: Chiloscyllium indicum (Gmelin, 1789), Chiloscyllium punctatum Müller & Henle, 1838, Rhincodon typus Smith, 1828, and Stegostoma tigrinum (Forster, 1781).',
      bn: 'প্রধান গণ: Chiloscyllium, Rhincodon, Stegostoma, Orectolobus। বিশিষ্ট বৈজ্ঞানিক নাম: Chiloscyllium indicum (Gmelin, 1789), Chiloscyllium punctatum Müller & Henle, 1838, Rhincodon typus Smith, 1828, এবং Stegostoma tigrinum (Forster, 1781)।'
    },
    examplesSummary: {
      en: 'Verified examples include Slender Bamboo Shark (Chiloscyllium indicum), Brownbanded Bamboo Shark (Chiloscyllium punctatum), Whale Shark (Rhincodon typus), Zebra Shark (Stegostoma tigrinum), and Spotted Wobbegong (Orectolobus maculatus).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে সরু বাঁশ হাঙ্গর (Chiloscyllium indicum), বাদামী-ডোরা বাঁশ হাঙ্গর (Chiloscyllium punctatum), তিমি হাঙ্গর (Rhincodon typus), জেব্রা হাঙ্গর (Stegostoma tigrinum) এবং চিতাবাঘ ওবেগং (Orectolobus maculatus)।'
    },
    additionalInformation: {
      en: 'Ranging from bottom-dwelling catsharks to the largest living fish (Rhincodon typus), carpet sharks play vital roles in benthic coastal lagoons, reefs, and open oceans. Many species are threatened by commercial trawling and incidental bycatch.',
      bn: 'তলদেশীয় ছোট বাঁশ হাঙ্গর থেকে পৃথিবীর বৃহত্তম মাছ তিমি হাঙ্গর পর্যন্ত এই বর্গের অন্তর্গত। তলদেশীয় খাদ্য শৃঙ্খলে এদের ভূমিকা গুরুত্বপূর্ণ। উপকূলীয় বটম ট্রলিং ও অসতর্ক মাছ ধরার কারণে বহু প্রজাতি হুমকির মুখে।'
    }
  },
  'order-clupeiformes': {
    taxonId: 'taxon-clupeiformes',
    scientificNamesSummary: {
      en: 'Dominant genera: Tenualosa, Sardinella, Anodontostoma, Dussumieria, Coilia, Setipinna. Verified binomials: Tenualosa ilisha (Hamilton, 1822), Sardinella longiceps Valenciennes, 1847, and Setipinna phasa (Hamilton, 1822).',
      bn: 'প্রধান গণ: Tenualosa, Sardinella, Anodontostoma, Dussumieria, Coilia, Setipinna। বৈজ্ঞানিক নাম: Tenualosa ilisha (Hamilton, 1822), Sardinella longiceps Valenciennes, 1847, এবং Setipinna phasa (Hamilton, 1822)।'
    },
    examplesSummary: {
      en: 'Verified examples include Hilsa Shad (Tenualosa ilisha), Indian Oil Sardine (Sardinella longiceps), Chacunda Gizzard Shad (Anodontostoma chacunda), Gangetic Hairfin Anchovy (Setipinna phasa), and Goldstripe Pony Herring (Dussumieria acuta).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে জাতীয় মাছ ইলিশ (Tenualosa ilisha), ভারতীয় তেল সার্ডিন (Sardinella longiceps), চকুনদা গিজার্ড শ্যাড (Anodontostoma chacunda), ফ্যাঁসা মাছ (Setipinna phasa) এবং রেইনবো সার্ডিন (Dussumieria acuta)।'
    },
    additionalInformation: {
      en: 'Clupeiforms are anadromous or coastal pelagic schooling fishes constituting the single most valuable commercial fishery in Bangladesh. Tenualosa ilisha alone accounts for approximately 12% of total national fish production.',
      bn: 'ইলিশ ও সংশ্লিষ্ট প্রজাতিগুলো বাংলাদেশের মৎস্য অর্থনীতির প্রাণকেন্দ্র। জাতীয় মাছ ইলিশ একা মোট মৎস্য উৎপাদনের প্রায় ১২% অবদান রাখে এবং লক্ষাধিক উপকূলীয় জেলের প্রধান অবলম্বন।'
    }
  },
  'order-cypriniformes': {
    taxonId: 'taxon-cypriniformes',
    scientificNamesSummary: {
      en: 'Dominant genera: Labeo, Catla (Gibelion), Cirrhinus, Pethia, Puntius, Botia, Schistura. Iconic binomials: Labeo rohita (Hamilton, 1822), Catla catla (Hamilton, 1822), Cirrhinus mrigala (Hamilton, 1822), and Pethia conchonius (Hamilton, 1822).',
      bn: 'প্রধান গণ: Labeo, Catla, Cirrhinus, Pethia, Puntius, Botia, Schistura। প্রখ্যাত বৈজ্ঞানিক নাম: Labeo rohita (Hamilton, 1822), Catla catla (Hamilton, 1822), Cirrhinus mrigala (Hamilton, 1822), এবং Pethia conchonius (Hamilton, 1822)।'
    },
    examplesSummary: {
      en: 'Verified examples include Rohu (Labeo rohita), Catla (Catla catla), Mrigal Carp (Cirrhinus mrigala), Rosy Barb (Pethia conchonius), and Olive Barb (Systomus sarana).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে রুই (Labeo rohita), কাতলা (Catla catla), মৃগেল (Cirrhinus mrigala), কাঞ্চন পুঁটি (Pethia conchonius) এবং সরপুঁটি (Systomus sarana)।'
    },
    additionalInformation: {
      en: 'Cypriniformes is the premier freshwater fish order globally and the cornerstone of Bengal aquaculture. The Halda River in southeastern Bangladesh is the only natural tidal river in the world where major Indian carps spawn synchronously during spring thunderstorms.',
      bn: 'কার্প বর্গীয় মাছ বৈশ্বিক মিঠাপানির অন্যতম বৃহত্তম গোষ্ঠী এবং বাংলার অভ্যন্তরীণ মৎস্যচাষের ভিত্তি। দক্ষিণ-পূর্ব বাংলাদেশের হালদা নদী বিশ্বের একমাত্র প্রাকৃতিক জোয়ারভাটার নদী যেখানে ভারতীয় রুই জাতীয় মাছ প্রাকৃতিকভাবে ব্যাপক প্রজনন সম্পন্ন করে।'
    }
  },
  'order-siluriformes': {
    taxonId: 'taxon-siluriformes',
    scientificNamesSummary: {
      en: 'Major genera: Wallago, Clarias, Heteropneustes, Pangasius, Mystus, Ompok, Sperata, Bagarius. Key binomials: Wallago attu (Bloch & Schneider, 1801), Clarias magur (Hamilton, 1822), Heteropneustes fossilis (Bloch, 1794), and Pangasius pangasius (Hamilton, 1822).',
      bn: 'প্রধান গণ: Wallago, Clarias, Heteropneustes, Pangasius, Mystus, Ompok, Sperata, Bagarius। প্রখ্যাত বৈজ্ঞানিক নাম: Wallago attu (Bloch & Schneider, 1801), Clarias magur (Hamilton, 1822), Heteropneustes fossilis (Bloch, 1794) এবং Pangasius pangasius (Hamilton, 1822)।'
    },
    examplesSummary: {
      en: 'Verified examples include Boal / Freshwater Shark (Wallago attu), Native Deshi Magur (Clarias magur), Shing / Stinging Catfish (Heteropneustes fossilis), Yellow Mystus / Tengra (Mystus cavasius), and Pabda (Ompok pabda).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে বোয়াল (Wallago attu), দেশি মাগুর (Clarias magur), শিং (Heteropneustes fossilis), গুলশা-টেংরা (Mystus cavasius) এবং পাবদা (Ompok pabda)।'
    },
    additionalInformation: {
      en: 'Catfishes possess remarkable sensory adaptations with four pairs of sensitive barbels and Weberian apparatus. Many species (Clariidae, Heteropneustidae) feature vascularized accessory suprabranchial air-breathing organs enabling survival in deoxygenated stagnant waters.',
      bn: 'ক্যাটফিশদের মুখের চারজোড়া সংবেদনশীল শুঙ্গ ও স্পর্শগ্রাহী অঙ্গ থাকে। মাগুর ও শিং মাছে বিশেষ অতিরিক্ত শ্বসন অঙ্গ (সুপ্রাব্রাঙ্কিয়াল অর্গান) থাকে যার ফলে এরা অক্সিজেনহীন পচা পানিতে ও আর্দ্র কাদার ভেতর দীর্ঘক্ষণ বেঁচে থাকতে পারে।'
    }
  },
  'order-anabantiformes': {
    taxonId: 'taxon-anabantiformes',
    scientificNamesSummary: {
      en: 'Prominent genera: Anabas, Channa, Trichogaster, Colisa, Betta, Osphronemus. Verified binomials: Anabas testudineus (Bloch, 1792), Channa striata (Bloch, 1793), Channa punctata (Bloch, 1793), and Trichogaster fasciata Bloch & Schneider, 1801.',
      bn: 'প্রধান গণ: Anabas, Channa, Trichogaster, Colisa, Betta, Osphronemus। বৈজ্ঞানিক নাম: Anabas testudineus (Bloch, 1792), Channa striata (Bloch, 1793), Channa punctata (Bloch, 1793), এবং Trichogaster fasciata Bloch & Schneider, 1801।'
    },
    examplesSummary: {
      en: 'Verified examples include Climbing Perch / Koi (Anabas testudineus), Striped Snakehead / Shol (Channa striata), Spotted Snakehead / Taki (Channa punctata), Banded Gourami / Kholisha (Trichogaster fasciata), and Great Snakehead / Gajar (Channa marulius).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে কৈ (Anabas testudineus), শোল (Channa striata), টাকি (Channa punctata), খলিসা (Trichogaster fasciata) এবং গজার (Channa marulius)।'
    },
    additionalInformation: {
      en: 'Characterized by an auxiliary labyrinth organ situated above the first gill arch that facilitates direct aerial oxygen absorption. Anabas testudineus can migrate overland between wetlands during monsoon rains utilizing its spiny opercular plates and pectoral fins.',
      bn: 'এদের প্রথম ফুলকা চাপের ওপর একটি জটিল ল্যাবাইরিথ অঙ্গ বা গোলকধাঁধা শ্বসন অঙ্গ থাকে যা সরাসরি বাতাস থেকে অক্সিজেন গ্রহণ করতে দেয়। কৈ মাছ বর্ষাকালে পাখনার ওপর ভর দিয়ে কাদা ও ঘাসের ওপর হেঁটে এক জলাশয় থেকে অন্য জলাশয়ে যেতে পারে।'
    }
  },
  'order-osteoglossiformes': {
    taxonId: 'taxon-osteoglossiformes',
    scientificNamesSummary: {
      en: 'Key genera: Chitala, Notopterus, Osteoglossum, Arapaima, Pantodon. Verified binomials: Chitala chitala (Hamilton, 1822), Notopterus notopterus (Pallas, 1769), and Arapaima gigas (Schinz, 1822).',
      bn: 'প্রধান গণ: Chitala, Notopterus, Osteoglossum, Arapaima, Pantodon। বৈজ্ঞানিক নাম: Chitala chitala (Hamilton, 1822), Notopterus notopterus (Pallas, 1769), এবং Arapaima gigas (Schinz, 1822)।'
    },
    examplesSummary: {
      en: 'Verified examples include Clown Knifefish / Chital (Chitala chitala), Bronze Featherback / Foli (Notopterus notopterus), Silver Arowana (Osteoglossum bicirrhosum), Pirarucu (Arapaima gigas), and Freshwater Butterflyfish (Pantodon buchholzi).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে চিতল (Chitala chitala), ফলি (Notopterus notopterus), সিলভার অ্যারোয়ানা (Osteoglossum bicirrhosum), পিরারুকু (Arapaima gigas) এবং আফ্রিকান প্রজাপতি মাছ (Pantodon buchholzi)।'
    },
    additionalInformation: {
      en: 'Osteoglossiformes ("bony tongues") is an ancient teleost lineage retaining primitive morphological characteristics including a toothed parasitic bone on the floor of the mouth biting against parasphenoid teeth. Chitala chitala is an esteemed food fish in the Bengal delta.',
      bn: 'অস্টিওগ্লসিফর্মিস বা অস্থিময় জিভযুক্ত মাছ প্রাচীন টেলিয়স্ট মাছের একটি শাখা। এদের জিভের ওপর ধারালো দাঁত থাকে যা তালুর ওপর ঘষা লেগে শিকারকে চূর্ণ করে। পদ্মা ও মেঘনা অববাহিকার চিতল মাছ এর প্রখ্যাত উদাহরণ।'
    }
  },
  'order-synbranchiformes': {
    taxonId: 'taxon-synbranchiformes',
    scientificNamesSummary: {
      en: 'Prominent genera: Mastacembelus, Macrognathus, Monopterus, Synbranchus. Key binomials: Mastacembelus armatus (Lacepède, 1800), Macrognathus aculeatus (Bloch, 1786), Macrognathus pancalus Hamilton, 1822, and Monopterus cuchia (Hamilton, 1822).',
      bn: 'প্রধান গণ: Mastacembelus, Macrognathus, Monopterus, Synbranchus। বৈজ্ঞানিক নাম: Mastacembelus armatus (Lacepède, 1800), Macrognathus aculeatus (Bloch, 1786), Macrognathus pancalus Hamilton, 1822 এবং Monopterus cuchia (Hamilton, 1822)।'
    },
    examplesSummary: {
      en: 'Verified examples include Tire-track Spiny Eel / Baim (Mastacembelus armatus), Lesser Spiny Eel / Tara Baim (Macrognathus aculeatus), Barred Spiny Eel / Guchi Baim (Macrognathus pancalus), and Mud Eel / Gangetic Cuchia (Monopterus cuchia).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে শাল বাইম (Mastacembelus armatus), তারা বাইম (Macrognathus aculeatus), গুচি বাইম (Macrognathus pancalus) এবং কুচিয়া (Monopterus cuchia)।'
    },
    additionalInformation: {
      en: 'Elongated, eel-shaped teleosts with continuous or reduced fins adapted for burrowing in benthic mud and vegetation. Monopterus cuchia possesses reduced respiratory gills and dual vascularized pharyngeal air-sacs, enabling prolonged survival out of water.',
      bn: 'সর্পিল লম্বা দেহযুক্ত মাছ যা জলাশয়ের কাদায় গর্ত করে বাস করার জন্য অত্যন্ত অভিযোজিত। কুচিয়া মাছের ফুলকা সংকুচিত হলেও বিশেষ গলবিলীয় বায়ুথলি থাকার কারণে এরা জলবিহীন ভিজে কাদায় কয়েক দিন পর্যন্ত জীবিত থাকতে পারে।'
    }
  },
  'order-perciformes': {
    taxonId: 'taxon-perciformes',
    scientificNamesSummary: {
      en: 'Major genera: Lates, Sillago, Johnius, Otolithes, Scatophagus, Polynemus. Prominent binomials: Lates calcarifer (Bloch, 1790), Sillago sihama (Forsskål, 1775), and Johnius coitor (Hamilton, 1822).',
      bn: 'প্রধান গণ: Lates, Sillago, Johnius, Otolithes, Scatophagus, Polynemus। বৈজ্ঞানিক নাম: Lates calcarifer (Bloch, 1790), Sillago sihama (Forsskål, 1775), এবং Johnius coitor (Hamilton, 1822)।'
    },
    examplesSummary: {
      en: 'Verified examples include Barramundi / Asian Seabass / Koral (Lates calcarifer), Silver Whitings (Sillago sihama), Coitor Croaker / Poa (Johnius coitor), Spotted Scat / Bishtara (Scatophagus argus), and Mangrove Red Snapper (Lutjanus argentimaculatus).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে ভেটকি বা কোরাল (Lates calcarifer), রেখা বা তুলার ডান্ডি (Sillago sihama), কয়টর পোয়া (Johnius coitor), বিশতারা (Scatophagus argus) এবং লাল কোরাল (Lutjanus argentimaculatus)।'
    },
    additionalInformation: {
      en: 'Traditionally the largest vertebrate order, modern phylogenetic systematics splits Perciformes into well-defined clades. In coastal Bangladesh, percoid fishes like Lates calcarifer represent premier high-value commercial estuarine and marine captures.',
      bn: 'ঐতিহ্যগতভাবে মেরুদণ্ডীদের বৃহত্তম বর্গ। উপকূলীয় ও সুন্দরবনের মোহনাজ অঞ্চলে কোরাল বা ভেটকি (Lates calcarifer) এবং পোয়া মাছ উচ্চ মূল্যের সুস্বাদু সামুদ্রিক বাণিজ্যিক মৎস্যসম্পদ হিসেবে পরিগণিত।'
    }
  },
  'order-coelacanthiformes': {
    taxonId: 'taxon-coelacanthiformes',
    scientificNamesSummary: {
      en: 'Single living genus: Latimeria. Living binomials: Latimeria chalumnae Smith, 1939 (West Indian Ocean Coelacanth) and Latimeria menadoensis Pouyaud, Wirjoatmodjo, Rachmatika, Tjakrawidjaja, Hadiaty & Hadie, 1999 (Indonesian Coelacanth).',
      bn: 'একমাত্র জীবিত গণ: Latimeria। জীবিত বৈজ্ঞানিক নাম: Latimeria chalumnae Smith, 1939 (পশ্চিম ভারত মহাসাগরীয় সিল্যাকান্থ) এবং Latimeria menadoensis Pouyaud et al., 1999 (ইন্দোনেশীয় সিল্যাকান্থ)।'
    },
    examplesSummary: {
      en: 'Verified representative living examples: West Indian Ocean Coelacanth (Latimeria chalumnae) and Indonesian Coelacanth (Latimeria menadoensis). Fossil examples include Coelacanthus granulatus and Mawsonia gigas.',
      bn: 'যাচাইকৃত জীবিত প্রামাণ্য উদাহরণ: পশ্চিম ভারত মহাসাগরীয় সিল্যাকান্থ (Latimeria chalumnae) এবং ইন্দোনেশীয় সিল্যাকান্থ (Latimeria menadoensis)।'
    },
    additionalInformation: {
      en: 'Presumed extinct for 66 million years until a live specimen was hauled from South African waters off the Chalumna River in 1938. Coelacanths possess an intracranial hinge joint in the skull and lipid-filled vestigial lung. Zero living species occur in Bangladesh.',
      bn: '৬৬ মিলিয়ন বছর পূর্বে ডাইনোসরদের সাথে বিলুপ্ত মনে করা হতো, যতক্ষণ না ১৯৩৮ সালে দক্ষিণ আফ্রিকার চালুমনা নদীর মোহনায় একটি জীবিত সিল্যাকান্থ ধরা পড়ে। এদের মাথার খুলিতে বিশেষ কব্জা সন্ধি রয়েছে। বাংলাদেশে এদের কোনো প্রজাতি নেই।'
    }
  },
  'order-ceratodontiformes': {
    taxonId: 'taxon-ceratodontiformes',
    scientificNamesSummary: {
      en: 'Key genera: Neoceratodus (Australia), Protopterus (Africa), Lepidosiren (South America). Living binomials: Neoceratodus forsteri (Krefft, 1870), Protopterus annectens (Owen, 1839), and Lepidosiren paradoxa Fitzinger, 1837.',
      bn: 'প্রধান গণ: Neoceratodus (অস্ট্রেলিয়া), Protopterus (আফ্রিকা), Lepidosiren (দক্ষিণ আমেরিকা)। জীবিত বৈজ্ঞানিক নাম: Neoceratodus forsteri (Krefft, 1870), Protopterus annectens (Owen, 1839), এবং Lepidosiren paradoxa Fitzinger, 1837।'
    },
    examplesSummary: {
      en: 'Verified living representative examples: Australian Lungfish (Neoceratodus forsteri), West African Lungfish (Protopterus annectens), Marbled Lungfish (Protopterus aethiopicus), and South American Lungfish (Lepidosiren paradoxa).',
      bn: 'যাচাইকৃত জীবিত প্রামাণ্য উদাহরণ: অস্ট্রেলীয় লাংফিশ (Neoceratodus forsteri), পশ্চিম আফ্রিকান লাংফিশ (Protopterus annectens), মার্বেল লাংফিশ (Protopterus aethiopicus) এবং দক্ষিণ আমেরিকান লাংফিশ (Lepidosiren paradoxa)।'
    },
    additionalInformation: {
      en: 'Lungfishes possess functional vascularized lungs derived from modified swim bladders allowing obligate or facultative air-breathing. Protopterus species can estivate inside underground mud mucus cocoons for multiple years during extreme drought. Zero living species occur in Bangladesh.',
      bn: 'ফুসফুসযুক্ত মাছে কার্যকরী ফুসফুস থাকে যার মাধ্যমে এরা সরাসরি বাতাস থেকে শ্বাস নেয়। আফ্রিকান লাংফিশ চরম খরার মৌসুমে মাটির নিচে শ্লেষ্মার কোকুন তৈরি করে কয়েক বছর পর্যন্ত সুপ্তাবস্থায় বেঁচে থাকতে পারে। বাংলাদেশে এদের কোনো প্রজাতি নেই।'
    }
  },
  // Marine non-fish links
  'order-cetacea': {
    taxonId: 'taxon-artiodactyla',
    scientificNamesSummary: {
      en: 'Notable cetacean genera in the northern Bay of Bengal: Orcaella, Neophocaena, Sousa, Stenella, Balaenoptera. Binomials: Orcaella brevirostris (Owen in Gray, 1866) and Neophocaena phocaenoides (Cuvier, 1829).',
      bn: 'উত্তর বঙ্গোপসাগরের উল্লেখযোগ্য সিটাসিয়ান গণ: Orcaella, Neophocaena, Sousa, Stenella, Balaenoptera। বৈজ্ঞানিক নাম: Orcaella brevirostris (Owen in Gray, 1866) এবং Neophocaena phocaenoides (Cuvier, 1829)।'
    },
    examplesSummary: {
      en: 'Verified examples include the Irrawaddy Dolphin (Orcaella brevirostris), Indo-Pacific Finless Porpoise (Neophocaena phocaenoides), and Indo-Pacific Humpback Dolphin (Sousa chinensis).',
      bn: 'যাচাইকৃত উদাহরণের মধ্যে রয়েছে ইরাবতী ডলফিন (Orcaella brevirostris), পাখনাপোড়া বা ফিনলেস পোরপোয়েজ (Neophocaena phocaenoides) এবং ইন্দো-প্যাসিফিক হাম্পব্যাক ডলফিন (Sousa chinensis)।'
    },
    additionalInformation: {
      en: 'Cetaceans are fully aquatic placental mammals phylogenetically nested within Artiodactyla (Cetartiodactyla). Bangladesh coastal waters and the Swatch of No Ground support globally critical populations of freshwater and coastal cetaceans protected under national wildlife acts.',
      bn: 'সিটাসিয়ানরা সম্পূর্ণ জলজ স্তন্যপায়ী যারা বিবর্তনগতভাবে আর্টিওড্যাকটাইলা বর্গের অন্তর্ভুক্ত। সুন্দরবনের মোহনা ও সোয়াচ অব নো গ্রাউন্ড সাবমেরিন ক্যানিয়ন বৈশ্বিকভাবে ইরাবতী ডলফিনের অত্যন্ত গুরুত্বপূর্ণ নিরাপদ আশ্রয়স্থল।'
    }
  },
  'order-sirenia': {
    taxonId: 'taxon-sirenia'
  },
  'order-pinnipedia': {
    taxonId: 'taxon-pinnipedia'
  },
  'order-chelonioidea': {
    taxonId: 'taxon-chelonioidea'
  },
  'order-hydrophiinae': {
    taxonId: 'taxon-hydrophiinae'
  }
};

// New records to add
const newRecords = [
  // Superclass Agnatha
  {
    id: 'group-agnatha',
    taxonId: 'taxon-agnatha',
    rank: 'superclass',
    scientificName: 'Agnatha',
    bengaliName: 'চোয়ালবিহীন মাছ (অ্যাগনাথা)',
    englishName: 'Jawless Fishes',
    parentTaxonId: 'taxon-chordata',
    category: 'fish',
    classificationHierarchy: [
      { rank: 'kingdom', name: 'Animalia', nameBn: 'প্রাণিজগৎ' },
      { rank: 'phylum', name: 'Chordata', nameBn: 'কর্ডাটা' },
      { rank: 'subphylum', name: 'Craniata', nameBn: 'ক্রেনিয়াটা' },
      { rank: 'superclass', name: 'Agnatha', nameBn: 'চোয়ালবিহীন মাছ' }
    ],
    shortDescription: {
      en: 'Primitive jawless craniate aquatic vertebrates comprising living hagfishes (Myxini) and lampreys (Petromyzontida). They lack true jaws, paired fins, and scales, retaining a persistent notochord throughout life.',
      bn: 'আদিম চোয়ালবিহীন করোটিকাধারী জলজ মেরুদণ্ডী প্রাণী, যার অন্তর্ভুক্ত জীবিত হ্যাগফিশ (মিক্সিনি) ও ল্যাম্প্রে (পেট্রোমাইজন্টিডা)। এদের প্রকৃত চোয়াল, যুগ্ম পাখনা এবং আঁইশ নেই; আজীবন স্থিতিস্থাপক নটোকর্ড বজায় থাকে।'
    },
    diagnosticCharacteristics: {
      en: 'Absence of true articulated jaws (mouth round or slit-like, surrounded by keratinized rasps or sensory tentacles); endoskeleton cartilaginous or non-ossified fibrous tissue; complete absence of paired pectoral or pelvic girdles/fins; body eel-like and scaleless with abundant epidermal slime glands in Myxini; single median nostril or nasohypophyseal aperture; 1 to 16 pairs of external gill pores.',
      bn: 'প্রকৃত সংযোগযুক্ত চোয়ালের অনুপস্থিতি (মুখগোলাকার বা চিরুনি-সদৃশ, ক্যারোটিনাস দাঁত বা শুঙ্গযুক্ত); তরুণাস্থিময় বা তন্তুময় অন্তঃকঙ্কাল; যুগ্ম বক্ষ বা শ্রোণী পাখনার অনুপস্থিতি; আঁইশহীন সর্পিল দেহ এবং মিক্সিনিতে প্রচুর শ্লেষ্মা গ্রন্থির উপস্থিতি; একক মধ্যম নাসারন্ধ্র; ১ থেকে ১৬ জোড়া ফুলকা ছিদ্র।',
      keyFeatures: {
        en: [
          'Complete absence of jaws (mouth circular or suction-adapted with horny teeth)',
          'Absence of paired fins and pectoral/pelvic girdles',
          'Persistent unconstricted notochord lacking complete vertebral centra',
          'Single median nostril opening into olfactory and hypophyseal apparatus',
          'Eel-like scaleless body with copious mucus secretion in hagfishes'
        ],
        bn: [
          'প্রকৃত চোয়ালের সম্পূর্ণ অনুপস্থিতি (গোলাকার চোষক মুখ বা শৃঙ্গীয় দাঁতযুক্ত)',
          'যুগ্ম পাখনা ও বক্ষ/শ্রোণী চক্রের অনুপস্থিতি',
          'আজীবন নটোকর্ডের স্থায়িত্ব ও সম্পূর্ণ কশেরুকার অনুপস্থিতি',
          'একক মধ্যম নাসারন্ধ্র',
          'আঁইশহীন সর্পিল দেহ এবং হ্যাগফিশে প্রচুর মিউকাস ক্ষরণ'
        ]
      }
    },
    habitat: {
      en: 'Marine benthic ocean trenches, continental slopes, and cold-temperate continental shelves (Hagfishes); anadromous coastal marine and temperate freshwater rivers and streams (Lampreys).',
      bn: 'গভীর সমুদ্রের কর্দমাক্ত তলদেশ, মহীঢাল ও মহীসোপান (হ্যাগফিশ); পরিযায়ী উপকূলীয় সমুদ্র এবং নাতিশীতোষ্ণ মিঠাপানির নদী ও পাহাড়ি ঝর্ণা (ল্যাম্প্রে)।',
      systems: ['marine', 'freshwater']
    },
    ecosystem: {
      en: 'Hagfishes function as critical benthic scavengers and detritivores, consuming decaying whale falls and carrion on the ocean floor to accelerate deep-sea nutrient cycling. Lampreys act as ectoparasitic predators or micropredators on larger pelagic teleosts and elasmobranchs, as well as stream filter-feeders in their ammocoete larval stage.',
      bn: 'হ্যাগফিশ সমুদ্রের তলদেশের মৃত তিমি ও পচনশীল দেহাবশেষ খেয়ে গভীর সমুদ্রের পুষ্টি চক্র বজায় রাখে। ল্যাম্প্রে উন্মুক্ত সমুদ্রের বড় মাছের গায়ে চোষক লাগিয়ে রক্ত ও দেহরস চুষে খায় এবং এদের অ্যামোসিট লার্ভা মিঠাপানির তলদেশে মাইক্রো-ফিল্টার ফিডার হিসেবে কাজ করে।'
    },
    feeding: {
      en: 'Hagfishes are opportunistic scavengers and benthic carnivores utilizing a protractible dental plate with dual rows of horny keratin teeth and tying themselves into overhand knots for leverage while tearing flesh. Adult lampreys use a circular oral suction disk with rasplike horny teeth to attach to host fish and ingest blood and fluids; ammocoetes feed on diatoms and detritus.',
      bn: 'হ্যাগফিশ মৃত ও অসুস্থ প্রাণীর দেহ ছিঁড়ে খাওয়ার জন্য মুখের ক্যারোটিন দাঁত ও দেহে গিঁট বাঁধার কৌশল ব্যবহার করে। প্রাপ্তবয়স্ক ল্যাম্প্রে চোষক মুখের সাহায্যে বড় মাছের ত্বকে আটকে থেকে রক্ত ও তরল খাদ্য গ্রহণ করে; এদের লার্ভা ডায়াটম ও জৈব কণা গ্রহণ করে।'
    },
    reproduction: {
      en: 'External fertilization. Hagfishes lay large, yolky eggs enclosed in tough horny shells with hooked anchoring filaments, bypassing a larval stage. Lampreys are semelparous (spawning once and dying) in gravel nests of clear rivers; eggs hatch into blind ammocoete filter-feeding larvae that undergo metamorphosis after 3 to 7 years.',
      bn: 'বাহ্যিক নিষেক। হ্যাগফিশ শক্ত খোলসযুক্ত ও হুকযুক্ত বড় কুসুমময় ডিম পাড়ে এবং কোনো লার্ভা দশা নেই। ল্যাম্প্রে নদী বা ঝর্ণার নুড়িপাথরে বাসা তৈরি করে ডিম পাড়ে এবং প্রজনন শেষেই মারা যায়; ডিম ফুটে অ্যামোসিট লার্ভা বের হয় যা ৩-৭ বছর পর রূপান্তরিত হয়।'
    },
    distribution: {
      en: 'Widespread across temperate and subpolar marine waters of the Atlantic, Pacific, and Southern oceans. Hagfishes range from shallow cold shelves to abyssal depths over 5,000 meters. Lampreys inhabit North and South temperate zones. Strictly zero native verified occurrences in Bangladesh tropical inland or coastal waters.',
      bn: 'বিশ্বের নাতিশীতোষ্ণ ও শীতল মহাসাগরে বিস্তৃত। হ্যাগফিশ অগভীর শীতল সমুদ্র থেকে শুরু করে ৫,০০০ মিটারেরও বেশি গভীরে বাস করে। ল্যাম্প্রে উত্তর ও দক্ষিণ নাতিশীতোষ্ণ অঞ্চলে সীমিত। বাংলাদেশের গ্রীষ্মমন্ডলীয় অভ্যন্তরীণ নদী বা বঙ্গোপসাগরের জলসীমায় কোনো জীবিত দেশীয় প্রজাতি নেই।'
    },
    importantFamilies: [
      {
        name: 'Myxinidae',
        commonEn: 'Hagfishes',
        commonBn: 'হ্যাগফিশ গোত্র',
        diagnosticEn: 'Jawless, single nostril, 1 to 16 pairs of gill apertures, abundant slime pores along body.',
        diagnosticBn: 'চোয়ালহীন, একক নাসারন্ধ্র, ১-১৬ জোড়া ফুলকা ছিদ্র এবং প্রচুর শ্লেষ্মা রন্ধ্র।'
      },
      {
        name: 'Petromyzontidae',
        commonEn: 'Northern Lampreys',
        commonBn: 'ল্যাম্প্রে গোত্র',
        diagnosticEn: 'Toothed, circular sucking oral disc, 7 pairs of external gill pores, functional eyes in adults.',
        diagnosticBn: 'দাঁতযুক্ত গোলাকার চোষক মুখ, ৭ জোড়া ফুলকা ছিদ্র এবং প্রাপ্তবয়স্ক অবস্থায় উন্নত চোখ।'
      }
    ],
    scientificNamesSummary: {
      en: 'Notable genera include Myxine, Eptatretus, Petromyzon, Lampetra, and Geotria. Prominent type species: Myxine glutinosa Linnaeus, 1758 (Atlantic hagfish) and Petromyzon marinus Linnaeus, 1758 (Sea lamprey).',
      bn: 'উল্লেখযোগ্য গণের মধ্যে রয়েছে Myxine, Eptatretus, Petromyzon, Lampetra এবং Geotria। প্রখ্যাত প্রজাতি: Myxine glutinosa Linnaeus, 1758 (আটলান্টিক হ্যাগফিশ) এবং Petromyzon marinus Linnaeus, 1758 (সামুদ্রিক ল্যাম্প্রে)।'
    },
    examplesSummary: {
      en: 'Verified international reference examples: Atlantic Hagfish (Myxine glutinosa), Inshore Hagfish (Eptatretus burgeri), Sea Lamprey (Petromyzon marinus), and European River Lamprey (Lampetra fluviatilis).',
      bn: 'আন্তর্জাতিকভাবে স্বীকৃত প্রামাণ্য উদাহরণ: আটলান্টিক হ্যাগফিশ (Myxine glutinosa), উপকূলীয় হ্যাগফিশ (Eptatretus burgeri), সামুদ্রিক ল্যাম্প্রে (Petromyzon marinus) এবং ইউরোপীয় নদী ল্যাম্প্রে (Lampetra fluviatilis)।'
    },
    additionalInformation: {
      en: 'Agnathans represent the most basal surviving lineage of craniate vertebrates, offering irreplaceable insights into the origin of the vertebrate skull, adaptive immunity, and endocrine regulation. They possess neither jaws nor paired appendages, preserving anatomical blueprints pre-dating the evolution of gnathostomes over 500 million years ago. No native species exist in Bangladesh waters.',
      bn: 'অ্যাগনাথা মেরুদণ্ডী প্রাণীদের প্রাচীনতম জীবিত শাখা, যা মেরুদণ্ডী প্রাণীর করোটিকা, অনাক্রম্যতা ও অন্তঃক্ষরা তন্ত্রের বিবর্তন বুঝতে অপরিহার্য। ৫০০ মিলিয়ন বছরেরও বেশি প্রাচীন এই গোষ্ঠীর কোনো সদস্য বাংলাদেশের জলসীমায় স্বাভাবিকভাবে বাস করে না।'
    },
    orders: ['order-myxiniformes', 'order-petromyzontiformes'],
    exampleSpeciesIds: [],
    referenceIds: ['ref-nelson-2016', 'ref-fishbase-2024', 'ref-eschmeyer-2024'],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Broad et al. (2010)",
    verificationStatus: 'published',
    publishedStatus: true,
    notes: 'Ichthyological Note: Living Agnathans comprise Myxini (hagfishes) and Petromyzontida (lampreys). No native species occur in Bangladesh.'
  },
  // Superclass Osteichthyes
  {
    id: 'superclass-osteichthyes',
    taxonId: 'taxon-osteichthyes',
    rank: 'superclass',
    scientificName: 'Osteichthyes',
    bengaliName: 'অস্থিময় মাছ (অস্টিইকথিস)',
    englishName: 'Bony Fishes',
    parentTaxonId: 'taxon-chordata',
    category: 'fish',
    classificationHierarchy: [
      { rank: 'kingdom', name: 'Animalia', nameBn: 'প্রাণিজগৎ' },
      { rank: 'phylum', name: 'Chordata', nameBn: 'কর্ডাটা' },
      { rank: 'superclass', name: 'Osteichthyes', nameBn: 'অস্থিময় মাছ' }
    ],
    shortDescription: {
      en: 'The vast taxonomic grade/clade of bony vertebrates uniting the ray-finned fishes (Actinopterygii) and lobe-finned fishes (Sarcopterygii). Characterized by true endochondral bone, swim bladder or functional lungs, and an opercular gill cover.',
      bn: 'অস্থিময় জলজ মেরুদণ্ডীদের সুবিশাল ট্যাক্সোনমিক গোষ্ঠী যা কন্টকময় বা রশ্মিপাখনাযুক্ত মাছ (অ্যাক্টিনোপ্টেরিগি) এবং মাংসলপাখনাযুক্ত মাছ (সারকোপ্টেরিগি)-কে একীভূত করে। এদের কঙ্কাল প্রকৃত অস্থিময়, পটকা বা ফুসফুস উপস্থিত এবং অপারকুলাম দ্বারা ফুলকা আবৃত।'
    },
    diagnosticCharacteristics: {
      en: 'Endoskeleton composed primarily of ossified endochondral bone; lungs or hydrostatic swim bladder derived from gut outpocketing; single operculum protecting the branchial chamber on each side; dermal bones forming a complex skull pattern with premaxilla, maxilla, and dentary; scales (ganoid, cycloid, ctenoid, or cosmoid) embedded in dermis; terminal or subterminal mouth.',
      bn: 'প্রকৃত এন্ডোকন্ড্রাল অস্থি দ্বারা গঠিত অন্তঃকঙ্কাল; পৌষ্টিকনালী থেকে উদ্ভূত উদস্থিতিক পটকা বা ফুসফুস; প্রতিটি পাশে অপারকুলাম বা ফুলকা ঢাকনার উপস্থিতি; সুগঠিত চোয়াল ও করোটিকা; ডার্মাল আঁইশ (সাইক্লয়েড, টিনয়েড বা গ্যানয়েড); অগ্রবর্তী মুখ।',
      keyFeatures: {
        en: [
          'Ossified endochondral skeleton replacing embryonic cartilage',
          'Bony operculum enclosing the gill chamber with single branchial slit per side',
          'Gas bladder (swim bladder) serving hydrostatic or respiratory function',
          'Unites modern ray-finned teleosts (Actinopterygii) and lobe-finned sarcopterygians',
          'Over 32,000 extant species, constituting >96% of all living fishes'
        ],
        bn: [
          'ভ্রূণীয় তরুণাস্থির পরিবর্তে গঠিত প্রকৃত শক্ত অস্থিময় কঙ্কাল',
          'প্রতিটি পাশে একক ফুলকা প্রকোষ্ঠ ঢেকে রাখা অস্থিময় অপারকুলাম',
          'প্লবতা বা শ্বসনে সহায়ক গ্যাসপূর্ণ পটকা বা ফুসফুস',
          'রশ্মিপাখনাযুক্ত অ্যাক্টিনোপ্টেরিগি ও মাংসলপাখনাযুক্ত সারকোপ্টেরিগির সমন্বয়',
          '৩২,০০০-এর বেশি জীবিত প্রজাতি, যা সকল মাছের ৯৬%-এরও বেশি'
        ]
      }
    },
    habitat: {
      en: 'Ubiquitous in all freshwater, brackish, and marine habitats from high-altitude Himalayan torrents to deep abyssal marine trenches beyond 8,000 meters.',
      bn: 'হিমালয়ের উচ্চ পাহাড়ি ঝর্ণা থেকে শুরু করে সমুদ্রের আট হাজার মিটারেরও বেশি গভীর অতল গিরিখাত পর্যন্ত সকল মিঠাপানি, মোহনা ও মহাসাগরে বিস্তৃত।',
      systems: ['freshwater', 'brackish', 'marine']
    },
    ecosystem: {
      en: 'Forms the ecological foundation of all aquatic food chains across inland wetlands, river floodplains, estuaries, coral reefs, and open oceans.',
      bn: 'অভ্যন্তরীণ জলাভূমি, প্লাবনভূমি, নদীর তলদেশ, মোহনা, প্রবাল প্রাচীর এবং উন্মুক্ত মহাসাগরের সকল খাদ্য শৃঙ্খলের ভিত্তি গঠন করে।'
    },
    feeding: {
      en: 'Encompasses every conceivable aquatic trophic niche: microplanktivory, herbivory, algivory, detritivory, molluscivory, ambush and pursuit piscivory, and apex predation.',
      bn: 'প্লাঙ্কটনভোজী, তৃণভোজী, শৈবালভোজী, কর্দম ও ডেট্রিটাসভোজী থেকে শুরু করে শীর্ষ শিকারী মাছ পর্যন্ত সকল প্রকার খাদ্যাভ্যাস বিদ্যমান।'
    },
    reproduction: {
      en: 'Predominantly oviparous with external fertilization and high fecundity, though internal fertilization, mouthbrooding, live-bearing (viviparity), and intense nest parental care have evolved independently across multiple lineages.',
      bn: 'অধিকাংশ প্রজাতি বাহ্যিক নিষেকের মাধ্যমে বিপুল সংখ্যক ডিম ছাড়ে; কিছু প্রজাতিতে অভিভাবকত্ব, মুখগহ্বরে ডিম লালন এবং জরায়ুজ প্রসবের মতো উন্নত কৌশল দেখা যায়।'
    },
    distribution: {
      en: 'Global across all continents and oceans. In Bangladesh, over 250 freshwater species and 400 marine species belong to Osteichthyes.',
      bn: 'বিশ্বের প্রতিটি মহাদেশ ও মহাসাগরে বিস্তৃত। বাংলাদেশে ২৫০টিরও বেশি মিঠাপানির এবং ৪০০টিরও বেশি সামুদ্রিক মাছ অস্টিইকথিসের অন্তর্ভুক্ত।'
    },
    importantFamilies: [
      {
        name: 'Cyprinidae',
        commonEn: 'Carps and Minnows',
        commonBn: 'কার্প গোত্র',
        diagnosticEn: 'Toothless jaws, pharyngeal teeth, scaleless head.',
        diagnosticBn: 'দাঁতহীন চোয়াল, গলবিলীয় দাঁত, আঁইশহীন মাথা।'
      },
      {
        name: 'Clupeidae',
        commonEn: 'Herrings and Shads',
        commonBn: 'ইলিশ গোত্র',
        diagnosticEn: 'Compressed silvery body with sharp ventral keel of scutes.',
        diagnosticBn: 'ধারালো স্কিউটযুক্ত রূপালী চ্যাপ্টা দেহ।'
      },
      {
        name: 'Latimeriidae',
        commonEn: 'Coelacanths',
        commonBn: 'সিল্যাকান্থ গোত্র',
        diagnosticEn: 'Lobe-finned marine fishes with three-lobed tail and intracranial joint.',
        diagnosticBn: 'মাংসলপাখনাযুক্ত সামুদ্রিক মাছ যাদের ট্রাই-লোবড লেজ রয়েছে।'
      }
    ],
    scientificNamesSummary: {
      en: 'Encompasses two massive extant classes: Actinopterygii (Klein, 1885) and Sarcopterygii (Romer, 1955). Iconic genera: Tenualosa, Labeo, Clarias, Channa, Wallago, Latimeria, and Neoceratodus.',
      bn: 'দুটি প্রধান জীবিত শ্রেণী ধারণ করে: Actinopterygii এবং Sarcopterygii। প্রখ্যাত গণ: Tenualosa, Labeo, Clarias, Channa, Wallago, Latimeria এবং Neoceratodus।'
    },
    examplesSummary: {
      en: 'Iconic examples include the national fish of Bangladesh, Hilsa Shad (Tenualosa ilisha), Rohu (Labeo rohita), Native Deshi Magur (Clarias magur), Coelacanth (Latimeria chalumnae), and Australian Lungfish (Neoceratodus forsteri).',
      bn: 'প্রখ্যাত উদাহরণের মধ্যে রয়েছে বাংলাদেশের জাতীয় মাছ ইলিশ (Tenualosa ilisha), রুই (Labeo rohita), দেশি মাগুর (Clarias magur), সিল্যাকান্থ (Latimeria chalumnae) এবং অস্ট্রেলীয় ফুসফুসযুক্ত মাছ (Neoceratodus forsteri)।'
    },
    additionalInformation: {
      en: 'Osteichthyes represents the most diverse vertebrate group on Earth. All terrestrial tetrapods (amphibians, reptiles, birds, and mammals) phylogenetically arose from within the sarcopterygian lobe-finned fish lineage during the Devonian period.',
      bn: 'অস্টিইকথিস পৃথিবীর সর্বাধিক বৈচিত্র্যময় মেরুদণ্ডী গোষ্ঠী। আধুনিক জাতিজনি বিন্যাস অনুযায়ী স্তন্যপায়ী ও মানুষসহ সকল চতুষ্পদী প্রাণী ডেভোনিয়ান যুগে এই সারকোপ্টেরিগিয়ান মাংসলপাখনাযুক্ত মাছের পূর্বপুরুষ থেকেই বিবর্তিত হয়েছে।'
    },
    orders: [
      'order-clupeiformes',
      'order-cypriniformes',
      'order-siluriformes',
      'order-anabantiformes',
      'order-osteoglossiformes',
      'order-synbranchiformes',
      'order-perciformes',
      'order-coelacanthiformes',
      'order-ceratodontiformes'
    ],
    exampleSpeciesIds: ['sp-tenualosa-ilisha', 'sp-labeo-rohita', 'sp-catla-catla', 'sp-clarias-magur'],
    referenceIds: ['ref-nelson-2016', 'ref-fishbase-2024', 'ref-eschmeyer-2024', 'ref-rahman-2005'],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    verificationStatus: 'published',
    publishedStatus: true
  }
];

// Merge enhancements into existing records
const updatedRecords = records.map(record => {
  const enh = knowledgeEnhancements[record.id];
  if (!enh) return record;
  return {
    ...record,
    ...enh
  };
});

// Combine newRecords with updatedRecords
// Position Agnatha and Osteichthyes appropriately at the beginning
const finalRecords = [
  newRecords[0], // group-agnatha
  updatedRecords[0], // class-chondrichthyes
  newRecords[1], // superclass-osteichthyes
  ...updatedRecords.slice(1) // rest of records
];

console.log(`Final records count: ${finalRecords.length}`);

// Generate TypeScript code
const tsCode = `// BiotaElite 2.0 Comprehensive Taxonomic Knowledge Base
// MASTER-FIX-02+03: Canonical educational knowledge model for Global Fishes (Agnatha, Chondrichthyes, Osteichthyes) & Non-Fish Marine Life
// Implements full 11 Order-Level Knowledge Categories and Rank-Aware Graph Linking
import type { TaxonKnowledgeRecord } from '../types/biodiversity';

export const SEED_TAXON_KNOWLEDGE: TaxonKnowledgeRecord[] = ${JSON.stringify(finalRecords, null, 2)};
`;

fs.writeFileSync(filePath, tsCode, 'utf8');
console.log('Successfully written src/data/seedTaxonKnowledge.ts');
