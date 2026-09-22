// Batch 2: Orders 11-20
// Gymnotiformes, Lepidogalaxiiformes, Argentiniformes, Galaxiiformes, Osmeriformes,
// Stomiiformes, Ateleopodiformes, Myctophiformes, Lampriformes, Polymixiiformes

module.exports = [
  // 11. Gymnotiformes
  {
    id: "order-gymnotiformes",
    taxonId: "taxon-gymnotiformes",
    rank: "order",
    scientificName: "Gymnotiformes",
    bengaliName: "জিমনোটিফর্মিস (বৈদ্যুতিক ইল ও নাইফফিশ)",
    englishName: "Neotropical Knifefishes and Electric Eels",
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
      { rank: "order", name: "Gymnotiformes", nameBn: "জিমনোটিফর্মিস" }
    ],
    shortDescription: {
      en: "Specialized South American freshwater teleosts with extremely elongated bodies, continuous undulating anal fins, forward-displaced anus, and specialized myogenic electric organs for navigation, communication, or prey capture.",
      bn: "দক্ষিণ আমেরিকার বিশেষায়িত মিঠাপানির মাছ; যাদের দীর্ঘ দেহ, ঢেউখেলানো দীর্ঘ পায়ুপাখনা, গলার কাছে অবস্থিত মলদ্বার এবং পথচলা ও শিকারের জন্য বৈদ্যুতিক অঙ্গ রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body eel-like or knife-shaped, laterally compressed; dorsal and pelvic fins absent; caudal fin reduced or absent; extremely long anal fin extending from near throat to tail tip providing bidirectional rippling swimming; anus situated forward beneath head or pectoral fins; electric organs derived from modified muscle tissue (or nerve axons in Apteronotidae) generating continuous electric organ discharges (EOD); electroreceptors embedded across skin.",
      bn: "সর্পিল বা ছুরির মতো চ্যাপ্টা দেহ; পৃষ্ঠ ও শ্রোণীপাখনা সম্পূর্ণ অনুপস্থিত; পুচ্ছপাখনা নামমাত্র বা অনুপস্থিত; গলা থেকে লেজ পর্যন্ত বিস্তৃত অত্যন্ত লম্বা পায়ুপাখনা যা ঢেউ খেলিয়ে সামনে ও পেছনে উভয় দিকে সাঁতার কাটতে পারে; মলদ্বার মাথার নিচে গলার কাছে অবস্থিত; রূপান্তরিত পেশী থেকে তৈরি বৈদ্যুতিক অঙ্গ যা দিয়ে বিদ্যুৎ উৎপন্ন করে পথ চলে বা শিকার অবশ করে; ত্বকে তড়িৎ-সংবেদী গ্রাহক বিদ্যমান।",
      keyFeatures: {
        en: [
          "Specialized electric organs producing continuous weak or powerful electrical discharges (up to 860V in Electrophorus)",
          "Extremely elongated anal fin functioning as the sole propulsive engine",
          "Complete absence of dorsal and pelvic fins",
          "Anterior displacement of anus to beneath the throat"
        ],
        bn: [
          "তড়িৎ নিঃসরণকারী বিশেষ অঙ্গ (Electrophorus-এ ৮৬০ ভোল্ট পর্যন্ত শক দিতে পারে)",
          "একমাত্র সাঁতার কাটার সহায়ক হিসেবে দেহের তলদেশ জুড়ে বিস্তৃত লম্বা পায়ুপাখনা",
          "পৃষ্ঠপাখনা ও শ্রোণীপাখনার সম্পূর্ণ অনুপস্থিতি",
          "মলদ্বার দেহের সামনে গলার নিচে অবস্থিত"
        ]
      }
    },
    habitat: {
      en: "Neotropical freshwater rivers, Amazonian floodplains, blackwater tributaries, subterranean caves, and deep river channels.",
      bn: "আমাজন ও ওরিনোকো অববাহিকার মিঠাপানির নদী, প্লাবনভূমি, ব্ল্যাকওয়াটার নদী, ভূগর্ভস্থ গুহা এবং গভীর নদীর তলদেশ।",
      systems: ["freshwater"]
    },
    ecosystem: {
      en: "Nocturnal apex predators and benthic foragers in turbid tropical river systems, occupying diverse trophic niches through specialized electro-navigation.",
      bn: "ঘোলা গ্রীষ্মমন্ডলীয় নদীর প্রধান নিশাচর শিকারী; বিদ্যুৎ তরঙ্গ ব্যবহার করে রাতের অন্ধকারে পথ চলে ও খাদ্যজালকের ভারসাম্য বজায় রাখে।"
    },
    feeding: {
      en: "Carnivorous predators, consuming aquatic insects, worms, decapod crustaceans, and smaller fishes. Electric eels stun prey with high-voltage volleys.",
      bn: "মাংসাশী শিকারী; জলজ পোকা, কৃমি, কাঁকড়া ও ছোট মাছ খায়। ইলেকট্রিক ইল তীব্র বৈদ্যুতিক শক দিয়ে শিকার অবশ করে গিলে ফেলে।"
    },
    reproduction: {
      en: "Oviparous. Spawning triggered by seasonal rainfall and flood pulses. Males construct foam nests or defend substrate crevices using electrical courtship displays.",
      bn: "ডিম্বপ্রসবকারী। বর্ষার নতুন পানিতে প্রজনন করে। পুরুষ মাছ বিশেষ বৈদ্যুতিক সংকেত পাঠিয়ে সঙ্গীকে আকর্ষণ করে এবং ফেনার বাসা পাহারা দেয়।"
    },
    distribution: {
      en: "Strictly confined to Neotropical freshwater basins of South and Central America. Completely absent in Asia and Bangladesh.",
      bn: "দক্ষিণ ও মধ্য আমেরিকার নদী অববাহিকায় সীমাবদ্ধ। বাংলাদেশ ও এশিয়ার প্রাকৃতিক জলসীমায় সম্পূর্ণ অনুপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Gymnotidae",
        commonEn: "Naked-back Knifefishes & Electric Eels",
        commonBn: "ইলেকট্রিক ইল ও নাইফফিশ গোত্র",
        diagnosticEn: "No caudal fin, snout rounded, includes Electrophorus with massive electric organs producing up to 860 volts.",
        diagnosticBn: "পুচ্ছপাখনা নেই, ভোঁতা মুখ, তীব্র শক উৎপাদনকারী Electrophorus গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Apteronotidae",
        commonEn: "Ghost Knifefishes",
        commonBn: "ঘোস্ট নাইফফিশ গোত্র",
        diagnosticEn: "Small caudal fin present, dorsal fleshy filament along back, neurogenic electric organ.",
        diagnosticBn: "ক্ষুদ্র পুচ্ছপাখনা উপস্থিত, পিঠের উপর নরম সুতোর মতো গঠন; Apteronotus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Electrophorus, Gymnotus, Apteronotus, and Eigenmannia. Key binomials: Electrophorus electricus (Linnaeus, 1766), Electrophorus voltai de Santana et al., 2019, and Apteronotus albifrons (Linnaeus, 1766).",
      bn: "গণ: Electrophorus, Gymnotus, Apteronotus এবং Eigenmannia। প্রধান নাম: Electrophorus electricus (Linnaeus, 1766), Electrophorus voltai de Santana et al., 2019 এবং Apteronotus albifrons (Linnaeus, 1766)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Electric Eel (Electrophorus electricus), Black Ghost Knifefish (Apteronotus albifrons), Banded Knifefish (Gymnotus carapo), and Glass Knifefish (Eigenmannia virescens).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ইলেকট্রিক ইল (Electrophorus electricus), ব্ল্যাক ঘোস্ট নাইফফিশ (Apteronotus albifrons), ব্যান্ডেড নাইফফিশ (Gymnotus carapo) এবং গ্লাস নাইফফিশ (Eigenmannia virescens)।"
    },
    additionalInformation: {
      en: "Electrophorus voltai produces electrical discharges up to 860 volts, the highest voltage recorded in any bioelectrogenic animal. Gymnotiformes forms the Neotropical sister clade to Siluriformes (catfishes).",
      bn: "ইলেকট্রিক ইল প্রাণিজগতের মধ্যে সর্বোচ্চ ৮৬০ ভোল্ট পর্যন্ত বিদ্যুৎ উৎপাদন করতে পারে। বিবর্তনিকভাবে এরা ক্যাটফিশের ঘনিষ্ঠ আত্মীয়।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); de Santana et al. (2019)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 12. Lepidogalaxiiformes
  {
    id: "order-lepidogalaxiiformes",
    taxonId: "taxon-lepidogalaxiiformes",
    rank: "order",
    scientificName: "Lepidogalaxiiformes",
    bengaliName: "লেপিডোগ্যালাক্সিফর্মিস (সালামান্ডারফিশ)",
    englishName: "Salamanderfish",
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
      { rank: "order", name: "Lepidogalaxiiformes", nameBn: "লেপিডোগ্যালাক্সিফর্মিস" }
    ],
    shortDescription: {
      en: "Enigmatic, tiny freshwater teleost of southwestern Australia capable of bending its neck, burrowing into moist sand to aestivate through summer droughts, and respiring cutaneously.",
      bn: "দক্ষিণ-পশ্চিম অস্ট্রেলিয়ার ক্ষুদ্রাকার অদ্ভুত মিঠাপানির মাছ; যা অন্যান্য মাছের মতো নয় বরং ঘাড় বাঁকাতে পারে এবং শুষ্ক মৌসুমে বালির নিচে সুপ্তাবস্থায় বেঁচে থাকে।"
    },
    diagnosticCharacteristics: {
      en: "Body small (up to 7 cm), slender, and cylindrical; unique modified cervical vertebrae enabling head to bend downwards and sideways independently of body; eyes lack a spectacle and can move independently; skin thin and capable of cutaneous respiration; dorsal fin positioned far back over anal fin; no adipose fin; males develop a specialized modified anal fin surrounded by glandular scales used in copulation; capable of surviving complete drying of pools by aestivating in moist peat.",
      bn: "ক্ষুদ্র (৭ সেমি পর্যন্ত) নলাকার দেহ; শরীরের সাথে সংযুক্ত না হয়ে স্বাধীনভাবে মাথা নিচু ও ডানে-বায়ে ঘোরানোর মতো বিশেষ ঘাড়ের কশেরুকা; চোখ স্বাধীনভাবে নড়াচড়া করতে পারে; ত্বকের মাধ্যমে শ্বাস নিতে সক্ষম; পৃষ্ঠপাখনা পেছনের দিকে অবস্থিত; অ্যাডিপোজ পাখনা নেই; গ্রীষ্মকালে জলাশয় শুকিয়ে গেলে ভেজা বালির নিচে কাদার গর্তে সুপ্তাবস্থায় (aestivation) মাসকে মাস বেঁচে থাকে।",
      keyFeatures: {
        en: [
          "True flexible neck formed by separated cervical vertebrae enabling head rotation",
          "Summer aestivation underground in moist peat when ephemeral pools desiccate",
          "Cutaneous gas exchange allowing survival in damp terrestrial burrows",
          "Modified anal fin and glandular sheath in reproductive males"
        ],
        bn: [
          "অন্য মাছের অনুপস্থিতিতে মাথা স্বাধীনভাবে ঘোরানোর মতো সত্যিকারের নমনীয় ঘাড়",
          "গ্রীষ্মে নদী শুকিয়ে গেলে ভেজা মাটিতে সুপ্তাবস্থায় বেঁচে থাকার ক্ষমতা",
          "ত্বকের সাহায্যে বাতাস থেকে অক্সিজেন গ্রহণের ক্ষমতা",
          "প্রজননক্ষম পুরুষ মাছে রূপান্তরিত বিশেষ পায়ুপাখনা"
        ]
      }
    },
    habitat: {
      en: "Acidic, ephemeral tea-tree peat pools and heathland swamps of extreme southwestern Western Australia (pH 3.0–5.5).",
      bn: "পশ্চিম অস্ট্রেলিয়ার অম্লীয় (pH ৩.০–৫.৫) সাময়িক পিট জলাশয় ও জলাভূমি।",
      systems: ["freshwater"]
    },
    ecosystem: {
      en: "Specialist survivor in extreme boom-and-bust ephemeral wetlands, acting as top micropredator of aquatic invertebrate larvae during wet seasons.",
      bn: "চরমভাবাপন্ন ক্ষণস্থায়ী জলাভূমির বিশেষায়িত প্রাণী; বর্ষাকালে পোকার লার্ভা খেয়ে ক্ষণস্থায়ী জলাভূমির খাদ্যজালে ভূমিকা রাখে।"
    },
    feeding: {
      en: "Micropredator, stalking midge larvae, ostracods, copepods, and cladoceran water fleas in shallow peat waters.",
      bn: "ক্ষুদ্র শিকারী; মশার লার্ভা, জলজ পোকা, অসট্রাকড ও ডাফনিয়া শিকার করে।"
    },
    reproduction: {
      en: "Internal fertilization suspected; breeding takes place immediately following winter rains filling dried peat hollows.",
      bn: "শীতের নতুন বৃষ্টিতে জলাশয় পানিতে ভরে উঠলে প্রজনন করে; অভ্যন্তরীণ নিষেক ঘটে বলে ধারণা করা হয়।"
    },
    distribution: {
      en: "Endemic strictly to a narrow coastal belt of southwestern Australia between Augusta and Albany. Completely absent outside this tiny range.",
      bn: "অস্ট্রেলিয়ার দক্ষিণ-পশ্চিম উপকূলীয় একটি অতি ক্ষুদ্র অঞ্চলে সীমাবদ্ধ। বিশ্বের আর কোথাও পাওয়া যায় না।"
    },
    importantFamilies: [
      {
        name: "Lepidogalaxiidae",
        commonEn: "Salamanderfishes",
        commonBn: "সালামান্ডারফিশ গোত্র",
        diagnosticEn: "Monotypic family containing single living species Lepidogalaxias salamandroides.",
        diagnosticBn: "একমাত্র জীবিত প্রজাতি Lepidogalaxias salamandroides ধারণকারী একক গোত্র।"
      }
    ],
    scientificNamesSummary: {
      en: "Single extant genus and species: Lepidogalaxias salamandroides Mees, 1961.",
      bn: "একমাত্র জীবিত গণ ও প্রজাতি: Lepidogalaxias salamandroides Mees, 1961।"
    },
    examplesSummary: {
      en: "Single living species: Salamanderfish (Lepidogalaxias salamandroides).",
      bn: "একমাত্র প্রামাণ্য প্রজাতি: সালামান্ডারফিশ (Lepidogalaxias salamandroides)।"
    },
    additionalInformation: {
      en: "Phylogenomic studies confirm that Lepidogalaxiiformes represents one of the most ancient surviving lineages of euteleost fishes, branching off prior to the divergence of all other Euteleostei.",
      bn: "ফাইলোজেনোমিক্স অনুসারে লেপিডোগ্যালাক্সিফর্মিস ইউটেলিয়স্ট মাছের প্রাচীনতম জীবিত আদিম শাখা।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Betancur-R. et al. (2017)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 13. Argentiniformes
  {
    id: "order-argentiniformes",
    taxonId: "taxon-argentiniformes",
    rank: "order",
    scientificName: "Argentiniformes",
    bengaliName: "আর্জেন্টিনিফর্মিস (রৌপ্যময় সামুদ্রিক স্মেল্ট ও ব্যারেলআই)",
    englishName: "Marine Smelts and Argentines",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Begle, 1991",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Argentiniformes", nameBn: "আর্জেন্টিনিফর্মিস" }
    ],
    shortDescription: {
      en: "Silvery oceanic marine teleosts with prominent eyes (often tubular in deep-sea barreleyes), an epibranchial crumenal organ for food processing, and an adipose fin.",
      bn: "রূপালী সামুদ্রিক মাছ, যাদের বড় চোখ (ব্যারেলআই মাছে নলাকার দূরবীণ চোখ), ফুলকার পেছনে বিশেষ ক্রুমেনাল অঙ্গ এবং অ্যাডিপোজ পাখনা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Presence of a crumenal organ (specialized bilateral epibranchial food-concentrating pouch); eyes large and lateral, or tubular and directed dorsally in Opisthoproctidae; adipose fin usually present; large cycloid or spinoid scales easily shed; no spines in fins; swimbladder physoclistous or absent; mouth small and toothless or with tiny teeth.",
      bn: "গলবিলের পেছনে খাদ্য সংগ্রহের জন্য ক্রুমেনাল অঙ্গ বিদ্যমান; চোখ বড় এবং ব্যারেলআই মাছে উপরের দিকে মুখ করা নলাকার; অ্যাডিপোজ পাখনা উপস্থিত; সহজে খসে পড়া সাইক্লয়েড আঁইশ; পাখনার কাঁটা অনুপস্থিত; মুখ ছোট ও দাঁতহীন বা ক্ষুদ্র দাঁতযুক্ত।",
      keyFeatures: {
        en: [
          "Bilateral epibranchial crumenal organ used to concentrate food particles",
          "Tubular barrel-like eyes directed upwards beneath transparent domed head in Opisthoproctidae",
          "Adipose fin situated between dorsal and caudal fin",
          "Silvery guanine body coloration in shelf species"
        ],
        bn: [
          "গলবিলের পেছনে খাদ্য ঘনীভূত করার ক্রুমেনাল অঙ্গ",
          "ব্যারেলআই মাছে স্বচ্ছ মাথার ভেতর উপরের দিকে তাকিয়ে থাকা দূরবীণসদৃশ চোখ",
          "পৃষ্ঠ ও লেজের পাখনার মাঝখানে অ্যাডিপোজ পাখনা বিদ্যমান",
          "রূপালী চকচকে দেহের আবরণ"
        ]
      }
    },
    habitat: {
      en: "Marine offshore waters from continental shelves down to mesopelagic and bathypelagic ocean depths (100–1,500 meters).",
      bn: "খোলা সমুদ্রের মহীসোপান থেকে শুরু করে মধ্যম ও গভীর সমুদ্র তলদেশ (১০০–১,৫০০ মিটার গভীরতায়)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Midwater pelagic carnivores tracking vertical silhouettes of siphonophores and salps in the oceanic twilight zone.",
      bn: "মধ্য-সমুদ্রের শিকারী; সমুদ্রের গোধূলি অঞ্চলে ভাসমান জেলিফিশ ও সাইফোনোফোরের অবস্থান শনাক্ত করে শিকার করে।"
    },
    feeding: {
      en: "Planktivorous and micro-carnivorous, consuming siphonophores, hydrozoans, pelagic tunicates, amphipods, and euphausiid krill.",
      bn: "প্ল্যাঙ্কটনভোজী; সামুদ্রিক সাইফোনোফোর, ক্রিল, ছোট চিংড়ি ও ভাসমান প্রাণী খায়।"
    },
    reproduction: {
      en: "Pelagic broadcast spawners releasing buoyant spherical eggs that drift in ocean currents.",
      bn: "খোলা সমুদ্রে ডিম ছড়ায়; ভাসমান গোল ডিম স্রোতের সাথে ভেসে পরিপক্ক হয়।"
    },
    distribution: {
      en: "Worldwide across all oceans from polar to tropical seas. Found in outer shelf waters of the Indian Ocean.",
      bn: "মেরু থেকে ক্রান্তীয় অঞ্চল পর্যন্ত বিশ্বের সকল মহাসাগরের গভীর অংশে বিস্তৃত।"
    },
    importantFamilies: [
      {
        name: "Argentinidae",
        commonEn: "Herring Smelts / Argentines",
        commonBn: "আর্জেন্টাইন বা সামুদ্রিক স্মেল্ট গোত্র",
        diagnosticEn: "Silvery fusiform bodies, large lateral eyes, commercial food fishes in North Atlantic.",
        diagnosticBn: "রূপালী শরীর, বড় চোখ; উত্তর আটলান্টিকে বাণিজ্যিকভাবে আহরিত হয়।"
      },
      {
        name: "Opisthoproctidae",
        commonEn: "Barreleyes / Spookfishes",
        commonBn: "ব্যারেলআই বা দূরবীণমাথা গোত্র",
        diagnosticEn: "Tubular upward-directed eyes, transparent fluid-filled head dome, ventral bioluminescent organs.",
        diagnosticBn: "স্বচ্ছ মাথার ভেতর উপরের দিকে তাকানো নলাকার চোখ ও আলোক অঙ্গ বিদ্যমান।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Argentina, Glossanodon, Opisthoproctus, and Macropinna. Key binomials: Argentina silus (Ascanius, 1775) and Macropinna microstoma Chapman, 1939.",
      bn: "গণ: Argentina, Glossanodon, Opisthoproctus এবং Macropinna। প্রধান নাম: Argentina silus (Ascanius, 1775) এবং Macropinna microstoma Chapman, 1939।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Greater Argentine (Argentina silus), Pacific Barreleye (Macropinna microstoma), Barrel-eye (Opisthoproctus soleatus), and Smallmouth Argentine (Argentina sphyraena).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: গ্রেটার আর্জেন্টাইন (Argentina silus), প্যাসিফিক ব্যারেলআই (Macropinna microstoma), ব্যারেলআই (Opisthoproctus soleatus) এবং স্মলমাউথ আর্জেন্টাইন (Argentina sphyraena)।"
    },
    additionalInformation: {
      en: "The Pacific Barreleye (Macropinna microstoma) has green lenses in its tubular eyes and a transparent soft dome covering its head, allowing it to spot bioluminescent siphonophores above it in the twilight zone.",
      bn: "প্যাসিফিক ব্যারেলআই মাছের সম্পূর্ণ মাথার খুলি স্বচ্ছ কাঁচের মতো তরলভরা গম্বুজ দিয়ে ঢাকা, যার ভেতর সবুজ লেন্সযুক্ত চোখ উপর দিকে ঘুরতে পারে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Begle (1991)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 14. Galaxiiformes
  {
    id: "order-galaxiiformes",
    taxonId: "taxon-galaxiiformes",
    rank: "order",
    scientificName: "Galaxiiformes",
    bengaliName: "গ্যালাক্সিফর্মিস (দক্ষিণী গ্যালাক্সিড ও হোয়াইটবেট)",
    englishName: "Galaxiids and Southern Freshwater Fishes",
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
      { rank: "order", name: "Galaxiiformes", nameBn: "গ্যালাক্সিফর্মিস" }
    ],
    shortDescription: {
      en: "Scaleless, cold-adapted freshwater and amphidromous fishes of the Southern Hemisphere with tubular bodies, posterior dorsal fins, and lacking an adipose fin.",
      bn: "দক্ষিণ গোলার্ধের আঁইশহীন শীতল পানির মাছ; যাদের দেহ নলাকার, পৃষ্ঠপাখনা পেছনের দিকে অবস্থিত এবং কোনো অ্যাডিপোজ পাখনা থাকে না।"
    },
    diagnosticCharacteristics: {
      en: "Body completely scaleless, covered in thick leathery skin with copious protective mucus; single dorsal fin placed far back on caudal peduncle directly opposite anal fin; adipose fin completely absent; lateral line well-developed; caudal fin truncate to slightly emarginate; swimbladder lacking pneumatic duct in adults (physoclistic).",
      bn: "দেহ সম্পূর্ণ আঁইশহীন এবং প্রচুর মিউকাসযুক্ত পুরু ত্বক দ্বারা আবৃত; পৃষ্ঠপাখনা পায়ুপাখনার ঠিক বিপরীতে লেজের কাছে অবস্থিত; অ্যাডিপোজ পাখনা সম্পূর্ণ অনুপস্থিত; সুস্পষ্ট পার্শ্বরেখা; ভোঁতা বা খাঁজযুক্ত পুচ্ছপাখনা।",
      keyFeatures: {
        en: [
          "Complete lack of scales across the entire body",
          "Dorsal fin placed far posteriorly directly above anal fin",
          "Adipose fin completely absent",
          "Gondwanan Southern Hemisphere distribution pattern"
        ],
        bn: [
          "সারা শরীরে আঁইশের সম্পূর্ণ অনুপস্থিতি",
          "পৃষ্ঠপাখনা সরাসরি পায়ুপাখনার উপরে পেছনের দিকে অবস্থিত",
          "অ্যাডিপোজ পাখনার অনুপস্থিতি",
          "গন্ডোয়ানা মহাদেশীয় দক্ষিণ গোলার্ধে বিস্তার"
        ]
      }
    },
    habitat: {
      en: "Cold mountain streams, clear peat swamps, glacial lakes, and coastal rivers of the Southern Hemisphere; some species diadromous.",
      bn: "দক্ষিণ গোলার্ধের শীতল পাহাড়ি নদী, স্বচ্ছ পিট জলাভূমি, হিমবাহ হ্রদ ও উপকূলীয় নদী।",
      systems: ["freshwater", "marine"]
    },
    ecosystem: {
      en: "Ecological ecological equivalents of Holarctic salmonids in Southern Hemisphere cool waters, feeding on drift invertebrates.",
      bn: "দক্ষিণ গোলার্ধে উত্তর গোলার্ধের স্যামন মাছের সমতুল্য বাস্তুতাত্ত্বিক ভূমিকা পালন করে।"
    },
    feeding: {
      en: "Carnivorous drift-feeders and benthic foragers, preying on terrestrial falling insects, mayfly and stonefly nymphs, and amphipods.",
      bn: "মাংসাশী; পানিতে পড়া স্থলজ পোকা, মে-ফ্লাই ও স্টোন-ফ্লাই নিম্ফ এবং ছোট জলজ প্রাণী খায়।"
    },
    reproduction: {
      en: "Amphidromous or strictly freshwater. Inanga migrates down to river mouths to spawn on inundated riparian vegetation during spring high tides; larvae drift to sea and return as 'whitebait'.",
      bn: "অনেকে নদীর মোহনায় জোয়ারের সময় ঘাসের বনে ডিম পাড়ে; ডিম ফুটে লার্ভা সাগরে যায় এবং পরে 'হোয়াইটবেট' পোনা হিসেবে নদীতে ফিরে আসে।"
    },
    distribution: {
      en: "Circum-Antarctic Southern Hemisphere: New Zealand, Australia, Tasmania, southern South America (Chile, Argentina), South Africa, and Falkland Islands. Absent in Bangladesh.",
      bn: "নিউজিল্যান্ড, অস্ট্রেলিয়া, তাসমানিয়া, চিলি, আর্জেন্টিনা ও দক্ষিণ আফ্রিকা। বাংলাদেশে সম্পূর্ণ অনুপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Galaxiidae",
        commonEn: "Galaxiids",
        commonBn: "গ্যালাক্সিড গোত্র",
        diagnosticEn: "Scaleless, posterior dorsal fin, no adipose fin, includes whitebait fishes of New Zealand.",
        diagnosticBn: "আঁইশহীন, পেছনের দিকে পৃষ্ঠপাখনা, নিউজিল্যান্ডের বিখ্যাত হোয়াইটবেট মাছ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Galaxias, Neochanna, Paragalaxias, and Galaxiella. Key binomials: Galaxias maculatus (Jenyns, 1842) and Galaxias argenteus (Gmelin, 1789).",
      bn: "গণ: Galaxias, Neochanna, Paragalaxias এবং Galaxiella। প্রধান নাম: Galaxias maculatus (Jenyns, 1842) এবং Galaxias argenteus (Gmelin, 1789)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Common Galaxias / Inanga (Galaxias maculatus), Giant Kokopu (Galaxias argenteus), Tasmanian Mudfish (Neochanna cleaveri), and Spotted Galaxias (Galaxias truttaceus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: কমন গ্যালাক্সিয়াস বা ইনানগা (Galaxias maculatus), জায়ান্ট কোকোপু (Galaxias argenteus), তাসমানিয়ান মাডফিশ (Neochanna cleaveri) এবং স্পটেড গ্যালাক্সিয়াস (Galaxias truttaceus)।"
    },
    additionalInformation: {
      en: "Galaxias maculatus possesses the most widespread natural freshwater distribution of any non-marine fish in the Southern Hemisphere, having dispersed across oceans via its marine larval stage.",
      bn: "Galaxias maculatus এর লার্ভা সাগরে ভাসতে পারার কারণে দক্ষিণ গোলার্ধের বিস্তীর্ণ মহাদেশগুলোতে প্রাকৃতিকভাবে ছড়িয়ে পড়েছে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); McDowall (2006)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 15. Osmeriformes
  {
    id: "order-osmeriformes",
    taxonId: "taxon-osmeriformes",
    rank: "order",
    scientificName: "Osmeriformes",
    bengaliName: "অস্মেরিফর্মিস (স্বাদু ও উপকূলীয় স্মেল্ট ও আয়ু)",
    englishName: "Freshwater Smelts and Ayu",
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
      { rank: "order", name: "Osmeriformes", nameBn: "অস্মেরিফর্মিস" }
    ],
    shortDescription: {
      en: "Slender, silvery, cold-temperate Northern Hemisphere teleosts characterized by an adipose fin, cucumber-like skin scent, cycloid scales, and teeth on the tongue and vomer.",
      bn: "উত্তর গোলার্ধের শীতল পানির সরু রূপালী মাছ; যাদের অ্যাডিপোজ পাখনা, শসার মতো বিশেষ সুবাসযুক্ত ত্বক এবং জিহ্বায় দাঁত রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Slender, elongate, silvery body; adipose fin present; single soft-rayed dorsal fin midway along back; no spines; teeth present on jaws, vomer, and palatines, with strong fang-like teeth on tongue (glossohyal); distinctive fresh-cucumber odor caused by secretion of trans-2-cis-6-nonadienal from skin glands; anadromous or lacustrine lifecycle.",
      bn: "সরু রূপালী শরীর; অ্যাডিপোজ পাখনা বিদ্যমান; পিঠের মাঝখানে একক নরম কাঁটাহীন পৃষ্ঠপাখনা; চোয়াল, তালু এবং জিহ্বাঅস্থিতে শক্ত ধারালো দাঁত; ত্বক থেকে ক্ষরিত বিশেষ রাসায়নিকের কারণে তাজা শসার মতো চমৎকার সুবাস তৈরি হয়; পরিযায়ী বা হ্রদচারী জীবনচক্র।",
      keyFeatures: {
        en: [
          "Characteristic fresh cucumber aroma produced by cutaneous chemical aldehydes",
          "Adipose fin positioned behind the rayed dorsal fin",
          "Prominent grasping teeth on the glossohyal tongue bone",
          "Silvery pelagic schooling forage species in cold Holarctic waters"
        ],
        bn: [
          "ত্বক থেকে নির্গত তাজা শসার মতো মনোরম সুবাস",
          "পৃষ্ঠপাখনার পেছনে ছোট অ্যাডিপোজ পাখনা বিদ্যমান",
          "জিহ্বার হাড়ে শক্ত কামড়ানোর মতো দাঁত",
          "শীতল নাতিশীতোষ্ণ সাগরে ঝাঁক বেঁধে চলা রূপালী মাছ"
        ]
      }
    },
    habitat: {
      en: "Cold-temperate coastal marine waters, estuaries, glacial lakes, and river spawning beds across the Northern Hemisphere.",
      bn: "উত্তর গোলার্ধের শীতল উপকূলীয় সাগর, মোহনা, হিমবাহের হ্রদ ও পাহাড়ি নদী।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Vital ecological forage fishes, forming massive schooling biomass that fuels marine mammals, seabirds, cod, and salmon.",
      bn: "উত্তর মহাসাগরের অত্যন্ত গুরুত্বপূর্ণ খাদ্য মাছ; তিমি, সীল, সামুদ্রিক পাখি ও কড মাছের প্রধান খাদ্য।"
    },
    feeding: {
      en: "Carnivorous planktivores, consuming pelagic copepods, amphipods, mysid shrimps, and small fish fry.",
      bn: "প্ল্যাঙ্কটনভোজী শিকারী; ভাসমান কোপিপড, অ্যাম্ফিপড, ছোট চিংড়ি ও মাছের ডিম খায়।"
    },
    reproduction: {
      en: "Anadromous spring migrations into rivers and gravel shallows. Sticky adhesive eggs anchor to sand grains and pebbles before hatching.",
      bn: "বসন্তকালে নদী ও পাহাড়ি বালুচরে ডিম ছাড়তে পরিযান করে। আঠালো ডিম নুড়িপাথরে আটকে থাকে।"
    },
    distribution: {
      en: "Holarctic: North Atlantic, North Pacific, and Arctic drainages. Absent in tropical regions and Bangladesh.",
      bn: "উত্তর আটলান্টিক, উত্তর প্রশান্ত ও সুমেরু মহাসাগরীয় অঞ্চলে সীমাবদ্ধ। বাংলাদেশে অনুপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Osmeridae",
        commonEn: "True Smelts",
        commonBn: "স্মেল্ট গোত্র",
        diagnosticEn: "Distinct cucumber odor, teeth on tongue, adipose fin present; includes Osmerus and Mallotus.",
        diagnosticBn: "শসার গন্ধযুক্ত ত্বক, জিহ্বায় দাঁত, অ্যাডিপোজ পাখনা বিদ্যমান; Osmerus ও Mallotus গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Plecoglossidae",
        commonEn: "Ayu / Sweetfish",
        commonBn: "আয়ু বা সুইটফিশ গোত্র",
        diagnosticEn: "East Asian amphidromous herbivore scraping algae from river rocks with comb-like teeth.",
        diagnosticBn: "পূর্ব এশিয়ার বিখ্যাত মাছ যা বিশেষ দাঁত দিয়ে নদীর পাথরের শৈবাল চেঁছে খায়।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Osmerus, Mallotus, Hypomesus, Plecoglossus, and Salanx. Key binomials: Osmerus mordax (Mitchill, 1814), Mallotus villosus (Müller, 1776), and Plecoglossus altivelis (Temminck & Schlegel, 1846).",
      bn: "গণ: Osmerus, Mallotus, Hypomesus, Plecoglossus এবং Salanx। প্রধান নাম: Osmerus mordax (Mitchill, 1814), Mallotus villosus (Müller, 1776) এবং Plecoglossus altivelis (Temminck & Schlegel, 1846)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Rainbow Smelt (Osmerus mordax), Capelin (Mallotus villosus), European Smelt (Osmerus eperlanus), and Ayu Sweetfish (Plecoglossus altivelis).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: রেইনবো স্মেল্ট (Osmerus mordax), ক্যাপেলিন (Mallotus villosus), ইউরোপীয় স্মেল্ট (Osmerus eperlanus) এবং সুইটফিশ বা আয়ু (Plecoglossus altivelis)।"
    },
    additionalInformation: {
      en: "Capelin (Mallotus villosus) forms one of the largest single-species fish biomasses in Arctic seas, acting as the cornerstone energy transfer link between plankton and higher marine predators.",
      bn: "ক্যাপেলিন সুমেরু সাগরের অন্যতম বৃহৎ মাছের ঝাঁক গঠন করে যা উত্তর মহাসাগরের সম্পূর্ণ খাদ্যশৃঙ্খলকে নিয়ন্ত্রণ করে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Waters et al. (2000)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 16. Stomiiformes
  {
    id: "order-stomiiformes",
    taxonId: "taxon-stomiiformes",
    rank: "order",
    scientificName: "Stomiiformes",
    bengaliName: "স্টোমিফর্মিস (গভীর সমুদ্রের ড্রাগনফিশ ও হ্যাচেটফিশ)",
    englishName: "Dragonfishes, Bristlemouths, and Marine Hatchetfishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Regan, 1909",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Stomiiformes", nameBn: "স্টোমিফর্মিস" }
    ],
    shortDescription: {
      en: "Mesopelagic and bathypelagic predatory fishes with ventrolateral rows of discrete bioluminescent photophores, huge gaping mouths with needle-like fangs, and specialized chin lures.",
      bn: "গভীর সমুদ্রের আলো উৎপাদনকারী শিকারী মাছ; যাদের পেটের নিচে জ্বলজ্বলে ফটোরশ্মি অঙ্গ, বিশালাকার মুখ ও ধারালো ড্রাগন দাঁত এবং থুতনির নিচে আলোকিত টোপ রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body dark brown, pitch black, or mirror-sided silvery; rows of distinct, specialized bioluminescent photophores situated ventrolaterally along the belly and branchiostegal membranes; mouth enormous, extending far behind eye, armed with long needle-like dagger teeth; chin barbel equipped with luminous bulb (esca) present in many stomiids; cycloid scales easily shed or skin naked; adipose fin present or absent.",
      bn: "গাঢ় কালো বা আয়নার মতো রূপালী দেহ; পেটের নিচে দুই পাশে সুনির্দিষ্ট জ্বলজ্বলে আলো উৎপন্নকারী ফটোফোরের সারি; চোখের পেছন পর্যন্ত বিস্তৃত বিশালাকার হাঁ এবং সূঁচালো বিষাক্ত দাঁত; থুতনির নিচে উজ্জ্বল আলোর বাল্বযুক্ত সংবেদনশীল গোঁফ; সহজে খসে পড়া আঁইশ।",
      keyFeatures: {
        en: [
          "Ventrolateral series of true bioluminescent photophores with focusing lenses",
          "Huge predatory mouth armed with hinged needle-like fangs",
          "Specialized chin barbel with terminal luminous lure in predatory dragonfishes",
          "Cyclothone represents the most numerically abundant vertebrate genus on Earth"
        ],
        bn: [
          "পেটের নিচে লেন্সযুক্ত আলো উৎপন্নকারী ফটোফোরের সুস্পষ্ট সারি",
          "বিশাল হাঁ এবং সূঁচালো ড্রাগনসদৃশ ধারালো দাঁত",
          "থুতনির নিচে উজ্জ্বল আলো জ্বালিয়ে শিকার আকর্ষণ করার বিশেষ গোঁফ",
          "Cyclothone গণটি পৃথিবীর সর্বাধিক সংখ্যার মেরুদণ্ডী প্রাণী"
        ]
      }
    },
    habitat: {
      en: "Mesopelagic (twilight zone) and bathypelagic open oceanic depths (200–4,500 meters) across all global oceans.",
      bn: "বিশ্বের সকল মহাসাগরের গোধূলি অঞ্চল ও অতল গভীর সমুদ্র (২০০–৪,৫০০ মিটার গভীরতায়)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Dominant biomass of oceanic midwaters; undertaking vertical diel migrations and serving as both voracious apex micropredators and essential forage for oceanic tunas and squids.",
      bn: "গভীর সমুদ্রের প্রধান খাদ্যজালক নিয়ন্ত্রণকারী; রাতে খাবারের খোঁজে উপরে ওঠে এবং টুনা মাছ ও স্কুইডের গুরুত্বপূর্ণ খাদ্য।"
    },
    feeding: {
      en: "Macropredators and planktivores. Viperfish and dragonfish impale deep-sea teleosts and squids; bristlemouths filter copepods and euphausiids.",
      bn: "মাংসাশী শিকারী; ভাইপারফিশ ও ড্রাগনফিশ বড় বড় মাছ গিলে ফেলে এবং ব্রিসলমাউথ ক্ষুদ্র প্ল্যাঙ্কটন ছেঁকে খায়।"
    },
    reproduction: {
      en: "Pelagic batch spawners in open oceanic water. Larvae frequently have stalked eyes or elongate trailing guts that retract during metamorphosis.",
      bn: "উন্মুক্ত সাগরে ডিম ছড়ায়। অদ্ভুত লার্ভা দশায় চোখ বা অন্ত্র দেহের বাইরে ঝুলন্ত থাকে যা রূপান্তরের সময় ভেতরে ঢুকে যায়।"
    },
    distribution: {
      en: "Circumglobal across all tropical, subtropical, and temperate oceans. Abundant in offshore deep waters of the Bay of Bengal basin.",
      bn: "বিশ্বব্যাপী সকল সাগরে বিস্তৃত। বঙ্গোপসাগরের গভীর খাদে এদের বিপুল উপস্থিতি রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Stomiidae",
        commonEn: "Barbeled Dragonfishes",
        commonBn: "ড্রাগনফিশ গোত্র",
        diagnosticEn: "Black elongate body, huge fangs, luminous chin barbel, photophores; includes Chauliodus and Stomias.",
        diagnosticBn: "কালো দেহ, ভয়ংকর দাঁত, আলোকিত গোঁফ ও ফটোফোর; Chauliodus ও Stomias গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Sternoptychidae",
        commonEn: "Marine Hatchetfishes",
        commonBn: "হ্যাচেটফিশ গোত্র",
        diagnosticEn: "Deep, razor-thin compressed body, mirror-like silver sides, downward-directed photophores for counterillumination.",
        diagnosticBn: "কুড়ালের মতো চ্যাপ্টা রূপালী শরীর, নিচের দিকে আলো ফেলে ছদ্মবেশ ধারণকারী ফটোফোর।"
      },
      {
        name: "Gonostomatidae",
        commonEn: "Bristlemouths",
        commonBn: "ব্রিসলমাউথ গোত্র",
        diagnosticEn: "Slender bodies, bristly teeth, includes Cyclothone with trillions of individuals globally.",
        diagnosticBn: "ক্ষুদ্র চিরুনিসদৃশ দাঁত; ট্রিলিয়ন সংখ্যক সদস্যযুক্ত Cyclothone গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Chauliodus, Stomias, Cyclothone, Argyropelecus, and Idiacanthus. Key binomials: Chauliodus sloani Bloch & Schneider, 1801 and Cyclothone microdon (Günther, 1878).",
      bn: "গণ: Chauliodus, Stomias, Cyclothone, Argyropelecus এবং Idiacanthus। প্রধান নাম: Chauliodus sloani Bloch & Schneider, 1801 এবং Cyclothone microdon (Günther, 1878)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Sloane's Viperfish (Chauliodus sloani), Veiled Anglemouth (Cyclothone microdon), Lovely Hatchetfish (Argyropelecus aculeatus), and Black Dragonfish (Idiacanthus antrostomus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: স্লোয়ানের ভাইপারফিশ (Chauliodus sloani), ব্রিসলমাউথ (Cyclothone microdon), সিলভার হ্যাচেটফিশ (Argyropelecus aculeatus) এবং ব্ল্যাক ড্রাগনফিশ (Idiacanthus antrostomus)।"
    },
    additionalInformation: {
      en: "Cyclothone is estimated to be the most abundant vertebrate genus on Earth, with a global population numbering in the hundreds of trillions of individuals.",
      bn: "Cyclothone গণটি পৃথিবীর যেকোনো পাখি, স্তন্যপায়ী বা মাছের চেয়ে সংখ্যায় বেশি—সারা বিশ্বে এদের সংখ্যা কয়েকশত ট্রিলিয়ন।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Harold (2003)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 17. Ateleopodiformes
  {
    id: "order-ateleopodiformes",
    taxonId: "taxon-ateleopodiformes",
    rank: "order",
    scientificName: "Ateleopodiformes",
    bengaliName: "অ্যাটেলিওপোডিফর্মিস (জেলি-নাক মাছ বা ট্যাডপোল ফিশ)",
    englishName: "Jellynose Fishes / Tadpole Fishes",
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
      { rank: "order", name: "Ateleopodiformes", nameBn: "অ্যাটেলিওপোডিফর্মিস" }
    ],
    shortDescription: {
      en: "Bizarre deep-sea benthic fishes with soft, gelatinous bulbous snouts, largely cartilaginous skeletons, elongate tapering bodies, and long anal fins confluent with caudal fins.",
      bn: "গভীর সমুদ্রের তলদেশের নরম জেলির মতো স্ফীত নাসিকাযুক্ত অদ্ভুত মাছ; যাদের কঙ্কাল মূলত তরুণাস্থিময় এবং লেজের সাথে লম্বা পায়ুপাখনা যুক্ত।"
    },
    diagnosticCharacteristics: {
      en: "Body elongate, flaccid, and tapering like a tadpole; snout bulbous and filled with translucent gelatinous connective tissue; skeleton weakly calcified, retaining persistent cartilage; dorsal fin short and placed anteriorly with 3–13 rays; long anal fin with 70–120 rays confluent with tiny caudal fin; pelvic fins reduced to a single elongated ray on throat (jugular); scales tiny or absent.",
      bn: "ব্যাঙাচির মতো পেছনের দিকে সরু হওয়া নরম শরীর; মুখের সামনে স্ফীত জেলিসদৃশ নরম টিস্যুভরা থ্যাবড়া নাক; কঙ্কাল খুব দুর্বলভাবে খনিজায়িত এবং তরুণাস্থিময়; পিঠের সামনে ছোট পৃষ্ঠপাখনা; লেজের সাথে যুক্ত ৭০–১২০ রশ্মিযুক্ত অত্যন্ত লম্বা পায়ুপাখনা; গলার নিচে শ্রোণীপাখনা একক সুতোর মতো সরু রশ্মিতে রূপান্তরিত; আঁইশ অনুপস্থিত বা অতিক্ষুদ্র।",
      keyFeatures: {
        en: [
          "Bulbous, gelatinous, translucent snout housing sensory electroreceptors",
          "Largely cartilaginous, poorly mineralized cranial and axial skeleton",
          "Extremely elongate anal fin confluent with minute caudal fin",
          "Pelvic fins reduced to single filamentous jugular rays on the throat"
        ],
        bn: [
          "তড়িৎসংবেদী গ্রাহকসমৃদ্ধ স্বচ্ছ স্ফীত জেলিসদৃশ নরম নাক",
          "অত্যন্ত নরম ও তরুণাস্থিময় দুর্বল কঙ্কাল",
          "পুচ্ছপাখনার সাথে মিশে থাকা অতিদীর্ঘ পায়ুপাখনা",
          "গলার নিচে একক সুতোর মতো সরু শ্রোণীপাখনা"
        ]
      }
    },
    habitat: {
      en: "Deep continental slopes, submarine canyons, and bathyal soft mud bottoms at depths of 100 to 1,200 meters.",
      bn: "গভীর মহীঢাল, সাবমেরিন গিরিখাত এবং ১০০ থেকে ১,২০০ মিটার গভীরতার নরম কর্দমাক্ত সমুদ্রতলদেশ।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Specialized benthic suction feeders probing deep bathyal muds for soft-bodied invertebrates.",
      bn: "গভীর সমুদ্রের তলদেশের নরম কাদা থেকে নরমদেহের প্রাণী চুষে নেওয়া বিশেষায়িত প্রাণী।"
    },
    feeding: {
      en: "Suction-feeding benthivores, consuming brittle stars, sea cucumbers, polychaete worms, and decapod crabs with a highly protrusible lower jaw.",
      bn: "নরম কাদায় বাস করা ভঙ্গুর তারামাছ, সি-কিউকাম্বার, পলিকীট ও কাঁকড়া চুষে খায়।"
    },
    reproduction: {
      en: "Oviparous. Epipelagic spherical buoyant eggs; larvae possess transparent bodies that settle onto bathyal slopes upon maturity.",
      bn: "ডিম্বপ্রসবকারী। ভাসমান গোল ডিম সাগরে ছড়ায় এবং লার্ভা পরিণত হলে গভীর তলদেশে নেমে আসে।"
    },
    distribution: {
      en: "Scattered circumglobal distribution in tropical and warm temperate oceans: Caribbean, Eastern Atlantic, Indo-West Pacific, and Indian Ocean.",
      bn: "ভারত মহাসাগর, ইন্দো-ওয়েস্ট প্যাসিফিক ও আটলান্টিকের গভীর সাগরে বিচ্ছিন্নভাবে বিস্তৃত।"
    },
    importantFamilies: [
      {
        name: "Ateleopodidae",
        commonEn: "Jellynose Fishes",
        commonBn: "জেলি-নাক মাছ গোত্র",
        diagnosticEn: "Single living family containing about 12 species in four genera sharing all ordinal characters.",
        diagnosticBn: "একমাত্র জীবিত গোত্র; ৪টি গণের প্রায় ১২টি প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Ateleopus, Ijimaia, Guentherus, and Parateleopus. Key binomials: Ateleopus japonicus Bleeker, 1853 and Ijimaia loppei Roule, 1922.",
      bn: "গণ: Ateleopus, Ijimaia, Guentherus এবং Parateleopus। প্রধান নাম: Ateleopus japonicus Bleeker, 1853 এবং Ijimaia loppei Roule, 1922।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Pacific Jellynose Fish (Ateleopus japonicus), Loppe's Jellynose Fish (Ijimaia loppei), Jellynose Tadpolefish (Guentherus altivela), and Indian Jellynose (Ateleopus indicus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: প্যাসিফিক জেলিনোজ ফিশ (Ateleopus japonicus), লোপেস জেলিনোজ ফিশ (Ijimaia loppei), গুন্থার্স ট্যাডপোলফিশ (Guentherus altivela) এবং ইন্ডিয়ান জেলিনোজ ফিশ (Ateleopus indicus)।"
    },
    additionalInformation: {
      en: "Ateleopodiformes occupies a key basal position within Eurypterygii, acting as the sister group to all other higher spiny-rayed acanthomorph fishes.",
      bn: "অ্যাটেলিওপোডিফর্মিস কাঁটাযুক্ত আধুনিক মাছদের (Acanthomorpha) আদিমতম ভিত্তি শাখা হিসেবে বিবর্তনে অত্যন্ত তাৎপর্যপূর্ণ।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Kaga (2016)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 18. Myctophiformes
  {
    id: "order-myctophiformes",
    taxonId: "taxon-myctophiformes",
    rank: "order",
    scientificName: "Myctophiformes",
    bengaliName: "মিক্টোফিফর্মিস (লণ্ঠন মাছ বা ল্যান্টার্নফিশ)",
    englishName: "Lanternfishes and Blackchins",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Regan, 1911",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Myctophiformes", nameBn: "মিক্টোফিফর্মিস" }
    ],
    shortDescription: {
      en: "Abundant oceanic mesopelagic teleosts with large eyes, an adipose fin, and species-specific patterns of bioluminescent photophores, renowned for massive daily vertical migrations.",
      bn: "সমুদ্রের গোধূলি অঞ্চলের অত্যন্ত প্রাচুর্যময় মাছ; যাদের বড় চোখ, অ্যাডিপোজ পাখনা এবং প্রজাতিভেদে বিশেষ নকশায় সাজানো আলো উৎপাদনকারী ফটোফোর রয়েছে এবং এরা প্রতিদিন সুবিশাল উল্লম্ব পরিযানে অংশ নেয়।"
    },
    diagnosticCharacteristics: {
      en: "Small, laterally compressed, silvery to dark brown oceanic teleosts; head and body equipped with discrete groups of rounded bioluminescent photophores arranged in diagnostic species-specific series; eyes large; mouth large and extending well past eye; adipose fin present; single dorsal fin near midbody; swimbladder present; ctenoid or cycloid scales; massive nocturnal vertical migration.",
      bn: "ক্ষুদ্র চ্যাপ্টা রূপালী বা কালচে মাছ; দেহের দুই পাশে নির্দিষ্ট নিয়মে সাজানো গোল গোল জ্বলজ্বলে আলো নির্গমনকারী ফটোফোর বিদ্যমান; বড় চোখ; পেছনের দিকে প্রসারিত প্রশস্ত মুখ; অ্যাডিপোজ পাখনা উপস্থিত; পিঠের মাঝখানে একক পৃষ্ঠপাখনা; সাঁতারের পটকা বিদ্যমান; রাতে বিশাল ঝাঁক বেঁধে সমুদ্রপৃষ্ঠে উঠে আসে।",
      keyFeatures: {
        en: [
          "Species-specific geometric arrangements of discrete photophores on head and flanks",
          "Conspicuous adipose fin situated between dorsal and forked caudal fins",
          "Largest daily vertical biomass migration on Earth (diel vertical migration from 1,000 m to surface)",
          "Form the primary reflective acoustic component of the ocean's Deep Scattering Layer (DSL)"
        ],
        bn: [
          "মাথা ও দেহে প্রজাতিভেদে জ্যামিতিক নকশায় সাজানো ফটোফোরের বিন্যাস",
          "পৃষ্ঠপাখনা ও খাঁজযুক্ত লেজের মাঝখানে স্পষ্ট অ্যাডিপোজ পাখনা",
          "পৃথিবীর বৃহত্তম দৈনিক উল্লম্ব জীবভর পরিযান (দিনের ১,০০০ মিটার থেকে রাতে পৃষ্ঠে আগমন)",
          "মহাসাগরের শব্দ তরঙ্গ প্রতিফলক 'ডিপ স্ক্যাটারিং লেয়ার' (DSL)-এর প্রধান উপাদান"
        ]
      }
    },
    habitat: {
      en: "Open oceans circumglobally: daytime resting at mesopelagic depths (300–1,200 m) and nighttime foraging in epipelagic surface layers (0–100 m).",
      bn: "বিশ্বের সকল উন্মুক্ত মহাসাগর: দিনে ৩০০–১,২০০ মিটার গভীরে থাকে এবং রাতে ০–১০০ মিটার অগভীর পৃষ্ঠভাগে উঠে আসে।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "The critical trophic nexus of oceanic pelagic food webs; converting zooplankton production into immense fish biomass (estimated 550–660 million metric tons) preyed upon by tuna, billfish, squids, dolphins, and seabirds.",
      bn: "মহাসাগরীয় খাদ্যজালের মেরুদণ্ড; প্ল্যাঙ্কটন খেয়ে প্রায় ৬০০ মিলিয়ন টন জীবভর তৈরি করে যা টুনা, ডলফিন, স্কুইড ও সামুদ্রিক পাখিদের বাঁচিয়ে রাখে।"
    },
    feeding: {
      en: "Planktivorous nocturnal feeders, consuming calanoid copepods, euphausiids, amphipods, ostracods, and chaetognaths in surface waters.",
      bn: "প্ল্যাঙ্কটনভোজী নিশাচর শিকারী; রাতের অগভীর পানিতে কোপিপড, ক্রিল, ছোট চিংড়ি ও জলজ প্রাণী খায়।"
    },
    reproduction: {
      en: "Pelagic broadcast spawners releasing buoyant eggs that hatch into surface-drifting larvae possessing unique eye and snout morphologies.",
      bn: "খোলা সাগরে ডিম ছাড়ে; ভাসমান ডিম ফুটে লার্ভা তৈরি হয় যা পরে আলো উৎপাদনকারী ফটোফোর অর্জন করে।"
    },
    distribution: {
      en: "Abundant in all oceans worldwide from the Arctic to Antarctic. Highly diverse and dominant in deep offshore waters of the Bay of Bengal.",
      bn: "সুমেরু থেকে কুমেরু পর্যন্ত পৃথিবীর সকল মহাসাগরে বিপুল সংখ্যায় বিদ্যমান। বঙ্গোপসাগরের গভীর জলে অত্যন্ত প্রাচুর্যময়।"
    },
    importantFamilies: [
      {
        name: "Myctophidae",
        commonEn: "Lanternfishes",
        commonBn: "লণ্ঠন মাছ গোত্র",
        diagnosticEn: "Arrangement of photophores on head and body diagnostic, adipose fin present, huge mouth; contains ~250 species.",
        diagnosticBn: "সুনির্দিষ্ট ফটোফোরের সারি, অ্যাডিপোজ পাখনা ও বড় চোখ; প্রায় ২৫০ প্রজাতি অন্তর্ভুক্ত।"
      },
      {
        name: "Neoscopelidae",
        commonEn: "Blackchins",
        commonBn: "ব্ল্যাকচিন গোত্র",
        diagnosticEn: "Photophores absent or restricted to belly margin, mouth extends past eye, dorsal fin origin ahead of pelvic fins.",
        diagnosticBn: "ফটোফোর কেবল পেটের কিনারায় সীমাবদ্ধ বা অনুপস্থিত; Neoscopelus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Benthosema, Myctophum, Diaphus, Hygophum, and Neoscopelus. Key binomials: Benthosema glaciale (Reinhardt, 1837) and Myctophum punctatum Rafinesque, 1810.",
      bn: "গণ: Benthosema, Myctophum, Diaphus, Hygophum এবং Neoscopelus। প্রধান নাম: Benthosema glaciale (Reinhardt, 1837) এবং Myctophum punctatum Rafinesque, 1810।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Glacier Lanternfish (Benthosema glaciale), Spotted Lanternfish (Myctophum punctatum), White-spotted Lanternfish (Diaphus rafinesquii), and Large-scaled Lanternfish (Neoscopelus macrolepidotus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: গ্লেশিয়ার ল্যান্টার্নফিশ (Benthosema glaciale), স্পটেড ল্যান্টার্নফিশ (Myctophum punctatum), হোয়াইট-স্পটেড ল্যান্টার্নফিশ (Diaphus rafinesquii) এবং লার্জস্কেল ল্যান্টার্নফিশ (Neoscopelus macrolepidotus)।"
    },
    additionalInformation: {
      en: "Myctophids account for approximately 65% of all deep-sea fish biomass on Earth. Their daily vertical movement constitutes the largest animal migration on our planet in terms of sheer biomass.",
      bn: "মিক্টোফিড মাছ পৃথিবীর গভীর সমুদ্রের মোট মাছের ওজনের প্রায় ৬৫% গঠন করে এবং এদের দৈনিক চলাচল পৃথিবীর বৃহত্তম জীবভর পরিযান।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Catul et al. (2011)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 19. Lampriformes
  {
    id: "order-lampriformes",
    taxonId: "taxon-lampriformes",
    rank: "order",
    scientificName: "Lampriformes",
    bengaliName: "ল্যাম্প্রিফর্মিস (ওরফিশ বা দাঁড়মাছ ও অপাহ)",
    englishName: "Opahs, Oarfishes, and Ribbonfishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Regan, 1909",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Lampriformes", nameBn: "ল্যাম্প্রিফর্মিস" }
    ],
    shortDescription: {
      en: "Remarkable oceanic pelagic teleosts including the world's longest bony fish (the Giant Oarfish) and the first known warm-blooded fish (the Opah), with extraordinarily protrusible jaws.",
      bn: "বিখ্যাত মহাসাগরীয় মাছ; যার মধ্যে রয়েছে পৃথিবীর দীর্ঘতম অস্থিময় মাছ (দৈত্যাকার ওরফিশ) এবং প্রথম আবিষ্কৃত সম্পূর্ণ উষ্ণরক্তের মাছ (অপাহ), যাদের মুখ অত্যন্ত প্রসারিত হতে পারে।"
    },
    diagnosticCharacteristics: {
      en: "Unique protrusible upper jaw mechanics in which the maxilla slides forward with the premaxilla without any tooth attachment; body either deep, disc-shaped, and laterally compressed (Lampridae) or extraordinarily ribbon-like and elongated up to 11 meters (Regalecidae); no true spines; dorsal fin very long; pelvic fins thoracic or absent; opah (*Lampris*) possesses systemic whole-body endothermy with countercurrent rete mirabile in gill arches.",
      bn: "চোয়াল অত্যন্ত প্রসারণক্ষম যেখানে ম্যাক্সিলা প্রি-ম্যাক্সিলার সাথে সামনের দিকে ছিটকে বেরিয়ে আসে; শরীর গোলাকার ও চ্যাপ্টা (অপাহ) অথবা ফিতার মতো অত্যন্ত দীর্ঘ ১১ মিটার পর্যন্ত লম্বা (ওরফিশ); প্রকৃত কাঁটা অনুপস্থিত; দীর্ঘ পৃষ্ঠপাখনা; অপাহ মাছ ফুলকায় বিশেষ রক্তজালক (rete mirabile) ব্যবহার করে সারা শরীরে উষ্ণ রক্ত সংবহন বজায় রাখে।",
      keyFeatures: {
        en: [
          "Unique protrusion mechanism of upper jaw completely distinct from other teleosts",
          "Giant Oarfish (Regalecus glesne) is the longest living bony fish (up to 11 m)",
          "Opah (Lampris guttatus) exhibits whole-body endothermy (warm-blooded fish)",
          "Brilliant silver coloration with crimson red fins in pelagic taxa"
        ],
        bn: [
          "অন্যান্য মাছের চেয়ে সম্পূর্ণ ভিন্ন প্রকৃতির অত্যন্ত প্রসারিত চোয়াল ব্যবস্থা",
          "জায়ান্ট ওরফিশ (Regalecus glesne) জীবিত অস্থিময় মাছদের মধ্যে দীর্ঘতম (১১ মিটার পর্যন্ত)",
          "অপাহ মাছ বিশ্বের প্রথম আবিষ্কৃত উষ্ণরক্তের মাছ (পুরো শরীর উষ্ণ রাখতে সক্ষম)",
          "লাল টুকটুকে পাখনা ও রূপালী উজ্জ্বল দেহের বর্ণ"
        ]
      }
    },
    habitat: {
      en: "Open oceanic epipelagic and mesopelagic depths down to 1,000 meters in tropical and temperate seas globally.",
      bn: "বিশ্বের ক্রান্তীয় ও নাতিশীতোষ্ণ মহাসাগরের উপরিভাগ থেকে ১,০০০ মিটার গভীর গোধূলি অঞ্চল।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Active midwater pelagic predators hunting squids and krill; oarfishes maintain vertical orientation ('sea-serpent' swimming) in open waters.",
      bn: "খোলা সাগরের শিকারী প্রাণী; ওরফিশ পানিতে উল্লম্বভাবে সোজা খাড়া হয়ে ভেসে থেকে জেলিফিশ ও স্কুইড শিকার করে।"
    },
    feeding: {
      en: "Carnivorous: opahs feed on deep-sea squids, lanternfishes, and krill; oarfishes consume euphausiids and gelatinous zooplankton via suction.",
      bn: "মাংসাশী; অপাহ মাছ দ্রুত সাঁতার কেটে স্কুইড ও মাছ শিকার করে; ওরফিশ মুখ হাঁ করে জেলিফিশ ও ক্রিল চুষে খায়।"
    },
    reproduction: {
      en: "Pelagic spawning with bright pink or amber buoyant eggs; larvae possess extraordinarily elongated and ornamented dorsal and pelvic fin rays.",
      bn: "উন্মুক্ত সাগরে উজ্জ্বল গোলাপী ভাসমান ডিম ছাড়ে; লার্ভার পাখনাগুলো অলঙ্কৃত ও দীর্ঘ হয়।"
    },
    distribution: {
      en: "Worldwide in all tropical and temperate oceans. Found offshore in the deep central and northern Bay of Bengal.",
      bn: "বিশ্বের সকল ক্রান্তীয় ও নাতিশীতোষ্ণ মহাসাগরে বিস্তৃত। বঙ্গোপসাগরের গভীর জলসীমায় এদের উপস্থিতি রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Lampridae",
        commonEn: "Opahs / Moonfishes",
        commonBn: "অপাহ বা মুনফিশ গোত্র",
        diagnosticEn: "Deep oval body, red fins, warm-blooded systemic endothermy; contains genus Lampris.",
        diagnosticBn: "ডিম্বাকার রূপালী শরীর, লাল পাখনা, উষ্ণ রক্ত সংবহন; Lampris গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Regalecidae",
        commonEn: "Oarfishes",
        commonBn: "ওরফিশ বা দাঁড়মাছ গোত্র",
        diagnosticEn: "Ribbon-like body up to 11 m, no anal fin, red crest on head; contains genus Regalecus.",
        diagnosticBn: "ফিতার মতো ১১ মিটার পর্যন্ত লম্বা দেহ, মাথায় লাল ঝুটি; Regalecus গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Trachipteridae",
        commonEn: "Ribbonfishes",
        commonBn: "রিবনফিশ গোত্র",
        diagnosticEn: "Elongate compressed body, caudal fin directed upward, long dorsal fin; contains genus Trachipterus.",
        diagnosticBn: "চ্যাপ্টা ফিতার মতো শরীর, উপরের দিকে মুখ করা লেজ; Trachipterus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Lampris, Regalecus, Trachipterus, and Zu. Key binomials: Lampris guttatus (Brünnich, 1788) and Regalecus glesne Ascanius, 1772.",
      bn: "গণ: Lampris, Regalecus, Trachipterus এবং Zu। প্রধান নাম: Lampris guttatus (Brünnich, 1788) এবং Regalecus glesne Ascanius, 1772।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Giant Oarfish (Regalecus glesne), Opah (Lampris guttatus), Scalloped Ribbonfish (Zu cristatus), and Polka-dot Ribbonfish (Desmodema polystictum).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: জায়ান্ট ওরফিশ (Regalecus glesne), অপাহ বা মুনফিশ (Lampris guttatus), স্ক্যালপড রিবনফিশ (Zu cristatus) এবং পোলকা-ডট রিবনফিশ (Desmodema polystictum)।"
    },
    additionalInformation: {
      en: "Wegner et al. (2015) confirmed that the opah (Lampris guttatus) maintains its heart, brain, and swimming muscles 5°C above ambient water temperature, making it the first fully warm-blooded fish known to science.",
      bn: "২০১৫ সালে বিজ্ঞানীরা প্রমাণ করেন অপাহ মাছ পরিবেশের পানির চেয়ে ৫ ডিগ্রি সেলসিয়াস বেশি উষ্ণতায় নিজের হৃৎপিণ্ড, মস্তিষ্ক ও পেশী সচল রাখতে পারে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Wegner et al. (2015)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 20. Polymixiiformes
  {
    id: "order-polymixiiformes",
    taxonId: "taxon-polymixiiformes",
    rank: "order",
    scientificName: "Polymixiiformes",
    bengaliName: "পলিমিক্সিসিফর্মিস (দাড়িওয়ালা মাছ বা বেয়ার্ডফিশ)",
    englishName: "Beardfishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Rosen & Patterson, 1969",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Polymixiiformes", nameBn: "পলিমিক্সিসিফর্মিস" }
    ],
    shortDescription: {
      en: "Deep-water marine teleosts possessing a prominent pair of long sensory barbels suspended from the hyoid arch beneath the chin, ctenoid scales, and weak spines in the dorsal and anal fins.",
      bn: "গভীর সমুদ্রের মাছ, যাদের গলার নিচে হায়য়েড অস্থি থেকে ঝুলন্ত এক জোড়া স্পষ্ট লম্বা সংবেদনশীল গোঁফ বা বার্বেল, টিনয়েড আঁইশ এবং পাখনার কাঁটা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Moderately deep, compressed body covered in large ctenoid scales; pair of long, thick sensory barbels suspended from the hypohyal bones beneath the lower jaw; dorsal fin with 4–6 spines and 26–38 soft rays; anal fin with 3–4 spines and 13–18 rays; pelvic fins subabdominal with 7–8 rays; palate toothed; large eyes adapted for dim bathyal light.",
      bn: "মাঝারি চ্যাপ্টা শরীর ও বড় টিনয়েড আঁইশ; নিচের চোয়ালের নিচে গলার হাড় থেকে ঝুলন্ত এক জোড়া দীর্ঘ সংবেদনশীল দাড়ি বা বার্বেল; পৃষ্ঠপাখনায় ৪–৬টি কাঁটা ও নরম রশ্মি; পায়ুপাখনায় ৩–৪টি কাঁটা; বড় চোখ যা গভীর সমুদ্রের মৃদু আলোতে দেখতে সক্ষম।",
      keyFeatures: {
        en: [
          "Pair of long, mobile chin barbels suspended from the hypohyal bones of the hyoid arch",
          "Transitional morphology linking primitive teleosts with modern spiny-rayed acanthomorphs",
          "Subabdominal pelvic fins possessing 7 or 8 segmented rays",
          "Ctenoid scales covering body and head"
        ],
        bn: [
          "গলার হায়য়েড হাড় থেকে ঝুলন্ত এক জোড়া লম্বা সঞ্চালনক্ষম সংবেদনশীল দাড়ি",
          "আদিম মাছ ও আধুনিক কাঁটাযুক্ত মাছের মধ্যবর্তী রূপান্তরকালীন শারীরিক গঠন",
          "৭ বা ৮ রশ্মিযুক্ত তলদেশীয় শ্রোণীপাখনা",
          "মাথা ও দেহে সুবিন্যস্ত টিনয়েড আঁইশ"
        ]
      }
    },
    habitat: {
      en: "Deep continental and insular slopes, benthic mud substrates, and submarine ridges from 180 to 800 meters depth.",
      bn: "মহীঢাল, কর্দমাক্ত সমুদ্রতলদেশ এবং সমুদ্রগর্ভস্থ পর্বতশ্রেণী (১৮০ থেকে ৮০০ মিটার গভীরতায়)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Benthic carnivores using tactile barbels to detect buried infaunal prey in aphotic bathyal slope habitats.",
      bn: "গভীর সমুদ্রের অন্ধকার তলদেশের শিকারী; গোঁফ দিয়ে কাদামাটির নিচে লুকানো শিকার শনাক্ত করে।"
    },
    feeding: {
      en: "Invertivorous and piscivorous benthivores, feeding on benthic decapod shrimps, polychaete worms, small squids, and bottom-dwelling fishes.",
      bn: "তলদেশীয় মাংসাশী; চিংড়ি, পলিকীট, ছোট স্কুইড ও তলদেশের ছোট মাছ খায়।"
    },
    reproduction: {
      en: "Oviparous. Epipelagic spherical eggs drift in offshore marine currents; juveniles recruit down to bathyal slopes upon maturity.",
      bn: "ডিম্বপ্রসবকারী। ভাসমান ডিম উন্মুক্ত সাগরে ছাড়ে; রূপান্তরের পর পোনা গভীর সমুদ্রের ঢালে নেমে আসে।"
    },
    distribution: {
      en: "Tropical and subtropical oceans globally: Atlantic, Indian, and Western Pacific Oceans.",
      bn: "আটলান্টিক, ভারত এবং পশ্চিম প্রশান্ত মহাসাগরের ক্রান্তীয় ও উপক্রান্তীয় গভীর সাগরে বিস্তৃত।"
    },
    importantFamilies: [
      {
        name: "Polymixiidae",
        commonEn: "Beardfishes",
        commonBn: "বেয়ার্ডফিশ গোত্র",
        diagnosticEn: "Single extant family containing genus Polymixia with about 10 recognized living species.",
        diagnosticBn: "একমাত্র জীবিত গোত্র; Polymixia গণের প্রায় ১০টি প্রজাতি অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Single extant genus Polymixia Lowe, 1836. Key binomials: Polymixia nobilis Lowe, 1836 and Polymixia japonica Günther, 1877.",
      bn: "একক জীবিত গণ Polymixia Lowe, 1836। প্রধান নাম: Polymixia nobilis Lowe, 1836 এবং Polymixia japonica Günther, 1877।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Stout Beardfish (Polymixia nobilis), Japanese Beardfish (Polymixia japonica), Silver Beardfish (Polymixia lowei), and Long-beard Beardfish (Polymixia berndti).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: স্টউট বেয়ার্ডফিশ (Polymixia nobilis), জাপানি বেয়ার্ডফিশ (Polymixia japonica), সিলভার বেয়ার্ডফিশ (Polymixia lowei) এবং লং-বিয়ার্ড বেয়ার্ডফিশ (Polymixia berndti)।"
    },
    additionalInformation: {
      en: "Polymixiiformes is of profound phylogenetic importance in ichthyology as the sole living lineage of Polymixiiphii, the sister group to all other modern Acanthomorpha (spiny-finned fishes).",
      bn: "মাছবিজ্ঞানে পলিমিক্সিসিফর্মিস আধুনিক কাঁটাযুক্ত মাছের (Acanthomorpha) আদিমতম জীবিত সহোদর গোষ্ঠী হিসেবে অত্যন্ত গুরুত্বপূর্ণ।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Grande et al. (2013)",
    verificationStatus: "published",
    publishedStatus: true
  }
];
