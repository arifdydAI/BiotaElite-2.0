// Key 7: Global Diagnostic Key to Classes & Species of Phylum Echinodermata
// Comprehensive expansion resolving all 9 canonical Echinodermata species.

module.exports = {
  id: 'key-global-echinodermata-classes',
  title: 'Diagnostic Key to Classes & Canonical Species of Phylum Echinodermata',
  titleBn: 'একাইনোডার্মাটা (কণ্টকত্বক প্রাণী) পর্বের শ্রেণি ও প্রজাতি শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-echinodermata',
  majorGroup: 'echinodermata',
  taxonScope: 'Phylum Echinodermata (Sea Stars, Brittle Stars, Sea Urchins, Sea Cucumbers, Feather Stars)',
  taxonScopeBn: 'একাইনোডার্মাটা পর্ব (তারা মাছ, ভঙ্গুর তারা, সাগর আর্চিন, সাগর শসা, পালক তারা)',
  description: 'Authoritative dichotomous key distinguishing the five extant classes of Phylum Echinodermata and their canonical species based on adult pentaradial symmetry, water vascular ambulacral architecture, endoskeletal ossicle development, pedicellariae, and body orientation.',
  descriptionBn: 'প্রাপ্তবয়স্কদের পঞ্চ-অরীয় প্রতিসাম্য, পানি সংবহন তন্ত্র, অন্তকঙ্কালের ক্যালসিয়াম প্লেট, পেডিসিলারিয়া এবং দৈহিক স্থিতির ওপর ভিত্তি করে একাইনোডার্মাটার ৫টি শ্রেণি ও ৯টি প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-ruppert-2004', 'ref-hickman-2020', 'ref-worms-2024'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Oral Surface Orientation and Primary Class Separation',
      titleBn: 'মৌখিক তলের দিক এবং প্রাথমিক শ্রেণি বিভাজন',
      character: 'Mouth oriented upwards with branched pinnule arms vs mouth oriented downwards or anteriorly',
      characterBn: 'মুখ উপরের দিকে ও শাখান্বিত পালক বাহু বনাম মুখ নিচের দিকে বা সম্মুখে',
      couplets: [
        {
          lead: 'Oral surface directed upwards (aboral surface attached by a stalk or grasping cirri to substrate); central cup-like calyx bears 10 flexible arms subdivided by lateral pinnules; open ciliated ambulacral grooves capture suspended plankton; madreporite internal.',
          leadBn: 'মৌখিক তল উপরের দিকে মুখ করা; ১০টি নমনীয় বাহু যাতে পালকের মতো পিনিউল থাকে; মুক্ত সিলিয়াযুক্ত নালী দিয়ে ভাসমান খাদ্য সংগ্রহ করে; সিরাস দিয়ে আটকে থাকে।',
          diagnosticFeature: 'Class Crinoidea: Oral side upwards, branched pinnule arms, ciliated suspension grooves',
          diagnosticFeatureBn: 'ক্রিনইডিয়া শ্রেণি: মুখ উপরের দিকে, পালকসদৃশ বাহু, সিরাস',
          resultType: 'species',
          speciesId: 'sp-antedon-mediterranea',
          rationaleEn: 'Resolves to Mediterranean feather star (Antedon mediterranea: Comatulida)',
          rationaleBn: 'মেডিটেরেনিয়ান ফেদার স্টার / পালক তারা (অ্যান্টেডন মেডিটেরেনিয়া)'
        },
        {
          lead: 'Oral surface directed downwards against substrate (or body elongated horizontally with mouth at anterior pole); arms unbranched or absent; free-moving benthic predators, scavengers, or grazing deposit feeders.',
          leadBn: 'মৌখিক তল নিচের দিকে বা সম্মুখে অবস্থিত; বাহু অশাখান্বিত বা বাহুহীন; মুক্ত চলমান শিকারী বা তলানিভোজী।',
          diagnosticFeature: 'Subphylum Asterozoa (Starfishes) & Echinozoa (Urchins & Sea Cucumbers)',
          diagnosticFeatureBn: 'তারা মাছ, ভঙ্গুর তারা, সাগর আর্চিন এবং সাগর শসা',
          resultType: 'next_step',
          nextStepId: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Star-Shaped Body with Radiating Arms vs Armless Globose / Cylindrical Body',
      titleBn: 'বাহুযুক্ত তারকাকৃতি দেহ বনাম বাহুহীন গোলাকার/নলাকার দেহ',
      character: 'Presence of distinct radiating arms around a central disc vs compact globular or cylindrical body without arms',
      characterBn: 'কেন্দ্রীয় ডিস্কের চারপাশে প্রসারিত বাহু বনাম বাহুহীন গোল বা নলাকার শরীর',
      couplets: [
        {
          lead: 'Star-shaped body with arms radiating symmetrically from a central disc; open or closed ambulacral grooves on oral surface of each arm; locomotive tube feet (podia) operated by ampullae.',
          leadBn: 'কেন্দ্রীয় ডিস্ক থেকে প্রসারিত বাহুযুক্ত তারকাকৃতি দেহ; বাহুর নিচের তলে অ্যাম্বুলাক্রাল খাঁজ ও নালীপদ উপস্থিত যা দিয়ে চলাচল করে।',
          diagnosticFeature: 'Asterozoa: True Sea Stars (Asteroidea) & Brittle Stars (Ophiuroidea)',
          diagnosticFeatureBn: 'তারা মাছ (অ্যাস্টেরয়েড) এবং ভঙ্গুর তারা (ওফিউরয়েড)',
          resultType: 'next_step',
          nextStepId: 3
        },
        {
          lead: 'Body compact, spherical, hemispherical, or elongated along oral-aboral axis; free arms completely absent; endoskeleton fused into a solid test of immovable plates or reduced to microscopic dermal ossicles.',
          leadBn: 'দেহ গোল, অর্ধগোলাকার বা নলাকার; মুক্ত বাহু সম্পূর্ণ অনুপস্থিত; অন্তকঙ্কাল নিরেট খোলস (টেস্ট) তৈরি করে অথবা চামড়ায় আণুবীক্ষণিক অস্থিকা থাকে।',
          diagnosticFeature: 'Echinozoa: Sea Urchins (Echinoidea) & Sea Cucumbers (Holothuroidea)',
          diagnosticFeatureBn: 'একিনোজোয়া: সাগর আর্চিন (একিনয়েড) এবং সাগর শসা (হোলোথুরয়েড)',
          resultType: 'next_step',
          nextStepId: 6
        }
      ]
    },
    {
      id: 3,
      title: 'Asteroidea vs Ophiuroidea',
      titleBn: 'অ্যাস্টেরয়ডিয়া (তারা মাছ) বনাম ওফিউরয়ডিয়া (ভঙ্গুর তারা)',
      character: 'Broad arms merging gradually into central disc with open grooves vs slender arms sharply demarcated from disc with closed grooves',
      characterBn: 'ডিস্কের সাথে মিশে যাওয়া প্রশস্ত বাহু ও উন্মুক্ত খাঁজ বনাম স্পষ্ট পৃথক সরু সর্পিল বাহু',
      couplets: [
        {
          lead: 'Class Asteroidea: Arms broad at base, merging gradually into central disc without sharp boundary; open ambulacral grooves along oral surface of arms contain 2 or 4 rows of suckered tube feet; aboral surface bears calcareous spines and pincer-like pedicellariae; eversible cardiac stomach used for external digestion.',
          leadBn: 'অ্যাস্টেরয়ডিয়া শ্রেণি: বাহুসমূহ গোড়ায় প্রশস্ত এবং কেন্দ্রীয় ডিস্কের সাথে মসৃণভাবে যুক্ত; উন্মুক্ত খাঁজে চোষকযুক্ত নালীপদ থাকে; পিঠের ওপর পেডিসিলারিয়া থাকে; বহিস্থ পরিপাকের জন্য পাকস্থলী বের করতে পারে।',
          diagnosticFeature: 'Class Asteroidea: Broad merging arms, open ambulacral grooves with suckered podia, pedicellariae',
          diagnosticFeatureBn: 'অ্যাস্টেরয়ডিয়া শ্রেণি: চওড়া বাহু, উন্মুক্ত খাঁজ, চোষক নালীপদ',
          resultType: 'next_step',
          nextStepId: 4
        },
        {
          lead: 'Class Ophiuroidea: Five extremely slender, whip-like, highly flexible jointed arms sharply demarcated from a distinct rounded, flattened central disc; ambulacral grooves closed over by plates; tube feet small and sensory without suckers; locomotion by rapid serpentine snaking arm movements; arms readily autotomized when attacked.',
          leadBn: 'ওফিউরয়ডিয়া শ্রেণি: গোলাকার ডিস্ক থেকে স্পষ্টভাবে পৃথক ৫টি অত্যন্ত সরু ও নমনীয় চাবুকসদৃশ বাহু; খাঁজসমূহ প্লেট দ্বারা ঢাকা; চোষকহীন নালীপদ; সাপের মতো দ্রুত গতিতে চলে; আক্রান্ত হলে সহজে বাহু খসিয়ে দেয়।',
          diagnosticFeature: 'Ophiothrix fragilis: Slender spiny arms sharply demarcated from disc, rapid serpentine crawling',
          diagnosticFeatureBn: 'ওফিওথ্রিক্স ফ্র্যাজিলিস: কাঁটাযুক্ত সরু সর্পিল বাহু, ভঙ্গুর তারা',
          resultType: 'species',
          speciesId: 'sp-ophiothrix-fragilis',
          rationaleEn: 'Resolves to Common brittle star (Ophiuroidea: Ophiotrichidae)',
          rationaleBn: 'কমন ব্রিটল স্টার / ভঙ্গুর তারা (ওফিওথ্রিক্স ফ্র্যাজিলিস)'
        }
      ]
    },
    {
      id: 4,
      title: 'Class Asteroidea: Coral Predator vs Boreal Sea Star vs Horned Star',
      titleBn: 'অ্যাস্টেরয়ডিয়া শ্রেণি: প্রবালভক্ষী ক্রাউন-অব-থর্নস বনাম কমন সি স্টার বনাম শিংযুক্ত চকলেট চিপ স্টার',
      character: 'Multiple arms with venomous spines vs 5 smooth arms vs 5 arms with dark conical horn tubercles',
      characterBn: 'বহু বিষাক্ত কাঁটাযুক্ত বহু বাহু বনাম ৫টি মসৃণ বাহু বনাম ৫টি কালো শিংযুক্ত গুটি বাহু',
      couplets: [
        {
          lead: 'Large multi-armed coral predator (typically 12 to 21 radiating arms); aboral surface covered in dense, sharp, elongated venomous calcareous spines (3-5 cm) causing severe pain and tissue necrosis; feeds by extruding cardiac stomach over living reef-building corals.',
          leadBn: '১২ থেকে ২১টি বাহুযুক্ত বিশাল প্রবালভক্ষী তারা মাছ; পিঠের ওপর ধারালো বিষাক্ত দীর্ঘ কাঁটায় ঢাকা যা তীব্র যন্ত্রণা সৃষ্টি করে; প্রবালের ওপর পাকস্থলী উল্টে দিয়ে প্রবাল কীট হজম করে।',
          diagnosticFeature: 'Acanthaster planci: 12-21 arms, sharp toxic spines (plancitoxin), coral reef corallivore',
          diagnosticFeatureBn: 'অ্যাক্যান্থাস্টার প্ল্যানসি: ১২-২১টি বাহু, বিষাক্ত কাঁটা, ক্রাউন-অব-থর্নস',
          resultType: 'species',
          speciesId: 'sp-acanthaster-planci',
          rationaleEn: 'Resolves to Crown-of-thorns starfish (Acanthaster planci: Acanthasteridae)',
          rationaleBn: 'ক্রাউন-অব-থর্নস স্টারফিশ (অ্যাক্যান্থাস্টার প্ল্যানসি)'
        },
        {
          lead: 'Typical 5-armed sea stars with arms unadorned by long venomous spines; aboral surface with small white spines, dermal branchiae (papulae), or large black conical tubercles.',
          leadBn: '৫টি বাহুযুক্ত তারা মাছ যাতে দীর্ঘ বিষাক্ত কাঁটা থাকে না; ছোট সাদা কাঁটাযুক্ত নরম পিঠ বা কালো রঙের বড় শিংযুক্ত গুটি থাকে।',
          diagnosticFeature: '5-armed sea stars: Asteriidae & Oreasteridae',
          diagnosticFeatureBn: '৫ বাহুবিশিষ্ট তারা মাছ: অ্যাস্টেরিডি ও ওরেস্টেরিডি',
          resultType: 'next_step',
          nextStepId: 5
        }
      ]
    },
    {
      id: 5,
      title: '5-Armed Sea Stars: Asterias rubens vs Protoreaster nodosus',
      titleBn: '৫-বাহু তারা মাছ: অ্যাস্টেরিয়াস রুবেনস বনাম প্রটোরিয়েস্টার নোডোসাস',
      character: 'Orange/violet flexible body with median carinal spine row vs rigid body with large black conical horn nodes',
      characterBn: 'কমলা/বেগুনি নমনীয় শরীর বনাম কালো শিং সদৃশ শক্ত গুটিযুক্ত চকলেট চিপ স্টার',
      couplets: [
        {
          lead: 'Common orange, reddish-brown, or violet sea star with 5 tapering arms; midline of each arm bears a regular longitudinal row of small white blunt spines (carinal ridge); feeds on bivalves by prying open shells with suction tube feet.',
          leadBn: 'কমলা, লালচে-বাদামি বা বেগুনি ৫ বাহুবিশিষ্ট সাধারণ তারা মাছ; প্রতিটি বাহুর মাঝখানে সোজা রেখায় ছোট সাদা কাঁটার সারি থাকে; ঝিনুকের কপাট ফাঁক করে খায়।',
          diagnosticFeature: 'Asterias rubens: 5 tapering arms, central carinal spine row, suction tube feet prying bivalves',
          diagnosticFeatureBn: 'অ্যাস্টেরিয়াস রুবেনস: সাধারণ তারা মাছ, কলার সারি কাঁটা, ঝিনুক শিকারী',
          resultType: 'species',
          speciesId: 'sp-asterias-rubens',
          rationaleEn: 'Resolves to Common sea star (Asterias rubens: Asteriidae)',
          rationaleBn: 'কমন সি স্টার (অ্যাস্টেরিয়াস রুবেনস: অ্যাস্টেরিডি পরিবার)'
        },
        {
          lead: 'Heavy, rigid tropical sea star with 5 stout triangular arms; dorsum decorated with prominent, thick, black or dark brown conical horn-like tubercles resembling chocolate chips; found on Indo-Pacific sandy seagrass flats.',
          leadBn: 'ভারী শক্ত ৫টি মোটা ত্রিভুজাকৃতি বাহুযুক্ত তারা মাছ; পিঠের ওপর চকোলেট চিপসের মতো উঁচু কালো বা গাঢ় বাদামি শিং সদৃশ গুটি সাজানো থাকে।',
          diagnosticFeature: 'Protoreaster nodosus: Rigid body, prominent dark conical tubercles (chocolate chip star)',
          diagnosticFeatureBn: 'প্রটোরিয়েস্টার নোডোসাস: চকলেট চিপ তারা মাছ, কালো শঙ্কু গুটি',
          resultType: 'species',
          speciesId: 'sp-protoreaster-nodosus',
          rationaleEn: 'Resolves to Horned sea star / Chocolate chip star (Protoreaster nodosus: Oreasteridae)',
          rationaleBn: 'হর্নড সি স্টার / চকলেট চিপ তারা (প্রটোরিয়েস্টার নোডোসাস)'
        }
      ]
    },
    {
      id: 6,
      title: 'Echinozoa: Rigid Spiny Test (Sea Urchins) vs Soft Cylindrical Body (Sea Cucumbers)',
      titleBn: 'একিনোজোয়া: শক্ত কাঁটাযুক্ত খোলস (সাগর আর্চিন) বনাম নরম নলাকার শরীর (সাগর শসা)',
      character: 'Globose rigid test of fused plates with movable spines and Aristotle lantern vs soft leathery body with oral tentacles',
      characterBn: 'অ্যারিস্টটলের লণ্ঠন ও কাঁটাযুক্ত শক্ত খোলস বনাম মুখে কর্ষিকাযুক্ত নরম চামড়ার নলাকার দেহ',
      couplets: [
        {
          lead: 'Class Echinoidea (Sea Urchins): Globose, hemispherical, or heart-shaped rigid internal test composed of tightly fused calcareous plates; covered in movable spines articulating on ball-and-socket joints; chewing apparatus of 5 self-sharpening teeth (Aristotle lantern) in oral center.',
          leadBn: 'একিনয়ডিয়া শ্রেণি (সাগর আর্চিন): পরস্পরের সাথে নিরেটভাবে জোড়া লাগানো ক্যালসিয়াম প্লেট দ্বারা গঠিত শক্ত খোলস; বল-অ্যান্ড-সকেট জয়েন্টে নাড়াচাড়া করা কাঁটাযুক্ত; মুখে ৫ দাঁতের অ্যারিস্টটলের লণ্ঠন থাকে।',
          diagnosticFeature: 'Class Echinoidea: Fused calcareous test, movable spines, 5-toothed Aristotle lantern',
          diagnosticFeatureBn: 'একিনয়ডিয়া শ্রেণি: নিরেট টেস্ট, চলমান কাঁটা, অ্যারিস্টটলের লণ্ঠন',
          resultType: 'next_step',
          nextStepId: 7
        },
        {
          lead: 'Class Holothuroidea (Sea Cucumbers): Elongated, sausage-shaped or cylindrical leathery body lying on its side (trivium on substrate, bivium dorsal); endoskeleton reduced to microscopic dermal ossicles embedded in collagen wall; mouth surrounded by 10-30 branched retractile oral tentacles; breathes via internal respiratory trees; dark velvety black coloration.',
          leadBn: 'হোলোথুরয়ডিয়া শ্রেণি (সাগর শসা): নলাকার শসা সদৃশ নরম চামড়ার দেহ; কঙ্কাল চামড়ায় লুকানো আণুবীক্ষণিক অস্থিকায় হ্রাসপ্রাপ্ত; মুখের চারপাশে শাখান্বিত কর্ষিকা মুকুট; রেস্পিরেটরি ট্রি দিয়ে শ্বাস নেয়; ভেলভেটের মতো কালো।',
          diagnosticFeature: 'Holothuria atra: Sausage-shaped, velvety black, dermal ossicles, oral tentacles, cuvierian organs',
          diagnosticFeatureBn: 'হোলোথুরিয়া অ্যাট্রা: ব্ল্যাক সি কিউকাম্বার / কালো সাগর শসা, চামড়ার অস্থিকা',
          resultType: 'species',
          speciesId: 'sp-holothuria-atra',
          rationaleEn: 'Resolves to Black sea cucumber / Lollyfish (Holothuria atra: Holothuriidae)',
          rationaleBn: 'ব্ল্যাক সি কিউকাম্বার / কালো সাগর শসা (হোলোথুরিয়া অ্যাট্রা)'
        }
      ]
    },
    {
      id: 7,
      title: 'Class Echinoidea: Canonical Urchin Species Determination',
      titleBn: 'একিনয়ডিয়া শ্রেণি: সাগর আর্চিন প্রজাতি নির্ধারণ',
      character: 'Purple short spines with genomic model significance vs giant red spines vs edible boreal globose urchin',
      characterBn: 'বেগুনি জিনোমিক মডেল আর্চিন বনাম দানবীয় লাল আর্চিন বনাম সুস্বাদু ইউরোপীয় গোলাকার আর্চিন',
      couplets: [
        {
          lead: 'Hemispherical test (5-10 cm) adorned with dense, vibrant royal purple spines; key biological model organism for developmental biology, fertilization, and echinoderm genomics; Pacific coast kelp forest grazer.',
          leadBn: 'ঘন উজ্জ্বল রাজকীয় বেগুনি রঙের কাঁটায় ঢাকা অর্ধগোলাকার খোলস (৫-১০ সেমি); ভ্রূণবিদ্যা ও জিনোমিক্স গবেষণার অন্যতম প্রধান মডেল প্রাণী; কেল্প শ্যাওলা খায়।',
          diagnosticFeature: 'Strongylocentrotus purpuratus: Vibrant purple spines, developmental model, sequenced genome',
          diagnosticFeatureBn: 'স্ট্রংজাইলোসেন্ট্রোটাস পারপ্যুরেটাস: বেগুনি সাগর আর্চিন, জিনোমিক মডেল',
          resultType: 'species',
          speciesId: 'sp-strongylocentrotus-purpuratus',
          rationaleEn: 'Resolves to Purple sea urchin (Strongylocentrotus purpuratus: Strongylocentrotidae)',
          rationaleBn: 'পার্পল সি আর্চিন / বেগুনি সাগর আর্চিন (স্ট্রংজাইলোসেন্ট্রোটাস পারপ্যুরেটাস)'
        },
        {
          lead: 'Colossal Pacific sea urchin with test diameter reaching up to 18-20 cm and long sharp spines up to 8 cm; uniform brick-red to deep burgundy or reddish-brown coloration; longest-lived echinoderm exceeding 100-200 years.',
          leadBn: '১৮-২০ সেমি প্রশস্ত দানবীয় প্রশান্ত মহাসাগরীয় সাগর আর্চিন যার দীর্ঘ কাঁটা ৮ সেমি পর্যন্ত লম্বা; লাল বা বার্গান্ডি বর্ণ; ১০০-২০০ বছর বাঁচে।',
          diagnosticFeature: 'Mesocentrotus franciscanus: Giant test up to 20 cm, long reddish spines, extreme longevity',
          diagnosticFeatureBn: 'মেসোসেন্ট্রোটাস ফ্রান্সিসকানাস: রেড সি আর্চিন / লাল সাগর আর্চিন, দানবীয় কাঁটা',
          resultType: 'species',
          speciesId: 'sp-mesocentrotus-franciscanus',
          rationaleEn: 'Resolves to Red sea urchin (Mesocentrotus franciscanus: Strongylocentrotidae)',
          rationaleBn: 'রেড সি আর্চিন / লাল সাগর আর্চিন (মেসোসেন্ট্রোটাস ফ্রান্সিসকানাস)'
        },
        {
          lead: 'Nearly spherical, high globose test up to 10-17 cm; test reddish-pink with dense short spines tipped with white or purple; commercial European sea urchin harvested for edible gonads (roe/uni).',
          leadBn: 'প্রায় সম্পূর্ণ গোলাকার উঁচু বলের মতো খোলস (১০-১৭ সেমি); গোলাপি-লাল খোলসে সাদা বা বেগুনি ডগা বিশিষ্ট ছোট কাঁটা; সুস্বাদু ডিমের (ইউনি) জন্য সংগৃহীত।',
          diagnosticFeature: 'Echinus esculentus: Globose spherical test, short reddish/white spines, harvested for edible roe',
          diagnosticFeatureBn: 'একিনাস এসকিউলেনটাস: ইউরোপীয় ভোজ্য সাগর আর্চিন, গোলাকার খোলস',
          resultType: 'species',
          speciesId: 'sp-echinus-esculentus',
          rationaleEn: 'Resolves to European edible sea urchin (Echinus esculentus: Echinidae)',
          rationaleBn: 'এডিবল সি আর্চিন / ভোজ্য সাগর আর্চিন (একিনাস এসকিউলেনটাস)'
        }
      ]
    }
  ]
};
