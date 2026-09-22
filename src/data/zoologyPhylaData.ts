// src/data/zoologyPhylaData.ts
// Comprehensive Zoological Data Model for the 10 Major Phyla of Kingdom Animalia
// Sourced from Hickman et al. (2020), Ruppert et al. (2004), and Brusca et al. (2016)

export interface PhylumDetail {
  id: string;
  slug: string;
  scientificName: string;
  commonNameEn: string;
  commonNameBn: string;
  taxonId?: string;
  subkingdom: 'Parazoa' | 'Eumetazoa';
  symmetry: 'Asymmetrical' | 'Radial' | 'Biradial' | 'Bilateral' | 'Secondary pentaradial';
  germLayers: 'None (No true germ layers)' | 'Diploblastic (2 layers)' | 'Triploblastic (3 layers)';
  coelomType: 'Acoelomate' | 'Pseudocoelomate' | 'Eucoelomate (Schizocoely)' | 'Eucoelomate (Enterocoely)' | 'N/A';
  bodyOrganization: 'Cellular grade' | 'Tissue grade' | 'Organ-system grade';
  estimatedSpeciesGlobal: number;
  cataloguedSpeciesCount: number;
  diagnosticCharacteristics: {
    en: string[];
    bn: string[];
  };
  bodyPlanOverview: {
    en: string;
    bn: string;
  };
  anatomyAndSystems: {
    digestive: { en: string; bn: string };
    respiratory: { en: string; bn: string };
    circulatory: { en: string; bn: string };
    excretory: { en: string; bn: string };
    nervous: { en: string; bn: string };
    reproductive: { en: string; bn: string };
    skeletal: { en: string; bn: string };
  };
  developmentAndLarvae: {
    en: string;
    bn: string;
    larvalTypes: string[];
  };
  habitatAndEcology: {
    en: string;
    bn: string;
    primaryHabitats?: string[];
  };
  evolutionarySignificance: {
    en: string;
    bn: string;
  };
  importantClasses: Array<{
    name: string;
    nameBn: string;
    descriptionEn: string;
    descriptionBn: string;
    representativeTaxa: string;
  }>;
  canonicalSpeciesIds: string[];
  referenceIds: string[];
}

export const ZOOLOGY_PHYLA_DATA: PhylumDetail[] = [
  {
    id: "phylum-porifera",
    slug: "porifera",
    scientificName: "Porifera",
    commonNameEn: "Sponges",
    commonNameBn: "স্পঞ্জ",
    taxonId: "taxon-porifera",
    subkingdom: "Parazoa",
    symmetry: "Asymmetrical",
    germLayers: "None (No true germ layers)",
    coelomType: "N/A",
    bodyOrganization: "Cellular grade",
    estimatedSpeciesGlobal: 9000,
    cataloguedSpeciesCount: 3,
    diagnosticCharacteristics: {
      en: [
        "Cellular grade of organization lacking true embryonic germ layers, tissues, and organs.",
        "Body perforated by numerous incurrent pores (ostia) and one or more large excurrent openings (oscula).",
        "Unique flagellated collar cells (choanocytes) lining internal chambers that drive water currents and capture food.",
        "Internal skeleton formed of microscopic siliceous or calcareous spicules, fibrous spongin protein, or both.",
        "Internal water canal system organized in asconoid, syconoid, or complex leuconoid architecture."
      ],
      bn: [
        "প্রকৃত ভ্রূণীয় স্তর, কলা ও অঙ্গবিহীন কোষীয় মাত্রার সংগঠন।",
        "দেহ প্রাচীরে অসংখ্য অন্তঃমুখী ক্ষুদ্র ছিদ্র (অস্টিয়া) এবং এক বা একাধিক বড় বহির্মুখী ছিদ্র (অস্কুলাম) উপস্থিত।",
        "অভ্যন্তরীণ প্রকোষ্ঠে ফ্লাজেলাযুক্ত চোয়ানোসাইট কোষ উপস্থিত যা পানির স্রোত তৈরি করে এবং খাদ্য কণা গ্রহণ করে।",
        "ক্যালসিয়াম বা সিলিকার সূঁচালো স্পিকিউল অথবা স্পঞ্জিন প্রোটিন তন্তু নির্মিত অন্তঃকঙ্কাল।",
        "অ্যাসকনয়েড, সাইকনয়েড অথবা জটিল লিউকনয়েড নালীতন্ত্রের মাধ্যমে পানি সংবহন।"
      ]
    },
    bodyPlanOverview: {
      en: "Sponges are sessile, filter-feeding aquatic metazoans with porous, sac-like or encrusting bodies. Outer pinacoderm is separated from inner choanoderm by a gelatinous proteinaceous matrix called mesohyl containing mobile amoebocytes.",
      bn: "স্পঞ্জ হলো নিশ্চল, ছাঁকনভোজী জলজ প্রাণী যাদের দেহ ছিদ্রাল ও থলেসদৃশ। এদের বাইরের পিনাকোডার্ম এবং ভেতরের চোয়ানোডার্মের মাঝে মেসোহিল নামক জেলির মতো ধাত্র থাকে যাতে ভ্রাম্যমাণ অ্যামিবোসাইট কোষ থাকে।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Strictly intracellular digestion; food particles (bacteria, microplankton) captured by choanocyte collars through phagocytosis and digested in food vacuoles or transferred to amoebocytes.",
        bn: "সম্পূর্ণ অন্তঃকোষীয় পরিপাক; চোয়ানোসাইট কোষের কলার ব্যাকটেরিয়াসহ ক্ষুদ্র খাদ্যকণা ফ্যাগোসাইটোসিস প্রক্রিয়ায় গ্রহণ করে খাদ্যগহ্বরে বা অ্যামিবোসাইটে পরিপাক করে।"
      },
      respiratory: {
        en: "No specialized respiratory organs; gas exchange occurs by direct simple diffusion across individual cell membranes driven by the continuous water canal current.",
        bn: "কোনো বিশেষায়িত শ্বসন অঙ্গ নেই; নালীতন্ত্রের নিরবচ্ছিন্ন পানির প্রবাহের সাহায্যে সরাসরি কোষের প্লাজমামেমব্রেন দিয়ে ব্যাপন প্রক্রিয়ায় গ্যাসীয় বিনিময় ঘটে।"
      },
      circulatory: {
        en: "No circulatory system; internal water canal system fulfills transport functions, distributing dissolved oxygen and carrying away metabolic waste.",
        bn: "কোনো সংবহনতন্ত্র নেই; অভ্যন্তরীণ নালীতন্ত্রই সংবহনের কাজ করে, কোষে অক্সিজেন পৌঁছে দেয় এবং বর্জ্য বাইরে নিষ্কাশন করে।"
      },
      excretory: {
        en: "No specialized excretory organs; ammonotelic; ammonia diffuses directly into the transiting water current and is expelled through the osculum.",
        bn: "কোনো রেচন অঙ্গ নেই; অ্যামোনোটেলিক প্রাণী; অ্যামোনিয়া সরাসরি ব্যাপিত হয়ে বহির্গামী পানির স্রোতের সাথে অস্কুলাম দিয়ে বের হয়ে যায়।"
      },
      nervous: {
        en: "No neurons, synapses, or sensory organs; physiological coordination achieved through paracrine chemical signaling and mechanical conduction in pinacocytes.",
        bn: "কোনো স্নায়ুকোষ, সাইন্যাপস বা সংবেদী অঙ্গ নেই; পিনাকোসাইট কোষের যান্ত্রিক সংকোচন ও রাসায়নিক সংকেতের মাধ্যমে সামান্য সমন্বয় ঘটে।"
      },
      reproductive: {
        en: "Monoecious (hermaphroditic) or dioecious; sexual reproduction via flagellated sperm and eggs developed from choanocytes/amoebocytes; asexual reproduction via budding, fragmentation, and specialized dormant gemmules.",
        bn: "উভয়লিঙ্গ বা একলিঙ্গ; চোয়ানোসাইট বা অ্যামিবোসাইট থেকে শুক্রাণু ও ডিম্বাণু তৈরির মাধ্যমে যৌন জনন ঘটে; মুকুলোদগম, খণ্ডায়ন এবং সুপ্ত জেমিয়ুল তৈরির মাধ্যমে অযৌন জনন হয়।"
      },
      skeletal: {
        en: "Endoskeleton embedded in mesohyl consisting of calcareous (calcite) or siliceous (hydrated silica) spicules and/or flexible spongin collagen fibers.",
        bn: "মেসোহিলে অবস্থিত অন্তঃকঙ্কাল ক্যালসিয়াম বা সিলিকার স্পিকিউল এবং কোলাজেন জাতীয় স্পঞ্জিন তন্তু দ্বারা গঠিত।"
      }
    },
    developmentAndLarvae: {
      en: "Zygote develops into a free-swimming ciliated parenchymula or amphiblastula larva that settles on a hard substrate to metamorphose into an adult sponge.",
      bn: "জাইগোট রূপান্তরের মাধ্যমে মুক্ত-সাঁতারু সিলিয়াযুক্ত প্যারেনকাইমুলা বা অ্যাম্ফিব্লাস্টুলা লার্ভায় পরিণত হয়, যা শক্ত তলদেশে সেঁটে পূর্ণাঙ্গ স্পঞ্জে রূপান্তরিত হয়।",
      larvalTypes: ["Amphiblastula", "Parenchymula"]
    },
    habitatAndEcology: {
      en: "Over 98% marine from intertidal shallows to abyssal depths, with freshwater families (Spongillidae) flourishing in unpolluted rivers, haors, and oxbow lakes.",
      bn: "৯৮ শতাংশেরও বেশি সামুদ্রিক যা বেলাভূমি থেকে শুরু করে সমুদ্রের তলদেশ পর্যন্ত বিস্তৃত; স্পঞ্জিলিডি পরিবারের সদস্যরা নদী, হাওর ও বিলে বাস করে।",
      primaryHabitats: ["Marine Benthic", "Coral Reefs", "Freshwater Lakes & Haors", "Intertidal Rocky Shores"]
    },
    evolutionarySignificance: {
      en: "Basal metazoan lineage demonstrating the evolutionary transition from unicellular choanoflagellate protozoans to integrated multicellular animal life.",
      bn: "প্রাণিজগতের সবচেয়ে আদিম পর্ব যা এককোষী চোয়ানোফ্ল্যাজেলেট থেকে বহুকোষী প্রাণী জীবনের প্রাথমিক বিবর্তনের রূপ নির্দেশ করে।"
    },
    importantClasses: [
      {
        name: "Calcarea",
        nameBn: "ক্যালকেরিয়া",
        descriptionEn: "Sponges with calcareous (calcium carbonate) spicules; exclusively marine.",
        descriptionBn: "ক্যালসিয়াম কার্বনেট নির্মিত স্পিকিউলযুক্ত স্পঞ্জ; সম্পূর্ণ সামুদ্রিক।",
        representativeTaxa: "Sycon, Leucosolenia"
      },
      {
        name: "Demospongiae",
        nameBn: "ডেমোস্পঞ্জিয়া",
        descriptionEn: "Comprises >85% of all sponges; siliceous spicules and/or spongin; includes freshwater sponges.",
        descriptionBn: "সকল স্পঞ্জের ৮৫% এর বেশি; সিলিকা স্পিকিউল ও স্পঞ্জিন নির্মিত; স্বাদু পানির স্পঞ্জ অন্তর্ভুক্ত।",
        representativeTaxa: "Spongilla, Ephydatia, Cliona"
      },
      {
        name: "Hexactinellida",
        nameBn: "হেক্সাক্টিনেলিডা",
        descriptionEn: "Glass sponges with six-rayed siliceous spicules forming intricate geometric latticework; deep marine.",
        descriptionBn: "কাঁচ স্পঞ্জ; ৬-রশ্মিযুক্ত সিলিকা নির্মিত সূক্ষ্ম জালিকাকার কঙ্কাল; গভীর সমুদ্রের প্রজাতি।",
        representativeTaxa: "Euplectella (Venus flower basket)"
      }
    ],
    canonicalSpeciesIds: ["sp-spongilla-lacustris", "sp-ephydatia-fluviatilis", "sp-cliona-celata"],
    referenceIds: ["ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-cnidaria",
    slug: "cnidaria",
    scientificName: "Cnidaria",
    commonNameEn: "Corals, Sea Anemones & Jellyfishes",
    commonNameBn: "নিডারিয়া (প্রবাল, জেলিফিশ ও সি অ্যানিমোন)",
    taxonId: "taxon-cnidaria",
    subkingdom: "Eumetazoa",
    symmetry: "Radial",
    germLayers: "Diploblastic (2 layers)",
    coelomType: "Acoelomate",
    bodyOrganization: "Tissue grade",
    estimatedSpeciesGlobal: 11000,
    cataloguedSpeciesCount: 3,
    diagnosticCharacteristics: {
      en: [
        "Diploblastic eumetazoans with epidermis and gastrodermis separated by gelatinous mesoglea.",
        "Possess specialized stinging cell organelles termed cnidocytes containing explosive stinging nematocysts.",
        "Primary radial or biradial symmetry arranged around an oral-aboral central body axis.",
        "Blind gastrovascular cavity (coelenteron) with a single opening serving as both mouth and anus.",
        "Dimorphic life cycle frequently exhibiting sessile tubular polyps and free-swimming umbrella-like medusae."
      ],
      bn: [
        "দ্বিভ্রূণস্তরী ইউমেটাজোয়া যাদের এপিডার্মিস ও গ্যাস্ট্রোডার্মিসের মাঝে মেসোগ্লিয়া উপস্থিত।",
        "নেমাটোসিস্ট নামক বিশেষায়িত দংশক অঙ্গাণু বহনকারী নিডোসাইট কোষ উপস্থিত।",
        "মুখ-পশ্চাৎ অক্ষের চারদিকে সাজানো প্রাথমিক অরীয় বা দ্বি-অরীয় প্রতিসাম্য।",
        "একক মুখছিদ্রযুক্ত অন্ধ গ্যাস্ট্রোভাস্কুলার গহ্বর (সিলেন্টেরন) যা মুখ ও পায়ু উভয় কাজ করে।",
        "দ্বিরূপী জীবনচক্র যেখানে নিশ্চল পলিপ এবং মুক্ত-সাঁতারু মেডুসা দশা দেখা যায়।"
      ]
    },
    bodyPlanOverview: {
      en: "Cnidarians exhibit two alternating morphological body architectures: the sedentary, cylindrical polyp adapted for asexual budding and substrate attachment, and the pelagic, bell-shaped medusa specialized for dispersal and sexual gamete shedding.",
      bn: "নিডারিয়া দুটি সুস্পষ্ট রূপ প্রদর্শন করে: নিশ্চল নলাকার পলিপ যা অযৌন প্রজনন করে এবং মুক্ত-সাঁতারু ঘণ্টার মতো মেডুসা যা চলন ও যৌন জননে অংশ নেয়।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Both extracellular and intracellular digestion; prey paralyzed by nematocysts is swept into gastrovascular cavity where gland cells secrete enzymes; nutritive-muscular cells engulf partially digested fragments.",
        bn: "বহিঃকোষীয় ও অন্তঃকোষীয় উভয় প্রকার পরিপাক; নেমাটোসিস্ট দিয়ে শিকার অচেতন করে সিলেন্টেরনে নেওয়া হয় এবং গ্রন্থিকোষের এনজাইম ও পুষ্টিকোষ দ্বারা পরিপাক সম্পন্ন হয়।"
      },
      respiratory: {
        en: "No specialized gas exchange organs; oxygen and carbon dioxide diffuse across thin epidermal and gastrodermal cell layers into ambient water.",
        bn: "কোনো বিশেষায়িত অঙ্গ নেই; পাতলা দেহপ্রাচীর দিয়ে ব্যাপন প্রক্রিয়ায় শ্বসন গ্যাস আদান-প্রদান হয়।"
      },
      circulatory: {
        en: "Gastrovascular cavity fulfills combined digestive and fluid-transport circulatory functions, distributing nutrients to distal tissues.",
        bn: "সিলেন্টেরন বা গ্যাস্ট্রোভাস্কুলার গহ্বরই পরিপাক ও পুষ্টিরস সংবহনের কাজ করে।"
      },
      excretory: {
        en: "Ammonotelic; ammonia diffuses across epidermal body surfaces directly into the aquatic medium.",
        bn: "অ্যামোনোটেলিক; দেহত্বক দিয়ে অ্যামোনিয়া সরাসরি পানিতে ব্যাপিত হয়।"
      },
      nervous: {
        en: "Diffuse non-polarized nerve net throughout epidermis and gastrodermis; medusae possess marginal sensory structures (rhopalia with statocysts and ocelli).",
        bn: "মেসোগ্লিয়ার কাছে বিস্তৃত নির্মেরু স্নায়ুজালিকা; মেডুসায় প্রান্তিক সংবেদী অঙ্গ রোপালিয়াম (স্ট্যাটোসিস্ট ও ওসেলি) বিদ্যমান।"
      },
      reproductive: {
        en: "Metagenesis (alternation of generations) typical: polyps reproduce asexually by budding or strobilation; medusae produce gametes sexually; many reef-building corals broadcast spawn.",
        bn: "জনুক্রম দেখা যায়: পলিপ অযৌন প্রক্রিয়ায় স্ট্রোবিলেশন বা মুকুলোদগম করে এবং মেডুসা যৌন প্রক্রিয়ায় গ্যামেট নিঃসরণ করে।"
      },
      skeletal: {
        en: "Hydrostatic skeleton via pressurized fluid in gastrovascular cavity; stony corals (Scleractinia) secrete massive external calcium carbonate (aragonite) exoskeletons creating reefs.",
        bn: "সিলেন্টেরনের তরল দ্বারা গঠিত হাইড্রোস্ট্যাটিক কঙ্কাল; প্রবালরা ক্যালসিয়াম কার্বনেট নিঃসরণ করে সুবিশাল চুনময় প্রবালপ্রাচীর কঙ্কাল তৈরি করে।"
      }
    },
    developmentAndLarvae: {
      en: "Embryo typically develops into a ciliated, free-swimming planula larva that swims before settling to form the founding polyp.",
      bn: "ভ্রূণ মুক্ত-সাঁতারু সিলিয়াযুক্ত প্ল্যানুলা লার্ভায় পরিণত হয়, যা শক্ত ভিত্তির সাথে যুক্ত হয়ে পলিপে রূপ নেয়।",
      larvalTypes: ["Planula", "Ephyra (in Scyphozoa)"]
    },
    habitatAndEcology: {
      en: "Over 99% marine, dominating shallow tropical coral reefs, deep benthos, and pelagic oceanic waters; Hydra and Craspedacusta represent rare freshwater genera.",
      bn: "৯৯ শতাংশেরও বেশি সামুদ্রিক যা প্রবালপ্রাচীর ও মুক্ত সাগরে বাস করে; হাইড্রা হলো বিরল স্বাদু পানির প্রজাতি।"
    },
    evolutionarySignificance: {
      en: "First eumetazoans to evolve true cellular tissues, rudimentary muscular epithelia, coordinated nervous transmission, and organized predatory behavior.",
      bn: "প্রথম প্রকৃত ইউমেটাজোয়া প্রাণী যাদের মধ্যে প্রকৃত কলা, স্নায়ুতন্ত্র এবং সুসংগঠিত শিকারী স্বভাবের বিবর্তন ঘটেছে।"
    },
    importantClasses: [
      {
        name: "Anthozoa",
        nameBn: "অ্যান্থোজোয়া",
        descriptionEn: "Exclusively polyp stage; corals, sea anemones, sea pens; includes colonial reef builders.",
        descriptionBn: "কেবলমাত্র পলিপ দশা বিদ্যমান; প্রবাল, সি অ্যানিমোন; প্রবালপ্রাচীর গঠনকারী।",
        representativeTaxa: "Porites, Acropora, Metridium"
      },
      {
        name: "Scyphozoa",
        nameBn: "সাইফোজোয়া",
        descriptionEn: "True marine jellyfishes with dominant pelagic medusa stage and thick cellular mesoglea.",
        descriptionBn: "প্রকৃত সামুদ্রিক জেলিফিশ; মেডুসা প্রধান এবং পুরু জেলিময় মেসোগ্লিয়াযুক্ত।",
        representativeTaxa: "Aurelia, Catostylus"
      },
      {
        name: "Hydrozoa",
        nameBn: "হাইড্রেজোয়া",
        descriptionEn: "Polymorphic colonies and solitary polyps; medusae with velum; includes freshwater Hydra.",
        descriptionBn: "বহুরূপী কলোনি বা একক পলিপ; ভেলামযুক্ত মেডুসা; স্বাদু পানির হাইড্রা অন্তর্ভুক্ত।",
        representativeTaxa: "Hydra, Obelia, Physalia"
      },
      {
        name: "Cubozoa",
        nameBn: "কিউবোজোয়া",
        descriptionEn: "Box jellyfishes with square bells, complex lensed eyes, and deadly cardiotoxic venoms.",
        descriptionBn: "বক্স জেলিফিশ; চারকোনা মেডুসা, জটিল লেন্সযুক্ত চোখ এবং অত্যন্ত বিষাক্ত প্রজাতি।",
        representativeTaxa: "Chironex fleckeri"
      }
    ],
    canonicalSpeciesIds: ["sp-porites-lutea", "sp-acropora-muricata", "sp-catostylus-mosaicus"],
    referenceIds: ["ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-ctenophora",
    slug: "ctenophora",
    scientificName: "Ctenophora",
    commonNameEn: "Comb Jellies",
    commonNameBn: "টিনোফোরা (কম্ব জেলি)",
    taxonId: "taxon-ctenophora",
    subkingdom: "Eumetazoa",
    symmetry: "Biradial",
    germLayers: "Diploblastic (2 layers)",
    coelomType: "Acoelomate",
    bodyOrganization: "Tissue grade",
    estimatedSpeciesGlobal: 200,
    cataloguedSpeciesCount: 1,
    diagnosticCharacteristics: {
      en: [
        "Transparent, gelatinous, fragile marine predators exhibiting biradial symmetry.",
        "Locomotion powered by eight longitudinal meridional rows of fused ciliated plates (comb rows or ctenes).",
        "Retractile tentacles equipped with specialized adhesive glue cells (colloblasts) rather than stinging nematocysts.",
        "Complete digestive system with mouth, pharynx, branched stomach, and anal pores.",
        "Apical sensory organ containing a gravity-sensing statocyst regulating comb plate beat frequency."
      ],
      bn: [
        "স্বচ্ছ, জেলিসদৃশ ও দ্বি-অরীয় প্রতিসম সামুদ্রিক শিকারী প্রাণী।",
        "৮টি অনুদৈর্ঘ্য চিরুনি প্লেট (কম্ব রো বা টিন) দ্বারা চালিত যা প্রাণিজগতের বৃহত্তম সিলিয়াযুক্ত চলন অঙ্গ।",
        "দংশক কোষের বদলে আঠালো কলোব্লাস্ট কোষযুক্ত প্রসার্য কর্ষিকা।",
        "মুখছিদ্র, গলবিল, শাখান্বিত পাকস্থলী ও দুটি পায়ুছিদ্রযুক্ত সম্পূর্ণ পরিপাক নালী।",
        "শীর্ষদেশে অবস্থিত স্ট্যাটোসিস্ট সংবেদী অঙ্গ যা গতি ও ভারসাম্য নিয়ন্ত্রণ করে।"
      ]
    },
    bodyPlanOverview: {
      en: "Ctenophores are delicate, bioluminescent marine planktonic predators. Their iridescent optical shimmer is created by the diffraction of light through beating ciliary comb plates.",
      bn: "টিনোফোরা অত্যন্ত কোমল, জৈব-আলোক বিকিরণকারী প্লাঙ্কটনিক শিকারী। এদের সিলিয়া স্পন্দনের মাধ্যমে আলো বিচ্ছুরিত হয়ে রামধনুর মতো আভা ছড়ায়।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Carnivorous; prey adheres to colloblasts, is transferred into stomodeum, digested in branched gastrovascular canals, and non-digested waste is ejected through anal pores.",
        bn: "মাংসাশী; কলোব্লাস্টের আঠায় শিকার আটকে মুখে নেয়, শাখান্বিত ক্যানালে পরিপাক হয় এবং পায়ুছিদ্র দিয়ে অপাচ্য অংশ বের হয়।"
      },
      respiratory: {
        en: "No respiratory organs; simple diffusion over body surface and internal gastrovascular canal linings.",
        bn: "কোনো শ্বসন অঙ্গ নেই; দেহতল দিয়ে ব্যাপন প্রক্রিয়ায় অক্সিজেন গ্রহণ করে।"
      },
      circulatory: {
        en: "Gastrovascular canals serve for circulating digested nutrients throughout the mesoglea.",
        bn: "গ্যাস্ট্রোভাস্কুলার নালী পুষ্টি উপাদান সারা দেহে সংবহন করে।"
      },
      excretory: {
        en: "Ammonia diffuses through the body surfaces and is discharged through anal pores.",
        bn: "দেহপৃষ্ঠ ও পায়ুছিদ্র দিয়ে অ্যামোনিয়া নির্গত হয়।"
      },
      nervous: {
        en: "Subepidermal nerve net concentrated beneath comb rows, coordinated by the apical aboral statocyst.",
        bn: "চিরুনি প্লেটের নিচে বিস্তৃত স্নায়ুজালিকা যা শীর্ষদেশের স্ট্যাটোসিস্ট দ্বারা সমন্বিত হয়।"
      },
      reproductive: {
        en: "Nearly all monoecious; gonads line gastrovascular canals; shedding gametes into seawater for external fertilization.",
        bn: "প্রায় সবাই উভয়লিঙ্গ; পরিপাক নালীর গায়ে জননকোষ তৈরি হয় এবং পানিতে নিষেকের জন্য মুক্ত হয়।"
      },
      skeletal: {
        en: "Hydrostatic skeleton supported by thick elastic gelatinous collenchyme mesoglea.",
        bn: "পুরু মেসোগ্লিয়া ও অভ্যন্তরীণ তরল দ্বারা গঠিত হাইড্রোস্ট্যাটিক কঙ্কাল।"
      }
    },
    developmentAndLarvae: {
      en: "Free-swimming spherical cydippid larva that gradually develops into the adult form without complex metamorphosis.",
      bn: "মুক্ত-সাঁতারু গোলাকার সাইডিপ্পিড লার্ভা সরাসরি পূর্ণাঙ্গ প্রাণীতে রূপান্তরিত হয়।",
      larvalTypes: ["Cydippid"]
    },
    habitatAndEcology: {
      en: "Exclusively marine plankton from surface coastal waters to oceanic trenches; voracious consumers of copepods, fish eggs, and larvae.",
      bn: "সম্পূর্ণ সামুদ্রিক প্লাঙ্কটন; মাছের ডিম, লার্ভা ও কোপেপড শিকার করে।"
    },
    evolutionarySignificance: {
      en: "Genomic phylogenetics suggest Ctenophora may represent the earliest diverging sister group to all other Metazoa, predating even sponges.",
      bn: "আধুনিক জিনোমিক বিশ্লেষণ অনুযায়ী টিনোফোরা সম্ভবত স্পঞ্জেরও আগে প্রাণিজগতের মূল শাখা থেকে পৃথক হওয়া সবচেয়ে আদিম পর্ব।"
    },
    importantClasses: [
      {
        name: "Tentaculata",
        nameBn: "টেন্টাকুলাটা",
        descriptionEn: "Possess two retractile tentacles bearing colloblasts.",
        descriptionBn: "কলোব্লাস্টযুক্ত দুটি প্রসার্য কর্ষিকাবিশিষ্ট।",
        representativeTaxa: "Pleurobrachia (Sea gooseberry)"
      },
      {
        name: "Nuda",
        nameBn: "নুডা",
        descriptionEn: "Lacking tentacles; large muscular mouth engulfing other comb jellies.",
        descriptionBn: "কর্ষিকাহীন; বড় মুখ দিয়ে অন্যান্য জেলিফিশ গিলে খায়।",
        representativeTaxa: "Beroe"
      }
    ],
    canonicalSpeciesIds: ["sp-pleurobrachia-pileus"],
    referenceIds: ["ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-platyhelminthes",
    slug: "platyhelminthes",
    scientificName: "Platyhelminthes",
    commonNameEn: "Flatworms",
    commonNameBn: "প্লাটিহেলমিনথিস (চ্যাপ্টাকৃমি)",
    taxonId: "taxon-platyhelminthes",
    subkingdom: "Eumetazoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic (3 layers)",
    coelomType: "Acoelomate",
    bodyOrganization: "Organ-system grade",
    estimatedSpeciesGlobal: 29000,
    cataloguedSpeciesCount: 0,
    diagnosticCharacteristics: {
      en: [
        "Dorsoventrally flattened bilateral triploblastic worms lacking a true coelom (acoelomate).",
        "Solid mesenchyme/parenchyma fills all space between body wall and gut.",
        "Blind gut with eversible muscular pharynx; no anus (gut completely absent in tapeworms).",
        "Excretory system composed of protonephridia equipped with ciliated flame cells.",
        "Cephalized anterior nervous system with cerebral ganglia and ladder-like longitudinal nerve cords."
      ],
      bn: [
        "উপর-নিচে চ্যাপ্টা দ্বিপার্শ্বীয় প্রতিসম ত্রিভ্রূণস্তরী সিলোমহীন (অ্যাসিলোমেট) কৃমি।",
        "দেহপ্রাচীর ও পরিপাকনালীর মধ্যবর্তী স্থান প্যারেনকাইমা কলা দ্বারা পূর্ণ থাকে।",
        "পেশিবহুল গলবিলযুক্ত অন্ধ পরিপাকনালী; পায়ু অনুপস্থিত (ফিতাকৃমিতে পরিপাকনালীই নেই)।",
        "সিলিয়াযুক্ত শিখা কোষ (ফ্লেম সেল) সমৃদ্ধ প্রোটোনেফ্রিডিয়া দ্বারা রেচন সম্পন্ন।",
        "মস্তিষ্ক গ্যাংলিয়া ও মইয়ের মতো অনুদৈর্ঘ্য স্নায়ুরজ্জুযুক্ত সুস্পষ্ট মস্তক।"
      ]
    },
    bodyPlanOverview: {
      en: "Flatworms demonstrate the evolutionary origin of primary bilateral symmetry and cephalization. The dorsoventral flattening maximizes surface-area-to-volume ratio for diffusion in the absence of a circulatory or respiratory system.",
      bn: "চ্যাপ্টাকৃমিতে প্রথম দ্বিপার্শ্বীয় প্রতিসাম্য ও মস্তকীভবনের বিকাশ ঘটে। চ্যাপ্টা দেহের কারণে শ্বসন ও সংবহনতন্ত্র ছাড়াই সারাদেহে ব্যাপন প্রক্রিয়া সুষ্ঠুভাবে সম্পন্ন হয়।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Incomplete gut with branching gastrovascular cavity in turbellarians; mouth on mid-ventral surface; endoparasitic cestodes absorb predigested nutrients directly across their syncytial tegument via microtriches.",
        bn: "অসম্পূর্ণ শাখান্বিত অন্ত্র; ফিতাকৃমির পরিপাকতন্ত্র নেই, এরা পোষকের অন্ত্র থেকে ত্বক দিয়ে পুষ্টি শোষণ করে।"
      },
      respiratory: {
        en: "No respiratory organs; aerobic respiration by cutaneous diffusion in free-living forms; anaerobic glycolysis prevalent in intestinal parasites.",
        bn: "কোনো শ্বসন অঙ্গ নেই; ত্বক দিয়ে ব্যাপন ঘটে এবং পরজীবীদের মধ্যে অবাত শ্বসন প্রধান।"
      },
      circulatory: {
        en: "Absent; extensively branched intestine delivers nutrients directly to all tissues.",
        bn: "অনুপস্থিত; শাখান্বিত অন্ত্রই পুষ্টিরস সরাসরি কোষে পৌঁছে দেয়।"
      },
      excretory: {
        en: "Protonephridia with flickering ciliated flame cells creating negative pressure that filters interstitial fluid into excretory ducts; primarily osmoregulatory.",
        bn: "শিখা কোষযুক্ত প্রোটোনেফ্রিডিয়া যা অভিস্রবণ নিয়ন্ত্রণ ও রেচনে কাজ করে।"
      },
      nervous: {
        en: "Paired anterior cerebral ganglia ('brain') with 1-3 pairs of longitudinal nerve cords connected by transverse ladder-like commissures; ocelli and auricles present in free-living planarians.",
        bn: "মস্তিষ্ক গ্যাংলিয়া ও আড়াআড়িভাবে যুক্ত মইয়ের মতো স্নায়ুতন্ত্র; মুক্তজীবী প্ল্যানেরিয়ায় চোখ ও অরিকল বিদ্যমান।"
      },
      reproductive: {
        en: "Predominantly monoecious (hermaphroditic) with complex reproductive organs; internal cross-fertilization; powerful asexual regeneration in Turbellaria.",
        bn: "অধিকাংশই উভয়লিঙ্গ এবং অত্যন্ত জটিল প্রজননতন্ত্রযুক্ত; অভ্যন্তরীণ নিষেক; প্ল্যানেরিয়াতে অসাধারণ পুনরুৎপত্তি ক্ষমতা বিদ্যমান।"
      },
      skeletal: {
        en: "Hydrostatic skeleton based on turgid parenchymal tissue cells enclosed in muscular body wall.",
        bn: "প্যারেনকাইমা টিস্যু ও পেশিবহুল ত্বক দ্বারা গঠিত হাইড্রোস্ট্যাটিক কঙ্কাল।"
      }
    },
    developmentAndLarvae: {
      en: "Direct development in most turbellarians; complex multi-host life cycles with multiple larval stages (miracidium, sporocyst, redia, cercaria in trematodes; oncosphere, cysticercus in cestodes).",
      bn: "পরজীবী কৃমিতে মিরাসিডিয়াম, সারকেরিয়া, রেডিয়া বা সিস্টাইসারকাস লার্ভার মাধ্যমে জটিল জীবনচক্র সম্পন্ন হয়।",
      larvalTypes: ["Miracidium", "Cercaria", "Cysticercus", "Müller's larva"]
    },
    habitatAndEcology: {
      en: "Free-living in marine, freshwater, and humid terrestrial leaf litter; large clades are specialized endoparasites of medical and veterinary importance.",
      bn: "মুক্তজীবীরা সাগর ও স্বাদু পানিতে বাস করে; বিশাল অংশ মানুষ ও মেরুদণ্ডী প্রাণীর ক্ষতিকর অন্তপরজীবী।"
    },
    evolutionarySignificance: {
      en: "Pioneered triploblasty (evolution of embryonic mesoderm) enabling true organ-system complexity, muscular motility, and directed bilateral cephalization.",
      bn: "প্রথম ত্রিভ্রূণস্তরী প্রাণী যারা মেসোডার্ম স্তর উদ্ভাবনের মাধ্যমে অঙ্গ-তন্ত্র ও মস্তকীভবনের সূচনা করেছে।"
    },
    importantClasses: [
      {
        name: "Turbellaria",
        nameBn: "টার্বেলেরিয়া",
        descriptionEn: "Mostly free-living, ciliated flatworms; predators and scavengers.",
        descriptionBn: "মুক্তজীবী, সিলিয়াযুক্ত চ্যাপ্টাকৃমি; মাংসাশী ও মেথর।",
        representativeTaxa: "Planaria, Dugesia"
      },
      {
        name: "Trematoda",
        nameBn: "ট্রেমাটোডা",
        descriptionEn: "Parasitic flukes with oral and ventral suckers; complex digenean life cycles.",
        descriptionBn: "পরজীবী ফ্লুক বা চোষককৃমি; জটিল জীবনচক্রের যকৃত কৃমি।",
        representativeTaxa: "Fasciola hepatica, Schistosoma"
      },
      {
        name: "Cestoda",
        nameBn: "সেস্টোডা",
        descriptionEn: "Endoparasitic tapeworms with scolex (hooks/suckers) and strobila of proglottids; no digestive tract.",
        descriptionBn: "ফিতাকৃমি; স্কোলেক্স ও প্রোগ্লটিডযুক্ত পরিপাকনালীবিহীন পরজীবী।",
        representativeTaxa: "Taenia solium, Echinococcus"
      }
    ],
    canonicalSpeciesIds: [],
    referenceIds: ["ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-nematoda",
    slug: "nematoda",
    scientificName: "Nematoda",
    commonNameEn: "Roundworms",
    commonNameBn: "নেমাটোডা (গোলকৃমি)",
    taxonId: "taxon-nematoda",
    subkingdom: "Eumetazoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic (3 layers)",
    coelomType: "Pseudocoelomate",
    bodyOrganization: "Organ-system grade",
    estimatedSpeciesGlobal: 25000,
    cataloguedSpeciesCount: 0,
    diagnosticCharacteristics: {
      en: [
        "Cylindrical, unsegmented vermiform body tapering at both ends.",
        "Non-cellular collagenous cuticle that is periodically molted during growth (Ecdysozoa).",
        "Fluid-filled pseudocoelom functioning as a high-pressure hydrostatic skeleton.",
        "Complete digestive tract with mouth, muscular sucking pharynx, intestine, and anus.",
        "Longitudinal muscle fibers only, producing characteristic sinusoidal thrashing locomotion.",
        "Eutely (fixed number of somatic cells in adults) exhibited by many species."
      ],
      bn: [
        "নলাকার, অখণ্ডায়িত দেহ যার দুই প্রান্ত সূঁচালো।",
        "শক্ত কোলাজেন কিউটিকল যা বৃদ্ধির সময় নিয়মিত নির্মোচন (মল্টিং) ঘটে।",
        "উচ্চ চাপে থাকা তরলপূর্ণ সিউডোসিলোম যা হাইড্রোস্ট্যাটিক কঙ্কাল হিসেবে কাজ করে।",
        "মুখ, পেশিবহুল গলবিল, অন্ত্র ও পায়ুছিদ্রযুক্ত সম্পূর্ণ পৌষ্টিকনালী।",
        "কেবলমাত্র অনুদৈর্ঘ্য পেশি উপস্থিত থাকায় এরা সাপের মতো চাবুকের ন্যায় আন্দোলিত হয়ে চলে।",
        "ইউভটেলি বা প্রাপ্তবয়স্ক অবস্থায় নির্দিষ্ট সংখ্যক দেহকোষ ধারণ।"
      ]
    },
    bodyPlanOverview: {
      en: "Nematodes are among the most ecologically abundant animals on Earth, with vast numbers inhabiting soil and sediments. High internal hydrostatic turgor pressure keeps the cylindrical body rigid and powers rapid sinusoidal wriggling.",
      bn: "পৃথিবীর সবচেয়ে প্রাচুর্যময় প্রাণীদের অন্যতম; মাটি ও পানিতে কোটি কোটি গোলকৃমি বাস করে। দেহের ভেতরে উচ্চ হাইড্রোস্ট্যাটিক চাপ দেহকে টানটান রাখে।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Complete straight alimentary canal; muscular triradiate pharynx pumps food into the non-muscular intestine against high pseudocoelomic fluid pressure.",
        bn: "সম্পূর্ণ সোজা পৌষ্টিকনালী; পেশিবহুল গলবিল উচ্চ চাপের বিপরীতে খাদ্য অন্ত্রে পাম্প করে।"
      },
      respiratory: {
        en: "Absent; gas exchange occurs via diffusion across the permeable cuticle.",
        bn: "অনুপস্থিত; কিউটিকল দিয়ে ব্যাপন প্রক্রিয়ায় শ্বসন সম্পন্ন হয়।"
      },
      circulatory: {
        en: "Absent; pseudocoelomic fluid circulates nutrients throughout body segments.",
        bn: "অনুপস্থিত; সিউডোসিলোমের তরল সারা দেহে পুষ্টি সংবহন করে।"
      },
      excretory: {
        en: "Excretory canals and specialized Renette cells expelling nitrogenous wastes via ventral excretory pore.",
        bn: "রেনেট কোষ ও রেচন নালীর মাধ্যমে অঙ্কীয় রেচন ছিদ্র দিয়ে বর্জ্য নির্গত হয়।"
      },
      nervous: {
        en: "Circumpharyngeal nerve ring with dorsal and ventral nerve cords; amphids and phasmids serve as specialized chemoreceptors.",
        bn: "গলবিলবেষ্টনকারী স্নায়ুবলয় এবং অ্যাম্ফিড ও ফ্যাজমিড নামক রাসায়নিক সংবেদী অঙ্গ।"
      },
      reproductive: {
        en: "Dioecious with pronounced sexual dimorphism (males smaller with curved tail bearing copulatory spicules); amoeboid non-flagellated sperm.",
        bn: "স্পষ্ট যৌন দ্বিরূপতাসহ একলিঙ্গ; পুরুষ কৃমির পশ্চাদ্ভাগে বাকানো পুচ্ছ ও স্পিকিউল থাকে; ফ্ল্যাজেলাবিহীন অ্যামিবয়েড শুক্রাণু।"
      },
      skeletal: {
        en: "High-pressure hydrostatic skeleton enclosed within tough, flexible collagen cuticle.",
        bn: "পুরু কিউটিকল ও উচ্চ চাপের সিউডোসিলোমিক তরলের হাইড্রোস্ট্যাটিক কঙ্কাল।"
      }
    },
    developmentAndLarvae: {
      en: "Direct development punctuated by exactly four juvenile molts; model organism Caenorhabditis elegans is widely used in genetic fate-mapping.",
      bn: "৪ বার কিউটিকল নির্মোচনের মাধ্যমে বৃদ্ধি পায়; সি. এলিগানস জীববিজ্ঞানের শ্রেষ্ঠ মডেল প্রাণী।",
      larvalTypes: ["Rhabditiform juvenile", "Filariform juvenile", "Microfilaria"]
    },
    habitatAndEcology: {
      en: "Ubiquitous in marine, freshwater, polar ice, desert soil, deep oceanic sediments, and as parasites of nearly all animals and plants.",
      bn: "মাটি, সমুদ্র, মেরু অঞ্চল এবং উদ্ভিদ ও প্রাণীর ক্ষতিকর পরজীবী হিসেবে সর্বত্র বিদ্যমান।"
    },
    evolutionarySignificance: {
      en: "Member of Clade Ecdysozoa demonstrating ecdysis (cuticular molting) and evolutionary optimization of high-pressure hydrostatic burrowing.",
      bn: "একডাইসোজোয়া মহাক্লাডের প্রতিনিধি যা কিউটিকল নির্মোচন ও উচ্চ চাপের নলাকার দেহের বিবর্তনীয় সাফল্য প্রমাণ করে।"
    },
    importantClasses: [
      {
        name: "Chromadorea",
        nameBn: "ক্রোমাডোরিয়া",
        descriptionEn: "Possess phasmids (sensory caudal pores); includes major human parasites (Ascaris, hookworms, pinworms).",
        descriptionBn: "ফ্যাজমিড সংবেদী অঙ্গযুক্ত; মানুষের গোলকৃমি, বক্রকৃমি ও সুতাকৃমি অন্তর্ভুক্ত।",
        representativeTaxa: "Ascaris lumbricoides, Ancylostoma, Wuchereria"
      },
      {
        name: "Enoplea",
        nameBn: "এনোপ্লিয়া",
        descriptionEn: "Mostly free-living marine/freshwater nematodes or trichinellid parasites lacking phasmids.",
        descriptionBn: "অধিকাংশ মুক্তজীবী বা ফ্যাজমিডবিহীন পরজীবী।",
        representativeTaxa: "Trichinella spiralis, Mermis"
      }
    ],
    canonicalSpeciesIds: [],
    referenceIds: ["ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-annelida",
    slug: "annelida",
    scientificName: "Annelida",
    commonNameEn: "Segmented Worms",
    commonNameBn: "অ্যানেলিডা (খণ্ডায়িত কৃমি / কেঁচো ও জোঁক)",
    taxonId: "taxon-annelida-marine",
    subkingdom: "Eumetazoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic (3 layers)",
    coelomType: "Eucoelomate (Schizocoely)",
    bodyOrganization: "Organ-system grade",
    estimatedSpeciesGlobal: 22000,
    cataloguedSpeciesCount: 4,
    diagnosticCharacteristics: {
      en: [
        "Metamerically segmented cylindrical body divided internally by transverse intersegmental septa.",
        "Spacious schizocoelous true coelom functioning as an independent hydrostatic chamber per segment.",
        "Locomotory chitonous setae (chaetae) borne on segmental parapodia or embedded directly in body wall.",
        "Closed circulatory system with dorsal and ventral longitudinal vessels and contractive aortic arches ('hearts').",
        "Excretory system composed of paired, metamerically repeated metanephridia.",
        "Central nervous system with dorsal cerebral ganglion and ventral nerve cord bearing paired segmental ganglia."
      ],
      bn: [
        "অভ্যন্তরীণ পর্দা (সেপ্টা) দ্বারা বিভক্ত সমখণ্ডকায়িত (মেটামেরিক) নলাকার দেহ।",
        "প্রতিটি খণ্ডে পৃথক প্রকোষ্ঠবিশিষ্ট প্রশস্ত সাইজোসিলোমিক প্রকৃত সিলোম।",
        "কাইটিন নির্মিত চলন অঙ্গ কিটি (সিটা) যা প্যারাপোডিয়ায় বা দেহত্বকে সরাসরি প্রোথিত থাকে।",
        "পৃষ্ঠীয় ও অঙ্কীয় রক্তনালী এবং স্পন্দনশীল মহাধমনী বলয় ('হৃৎপিণ্ড') সমৃদ্ধ বদ্ধ সংবহনতন্ত্র।",
        "প্রতিটি খণ্ডে এক জোড়া করে মেটানেফ্রিডিয়া নামক সুনির্দিষ্ট রেচন অঙ্গ।",
        "মস্তিষ্ক গ্যাংলিয়া ও প্রতি খণ্ডে স্নায়ুগাঁটযুক্ত অঙ্কীয় স্নায়ুরজ্জু।"
      ]
    },
    bodyPlanOverview: {
      en: "Annelids are metameric coelomates in which serial homology of internal organs enables localized neuromuscular control and powerful peristaltic burrowing. Clitellates possess a specialized reproductive cocoon-secreting glandular ring.",
      bn: "অ্যানেলিডা হলো খণ্ডায়িত সিলোমেট যাদের খণ্ডকায়নের ফলে শক্তিশালী পেরিস্টাল্টিক গর্ত খনন সম্ভব হয়। কেঁচো ও জোঁকের দেহে ক্লাইটেলাম বা ডিম্বথলি ক্ষরণকারী পট্টি থাকে।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Complete alimentary canal with regional specializations: muscular pharynx, esophagus with calciferous glands, storage crop, grinding muscular gizzard, and intestine with dorsal absorptive typhlosole.",
        bn: "সম্পূর্ণ পৌষ্টিকনালী যাতে গলবিল, অন্ননালী, খাদ্যথলি (ক্রপ), পেষণকারী গিজার্ড এবং শোষক টিফলোসোলযুক্ত অন্ত্র বিদ্যমান।"
      },
      respiratory: {
        en: "Cutaneous respiration via vascularized moist skin in earthworms and leeches; vascularized fleshy parapodia and branchial plumes in marine polychaetes.",
        bn: "কেঁচো ও জোঁকের আর্দ্র রক্তনালীপূর্ণ ত্বক দিয়ে শ্বসন; সামুদ্রিক পলিকিটে প্যারাপোডিয়া ও ফুলকা গুচ্ছ বিদ্যমান।"
      },
      circulatory: {
        en: "Closed vascular system; hemoglobin, chlorocruorin, or hemerythrin respiratory pigments dissolved freely in plasma; 4-5 pairs of contractile lateral aortic arches.",
        bn: "রক্তরসে হিমোগ্লোবিনযুক্ত বদ্ধ সংবহনতন্ত্র; ৪-৫ জোড়া সংকোচনশীল পার্শ্বীয় রক্তনালী বা হৃৎপিণ্ড।"
      },
      excretory: {
        en: "Metameric metanephridia; ciliated nephrostome draws fluid from coelomic compartment into convoluted tubule for selective reabsorption; exits via nephridiopore.",
        bn: "প্রতি খণ্ডে মেটানেফ্রিডিয়া; সিলিয়াযুক্ত নেফ্রোস্টোম দ্বারা সিলোমের তরল পরিশোধন করে নেফ্রিডিওপোর দিয়ে বর্জ্য বের করে।"
      },
      nervous: {
        en: "Bilobed dorsal cerebral ganglion ('brain'), circumpharyngeal connectives, and a ventral nerve cord with giant axons for rapid escape responses.",
        bn: "দ্বিখণ্ডিত মস্তিষ্ক, গলবিলীয় যোজক এবং দ্রুত প্রতিক্রিয়া সৃষ্টিকারী দানবীয় অ্যাক্সনযুক্ত অঙ্কীয় স্নায়ুরজ্জু।"
      },
      reproductive: {
        en: "Polychaetes primarily dioecious with external fertilization and epitoky; Oligochaetes and Hirudinea strictly monoecious with copulation, mutual sperm exchange, and cocoon deposition via clitellum.",
        bn: "পলিকিট একলিঙ্গ; কেঁচো ও জোঁক উভয়লিঙ্গ এবং ক্লাইটেলাম ক্ষরিত কোকুনে ডিম্বাণু ও শুক্রাণুর মিলন ঘটে।"
      },
      skeletal: {
        en: "Segmented hydrostatic skeleton maintained by non-compressible coelomic fluid working against longitudinal and circular muscle layers.",
        bn: "অনুদৈর্ঘ্য ও বৃত্তাকার পেশির বিরুদ্ধে ক্রিয়াশীল সিলোমিক তরলের হাইড্রোস্ট্যাটিক কঙ্কাল।"
      }
    },
    developmentAndLarvae: {
      en: "Marine polychaetes develop through a free-swimming apical-tufted trochophore larva; clitellates exhibit direct development inside protective cocoons without free larvae.",
      bn: "সামুদ্রিক পলিকিট সিলিয়াযুক্ত ট্রোকোফোর লার্ভার মাধ্যমে বৃদ্ধি পায়; কেঁচো ও জোঁক সরাসরি ডিম ফুটে বের হয়।",
      larvalTypes: ["Trochophore"]
    },
    habitatAndEcology: {
      en: "Marine mudflats, estuaries, coral reefs, benthic sediments, freshwater marshes, and terrestrial soils. Critical soil aerators, vermicomposters, and ecological prey foundations.",
      bn: "মাটি, স্বাদু পানির জলাভূমি, মোহনা ও গভীর সমুদ্র; মাটির উর্বরতা বৃদ্ধি ও ভার্মিকম্পোস্টে অপরিসীম ভূমিকা রাখে।"
    },
    evolutionarySignificance: {
      en: "Pioneered true metamerism (segmentation) and closed vascular system with hemoglobin, unlocking powerful peristaltic burrowing locomotion.",
      bn: "প্রকৃত সমখণ্ডকায়ন (মেটামেরিজম) ও হিমোগ্লোবিনযুক্ত বদ্ধ সংবহনতন্ত্রের সফল বিবর্তনীয় বিকাশ।"
    },
    importantClasses: [
      {
        name: "Polychaeta",
        nameBn: "পলিকিটা",
        descriptionEn: "Mostly marine; bearing fleshy parapodia with bundles of setae; head with tentacles and palps.",
        descriptionBn: "প্রধানত সামুদ্রিক; প্যারাপোডিয়া ও কিটিযুক্ত; মাথায় স্পর্শী শুঙ্গ ও চোখ থাকে।",
        representativeTaxa: "Alitta (Nereis), Namalycastis, Arenicola"
      },
      {
        name: "Clitellata - Oligochaeta",
        nameBn: "ক্লাইটেলাটা (অলিগোকিটা / কেঁচো)",
        descriptionEn: "Terrestrial and freshwater earthworms; clitellum present; few setae per segment; hermaphroditic.",
        descriptionBn: "স্থলজ ও স্বাদু পানির কেঁচো; ক্লাইটেলামযুক্ত; উভয়লিঙ্গ; মাটির বন্ধু।",
        representativeTaxa: "Metaphire, Perionyx, Lumbricus, Eisenia"
      },
      {
        name: "Clitellata - Hirudinea",
        nameBn: "ক্লাইটেলাটা (হিরুডিনিয়া / জোঁক)",
        descriptionEn: "Suckers at anterior and posterior ends; setae absent; exactly 33 segments; ectoparasitic blood feeders.",
        descriptionBn: "অগ্র ও পশ্চাৎ চোষকযুক্ত; কিটিহীন; নির্দিষ্ট ৩৩ খণ্ডক; রক্তচোষা পরজীবী জোঁক।",
        representativeTaxa: "Hirudinaria granulosa, Hirudo medicinalis"
      }
    ],
    canonicalSpeciesIds: ["sp-metaphire-posthuma", "sp-perionyx-excavatus", "sp-hirudinaria-granulosa", "sp-namalycastis-indica"],
    referenceIds: ["ref-siddiqui-2007-annelida", "ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-mollusca",
    slug: "mollusca",
    scientificName: "Mollusca",
    commonNameEn: "Molluscs (Snails, Bivalves & Cephalopods)",
    commonNameBn: "মলাস্কা (শামুক, ঝিনুক, অক্টোপাস ও স্কুইড)",
    taxonId: "taxon-mollusca",
    subkingdom: "Eumetazoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic (3 layers)",
    coelomType: "Eucoelomate (Schizocoely)",
    bodyOrganization: "Organ-system grade",
    estimatedSpeciesGlobal: 85000,
    cataloguedSpeciesCount: 10,
    diagnosticCharacteristics: {
      en: [
        "Soft unsegmented bilateral body plan divisible into head-foot and visceral mass.",
        "Fleshy mantle (pallium) that encloses the mantle cavity and secretes the protective calcareous shell.",
        "Ventral muscular foot specialized for creeping locomotion, burrowing, or modified into prey-capturing arms.",
        "Chitinous rasping radula in buccal cavity (lost secondarily in filter-feeding Bivalvia).",
        "Coelom reduced to small cavities surrounding the heart (pericardium), gonads, and nephridia.",
        "Ctenidia (comb gills) situated within mantle cavity for respiration and filter-feeding."
      ],
      bn: [
        "মস্তক-পদ এবং আন্তরযন্ত্রীয় পিণ্ড দ্বারা গঠিত কোমল অখণ্ডায়িত দেহ।",
        "মাংসল ম্যান্টল পর্দা যা ম্যান্টল গহ্বর গঠন করে এবং চুনময় খোলস ক্ষরণ করে।",
        "চলাচল বা গর্ত করার জন্য রূপান্তরিক অঙ্কীয় পেশিবহুল পদ (সেফালোপোডে কর্ষিকায় রূপান্তর)।",
        "মুখগহ্বরে কাইটিনময় চিরুনির মতো র্যাডুলা নামক রেতিজিহ্বা (ঝিনুকে অনুপস্থিত)।",
        "হৃৎপিণ্ড, রেচননালী ও জননাঙ্গের চারপাশে ক্ষুদ্র প্রকোষ্ঠে সীমাবদ্ধ প্রকৃত সিলোম।",
        "শ্বসন ও ছাঁকনের জন্য ম্যান্টল গহ্বরে টিনিডিয়া (ফুলকা) উপস্থিত।"
      ]
    },
    bodyPlanOverview: {
      en: "Molluscs are extraordinarily morphologically plastic, spanning microscopic snails to gigantic 14-meter colossal squids. The three primary functional regions are the sensory head, muscular foot, and shell-secreting visceral mantle.",
      bn: "প্রাণিজগতের দ্বিতীয় বৃহত্তম পর্ব; ক্ষুদ্র শামুক থেকে শুরু করে বিশালকায় গভীর সমুদ্রের স্কুইড পর্যন্ত বিস্তৃত। এদের দেহ মস্তক, পেশিবহুল পদ ও খোলস ক্ষরণকারী ম্যান্টলে বিভক্ত।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Complete gut with mouth, radula, salivary glands, esophagus, stomach with crystalline style in bivalves, large digestive gland (hepatopancreas), and anus emptying into mantle cavity.",
        bn: "র্যাডুলা, লালাগ্রন্থি, হেপাটোপ্যানক্রিয়াস ও পায়ুছিদ্রযুক্ত সম্পূর্ণ পরিপাকনালী; ঝিনুকে ক্রিস্টালাইন স্টাইল খাদ্য হজমে সহায়তা করে।"
      },
      respiratory: {
        en: "Feather-like ctenidia (gills) in mantle cavity; vascularized mantle wall functioning as pulmonary lung in terrestrial and freshwater pulmonate snails (e.g., Pila, Achatina).",
        bn: "ম্যান্টল গহ্বরে পালকসদৃশ টিনিডিয়া ফুলকা; স্থলজ ও উভচর শামুকে (যেমন পাইলা) ম্যান্টল ফুসফুসে রূপান্তরিত হয়ে বাতাস থেকে শ্বাস নেয়।"
      },
      circulatory: {
        en: "Open circulatory system in most (blood empties into hemocoel sinuses); closed circulatory system with systemic heart and accessory branchial hearts in active Cephalopods; copper-based hemocyanin pigment.",
        bn: "অধিকাংশে মুক্ত সংবহনতন্ত্র (হিমোসিল); দ্রুতগতির অক্টোপাস ও স্কুইডে রক্তনালীযুক্ত বদ্ধ সংবহনতন্ত্র ও ফুলকা হৃৎপিণ্ড; রক্তে নীল রঙের হিমোসায়ানিন বিদ্যমান।"
      },
      excretory: {
        en: "One or two metanephridia (kidneys or Organ of Bojanus) extracting wastes from pericardial coelom and discharging into mantle cavity.",
        bn: "হৃৎপিণ্ড সংলগ্ন পেরিকার্ডিয়াল সিলোম থেকে বর্জ্য নিষ্কাশনকারী মেটানেফ্রিডিয়া বা বোজানাসের অঙ্গ।"
      },
      nervous: {
        en: "Paired cerebral, pleural, pedal, and visceral ganglia connected by nerve cords; cephalopods possess an immense cartilaginous brain with image-forming camera eyes capable of complex learning.",
        bn: "গ্যাংলিয়াযুক্ত স্নায়ুতন্ত্র; সেফালোপোডদের (অক্টোপাস) মস্তিষ্ক অত্যন্ত উন্নত এবং মানুষের চোখের মতো লেন্সযুক্ত ক্যামেরা চোখ রয়েছে।"
      },
      reproductive: {
        en: "Mostly dioecious; gastropods include many hermaphrodites; cephalopods exhibit direct copulation using hectocotylus arm; broadcast spawning common in bivalves.",
        bn: "অধিকাংশ একলিঙ্গ; স্থলজ শামুক উভয়লিঙ্গ; পুরুষ সেফালোপোড হেক্টোকোটাইলাস কর্ষিকা দিয়ে শুক্রাণু থলি স্ত্রীর দেহে প্রবেশ করায়।"
      },
      skeletal: {
        en: "External or internal calcareous shell composed of calcium carbonate (calcite/aragonite) in a conchiolin protein matrix; hydrostatic hemocoelic turgor.",
        bn: "ক্যালসিয়াম কার্বনেট ও কনকিওলিন প্রোটিন নির্মিত শক্ত চুনময় বহিঃকঙ্কাল বা অভ্যন্তরীণ খোলস।"
      }
    },
    developmentAndLarvae: {
      en: "Primitive marine taxa develop through free-swimming trochophore larvae into veliger larvae; unionid freshwater mussels produce parasitic fish-hooking glochidia larvae; cephalopods direct.",
      bn: "সামুদ্রিক প্রজাতিতে ট্রোকোফোর ও ভেলিগার লার্ভা; স্বাদু পানির ঝিনুকে মাছের ফুলকায় পরজীবী গ্লোচিডিয়াম লার্ভা; সেফালোপোডে সরাসরি শিশু জন্মায়।",
      larvalTypes: ["Trochophore", "Veliger", "Glochidium"]
    },
    habitatAndEcology: {
      en: "Abundant across all biomes: deep abyss, coral reefs, pelagic ocean, mangrove tidal zones, freshwater haors, river systems, and arid terrestrial environments.",
      bn: "সমুদ্রের গভীর তলদেশ, প্রবালপ্রাচীর, হাওর, নদী ও স্থলভাগের সর্বত্র বিপুল সংখ্যায় বাস করে।"
    },
    evolutionarySignificance: {
      en: "Demonstrates the power of morphological radiation from a generalized hypothetical ancestral mollusc body plan into burrowers, grazers, filter feeders, and hyper-intelligent pelagic predators.",
      bn: "একটি সাধারণ আদিম দেহকাঠামো থেকে কীভাবে শামুক, ঝিনুক ও বুদ্ধিমান শিকারী অক্টোপাসের মতো বৈচিত্র্যময় রূপ সৃষ্টি হয় তার অন্যতম সেরা উদাহরণ।"
    },
    importantClasses: [
      {
        name: "Gastropoda",
        nameBn: "গ্যাস্ট্রোপোডা (শামুক)",
        descriptionEn: "Undergo embryonic torsion; univalved spirally coiled shell or shell-less; foot broad for creeping.",
        descriptionBn: "ভ্রূণাবস্থায় টরশন বা ১৮০ ডিগ্রি মোচড় ঘটে; একক কুণ্ডলিত খোলসযুক্ত শামুক ও খোলসহীন স্ল্যাগ।",
        representativeTaxa: "Pila globosa, Bellamya bengalensis, Achatina fulica, Conus"
      },
      {
        name: "Bivalvia",
        nameBn: "বাইভালভিয়া (ঝিনুক)",
        descriptionEn: "Two hinged shell valves; laterally compressed; headless filter-feeders with wedge foot.",
        descriptionBn: "দুটি কপাটিকাযুক্ত চুনময় খোলস; মস্তকবিহীন ছাঁকনভোজী ঝিনুক।",
        representativeTaxa: "Lamellidens, Magallana, Tridacna, Mytilus"
      },
      {
        name: "Cephalopoda",
        nameBn: "সেফালোপোডা (অক্টোপাস ও স্কুইড)",
        descriptionEn: "Foot modified into arms and funnel siphon; closed circulation; giant brain; camera eyes.",
        descriptionBn: "পা কর্ষিকায় রূপান্তরিত; বদ্ধ সংবহনতন্ত্র; অত্যন্ত উন্নত মস্তিষ্ক ও চোখ।",
        representativeTaxa: "Octopus, Uroteuthis, Sepiella, Nautilus"
      },
      {
        name: "Polyplacophora",
        nameBn: "পলিপ্ল্যাকোফোরা (কাইটন)",
        descriptionEn: "Flattened marine molluscs with 8 overlapping dorsal shell plates.",
        descriptionBn: "পিঠে ৮টি পরপর সাজানো চুনময় প্লেটযুক্ত সামুদ্রিক কাইটন।",
        representativeTaxa: "Tonicella, Chiton"
      }
    ],
    canonicalSpeciesIds: ["sp-pila-globosa", "sp-lamellidens-marginalis", "sp-bellamya-bengalensis", "sp-uroteuthis-duvaucelii", "sp-sepiella-inermis"],
    referenceIds: ["ref-siddiqui-2007-mollusca", "ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-arthropoda",
    slug: "arthropoda",
    scientificName: "Arthropoda",
    commonNameEn: "Arthropods (Insects, Crustaceans, Spiders & Centipedes)",
    commonNameBn: "আর্থ্রোপোডা (পতঙ্গ, চিংড়ি, কাঁকড়া ও মাকড়সা)",
    taxonId: "taxon-arthropoda",
    subkingdom: "Eumetazoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic (3 layers)",
    coelomType: "Eucoelomate (Schizocoely)",
    bodyOrganization: "Organ-system grade",
    estimatedSpeciesGlobal: 1250000,
    cataloguedSpeciesCount: 18,
    diagnosticCharacteristics: {
      en: [
        "Metameric bilateral body divided into functional tagmata (head, thorax, abdomen or cephalothorax).",
        "Jointed paired appendages (arthropodization) specialized for walking, swimming, feeding, and sensing.",
        "Rigid, chitinous, sclerotized exoskeleton providing muscle anchorage and periodic ecdysis (molting).",
        "Open circulatory system with dorsal contractile heart discharging into expansive hemocoel cavity.",
        "Compound eyes with multiple photoreceptor ommatidia providing wide-angle motion detection.",
        "Respiration through tracheae, book lungs, or branchial gills."
      ],
      bn: [
        "সুনির্দিষ্ট ট্যাগমাটায় (মস্তক, বক্ষ ও উদর) বিভক্ত খণ্ডায়িত দ্বিপার্শ্বীয় দেহ।",
        "চলাচল, সাঁতার, খাদ্যগ্রহণ ও সংবেদনের জন্য খাঁজকাটা সন্ধিল উপাঙ্গ।",
        "পেশি সংযোগের জন্য কাইটিন ও প্রোটিন নির্মিত শক্ত বহিঃকঙ্কাল যা বৃদ্ধি পেতে পর্যায়ক্রমে নির্মোচন (মল্টিং) হয়।",
        "হিমোসিল ও পৃষ্ঠীয় হৃৎপিণ্ডযুক্ত মুক্ত সংবহনতন্ত্র।",
        "ওমাটিডিয়া নামক দৃষ্টি একক সমৃদ্ধ যৌগিক পুঞ্জাক্ষি।",
        "শ্বাসনালী (ট্রাকিয়া), বুক লাং অথবা ফুলকার সাহায্যে উন্নত শ্বসন।"
      ]
    },
    bodyPlanOverview: {
      en: "Arthropoda is the overwhelmingly dominant phylum in the Animal Kingdom, representing over 80% of all named animal species. The evolutionary trifecta of a protective chitinous exoskeleton, jointed appendages, and flight (in hexapods) enabled complete planetary radiation.",
      bn: "প্রাণিজগতের বৃহত্তম পর্ব যা পৃথিবীর পরিচিত সকল প্রাণীর ৮০ শতাংশেরও বেশি ধারণ করে। কাইটিন বহিঃকঙ্কাল, সন্ধিল উপাঙ্গ ও পতঙ্গের ওড়ার ক্ষমতা এদের বৈশ্বিক সাফল্যের মূল ভিত্তি।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Complete alimentary canal divided into ectodermal foregut (stomatodeum with muscular proventriculus/gastric mill), endodermal midgut (mesenteron for enzyme secretion and absorption), and ectodermal hindgut (proctodeum for water resorption).",
        bn: "মুখ, খাদ্যথলি, পেষণকারী গ্যাস্ট্রিক মিলযুক্ত মুখগহ্বর, মধ্যান্ত্র এবং জল শোষণকারী পশ্চাদান্ত্রে বিভক্ত সম্পূর্ণ পৌষ্টিকনালী।"
      },
      respiratory: {
        en: "Highly diversified: terrestrial insects employ branching tracheal tubules delivering oxygen directly to cells; arachnids utilize internal book lungs; aquatic crustaceans breathe via feather-like gills.",
        bn: "পতঙ্গে বায়ু পরিবহনকারী ট্রাকিয়া বা শ্বাসনালী; মাকড়সায় বুক লাং; জলজ চিংড়ি ও কাঁকড়ায় ফুলকা বিদ্যমান।"
      },
      circulatory: {
        en: "Open circulatory system with dorsal tubular heart equipped with paired ostia valves; hemolymph bathes organs in the hemocoel sinus; hemocyanin in crustaceans/arachnids; colorless hemolymph in hexapods.",
        bn: "অস্টিয়াসহ পৃষ্ঠীয় নলাকার হৃৎপিণ্ড ও হিমোসিলযুক্ত মুক্ত সংবহনতন্ত্র; পতঙ্গের রক্ত বর্ণহীন এবং গ্যাসবহনে অংশ নেয় না।"
      },
      excretory: {
        en: "Terrestrial insects and arachnids utilize Malpighian tubules suspended in hemolymph expelling semi-solid uric acid (uricotelic); aquatic crustaceans utilize antennal (green) glands expelling ammonia.",
        bn: "স্থলজ পতঙ্গে ম্যালপিজিয়ান নালিকা ইউরিক অ্যাসিড হিসেবে বর্জ্য ফেলে; জলজ চিংড়িতে গ্রিন গ্ল্যান্ড বা অ্যান্টেনাল গ্রন্থি অ্যামোনিয়া নিষ্কাশন করে।"
      },
      nervous: {
        en: "Highly centralized brain (protocerebrum, deutocerebrum, tritocerebrum) with circumesophageal connectives and ventral double nerve cord with segmental ganglia; compound eyes and sensory antennae.",
        bn: "উন্নত ত্রিখণ্ডিত মস্তিষ্ক, দ্বৈত অঙ্কীয় স্নায়ুরজ্জু, পুঞ্জাক্ষি এবং সংবেদী শুঙ্গ।"
      },
      reproductive: {
        en: "Strictly dioecious; internal fertilization using specialized copulatory organs; oviparity predominant; sophisticated courtship rituals and parental brood care in decapods and social insects.",
        bn: "একলিঙ্গ; অভ্যন্তরীণ নিষেক; স্ত্রী চিংড়ি পেটে ডিম বহন করে; সামাজিক মৌমাছি ও পিঁপড়ায় চরম শ্রমবিভাজন।"
      },
      skeletal: {
        en: "Rigid multi-layered exoskeleton composed of chitin cross-linked with sclerotin proteins, hardened by calcium salts in crustaceans; molted through ecdysis under ecdysone hormonal control.",
        bn: "কাইটিন ও প্রোটিনের শক্ত কিউটিকল কঙ্কাল যা বৃদ্ধি পেলে একডাইসোন হরমোনের প্রভাবে খোলস পরিবর্তন করে।"
      }
    },
    developmentAndLarvae: {
      en: "Metamorphosis in insects ranges from ametabolous (direct) to hemimetabolous (nymphs) and holometabolous (egg, larva, pupa, adult); marine decapods hatch as zoea, mysis, or megalopa larvae.",
      bn: "পতঙ্গে রূপান্তর ঘটে (ডিম-লার্ভা-পিউপা-পূর্ণাঙ্গ); জলজ চিংড়িতে জুয়েয়া ও মাইসিস লার্ভা দেখা যায়।",
      larvalTypes: ["Nauplius", "Zoea", "Megalopa", "Caterpillar", "Maggot", "Nymph"]
    },
    habitatAndEcology: {
      en: "Pervades every conceivable habitat: abyssal vents, open ocean, estuaries, rivers, subterranean caves, soil, trees, air, and extreme polar deserts.",
      bn: "গভীর সমুদ্র থেকে মরুভূমি, বনজঙ্গল এবং বায়ুমণ্ডলের আকাশে সর্বত্র রাজত্ব করে।",
      primaryHabitats: ["Marine", "Freshwater", "Terrestrial", "Aerial", "Subterranean"]
    },
    evolutionarySignificance: {
      en: "Epitomizes biological radiation, pioneering winged flight, complex social societies, plant-insect coevolution, and hyper-dense ecological biomass.",
      bn: "প্রাণিজগতে ওড়ার ক্ষমতার প্রথম বিকাশ এবং ফুল ও পতঙ্গের পারস্পরিক বিবর্তনের প্রধান চালিকাশক্তি।"
    },
    importantClasses: [
      {
        name: "Insecta (Hexapoda)",
        nameBn: "ইনসেকটা (পতঙ্গ)",
        descriptionEn: "Head, thorax, abdomen; 3 pairs of walking legs; 2 pairs of wings; tracheal respiration.",
        descriptionBn: "মাথা, বক্ষ ও উদর; ৩ জোড়া পা; ২ জোড়া ডানা; ট্রাকিয়া দ্বারা শ্বসন।",
        representativeTaxa: "Musca, Culex, Papilio, Schistocerca, Camponotus"
      },
      {
        name: "Malacostraca (Crustacea)",
        nameBn: "ম্যালাকোস্ট্রাকা (ক্রাস্টাশিয়া)",
        descriptionEn: "Cephalothorax and pleon; 5 pairs of pereiopods; 2 pairs of antennae; aquatic branchial gills.",
        descriptionBn: "শিরোবক্ষ ও উদর; ৫ জোড়া হাঁটার পা; ২ জোড়া শুঙ্গ; জলজ ফুলকা।",
        representativeTaxa: "Macrobrachium, Scylla, Penaeus, Homarus"
      },
      {
        name: "Arachnida (Chelicerata)",
        nameBn: "অ্যারাকনিডা (মাকড়সা ও বিছে)",
        descriptionEn: "Chelicerae and pedipalps; 4 pairs of walking legs; no antennae; book lungs/tracheae.",
        descriptionBn: "চেলিসেরা ও পেডিপ্যাল্প; ৪ জোড়া পা; শুঙ্গহীন; বুক লাং দ্বারা শ্বসন।",
        representativeTaxa: "Heterometrus, Nephila, Latrodectus"
      },
      {
        name: "Myriapoda",
        nameBn: "মিরিয়াপোডা (কেন্নো ও বিছা)",
        descriptionEn: "Elongated homonomous body with numerous leg-bearing segments; head with single pair of antennae.",
        descriptionBn: "অসংখ্য পা বিশিষ্ট লম্বা খণ্ডায়িত দেহ; কেন্নো ও শতপদী বিছা।",
        representativeTaxa: "Scolopendra, Julus"
      }
    ],
    canonicalSpeciesIds: ["sp-macrobrachium-rosenbergii", "sp-scylla-olivacea", "sp-musca-domestica", "sp-culex-quinquefasciatus", "sp-papilio-demoleus"],
    referenceIds: ["ref-siddiqui-2008-arthropoda", "ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-echinodermata",
    slug: "echinodermata",
    scientificName: "Echinodermata",
    commonNameEn: "Echinoderms (Sea Stars, Urchins & Sea Cucumbers)",
    commonNameBn: "একাইনোডার্মাটা (তারা মাছ, সমুদ্র শসা ও সমুদ্র আর্চিন)",
    taxonId: "taxon-echinodermata",
    subkingdom: "Eumetazoa",
    symmetry: "Secondary pentaradial",
    germLayers: "Triploblastic (3 layers)",
    coelomType: "Eucoelomate (Enterocoely)",
    bodyOrganization: "Organ-system grade",
    estimatedSpeciesGlobal: 7000,
    cataloguedSpeciesCount: 3,
    diagnosticCharacteristics: {
      en: [
        "Adults exhibit secondary pentamerous (pentaradial) symmetry; larvae are strictly bilateral.",
        "Mesodermal endoskeleton formed of calcified calcareous ossicles or plates.",
        "Unique hydraulic water vascular (ambulacral) system operating numerous exterior tube feet (podia).",
        "Mutable collagenous tissue ('catch collagen') capable of rapidly alternating between rigid and fluid states.",
        "True enterocoelous coelomates belonging to the ancestral Deuterostome lineage (closely related to Chordata)."
      ],
      bn: [
        "প্রাপ্তবয়স্করা দ্বিতীয়ক পঞ্চ-অরীয় প্রতিসম হলেও এদের লার্ভা সম্পূর্ণ দ্বিপার্শ্বীয় প্রতিসম।",
        "মেসোডার্ম থেকে উৎপন্ন চুনময় অসিকেল নির্মিত অন্তঃকঙ্কাল।",
        "নালিপদ (টিউব ফিট) পরিচালনাকারী অনন্য পানি সংবহনতন্ত্র (অ্যাম্বুলাক্রাল সিস্টেম)।",
        "পরিবর্তনশীল কোলাজেন টিস্যু যা মুহূর্তের মধ্যে শরীরকে শক্ত বা নরম করতে পারে।",
        "ডিউটেরোস্টোমীয় ভ্রূণীয় বিকাশের অধিকারী (কর্ডাটার নিকটতম অমেরুদণ্ডী জ্ঞাতি)।"
      ]
    },
    bodyPlanOverview: {
      en: "Echinoderms are entirely marine, benthic deuterostomes. Their water vascular system operates like a hydraulic network, using internal seawater fluid pressure to extend and retract hundreds of suction-cupped tube feet for movement and feeding.",
      bn: "একাইনোডার্মরা সম্পূর্ণ সামুদ্রিক তলদেশবাসী প্রাণী। এদের পানি সংবহনতন্ত্র হাইড্রোলিক মোটরের মতো কাজ করে পানির চাপে শত শত নালিপদ প্রসারিত করে চলাচল ও খাদ্য গ্রহণে সাহায্য করে।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Complete gut in most; oral mouth on underside, aboral anus on top; sea stars possess an eversible cardiac stomach capable of extruding outside the body into bivalve shells for external digestion.",
        bn: "অঙ্কীয় মুখে ও পৃষ্ঠীয় পায়ুতে বিভক্ত পৌষ্টিকনালী; তারামাছ নিজের পাকস্থলী দেহের বাইরে বের করে ঝিনুকের খোলসের ভেতরে খাবার হজম করতে পারে।"
      },
      respiratory: {
        en: "Thin dermal branchiae (papulae or skin gills) protruding through skeletal ossicles; respiratory trees in holothuroids (sea cucumbers); peristomial gills in sea urchins.",
        bn: "দেহের উপর বের হয়ে আসা প্যাপুলা বা চামড়ার ফুলকা; সমুদ্র শসাতে শ্বসন বৃক্ষ (রেসপিরেটরি ট্রি) থাকে।"
      },
      circulatory: {
        en: "Hemal and perihemal system derived from coelomic sinuses; primary nutrient circulation executed by coelomic fluid currents circulated by ciliated peritoneum.",
        bn: "সিলোমিক তরল ও হিমাল তন্ত্র যা সিলিয়ার স্পন্দনে পুষ্টি সারা দেহে ছড়িয়ে দেয়।"
      },
      excretory: {
        en: "No specialized excretory organs; ammonotelic; wandering amoebocytes engulf particulate wastes and discharge them through papulae or tube feet.",
        bn: "কোনো রেচন অঙ্গ নেই; রক্তকোষ বা সিলিয়াযুক্ত নালিপদ দিয়ে সরাসরি ব্যাপন ঘটে।"
      },
      nervous: {
        en: "Decentralized nerve ring encircling mouth with radial nerve cords extending into each ray; no cephalized brain; ocelli at arm tips in sea stars.",
        bn: "মুখবেষ্টনকারী স্নায়ুবলয় ও প্রতিটি বাহুতে বিস্তৃত অরীয় স্নায়ু; কোনো মস্তিষ্ক নেই।"
      },
      reproductive: {
        en: "Dioecious; paired gonads in each ray; mass synchronized external broadcast spawning triggered by temperature and moon phases; extraordinary arm/disc regeneration.",
        bn: "একলিঙ্গ; বাহুর ভেতর জননাঙ্গ থাকে; পানিতে ডিম ও শুক্রাণু ছড়ায়; হারিয়ে যাওয়া বাহু পুনরুৎপাদনের অসাধারণ ক্ষমতা।"
      },
      skeletal: {
        en: "Mesodermal endoskeleton composed of porous monocrystalline calcite ossicles connected by mutable catch collagen; develops spines, tubercles, and pincer-like pedicellariae.",
        bn: "চুনময় অসিকেল ও কাঁটা দ্বারা গঠিত শক্ত মেসোডার্মাল অন্তঃকঙ্কাল।"
      }
    },
    developmentAndLarvae: {
      en: "Deuterostome development with radial indeterminate cleavage and enterocoely; free-swimming ciliated bilateral larvae undergo complex metamorphosis into radial adults.",
      bn: "দ্বিপার্শ্বীয় প্রতিসম সিলিয়াযুক্ত বাইপিনারিয়া ও প্লুটিয়াস লার্ভা রূপান্তরের মাধ্যমে পঞ্চ-অরীয় পূর্ণাঙ্গ প্রাণীতে পরিণত হয়।",
      larvalTypes: ["Bipinnaria", "Brachiolaria", "Pluteus", "Auricularia"]
    },
    habitatAndEcology: {
      en: "Strictly marine; stenohaline (cannot tolerate freshwater); key apex predators in intertidal pools and dominant biomass grazers in deep ocean plains.",
      bn: "সম্পূর্ণ সামুদ্রিক; স্বাদু পানিতে এরা বাঁচতে পারে না; প্রবালপ্রাচীর ও সমুদ্রের তলদেশের প্রধান খাদ্য খাদক।",
      primaryHabitats: ["Marine Benthic", "Coral Reefs", "Deep Abyssal Plains", "Intertidal Zones"]
    },
    evolutionarySignificance: {
      en: "Sister deuterostome clade to Chordata, sharing radial indeterminate cleavage, blastopore becoming anus, and enterocoelous mesoderm formation.",
      bn: "কর্ডাটার নিকটতম আত্মীয় ডিউটেরোস্টোম পর্ব; ভ্রূণবিকাশে ব্লাস্টোপোর পায়ুতে পরিণত হওয়া কর্ডাটার সাথে সাধারণ পূর্বপুরুষ নির্দেশ করে।"
    },
    importantClasses: [
      {
        name: "Asteroidea",
        nameBn: "অ্যাস্টেরয়েডিয়া (তারা মাছ)",
        descriptionEn: "Flattened star-shaped body with 5+ arms merging broadly with central disc; open ambulacral grooves.",
        descriptionBn: "তারকাকৃতির দেহ; ৫টি বাহু কেন্দ্রীয় চাকতির সাথে যুক্ত; মাংসাশী।",
        representativeTaxa: "Astropecten indicus, Asterias"
      },
      {
        name: "Echinoidea",
        nameBn: "একিনয়েডিয়া (সমুদ্র আর্চিন)",
        descriptionEn: "Globose or disc-like test of fused ossicles; long movable spines; Aristotle's lantern chewing apparatus.",
        descriptionBn: "গোলাকার কাঁটাময় খোলসযুক্ত সমুদ্র আর্চিন; অ্যারিস্টটলের লণ্ঠন নামক দাঁতযুক্ত মুখ।",
        representativeTaxa: "Echinometra mathaei, Strongylocentrotus"
      },
      {
        name: "Holothuroidea",
        nameBn: "হলোথুরয়েডিয়া (সমুদ্র শসা)",
        descriptionEn: "Elongated leathery body along oral-aboral axis; microscopic ossicles in dermis; internal respiratory tree.",
        descriptionBn: "লম্বা শসাসদৃশ চামড়াময় দেহ; ক্ষুদ্র চুনময় অসিকেল; শ্বাস বৃক্ষযুক্ত।",
        representativeTaxa: "Holothuria scabra, Stichopus"
      },
      {
        name: "Ophiuroidea",
        nameBn: "ওফিউরয়েডিয়া (ভঙ্গুর তারা)",
        descriptionEn: "Slender whiplike arms sharply demarcated from central disc; rapid serpentine locomotion.",
        descriptionBn: "চিকন সাপের মতো দ্রুত নড়নশীল ভঙ্গুর বাহুযুক্ত তারা মাছ।",
        representativeTaxa: "Ophiura, Ophiothrix"
      }
    ],
    canonicalSpeciesIds: ["sp-holothuria-scabra", "sp-astropecten-indicus", "sp-echinometra-mathaei"],
    referenceIds: ["ref-hickman-2020", "ref-ruppert-2004"]
  },
  {
    id: "phylum-chordata",
    slug: "chordata",
    scientificName: "Chordata",
    commonNameEn: "Chordates (Tunicates, Lancelets & Vertebrates)",
    commonNameBn: "কর্ডাটা (মেরুদণ্ডী ও আদি কর্ডাট প্রাণী)",
    taxonId: "taxon-chordata",
    subkingdom: "Eumetazoa",
    symmetry: "Bilateral",
    germLayers: "Triploblastic (3 layers)",
    coelomType: "Eucoelomate (Enterocoely)",
    bodyOrganization: "Organ-system grade",
    estimatedSpeciesGlobal: 65000,
    cataloguedSpeciesCount: 197,
    diagnosticCharacteristics: {
      en: [
        "Notochord: flexible rod-like structure providing axial skeletal support at some life cycle stage.",
        "Single, dorsal, tubular, hollow nerve cord situated dorsal to the notochord.",
        "Pharyngeal gill slits or pouches perforating lateral walls of the pharynx at some stage.",
        "Muscular post-anal tail extending posterior to the anal opening, providing propulsion.",
        "Endostyle or thyroid gland in the ventral pharyngeal floor binding iodine."
      ],
      bn: [
        "নটোকর্ড: জীবনের যেকোনো দশায় পৃষ্ঠদেশে অবস্থিত স্থিতিস্থাপক নমনীয় দণ্ডাকার কাঠামো।",
        "নটোকর্ডের উপরে অবস্থিত একক, ফাঁপা, পৃষ্ঠীয় নলাকার স্নায়ুরজ্জু।",
        "গলবিলের দুই পাশে জোড়ায় জোড়ায় গলবিলীয় ফুলকা ছিদ্র বা খাঁজ।",
        "পায়ুর পেছনে অবস্থিত পেশিবহুল পশ্চাৎ-পায়ু পুচ্ছ যা সন্তরণে সহায়তা করে।",
        "গলবিলের অঙ্কীয়দেশে অবস্থিত আয়োডিন শোষণকারী এন্ডোস্টাইল বা থাইরয়েড গ্রন্থি।"
      ]
    },
    bodyPlanOverview: {
      en: "Chordates encompass invertebrate protochordates (tunicates and lancelets) and the dominant subphylum Vertebrata. The five hallmark synapomorphies underpin the evolutionary transition from ciliary suspension feeders to active swimming predators.",
      bn: "কর্ডাটার মধ্যে আদি অমেরুদণ্ডী প্রোটোকর্ডাটা এবং অত্যন্ত প্রভাবশালী সাবফাইলাম ভার্টিব্রাটা (মেরুদণ্ডী) অন্তর্ভুক্ত। নটোকর্ড, পৃষ্ঠীয় স্নায়ুরজ্জু ও গলবিলীয় ফুলকা ছিদ্র এদের প্রধান শনাক্তকারী লক্ষণ।"
    },
    anatomyAndSystems: {
      digestive: {
        en: "Complete digestive tract with regional specialization into stomach, small intestine with liver and pancreas, and large intestine; cloaca or terminal anus.",
        bn: "যকৃৎ ও অগ্ন্যাশয় সমৃদ্ধ পাকস্থলী ও অন্ত্রযুক্ত অত্যন্ত উন্নত ও বিশেষায়িত পরিপাকতন্ত্র।"
      },
      respiratory: {
        en: "Internal gills supported by branchial arches in aquatic fishes; vascularized spongy or alveolated lungs in air-breathing tetrapods; cutaneous exchange in amphibians.",
        bn: "মাছে ফুলকা খিলানযুক্ত অভ্যন্তরীণ ফুলকা; উভচর, সরীসৃপ, পাখি ও স্তন্যপায়ীতে স্পঞ্জের মতো রক্তনালীপূর্ণ ফুসফুস।"
      },
      circulatory: {
        en: "Closed circulatory system with ventral muscular heart containing 2 (fishes), 3 (amphibians, reptiles), or 4 complete chambers (birds, mammals); red blood cells with iron hemoglobin.",
        bn: "হিমোগ্লোবিনযুক্ত বদ্ধ সংবহনতন্ত্র; ২-প্রকোষ্ঠী (মাছ), ৩-প্রকোষ্ঠী (উভচর) অথবা ৪-প্রকোষ্ঠী (পাখি ও স্তন্যপায়ী) হৃদপিণ্ড।"
      },
      excretory: {
        en: "Paired pronephric, mesonephric, or metanephric kidneys filtering blood from systemic circulation; excretion of ammonia (fishes), urea (mammals, amphibians, sharks), or uric acid (birds, reptiles).",
        bn: "রক্ত পরিশ্রুতকারী এক জোড়া মেটানেফ্রিক বৃক্ক; অ্যামোনিয়া, ইউরিয়া বা ইউরিক অ্যাসিড রেচন।"
      },
      nervous: {
        en: "Highly cephalized tripartite brain (forebrain, midbrain, hindbrain) protected within a cranium; spinal cord protected by vertebral column; complex telereceptive senses.",
        bn: "করোটির ভেতরে সুরক্ষিত অত্যন্ত জটিল অগ্র, মধ্য ও পশ্চাৎ মস্তিষ্ক এবং মেরুদণ্ডের ভেতর সুরক্ষিত সুষুম্নাকাণ্ড।"
      },
      reproductive: {
        en: "Strictly dioecious; fertilization external in aquatic non-amniotes or internal in terrestrial amniotes; oviparous, ovoviviparous, or placental viviparous.",
        bn: "একলিঙ্গ; ডিম্বজ অথবা গর্ভধারণকারী জরায়ুজ (স্তন্যপায়ী); উন্নত যত্ন ও অপত্য লালন।"
      },
      skeletal: {
        en: "Living internal endoskeleton composed of cartilage and/or vascularized bone that grows continuously with the organism.",
        bn: "তরুণাস্থি বা অস্থি নির্মিত জীবন্ত অন্তঃকঙ্কাল যা দেহের সাথে সাথে বৃদ্ধি পায়।"
      }
    },
    developmentAndLarvae: {
      en: "Urochordates possess a swimming tadpole larva displaying all 5 chordate hallmarks; vertebrates develop embryonic somites, neural crest tissue, and pharyngeal arches.",
      bn: "ইউরোকর্ডাটায় ব্যাঙাচিসদৃশ মুক্ত সাঁতারু লার্ভা থাকে; মেরুদণ্ডীদের ভ্রূণে নিউরাল ক্রেস্ট ও সোমাইট বিকশিত হয়।",
      larvalTypes: ["Tadpole larva (Tunicates)", "Ammocoetes (Lamprey)"]
    },
    habitatAndEcology: {
      en: "Cosmopolitan globally: oceans, deep trenches, rivers, wetlands, deserts, alpine peaks, rainforests, and powered atmospheric flight.",
      bn: "সমুদ্র, নদী, বনভূমি, আকাশ ও মরুভূমিসহ পৃথিবীর প্রতিটি প্রাকৃতিক পরিবেশে শীর্ষ অবস্থান দখলকারী।",
      primaryHabitats: ["Marine", "Freshwater", "Estuarine", "Terrestrial", "Aerial"]
    },
    evolutionarySignificance: {
      en: "Evolved the cranium, vertebrate column, motorized jaws, limb endoskeletons, and amniotic cleidoic egg, culminating in endothermic flight and cognitive complexity.",
      bn: "করোটি, মেরুদণ্ড, চোয়াল, পা এবং অ্যামনিওটিক ডিম্ব উদ্ভাবনের মাধ্যমে ডাঙায় স্থায়ী বিজয়ের সূচনা করেছে।"
    },
    importantClasses: [
      {
        name: "Pisces (Agnatha, Chondrichthyes, Osteichthyes)",
        nameBn: "মৎস্যকুল (৭৩টি জীবন্ত বর্গ)",
        descriptionEn: "Gill-breathing aquatic craniates with paired fins; 73 living orders catalogued in BiotaElite.",
        descriptionBn: "ফুলকা ও পাখনাধারী জলজ মেরুদণ্ডী; বায়োটাএলিটে ৭৩টি জীবন্ত বর্গ অন্তর্ভুক্ত।",
        representativeTaxa: "Tenualosa, Labeo, Chiloscyllium, Latimeria"
      },
      {
        name: "Amphibia",
        nameBn: "অ্যাম্ফিবিয়া (উভচর)",
        descriptionEn: "Moist glandular skin; anamniotic eggs; aquatic larval stage with gill respiration; adults typically tetrapod.",
        descriptionBn: "ভেজা গ্রন্থিময় ত্বক; খোসাহীন ডিম; জলজ লার্ভা ও স্থলজ প্রাপ্তবয়স্ক।",
        representativeTaxa: "Fejervarya, Polypedates, Duttaphrynus"
      },
      {
        name: "Reptilia",
        nameBn: "রেপটিলিয়া (সরীসৃপ)",
        descriptionEn: "Epidermal keratinous scales; cleidoic amniotic egg; pulmonary respiration; ectothermic.",
        descriptionBn: "শুষ্ক আঁইশযুক্ত ত্বক; অ্যামনিওটিক ডিম; ফুসফুস শ্বসনকারী শীতলরক্তের প্রাণী।",
        representativeTaxa: "Varanus, Calotes, Fowlea, Bungarus"
      },
      {
        name: "Aves",
        nameBn: "অ্যাভিস (পাখি)",
        descriptionEn: "Feathered bipedal archosaurs; forelimbs modified as wings; 4-chambered heart; endothermic.",
        descriptionBn: "পালকযুক্ত দ্বিপ্রদী প্রাণী; ওড়ার জন্য পাখা; ৪-প্রকোষ্ঠী হৃদপিণ্ড ও উষ্ণরক্তের প্রাণী।",
        representativeTaxa: "Passer, Columba, Ceryle"
      },
      {
        name: "Mammalia",
        nameBn: "ম্যামালিয়া (স্তন্যপায়ী)",
        descriptionEn: "Mammary glands; hair; neocortex; 3 middle ear ossicles; 4-chambered heart; endothermic.",
        descriptionBn: "স্তন্যগ্রন্থি; লোমযুক্ত ত্বক; মধ্যকর্ণে ৩টি অস্থি; ৪-প্রকোষ্ঠী হৃদপিণ্ড।",
        representativeTaxa: "Panthera, Platanista, Homo"
      }
    ],
    canonicalSpeciesIds: ["sp-tenualosa-ilisha", "sp-labeo-rohita", "sp-fejervarya-limnocharis", "sp-varanus-bengalensis"],
    referenceIds: ["ref-hickman-2020", "ref-iucn-bd-2015-amphibians-reptiles"]
  }
];
