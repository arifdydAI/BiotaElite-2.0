// src/data/vertebratesData.ts
// Comprehensive Zoological Profiles for the 7 Living Vertebrate Classes & Lineages
// References: Hickman et al. (2020), Kardong (2018), Nelson et al. (2016)

export interface VertebrateClassProfile {
  id: string;
  slug: string;
  className: string;
  classBn: string;
  commonNameEn: string;
  commonNameBn: string;
  isFishGroup: boolean;
  fishPortalRoute?: string;
  estimatedLivingSpecies: number;
  cataloguedSpeciesCount: number;
  diagnosticCharacteristics: {
    en: string[];
    bn: string[];
  };
  bodyForm: { en: string; bn: string };
  skeletalSystem: { en: string; bn: string };
  integument: { en: string; bn: string };
  feedingAndDigestion: { en: string; bn: string };
  respiration: { en: string; bn: string };
  circulation: { en: string; bn: string };
  excretion: { en: string; bn: string };
  nervousSystem: { en: string; bn: string };
  reproduction: { en: string; bn: string };
  habitatAndEcology: { en: string; bn: string };
  evolutionarySignificance: { en: string; bn: string };
  thermoregulation?: { en: string; bn: string };
  sensorySystems?: { en: string; bn: string };
  muscularSystem?: { en: string; bn: string };
  development?: { en: string; bn: string };
  adaptations?: { en: string; bn: string };
  ecologicalRole?: { en: string; bn: string };
  majorOrders: Array<{ name: string; nameBn: string; descEn: string; descBn: string }>;
  canonicalSpeciesIds: string[];
  referenceIds: string[];
}

export const VERTEBRATE_CLASSES_DATA: VertebrateClassProfile[] = [
  {
    id: "vert-agnatha",
    slug: "agnatha",
    className: "Superclass Agnatha (Cyclostomata)",
    classBn: "সুপারক্লাস অ্যাগনাথা (চোয়ালবিহীন মাছ)",
    commonNameEn: "Jawless Fishes (Hagfishes & Lampreys)",
    commonNameBn: "চোয়ালবিহীন মাছ (হ্যাগফিশ ও ল্যাম্প্রে)",
    isFishGroup: true,
    fishPortalRoute: "/fish/group/group-agnatha",
    estimatedLivingSpecies: 120,
    cataloguedSpeciesCount: 2,
    diagnosticCharacteristics: {
      en: [
        "Jawless circular oral sucking funnel equipped with keratinous horny teeth.",
        "Persistent unconstricted notochord providing axial support throughout life.",
        "No paired fins (pectoral or pelvic fins completely absent); naked eel-like scaleless skin with slime glands.",
        "Cartilaginous rudimentary cranium and branchial basket; vertebrae absent or represented by minute neural arches.",
        "Pouched gills (5-16 pairs) opening via discrete lateral branchial pores."
      ],
      bn: [
        "চোয়ালহীন গোল চোষক মুখছিদ্র যাতে শৃঙ্গীয় কাইটিন দাঁত থাকে।",
        "আজীবন স্থিতিস্থাপক নটোকর্ড অক্ষীয় কঙ্কাল হিসেবে থাকে।",
        "কোনো জোড়া পাখনা বা আঁইশ নেই; মসৃণ স্লাইম-গ্রন্থিযুক্ত ত্বক।",
        "তরুণাস্থিময় আদিম করোটি; পূর্ণাঙ্গ মেরুদণ্ড অনুপস্থিত।",
        "থলির মতো ৫-১৬ জোড়া ফুলকা যা ছিদ্র দিয়ে বাইরে খোলে।"
      ]
    },
    bodyForm: {
      en: "Elongated, cylindrical, serpentine eel-like body with median fold fin, lacking paired fins.",
      bn: "জোড়া পাখনা ছাড়া দীর্ঘ নলাকার সাপের মতো দেহ।"
    },
    skeletalSystem: {
      en: "Fibrous and cartilaginous endoskeleton; notochord persists unconstricted; no true bone.",
      bn: "সম্পূর্ণ তরুণাস্থিময় কঙ্কাল; অস্থি সম্পূর্ণ অনুপস্থিত।"
    },
    integument: {
      en: "Naked, soft, glandular skin; hagfishes possess hundreds of multicellular slime glands producing vast volumes of defensive fibrous mucus.",
      bn: "আঁইশহীন ত্বক; হ্যাগফিশ প্রতিরক্ষার জন্য প্রচুর পিচ্ছিল মিউকাস ও স্লাইম তৈরি করে।"
    },
    feedingAndDigestion: {
      en: "Hagfishes are benthic scavengers rasping flesh from dead whales; lampreys are blood-sucking ectoparasites on fishes; stomach absent.",
      bn: "হ্যাগফিশ সাগরের তলদেশের মৃত তিমি খায়; ল্যাম্প্রে মাছের গায়ে রক্তচোষা পরজীবী; পাকস্থলী নেই।"
    },
    respiration: {
      en: "Internal gill pouches ventilated by tidal flow through gill pores while feeding.",
      bn: "চোষক মুখ লেগে থাকা অবস্থায় ফুলকা ছিদ্র দিয়ে পানি আনা-নেওয়া করে শ্বাস নেয়।"
    },
    circulation: {
      en: "Two-chambered branchial heart; hagfishes possess accessory systemic venous hearts (portal, cardinal, and caudal hearts).",
      bn: "দ্বি-প্রকোষ্ঠী প্রধান হৃদপিণ্ড; হ্যাগফিশে অতিরিক্ত সহায়ক রক্ত পাম্প থাকে।"
    },
    excretion: {
      en: "Pronephros and mesonephros kidneys; hagfishes are the only known vertebrate isosmotic to seawater (conformers).",
      bn: "আদিম বৃক্ক; হ্যাগফিশ সমুদ্রের সাথে সমান ঘনত্বের রক্ত রাখে।"
    },
    nervousSystem: {
      en: "Primitive tubular brain with single olfactory bulb and poorly developed non-imaging eyes in hagfishes; pineal eye in lampreys.",
      bn: "একক নাসারন্ধ্র ও আদি মস্তিষ্ক; ল্যাম্প্রেতে পিনিয়াল চোখ বিদ্যমান।"
    },
    reproduction: {
      en: "Dioecious; external fertilization; lampreys undergo anadromous migrations and an extended filter-feeding ammocoetes larval stage.",
      bn: "একলিঙ্গ; ল্যাম্প্রে নদী ও সাগরে পরিযান করে এবং এদের দীর্ঘ অ্যামোকিট লার্ভা দশা থাকে।"
    },
    habitatAndEcology: {
      en: "Marine ocean benthos (Myxiniformes) and temperate marine/freshwater rivers (Petromyzontiformes).",
      bn: "গভীর সমুদ্র এবং নাতিশীতোষ্ণ নদী অববাহিকা।"
    },
    evolutionarySignificance: {
      en: "The surviving basal lineage of craniate vertebrates, demonstrating the anatomy of vertebrates prior to the evolution of articulated jaws and mineralized bone.",
      bn: "চোয়াল ও অস্থির বিবর্তনের পূর্ববর্তী আদিম মেরুদণ্ডী পূর্বপুরুষের জীবন্ত প্রমাণ।"
    },
    thermoregulation: {
      en: "Strictly poikilothermic ectotherms; metabolic rate tracks surrounding water temperature; hagfishes reside in stable cold benthic abyssal environments.",
      bn: "সম্পূর্ণ শীতলরক্তী পোইকিলোথার্মিক প্রাণী; বিপাকের হার আশেপাশের পানির তাপমাত্রার সাথে পরিবর্তিত হয়; হ্যাগফিশ সমুদ্রের তলদেশের ঠান্ডা পানিতে বাস করে।"
    },
    sensorySystems: {
      en: "Hagfishes have degenerate vestigial eyes lacking lens/cornea but have sensitive tactile barbels and olfactory organs; lampreys possess functional camera eyes, pineal photoreceptor organ, and lateral line neuromasts.",
      bn: "হ্যাগফিশের চোখ নিষ্ক্রিয় হলেও স্পর্শকাতর বার্বেল ও তীব্র ঘ্রাণশক্তি রয়েছে; ল্যাম্প্রেতে কার্যকর ক্যামেরা চোখ, পিনিয়াল আলোক-গ্রাহক এবং পার্শ্বরেখা সংবেদ বিদ্যমান।"
    },
    muscularSystem: {
      en: "W-shaped myomeres arranged along trunk without horizontal septum separating epaxial and hypaxial muscles; simple undulatory swimming waves.",
      bn: "দেহ বরাবর ডব্লিউ-আকৃতির মায়োটোম পেশি; এপ্যাক্সিয়াল ও হাইপ্যাক্সিয়াল পেশি পৃথক করার অনুভূমিক সেপটাম অনুপস্থিত; সহজ ঢেউ খেলানো সাঁতার।"
    },
    development: {
      en: "Hagfishes produce large yolky eggs encased in horny capsules with direct development (no larval stage); lampreys undergo extended microphagous ammocoetes larval stage (3-7 years) followed by dramatic metamorphosis.",
      bn: "হ্যাগফিশ শৃঙ্গীয় ক্যাপসুলযুক্ত কুসুমময় ডিম পাড়ে এবং সরাসরি বিকাশ ঘটে; ল্যাম্প্রেতে ৩-৭ বছর মেয়াদী অ্যামোকিট লার্ভা দশা ও রূপান্তর দেখা যায়।"
    },
    adaptations: {
      en: "Defensive slime threads instantly expanding into liters of microfibrous mucus suffocating predator gills; rasping keratinized dental plates on cartilaginous tongue; remarkable body knotting to tear flesh and strip slime.",
      bn: "আক্রমণকারী শিকারীর ফুলকা বন্ধ করে দেওয়ার মতো তাৎক্ষণিক স্লাইম তৈরি; জিহ্বার কাইটিন দাঁত দিয়ে মাংস ছিঁড়ে নেওয়া; শরীরকে গিঁট পাকিয়ে টান দেওয়ার অদ্ভুত কৌশল।"
    },
    ecologicalRole: {
      en: "Hagfishes are vital deep-sea benthic scavengers recycling nutrients from whale falls and marine carrion; lampreys serve as top-tier migratory predators/parasites regulating bony fish populations in river-sea ecosystems.",
      bn: "হ্যাগফিশ গভীর সমুদ্রে মৃত তিমি ও প্রাণীর দেহাবশেষ খেয়ে পুষ্টি পুনর্ব্যবহার করে; ল্যাম্প্রে নদী ও সাগরের মাছে পরজীবী হিসেবে বাস্তুতন্ত্রের ভারসাম্য রাখে।"
    },
    majorOrders: [
      { name: "Myxiniformes", nameBn: "মিক্সিনিফর্মিস (হ্যাগফিশ)", descEn: "Blind, deep-sea marine scavengers producing copious slime.", descBn: "গভীর সমুদ্রের অন্ধ স্লাইম উৎপাদনকারী মাছ।" },
      { name: "Petromyzontiformes", nameBn: "পেট্রোমাইজন্টিফর্মিস (ল্যাম্প্রে)", descEn: "Jawed fish parasites with sucking oral discs and ammocoetes larvae.", descBn: "চোষক মুখযুক্ত পরজীবী ল্যাম্প্রে মাছ।" }
    ],
    canonicalSpeciesIds: ["sp-myxine-glutinosa", "sp-petromyzon-marinus"],
    referenceIds: ["ref-nelson-2016", "ref-hickman-2020"]
  },
  {
    id: "vert-chondrichthyes",
    slug: "chondrichthyes",
    className: "Class Chondrichthyes",
    classBn: "শ্রেণি কনড্রিকথিস (তরুণাস্থিময় মাছ)",
    commonNameEn: "Cartilaginous Fishes (Sharks, Rays & Chimaeras)",
    commonNameBn: "তরুণাস্থিময় মাছ (হাঙর, শাপলাপাতা ও করাত মাছ)",
    isFishGroup: true,
    fishPortalRoute: "/fish/class/taxon-chondrichthyes",
    estimatedLivingSpecies: 1250,
    cataloguedSpeciesCount: 14,
    diagnosticCharacteristics: {
      en: [
        "Endoskeleton entirely cartilaginous, reinforced by prismatic calcification (no endochondral bone).",
        "Tooth-like placoid scales (dermal denticles) covering the skin, reducing hydrodynamic turbulence.",
        "Motorized upper jaw (palatoquadrate) and lower jaw (Meckel's cartilage) loosely suspended from chondrocranium.",
        "Male pelvic fins modified into intromittent copulatory claspers for internal fertilization.",
        "Swim bladder completely absent; buoyancy regulated by massive lipid-rich squalene oil in multi-lobed liver.",
        "Ampullae of Lorenzini electroreceptors detecting microvolt electrical fields generated by prey muscles."
      ],
      bn: [
        "সম্পূর্ণ তরুণাস্থিময় অন্তঃকঙ্কাল যাতে কোনো প্রকৃত অস্থি থাকে না।",
        "দাঁতের মতো ধারালো প্ল্যাকয়েড আঁইশ যা পানিতে ঘর্ষণ কমায়।",
        "করোটি থেকে ঝুলন্ত শক্তিশালী চোয়াল যাতে দাঁতের বহু সারি থাকে।",
        "পুরুষের পেলভিক পাখনা ক্লাসপারে রূপান্তরিত যা অভ্যন্তরীণ নিষেকের কাজ করে।",
        "পটকা অনুপস্থিত; বিশালাকার যকৃতে সঞ্চিত তেল প্লবতা নিয়ন্ত্রণ করে।",
        "বিদ্যুৎ সংবেদী অ্যাম্পুলা অব লরেঞ্জিনি যা শিকারের পেশির বিদ্যুৎ সংকেত ধরে।"
      ]
    },
    bodyForm: {
      en: "Fusiform hydrodynamic body in sharks; dorsoventrally depressed with massive pectoral wings in batoids (skates and rays).",
      bn: "হাঙরে মাকু-আকৃতির স্ট্রিমলাইন্ড দেহ; শাপলাপাতা মাছে উপর-নিচে চ্যাপ্টা ডানাযুক্ত দেহ।"
    },
    skeletalSystem: {
      en: "Prismatic calcified cartilage throughout; distinct vertebrae enclosing the spinal cord.",
      bn: "ক্যালসিয়াম শক্তিকৃত তরুণাস্থি কঙ্কাল এবং সুগঠিত কশেরুকা।"
    },
    integument: {
      en: "Abrasive sandpaper-like placoid scales with enameloid caps, dentine pulp cavities, and basal plates.",
      bn: "শিরিষ কাগজের মতো ধারালো দাঁতসদৃশ প্ল্যাকয়েড আঁইশ।"
    },
    feedingAndDigestion: {
      en: "Formidable predators and giant filter-feeders (whale shark); J-shaped stomach; intestine with spiral valve increasing absorptive surface.",
      bn: "মাংসাশী শিকারী বা প্লাঙ্কটনভোজী; অন্ত্রে সর্পিলাকার কপাটিকা (স্পাইরাল ভালভ) থাকে।"
    },
    respiration: {
      en: "5 to 7 pairs of branchial gill slits exposed directly to exterior (covered by opercular flap in Holocephali); spiracles present.",
      bn: "৫ থেকে ৭ জোড়া উন্মুক্ত ফুলকা ছিদ্র এবং মাথায় স্পাইরাকল বিদ্যমান।"
    },
    circulation: {
      en: "Two-chambered heart with contractile conus arteriosus containing multiple rows of pocket valves.",
      bn: "দ্বি-প্রকোষ্ঠী হৃদপিণ্ড ও কোনাস আর্টারিওসাস।"
    },
    excretion: {
      en: "Mesonephric kidneys; urea and trimethylamine oxide (TMAO) retained in tissues for marine osmoregulation; rectal salt gland.",
      bn: "ইউরিয়া ধরে রেখে সাগরের সাথে পানির ভারসাম্য রক্ষা করে; রেকটাল লবণ গ্রন্থি থাকে।"
    },
    nervousSystem: {
      en: "Highly developed olfactory lobes, acute lateral line system, and electroreceptive ampullae of Lorenzini.",
      bn: "অত্যন্ত প্রখর ঘ্রাণশক্তি এবং বৈদ্যুতিক সংকেত ধরার সেন্সর।"
    },
    reproduction: {
      en: "Strictly internal fertilization via claspers; oviparous (mermaid's purse), ovoviviparous, or viviparous with placental nourishment.",
      bn: "অভ্যন্তরীণ নিষেক; ডিম্বজ অথবা সরাসরি জরায়ুজ বাচ্চা প্রসব।"
    },
    habitatAndEcology: {
      en: "Predominantly marine globally from coastal shallows to abyssal depths; select species ascend tropical freshwater rivers.",
      bn: "উপকূলীয় খাঁড়ি ও প্রবালপ্রাচীর থেকে গভীর সমুদ্র; বঙ্গোপসাগরের শীর্ষ শিকারী।"
    },
    evolutionarySignificance: {
      en: "Pioneered articulated jaws, placoid dentition, internal fertilization via claspers, and modern predatory apex dominance since the Devonian.",
      bn: "চোয়ালের শক্তিশালী বিকাশ ও অভ্যন্তরীণ নিষেকের মাধ্যমে সাগরে শীর্ষ আধিপত্য বিস্তার।"
    },
    thermoregulation: {
      en: "Predominantly ectothermic; lamnid sharks (mako, white) and thresher sharks exhibit regional endothermy via countercurrent vascular retia mirabilia elevating red muscle, eye, and stomach temperatures 5-15°C above ambient water.",
      bn: "অধিকাংশে শীতলরক্তী; তবে মাকো ও গ্রেট হোয়াইট হাঙরে রক্তনালীর কাউন্টার-কারেন্ট জালিকায় সাঁতারের লাল পেশি ও চোখের তাপমাত্রা বাইরের পানির চেয়ে ৫-১৫°C বেশি থাকে।"
    },
    sensorySystems: {
      en: "Multi-sensory predatory hierarchy: Ampullae of Lorenzini detect microvolt bioelectric fields of buried prey; extensive lateral line canals; highly sensitive olfactory epithelium; tapetum lucidum in retina doubling photon capture.",
      bn: "অ্যাম্পুলা অব লোরেনজিনি দিয়ে বালির নিচে লুকানো শিকারের বৈদ্যুতিক স্পন্দন শনাক্তকরণ; তীব্র ঘ্রাণশক্তি; সংবেদী পার্শ্বরেখা এবং কম আলোয় দেখার জন্য চোখের টেপেটাম লুসিডাম।"
    },
    muscularSystem: {
      en: "Segmental W-shaped myomeres partitioned by horizontal connective tissue septum into epaxial and hypaxial muscle masses; distinct superficial aerobic red cruising muscle and deep anaerobic white burst-swimming muscle.",
      bn: "অনুভূমিক সেপটাম দিয়ে বিভক্ত ডব্লিউ-আকৃতির মায়োটোম পেশি; মুক্ত সাঁতারের জন্য লাল পেশি এবং হঠাৎ দ্রুত আক্রমণের জন্য সাদা অ্যানেরোবিক পেশি।"
    },
    development: {
      en: "Strictly internal fertilization via pelvic claspers; highly variable reproductive modes from oviparity with keratinized mermaid's purses to yolk-sac viviparity and placental viviparity; extended gestation (up to 2 years) producing fully formed precocial pups.",
      bn: "পেলভিক ক্ল্যাসপার দ্বারা অভ্যন্তরীণ নিষেক; শক্ত খোসার ডিম থেকে শুরু করে জরায়ুজ পুষ্টির মাধ্যমে পূর্ণাঙ্গ বাচ্চার জন্ম; দীর্ঘ গর্ভধারণ কাল (২ বছর পর্যন্ত)।"
    },
    adaptations: {
      en: "Micro-grooved placoid scales (dermal denticles) reducing boundary turbulent water drag by 10%; multi-lobed liver with squalene lipid delivering hydrostatic neutral buoyancy without a gas bladder; dynamic revolving rows of replacement teeth.",
      bn: "ঘর্ষণ কমানোর জন্য দাঁতের মতো প্ল্যাকয়েড আঁইশ; পটকার বদলে তেলের যকৃৎ দিয়ে প্লবতা নিয়ন্ত্রণ; ক্ষয়ে যাওয়া দাঁত প্রতিস্থাপনের জন্য ঘূর্ণায়মান নতুন দাঁতের সারি।"
    },
    ecologicalRole: {
      en: "Apex and mesopredators exerting top-down trophic cascade regulation across pelagic and benthic marine communities, maintaining genetic fitness of prey fish populations and reef ecosystem resilience.",
      bn: "সমুদ্রের খাদ্যশৃঙ্খলে শীর্ষ শিকারী হিসেবে দুর্বল মাছ নিয়ন্ত্রণ এবং প্রবাল প্রাচীর ও মুক্ত সাগরের বাস্তুতন্ত্রের ভারসাম্য রক্ষার অপরিহার্য অভিভাবক।"
    },
    majorOrders: [
      { name: "Carcharhiniformes", nameBn: "কারকারহিনিফর্মিস (গ্রাউন্ড শার্ক)", descEn: "Dominant shark order with nictitating eye membrane and 2 dorsal fins.", descBn: "চোখের পর্দা ও দুটি পৃষ্ঠ পাখনাযুক্ত সাধারণ হাঙর।" },
      { name: "Myliobatiformes", nameBn: "মাইলিওবাটিফর্মিস (স্টিংরে)", descEn: "Broad pectoral wings and defensive venomous tail spines.", descBn: "বিশাল ডানাবিশিষ্ট বিষাক্ত লেজের শাপলাপাতা মাছ।" },
      { name: "Rhinopristiformes", nameBn: "রাইনোপ্রিস্টিফর্মিস (করাত মাছ ও গিটারফিশ)", descEn: "Toothed rostra or ray-shark transitional body form.", descBn: "করাতাকৃতি থুতনিযুক্ত বিপন্ন করাত মাছ।" }
    ],
    canonicalSpeciesIds: ["sp-chiloscyllium-indicum", "sp-rhina-ancylostoma"],
    referenceIds: ["ref-nelson-2016", "ref-hickman-2020"]
  },
  {
    id: "vert-osteichthyes",
    slug: "osteichthyes",
    className: "Superclass Osteichthyes",
    classBn: "সুপারক্লাস অস্টিকথিস (অস্থিময় মাছ)",
    commonNameEn: "Bony Fishes (Ray-Finned & Lobe-Finned Fishes)",
    commonNameBn: "অস্থিময় মাছ (পাখনাযুক্ত সকল সাধারণ মাছ)",
    isFishGroup: true,
    fishPortalRoute: "/fish/class/taxon-class-actinopterygii",
    estimatedLivingSpecies: 33000,
    cataloguedSpeciesCount: 168,
    diagnosticCharacteristics: {
      en: [
        "Endoskeleton consisting predominantly of true endochondral vascularized bone.",
        "Branchial gill chambers enclosed beneath a single protective bony opercular plate.",
        "Gas-filled hydrostatic swim bladder derived from digestive tract regulating neutral buoyancy.",
        "Flexible, overlapping dermal scales (cycloid, ctenoid, or ganoid) covered by living mucus-secreting epidermis.",
        "Fins supported by segmented bony or cartilaginous dermal lepidotrichia (fin rays)."
      ],
      bn: [
        "প্রকৃত রক্তনালীপূর্ণ অস্থির তৈরি শক্তিশালী অন্তঃকঙ্কাল।",
        "একটিমাত্র অস্থির ঢাকনা (অপারকুলাম) দিয়ে সুরক্ষিত ফুলকা প্রকোষ্ঠ।",
        "প্লবতা নিয়ন্ত্রণকারী গ্যাসপূর্ণ পটকা (সুইম ব্লাডার)।",
        "মিউকাসযুক্ত মসৃণ সাইক্লয়েড বা চিরুনির মতো টিনয়েড আঁইশ।",
        "অস্থিময় পাখনা রশ্মি (লেপিডোট্রিকিয়া) দ্বারা সমর্থিত পাখনা।"
      ]
    },
    bodyForm: {
      en: "Infinitely diverse: streamlined fusiform (tunas, hilsa), laterally compressed (carps), dorsoventrally depressed (catfishes), or globular (seahorses).",
      bn: "অত্যন্ত বৈচিত্র্যময়: মাকু আকৃতি (ইলিশ), চ্যাপ্টা (রুই), অথবা নলাকার (কুঁচে)।"
    },
    skeletalSystem: {
      en: "Complex ossified neurocranium, vertebral column with ribs and intermuscular bones, and fin-girdle lepidotrichia.",
      bn: "কশেরুকা, কাঁটা ও পাখনার রশ্মি সমৃদ্ধ জটিল অস্থিময় কঙ্কাল।"
    },
    integument: {
      en: "Living epidermis with goblet cells overlying dermally embedded imbricated cycloid or ctenoid scales.",
      bn: "মিউকাস ক্ষরণকারী জীবিত এপিডার্মিস যা ডার্মাল আঁইশকে ঢেকে রাখে।"
    },
    feedingAndDigestion: {
      en: "Jaw protrusion powered by premaxillary and maxillary linkage; pharyngeal teeth; pyloric ceca for nutrient absorption.",
      bn: "মুখের অস্থি প্রসারিত করে শিকার ধরা; গলবিলীয় দাঁত এবং পাইলোরিক সিকা।"
    },
    respiration: {
      en: "4 pairs of vascularized branchial arches; counter-current blood flow; opercular pumping.",
      bn: "অপারকুলামের পাম্পিং এবং ফুলকার ল্যামেলির বিপরীতমুখী রক্তপ্রবাহ।"
    },
    circulation: {
      en: "Two-chambered heart with non-contractile elastic bulbus arteriosus moderating systolic pressure waves.",
      bn: "বাল্বাস আর্টারিওসাসযুক্ত দ্বি-প্রকোষ্ঠী হৃদপিণ্ড যা মসৃণ রক্তপ্রবাহ নিশ্চিত করে।"
    },
    excretion: {
      en: "Mesonephric kidneys and gill chloride cells controlling osmotic solute flux.",
      bn: "মেসোনেফ্রিক বৃক্ক ও ফুলকার কোষ দ্বারা অভিস্রবণ নিয়ন্ত্রণ।"
    },
    nervousSystem: {
      en: "Forebrain, optic tectum for vision, acoustic-lateralis system detecting water vibrations, Weberian ossicles in Otophysi.",
      bn: "চোখ, পার্শ্বরেখা এবং বাতাস ও শব্দ তরঙ্গ শোনার ওয়েবেরিয়ান অসিকল।"
    },
    reproduction: {
      en: "Predominantly dioecious with external broadcast spawning; extensive parental care in select families (mouthbrooding, nest building).",
      bn: "অধিকাংশে পানিতে ডিম ও শুক্রাণু ছড়ায়; কিছু মাছে মুখে বাচ্চা পালন বা বাসা তৈরির যত্ন।"
    },
    habitatAndEcology: {
      en: "All aquatic ecosystems globally from abyssal ocean floor (8,000 m) to high Tibetan lakes (5,200 m).",
      bn: "হিমালয়ের ঝরনা থেকে শুরু করে বঙ্গোপসাগর ও পদ্মার প্লাবনভূমি পর্যন্ত।"
    },
    evolutionarySignificance: {
      en: "Represents over half of all living vertebrate species globally; Sarcopterygii gave rise directly to all terrestrial tetrapods.",
      bn: "পৃথিবীর অর্ধেকেরও বেশি মেরুদণ্ডী প্রাণী এই দলের; এদের লোব-ফিন মাছ থেকেই চার পায়ের উভচরের উৎপত্তি।"
    },
    thermoregulation: {
      en: "Predominantly ectothermic poikilotherms; pelagic apex teleosts (tunas, billfishes) possess vascular countercurrent retia mirabilia providing cranial and visceral endothermy, keeping hunting brains and viscera warm in deep cold waters.",
      bn: "অধিকাংশে শীতলরক্তী; তবে টুনা ও মার্লিন জাতীয় মাছ গভীর সমুদ্রে শিকারের সময় মাথার ও চোখের তাপমাত্রা উষ্ণ রাখতে রক্তনালীর বিশেষ জালিকা ব্যবহার করে।"
    },
    sensorySystems: {
      en: "Advanced lateral line canal system containing hair-cell neuromasts detecting low-frequency water displacement; otolith organs (sagitta, asteriscus, lapillus) for balance and hearing; Weberian apparatus in Otophysi mechanically transmitting swim bladder acoustic vibrations to inner ear.",
      bn: "পার্শ্বরেখায় চুলকোষযুক্ত নিউরোমাস্ট দিয়ে পানির সূক্ষ্ম স্রোত শনাক্তকরণ; অন্তর্কর্ণে ওটোলিথ অস্থি এবং রুই-কাতলায় পটকার কম্পন কানে পৌঁছানোর ওয়েবেরিয়ান যন্ত্রপাতি।"
    },
    muscularSystem: {
      en: "Segmented W-shaped myomeres separated by collagenous myosepta, divided into dorsal epaxial and ventral hypaxial muscle blocks; deep red aerobic cruising fibers and superficial white anaerobic flight fibers; specialized sonic muscles in sciaenids.",
      bn: "ডব্লিউ-আকৃতির খণ্ডায়িত মায়োটোম পেশি যা এপ্যাক্সিয়াল ও হাইপ্যাক্সিয়াল ব্লকে বিভক্ত; অবিরাম সাঁতারের লাল পেশি এবং হঠাৎ দ্রুত গতির সাদা পেশি; শব্দ তৈরির বিশেষ সনোগ্রাফিক পেশি।"
    },
    development: {
      en: "Enormous fecundity (broadcast spawning of thousands to millions of pelagic eggs); external fertilization followed by rapid embryogenesis, planktonic yolk-sac larvae (fry), and fingerling metamorphoses; parental mouthbrooding in select families (Ariidae, Cichlidae).",
      bn: "বিপুল প্রজনন ক্ষমতা (লক্ষ লক্ষ ডিম পাড়া); বাহ্যিক নিষেক এবং দ্রুত ভ্রূণ বিকাশ হয়ে প্ল্যাঙ্কটনিক পোনায় রূপান্তর; কিছু মাছে (যেমন শিং ও তেলাপিয়া) মুখে বা বাসায় ডিম পাহারা দেওয়া।"
    },
    adaptations: {
      en: "Gas-filled hydrostatic swim bladder (physostomous or physoclistous) regulating effortless neutral buoyancy at any depth; opercular dual-pump ventilation; highly kinetic premaxillary protrusible jaws enabling vacuum suction feeding; mucus-coated cycloid/ctenoid scales.",
      bn: "পানির যেকোনো গভীরতায় ভেসে থাকার জন্য গ্যাসপূর্ণ পটকা; অপারকুলামের পাম্পিং শ্বসন; শিকার গিলে ফেলার জন্য মুখ প্রসারিত করার ভ্যাকিউম চোয়াল এবং প্রতিরক্ষামূলক মিউকাসযুক্ত আঁইশ।"
    },
    ecologicalRole: {
      en: "Foundation of global aquatic trophic networks: primary consumers of phytoplankton/zooplankton, major detritivores and benthic bioturbators, and key forage fish sustaining marine birds, mammals, and human fisheries.",
      bn: "বিশ্বের জলজ খাদ্যশৃঙ্খলের মূল ভিত্তি: প্লাঙ্কটন খাদক, তলার পচা জৈববস্তু পরিষ্কারক এবং সামুদ্রিক পাখি, স্তন্যপায়ী ও মানুষের প্রধান পুষ্টির যোগানদাতা।"
    },
    majorOrders: [
      { name: "Cypriniformes", nameBn: "সাইপ্রিনিফর্মিস (কার্প মাছ)", descEn: "Dominant freshwater order; toothless jaws with pharyngeal grinding teeth.", descBn: "স্বাদু পানির প্রধান মাছ; রুই, কাতলা ও মৃগেল।" },
      { name: "Siluriformes", nameBn: "সিলুরিফর্মিস (ক্যাটফিশ)", descEn: "Sensory barbels, scaleless skin, and pectoral defensive spines.", descBn: "গোঁফযুক্ত আঁইশহীন ক্যাটফিশ; বোয়াল, মাগুর ও আইড়।" },
      { name: "Clupeiformes", nameBn: "ক্লুপেইফর্মিস (ইলিশ ও হেরিং)", descEn: "Silvery schooling planktivores with keeled ventral scutes.", descBn: "রূপালী চকচকে দলবদ্ধ মাছ; জাতীয় মাছ ইলিশ।" }
    ],
    canonicalSpeciesIds: ["sp-tenualosa-ilisha", "sp-labeo-rohita", "sp-wallago-attu", "sp-clarias-magur"],
    referenceIds: ["ref-nelson-2016", "ref-fishbase-2026", "ref-hickman-2020"]
  },
  {
    id: "vert-amphibia",
    slug: "amphibia",
    className: "Class Amphibia",
    classBn: "শ্রেণি অ্যাম্ফিবিয়া (উভচর)",
    commonNameEn: "Amphibians (Frogs, Toads, Salamanders & Caecilians)",
    commonNameBn: "উভচর (ব্যাঙ, স্যালামান্ডার ও সিসিলিয়ান)",
    isFishGroup: false,
    estimatedLivingSpecies: 8500,
    cataloguedSpeciesCount: 4,
    diagnosticCharacteristics: {
      en: [
        "Biphasic life cycle: aquatic gill-breathing larval stage metamorphosing into semi-terrestrial lung-breathing adult.",
        "Smooth, moist, highly vascularized glandular skin functioning as a major cutaneous respiratory organ.",
        "Pedicellate teeth with crowns separated from root by a zone of uncalcified collagen.",
        "Three-chambered heart consisting of two atria and a single trabeculated ventricle.",
        "Anamniotic jelly-coated eggs lacking protective calcified shells, requiring aquatic deposition."
      ],
      bn: [
        "দ্বৈত জীবনচক্র: জলজ ফুলকাযুক্ত ব্যাঙাচি লার্ভা রূপান্তরের মাধ্যমে ফুসফুসী চতুষ্পদীতে পরিণত হয়।",
        "আর্দ্র, মিউকাসযুক্ত রক্তনালীপূর্ণ ত্বক যা প্রধান শ্বসন অঙ্গ হিসেবে কাজ করে।",
        "পেডিসাইলেট দাঁত যার চূড়া ও মূলের মাঝে নমনীয় সংযোগ থাকে।",
        "দুটি অলিন্দ ও একটি নিলয়যুক্ত তিন প্রকোষ্ঠী হৃদপিণ্ড।",
        "খোলসবিহীন জেলির মতো নরম ডিম যা পানিতে ছাড়তে হয়।"
      ]
    },
    bodyForm: {
      en: "Anurans (frogs) possess compact tailless bodies with elongated saltatorial hindlimbs; urodeles retain tails; caecilians are limbless burrowers.",
      bn: "ব্যাঙে লেজহীন লাফানোর উপযোগী শক্তিশালী পেছনের পা; স্যালামান্ডারে লেজ থাকে।"
    },
    skeletalSystem: {
      en: "Ossified skeleton; urostyle (fused caudal vertebrae) in anurans bracing pelvis during jumps; single cervical vertebra (atlas) allowing head nodding.",
      bn: "লাফানোর চাপ নিতে ইউরোস্টাইল এবং মাথা নাড়ানোর জন্য অ্যাটলাস কশেরুকা।"
    },
    integument: {
      en: "Moist skin rich in mucous glands preventing desiccation and granular (poison) glands secreting antimicrobial and toxic peptides.",
      bn: "মিউকাস গ্রন্থিযুক্ত ভেজা ত্বক এবং বিষ নিঃসরণকারী প্যারোটয়েড গ্রন্থি।"
    },
    feedingAndDigestion: {
      en: "Carnivorous adults with an anteriorly attached fleshy tongue that flips outward rapidly to capture insect prey.",
      bn: "মাংসাশী; সামনের দিকে যুক্ত আঠালো জিহ্বা দ্রুত উল্টে বাইরে ছুড়ে পোকা শিকার করে।"
    },
    respiration: {
      en: "Tri-modal respiration: cutaneous (through skin), buccopharyngeal pumping, and positive-pressure pulmonary ventilation.",
      bn: "ত্রি-বিধ শ্বসন: ত্বকীয় শ্বসন, মুখগলবিলীয় শ্বসন এবং ফুসফুসীয় শ্বসন।"
    },
    circulation: {
      en: "Three-chambered heart (2 atria, 1 ventricle); partial separation of pulmonary and systemic blood streams via ventricular trabeculae.",
      bn: "৩-প্রকোষ্ঠী হৃদপিণ্ড যাতে সামান্য রক্ত মিশ্রণ ঘটে।"
    },
    excretion: {
      en: "Mesonephric kidneys; aquatic tadpoles are ammonotelic; terrestrial adults switch to ureotelism.",
      bn: "লার্ভা অ্যামোনিয়া এবং ডাঙার প্রাপ্তবয়স্ক ব্যাঙ ইউরিয়া ত্যাগ করে।"
    },
    nervousSystem: {
      en: "Tripartite brain, large lateral eyes with movable eyelids and nictitating membrane; tympanic membrane transmitting airborne sound via columella.",
      bn: "চোখের সুরক্ষার জন্য নিকটিটেটিং পর্দা এবং বাতাসে শব্দ শোনার জন্য কানের টিম্প্যানিক পর্দা।"
    },
    reproduction: {
      en: "Amplexus copulatory posture; external fertilization in water; gelatinous egg masses hatch into herbivorous tadpoles.",
      bn: "অ্যাম্প্লেক্সাস মিলন; পানিতে ডিম ছড়ায় এবং ব্যাঙাচি লার্ভা বেরিয়ে রূপান্তর ঘটে।"
    },
    habitatAndEcology: {
      en: "Ponds, flooded paddy fields, haors, rainforest leaf litter, and subterranean burrows across tropical regions.",
      bn: "পুকুর, ধানখেত, বিল-ঝিল ও বনভূমি; ক্ষতিকর পোকা দমনে অপরিহার্য।"
    },
    evolutionarySignificance: {
      en: "First vertebrate pioneers to walk upon terrestrial dry land during the Carboniferous, linking sarcopterygian fishes to fully terrestrial amniotes.",
      bn: "প্রথম মেরুদণ্ডী যারা পানি থেকে ডাঙায় হেঁটে পদার্পণ করেছিল।"
    },
    thermoregulation: {
      en: "Strictly poikilothermic ectotherms; core body temperature tracks microhabitat dampness and ambient temperature; high vulnerability to evaporative cooling and desiccation necessitates nocturnal activity and damp refuge seeking.",
      bn: "সম্পূর্ণ শীতলরক্তী পোইকিলোথার্মিক প্রাণী; ত্বক ভেজা রাখতে হয় বলে দিনের বেলা স্যাঁতসেঁতে গর্তে লুকিয়ে থাকে এবং রাতে খাবার শিকারে বের হয়।"
    },
    sensorySystems: {
      en: "Prominent camera eyes equipped with movable eyelids, lacrimal glands, and translucent nictitating membranes for vision underwater and on land; circular tympanic membrane transmitting airborne sounds to single auditory columella (stapes); olfactory epithelium coupled with vomeronasal Jacobson's organ.",
      bn: "স্থল ও পানির জন্য স্বচ্ছ নিকটিটেটিং পর্দাযুক্ত চোখ; বাতাসের শব্দ শোনার জন্য টিম্প্যানিক পর্দা ও কোলুমেলা অস্থি; ঘ্রাণ ও রাসায়নিক সংকেত গ্রহণের জ্যাকবসন অঙ্গ।"
    },
    muscularSystem: {
      en: "Massive hypertrophied hindlimb extensor musculature (plantaris, gastrocnemius, gracilis major) configured for explosive saltatorial propulsion; submental and hyoid musculature executing rhythmic buccopharyngeal aspiration pumping; specialized ballistic tongue-flicking depressors.",
      bn: "লাফানোর জন্য পেছনের পায়ের শক্তিশালী গ্যাস্ট্রোকনেমিয়াস ও প্ল্যান্টারিস পেশি; বায়ু পাম্প করার গলার পেশি এবং নিমেষে জিহ্বা ছুড়ে পোকা ধরার বিশেষায়িত পেশি।"
    },
    development: {
      en: "Biphasic life history: gel-encased anamniotic eggs deposited in fresh water hatch into herbivorous, aquatic gill-breathing tadpole larvae; thyroid hormone (T3/T4) triggers dramatic metamorphosis including tail resorption, limb outgrowth, and lung/skin maturation.",
      bn: "দ্বৈত জীবনচক্র: পানিতে জেলিতে মোড়ানো ডিম ফোটে জলজ ফুলকাযুক্ত ব্যাঙাচি হয়; থাইরয়েড হরমোনের প্রভাবে রূপান্তর ঘটে লেজ মিলিয়ে যায় এবং ফুসফুস ও চার পা গজায়।"
    },
    adaptations: {
      en: "Permeable vascularized cutaneous integument functioning as an auxiliary lung; pelvic seat patch absorbing soil water without drinking; granular parotoid glands secreting defensive batrachotoxins or bufotoxins repelling mammalian predators.",
      bn: "ত্বকের মাধ্যমে ফুসফুসের মতো অক্সিজেন গ্রহণ; পানি পান না করে পেটের ত্বক দিয়ে মাটির আর্দ্রতা শোষণ; প্রতিরক্ষার জন্য প্যারোটয়েড গ্রন্থির বিষ নিঃসরণ।"
    },
    ecologicalRole: {
      en: "Vital bioindicators of environmental freshwater health and pesticide toxicity; primary biological insect controllers consuming billions of agricultural pests; key energetic conduit transferring invertebrate biomass to predatory snakes, birds, and mammals.",
      bn: "পরিবেশ দূষণ ও কীটনাশকের সংবেদনশীল নির্দেশক; কোটি কোটি ক্ষতিকর পোকা খেয়ে কৃষকের পরম বন্ধু; সাপ ও পাখির খাদ্যের প্রধান সরবরাহকারী।"
    },
    majorOrders: [
      { name: "Anura", nameBn: "অ্যানুরা (ব্যাঙ)", descEn: "Tailless amphibians with specialized jumping hind legs.", descBn: "লেজহীন লাফানো ব্যাঙ; কোলা ব্যাঙ, ঝিঁঝিঁ ব্যাঙ।" },
      { name: "Caudata (Urodela)", nameBn: "কডাটা (স্যালামান্ডার)", descEn: "Tailed amphibians with equal limbs and moist glandular skin.", descBn: "লেজযুক্ত স্যালামান্ডার ও নিউট।" },
      { name: "Gymnophiona (Apoda)", nameBn: "জিমনোফিওনা (সিসিলিয়ান)", descEn: "Limbless, blind, subterranean burrowing worm-like amphibians.", descBn: "পাহীন মাটির নিচের সুরঙ্গবাসী সিসিলিয়ান।" }
    ],
    canonicalSpeciesIds: ["sp-fejervarya-limnocharis", "sp-polypedates-teraiensis", "sp-duttaphrynus-melanostictus"],
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-hickman-2020"]
  },
  {
    id: "vert-reptilia",
    slug: "reptilia",
    className: "Class Reptilia (Sauropsida)",
    classBn: "শ্রেণি রেপটিলিয়া (সরীসৃপ)",
    commonNameEn: "Reptiles (Lizards, Snakes, Turtles & Crocodilians)",
    commonNameBn: "সরীসৃপ (টিকটিকি, সাপ, কচ্ছপ ও কুমির)",
    isFishGroup: false,
    estimatedLivingSpecies: 11500,
    cataloguedSpeciesCount: 6,
    diagnosticCharacteristics: {
      en: [
        "Body covered in dry, tough, epidermal keratinized beta-keratin scales or scutes preventing water loss.",
        "Cleidoic amniotic egg with four extraembryonic membranes and leathery/calcareous shell.",
        "Internal fertilization; male copulatory organs (hemipenes in squamates, single penis in turtles/crocodilians).",
        "Thoracic aspiration breathing: ribs expand chest cavity drawing air into multi-chambered lungs.",
        "Ectothermic poikilothermy regulating body temperature through behavioral basking."
      ],
      bn: [
        "শুষ্ক কেরাটিনময় আঁইশযুক্ত ত্বক যা শরীরের জলীয় বাষ্প ধরে রাখে।",
        "খোসাযুক্ত অ্যামনিওটিক ডিম যা ডাঙায় প্রজনন নিশ্চিত করে।",
        "অভ্যন্তরীণ নিষেক; পুরুষে হেমিপেনিস বা লিঙ্গ থাকে।",
        "পাঁজরের সংকোচন-প্রসারণে ফুসফুস দ্বারা শ্বাস গ্রহণ।",
        "শীতলরক্তের প্রাণী যারা রোদে শরীর গরম করে তাপমাত্রা বজায় রাখে।"
      ]
    },
    bodyForm: {
      en: "Tetrapod with sprawling or semi-erect limbs, or completely limbless and elongated in serpents.",
      bn: "চার পায়ে হাঁটা অথবা সম্পূর্ণ পাহীন লম্বাটে শরীর (সাপ)।"
    },
    skeletalSystem: {
      en: "Heavy ossification; streptostylic skull with kinetic jaws in snakes allowing ingestion of large prey; carapacial plastron in turtles.",
      bn: "সম্পূর্ণ অস্থিময় কঙ্কাল; সাপে ঢিলেঢালা চোয়াল যা নিজের চেয়ে বড় শিকার গিলতে পারে।"
    },
    integument: {
      en: "Impermeable skin lacking mucous glands; periodic ecdysis (sloughing/molting) of old stratum corneum.",
      bn: "মিউকাসহীন আঁইশযুক্ত ত্বক যা নিয়মিত খোলস বদলায়।"
    },
    feedingAndDigestion: {
      en: "Predatory carnivores; venom delivery apparatus in elapid and viperid snakes; recurved teeth prevent prey escape.",
      bn: "শিকার ধরা ও পেঁচিয়ে মারা; বিষধর সাপে বিষদাঁত ও বিষগ্রন্থি থাকে।"
    },
    respiration: {
      en: "Strictly pulmonary respiration; no cutaneous gas exchange; suction pump mechanics via costal muscles.",
      bn: "সম্পূর্ণ ফুসফুসীয় শ্বসন; ত্বক দিয়ে শ্বাস নিতে পারে না।"
    },
    circulation: {
      en: "Three-chambered heart with partial interventricular septum (squamates); complete four-chambered heart in crocodilians with Foramen of Panizza.",
      bn: "৩-প্রকোষ্ঠী হৃদপিণ্ড (কুমিরে ৪-প্রকোষ্ঠী ও প্যানিজার ছিদ্র)।"
    },
    excretion: {
      en: "Metanephric kidneys; uricotelic: excretes semi-solid paste of uric acid conserving almost all water.",
      bn: "মেটানেফ্রিক বৃক্ক; ইউরিক অ্যাসিড ত্যাগ করে পানি সঞ্চয় করে।"
    },
    nervousSystem: {
      en: "Jacobson's (vomeronasal) organ in roof of mouth detecting airborne chemical scents delivered by forked tongue.",
      bn: "দ্বিধাবিভক্ত জিহ্বা দিয়ে গন্ধ নিয়ে মুখের তালুতে থাকা জ্যাকবসন অঙ্গে ঘষে শিকার চেনা।"
    },
    reproduction: {
      en: "Internal fertilization; oviparous with leathery-shelled eggs buried in soil; viviparity in select cold-climate vipers; temperature-dependent sex determination.",
      bn: "অভ্যন্তরীণ নিষেক; মাটিতে ডিম পাড়ে; তাপমাত্রা দ্বারা বাচ্চার লিঙ্গ নির্ধারিত হয়।"
    },
    habitatAndEcology: {
      en: "Rainforests, mangrove swamps (Sundarbans), dry agricultural lands, urban gardens, and marine waters.",
      bn: "বনজঙ্গল, সুন্দরবনের মোহনা, কৃষিজমি এবং মানুষের বসতবাড়ি।"
    },
    evolutionarySignificance: {
      en: "Amniotes that completed the definitive evolutionary severance from water, dominating Mesozoic terrestrial ecosystems.",
      bn: "অ্যামনিওটিক ডিম উদ্ভাবন করে ডাঙায় সম্পূর্ণ আধিপত্য বিস্তারকারী প্রাণী।"
    },
    thermoregulation: {
      en: "Behavioral heliothermic ectotherms; fine-tune metabolic temperature between 32°C and 38°C through posture adjustments (flattening body on morning sunlit rocks, melanophore pigment dispersion) and seeking cool burrows during peak noon heat.",
      bn: "আচরণগত তাপ নিয়ন্ত্রণকারী শীতলরক্তী প্রাণী; সকালে রোদে দেহ চ্যাপ্টা করে ও চামড়ার মেলানিন ছড়িয়ে দ্রুত তাপ গ্রহণ করে এবং দুপুরে ছায়া বা গর্তে আশ্রয় নেয়।"
    },
    sensorySystems: {
      en: "Highly specialized chemosensory apparatus: deeply forked tongue continuously captures airborne non-volatile odor molecules delivering them to roof-of-mouth vomeronasal (Jacobson's) organs; infrared-sensitive loreal pit organs in vipers detect micro-degree thermal signatures of warm prey.",
      bn: "দ্বিধাবিভক্ত জিহ্বা দিয়ে বাতাসের গন্ধ কণা সংগ্রহ করে মুখের তালুর জ্যাকবসন অঙ্গে ঘষে শিকারের অবস্থান জানা; ভাইপার সাপের ইনফ্রারেড পিট অর্গান অন্ধকারেও শিকারের দেহের উত্তাপ শনাক্ত করে।"
    },
    muscularSystem: {
      en: "Powerful axial multi-segmental locomotor muscles (intercostals, spinalis, longissimus) driving serpentine lateral undulation; robust adductor mandibulae jaw-closing musculature generating extreme bite forces in crocodilians and varanids.",
      bn: "সাপের আঁকাবাঁকা চলনের জন্য মেরুদণ্ড ও পঞ্জরের শক্তিশালী পেশি; কুমির ও গুঁই সাপে শিকার চেপে ধরার জন্য অত্যন্ত শক্তিশালী চোয়ালের পেশি।"
    },
    development: {
      en: "Cleidoic amniotic egg with four extraembryonic membranes (amnion, chorion, allantois, yolk sac) encased in a leathery or calcareous shell; direct development bypassing aquatic larval stages; temperature-dependent sex determination (TSD) in turtles, crocodilians, and some squamates.",
      bn: "খোসাযুক্ত অ্যামনিওটিক ডিম যাতে কোনো জলজ লার্ভা দশা নেই এবং সরাসরি ক্ষুদ্রাকৃতির বাচ্চা ফোটে; কচ্ছপ ও কুমিরে ইনকিউবেশন তাপমাত্রার ওপর নির্ভর করে বাচ্চার লিঙ্গ নির্ধারিত হয়।"
    },
    adaptations: {
      en: "Desiccation-resistant beta-keratin scales and scutes; hyper-kinetic skulls with mobile quadrates permitting ingestion of whole prey exceeding head diameter; uric acid excretion crystallizing nitrogen wastes with minimal water loss; modified hollow or grooved venom-delivery fangs.",
      bn: "পানি রোধক শক্ত কেরাটিন আঁইশ; নিজের মাথার চেয়েও বড় শিকার আস্ত গিলে ফেলার জন্য ঢিলেঢালা নমনীয় চোয়াল; পানি সাশ্রয়ী ইউরিক অ্যাসিড রেচন এবং শিকারের জন্য বিষদাঁত।"
    },
    ecologicalRole: {
      en: "Dominant terrestrial and amphibious mesopredators and apex predators controlling rodent, amphibian, and fish biomass; monitor lizards and sea turtles maintain wetland trophic health; serpents provide vital non-chemical biological rodent pest control.",
      bn: "ইঁদুর, ব্যাঙ ও মাছের জনসংখ্যা নিয়ন্ত্রণে গুরুত্বপূর্ণ শিকারী; গুঁই সাপ ও কচ্ছপ জলাশয়ের পরিচ্ছন্নতাকর্মী; ফসলের মাঠে ক্ষতিকর ইঁদুর দমনে সাপের ভূমিকা অপরিসীম।"
    },
    majorOrders: [
      { name: "Squamata", nameBn: "স্কোয়ামাটা (টিকটিকি ও সাপ)", descEn: "Kinetic skull, hemipenes, periodic shedding; lizards and snakes.", descBn: "গিরগিটি, গুঁই সাপ, টিকটিকি এবং সকল সাপ।" },
      { name: "Testudines", nameBn: "টেস্টুডিনস (কচ্ছপ)", descEn: "Toothless bony shell composed of carapace and plastron.", descBn: "শক্ত খোলসযুক্ত চুনময় কচ্ছপ ও কাছিম।" },
      { name: "Crocodylia", nameBn: "ক্রোকোডিলিয়া (কুমির)", descEn: "Massive amphibious archosaurs with 4-chambered heart.", descBn: "শক্তিশালী চোয়াল ও ৪-প্রকোষ্ঠী হৃদপিণ্ডযুক্ত কুমির।" }
    ],
    canonicalSpeciesIds: ["sp-varanus-bengalensis", "sp-calotes-versicolor", "sp-hemidactylus-frenatus", "sp-fowlea-piscator", "sp-bungarus-fasciatus"],
    referenceIds: ["ref-iucn-bd-2015-amphibians-reptiles", "ref-hickman-2020"]
  },
  {
    id: "vert-aves",
    slug: "aves",
    className: "Class Aves (Avian Dinosaurs)",
    classBn: "শ্রেণি অ্যাভিস (পাখি)",
    commonNameEn: "Birds (Avian Archosaurs)",
    commonNameBn: "পাখি (পালকযুক্ত উষ্ণরক্তের মেরুদণ্ডী)",
    isFishGroup: false,
    estimatedLivingSpecies: 10800,
    cataloguedSpeciesCount: 1,
    diagnosticCharacteristics: {
      en: [
        "Body covered with contour, down, and flight feathers (pennaceous beta-keratin).",
        "Forelimbs modified as feathered airfoils (wings) adapted for powered aerodynamic flight.",
        "Toothless keratinous beak (rhamphotheca) specialized for diverse feeding ecologies.",
        "Complete four-chambered heart with right aortic arch and endothermic homeothermy.",
        "Unidirectional continuous-flow respiratory system utilizing lungs and 9 interconnected air sacs."
      ],
      bn: [
        "পালক দ্বারা আবৃত ওজনে হালকা বায়বীয় দেহকাঠামো।",
        "উড্ডয়নের জন্য সামনের পা ডানায় রূপান্তরিত।",
        "দাঁতহীন কেরাটিন নির্মিত মজবুত চঞ্চু।",
        "সম্পূর্ণ চার প্রকোষ্ঠী হৃদপিণ্ড ও উষ্ণরক্তী ব্যবস্থা।",
        "বায়ুথলিযুক্ত অবিচ্ছিন্ন একমুখী ফুসফুস যা উড্ডয়নকালে প্রচুর শক্তি দেয়।"
      ]
    },
    bodyForm: {
      en: "Compact streamlined aerodynamic spindle with keeled breastbone (carina) anchoring flight muscles.",
      bn: "বুকের স্টার্নামে চওড়া কিলযুক্ত উড্ডয়নোপযোগী কম্প্যাক্ট দেহ।"
    },
    skeletalSystem: {
      en: "Pneumatized bones with struts; toothless skull; fused synsacrum, pygostyle, and furcula ('wishbone').",
      bn: "ফাঁপা বায়বীয় অস্থি, ফিউজড লেজের পায়গোস্টাইল এবং উইশবোন।"
    },
    integument: {
      en: "Feathers derived from dermal papillae; skin thin and devoid of sweat glands; uropygial (preen) oil gland at tail base.",
      bn: "পালকযুক্ত ত্বক; ঘর্মগ্রন্থিহীন; লেজের গোড়ায় প্রিনিং তেল গ্রন্থি থাকে।"
    },
    feedingAndDigestion: {
      en: "Gizzard contains swallowed grit to grind seeds mechanically; short digestive transit time (30-90 min).",
      bn: "গিজার্ডে থাকা ক্ষুদ্র পাথরের সাহায্যে খাদ্য পিষে হজম সম্পন্ন করে।"
    },
    respiration: {
      en: "Parabronchial lungs connected to 9 thin-walled air sacs; continuous unidirectional airflow without dead air volume.",
      bn: "বায়ুথলিযুক্ত প্যারা-ব্রঙ্কিয়াল ফুসফুস যেখানে বাতাস একমুখী প্রবাহিত হয়।"
    },
    circulation: {
      en: "Four-chambered heart; high heart rate and blood pressure delivering rapid oxygen for intense flight metabolism.",
      bn: "৪-প্রকোষ্ঠী হৃদপিণ্ড; উড্ডয়নের জন্য দ্রুত রক্ত সঞ্চালন।"
    },
    excretion: {
      en: "Metanephric kidneys; uricotelic: white paste of uric acid discharged with feces via cloaca (no urinary bladder).",
      bn: "মূত্রথলি নেই; সাদা ইউরিক অ্যাসিড পেস্ট আকারে পায়ুপথে ত্যাগ করে ওজন কম রাখে।"
    },
    nervousSystem: {
      en: "Enormous optic lobes and cerebellum for 3D flight navigation; superior color and UV vision.",
      bn: "ত্রিমাত্রিক উড্ডয়ন নিয়ন্ত্রণের জন্য বিশাল সেরিবেলাম এবং অতিবেগুনি দেখতে সক্ষম চোখ।"
    },
    reproduction: {
      en: "Internal fertilization; cloacal kiss; hard calcareous-shelled cleidoic egg; dedicated brooding and parental feeding.",
      bn: "অভ্যন্তরীণ নিষেক; শক্ত চুনময় ডিম; বাবা-মা তা দিয়ে ছানা লালন-পালন করে।"
    },
    habitatAndEcology: {
      en: "Global distribution spanning polar pack ice, oceanic gyres, tropical wetlands, haor basins, and urban centers.",
      bn: "পৃথিবীর আকাশ, হাওর অববাহিকা এবং সুন্দরবনের ম্যানগ্রোভ বন।"
    },
    evolutionarySignificance: {
      en: "Direct living descendants of feathered maniraptoran theropod dinosaurs, proving dinosaurs never truly went extinct.",
      bn: "পালকযুক্ত থেরোপড ডাইনোসরের সরাসরি জীবিত বংশধর।"
    },
    thermoregulation: {
      en: "Endothermic homeotherms with the highest basal core body temperatures among vertebrates (40°C to 43°C); plumage down feathers provide exceptional thermal insulation; gular fluttering and respiratory panting dissipate excess heat during flight without sweat glands.",
      bn: "মেরুদণ্ডীদের মধ্যে সর্বোচ্চ তাপমাত্রা (৪০-৪৩°C) বজায় রাখা উষ্ণরক্তী প্রাণী; পালকের ডাউন ফেদার নিখুঁত তাপ নিরোধক; ঘামগ্রন্থি না থাকায় শ্বাস ফেলা ও গলার স্পন্দনে অতিরিক্ত তাপ বর্জন করে।"
    },
    sensorySystems: {
      en: "Extraordinary visual sensory specialization: massive orbits, high density of cone photoreceptors, fovea centralis with up to five visual pigments providing tetrachromatic vision including ultraviolet perception; magnetic cryptochrome photoreceptors in the eye aiding long-distance migratory navigation.",
      bn: "অবিশ্বাস্য প্রখর দৃষ্টিশক্তি; অতিবেগুনি রশ্মি দেখার ক্ষমতাযুক্ত টেট্রাক্রোম্যাটিক চোখ; চোখে ম্যাগনেটিক ক্রিপ্টোক্রোম যা পৃথিবীর চৌম্বক ক্ষেত্র চিনে হাজার মাইল পরিযানে পথ দেখায়।"
    },
    muscularSystem: {
      en: "Massive flight engine: Pectoralis major (depressor power stroke, up to 20% total body mass) and supracoracoideus (elevator recovery stroke via the pulley-like triosseal canal), both anchored to the keeled sternum; automatic digital flexor tendon lock for effortless perching while asleep.",
      bn: "উড্ডয়ন পেশি: ডানার নিচের স্ট্রোকের জন্য বিশাল পেক্টোরালিস মেজর এবং উপরের স্ট্রোকের জন্য সুপ্রাকোরাকয়েডিয়াস; ডালে বসে ঘুমানোর সময় স্বয়ংক্রিয় টেন্ডন লক যা পা শক্ত করে ধরে রাখে।"
    },
    development: {
      en: "Hard calcium carbonate-shelled cleidoic amniotic eggs requiring active body incubation heat; altricial development (naked, blind, dependent chicks in passerines) or precocial development (downy, self-feeding hatchlings in ducks/shorebirds); dedicated biparental care.",
      bn: "ক্যালসিয়াম কার্বনেটের শক্ত খোসাযুক্ত ডিম যা তা দিয়ে ফোটাতে হয়; ডিম ফুটে অসহায় অন্ধ ছানা অথবা স্বয়ংসম্পূর্ণ ছানা বের হয়; পিতা-মাতা উভয়ের গভীর অপত্য স্নেহ ও খাদ্য যোগান।"
    },
    adaptations: {
      en: "Ultralight hollow pneumatized bones braced with internal crisscross trabeculae; nine interconnected air sacs driving continuous unidirectional flow parabronchial lung oxygen extraction (~80% efficiency); fused thoracic synsacrum and pygostyle; toothless keratin rhamphotheca beak eliminating heavy teeth.",
      bn: "বাতাসপূর্ণ ফাঁপা বায়বীয় অস্থি; অবিরাম একমুখী বাতাস চলাচলের ৯টি বায়ুথলিযুক্ত ফুসফুস; শক্ত ওজনে হালকা ফিউজড কঙ্কাল এবং ভারী দাঁত ও চোয়ালের বদলে হালকা কেরাটিন চঞ্চু।"
    },
    ecologicalRole: {
      en: "Ecosystem catalysts: major seed dispersers sustaining tropical forest regeneration; indispensable flower pollinators (sunbirds); biological predators suppressing agricultural insect and rodent plagues; vultures provide disease-stopping sanitary scavenging.",
      bn: "বনায়ন ও বীজ বিস্তারের প্রধান দূত; মৌটুসির মতো পরাগায়নকারী পাখি; ফসলের পোকা ও ইঁদুরের প্রাকৃতিক শিকারী; শকুন মৃত পশুর শব দ্রুত খেয়ে অ্যানথ্রাক্স ও জলাতঙ্ক জীবাণু ধ্বংস করে।"
    },
    majorOrders: [
      { name: "Passeriformes", nameBn: "প্যাসারিফর্মিস (সংবার্ড / চড়ুই)", descEn: "Perching birds with specialized vocal syrinx; >60% of all birds.", descBn: "গায়ক পাখি; চড়ুই, দোয়েল, কাক।" },
      { name: "Columbiformes", nameBn: "কলম্বিফর্মিস (পায়রা ও ঘুঘু)", descEn: "Pigeons and doves producing crop milk for hatchlings.", descBn: "পায়রা ও ঘুঘু পাখি।" },
      { name: "Coraciiformes", nameBn: "কোরাসিফর্মিস (মাছরাঙা)", descEn: "Large heads, dagger bills, syndactyl feet; kingfishers.", descBn: "মাছ শিকারী মাছরাঙা।" }
    ],
    canonicalSpeciesIds: ["sp-passer-domesticus"],
    referenceIds: ["ref-hickman-2020"]
  },
  {
    id: "vert-mammalia",
    slug: "mammalia",
    className: "Class Mammalia",
    classBn: "শ্রেণি ম্যামালিয়া (স্তন্যপায়ী)",
    commonNameEn: "Mammals",
    commonNameBn: "স্তন্যপায়ী (দুধপানকারী উষ্ণরক্তের প্রাণী)",
    isFishGroup: false,
    estimatedLivingSpecies: 6500,
    cataloguedSpeciesCount: 2,
    diagnosticCharacteristics: {
      en: [
        "Mammary glands in females secreting nourishing milk for suckling offspring.",
        "Body covered in insulating hair/fur composed of alpha-keratin.",
        "Middle ear cavity containing exactly three auditory ossicles (malleus, incus, stapes).",
        "Single lower jaw bone (dentary) articulating directly with the squamosal cranial bone.",
        "Muscular diaphragm completely separating thoracic (pleural) and abdominal (peritoneal) cavities.",
        "Enucleated biconcave red blood cells (erythrocytes) optimizing gas diffusion."
      ],
      bn: [
        "মাতৃদুগ্ধ নিঃসরণকারী স্তন্যগ্রন্থি যা শাবককে পুষ্টি যোগায়।",
        "আলফা-কেরাটিন নির্মিত লোম বা পশম দ্বারা আবৃত দেহ।",
        "মধ্যকর্ণে তিনটি ক্ষুদ্র শ্রবণ অস্থি (ম্যালিয়াস, ইনকাস ও স্টেপিস)।",
        "একক ডেন্টারি অস্থি দ্বারা গঠিত নিচের চোয়াল।",
        "বক্ষ ও উদর গহ্বরকে পৃথককারী পেশিবহুল মধ্যচ্ছদা (ডায়াফ্রাম)।",
        "নিউক্লিয়াসবিহীন দ্বি-অবতল লোহিত রক্তকণিকা।"
      ]
    },
    bodyForm: {
      en: "Quadrupedal terrestrial, modified for powered flight (bats), or fully hydrodynamically fusiform in marine cetaceans (dolphins).",
      bn: "চার পায়ে হাঁটা, ওড়ার জন্য পাখা (বাদুড়), অথবা পানিতে সন্তরণের জন্য প্যাডেলসদৃশ (ডলফিন)।"
    },
    skeletalSystem: {
      en: "Seven cervical vertebrae (with few exceptions); heterodont dentition (incisors, canines, premolars, molars).",
      bn: "ঘাড়ে ৭টি কশেরুকা; বিভিন্ন কাজের জন্য কর্তন, ছেদন ও পেষণ দাঁত।"
    },
    integument: {
      en: "Glandular skin with sweat (sudoriferous), sebaceous (oil), and scent glands; hair coat providing thermoregulation.",
      bn: "ঘাম গ্রন্থি ও তেল গ্রন্থিযুক্ত ত্বক এবং পশমি লোম।"
    },
    feedingAndDigestion: {
      en: "Heterodont chewing mechanics; extensive gut adaptations: multi-chambered ruminant stomachs in herbivores or simple cecal tracts in carnivores.",
      bn: "দাঁত দিয়ে চর্বন; শাকাহারীতে রোমন্থক জাবরকাটা পাকস্থলী এবং মাংসাশীতে দ্রুত পরিপাক।"
    },
    respiration: {
      en: "Negative-pressure alveolar ventilation powered by the muscular diaphragm.",
      bn: "ডায়াফ্রামের মাধ্যমে ফুসফুসে ঋণাত্মক চাপে বাতাস টেনে নেওয়া।"
    },
    circulation: {
      en: "Four-chambered heart with persistent left aortic arch; completely separated double circulation.",
      bn: "বাম মহাধমনীযুক্ত চার প্রকোষ্ঠী উন্নত দ্বৈত সংবহনতন্ত্র।"
    },
    excretion: {
      en: "Metanephric kidneys with long Loops of Henle producing concentrated urea-rich urine.",
      bn: "হ্যানলির লুপ সমৃদ্ধ বৃক্ক যা ইউরিয়াযুক্ত মূত্র তৈরি করে।"
    },
    nervousSystem: {
      en: "Highly expanded cerebral neocortex enabling complex cognition, social memory, and parental bonding.",
      bn: "নিয়োকরটেক্স সমৃদ্ধ উন্নত মস্তিষ্ক যা গভীর স্মৃতি ও বুদ্ধি পরিচালনা করে।"
    },
    reproduction: {
      en: "Internal fertilization; chorioallantoic placenta in eutherians delivering nutrients and oxygen directly in utero.",
      bn: "অভ্যন্তরীণ নিষেক; প্লাসেন্টা বা অমরা দ্বারা গর্ভে ভ্রূণ লালন ও জীবন্ত বাচ্চা প্রসব।"
    },
    habitatAndEcology: {
      en: "All biomes: oceans (whales), tropical river systems (Ganges dolphin), polar tundra, deserts, canopies, and subterranean tunnels.",
      bn: "সমুদ্র, সুন্দরবনের নদী, বনজঙ্গল এবং নগর সভ্যতা।"
    },
    evolutionarySignificance: {
      en: "Evolved high cognitive neocortex, metabolic homeothermy, and intensive parental investment culminating in complex human society.",
      bn: "উন্নত মস্তিষ্ক ও অপত্য স্নেহের মাধ্যমে পৃথিবীতে শীর্ষ বুদ্ধিমত্তা প্রতিষ্ঠা।"
    },
    thermoregulation: {
      en: "Endothermic homeotherms tightly regulating hypothalamic set points (36°C to 39°C); insulation mediated by pelage fur coat and subcutaneous adipose blubber layer; active physiological cooling via eccrine sweat secretion and panting; non-shivering thermogenesis via brown adipose tissue (BAT) uncoupling protein-1 (thermogenin).",
      bn: "হাইপোথ্যালামাস-নিয়ন্ত্রিত সুনির্দিষ্ট উষ্ণরক্তী ব্যবস্থা (৩৬-৩৯°C); পশমি লোম ও ত্বকের নিচের চর্বির স্তর (ব্লাবার) তাপ ধরে রাখে; ঘাম নিঃসরণ ও জিহ্বা দিয়ে বাষ্পীভবনে শরীর ঠান্ডা রাখা; বাদামী চর্বির মাধ্যমে ঠান্ডা প্রতিরোধ।"
    },
    sensorySystems: {
      en: "Highly specialized sensory trifecta: mobile cartilaginous pinnae orienting sound waves to three middle-ear ossicles (malleus, incus, stapes) enabling superior auditory localization; high-surface ethmoid turbinates supporting millions of olfactory receptor neurons; tactile vibrissae whiskers; ultrasonic melon-focused echolocation in odontocetes (dolphins).",
      bn: "শব্দের উৎস খুঁজতে নড়নক্ষম কান ও মধ্যকর্ণের ৩টি ক্ষুদ্র অস্থি; লক্ষ লক্ষ নিউরনযুক্ত অত্যন্ত সংবেদনশীল ঘ্রাণতন্ত্র; মুখের সংবেদী গোঁফ (ভাইব্রিসি) এবং নদীর ঘোলা পানিতে পথ খোঁজার জন্য ডলফিনের বিশেষায়িত আল্ট্রাসোনিক একোলোকেশন।"
    },
    muscularSystem: {
      en: "Muscular dome-shaped diaphragm uniquely separating thoracic and abdominal cavities driving negative-pressure respiration; delicate superficial facial muscles of expression derived from second hyoid arch mediating nuanced social communication; specialized appendicular musculature configured for digitigrade sprint, arboreal brachiation, or aquatic flipper propulsion.",
      bn: "শ্বাস-প্রশ্বাসের জন্য বিশেষায়িত মধ্যচ্ছদা (ডায়াফ্রাম); সামাজিক ভাব প্রকাশের জন্য মুখের সূক্ষ্ম নড়াচড়ার পেশি; দ্রুত দৌড়, গাছে ঝোলা বা সাঁতারের জন্য রূপান্তরিত পেশিবহুল অঙ্গ।"
    },
    development: {
      en: "Internal fertilization; eutherian embryos implant in uterine endometrium developing intimate invasive chorioallantoic placenta for hemotrophic gas, nutrient, and waste exchange; prolonged gestation followed by obligate postpartum lactation via mammary glands; extensive parental protection, bonding, and cognitive social learning.",
      bn: "অভ্যন্তরীণ নিষেক; জরায়ুর ভেতর অমরার (প্লাসেন্টা) মাধ্যমে ভ্রূণের বিকাশ; প্রসবের পর স্তন্যদুগ্ধ পান করিয়ে ছানা প্রতিপালন; দীর্ঘমেয়াদী মাতৃস্নেহ ও সামাজিক আচরণ শিক্ষা।"
    },
    adaptations: {
      en: "Specialized heterodont dentition (incisors, canines, premolars, molars) adapted for diverse shearing, grinding, or crushing diets; single lower dentary jaw bone articulating with squamosal; enucleated biconcave erythrocytes maximizing oxygen carrying capacity; expanded six-layered cerebral neocortex.",
      bn: "বিভিন্ন কাজের জন্য বিশেষায়িত হেটারোডন্ট দাঁতের সারি; একক ডেন্টারি চোয়ালের সন্ধি; অধিক অক্সিজেন পরিবহনের জন্য নিউক্লিয়াসবিহীন লোহিত রক্তকণিকা এবং চিন্তা ও স্মৃতির জন্য ছয় স্তরের মস্তিষ্কের নিওকর্টেক্স।"
    },
    ecologicalRole: {
      en: "Keystone architects across planetary biomes: apex carnivores (tigers) regulating herbivore population densities and preventing overgrazing; mega-herbivores and ungulates shaping grassland dynamics; cetaceans driving oceanic vertical nutrient pumping; primates enabling major forest seed dispersal.",
      bn: "পৃথিবীর বাস্তুতন্ত্রের শীর্ষ নিয়ন্ত্রক: বাঘের মতো শীর্ষ শিকারী বনের হরিণ নিয়ন্ত্রণ করে বন রক্ষা করে; গাঙ্গেয় ডলফিন নদীর সুস্বাস্থ্য বজায় রাখে; বানর ফল খেয়ে সমগ্র বনাঞ্চল জুড়ে বীজ ছড়িয়ে দেয়।"
    },
    majorOrders: [
      { name: "Artiodactyla (Cetartiodactyla)", nameBn: "আর্টিওড্যাকটাইলা (ডলফিন ও খুরযুক্ত প্রাণী)", descEn: "Even-toed ungulates and fully aquatic cetaceans (Ganges river dolphin).", descBn: "গাঙ্গেয় ডলফিন, হরিণ ও মহিষ।" },
      { name: "Carnivora", nameBn: "কার্নিভোরা (মাংসাশী স্তন্যপায়ী)", descEn: "Specialized shearing carnassial teeth; tigers, bears, otters.", descBn: "রয়েল বেঙ্গল টাইগার ও ভোঁদড়।" },
      { name: "Primates", nameBn: "প্রাইমেটস (বানর ও মানুষ)", descEn: "Grasping hands with opposable thumbs, forward-facing stereoscopic eyes.", descBn: "বানর, হনুমান ও মানুষ।" }
    ],
    canonicalSpeciesIds: ["sp-platanista-gangetica", "sp-panthera-tigris"],
    referenceIds: ["ref-hickman-2020"]
  }
];
