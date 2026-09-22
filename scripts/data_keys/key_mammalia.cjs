// Key 11: Global Diagnostic Key to Major Mammalian Lineages, Orders & Species
// Comprehensive expansion resolving all 22 canonical Mammalia species in the repository.

module.exports = {
  id: 'key-global-mammalia-lineages',
  title: 'Representative Diagnostic Key to Major Mammalian Lineages & Orders',
  titleBn: 'স্তন্যপায়ী (ম্যামালিয়া) শ্রেণির প্রধান বংশধারা, বর্গ ও প্রজাতির শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-mammalia',
  majorGroup: 'mammalia',
  taxonScope: 'Class Mammalia (Monotremes, Marsupials, Placental Mammals)',
  taxonScopeBn: 'ম্যামালিয়া শ্রেণি (মনোট্রিম, মারসুপিয়াল এবং অমরাযুক্ত প্লাসেন্টাল স্তন্যপায়ী)',
  description: 'Authoritative dichotomous key distinguishing the three primary mammalian subclasses and resolving all 22 canonical species in the repository based on reproductive mode, dentition, integumentary derivatives, cranial modifications, and limb specializations.',
  descriptionBn: 'প্রজনন পদ্ধতি, দাঁতের গঠন, পশম/ত্বকীয় উপাদান, খুলির গঠন এবং পদের বিশেষায়নের ওপর ভিত্তি করে স্তন্যপায়ী শ্রেণির ৩টি প্রধান উপশ্রেণি ও ২২টি প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-mammal-diversity-2026', 'ref-kardong-2018', 'ref-hickman-2020'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Reproductive Mode: Monotremata vs Theria',
      titleBn: 'প্রজনন পদ্ধতি: মনোট্রিমাটা (ডিমপাড়া) বনাম থেরিয়া (বাচ্চাপ্রসবকারী)',
      character: 'Oviparous egg-laying with cloaca vs viviparous giving birth to live young',
      characterBn: 'ক্লোয়াকাসহ ডিম পাড়া বনাম জরায়ুযুক্ত প্রত্যক্ষ বাচ্চার জন্মদান',
      couplets: [
        {
          lead: 'Subclass Prototheria (Order Monotremata): Oviparous (egg-laying) mammals; single shared exit chamber (cloaca) for digestive, urinary, and reproductive tracts; mammary glands lack nipples/teats (milk secretes directly onto abdominal skin folds and is lapped by young); flexible leathery duck-like bill with electrosensory receptors; adult males bear a calcified hollow venom spur on medial ankle; endemic to eastern Australia and Tasmania.',
          leadBn: 'মনোট্রিমাটা বর্গ: ডিমপাড়া আদিম স্তন্যপায়ী; পরিপাক ও প্রজননের জন্য একক ক্লোয়াকা ছিদ্র; স্তনবৃন্ত নেই (পেটের চামড়া থেকে দুধ চুষে খায়); হাঁসের মতো চ্যাপ্টা বৈদ্যুতিক সংবেদী ঠোঁট; পুরুষের পেছনের পায়ে বিষাক্ত কাঁটা থাকে।',
          diagnosticFeature: 'Ornithorhynchus anatinus: Egg-laying monotreme, electroreceptive duck bill, ankle venom spur, cloaca',
          diagnosticFeatureBn: 'অর্নিথোরিঙ্কাস অ্যানাটিনাস: প্লাটিপাস, ডিমপাড়া স্তন্যপায়ী, হাঁস ঠোঁট, বিষকাঁটা',
          resultType: 'species',
          speciesId: 'sp-ornithorhynchus-anatinus',
          rationaleEn: 'Resolves to Platypus (Ornithorhynchus anatinus: Monotremata)',
          rationaleBn: 'প্লাটিপাস (অর্নিথোরিঙ্কাস অ্যানাটিনাস: মনোট্রিমাটা বর্গ)'
        },
        {
          lead: 'Subclass Theria: Viviparous mammals giving birth to live young; cloaca absent (separate anal and urogenital openings); functional nipples or teats present; mammary glands with ducts; specialized multi-rooted heterodont dentition.',
          leadBn: 'থেরিয়া উপশ্রেণি: প্রত্যক্ষ জরায়ুজ সন্তান প্রসবকারী স্তন্যপায়ী; ক্লোয়াকা অনুপস্থিত (পায়ু ও মূত্র-জনন ছিদ্র পৃথক); সুগঠিত স্তনবৃন্ত উপস্থিত; বিষমদাঁত।',
          diagnosticFeature: 'Subclass Theria: Viviparous, nipples present, separate urogenital/anal openings',
          diagnosticFeatureBn: 'থেরিয়া উপশ্রেণি: বাচ্চাপ্রসবকারী, স্তনবৃন্তযুক্ত',
          resultType: 'next_step',
          nextStepId: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Therian Development: Marsupialia vs Placentalia',
      titleBn: 'থেরিয়া বিকাশ: মারসুপিয়ালিয়া (থলিযুক্ত) বনাম প্লাসেন্টালিয়া (অমরাযুক্ত)',
      character: 'Altricial birth with pouch (marsupium) and epipubic bones vs prolonged chorioallantoic gestation',
      characterBn: 'অপূর্ণাঙ্গ শিশুর জন্ম ও মারসুপিয়াল থলি বনাম দীর্ঘ অমরাযুক্ত গর্ভধারণ',
      couplets: [
        {
          lead: 'Infraclass Metatheria (Marsupials): Short gestation period; young born in an extremely tiny, altricial larval-like state and crawl into maternal abdominal pouch (marsupium) to nurse on nipples; pelvic girdle possesses forward-projecting epipubic bones; angular process of dentary inflected medially; brain without corpus callosum.',
          leadBn: 'মারসুপিয়ালিয়া (মেটাথেরিয়া): স্বল্প গর্ভকালীন সময়; বাচ্চা অতি ক্ষুদ্র অবস্থায় জন্মে মায়ের পেটের থলিতে (মারসুপিয়াম) ঢুকে স্তনবৃন্ত কামড়ে বড় হয়; শ্রোণীচক্রে এপিটিউবিক অস্থি থাকে।',
          diagnosticFeature: 'Infraclass Metatheria: Marsupial pouch, epipubic bones, altricial neonates',
          diagnosticFeatureBn: 'মেটাথেরিয়া / মারসুপিয়াল: পেটের থলি, এপিটিউবিক অস্থি, অস্ট্রেলীয় স্তন্যপায়ী',
          resultType: 'next_step',
          nextStepId: 3
        },
        {
          lead: 'Infraclass Eutheria (Placental Mammals): Prolonged intrauterine gestation sustained by an efficient chorioallantoic placenta; young born at an advanced precocial or altricial stage; pelvic girdle lacks epipubic bones; brain cerebral hemispheres interconnected by a thick transverse band of nerve fibers (corpus callosum).',
          leadBn: 'প্লাসেন্টালিয়া (ইউথেরিয়া): জরায়ুর ভেতর উন্নত অমরা (প্লাসেন্টা) দ্বারা দীর্ঘ সময় ভ্রূণ পুষ্ট হয়ে বিকশিত বাচ্চার জন্ম; শ্রোণীচক্রে এপিটিউবিক অস্থি নেই; মস্তিষ্কে কর্পাস ক্যালোসাম থাকে।',
          diagnosticFeature: 'Infraclass Eutheria: Chorioallantoic placenta, prolonged gestation, corpus callosum, no epipubic bones',
          diagnosticFeatureBn: 'ইউথেরিয়া / প্লাসেন্টাল: উন্নত অমরা, জরায়ুতে পূর্ণ বিকাশ, কর্পাস ক্যালোসাম',
          resultType: 'next_step',
          nextStepId: 4
        }
      ]
    },
    {
      id: 3,
      title: 'Infraclass Metatheria: Saltatorial Kangaroo vs Arboreal Koala',
      titleBn: 'মারসুপিয়াল: লাফানো ক্যাঙ্গারু বনাম বৃক্ষবাসী কোয়ালা',
      character: 'Bipedal saltatorial hopping with large muscular tail vs arboreal grasping folivore with vestigial tail',
      characterBn: 'পেশিবহুল লেজযুক্ত দুই পায়ে লাফানো ক্যাঙ্গারু বনাম লেজহীন গাছে আঁকড়ে থাকা ইউক্যালিপটাসভোজী কোয়ালা',
      couplets: [
        {
          lead: 'Bipedal saltatorial terrestrial marsupial; extraordinarily enlarged, elongated fourth toe on hindfoot; forelimbs short; massive, thick, muscular tail used as a third leg (tripod) when resting and a dynamic counterweight when bounding at high speeds up to 50-60 km/h; largest living marsupial.',
          leadBn: 'দুই পায়ে লাফিয়ে চলা স্থলচর মারসুপিয়াল; পেছনের পায়ে দীর্ঘ ৪র্থ আঙুল; ভারী পেশিবহুল লেজ যা বিশ্রামের সময় তৃতীয় পা হিসেবে এবং লাফানোর সময় ভারসাম্য রক্ষা করে; বিশ্বের বৃহত্তম মারসুপিয়াল।',
          diagnosticFeature: 'Osphranter rufus: Bipedal saltatorial bounding, huge muscular counterbalance tail, macropodid',
          diagnosticFeatureBn: 'অসফ্র্যান্টার রুফাস: লাল ক্যাঙ্গারু, পেশল লেজ, লাফিয়ে চলা পা',
          resultType: 'species',
          speciesId: 'sp-osphranter-rufus',
          rationaleEn: 'Resolves to Red kangaroo (Osphranter rufus: Diprotodontia)',
          rationaleBn: 'রেড ক্যাঙ্গারু / লাল ক্যাঙ্গারু (অসফ্র্যান্টার রুফাস: ডাইপ্রোটোডনশিয়া বর্গ)'
        },
        {
          lead: 'Arboreal folivorous marsupial adapted for climbing smooth eucalyptus trunks; tail completely vestigial and external stump absent; forepaws with two opposable digits (schizodactyly: digits 1 and 2 oppose 3, 4, 5); thick ash-grey woolly fur, large leathery spoon-shaped black nose, and rounded fluffy ears; diet restricted to toxic fibrous eucalyptus leaves.',
          leadBn: 'গাছের ডাল আঁকড়ে থাকা লেজহীন মারসুপিয়াল; গাছে ওঠার জন্য সামনের থাবায় দুটি বিপরীতমুখী আঙুল থাকে; ঘন ধূসর পশম ও চামড়ার মতো কালো নাক; প্রধানত ইউক্যালিপটাস পাতা খায়।',
          diagnosticFeature: 'Phascolarctos cinereus: Arboreal, vestigial tail, schizodactylous grasping paws, eucalyptus folivore',
          diagnosticFeatureBn: 'ফ্যাসকোলার্কটস সিনারিয়াস: কোয়ালা, লেজহীন বৃক্ষবাসী, ইউক্যালিপটাসভোজী',
          resultType: 'species',
          speciesId: 'sp-phascolarctos-cinereus',
          rationaleEn: 'Resolves to Koala (Phascolarctos cinereus: Diprotodontia)',
          rationaleBn: 'কোয়ালা (ফ্যাসকোলার্কটস সিনারিয়াস: ডাইপ্রোটোডনশিয়া বর্গ)'
        }
      ]
    },
    {
      id: 4,
      title: 'Placental Mammals: Powered Flight vs Fully Aquatic vs Terrestrial Orders',
      titleBn: 'প্লাসেন্টাল স্তন্যপায়ী: আকাশে ওড়া বাদুড় বনাম সম্পূর্ণ জলজ তিমি/ডুগং বনাম স্থলচর',
      character: 'Forelimbs modified into membranous flight wings vs torpedo flippers with tail flukes vs terrestrial limbs',
      characterBn: 'উড়ার ডানায় রূপান্তরিত হাত বনাম লেজের ফ্লুকযুক্ত জলজ দেহ বনাম হাঁটার পা',
      couplets: [
        {
          lead: 'Order Chiroptera (Bats): True powered flight; forelimbs modified into broad aerodynamic wings formed of an extensive elastic double-layered skin membrane (patagium) stretched over enormously elongated metacarpals and phalanges of digits 2 through 5; nocturnal or crepuscular fruit/nectar feeders with large eyes and fox-like muzzles (Megachiroptera).',
          leadBn: 'কাইরোপ্টেরা বর্গ (বাদুড়): আকাশে উড়তে সক্ষম একমাত্র স্তন্যপায়ী; হাতের ২য় থেকে ৫ম আঙুলের মাঝে চামড়ার পাতলা ডানা (প্যাটাগিয়াম) প্রসারিত থাকে; শিয়ালসদৃশ মুখ ও বড় চোখবিশিষ্ট ফলভোজী বাদুড়।',
          diagnosticFeature: 'Order Chiroptera: True powered flight, wing patagium over elongated digits',
          diagnosticFeatureBn: 'কাইরোপ্টেরা বর্গ: আকাশে ওড়ার ডানাবিশিষ্ট বাদুড়, প্যাটাগিয়াম পর্দা',
          resultType: 'next_step',
          nextStepId: 5
        },
        {
          lead: 'Fully aquatic marine/freshwater mammals; fusiform streamlined torpedo body completely lacking external hindlimbs; forelimbs transformed into paddle flippers; tail terminates in a broad, horizontal fibrous swimming fluke; nostrils positioned dorsally as blowholes or valve-closed snout.',
          leadBn: 'সম্পূর্ণ জলজ স্তন্যপায়ী; পেছনের পা সম্পূর্ণ বিলুপ্ত; সামনের পা সাঁতারু ফ্লিপারে রূপান্তরিত; লেজের মাথায় আনুভূমিক তিমির পাখা (ফ্লুক); পিঠের ওপর শ্বাসছিদ্র।',
          diagnosticFeature: 'Fully Aquatic Mammals: Cetacea (Whales & Dolphins) & Sirenia (Dugong)',
          diagnosticFeatureBn: 'সম্পূর্ণ জলজ স্তন্যপায়ী: সিটাসিয়া (তিমি ও শুশুক) এবং সাইরেনিয়া (ডুগং)',
          resultType: 'next_step',
          nextStepId: 6
        },
        {
          lead: 'Terrestrial or semiaquatic mammals; four well-developed ambulatory walking or running limbs; hindlimbs functional; body covered in protective hair/fur coat.',
          leadBn: 'স্থলচর বা উভচর স্তন্যপায়ী; হাঁটা বা দৌড়ানোর জন্য ৪টি সুগঠিত পা; পেছনের পা কার্যকর; দেহে পশম বা লোম উপস্থিত।',
          diagnosticFeature: 'Terrestrial / Semiaquatic Placental Orders',
          diagnosticFeatureBn: 'অন্যান্য স্থলচর স্তন্যপায়ী বর্গসমূহ',
          resultType: 'next_step',
          nextStepId: 9
        }
      ]
    },
    {
      id: 5,
      title: 'Order Chiroptera: Indian Flying Fox vs Large Flying Fox',
      titleBn: 'কাইরোপ্টেরা বর্গ: ভারতীয় বাদুড় বনাম দৈত্যাকার উড়ন্ত শিয়াল',
      character: 'Wingspan and forearm dimensions with golden-yellow mantle collar vs colossal dark wingspan',
      characterBn: 'হলুদ-সোনালী কাঁধের কলার ও ডানা বনাম বিশ্বের বৃহত্তম বাদুড় ও দেড় মিটারের বেশি ডানা',
      couplets: [
        {
          lead: 'Large frugivorous megabat with wingspan up to 1.2-1.4 meters; forearm length 15-18 cm; prominent pale yellowish-cream or golden-brown mantle collar encircling shoulders and upper back contrasting with dark brown body; roosts communally in massive noisy tree camps across South Asia; iconic flying fox of Bangladesh.',
          leadBn: '১.২-১.৪ মিটার ডানাযুক্ত ফলভোজী বড় বাদুড়; কাঁধ ও পিঠের ওপর উজ্জ্বল সোনালী-হলুদ রঙের কলার থাকে; দিনের বেলা প্রাচীন গাছে কলোনি করে ঝুলে থাকে; দক্ষিণ এশিয়ার বাদুড়।',
          diagnosticFeature: 'Pteropus medius: Golden-yellow mantle collar, forearm 15-18 cm, communal tree roosters',
          diagnosticFeatureBn: 'টেরোপাস মিডিয়াস: ভারতীয় উড়ন্ত শিয়াল / বড় বাদুড়, সোনালী কলার',
          resultType: 'species',
          speciesId: 'sp-pteropus-medius',
          rationaleEn: 'Resolves to Indian flying fox (Pteropus medius: Pteropodidae)',
          rationaleBn: 'ভারতীয় বাদুড় / উড়ন্ত শিয়াল (টেরোপাস মিডিয়াস: টেরোপোডিডি পরিবার)'
        },
        {
          lead: 'World largest bat species by wingspan, reaching up to 1.5-1.7 meters (nearly 5 feet); forearm length exceeding 18-22 cm; mantle deeper reddish-tawny or chestnut; long fox-like muzzle without noseleaf; native to Southeast Asian rainforest canopies and mangroves.',
          leadBn: 'বিশ্বের বৃহত্তম ডানাবিশিষ্ট বাদুড় (ডানা ১.৫-১.৭ মিটার); সামনের হাতের দৈর্ঘ্য ১৮-২২ সেমি; লালচে-বাদামি কাঁধ; দক্ষিণ-পূর্ব এশিয়ার বনের ফলভোজী।',
          diagnosticFeature: 'Pteropus vampyrus: Giant wingspan up to 1.7 m, forearm >18 cm, Southeast Asian megabat',
          diagnosticFeatureBn: 'টেরোপাস ভ্যাম্পাইরাস: লার্জ ফ্লাইং ফক্স / বিশ্বের বৃহত্তম বাদুড়',
          resultType: 'species',
          speciesId: 'sp-pteropus-vampyrus',
          rationaleEn: 'Resolves to Large flying fox (Pteropus vampyrus: Pteropodidae)',
          rationaleBn: 'লার্জ ফ্লাইং ফক্স / দৈত্যাকার বাদুড় (টেরোপাস ভ্যাম্পাইরাস)'
        }
      ]
    },
    {
      id: 6,
      title: 'Fully Aquatic Mammals: Sirenia vs Cetacea',
      titleBn: 'সম্পূর্ণ জলজ স্তন্যপায়ী: সাইরেনিয়া (ডুগং) বনাম সিটাসিয়া (তিমি ও ডলফিন)',
      character: 'Herbivorous marine grazer with horseshoe muzzle and dense pachyostotic ribs vs carnivorous cetaceans',
      characterBn: 'ঘোড়ার খুরের মতো মুখ ও ঘন নিরেট হাড়যুক্ত তৃণভোজী ডুগং বনাম শিকারী তিমি ও ডলফিন',
      couplets: [
        {
          lead: 'Order Sirenia (Dugongidae): Strictly herbivorous marine mammal grazing on seagrass beds; heavy, robust body with extraordinarily dense, swollen, heavy ribs and skull bones lacking marrow cavities (pachyostosis/osteosclerosis) acting as neutral ballast; mouth directed ventrally with a large, fleshy, horseshoe-shaped cleft upper lip; fluke crescent-shaped; dorsal fin completely absent.',
          leadBn: 'সাইরেনিয়া বর্গ (ডুগং): সম্পূর্ণ তৃণভোজী সামুদ্রিক স্তন্যপায়ী যা সামুদ্রিক ঘাস খায়; শরীরের হাড়গুলো অত্যন্ত ভারী ও নিরেট (প্যাকিঅস্টোসিস) যা পানির নিচে ডুবতে সাহায্য করে; ঘোড়ার খুরের মতো চ্যাপ্টা মাংসল ঠোঁট; পিঠে পাখনা নেই।',
          diagnosticFeature: 'Dugong dugon: Herbivorous marine grazer, pachyostotic heavy ribs, horseshoe muzzle, no dorsal fin',
          diagnosticFeatureBn: 'ডুগং ডুগন: ডুগং / সামুদ্রিক গরু, নিরেট ভারী পাঁজর, ঘাসভোজী',
          resultType: 'species',
          speciesId: 'sp-dugong-dugon',
          rationaleEn: 'Resolves to Dugong (Dugong dugon: Dugongidae)',
          rationaleBn: 'ডুগং (ডুগং ডুগন: ডুগংগিডি পরিবার)'
        },
        {
          lead: 'Order Artiodactyla (Infraorder Cetacea): Carnivorous/filter-feeding aquatic mammals; teeth homodont or replaced by plates of keratinous baleen; dorsal blowhole on top of head; dorsal fin usually present; skeleton lightened and streamlined for active swimming.',
          leadBn: 'সিটাসিয়া অববর্গ (তিমি ও ডলফিন): শিকারী বা ফিল্টার-ফিডার জলজ স্তন্যপায়ী; দাঁত সমরূপ বা দাঁতের বদলে ঝুলন্ত কেরাটিন নির্মিত বেলিন প্লেট থাকে; মাথার ওপরে শ্বাসছিদ্র (ব্লোহোল)।',
          diagnosticFeature: 'Infraorder Cetacea: Mysticetes (baleen whales) & Odontocetes (toothed dolphins/whales)',
          diagnosticFeatureBn: 'সিটাসিয়া অববর্গ: বেলিন তিমি এবং দাঁতযুক্ত শুশুক/ডলফিন',
          resultType: 'next_step',
          nextStepId: 7
        }
      ]
    },
    {
      id: 7,
      title: 'Infraorder Cetacea: Mysticeti vs Odontoceti',
      titleBn: 'সিটাসিয়া অববর্গ: বেলিন তিমি (মিস্টিসেটি) বনাম দাঁতযুক্ত ডলফিন (ওডন্টোসেটি)',
      character: 'Gigantic filter-feeder with keratinous baleen plates vs toothed dolphins with single blowhole',
      characterBn: 'ঝুলন্ত ছাঁকন বেলিন প্লেটযুক্ত বিশালাকার তিমি বনাম সমরূপ দাঁতযুক্ত ডলফিন/শুশুক',
      couplets: [
        {
          lead: 'Parvorder Mysticeti (Baleen Whales): Jaws completely toothless in adults, replaced by hundreds of fringed, flexible plates of keratin (baleen) hanging from upper palate used to sieve krill; paired blowholes; colossal oceanic mammal reaching 25-30 meters and 150-190 tonnes; world largest animal ever to exist; pleated ventral throat grooves.',
          leadBn: 'মিস্টিসেটি (বেলিন তিমি): প্রাপ্তবয়স্কদের দাঁত থাকে না, উপরের চোয়াল থেকে শত শত চিরুনির মতো কেরাটিনের তৈরি বেলিন প্লেট ঝোলে যা দিয়ে ক্রিল ছাঁকে; জোড়া শ্বাসছিদ্র; বিশ্বের সর্বকালের বৃহত্তম প্রাণী (২৫-৩০ মিটার, ১৯০ টন পর্যন্ত)।',
          diagnosticFeature: 'Balaenoptera musculus: Giant size up to 30 m, baleen filter plates, paired blowholes, throat pleats',
          diagnosticFeatureBn: 'ব্যালিনোপ্টেরা মাসকিউলাস: নীল তিমি, বেলিন প্লেট, বিশ্বের বৃহত্তম প্রাণী',
          resultType: 'species',
          speciesId: 'sp-balaenoptera-musculus',
          rationaleEn: 'Resolves to Blue whale (Balaenoptera musculus: Balaenopteridae)',
          rationaleBn: 'নীল তিমি (ব্যালিনোপ্টেরা মাসকিউলাস: ব্যালিনোপ্টেরিডি পরিবার)'
        },
        {
          lead: 'Parvorder Odontoceti (Toothed Whales & Dolphins): Jaws armed with conical homodont teeth; single blowhole opening on vertex of head; forehead houses a fat-filled acoustic lens (melon) used for sophisticated echolocation navigation and prey hunting.',
          leadBn: 'ওডন্টোসেটি (দাঁতযুক্ত ডলফিন ও তিমি): চোয়ালে একজাতীয় শঙ্কু আকৃতির দাঁত থাকে; মাথার ওপর একক শ্বাসছিদ্র; কপালে শব্দতরঙ্গ প্রেরণের জন্য তেলভর্তি মেলন থাকে।',
          diagnosticFeature: 'Parvorder Odontoceti: Homodont conical teeth, single blowhole, echolocating melon',
          diagnosticFeatureBn: 'ওডন্টোসেটি: দাঁতযুক্ত ডলফিন, একক ব্লোহোল, ইকোলোকেশন মেলন',
          resultType: 'next_step',
          nextStepId: 8
        }
      ]
    },
    {
      id: 8,
      title: 'Toothed Cetaceans: River Dolphin vs Coastal Irrawaddy Dolphin',
      titleBn: 'দাঁতযুক্ত সিটাসিয়ান: গঙ্গার নদী শুশুক বনাম উপকূলীয় ইরাবতী ডলফিন',
      character: 'Extremely long slender forceps beak with visible needle teeth and blind eyes vs blunt rounded melon without beak',
      characterBn: 'লম্বা সরু সাঁড়াশির মতো চঞ্চু, উন্মুক্ত সুচালো দাঁত ও অন্ধ চোখ বনাম গোল ভোঁতা মাথা ও চঞ্চুহীন ডলফিন',
      couplets: [
        {
          lead: 'Obligate freshwater river cetacean; extraordinarily elongated, slender, forceps-like compressed beak lined with interlocking needle-sharp teeth visible even when mouth is closed; eyes vestigial and lensless (functionally blind, navigating exclusively via high-frequency echolocation); low triangular dorsal crest; iconic Shushuk of the Ganges-Brahmaputra rivers.',
          leadBn: 'মিঠাপানির নদী শুশুক; লম্বা চিমটার মতো সরু চঞ্চু যাতে সুচের মতো দাঁত মুখ বন্ধ থাকলেও বাইরে দেখা যায়; চোখ ক্ষুদ্র ও লেন্সহীন (কার্যত অন্ধ, শব্দতরঙ্গ দিয়ে পথ চলে); পিঠে ছোট ত্রিভুজাকার ক্রেস্ট; গঙ্গা-পদ্মা নদীর শুশুক।',
          diagnosticFeature: 'Platanista gangetica: Long forceps beak, visible needle teeth, lensless eyes, freshwater riverine',
          diagnosticFeatureBn: 'প্ল্যাটানিস্তা গ্যাঞ্জেটিকা: গঙ্গার শুশুক / নদী ডলফিন, লম্বা সরু ঠোঁট, দৃষ্টিহীন',
          resultType: 'species',
          speciesId: 'sp-platanista-gangetica',
          rationaleEn: 'Resolves to Ganges river dolphin (Platanista gangetica: Platanistidae)',
          rationaleBn: 'গঙ্গার শুশুক (প্ল্যাটানিস্তা গ্যাঞ্জেটিকা: প্ল্যাটানিস্টিডি পরিবার)'
        },
        {
          lead: 'Coastal and estuarine oceanic dolphin; head high, blunt, and rounded with a prominent bulging melon; beak completely absent; mouthline upturned in a characteristic "smile"; small triangular dorsal fin with rounded tip located behind mid-back; spits water jets to herd small fish; found in Sundarbans and coastal Bay of Bengal.',
          leadBn: 'উপকূলীয় ও মোহনার ডলফিন; মাথা ভোঁতা ও গোলাকার, কোনো বাড়তি চঞ্চু নেই; মুখের কোণ হাসিমুখের মতো ওপরের দিকে বাঁকানো; পিঠের পেছনের দিকে ছোট ভোঁতা পাখনা; মুখ দিয়ে পানির ফোয়ারা ছুড়ে মাছ শিকার করে; সুন্দরবনের পরিচিত ইরাবতী ডলফিন।',
          diagnosticFeature: 'Orcaella brevirostris: Blunt rounded head, beakless, upturned mouthline, small dorsal fin',
          diagnosticFeatureBn: 'অরকেলা ব্রেভিরোস্ট্রিস: ইরাবতী ডলফিন, ভোঁতা চঞ্চুহীন মাথা, সুন্দরবন',
          resultType: 'species',
          speciesId: 'sp-orcaella-brevirostris',
          rationaleEn: 'Resolves to Irrawaddy dolphin (Orcaella brevirostris: Delphinidae)',
          rationaleBn: 'ইরাবতী ডলফিন (অরকেলা ব্রেভিরোস্ট্রিস: ডেলফিনিডি পরিবার)'
        }
      ]
    },
    {
      id: 9,
      title: 'Terrestrial Orders: Ungulates vs Rodents vs Carnivores vs Primates',
      titleBn: 'স্থলচর স্তন্যপায়ী বর্গসমূহ: খুরযুক্ত বনাম তীক্ষ্ণদন্তী বনাম মাংসাশী বনাম প্রাইমেট',
      character: 'Hooves on digits vs chisel-like incisors vs specialized carnassial teeth vs opposable digits with flat nails',
      characterBn: 'খুরযুক্ত পা বনাম ছেনির মতো দাঁত বনাম মাংস ছেঁড়ার কার্নাসিয়াল দাঁত বনাম হাত-পায়ের নখ ও বৃদ্ধাঙ্গুল',
      couplets: [
        {
          lead: 'Unguligrade mammals: Terminal digit tips enclosed in thick, keratinous horny hooves adapted for cursorial running or supporting colossal terrestrial weight; large herbivorous browsers and grazers.',
          leadBn: 'খুরযুক্ত স্তন্যপায়ী: পায়ের আঙুলের মাথায় দৌড়ানোর বা বিশাল ওজন বহনের জন্য শক্ত কেরাটিন নির্মিত খুর থাকে; তৃণভোজী।',
          diagnosticFeature: 'Ungulates: Proboscidea (Elephants) & Perissodactyla (Odd-toed Ungulates)',
          diagnosticFeatureBn: 'খুরযুক্ত স্তন্যপায়ী: প্রোবোসিডিয়া (হাতি) এবং পেরিসোড্যাকটাইলা (ঘোড়া)',
          resultType: 'next_step',
          nextStepId: 10
        },
        {
          lead: 'Order Rodentia (Rodents): Specialized dentition characterized by a single pair of continuously growing, open-rooted, chisel-like upper and lower incisors with enamel only on the anterior surface; canine teeth completely absent leaving a wide toothless gap (diastema).',
          leadBn: 'রোডেনশিয়া বর্গ (তীক্ষ্ণদন্তী স্তন্যপায়ী): উপরের ও নিচের চোয়ালে একজোড়া করে আজীবন বাড়তে থাকা বাটালি বা ছেনির মতো ধারালো কর্তন দাঁত (ইনসিসর); ক্যানাইন দাঁত নেই ফলে ফাঁকা ডায়াস্টেমা থাকে।',
          diagnosticFeature: 'Order Rodentia: Single pair chisel incisors, wide diastema, gnawing habit',
          diagnosticFeatureBn: 'রোডেনশিয়া বর্গ: বাটালি সদৃশ ইনসিসর দাঁত, ডায়াস্টেমা, ইঁদুর জাতীয়',
          resultType: 'next_step',
          nextStepId: 11
        },
        {
          lead: 'Order Carnivora: Predatory or omnivorous mammals possessing enlarged, sharp, conical canine teeth; fourth upper premolar and first lower molar typically modified into specialized blade-like shearing teeth (carnassials) for slicing meat.',
          leadBn: 'কার্নিভোরা বর্গ (মাংসাশী স্তন্যপায়ী): শিকার ধরার জন্য ধারালো বড় ক্যানাইন দাঁত; মাংস কাটার জন্য কাঁচির মতো বিশেষায়িত কার্নাসিয়াল দাঁত।',
          diagnosticFeature: 'Order Carnivora: Prominent stabbing canines, shearing carnassials, claws',
          diagnosticFeatureBn: 'কার্নিভোরা বর্গ: শিকারী ক্যানাইন দাঁত, মাংস কাটার কার্নাসিয়াল দাঁত',
          resultType: 'next_step',
          nextStepId: 13
        },
        {
          lead: 'Order Primates: Arboreal or terrestrial mammals characterized by grasping hands and feet with an opposable thumb (pollex) or big toe (hallux); digits tipped with flattened protective nails instead of sharp curved claws; stereoscopic color vision with forward-directed orbits; enlarged, complex cerebral neocortex.',
          leadBn: 'প্রাইমেট বর্গ: কোনো কিছু শক্তভাবে আঁকড়ে ধরার উপযোগী হাত-পা যাতে বিপরীতমুখী বৃদ্ধাঙ্গুল থাকে; ধারালো নখরের বদলে চ্যাপ্টা নখ; ত্রিমাত্রিক দৃষ্টির জন্য সরাসরি সামনের দিকে চোখ; অতি উন্নত মস্তিষ্ক।',
          diagnosticFeature: 'Order Primates: Opposable pollex/hallux, flat nails, stereoscopic vision, complex neocortex',
          diagnosticFeatureBn: 'প্রাইমেট বর্গ: বিপরীতমুখী বৃদ্ধাঙ্গুল, চ্যাপ্টা নখ, উন্নত মস্তিষ্ক',
          resultType: 'next_step',
          nextStepId: 16
        }
      ]
    },
    {
      id: 10,
      title: 'Hoofed Mammals: Elephant vs Horse',
      titleBn: 'খুরযুক্ত স্তন্যপায়ী: হাতি বনাম ঘোড়া',
      character: 'Elongated prehensile muscular proboscis with ivory tusks vs single functional hoof on 3rd digit',
      characterBn: 'দীর্ঘ শুঁড় ও গজদন্তযুক্ত হাতি বনাম পায়ের তৃতীয় আঙুলে একক শক্ত খুরযুক্ত ঘোড়া',
      couplets: [
        {
          lead: 'Order Proboscidea: Colossal terrestrial giant up to 3-3.5 meters and 4-5 tonnes; nose and upper lip fused and elongated into a remarkably versatile, highly sensitive, muscular prehensile trunk (proboscis); upper second incisors modified into colossal, continuously growing ivory tusks; pillar-like graviportal legs with cushioning elastic pads; Asian elephant with dual hemispherical dorsal head bulges.',
          leadBn: 'প্রোবোসিডিয়া বর্গ (হাতি): বিশ্বের বৃহত্তম স্থলচর স্তন্যপায়ী; নাক ও উপরের ঠোঁট মিলে দীর্ঘ অত্যন্ত সংবেদনশীল মাংসল শুঁড়ে রূপান্তরিত; উপরের দ্বিতীয় দাঁত বিশালাকার বাঁকানো হাতির দাঁতে (টাস্ক) রূপান্তরিত; এশীয় হাতির কপালে দুটি গম্বুজাকৃতি ঢিবি থাকে।',
          diagnosticFeature: 'Elephas maximus: Prehensile proboscis trunk, ivory tusks, graviportal legs, Asian elephant',
          diagnosticFeatureBn: 'এলিফাস ম্যাক্সিমাস: এশীয় হাতি, দীর্ঘ সংবেদী শুঁড়, গজদন্ত',
          resultType: 'species',
          speciesId: 'sp-elephas-maximus',
          rationaleEn: 'Resolves to Asian elephant (Elephas maximus: Proboscidea)',
          rationaleBn: 'এশীয় হাতি (এলিফাস ম্যাক্সিমাস: প্রোবোসিডিয়া বর্গ)'
        },
        {
          lead: 'Order Perissodactyla: Odd-toed ungulate; weight of body borne symmetrically on a single enlarged, functional third digit (mesaxonic foot axis) encased inside a tough, thick, crescentic keratinous hoof; lateral digits 2 and 4 reduced to hidden vestigial splint bones; high-crowned hypsodont lophodont cheek teeth adapted for grinding silica-rich grasses; flowing mane on neck.',
          leadBn: 'পেরিসোড্যাকটাইলা বর্গ (ঘোড়া): বিজোড়-আঙুল খুরযুক্ত স্তন্যপায়ী; দেহের পুরো ওজন ৩য় আঙুলের ওপর ভর করে যা শক্ত খুরে আবৃত; ঘাস চর্বনের জন্য উঁচু মুকুটযুক্ত দাঁত; ঘাড়ে সুন্দর কেশর।',
          diagnosticFeature: 'Equus caballus: Mesaxonic single functional hoof on 3rd digit, hypsodont teeth, horse',
          diagnosticFeatureBn: 'ইকুয়াস ক্যাবালাস: গৃহপালিত ঘোড়া, একক খুরযুক্ত পা, ঘাড়ে কেশর',
          resultType: 'species',
          speciesId: 'sp-equus-caballus',
          rationaleEn: 'Resolves to Horse (Equus caballus: Perissodactyla)',
          rationaleBn: 'ঘোড়া (ইকুয়াস ক্যাবালাস: পেরিসোড্যাকটাইলা বর্গ)'
        }
      ]
    },
    {
      id: 11,
      title: 'Order Rodentia: Giant Semiaquatic Cavy vs Beaver vs Murid Mouse',
      titleBn: 'রোডেনশিয়া বর্গ: জায়ান্ট ক্যাপিবারা বনাম চ্যাপ্টা লেজের বিভার বনাম সাধারণ ইঁদুর',
      character: 'Gigantic barrel body without tail vs broad scaly paddling tail vs small commensal with long tail',
      characterBn: 'লেজহীন দৈত্যাকার ক্যাপিবারা বনাম চ্যাপ্টা আইশযুক্ত বৈঠা লেজের বিভার বনাম ছোট লম্বা লেজের গৃহ ইঁদুর',
      couplets: [
        {
          lead: 'World largest living rodent weighing up to 50-65 kg; heavy, barrel-shaped body completely lacking a visible external tail; blunt square snout with high dorsal eyes, ears, and nostrils adapted for semiaquatic swimming; partially webbed feet; South American grazing herbivore.',
          leadBn: 'বিশ্বের বৃহত্তম জীবিত তীক্ষ্ণদন্তী প্রাণী (৫০-৬৫ কেজি); চওড়া ড্রামের মতো ভারী শরীর যাতে লেজ নেই; পানিতে সাঁতারের সময় মুখ ভাসিয়ে রাখার জন্য চোখ ও কান মাথার উঁচুতে থাকে; আংশিক লিপ্তপদী পা।',
          diagnosticFeature: 'Hydrochoerus hydrochaeris: World largest rodent (60 kg), tailless, webbed toes, square snout',
          diagnosticFeatureBn: 'হাইড্রোচোরাস হাইড্রোচ্যারিস: ক্যাপিবারা, বিশ্বের বৃহত্তম তীক্ষ্ণদন্তী, লেজহীন',
          resultType: 'species',
          speciesId: 'sp-hydrochoerus-hydrochaeris',
          rationaleEn: 'Resolves to Capybara (Hydrochoerus hydrochaeris: Caviidae)',
          rationaleBn: 'ক্যাপিবারা (হাইড্রোচোরাস হাইড্রোচ্যারিস: ক্যাভিয়িডি পরিবার)'
        },
        {
          lead: 'Large to small rodents possessing a functional tail; building architectural river dams, or small commensal household rodents.',
          leadBn: 'কার্যকর লেজযুক্ত মাঝারি থেকে ক্ষুদ্র তীক্ষ্ণদন্তী প্রাণী; বাঁধ নির্মাণকারী বা পরিচিত ক্ষুদ্র ইঁদুর।',
          diagnosticFeature: 'Tailed Rodents: Castoridae & Muridae',
          diagnosticFeatureBn: 'লেজযুক্ত তীক্ষ্ণদন্তী: ক্যাস্টোরিডি এবং মুরিডি',
          resultType: 'next_step',
          nextStepId: 12
        }
      ]
    },
    {
      id: 12,
      title: 'Tailed Rodents: Eurasian Beaver vs House Mouse',
      titleBn: 'লেজযুক্ত তীক্ষ্ণদন্তী: ইউরেশীয় বিভার বনাম সাধারণ গৃহ ইঁদুর',
      character: 'Massive semiaquatic engineer with broad paddle tail vs small terrestrial commensal with scaly tail',
      characterBn: 'কাঠ কাটা কমলা দাঁত ও চ্যাপ্টা আঁশযুক্ত বৈঠা লেজ বনাম ক্ষুদ্র ঘরোয়া ইঁদুর ও সরু নগ্ন লেজ',
      couplets: [
        {
          lead: 'Large semiaquatic ecosystem engineer (20-30 kg); tail unique among mammals: horizontally flattened, broad, oval, paddle-like, and covered in black hexagonal scales used as a steering rudder and warning slap; heavy skull with iron-reinforced bright orange incisors capable of felling mature trees; builds complex river lodges and dams.',
          leadBn: 'বৃহৎ জলজ স্তন্যপায়ী (২০-৩০ কেজি); লেজটি অদ্ভুত: আনুভূমিকভাবে চ্যাপ্টা, ডিম্বাকৃতি এবং কালো আঁশে ঢাকা যা বৈঠার মতো সাঁতারে কাজ করে এবং সতর্ক শব্দ করে; লোহাযুক্ত কমলা রঙের ধারালো দাঁত যা দিয়ে বড় গাছ কাটে।',
          diagnosticFeature: 'Castor fiber: Horizontally flattened scaly paddle tail, orange incisors, tree feller, dam builder',
          diagnosticFeatureBn: 'ক্যাস্টর ফাইবার: ইউরেশিয়ান বিভার, চ্যাপ্টা বৈঠা লেজ, বাঁধ নির্মাণকারী',
          resultType: 'species',
          speciesId: 'sp-castor-fiber',
          rationaleEn: 'Resolves to Eurasian beaver (Castor fiber: Castoridae)',
          rationaleBn: 'ইউরেশীয় বিভার (ক্যাস্টর ফাইবার: ক্যাস্টোরিডি পরিবার)'
        },
        {
          lead: 'Small, slender, agile commensal rodent (15-25 grams); body length 7-10 cm; tail long, slender, cylindrical, nearly hairless and ringed with fine scaly annuli, roughly equal to head-and-body length; dull greyish-brown fur with buff underbelly; premier genetic and medical laboratory mammalian model organism.',
          leadBn: 'ক্ষুদ্র ও চপল পরিচিত ইঁদুর (১৫-২৫ গ্রাম); দেহের সমান লম্বা প্রায় লোমহীন সরু আঁশযুক্ত লেজ; ধূসর-বাদামি পশম; বিশ্বজুড়ে জিনতত্ত্ব ও চিকিৎসা গবেষণার শীর্ষ স্তন্যপায়ী মডেল প্রাণী।',
          diagnosticFeature: 'Mus musculus: Small size (20 g), long naked scaly tail, pointed snout, premier laboratory model',
          diagnosticFeatureBn: 'মাস মাসকুলাস: সাধারণ গৃহ ইঁদুর / ল্যাবরেটরি মাউস, লম্বা লেজ',
          resultType: 'species',
          speciesId: 'sp-mus-musculus',
          rationaleEn: 'Resolves to House mouse (Mus musculus: Muridae)',
          rationaleBn: 'গৃহ ইঁদুর / পাতি ইঁদুর (মাস মাসকুলাস: মুরিডি পরিবার)'
        }
      ]
    },
    {
      id: 13,
      title: 'Order Carnivora: Aquatic Seal vs Terrestrial Canids & Felids',
      titleBn: 'কার্নিভোরা বর্গ: জলজ সিল (পিন্নিপেডিয়া) বনাম স্থলচর কুকুর ও বিড়াল গোত্র',
      character: 'Limbs modified into webbed flippers without external ears vs terrestrial digitigrade walking limbs',
      characterBn: 'সাঁতারের ফ্লিপার পা ও বহিস্থ কানহীন সিল বনাম দৌড়ানোর নখযুক্ত পা ও খাড়া কান',
      couplets: [
        {
          lead: 'Suborder Pinnipedia (True Seals): Semiaquatic marine carnivoran; body fusiform and covered in short stiff hair over a thick layer of insulating blubber; external ear pinnae completely absent; forelimbs short flippers; hindlimbs directed permanently backwards as a propulsion tail fluke, unable to rotate forward for walking on land.',
          leadBn: 'পিন্নিপেডিয়া (প্রকৃত সিল): সামুদ্রিক মাংসাশী স্তন্যপায়ী; পুরু চর্বিস্তরের ওপর ছোট শক্ত লোমে ঢাকা টর্পেডো দেহ; কানের বাইরের লতি নেই; পেছনের পা দুটি মাছের পাখনার মতো পেছনের দিকে মুখ করা যা দিয়ে মাটিতে হাঁটা যায় না।',
          diagnosticFeature: 'Phoca vitulina: True earless seal, short flippers, hindlimbs cannot rotate forward, blubber',
          diagnosticFeatureBn: 'ফোকা ভিটুলিনা: হারবার সিল, কানহীন জলজ শিকারী, ফ্লিপার পা',
          resultType: 'species',
          speciesId: 'sp-phoca-vitulina',
          rationaleEn: 'Resolves to Harbor seal (Phoca vitulina: Phocidae)',
          rationaleBn: 'হারবার সিল (ফোকা ভিটুলিনা: ফোসিডি পরিবার)'
        },
        {
          lead: 'Suborder Fissipedia: Terrestrial digitigrade carnivorans with ambulatory walking legs and forward-pointing paws; external ear pinnae prominent and movable; keen sense of smell and hearing; Canidae (dogs/wolves) and Felidae (cats).',
          leadBn: 'স্থলচর শিকারী স্তন্যপায়ী; মাটিতে হাঁটা বা দৌড়ানোর জন্য অগ্রমুখী থাবা; নাড়াচাড়া করা স্পষ্ট বহিস্থ কান; ক্যানিডি (নেকড়ে/কুকুর) এবং ফেলিডি (বাঘ/সিংহ/বিড়াল)।',
          diagnosticFeature: 'Terrestrial Fissipeds: Canidae & Felidae',
          diagnosticFeatureBn: 'স্থলচর মাংসাশী: ক্যানিডি (কুকুর পরিবার) এবং ফেলিডি (মার্জার পরিবার)',
          resultType: 'next_step',
          nextStepId: 14
        }
      ]
    },
    {
      id: 14,
      title: 'Fissipeds: Non-Retractile Claws (Canidae) vs Fully Retractile Claws (Felidae)',
      titleBn: 'স্থলচর শিকারী: অনমনীয় স্থায়ী নখর (ক্যানিডি) বনাম খাঁজে গুটিয়ে নেওয়া ধারালো নখ (ফেলিডি)',
      character: 'Elongated muzzle with non-retractile blunt claws vs shortened blunt face with curved retractile claws',
      characterBn: 'লম্বা মুখ ও ভোঁতা অনড় নখযুক্ত নেকড়ে বনাম ভোঁতা মুখ ও খাপে গুটানো বাঁকানো ধারালো নখযুক্ত বিড়াল গোত্র',
      couplets: [
        {
          lead: 'Family Canidae (Wolves & Dogs): Elongated, slender facial muzzle with 42 teeth; long cursorial legs adapted for prolonged endurance pursuit of prey; claws blunt, sturdy, and completely non-retractile; prominent bushy tail; social pack hunters with highly developed vocal howling and olfactory scent marking.',
          leadBn: 'ক্যানিডি পরিবার (নেকড়ে ও কুকুর): লম্বা মুখ যাতে ৪২টি দাঁত থাকে; শিকার তাড়া করার জন্য লম্বা পা; নখ ভোঁতা ও খাপে গুটিয়ে নেওয়া যায় না; ঝোপের মতো লোমশ লেজ; দলবদ্ধ শিকারী।',
          diagnosticFeature: 'Canis lupus: Elongated muzzle, non-retractile claws, endurance cursorial runner, social pack hunter',
          diagnosticFeatureBn: 'ক্যানিস লুপাস: ধূসর নেকড়ে, অনমনীয় নখ, দলবদ্ধ শিকারী',
          resultType: 'species',
          speciesId: 'sp-canis-lupus',
          rationaleEn: 'Resolves to Gray wolf (Canis lupus: Canidae)',
          rationaleBn: 'ধূসর নেকড়ে (ক্যানিস লুপাস: ক্যানিডি পরিবার)'
        },
        {
          lead: 'Family Felidae (Cats): Shortened, blunt, rounded facial profile with reduced dentition (30 teeth) maximizing bite force at the canine tips; claws razor-sharp, strongly curved, and fully retractile into protective sheath pockets to prevent dulling; soft cushioned pads for silent stalking.',
          leadBn: 'ফেলিডি পরিবার (বিড়াল গোত্র): ছোট গোলগাল মুখ যাতে দাঁত ৩০টি কিন্তু ক্যানাইন দাঁতে কামড়ের শক্তি সর্বাধিক; শিকার ধরার ধারালো বাঁকানো নখ যা বিশেষ খাপে গুটিয়ে রাখা যায়; নিঃশব্দে চলাচলের নরম প্যাড।',
          diagnosticFeature: 'Family Felidae: Shortened skull, razor-sharp retractile claws, 30 teeth, specialized carnassials',
          diagnosticFeatureBn: 'ফেলিডি পরিবার: খাপে গুটানো ধারালো নখ, ৩০টি দাঁত, দক্ষ শিকারী',
          resultType: 'next_step',
          nextStepId: 15
        }
      ]
    },
    {
      id: 15,
      title: 'Family Felidae: Tiger vs Lion vs Domestic Cat',
      titleBn: 'ফেলিডি পরিবার: ডোরাকাটা বাঘ বনাম কেশরযুক্ত সিংহ বনাম গৃহপালিত বিড়াল',
      character: 'Colossal apex felids with roaring hyoid vs small purring domestic felid',
      characterBn: 'গর্জনকারী বিশাল বাঘ ও সিংহ বনাম ক্ষুদ্র গৃহপালিত শান্ত বিড়াল',
      couplets: [
        {
          lead: 'World largest felid reaching 200-300 kg; reddish-orange coat boldly marked with iconic vertical black stripes providing camouflage in dense forest/mangrove vegetation; apex ambush predator, powerful swimmer, and national animal of Bangladesh (Royal Bengal Tiger).',
          leadBn: 'বিশ্বের বৃহত্তম বিড়াল গোত্রের শিকারী (২০০-৩০০ কেজি); লালচে-কমলা লোমে কালো উল্লম্ব ডোরাকাটা দাগ যা বনে ছদ্মবেশ দেয়; দক্ষ সাঁতারু; সুন্দরবনের রয়েল বেঙ্গল টাইগার ও জাতীয় পশু।',
          diagnosticFeature: 'Panthera tigris: Vertical black stripes on reddish-orange coat, colossal apex predator, solitary',
          diagnosticFeatureBn: 'প্যানথেরা টাইগ্রিস: রয়েল বেঙ্গল টাইগার / বাঘ, ডোরাকাটা পশম, জাতীয় পশু',
          resultType: 'species',
          speciesId: 'sp-panthera-tigris',
          rationaleEn: 'Resolves to Tiger / Royal Bengal tiger (Panthera tigris: Felidae)',
          rationaleBn: 'বাঘ / রয়েল বেঙ্গল টাইগার (প্যানথেরা টাইগ্রিস: ফেলিডি পরিবার)'
        },
        {
          lead: 'Colossal apex felid (150-250 kg) of open savannahs; adult males possess a magnificent, dense dark mane encircling head, neck, and chest; tawny-gold uniform unstriped coat; dark black tuft of hair at tip of tail; only truly social felid living in family prides.',
          leadBn: 'খোলা প্রান্তরের বিশাল শিকারী (১৫০-২৫০ কেজি); প্রাপ্তবয়স্ক পুরুষের মাথা ও ঘাড়জুড়ে বিশাল ঘন কেশর থাকে; শরীরে কোনো ডোরা দাগ নেই; লেজের মাথায় কালো চুলের গুচ্ছ; দলবদ্ধ প্রাইড গঠন করে বাস করে।',
          diagnosticFeature: 'Panthera leo: Prominent male mane, unstriped tawny coat, tufted tail, social prides',
          diagnosticFeatureBn: 'প্যানথেরা লিও: সিংহ, কেশরযুক্ত পুরুষ, লেজের কালো গুচ্ছ',
          resultType: 'species',
          speciesId: 'sp-panthera-leo',
          rationaleEn: 'Resolves to Lion (Panthera leo: Felidae)',
          rationaleBn: 'সিংহ (প্যানথেরা লিও: ফেলিডি পরিবার)'
        },
        {
          lead: 'Small, agile domesticated felid (3-5 kg); ossified rigid hyoid bone allowing continuous vocal purring during both inhalation and exhalation (unable to roar); vertical slit pupils in bright light; companion predator of domestic rodents across the globe.',
          leadBn: 'ক্ষুদ্র চপল গৃহপালিত মার্জার (৩-৫ কেজি); গলায় শক্ত হাড় থাকার কারণে এরা একটানা পারিং (ঘুরঘুর) শব্দ করতে পারে কিন্তু বাঘের মতো গর্জন করতে পারে না; আলোতে চোখের তারারন্ধ্র খাড়া রেখায় সংকুচিত হয়।',
          diagnosticFeature: 'Felis catus: Small size, vertical slit pupils, ossified hyoid (purrs, cannot roar), domestic',
          diagnosticFeatureBn: 'ফেলিস ক্যাটাস: গৃহপালিত বিড়াল, খাড়া তারারন্ধ্র, পারিং ডাক',
          resultType: 'species',
          speciesId: 'sp-felis-catus',
          rationaleEn: 'Resolves to Domestic cat (Felis catus: Felidae)',
          rationaleBn: 'গৃহপালিত বিড়াল (ফেলিস ক্যাটাস: ফেলিডি পরিবার)'
        }
      ]
    },
    {
      id: 16,
      title: 'Order Primates (Family Hominidae): Great Apes & Humans',
      titleBn: 'প্রাইমেট বর্গ (হোমিনিডি পরিবার): বৃহৎ নরবানর ও আধুনিক মানুষ',
      character: 'Knuckle-walking quadrupedal great apes with heavy body hair vs obligate biped with sparse hair and symbolic speech',
      characterBn: 'চারপায়ে আঙুলের গিঁটে ভর দিয়ে চলা লোমশ নরবানর বনাম দুই পায়ে হাঁটা ও ভাষাভাষী আধুনিক মানুষ',
      couplets: [
        {
          lead: 'Subfamily Homininae (Genus Homo): Obligate habitual upright bipedalism; vertebral column with distinct S-shaped lumbar curvature; feet strictly non-opposable with non-divergent big toe aligned with other digits forming longitudinal arches for walking; cranial capacity extraordinarily enlarged (1300-1400 cc) with vertical forehead and pronounced chin; sparse body hair; complex symbolic language and technology.',
          leadBn: 'হোমো জেনাস (আধুনিক মানুষ): সম্পূর্ণ দুই পায়ে খাড়া হয়ে হাঁটা; এস-আকৃতির মেরুদণ্ড; পায়ের বৃদ্ধাঙ্গুল অন্য আঙুলের সাথে সমান্তরাল; বিশাল মস্তিষ্ক (১৩০০-১৪০০ সিসি), সোজা কপাল ও চিবুক; শরীরে লোম অত্যন্ত পাতলা; জটিল ভাষা ও সংস্কৃতি।',
          diagnosticFeature: 'Homo sapiens: Obligate upright bipedalism, S-curved spine, 1350 cc brain, chin, sparse body hair',
          diagnosticFeatureBn: 'হোমো সেপিয়েন্স: আধুনিক মানুষ, সোজা দুই পায়ে হাঁটা, উন্নত মস্তিষ্ক',
          resultType: 'species',
          speciesId: 'sp-homo-sapiens',
          rationaleEn: 'Resolves to Modern human (Homo sapiens: Hominidae)',
          rationaleBn: 'আধুনিক মানুষ (হোমো সেপিয়েন্স: হোমিনিডি পরিবার)'
        },
        {
          lead: 'Quadrupedal knuckle-walking African great apes; forelimbs longer than hindlimbs; dense black or dark coat; opposable big toe on foot for grasping branches; prominent supraorbital brow ridge; brain capacity 350-500 cc.',
          leadBn: 'হাতের আঙুলের গিঁটে ভর দিয়ে চারপায়ে চলা আফ্রিকান বৃহৎ নরবানর; পেছনের পায়ের চেয়ে সামনের হাত লম্বা; ঘন কালো পশম; ডালে বসার জন্য পায়ে বিপরীতমুখী বৃদ্ধাঙ্গুল।',
          diagnosticFeature: 'Knuckle-walking Great Apes: Pan & Gorilla',
          diagnosticFeatureBn: 'আফ্রিকান নরবানর: শিম্পাঞ্জি ও গরিলা',
          resultType: 'next_step',
          nextStepId: 17
        }
      ]
    },
    {
      id: 17,
      title: 'Great Apes: Chimpanzee vs Western Gorilla',
      titleBn: 'বৃহৎ নরবানর: শিম্পাঞ্জি বনাম ওয়েস্টার্ন গরিলা',
      character: 'Medium slender agile ape with pink/pale face and prominent ears vs colossal ape with black face and sagittal crest',
      characterBn: 'মাঝারি চপল শিম্পাঞ্জি ও স্পষ্ট কান বনাম বিশ্বের বৃহত্তম স্তন্যপায়ী নরবানর গরিলা ও মাথায় উঁচু ক্রেস্ট',
      couplets: [
        {
          lead: 'Medium-sized, highly agile, omnivorous ape (40-60 kg); prominent, large protruding external ears; face pale pink to mottled dark with age; tool-using social ape living in fission-fusion communities; genetically the closest living evolutionary sister taxon to humans.',
          leadBn: 'মাঝারি চপল সর্বভুক নরবানর (৪০-৬০ কেজি); মাথার দুই পাশে বড় স্পষ্ট কান; ফ্যাকাশে গোলাপি বা কালো দাগযুক্ত মুখ; কাঠি ও পাথর দিয়ে হাতিয়ার তৈরিতে পারদর্শী; মানুষের সবচেয়ে নিকটবর্তী জীবন্ত আত্মীয়।',
          diagnosticFeature: 'Pan troglodytes: Protruding ears, pale/mottled face, fission-fusion sociality, human sister taxon',
          diagnosticFeatureBn: 'প্যান ট্রোগ্লোডাইটিস: শিম্পাঞ্জি, বড় কান, মানুষের নিকটতম প্রজাতি',
          resultType: 'species',
          speciesId: 'sp-pan-troglodytes',
          rationaleEn: 'Resolves to Chimpanzee (Pan troglodytes: Hominidae)',
          rationaleBn: 'শিম্পাঞ্জি (প্যান ট্রোগ্লোডাইটিস: হোমিনিডি পরিবার)'
        },
        {
          lead: 'World largest living primate (140-200 kg in mature males); massive, colossal muscular chest with broad jet-black hairless face, small ears, and prominent sagittal crest on skull; mature adult dominant breeding males develop a distinctive broad silvery-white saddle across back and thighs (silverback); herbivorous foliage feeder.',
          leadBn: 'বিশ্বের বৃহত্তম জীবিত প্রাইমেট (১৪০-২০০ কেজি); বিশাল প্রশস্ত বুক ও লোমহীন কালো মুখ; ছোট কান; মাথার খুলির ওপর উঁচু হাড়ের ঝুঁটি; প্রাপ্তবয়স্ক নেতার পিঠের পশম রূপালী-সাদা বর্ণের হয় (সিলভারব্যাক); পাতাভোজী।',
          diagnosticFeature: 'Gorilla gorilla: Largest living primate, sagittal crest, jet-black face, mature male silverback saddle',
          diagnosticFeatureBn: 'গরিলা গরিলা: ওয়েস্টার্ন গরিলা, বিশ্বের বৃহত্তম প্রাইমেট, সিলভারব্যাক',
          resultType: 'species',
          speciesId: 'sp-gorilla-gorilla',
          rationaleEn: 'Resolves to Western gorilla (Gorilla gorilla: Hominidae)',
          rationaleBn: 'ওয়েস্টার্ন গরিলা (গরিলা গরিলা: হোমিনিডি পরিবার)'
        }
      ]
    }
  ]
};
