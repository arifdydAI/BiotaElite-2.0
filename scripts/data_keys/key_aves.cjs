// Key 10: Global Diagnostic Key to Orders & Canonical Species of Class Aves
// Comprehensive expansion resolving all 13 canonical Aves species.

module.exports = {
  id: 'key-global-aves-orders',
  title: 'Representative Diagnostic Key to Major Avian Orders (Aves)',
  titleBn: 'পাখি (এভিস) শ্রেণির প্রধান বর্গ ও প্রামাণ্য প্রজাতির শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-aves',
  majorGroup: 'aves',
  taxonScope: 'Class Aves (Ratites, Penguins, Raptors, Parrots, Kingfishers, Passerines)',
  taxonScopeBn: 'এভিস শ্রেণি (উটপাখি, পেঙ্গুইন, শিকারী পাখি, তোতা, মাছরাঙা, দোয়েল ও চড়ুই)',
  description: 'Authoritative dichotomous key distinguishing the primary avian orders and canonical species through palate architecture, sternal keel, wing modifications, foot digit arrangements (anisodactyl, zygodactyl, syndactyl, palmate), and bill adaptations.',
  descriptionBn: 'প্যালেট গঠন, স্টার্নাম কিল, ডানার রূপান্তর, পায়ের আঙুল বিন্যাস (অ্যানিসোড্যাকটাইল, জাইগোড্যাকটাইল ইত্যাদি) ও ঠোঁটের গঠনের ওপর ভিত্তি করে প্রধান পাখি বর্গ ও ১৩টি প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-ioc-birds-2026', 'ref-kardong-2018', 'ref-hickman-2020'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Palate and Flight Architecture: Palaeognathae vs Neognathae',
      titleBn: 'প্যালেট ও উড্ডয়ন কাঠামো: প্যালিওগ্নাথে (উড়তে অক্ষম) বনাম নিওগ্নাথে',
      character: 'Flat keelless sternum with palaeognathous palate vs keeled sternum with neognathous flexible palate',
      characterBn: 'কিলবিহীন সমতল স্টার্নাম ও আদিম তালু বনাম খাঁজযুক্ত স্টার্নাম ও নমনীয় আধুনিক তালু',
      couplets: [
        {
          lead: 'Superorder Palaeognathae: Flightless cursorial ratite; sternum completely flat and raft-like without an elevated keel (carina) for pectoral flight muscle attachment; wings reduced and non-functional for flight; long powerful muscular legs adapted for high-speed running, with only two toes per foot (unique among living birds); world largest living bird reaching 2.5 meters and 120-150 kg.',
          leadBn: 'প্যালিওগ্নাথে অধিবর্গ: উড়তে অক্ষম দৌড়বাজ পাখি; স্টার্নামে ওড়ার পেশি লাগানোর উঁচু কিল অনুপস্থিত; ডানা ছোট; দ্রুত দৌড়ানোর জন্য শক্তিশালী দীর্ঘ পায়ে মাত্র ২টি আঙুল থাকে; বিশ্বের বৃহত্তম পাখি (২.৫ মি, ১২০-১৫০ কেজি)।',
          diagnosticFeature: 'Struthio camelus: Flat keelless sternum, flightless ratite, 2-toed cursorial feet, largest bird',
          diagnosticFeatureBn: 'স্ট্রুথিও ক্যামেলাস: উটপাখি, কিলহীন স্টার্নাম, ২ আঙুলের পা, বিশ্বের বৃহত্তম পাখি',
          resultType: 'species',
          speciesId: 'sp-struthio-camelus',
          rationaleEn: 'Resolves to Common ostrich (Struthio camelus: Struthioniformes)',
          rationaleBn: 'উটপাখি (স্ট্রুথিও ক্যামেলাস: স্ট্রুথিওনিফরমিস বর্গ)'
        },
        {
          lead: 'Superorder Neognathae: Sternum typically bears a prominent, elevated, blade-like ventral keel (carina) for the origin of enlarged supracoracoideus and pectoralis flight muscles (or keel used for underwater wing propulsion in penguins); flexible neognathous palate with movable vomer and pterygoids; feet with 3 or 4 functional digits.',
          leadBn: 'নিওগ্নাথে অধিবর্গ: স্টার্নামে ওড়ার শক্তিশালী পেশি লাগানোর জন্য উঁচু নৌকার মতো কিল (ক্যারিনা) বিদ্যমান; নমনীয় আধুনিক তালু; পায়ে ৩ বা ৪টি কার্যকর আঙুল।',
          diagnosticFeature: 'Superorder Neognathae: Keeled sternum (carina), flexible modern palate, flight or wing-swimming',
          diagnosticFeatureBn: 'নিওগ্নাথে অধিবর্গ: ক্যারিনাযুক্ত স্টার্নাম, আধুনিক নমনীয় তালু',
          resultType: 'next_step',
          nextStepId: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Wing Modification: Underwater Flightless Flippers vs Aerial Flight',
      titleBn: 'ডানার রূপান্তর: পানির নিচে সাঁতারু ফ্লিপার বনাম আকাশে ওড়ার ডানা',
      character: 'Rigid paddle-like flipper wings with fused bones and scale-like feathers vs aerodynamic flight wings',
      characterBn: 'হাড় জোড়া লাগানো শক্ত সাঁতারু ফ্লিপার ডানা বনাম আকাশে ওড়ার পালকযুক্ত ডানা',
      couplets: [
        {
          lead: 'Order Sphenisciformes (Penguins): Marine wing-propelled diver completely flightless in air; forelimbs modified into rigid, flattened, bladelike paddle flippers with flattened non-folding bones; plumage consists of dense, waterproof, scale-like microfeathers lacking apteria; thick subcutaneous blubber layer; heavy solid bones without pneumatic cavities; Antarctic ice breeder.',
          leadBn: 'স্ফেনিসিফরমিস বর্গ (পেঙ্গুইন): আকাশে উড়তে পারে না; ডানা দুটি পানির নিচে বৈঠার মতো কাজ করা শক্ত ফ্লিপারে রূপান্তরিত; জলরোধী ঘন ছোট পালক; হাড়ে বাতাসের গহ্বর নেই, নিরেট ও ভারী; অ্যান্টার্কটিকার বরফে প্রজনন করে।',
          diagnosticFeature: 'Aptenodytes forsteri: Rigid flipper wings, scale-like plumage, solid bones, Emperor penguin',
          diagnosticFeatureBn: 'অ্যাপ্টিনোডাইটস ফরস্টেরি: এম্পেরর পেঙ্গুইন, সাঁতারু ফ্লিপার ডানা, জলরোধী পালক',
          resultType: 'species',
          speciesId: 'sp-aptenodytes-forsteri',
          rationaleEn: 'Resolves to Emperor penguin (Aptenodytes forsteri: Sphenisciformes)',
          rationaleBn: 'এম্পেরর পেঙ্গুইন (অ্যাপ্টিনোডাইটস ফরস্টেরি: স্ফেনিসিফর্মিজ বর্গ)'
        },
        {
          lead: 'Aerial birds; wings aerodynamically shaped with differentiated flight feathers (remiges: primaries and secondaries); bones extensively hollowed and pneumatic, connected to pulmonary air sacs.',
          leadBn: 'আকাশে ওড়া পাখি; ওড়ার সুবিন্যস্ত পালকযুক্ত (রেমিজেস) অ্যারোডাইনামিক ডানা; হাড় ফাঁপা ও বাতাসের থলিযুক্ত (নিউম্যাটিক)।',
          diagnosticFeature: 'Flying Neognaths: Hollow pneumatic skeleton, aerodynamic flight remiges, air sacs',
          diagnosticFeatureBn: 'উড্ডয়নক্ষম পাখি: ফাঁপা কঙ্কাল, ওড়ার ডানা, বায়ুথলি',
          resultType: 'next_step',
          nextStepId: 3
        }
      ]
    },
    {
      id: 3,
      title: 'Raptorial Predators: Hooked Beak and Talons vs Other Adaptations',
      titleBn: 'শিকারী পাখি: বাঁকানো চঞ্চু ও তীক্ষ্ণ নখযুক্ত থাবা বনাম অন্যান্য রূপান্তর',
      character: 'Sharply hooked tearing raptorial beak and curved needle-like talons vs non-raptorial beaks',
      characterBn: 'মাংস ছেঁড়ার ধারালো বাঁকানো চঞ্চু ও তীক্ষ্ণ নখর বনাম অন্যান্য চঞ্চু',
      couplets: [
        {
          lead: 'Raptorial carnivorous birds of prey; hooked tearing bill armed with sharp cutting edges; feet equipped with four powerful toes tipped with long, sharp, curved grasping talons adapted for seizing and killing live prey.',
          leadBn: 'শিকারী মাংসাশী পাখি; মাংস ছেঁড়ার জন্য নিচের দিকে বাঁকানো ধারালো চঞ্চু; শিকার আঁকড়ে ধরার জন্য পায়ে দীর্ঘ বাঁকানো সূঁচালো নখযুক্ত শক্তিশালী থাবা।',
          diagnosticFeature: 'Birds of Prey: Accipitriformes & Strigiformes',
          diagnosticFeatureBn: 'শিকারী পাখি: ঈগল, বাজ ও পেঁচা',
          resultType: 'next_step',
          nextStepId: 4
        },
        {
          lead: 'Non-raptorial bills and feet; bill adapted for seed crushing, nectar feeding, spearing fish, filter-feeding, or insect gleaning; feet adapted for perching, climbing, scratching, or wading.',
          leadBn: 'মাংস শিকারী চঞ্চু ও থাবা নেই; বীজ ভাঙা, মাছ শিকার, ফিল্টার-ফিডিং বা ফল খাওয়ার চঞ্চু; ডালে বসা, আঁকড়ে ওঠা বা হাঁটার পা।',
          diagnosticFeature: 'Non-raptorial Avian Orders',
          diagnosticFeatureBn: 'অন্যান্য পাখি বর্গসমূহ',
          resultType: 'next_step',
          nextStepId: 5
        }
      ]
    },
    {
      id: 4,
      title: 'Raptors: Diurnal Accipitrid Eagle vs Nocturnal Strigid Owl',
      titleBn: 'শিকারী পাখি: দিবাচর ঈগল বনাম নিশাচর পেঁচা',
      character: 'Forward eyes with feather disc and reversible toe vs lateral-frontal eyes with unfeathered hooked cere',
      characterBn: 'চোখের চারপাশের মুখের পালক চাকতি ও উল্টানো আঙুল বনাম পালকহীন মাংসল সিয়ার ও ঈগলের দৃষ্টি',
      couplets: [
        {
          lead: 'Order Accipitriformes: Diurnal apex raptor; eyes lateral-frontal with deep yellow irises and protective supraorbital brow ridge; bill with naked fleshy cere around nostrils; broad soaring wings; iconic North American fish eagle with dark brown body, gleaming pure white head and tail, and yellow hooked beak.',
          leadBn: 'অ্যাসিপিট্রিফরমিস বর্গ: দিবাচর শিকারী ঈগল; চোখের ওপর ভ্রূর মতো শক্ত শৈলশিরা; চঞ্চুর গোড়ায় মাংসল সিয়ার থাকে; বিশাল ওড়ার ডানা; গাঢ় বাদামি দেহ ও চকচকে সাদা মাথা ও লেজ।',
          diagnosticFeature: 'Haliaeetus leucocephalus: Pure white head/tail, dark brown body, yellow raptorial bill, bald eagle',
          diagnosticFeatureBn: 'হ্যালিয়ায়েটাস লিউকোসেফালাস: বাল্ড ঈগল, সাদা মাথা ও লেজ, হলুদ শিকারী চঞ্চু',
          resultType: 'species',
          speciesId: 'sp-haliaeetus-leucocephalus',
          rationaleEn: 'Resolves to Bald eagle (Haliaeetus leucocephalus: Accipitriformes)',
          rationaleBn: 'বাল্ড ঈগল (হ্যালিয়ায়েটাস লিউকোসেফালাস: অ্যাসিপিট্রিফরমিজ বর্গ)'
        },
        {
          lead: 'Order Strigiformes: Nocturnal apex raptor; eyes set completely flat facing forward inside a conspicuous concave circular facial disc of stiff acoustic feathers that channel faint sounds into asymmetric ears; outer toe completely reversible backwards (zygodactyl grasping); soft fringed primary remiges allowing completely silent flight; prominent erectile feather ear tufts.',
          leadBn: 'স্ট্রিজিফরমিস বর্গ: নিশাচর শিকারী পেঁচা; শব্দ শোনার জন্য মুখের চারপাশে গোল থালার মতো পালকের চাকতি; দুটি চোখ সরাসরি সামনের দিকে; নিঃশব্দে ওড়ার জন্য বিশেষায়িত পালক; মাথায় খাড়া শিং-সদৃশ পালক গুচ্ছ।',
          diagnosticFeature: 'Bubo bubo: Facial feather disc, erectile ear tufts, silent flight remiges, nocturnal owl',
          diagnosticFeatureBn: 'বুবো বুবো: ইউরেশিয়ান ঈগল আউল / হুতোম পেঁচা, মুখের চাকতি, কানের ঝুঁটি',
          resultType: 'species',
          speciesId: 'sp-bubo-bubo',
          rationaleEn: 'Resolves to Eurasian eagle-owl (Bubo bubo: Strigiformes)',
          rationaleBn: 'ইউরেশিয়ান ঈগল আউল (বুবো বুবো: স্ট্রিজিফরমিজ বর্গ)'
        }
      ]
    },
    {
      id: 5,
      title: 'Foot Anatomy: Climbing Zygodactyl vs Syndactyl vs Anisodactyl Perching',
      titleBn: 'পায়ের আঙুল গঠন: গাছে চড়ার জাইগোড্যাকটাইল বনাম সিনড্যাকটাইল বনাম সাধারণ অ্যানিসোড্যাকটাইল',
      character: 'Two toes forward and two back with hooked bill vs fused middle toes vs three toes forward and one back',
      characterBn: 'দুটি আঙুল সামনে ও দুটি পেছনে বনাম জোড়া লাগা আঙুল বনাম তিনটি সামনে ও একটি পেছনে বসা পা',
      couplets: [
        {
          lead: 'Order Psittaciformes (Parrots): Climbing foot strictly zygodactyl (digits 2 and 3 forward, digits 1 and 4 permanently directed backwards); heavy, short, deeply hooked bill with upper mandible hinged dynamically to frontal bone (prokinesis); muscular prehensile tongue; brilliant scarlet, yellow, and blue plumage with long graduated tail.',
          leadBn: 'সিটাসিফরমিস বর্গ (তোতা): গাছে ওঠার পা জাইগোড্যাকটাইল (২টি আঙুল সামনে ও ২টি পেছনে); শক্ত বাঁকানো চঞ্চু যার ওপরের চোয়াল খুলির সাথে নড়াচড়া করতে পারে; মাংসল জিহ্বা; উজ্জ্বল লাল, হলুদ ও নীল রঙের লম্বা লেজযুক্ত ম্যাকাও।',
          diagnosticFeature: 'Ara macao: Zygodactyl climbing feet, prokinetic hooked bill, scarlet/yellow/blue plumage',
          diagnosticFeatureBn: 'আরা ম্যাকাও: স্কার্লেট ম্যাকাও, জাইগোড্যাকটাইল পা, বাঁকানো তোতা চঞ্চু',
          resultType: 'species',
          speciesId: 'sp-ara-macao',
          rationaleEn: 'Resolves to Scarlet macaw (Ara macao: Psittaciformes)',
          rationaleBn: 'স্কার্লেট ম্যাকাও (আরা ম্যাকাও: সিটাসিফরমিজ বর্গ)'
        },
        {
          lead: 'Order Coraciiformes (Kingfishers): Syndactyl foot arrangement where the third and fourth (middle and outer) front toes are fused together along most of their length; large head with extraordinarily long, straight, heavy, sharp dagger-like bill adapted for plunge-diving after small aquatic fish; iridescent electric-cyan and rufous plumage.',
          leadBn: 'কোরাসিফরমিস বর্গ (মাছরাঙা): সিনড্যাকটাইল পা যাতে ৩য় ও ৪র্থ আঙুল গোড়া থেকে একসাথে জোড়া লাগানো থাকে; মাছ শিকারের জন্য ছোড়ার মতো দীর্ঘ সোজা ধারালো ভারী চঞ্চু; উজ্জ্বল নীল ও তামাটে পালক।',
          diagnosticFeature: 'Alcedo atthis: Syndactyl fused anterior toes, dagger-like spear bill, iridescent blue plunge-diver',
          diagnosticFeatureBn: 'আলসেডো আথিস: মাছরাঙা, সিনড্যাকটাইল জোড়া আঙুল, ধারালো চঞ্চু',
          resultType: 'species',
          speciesId: 'sp-alcedo-atthis',
          rationaleEn: 'Resolves to Common kingfisher (Alcedo atthis: Coraciiformes)',
          rationaleBn: 'সাধারণ মাছরাঙা (আলসেডো আথিস: কোরাসিফরমিজ বর্গ)'
        },
        {
          lead: 'Toes arranged differently: Anisodactyl (three digits forward, one opposable digit backwards), palmate swimming webbed toes, or specialized ground-scratching feet.',
          leadBn: 'আঙুল ভিন্নভাবে বিন্যস্ত: অ্যানিসোড্যাকটাইল (তিনটি সামনে, একটি পেছনে), লিপ্তপদী সাঁতারের পা বা মাটি আঁচড়ানোর শক্ত পা।',
          diagnosticFeature: 'Other Avian Orders: Columbiformes, Galliformes, Phoenicopteriformes, Passeriformes',
          diagnosticFeatureBn: 'অন্যান্য পাখি বর্গ: কবুতর, বনমোরগ/ময়ূর, ফ্লেমিঙ্গো ও দোয়েল/চড়ুই',
          resultType: 'next_step',
          nextStepId: 6
        }
      ]
    },
    {
      id: 6,
      title: 'Wading Filter-Feeders vs Heavy Scratching Fowl vs Perching Landbirds',
      titleBn: 'লম্বা পাযুক্ত ফ্লেমিঙ্গো বনাম মাটি আঁচড়ানো মুরগি/ময়ূর বনাম কবুতর ও গায়ক পাখি',
      character: 'Extreme stilt legs with decurved filter bill vs ground fowl with spurs vs columbids and passerines',
      characterBn: 'উঁচু বকের মতো পা ও ফিল্টার চঞ্চু বনাম পায়ে নখযুক্ত বনমোরগ বনাম কবুতর ও গায়ক পাখি',
      couplets: [
        {
          lead: 'Order Phoenicopteriformes: Extraordinarily elongated, stilt-like pink legs and slender serpentine neck; large downward-bent (decurved) specialized bill held upside-down in shallow saline lagoons; bill lined with fine microscopic comb-like filtering lamellae to extract brine shrimps and cyanobacteria; pale pinkish-white plumage with crimson wing coverts.',
          leadBn: 'ফনিকোপ্টেরিফরমিস বর্গ (ফ্লেমিঙ্গো): অত্যন্ত দীর্ঘ বকের মতো গোলাপি পা ও সাপের মতো লম্বা ঘাড়; মাথা নিচু করে পানি ছাঁকার জন্য নিচে বাঁকানো বিশেষায়িত চঞ্চু যাতে চিরুনির মতো ল্যামেলি থাকে; গোলাপি-সাদা পালক।',
          diagnosticFeature: 'Phoenicopterus roseus: Stilt-like legs, decurved lamellate filter bill, pink plumage',
          diagnosticFeatureBn: 'ফনিকোপ্টেরাস রোজিয়াস: গ্রেটার ফ্লেমিঙ্গো / রাজহাঁস, ছাঁকন চঞ্চু, লম্বা পা',
          resultType: 'species',
          speciesId: 'sp-phoenicopterus-roseus',
          rationaleEn: 'Resolves to Greater flamingo (Phoenicopterus roseus: Phoenicopteridae)',
          rationaleBn: 'গ্রেটার ফ্লেমিঙ্গো (ফনিকোপ্টেরাস রোজিয়াস: ফনিকোপ্টেরিডি পরিবার)'
        },
        {
          lead: 'Order Galliformes: Heavy-bodied, terrestrial ground-dwelling birds; short rounded wings capable only of explosive short-distance burst flights; robust scratching feet with blunt curved claws; males typically armed with sharp calcified defensive spurs on back of tarsometatarsus; prominent fleshy facial wattles and combs; intense sexual dimorphism.',
          leadBn: 'গ্যালিফরমিস বর্গ (বনমোরগ ও ময়ূর): ভারী গোলগাল মাটিবাসী পাখি; স্বল্প দূরত্বে দ্রুত ওড়ার ছোট ডানা; মাটি আঁচড়ে খাওয়ার শক্ত নখযুক্ত পা; পুরুষের পায়ে শক্ত কাঁটা (স্পার) থাকে; মাথায় মাংসল ঝুঁটি; পুরুষ অত্যন্ত রঙিন।',
          diagnosticFeature: 'Order Galliformes: Ground scratchers, tarsal spurs, fleshy combs/wattles, Phasianidae',
          diagnosticFeatureBn: 'গ্যালিফরমিস বর্গ: মাটি আঁচড়ানো বনমোরগ ও ময়ূর, পায়ের স্পার',
          resultType: 'next_step',
          nextStepId: 7
        },
        {
          lead: 'Order Columbiformes & Passeriformes: Bill unspecialized for filter-feeding or heavy tearing; columbids with soft fleshy cere over nostrils, or passerines with fine perching feet and musical syrinx songs.',
          leadBn: 'কলম্বিফরমিস (কবুতর) এবং প্যাসেরিফরমিস (গায়ক পাখি): চঞ্চুর গোড়ায় নরম মাংসল সিয়ারযুক্ত কবুতর, অথবা নিখুঁত ডালে বসার পা ও মিষ্টি গানের সুরযুক্ত গায়ক পাখি।',
          diagnosticFeature: 'Pigeons (Columbiformes) & Perching Songbirds (Passeriformes)',
          diagnosticFeatureBn: 'কবুতর এবং সাধারণ গায়ক ও বৃক্ষবাসী পাখি',
          resultType: 'next_step',
          nextStepId: 8
        }
      ]
    },
    {
      id: 7,
      title: 'Order Galliformes: Red Junglefowl vs Indian Peafowl',
      titleBn: 'গ্যালিফরমিস বর্গ: লাল বনমোরগ বনাম ভারতীয় ময়ূর',
      character: 'Fleshy red serrated crown comb and ancestor of chicken vs colossal iridescent train of ocelli feathers',
      characterBn: 'মাথায় লাল করাতের মতো ঝুঁটি ও গৃহপালিত মুরগির পূর্বপুরুষ বনাম চোখের মতো আঁকা বিশাল পেখম',
      couplets: [
        {
          lead: 'Male with prominent fleshy, erect, serrated bright red crown comb and dangling dual throat wattles; white ear patches; long arched sickle-shaped tail feathers; wild ancestor of all domesticated chickens; native to South and Southeast Asian bamboo forests.',
          leadBn: 'মাথায় খাড়া উজ্জ্বল লাল রঙের খাঁজকাটা মাংসল ঝুঁটি এবং গলায় ঝুলন্ত লাল লতিকা; কানে সাদা ছোপ; কাস্তের মতো বাঁকানো পুচ্ছ পালক; গৃহপালিত মুরগির বুনো পূর্বপুরুষ।',
          diagnosticFeature: 'Gallus gallus: Serrated red crown comb, dual throat wattles, ancestor of domestic chicken',
          diagnosticFeatureBn: 'গ্যালাস গ্যালাস: লাল বনমোরগ, মাংসল লাল ঝুঁটি, মুরগির পূর্বপুরুষ',
          resultType: 'species',
          speciesId: 'sp-gallus-gallus',
          rationaleEn: 'Resolves to Red junglefowl (Gallus gallus: Phasianidae)',
          rationaleBn: 'লাল বনমোরগ (গ্যালাস গ্যালাস: ফাসিয়ানিডি পরিবার)'
        },
        {
          lead: 'Colossal, breathtaking plumage; adult male bears a magnificent elongated train up to 1.5-2 meters formed of prolonged upper tail coverts, each adorned with a spectacular iridescent blue-green, bronze, and gold "eye-spot" (ocellus); head crowned by a fan-shaped crest of spatula-tipped feathers; cobalt-blue breast.',
          leadBn: 'বিশ্ববিখ্যাত রূপসী পাখি; পুরুষের পিঠের পেছনে ১.৫-২ মিটার দীর্ঘ পেখম থাকে যা ময়ূরের চোখের মতো উজ্জ্বল নীল-সবুজ ও সোনালী গোল বৃত্তে (অসেলি) সাজানো; মাথায় পাখার মতো ঝুঁটি।',
          diagnosticFeature: 'Pavo cristatus: Magnificent iridescent ocellated train up to 2 m, spatula crest, cobalt blue breast',
          diagnosticFeatureBn: 'পাভো ক্রিস্টাটাস: ভারতীয় ময়ূর, অসেলি আঁকা বিশাল পেখম, নীল বক্ষ',
          resultType: 'species',
          speciesId: 'sp-pavo-cristatus',
          rationaleEn: 'Resolves to Indian peafowl / Peacock (Pavo cristatus: Phasianidae)',
          rationaleBn: 'ভারতীয় ময়ূর (পাভো ক্রিস্টাটাস: ফাসিয়ানিডি পরিবার)'
        }
      ]
    },
    {
      id: 8,
      title: 'Columbiformes vs Passeriformes (Perching Songbirds)',
      titleBn: 'কলম্বিফরমিস (কবুতর) বনাম প্যাসেরিফরমিস (গায়ক পাখি)',
      character: 'Fleshy operculum cere over nostrils producing crop milk vs perching feet with 4 flexible unwebbed digits',
      characterBn: 'নাকের গোড়ায় ফোলা নরম সিয়ার ও ক্রপ মিল্ক উৎপাদনকারী কবুতর বনাম নিখুঁত ডালে বসার পা ও গান গাওয়া পাখি',
      couplets: [
        {
          lead: 'Order Columbiformes: Plump, stout-bodied bird with small rounded head; bill short and slender with a distinct soft, fleshy, swollen tumid base (cere / operculum) enclosing the slit-like nostrils; crops of both sexes produce rich nutritious "crop milk" to feed altricial squabs; grey plumage with iridescent green/purple neck sheen and two dark wing bars.',
          leadBn: 'কলম্বিফরমিস বর্গ (কবুতর): গোলগাল শরীর ও ছোট মাথা; চঞ্চুর গোড়ায় নাকের ওপর নরম ফোলা মাংসল সিয়ার থাকে; ছানাদের খাওয়ানোর জন্য খাদ্যনালীর থলি থেকে ক্রপ মিল্ক ক্ষরণ করে; গলায় চকচকে বেগুনি-সবুজ আভা ও ডানায় দুটি কালো দাগ।',
          diagnosticFeature: 'Columba livia: Swollen soft cere at bill base, produces crop milk, rock pigeon',
          diagnosticFeatureBn: 'কলম্বা লিভিয়া: নাকের গোড়ায় নরম সিয়ার, ক্রপ মিল্ক, জালালি কবুতর',
          resultType: 'species',
          speciesId: 'sp-columba-livia',
          rationaleEn: 'Resolves to Rock pigeon (Columba livia: Columbidae)',
          rationaleBn: 'জালালি কবুতর / সাধারণ পায়রা (কলম্বা লিভিয়া: কলম্বিডি পরিবার)'
        },
        {
          lead: 'Order Passeriformes (Perching Birds): Comprises over half of all living bird species; foot strictly anisodactyl with three unwebbed toes directed forward and a single long, flexible hallux digit directed backwards, all on the same plane, automatically clamping around branches; syrinx with complex intrinsic vocal muscles capable of elaborate song.',
          leadBn: 'প্যাসেরিফরমিস বর্গ (ডালে বসা গায়ক পাখি): পৃথিবীর অর্ধেকের বেশি পাখি এই বর্গের; পায়ের ৩টি আঙুল সামনে ও ১টি শক্তিশালী আঙুল পেছনের দিকে থাকে যা গাছের ডাল শক্তভাবে আঁকড়ে ধরতে পারে; মিষ্টি গানের জন্য উন্নত সিরিঙ্কস।',
          diagnosticFeature: 'Order Passeriformes: True anisodactyl perching foot, advanced vocal syrinx, songbirds',
          diagnosticFeatureBn: 'প্যাসেরিফরমিস বর্গ: ডালে বসার খাঁটি অ্যানিসোড্যাকটাইল পা, মিষ্টি সুরের সিরিঙ্কস',
          resultType: 'next_step',
          nextStepId: 9
        }
      ]
    },
    {
      id: 9,
      title: 'Order Passeriformes: Magpie-Robin vs House Sparrow vs House Crow',
      titleBn: 'প্যাসেরিফরমিস বর্গ: জাতীয় পাখি দোয়েল বনাম গৃহ চড়ুই বনাম পাতি কাক',
      character: 'Cocked tail with piebald black-white plumage vs conical seed bill vs heavy corvid bill with grey neck collar',
      characterBn: 'খাড়া লেজ ও সাদা-কালো দোয়েল বনাম শঙ্কু চঞ্চুর চড়ুই বনাম ধূসর ঘাড়ের চালাক পাতি কাক',
      couplets: [
        {
          lead: 'Medium songbird (19 cm) with bold, contrasting black and white plumage; long graduated tail held characteristically cocked upright; glossy blue-black upperparts in males (slate-grey in females) with conspicuous white wing bars and white outer tail feathers; national bird of Bangladesh (Doyel), renowned for rich melodious dawn whistling song.',
          leadBn: 'উজ্জ্বল সাদা ও কালো রঙের বৈসাদৃশ্যময় পালক; লম্বা লেজটি সর্বদা খাড়া বা উঁচু করে রাখে; ডানায় চওড়া সাদা পট্টি; মিষ্টি সুরেলা শিস দিয়ে গান গাওয়া বাংলাদেশের জাতীয় পাখি (দোয়েল)।',
          diagnosticFeature: 'Copsychus saularis: Piebald black and white, cocked upright tail, territorial song, Bangladesh national bird',
          diagnosticFeatureBn: 'কপসাইকাস সলারিস: সাদা-কালো দোয়েল, খাড়া লেজ, সুরেলা গায়ক, জাতীয় পাখি',
          resultType: 'species',
          speciesId: 'sp-copsychus-saularis',
          rationaleEn: 'Resolves to Oriental magpie-robin (Copsychus saularis: Muscicapidae)',
          rationaleBn: 'দোয়েল / ওরিয়েন্টাল ম্যাগপাই-রবিন (কপসাইকাস সলারিস: মাসিকাফিডি পরিবার)'
        },
        {
          lead: 'Small, robust anthropophilic finch-like bird (14-16 cm); bill stout, short, and conical specialized for crushing hard grains and weed seeds; male with bold grey crown, chestnut neck, and black throat bib; ubiquitous commensal bird nesting inside human dwellings and eaves across the globe.',
          leadBn: 'ছোট গোলগাল মিষ্টি পাখি (১৪-১৬ সেমি); শক্ত দানা শস্য ও বীজ ভাঙার জন্য ছোট স্থূল শঙ্কু আকৃতির চঞ্চু; পুরুষের বুকে কালো দাগ ও মাথায় ধূসর টুপি; মানুষের ঘরের খাঁজে বাসা বাঁধা পরিচিত চড়ুই পাখি।',
          diagnosticFeature: 'Passer domesticus: Conical seed-cracking bill, black throat bib on male, commensal house sparrow',
          diagnosticFeatureBn: 'প্যাসার ডোমেস্টিকাস: শঙ্কু আকৃতির বীজভাঙ্গা চঞ্চু, চড়ুই পাখি',
          resultType: 'species',
          speciesId: 'sp-passer-domesticus',
          rationaleEn: 'Resolves to House sparrow (Passer domesticus: Passeridae)',
          rationaleBn: 'পাতি চড়ুই (প্যাসার ডোমেস্টিকাস: প্যাসারিডি পরিবার)'
        },
        {
          lead: 'Large, highly intelligent, aggressive, opportunistic omnivorous corvid (40-42 cm); heavy, stout, slightly decurved black bill; plumage marked by a distinctive slender grey collar around nape and breast contrasting with glossy black forehead, wings, and tail; ubiquitous urban scavenger throughout South Asia.',
          leadBn: 'বড় ও অত্যন্ত বুদ্ধিমান সুযোগসন্ধানী সর্বভুক পাখি (৪০-৪২ সেমি); ভারী শক্ত কালো চঞ্চু; পিঠ ও ডানার কালো রঙের সাথে গলায় ও ঘাড়ে হালকা ধূসর রঙের কলার বা বন্ধনী থাকে; দক্ষিণ এশিয়ার সাধারণ পাতি কাক।',
          diagnosticFeature: 'Corvus splendens: Bicolored corvid with grey neck and breast collar, heavy bill, urban scavenger',
          diagnosticFeatureBn: 'করভাস স্প্লেনডেনস: ধূসর ঘাড়ের পাতি কাক, বুদ্ধিমান সর্বভুক পাখি',
          resultType: 'species',
          speciesId: 'sp-corvus-splendens',
          rationaleEn: 'Resolves to House crow (Corvus splendens: Corvidae)',
          rationaleBn: 'পাতি কাক (করভাস স্প্লেনডেনস: কর্ভিডি পরিবার)'
        }
      ]
    }
  ]
};
