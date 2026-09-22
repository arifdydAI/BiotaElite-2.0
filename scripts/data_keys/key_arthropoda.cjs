// Key 6 (Arthropoda): Global Diagnostic Key to Subphyla, Classes & Canonical Species of Arthropoda
// Comprehensive expansion resolving all 17 canonical Arthropoda species (including newly added Penaeus monodon).

module.exports = {
  id: 'key-global-arthropoda-lineages',
  title: 'Diagnostic Key to Subphyla & Major Classes of Arthropoda',
  titleBn: 'আর্থ্রোপোডা (সন্ধিপদী প্রাণী) পর্বের উপপর্ব ও প্রধান শ্রেণির শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-arthropoda',
  majorGroup: 'arthropoda',
  taxonScope: 'Phylum Arthropoda (Chelicerates, Myriapods, Crustaceans, Insects)',
  taxonScopeBn: 'আর্থ্রোপোডা পর্ব (চেলিসেরাটা, মিরিয়াপোডা, ক্রাস্টাশিয়া, ইনসেক্টা)',
  description: 'Authoritative dichotomous key distinguishing the four extant arthropod subphyla and their canonical representative species through tagmata segmentation, chelicerae vs antennae, appendage ramification, and respiratory organs.',
  descriptionBn: 'ট্যাগমাটা, চেলিসেরা, শুঙ্গ, সন্ধিল উপাঙ্গের গঠন ও শ্বসন অঙ্গের ওপর ভিত্তি করে জীবিত ৪টি উপপর্ব ও ১৭টি প্রামাণ্য সন্ধিপদী প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-hickman-2020', 'ref-ruppert-2004'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Antennae and Cephalic Appendages: Chelicerata vs Mandibulata',
      titleBn: 'শুঙ্গ ও মস্তকীয় উপাঙ্গ: চেলিসেরাটা বনাম ম্যান্ডিবুলাটা',
      character: 'Presence of pincer-like chelicerae without antennae vs antennae and chewing mandibles',
      characterBn: 'শুঙ্গহীন চেলিসেরা উপাঙ্গ বনাম শুঙ্গ ও চর্বনোপযোগী ম্যান্ডিবল',
      couplets: [
        {
          lead: 'Antennae completely absent; anterior cephalothorax (prosoma) bears six pairs of appendages: 1st pair pincer-like or fang-like chelicerae, 2nd pair sensory or raptorial pedipalps, and 4 pairs of walking legs; body divided into prosoma and opisthosoma (abdomen).',
          leadBn: 'শুঙ্গ সম্পূর্ণ অনুপস্থিত; অগ্রবর্তী প্রোসোমায় ৬ জোড়া উপাঙ্গ থাকে: ১ম জোড়া চেলিসেরা, ২য় জোড়া পেডিপ্যাল্প এবং ৪ জোড়া চলন পদ; প্রোসোমা ও অপিস্থোসোমায় বিভক্ত।',
          diagnosticFeature: 'Subphylum Chelicerata: No antennae, chelicerae, pedipalps, 4 pairs of walking legs',
          diagnosticFeatureBn: 'উপপর্ব চেলিসেরাটা: শুঙ্গহীন, চেলিসেরা, পেডিপ্যাল্প, ৪ জোড়া চলন পদ',
          resultType: 'next_step',
          nextStepId: 2
        },
        {
          lead: 'Antennae present (one or two pairs); head bears chewing jaws (mandibles) followed by one or two pairs of maxillae; walking legs vary in number (3 pairs, 5 pairs, or numerous).',
          leadBn: 'এক বা দুই জোড়া সংবেদী শুঙ্গ উপস্থিত; মস্তকে চর্বনকারী ম্যান্ডিবল চোয়াল ও ম্যাক্সিলা থাকে; চলন পদের সংখ্যা ৩ জোড়া, ৫ জোড়া বা ততোধিক।',
          diagnosticFeature: 'Mandibulata: Antennae present, chewing mandibles, maxillae',
          diagnosticFeatureBn: 'ম্যান্ডিবুলাটা: শুঙ্গযুক্ত, ম্যান্ডিবল চোয়াল, ম্যাক্সিলা',
          resultType: 'next_step',
          nextStepId: 4
        }
      ]
    },
    {
      id: 2,
      title: 'Subphylum Chelicerata: Merostomata vs Arachnida',
      titleBn: 'চেলিসেরাটা উপপর্ব: মেরোস্টোমাটা বনাম অ্যারাকনিডা',
      character: 'Marine with horseshoe carapace and book gills vs terrestrial with book lungs/tracheae',
      characterBn: 'ঘোড়ার খুরের মতো খোলস ও বুক গিলযুক্ত সামুদ্রিক বনাম বুক লাংযুক্ত স্থলচর মাকড়সা/বিচ্ছু',
      couplets: [
        {
          lead: 'Marine benthic organism with a massive unsegmented horseshoe-shaped dorsal carapace covering the prosoma; abdominal book gills operated in gill chambers; long, rigid, spike-like posterior spine (telson); blue copper-based hemocyanin blood with amebocytes.',
          leadBn: 'ঘোড়ার খুরের মতো নিরেট চ্যাপ্টা খোলক; পেটের নিচে একাধিক পাতার মতো বুক গিল; দীর্ঘ সূঁচালো শক্ত পুচ্ছদণ্ড (টেলসন); তামাভিত্তিক নীল রক্ত ও অ্যামিবোসাইট।',
          diagnosticFeature: 'Limulus polyphemus: Horseshoe carapace, 5 pairs book gills, rigid caudal spine, blue blood',
          diagnosticFeatureBn: 'লিমুলাস পলিপহেমাস: রাজকাঁকড়া, বুক গিল, পুচ্ছ কাঁটা, নীল রক্ত',
          resultType: 'species',
          speciesId: 'sp-limulus-polyphemus',
          rationaleEn: 'Resolves to Atlantic horseshoe crab (Limulus polyphemus: Merostomata)',
          rationaleBn: 'আটলান্টিক হর্সশু ক্র্যাব / রাজকাঁকড়া (লিমুলাস পলিপহেমাস)'
        },
        {
          lead: 'Terrestrial arachnids respiring via internal book lungs and/or branching tracheal tubes; body divided into prosoma and opisthosoma; pedipalps chelate (pincer-like) or sensory leg-like; walking legs 4 pairs.',
          leadBn: 'অভ্যন্তরীণ বুক লাং বা ট্রাকিয়ার সাহায্যে শ্বাস নেওয়া স্থলচর সন্ধিপদী; প্রোসোমা ও অপিস্থোসোমায় বিভক্ত; ৪ জোড়া পদ; পেডিপ্যাল্প চিমটার মতো বা সংবেদী।',
          diagnosticFeature: 'Class Arachnida: Terrestrial, book lungs/tracheae, scorpions and spiders',
          diagnosticFeatureBn: 'অ্যারাকনিডা শ্রেণি: স্থলচর, বুক লাং, বিচ্ছু ও মাকড়সা',
          resultType: 'next_step',
          nextStepId: 3
        }
      ]
    },
    {
      id: 3,
      title: 'Class Arachnida: Scorpions vs Spiders',
      titleBn: 'অ্যারাকনিডা শ্রেণি: বিচ্ছু বনাম মাকড়সা',
      character: 'Elongated metasoma ending in venomous stinger vs unsegmented globose abdomen with spinnerets',
      characterBn: 'হুলযুক্ত লম্বা লেজ ও চিমটা বনাম স্পিনারেটযুক্ত গোল পেট ও বিষদাঁত',
      couplets: [
        {
          lead: 'Large predatory arachnid up to 20 cm; pedipalps modified into massive, powerful grasping chelae (pincers); abdomen divided into broad mesosoma and slender 5-segmented postabdomen (metasoma or "tail") terminating in a sharp curved sting backed by paired venom glands; fluoresces bright blue-green under UV light.',
          leadBn: 'বিশাল শিকারী বিচ্ছু (২০ সেমি); পেডিপ্যাল্প দুটি শক্তিশালী চিমটায় রূপান্তরিত; সরু ৫ খণ্ডকের লেজের মাথায় বিষগ্রন্থিযুক্ত বাঁকানো হুল; অতিবেগুনি আলোয় জ্বলে।',
          diagnosticFeature: 'Pandinus imperator: Massive chelate pedipalps, 5-segmented metasoma with venom sting, UV fluorescence',
          diagnosticFeatureBn: 'প্যান্ডিনাস ইম্পেরেটর: এম্পেরর বৃশ্চিক, বিষাক্ত হুল, অতিবেগুনি প্রতিপ্রভা',
          resultType: 'species',
          speciesId: 'sp-pandinus-imperator',
          rationaleEn: 'Resolves to Emperor scorpion (Pandinus imperator: Scorpiones)',
          rationaleBn: 'এম্পেরর বৃশ্চিক / রাজ বিচ্ছু (প্যান্ডিনাস ইম্পেরেটর)'
        },
        {
          lead: 'Cephalothorax and unsegmented globose abdomen joined by a narrow pedicel waist; chelicerae modified into subchelate fangs delivering neurotoxic venom (latrotoxin); posterior abdomen bears 3 pairs of silk spinnerets; glossy jet-black body marked ventrally with an iconic bright red hourglass.',
          leadBn: 'সরু কোমর দ্বারা যুক্ত মাথা ও গোল পেট; বিষদাঁত হিসেবে রূপান্তর হওয়া চেলিসেরা; পেছনের স্পিনারেট দিয়ে জাল বোনে; চকচকে কালো পিঠ ও পেটে লাল বালুঘড়ির চিহ্ন।',
          diagnosticFeature: 'Latrodectus mactans: Narrow pedicel waist, silk spinnerets, red hourglass mark, latrotoxin',
          diagnosticFeatureBn: 'ল্যাট্রোডেক্টাস ম্যাকটানস: লাল বালুঘড়ি চিহ্ন, স্পিনারেট, ব্ল্যাক উইডো',
          resultType: 'species',
          speciesId: 'sp-latrodectus-mactans',
          rationaleEn: 'Resolves to Southern black widow (Latrodectus mactans: Araneae)',
          rationaleBn: 'ব্ল্যাক উইডো মাকড়সা (ল্যাট্রোডেক্টাস ম্যাকটানস)'
        }
      ]
    },
    {
      id: 4,
      title: 'Mandibulata: Myriapoda vs Pancrustacea (Crustaceans & Hexapods)',
      titleBn: 'ম্যান্ডিবুলাটা: বহুচরণের মিরিয়াপোডা বনাম ক্রাস্টাশিয়া ও পতঙ্গ',
      character: 'Elongated trunk with numerous leg pairs vs body specialized into distinct tagmata (carapace or 3-segmented body)',
      characterBn: 'অসংখ্য পা বিশিষ্ট লম্বা দেহ বনাম সুনির্দিষ্ট ট্যাগমাটায় বিভক্ত দেহ',
      couplets: [
        {
          lead: 'Subphylum Myriapoda: Body divided into a head with a single pair of antennae and an elongated, multisegmented trunk with numerous paired walking legs; gas exchange via extensive tracheal system with non-closing spiracles; strictly terrestrial.',
          leadBn: 'মিরিয়াপোডা উপপর্ব: এক জোড়া শুঙ্গযুক্ত মস্তক এবং বহু খণ্ডকবিশিষ্ট লম্বা দেহ যাতে অসংখ্য জোড়া পা থাকে; ট্রাকিয়া নালীর সাহায্যে শ্বাস নেয়; সম্পূর্ণ স্থলচর।',
          diagnosticFeature: 'Subphylum Myriapoda: Head + multisegmented homonomous trunk, numerous walking legs',
          diagnosticFeatureBn: 'মিরিয়াপোডা উপপর্ব: মস্তক ও বহু খণ্ডকবিশিষ্ট দেহ, অসংখ্য পা',
          resultType: 'species',
          speciesId: 'sp-scolopendra-gigantea',
          rationaleEn: 'Resolves to Peruvian giant centipede (Scolopendra gigantea: Chilopoda - 1 pair legs per segment, forcipules)',
          rationaleBn: 'দৈত্যাকার সেন্টিপিড / ক্যানকোলা (স্কোলোপেন্ড্রা জাইগ্যান্টিয়া: প্রতি খণ্ডকে ১ জোড়া পা)'
        },
        {
          lead: 'Pancrustacea: Body differentiated into distinct specialized tagmata; head and thorax covered by a cephalic shield or carapace (Crustacea) or body divided into discrete Head, 3-segmented Thorax with 3 leg pairs, and Abdomen (Hexapoda).',
          leadBn: 'দেহ সুনির্দিষ্ট অঞ্চলে বিভক্ত; মস্তক ও বক্ষ ক্যারাপেস দ্বারা আবৃত ক্রাস্টাশিয়া, অথবা মস্তক, ৩ খণ্ডকের বক্ষ (৩ জোড়া পা) ও উদরে বিভক্ত হেক্সাপোডা পতঙ্গ।',
          diagnosticFeature: 'Crustaceans (2 pairs antennae, biramous) & Hexapods (1 pair antennae, uniramous 6 legs)',
          diagnosticFeatureBn: 'ক্রাস্টাশিয়া (২ জোড়া শুঙ্গ) এবং ইনসেক্টা/হেক্সাপোডা (১ জোড়া শুঙ্গ, ৬ পা)',
          resultType: 'next_step',
          nextStepId: 5
        }
      ]
    },
    {
      id: 5,
      title: 'Crustacea vs Hexapoda (Insecta)',
      titleBn: 'ক্রাস্টাশিয়া (চিংড়ি/কাঁকড়া) বনাম হেক্সাপোডা (পতঙ্গ বা ইনসেক্টা)',
      character: 'Two pairs of antennae and primarily aquatic respiration vs one pair of antennae and 3 pairs of thoracic legs',
      characterBn: 'দুই জোড়া শুঙ্গ ও ফুলকাযুক্ত জলজ দেহ বনাম এক জোড়া শুঙ্গ, ৩ জোড়া বক্ষীয় পা ও ডানা',
      couplets: [
        {
          lead: 'Subphylum Crustacea: Head bears two pairs of antennae (antennules and antennae); appendages ancestrally biramous (two-branched); respiration primarily via gills or body surface; primarily aquatic (marine, brackish, freshwater).',
          leadBn: 'ক্রাস্টাশিয়া উপপর্ব: মাথায় দুই জোড়া শুঙ্গ থাকে; উপাঙ্গসমূহ সাধারণত দ্বিশাখ; ফুলকার সাহায্যে শ্বাস নেয়; প্রধানত জলজ।',
          diagnosticFeature: 'Subphylum Crustacea: 2 pairs of antennae, biramous appendages, aquatic with gills',
          diagnosticFeatureBn: 'ক্রাস্টাশিয়া উপপর্ব: ২ জোড়া শুঙ্গ, দ্বিশাখ উপাঙ্গ, ফুলকাযুক্ত',
          resultType: 'next_step',
          nextStepId: 6
        },
        {
          lead: 'Subphylum Hexapoda (Class Insecta): Head bears exactly one pair of antennae and one pair of compound eyes; thorax composed of three segments (prothorax, mesothorax, metathorax) bearing exactly three pairs of uniramous walking legs (6 legs total); typically bearing two pairs of wings on meso/metathorax; tracheal respiration through lateral spiracles.',
          leadBn: 'হেক্সাপোডা উপপর্ব (পতঙ্গ): এক জোড়া শুঙ্গ ও এক জোড়া পুঞ্জাক্ষি; তিন খণ্ডকের বক্ষে ঠিক ৩ জোড়া পা (মোট ৬টি পা); সাধারণত দুই জোড়া ডানা; ট্রাকিয়াল তন্ত্র দিয়ে শ্বাস নেয়।',
          diagnosticFeature: 'Class Insecta: 3 body tagmata, 1 pair antennae, 3 pairs uniramous legs, wings',
          diagnosticFeatureBn: 'ইনসেক্টা শ্রেণি: তিন খণ্ডক দেহ, ১ জোড়া শুঙ্গ, ৩ জোড়া পা, ডানা',
          resultType: 'next_step',
          nextStepId: 10
        }
      ]
    },
    {
      id: 6,
      title: 'Subphylum Crustacea: Branchiopoda vs Malacostraca',
      titleBn: 'ক্রাস্টাশিয়া উপপর্ব: ব্র্যাঙ্কিওপোডা বনাম ম্যালাকোস্ট্রাকা',
      character: 'Microscopic bivalved carapace with swimming antennae vs large macroscopic decapod with carapace and pereiopods',
      characterBn: 'আণুবীক্ষণিক সাঁতারু শুঙ্গযুক্ত খোলস বনাম ৫ জোড়া চলন পদবিশিষ্ট দশপদী চিংড়ি ও কাঁকড়া',
      couplets: [
        {
          lead: 'Microscopic to miniature freshwater crustacean (1-5 mm); body enclosed within a bivalved transparent carapace with a ventral cleft; large branched second antennae used for jerky swimming locomotion; single large compound cyclops eye; leaf-like phyllopod thoracic legs.',
          leadBn: 'ক্ষুদ্রাকৃতির মিঠাপানির ক্রাস্টাশিয়ান (১-৫ মিমি); স্বচ্ছ দুই কপাট খোলসের ভেতর দেহ; বৃহৎ শাখান্বিত ২য় শুঙ্গ দিয়ে লাফিয়ে সাঁতার কাটে; একটি মাত্র পুঞ্জাক্ষি।',
          diagnosticFeature: 'Daphnia pulex: Bivalved carapace, swimming 2nd antennae, single median compound eye, cyclic parthenogenesis',
          diagnosticFeatureBn: 'ড্যাফনিয়া পিউলেক্স: ওয়াটার ফ্লি, সাঁতারু শুঙ্গ, একক পুঞ্জাক্ষি',
          resultType: 'species',
          speciesId: 'sp-daphnia-pulex',
          rationaleEn: 'Resolves to Common water flea (Daphnia pulex: Branchiopoda)',
          rationaleBn: 'ওয়াটার ফ্লি / ড্যাফনিয়া (ড্যাফনিয়া পিউলেক্স)'
        },
        {
          lead: 'Class Malacostraca (Order Decapoda): Large macroscopic crustaceans; thorax of 8 segments covered by a cephalothorax carapace; 5 pairs of thoracic walking legs (pereiopods), of which the first pair (or more) typically bears chelae (pincers); abdomen with 6 segments and telson.',
          leadBn: 'ম্যালাকোস্ট্রাকা শ্রেণি (ডেকাপোডা বর্গ): বৃহৎ ক্রাস্টাশিয়ান; ৫ জোড়া বক্ষীয় চলন পদ (যার প্রথম জোড়া বা ততোধিক চিমটায় রূপান্তরিত); উদরে ৬টি খণ্ডক ও টেলসন।',
          diagnosticFeature: 'Order Decapoda: 5 pairs pereiopods, cephalothorax carapace, abdomen with pleopods and uropods',
          diagnosticFeatureBn: 'ডেকাপোডা বর্গ: ৫ জোড়া চলন পদ (দশপদী), সুগঠিত ক্যারাপেস, প্লায়োপড',
          resultType: 'next_step',
          nextStepId: 7
        }
      ]
    },
    {
      id: 7,
      title: 'Order Decapoda: Shrimps vs Lobsters vs True Crabs',
      titleBn: 'ডেকাপোডা বর্গ: চিংড়ি বনাম লবস্টার বনাম প্রকৃত কাঁকড়া',
      character: 'Laterally compressed body with swimming pleopods vs large chelate lobster vs dorsoventrally flattened crab with folded abdomen',
      characterBn: 'পার্শ্বীয়ভাবে চ্যাপ্টা সাঁতারু চিংড়ি বনাম চিমটাযুক্ত লবস্টার বনাম পেট ভাঁজ করা কাঁকড়া',
      couplets: [
        {
          lead: 'Body elongated and laterally compressed with smooth, thin cuticle; swimming pleopods (swimmerets) well developed; prominent serrated rostrum armed with teeth extending forward over head; commercial marine/estuarine prawn.',
          leadBn: 'পার্শ্বীয়ভাবে চ্যাপ্টা লম্বা দেহ; সাঁতার কাটার প্লায়োপড সুগঠিত; মাথার ওপর দাঁতযুক্ত খাঁজকাটা দীর্ঘ রোস্ট্রাম বিদ্যমান; বাণিজ্যিক বাগদা চিংড়ি।',
          diagnosticFeature: 'Penaeus monodon: Serrated rostrum (7-8 dorsal, 3-4 ventral), banded body, no exopod on 5th pereiopod',
          diagnosticFeatureBn: 'পেনিয়াস মনোডন: বাগদা চিংড়ি, খাঁজকাটা রোস্ট্রাম, ডোরাকাটা দেহ',
          resultType: 'species',
          speciesId: 'sp-penaeus-monodon',
          rationaleEn: 'Resolves to Giant tiger prawn (Penaeus monodon: Penaeidae)',
          rationaleBn: 'বাগদা চিংড়ি / জায়ান্ট টাইগার প্রন (পেনিয়াস মনোডন: পেনেইডি পরিবার)'
        },
        {
          lead: 'Body robust, subcylindrical or dorsoventrally flattened; pleopods primarily for egg brooding; walking pereiopods robust; lobsters and true crabs.',
          leadBn: 'স্থূল নলাকার বা উপর-নিচে চ্যাপ্টা দেহ; ডিম বহনের জন্য উদরীয় উপাঙ্গ; শক্ত চলন পদ; লবস্টার ও কাঁকড়া।',
          diagnosticFeature: 'Reptant Decapods: Lobsters (Astacidea/Achelata) & True Crabs (Brachyura)',
          diagnosticFeatureBn: 'লবস্টার এবং প্রকৃত কাঁকড়া (ব্র্যাকিউরা)',
          resultType: 'next_step',
          nextStepId: 8
        }
      ]
    },
    {
      id: 8,
      title: 'Reptant Decapods: Clawed Lobster vs Spiny Lobster vs Brachyuran Crabs',
      titleBn: 'লবস্টার বনাম স্পাইনি লবস্টার বনাম ব্র্যাকিউরান কাঁকড়া',
      character: 'Extended abdomen with giant chelae vs spiny antennae without claws vs reduced folded abdomen',
      characterBn: 'বিশাল চিমটাসহ প্রসারিত উদর বনাম কাঁটাযুক্ত লম্বা শুঙ্গ বনাম বুকের নিচে ভাঁজ করা পেট',
      couplets: [
        {
          lead: 'First pair of pereiopods modified into massive, asymmetrical crushing and cutting pincer claws (chelae); elongated abdomen terminating in a broad fan-like tail (uropods and telson); steel-blue to dark greenish-blue body.',
          leadBn: 'প্রথম জোড়া পা বিশাল অসম চিমটায় রূপান্তরিত (একটি পেষণকারী ও অন্যটি কর্তনকারী); চ্যাপ্টা লেজযুক্ত লম্বা উদর; ইস্পাত-নীল দেহ।',
          diagnosticFeature: 'Homarus gammarus: Huge asymmetrical chelae, broad tail fan, marine benthic',
          diagnosticFeatureBn: 'হোমারাস গ্যামারাস: ইউরোপিয়ান লবস্টার, বিশাল চিমটা, পাখা লেজ',
          resultType: 'species',
          speciesId: 'sp-homarus-gammarus',
          rationaleEn: 'Resolves to European lobster (Homarus gammarus: Nephropidae)',
          rationaleBn: 'ইউরোপিয়ান লবস্টার (হোমারাস গ্যামারাস: নেফ্রোFramework পরিবার)'
        },
        {
          lead: 'Large pincer claws completely absent on all walking legs; carapace and long heavy cylindrical antennae covered with sharp forward-pointing defensive spines; large yellow spots on abdominal pleura.',
          leadBn: 'সব পায়ে কোনো চিমটা বা নখর নেই; ক্যারাপেস ও দীর্ঘ ভারী নলাকার শুঙ্গ সূঁচালো কাঁটায় ঢাকা; পেটের দুই পাশে হলুদ দাগ।',
          diagnosticFeature: 'Panulirus argus: No true claws, spiny cylindrical antennae, yellow abdominal spots',
          diagnosticFeatureBn: 'প্যানুলিরাশ আর্গাস: চিমটাহীন স্পাইনি লবস্টার, কাঁটাযুক্ত শুঙ্গ',
          resultType: 'species',
          speciesId: 'sp-panulirus-argus',
          rationaleEn: 'Resolves to Caribbean spiny lobster (Panulirus argus: Palinuridae)',
          rationaleBn: 'ক্যারিবিয়ান স্পাইনি লবস্টার (প্যানুলিরাশ আর্গাস)'
        },
        {
          lead: 'Infraorder Brachyura (True Crabs): Abdomen greatly reduced, flattened, and permanently folded underneath the broad, depressed cephalothorax sternum; tail fan absent; fifth pair of pereiopods modified for paddle swimming or walking.',
          leadBn: 'ব্র্যাকিউরা (প্রকৃত কাঁকড়া): উদর অত্যন্ত ক্ষুদ্র ও চ্যাপ্টা এবং তা প্রশস্ত ক্যারাপেসের নিচে খাঁজে স্থায়ীভাবে ভাঁজ করা থাকে; লেজের পাখা নেই; ৫ম পা প্যাডেল সদৃশ।',
          diagnosticFeature: 'Infraorder Brachyura: Abdomen folded beneath sternum, 5th legs as swimming paddles',
          diagnosticFeatureBn: 'ব্র্যাকিউরা অববর্গ: ভাঁজ করা উদর, সাঁতারের প্যাডেল পা',
          resultType: 'next_step',
          nextStepId: 9
        }
      ]
    },
    {
      id: 9,
      title: 'Infraorder Brachyura: Blue Crab vs Giant Mud Crab',
      titleBn: 'ব্র্যাকিউরা: ব্লু ক্র্যাব বনাম জায়ান্ট মাড ক্র্যাব (শিলা কাঁকড়া)',
      character: 'Prominent lateral carapace spine and blue chelae vs massive smooth green-brown oval carapace',
      characterBn: 'তীক্ষ্ণ পার্শ্বীয় কাঁটা ও নীল চিমটা বনাম মসৃণ নিরেট ডিম্বাকৃতি সবুজ-বাদামি খোলস ও দানবীয় চিমটা',
      couplets: [
        {
          lead: 'Broad carapace terminating laterally in a sharp, elongated spine on each side; frontal margin with 4 teeth; chelae bright cobalt blue in males or orange-tipped in females; 5th pereiopod dactyls flattened into broad paddle oars.',
          leadBn: 'ক্যারাপেসের দুই পাশে অত্যন্ত দীর্ঘ তীক্ষ্ণ কাঁটা থাকে; চিমটার ওপর উজ্জ্বল কোবাল্ট নীল বা কমলা আভা; ৫ম পা প্রশস্ত প্যাডেল সদৃশ।',
          diagnosticFeature: 'Callinectes sapidus: Sharp lateral carapace spine, bright blue chelipeds, paddle dactyls',
          diagnosticFeatureBn: 'ক্যালিনেক্টেস স্যাপিডাস: ধারালো পার্শ্বীয় কাঁটা, নীল চিমটা, ব্লু ক্র্যাব',
          resultType: 'species',
          speciesId: 'sp-callinectes-sapidus',
          rationaleEn: 'Resolves to Blue crab (Callinectes sapidus: Portunidae)',
          rationaleBn: 'ব্লু ক্র্যাব (ক্যালিনেক্টেস স্যাপিডাস: পোর্টুনিডি পরিবার)'
        },
        {
          lead: 'Massive, smooth, heavy oval carapace without elongated lateral spines; frontal margin with 4 blunt equal teeth; 9 sharp teeth on each anterolateral margin; colossal, powerful bulbous crushing chelae capable of cracking hard molluscan shells; mottled dark green to brownish-black; estuarine mangrove dweller.',
          leadBn: 'লম্বা পার্শ্বীয় কাঁটাহীন অত্যন্ত ভারী মসৃণ খোলস; উভয় পাশে ৯টি করে করাতের দাঁতের মতো কাঁটা; শামুকের খোলস ভাঙতে সক্ষম দানবীয় চিমটা; সুন্দরবনের শিলা কাঁকড়া।',
          diagnosticFeature: 'Scylla serrata: Massive smooth oval carapace, 9 equal anterolateral teeth, huge crushing claws, mangrove',
          diagnosticFeatureBn: 'সিলা সেরাট্টা: শিলা কাঁকড়া / জায়ান্ট মাড ক্র্যাব, ৯টি পার্শ্বীয় দাঁত, দানবীয় চিমটা',
          resultType: 'species',
          speciesId: 'sp-scylla-serrata',
          rationaleEn: 'Resolves to Giant mud crab (Scylla serrata: Portunidae)',
          rationaleBn: 'শিলা কাঁকড়া / জায়ান্ট মাড ক্র্যাব (সিলা সেরাট্টা: পোর্টুনিডি পরিবার)'
        }
      ]
    },
    {
      id: 10,
      title: 'Class Insecta: Flight Specialization and Mouthparts',
      titleBn: 'ইনসেক্টা শ্রেণি: ডানা এবং মুখোপাঙ্গের রূপান্তর',
      character: 'Hardened elytra or tegmina vs scale-covered wings vs single pair with halteres vs membranous wings',
      characterBn: 'কঠিন এলিট্রা ডানা বনাম আঁশযুক্ত ডানা বনাম একক জোড়া হল্টিয়ার্সযুক্ত ডানা বনাম স্বচ্ছ ডানা',
      couplets: [
        {
          lead: 'Forewings modified into hardened, protective, veinless shell-like covers (elytra) meeting in a straight mid-dorsal suture at rest; hindwings membranous and folded beneath for flight; biting-chewing mouthparts.',
          leadBn: 'সম্মুখ ডানা শক্ত খোলসের মতো চামড়াযুক্ত এলিট্রায় রূপান্তরিত যা পিঠের ঠিক মাঝখানে সোজা রেখায় জোড়া লাগে; নিচের ডানা ওড়ার কাজে লাগে; চর্বন মুখোপাঙ্গ।',
          diagnosticFeature: 'Order Coleoptera (Beetles): Hardened protective elytra meeting in midline, chewing jaws',
          diagnosticFeatureBn: 'কোলিওপ্টেরা বর্গ (গুবরে পোকা): শক্ত এলিট্রা ডানা, চর্বন মুখোপাঙ্গ',
          resultType: 'species',
          speciesId: 'sp-scarabaeus-sacer',
          rationaleEn: 'Resolves to Sacred scarab dung beetle (Scarabaeus sacer: Scarabaeidae - serrated fossorial foretibiae)',
          rationaleBn: 'পবিত্র গুবরে পোকা / স্কারাব (স্কারাবিয়াস সেকার: স্কারাবায়িডি পরিবার)'
        },
        {
          lead: 'Wings not modified into rigid protective elytra meeting in a straight midline; forewings membranous, leathery tegmina, covered in microscopic colored scales, or reduced to balance halteres.',
          leadBn: 'ডানা শক্ত এলিট্রা নয়; হয় স্বচ্ছ ঝিল্লিযুক্ত, বা চামড়ার মতো টেগমিনা, বা সূক্ষ্ম রঙিন আঁশে ঢাকা, অথবা এক জোড়া ডানা হ্রাস পেয়ে হল্টিয়ার্সে রূপান্তরিত।',
          diagnosticFeature: 'Non-coleopteran insect orders: Diptera, Lepidoptera, Hymenoptera, Odonata, Blattodea',
          diagnosticFeatureBn: 'অন্যান্য পতঙ্গ বর্গসমূহ: ডিপ্টেরা, লেপিডোপ্টেরা, হাইমেনোপ্টেরা ইত্যাদি',
          resultType: 'next_step',
          nextStepId: 11
        }
      ]
    },
    {
      id: 11,
      title: 'Insect Wing Reductions & Scales: Diptera & Lepidoptera',
      titleBn: 'ডানা রূপান্তর: ডিপ্টেরা (একজোড়া ডানা) ও লেপিডোপ্টেরা (প্রজাপতি)',
      character: 'Only one functional pair of wings with knobbed halteres vs 4 wings covered in colored scales',
      characterBn: 'এক জোড়া সচল ডানা ও হল্টিয়ার্স বনাম রঙিন আঁশে ঢাকা চার ডানা ও নলাকার চোষক শুণ্ড',
      couplets: [
        {
          lead: 'Only two functional flight wings (single pair on mesothorax); hindwings reduced to specialized tiny knobbed vibrating gyroscopic balancing organs (halteres); sucking, piercing, or sponging mouthparts.',
          leadBn: 'শুধুমাত্র এক জোড়া কার্যকরী ওড়ার ডানা থাকে; পেছনের ডানা ভারসাম্য রক্ষাকারী ক্ষুদ্র বোঁটাযুক্ত হল্টিয়ার্সে রূপান্তরিত; চোষক বা দংশক মুখোপাঙ্গ।',
          diagnosticFeature: 'Order Diptera (True Flies): 1 pair functional wings, hindwing halteres',
          diagnosticFeatureBn: 'ডিপ্টেরা বর্গ (মাছি ও মশা): ১ জোড়া ডানা, ভারসাম্য রক্ষাকারী হল্টিয়ার্স',
          resultType: 'next_step',
          nextStepId: 12
        },
        {
          lead: 'Two pairs of broad, membranous flight wings densely covered in microscopic, overlapping shingle-like pigmented and structural scales; adult mouthparts modified into a long, coiled sucking tube (proboscis).',
          leadBn: 'রঙিন আণুবীক্ষণিক আঁশে ঘনভাবে ঢাকা দুই জোড়া প্রশস্ত ডানা; প্রাপ্তবয়স্কদের মুখোপাঙ্গ স্প্রিং-এর মতো গুটানো লম্বা চোষক নালী (প্রোবোসিস)-এ রূপান্তরিত।',
          diagnosticFeature: 'Order Lepidoptera (Butterflies & Moths): Scaled wings, coiled sucking proboscis',
          diagnosticFeatureBn: 'লেপিডোপ্টেরা বর্গ: আঁশযুক্ত রঙিন ডানা, গুটানো চোষক নালী',
          resultType: 'species',
          speciesId: 'sp-danaus-plexippus',
          rationaleEn: 'Resolves to Monarch butterfly (Danaus plexippus: Nymphalidae - vibrant orange wings with black veins)',
          rationaleBn: 'মনার্ক প্রজাপতি (ড্যানাউস প্লেক্সিপাস: কালো শিরাযুক্ত কমলা ডানা)'
        },
        {
          lead: 'Two pairs of functional wings present without colored scales or halteres; forewings may be leathery tegmina, membranous net-veined wings, or hooked membranous wings (hamuli).',
          leadBn: 'আঁশ বা হল্টিয়ার্সবিহীন দুই জোড়া কার্যকরী ডানা; চামড়ার মতো টেগমিনা, জালের মতো শিরাযুক্ত ডানা, বা হুক দিয়ে জোড়া লাগানো ঝিল্লিযুক্ত ডানা।',
          diagnosticFeature: 'Other Insect Orders: Odonata, Blattodea, Hymenoptera',
          diagnosticFeatureBn: 'অন্যান্য পতঙ্গ বর্গ: ওডোনাটা, ব্লাটোডিয়া, হাইমেনোপ্টেরা',
          resultType: 'next_step',
          nextStepId: 13
        }
      ]
    },
    {
      id: 12,
      title: 'Order Diptera: Fruit Fly vs Yellow Fever Mosquito',
      titleBn: 'ডিপ্টেরা বর্গ: ফলের মাছি বনাম ডেঙ্গু/হলুদ জ্বর মশা',
      character: 'Minute yellowish fly with red eyes and aristate antennae vs slender mosquito with long proboscis and scales',
      characterBn: 'লাল চোখের ক্ষুদ্র ফলমাছি বনাম লম্বা চোষক ও সাদা-কালো দাগযুক্ত ডেঙ্গু মশা',
      couplets: [
        {
          lead: 'Minute, yellowish-brown to tan fly (2-3 mm); prominent bright red compound eyes; short three-segmented antennae bearing a feathery arista; transparent wings with distinct costal vein breaks; premier genetic model organism.',
          leadBn: 'হলুদ-বাদামি ক্ষুদ্র মাছি (২-৩ মিমি); উজ্জ্বল লাল রঙের চোখ; পালকের মতো অ্যারিস্টাযুক্ত ছোট শুঙ্গ; জেনেটিক গবেষণার শীর্ষ মডেল প্রাণী।',
          diagnosticFeature: 'Drosophila melanogaster: Red eyes, tan striped abdomen, plumose arista, 2-3 mm size',
          diagnosticFeatureBn: 'ড্রসোফিলা মেলানোগ্যাস্টার: লাল চোখ, ফলমাছি, জিনতত্ত্বের মডেল প্রাণী',
          resultType: 'species',
          speciesId: 'sp-drosophila-melanogaster',
          rationaleEn: 'Resolves to Common fruit fly (Drosophila melanogaster: Drosophilidae)',
          rationaleBn: 'সাধারণ ফলমাছি / ড্রসোফিলা (ড্রসোফিলা মেলানোগ্যাস্টার)'
        },
        {
          lead: 'Slender, delicate body with elongated needle-like piercing-sucking proboscis used by females to take vertebrate blood; legs and abdomen boldly banded with black and white scales; thorax marked dorsally with a distinct white lyre-shaped pattern; vector of dengue, yellow fever, and zika viruses.',
          leadBn: 'সরু লম্বা দেহ যাতে রক্ত চোষার জন্য সুচের মতো মুখোপাঙ্গ থাকে; পায়ে সাদা-কালো ডোরাকাটা ব্যান্ড; বক্ষের পিঠে সাদা বীণা বা লায়ার আকৃতির দাগ; ডেঙ্গুর বাহক।',
          diagnosticFeature: 'Aedes aegypti: White lyre thorax marking, black and white banded legs, long piercing proboscis',
          diagnosticFeatureBn: 'এডিশ ইজিপ্টি: বক্ষে সাদা বীণা দাগ, পায়ে সাদা-কালো ডোরা, এডিস মশা',
          resultType: 'species',
          speciesId: 'sp-aedes-aegypti',
          rationaleEn: 'Resolves to Yellow fever mosquito (Aedes aegypti: Culicidae)',
          rationaleBn: 'এডিস মশা (এডিশ ইজিপ্টি: কুলিসিডি পরিবার)'
        }
      ]
    },
    {
      id: 13,
      title: 'Remaining Insect Orders: Dragonflies, Cockroaches, Bees',
      titleBn: 'অন্যান্য পতঙ্গ বর্গ: ফড়িং, তেলাপোকা ও মৌমাছি',
      character: 'Net-veined outstretched wings vs flattened tegmina cursorial vs membranous hooked wings with waist',
      characterBn: 'জালের মতো শিরাযুক্ত ছড়ানো ডানা বনাম চ্যাপ্টা চামড়ার ডানাযুক্ত তেলাপোকা বনাম সরু কোমরযুক্ত মৌমাছি',
      couplets: [
        {
          lead: 'Large predatory insect with enormous hemispherical compound eyes covering most of head; tiny bristle-like antennae; two pairs of long, narrow, independently controlled transparent wings with dense reticulate net-venation, unable to fold flat over back.',
          leadBn: 'মাথা জুড়ে বিশাল পুঞ্জাক্ষিযুক্ত শিকারী পতঙ্গ; অতি ক্ষুদ্র লোমশ শুঙ্গ; জালের মতো অসংখ্য শিরাযুক্ত দুই জোড়া লম্বা ডানা যা পিঠের ওপর ভাজ করে রাখা যায় না।',
          diagnosticFeature: 'Anax junius (Odonata): Enormous compound eyes, reticulate net-veined outstretched wings, green thorax',
          diagnosticFeatureBn: 'অ্যানাক্স জুনিয়াস: সবুজ বক্ষ, বৃহৎ চোখ, ফড়িং (ওডোনাটা বর্গ)',
          resultType: 'species',
          speciesId: 'sp-anax-junius',
          rationaleEn: 'Resolves to Common green darner dragonfly (Anax junius: Aeshnidae)',
          rationaleBn: 'সবুজ ফড়িং (অ্যানাক্স জুনিয়াস: অ্যাশনিডি পরিবার)'
        },
        {
          lead: 'Dorsoventrally flattened, oval cursorial insect adapted for squeezing into narrow crevices; head concealed beneath a broad shield-like pronotum; long slender filiform antennae; forewings modified into tough leathery tegmina overlapping flat over back; long spiny running legs; prominent posterior sensory cerci.',
          leadBn: 'চ্যাপ্টা ডিম্বাকৃতি দেহ; মাথাটি প্রোনোয়াম ঢাল দিয়ে ঢাকা থাকে; দীর্ঘ সুতার মতো শুঙ্গ; চামড়ার মতো টেগমিনা ডানা; কাঁটাযুক্ত দ্রুত দৌড়ানোর পা ও পেছনের সংবেদী সারসি।',
          diagnosticFeature: 'Periplaneta americana (Blattodea): Dorsoventrally compressed, leathery tegmina, cursorial legs, cerci',
          diagnosticFeatureBn: 'পেরিপ্ল্যানেটা আমেরিকানা: তেলাপোকা, চ্যাপ্টা দেহ, টেগমিনা ডানা, সারসি',
          resultType: 'species',
          speciesId: 'sp-periplaneta-americana',
          rationaleEn: 'Resolves to American cockroach (Periplaneta americana: Blattidae)',
          rationaleBn: 'তেলাপোকা (পেরিপ্ল্যানেটা আমেরিকানা: ব্ল্যাটিডি পরিবার)'
        },
        {
          lead: 'Eusocial insect with two pairs of transparent membranous wings coupled together in flight by tiny microscopic hooks (hamuli); slender constricted "wasp waist" (petiole); chewing-lapping mouthparts; hind legs equipped with specialized pollen-collecting baskets (corbiculae); female with abdominal venomous sting.',
          leadBn: 'ঝিল্লিযুক্ত দুই জোড়া স্বচ্ছ ডানা যা ওড়ার সময় ক্ষুদ্র হুক দিয়ে একসাথে জোড়া থাকে; সরু কোমর (পেটিওল); পেছনের পায়ে পরাগধানী থলি (করবিকুলা); হুলযুক্ত মৌমাছি।',
          diagnosticFeature: 'Apis mellifera (Hymenoptera): Wing hamuli, constricted petiole, hindleg pollen baskets, sting',
          diagnosticFeatureBn: 'এপিস মেলিফেরা: ডানা জোড়া হুক, পরাগধানী থলি, হুলযুক্ত মৌমাছি',
          resultType: 'species',
          speciesId: 'sp-apis-mellifera',
          rationaleEn: 'Resolves to Western honey bee (Apis mellifera: Apidae)',
          rationaleBn: 'মৌমাছি (এপিস মেলিফেরা: অ্যাপিডি পরিবার)'
        }
      ]
    }
  ]
};
