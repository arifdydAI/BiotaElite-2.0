// Key 9: Global Diagnostic Key to Orders & Canonical Species of Living Reptilia
// Comprehensive expansion resolving all 14 canonical Reptilia species.

module.exports = {
  id: 'key-global-reptilia-orders',
  title: 'Diagnostic Key to Orders & Canonical Lineages of Living Reptilia',
  titleBn: 'সরীসৃপ শ্রেণির জীবিত বর্গ ও বংশধারার শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-reptilia',
  majorGroup: 'reptilia',
  taxonScope: 'Class Reptilia (Turtles, Tuatara, Crocodilians, Lizards & Snakes)',
  taxonScopeBn: 'রেপটিলিয়া বা সরীসৃপ শ্রেণি (কচ্ছপ, টুয়াটারা, কুমির, গিরগিটি ও সাপ)',
  description: 'Authoritative dichotomous key distinguishing the four extant orders of Class Reptilia and their canonical representative species based on epidermal keratinous scales, cranial fenestration, thecodont teeth, kinetic skull, and hemipenes.',
  descriptionBn: 'কেরাটিনময় আঁশ, করোটিকার গবাক্ষ, থেকোডন্ট দাঁত, হেমিপেনিস এবং কঙ্কালের ওপর ভিত্তি করে সরীসৃপদের ৪টি বর্গ ও ১৪টি প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-reptile-database-2026', 'ref-kardong-2018', 'ref-hickman-2020'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Bony Shell Presence: Testudines vs Non-Shelled Reptiles',
      titleBn: 'অস্থিময় খোলস: কচ্ছপ (টেস্টুডিনেস) বনাম খোলসহীন সরীসৃপ',
      character: 'Presence of a rigid bony shell enclosing trunk vs flexible body without shell',
      characterBn: 'বক্ষ ও উদর আবৃতকারী শক্ত খোলস বনাম খোলসহীন নমনীয় দেহ',
      couplets: [
        {
          lead: 'Order Testudines (Chelonia): Trunk permanently enclosed inside an immovable bony shell consisting of a dorsal carapace and ventral plastron fused with ribs and vertebrae; jaws completely toothless and encased in sharp keratinous horny beaks (tomia); pectoral and pelvic girdles located uniquely inside the ribcage.',
          leadBn: 'টেস্টুডিনেস বর্গ (কচ্ছপ): দেহ পৃষ্ঠীয় ক্যারাপেস ও অঙ্কীয় প্লাস্ট্রন দ্বারা গঠিত শক্ত অস্থিময় খোলসে আবৃত; চোয়াল দাঁতহীন এবং ধারালো চঞ্চুতে আবৃত; কাঁধ ও কোমর পাঁজরের খাঁচার ভেতরে অবস্থিত।',
          diagnosticFeature: 'Order Testudines: Bony carapace/plastron, toothless keratinous beak, internal girdles',
          diagnosticFeatureBn: 'টেস্টুডিনেস বর্গ: অস্থিময় খোলস, দাঁতহীন কাইটিনময় চঞ্চু, কচ্ছপ',
          resultType: 'next_step',
          nextStepId: 2
        },
        {
          lead: 'Body lacking a rigid bony shell; trunk vertebrae and ribs independent and movable; jaws armed with teeth (acrodont, pleurodont, or thecodont); pectoral girdle located exterior to thoracic ribs.',
          leadBn: 'অস্থিময় শক্ত খোলস অনুপস্থিত; পাঁজর ও কশেরুকা স্বাধীন ও নমনীয়; চোয়ালে দাঁত বর্তমান; কাঁধ পাঁজরের বাইরে অবস্থিত।',
          diagnosticFeature: 'Non-chelonian reptiles: Rhynchocephalia, Crocodylia & Squamata',
          diagnosticFeatureBn: 'খোলসহীন সরীসৃপ: টুয়াটারা, কুমির ও স্কোয়ামাটা (গিরগিটি/সাপ)',
          resultType: 'next_step',
          nextStepId: 4
        }
      ]
    },
    {
      id: 2,
      title: 'Order Testudines: Terrestrial Giant Tortoise vs Marine Sea Turtles',
      titleBn: 'টেস্টুডিনেস বর্গ: স্থলচর দৈত্যাকার কচ্ছপ বনাম সামুদ্রিক কাছিম',
      character: 'Columnar elephantine walking feet with high dome carapace vs paddle-like swimming flippers',
      characterBn: 'হাতির মতো নলাকার পা ও উঁচু গম্বুজাকার খোলস বনাম লগি বা প্যাডেল সদৃশ সাঁতারু ডানা',
      couplets: [
        {
          lead: 'Strictly terrestrial tortoise; hindfeet thick, columnar, and elephantine without webs or swimming claws; carapace high, massive, domed or saddle-shaped up to 1.2-1.5 meters; herbivorous giant insular endemic living over a century.',
          leadBn: 'সম্পূর্ণ স্থলচর কচ্ছপ; হাতির মতো নলাকার মোটা পা যাতে সাঁতারের পর্দা নেই; উঁচু গম্বুজের মতো বিশাল খোলস (১.২-১.৫ মিটার); ১০০ বছরের বেশি বাঁচে।',
          diagnosticFeature: 'Chelonoidis niger: Elephantine columnar feet, high dome/saddleback carapace, herbivorous giant',
          diagnosticFeatureBn: 'চেলোনয়ডিস নাইজার: গ্যালাপাগোস কচ্ছপ, হাতির মতো পা, উঁচু খোলস',
          resultType: 'species',
          speciesId: 'sp-chelonoidis-niger',
          rationaleEn: 'Resolves to Galápagos giant tortoise (Chelonoidis niger: Testudinidae)',
          rationaleBn: 'গ্যালাপাগোস জায়ান্ট টরটয়েজ (চেলোনয়ডিস নাইজার: টেস্টুডিনিডি পরিবার)'
        },
        {
          lead: 'Fully marine sea turtles; forelimbs modified into elongated, rigid wing-like paddle flippers; hindlimbs flattened rudders; shell streamlined and flattened; limbs cannot retract into shell.',
          leadBn: 'সম্পূর্ণ সামুদ্রিক কাছিম; সামনের পা দুটি দীর্ঘ পাখার মতো সাঁতারু ফ্লিপারে রূপান্তরিত; খোলসটি চ্যাপ্টা ও সুবিন্যস্ত; পা খোলসের ভেতর টেনে নেওয়া যায় না।',
          diagnosticFeature: 'Family Cheloniidae: Marine paddle flippers, non-retractile limbs, streamlined carapace',
          diagnosticFeatureBn: 'কেলনিডি পরিবার: সামুদ্রিক কাছিম, ফ্লিপার পা, ফ্ল্যাট খোলস',
          resultType: 'next_step',
          nextStepId: 3
        }
      ]
    },
    {
      id: 3,
      title: 'Marine Sea Turtles: Green Sea Turtle vs Olive Ridley',
      titleBn: 'সামুদ্রিক কাছিম: গ্রিন সি টার্টল বনাম অলিভ রিডলি কাছিম',
      character: 'Carapace with 4 pairs of lateral costal scutes vs 6 to 9 pairs of costal scutes',
      characterBn: 'ক্যারাপেসে ৪ জোড়া পার্শ্বীয় কোস্টাল স্কুট বনাম ৬ থেকে ৯ জোড়া কোস্টাল স্কুট',
      couplets: [
        {
          lead: 'Large marine turtle up to 1.2 meters; carapace smooth and heart-shaped with exactly 4 pairs of lateral costal scutes; head with single pair of prefrontal scales between eyes; serrated lower jaw adapted for herbivorous grazing on marine seagrasses and algae.',
          leadBn: 'বিশাল সামুদ্রিক কাছিম (১.২ মিটার); খোলসের দুই পাশে ঠিক ৪ জোড়া কোস্টাল স্কুট থাকে; চোখের মাঝে একজোড়া প্রিফ্রন্টাল স্কেল; সামুদ্রিক ঘাসভোজী।',
          diagnosticFeature: 'Chelonia mydas: 4 pairs costal scutes, single pair prefrontal scales, herbivorous serrated jaw',
          diagnosticFeatureBn: 'চেলোনিয়া মাইডাস: ৪ জোড়া কোস্টাল স্কুট, গ্রিন সি টার্টল / সবুজ কাছিম',
          resultType: 'species',
          speciesId: 'sp-chelonia-mydas',
          rationaleEn: 'Resolves to Green sea turtle (Chelonia mydas: Cheloniidae)',
          rationaleBn: 'সবুজ সামুদ্রিক কাছিম (চেলোনিয়া মাইডাস: কেলনিডি পরিবার)'
        },
        {
          lead: 'Smallest marine sea turtle (60-70 cm); carapace nearly circular and high-domed with 6 to 9 pairs of asymmetrical lateral costal scutes (higher count than any other sea turtle); uniform olive-green coloration; mass synchronized nesting aggregations (arribada) on sandy beaches.',
          leadBn: 'সবচেয়ে ছোট সামুদ্রিক কাছিম (৬০-৭০ সেমি); খোলসে ৬ থেকে ৯ জোড়া অপ্রতিসম কোস্টাল স্কুট থাকে; জলপাই-সবুজ রঙের; সৈকতে একসাথে হাজার হাজার কাছিমের ডিম পাড়ার দলগত মেলা (অরিবাডা)।',
          diagnosticFeature: 'Lepidochelys olivacea: 6-9 pairs costal scutes, circular high carapace, arribada mass nesting',
          diagnosticFeatureBn: 'লেপিডোকিলিস অলিভাসিয়া: ৬-৯ জোড়া কোস্টাল স্কুট, অলিভ রিডলি কাছিম, অরিবাডা',
          resultType: 'species',
          speciesId: 'sp-lepidochelys-olivacea',
          rationaleEn: 'Resolves to Olive ridley sea turtle (Lepidochelys olivacea: Cheloniidae)',
          rationaleBn: 'অলিভ রিডলি সামুদ্রিক কাছিম (লেপিডোকিলিস অলিভাসিয়া: কেলনিডি পরিবার)'
        }
      ]
    },
    {
      id: 4,
      title: 'Diapsid Lineages: Crocodylia vs Rhynchocephalia & Squamata',
      titleBn: 'ডায়াপসিড বংশধারা: কুমির বর্গ বনাম টুয়াটারা ও স্কোয়ামাটা (গিরগিটি/সাপ)',
      character: 'Thecodont teeth in bony sockets with 4-chambered heart and heavy osteoderms vs pleurodont/acrodont teeth',
      characterBn: 'চোয়ালের গর্তে প্রোথিত থেকোডন্ট দাঁত ও ৪ প্রকোষ্ঠের হৃৎপিণ্ড বনাম হেমিপেনিস ও রেনাল পৌষ্টিকতন্ত্র',
      couplets: [
        {
          lead: 'Order Crocodylia: Large, semi-aquatic predatory archosaurs; heavy thecodont conical teeth set in individual deep bony sockets; skull completely diapsid with secondary palate separating air passage from mouth; 4-chambered heart with Foramen of Panizza; dorsal armor of heavy bony plates (osteoderms); laterally flattened swimming tail.',
          leadBn: 'ক্রোকোডিলিয়া বর্গ (কুমির): বিশালাকার জলজ শিকারী আর্কোসর; চোয়ালের গভীর গর্তে শক্ত থেকোডন্ট দাঁত; ৪ প্রকোষ্ঠবিশিষ্ট উন্নত হৃৎপিণ্ড; পিঠজুড়ে শক্ত হাড়ের বর্ম (অস্টিওডার্ম); চ্যাপ্টা সাঁতারু লেজ।',
          diagnosticFeature: 'Order Crocodylia: Thecodont teeth, secondary palate, complete 4-chambered heart, dorsal osteoderms',
          diagnosticFeatureBn: 'ক্রোকোডিলিয়া বর্গ: থেকোডন্ট দাঁত, ৪ প্রকোষ্ঠের হৃৎপিণ্ড, অস্টিওডার্ম বর্ম',
          resultType: 'next_step',
          nextStepId: 5
        },
        {
          lead: 'Lepidosauria: Teeth acrodont or pleurodont, never set in individual thecodont sockets; heart 3-chambered; transverse cloacal slit; caudal autotomy planes often present; males possess paired eversible copulatory organs (hemipenes in Squamata) or lack copulatory organ (Sphenodon).',
          leadBn: 'লেপিডোসোরিয়া: দাঁত চোয়ালের হাড়ের ওপর যুক্ত, গর্তে প্রোথিত নয়; ৩ প্রকোষ্ঠের হৃৎপিণ্ড; আড়াআড়ি ক্লোয়াকা ছিদ্র; পুরুষে হেমিপেনিস উপস্থিত বা অনুপস্থিত।',
          diagnosticFeature: 'Lepidosauria: Transverse cloaca, 3-chambered heart, Squamata & Rhynchocephalia',
          diagnosticFeatureBn: 'লেপিডোসোরিয়া: টুয়াটারা এবং স্কোয়ামাটা (গিরগিটি ও সাপ)',
          resultType: 'next_step',
          nextStepId: 7
        }
      ]
    },
    {
      id: 5,
      title: 'Order Crocodylia: Snout Architecture and Tooth Occlusion',
      titleBn: 'ক্রোকোডিলিয়া বর্গ: মুখের চোয়ালের গঠন ও দাঁতের বিন্যাস',
      character: 'Extremely narrow tubular fish-catching snout vs broad U-shaped snout vs triangular notched snout',
      characterBn: 'অত্যন্ত সরু চোঙাকৃতি মাছশিকারী থুতনি বনাম চওড়া ভোঁতা থুতনি বনাম বিশাল ত্রিভুজাকৃতি খাঁজযুক্ত থুতনি',
      couplets: [
        {
          lead: 'Snout extraordinarily elongated, narrow, and slender-tubular armed with over 100 interlocking needle-sharp teeth; adult males develop a hollow bulbous cartilaginous swelling (ghara) at tip of snout; endemic fish-eating specialist of deep South Asian river systems.',
          leadBn: 'থুতনি অত্যন্ত সরু ও দীর্ঘ নলের মতো যাতে ১০০টির বেশি সুচালো দাঁত থাকে; প্রাপ্তবয়স্ক পুরুষের নাকের ডগায় মাটির ঘড়ার মতো ফাঁপা স্ফীতি (ঘড়া) থাকে; মাছভোজী ঘড়িয়াল।',
          diagnosticFeature: 'Gavialis gangeticus: Extremely slender tubular snout, ghara on male tip, riverine piscivore',
          diagnosticFeatureBn: 'গ্যাভিয়ালিস গ্যাঞ্জেটিকাস: ঘড়িয়াল, সরু নলাকার চোয়াল, নাকের ডগায় ঘড়া',
          resultType: 'species',
          speciesId: 'sp-gavialis-gangeticus',
          rationaleEn: 'Resolves to Gharial (Gavialis gangeticus: Gavialidae)',
          rationaleBn: 'ঘড়িয়াল (গ্যাভিয়ালিস গ্যাঞ্জেটিকাস: গ্যাভিয়ালিডি পরিবার)'
        },
        {
          lead: 'Snout broad, flat, or triangular; not extremely slender and tubular; opportunistic apex predators.',
          leadBn: 'থুতনি চওড়া, চ্যাপ্টা বা ত্রিভুজাকার; সরু নলের মতো নয়; সর্বভুক শীর্ষ শিকারী।',
          diagnosticFeature: 'Alligatoridae & Crocodylidae',
          diagnosticFeatureBn: 'অ্যালিগেটর এবং প্রকৃত কুমির',
          resultType: 'next_step',
          nextStepId: 6
        }
      ]
    },
    {
      id: 6,
      title: 'Alligatoridae vs Crocodylidae',
      titleBn: 'অ্যালিগেটর বনাম প্রকৃত কুমির (সল্টওয়াটার ক্রোকোডাইল)',
      character: 'Broad rounded U-shaped snout with hidden 4th mandibular tooth vs triangular snout with exposed 4th tooth',
      characterBn: 'চওড়া ভোঁতা চোয়াল ও উপরের গর্তে লুকানো ৪র্থ দাঁত বনাম ত্রিভুজাকার চোয়াল ও বাইরে দৃশ্যমান ৪র্থ দাঁত',
      couplets: [
        {
          lead: 'Broad, rounded, U-shaped snout; when jaws are clamped shut, the large 4th tooth of the lower jaw fits completely into an internal socket inside the upper jaw and is entirely invisible from the outside; freshwater swamps and bayous.',
          leadBn: 'চওড়া ও গোলাকার U-আকৃতির থুতনি; মুখ বন্ধ করলে নিচের চোয়ালের ৪র্থ দাঁতটি উপরের চোয়ালের গর্তের ভেতর লুকানো থাকে এবং বাইরে থেকে দেখা যায় না।',
          diagnosticFeature: 'Alligator mississippiensis: Broad U-shaped snout, lower 4th tooth concealed in pit, freshwater',
          diagnosticFeatureBn: 'অ্যালিগেটর মিসিসিপিয়েনসিস: আমেরিকান অ্যালিগেটর, লুকানো ৪র্থ দাঁত',
          resultType: 'species',
          speciesId: 'sp-alligator-mississippiensis',
          rationaleEn: 'Resolves to American alligator (Alligator mississippiensis: Alligatoridae)',
          rationaleBn: 'আমেরিকান অ্যালিগেটর (অ্যালিগেটর মিসিসিপিয়েনসিস)'
        },
        {
          lead: 'Colossal apex predator reaching 6-7 meters; heavy triangular snout; when jaws are shut, the large 4th mandibular tooth fits into an external notch in the upper jaw and remains conspicuously visible; lingual salt glands on tongue excrete excess sodium; thrives in coastal mangrove estuaries and oceanic waters; the iconic Sundarbans crocodile.',
          leadBn: 'বিশাল দানবীয় শিকারী (৬-৭ মিটার); ত্রিভুজাকৃতি মুখ; মুখ বন্ধ থাকলেও নিচের চোয়ালের ৪র্থ দাঁতটি বাইরের খাঁজে স্পষ্ট দৃশ্যমান থাকে; জিহ্বায় লবণ গ্রন্থি থাকে; সুন্দরবনের লোনা পানির কুমির।',
          diagnosticFeature: 'Crocodylus porosus: Colossal size, 4th lower tooth exposed in notch, lingual salt glands, estuarine',
          diagnosticFeatureBn: 'ক্রোকোডাইলাস পোরোসাস: লোনা পানির কুমির, দৃশ্যমান ৪র্থ দাঁত, লবণ গ্রন্থি',
          resultType: 'species',
          speciesId: 'sp-crocodylus-porosus',
          rationaleEn: 'Resolves to Saltwater crocodile / Estuarine crocodile (Crocodylus porosus: Crocodylidae)',
          rationaleBn: 'লোনা পানির কুমির (ক্রোকোডাইলাস পোরোসাস: ক্রোকোডাইলিডি পরিবার)'
        }
      ]
    },
    {
      id: 7,
      title: 'Order Rhynchocephalia vs Order Squamata',
      titleBn: 'রাইঙ্কোসেফালিয়া (টুয়াটারা) বনাম স্কোয়ামাটা (আঁশযুক্ত সরীসৃপ)',
      character: 'Complete lower temporal bar with acrodont tooth crest and parietal eye vs kinetic skull with hemipenes',
      characterBn: 'সম্পূর্ণ করোটিকা ও তৃতীয় নেত্রযুক্ত প্রাচীন টুয়াটারা বনাম নমনীয় করোটিকা ও জোড়া হেমিপেনিসযুক্ত স্কোয়ামাটা',
      couplets: [
        {
          lead: 'Order Rhynchocephalia: Ancient lizard-like diapsid retaining complete upper and lower temporal arches in skull; upper jaw has a double row of teeth enclosing a single lower row like a shearing scissor; well-developed third parietal eye with cornea and lens in juveniles; males completely lack hemipenes/copulatory organ; endemic to New Zealand offshore islands.',
          leadBn: 'রাইঙ্কোসেফালিয়া বর্গ (টুয়াটারা): আদিম দুই খাঁজযুক্ত খুলি অক্ষুণ্ন; কাঁচির মতো উপরের দুই সারির দাঁতের মাঝে নিচের দাঁত আটকায়; কপালে সুস্পষ্ট তৃতীয় নেত্র (প্যারিয়েটাল আই) থাকে; পুরুষে হেমিপেনিস নেই; নিউজিল্যান্ডের জীবন্ত জীবাশ্ম।',
          diagnosticFeature: 'Sphenodon punctatus: Complete lower temporal bar, double tooth rows, third eye, no hemipenes',
          diagnosticFeatureBn: 'স্ফেনোডন পাঙ্কটাটাস: টুয়াটারা, কাঁচি দাঁত, তৃতীয় নেত্র, জীবন্ত জীবাশ্ম',
          resultType: 'species',
          speciesId: 'sp-sphenodon-punctatus',
          rationaleEn: 'Resolves to Tuatara (Sphenodon punctatus: Sphenodontidae)',
          rationaleBn: 'টুয়াটারা (স্ফেনোডন পাঙ্কটাটাস: স্ফেনোডন্টিডি পরিবার)'
        },
        {
          lead: 'Order Squamata: Skull streptostylic/kinetic (quadrate bone movable allowing wide gape); lower temporal arch lost; epidermis covered in horny keratinous epidermal scales or scutes shed periodically; males possess paired eversible tubular hemipenes in tail base; jacobson organ highly developed.',
          leadBn: 'স্কোয়ামাটা বর্গ (গিরগিটি ও সাপ): নমনীয় করোটিকা (মুখ বিশাল ফাঁক করতে পারে); চামড়ায় কেরাটিনময় আঁশ যা পর্যায়ক্রমে খোলস বদলায়; পুরুষের লেজের গোড়ায় একজোড়া বহিস্থ হেমিপেনিস থাকে; জ্যাকবসন অঙ্গ সুগঠিত।',
          diagnosticFeature: 'Order Squamata: Kinetic skull, movable quadrate, paired hemipenes, periodic ecdysis',
          diagnosticFeatureBn: 'স্কোয়ামাটা বর্গ: নমনীয় চোয়াল, হেমিপেনিস, খোলস বদলানো',
          resultType: 'next_step',
          nextStepId: 8
        }
      ]
    },
    {
      id: 8,
      title: 'Order Squamata: Sauria (Lizards) vs Serpentes (Snakes)',
      titleBn: 'স্কোয়ামাটা বর্গ: সরিয়া (গিরগিটি) বনাম সারপেন্টেস (সাপ)',
      character: 'Limbs present with movable eyelids and ear openings vs limbless with transparent brille scale and no ear opening',
      characterBn: 'পা, নড়াচড়া করা চোখের পাতা ও কানের ছিদ্রযুক্ত গিরগিটি বনাম পদহীন ও স্বচ্ছ পর্দাযুক্ত সাপ',
      couplets: [
        {
          lead: 'Suborder Sauria (Lacertilia): Limbs typically present and well-developed; external ear opening (tympanum) and movable eyelids usually present; lower jaw halves firmly sutured at chin symphysis; diurnal or arboreal monitors and chameleons.',
          leadBn: 'উপবর্গ সরিয়া (গিরগিটি): সাধারণত ৪টি সুগঠিত পা থাকে; কানের বহিস্থ ছিদ্র ও নাড়াচাড়া করা চোখের পাতা উপস্থিত; নিচের চোয়ালের দুই পাশ থুতনিতে শক্তভাবে জোড়া লাগানো।',
          diagnosticFeature: 'Suborder Sauria: Limbs present, movable eyelids, external ear opening',
          diagnosticFeatureBn: 'উপবর্গ সরিয়া (গিরগিটি): পদযুক্ত, চোখের পাতা, কানের ছিদ্র',
          resultType: 'next_step',
          nextStepId: 9
        },
        {
          lead: 'Suborder Serpentes (Ophidia): Limbs and pectoral girdle completely absent (or vestigial pelvic spurs in boas); eyelids fused into a transparent, immovable protective spectacle (brille); external ear openings, eardrum, and middle ear cavity completely absent; mandibles joined anteriorly by an elastic ligament allowing engulfing colossal prey.',
          leadBn: 'উপবর্গ সারপেন্টেস (সাপ): পদ ও কাঁধের অস্থি সম্পূর্ণ অনুপস্থিত; চোখের পাতা স্বচ্ছ স্থির চশমার মতো পর্দায় (ব্রিল) রূপান্তরিত; কানের ছিদ্র নেই; চোয়াল স্থিতিস্থাপক লিগামেন্ট দিয়ে যুক্ত যা বিশাল শিকার গিলতে পারে।',
          diagnosticFeature: 'Suborder Serpentes: Limbless, brille spectacles, no external ears, ligamentous chin symphysis',
          diagnosticFeatureBn: 'উপবর্গ সারপেন্টেস (সাপ): পদহীন, স্থির চোখের পর্দা, কানহীন, স্থিতিস্থাপক চোয়াল',
          resultType: 'next_step',
          nextStepId: 10
        }
      ]
    },
    {
      id: 9,
      title: 'Suborder Sauria: Chameleon vs Komodo Dragon',
      titleBn: 'সরিয়া উপবর্গ: গিরগিটি (ক্যামেলিয়ন) বনাম কোমোডো ড্রাগন',
      character: 'Zygodactylous grasping feet with casque and prehensile tail vs gigantic predatory monitor with forked tongue',
      characterBn: 'জাইগোড্যাকটাইল আঁকড়ে ধরা পা ও প্রাকhensাইল লেজ বনাম দানবীয় শিকারী গুঁইসাপ ও চেরা জিহ্বা',
      couplets: [
        {
          lead: 'Arboreal specialized lizard; digits fused into opposable grasping mitten bundles (zygodactylous); prehensile tail; turret eyes capable of independent 360° motion; high helmet-like casque on head; projectile ballistic tongue longer than body used to snatch insects.',
          leadBn: 'গাছবাসী বিশেষায়িত গিরগিটি; পায়ের আঙুল দুই পাশে জোড়া লেগে চিমটার মতো আঁকড়ে ধরার উপযোগী; পেঁচানো লেজ; দুটি চোখ স্বাধীনভাবে আলাদা দিকে ঘোরে; মাথার ওপর হেলমেটের মতো ঝুঁটি; দেহের চেয়েও লম্বা শিকারী জিহ্বা।',
          diagnosticFeature: 'Chamaeleo calyptratus: Zygodactylous grasping feet, high cranial casque, ballistic tongue, prehensile tail',
          diagnosticFeatureBn: 'ক্যামেলিও ক্যালিপ্ট্রেটাস: ভেইল্ড ক্যামেলিয়ন, জাইগোড্যাকটাইল পা, হেলমেট ঝুঁটি',
          resultType: 'species',
          speciesId: 'sp-chamaeleo-calyptratus',
          rationaleEn: 'Resolves to Veiled chameleon (Chamaeleo calyptratus: Chamaeleonidae)',
          rationaleBn: 'ভেইল্ড ক্যামেলিয়ন (ক্যামেলিও ক্যালিপ্ট্রেটাস: ক্যামেলিয়নিডি পরিবার)'
        },
        {
          lead: 'Colossal terrestrial monitor lizard growing up to 3 meters and 70-130 kg; heavily armored osteoderm scales inside skin; long deeply forked yellow sensory tongue; serrated shark-like teeth backed by mandibular venom glands delivering anticoagulant shock to large ungulate prey; apex predator of Indonesian islands.',
          leadBn: '৩ মিটার লম্বা ও ৭০-১৩০ কেজি ওজনের বিশ্বের বৃহত্তম গুঁইসাপ; চামড়ায় হাড়ের অস্টিওডার্ম বর্ম; দীর্ঘ চেরা হলুদ জিহ্বা; হাঙ্গরের মতো করাতের দাঁত ও রক্ত জমাট বাঁধতে বাধা দেওয়া বিষগ্রন্থি।',
          diagnosticFeature: 'Varanus komodoensis: Giant monitor up to 3 m, serrated teeth, forked yellow tongue, anticoagulant venom',
          diagnosticFeatureBn: 'ভ্যারানাস কোমোডোয়েনসিস: কোমোডো ড্রাগন, বিশ্বের বৃহত্তম গুঁইসাপ, বিষগ্রন্থি',
          resultType: 'species',
          speciesId: 'sp-varanus-komodoensis',
          rationaleEn: 'Resolves to Komodo dragon (Varanus komodoensis: Varanidae)',
          rationaleBn: 'কোমোডো ড্রাগন (ভ্যারানাস কোমোডোয়েনসিস: ভ্যারানিডি পরিবার)'
        }
      ]
    },
    {
      id: 10,
      title: 'Suborder Serpentes: Pelagic Sea Snake vs Terrestrial Constrictors / Venomous Vipers & Elapids',
      titleBn: 'সারপেন্টেস উপবর্গ: সামুদ্রিক সাপের লগি লেজ বনাম স্থলচর অজগর ও বিষধর সাপ',
      character: 'Laterally compressed paddle-like swimming tail with yellow belly vs cylindrical terrestrial tail',
      characterBn: 'পার্শ্বীয়ভাবে চ্যাপ্টা প্যাডেল লেজ ও হলুদ পেট বনাম নলাকার স্থলচর লেজ',
      couplets: [
        {
          lead: 'Completely marine pelagic sea snake; posterior third of body and tail strongly laterally compressed into a flat, oar-like swimming paddle; ventral belly scales greatly reduced or absent; striking bicolored pattern with jet-black dorsum and bright canary-yellow venter; highly toxic neurotoxic proteroglyph venom; never comes ashore.',
          leadBn: 'সম্পূর্ণ সামুদ্রিক পেলাজিক সাপ; সাঁতার কাটার জন্য পেছনের এক-তৃতীয়াংশ ও লেজটি বৈঠা বা লগির মতো চ্যাপ্টা; পেটের আঁশ অত্যন্ত ক্ষুদ্র; পিঠ ঘন কালো ও পেট উজ্জ্বল হলুদ; তীব্র স্নায়ুবিষযুক্ত।',
          diagnosticFeature: 'Hydrophis platurus: Laterally compressed paddle tail, black dorsum with yellow belly, pelagic marine',
          diagnosticFeatureBn: 'হাইড্রোফিস প্ল্যাটুরাস: হলুদপেটা সামুদ্রিক সাপ, চ্যাপ্টা বৈঠা লেজ, পেলাজিক',
          resultType: 'species',
          speciesId: 'sp-hydrophis-platurus',
          rationaleEn: 'Resolves to Yellow-bellied sea snake (Hydrophis platurus: Elapidae)',
          rationaleBn: 'হলুদপেটা সামুদ্রিক সাপ (হাইড্রোফিস প্ল্যাটুরাস: এলাপিডি পরিবার)'
        },
        {
          lead: 'Terrestrial or arboreal snakes; tail cylindrical and tapering, not modified into a flat paddle; broad ventral gastrosteges span the entire width of belly for terrestrial rectilinear crawling.',
          leadBn: 'স্থলচর বা বৃক্ষবাসী সাপ; লেজ গোল ও সরু, চ্যাপ্টা বৈঠা নয়; মাটির ওপর চলাচলের জন্য পেটে চওড়া ভেন্ট্রাল আঁশ বিদ্যমান।',
          diagnosticFeature: 'Terrestrial Serpentes: Boidae, Viperidae & Elapidae',
          diagnosticFeatureBn: 'স্থলচর সাপসমূহ: অজগর/বোয়া, ভাইপার এবং কোবরা/শঙ্খচূড়',
          resultType: 'next_step',
          nextStepId: 11
        }
      ]
    },
    {
      id: 11,
      title: 'Terrestrial Snakes: Non-Venomous Constrictor vs Venomous Solenoglyphs & Proteroglyphs',
      titleBn: 'স্থলচর সাপ: নির্বিষ বোয়া কনস্ট্রিকটর বনাম বিষধর ভাইপার ও কোবরা',
      character: 'Pelvic vestigial spurs without venom fangs vs specialized hollow venom injection fangs',
      characterBn: 'বিষদাঁতহীন পেছনের পায়ে নখরযুক্ত বোয়া বনাম বিষদাঁতযুক্ত বিষধর সাপ',
      couplets: [
        {
          lead: 'Non-venomous primitive constrictor; retains vestigial pelvic girdle and external cloacal claw-like spurs on each side of vent; jaws armed with rows of solid recurved teeth without venom fangs; heavy muscular body killing mammalian prey via constriction; distinctive geometric saddle pattern.',
          leadBn: 'নির্বিষ আদিম শিকারী সাপ; ক্লোয়াকার দুই পাশে আদিম পায়ের অবশিষ্টাংশ হিসেবে নখর থাকে; বিষদাঁতহীন পেছনের দিকে বাঁকানো সাধারণ দাঁত; শিকারকে পেঁচিয়ে শ্বাসরোধ করে মারে; পিঠে জিনসদৃশ দাগ।',
          diagnosticFeature: 'Boa constrictor: Cloacal spurs, non-venomous constrictor, aglyph teeth, saddle blotches',
          diagnosticFeatureBn: 'বোয়া কনস্ট্রিকটর: ক্লোয়াকাল স্পার নখর, বিষহীন পেঁচিয়ে শিকারী সাপ',
          resultType: 'species',
          speciesId: 'sp-boa-constrictor',
          rationaleEn: 'Resolves to Boa constrictor (Boa constrictor: Boidae)',
          rationaleBn: 'বোয়া কনস্ট্রিকটর (বোয়া কনস্ট্রিকটর: বয়িডি পরিবার)'
        },
        {
          lead: 'Highly venomous advanced snakes; maxillae bear specialized enlarged hollow hypodermic venom injection fangs connected to temporal venom glands; solenoglyphous hinged fangs or proteroglyphous fixed front fangs.',
          leadBn: 'উন্নত বিষধর সাপ; উপরের চোয়ালে বিষগ্রন্থির সাথে যুক্ত ফাঁপা হাইপোডার্মিক সূঁচের মতো বিষদাঁত থাকে; লম্বা ভাঁজ হওয়া দাঁত বা সামনের স্থির বিষদাঁত।',
          diagnosticFeature: 'Venomous Caenophidians: Viperidae (rattlesnakes) & Elapidae (cobras)',
          diagnosticFeatureBn: 'বিষধর সাপ: ভাইপারিডি (র‍্যাটলস্নেক) এবং এলাপিডি (গোখরা ও রাজগোখরা)',
          resultType: 'next_step',
          nextStepId: 12
        }
      ]
    },
    {
      id: 12,
      title: 'Venomous Snakes: Solenoglyphous Pit Viper vs Proteroglyphous Elapids (Cobras)',
      titleBn: 'বিষধর সাপ: র‍্যাটলস্নেক (সোলেনোগ্লিফা) বনাম গোখরা ও শঙ্খচূড় (প্রোটেরোগ্লিফা)',
      character: 'Long folding fangs with facial heat pits and caudal rattle vs short erect fixed fangs with neck hood',
      characterBn: 'মুখের ভাঁজ হওয়া বিষদাঁত, তাপ সংবেদী পিট ও লেজের ঝুনঝুনি বনাম সামনের স্থির বিষদাঁত ও ফণা',
      couplets: [
        {
          lead: 'Family Viperidae (Solenoglypha): Long, hollow, curved venom fangs housed on rotating maxillae that fold flat against the roof of mouth when closed; loreal sensory heat pit between eye and nostril detecting infrared radiation; tail terminates in a series of interlocking, hollow keratinous segments (rattle) producing a sharp warning buzzing sound.',
          leadBn: 'ভাইপারিডি পরিবার: অত্যন্ত দীর্ঘ বাঁকানো বিষদাঁত যা মুখ বন্ধ করলে তালুর সাথে ভাঁজ হয়ে থাকে; চোখ ও নাকের মাঝে তাপ সংবেদী পিট; লেজের মাথায় শুকনো খোলসের খাঁজযুক্ত ঝুনঝুনি (র‍্যাটল) যা তীব্র সতর্কবার্তা শব্দ করে।',
          diagnosticFeature: 'Crotalus atrox: Hinged solenoglyph fangs, loreal heat pits, keratin caudal rattle, hemotoxic venom',
          diagnosticFeatureBn: 'ক্রোট্যালাস অ্যাট্রোক্স: র‍্যাটলস্নেক, লম্বা ভাঁজ হওয়া বিষদাঁত, লেজের ঝুনঝুনি',
          resultType: 'species',
          speciesId: 'sp-crotalus-atrox',
          rationaleEn: 'Resolves to Western diamondback rattlesnake (Crotalus atrox: Viperidae)',
          rationaleBn: 'ওয়েস্টার্ন ডায়মন্ডব্যাক র‍্যাটলস্নেক (ক্রোট্যালাস অ্যাট্রোক্স: ভাইপারিডি পরিবার)'
        },
        {
          lead: 'Family Elapidae (Proteroglypha): Short, permanently erect, hollow venom fangs anchored immovably to anterior front of maxillae; cervical ribs elongated and spreadable laterally to form a wide, intimidating flattened neck hood when aroused; powerful neurotoxic venom.',
          leadBn: 'এলাপিডি পরিবার: চোয়ালের অগ্রভাগে শক্তভাবে আটকানো স্থির ও ছোট ফাঁপা বিষদাঁত; উত্তেজিত হলে ঘাড়ের পাঁজর দুপাশে ছড়িয়ে চওড়া ভীতিপ্রদর্শনকারী ফণা তোলে; তীব্র স্নায়ুবিষ।',
          diagnosticFeature: 'Family Elapidae: Fixed proteroglyph fangs, cervical neck hood, potent neurotoxins',
          diagnosticFeatureBn: 'এলাপিডি পরিবার: স্থির বিষদাঁত, ঘাড়ের ফণা, তীব্র স্নায়ুবিষ',
          resultType: 'next_step',
          nextStepId: 13
        }
      ]
    },
    {
      id: 13,
      title: 'Family Elapidae: Indian Spectacled Cobra vs King Cobra',
      titleBn: 'এলাপিডি পরিবার: ভারতীয় খয়া গোখরা বনাম রাজগোখরা (শঙ্খচূড়)',
      character: 'Broad hood with spectacle mark feeding on rodents vs colossal ophiophagous snake with occipital shields',
      characterBn: 'চশমার মতো দাগযুক্ত প্রশস্ত ফণা বনাম বিশ্বের দীর্ঘতম সাপ শিকারী রাজগোখরা ও অক্সিপিটাল আঁশ',
      couplets: [
        {
          lead: 'Medium to large elapid up to 1.5-2 meters; capable of spreading a broad, elliptical hood decorated dorsally with a bold white and black binocellate spectacle mark (or monocled U-mark in kaouthia); feeds opportunistically on rodents, frogs, and toads around agricultural homesteads; iconic cobra of South Asia.',
          leadBn: 'মাঝারি বিষধর সাপ (১.৫-২ মিটার); চওড়া ডিম্বাকৃতি ফণা যার পেছনে সাদা-কালো স্পষ্ট চশমার মতো বা খড়ম সদৃশ দাগ থাকে; বসতবাড়ির আশেপাশে ইঁদুর ও ব্যাঙ শিকার করে; ভারতীয় খয়া গোখরা।',
          diagnosticFeature: 'Naja naja: Spectacled dorsal hood marking, binocellate, common South Asian venomous cobra',
          diagnosticFeatureBn: 'নাজা নাজা: ভারতীয় খয়া গোখরা / স্পেক্টাকল্ড কোবরা, চশমা দাগযুক্ত ফণা',
          resultType: 'species',
          speciesId: 'sp-naja-naja',
          rationaleEn: 'Resolves to Indian cobra / Spectacled cobra (Naja naja: Elapidae)',
          rationaleBn: 'ভারতীয় খয়া গোখরা (নাজা নাজা: এলাপিডি পরিবার)'
        },
        {
          lead: 'World longest venomous snake, growing up to 4-5.5 meters; narrow elongated hood with chevron banding; head covered with a distinctive extra pair of large occipital scales behind parietals; obligate specialist predator feeding almost exclusively on other snakes (ophiophagy); constructs nests of decaying leaves to incubate eggs.',
          leadBn: 'বিশ্বের দীর্ঘতম বিষধর সাপ (৪-৫.৫ মিটার); সংকীর্ণ দীর্ঘ ফণা; মাথার পেছনে একজোড়া অতিরিক্ত বড় অক্সিপিটাল আঁশ থাকে; অন্য সাপ শিকার করে খায় (অফিওফ্যাগাস); পাতার স্তূপ দিয়ে বাসা তৈরি করে ডিম তা দেয়।',
          diagnosticFeature: 'Ophiophagus hannah: Colossal size up to 5.5 m, large occipital scales, chevron bands, ophiophagous',
          diagnosticFeatureBn: 'অফিওফ্যাগাস হানা: শঙ্খচূড় / রাজগোখরা, অক্সিপিটাল আঁশ, সাপ শিকারী',
          resultType: 'species',
          speciesId: 'sp-ophiophagus-hannah',
          rationaleEn: 'Resolves to King cobra (Ophiophagus hannah: Elapidae)',
          rationaleBn: 'রাজগোখরা / শঙ্খচূড় (অফিওফ্যাগাস হানা: এলাপিডি পরিবার)'
        }
      ]
    }
  ]
};
