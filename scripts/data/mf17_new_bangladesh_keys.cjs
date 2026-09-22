// scripts/data/mf17_new_bangladesh_keys.cjs
// 4 New Bangladesh Regional Identification Keys for MASTER-FIX-17

const MF17_NEW_BANGLADESH_KEYS = [
  {
    id: "key-bangladesh-freshwater-molluscs",
    title: "Diagnostic Key to Common Freshwater Molluscs of Bangladesh",
    titleBn: "বাংলাদেশের সাধারণ স্বাদু পানির মলাস্কার শনাক্তকরণ কুঞ্জি",
    scope: "bangladesh",
    targetTaxonId: "taxon-mollusca",
    majorGroup: "mollusca",
    taxonScope: "Freshwater & Wetland Gastropoda and Bivalvia of Bangladesh",
    taxonScopeBn: "বাংলাদেশের স্বাদু পানি ও জলাভূমির গ্যাস্ট্রোপোডা ও বাইভালভিয়া",
    description: "Authoritative dichotomous identification key distinguishing common freshwater, wetland, and estuarine snails and bivalve molluscs of Bangladesh floodplains based on shell symmetry, opercular anatomy, whorl spire structure, and respiratory adaptations.",
    descriptionBn: "খোলসের প্রতিসাম্য, অপারকুলামের উপস্থিতি, স্পায়ারের গঠন ও শ্বসন অভিযোজনের ওপর ভিত্তি করে বাংলাদেশের স্বাদু পানি, প্লাবনভূমি ও মোহনা অঞ্চলের সাধারণ শামুক ও ঝিনুকের প্রামাণ্য শনাক্তকরণ কুঞ্জি।",
    educationalLevel: "intermediate",
    keyType: "dichotomous",
    sourceReferenceIds: [
      "ref-siddiqui-2007-mollusca",
      "ref-hickman-2020"
    ],
    verificationStatus: "verified",
    steps: [
      {
        id: 1,
        title: "Shell Morphology: Bivalved vs Univalved Coiled Shell",
        titleBn: "খোলসের রূপতত্ত্ব: দ্বি-কপাটিক ঝিনুক বনাম এককুণ্ডলী শামুক",
        character: "Number of shell valves and symmetry of body plan",
        characterBn: "খোলসের কপাটিকার সংখ্যা ও শারীরিক প্রতিসাম্য",
        couplets: [
          {
            lead: "Shell composed of two laterally compressed calcified valves hinged dorsally by an elastic ligament; head, tentacles, and radula completely absent; ciliated ctenidia functioning in both filter-feeding and respiration; wedge-shaped muscular burrowing foot.",
            leadBn: "দেহ দুটি পার্শ্বীয় কপাটিকা দ্বারা আবৃত যা লিগামেন্ট দ্বারা যুক্ত; মস্তক, কর্ষিকা ও র্যাডুলা অনুপস্থিত; সিলিয়াযুক্ত ফুলকা দ্বারা ছাঁকন ও শ্বসন সম্পন্ন হয়; কীলকাকৃতির পেশিবহুল পা দ্বারা তলদেশে গর্ত করে।",
            diagnosticFeature: "Bivalved shell, lateral compression, filter-feeding, wedge foot",
            diagnosticFeatureBn: "দ্বি-কপাটিক খোলস, পার্শ্বীয় চ্যাপ্টা দেহ, ছাঁকনভোজী, কীলকাকৃতি পা",
            resultType: "species",
            speciesId: "sp-lamellidens-marginalis",
            rationaleEn: "Resolves to Lamellidens marginalis (Freshwater unionid mussel / ঝিনুক)",
            rationaleBn: "ল্যামেলিডেন্স মার্জিনালিস (স্বাদু পানির সাধারণ ঝিনুক)"
          },
          {
            lead: "Shell univalved, typically spirally coiled or neritiform; distinct cephalic region with sensory tentacles and basal eyes; muscular ventral foot broad and flattened for crawling; radular rasping organ present in buccal cavity.",
            leadBn: "খোলস একক এবং সর্পিলাকারে কুণ্ডলিত বা অর্ধবৃত্তাকার; চোখ ও কর্ষিকাসহ সুনির্দিষ্ট মস্তক বিদ্যমান; চলাচলের জন্য চ্যাপ্টা পেশিবহুল পদ; মুখগহ্বরে র্যাডুলা বিদ্যমান।",
            diagnosticFeature: "Univalved coiled shell, distinct head with radula, ventral creeping foot",
            diagnosticFeatureBn: "একক কুণ্ডলিত খোলস, র্যাডুলাযুক্ত মস্তক, চ্যাপ্টা পদ",
            resultType: "next_step",
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: "Opercular Apparatus: Operculate Aquatic Snails vs Pulmonate Land Snails",
        titleBn: "অপারকুলামের উপস্থিতি: অপারকুলেট জলজ শামুক বনাম পালমোনেট শামুক",
        character: "Presence or absence of protective opercular plate closing the aperture",
        characterBn: "মুখছিদ্র ঢাকার জন্য অপারকুলামের উপস্থিতি বা অনুপস্থিতি",
        couplets: [
          {
            lead: "Protective operculum (calcareous or horny disc) firmly attached to dorsal posterior foot, tightly sealing shell aperture when soft body retracts; primarily aquatic or amphibious habit.",
            leadBn: "পায়ে অপারকুলাম বা ঢাকনা যুক্ত থাকে যা শামুক খোলসের ভেতর ঢুকলে মুখছিদ্র সম্পূর্ণ বন্ধ করে দেয়; মূলত জলজ বা উভচর স্বভাব।",
            diagnosticFeature: "Operculum present on foot, aquatic/amphibious gill-bearing snail",
            diagnosticFeatureBn: "অপারকুলাম বিদ্যমান, জলজ/উভচর ফুলকাযুক্ত শামুক",
            resultType: "next_step",
            nextStepId: 3
          },
          {
            lead: "True operculum absent; terrestrial or wetland air-breathing pulmonate snail; vascularized mantle cavity functioning as a lung with contractile pneumostome; shell very large, elongate-conical (up to 12-15 cm) with flammulated brownish zigzag bands; voracious invasive herbivore.",
            leadBn: "প্রকৃত অপারকুলাম অনুপস্থিত; স্থলচর বা আর্দ্র ভূমির ফুসফুসী শামুক; ম্যান্টল গহ্বর ফুসফুসে রূপান্তরিত; খোলস অত্যন্ত বৃহৎ (১২-১৫ সেমি), কোণাকার এবং বাদামি জিগজ্যাগ দাগযুক্ত; আগ্রাসী ক্ষতিকর শাকাহারী প্রজাতি।",
            diagnosticFeature: "No operculum, pneumostome lung, gigantic conical striped shell",
            diagnosticFeatureBn: "অপারকুলামবিহীন, নিউমোস্টোম ফুসফুস, বিশাল কোণাকার ডোরাকাটা খোলস",
            resultType: "species",
            speciesId: "sp-achatina-fulica",
            rationaleEn: "Resolves to Achatina fulica (Giant African snail / আফ্রিকার বিশাল শামুক)",
            rationaleBn: "অ্যাকাটিনা ফুলিকা (আফ্রিকার বিশাল শামুক)"
          }
        ]
      },
      {
        id: 3,
        title: "Spire Architecture & Respiratory Adaptations in Aquatic Operculates",
        titleBn: "জলজ অপারকুলেটদের স্পায়ার গঠন ও শ্বসন অভিযোজন",
        character: "Shell shape (globose vs conic) and dual respiration adaptations",
        characterBn: "খোলসের আকৃতি (গোলাকার বনাম কোণাকার) ও দ্বৈত শ্বসন অঙ্গ",
        couplets: [
          {
            lead: "Shell large, ventricose and globose with greatly inflated body whorl; calcareous concentric operculum with central nucleus; amphibious respiration via right vascularized pulmonary sac and left ctenidium (comb gill); long extensible respiratory siphon; common in wetlands, rice paddies, and ponds.",
            leadBn: "খোলস বৃহদাকার, স্ফীত ও গোলগাল; কেন্দ্রিক খাঁজযুক্ত ক্যালসিয়াম নির্মিত অপারকুলাম; ডান ফুসফুসীয় থলি ও বাম ফুলকা দ্বারা দ্বৈত শ্বসন সক্ষম; দীর্ঘ প্রসার্য সাইফন; ধানখেত ও বিল-ঝিলে অত্যন্ত সুলভ।",
            diagnosticFeature: "Globose shell, calcareous operculum, dual respiration, long siphon",
            diagnosticFeatureBn: "গোলাকার স্ফীত খোলস, ক্যালসিয়াম অপারকুলাম, দ্বৈত শ্বসন, দীর্ঘ সাইফন",
            resultType: "species",
            speciesId: "sp-pila-globosa",
            rationaleEn: "Resolves to Pila globosa (Asian apple snail / পিলা বা আপেল শামুক)",
            rationaleBn: "পাইলা গ্লোবোসা (আপেল শামুক)"
          },
          {
            lead: "Shell elongate-conical or low-neritiform, not strongly globose; horny or calcareous operculum; respiration aquatic via ctenidia without specialized pulmonary sac.",
            leadBn: "খোলস লম্বাটে-কোণাকার অথবা অর্ধবৃত্তাকার, অতিরিক্ত স্ফীত নয়; পাতলা বা ক্যালসিয়াম অপারকুলাম; বিশেষায়িত ফুসফুসীয় থলিবিহীন কেবল জলজ ফুলকা দ্বারা শ্বসন।",
            diagnosticFeature: "Conical or neritiform shell, aquatic ctenidial respiration",
            diagnosticFeatureBn: "কোণাকার বা নেরিটিফর্ম খোলস, ফুলকা শ্বসন",
            resultType: "next_step",
            nextStepId: 4
          }
        ]
      },
      {
        id: 4,
        title: "Freshwater River Snail vs Estuarine Mangrove Nerite",
        titleBn: "নদী ও বিলের গেঁড়ি শামুক বনাম মোহনার নেরিটিড শামুক",
        character: "Shell spire elevation, habitat, and developmental mode",
        characterBn: "স্পায়ারের উচ্চতা, বাসস্থান ও জনন পদ্ধতি",
        couplets: [
          {
            lead: "Shell elevated, ovate-conical with 5-6 rounded whorls marked by green-to-olive spiral color bands; apex acute; thin horny operculum with concentric growth rings; ovoviviparous (females give birth to shelled juveniles); abundant in slow rivers, haors, and oxbow lakes.",
            leadBn: "খোলস উচুঁ, ডিম্বাকার-কোণাকার এবং ৫-৬টি গোলাকার প্যাঁচযুক্ত; সবুজ বা জলপাই রঙের অনুদৈর্ঘ্য বলয় রেখা; তীক্ষ্ণ শীর্ষবিন্দু; পাতলা শৃঙ্গীয় অপারকুলাম; জরায়ুজ বা ওভোভিভিপ্যারাস (মা শামুক জীবন্ত বাচ্চা প্রসব করে); নদী ও হাওরে প্রচুর দেখা যায়।",
            diagnosticFeature: "Elevated conic shell, spiral color bands, viviparous, thin horny operculum",
            diagnosticFeatureBn: "উঁচু কোণাকার খোলস, ডোরাকাটা প্যাঁচ, বাচ্চা প্রসবকারী, পাতলা অপারকুলাম",
            resultType: "species",
            speciesId: "sp-bellamya-bengalensis",
            rationaleEn: "Resolves to Bellamya bengalensis (Banded pond snail / গেঁড়ি শামুক)",
            rationaleBn: "বেলাআমিয়া বেঙ্গালেনসিস (গেঁড়ি শামুক)"
          },
          {
            lead: "Shell low, hemispherical and limpet-like with flattened spire; dorsal surface violet to purplish-black with fine spiral striae; aperture semi-lunar with D-shaped calcareous operculum bearing internal articulating apophysis; tightly adheres to mangrove roots and mudflats in the Sundarbans.",
            leadBn: "খোলস নিচু, অর্ধ-গোলাকার এবং কুণ্ডলীবিহীন বা চ্যাপ্টা; পৃষ্ঠদেশ বেগুনি-কালো এবং সূক্ষ্ম খাঁজযুক্ত; ডি-আকৃতির ক্যালসিয়াম অপারকুলাম; সুন্দরবনের ম্যানগ্রোভের শ্বাসমূল ও কাদাচরে শক্তভাবে সেঁটে থাকে।",
            diagnosticFeature: "Hemispherical limpet-like shell, violet color, D-shaped operculum, mangrove mudflats",
            diagnosticFeatureBn: "অর্ধবৃত্তাকার চ্যাপ্টা খোলস, বেগুনি রঙ, ডি-অপারকুলাম, ম্যানগ্রোভ কাদাচর",
            resultType: "species",
            speciesId: "sp-dostia-violacea",
            rationaleEn: "Resolves to Dostia violacea (Violet nerite / বেগুনি নেরিটিড শামুক)",
            rationaleBn: "ডসটিয়া ভায়োলেসিয়া (বেগুনি নেরিটিড শামুক)"
          }
        ]
      }
    ]
  },
  {
    id: "key-bangladesh-wetland-decapods",
    title: "Diagnostic Key to Wetland & Estuarine Decapod Crustaceans of Bangladesh",
    titleBn: "বাংলাদেশের জলাভূমি ও মোহনা অঞ্চলের ডেকাপোডা ক্রাস্টাশীয় শনাক্তকরণ কুঞ্জি",
    scope: "bangladesh",
    targetTaxonId: "taxon-decapoda",
    majorGroup: "arthropoda",
    taxonScope: "Order Decapoda: Prawns, Shrimps & Crabs of Bangladesh Wetlands",
    taxonScopeBn: "অর্ডার ডেকাপোডা: বাংলাদেশের জলাভূমির চিংড়ি ও কাঁকড়া",
    description: "Diagnostic morphological key differentiating commercial and ecologically prominent wetland decapods of Bangladesh including giant freshwater river prawns, tiger shrimps, mangrove mud crabs, and freshwater paddy crabs.",
    descriptionBn: "গলদা ও বাগদা চিংড়ি, সুন্দরবনের শিলা কাঁকড়া এবং ধানখেতের মিঠা পানির কাঁকড়াসহ বাংলাদেশের অর্থনৈতিক ও পরিবেশগতভাবে গুরুত্বপূর্ণ ডেকাপোডা ক্রাস্টাশিয়া শনাক্তকরণের দ্বি-শাখ কুঞ্জি।",
    educationalLevel: "intermediate",
    keyType: "dichotomous",
    sourceReferenceIds: [
      "ref-iucn-bd-2015-crustaceans",
      "ref-siddiqui-2008-arthropoda"
    ],
    verificationStatus: "verified",
    steps: [
      {
        id: 1,
        title: "Body Form: Elongated Natant Prawn/Shrimp vs Depressed Brachyuran Crab",
        titleBn: "শারীরিক গঠন: লম্বা সাঁতারু চিংড়ি বনাম চ্যাপ্টা কাঁকড়া",
        character: "Abdomen development and locomotion morphology",
        characterBn: "উদরের গঠন ও চলন অঙ্গের রূপতত্ত্ব",
        couplets: [
          {
            lead: "Body laterally compressed and subcylindrical; abdomen long, muscular, extended posteriorly with well-developed swimming pleopods and fan-like uropods/telson; carapace equipped with a prominent anterior serrated rostrum; adapted for swimming and benthic foraging.",
            leadBn: "পার্শ্বীয়ভাবে চ্যাপ্টা নলাকার দেহ; দীর্ঘ পেশিবহুল প্রসারিত উদর যাতে সাঁতারু প্লিওপড ও লেজের পাখা (টেলসন) বিদ্যমান; মস্তকে খাঁজকাটা করাতাকৃতি রস্ট্রাম; সাঁতার ও তলদেশে বিচরণের উপযোগী।",
            diagnosticFeature: "Extended muscular abdomen, swimming pleopods, serrated rostrum (Prawn/Shrimp)",
            diagnosticFeatureBn: "দীর্ঘ উদর, সাঁতারু পা, খাঁজকাটা রস্ট্রাম (চিংড়ি)",
            resultType: "next_step",
            nextStepId: 2
          },
          {
            lead: "Carapace broad, heavily calcified, and dorsoventrally depressed; abdomen greatly reduced, symmetrical, flattened, and permanently folded underneath thoracic sternum; first walking legs modified into massive grasping chelae; walking legs adapted for crawling or lateral swimming.",
            leadBn: "বক্ষ-খোলস প্রশস্ত, পুরু ক্যালসিয়ামযুক্ত ও উপর-নিচে চ্যাপ্টা; উদর অত্যন্ত ক্ষুদ্র ও বক্ষের নিচে স্থায়ীভাবে ভাঁজ করা; প্রথম জোড়া পা বিশাল চিমটাযুক্ত দাঁড়া; হাঁটার পা হামাগুড়ি বা পার্শ্বীয় সাঁতারের উপযোগী।",
            diagnosticFeature: "Depressed carapace, folded reduced abdomen, powerful chelipeds (True crab)",
            diagnosticFeatureBn: "চ্যাপ্টা বর্ম, নিচে ভাঁজ করা ক্ষুদ্র উদর, শক্তিশালী দাঁড়া (কাঁকড়া)",
            resultType: "next_step",
            nextStepId: 4
          }
        ]
      },
      {
        id: 2,
        title: "Prawn Suborders: Marine/Estuarine Penaeidea vs Freshwater Caridea",
        titleBn: "চিংড়ির উপবর্গ: সামুদ্রিক/মোহনাজ পেনাইড বনাম স্বাদু পানির ক্যারিডিয়ান",
        character: "Abdominal pleura overlap pattern and cheliped arrangement",
        characterBn: "উদরের প্লিউরা পরস্পর আচ্ছাদন ও দাঁড়া বিন্যাস",
        couplets: [
          {
            lead: "Marine and coastal estuarine prawn; first three pairs of pereiopods equipped with small pinching chelae; pleura of second abdominal segment overlap third segment only (not first); carapace adorned with prominent black/brown and yellow tiger crossbands; releases eggs freely into seawater without carrying them.",
            leadBn: "উপকূলীয় ও মোহনার নোনাপানির চিংড়ি; প্রথম তিন জোড়া পায়ে ক্ষুদ্র চিমটা বিদ্যমান; দ্বিতীয় উদর খণ্ডকের পাত কেবল ৩য় খণ্ডকে ঢাকে (১ম খণ্ডককে নয়); পিঠে বাঘের মতো উজ্জ্বল ডোরাকাটা দাগ; পেটে ডিম বহন করে না।",
            diagnosticFeature: "3 chelate pairs, 2nd pleuron overlaps 3rd only, tiger stripes (Penaeus)",
            diagnosticFeatureBn: "৩ জোড়া দাঁড়া, ২য় খণ্ডক কেবল ৩য়কে ঢাকে, ডোরাকাটা বাঘের ছোপ (বাগদা)",
            resultType: "species",
            speciesId: "sp-penaeus-monodon",
            rationaleEn: "Resolves to Penaeus monodon (Giant tiger prawn / বাগদা চিংড়ি)",
            rationaleBn: "পেনাইয়াস মনোডন (বাগদা চিংড়ি)"
          },
          {
            lead: "Inland freshwater and estuarine caridean river prawn; second pair of pereiopods modified into enormously enlarged, powerful pinching chelipeds; pleura of second abdominal segment distinctly overlap both first and third segments; females carry developing egg clusters under pleon.",
            leadBn: "মিঠা পানি ও মোহনার ক্যারিডিয়ান নদী চিংড়ি; দ্বিতীয় জোড়া পা অত্যন্ত দীর্ঘ ও শক্তিশালী বিশালাকার দাঁড়ায় রূপান্তরিত; দ্বিতীয় খণ্ডকের পাত ১ম ও ৩য় উভয় খণ্ডককে ঢেকে রাখে; স্ত্রী চিংড়ি পেটের নিচে ডিমের গুচ্ছ বহন করে।",
            diagnosticFeature: "Enlarged 2nd chelipeds, 2nd abdominal pleuron overlaps 1st & 3rd, berried females",
            diagnosticFeatureBn: "বিশাল ২য় জোড়া দাঁড়া, ২য় খণ্ডক ১ ও ৩ উভয়কে ঢাকে, ডিম্বধারী পেট",
            resultType: "next_step",
            nextStepId: 3
          }
        ]
      },
      {
        id: 3,
        title: "Genus Macrobrachium: Giant River Prawn vs Monsoon River Prawn",
        titleBn: "ম্যাক্রোব্রাকিয়াম গণ: গলদা চিংড়ি বনাম মনসুন নদী চিংড়ি",
        character: "Relative length and ornamentation of 2nd chelipeds, rostral tooth count",
        characterBn: "দ্বিতীয় জোড়া দাঁড়ার দৈর্ঘ্য, কাঁটার বিন্যাস ও রস্ট্রামের দাঁতের সংখ্যা",
        couplets: [
          {
            lead: "Second pereiopods in adult males distinctly longer than total body length (often 1.5x body length), intense cobalt blue or dark brown, covered with robust spinules; rostrum long with prominent sinusoidal curve, bearing 11-14 dorsal teeth and 8-10 ventral teeth; largest freshwater prawn in the world.",
            leadBn: "পূর্ণবয়স্ক পুরুষে দ্বিতীয় জোড়া পা সমগ্র দেহের চেয়েও দীর্ঘ (দেহের ১.৫ গুণ পর্যন্ত), গাঢ় নীল বা তামাটে এবং কাঁটাময়; দীর্ঘ বাঁকানো রস্ট্রামে ১১-১৪টি পৃষ্ঠীয় এবং ৮-১০টি অঙ্কীয় দাঁত থাকে; বিশ্বের বৃহত্তম স্বাদু পানির চিংড়ি।",
            diagnosticFeature: "Chelipeds longer than body, curved rostrum with 11-14 / 8-10 teeth, blue pincers",
            diagnosticFeatureBn: "দেহের চেয়ে দীর্ঘ দাঁড়া, বাঁকা রস্ট্রামে ১১-১৪/৮-১০ দাঁত, নীল চিমটা",
            resultType: "species",
            speciesId: "sp-macrobrachium-rosenbergii",
            rationaleEn: "Resolves to Macrobrachium rosenbergii (Giant freshwater prawn / গলদা চিংড়ি)",
            rationaleBn: "ম্যাক্রোব্রাকিয়াম রোজেনবার্গি (গলদা চিংড়ি)"
          },
          {
            lead: "Second pereiopods in adult males shorter than total body length, densely covered with fine velvety pubescence along the palm and fingers; rostrum straight with tip upturned, bearing 9-11 dorsal teeth and 5-6 ventral teeth; common commercial river prawn of the Padma and Meghna systems.",
            leadBn: "পুরুষের দ্বিতীয় জোড়া পা সমগ্র দেহের চেয়ে খাটো এবং থাবা ও আঙুলগুলো ঘন মখমলের মতো রোমে আবৃত; রস্ট্রাম তুলনামূলক সোজা, পৃষ্ঠে ৯-১১টি এবং অঙ্কীয় দিকে ৫-৬টি দাঁত; পদ্মা ও মেঘনা নদীর সাধারণ অর্থকরী চিংড়ি।",
            diagnosticFeature: "Chelipeds shorter than body with velvety pubescence, 9-11 / 5-6 rostral teeth",
            diagnosticFeatureBn: "দেহের চেয়ে খাটো মখমলি রোমযুক্ত দাঁড়া, ৯-১১/৫-৬ রস্ট্রাল দাঁত",
            resultType: "species",
            speciesId: "sp-macrobrachium-malcolmsonii",
            rationaleEn: "Resolves to Macrobrachium malcolmsonii (Monsoon river prawn / মনসুন নদী চিংড়ি)",
            rationaleBn: "ম্যাক্রোব্রাকিয়াম ম্যালকমসোনি (মনসুন নদী চিংড়ি)"
          }
        ]
      },
      {
        id: 4,
        title: "Brachyuran Crabs: Estuarine Mud Crab vs Freshwater Paddy Field Crab",
        titleBn: "ব্র্যাকিউরান কাঁকড়া: সুন্দরবনের শিলা কাঁকড়া বনাম ধানখেতের মিঠা পানির কাঁকড়া",
        character: "Modification of fifth pereiopod for swimming vs walking, anterolateral carapace teeth",
        characterBn: "পঞ্চম পায়ের সাঁতারের উপযোগী রূপান্তর বনাম হাঁটার পা, বর্মের পাশের দাঁতের সংখ্যা",
        couplets: [
          {
            lead: "Fifth pair of pereiopods modified into flattened, oval, paddle-like swimming blades (dactyli); anterolateral margins of carapace armed with 9 sharp, equal serrated teeth on each side; massive crushing chelipeds; mangrove mudflats and tidal creeks of the Sundarbans.",
            leadBn: "পঞ্চম জোড়া পায়ের শেষ অংশ চ্যাপ্টা ডিম্বাকৃতি প্যাডেলের মতো সাঁতারের ব্লেডে রূপান্তরিত; বক্ষ বর্মের দুই পাশে ৯টি করে সম-আকৃতির তীক্ষ্ণ করাত-দাঁত; বিশাল পেষণকারী দাঁড়া; সুন্দরবনের ম্যানগ্রোভ খাঁড়ি ও কাদাচরে বাস করে।",
            diagnosticFeature: "Paddle-shaped 5th swimming legs, 9 anterolateral teeth, estuarine mud crab",
            diagnosticFeatureBn: "প্যাডেলসদৃশ সাঁতারু পা, দুই পাশে ৯টি করে দাঁত, মোহনার শিলা কাঁকড়া",
            resultType: "species",
            speciesId: "sp-scylla-olivacea",
            rationaleEn: "Resolves to Scylla olivacea (Orange mud crab / সুন্দরবনের শিলা কাঁকড়া)",
            rationaleBn: "সিলা অলিভাসিয়া (সুন্দরবনের শিলা কাঁকড়া)"
          },
          {
            lead: "Fifth pair of pereiopods pointed for walking and digging, not flattened into paddle blades; anterolateral margin of carapace smooth or bearing 1-2 small epibranchial teeth; carapace dark olive-brown to purple; deep burrower in agricultural paddy fields, pond dykes, and freshwater wetlands.",
            leadBn: "পঞ্চম জোড়া পা হাঁটা ও মাটি খোঁড়ার জন্য সূঁচালো, সাঁতারের প্যাডেল নয়; বর্মের কিনারা মসৃণ অথবা কেবল ১-২টি ছোট খাঁজযুক্ত; খোলস গাঢ় জলপাই-বাদামি বা বেগুনি; ধানখেত ও পুকুরপাড়ের কাদায় গভীর গর্ত তৈরি করে।",
            diagnosticFeature: "Pointed walking 5th legs, smooth carapace margin, freshwater paddy burrower",
            diagnosticFeatureBn: "সূঁচালো হাঁটার পা, মসৃণ বর্ম প্রান্ত, ধানখেতের গর্তবাসী মিঠা পানির কাঁকড়া",
            resultType: "species",
            speciesId: "sp-sartoriana-spinigera",
            rationaleEn: "Resolves to Sartoriana spinigera (Common freshwater crab / দেশি মিঠা পানির কাঁকড়া)",
            rationaleBn: "সার্টোরিয়ানা স্পিনিজেরা (দেশি মিঠা পানির কাঁকড়া)"
          }
        ]
      }
    ]
  },
  {
    id: "key-bangladesh-textbook-insects",
    title: "Diagnostic Key to Representative Agricultural & Urban Insects of Bangladesh",
    titleBn: "বাংলাদেশের প্রতিনিধি স্থানীয় কৃষি ও শহুরে পতঙ্গের শনাক্তকরণ কুঞ্জি",
    scope: "bangladesh",
    targetTaxonId: "taxon-insecta",
    majorGroup: "arthropoda",
    taxonScope: "Class Insecta: Major Textbook Orders & Species of Bangladesh",
    taxonScopeBn: "শ্রেণি ইনসেকটা: বাংলাদেশের প্রধান পাঠ্যপুস্তকোক্ত পতঙ্গ প্রজাতি",
    description: "Introductory and secondary school biology dichotomous key classifying common textbook insect orders and representative species in Bangladesh including agricultural pests, vectors, pollinators, and predators.",
    descriptionBn: "কৃষি ক্ষতিকর পতঙ্গ, রোগবাহী মশক ও মাছি, পরাগায়নকারী এবং শিকারী পতঙ্গসহ বাংলাদেশের পাঠ্যপুস্তকে বহুল ব্যবহৃত প্রধান পতঙ্গ প্রজাতি ও বর্গ শনাক্তকরণের কুঞ্জি।",
    educationalLevel: "introductory",
    keyType: "dichotomous",
    sourceReferenceIds: [
      "ref-siddiqui-2008-arthropoda",
      "ref-hickman-2020"
    ],
    verificationStatus: "verified",
    steps: [
      {
        id: 1,
        title: "Wing Architecture: Sclerotized/Leathery Covers vs Membranous/Scaled Wings",
        titleBn: "ডানার গঠন: শক্ত/চামড়াসদৃশ ডানা বনাম পাতলা ঝিল্লিযুক্ত/আঁইশযুক্ত ডানা",
        character: "Forewing modification and biting-chewing mandibles",
        characterBn: "সম্মুখ ডানার রূপান্তর ও কর্তনকারী মুখোপাঙ্গ",
        couplets: [
          {
            lead: "Forewings modified into hardened protective elytra or thickened leathery tegmina protecting delicate hindwings at rest; biting and chewing mandibles; jumping hind legs or crawling habit.",
            leadBn: "সম্মুখ ডানা শক্ত বর্মে (এলিট্রা) বা চামড়াসদৃশ টেকগমিনায় রূপান্তরিত যা বিশ্রামকালে পেছনের ডানাকে ঢাকে; কর্তন ও চর্বন উপযোগী চোয়াল; লাফানোর পেছনের পা অথবা হাঁটার স্বভাব।",
            diagnosticFeature: "Hardened elytra or leathery tegmina, chewing mandibles",
            diagnosticFeatureBn: "শক্ত এলিট্রা বা চামড়ার ডানা, চর্বন মুখোপাঙ্গ",
            resultType: "next_step",
            nextStepId: 2
          },
          {
            lead: "Wings entirely membranous (four or two) or covered in overlapping microscopic scales; mouthparts specialized for siphoning, piercing-sucking, sponging, or chewing in social worker castes.",
            leadBn: "ডানা সম্পূর্ণ পাতলা ঝিল্লিময় (৪টি বা ২টি) অথবা আণুবীক্ষণিক আঁইশ দ্বারা আবৃত; মুখোপাঙ্গ সাইফন, চোষক, লেহন অথবা সামাজিক শ্রমিকের কর্তন উপযোগী।",
            diagnosticFeature: "Membranous or scaled wings, specialized sucking/sponging mouthparts",
            diagnosticFeatureBn: "ঝিল্লিময় বা আঁইশযুক্ত ডানা, চোষক/লেহন মুখোপাঙ্গ",
            resultType: "next_step",
            nextStepId: 5
          }
        ]
      },
      {
        id: 2,
        title: "Saltatorial Orthoptera vs Hardened Sclerotized Coleoptera",
        titleBn: "লাফানো অর্থোপ্টেরা বনাম শক্ত ডানাবিশিষ্ট গুবরে পোকা (কোলিওপ্টেরা)",
        character: "Hindleg modification for jumping vs heavily sclerotized elytra",
        characterBn: "লাফানোর উপযোগী পেছনের পা বনাম শক্ত কাইটিনযুক্ত এলিট্রা",
        couplets: [
          {
            lead: "Hind legs greatly enlarged and elongated with muscular saltatorial femora adapted for jumping; forewings leathery tegmina; acoustic organs (tympana) present; order Orthoptera.",
            leadBn: "লাফানোর জন্য পেছনের পা অত্যন্ত বড় ও শক্তিশালী ফিমারযুক্ত; সম্মুখ ডানা চামড়াসদৃশ টেকগমিনা; শ্রবণ অঙ্গ বিদ্যমান; বর্গ অর্থোপ্টেরা।",
            diagnosticFeature: "Jumping hind legs (saltatorial), leathery tegmina (Orthoptera)",
            diagnosticFeatureBn: "লাফানোর পেছনের পা, চামড়াসদৃশ ডানা (অর্থোপ্টেরা)",
            resultType: "next_step",
            nextStepId: 3
          },
          {
            lead: "Forewings completely sclerotized into rigid protective wing covers (elytra) meeting along a straight dorsal median suture; hind legs not specialized for jumping; order Coleoptera.",
            leadBn: "সম্মুখ ডানা শক্ত কাইটিনযুক্ত বর্মে (এলিট্রা) রূপান্তরিত যা পিঠের মাঝে সোজা রেখায় মিলিত হয়; পেছনের পা লাফানোর উপযোগী নয়; বর্গ কোলিওপ্টেরা।",
            diagnosticFeature: "Hardened protective elytra meeting in median suture (Coleoptera)",
            diagnosticFeatureBn: "শক্ত এলিট্রা ডানা যা মাঝে মিলিত হয় (কোলিওপ্টেরা)",
            resultType: "next_step",
            nextStepId: 4
          }
        ]
      },
      {
        id: 3,
        title: "Order Orthoptera: Desert Locust vs Black Field Cricket",
        titleBn: "বর্গ অর্থোপ্টেরা: মরু পঙ্গপাল বনাম কালো মাঠের ঝিঁঝিঁ পোকা",
        character: "Antenna length, auditory tympanum location, and habit",
        characterBn: "শুঙ্গের দৈর্ঘ্য, শ্রবণ অঙ্গের অবস্থান ও স্বভাব",
        couplets: [
          {
            lead: "Antennae distinctly shorter than body; auditory tympanum located on the lateral sides of the first abdominal segment; robust yellowish to pinkish-grey body; devastating swarming agricultural pest.",
            leadBn: "শুঙ্গ দেহের দৈর্ঘ্যের চেয়ে লক্ষণীয়ভাবে খাটো; শ্রবণ পর্দা প্রথম উদর খণ্ডকের দুই পাশে অবস্থিত; হলুদ বা গোলাপি-ধূসর শক্তিশালী দেহ; ফসল ধ্বংসকারী ঝাঁকবদ্ধ পঙ্গপাল।",
            diagnosticFeature: "Short antennae, abdominal tympanum, swarming pest (Locust)",
            diagnosticFeatureBn: "খাটো শুঙ্গ, উদরে কান, ঝাঁকবদ্ধ পঙ্গপাল",
            resultType: "species",
            speciesId: "sp-schistocerca-gregaria",
            rationaleEn: "Resolves to Schistocerca gregaria (Desert locust / মরু পঙ্গপাল)",
            rationaleBn: "সিস্টোসার্কা গ্রেগারিয়া (মরু পঙ্গপাল)"
          },
          {
            lead: "Antennae long, slender, thread-like (filiform), exceeding body length; auditory tympanum located on the prothoracic tibiae of forelegs; body shiny jet-black; nocturnal chirping insect of gardens and fields.",
            leadBn: "শুঙ্গ অত্যন্ত দীর্ঘ, সুতার মতো সরু যা দেহের চেয়েও লম্বা; শ্রবণ পর্দা সামনের পায়ের টিবিয়ায় অবস্থিত; চকচকে কুচকুচে কালো দেহ; রাতচরা ডাকপাড়া ঝিঁঝিঁ পোকা।",
            diagnosticFeature: "Long filiform antennae, tibial tympanum, nocturnal black cricket",
            diagnosticFeatureBn: "দীর্ঘ শুঙ্গ, সামনের পায়ে কান, নিশাচর কালো ঝিঁঝিঁ",
            resultType: "species",
            speciesId: "sp-gryllus-bimaculatus",
            rationaleEn: "Resolves to Gryllus bimaculatus (Two-spotted field cricket / ঝিঁঝিঁ পোকা)",
            rationaleBn: "গ্রিলাস বাইম্যাকুলাটাস (মাঠের ঝিঁঝিঁ পোকা)"
          }
        ]
      },
      {
        id: 4,
        title: "Order Coleoptera: Red Flour Beetle vs Seven-Spotted Ladybird",
        titleBn: "বর্গ কোলিওপ্টেরা: লাল আটার গুবরে পোকা বনাম সাত-ফোঁটা লেডিবার্ড বিটল",
        character: "Body shape, coloration, and dietary habits",
        characterBn: "দেহের আকৃতি, রঙ ও খাদ্যভ্যাস",
        couplets: [
          {
            lead: "Body small (3.5-4.5 mm), flattened and elongated-oblong, uniform reddish-brown; clubbed antennae with distinct 3-segmented terminal club; major cosmopolitan pest infesting stored grains and milled flour.",
            leadBn: "দেহ ক্ষুদ্র (৩.৫-৪.৫ মিমি), চ্যাপ্টা ও লম্বাটে, সম্পূর্ণ লালচে-বাদামি; অগ্রভাগে ৩টি খণ্ডযুক্ত ক্লাবেট শুঙ্গ; খাদ্যগুদামের সংরক্ষিত গম ও আটার প্রধান ক্ষতিকর পোকা।",
            diagnosticFeature: "Small oblong flat body, reddish-brown, stored grain pest",
            diagnosticFeatureBn: "ছোট চ্যাপ্টা লম্বা দেহ, লালচে বাদামি, আটা ও দানার পোকা",
            resultType: "species",
            speciesId: "sp-tribolium-castaneum",
            rationaleEn: "Resolves to Tribolium castaneum (Red flour beetle / লাল আটার পোকা)",
            rationaleBn: "ট্রাইবোলিয়াম কাস্টেনিয়াম (লাল আটার পোকা)"
          },
          {
            lead: "Body hemispherical and convexly domed, oval; head and pronotum black with white anterior spots; elytra bright scarlet red or orange bearing exactly seven distinct black round spots; beneficial voracious predator of crop aphids.",
            leadBn: "দেহ অর্ধবৃত্তাকার গম্বুজের মতো গোল ও উত্তল; মাথা ও বক্ষ কালো এবং সাদা ছোপযুক্ত; খোলস উজ্জ্বল টকটকে লাল বা কমলা যাতে ঠিক ৭টি কালো গোলাকার ফোঁটা থাকে; ফসলের জাবপোকা ধ্বংসকারী উপকারী বন্ধু পোকা।",
            diagnosticFeature: "Hemispherical red dome, 7 black spots, aphid predator (Ladybird)",
            diagnosticFeatureBn: "উত্তল লাল গম্বুজ দেহ, ৭টি কালো ফোঁটা, জাবপোকা শিকারী (লেডিবার্ড)",
            resultType: "species",
            speciesId: "sp-coccinella-septempunctata",
            rationaleEn: "Resolves to Coccinella septempunctata (Seven-spotted ladybug / লেডিবার্ড বিটল)",
            rationaleBn: "কক্সিনেলা সেপ্টেমপাঙ্কটাটা (সাত-ফোঁটা লেডিবার্ড বিটল)"
          }
        ]
      },
      {
        id: 5,
        title: "Two-Winged Diptera vs Scale-Winged Lepidoptera vs Social Ants / Dragonflies",
        titleBn: "দ্বিপক্ষ ডিপ্টেরা বনাম আঁইশডানাওয়ালা প্রজাপতি বনাম পিঁপড়া / ফড়িং",
        character: "Number of functional wings and scale covering",
        characterBn: "কার্যকর ডানার সংখ্যা ও আঁইশের উপস্থিতি",
        couplets: [
          {
            lead: "Single pair of membranous functional forewings; hindwings reduced to minute knobbed sensory balancing organs (halteres); order Diptera (true flies and mosquitoes).",
            leadBn: "কেবলমাত্র এক জোড়া পাতলা কার্যকর সম্মুখ ডানা; পেছনের ডানা ভারসাম্য রক্ষাকারী ছোট বোঁটায় (হ্যালটেয়ার) রূপান্তরিত; বর্গ ডিপ্টেরা (মাছি ও মশা)।",
            diagnosticFeature: "Two wings only, hindwings modified into halteres (Diptera)",
            diagnosticFeatureBn: "কেবল ২ ডানা, পেছনের ডানা হ্যালটেয়ার (ডিপ্টেরা)",
            resultType: "next_step",
            nextStepId: 6
          },
          {
            lead: "Two pairs of wings present (or wingless worker castes in social hymenopterans); wings covered with scales or entirely transparent and reticulated.",
            leadBn: "দুই জোড়া ডানা বিদ্যমান (অথবা সামাজিক পিঁপড়ার ডানাহীন শ্রমিক শ্রেণি); ডানা আণুবীক্ষণিক রঙিন আঁইশে ঢাকা অথবা সম্পূর্ণ স্বচ্ছ জালিকার মতো।",
            diagnosticFeature: "Four wings present or wingless social worker caste",
            diagnosticFeatureBn: "৪টি ডানাযুক্ত অথবা ডানাহীন সামাজিক শ্রমিক",
            resultType: "next_step",
            nextStepId: 8
          }
        ]
      },
      {
        id: 6,
        title: "Order Diptera: Housefly vs Blood-Sucking Mosquitoes",
        titleBn: "বর্গ ডিপ্টেরা: গৃহ মাছি বনাম রক্তচোষা মশক",
        character: "Mouthpart type: Sponging labellum vs piercing-sucking proboscis",
        characterBn: "মুখোপাঙ্গ: চোষক ল্যাবেলাম বনাম রক্তচোষা ছুঁচালো শুঁড়",
        couplets: [
          {
            lead: "Body stout, greyish; thorax adorned with four dark longitudinal stripes; mouthparts modified into a fleshy retractile proboscis ending in a sponging labellum; mechanical vector of cholera, typhoid, and dysentery.",
            leadBn: "দেহ স্থূল ও ধূসর; বক্ষদেশে ৪টি স্পষ্ট কালো অনুদৈর্ঘ্য রেখা; মুখোপাঙ্গ মাংসল চোষক ল্যাবেলামে রূপান্তরিত যা তরল লেহন করে; কলেরা, টাইফয়েড ও আমাশয়ের বাহক।",
            diagnosticFeature: "Four thoracic stripes, fleshy sponging labellum, synanthropic fly",
            diagnosticFeatureBn: "বক্ষে ৪টি কালো ডোরা, চোষক ল্যাবেলাম, গৃহ মাছি",
            resultType: "species",
            speciesId: "sp-musca-domestica",
            rationaleEn: "Resolves to Musca domestica (Common housefly / গৃহ মাছি)",
            rationaleBn: "মাসকা ডোমেস্টিকা (গৃহ মাছি)"
          },
          {
            lead: "Body slender, fragile with long delicate legs; mouthparts elongated into a piercing-sucking needle-like proboscis for hematophagy in females; aquatic larvae with breathing siphon or spiracles.",
            leadBn: "দেহ সরু, দুর্বল এবং দীর্ঘ চিকন পাযুক্ত; স্ত্রী মশকীর মুখোপাঙ্গ রক্তচোষার জন্য তীক্ষ্ণ সূঁচালো শুঁড়ে রূপান্তরিত; জলজ লার্ভা।",
            diagnosticFeature: "Piercing-sucking needle proboscis, long legs, mosquito vector",
            diagnosticFeatureBn: "ছুঁচালো রক্তচোষা শুঁড়, লম্বা পা, মশক বাহক",
            resultType: "next_step",
            nextStepId: 7
          }
        ]
      },
      {
        id: 7,
        title: "Mosquito Lineages: Culex vs Anopheles",
        titleBn: "মশার গোত্র: কিউলেক্স বনাম অ্যানোফিলিস",
        character: "Resting posture, wing spots, and vector transmission",
        characterBn: "বসার কোণ, ডানার ছোপ এবং রোগ বিস্তার",
        couplets: [
          {
            lead: "Resting posture parallel to substrate with proboscis and abdomen forming an angle; wings plain translucent without dark scale patches; scutellum trilobed; primary tropical vector of lymphatic filariasis (elephantiasis).",
            leadBn: "বসার সময় দেহ সমান্তরাল থাকে এবং শুঁড় ও উদর কোণ তৈরি করে; ডানায় কোনো কালো আঁইশের ছোপ নেই; স্কুটেলাম তিন খণ্ডবিশিষ্ট; ফাইলেরিয়া বা গোদ রোগের প্রধান বাহক।",
            diagnosticFeature: "Parallel resting posture, unspotted wings, filariasis vector (Culex)",
            diagnosticFeatureBn: "সমান্তরাল বসার ভঙ্গি, ছোপহীন ডানা, গোদ রোগের বাহক (কিউলেক্স)",
            resultType: "species",
            speciesId: "sp-culex-quinquefasciatus",
            rationaleEn: "Resolves to Culex quinquefasciatus (Southern house mosquito / কিউলেক্স মশা)",
            rationaleBn: "কিউলেক্স কুইনকিউফ্যাসিয়াটাস (কিউলেক্স মশা)"
          },
          {
            lead: "Resting posture at a steep 45° to 90° angle to substrate with proboscis, head, and body forming a continuous straight line; wings distinctly spotted with dark and pale scale clusters; rounded crescent scutellum; primary vector of urban malaria.",
            leadBn: "বসার সময় দেহ তলদেশের সাথে ৪৫° থেকে ৯০° খাড়া কোণে থাকে এবং মাথা, শুঁড় ও শরীর এক সরলরেখায় থাকে; ডানায় কালো ও সাদা আঁইশের স্পষ্ট ছোপযুক্ত; শহুরে ম্যালেরিয়ার প্রধান বাহক।",
            diagnosticFeature: "Steep angled resting stance, spotted wings, malaria vector (Anopheles)",
            diagnosticFeatureBn: "খাড়া কোণে বসার ভঙ্গি, ছোপযুক্ত ডানা, ম্যালেরিয়া বাহক (অ্যানোফিলিস)",
            resultType: "species",
            speciesId: "sp-anopheles-stephensi",
            rationaleEn: "Resolves to Anopheles stephensi (Urban malaria mosquito / অ্যানোফিলিস মশা)",
            rationaleBn: "অ্যানোফিলিস স্টিফেনসি (অ্যানোফিলিস মশা)"
          }
        ]
      },
      {
        id: 8,
        title: "Scale-Winged Lepidoptera vs Social Ants & Dragonflies",
        titleBn: "আঁইশডানাওয়ালা প্রজাপতি বনাম সামাজিক পিঁপড়া ও ফড়িং",
        character: "Wing scale covering, siphoning proboscis, and abdominal petiole",
        characterBn: "ডানায় আঁইশ, সাইফন শুঁড় ও উদরের বোঁটা",
        couplets: [
          {
            lead: "Wings broad, densely covered with overlapping microscopic pigmented scales; mouthparts modified into a coiled tubular siphoning proboscis for floral nectar feeding; striking black background with creamy-yellow spots and two prominent false eyespots on hindwings; caterpillar feeds on citrus leaves; Order Lepidoptera.",
            leadBn: "ডানা দুটি প্রশস্ত এবং সূক্ষ্ম রঙিন আঁইশ দ্বারা ঘনভাবে আবৃত; মুখোপাঙ্গ কুণ্ডলিত নলাকার সাইফন শুঁড়ে রূপান্তরিত যা ফুলের মধু চোষে; কালো ডানায় ঘন ক্রিম-হলুদ ছোপযুক্ত চমৎকার নকশা এবং পেছনের ডানায় দুটি মেকি চোখের ছোপ; লার্ভা লেবু গাছের পাতা খায়; বর্গ লেপিডোপ্টেরা।",
            diagnosticFeature: "Scaled wings, siphoning proboscis, black with yellow spots and red eyespots (Lime butterfly)",
            diagnosticFeatureBn: "আঁইশযুক্ত ডানা, সাইফন শুঁড়, কালো-হলুদ ছোপ ও মেকি চোখ (লেবু প্রজাপতি)",
            resultType: "species",
            speciesId: "sp-papilio-demoleus",
            rationaleEn: "Resolves to Papilio demoleus (Lime butterfly / লেবু প্রজাপতি)",
            rationaleBn: "প্যাপিলিও ডিমোলিয়াস (লেবু প্রজাপতি)"
          },
          {
            lead: "Wings entirely devoid of scales, transparent and membranous, or wingless worker castes with constricted petiole waist; biting mandibles.",
            leadBn: "ডানায় আঁইশ নেই, ডানা সম্পূর্ণ স্বচ্ছ ঝিল্লিময় অথবা উদরে সরু কোমরযুক্ত ডানাহীন শ্রমিক পিঁপড়া; শক্তিশালী চর্বন চোয়াল।",
            diagnosticFeature: "Unscaled membranous wings or wingless petiolate workers",
            diagnosticFeatureBn: "আঁইশহীন স্বচ্ছ ডানা অথবা সরু কোমরযুক্ত ডানাহীন শ্রমিক",
            resultType: "next_step",
            nextStepId: 9
          }
        ]
      },
      {
        id: 9,
        title: "Social Formicidae (Ants) vs Aerial Predatory Odonata (Dragonflies)",
        titleBn: "সামাজিক পিঁপড়া বনাম শিকারী ফড়িং (ওডোনাটা)",
        character: "Wing structure and aerial flight vs terrestrial worker morphology",
        characterBn: "ডানার গঠন ও বায়বীয় উড্ডয়ন বনাম স্থলচর শ্রমিকের রূপতত্ত্ব",
        couplets: [
          {
            lead: "Terrestrial social insects; wingless worker castes possess a distinct slender petiole node between mesosoma and gaster; geniculate (elbowed) antennae; colonies exhibit division of labor.",
            leadBn: "স্থলচর সামাজিক পতঙ্গ; ডানাহীন শ্রমিকদের বক্ষ ও উদরের মাঝে সুস্পষ্ট বোঁটাসদৃশ পেট্রিওল গিঁট থাকে; কুনুইয়ের মতো বাঁকানো শুঙ্গ; কলোনিতে শ্রমবিভাজন বিদ্যমান।",
            diagnosticFeature: "Wingless workers with abdominal petiole, elbowed antennae (Ants)",
            diagnosticFeatureBn: "বোঁটাসদৃশ কোমরযুক্ত ডানাহীন শ্রমিক, বাঁকানো শুঙ্গ (পিঁপড়া)",
            resultType: "next_step",
            nextStepId: 10
          },
          {
            lead: "Large aerial predatory insect; two pairs of equal, highly reticulated transparent membranous wings held horizontally at rest; enormous compound eyes meeting across head; mature males possess a dazzling scarlet-red abdomen; voracious predator of mosquitoes and flies.",
            leadBn: "বিশাল বায়বীয় শিকারী পতঙ্গ; সম-আকৃতির অত্যন্ত জটিল জালিকাযুক্ত দুই জোড়া স্বচ্ছ ডানা যা বিশ্রামকালে অনুভূমিকভাবে প্রসারিত থাকে; মাথায় পরস্পর সংযুক্ত বিশাল যৌগিক পুঞ্জাক্ষি; প্রাপ্তবয়স্ক পুরুষে উজ্জ্বল টকটকে লাল উদর; মশা ও মাছি শিকারী।",
            diagnosticFeature: "Large reticulate horizontal wings, red abdomen in males, dragonfly",
            diagnosticFeatureBn: "অনুভূমিক জালিকাযুক্ত ডানা, পুরুষের লাল উদর, ফড়িং",
            resultType: "species",
            speciesId: "sp-crocothemis-servilia",
            rationaleEn: "Resolves to Crocothemis servilia (Scarlet skimmer dragonfly / লাল ফড়িং)",
            rationaleBn: "ক্রোকোথেমিস সার্ভিলিয়া (লাল ফড়িং)"
          }
        ]
      },
      {
        id: 10,
        title: "Common Ants of Bangladesh: Black Carpenter Ant vs Arboreal Weaver Ant",
        titleBn: "বাংলাদেশের সাধারণ পিঁপড়া: কালো ছুতার পিঁপড়া বনাম লাল নালসো পিঁপড়া",
        character: "Nesting habitat, color, and aggressive defensive behavior",
        characterBn: "বাসার ধরন, বর্ণ ও প্রতিরক্ষামূলক আক্রমণাত্মক আচরণ",
        couplets: [
          {
            lead: "Large shiny jet-black ant (workers 8-15 mm); nests in decaying wood, soil chambers, and house foundations; nocturnal foraging columns; non-stinging but powerful biting mandibles.",
            leadBn: "বিশাল চকচকে কুচকুচে কালো পিঁপড়া (শ্রমিক ৮-১৫ মিমি); পচা কাঠ, মাটির গর্ত ও ভবনের কোণে বাসা বাঁধে; রাতে দল বেঁধে খাদ্য সংগ্রহ করে; হুলহীন কিন্তু শক্তিশালী চোয়ালের কামড়যুক্ত।",
            diagnosticFeature: "Large glossy black body, wood/ground nester, carpenter ant",
            diagnosticFeatureBn: "বিশাল চকচকে কালো দেহ, কাঠ ও মাটির বাসা, কালো ছুতার পিঁপড়া",
            resultType: "species",
            speciesId: "sp-camponotus-compressus",
            rationaleEn: "Resolves to Camponotus compressus (Indian black carpenter ant / কালো ছুতার পিঁপড়া)",
            rationaleBn: "ক্যাম্পোনোটাস কমপ্রেসাস (কালো ছুতার পিঁপড়া)"
          },
          {
            lead: "Medium-sized slender arboreal ant, yellowish-brown to emerald green; builds complex globular leaf nests in orchard and forest canopies woven together with silk extruded by living larvae; ferocious territorial biter spraying formic acid.",
            leadBn: "মাঝারি সরু গাছের পিঁপড়া, হলুদ-বাদামি থেকে সবুজ রঙের; জীবন্ত গাছের পাতাগুলোকে নিজস্ব লার্ভার রেশম সুতা দিয়ে সেলাই করে গোল ঝুলন্ত বাসা তৈরি করে; আক্রমণাত্মক স্বভাব এবং কামড়ের সাথে ফরমিক অ্যাসিড ছিটায়।",
            diagnosticFeature: "Arboreal leaf-weaver, yellowish-green body, painful communal biter",
            diagnosticFeatureBn: "গাছের পাতা সেলাইকারী, হলুদ-সবুজ দেহ, যন্ত্রণাদায়ক কামড় (নালসো পিঁপড়া)",
            resultType: "species",
            speciesId: "sp-oecophylla-smaragdina",
            rationaleEn: "Resolves to Oecophylla smaragdina (Asian weaver ant / লাল নালসো পিঁপড়া)",
            rationaleBn: "ইকোফিলা স্মার্যাগডিনা (লাল নালসো পিঁপড়া)"
          }
        ]
      }
    ]
  },
  {
    id: "key-bangladesh-annelids",
    title: "Diagnostic Key to Common Annelids of Bangladesh",
    titleBn: "বাংলাদেশের সাধারণ অ্যানেলিডার শনাক্তকরণ কুঞ্জি",
    scope: "bangladesh",
    targetTaxonId: "taxon-annelida-marine",
    majorGroup: "invertebrates",
    taxonScope: "Phylum Annelida: Earthworms, Leeches & Estuarine Ragworms of Bangladesh",
    taxonScopeBn: "পর্ব অ্যানেলিডা: বাংলাদেশের কেঁচো, জোঁক ও মোহনার পলিকিট",
    description: "Diagnostic taxonomic key distinguishing ecologically and educationally essential segmented worms of Bangladesh across terrestrial, freshwater, and estuarine wetland ecosystems.",
    descriptionBn: "বাংলাদেশের স্থলজ, স্বাদু পানি ও উপকূলীয় মোহনা অঞ্চলের সাধারণ ও পাঠ্যপুস্তকোক্ত কেঁচো, জোঁক ও নেরিস জাতীয় খণ্ডায়িত কৃমির শনাক্তকরণ কুঞ্জি।",
    educationalLevel: "intermediate",
    keyType: "dichotomous",
    sourceReferenceIds: [
      "ref-siddiqui-2007-annelida",
      "ref-ruppert-2004"
    ],
    verificationStatus: "verified",
    steps: [
      {
        id: 1,
        title: "Locomotory Appendages: Parapodia vs Clitellar Setae/Suckers",
        titleBn: "চলন উপাঙ্গ: প্যারাপোডিয়া বনাম ক্লাইটেলামযুক্ত কিটি/চোষক",
        character: "Lateral unjointed fleshy parapodia with sensory prostomium vs clitellate body",
        characterBn: "পার্শ্বীয় মাংসল প্যারাপোডিয়া বনাম ক্লাইটেলামযুক্ত দেহ",
        couplets: [
          {
            lead: "Body segments equipped with lateral, unjointed fleshy paddle-like lobes (parapodia) bearing bundles of stiff chaetae; distinct prostomium with sensory tentacles, palps, and 4 eyes; burrowing in estuarine mudflats and mangrove creeks; Class Polychaeta.",
            leadBn: "প্রতিটি দেহখণ্ডকে এক জোড়া করে মাংসল চ্যাপ্টা চলন উপাঙ্গ (প্যারাপোডিয়া) ও কিটি গুচ্ছ উপস্থিত; চোখ, স্পর্শী কর্ষিকা ও প্যাল্পযুক্ত সুস্পষ্ট মস্তক; মোহনার কাদাচর ও ম্যানগ্রোভ খাঁড়িতে বাস করে; শ্রেণি পলিকিটা।",
            diagnosticFeature: "Fleshy lateral parapodia, cephalic tentacles, estuarine polychaete",
            diagnosticFeatureBn: "মাংসল প্যারাপোডিয়া, মাথায় কর্ষিকা, মোহনার পলিকিট",
            resultType: "species",
            speciesId: "sp-namalycastis-indica",
            rationaleEn: "Resolves to Namalycastis indica (Estuarine polychaete ragworm / মোহনার পলিকিট কৃমি)",
            rationaleBn: "নামালিকাস্টিন ইন্ডিকা (মোহনার পলিকিট কৃমি)"
          },
          {
            lead: "Parapodia, cephalic tentacles, and palps completely absent; body hermaphroditic, possessing a glandular clitellum (permanent or breeding) that secretes a cocoon for egg development; Class Clitellata.",
            leadBn: "প্যারাপোডিয়া ও মাথার স্পর্শী কর্ষিকা সম্পূর্ণ অনুপস্থিত; উভয়লিঙ্গ প্রাণী, ডিম সংরক্ষণের জন্য গ্রন্থিময় ক্লাইটেলাম বা পট্টি বিদ্যমান; শ্রেণি ক্লাইটেলাটা।",
            diagnosticFeature: "No parapodia or tentacles, glandular clitellum present (Clitellata)",
            diagnosticFeatureBn: "প্যারাপোডিয়া ও কর্ষিকাহীন, গ্রন্থিময় ক্লাইটেলাম বিদ্যমান (ক্লাইটেলাটা)",
            resultType: "next_step",
            nextStepId: 2
          }
        ]
      },
      {
        id: 2,
        title: "Class Clitellata: Setae-Bearing Earthworms vs Sucker-Bearing Leeches",
        titleBn: "শ্রেণি ক্লাইটেলাটা: কিটিযুক্ত কেঁচো বনাম চোষকযুক্ত জোঁক",
        character: "Presence of chaetae and coelomic cavities vs muscular suckers and botryoidal tissue",
        characterBn: "কিটি ও প্রশস্ত সিলোম বনাম পেশিবহুল চোষক ও বোট্রয়েডাল কলা",
        couplets: [
          {
            lead: "True coelom spacious and divided by intersegmental septa; body segments bearing chitinous setae (chaetae); oral and posterior suckers completely absent; terrestrial burrowers feeding on soil organic matter.",
            leadBn: "প্রকৃত সিলোম প্রশস্ত এবং পর্দা দ্বারা খণ্ডে খণ্ডে বিভক্ত; দেহখণ্ডকে ক্ষুদ্র কাইটিনময় কিটি বিদ্যমান; চোষক সম্পূর্ণ অনুপস্থিত; মাটির জৈব উপাদান খেয়ে বাস করা স্থলচর কেঁচো।",
            diagnosticFeature: "Spacious coelom, chitinous setae, no suckers, terrestrial earthworms",
            diagnosticFeatureBn: "প্রশস্ত সিলোম, কাইটিন কিটি, চোষকহীন, স্থলচর কেঁচো",
            resultType: "next_step",
            nextStepId: 3
          },
          {
            lead: "True coelom reduced to narrow botryoidal sinuses; setae completely absent; equipped with a muscular anterior oral sucker (bearing 3 denticulate jaws) and a powerful posterior cup-shaped sucker; body with exactly 33 segments obscured by superficial secondary annuli; ectoparasitic blood feeder on vertebrates.",
            leadBn: "সিলোম রক্তনালীসদৃশ সরু বোট্রয়েডাল সাইনাসে রূপান্তরিত; কিটি সম্পূর্ণ অনুপস্থিত; মুখছিদ্রে ৩টি দাঁতযুক্ত অগ্র চোষক এবং পেছনে শক্তিশালী পেয়ালাকৃতির পশ্চাৎ চোষক; ৩৩টি দেহখণ্ডক যা বাহ্যিক বলয় দ্বারা আবৃত; মেরুদণ্ডী প্রাণীর রক্তচোষা বহিঃপরজীবী।",
            diagnosticFeature: "Anterior and posterior suckers, 33 segments, jawed blood-feeder (Leech)",
            diagnosticFeatureBn: "অগ্র ও পশ্চাৎ চোষক, ৩৩টি খণ্ডক, রক্তচোষা জোঁক",
            resultType: "species",
            speciesId: "sp-hirudinaria-granulosa",
            rationaleEn: "Resolves to Hirudinaria granulosa (Indian cattle leech / সাধারণ রক্তচোষা জোঁক)",
            rationaleBn: "হিরুডিনারিয়া গ্র্যানুলোসা (ভারতীয় গবাদিপশুর জোঁক)"
          }
        ]
      },
      {
        id: 3,
        title: "Earthworm Lineages: Oriental Megascolecidae vs Tropical Epigeic Perionychidae",
        titleBn: "কেঁচোর গোত্র: প্রাচ্যদেশীয় মেগাস্কোলেসিডি বনাম দ্রুতগতির কম্পোস্ট কেঁচো",
        character: "Setae arrangement, clitellar position, and habit",
        characterBn: "কিটির বিন্যাস, ক্লাইটেলামের অবস্থান ও বাসস্থান",
        couplets: [
          {
            lead: "Setae arranged in a continuous circular ring (perichaetine arrangement, over 100 per segment) around every body segment; annular glandular clitellum permanently located on segments 14 to 16; cylindrical greyish-brown body; classic textbook earthworm dissecting subject of Bangladesh schools.",
            leadBn: "প্রতিটি খণ্ডকে আংটির মতো বৃত্তাকারে সাজানো অসংখ্য কিটি (পেরিকাইটিন বিন্যাস, প্রতি খণ্ডে ১০০টির বেশি); গাঢ় রঙের ক্লাইটেলাম সুনির্দিষ্টভাবে ১৪ থেকে ১৬তম খণ্ডকে বেষ্টন করে থাকে; ধূসর-বাদামি নলাকার দেহ; বাংলাদেশের পাঠ্যপুস্তকের ব্যবচ্ছেদকৃত সাধারণ কেঁচো।",
            diagnosticFeature: "Perichaetine setae ring, clitellum on segments 14-16, common textbook earthworm",
            diagnosticFeatureBn: "পেরিকাইটিন কিটি বলয়, ১৪-১৬তম খণ্ডে ক্লাইটেলাম, পাঠ্যপুস্তকের সাধারণ কেঁচো",
            resultType: "species",
            speciesId: "sp-metaphire-posthuma",
            rationaleEn: "Resolves to Metaphire posthuma (Asian common earthworm / সাধারণ কেঁচো)",
            rationaleBn: "মেটাফায়ার পোস্টহুমা (এশীয় সাধারণ কেঁচো)"
          },
          {
            lead: "Body dorsoventrally compressed, reddish-purple to iridescent blue on dorsum; clitellum situated across segments 13 to 17; extremely active and fast-moving epigeic litter-dweller; champion tropical vermicomposting earthworm widely cultivated in organic agriculture across Bangladesh.",
            leadBn: "দেহ কিছুটা চ্যাপ্টা, পৃষ্ঠদেশ লালচে-বেগুনি এবং উজ্জ্বল নীলচে আভা ছড়ায়; ক্লাইটেলাম ১৩ থেকে ১৭তম খণ্ডকে বিস্তৃত; অত্যন্ত চঞ্চল ও দ্রুত চলাচলকারী পচা পাতা ও গোবরবাসী কেঁচো; বাংলাদেশের জৈব চাষে বহুল ব্যবহৃত শীর্ষস্থানীয় ভার্মিকম্পোস্ট কেঁচো।",
            diagnosticFeature: "Iridescent reddish-purple body, clitellum on 13-17, fast tropical vermicomposting worm",
            diagnosticFeatureBn: "নীলচে-লালচে উজ্জ্বল দেহ, ১৩-১৭ খণ্ডে ক্লাইটেলাম, ভার্মিকম্পোস্ট কেঁচো",
            resultType: "species",
            speciesId: "sp-perionyx-excavatus",
            rationaleEn: "Resolves to Perionyx excavatus (Indian blue worm / নীল ভার্মিকম্পোস্ট কেঁচো)",
            rationaleBn: "পেরিওনিক্স এক্সক্যাভাটাস (নীল কেঁচো)"
          }
        ]
      }
    ]
  }
];

module.exports = { MF17_NEW_BANGLADESH_KEYS };
