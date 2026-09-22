// Batch 4: Orders 31-39
// Cyprinodontiformes, Cichliformes, Mugiliformes, Blenniiformes, Centrarchiformes,
// Labriformes, Acropomatiformes, Acanthuriformes, Lophiiformes

module.exports = [
  // 31. Cyprinodontiformes
  {
    id: "order-cyprinodontiformes",
    taxonId: "taxon-cyprinodontiformes",
    rank: "order",
    scientificName: "Cyprinodontiformes",
    bengaliName: "সাইপ্রিনোডন্টিফর্মিস (কিলিফিশ, গাপ্পি ও টুথকার্প)",
    englishName: "Killifishes, Toothcarps, and Livebearers",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Berg, 1940",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Cyprinodontiformes", nameBn: "সাইপ্রিনোডন্টিফর্মিস" }
    ],
    shortDescription: {
      en: "Small freshwater and brackish teleosts with superior toothed jaws, high tolerance for extreme temperatures and salinities, widespread viviparity (livebearing in guppies and swordtails), and drought-resistant annual eggs.",
      bn: "ছোট মিঠা ও নোনা পানির মাছ; যাদের ঊর্ধ্বমুখী দাঁতযুক্ত মুখ, চরম তাপমাত্রা ও লবণাক্ততা সহনশীলতা, জীবিত বাচ্চা প্রসবের ক্ষমতা (গাপ্পি ও সোর্ডটেইল) এবং খরার মধ্যেও শুকনা মাটিতে অক্ষত থাকা দীর্ঘস্থায়ী ডিম রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Small, laterally compressed or cylindrical fishes; mouth small, terminal to superior, with toothed premaxillary border; single soft-rayed dorsal fin situated far back; pelvic fins abdominal or absent; caudal fin rounded to truncate; internal fertilization and viviparity prevalent in Poeciliidae and Goodeidae via modified anal fin gonopodium in males; annual killifishes (Nothobranchiidae) produce drought-resistant diapause eggs that survive in baked mud for months.",
      bn: "ক্ষুদ্র মাছ; মুখ ছোট ও ঊর্ধ্বমুখী যার প্রি-ম্যাক্সিলায় দাঁত থাকে; পিঠের পেছনের দিকে একক নরম পৃষ্ঠপাখনা; লেজের পাখনা গোলাকার; পোয়েসিলিডি পরিবারের পুরুষ মাছে পায়ুপাখনা রূপান্তরিত হয়ে মিলনাঙ্গ (গনোপোডিয়াম) গঠন করে এবং এরা ডিম না পেড়ে সরাসরি বাচ্চা প্রসব করে; অ্যানুয়াল কিলিফিশরা এমন ডিম পাড়ে যা জলাশয় শুকিয়ে যাওয়ার পরও কয়েক মাস বেঁচে থাকে।",
      keyFeatures: {
        en: [
          "Viviparity and male copulatory gonopodium in livebearers (Poeciliidae)",
          "Drought-resistant diapause eggs surviving in dry mud in annual killifishes",
          "Four-eyed fish (Anableps) with split pupils for simultaneous air and water vision",
          "Extreme ecological tolerance to high temperatures (>40°C) and hypersalinity"
        ],
        bn: [
          "পুরুষের গনোপোডিয়াম এবং সরাসরি জীবিত বাচ্চা প্রসবের ক্ষমতা (লাইভবেয়ারার)",
          "শুকনো মাটিতে বেঁচে থাকা দীর্ঘস্থায়ী ডিম্ব সুপ্তাবস্থা (diapause)",
          "একই সাথে বাতাস ও পানির নিচে দেখার জন্য দ্বিখণ্ডিত চোখের মণি (Anableps)",
          "চরম তাপমাত্রা (>৪০° সে) ও উচ্চ লবণাক্ততায় বেঁচে থাকার ক্ষমতা"
        ]
      }
    },
    habitat: {
      en: "Freshwater streams, seasonal drying rain pools, mangrove swamps, coastal salt marshes, hypersaline lagoons, and desert springs.",
      bn: "মিঠাপানির নদী, ক্ষণস্থায়ী বৃষ্টির ডোবা, ম্যানগ্রোভ জলাভূমি ও উপকূলীয় খাঁড়ি।",
      systems: ["freshwater", "brackish", "marine"]
    },
    ecosystem: {
      en: "Key biological mosquito control agents (Gambusia) and dominant forage micropredators in shallow fringe habitats where larger fishes cannot survive.",
      bn: "মশার লার্ভা দমনের প্রধান প্রাকৃতিক নিয়ন্ত্রক (গাম্বুসিয়া) এবং চরমভাবাপন্ন অগভীর জলাশয়ের খাদ্যজালের মূল উপাদান।"
    },
    feeding: {
      en: "Omnivorous and insectivorous surface feeders, consuming mosquito larvae, microcrustaceans, terrestrial insects, and filamentous algae.",
      bn: "কীটপতঙ্গভোজী; মশার ডিম ও লার্ভা, ভাসমান পোকা ও জলজ শৈবাল খায়।"
    },
    reproduction: {
      en: "Extremely diverse: livebearing (giving birth to fully formed free-swimming fry in Poecilia and Gambusia) or egg-laying with embryonic diapause stages.",
      bn: "অত্যন্ত বৈচিত্র্যময়: সরাসরি পূর্ণাঙ্গ বাচ্চা প্রসব (গাপ্পি ও গাম্বুসিয়া) অথবা দীর্ঘমেয়াদী সুপ্তাবস্থা ধারণকারী ডিম্ব প্রসব।"
    },
    distribution: {
      en: "Worldwide across the Americas, Africa, Southern Europe, and Asia. Aplocheilus panchax (Blue Panchax / Kanpona) is native across all wetlands of Bangladesh.",
      bn: "আমেরিকা, আফ্রিকা ও এশিয়ায় বিস্তৃত। কানপোনা বা চোখপুঁটি (Aplocheilus panchax) বাংলাদেশের সর্বত্র প্রাপ্ত একটি দেশীয় প্রজাতি।"
    },
    importantFamilies: [
      {
        name: "Poeciliidae",
        commonEn: "Livebearers / Guppies",
        commonBn: "গাপ্পি ও লাইভবেয়ারার গোত্র",
        diagnosticEn: "Viviparous with male gonopodium, includes guppies, mollies, and mosquitofish; includes Poecilia.",
        diagnosticBn: "জীবিত বাচ্চা প্রসব করে, পুরুষে গনোপোডিয়াম থাকে; Poecilia ও Gambusia গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Aplocheilidae",
        commonEn: "Asian Killifishes",
        commonBn: "কানপোনা বা এশীয় কিলিফিশ গোত্র",
        diagnosticEn: "Surface-dwelling oviparous killifishes, reflective silver spot on top of head; includes Aplocheilus.",
        diagnosticBn: "মাথার উপরে উজ্জ্বল রূপালী চোখা দাগযুক্ত উপরিভাগের মাছ; Aplocheilus (কানপোনা) অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Aplocheilus, Poecilia, Gambusia, and Fundulus. Key binomials: Aplocheilus panchax (Hamilton, 1822) and Poecilia reticulata Peters, 1859.",
      bn: "গণ: Aplocheilus, Poecilia, Gambusia এবং Fundulus। প্রধান নাম: Aplocheilus panchax (Hamilton, 1822) এবং Poecilia reticulata Peters, 1859।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Blue Panchax / Kanpona (Aplocheilus panchax - native to Bangladesh), Common Guppy (Poecilia reticulata), Mosquitofish (Gambusia affinis), and Green Swordtail (Xiphophorus hellerii).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কানপোনা (Aplocheilus panchax - বাংলাদেশে দেশীয়), সাধারণ গাপ্পি (Poecilia reticulata), মসকুইটোফিশ (Gambusia affinis) এবং গ্রিন সোর্ডটেইল (Xiphophorus hellerii)।"
    },
    additionalInformation: {
      en: "Aplocheilus panchax (Kanpona) is renowned across rural Bangladesh as a premier native biological mosquito control agent, feeding voraciously on vector mosquito larvae in village ponds and ditches.",
      bn: "কানপোনা মাছ (Aplocheilus panchax) গ্রামীণ বাংলাদেশে ম্যালেরিয়া ও ডেঙ্গু রোগের বাহক মশার লার্ভা ধ্বংস করার সবচেয়ে কার্যকর দেশীয় মাছ হিসেবে পরিচিত।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Parenti (1981)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 32. Cichliformes
  {
    id: "order-cichliformes",
    taxonId: "taxon-cichliformes",
    rank: "order",
    scientificName: "Cichliformes",
    bengaliName: "সিক্লিফর্মিস (সিক্লিড ও তেলাপিয়া)",
    englishName: "Cichlids and Convict Blennies",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Betancur-R. et al., 2013",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Cichliformes", nameBn: "সিক্লিফর্মিস" }
    ],
    shortDescription: {
      en: "Extraordinarily diverse freshwater and brackish fishes renowned as evolutionary models of explosive speciation in the African Great Lakes, famous for complex parental care (mouthbrooding) and global food aquaculture (tilapias).",
      bn: "বিবর্তনের অন্যতম বিস্ময়কর মাছের বর্গ; যা আফ্রিকার হ্রদগুলোতে দ্রুততম প্রজাতির উদ্ভবের মডেল হিসেবে খ্যাত এবং মুখগহ্বরে বাচ্চা লালন-পালন ও বিশ্বব্যাপী তেলাপিয়া মাছ চাষের জন্য বিখ্যাত।"
    },
    diagnosticCharacteristics: {
      en: "Single nostril on each side of snout (rarely two); interrupted lateral line consisting of an anterior high section and a posterior mid-lateral section; fused lower pharyngeal jaw forming an efficient crushing mill; complex parental care including biparental guarding, substrate brooding, or mouthbrooding where the parent carries eggs and free-swimming fry inside the buccal cavity for protection.",
      bn: "মাথার প্রতি পাশে একক নাসারন্ধ্র (অন্যান্য মাছে দুটি থাকে); খণ্ডিত পার্শ্বরেখা যা পিঠের কাছে একটি এবং লেজের মাঝবরাবর আরেকটি রেখায় বিভক্ত; খাদ্য পেষণের জন্য গলবিলের শক্তিশালী দাঁত; মুখে ডিম ও পোনা রেখে যত্ন নেওয়ার অনন্য মাতৃ/পিতৃ বাৎসল্য (mouthbrooding)।",
      keyFeatures: {
        en: [
          "Single nostril aperture on each side of head (unlike the two nostrils of typical teleosts)",
          "Interrupted lateral line divided into upper anterior and lower posterior segments",
          "Advanced parental care including buccal mouthbrooding of developing eggs and fry",
          "Explosive adaptive radiation in Lake Victoria, Tanganyika, and Malawi (>1,500 species)"
        ],
        bn: [
          "মাথার দুই পাশে সাধারণ দুটি ছিদ্রের বদলে একক নাসারন্ধ্র",
          "দ্বিখণ্ডিত পার্শ্বরেখা যা উপরে ও নিচে দুটি খণ্ডে বিভক্ত",
          "বিপদের সময় ডিম ও ছোট বাচ্চাকে মুখের ভেতর ঢুকিয়ে নিরাপদে রাখা",
          "আফ্রিকার ভিক্টোরিয়া ও মালাউই হ্রদে স্বল্প সময়ে শত শত নতুন প্রজাতির উৎপত্তি"
        ]
      }
    },
    habitat: {
      en: "Tropical freshwater lakes, river channels, coastal estuaries, and warm floodplain swamps across Africa, South America, and South Asia.",
      bn: "ক্রান্তীয় মিঠাপানির হ্রদ, নদী, মোহনা এবং প্লাবনভূমি।",
      systems: ["freshwater", "brackish"]
    },
    ecosystem: {
      en: "Fulfill every conceivable aquatic ecological niche: rock-scraping herbivorous mbuna, snail-crushers, scale-eaters, and apex piscivorous predators.",
      bn: "জলজ বাস্তুতন্ত্রের প্রায় সকল ভূমিকা পালন করে: শৈবালভোজী, শামুকভোজী, অন্য মাছের আঁইশভোজী থেকে শুরু করে শীর্ষ শিকারী।"
    },
    feeding: {
      en: "Extraordinarily specialized diets: algae grazers, detritivores, molluscivores, zooplanktivores, and predatory piscivores.",
      bn: "অত্যন্ত বিশেষায়িত খাদ্যাভ্যাস; শৈবাল, কাদা, শামুক, পোকা ও ছোট মাছ খায়।"
    },
    reproduction: {
      en: "Advanced parental care: pairs clean rocky substrates or dig gravel craters; in mouthbrooders, the female gathers fertilized eggs into her mouth, incubating them through yolk absorption.",
      bn: "উন্নত সন্তান পালন; স্ত্রী মাছ ডিম পেড়ে সাথে সাথে নিজের মুখে তুলে নেয় এবং ডিম ফুটে পোনা বড় না হওয়া পর্যন্ত না খেয়ে মুখে রেখে পাহারা দেয়।"
    },
    distribution: {
      en: "Native to Africa, Central and South America, the Levant, Madagascar, and Southern India/Sri Lanka. Oreochromis niloticus (Nile Tilapia) is widely farmed across Bangladesh.",
      bn: "আফ্রিকা, দক্ষিণ আমেরিকা ও দক্ষিণ এশিয়ায় বিস্তৃত। বাংলাদেশে নাইলোটিকা বা তেলাপিয়া (Oreochromis niloticus) একটি প্রধান চাষকৃত খাদ্য মাছ।"
    },
    importantFamilies: [
      {
        name: "Cichlidae",
        commonEn: "Cichlids & Tilapias",
        commonBn: "সিক্লিড ও তেলাপিয়া গোত্র",
        diagnosticEn: "Single nostril on each side, interrupted lateral line, mouthbrooding common; includes Oreochromis.",
        diagnosticBn: "একক নাসারন্ধ্র, খণ্ডিত পার্শ্বরেখা, মুখে বাচ্চা পালন; Oreochromis গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Pholidichthyidae",
        commonEn: "Convict Blennies",
        commonBn: "কনভিক্ট ব্লেনি গোত্র",
        diagnosticEn: "Marine Indo-Pacific reef fish living in communal burrows; single genus Pholidichthys.",
        diagnosticBn: "সামুদ্রিক প্রবাল প্রাচীরের মাছ যা সুরঙ্গ খুঁড়ে দলবদ্ধভাবে বাস করে।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Oreochromis, Cichla, Pterophyllum, and Maylandia. Key binomials: Oreochromis niloticus (Linnaeus, 1758) and Pterophyllum scalare (Schultze, 1823).",
      bn: "গণ: Oreochromis, Cichla, Pterophyllum এবং Maylandia। প্রধান নাম: Oreochromis niloticus (Linnaeus, 1758) এবং Pterophyllum scalare (Schultze, 1823)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Nile Tilapia (Oreochromis niloticus - farmed in Bangladesh), Freshwater Angelfish (Pterophyllum scalare), Mozambique Tilapia (Oreochromis mossambicus), and Convict Blenny (Pholidichthys leucotaenia).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: নীল তেলাপিয়া বা নাইলোটিকা (Oreochromis niloticus - বাংলাদেশে চাষকৃত), মিঠাপানির এঞ্জেলফিশ (Pterophyllum scalare), মোজাম্বিক তেলাপিয়া (Oreochromis mossambicus) এবং কনভিক্ট ব্লেনি (Pholidichthys leucotaenia)।"
    },
    additionalInformation: {
      en: "Nile Tilapia (Oreochromis niloticus) is known as the 'aquatic chicken' and forms the second most farmed finfish group in the world, serving as an essential inexpensive protein source across Bangladesh.",
      bn: "নাইলোটিকা তেলাপিয়া মাছকে 'জলজ মুরগি' বলা হয়; এটি দ্রুত বর্ধনশীল এবং বাংলাদেশের সাধারণ মানুষের জন্য সুলভ আমিষের প্রধান উৎস।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Eschmeyer's Catalog of Fishes (2026); Betancur-R. et al. (2017)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 33. Mugiliformes
  {
    id: "order-mugiliformes",
    taxonId: "taxon-mugiliformes",
    rank: "order",
    scientificName: "Mugiliformes",
    bengaliName: "মুগিলিফর্মিস (বাটা, খোরশুলা ও মালেট)",
    englishName: "Mullets",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Berg, 1940",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Mugiliformes", nameBn: "মুগিলিফর্মিস" }
    ],
    shortDescription: {
      en: "Torpedo-shaped, schooling coastal and freshwater fishes with two well-separated dorsal fins, broad flattened heads, small toothless mouths, and muscular gizzard-like stomachs adapted for detritus digestion.",
      bn: "টর্পেডো আকৃতির উপকূলীয় ও মিষ্টি পানির রূপালী মাছ; যাদের দুটি সুস্পষ্ট পৃথক পৃষ্ঠপাখনা, চ্যাপ্টা মাথা এবং কাদা ও ডায়াটম হজমের জন্য পাখির মতো শক্ত গিজার্ড পাকস্থলী রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body elongate, cylindrical to slightly compressed, covered in large ctenoid or cycloid scales; two well-separated dorsal fins (first dorsal fin with exactly four stiff spines, second dorsal with soft rays); broad flattened head with eyes partly covered by adipose eyelids; mouth small, triangular, lacking teeth or with tiny ciliiform teeth; muscular, gizzard-like stomach and extremely long digestive tract adapted for digesting benthic sediment films and microalgae.",
      bn: "লম্বা নলাকার দেহ ও বড় আঁইশ; দুটি সম্পূর্ণ পৃথক পৃষ্ঠপাখনা (প্রথম পৃষ্ঠপাখনায় ঠিক ৪টি শক্ত কাঁটা এবং দ্বিতীয়টিতে নরম রশ্মি); চওড়া চ্যাপ্টা মাথা ও অ্যাডিপোজ চোখের পাতা; ছোট ত্রিভুজাকার মুখ যাতে দাঁত নেই বা ক্ষুদ্র আঁশের মতো দাঁত থাকে; কাদা ও পলি থেকে খাদ্য হজমের জন্য পাখির মতো শক্ত পেশীবহুল গিজার্ড পাকস্থলী এবং অতিদীর্ঘ অন্ত্র বিদ্যমান।",
      keyFeatures: {
        en: [
          "First dorsal fin equipped with precisely four stout, sharp spines",
          "Muscular gizzard-like stomach adapted to grind detritus and benthic diatoms",
          "Wide separation between the spinous and soft-rayed dorsal fins",
          "Prominent schooling behavior in estuaries, jumping frequently above the surface"
        ],
        bn: [
          "প্রথম পৃষ্ঠপাখনায় সুনির্দিষ্টভাবে ৪টি শক্ত তীক্ষ্ণ কাঁটা",
          "কাদা ও পলি থেকে খাদ্য গুঁড়ো করার জন্য পাখির মতো শক্ত গিজার্ড পাকস্থলী",
          "কাঁটাময় প্রথম ও নরম দ্বিতীয় পৃষ্ঠপাখনার মধ্যকার সুস্পষ্ট ফাঁকা দূরত্ব",
          "উপকূল ও মোহনায় ঝাঁক বেঁধে সাঁতার এবং পানির উপর লাফিয়ে ওঠার স্বভাব"
        ]
      }
    },
    habitat: {
      en: "Coastal marine shelves, estuaries, mangrove channels, tidal mudflats, and upstream freshwater rivers.",
      bn: "উপকূলীয় সমুদ্র, নদীর মোহনা, সুন্দরবনের ম্যানগ্রোভ নদী এবং মিঠাপানির নদ-নদী।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Primary consumers and detritivores, converting vast amounts of benthic microalgal films and detrital carbon into fish biomass for top coastal predators.",
      bn: "উপকূলীয় বাস্তুতন্ত্রের প্রধান প্রাথমিক খাদক; তলদেশের কাদা ও শৈবাল খেয়ে তা পুষ্টিকর মাংসে রূপান্তর করে যা শিকারী প্রাণীদের বাঁচায়।"
    },
    feeding: {
      en: "Detritivorous and herbivorous filter-feeders, scooping up bottom sediment to sift diatoms, filamentous algae, and organic debris through fine gill rakers.",
      bn: "কাদামাটি ও শৈবালভোজী; তলদেশের কাদা মুখে তুলে ফুলকা দিয়ে ডায়াটম ও জৈব কণা ছেঁকে খায়।"
    },
    reproduction: {
      en: "Catadromous or offshore marine spawners: adults migrate from rivers and estuaries out to sea to release millions of buoyant pelagic eggs.",
      bn: "নদী ও মোহনা থেকে সাগরে গিয়ে ডিম পাড়ে; ডিম ফুটে লার্ভা তৈরি হয় যা পরে নদী ও সুন্দরবনের খাঁড়িতে ফিরে আসে।"
    },
    distribution: {
      en: "Circumglobal across all tropical, subtropical, and temperate waters. Enormously important in Bangladesh coastal fisheries (Bata, Khorsula, and Parsia).",
      bn: "সারা বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ সাগরে বিস্তৃত। বাংলাদেশের উপকূলীয় মৎস্য খাতে বাটা, পারশে ও খোরশুলা মাছ অত্যন্ত জনপ্রিয়।"
    },
    importantFamilies: [
      {
        name: "Mugilidae",
        commonEn: "Mullets",
        commonBn: "মালেট বা বাটা গোত্র",
        diagnosticEn: "Single family sharing all ordinal characters; includes Mugil, Chelon, and Rhinomugil.",
        diagnosticBn: "একমাত্র পরিবার; Mugil, Chelon এবং Rhinomugil (খোরশুলা) গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Mugil, Chelon, Rhinomugil, and Planiliza. Key binomials: Mugil cephalus Linnaeus, 1758, Chelon parsia (Hamilton, 1822), and Rhinomugil corsula (Hamilton, 1822).",
      bn: "গণ: Mugil, Chelon, Rhinomugil এবং Planiliza। প্রধান নাম: Mugil cephalus Linnaeus, 1758, Chelon parsia (Hamilton, 1822) এবং Rhinomugil corsula (Hamilton, 1822)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Flathead Grey Mullet (Mugil cephalus - native to Bangladesh), Goldspot Mullet / Parshe (Chelon parsia - native to Bangladesh), Corsula Mullet / Khorsula (Rhinomugil corsula - native to Bangladesh), and Tade Mullet / Bata (Chelon tade - native to Bangladesh).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ফ্ল্যাটহেড মালেট (Mugil cephalus - বাংলাদেশে প্রাপ্ত), পারশে মাছ (Chelon parsia - উপকূলীয় দেশীয় মাছ), খোরশুলা মাছ (Rhinomugil corsula - পদ্মা ও মেঘনার দেশীয় মাছ) এবং বাটা মাছ (Chelon tade - বাংলাদেশে দেশীয় মাছ)।"
    },
    additionalInformation: {
      en: "Rhinomugil corsula (Khorsula) swims with its elevated periscopic eyes protruding above the river surface like a crocodile to spot aerial predators and surface drift in the Ganges-Brahmaputra rivers of Bangladesh.",
      bn: "খোরশুলা মাছ (Rhinomugil corsula) পদ্মা ও যমুনা নদীতে কুমিরের মতো চোখ পানির উপরে তুলে ভেসে চলে, যা এদের চমৎকার অভিযোজন।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Thomson (1997)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 34. Blenniiformes
  {
    id: "order-blenniiformes",
    taxonId: "taxon-blenniiformes",
    rank: "order",
    scientificName: "Blenniiformes",
    bengaliName: "ব্লেনিফর্মিস (কম্বটুথ ব্লেনি ও কেল্পফিশ)",
    englishName: "Combtooth Blennies, Kelpfishes, and Clingfishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Berg, 1940",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Blenniiformes", nameBn: "ব্লেনিফর্মিস" }
    ],
    shortDescription: {
      en: "Small, bottom-dwelling coastal and reef fishes with scaleless bodies, close-set comb-like teeth in the jaws, tentacle-like cirri above the eyes, and jugular pelvic fins placed in front of pectorals.",
      bn: "উপকূল ও প্রবাল প্রাচীরের ক্ষুদ্র তলদেশীয় মাছ; যাদের শরীর আঁইশহীন, চোয়ালে চিরুনির মতো খাঁজকাটা দাঁতের সারি, চোখের উপর ছোট গোঁফ বা টেনট্যাকল এবং গলার নিচে শ্রোণীপাখনা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body slender, elongate, and scaleless (or covered in tiny embedded cycloid scales); head blunt with fleshy tentacular cirri above eyes and nostrils; jaws armed with a single uniform comb-like row of close-set incisiform teeth (often with large curved canine fangs behind); pelvic fins jugular, inserted ahead of pectoral fins with 1 concealed spine and 2–4 rays; dorsal fin continuous and long; swimbladder absent in adults.",
      bn: "সরু লম্বা আঁইশহীন শরীর; ভোঁতা মাথার চোখের উপর নরম ঝালরযুক্ত মাংসল টেনট্যাকল; চোয়ালে চিরুনির মতো সাজানো একসারি দাঁত (পেছনে প্রায়ই বাঁকানো বিষাক্ত ক্যানাইন দাঁত থাকে); বক্ষপাখনার আগে গলার নিচে শ্রোণীপাখনা অবস্থিত; অবিচ্ছিন্ন দীর্ঘ পৃষ্ঠপাখনা; পটকা অনুপস্থিত।",
      keyFeatures: {
        en: [
          "Closely packed comb-like teeth in jaws adapted for scraping reef surfaces",
          "Fleshy branched or tentacular cirri situated above the orbital rim",
          "Jugular pelvic fins used like limbs to prop the fish up on rocky substrates",
          "Absence of swimbladder enforcing a strictly bottom-dwelling lifestyle"
        ],
        bn: [
          "পাথরের শৈবাল চেঁছে খাওয়ার জন্য চোয়ালে চিরুনির মতো ঘন দাঁতের সারি",
          "চোখের পাতার উপরে অবস্থিত নরম মাংসল টেনট্যাকল বা ঝালর",
          "পাথরের উপর ভর দিয়ে বসে থাকার জন্য পায়ের মতো ব্যবহৃত শ্রোণীপাখনা",
          "পটকা না থাকায় সর্বদা পানির নিচে অবস্থান করার স্বভাব"
        ]
      }
    },
    habitat: {
      en: "Intertidal rocky coasts, tidepools, tropical coral reefs, kelp forests, and shallow subtidal crevices.",
      bn: "উপকূলীয় পাথুরে অঞ্চল, ভাটার জলাশয়, ক্রান্তীয় প্রবাল প্রাচীর ও পাথরের খাঁজ।",
      systems: ["marine", "brackish"]
    },
    ecosystem: {
      en: "Dominant primary grazers on coral reefs; combtooth blennies scrape microalgal turf, opening clean substrate for larval coral recruitment.",
      bn: "প্রবাল প্রাচীরের প্রধান শৈবালভোজী; প্রাচীরের অবাঞ্ছিত শৈবাল পরিষ্কার করে নতুন প্রবাল গজাতে সাহায্য করে।"
    },
    feeding: {
      en: "Herbivorous, detritivorous, and carnivorous. Combtooth blennies scrape turf algae; sabretooth blennies (Meiacanthus/Aspidontus) mimic cleaner wrasses to nip fins and scales with venomous fangs.",
      bn: "শৈবালভোজী ও শিকারী; ব্লেড-সদৃশ দাঁতযুক্ত ব্লেনি বিষাক্ত দাঁত দিয়ে অন্য মাছের পাখনা ও আঁইশ কামড়ে খায়।"
    },
    reproduction: {
      en: "Territorial demersal nesting. Females lay adhesive eggs in empty barnacle shells, gastropod shells, or rock crevices; males aggressively defend and oxygenate the eggs.",
      bn: "পাথরের খাঁজে বা ঝিনুকের খোলসে ডিম পাড়ে; পুরুষ মাছ সাহসের সাথে পাহারা দিয়ে ডিমে বাতাস যোগায়।"
    },
    distribution: {
      en: "Worldwide in tropical and temperate shallow coastal seas. Species occur along Saint Martin's Island coral and rocky reefs in Bangladesh.",
      bn: "সারা বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ উপকূলীয় সাগরে বিস্তৃত। বাংলাদেশের সেন্টমার্টিন দ্বীপের প্রবাল প্রাচীরে এদের প্রজাতি বাস করে।"
    },
    importantFamilies: [
      {
        name: "Blenniidae",
        commonEn: "Combtooth Blennies",
        commonBn: "কম্বটুথ ব্লেনি গোত্র",
        diagnosticEn: "Scaleless, comb teeth in jaws, cirri above eyes, includes venomous fangblennies; includes Meiacanthus.",
        diagnosticBn: "আঁইশহীন, চিরুনি দাঁত, চোখের উপর গোঁফ; Meiacanthus ও Salaria গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Tripterygiidae",
        commonEn: "Triplefins",
        commonBn: "ট্রিপলফিন গোত্র",
        diagnosticEn: "Dorsal fin divided into three distinct segments, ctenoid scales present; includes Tripterygion.",
        diagnosticBn: "পৃষ্ঠপাখনা তিনটি পৃথক অংশে বিভক্ত; Tripterygion গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Salaria, Meiacanthus, Parablennius, and Petroscirtes. Key binomials: Salaria pavo (Risso, 1810) and Meiacanthus grammistes (Valenciennes, 1836).",
      bn: "গণ: Salaria, Meiacanthus, Parablennius এবং Petroscirtes। প্রধান নাম: Salaria pavo (Risso, 1810) এবং Meiacanthus grammistes (Valenciennes, 1836)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Peacock Blenny (Salaria pavo), Striped Poison-fang Blenny (Meiacanthus grammistes), Tompot Blenny (Parablennius gattorugine), and Red-lipped Blenny (Ophioblennius atlanticus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: পিকক ব্লেনি (Salaria pavo), পয়জন-ফ্যাং ব্লেনি (Meiacanthus grammistes), টমপট ব্লেনি (Parablennius gattorugine) এবং রেড-লিপড ব্লেনি (Ophioblennius atlanticus)।"
    },
    additionalInformation: {
      en: "Fangblennies of the genus Meiacanthus possess true venom glands at the base of their lower jaw canine teeth—the only known teleost fishes with an active venomous bite.",
      bn: "Meiacanthus গণের ফ্যাংব্লেনি মাছের নিচের দাঁতের গোড়ায় বিষগ্রন্থি থাকে—এরাই একমাত্র মাছ যারা দাঁত দিয়ে কামড়ে বিষ ঢালতে পারে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Hastings & Springer (1994)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 35. Centrarchiformes
  {
    id: "order-centrarchiformes",
    taxonId: "taxon-centrarchiformes",
    rank: "order",
    scientificName: "Centrarchiformes",
    bengaliName: "সেন্ট্রার্কিফর্মিস (সানফিশ, ব্ল্যাক বাস ও টেরাপন)",
    englishName: "Sunfishes, Black Basses, and Terapon Perches",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Bleeker, 1859",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Centrarchiformes", nameBn: "সেন্ট্রার্কিফর্মিস" }
    ],
    shortDescription: {
      en: "Deep-bodied spiny-rayed percomorph teleosts characterized by continuous dorsal fins with anterior spines, thoracic pelvic fins, aggressive nest-guarding behavior, and including iconic North American gamefishes and Indo-Pacific grunters.",
      bn: "চ্যাপ্টা কাঁটাময় মাছ; যাদের সংযুক্ত পৃষ্ঠপাখনায় শক্ত কাঁটা, বক্ষীয় শ্রোণীপাখনা, ডিম পাহারা দেওয়ার আক্রমণাত্মক স্বভাব রয়েছে; বিখ্যাত ব্ল্যাক বাস ও সুন্দরবনের কটকটি/টেরাপন মাছ এর অন্তর্ভুক্ত।"
    },
    diagnosticCharacteristics: {
      en: "Body deep, laterally compressed, covered in ctenoid scales; dorsal fin continuous, with 3–13 stout sharp spines followed by soft rays; anal fin with 3–9 spines; thoracic pelvic fins with 1 spine and 5 soft rays; operculum ending in a flap (often black in sunfishes) or with sharp spines; males construct and aggressively defend excavated gravel saucer nests; terapons (Terapontidae) produce loud grunting sounds with extrinsic swimbladder muscles.",
      bn: "চ্যাপ্টা গভীর দেহ ও টিনয়েড আঁইশ; পৃষ্ঠপাখনা অবিচ্ছিন্ন যাতে ৩–১৩টি ধারালো শক্ত কাঁটা ও নরম রশ্মি থাকে; পায়ুপাখনায় ৩–৯টি কাঁটা; কানকোর পেছনে কালো চামড়ার ফ্ল্যাপ বা ধারালো কাঁটা; পুরুষ মাছ নুড়িপাথরে গোলাকার গর্ত খুঁড়ে বাসা বানিয়ে পাহারা দেয়; টেরাপন মাছ পটকার সাহায্যে তীব্র ঘোঁত ঘোঁত শব্দ তৈরি করে।",
      keyFeatures: {
        en: [
          "Continuous single dorsal fin with an anterior spinous section and posterior soft rays",
          "Elaborate male saucer nest construction in gravel substrates and fierce brood defense",
          "Sound-producing extrinsic swimbladder mechanism in terapons (Terapontidae)",
          "Major global sports and food fisheries (largemouth bass and crappies)"
        ],
        bn: [
          "কাঁটাময় অগ্রভাগ ও নরম রশ্মিময় পশ্চাদ্ভাগযুক্ত অবিচ্ছিন্ন পৃষ্ঠপাখনা",
          "পুরুষ মাছ কর্তৃক নুড়িপাথরে থালার মতো বাসা তৈরি ও বাচ্চার তীব্র সুরক্ষা",
          "টেরাপন মাছে পটকার পেশী দ্বারা ঘোঁত ঘোঁত শব্দ তৈরির ক্ষমতা",
          "বিশ্বব্যাপী জনপ্রিয় গেমফিশ (লার্জমাউথ বাস)"
        ]
      }
    },
    habitat: {
      en: "Temperate freshwater lakes, slow-flowing rivers, coastal estuaries, mangrove channels, and inshore marine waters.",
      bn: "মিঠাপানির হ্রদ, নদী, উপকূলীয় মোহনা, সুন্দরবনের ম্যানগ্রোভ খাঁড়ি ও অগভীর সাগর।",
      systems: ["freshwater", "brackish", "marine"]
    },
    ecosystem: {
      en: "Apex and mid-tier predators controlling populations of forage fishes, crayfish, and aquatic invertebrates in freshwater and coastal habitats.",
      bn: "মিঠাপানি ও উপকূলের শিকারী মাছ; ছোট মাছ, কাঁকড়া ও পোকা শিকার করে খাদ্যজালের ভারসাম্য রক্ষা করে।"
    },
    feeding: {
      en: "Voracious carnivorous ambush predators, swallowing baitfishes, frogs, crayfish, and insects whole with sudden buccal suction.",
      bn: "মাংসাশী শিকারী; ছোট মাছ, ব্যাঙ, ক্রেফিশ ও জলজ পোকা গিলে খায়।"
    },
    reproduction: {
      en: "Parental nest care: males sweep circular depressions in sand or gravel, court females, fertilize adhesive eggs, and vigorously fan and defend the brood against all intruders.",
      bn: "পুরুষ মাছ লেজ দিয়ে বালি সরিয়ে গোল বাসা বানায়; স্ত্রী মাছ ডিম পাড়ার পর পুরুষ মাছ ডিম ও পোনাকে সব বিপদ থেকে আগলে রাখে।"
    },
    distribution: {
      en: "North America (Centrarchidae) and the Indo-West Pacific (Terapontidae, Kuhliidae). Terapon jarbua (Gonggona / Jarbua terapon) is native across coastal and estuarine waters of Bangladesh.",
      bn: "উত্তর আমেরিকা ও ইন্দো-পশ্চিম প্রশান্ত মহাসাগরে বিস্তৃত। কটকটি মাছ বা জারবুয়া টেরাপন (Terapon jarbua) বাংলাদেশের উপকূল ও সুন্দরবনের দেশীয় মাছ।"
    },
    importantFamilies: [
      {
        name: "Centrarchidae",
        commonEn: "Sunfishes & Black Basses",
        commonBn: "সানফিশ ও ব্ল্যাক বাস গোত্র",
        diagnosticEn: "Continuous dorsal fin, 3-8 anal spines, nest builders, North American natives; includes Micropterus.",
        diagnosticBn: "যুক্ত পৃষ্ঠপাখনা, উত্তর আমেরিকার বিখ্যাত বাস মাছ; Micropterus ও Lepomis গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Terapontidae",
        commonEn: "Grunters / Terapon Perches",
        commonBn: "কটকটি বা টেরাপন গোত্র",
        diagnosticEn: "Coastal marine and estuarine, produce loud croaks, opercular spine stout; includes Terapon.",
        diagnosticBn: "ঘোঁত ঘোঁত শব্দকারী কানকোয় কাঁটাযুক্ত উপকূলীয় মাছ; Terapon (কটকটি) অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Micropterus, Lepomis, Terapon, and Kuhlia. Key binomials: Micropterus salmoides (Lacepède, 1802) and Terapon jarbua (Forsskål, 1775).",
      bn: "গণ: Micropterus, Lepomis, Terapon এবং Kuhlia। প্রধান নাম: Micropterus salmoides (Lacepède, 1802) এবং Terapon jarbua (Forsskål, 1775)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Jarbua Terapon / Kotkoti Machh (Terapon jarbua - native to Bangladesh), Largemouth Bass (Micropterus salmoides), Bluegill Sunfish (Lepomis macrochirus), and Banded Grunter (Amniataba percoides).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কটকটি মাছ (Terapon jarbua - বাংলাদেশে দেশীয়), লার্জমাউথ বাস (Micropterus salmoides), ব্লুগিল সানফিশ (Lepomis macrochirus) এবং ব্যান্ডেড গ্রান্টার (Amniataba percoides)।"
    },
    additionalInformation: {
      en: "Terapon jarbua (Kotkoti) is famous in coastal Bangladesh for producing loud croaking sounds when handled, caused by vibrating muscles against its swimbladder.",
      bn: "কটকটি মাছ (Terapon jarbua) পানি থেকে তুললে পটকার পেশী কাঁপিয়ে তীব্র 'কট কট' শব্দ করার জন্য সুন্দরবন ও উপকূলীয় অঞ্চলে বিখ্যাত।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Eschmeyer's Catalog of Fishes (2026); Near et al. (2012)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 36. Labriformes
  {
    id: "order-labriformes",
    taxonId: "taxon-labriformes",
    rank: "order",
    scientificName: "Labriformes",
    bengaliName: "ল্যাব্রিফর্মিস (রাস ও প্যারটফিশ বা তোতাপাখি মাছ)",
    englishName: "Wrasses, Parrotfishes, and Odacids",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Regan, 1913",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Labriformes", nameBn: "ল্যাব্রিফর্মিস" }
    ],
    shortDescription: {
      en: "Brilliantly colored marine reef fishes characterized by thick protractile lips, coalesced beak-like dental plates in parrotfishes for bioeroding coral, protogynous hermaphroditism, and nocturnal mucous sleeping cocoons.",
      bn: "উজ্জ্বল রঙের প্রবাল প্রাচীরের মাছ; যাদের মাংসল ঠোঁট, প্যারটফিশের তোতাপাখির মতো শক্ত দাঁতের চঞ্চু যা দিয়ে প্রবাল ভেঙে গুঁড়ো করে সাদা বালু তৈরি করে, লিঙ্গ রূপান্তরের ক্ষমতা এবং রাতে ঘুমানোর জন্য মিউকাসের বিশেষ স্বচ্ছ মশারি তৈরির স্বভাব রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body deep to slender, covered in smooth cycloid scales; mouth terminal with thick fleshy protractile lips; teeth in jaws separate and caniniform in wrasses, or completely coalesced into a parrot-like beak in parrotfishes (Scarinae); powerful upper and lower pharyngeal bones modified into a crushing mill; protogynous sex reversal (females transform into colorful dominant terminal males); parrotfishes secrete a protective mucous envelope around themselves at night to mask scent from nocturnal predators.",
      bn: "মসৃণ সাইক্লয়েড আঁইশে ঢাকা শরীর; মাংসল উল্টানো ঠোঁটযুক্ত মুখ; দাঁত আলাদা ও ধারালো অথবা তোতাপাখির ঠোঁটের মতো শক্ত চঞ্চুতে রূপান্তরিত; শক্ত প্রবাল ভাঙার জন্য গলবিলে শক্তিশালী পেষণযন্ত্র; প্রোটোজাইনাস লিঙ্গ রূপান্তর (স্ত্রী মাছ বয়সে বড় হয়ে উজ্জ্বল পুরুষ মাছে রূপান্তরিত হয়); রাতে ঘুমানোর সময় দেহ থেকে স্বচ্ছ মিউকাসের খোলস বা মশারি তৈরি করে যার ভেতরে এরা লুকিয়ে থাকে যাতে হাঙ্গর গন্ধ না পায়।",
      keyFeatures: {
        en: [
          "Teeth fused into a parrot-like beak in parrotfishes for biting hard stony corals",
          "Powerful pharyngeal mill grinding coral skeleton into fine white biogenic beach sand",
          "Protogynous hermaphroditism (sex change from female to terminal male)",
          "Secretion of a nocturnal transparent mucous sleeping cocoon shielding against nocturnal parasites"
        ],
        bn: [
          "প্যারটফিশের তোতাপাখির মতো শক্ত চোয়াল যা দিয়ে জীবন্ত শক্ত প্রবাল কেটে খায়",
          "গলবিলের শক্তিশালী দাঁত দিয়ে প্রবাল চূর্ণ করে সাদা সমুদ্রের বালুতে পরিণত করা",
          "স্ত্রী থেকে পুরুষে শারীরিক লিঙ্গ রূপান্তরের ক্ষমতা",
          "রাতে পরজীবী ও হাঙ্গর থেকে বাঁচতে শরীর ঘিরে মিউকাসের স্বচ্ছ থলি তৈরির ক্ষমতা"
        ]
      }
    },
    habitat: {
      en: "Tropical coral reefs, rocky inshore reefs, kelp beds, and shallow seagrass flats across warm oceans globally.",
      bn: "ক্রান্তীয় প্রবাল প্রাচীর, পাথুরে উপকূল, সামুদ্রিক ঘাসবন ও অগভীর সমুদ্র।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Critical reef ecosystem engineers; parrotfishes graze algae and bioerode coral, producing hundreds of kilograms of fine white sand per fish annually; cleaner wrasses remove ectoparasites from ocean megafauna.",
      bn: "প্রবাল প্রাচীরের প্রধান প্রকৌশলী; একটি প্যারটফিশ বছরে শত শত কেজি প্রবাল চিবিয়ে সাগরের বিখ্যাত সাদা বালু তৈরি করে; ক্লিনার রাস মাছ বড় মাছের গা থেকে পরজীবী খুঁটে খেয়ে সেবা দেয়।"
    },
    feeding: {
      en: "Diverse specialist diets: bioeroding corallivores, macroalgal herbivores, hard-shelled mollusc crushers, and cleaning ectoparasite mutualists.",
      bn: "প্রবাল ও শৈবালভোজী, শামুকভোজী এবং অন্য মাছের গা থেকে পরজীবী পরিষ্কারকারী।"
    },
    reproduction: {
      en: "Pelagic spawning with complex haremic mating systems. Dominant terminal males defend harems; upon male loss, the largest female changes sex to male within days.",
      bn: "খোলা সাগরে ডিম ছড়ায়। বড় পুরুষ মাছ স্ত্রী মাছের দল পাহারা দেয়; পুরুষ মাছ মারা গেলে সবচেয়ে বড় স্ত্রী মাছটি মাত্র কয়েকদিনের মধ্যে পুরুষে রূপান্তরিত হয়ে যায়।"
    },
    distribution: {
      en: "Circumglobal across all tropical, subtropical, and warm temperate coral and rocky reefs. Diverse around Saint Martin's Island coral beds in Bangladesh.",
      bn: "বিশ্বের সকল প্রবাল প্রাচীরে বিস্তৃত। বাংলাদেশের একমাত্র প্রবাল দ্বীপ সেন্টমার্টিনের প্রবাল শৈলীতে এদের অনেক প্রজাতি বাস করে।"
    },
    importantFamilies: [
      {
        name: "Labridae",
        commonEn: "Wrasses & Parrotfishes",
        commonBn: "রাস ও প্যারটফিশ গোত্র",
        diagnosticEn: "Thick lips, separate or beak-like teeth, includes Scarinae parrotfishes and Cheilinus.",
        diagnosticBn: "পুরু ঠোঁট, তোতাপাখির চঞ্চুযুক্ত দাঁত; Scarus ও Cheilinus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Scarus, Cheilinus, Labroides, and Thalassoma. Key binomials: Cheilinus undulatus Rüppell, 1835 and Scarus ghobban Forsskål, 1775.",
      bn: "গণ: Scarus, Cheilinus, Labroides এবং Thalassoma। প্রধান নাম: Cheilinus undulatus Rüppell, 1835 এবং Scarus ghobban Forsskål, 1775।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Blue-barred Parrotfish (Scarus ghobban - native to Bangladesh reefs), Humphead Wrasse (Cheilinus undulatus), Bluestreak Cleaner Wrasse (Labroides dimidiatus), and Moon Wrasse (Thalassoma lunare - native to Bangladesh).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ব্লু-বার্ড প্যারটফিশ (Scarus ghobban - সেন্টমার্টিনে প্রাপ্ত), হাম্পহেড রাস (Cheilinus undulatus), ক্লিনার রাস (Labroides dimidiatus) এবং মুন রাস (Thalassoma lunare - সেন্টমার্টিনে প্রাপ্ত)।"
    },
    additionalInformation: {
      en: "Parrotfishes are responsible for creating the iconic white sandy beaches of tropical atolls; a single large parrotfish produces over 400 kg of pulverized coral sand every year.",
      bn: "প্রবাল দ্বীপের নয়নাভিরাম সাদা বালু তৈরিতে প্যারটফিশের প্রধান অবদান; একটি বড় মাছ বছরে ৪০০ কেজিরও বেশি প্রবাল গুঁড়ো করে বালু তৈরি করে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Eschmeyer's Catalog of Fishes (2026); Wainwright et al. (2012)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 37. Acropomatiformes
  {
    id: "order-acropomatiformes",
    taxonId: "taxon-acropomatiformes",
    rank: "order",
    scientificName: "Acropomatiformes",
    bengaliName: "অ্যাক্রোপোমাটিফর্মিস (ল্যান্টার্নবেলি ও গভীর পানির পার্চসদৃশ মাছ)",
    englishName: "Lanternbellies, Deep-sea Perches, and Temperate Basses",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Betancur-R. et al., 2013",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Acropomatiformes", nameBn: "অ্যাক্রোপোমাটিফর্মিস" }
    ],
    shortDescription: {
      en: "Deep-water continental slope and shelf percomorph fishes characterized by bioluminescent ventral light organs in lanternbellies, opercular spines, and including massive deep seamount wreckfishes.",
      bn: "গভীর সমুদ্রের মহীঢাল ও তলদেশের মাছ; যাদের পেটের নিচে আলো নির্গমনকারী অঙ্গ, কানকোয় কাঁটা এবং দৈত্যাকার রেকফিশ এর অন্তর্ভুক্ত।"
    },
    diagnosticCharacteristics: {
      en: "Deep-water percomorph teleosts separated from Perciformes by molecular phylogenomics; two separate or deeply notched dorsal fins (first dorsal with 7–10 spines); anal fin with 2–3 spines; operculum armed with 1 or 2 sharp spines; Acropomatidae possess an internal U-shaped bioluminescent organ embedded in the ventral musculature containing symbiotic luminescent bacteria reflecting light through translucent ventral scales; forward-displaced anus located near pelvic fins in Acropoma.",
      bn: "আধুনিক জিনতত্ত্ব দ্বারা পার্সিফর্মিস থেকে পৃথককৃত গভীর সমুদ্রের মাছ; দুটি পৃথক বা গভীরভাবে খাঁজকাটা পৃষ্ঠপাখনা (প্রথমটিতে ৭-১০টি কাঁটা); কানকোয় ১ বা ২টি ধারালো কাঁটা; অ্যাক্রোপোমাটিডি পরিবারের পেটের পেশীতে আলো উৎপাদনকারী ব্যাক্টেরিয়ার অঙ্গ থাকে যার আলো পেটের বিশেষ স্বচ্ছ আঁইশ দিয়ে প্রতিফলিত হয়; মলদ্বার পেটের সামনে অবস্থিত।",
      keyFeatures: {
        en: [
          "Bioluminescent light organ embedded in the ventral musculature of lanternbellies (Acropoma)",
          "Anterior displacement of anus to near pelvic fin insertions in Acropomatidae",
          "Two separate dorsal fins with stout sharp spines in the first",
          "Giant bathyal seamount apex predators (Polyprion) attaining over 100 kg weight"
        ],
        bn: [
          "পেটের পেশীতে অবস্থিত অভ্যন্তরীণ আলো উৎপাদনকারী অঙ্গ",
          "মলদ্বার শ্রোণীপাখনার কাছে সামনের দিকে অবস্থিত",
          "ধারালো কাঁটাযুক্ত দুটি পৃথক পৃষ্ঠপাখনা",
          "সমুদ্রের তলদেশের পাহাড়ে বাস করা ১০০ কেজিরও বেশি ওজনের দৈত্যাকার রেকফিশ"
        ]
      }
    },
    habitat: {
      en: "Continental shelves, upper continental slopes, submarine seamounts, and deep rocky reefs (50–1,000 meters depth).",
      bn: "মহীসোপান, মহীঢাল, সমুদ্রগর্ভস্থ পর্বত এবং গভীর পাথুরে প্রাচীর (৫০–১,০০০ মিটার গভীরতায়)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Demersal and benthopelagic predators on deep continental margins and seamounts, acting as apex piscivores and squid hunters.",
      bn: "গভীর সমুদ্রের মহীঢালের শিকারী মাছ; গভীর পানির মাছ ও স্কুইড শিকার করে।"
    },
    feeding: {
      en: "Carnivorous: lanternbellies consume small midwater fishes and euphausiids; wreckfishes prey upon deep-water crabs, squids, and teleosts.",
      bn: "মাংসাশী; ছোট মাছ, গভীর পানির চিংড়ি, কাঁকড়া ও স্কুইড খায়।"
    },
    reproduction: {
      en: "Pelagic broadcast spawners releasing floating buoyant eggs into offshore marine currents; juveniles drift near drifting kelp before descending to deep seamounts.",
      bn: "খোলা সমুদ্রে ডিম ছড়ায়; পোনা প্রথমে সাগরের উপরিভাগে ভাসমান শৈবালের আশ্রয়ে থাকে এবং পরে গভীর সমুদ্রে নেমে যায়।"
    },
    distribution: {
      en: "Widespread in tropical, subtropical, and temperate oceans worldwide. Present in deep offshore waters of the northern Indian Ocean.",
      bn: "সারা বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ সাগরে বিস্তৃত। ভারত মহাসাগরের গভীর অঞ্চলে পাওয়া যায়।"
    },
    importantFamilies: [
      {
        name: "Acropomatidae",
        commonEn: "Lanternbellies",
        commonBn: "ল্যান্টার্নবেলি গোত্র",
        diagnosticEn: "Bioluminescent ventral light organ, forward anus, two dorsal fins; includes Acropoma.",
        diagnosticBn: "পেটের নিচে আলো উৎপাদনকারী অঙ্গ, সামনে অবস্থিত মলদ্বার; Acropoma গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Polyprionidae",
        commonEn: "Wreckfishes",
        commonBn: "রেকফিশ গোত্র",
        diagnosticEn: "Massive deep-bodied fishes, large head with rough bony ridges, weight up to 100 kg; includes Polyprion.",
        diagnosticBn: "বিশাল বপুযুক্ত গভীর সমুদ্রের মাছ, ওজন ১০০ কেজি পর্যন্ত হতে পারে; Polyprion গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Acropoma, Polyprion, Synagrops, and Lateolabrax. Key binomials: Acropoma japonicum Günther, 1859 and Polyprion americanus (Bloch & Schneider, 1801).",
      bn: "গণ: Acropoma, Polyprion, Synagrops এবং Lateolabrax। প্রধান নাম: Acropoma japonicum Günther, 1859 এবং Polyprion americanus (Bloch & Schneider, 1801)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Glowbelly (Acropoma japonicum), Atlantic Wreckfish (Polyprion americanus), Blackmouth Bass (Synagrops bellus), and Japanese Seabass (Lateolabrax japonicus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: গ্লোবেলি বা ল্যান্টার্নবেলি (Acropoma japonicum), আটলান্টিক রেকফিশ (Polyprion americanus), ব্ল্যাকমাউথ বাস (Synagrops bellus) এবং জাপানি সি-বাস (Lateolabrax japonicus)।"
    },
    additionalInformation: {
      en: "Acropomatiformes was resurrected and formalized by Betancur-R. et al. (2013) and confirmed by Eschmeyer (2026) to unite several families previously misplaced within polyphyletic Perciformes.",
      bn: "অতীতে পার্সিফর্মিসের মধ্যে এলোমেলোভাবে রাখা বেশ কয়েকটি পরিবারকে আধুনিক জিনতত্ত্বের ভিত্তিতে অ্যাক্রোপোমাটিফর্মিস বর্গে সুবিন্যস্ত করা হয়েছে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Eschmeyer's Catalog of Fishes (2026); Betancur-R. et al. (2017)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 38. Acanthuriformes
  {
    id: "order-acanthuriformes",
    taxonId: "taxon-acanthuriformes",
    rank: "order",
    scientificName: "Acanthuriformes",
    bengaliName: "অ্যাকান্থুরিফর্মিস (সার্জনফিশ, র্যাবটিফিশ ও স্পেডফিশ বা পায়রা চন্দা)",
    englishName: "Surgeonfishes, Tangs, Rabbitfishes, and Spadefishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Jordan, 1923",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Acanthuriformes", nameBn: "অ্যাকান্থুরিফর্মিস" }
    ],
    shortDescription: {
      en: "Laterally compressed, disc-shaped herbivorous and omnivorous marine and estuarine fishes famous for razor-sharp defensive scalpels on the tail (surgeonfishes), venomous fin spines (rabbitfishes and scats), and high ecological value.",
      bn: "চ্যাপ্টা গোলাকার সামুদ্রিক ও মোহনাজ মাছ; যাদের লেজের গোড়ায় ক্ষুরের মতো ধারালো অস্ত্র (সার্জনফিশ), বিষাক্ত কাঁটা (র্যাবিটফিশ ও পায়রা চন্দা) এবং প্রবাল প্রাচীর সুরক্ষায় অপরিসীম গুরুত্ব রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body deep, oval or disc-like, and highly compressed laterally; small terminal mouth with specialized close-set incisiform or denticulate teeth; surgeonfishes (Acanthuridae) possess one or more razor-sharp, folding or fixed modified spine-like scalpels on each side of the caudal peduncle for defense; rabbitfishes (Siganidae) possess unique pelvic fins with two spines (one inner, one outer) enclosing three soft rays, with all spines equipped with venom glands; Spotted Scat (*Scatophagus argus*) occurs natively in Bangladesh estuaries with venomous dorsal spines.",
      bn: "চ্যাপ্টা ডিম্বাকার বা গোল দেহ; ছোট মুখ যাতে বিশেষ সূক্ষ্ম দাঁত থাকে; সার্জনফিশদের লেজের গোড়ায় ক্ষুরের মতো ধারালো ভাঁজ করা ব্লেড বা স্ক্যালপেল থাকে যা দিয়ে আত্মরক্ষা করে; র্যাবিটফিশের প্রতিটি পাখনার কাঁটায় মারাত্মক বিষগ্রন্থি থাকে; সুন্দরবনের পরিচিত পায়রা চন্দা বা চিত্রা মাছের (Scatophagus argus) পৃষ্ঠপাখনার কাঁটায় বিষ থাকে।",
      keyFeatures: {
        en: [
          "Razor-sharp folding or rigid scalpel-blades on the caudal peduncle in surgeonfishes",
          "Pelvic fins with two spines enclosing three soft rays in rabbitfishes (Siganidae)",
          "Venomous spines causing painful stings in rabbitfishes and scats (Scatophagidae)",
          "Essential macroalgal grazers preventing coral reefs from being smothered by algae"
        ],
        bn: [
          "সার্জনফিশের লেজের গোড়ায় অত্যন্ত ধারালো ক্ষুর বা ব্লেডসদৃশ কাঁটা",
          "র্যাবিটফিশে দুটি কাঁটার মাঝে তিনটি নরম রশ্মিযুক্ত বিশেষ শ্রোণীপাখনা",
          "পায়রা চন্দা ও র্যাবিটফিশের কাঁটায় তীব্র যন্ত্রণাদায়ক বিষের উপস্থিতি",
          "প্রবাল প্রাচীরের অতিরিক্ত ক্ষতিকর শৈবাল খেয়ে প্রবালকে সুস্থ রাখার মূল ভূমিকা"
        ]
      }
    },
    habitat: {
      en: "Tropical coral reefs, rocky coastal shallows, mangrove estuaries, tidal creeks, and inshore sandy bays.",
      bn: "ক্রান্তীয় প্রবাল প্রাচীর, অগভীর সাগর, সুন্দরবনের ম্যানগ্রোভ খাঁড়ি ও মোহনা।",
      systems: ["marine", "brackish"]
    },
    ecosystem: {
      en: "The primary herbivorous guardians of coral reef health; grazing fleshy macroalgae to prevent algal phase shifts and maintain pristine coral dominance.",
      bn: "প্রবাল প্রাচীরের প্রধান প্রহরী; অতিরিক্ত শৈবাল খেয়ে প্রবাল প্রাচীরকে ধ্বংসের হাত থেকে বাঁচিয়ে রাখে।"
    },
    feeding: {
      en: "Herbivores, detritivores, and omnivores. Tangs scrape turf algae and macroalgae; scats and spadefishes consume algae, detritus, and hydroids.",
      bn: "শৈবালভোজী ও সর্বভুক; সামুদ্রিক শৈবাল, পলি ও ক্ষুদ্র জলজ প্রাণী খায়।"
    },
    reproduction: {
      en: "Mass broadcast spawning on reef edges during lunar cycles; transparent pelagic acronurus larvae spend weeks drifting in oceanic currents.",
      bn: "চাঁদের তিথিতে প্রবাল প্রাচীরের কিনারায় ঝাঁক বেঁধে ডিম ছড়ায়; স্বচ্ছ অ্যাক্রোনুরাস লার্ভা সাগরে ভেসে বেড়ায়।"
    },
    distribution: {
      en: "Circumtropical in all warm oceans. Scatophagus argus (Spotted Scat / Chitra / Payra Chanda) and Siganus javus are native to coastal Bangladesh and the Sundarbans.",
      bn: "সারা বিশ্বের উষ্ণ সাগরে বিস্তৃত। পায়রা চন্দা বা চিত্রা মাছ (Scatophagus argus) বাংলাদেশের সুন্দরবন ও মোহনা অঞ্চলের একটি বিখ্যাত দেশীয় মাছ।"
    },
    importantFamilies: [
      {
        name: "Acanthuridae",
        commonEn: "Surgeonfishes & Tangs",
        commonBn: "সার্জনফিশ ও ট্যাং গোত্র",
        diagnosticEn: "Sharp folding or fixed scalpel on caudal peduncle, disc-shaped bodies; includes Acanthurus and Zebrasoma.",
        diagnosticBn: "লেজের গোড়ায় ক্ষুরের মতো ধারালো কাঁটা; Acanthurus ও Zebrasoma গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Scatophagidae",
        commonEn: "Scats",
        commonBn: "পায়রা চন্দা বা স্ক্যাট গোত্র",
        diagnosticEn: "Four-spined anal fin, compressed quadrangular body, venomous spines; includes Scatophagus.",
        diagnosticBn: "চারটি কাঁটাযুক্ত পায়ুপাখনা, বিষাক্ত কাঁটা, চ্যাপ্টা শরীর; Scatophagus (পায়রা চন্দা) অন্তর্ভুক্ত।"
      },
      {
        name: "Siganidae",
        commonEn: "Rabbitfishes",
        commonBn: "র্যাবিটফিশ গোত্র",
        diagnosticEn: "Two pelvic spines, highly venomous fin spines, rabbit-like mouth; includes Siganus.",
        diagnosticBn: "খরগোশের মতো মুখ, মারাত্মক বিষাক্ত কাঁটা; Siganus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Acanthurus, Scatophagus, Siganus, and Platax. Key binomials: Scatophagus argus (Linnaeus, 1766), Acanthurus triostegus (Linnaeus, 1758), and Siganus javus (Linnaeus, 1766).",
      bn: "গণ: Acanthurus, Scatophagus, Siganus এবং Platax। প্রধান নাম: Scatophagus argus (Linnaeus, 1766), Acanthurus triostegus (Linnaeus, 1758) এবং Siganus javus (Linnaeus, 1766)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Spotted Scat / Payra Chanda (Scatophagus argus - native to Bangladesh), Streaked Spinefoot (Siganus javus - native to Bangladesh), Convict Surgeonfish (Acanthurus triostegus - native to Bay of Bengal), and Moorish Idol (Zanclus cornutus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: পায়রা চন্দা বা চিত্রা (Scatophagus argus - বাংলাদেশে দেশীয় মাছ), স্ট্রিকড স্পাইনফুট (Siganus javus - সুন্দরবনে প্রাপ্ত), কনভিক্ট সার্জনফিশ (Acanthurus triostegus - সেন্টমার্টিনে প্রাপ্ত) এবং মুরিশ আইডল (Zanclus cornutus)।"
    },
    additionalInformation: {
      en: "Scatophagus argus (Spotted Scat or Payra Chanda) is highly esteemed both as an exquisite brackish food fish in the Sundarbans and as a premium ornamental fish in international aquarium markets.",
      bn: "পায়রা চন্দা (Scatophagus argus) সুন্দরবনের মানুষের অত্যন্ত সুস্বাদু খাদ্য মাছ এবং আন্তর্জাতিকভাবে অত্যন্ত মূল্যবান বাহারি অ্যাকোয়ারিয়াম মাছ।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Eschmeyer's Catalog of Fishes (2026); Sorenson et al. (2013)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 39. Lophiiformes
  {
    id: "order-lophiiformes",
    taxonId: "taxon-lophiiformes",
    rank: "order",
    scientificName: "Lophiiformes",
    bengaliName: "লোফিফর্মিস (অ্যাংলারফিশ বা বরশিওয়ালা মাছ, মঙ্কফিশ ও ফ্রগফিশ)",
    englishName: "Anglerfishes, Monkfishes, Frogfishes, and Batfishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Garman, 1899",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Lophiiformes", nameBn: "লোফিফর্মিস" }
    ],
    shortDescription: {
      en: "Specialized ambush predatory marine fishes equipped with a modified first dorsal spine functioning as a fishing rod (illicium) tipped with a bait (esca), including deep-sea ceratioids with dwarf parasitic males and limb-like walking frogfishes.",
      bn: "বিখ্যাত ছদ্মবেশী শিকারী সামুদ্রিক মাছ; যাদের মাথার উপরে মাছ ধরার ছিপ বা বরশি (illicium) এবং মাথায় জ্বলজ্বলে টোপ (esca) থাকে, গভীর সমুদ্রের অন্ধকারের বিশালাকার স্ত্রী মাছের গায়ে পরজীবী হিসেবে স্থায়ীভাবে লেগে থাকা ক্ষুদ্র পুরুষ মাছ এবং পাখনার উপর ভর দিয়ে হাঁটা ফ্রগফিশ এর অন্তর্ভুক্ত।"
    },
    diagnosticCharacteristics: {
      en: "First spine of dorsal fin modified into an illicium ('fishing rod') placed on snout, terminating in a fleshy or bioluminescent bait called the esca; pectoral fins limb-like with elongate radials used for crawling along the seafloor in Antennariidae and Ogcocephalidae; gill openings restricted to small circular pores behind pectoral fins; deep-sea ceratioid anglerfishes display extreme sexual dimorphism where miniature dwarf males fuse permanently into the body and circulatory system of the large female as sexual parasites.",
      bn: "মাথার সামনের প্রথম পৃষ্ঠ কাঁটাটি মাছ ধরার ছিপে (ইলিসিয়াম) রূপান্তরিত যার ডগায় জীবন্ত কৃমি বা জ্বলজ্বলে আলোর টোপ (এসকা) থাকে; বক্ষপাখনা হাতের মতো বাঁকানো যা দিয়ে তলদেশে হেঁটে চলতে পারে; ফুলকা ছিদ্র বক্ষপাখনার পেছনে ছোট নলের মতো ছিদ্রের আকারে থাকে; গভীর সমুদ্রের সেরাসিওয়েড মাছে পুরুষ মাছ স্ত্রী মাছের চেয়ে বহুগুণ ছোট হয় এবং স্ত্রী মাছের ত্বকে কামড়ে ধরে আজীবনের জন্য স্ত্রী মাছের রক্তনালীর সাথে স্থায়ীভাবে জোড়া লেগে যায়।",
      keyFeatures: {
        en: [
          "Fishing apparatus (illicium and esca) derived from modified first dorsal spine",
          "Extreme sexual parasitism where dwarf males fuse permanently into the female's bloodstream",
          "Arm-like pectoral fins used for crawling on benthic substrates in frogfishes and batfishes",
          "Symbiotic bioluminescent bacteria residing inside the glowing esca bait"
        ],
        bn: [
          "প্রথম পৃষ্ঠ কাঁটা থেকে রূপান্তরিত মাছ ধরার ছিপ ও জ্বলজ্বলে টোপ",
          "ক্ষুদ্র পুরুষ মাছের স্ত্রী মাছের শরীরে স্থায়ীভাবে মিশে গিয়ে রক্ত সংবহন ভাগ করার চরম পরজীবী জীবন",
          "ফ্রগফিশ ও ব্যাটফিশে তলদেশে ডাঙ্গার মতো হেঁটে চলার জন্য বাহুসদৃশ পাখনা",
          "টোপের ভেতরে আলো উৎপাদনকারী বিশেষ মিথোজীবী ব্যাক্টেরিয়া"
        ]
      }
    },
    habitat: {
      en: "All oceanic depths from shallow coastal coral reefs and kelp beds down to abyssal ocean basins exceeding 4,000 meters depth.",
      bn: "উপকূলীয় অগভীর প্রবাল প্রাচীর থেকে শুরু করে ৪,০০০ মিটারেরও বেশি অতল গভীর সমুদ্রের খাদ।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Master ambush predators in energy-poor bathypelagic waters and coral reef drop-offs, capturing prey attracted to their deceptive lures.",
      bn: "গভীর সমুদ্র ও প্রাচীরের চরম শিকারী; ছিপের আলো ও টোপের ফাঁদে ফেলে শিকার ধরে।"
    },
    feeding: {
      en: "Voracious visual and luring carnivores. Expanding jaws and elastic stomachs enable anglerfishes to swallow prey up to twice their own body size.",
      bn: "মাংসাশী; মুখগহ্বর ও রাবারের মতো প্রসারণক্ষম পাকস্থলী দিয়ে নিজের শরীরের চেয়ে দ্বিগুণ বড় শিকার অনায়াসে গিলে ফেলে।"
    },
    reproduction: {
      en: "Pelagic spawning: females release enormous floating gelatinous egg veils (mucoid rafts up to 10 meters long and 1 meter wide); deep-sea ceratioid males fuse permanently via tissue anastomosis, losing their eyes and digestive systems to become permanent sperm donors.",
      bn: "স্ত্রী মাছ সাগরে ১০ মিটার পর্যন্ত দীর্ঘ ভাসমান মিউকাসের ডিমের চাদর ছড়ায়; গভীর সমুদ্রের পুরুষ মাছ স্ত্রী মাছকে খুঁজে কামড়ে ধরে রক্তনালীর সাথে একীভূত হয়ে যায়।"
    },
    distribution: {
      en: "Worldwide in all tropical, subtropical, temperate, and polar oceans. Found in deep waters of the Bay of Bengal and continental shelf edges.",
      bn: "সারা বিশ্বের সকল মহাসাগরের গভীর অঞ্চলে বিস্তৃত। বঙ্গোপসাগরের গভীর খাদে এদের উপস্থিতি নথিবদ্ধ।"
    },
    importantFamilies: [
      {
        name: "Lophiidae",
        commonEn: "Monkfishes / Goosefishes",
        commonBn: "মঙ্কফিশ গোত্র",
        diagnosticEn: "Depressed head, huge mouth with sharp teeth, highly commercial culinary fish in North Atlantic; includes Lophius.",
        diagnosticBn: "চ্যাপ্টা মাথা, বড় হাঁ, অত্যন্ত সুস্বাদু খাদ্য মাছ; Lophius গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Antennariidae",
        commonEn: "Frogfishes",
        commonBn: "ফ্রগফিশ গোত্র",
        diagnosticEn: "Globular camouflaged bodies, limb-like fins used for walking on reefs, rapid suction strike; includes Antennarius.",
        diagnosticBn: "ব্যাঙের মতো গোল শরীর, প্রবাল প্রাচীরে হেঁটে চলা মাছ; Antennarius গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Melanocetidae",
        commonEn: "Black Seadevils",
        commonBn: "ব্ল্যাক সি-ডেভিল গোত্র",
        diagnosticEn: "Deep-sea bathypelagic anglerfishes with glowing esca, gigantic translucent fangs; includes Melanocetus.",
        diagnosticBn: "গভীর সাগরের জ্বলজ্বলে টোপযুক্ত কালো ড্রাগনমাথা মাছ; Melanocetus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Lophius, Antennarius, Melanocetus, and Ogcocephalus. Key binomials: Lophius piscatorius Linnaeus, 1758 and Melanocetus johnsonii Günther, 1864.",
      bn: "গণ: Lophius, Antennarius, Melanocetus এবং Ogcocephalus। প্রধান নাম: Lophius piscatorius Linnaeus, 1758 এবং Melanocetus johnsonii Günther, 1864।"
    },
    examplesSummary: {
      en: "Four verified representative examples: European Monkfish (Lophius piscatorius), Humpback Anglerfish (Melanocetus johnsonii), Striated Frogfish (Antennarius striatus), and Shortnose Batfish (Ogcocephalus nasutus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ইউরোপীয় মঙ্কফিশ (Lophius piscatorius), কুঁজো অ্যাংলারফিশ (Melanocetus johnsonii), স্ট্রায়েটেড ফ্রগফিশ (Antennarius striatus) এবং শর্টনোজ ব্যাটফিশ (Ogcocephalus nasutus)।"
    },
    additionalInformation: {
      en: "The sexual parasitism of ceratioid anglerfishes represents the only known natural tissue fusion between different individual vertebrates without immune rejection, serving as an active medical model in transplant immunology.",
      bn: "অ্যাংলারফিশের পুরুষ ও স্ত্রী মাছের স্থায়ী অঙ্গ-সংযোজন চিকিৎসা বিজ্ঞানে মানবদেহে অঙ্গ প্রতিস্থাপনে অনাক্রম্যতার প্রত্যাখ্যান রোধ গবেষণায় এক অনন্য প্রাকৃতিক মডেল।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Pietsch (2009)",
    verificationStatus: "published",
    publishedStatus: true
  }
];
