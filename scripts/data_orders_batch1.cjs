// Batch 1: Orders 1-10
// Hexanchiformes, Heterodontiformes, Echinorhiniformes, Pristiophoriformes, Squatiniformes,
// Hiodontiformes, Elopiformes, Albuliformes, Notacanthiformes, Alepocephaliformes

module.exports = [
  {
    id: "order-hexanchiformes",
    taxonId: "taxon-hexanchiformes",
    rank: "order",
    scientificName: "Hexanchiformes",
    bengaliName: "হেক্সাঙ্কিফর্মিস (ছয় ও সাত ফুলকাজুক্ত হাঙ্গর)",
    englishName: "Six-gill and Seven-gill Sharks / Cow Sharks",
    parentTaxonId: "class-chondrichthyes",
    parentTaxonNodeId: "taxon-subclass-elasmobranchii",
    category: "fish",
    authorYear: "de Buen, 1926",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Hexanchiformes", nameBn: "হেক্সাঙ্কিফর্মিস" }
    ],
    shortDescription: {
      en: "Primitive deep-water predatory sharks characterized by possessing 6 or 7 pairs of gill slits, a single spineless dorsal fin positioned far back, and amphistylic jaw suspension.",
      bn: "আদিম গভীর সমুদ্রের শিকারী হাঙ্গর, যাদের ৬ বা ৭ জোড়া ফুলকা ছিদ্র, দেহের পেছনের দিকে অবস্থিত একক কাঁটাহীন পৃষ্ঠপাখনা এবং অ্যাম্ফিস্টাইলিক চোয়াল বিদ্যমান।"
    },
    diagnosticCharacteristics: {
      en: "Six or seven pairs of lateral gill slits opening separately; single spineless dorsal fin placed far back on caudal peduncle opposite anal fin; anal fin present; persistent notochord lacking fully ossified vertebral centra; lower jaw teeth comb-like with multiple cusps; amphistylic jaw attachment.",
      bn: "৬ বা ৭ জোড়া পৃথক পার্শ্বীয় ফুলকা ছিদ্র; পায়ুপাখনার বিপরীতে পেছনের দিকে অবস্থিত একক কাঁটাহীন পৃষ্ঠপাখনা; পায়ুপাখনা উপস্থিত; অসম্পূর্ণ কশেরুকাযুক্ত স্থায়ী নটোকর্ড; নিচের চোয়ালে চিরুনির মতো খাঁজযুক্ত বহু-চূড়াবিশিষ্ট দাঁত; আদিম চোয়াল সংযোগ বিদ্যমান।",
      keyFeatures: {
        en: [
          "Six or seven pairs of external branchial gill slits",
          "Single dorsal fin lacking spines, positioned far posteriorly",
          "Comb-like compressed teeth on lower jaw dental arcade",
          "Amphistylic primitive craniomandibular jaw suspension"
        ],
        bn: [
          "৬ বা ৭ জোড়া বাহ্যিক ফুলকা ছিদ্র",
          "কাঁটাহীন একক পৃষ্ঠপাখনা দেহের পেছনের দিকে অবস্থিত",
          "নিচের চোয়ালে চিরুনিসদৃশ বহু খাঁজযুক্ত দাঁত",
          "আদিম অ্যাম্ফিস্টাইলিক করোটি-চোয়াল সংযোগ"
        ]
      }
    },
    habitat: {
      en: "Deep-sea bathyal continental shelves, upper continental slopes, submarine canyons, and cold deep oceanic waters (90–2,500 m depth).",
      bn: "গভীর সমুদ্রের মহীসোপান, মহীঢাল, গভীর সাবমেরিন গিরিখাত এবং শীতল গভীর মহাসাগরীয় অঞ্চল (৯০–২,৫০০ মিটার গভীরতায়)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Apex and upper-trophic benthic/benthopelagic deep-sea predators regulating populations of deep-water teleosts, squaloid sharks, rays, and cephalopods.",
      bn: "গভীর সমুদ্রের তলদেশের শীর্ষ শিকারী প্রাণী যারা গভীর পানির মাছ, হাঙ্গর, শাপলাপাতা মাছ ও সেফালোপডের সংখ্যা নিয়ন্ত্রণ করে।"
    },
    feeding: {
      en: "Carnivorous generalist macropredators, feeding on deep-sea bony fishes, smaller elasmobranchs, squids, crabs, and scavenging whale carcasses.",
      bn: "মাংসাশী শিকারী; গভীর সমুদ্রের অস্থিময় মাছ, ছোট হাঙ্গর, স্কুইড, কাঁকড়া এবং মৃত তিমির দেহাবশেষ ভক্ষণ করে।"
    },
    reproduction: {
      en: "Aplacental viviparous (ovoviviparous) with large litters ranging from 20 up to over 100 pups in large Hexanchus females after prolonged gestation.",
      bn: "অ্যাওভোভিভিপ্যারাস বা অমরাহীন জরায়ুজ প্রজনন; দীর্ঘ গর্ভধারণ শেষে বড় স্ত্রী হাঙ্গর ২০ থেকে ১০০টিরও বেশি পূর্ণাঙ্গ বাচ্চা প্রসব করে।"
    },
    distribution: {
      en: "Circumglobal in tropical, subtropical, and temperate oceans along continental margins. Rare in deep northern Bay of Bengal slopes.",
      bn: "বিশ্বের ক্রান্তীয়, উপক্রান্তীয় ও নাতিশীতোষ্ণ গভীর মহাসাগরে বিস্তৃত। বঙ্গোপসাগরের গভীর মহীঢাল অঞ্চলে কদাচিৎ দেখা মেলে।"
    },
    importantFamilies: [
      {
        name: "Hexanchidae",
        commonEn: "Cow Sharks / Sixgill Sharks",
        commonBn: "কাউ হাঙ্গর গোত্র",
        diagnosticEn: "Six or seven gill slits, single dorsal fin, broad head with small eyes, comb-like multicuspid lower teeth.",
        diagnosticBn: "৬ বা ৭টি ফুলকা ছিদ্র, একক পৃষ্ঠপাখনা, চওড়া মাথা ও ছোট চোখ, চিরুনিসদৃশ দাঁত।"
      },
      {
        name: "Chlamydoselachidae",
        commonEn: "Frilled Sharks",
        commonBn: "ঝালরযুক্ত হাঙ্গর গোত্র",
        diagnosticEn: "Eel-like body, six gill slits with frilly margins across throat, terminal mouth with three-pronged trident teeth.",
        diagnosticBn: "সর্পিল দেহ, গলার নিচে ঝালরসদৃশ ৬ জোড়া ফুলকা ছিদ্র, ত্রিফলা দাঁতযুক্ত অগ্রবর্তী মুখ।"
      }
    ],
    scientificNamesSummary: {
      en: "Notable genera: Hexanchus, Notorynchus, Heptranchias, and Chlamydoselachus. Verified binomials: Hexanchus griseus (Bonnaterre, 1788) and Chlamydoselachus anguineus Garman, 1884.",
      bn: "উল্লেখযোগ্য গণ: Hexanchus, Notorynchus, Heptranchias এবং Chlamydoselachus। প্রামাণ্য নাম: Hexanchus griseus (Bonnaterre, 1788) এবং Chlamydoselachus anguineus Garman, 1884।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Bluntnose Sixgill Shark (Hexanchus griseus), Broadnose Sevengill Shark (Notorynchus cepedianus), Frilled Shark (Chlamydoselachus anguineus), and Sharpnose Sevengill Shark (Heptranchias perlo).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ভোঁতামুখ সিক্সগিল হাঙ্গর (Hexanchus griseus), চওড়ামুখ সেভেনগিল হাঙ্গর (Notorynchus cepedianus), ঝালরযুক্ত হাঙ্গর (Chlamydoselachus anguineus) এবং চোখা সেভেনগিল হাঙ্গর (Heptranchias perlo)।"
    },
    additionalInformation: {
      en: "Hexanchiforms are evolutionary living fossils retaining ancestral skeletal and gill configurations from the Jurassic period. Because of their slow growth and deep-sea habitat, they are sensitive to commercial deep-water longline bycatch.",
      bn: "হেক্সাঙ্কিফর্মিস জুরাসিক যুগের শারীরিক গঠন ধারণকারী জীবন্ত জীবাশ্ম। গভীর সমুদ্রে বাণিজ্যিক লং-লাইন মাছ ধরার ফাঁদে এরা প্রায়শই অনাকাঙ্ক্ষিতভাবে ধরা পড়ে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Ebert & Stehmann (2013)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-heterodontiformes",
    taxonId: "taxon-heterodontiformes",
    rank: "order",
    scientificName: "Heterodontiformes",
    bengaliName: "হেটেরোডন্টিফর্মিস (ষাঁড়মাথা বা হর্ন হাঙ্গর)",
    englishName: "Bullhead Sharks / Horn Sharks",
    parentTaxonId: "class-chondrichthyes",
    parentTaxonNodeId: "taxon-subclass-elasmobranchii",
    category: "fish",
    authorYear: "Berg, 1940",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Heterodontiformes", nameBn: "হেটেরোডন্টিফর্মিস" }
    ],
    shortDescription: {
      en: "Benthic, blunt-headed sharks characterized by two dorsal fins bearing heavy calcified spines, prominent supraorbital ridges, heterodont dentition, and spiral egg cases.",
      bn: "তলদেশীয় ভোঁতা মাথার হাঙ্গর, যাদের দুটি পৃষ্ঠপাখনাতেই শক্ত কাঁটা, চোখের উপরে স্পষ্ট শৈলশিরা, দ্বিরূপ দাঁত এবং সর্পিল ডিমের খোলস রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Five lateral gill slits; two dorsal fins each preceded by a stout mineralized spine; anal fin present; blunt pig-like snout with elevated crests above eyes; heterodont teeth with sharp grasping anterior teeth and broad flattened crushing molariform posterior plates; oviparous with corkscrew-flanged keratinous egg capsules.",
      bn: "৫ জোড়া ফুলকা ছিদ্র; উভয় পৃষ্ঠপাখনার অগ্রভাগে শক্ত কাঁটা বিদ্যমান; পায়ুপাখনা উপস্থিত; চোখের উপরে উন্নত শৈলশিরাসহ ভোঁতা মুখ; সামনের দিকে সূক্ষ্ম কামড়ানোর দাঁত এবং পেছনের দিকে শক্ত খোলস ভাঙার চ্যাপ্টা পেষণ দাঁত; কর্কস্ক্রু বা স্ক্রু-সদৃশ ডিম পাড়ে।",
      keyFeatures: {
        en: [
          "Stout calcified spines preceding both dorsal fins",
          "Distinct heterodont dentition (pointed anterior, molariform posterior)",
          "Prominent supraorbital ridges crowning a blunt head",
          "Unique screw-shaped spiral-flanged egg cases"
        ],
        bn: [
          "উভয় পৃষ্ঠপাখনার সামনে শক্ত খনিজায়িত কাঁটা",
          "দ্বিরূপ দাঁতের বিন্যাস (সামনে তীক্ষ্ণ, পেছনে পেষণকারী)",
          "মাথার উপর চোখের সুস্পষ্ট শৈলশিরা",
          "অনন্য স্ক্রু-সদৃশ সর্পিল ডিমের খোলস"
        ]
      }
    },
    habitat: {
      en: "Warm-temperate and tropical rocky reefs, kelp forests, and coastal continental shelves down to 275 meters depth.",
      bn: "উষ্ণ-নাতিশীতোষ্ণ ও গ্রীষ্মমন্ডলীয় পাথুরে প্রবাল প্রাচীর, কেল্প বন এবং অগভীর মহীসোপান (২৭৫ মিটার গভীরতা পর্যন্ত)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Nocturnal durophagous predators specialized in consuming sea urchins, molluscs, and decapod crustaceans in reef microhabitats.",
      bn: "নিশাচর খোলসভোজী শিকারী; প্রবাল প্রাচীর অঞ্চলে সামুদ্রিক আর্চিন, শামুক, ঝিনুক ও কাঁকড়ার সংখ্যা নিয়ন্ত্রণে গুরুত্বপূর্ণ ভূমিকা রাখে।"
    },
    feeding: {
      en: "Durophagous carnivores. Grasping hard-bodied prey with small anterior cusps and grinding with flattened posterior molar plates.",
      bn: "শক্ত খোলসযুক্ত প্রাণীভোজী মাংসাশী। সামনের দাঁত দিয়ে শিকার ধরে পেছনের চ্যাপ্টা পেষণ দাঁত দিয়ে গুঁড়ো করে।"
    },
    reproduction: {
      en: "Oviparous. Females deposit tough, auger-like spiral egg cases into rock crevices using their mouths to wedge them securely.",
      bn: "ডিম্বপ্রসবকারী। স্ত্রী হাঙ্গর মুখ দিয়ে স্ক্রু-আকৃতির শক্ত ডিমের খোলস পাথরের খাঁজে নিরাপদে গেঁথে রাখে।"
    },
    distribution: {
      en: "Pacific and Western Indian Ocean continental shelves. Absent in the Atlantic Ocean and northern Bay of Bengal coastal waters.",
      bn: "প্রশান্ত ও পশ্চিম ভারত মহাসাগরের মহীসোপানে সীমাবদ্ধ। আটলান্টিক মহাসাগর ও বাংলাদেশের অগভীর উপকূলে অনুপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Heterodontidae",
        commonEn: "Bullhead Sharks / Horn Sharks",
        commonBn: "ষাঁড়মাথা হাঙ্গর গোত্র",
        diagnosticEn: "Single living family sharing all diagnostic ordinal characters, containing nine recognized species in genus Heterodontus.",
        diagnosticBn: "একমাত্র জীবিত গোত্র; Heterodontus গণের ৯টি জীবিত প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Single extant genus Heterodontus. Key binomials: Heterodontus portusjacksoni (Meyer, 1793), Heterodontus francisci (Girard, 1855), and Heterodontus zebra (Gray, 1831).",
      bn: "একক জীবিত গণ Heterodontus। প্রধান প্রজাতি: Heterodontus portusjacksoni (Meyer, 1793), Heterodontus francisci (Girard, 1855) এবং Heterodontus zebra (Gray, 1831)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Port Jackson Shark (Heterodontus portusjacksoni), Horn Shark (Heterodontus francisci), Zebra Bullhead Shark (Heterodontus zebra), and Crested Bullhead Shark (Heterodontus galeatus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: পোর্ট জ্যাকসন হাঙ্গর (Heterodontus portusjacksoni), হর্ন হাঙ্গর (Heterodontus francisci), জেব্রা ষাঁড়মাথা হাঙ্গর (Heterodontus zebra) এবং ঝুটিযুক্ত ষাঁড়মাথা হাঙ্গর (Heterodontus galeatus)।"
    },
    additionalInformation: {
      en: "Heterodontus has a continuous fossil record extending back over 175 million years into the Early Jurassic, representing the most archaic living galeomorph lineage.",
      bn: "হেটেরোডন্টাস ১৭৫ মিলিয়নেরও বেশি বছর ধরে আদি জুরাসিক কাল থেকে অপরিবর্তিত দৈহিক বৈশিষ্ট্যে বেঁচে থাকা গেলিওমর্ফ বংশধারা।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Compagno (2001)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-echinorhiniformes",
    taxonId: "taxon-echinorhiniformes",
    rank: "order",
    scientificName: "Echinorhiniformes",
    bengaliName: "একাইনোরহাইনিফর্মিস (কাঁটা-হাঙ্গর বা ব্র্যাম্বল শার্ক)",
    englishName: "Bramble Sharks",
    parentTaxonId: "class-chondrichthyes",
    parentTaxonNodeId: "taxon-subclass-elasmobranchii",
    category: "fish",
    authorYear: "de Buen, 1926",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Echinorhiniformes", nameBn: "একাইনোরহাইনিফর্মিস" }
    ],
    shortDescription: {
      en: "Sluggish, deep-sea benthic sharks characterized by large thorn-like dermal denticles, two small spineless dorsal fins placed far back, and total absence of an anal fin.",
      bn: "গভীর সমুদ্রের অলস প্রকৃতির তলদেশীয় হাঙ্গর, যাদের ত্বকে বড় কাঁটার মতো টিউবারকল, দেহের পেছনের দিকে দুটি ক্ষুদ্র কাঁটাহীন পৃষ্ঠপাখনা এবং পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body armed with irregularly scattered coarse, thorn-like denticles (bucklers) up to 15 mm wide; two small spineless dorsal fins set far back close to caudal fin; anal fin completely absent; five pairs of small gill slits; teeth identical in upper and lower jaws with very oblique blade-like cusps.",
      bn: "ত্বকে অনিয়মিতভাবে ছড়ানো কাঁটাসদৃশ বড় শক্ত টিউবারকল (১৫ মিমি পর্যন্ত); পুচ্ছপাখনার কাছে অবস্থিত দুটি ক্ষুদ্র কাঁটাহীন পৃষ্ঠপাখনা; পায়ুপাখনা সম্পূর্ণ অনুপস্থিত; ৫ জোড়া ফুলকা ছিদ্র; উভয় চোয়ালে সমান ধারালো ব্লেড-সদৃশ দাঁত বিদ্যমান।",
      keyFeatures: {
        en: [
          "Dermal armor composed of enlarged thorny bucklers and denticles",
          "Complete absence of anal fin",
          "Two small spineless dorsal fins placed close to caudal fin",
          "Blade-like oblique teeth uniform in both jaws"
        ],
        bn: [
          "ত্বকে কাঁটাযুক্ত বড় টিউবারকল বা ঢালসদৃশ আঁইশ",
          "পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি",
          "পুচ্ছপাখনার কাছে অবস্থিত দুটি ক্ষুদ্র কাঁটাহীন পৃষ্ঠপাখনা",
          "উভয় চোয়ালেই একই ধরনের ধারালো বাঁকা দাঁত"
        ]
      }
    },
    habitat: {
      en: "Deep-water continental and insular shelves, upper continental slopes, and seamounts (100–1,100 m depth).",
      bn: "গভীর সমুদ্রের মহীসোপান, মহীঢাল এবং সমুদ্রগর্ভস্থ পর্বতশ্রেণী (১০০–১,১০০ মিটার গভীরতায়)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Benthic deep-slope apex predators, preying on spiny dogfishes, small teleosts, octopuses, and crabs in dark bathyal zones.",
      bn: "গভীর সমুদ্রের তলদেশের শিকারী প্রাণী; ডগফিশ হাঙ্গর, ছোট মাছ, অক্টোপাস ও কাঁকড়া শিকার করে পুষ্টি চক্র সচল রাখে।"
    },
    feeding: {
      en: "Suction and grasping carnivores, swallowing benthic bony fishes, small sharks, skates, and cephalopods whole with buccal expansion.",
      bn: "মুখগহ্বর প্রসারিত করে চোহণ পদ্ধতিতে আস্ত মাছ, ছোট হাঙ্গর, শাপলাপাতা মাছ এবং সেফালোপড গিলে খায়।"
    },
    reproduction: {
      en: "Aplacental viviparous (ovoviviparous) with large litters of up to 52 pups produced after lengthy gestation periods.",
      bn: "অমরাহীন জরায়ুজ প্রজনন; দীর্ঘ গর্ভধারণ শেষে একবারে ৫২টি পর্যন্ত পূর্ণাঙ্গ বাচ্চা প্রসব করে।"
    },
    distribution: {
      en: "Patchy circumglobal distribution in temperate and tropical oceans. Occurs rarely in deep offshore northern Indian Ocean trenches.",
      bn: "বিশ্বের ক্রান্তীয় ও নাতিশীতোষ্ণ গভীর সাগরে বিচ্ছিন্নভাবে বিস্তৃত। ভারত মহাসাগরের গভীর খাদে কদাচিৎ পাওয়া যায়।"
    },
    importantFamilies: [
      {
        name: "Echinorhinidae",
        commonEn: "Bramble Sharks",
        commonBn: "কাঁটা-হাঙ্গর গোত্র",
        diagnosticEn: "Thorn-like dermal denticles, spineless posterior dorsal fins, no anal fin; contains genus Echinorhinus.",
        diagnosticBn: "কাঁটাসদৃশ ত্বকের গঠন, পেছনের দিকে কাঁটাহীন পৃষ্ঠপাখনা, পায়ুপাখনা অনুপস্থিত; Echinorhinus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Single extant genus Echinorhinus Blainville, 1816. Verified binomials: Echinorhinus brucus (Bonnaterre, 1788) and Echinorhinus cookei Pietschmann, 1928.",
      bn: "একমাত্র জীবিত গণ Echinorhinus Blainville, 1816। প্রামাণ্য বৈজ্ঞানিক নাম: Echinorhinus brucus (Bonnaterre, 1788) এবং Echinorhinus cookei Pietschmann, 1928।"
    },
    examplesSummary: {
      en: "Two verified living representative species: Bramble Shark (Echinorhinus brucus) and Prickly Shark (Echinorhinus cookei).",
      bn: "দুটি যাচাইকৃত জীবিত প্রামাণ্য প্রজাতি: কাঁটা-হাঙ্গর বা ব্র্যাম্বল শার্ক (Echinorhinus brucus) এবং প্রিকলি শার্ক (Echinorhinus cookei)।"
    },
    additionalInformation: {
      en: "Historically placed within Squaliformes, molecular phylogenetics (Naylor et al. 2012) and morphological audits in Eschmeyer (2026) establish Echinorhiniformes as an independent order basal to Squalomorphii.",
      bn: "অতীতে এদের স্কোয়ালিফর্মিসের অন্তর্ভুক্ত ভাবা হলেও আধুনিক ফাইলোজেনোমিক্স ও এশমেয়ার (২০২৬) শ্রেণীবিন্যাসে এদের পৃথক স্বাধীন বর্গ হিসেবে প্রতিষ্ঠিত করা হয়েছে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Naylor et al. (2012)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-pristiophoriformes",
    taxonId: "taxon-pristiophoriformes",
    rank: "order",
    scientificName: "Pristiophoriformes",
    bengaliName: "প্রিস্টিওফোরিফর্মিস (করাত হাঙ্গর বা শ শার্ক)",
    englishName: "Sawsharks",
    parentTaxonId: "class-chondrichthyes",
    parentTaxonNodeId: "taxon-subclass-elasmobranchii",
    category: "fish",
    authorYear: "Berg, 1940",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Pristiophoriformes", nameBn: "প্রিস্টিওফোরিফর্মিস" }
    ],
    shortDescription: {
      en: "Slender, bottom-dwelling sharks possessing an elongated blade-like rostrum edged with sharp lateral teeth, sensory barbels, and lateral gill slits.",
      bn: "পাতলা তলদেশীয় হাঙ্গর, যাদের লম্বা ব্লেডের মতো করাতমুখ, সংবেদনশীল বার্বেল বা গোঁফ এবং মাথার দুই পাশে ফুলকা ছিদ্র রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Snout produced into an elongated, flattened blade (rostrum) armed laterally with sharp, alternating large and small teeth weakly embedded in cartilage; pair of long sensory barbels originating ventrally from middle of rostrum; five or six lateral gill slits located on sides of head anterior to pectoral fins; two spineless dorsal fins; anal fin completely absent.",
      bn: "নাসিকা লম্বা চ্যাপ্টা ব্লেড বা করাতে রূপান্তরিত যার দুই পাশে অসমান তীক্ষ্ণ দাঁত বিদ্যমান; করাতমুখের মাঝখান থেকে এক জোড়া লম্বা সংবেদনশীল বার্বেল ঝুলন্ত; বক্ষপাখনার সামনে মাথার দুই পাশে ৫ বা ৬ জোড়া পার্শ্বীয় ফুলকা ছিদ্র; কাঁটাহীন দুটি পৃষ্ঠপাখনা; পায়ুপাখনা সম্পূর্ণ অনুপস্থিত।",
      keyFeatures: {
        en: [
          "Elongate rostral saw armed with alternating replacement teeth",
          "Pair of long sensory barbels midway along the ventral snout",
          "Lateral gill slits positioned on the neck (unlike ventral gill slits of sawfishes)",
          "Complete absence of anal fin"
        ],
        bn: [
          "দুই পাশে তীক্ষ্ণ দাঁতযুক্ত লম্বা করাতসদৃশ মুখ",
          "করাতের অঙ্কীয়তলে এক জোড়া লম্বা সংবেদনশীল গোঁফ বা বার্বেল",
          "মাথার দুই পাশে পার্শ্বীয় ফুলকা ছিদ্র (করাত মাছের মতো পেটের নিচে নয়)",
          "পায়ুপাখনার সম্পূর্ণ অনুপস্থিতি"
        ]
      }
    },
    habitat: {
      en: "Continental and insular shelves and upper slopes, from shallow sandy coastal bays to bathyal depths of 900 meters.",
      bn: "মহীসোপান ও মহীঢাল, অগভীর উপকূলীয় বালুকাময় উপসাগর থেকে ৯০০ মিটার গভীর সমুদ্র তলদেশ পর্যন্ত।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Benthic predators using barbels and electroreceptive ampullae to detect infaunal organisms in soft sediments, disabling prey with rapid lateral rostral swipes.",
      bn: "তলদেশীয় শিকারী; করাতের পাশের সংবেদনশীল অঙ্গ ও গোঁফ দিয়ে বালির নিচে লুকানো শিকার শনাক্ত করে এবং করাত দিয়ে আঘাত করে শিকার কাবু করে।"
    },
    feeding: {
      en: "Carnivorous, probing soft sediments for small schooling teleosts, squids, and bottom-dwelling decapod shrimps.",
      bn: "মাংসাশী; নরম কাদামাটি ও বালিতে তল্লাশি চালিয়ে ছোট অস্থিময় মাছ, স্কুইড ও চিংড়ি শিকার করে।"
    },
    reproduction: {
      en: "Aplacental viviparous (yolk-sac viviparity) producing litters of 6 to 22 pups. The rostral teeth of embryos remain soft and folded under skin sheath until after birth to protect the mother.",
      bn: "অমরাহীন জরায়ুজ প্রজনন; ৬ থেকে ২২টি বাচ্চা প্রসব করে। ভ্রূণাবস্থায় করাতের দাঁতগুলো নরম ত্বকের আবরণে মোড়ানো থাকে যাতে মায়ের প্রসবনালী ক্ষতিগ্রস্ত না হয়।"
    },
    distribution: {
      en: "Western Pacific, Indian Ocean, and Western Central Atlantic. Distinct from Batoidea sawfishes (Pristidae) which occur in coastal Bangladesh.",
      bn: "পশ্চিম প্রশান্ত মহাসাগর, ভারত মহাসাগর ও পশ্চিম আটলান্টিক। বাংলাদেশের উপকূলে প্রাপ্ত প্রিস্টিস (করাত মাছ বা বাটোয়েড) থেকে এরা শারীরবৃত্তীয়ভাবে সম্পূর্ণ ভিন্ন।"
    },
    importantFamilies: [
      {
        name: "Pristiophoridae",
        commonEn: "Sawsharks",
        commonBn: "করাত হাঙ্গর গোত্র",
        diagnosticEn: "Elongate tooth-edged rostrum with barbels, 5 or 6 lateral gill slits, no anal fin; contains genera Pristiophorus and Pliotrema.",
        diagnosticBn: "গোঁফযুক্ত দাঁতাল করাতমুখ, ৫ বা ৬টি পার্শ্বীয় ফুলকা ছিদ্র, পায়ুপাখনা অনুপস্থিত; Pristiophorus ও Pliotrema গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Pristiophorus Müller & Henle, 1837 and Pliotrema Regan, 1906. Key binomials: Pristiophorus cirratus (Latham, 1794) and Pliotrema warreni Regan, 1906.",
      bn: "গণ: Pristiophorus Müller & Henle, 1837 এবং Pliotrema Regan, 1906। প্রধান নাম: Pristiophorus cirratus (Latham, 1794) এবং Pliotrema warreni Regan, 1906।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Longnose Sawshark (Pristiophorus cirratus), Sixgill Sawshark (Pliotrema warreni), Shortnose Sawshark (Pristiophorus nudipinnis), and Bahamas Sawshark (Pristiophorus schroederi).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: লংনোজ করাত হাঙ্গর (Pristiophorus cirratus), সিক্সগিল করাত হাঙ্গর (Pliotrema warreni), শর্টনোজ করাত হাঙ্গর (Pristiophorus nudipinnis) এবং বাহামা করাত হাঙ্গর (Pristiophorus schroederi)।"
    },
    additionalInformation: {
      en: "Sawsharks represent a striking example of convergent evolution with batoid sawfishes (Rhinopristiformes: Pristidae), but retain true lateral shark gill slits, a free head, and sensory barbels.",
      bn: "করাত হাঙ্গর এবং করাত মাছ (Pristidae) অভিসারী বিবর্তনের চমৎকার নিদর্শন; তবে করাত হাঙ্গরের মাথার পাশে ফুলকা ছিদ্র ও গোঁফ থাকে, যা করাত মাছে থাকে না।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Ebert et al. (2021)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-squatiniformes",
    taxonId: "taxon-squatiniformes",
    rank: "order",
    scientificName: "Squatiniformes",
    bengaliName: "স্কোয়াটিনিফর্মিস (এঞ্জেল হাঙ্গর বা দেবদূত হাঙ্গর)",
    englishName: "Angel Sharks / Monkfishes",
    parentTaxonId: "class-chondrichthyes",
    parentTaxonNodeId: "taxon-subclass-elasmobranchii",
    category: "fish",
    authorYear: "Buen, 1926",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Chondrichthyes", nameBn: "তরুণাস্থিময় মাছ" },
      { rank: "subclass", name: "Elasmobranchii", nameBn: "ইলাসমোব্রাঙ্কি" },
      { rank: "order", name: "Squatiniformes", nameBn: "স্কোয়াটিনিফর্মিস" }
    ],
    shortDescription: {
      en: "Flattened, ray-like ambush predatory sharks with laterally expanded wing-like pectoral fins, terminal mouth, dorsal eyes, and lateral gill slits concealed in a pectoral cleft.",
      bn: "চ্যাপ্টা শাপলাপাতা মাছের মতো দেখতে ওত পেতে থাকা শিকারী হাঙ্গর; যাদের পাখার মতো ছড়ানো বক্ষপাখনা, প্রান্তীয় মুখ এবং বক্ষপাখনার খাঁজে লুকানো পার্শ্বীয় ফুলকা ছিদ্র রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body ray-like and dorsoventrally flattened; large expanded pectoral fins extending forward but free from sides of head (separated by a deep notch); five pairs of gill slits situated ventrolaterally within anterior pectoral notch; eyes and large spiracles dorsal; terminal wide mouth armed with sharp single-cusped conical teeth; two spineless dorsal fins placed far back on tail; anal fin absent; hypocercal caudal fin (lower lobe longer than upper).",
      bn: "পৃষ্ঠ-অঙ্কীয়ভাবে চ্যাপ্টা দেহ; প্রশস্ত বক্ষপাখনা সামনের দিকে প্রসারিত হলেও মাথার সাথে জোড়া লাগানো নয়; বক্ষপাখনার গোড়ার খাঁজে ৫ জোড়া ফুলকা ছিদ্র অবস্থিত; চোখ ও বড় স্পাইরাকল মাথার উপরের পৃষ্ঠে; অগ্রবর্তী প্রশস্ত মুখে তীক্ষ্ণ দাঁত; লেজের দিকে দুটি ক্ষুদ্র কাঁটাহীন পৃষ্ঠপাখনা; পায়ুপাখনা অনুপস্থিত; হাইপোসার্কাল পুচ্ছপাখনা (নিচের খণ্ড উপরের চেয়ে বড়)।",
      keyFeatures: {
        en: [
          "Ray-like flattened body with pectoral fins detached from head",
          "Terminal mouth armed with sharp grasping cusps",
          "Hypocercal caudal fin with ventral lobe larger than dorsal lobe",
          "Five gill slits positioned in a lateral pectoral notch"
        ],
        bn: [
          "মাথা থেকে পৃথক প্রশস্ত ডানাযুক্ত চ্যাপ্টা শরীর",
          "তীক্ষ্ণ দাঁতযুক্ত অগ্রবর্তী মুখগহ্বর",
          "হাইপোসার্কাল পুচ্ছপাখনা যার নিচের লোবটি উপরের চেয়ে বড়",
          "বক্ষপাখনার খাঁজের মধ্যে অবস্থিত ৫ জোড়া ফুলকা ছিদ্র"
        ]
      }
    },
    habitat: {
      en: "Coastal and continental shelf sandy or muddy substrates, continental slopes from shallow surf zones down to 1,300 meters.",
      bn: "উপকূলীয় ও মহীসোপানের বালুকাময় বা কর্দমাক্ত তলদেশ, অগভীর উপকূল থেকে ১,৩০০ মিটার গভীর মহীঢাল পর্যন্ত।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Crytic ambush macropredators, camouflaging beneath sediment to strike upward with explosive jaw protrusion at passing demersal fishes and cephalopods.",
      bn: "ছদ্মবেশী শিকারী; বালির নিচে শরীর লুকিয়ে রেখে বিদ্যুৎ গতিতে মুখ হাঁ করে উপর দিয়ে যাওয়া মাছ ও স্কুইড শিকার করে।"
    },
    feeding: {
      en: "Piscivorous and benthic carnivores. Snapping up flatfishes, hakes, skates, crabs, and squids using rapid kinematic suction and piercing teeth.",
      bn: "মাংসাশী ও তলদেশীয় মাছভোজী। চ্যাপ্টা মাছ, হেক, কাঁকড়া ও স্কুইড শিকার করে।"
    },
    reproduction: {
      en: "Aplacental viviparous (ovoviviparous) with litters ranging from 7 to 25 pups after a 8–10 month gestation.",
      bn: "অমরাহীন জরায়ুজ প্রজনন; ৮-১০ মাসের গর্ভধারণের পর ৭ থেকে ২৫টি বাচ্চা প্রসব করে।"
    },
    distribution: {
      en: "Temperate, subtropical, and tropical coastal waters of the Atlantic, Pacific, and Indian Oceans. Extremely vulnerable to demersal bottom trawling.",
      bn: "আটলান্টিক, প্রশান্ত ও ভারত মহাসাগরের উপকূলীয় জলসীমায় বিস্তৃত। তলদেশীয় ট্রলিংয়ের কারণে বিশ্বব্যাপী মহাবিপন্ন।"
    },
    importantFamilies: [
      {
        name: "Squatinidae",
        commonEn: "Angel Sharks",
        commonBn: "এঞ্জেল হাঙ্গর গোত্র",
        diagnosticEn: "Single living family containing about 24 recognized species in genus Squatina, sharing all ordinal traits.",
        diagnosticBn: "একমাত্র জীবিত গোত্র; Squatina গণের প্রায় ২৪টি প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Single extant genus Squatina Duméril, 1806. Key binomials: Squatina squatina (Linnaeus, 1758), Squatina californica Ayres, 1859, and Squatina dumeril Lesueur, 1818.",
      bn: "একক জীবিত গণ Squatina Duméril, 1806। প্রধান নাম: Squatina squatina (Linnaeus, 1758), Squatina californica Ayres, 1859 এবং Squatina dumeril Lesueur, 1818।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Angelshark (Squatina squatina), Pacific Angelshark (Squatina californica), Sand Devil (Squatina dumeril), and Sawback Angelshark (Squatina aculeata).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: এঞ্জেলশার্ক (Squatina squatina), প্যাসিফিক এঞ্জেলশার্ক (Squatina californica), স্যান্ড ডেভিল (Squatina dumeril) এবং সবেক এঞ্জেলশার্ক (Squatina aculeata)।"
    },
    additionalInformation: {
      en: "Squatina is morphologically intermediate between typical sharks and rays, but phylogenetically nested firmly within Squalomorphii based on cranioskeletal morphology and nuclear genomics.",
      bn: "দৈহিক আকৃতিতে শাপলাপাতা মাছের মতো দেখালেও জিনতত্ত্ব ও করোটির গঠনে এরা স্কোয়ালোমরফ হাঙ্গরদের অংশ।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Lawson et al. (2020)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // -------------------------------------------------------------
  // BASAL TELEOSTEI & EEL ALLIES (5 Orders)
  // -------------------------------------------------------------
  {
    id: "order-hiodontiformes",
    taxonId: "taxon-hiodontiformes",
    rank: "order",
    scientificName: "Hiodontiformes",
    bengaliName: "হায়োডন্টিফর্মিস (মুনিআই ও গোল্ডআই)",
    englishName: "Mooneyes and Goldeyes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Taverne, 1979",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Hiodontiformes", nameBn: "হায়োডন্টিফর্মিস" }
    ],
    shortDescription: {
      en: "Primitive freshwater osteoglossomorph teleosts of North America with glittering silvery compressed bodies, prominent eyes with a golden reflective tapetum, and heavily toothed tongue bones.",
      bn: "উত্তর আমেরিকার আদিম মিঠাপানির অস্থি-জিহ্বাধারী মাছ; যাদের চকচকে রূপালী শরীর, সোনালী প্রতিফলকযুক্ত বড় চোখ এবং দাঁতযুক্ত জিহ্বাঅস্থি রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Laterally compressed silvery body with cycloid scales; large eyes equipped with a specialized reflective tapetum lucidum; well-developed dentition on parasphenoid and glossohyal tongue bone biting against parasphenoid roof; complete lateral line; dorsal fin set far back opposite long anal fin; no adipose fin; postcleithrum absent in pectoral girdle.",
      bn: "পার্শ্বীয়ভাবে চ্যাপ্টা রূপালী দেহ ও সাইক্লয়েড আঁইশ; চোখে আলো প্রতিফলক টেপেটাম লুসিডাম সমৃদ্ধ বড় চোখ; শক্ত জিহ্বাঅস্থি ও তালুর হাড়ে তীক্ষ্ণ দাঁত; সম্পূর্ণ পার্শ্বরেখা; দীর্ঘ পায়ুপাখনার বিপরীতে পেছনের দিকে অবস্থিত পৃষ্ঠপাখনা; অ্যাডিপোজ পাখনা অনুপস্থিত।",
      keyFeatures: {
        en: [
          "Prominent golden eyes reflecting light via specialized tapetal retinal layer",
          "Biting mechanism formed between toothed tongue and parasphenoid roof",
          "Complete lateral line extending to base of forked caudal fin",
          "Silvery compressed body with keel-like belly margin"
        ],
        bn: [
          "রেটিনায় আলো প্রতিফলক স্তরযুক্ত উজ্জ্বল সোনালী চোখ",
          "দাঁতযুক্ত জিহ্বা ও তালুর হাড়ের মধ্যে শিকার পিষ্ট করার অঙ্গ",
          "খাঁজযুক্ত পুচ্ছপাখনা পর্যন্ত বিস্তৃত সম্পূর্ণ পার্শ্বরেখা",
          "তলার দিকে নৌকার তলীর মতো সরু রূপালী শরীর"
        ]
      }
    },
    habitat: {
      en: "Turbid freshwater rivers, large sluggish lakes, riverine backwaters, and deep river channels in North America.",
      bn: "উত্তর আমেরিকার ঘোলা নদী, শান্ত হ্রদ, নদীর বাঁক এবং গভীর নদীর মূল প্রবাহ।",
      systems: ["freshwater"]
    },
    ecosystem: {
      en: "Surface and midwater crepuscular predators feeding at dawn and dusk, adapted for foraging in dark, sediment-laden waters.",
      bn: "ভোর ও সন্ধ্যার উপরিভাগের শিকারী মাছ; ঘোলা এবং পলিময় পানিতে দৃষ্টিসীমা বাড়িয়ে শিকার ধরতে অত্যন্ত পারদর্শী।"
    },
    feeding: {
      en: "Insectivorous and piscivorous carnivores, snapping up surface aquatic insects, terrestrial insects, small forage fishes, and crayfish.",
      bn: "কীটপতঙ্গ ও ছোট মাছভোজী; পানির উপরিভাগের জলজ ও স্থলজ পোকা, ছোট মাছ ও ক্রেফিশ শিকার করে।"
    },
    reproduction: {
      en: "Potamodromous river spawners migrating upstream in spring to release buoyant semi-demersal eggs in turbulent river currents.",
      bn: "বসন্তকালে ডিম ছাড়তে নদীর উজানে পরিযান করে এবং নদীর তীব্র স্রোতে ভাসমান ডিম ছড়ায়।"
    },
    distribution: {
      en: "Confined strictly to temperate North American river systems (Mississippi, Missouri, Hudson Bay, and Mackenzie basins). Strictly absent in Asia and Bangladesh.",
      bn: "উত্তর আমেরিকার মিসিসিপি, মিসৌরি ও হাডসন বে নদী অববাহিকায় সীমাবদ্ধ। বাংলাদেশ ও এশিয়ার জলসীমায় সম্পূর্ণ অনুপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Hiodontidae",
        commonEn: "Mooneyes",
        commonBn: "মুনিআই গোত্র",
        diagnosticEn: "Contains single extant genus Hiodon with two living species, sharing all ordinal diagnostic features.",
        diagnosticBn: "একমাত্র জীবিত গোত্র; দুটি জীবিত প্রজাতিসহ Hiodon গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Single extant genus Hiodon Lesueur, 1818. Key binomials: Hiodon alosoides (Rafinesque, 1819) and Hiodon tergisus Lesueur, 1818.",
      bn: "একক জীবিত গণ Hiodon Lesueur, 1818। প্রধান প্রজাতি: Hiodon alosoides (Rafinesque, 1819) এবং Hiodon tergisus Lesueur, 1818।"
    },
    examplesSummary: {
      en: "Two verified living representative species: Goldeye (Hiodon alosoides) and Mooneye (Hiodon tergisus).",
      bn: "দুটি যাচাইকৃত জীবিত প্রামাণ্য প্রজাতি: গোল্ডআই (Hiodon alosoides) এবং মুনিআই (Hiodon tergisus)।"
    },
    additionalInformation: {
      en: "Hiodontiformes is the sister group to all other living Osteoglossomorpha (bonytongues). Their lineage diverged over 145 million years ago in the Late Jurassic.",
      bn: "হায়োডন্টিফর্মিস অন্যান্য সকল জীবিত অস্থি-জিহ্বাধারীদের (Osteoglossomorpha) আদিমতম সহোদর গোষ্ঠী, যাদের উৎপত্তি ১৪৫ মিলিয়ন বছর আগে জুরাসিক যুগে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Hilton (2002)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-elopiformes",
    taxonId: "taxon-elopiformes",
    rank: "order",
    scientificName: "Elopiformes",
    bengaliName: "ইলোপিফর্মিস (টারপন ও লেডিফিশ বা কান মাগুর)",
    englishName: "Tarpons and Ladyfishes / Tenpounders",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Gosline, 1960",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Elopiformes", nameBn: "ইলোপিফর্মিস" }
    ],
    shortDescription: {
      en: "Primitive marine and estuarine predatory teleosts with silvery elongate bodies, transparent ribbon-like leptocephalus larvae, and a unique gular plate between lower jaw rami.",
      bn: "আদিম সামুদ্রিক ও মোহনাজ রূপালী শিকারী মাছ, যাদের স্বচ্ছ ফিতার মতো লেপ্টোসেফালাস লার্ভা এবং নিচের চোয়ালের নিচে বিশেষ গুলার প্লেট বিদ্যমান।"
    },
    diagnosticCharacteristics: {
      en: "Elongate, silvery, compressed body with large cycloid scales; mouth large and terminal to superior with a distinct bony gular plate between lower jaws; high branchiostegal ray count (23–35); single dorsal fin; adipose eyelid prominent; caudal fin deeply forked; modified swimbladder capable of atmospheric air breathing; transparent ribbon-shaped leptocephalus larva with forked tail.",
      bn: "লম্বাটে চ্যাপ্টা রূপালী শরীর ও বড় সাইক্লয়েড আঁইশ; নিচের চোয়ালের মাঝখানে স্পষ্ট অস্থিময় গুলার প্লেটযুক্ত বড় মুখ; প্রচুর শাখা-ফুলকা রশ্মি (২৩–৩৫টি); একক পৃষ্ঠপাখনা; স্পষ্ট অ্যাডিপোজ চোখের পাতা; গভীরভাবে খাঁজযুক্ত পুচ্ছপাখনা; পটকার সাহায্যে সরাসরি বাতাস থেকে শ্বাস নেওয়ার ক্ষমতা; পুচ্ছযুক্ত ফিতাসদৃশ লেপ্টোসেফালাস লার্ভা দশা বিদ্যমান।",
      keyFeatures: {
        en: [
          "Median bony gular plate situated between the lower jaw bones",
          "Vascularized physostomous swimbladder used for air-breathing in hypoxic waters",
          "Development via transparent ribbon-like leptocephalus larval metamorphosis",
          "Abundant branchiostegal rays (up to 35) and deeply forked caudal fin"
        ],
        bn: [
          "নিচের চোয়ালের মধ্যস্থলে অবস্থিত একক অস্থিময় গুলার প্লেট",
          "অক্সিজেনহীন পানিতে বাতাস থেকে শ্বাস নেওয়ার জন্য রক্তনালীযুক্ত পটকা",
          "স্বচ্ছ ফিতাসদৃশ লেপ্টোসেফালাস লার্ভা রূপান্তর দশা",
          "অসংখ্য ফুলকা রশ্মি (৩৫টি পর্যন্ত) ও গভীরভাবে খাঁজকাটা লেজ"
        ]
      }
    },
    habitat: {
      en: "Coastal marine waters, tropical estuaries, mangrove channels, tidal rivers, and hypersaline coastal lagoons. Readily penetrates freshwaters.",
      bn: "উপকূলীয় সাগর, ক্রান্তীয় মোহনা, সুন্দরবনের ম্যানগ্রোভ খাঁড়ি, জোয়ার-ভাটার নদী এবং মিঠাপানি।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Swift high-trophic predators in coastal lagoons and estuarine nursery corridors, leaping to capture baitfish and tolerating hypoxic backwaters.",
      bn: "উপকূল ও মোহনার দ্রুতগামী শিকারী মাছ; অক্সিজেনহীন পানিতে বাস করতে পারে এবং ছোট মাছ শিকার করে বাস্তুতন্ত্রের ভারসাম্য রাখে।"
    },
    feeding: {
      en: "Voracious visual carnivores, preying upon schooling clupeids, mullet fry, engraulid anchovies, and penaeid swimming shrimps.",
      bn: "মাংসাশী শিকারী; ঝাঁকে থাকা ছোট মাছ, ইলিশ-ফাঁসা পোনা, মালেট এবং চিংড়ি শিকার করে।"
    },
    reproduction: {
      en: "Pelagic spawning in offshore marine shelf waters. Floating eggs hatch into ribbon-like leptocephalus larvae that drift into coastal mangrove nurseries before metamorphic shrinking into juveniles.",
      bn: "গভীর সমুদ্রে ডিম পাড়ে। ডিম ফুটে লেপ্টোসেফালাস লার্ভা বের হয় যা স্রোতে ভেসে উপকূলীয় ম্যানগ্রোভ খাঁড়িতে আশ্রয় নেয় এবং রূপান্তরের মাধ্যমে পোনায় পরিণত হয়।"
    },
    distribution: {
      en: "Tropical and warm subtropical oceans globally. Megalops cyprinoides (Indo-Pacific Tarpon) occurs natively in coastal Bangladesh, the Sundarbans, and downstream rivers.",
      bn: "বিশ্বের ক্রান্তীয় মহাসাগরে বিস্তৃত। ইন্দো-প্যাসিফিক টারপন (Megalops cyprinoides) বাংলাদেশের সুন্দরবন, উপকূল ও মেঘনা নদীর মোহনায় স্বাভাবিকভাবে বাস করে।"
    },
    importantFamilies: [
      {
        name: "Megalopidae",
        commonEn: "Tarpons",
        commonBn: "টারপন গোত্র",
        diagnosticEn: "Last ray of dorsal fin elongated into a long filament, large eyes, mouth superior, thick scales; contains genus Megalops.",
        diagnosticBn: "পৃষ্ঠপাখনার শেষ রশ্মি সুতোর মতো লম্বা, বড় চোখ, ঊর্ধ্বমুখী মুখ, মোটা আঁইশ; Megalops গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Elopidae",
        commonEn: "Tenpounders / Ladyfishes",
        commonBn: "লেডিফিশ বা টেনপাউন্ডার গোত্র",
        diagnosticEn: "Slender elongate body, terminal mouth, last dorsal ray not elongated, very small scales; contains genus Elops.",
        diagnosticBn: "সরু লম্বা দেহ, অগ্রবর্তী মুখ, পৃষ্ঠপাখনার পেছনের রশ্মি লম্বা নয়, ক্ষুদ্র আঁইশ; Elops গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Megalops Lacepède, 1803 and Elops Linnaeus, 1766. Key binomials: Megalops cyprinoides (Broussonet, 1782), Megalops atlanticus Valenciennes, 1847, and Elops saurus Linnaeus, 1766.",
      bn: "গণ: Megalops Lacepède, 1803 এবং Elops Linnaeus, 1766। প্রধান নাম: Megalops cyprinoides (Broussonet, 1782), Megalops atlanticus Valenciennes, 1847 এবং Elops saurus Linnaeus, 1766।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Indo-Pacific Tarpon (Megalops cyprinoides - native to Bangladesh), Atlantic Tarpon (Megalops atlanticus), Ladyfish (Elops saurus), and Pacific Tenpounder (Elops affinis).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ইন্দো-প্যাসিফিক টারপন (Megalops cyprinoides - বাংলাদেশে প্রাপ্ত), আটলান্টিক টারপন (Megalops atlanticus), লেডিফিশ (Elops saurus) এবং প্যাসিফিক টেনপাউন্ডার (Elops affinis)।"
    },
    additionalInformation: {
      en: "Elopiforms retain the ancestral teleost condition of a median gular bone and leptocephalous larval development, placing them as the most basal living lineage of the Elopomorpha.",
      bn: "ইলোপিফর্মিস মাছের গুলার প্লেট এবং লেপ্টোসেফালাস লার্ভা আদিম টেলিয়স্টদের প্রাচীনতম বৈশিষ্ট্য বহন করে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Adams et al. (2014)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-albuliformes",
    taxonId: "taxon-albuliformes",
    rank: "order",
    scientificName: "Albuliformes",
    bengaliName: "আলবুলিফর্মিস (বোনফিশ বা অস্থিময় সামুদ্রিক মাছ)",
    englishName: "Bonefishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Greenwood et al., 1966",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Albuliformes", nameBn: "আলবুলিফর্মিস" }
    ],
    shortDescription: {
      en: "Silvery coastal marine teleosts with an inferior pig-like snout, heavy molariform crushing toothplates on the roof of the mouth, and transparent leptocephalus larvae.",
      bn: "রূপালী উপকূলীয় সামুদ্রিক মাছ, যাদের নিচের দিকে বাঁকানো থ্যাবড়া মুখ, তালুতে শক্ত পেষণ দাঁতের প্লেট এবং স্বচ্ছ ফিতাসদৃশ লেপ্টোসেফালাস লার্ভা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Fusiform silvery body; snout conical, pig-like, and projecting prominently beyond the small inferior mouth; toothplates on parasphenoid, mesopterygoid, and basibranchials armed with coarse molariform crushing dentition; no gular plate; transparent leptocephalus larva having a forked caudal fin; single short dorsal fin.",
      bn: "রূপালী মাকু আকৃতির দেহ; থ্যাবড়া ও সূচালো শূকরের মতো নাসিকা যা নিচের মুখের চেয়ে এগিয়ে থাকে; শক্ত খোলস ভাঙার জন্য তালুর হাড়ে চ্যাপ্টা পেষণ দাঁতের প্লেট; গুলার প্লেট অনুপস্থিত; লেপ্টোসেফালাস লার্ভা দশা বিদ্যমান; একক ছোট পৃষ্ঠপাখনা।",
      keyFeatures: {
        en: [
          "Prominently projecting conical snout overhanging a small inferior mouth",
          "Molariform tooth plates adapted for crushing hard-shelled molluscs and crabs",
          "Leptocephalus larva that dramatically shrinks in length during metamorphosis",
          "Brilliant mirror-like silver guanine lateral scales"
        ],
        bn: [
          "মুখের উপর ঝুঁকে থাকা শঙ্কু আকৃতির স্পষ্ট থ্যাবড়া নাসিকা",
          "শামুক ও কাঁকড়ার শক্ত খোলস ভাঙার চ্যাপ্টা পেষণ দাঁতের প্লেট",
          "লেপ্টোসেফালাস লার্ভা যা রূপান্তরের সময় আকারে ছোট হয়ে পোনায় রূপ নেয়",
          "আয়নার মতো চকচকে রূপালী আঁইশ"
        ]
      }
    },
    habitat: {
      en: "Tropical shallow coastal waters, intertidal sand and mud flats, seagrass beds, and mangrove channels.",
      bn: "ক্রান্তীয় অগভীর উপকূলীয় সমুদ্র, ভাটার সময় জেগে ওঠা বালুচর, সামুদ্রিক ঘাসের বন ও ম্যানগ্রোভ খাঁড়ি।",
      systems: ["marine", "brackish"]
    },
    ecosystem: {
      en: "Specialized benthic bio-excavators; their feeding jet rooting in sand resuspends sediments and cycles nutrients across shallow flats.",
      bn: "বালুচরের গুরুত্বপূর্ণ বাস্তুতাত্ত্বিক প্রাণী; মুখ দিয়ে বালি খুঁড়ে শামুক-ঝিনুক খেয়ে তলদেশের পুষ্টি উপাদান পুনর্ব্যবহারে সাহায্য করে।"
    },
    feeding: {
      en: "Benthic durophagous carnivores, rooting snout into sediment to excavate clams, bivalves, crabs, and polychaetes, crushed by molariform pharyngeal toothplates.",
      bn: "শক্ত খোলসভোজী মাংসাশী; বালিতে মুখ গুঁজে শামুক, ঝিনুক ও কাঁকড়া তুলে আনে এবং তালুর দাঁত দিয়ে পিষে খায়।"
    },
    reproduction: {
      en: "Offshore pelagic spawning. Ribbon-like leptocephalus larvae drift into shallow nursery flats, shrinking by ~30% in length during metamorphosis.",
      bn: "উপকূল থেকে দূরে খোলা সাগরে ডিম পাড়ে। ফিতাসদৃশ লার্ভা ভেসে উপকূলে আসে এবং রূপান্তরের সময় প্রায় ৩০% সংকুচিত হয়ে মাছের পোনায় পরিণত হয়।"
    },
    distribution: {
      en: "Circumtropical in warm shelf seas. Albula glossodonta and Albula oligolepis occur in northern Indian Ocean and Bay of Bengal shelf waters.",
      bn: "বিশ্বের উষ্ণ ক্রান্তীয় সমুদ্রে বিস্তৃত। ভারত মহাসাগর ও বঙ্গোপসাগরের মহীসোপানে বোনফিশের প্রজাতি পাওয়া যায়।"
    },
    importantFamilies: [
      {
        name: "Albulidae",
        commonEn: "Bonefishes",
        commonBn: "বোনফিশ গোত্র",
        diagnosticEn: "Single family containing genus Albula with approximately 11 cryptic species, sharing all ordinal characters.",
        diagnosticBn: "একমাত্র জীবিত গোত্র; Albula গণের প্রায় ১১টি প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Single extant genus Albula Scopoli, 1777. Key binomials: Albula vulpes (Linnaeus, 1758), Albula glossodonta (Forsskål, 1775), and Albula oligolepis Hidaka, Iwatsuki & Randall, 2008.",
      bn: "একক জীবিত গণ Albula Scopoli, 1777। প্রধান নাম: Albula vulpes (Linnaeus, 1758), Albula glossodonta (Forsskål, 1775) এবং Albula oligolepis Hidaka, Iwatsuki & Randall, 2008।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Common Bonefish (Albula vulpes), Roundjaw Bonefish (Albula glossodonta), Smallscale Bonefish (Albula oligolepis), and Pacific Bonefish (Albula esuncula).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: সাধারণ বোনফিশ (Albula vulpes), রাউন্ডজ বোনফিশ (Albula glossodonta), স্মলস্কেল বোনফিশ (Albula oligolepis) এবং প্যাসিফিক বোনফিশ (Albula esuncula)।"
    },
    additionalInformation: {
      en: "Bonefishes are world-renowned gamefishes supporting multimillion-dollar recreational sportfisheries due to their extraordinary burst swimming speeds over shallow sand flats.",
      bn: "অগভীর বালুচরে এদের ক্ষিপ্রগতির সাঁতারের কারণে বিশ্বজুড়ে পর্যটন ও স্পোর্ট ফিশিংয়ে বোনফিশ অত্যন্ত বিখ্যাত।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Pickett et al. (2020)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-notacanthiformes",
    taxonId: "taxon-notacanthiformes",
    rank: "order",
    scientificName: "Notacanthiformes",
    bengaliName: "নোটাাক্যান্থিফর্মিস (গভীর সমুদ্রের কাঁটাময় বান ও হ্যালোসর)",
    englishName: "Deep-sea Spiny Eels and Halosaurs",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Berg, 1947",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Notacanthiformes", nameBn: "নোটাাক্যান্থিফর্মিস" }
    ],
    shortDescription: {
      en: "Slender, eel-like bathyal deep-sea teleosts with a tapering tail lacking a caudal fin, isolated dorsal spines, and giant pelagic leptocephalus larvae.",
      bn: "গভীর সমুদ্রের সর্পিল মাছ, যাদের লেজ সরু হয়ে পুচ্ছপাখনা ছাড়াই শেষ হয়, পিঠে পৃথক ধারালো কাঁটা এবং বিশালাকার লেপ্টোসেফালাস লার্ভা দশা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Elongate, eel-like body tapering to a fine point with caudal fin absent or reduced to a tiny vestige; very long anal fin extending along posterior half of body; dorsal fin consisting either of 6–40 disconnected short sharp spines (Notacanthidae) or short soft rays (Halosauridae); subterminal mouth beneath a sensitive projecting rostrum; leptocephalus larvae exceptionally large (up to 2 meters long in Tiluropsis/Leptocephalus giganteus).",
      bn: "লম্বা সর্পিল দেহ যা সরু হয়ে সুতোর মতো শেষ হয়, পুচ্ছপাখনা অনুপস্থিত বা নামমাত্র; দেহের পিছনের অর্ধেক জুড়ে অত্যন্ত দীর্ঘ পায়ুপাখনা; পিঠের উপর বিচ্ছিন্ন ৬–৪০টি ধারালো কাঁটা বা নরম পাখনা; সংবেদনশীল মুখের নিচে অবস্থিত মুখগহ্বর; লার্ভা অত্যন্ত বিশালাকার (২ মিটার পর্যন্ত লম্বা লেপ্টোসেফালাস)।",
      keyFeatures: {
        en: [
          "Tapering eel-like body ending without a true caudal fin",
          "Dorsal fin modified into a series of isolated sharp spines or short soft fin",
          "Extremely long anal fin confluent with the caudal tip",
          "Production of gigantic pelagic leptocephalus larvae up to nearly 2 m long"
        ],
        bn: [
          "প্রকৃত পুচ্ছপাখনা ছাড়া সরু হয়ে শেষ হওয়া সর্পিল দেহ",
          "পৃষ্ঠপাখনা পৃথক ধারালো কাঁটার সারিতে রূপান্তরিত",
          "লেজের শেষ প্রান্ত পর্যন্ত বিস্তৃত অত্যন্ত লম্বা পায়ুপাখনা",
          "বিশাল আকৃতির (প্রায় ২ মিটার পর্যন্ত) ভাসমান লেপ্টোসেফালাস লার্ভা"
        ]
      }
    },
    habitat: {
      en: "Deep-sea benthic environments, continental slopes, bathyal muds, and abyssal plains (200–5,000 meters depth).",
      bn: "গভীর সমুদ্রের তলদেশ, মহীঢাল, কর্দমাক্ত গভীর তল এবং অতল স্পর্শী সমভূমি (২০০–৫,০০০ মিটার গভীরতা)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Benthic scavengers and micropredators rooting in bathyal ooze, consuming sedentary invertebrates and recycling deep-sea organic falls.",
      bn: "গভীর সমুদ্রের তলদেশের মেথর ও শিকারী; তলদেশের নরম কাদা ঘেঁটে অমেরুদণ্ডী প্রাণী খেয়ে পুষ্টি পুনর্ব্যবহার করে।"
    },
    feeding: {
      en: "Invertivorous carnivores, consuming deep-sea polychaetes, sea anemones, bryozoans, brittle stars, amphipods, and bivalves.",
      bn: "তলদেশীয় অমেরুদণ্ডীভোজী; গভীর সমুদ্রের পলিকীট, অ্যানিমোন, তারামাছের আত্মীয় এবং ক্ষুদ্র ক্রাস্টাশিয়ান খায়।"
    },
    reproduction: {
      en: "Oviparous. Epipelagic leptocephalus larvae spend extensive time drifting in open oceanic currents before settling onto the abyssal seafloor.",
      bn: "ডিম্বপ্রসবকারী। দানবীয় লার্ভা উন্মুক্ত মহাসাগরীয় স্রোতে দীর্ঘ সময় ভেসে থেকে রূপান্তরের পর অতল সাগরের তলদেশে নেমে আসে।"
    },
    distribution: {
      en: "Circumglobal in deep temperate, subtropical, and tropical ocean basins. Inhabits deep bathyal channels of the Indian Ocean.",
      bn: "বিশ্বের সকল মহাসাগরের গভীর অঞ্চলে বিস্তৃত। ভারত মহাসাগরের গভীর তলদেশে এদের নিয়মিত দেখা মেলে।"
    },
    importantFamilies: [
      {
        name: "Notacanthidae",
        commonEn: "Deep-sea Spiny Eels",
        commonBn: "কাঁটাময় বান গোত্র",
        diagnosticEn: "Dorsal fin represented by 6-40 isolated spines, snout projecting over mouth, pectoral fins high on body.",
        diagnosticBn: "পৃষ্ঠপাখনার স্থানে ৬-৪০টি পৃথক কাঁটা, মুখের উপর বাড়ানো নাসিকা; Notacanthus গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Halosauridae",
        commonEn: "Halosaurs",
        commonBn: "হ্যালোসর গোত্র",
        diagnosticEn: "Single short dorsal fin with soft rays, large cycloid scales, snout flat and duckbill-like.",
        diagnosticBn: "নরম রশ্মিযুক্ত একক ছোট পৃষ্ঠপাখনা, হাঁসের ঠোঁটের মতো চ্যাপ্টা নাসিকা; Halosaurus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Notacanthus, Polyacanthonotus, Halosaurus, and Aldrovandia. Key binomials: Notacanthus chemnitzii Bloch, 1788 and Halosaurus ovenii Johnson, 1864.",
      bn: "গণ: Notacanthus, Polyacanthonotus, Halosaurus এবং Aldrovandia। প্রধান নাম: Notacanthus chemnitzii Bloch, 1788 এবং Halosaurus ovenii Johnson, 1864।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Snubnosed Spiny Eel (Notacanthus chemnitzii), Shortspine Tapirfish (Notacanthus bonaparte), Abyssal Halosaur (Halosauropsis macrochir), and Common Halosaur (Halosaurus ovenii).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ভোঁতামুখ স্পাইনি ইল (Notacanthus chemnitzii), শর্টস্পাইন টেপিরফিশ (Notacanthus bonaparte), গভীর সাগরের হ্যালোসর (Halosauropsis macrochir) এবং সাধারণ হ্যালোসর (Halosaurus ovenii)।"
    },
    additionalInformation: {
      en: "The mysterious 'Leptocephalus giganteus' specimens collected in the mid-20th century (over 1.8 m long) were once thought to be giant sea serpents, but represent the larvae of notacanthiform fishes.",
      bn: "বিংশ শতকের মাঝামাঝি সংগৃহীত প্রায় ১.৮ মিটার লম্বা রহস্যময় লেপ্টোসেফালাস লার্ভা মূলত নোটাাক্যান্থিফর্মিস মাছের লার্ভা ছিল।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); McDowell (1973)",
    verificationStatus: "published",
    publishedStatus: true
  },
  {
    id: "order-alepocephaliformes",
    taxonId: "taxon-alepocephaliformes",
    rank: "order",
    scientificName: "Alepocephaliformes",
    bengaliName: "আলেপোসেফালিফর্মিস (মসৃণমাথা গভীর সমুদ্রের মাছ ও টিউবশোল্ডার)",
    englishName: "Slickheads and Tubeshoulders",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Marshall, 1962",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Alepocephaliformes", nameBn: "আলেপোসেফালিফর্মিস" }
    ],
    shortDescription: {
      en: "Deep-sea bathyal and abyssal teleosts with scaleless heads, posterior dorsal fins, dark pigmentation, and unique bioluminescent spark-discharging shoulder organs in tubeshoulders.",
      bn: "গভীর সমুদ্রের অন্ধকার তলদেশের মাছ; যাদের মাথা আঁইশহীন, পৃষ্ঠপাখনা দেহের পেছনের দিকে অবস্থিত এবং কাঁধের বিশেষ অঙ্গ দিয়ে আত্মরক্ষামূলক উজ্জ্বল সবুজ আলোর স্ফুলিঙ্গ ছড়ায়।"
    },
    diagnosticCharacteristics: {
      en: "Head completely scaleless; cranium with extensive cartilage; adipose fin absent; dorsal fin situated far back opposite anal fin; teeth small and uniserial; tubeshoulders (Platytroctidae) possess a specialized subcutaneous shoulder organ opening via a tubular papilla above the pectoral fin that discharges a luminous cloud of blue-green coelenterazine sparks when threatened.",
      bn: "মাথা সম্পূর্ণ আঁইশহীন; মাথার খুলিতে প্রচুর তরুণাস্থি; অ্যাডিপোজ পাখনা অনুপস্থিত; পৃষ্ঠপাখনা পায়ুপাখনার বিপরীতে পেছনের দিকে অবস্থিত; ক্ষুদ্র একসারি দাঁত; প্ল্যাটোট্রকটিডি গোত্রের কাঁধের নিচে বিশেষ টিউব থাকে যা থেকে আক্রান্ত হলে আত্মরক্ষার্থে উজ্জ্বল নীল-সবুজ আলোর মেঘ নির্গত হয়।",
      keyFeatures: {
        en: [
          "Completely scaleless head with soft cartilaginous cranial roof",
          "Dorsal and anal fins positioned far back near the caudal peduncle",
          "Subcutaneous shoulder organ discharging luminous sparks in Platytroctidae",
          "Absence of adipose fin and swimbladder in adults"
        ],
        bn: [
          "তরুণাস্থিময় নরম খুলিযুক্ত সম্পূর্ণ আঁইশহীন মাথা",
          "পৃষ্ঠ ও পায়ুপাখনা দেহের পেছনের দিকে পুচ্ছপাখনার নিকটে অবস্থিত",
          "আক্রান্ত হলে উজ্জ্বল আলোর স্ফুলিঙ্গ নির্গমনকারী বিশেষ কাঁধের অঙ্গ",
          "অ্যাডিপোজ পাখনা এবং পটকার সম্পূর্ণ অনুপস্থিতি"
        ]
      }
    },
    habitat: {
      en: "Mesopelagic, bathypelagic, and deep benthic continental slopes and abyssal trenches (800–5,000 meters depth).",
      bn: "গভীর সমুদ্রের মেসোপেলাজিক, বাথিপেলাজিক এবং অতলস্পর্শী গিরিখাত (৮০০–৫,০০০ মিটার গভীরতা)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Crucial intermediate trophic links in bathyal abyssal food webs, consuming gelatinous zooplankton and preying on pelagic amphipods.",
      bn: "গভীর সমুদ্রের খাদ্যশৃঙ্খলের গুরুত্বপূর্ণ অংশ; জেলিফিশ, স্যাল্প এবং ভাসমান অমেরুদণ্ডী প্রাণী খেয়ে বেঁচে থাকে।"
    },
    feeding: {
      en: "Carnivorous planktivores, feeding on deep-water salps, siphonophores, ctenophores, chaetognaths, and bathypelagic copepods.",
      bn: "প্ল্যাঙ্কটন ও জেলিভোজী মাংসাশী; গভীর পানির স্যাল্প, সাইফোনোফোর, কম্ব-জেলি ও ক্ষুদ্র ক্রাস্টাশিয়ান খায়।"
    },
    reproduction: {
      en: "Oviparous. Large eggs (up to 4–5 mm diameter) equipped with oil globules, sinking to bathyal depths with direct development bypassing surface larval phases.",
      bn: "ডিম্বপ্রসবকারী। ৪-৫ মিমি আকারের বড় তেলযুক্ত ডিম পাড়ে যা গভীর সমুদ্রের তলদেশে থাকে এবং উপরিভাগে না এসেই সরাসরি পোনায় রূপ নেয়।"
    },
    distribution: {
      en: "Worldwide in all major oceanic basins from the Arctic to Antarctic deep waters. Inhabits deep Indian Ocean bathyal canyons.",
      bn: "সুমেরু থেকে কুমেরু পর্যন্ত বিশ্বের সকল মহাসাগরের গভীর তলদেশে বিস্তৃত। ভারত মহাসাগরের গভীর খাদে এদের উপস্থিতি রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Alepocephalidae",
        commonEn: "Slickheads",
        commonBn: "স্লিকহেড গোত্র",
        diagnosticEn: "Smooth naked head, body covered in deciduous cycloid scales or naked, no shoulder organ.",
        diagnosticBn: "মসৃণ আঁইশহীন মাথা, সহজে খসে পড়া সাইক্লয়েড আঁইশ, কাঁধের আলোকিত অঙ্গ নেই; Alepocephalus গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Platytroctidae",
        commonEn: "Tubeshoulders",
        commonBn: "টিউবশোল্ডার গোত্র",
        diagnosticEn: "Shoulder organ present with tubular pore discharging luminescent fluid, photophores often present.",
        diagnosticBn: "কাঁধে উজ্জ্বল আলো নিঃসরণকারী নালীযুক্ত বিশেষ অঙ্গ বিদ্যমান; Platytroctes গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Alepocephalus, Rouleina, Xenodermichthys, Platytroctes, and Searsia. Key binomials: Alepocephalus bairdii Goode & Bean, 1879 and Platytroctes apus Günther, 1878.",
      bn: "গণ: Alepocephalus, Rouleina, Xenodermichthys, Platytroctes এবং Searsia। প্রধান নাম: Alepocephalus bairdii Goode & Bean, 1879 এবং Platytroctes apus Günther, 1878।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Baird's Slickhead (Alepocephalus bairdii), Softskin Smooth-head (Rouleina attrita), Shinylight Tubeshoulder (Platytroctes apus), and Blunt-snouted Slickhead (Xenodermichthys copei).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: বেয়ার্ডস স্লিকহেড (Alepocephalus bairdii), সফটস্কিন স্মুথ-হেড (Rouleina attrita), শাইনিলাইট টিউবশোল্ডার (Platytroctes apus) এবং ভোঁতামুখ স্লিকহেড (Xenodermichthys copei)।"
    },
    additionalInformation: {
      en: "Alepocephaliformes was historically placed within Argentinoidei or Osmeriformes, but modern phylogenomic analyses recognize it as an early-diverging otocephalan teleost lineage.",
      bn: "অতীতে এদের স্মেল্ট মাছের সাথে রাখা হলেও আধুনিক ফাইলোজেনোমিক্স এদের পৃথক টেলিঅস্ট বংশধারা হিসেবে চিহ্নিত করেছে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Poulsen et al. (2009)",
    verificationStatus: "published",
    publishedStatus: true
  }
];
