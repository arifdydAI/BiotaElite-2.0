// Batch 3: Orders 21-30
// Percopsiformes, Zeiformes, Trachichthyiformes, Beryciformes, Ophidiiformes,
// Batrachoidiformes, Gobiiformes, Carangiformes, Atheriniformes, Beloniformes

module.exports = [
  // 21. Percopsiformes
  {
    id: "order-percopsiformes",
    taxonId: "taxon-percopsiformes",
    rank: "order",
    scientificName: "Percopsiformes",
    bengaliName: "পারকপসিফর্মিস (ট্রাউট-পার্চ ও পাইরেট পার্চ)",
    englishName: "Trout-perches, Pirate Perches, and Cavefishes",
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
      { rank: "order", name: "Percopsiformes", nameBn: "পারকপসিফর্মিস" }
    ],
    shortDescription: {
      en: "Small North American freshwater teleosts uniting primitive soft-rayed features (adipose fin) with derived spiny-rayed traits, including subterranean blind cavefishes and the jugular-anus pirate perch.",
      bn: "উত্তর আমেরিকার ক্ষুদ্র মিঠাপানির মাছ; যাদের মধ্যে আদিম নরম পাখনার বৈশিষ্ট্য (অ্যাডিপোজ পাখনা) এবং আধুনিক কাঁটাময় পাখনার বৈশিষ্ট্য একত্রে রয়েছে; অন্ধ গুহা মাছ ও গলার নিচে মলদ্বারযুক্ত পাইরেট পার্চ এর অন্তর্ভুক্ত।"
    },
    diagnosticCharacteristics: {
      en: "Small freshwater teleosts possessing a mix of primitive (physostomous swimbladder, adipose fin in Percopsidae) and derived traits (true spines in dorsal and anal fins, ctenoid scales); Pirate perch (*Aphredoderus sayanus*) undergoes remarkable ontogenetic forward migration of the anus from normal position in juveniles to a jugular position directly beneath the throat in adults; cavefishes (Amblyopsidae) blind with hypertrophied neuromast sensory systems.",
      bn: "ছোট মিঠাপানির মাছ; যাতে আদিম বৈশিষ্ট্য (অ্যাডিপোজ পাখনা) ও উন্নত বৈশিষ্ট্য (পাখনার কাঁটা, টিনয়েড আঁইশ) উভয়ই বিদ্যমান; পাইরেট পার্চের বৃদ্ধির সময় মলদ্বার স্বাভাবিক অবস্থান থেকে সরে প্রাপ্তবয়স্ক অবস্থায় সোজা গলার নিচে চলে আসে; গুহামাছে চোখ অনুপস্থিত কিন্তু সংবেদনশীল স্নায়ুতন্ত্র অত্যন্ত উন্নত।",
      keyFeatures: {
        en: [
          "Unique ontogenetic migration of the anus to the throat in adult pirate perch (Aphredoderus)",
          "Mosaic combination of adipose fin with true spiny fin rays",
          "Subterranean karst cave adaptations (anophthalmia and depigmentation) in Amblyopsidae",
          "Endemic strictly to North American freshwaters"
        ],
        bn: [
          "প্রাপ্তবয়স্ক পাইরেট পার্চে মলদ্বার গলার নিচে স্থানান্তরিত হওয়ার অদ্ভুত শারীরিক বৈশিষ্ট্য",
          "অ্যাডিপোজ পাখনার সাথে খাঁটি কাঁটাময় পাখনার যৌথ উপস্থিতি",
          "ভূগর্ভস্থ চুনাপাথরের গুহায় অন্ধত্ব ও বর্ণহীনতার রূপান্তর",
          "সম্পূর্ণরূপে উত্তর আমেরিকার মিঠাপানিতে সীমাবদ্ধ"
        ]
      }
    },
    habitat: {
      en: "Clear to sluggish freshwater lakes, vegetated lowland swamps, muddy bayous, and dark subterranean limestone cave pools in North America.",
      bn: "উত্তর আমেরিকার স্বচ্ছ পাহাড়ি নদী, প্লাবনভূমি, কাদাভরা হ্রদ এবং ভূগর্ভস্থ অন্ধকার চুনাপাথরের গুহার জলাশয়।",
      systems: ["freshwater"]
    },
    ecosystem: {
      en: "Benthic micropredators in temperate streams and apex organisms in energy-limited subterranean cave ecosystems.",
      bn: "শীতল পাহাড়ি নদীর তলদেশীয় শিকারী এবং শক্তিহীন ভূগর্ভস্থ গুহার খাদ্যজালের শীর্ষ প্রাণী।"
    },
    feeding: {
      en: "Nocturnal invertivores, feeding on chironomid midge larvae, mayflies, amphipods, isopods, and small aquatic insects.",
      bn: "নিশাচর পোকাভোজী; মশার লার্ভা, মে-ফ্লাই, ক্ষুদ্র চিংড়ি ও জলজ অমেরুদণ্ডী প্রাণী খায়।"
    },
    reproduction: {
      en: "Oviparous. The pirate perch demonstrates unique 'gill-chamber brooding' or substrate broadcasting where eggs are directed into root-tangles via its throat-positioned urogenital papilla.",
      bn: "ডিম্বপ্রসবকারী। গলার কাছে অবস্থিত প্রজনন অঙ্গের মাধ্যমে গাছের শিকড়ে নিরাপদে ডিম স্থাপন করে।"
    },
    distribution: {
      en: "Endemic to North America (Mississippi basin, Atlantic coastal plain, and Great Lakes). Strictly absent in Asia and Bangladesh.",
      bn: "উত্তর আমেরিকায় সীমাবদ্ধ। বাংলাদেশ ও এশিয়ার প্রাকৃতিক জলসীমায় সম্পূর্ণ অনুপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Percopsidae",
        commonEn: "Trout-perches",
        commonBn: "ট্রাউট-পার্চ গোত্র",
        diagnosticEn: "Adipose fin present, ctenoid scales, dorsal fin with 1-2 weak spines; contains Percopsis.",
        diagnosticBn: "অ্যাডিপোজ পাখনা উপস্থিত, টিনয়েড আঁইশ; Percopsis গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Aphredoderidae",
        commonEn: "Pirate Perches",
        commonBn: "পাইরেট পার্চ গোত্র",
        diagnosticEn: "Anus located beneath throat in adults, no adipose fin; single living species Aphredoderus sayanus.",
        diagnosticBn: "প্রাপ্তবয়স্ক অবস্থায় মলদ্বার গলার নিচে অবস্থিত, অ্যাডিপোজ পাখনা নেই; Aphredoderus sayanus অন্তর্ভুক্ত।"
      },
      {
        name: "Amblyopsidae",
        commonEn: "Cavefishes",
        commonBn: "গুহা মাছ গোত্র",
        diagnosticEn: "Subterranean blind cavefishes, eyes rudimentary or absent, skin depigmented white; includes Amblyopsis.",
        diagnosticBn: "অন্ধ গুহামাছ, চোখ নামমাত্র বা অনুপস্থিত, বর্ণহীন সাদা শরীর; Amblyopsis গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Percopsis, Aphredoderus, Amblyopsis, and Forbesichthys. Key binomials: Percopsis omiscomaycus (Walbaum, 1792) and Aphredoderus sayanus (Gilliams, 1824).",
      bn: "গণ: Percopsis, Aphredoderus, Amblyopsis এবং Forbesichthys। প্রধান নাম: Percopsis omiscomaycus (Walbaum, 1792) এবং Aphredoderus sayanus (Gilliams, 1824)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Trout-perch (Percopsis omiscomaycus), Pirate Perch (Aphredoderus sayanus), Northern Cavefish (Amblyopsis spelaea), and Spring Cavefish (Forbesichthys agassizii).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: ট্রাউট-পার্চ (Percopsis omiscomaycus), পাইরেট পার্চ (Aphredoderus sayanus), নর্দান কেভফিশ (Amblyopsis spelaea) এবং স্প্রিং কেভফিশ (Forbesichthys agassizii)।"
    },
    additionalInformation: {
      en: "Percopsiformes is an archaic relict lineage representing the basalmost surviving branch of the Paracanthopterygii, retaining transitional features from over 70 million years ago.",
      bn: "পারকপসিফর্মিস প্যারাক্যান্থোপটেরিগি মাছের প্রাচীনতম জীবিত রূপান্তরকালীন নিদর্শন।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Grande et al. (2013)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 22. Zeiformes
  {
    id: "order-zeiformes",
    taxonId: "taxon-zeiformes",
    rank: "order",
    scientificName: "Zeiformes",
    bengaliName: "জেইফর্মিস (ডরি বা সেন্ট পিটারের মাছ)",
    englishName: "Dories and Oreos",
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
      { rank: "order", name: "Zeiformes", nameBn: "জেইফর্মিস" }
    ],
    shortDescription: {
      en: "Deep-bodied, razor-thin compressed marine predatory fishes with enormous protrusible mouths, bony bucklers along the belly margin, and long dorsal fin filaments.",
      bn: "অত্যন্ত চ্যাপ্টা ও থালার মতো গোলাকার গভীর সাগরের শিকারী মাছ; যাদের বিশালাকার প্রসারণক্ষম মুখ, পেটের কিনারায় শক্ত কাঁটাযুক্ত অস্থিপ্লেট এবং দীর্ঘ পৃষ্ঠপাখনা রশ্মি রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body deep, rhomboid or disc-like, and highly compressed laterally; mouth huge, oblique, with premaxilla and maxilla projecting forward to form a voluminous tubular funnel nearly half the body length; dorsal fin with 7–10 stout spines, frequently bearing long filamentous extensions; anal fin with 1–4 spines; series of bony plates or bucklers along bases of dorsal and anal fins; small ctenoid scales or naked skin; thoracic pelvic fins with 5–10 rays.",
      bn: "চ্যাপ্টা ও রম্বস আকৃতির শরীর; মুখ অত্যন্ত বিশালাকার এবং শিকার ধরার সময় শরীরের অর্ধেক দৈর্ঘ্যের সমান নলের মতো সামনের দিকে ছিটকে বেরিয়ে আসে; পৃষ্ঠপাখনায় ৭–১০টি শক্ত কাঁটা ও দীর্ঘ সুতো; পায়ুপাখনায় ১–৪টি কাঁটা; পাখনার গোড়ায় ও পেটের নিচে শক্ত অস্থি-ঢাল বা কাঁটাযুক্ত প্লেটের সারি; ক্ষুদ্র টিনয়েড আঁইশ বা মসৃণ ত্বক।",
      keyFeatures: {
        en: [
          "Extraordinarily protrusible mouth forming an immense anterior capture tube",
          "Laterally razor-thin, deep rhomboidal body shape for low frontal visual profile",
          "Bony plates (bucklers) along ventral abdomen and bases of dorsal and anal fins",
          "Distinct dark circular ocellus ('St. Peter's thumbprint') on the flanks of Zeus faber"
        ],
        bn: [
          "শিকার ধরার জন্য নলের মতো বিশালাকার প্রসারিত চোয়াল ব্যবস্থা",
          "সামনে থেকে দেখতে প্রায় অদৃশ্য অত্যন্ত পাতলা ও চ্যাপ্টা দেহ",
          "পেটের নিচে এবং পাখনার গোড়ায় শক্ত কাঁটাময় অস্থিপ্লেটের সারি",
          "জন ডরির দুই পাশে সুস্পষ্ট কালো চোখা দাগ ('সেন্ট পিটারের আঙুলের ছাপ')"
        ]
      }
    },
    habitat: {
      en: "Marine continental shelves, upper continental slopes, submarine banks, and deep seamounts (50–1,500 meters depth).",
      bn: "মহীসোপান, মহীঢাল, সমুদ্রগর্ভস্থ শৈলশিরা ও গভীর সমুদ্রতলদেশ (৫০–১,৫০০ মিটার গভীরতায়)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Stealth ambush predators in demersal shelf ecosystems; presenting an razor-thin frontal silhouette to stalk schools of pelagic fishes before engulfing them with explosive suction.",
      bn: "তলদেশের ছদ্মবেশী শিকারী; শরীর এতটাই পাতলা যে সামনে থেকে শিকার মাছ এদের দেখতে পায় না, অতর্কিতে মুখ বাড়িয়ে শিকার গিলে ফেলে।"
    },
    feeding: {
      en: "Carnivorous piscivores and teuthivores, preying on clupeoid herrings, sand lances, small gadids, and squids.",
      bn: "মাংসাশী মাছভোজী; ছোট হেরিং, কড ও স্কুইড শিকার করে।"
    },
    reproduction: {
      en: "Broadcast spawners in shelf waters; buoyant eggs drift in oceanic currents before larvae metamorphose into deep-bodied juveniles.",
      bn: "উন্মুক্ত সাগরে ডিম ছড়ায়; ভাসমান ডিম স্রোতে ভেসে পরিণত হয়।"
    },
    distribution: {
      en: "Worldwide across temperate and tropical continental margins in Atlantic, Indian, and Pacific Oceans. Inhabits outer shelf waters of the Indian Ocean.",
      bn: "আটলান্টিক, ভারত এবং প্রশান্ত মহাসাগরের মহীসোপান ও মহীঢালে বিস্তৃত।"
    },
    importantFamilies: [
      {
        name: "Zeidae",
        commonEn: "Dories",
        commonBn: "ডরি গোত্র",
        diagnosticEn: "Large dark eye-spot on sides, long dorsal fin filaments, bony bucklers on belly; includes Zeus and Zenopsis.",
        diagnosticBn: "দেহের পাশে বড় কালো বৃত্ত, পৃষ্ঠপাখনায় লম্বা সুতো; Zeus ও Zenopsis গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Oreosomatidae",
        commonEn: "Oreos",
        commonBn: "ওরিও গোত্র",
        diagnosticEn: "Deep bathyal slope fishes, heavy rough ctenoid scales, dark charcoal to purplish coloration.",
        diagnosticBn: "গভীর সমুদ্রের মাছ, খসখসে টিনয়েড আঁইশ, গাঢ় বেগুনি বা ছাই রঙ; Allocyttus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Zeus, Zenopsis, Allocyttus, Cyttopsis, and Grammicolepis. Key binomials: Zeus faber Linnaeus, 1758 and Zenopsis conchifer (Lowe, 1852).",
      bn: "গণ: Zeus, Zenopsis, Allocyttus, Cyttopsis এবং Grammicolepis। প্রধান নাম: Zeus faber Linnaeus, 1758 এবং Zenopsis conchifer (Lowe, 1852)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: John Dory (Zeus faber), Cape Dory (Zeus capensis), Mirror Dory (Zenopsis nebulosa), and Oxeye Oreo (Allocyttus folletti).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: জন ডরি (Zeus faber), কেপ ডরি (Zeus capensis), মিরর ডরি (Zenopsis nebulosa) এবং অক্সআই ওরিও (Allocyttus folletti)।"
    },
    additionalInformation: {
      en: "The John Dory (Zeus faber) is one of the most highly prized culinary fishes in international gastronomy and has been renowned since Roman antiquity.",
      bn: "জন ডরি মাছ প্রাচীন রোমান যুগ থেকেই এর সুস্বাদু মাংসের জন্য আন্তর্জাতিক রন্ধনশিল্পে অত্যন্ত সমাদৃত।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Tyler et al. (2003)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 23. Trachichthyiformes
  {
    id: "order-trachichthyiformes",
    taxonId: "taxon-trachichthyiformes",
    rank: "order",
    scientificName: "Trachichthyiformes",
    bengaliName: "ট্র্যাকিকথিফর্মিস (স্লাইমহেড, রাফি ও পাইনকোনফিশ)",
    englishName: "Slimeheads, Roughies, and Pineconefishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Nelson, 1969",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Trachichthyiformes", nameBn: "ট্র্যাকিকথিফর্মিস" }
    ],
    shortDescription: {
      en: "Deep-sea and reef acanthomorphs with cavernous mucous-filled laterosensory head cavities, heavy ventral abdominal scutes, bioluminescent bacterial organs, and exceptional longevity.",
      bn: "গভীর সমুদ্র ও প্রবাল প্রাচীরের মাছ; যাদের মাথায় মিউকাসে ভরা সংবেদনশীল গহ্বর, পেটে ধারালো কাঁটাযুক্ত প্লেট, আলো উৎপাদনকারী মিথোজীবী ব্যাক্টেরিয়া অঙ্গ এবং চরম দীর্ঘায়ু (১৫০ বছরের বেশি) রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Cranial bones excavated by wide, cavernous laterosensory channels covered in thin skin and filled with mucous; abdomen bordered ventrally by a keel of heavy sharp serrated scutes; Pineconefishes (Monocentridae) enclosed in an armor of heavy interlocking platelike scales with symbiotic luminous photophores on the chin; Orange Roughy (*Hoplostethus atlanticus*) exhibits extraordinary longevity exceeding 150 years; pelvic fins with one spine and 6–7 soft rays.",
      bn: "মাথার খুলির হাড়ে মিউকাসভরা চওড়া সংবেদনশীল গর্তের জালিকা; পেটের নিচে করাতের মতো ধারালো শক্ত প্লেটের সারি; পাইনকোনফিশ শক্ত বর্মসদৃশ আঁইশে ঢাকা এবং থুতনির নিচে আলো উৎপাদনকারী ব্যাক্টেরিয়া ধারণ করে; অরেঞ্জ রাফি মাছ ১৫০ বছরেরও বেশি বাঁচে; শ্রোণীপাখনায় ১টি কাঁটা ও ৬-৭টি নরম রশ্মি বিদ্যমান।",
      keyFeatures: {
        en: [
          "Cavernous muciferous cranial sensory channels across the skull roof",
          "Ventral abdominal keel of hard, sharp, serrated scutes",
          "Symbiotic bioluminescent organs on the lower jaw in Monocentridae",
          "Extreme longevity (over 150 years) and late sexual maturation in deep-sea roughies"
        ],
        bn: [
          "মাথার খুলির উপর মিউকাসভরা গভীর সংবেদনশীল খালের জালিকা",
          "পেটের নিচে করাতের মতো ধারালো শক্ত আঁইশের শক্ত শৈলশিরা",
          "নিচের চোয়ালে আলো উৎপাদনকারী মিথোজীবী ব্যাক্টেরিয়ার অঙ্গ",
          "চরম দীর্ঘায়ু (১৫০ বছরেরও বেশি আয়ু) এবং অত্যন্ত দেরিতে প্রজননক্ষম হওয়া"
        ]
      }
    },
    habitat: {
      en: "Deep continental slopes, submarine seamounts, oceanic ridges, and coastal rocky reefs (100–1,800 meters depth).",
      bn: "গভীর মহীঢাল, সমুদ্রগর্ভস্থ পর্বতশ্রেণী এবং উপকূলীয় পাথুরে প্রাচীর (১০০–১,৮০০ মিটার গভীরতায়)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Aggregation predators schooling around bathyal seamount pinnacles; slow-growing keystone species extraordinarily vulnerable to deep-water commercial bottom trawling.",
      bn: "গভীর সমুদ্রের শৈলশিরা ঘিরে বাস করা শিকারী মাছ; এদের ধীর বৃদ্ধির কারণে গভীর সমুদ্রের ট্রলিংয়ে এদের অস্তিত্ব চরম সংকটাপন্ন।"
    },
    feeding: {
      en: "Benthopelagic carnivores, consuming deep-sea benthopelagic shrimps, amphipods, lanternfishes, and squid.",
      bn: "মাংসাশী; গভীর সমুদ্রের চিংড়ি, লণ্ঠন মাছ ও স্কুইড খায়।"
    },
    reproduction: {
      en: "Extremely slow maturation: Orange roughy does not reach sexual maturity until 25–30 years of age, forming dense seasonal spawning schools over specific seamount peaks.",
      bn: "অত্যন্ত ধীর প্রজনন পরিপক্কতা; ২৫-৩০ বছর বয়সে এরা প্রথম প্রজননক্ষম হয় এবং নির্দিষ্ট পাহাড়ের চূড়ায় ডিম ছাড়তে জড়ো হয়।"
    },
    distribution: {
      en: "Circumglobal across tropical and temperate oceans. Prominent in the Southern Ocean, Indian Ocean, and South Pacific.",
      bn: "বিশ্বের সকল মহাসাগরের গভীর অঞ্চলে বিস্তৃত। দক্ষিণ মহাসাগর ও ভারত মহাসাগরের শৈলশিরায় ব্যাপকভাবে উপস্থিত।"
    },
    importantFamilies: [
      {
        name: "Trachichthyidae",
        commonEn: "Slimeheads / Roughies",
        commonBn: "স্লাইমহেড বা রাফি গোত্র",
        diagnosticEn: "Cavernous head, abdominal scutes, red to orange coloration; includes Hoplostethus.",
        diagnosticBn: "মাথায় মিউকাস গহ্বর, পেটে ধারালো প্লেট, কমলা-লাল বর্ণ; Hoplostethus গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Monocentridae",
        commonEn: "Pineconefishes",
        commonBn: "পাইনকোনফিশ গোত্র",
        diagnosticEn: "Body armored in rigid pinecone-like scales, luminous organs on lower jaw; includes Monocentris.",
        diagnosticBn: "পাইন ফলের মতো শক্ত বর্মে ঢাকা শরীর, চোয়ালে আলোক অঙ্গ; Monocentris গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Hoplostethus, Trachichthys, Monocentris, and Cleidopus. Key binomials: Hoplostethus atlanticus Collett, 1889 and Monocentris japonica (Houttuyn, 1782).",
      bn: "গণ: Hoplostethus, Trachichthys, Monocentris এবং Cleidopus। প্রধান নাম: Hoplostethus atlanticus Collett, 1889 এবং Monocentris japonica (Houttuyn, 1782)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Orange Roughy (Hoplostethus atlanticus), Japanese Pineconefish (Monocentris japonica), Australian Pineapplefish (Cleidopus gloriamaris), and Silver Roughy (Hoplostethus mediterraneus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: অরেঞ্জ রাফি (Hoplostethus atlanticus), জাপানি পাইনকোনফিশ (Monocentris japonica), অস্ট্রেলিয়ান আনারস মাছ (Cleidopus gloriamaris) এবং সিলভার রাফি (Hoplostethus mediterraneus)।"
    },
    additionalInformation: {
      en: "Radioisotope dating of otoliths confirmed that the Orange Roughy can attain an age of over 150 to 180 years, ranking among the longest-lived vertebrates on Earth.",
      bn: "কানের অটোলিথ হাড়ের আইসোটোপ পরীক্ষায় প্রমাণিত হয়েছে অরেঞ্জ রাফি মাছ ১৫০ থেকে ১৮০ বছর পর্যন্ত বাঁচতে পারে, যা মেরুদণ্ডী প্রাণীদের মধ্যে দীর্ঘতমদের অন্যতম।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Fenton et al. (1991)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 24. Beryciformes
  {
    id: "order-beryciformes",
    taxonId: "taxon-beryciformes",
    rank: "order",
    scientificName: "Beryciformes",
    bengaliName: "বেরিসিফর্মিস (আলফনসিনো, ফ্যানটুথ ও ফ্ল্যাশলাইটফিশ)",
    englishName: "Alfonsinos, Fangtooths, and Spiny-jawed Fishes",
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
      { rank: "order", name: "Beryciformes", nameBn: "বেরিসিফর্মিস" }
    ],
    shortDescription: {
      en: "Basal spiny-rayed marine teleosts characterized by retaining an orbitosphenoid cranial bone, crimson-red coloration in deep taxa, and extreme dental adaptations in the legendary deep-sea Fangtooth.",
      bn: "আদিম কাঁটাময় সামুদ্রিক মাছ; যাদের করোটিতে অরবিটস্ফেনয়েড হাড় থাকে, গভীর পানির প্রজাতিগুলো লাল রঙের এবং এদের মধ্যে বিখ্যাত ফ্যানটুথ মাছের সবচেয়ে বড় শিকারী দাঁত রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Retention of a primitive orbitosphenoid bone in cranium; pelvic fins thoracic or subabdominal with 1 spine and 5–10 soft rays; prominent ctenoid scales; dorsal fin with 3–12 strong spines; the Fangtooth (*Anoplogaster cornuta*) possesses disproportionately gigantic fang-like teeth that fit into sockets in the skull roof when the mouth closes; includes suborder Holocentroidei (squirrelfishes) in Eschmeyer (2026).",
      bn: "মাথার খুলিতে আদিম অরবিটস্ফেনয়েড হাড় বিদ্যমান; শ্রোণীপাখনায় ১টি কাঁটা ও ৫-১০টি নরম রশ্মি; শক্ত টিনয়েড আঁইশ; পৃষ্ঠপাখনায় ৩-১২টি ধারালো কাঁটা; ফ্যানটুথ মাছের দেহের অনুপাতে সবচেয়ে বিশালাকার দাঁত থাকে যা মুখ বন্ধ করার সময় খুলির বিশেষ গর্তে ঢুকে যায়; এশমেয়ার (২০২৬) অনুসারে স্কুইরেলফিশও এর অন্তর্ভুক্ত।",
      keyFeatures: {
        en: [
          "Retention of primitive orbitosphenoid cranial bone lost in higher acanthomorphs",
          "Fangtooth (Anoplogaster) possesses the largest teeth relative to body size of any marine animal",
          "Pelvic fins possessing more than five soft rays (6 to 10 soft rays)",
          "Bright crimson red body coloration in commercial bathyal alfonsinos"
        ],
        bn: [
          "উন্নত কাঁটাময় মাছে অনুপস্থিত আদিম অরবিটস্ফেনয়েড খুলি-অস্থির উপস্থিতি",
          "দেহের আকারের তুলনায় ফ্যানটুথ মাছের দাঁত যেকোনো সামুদ্রিক প্রাণীর চেয়ে বড়",
          "শ্রোণীপাখনায় ৫টির বেশি (৬ থেকে ১০টি) নরম রশ্মি",
          "বাণিজ্যিক গভীর সমুদ্রের আলফনসিনো মাছে উজ্জ্বল লাল বর্ণ"
        ]
      }
    },
    habitat: {
      en: "Bathypelagic depths down to 5,000 meters (Fangtooth) and deep-sea rocky banks (Alfonsinos), plus shallow tropical coral reefs (Squirrelfishes).",
      bn: "৫,০০০ মিটার অতল সমুদ্রের গভীরতা থেকে শুরু করে মহীঢাল এবং অগভীর প্রবাল প্রাচীর।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "High-trophic bathypelagic apex micropredators in the deep sea and nocturnal foragers on tropical coral reefs.",
      bn: "গভীর সমুদ্রের শীর্ষ শিকারী এবং অগভীর প্রবাল প্রাচীরের নিশাচর শিকারী প্রাণী।"
    },
    feeding: {
      en: "Carnivorous: fangtooths impale bathypelagic fishes and squids; alfonsinos feed on lanternfishes and pelagic decapods; reef beryciforms eat crabs.",
      bn: "মাংসাশী; ফ্যানটুথ গভীর পানির মাছ ও স্কুইড শিকার করে; আলফনসিনো লণ্ঠন মাছ ও চিংড়ি খায়।"
    },
    reproduction: {
      en: "Pelagic broadcast spawning. Fangtooth larvae undergo dramatic metamorphic remodeling from tiny, spiny surface forms into deep-sea adults.",
      bn: "উন্মুক্ত সাগরে ডিম ছড়ায়। ফ্যানটুথের লার্ভা পৃষ্ঠভাগে বাস করে এবং রূপান্তরের পর গভীর অতলে চলে যায়।"
    },
    distribution: {
      en: "Circumglobal across tropical, subtropical, and temperate oceans. Inhabits deep offshore banks of the northern Indian Ocean.",
      bn: "বিশ্বের সকল ক্রান্তীয় ও নাতিশীতোষ্ণ গভীর সমুদ্রে বিস্তৃত। ভারত মহাসাগরে এদের উপস্থিতি রয়েছে।"
    },
    importantFamilies: [
      {
        name: "Berycidae",
        commonEn: "Alfonsinos",
        commonBn: "আলফনসিনো গোত্র",
        diagnosticEn: "Deep compressed red bodies, large eyes, forked tail, commercial food fishes; includes Beryx.",
        diagnosticBn: "উজ্জ্বল লাল শরীর, বড় চোখ, সুস্বাদু বাণিজ্যিক মাছ; Beryx গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Anoplogastridae",
        commonEn: "Fangtooths",
        commonBn: "ফ্যানটুথ গোত্র",
        diagnosticEn: "Massive fangs fitting into skull roof pockets, black armored body; single genus Anoplogaster.",
        diagnosticBn: "বিশালাকার ভয়ংকর দাঁত, কালো বর্মসদৃশ আঁইশ; Anoplogaster গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Beryx, Anoplogaster, and Melamphaes. Key binomials: Beryx decadactylus Cuvier, 1829 and Anoplogaster cornuta (Valenciennes, 1833).",
      bn: "গণ: Beryx, Anoplogaster এবং Melamphaes। প্রধান নাম: Beryx decadactylus Cuvier, 1829 এবং Anoplogaster cornuta (Valenciennes, 1833)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Alfonsino (Beryx decadactylus), Common Fangtooth (Anoplogaster cornuta), Splendid Alfonsino (Beryx splendens), and Shorthorn Fangtooth (Anoplogaster brachycera).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: আলফনসিনো (Beryx decadactylus), কমন ফ্যানটুথ (Anoplogaster cornuta), স্প্লেনডিড আলফনসিনো (Beryx splendens) এবং শর্টহর্ন ফ্যানটুথ (Anoplogaster brachycera)।"
    },
    additionalInformation: {
      en: "The Fangtooth (Anoplogaster cornuta) holds the record for having the largest teeth relative to body size of any fish, requiring specialized hollow sockets in the roof of its skull to close its jaws without piercing its brain.",
      bn: "ফ্যানটুথ মাছের দাঁত এতটাই বড় যে মুখ বন্ধ করার সময় মস্তিষ্ক যেন বিদ্ধ না হয় সেজন্য খুলির ভেতরে বিশেষ পকেট রয়েছে।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Moore (1993)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 25. Ophidiiformes
  {
    id: "order-ophidiiformes",
    taxonId: "taxon-ophidiiformes",
    rank: "order",
    scientificName: "Ophidiiformes",
    bengaliName: "ওফিডিফর্মিস (কাস্ক-ইল, ব্রোটুলা ও মুক্তামাছ)",
    englishName: "Cusk-eels, Brotulas, and Pearlfishes",
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
      { rank: "order", name: "Ophidiiformes", nameBn: "ওফিডিফর্মিস" }
    ],
    shortDescription: {
      en: "Slender, eel-like benthic and inquiline marine teleosts with continuous dorsal and anal fins, jugular pelvic rays on the throat, and holding the world record for the deepest living fish.",
      bn: "সর্পিল তলদেশীয় ও পরজীবী সামুদ্রিক মাছ; যাদের পিঠ ও পায়ুপাখনা লেজের সাথে একটানা যুক্ত, গলার নিচে গোঁফের মতো শ্রোণীপাখনা এবং পৃথিবীর গভীরতম স্থানে বেঁচে থাকার রেকর্ড রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body slender, elongate, and tapering; dorsal and anal fins very long, continuous and confluent with the reduced caudal fin; pelvic fins reduced to 1 or 2 slender rays situated forward under the throat (jugular) or chin (mental); swimbladder modified with specialized sonic muscles; Pearlfishes (Carapidae) possess a slender naked body and live as inquiline symbionts inside sea cucumbers; holds deepest fish record (*Abyssobrotula galatheae* taken at 8,370 m depth).",
      bn: "লম্বা সরু সর্পিল দেহ; পৃষ্ঠ ও পায়ুপাখনা দীর্ঘ এবং লেজের সাথে একটানা সংযুক্ত; শ্রোণীপাখনা গলার নিচে ১ বা ২টি সুতোর মতো রশ্মিতে রূপান্তরিত; পটকায় শব্দ তৈরির বিশেষ পেশী থাকে; মুক্তামাছ (Carapidae) সামুদ্রিক শসা (সি-কিউকাম্বার)-এর শরীরের ভেতর বাস করে; আবাইসোব্রোটুলা সমুদ্রের ৮,৩৭০ মিটার গভীরে জীবিত থাকার বিশ্বরেকর্ডধারী।",
      keyFeatures: {
        en: [
          "Pelvic fins reduced to 1 or 2 sensory rays positioned beneath throat or chin",
          "Continuous dorsal and anal fins confluent with minute caudal fin",
          "Inquiline commensalism and parasitism inside holothurians in Carapidae (pearlfishes)",
          "Deepest collected vertebrate species on Earth (Abyssobrotula galatheae at 8,370 m)"
        ],
        bn: [
          "গলার নিচে অবস্থিত ১ বা ২টি সংবেদনশীল সুতোর মতো শ্রোণীপাখনা",
          "লেজের সাথে মিশে থাকা দীর্ঘ অবিচ্ছিন্ন পৃষ্ঠ ও পায়ুপাখনা",
          "মুক্তামাছের সামুদ্রিক শসার দেহের ভেতর প্রবেশ করে সহাবস্থান বা পরজীবী জীবন",
          "পৃথিবীর গভীরতম স্থানে (৮,৩৭০ মিটার) সংগৃহীত মেরুদণ্ডী প্রাণী (Abyssobrotula galatheae)"
        ]
      }
    },
    habitat: {
      en: "Marine benthic habitats from intertidal coral reefs and sand bottoms down to abyssal plains and hadal oceanic trenches (0–8,370 m depth).",
      bn: "উপকূলীয় প্রবাল প্রাচীর থেকে শুরু করে অতল সমুদ্রের অতল স্পর্শী ট্রেঞ্চ (০–৮,৩৭০ মিটার গভীরতা পর্যন্ত)।",
      systems: ["marine"]
    },
    ecosystem: {
      en: "Dominant benthic predators on bathyal and abyssal sediment slopes; pearlfishes exhibit specialized endosymbiosis in reef invertebrates.",
      bn: "গভীর সমুদ্রের নরম তলদেশের প্রধান শিকারী; মুক্তামাছ প্রবাল প্রাচীরের অমেরুদণ্ডী প্রাণীর সাথে মিথোজীবী সম্পর্ক রাখে।"
    },
    feeding: {
      en: "Carnivorous scavengers and predators, feeding on polychaetes, decapods, and fishes. Parasitic carapids consume the internal gonads and gills of host sea cucumbers.",
      bn: "মাংসাশী ও পরজীবী; তলদেশের কীট ও মাছ খায়; পরজীবী মুক্তামাছ ধারক সি-কিউকাম্বারের ফুলকা ও প্রজনন অঙ্গ খেয়ে বেঁচে থাকে।"
    },
    reproduction: {
      en: "Both oviparous and viviparous. Bythitidae species have internal fertilization via an copulatory intromittent organ, giving birth to live young; carapids have vexillifer larvae.",
      bn: "ডিম্বপ্রসবকারী ও জরায়ুজ উভয়ই। অনেক প্রজাতি সরাসরি জীবিত বাচ্চা প্রসব করে; কারাপিডি গোত্রের অদ্ভুত ভেক্সিলিফার লার্ভা থাকে।"
    },
    distribution: {
      en: "Worldwide in all oceans from shallow reefs to the deepest hadal trenches. Brotula multibarbata occurs in northern Indian Ocean and Bay of Bengal waters.",
      bn: "বিশ্বের সকল মহাসাগরে বিস্তৃত। ব্রোটুলা মাছ (Brotula multibarbata) বঙ্গোপসাগরের গভীর তলদেশে পাওয়া যায়।"
    },
    importantFamilies: [
      {
        name: "Ophidiidae",
        commonEn: "Cusk-eels",
        commonBn: "কাস্ক-ইল গোত্র",
        diagnosticEn: "Scales present, pelvic fins under chin, oviparous, includes deep abyssal forms; includes Ophidion.",
        diagnosticBn: "আঁইশযুক্ত, থুতনির নিচে শ্রোণী রশ্মি, ডিম পাড়ে; Ophidion গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Carapidae",
        commonEn: "Pearlfishes",
        commonBn: "মুক্তামাছ গোত্র",
        diagnosticEn: "Scaleless, translucent, anus placed far forward, inquilines in sea cucumbers; includes Carapus.",
        diagnosticBn: "স্বচ্ছ আঁইশহীন দেহ, সি-কিউকাম্বারের পায়ুপথ দিয়ে ভেতরে ঢুকে বাস করে; Carapus গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Brotula, Ophidion, Carapus, and Abyssobrotula. Key binomials: Brotula multibarbata Temminck & Schlegel, 1846 and Abyssobrotula galatheae Nielsen, 1977.",
      bn: "গণ: Brotula, Ophidion, Carapus এবং Abyssobrotula। প্রধান নাম: Brotula multibarbata Temminck & Schlegel, 1846 এবং Abyssobrotula galatheae Nielsen, 1977।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Goatsbeard Brotula (Brotula multibarbata), Pearlfish (Carapus acus), Abyssal Cusk-eel (Abyssobrotula galatheae), and Snake Cusk-eel (Ophidion barbatum).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: গোটসবার্ড ব্রোটুলা (Brotula multibarbata), পার্লফিশ বা মুক্তামাছ (Carapus acus), অতল সাগরের কাস্ক-ইল (Abyssobrotula galatheae) এবং স্নেক কাস্ক-ইল (Ophidion barbatum)।"
    },
    additionalInformation: {
      en: "Abyssobrotula galatheae collected in the Puerto Rico Trench at 8,370 meters depth holds the official verified scientific record for the deepest-dwelling fish ever found on Earth.",
      bn: "পুয়ের্তো রিকো ট্রেঞ্চের ৮,৩৭০ মিটার গভীর থেকে সংগৃহীত আবাইসোব্রোটুলা পৃথিবীর সর্বাধিক গভীরতায় বসবাসকারী মাছের বৈজ্ঞানিক স্বীকৃতিপ্রাপ্ত।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Nielsen et al. (1999)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 26. Batrachoidiformes
  {
    id: "order-batrachoidiformes",
    taxonId: "taxon-batrachoidiformes",
    rank: "order",
    scientificName: "Batrachoidiformes",
    bengaliName: "বাট্রাকয়ডিফর্মিস (টডফিশ বা কোলাব্যাঙ মাছ)",
    englishName: "Toadfishes and Midshipmen",
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
      { rank: "order", name: "Batrachoidiformes", nameBn: "বাট্রাকয়ডিফর্মিস" }
    ],
    shortDescription: {
      en: "Bottom-dwelling ambush predatory marine teleosts with broad depressed heads, wide frog-like mouths, venomous spines in some taxa, and sonic swimbladders producing loud vocalizations.",
      bn: "তলদেশীয় শিকারী সামুদ্রিক মাছ; যাদের চওড়া ব্যাঙের মতো মাথা, প্রশস্ত মুখ, কিছু প্রজাতিতে বিষাক্ত কাঁটা এবং শব্দ তৈরির পটকা থাকে যার মাধ্যমে এরা জোরে ডাকাডাকি করতে পারে।"
    },
    diagnosticCharacteristics: {
      en: "Head large, broad, and dorsoventrally depressed; mouth very wide, armed with stout conical teeth; pelvic fins jugular, inserted well forward of broad fan-like pectoral fins; first dorsal fin small with 2–3 stout sharp spines (hollow and connected to venom glands in Thalassophryninae); second dorsal and anal fins long; skin naked or covered in small cycloid scales; sonic swimbladder muscles capable of contracting hundreds of times per second to generate loud grunts, boatwhistles, and hums; midshipmen (*Porichthys*) have rows of luminous photophores.",
      bn: "মাথা চ্যাপ্টা ও অত্যন্ত চওড়া; মুখ ব্যাঙের মতো প্রশস্ত ও শক্ত দাঁতযুক্ত; বক্ষপাখনার আগে গলার নিচে শ্রোণীপাখনা অবস্থিত; প্রথম পৃষ্ঠপাখনায় ২–৩টি শক্ত কাঁটা (কিছু প্রজাতিতে বিষগ্রন্থিযুক্ত ফাঁপা বিষাক্ত কাঁটা); শব্দ উৎপাদনকারী পটকার পেশী সেকেন্ডে শতবার স্পন্দিত হয়ে তীব্র গর্জন ও ভোঁ শব্দের গান তৈরি করতে পারে; পোরিকথিস গণে উজ্জ্বল আলো নির্গমনকারী ফটোফোর থাকে।",
      keyFeatures: {
        en: [
          "Superfast sonic muscles on the swimbladder producing audible vocal 'boatwhistles' and hums",
          "Hollow venomous dorsal and opercular spines in Thalassophryne",
          "Broad depressed head and jugular pelvic fins placed anterior to pectorals",
          "Multiple rows of bioluminescent photophores in midshipmen (Porichthys)"
        ],
        bn: [
          "পটকার পেশীর দ্রুত কম্পন দ্বারা তীব্র ভোঁ শব্দ ও গান তৈরির ক্ষমতা",
          "থালাসোফ্রিন গণে ফাঁপা কাঁটার ভেতর দিয়ে বিষ ঢালার ব্যবস্থা",
          "চওড়া ব্যাঙের মতো মাথা ও বক্ষপাখনার সামনে গলার নিচে শ্রোণীপাখনা",
          "পোরিকথিস মাছে শরীরে সারিবদ্ধ আলো নির্গমনকারী ফটোফোরের উপস্থিতি"
        ]
      }
    },
    habitat: {
      en: "Marine benthic littoral zones, estuaries, muddy bays, sandy continental shelves, and tropical freshwater rivers.",
      bn: "উপকূলীয় সমুদ্র, মোহনা, কর্দমাক্ত উপসাগর এবং ক্রান্তীয় মিঠাপানির নদী।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Cryptic ambush predators concealing themselves beneath mud or rock shelters, regulating populations of crabs, shrimp, and small benthic fishes.",
      bn: "পাথর ও কাদার নিচে ওত পেতে থাকা শিকারী; কাঁকড়া, চিংড়ি ও ছোট মাছ শিকার করে।"
    },
    feeding: {
      en: "Carnivorous suction-feeders, snapping up decapod crabs, molluscs, worms, and demersal teleosts with explosive jaw expansion.",
      bn: "মাংসাশী; শক্ত খোলসের কাঁকড়া, শামুক ও ছোট মাছ গিলে খায়।"
    },
    reproduction: {
      en: "Oviparous with paternal care. Males vocalize to attract females into rocky burrows; females attach large adhesive eggs to the roof of the nest; males fiercely guard eggs and fry.",
      bn: "পুরুষ মাছ সুর করে ডেকে ডেকে স্ত্রী মাছকে পাথরের বাসায় আকর্ষণ করে; স্ত্রী মাছ বাসার ছাদে ডিম সেঁটে দিলে পুরুষ মাছ তা পাহারা দেয়।"
    },
    distribution: {
      en: "Coastal waters of the Americas, Africa, the Mediterranean, and the Indo-West Pacific. Present in the northern Indian Ocean.",
      bn: "আটলান্টিক, ভূমধ্যসাগর এবং ভারত ও প্রশান্ত মহাসাগরের উপকূলীয় জলসীমায় বিস্তৃত।"
    },
    importantFamilies: [
      {
        name: "Batrachoididae",
        commonEn: "Toadfishes",
        commonBn: "টডফিশ গোত্র",
        diagnosticEn: "Single family containing all toadfishes and midshipmen with about 83 recognized species.",
        diagnosticBn: "একমাত্র পরিবার; প্রায় ৮৩টি প্রজাতিসহ সকল টডফিশ ও মিডশিপম্যান অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Opsanus, Porichthys, Thalassophryne, and Batrachoides. Key binomials: Opsanus tau (Linnaeus, 1766) and Porichthys notatus Girard, 1854.",
      bn: "গণ: Opsanus, Porichthys, Thalassophryne এবং Batrachoides। প্রধান নাম: Opsanus tau (Linnaeus, 1766) এবং Porichthys notatus Girard, 1854।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Oyster Toadfish (Opsanus tau), Plainfin Midshipman (Porichthys notatus), Venomous Toadfish (Thalassophryne amazonica), and Lusitanian Toadfish (Halobatrachus didactylus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: অয়েস্টার টডফিশ (Opsanus tau), প্লেইনফিন মিডশিপম্যান (Porichthys notatus), বিষাক্ত টডফিশ (Thalassophryne amazonica) এবং লুসিটানিয়ান টডফিশ (Halobatrachus didactylus)।"
    },
    additionalInformation: {
      en: "Plainfin Midshipman males sing continuous nocturnal hums exceeding 100 Hz for hours to court females, a neuroethological model for human acoustic motor patterning.",
      bn: "মিডশিপম্যান মাছের গান এত উচ্চশব্দের হয় যে তা উপকূলে থাকা হাউসবোটের ভেতর স্পষ্ট শোনা যায়; স্নায়ুবিজ্ঞানে এটি অত্যন্ত গুরুত্বপূর্ণ মডেল।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Collette (1966)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 27. Gobiiformes
  {
    id: "order-gobiiformes",
    taxonId: "taxon-gobiiformes",
    rank: "order",
    scientificName: "Gobiiformes",
    bengaliName: "গোবিফর্মিস (বেলে মাছ, কাদা-হাঁটা পেরিওফথ্যালমাস ও স্লিপার)",
    englishName: "Gobies, Mudskippers, Sleepers, and Nurseryfishes",
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
      { rank: "order", name: "Gobiiformes", nameBn: "গোবিফর্মিস" }
    ],
    shortDescription: {
      en: "One of the most diverse vertebrate orders on Earth (>2,200 species), characterized by pelvic fins united into a ventral suction cup, amphibious mudskippers that walk on land, and tiny freshwater and reef gobies.",
      bn: "পৃথিবীর সর্বাধিক প্রজাতিসমৃদ্ধ মেরুদণ্ডী বর্গগুলোর অন্যতম (>২,২০০ প্রজাতি); যাদের পেটের নিচের শ্রোণীপাখনা চোষক বা কাপে রূপান্তরিত, ডাঙ্গায় হেঁটে চলা উভচর কাদা-হাঁটা পেরিওফথ্যালমাস (মাডস্কিপার) এবং বিভিন্ন মিষ্টি ও নোনা পানির বেলে মাছ এর অন্তর্ভুক্ত।"
    },
    diagnosticCharacteristics: {
      en: "Small to moderate teleosts; pelvic fins typically united medially into a ventral thoracic sucking disc used to adhere to rocks and substrate (separate in Eleotridae); head usually scaleless; two separate dorsal fins (first with flexible spines); swimbladder absent in benthic adults; lateral line sensory canal represented by pit organs on head; mudskippers (Oxudercidae) possess vascularized buccal cavities and stalked periscopic eyes for terrestrial respiration and walking on intertidal mudflats.",
      bn: "ছোট বা মাঝারি মাছ; পেটের নিচের শ্রোণীপাখনা জোড়া লেগে গোল চোষক ডিস্ক তৈরি করে যা দিয়ে পাথরে আটকে থাকে (স্লিপার মাছে পৃথক); মাথা সাধারণত আঁইশহীন; দুটি পৃথক পৃষ্ঠপাখনা; প্রাপ্তবয়স্কদের পটকা থাকে না; সুন্দরবনের মাডস্কিপার মাছের চোখ মাথার উপরে পেরিস্কোপের মতো উঁচু এবং এরা ফুলকার প্রকোষ্ঠে পানি জমিয়ে রেখে ডাঙ্গায় ও শ্বাস নিয়ে বুকে ভর দিয়ে হাঁটতে পারে।",
      keyFeatures: {
        en: [
          "Pelvic fins fused into a ventral cup-like sucking disc (in Gobiidae)",
          "Amphibious mudskippers (Periophthalmus) walking and breathing out of water on mangrove mudflats",
          "Two separate dorsal fins with slender flexible spines in the first",
          "Includes the world's smallest vertebrates (Pandaka and Paedocypris relatives)"
        ],
        bn: [
          "শ্রোণীপাখনা জোড়া লেগে পেটের নিচে চোষক বা কাপ তৈরি করে",
          "ম্যানগ্রোভের কাদা এবং ডাঙ্গায় হেঁটে চলা ও শ্বাস নিতে পারা উভচর মাডস্কিপার মাছ",
          "দুটি পৃথক পৃষ্ঠপাখনা যার প্রথমটিতে নমনীয় কাঁটা থাকে",
          "বিশ্বের ক্ষুদ্রতম মেরুদণ্ডী মাছগুলোর অন্যতম"
        ]
      }
    },
    habitat: {
      en: "Extreme ecological ubiquity: coastal marine coral reefs, mangrove intertidal mudflats, estuaries, tidal creeks, freshwater rivers, mountain torrents, and desert springs.",
      bn: "উপকূলীয় প্রবাল প্রাচীর, সুন্দরবনের ম্যানগ্রোভ কাদাভূমি, নদীর মোহনা, খাল-বিল, মিঠাপানির নদী ও পাহাড়ি ঝর্ণা।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Critical keystone primary consumers and micropredators on reefs and mangrove flats; mudskippers aerate intertidal mud by digging deep burrows in the Sundarbans.",
      bn: "ম্যানগ্রোভ ও প্রবাল প্রাচীরের অপরিহার্য বাস্তুতাত্ত্বিক প্রাণী; সুন্দরবনের কাদা খুঁড়ে মাডস্কিপার মাছ মাটিতে বাতাস চলাচলে সাহায্য করে।"
    },
    feeding: {
      en: "Diverse omnivores, detritivores, and carnivores; scraping benthic diatom films, hunting amphipods, or sifting meiofauna from mud.",
      bn: "সর্বভুক ও শিকারী; ডায়াটম শৈবাল চেঁছে খায়, পোকা ও ক্ষুদ্র কাঁকড়া শিকার করে।"
    },
    reproduction: {
      en: "Demersal nest guarders; males defend burrows or shells where adhesive eggs are laid, aerating them until hatching.",
      bn: "কাদার গর্ত বা শক্ত খোলায় আঠালো ডিম পাড়ে; পুরুষ মাছ যত্নসহকারে ডিম পাহারা দেয়।"
    },
    distribution: {
      en: "Circumglobal in tropical, subtropical, and temperate waters. Enormously diverse and abundant in Bangladesh (Sundarbans mudflats and inland freshwaters).",
      bn: "সারা বিশ্বে বিস্তৃত। বাংলাদেশ ও সুন্দরবনে এদের বিপুল প্রজাতি পাওয়া যায় (যেমন বেলে মাছ, ডাহুক বা মাডস্কিপার)।"
    },
    importantFamilies: [
      {
        name: "Gobiidae",
        commonEn: "True Gobies",
        commonBn: "বেলে মাছ গোত্র",
        diagnosticEn: "Pelvic fins united into a sucking disc, dominant reef and river fishes; includes Glossogobius.",
        diagnosticBn: "শ্রোণীপাখনা জোড়া লেগে চোষক তৈরি করে; Glossogobius (বেলে) গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Oxudercidae",
        commonEn: "Mudskippers & Relatives",
        commonBn: "মাডস্কিপার বা কাদা-হাঁটা মাছ গোত্র",
        diagnosticEn: "Amphibious air-breathers, periscopic eyes, muscular arm-like pectoral fins; includes Periophthalmus.",
        diagnosticBn: "ডাঙ্গায় হাঁটতে পারে, চোখের পাতাযুক্ত উঁচু চোখ, বাহুর মতো শক্তিশালী বক্ষপাখনা; Periophthalmus অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Glossogobius, Periophthalmus, Boleophthalmus, Eleotris, and Apogon. Key binomials: Glossogobius giuris (Hamilton, 1822) and Boleophthalmus boddarti (Pallas, 1770).",
      bn: "গণ: Glossogobius, Periophthalmus, Boleophthalmus, Eleotris এবং Apogon। প্রধান নাম: Glossogobius giuris (Hamilton, 1822) এবং Boleophthalmus boddarti (Pallas, 1770)।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Tank Goby / Bele Machh (Glossogobius giuris - native to Bangladesh), Boddart's Mudskipper (Boleophthalmus boddarti - native to Bangladesh), Barred Mudskipper (Periophthalmus barbarus), and Pointed-tail Goby (Pseudapocryptes lanceolatus - native to Bangladesh).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: বেলে মাছ (Glossogobius giuris - বাংলাদেশে প্রাপ্ত), বোডার্স মাডস্কিপার (Boleophthalmus boddarti - সুন্দরবনে প্রাপ্ত), ব্যারেড মাডস্কিপার (Periophthalmus barbarus) এবং চ্যাওয়া বা পয়েন্টেড-টেইল গোবি (Pseudapocryptes lanceolatus - বাংলাদেশে প্রাপ্ত)।"
    },
    additionalInformation: {
      en: "Glossogobius giuris (Tank Goby or Bele) is a major commercial food fish across rural Bangladesh, while mudskippers represent one of nature's finest demonstrations of vertebrate terrestrial adaptation.",
      bn: "বেলে মাছ (Glossogobius giuris) বাংলাদেশের গ্রামীণ মানুষের অত্যন্ত জনপ্রিয় পুষ্টিকর খাদ্য মাছ এবং মাডস্কিপার মাছ ডাঙ্গায় চলাচলের জীবন্ত উদাহরণ।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Thacker (2009)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 28. Carangiformes
  {
    id: "order-carangiformes",
    taxonId: "taxon-carangiformes",
    rank: "order",
    scientificName: "Carangiformes",
    bengaliName: "কারাঞ্জিফর্মিস (জ্যাক, চান্দা/পম্পানো, রেমোরা, বিলফিশ ও ফ্ল্যাটফিশ)",
    englishName: "Jacks, Pompanos, Remoras, Billfishes, and Flatfishes",
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
      { rank: "order", name: "Carangiformes", nameBn: "কারাঞ্জিফর্মিস" }
    ],
    shortDescription: {
      en: "A massive, diverse global marine clade recognized by modern phylogenomics (Eschmeyer 2026), uniting powerful pelagic jacks and pompanos, hitchhiking sucker-bearing remoras, billfishes (sailfishes and marlins), and asymmetric flatfishes (Pleuronectoidei).",
      bn: "আধুনিক ফাইলোজেনোমিক্স ও এশমেয়ার (২০২৬) দ্বারা সংজ্ঞায়িত সুবিশাল সামুদ্রিক মাছের বর্গ; যার মধ্যে রয়েছে শক্তিশালী দ্রুতগামী জ্যাক ও পম্পানো মাছ, চোষকযুক্ত রেমোরা, বর্শামুখো সেইলফিশ বা মার্লিন এবং একপাশে চোখ ঘোরা চ্যাপ্টা ফ্ল্যাটফিশ (চান্দা বা পাতামাছ)।"
    },
    diagnosticCharacteristics: {
      en: "Morphologically diverse clade united by genomic synapomorphies (Carangaria); jacks have narrow caudal peduncles with lateral scutes and carangiform fast swimming; remoras (Echeneidae) have the dorsal fin transformed into a cephalic lamellar sucking disc; billfishes (Istiophoridae, Xiphiidae) possess spear-like rostrums; flatfishes (suborder Pleuronectoidei) undergo cranial ontogenetic metamorphosis where one eye migrates to the opposite side, creating complete cranial asymmetry.",
      bn: "জিনতত্ত্ব দ্বারা সমন্বিত সুবিশাল মাছের দল; জ্যাক মাছের লেজের গোড়ায় শক্ত খাঁজকাটা আঁইশ থাকে; রেমোরা মাছের মাথার উপরে পিঠের পাখনা চোষক ডিস্কে রূপান্তরিত যা দিয়ে এরা হাঙ্গর ও তিমির গায়ে সেঁটে থাকে; বিলফিশদের মুখ বর্শার মতো সূঁচালো; এবং ফ্ল্যাটফিশ উপবর্গে লার্ভা অবস্থায় একপাশের চোখ ঘুরে অন্যপাশে চলে এসে সম্পূর্ণ অপ্রতিসম চ্যাপ্টা শরীরে পরিণত হয়।",
      keyFeatures: {
        en: [
          "Cephalic lamellar suction disc derived from dorsal fin in remoras (Echeneidae)",
          "Cranial eye-migration creating asymmetric bottom-dwelling morphology in flatfishes (Pleuronectoidei)",
          "Elongate spearlike rostrum and high-speed pelagic cruising in billfishes (Istiophoridae)",
          "Lateral keels and fortified scutes along the caudal peduncle in jacks (Carangidae)"
        ],
        bn: [
          "রেমোরা মাছে হাঙ্গরের গায়ে চড়ে বেড়ানোর জন্য রূপান্তরিত মাথার চোষক ডিস্ক",
          "ফ্ল্যাটফিশের একপাশের চোখ অন্যপাশে স্থানান্তরিত হয়ে সম্পূর্ণ চ্যাপ্টা অপ্রতিসম শরীর গঠন",
          "সেইলফিশ ও মার্লিনের লম্বা বর্শার মতো মুখ এবং তীব্র গতিতে সাঁতারের ক্ষমতা",
          "জ্যাক ও পম্পানো মাছের লেজের গোড়ায় শক্ত কাঁটার মতো সারি"
        ]
      }
    },
    habitat: {
      en: "Global marine ecosystems: pelagic epipelagic blue waters, coastal reefs, surf zones, and demersal soft shelf and slope bottoms.",
      bn: "উন্মুক্ত নীল মহাসাগর, প্রবাল প্রাচীর, অগভীর উপকূল এবং সমুদ্রের তলদেশের বালুকাময় বা কর্দমাক্ত তল।",
      systems: ["marine", "brackish"]
    },
    ecosystem: {
      en: "Covers diverse ecological guilds from apex pelagic billfish predators to benthic flatfish bio-disturbers and commensal remoras hitchhiking on marine megafauna.",
      bn: "সমুদ্রের খাদ্যজালের বৈচিত্র্যময় নিয়ন্ত্রক; দ্রুতগামী শিকারী সেইলফিশ থেকে শুরু করে তলদেশের চ্যাপ্টা মাছ ও হাঙ্গরের সাথে চড়ে বেড়ানো রেমোরা।"
    },
    feeding: {
      en: "Apex macropredators, piscivores, and benthic invertivores. Trevallies and billfishes chase schooling clupeids and squids; flatfishes ambuscade buried benthic polychaetes and crabs.",
      bn: "মাংসাশী শিকারী; জ্যাক ও সেইলফিশ ছোট মাছ ও স্কুইড শিকার করে; ফ্ল্যাটফিশ বালির নিচে লুকিয়ে থেকে কাঁকড়া ও কীট ধরে।"
    },
    reproduction: {
      en: "Pelagic broadcast spawners releasing millions of floating eggs; flatfish larvae start completely symmetrical before asymmetrical metamorphosis.",
      bn: "খোলা সমুদ্রে বিপুল ডিম ছাড়ে; ফ্ল্যাটফিশের লার্ভা শুরুতে সম্পূর্ণ প্রতিসম থাকলেও পরে রূপান্তরের মাধ্যমে চোখ একপাশে সরে যায়।"
    },
    distribution: {
      en: "Circumglobal across all tropical, subtropical, and temperate oceans. Abundant and commercially critical in the Bay of Bengal and coastal Bangladesh.",
      bn: "সারা বিশ্বের উষ্ণ ও নাতিশীতোষ্ণ সাগরে বিস্তৃত। বঙ্গোপসাগর ও বাংলাদেশের মৎস্য অর্থনীতিতে অত্যন্ত গুরুত্বপূর্ণ।"
    },
    importantFamilies: [
      {
        name: "Carangidae",
        commonEn: "Jacks, Trevallies & Pompanos",
        commonBn: "জ্যাক, চান্দা ও পম্পানো গোত্র",
        diagnosticEn: "Lateral scutes on caudal peduncle, fast swimmers, two dorsal fins; includes Caranx.",
        diagnosticBn: "লেজের গোড়ায় শক্ত আঁইশ, অত্যন্ত দ্রুতগামী শিকারী মাছ; Caranx গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Cynoglossidae",
        commonEn: "Tongue Soles",
        commonBn: "জিভ মাছ বা টাং সোল গোত্র",
        diagnosticEn: "Eyes on left side of head, body tongue-shaped, fins continuous; includes Cynoglossus.",
        diagnosticBn: "চোখ মাথার বামপাশে, জিভের মতো লম্বা চ্যাপ্টা দেহ; Cynoglossus (জিভ মাছ) অন্তর্ভুক্ত।"
      },
      {
        name: "Echeneidae",
        commonEn: "Remoras / Sharksuckers",
        commonBn: "রেমোরা বা হাঙ্গর চোষক গোত্র",
        diagnosticEn: "Oval laminated sucking disc on head, attaches to sharks and whales; includes Remora.",
        diagnosticBn: "মাথায় চোষক ডিস্ক যা দিয়ে হাঙ্গর ও তিমির সাথে আটকে থাকে; Remora গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Istiophoridae",
        commonEn: "Billfishes / Sailfishes",
        commonBn: "সেইলফিশ বা মার্লিন গোত্র",
        diagnosticEn: "Upper jaw prolonged into spear, huge sail-like dorsal fin; includes Istiophorus.",
        diagnosticBn: "উপরের চোয়াল বর্শার মতো লম্বা, পালতোলা নৌকার মতো বিশাল পৃষ্ঠপাখনা; Istiophorus অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Caranx, Trachinotus, Remora, Cynoglossus, and Istiophorus. Key binomials: Caranx ignobilis (Forsskål, 1775), Cynoglossus lingua Hamilton, 1822, and Remora remora (Linnaeus, 1758).",
      bn: "গণ: Caranx, Trachinotus, Remora, Cynoglossus এবং Istiophorus। প্রধান নাম: Caranx ignobilis (Forsskål, 1775), Cynoglossus lingua Hamilton, 1822 এবং Remora remora (Linnaeus, 1758)।"
    },
    examplesSummary: {
      en: "Five verified representative examples: Giant Trevally (Caranx ignobilis - native to Bangladesh), Bengal Tongue Sole (Cynoglossus lingua - native to Bangladesh), Common Remora (Remora remora - native to Bangladesh), Indo-Pacific Sailfish (Istiophorus platypterus - native to Bangladesh), and Florida Pompano (Trachinotus carolinus).",
      bn: "পাঁচটি যাচাইকৃত প্রামাণ্য উদাহরণ: জায়ান্ট ট্রাভেলি (Caranx ignobilis - বাংলাদেশে প্রাপ্ত), জিভ মাছ বা কুত্তা মাছ (Cynoglossus lingua - বাংলাদেশে প্রাপ্ত), সাধারণ রেমোরা (Remora remora - বাংলাদেশে প্রাপ্ত), সেইলফিশ (Istiophorus platypterus - বঙ্গোপসাগরে প্রাপ্ত) এবং ফ্লোরিডা পম্পানো (Trachinotus carolinus)।"
    },
    additionalInformation: {
      en: "Under Eschmeyer's Catalog of Fishes (2026), Carangiformes encompasses flatfishes (Pleuronectoidei) based on extensive molecular phylogenomic evidence (Betancur-R. et al. 2017), while Nelson (2016) maintains Pleuronectiformes as an order.",
      bn: "এশমেয়ার (২০২৬) ও আধুনিক জিনতত্ত্ব অনুসারে ফ্ল্যাটফিশদের কারাঞ্জিফর্মিসের উপবর্গ (Pleuronectoidei) হিসেবে গণ্য করা হয়, যা ঐতিহ্যগতভাবে নেলসন (২০১৬)-এ পৃথক বর্গ হিসেবে ছিল।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Eschmeyer's Catalog of Fishes (2026); Betancur-R. et al. (2017); Girard et al. (2020)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 29. Atheriniformes
  {
    id: "order-atheriniformes",
    taxonId: "taxon-atheriniformes",
    rank: "order",
    scientificName: "Atheriniformes",
    bengaliName: "অ্যাথেরিনিফর্মিস (সিলভারসাইড ও রেইনবোফিশ)",
    englishName: "Silversides, Hardyheads, and Rainbowfishes",
    parentTaxonId: "class-actinopterygii",
    parentTaxonNodeId: "taxon-infraclass-teleostei",
    category: "fish",
    authorYear: "Rosen, 1966",
    classificationHierarchy: [
      { rank: "kingdom", name: "Animalia", nameBn: "প্রাণিজগৎ" },
      { rank: "phylum", name: "Chordata", nameBn: "কর্ডাটা" },
      { rank: "class", name: "Actinopterygii", nameBn: "রশ্মিময় পাখনাযুক্ত মাছ" },
      { rank: "subclass", name: "Actinopteri", nameBn: "অ্যাক্টিনোপ্টেরি" },
      { rank: "infraclass", name: "Teleostei", nameBn: "টেলিয়স্ট" },
      { rank: "order", name: "Atheriniformes", nameBn: "অ্যাথেরিনিফর্মিস" }
    ],
    shortDescription: {
      en: "Slender, surface-dwelling schooling fishes of coastal seas and freshwaters, characterized by two separate dorsal fins, a distinct silvery lateral band, and high pectoral fin placement.",
      bn: "উপকূলীয় সাগর ও মিঠাপানির উপরিভাগে ঝাঁক বেঁধে চলা রূপালী মাছ; যাদের দুটি পৃথক পৃষ্ঠপাখনা, দেহের পাশে চকচকে রূপালী রেখা এবং পিঠের উঁচুতে অবস্থিত বক্ষপাখনা রয়েছে।"
    },
    diagnosticCharacteristics: {
      en: "Body slender, elongate, and slightly compressed; two well-separated dorsal fins (first dorsal fin small with 2–8 flexible slender spines, second dorsal with one spine and soft rays); pectoral fins inserted high on the sides of the body; broad, prominent, reflective silvery lateral band running down the flank; pelvic fins abdominal; phallostethids possess an asymmetrical copulatory organ (priapium) beneath the throat.",
      bn: "সরু লম্বা শরীর; দুটি স্পষ্টভাবে পৃথক পৃষ্ঠপাখনা (প্রথমটিতে কয়েকটি নরম কাঁটা থাকে); বক্ষপাখনা দেহের বেশ উপরের দিকে অবস্থিত; দেহের দুই পাশ দিয়ে চকচকে রূপালী চওড়া দাগ লেজ পর্যন্ত বিস্তৃত; শ্রোণীপাখনা তলপেটের দিকে অবস্থিত; ফ্যালোস্টেথিডি গোত্রের গলার নিচে বিশেষ মিলনাঙ্গ (প্রাইয়াপিয়াম) থাকে।",
      keyFeatures: {
        en: [
          "Broad, glittering silvery longitudinal stripe running along the mid-flank",
          "Two widely separated dorsal fins with flexible spines in the first",
          "High thoracic attachment of the pectoral fins",
          "Complex copulatory priapium located under the head in priapium fishes (Phallostethidae)"
        ],
        bn: [
          "দেহের মাঝ বরাবর চকচকে রূপালী অনুদৈর্ঘ্য দাগ",
          "দুটি সুস্পষ্ট পৃথক পৃষ্ঠপাখনা যার প্রথমটিতে নরম কাঁটা বিদ্যমান",
          "দেহের উপরের দিকে উঁচুতে সংযুক্ত বক্ষপাখনা",
          "ফ্যালোস্টেথিডি মাছে গলার নিচে জটিল মিলনাঙ্গের উপস্থিতি"
        ]
      }
    },
    habitat: {
      en: "Coastal marine waters, shallow sandy surf zones, estuaries, mangrove channels, and tropical clear freshwater streams.",
      bn: "উপকূলীয় সমুদ্র, বালুকাময় ঢেউয়ের অঞ্চল, মোহনা, ম্যানগ্রোভ খাঁড়ি ও স্বচ্ছ পাহাড়ি নদী।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Surface schooling forage fishes converting zooplankton into biomass for coastal seabirds, larger teleosts, and estuarine predators.",
      bn: "পানির উপরিভাগের ঝাঁক বাঁধা খাদ্য মাছ; যা সামুদ্রিক পাখি ও বড় শিকারী মাছের প্রধান পুষ্টির উৎস।"
    },
    feeding: {
      en: "Visual surface planktivores, feeding upon calanoid copepods, cladocerans, insect pupae, and microalgae.",
      bn: "উপরিভাগের প্ল্যাঙ্কটনভোজী; কোপিপড, জলজ পোকা ও ভাসমান ক্ষুদ্র প্রাণী খায়।"
    },
    reproduction: {
      en: "Oviparous. Eggs equipped with sticky, filamentous anchoring threads that wind around aquatic vegetation and submerged roots.",
      bn: "ডিম্বপ্রসবকারী। ডিমের গায়ে আঠালো সুতো থাকে যা দিয়ে ডিম জলজ উদ্ভিদের গায়ে আটকে থাকে।"
    },
    distribution: {
      en: "Circumglobal in tropical and temperate marine and freshwaters. Atherinomorus and Hypoatherina species occur natively in coastal Bangladesh and the northern Bay of Bengal.",
      bn: "সারা বিশ্বের উষ্ণ সমুদ্রে ও মিঠাপানিতে বিস্তৃত। বাংলাদেশের উপকূলে এবং সেন্টমার্টিন দ্বীপে সিলভারসাইড মাছ প্রচুর পাওয়া যায়।"
    },
    importantFamilies: [
      {
        name: "Atherinidae",
        commonEn: "Old World Silversides",
        commonBn: "সিলভারসাইড গোত্র",
        diagnosticEn: "Silvery lateral stripe, two dorsal fins, schooling coastal and marine fishes; includes Atherina.",
        diagnosticBn: "রূপালী পার্শ্বরেখা, দুটি পৃষ্ঠপাখনা; Atherina ও Atherinomorus গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Melanotaeniidae",
        commonEn: "Rainbowfishes",
        commonBn: "রেইনবোফিশ গোত্র",
        diagnosticEn: "Colorful freshwater fishes of Australia and New Guinea, compressed deep bodies, popular aquarium fishes.",
        diagnosticBn: "অস্ট্রেলিয়ার বর্ণিল মিঠাপানির মাছ, অ্যাকোয়ারিয়ামে অত্যন্ত জনপ্রিয়; Melanotaenia গণ অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Atherina, Atherinomorus, Melanotaenia, and Menidia. Key binomials: Atherinomorus lacunosus (Forster, 1801) and Melanotaenia boesemani Allen & Cross, 1980.",
      bn: "গণ: Atherina, Atherinomorus, Melanotaenia এবং Menidia। প্রধান নাম: Atherinomorus lacunosus (Forster, 1801) এবং Melanotaenia boesemani Allen & Cross, 1980।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Hardyhead Silverside (Atherinomorus lacunosus - native to Bangladesh), Boeseman's Rainbowfish (Melanotaenia boesemani), Atlantic Silverside (Menidia menidia), and Mediterranean Sand Smelt (Atherina hepsetus).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: হার্ডিহেড সিলভারসাইড (Atherinomorus lacunosus - বাংলাদেশে প্রাপ্ত), বোজম্যান্স রেইনবোফিশ (Melanotaenia boesemani), আটলান্টিক সিলভারসাইড (Menidia menidia) এবং স্যান্ড স্মেল্ট (Atherina hepsetus)।"
    },
    additionalInformation: {
      en: "The Grunion (Leuresthes tenuis), an atheriniform silverside, is famous for beach spawning where thousands of fish completely leave the water to deposit eggs in wet sand during nighttime high tides in California.",
      bn: "গ্রুনিয়ন মাছ ক্যালিফোর্নিয়ার উপকূলে জোয়ারের সময় হাজার হাজার সংখ্যায় পানি থেকে বালুচরে উঠে এসে ডিম পেড়ে সাগরে ফিরে যায়।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Dyer & Chernoff (1996)",
    verificationStatus: "published",
    publishedStatus: true
  },

  // 30. Beloniformes
  {
    id: "order-beloniformes",
    taxonId: "taxon-beloniformes",
    rank: "order",
    scientificName: "Beloniformes",
    bengaliName: "বেলোনিফর্মিস (কাইক্কা বা নিডলফিশ, উড়ুক্কু মাছ ও হাফবিক)",
    englishName: "Needlefishes, Flyingfishes, Halfbeaks, and Ricefishes",
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
      { rank: "order", name: "Beloniformes", nameBn: "বেলোনিফর্মিস" }
    ],
    shortDescription: {
      en: "Slender surface-dwelling teleosts with elongated beaks or extraordinarily expanded wing-like pectoral fins allowing aerial gliding over the sea surface, including freshwater needlefishes and flyingfishes.",
      bn: "পানির উপরিভাগের মাছ; যাদের ঠোঁট সূঁচের মতো ধারালো অথবা বক্ষপাখনা ডানা মেলে উড়ে চলার মতো বিশালাকার, যার মধ্যে দেশি কাইক্কা মাছ এবং সাগরের উড়ুক্কু মাছ অন্তর্ভুক্ত।"
    },
    diagnosticCharacteristics: {
      en: "Body slender, elongate, and silvery with greenish dorsum; lower pharyngeal bones completely fused into a single triangular toothplate; dorsal and anal fins placed far back near tail; no spiny rays; jaws elongated into slender toothed beaks in needlefishes (both jaws) and halfbeaks (lower jaw only); pectoral fins enormously enlarged into wing-like aerofoils enabling gliding flights up to 400 meters in flyingfishes (Exocoetidae); bones and flesh often tinted bright green by biliverdin.",
      bn: "লম্বা সরু রূপালী শরীর ও সবুজাভ পিঠ; গলবিলের নিচের হাড়গুলো জোড়া লেগে একক ত্রিভুজাকার প্লেট গঠন করে; পৃষ্ঠ ও পায়ুপাখনা লেজের কাছে অবস্থিত; কাইক্কা মাছে উভয় চোয়াল ধারালো দাঁতসহ লম্বা চঞ্চুর মতো এবং হাফবিকে কেবল নিচের চোয়াল লম্বা; উড়ুক্কু মাছে বক্ষপাখনা ডানার মতো বিশালাকার যা দিয়ে সাগরের উপর ৪০০ মিটার পর্যন্ত উড়ে যেতে পারে; হাড় বিলিভার্ডিন রঞ্জকের কারণে সবুজ রঙের হয়।",
      keyFeatures: {
        en: [
          "Elongated toothed beak in needlefishes (Belonidae) used for high-speed prey impalement",
          "Wing-like pectoral and pelvic fins enabling sustained aerial gliding in flyingfishes (Exocoetidae)",
          "Fused lower pharyngeal bones forming an efficient crushing dental plate",
          "Bright green bones and connective tissues colored by the bile pigment biliverdin"
        ],
        bn: [
          "কাইক্কা মাছে শিকার গাঁথার জন্য ধারালো দাঁতযুক্ত লম্বা সূঁচালো ঠোঁট",
          "উড়ুক্কু মাছে ডানা মেলে সাগরের বুকে ভেসে থাকার জন্য বিশালাকার পাখনা",
          "গলবিলের হাড় জোড়া লেগে খাবার পেষণকারী শক্ত দাঁতের প্লেট গঠন",
          "বিলিভার্ডিন রঞ্জক জমার কারণে হাড় উজ্জ্বল সবুজ রঙের হওয়া"
        ]
      }
    },
    habitat: {
      en: "Epipelagic marine open oceans, coastal lagoons, mangrove creeks, freshwater rivers, floodplain beels, and rice paddies.",
      bn: "উন্মুক্ত মহাসাগরীয় পৃষ্ঠভাগ, উপকূল, সুন্দরবনের খাঁড়ি, দেশের হাওর-বিল ও মিঠাপানির নদী।",
      systems: ["marine", "brackish", "freshwater"]
    },
    ecosystem: {
      en: "Surface-skimming predators and mid-trophic epipelagic links; flyingfishes leap into the air to escape charging apex tunas, dolphins, and billfishes.",
      bn: "পানির উপরিভাগের শিকারী মাছ; টুনা ও ডলফিনের হাত থেকে বাঁচতে উড়ুক্কু মাছ আকাশে উড়ে ডানা মেলে।"
    },
    feeding: {
      en: "Carnivorous surface hunters. Needlefishes slash through schools of small minnows and clupeids; flyingfishes consume zooplankton; halfbeaks eat surface insects.",
      bn: "মাংসাশী শিকারী; কাইক্কা মাছ ছোট মাছ শিকার করে এবং উড়ুক্কু মাছ ভাসমান প্ল্যাঙ্কটন খায়।"
    },
    reproduction: {
      en: "Oviparous or viviparous. Eggs have long adhesive filaments that anchor onto floating sargassum seaweed, drift debris, or submerged aquatic plants.",
      bn: "ডিম্বপ্রসবকারী বা জরায়ুজ। ডিমের গায়ে লম্বা আঠালো সুতো থাকে যা ভাসমান শৈবাল বা জলজ উদ্ভিদে আটকে থাকে।"
    },
    distribution: {
      en: "Worldwide in tropical and warm temperate seas and freshwaters. Xenentodon cancila (Kaikka) is ubiquitous and native across all rivers and wetlands of Bangladesh.",
      bn: "সারা বিশ্বের উষ্ণ সাগরে ও মিঠাপানিতে বিস্তৃত। কাইক্কা মাছ (Xenentodon cancila) বাংলাদেশের নদ-নদী ও বিলে অত্যন্ত পরিচিত ও দেশীয় মাছ।"
    },
    importantFamilies: [
      {
        name: "Belonidae",
        commonEn: "Needlefishes",
        commonBn: "কাইক্কা বা নিডলফিশ গোত্র",
        diagnosticEn: "Both jaws elongated into slender toothed beak, green bones; includes Xenentodon and Strongylura.",
        diagnosticBn: "উভয় চোয়াল লম্বা দাঁতাল ঠোঁটে রূপান্তরিত, সবুজ হাড়; Xenentodon (কাইক্কা) অন্তর্ভুক্ত।"
      },
      {
        name: "Exocoetidae",
        commonEn: "Flyingfishes",
        commonBn: "উড়ুক্কু মাছ গোত্র",
        diagnosticEn: "Enormously expanded pectoral fins, asymmetric caudal fin for taxiing; includes Exocoetus.",
        diagnosticBn: "ডানার মতো বিশালাকার বক্ষপাখনা, সাগরের উপর ওড়ার ক্ষমতা; Exocoetus গণ অন্তর্ভুক্ত।"
      },
      {
        name: "Hemiramphidae",
        commonEn: "Halfbeaks",
        commonBn: "হাফবিক বা একঠোঁটা মাছ গোত্র",
        diagnosticEn: "Only lower jaw elongated, upper jaw short and triangular; includes Hyporhamphus.",
        diagnosticBn: "কেবল নিচের চোয়াল লম্বা, উপরের চোয়াল ছোট ও ত্রিভুজাকার; Hyporhamphus অন্তর্ভুক্ত।"
      }
    ],
    scientificNamesSummary: {
      en: "Genera: Xenentodon, Strongylura, Exocoetus, and Hemiramphus. Key binomials: Xenentodon cancila (Hamilton, 1822) and Exocoetus volitans Linnaeus, 1758.",
      bn: "গণ: Xenentodon, Strongylura, Exocoetus এবং Hemiramphus। প্রধান নাম: Xenentodon cancila (Hamilton, 1822) এবং Exocoetus volitans Linnaeus, 1758।"
    },
    examplesSummary: {
      en: "Four verified representative examples: Freshwater Needlefish / Kaikka (Xenentodon cancila - native to Bangladesh), Asian Needletail (Strongylura strongylura - native to Bangladesh), Tropical Flyingfish (Exocoetus volitans - native to Bay of Bengal), and Black-barred Halfbeak (Hemiramphus far).",
      bn: "চারটি যাচাইকৃত প্রামাণ্য উদাহরণ: দেশি কাইক্কা মাছ (Xenentodon cancila - বাংলাদেশে দেশীয় মাছ), স্পটেড নিডলফিশ (Strongylura strongylura - সুন্দরবনে প্রাপ্ত), উড়ুক্কু মাছ (Exocoetus volitans - বঙ্গোপসাগরে প্রাপ্ত) এবং ব্ল্যাক-বার্ড হাফবিক (Hemiramphus far)।"
    },
    additionalInformation: {
      en: "Xenentodon cancila (Kaikka) is an iconic native freshwater fish of Bangladesh, celebrated for its sweet flesh despite possessing green bones caused by non-toxic biliverdin deposits.",
      bn: "কাইক্কা মাছ (Xenentodon cancila) বাংলাদেশের অত্যন্ত পরিচিত দেশীয় মাছ, যার হাড়ে জমে থাকা নিরীহ বিলিভার্ডিন রঞ্জকের কারণে হাড়ের রঙ উজ্জ্বল সবুজ হয়।"
    },
    orders: [],
    exampleSpeciesIds: [],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2024", "ref-eschmeyer-2024"],
    authoritySource: "Nelson et al. (2016) Fishes of the World (5th ed.); Collette et al. (2019)",
    verificationStatus: "published",
    publishedStatus: true
  }
];
