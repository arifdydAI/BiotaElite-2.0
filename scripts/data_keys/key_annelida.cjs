// Key 6: Global Phylum Annelida Key
// Covers all complete lineages: Earthworms, Leeches, Freshwater annelids, Marine polychaetes
// Resolves all 7 canonical Annelida species through valid diagnostic pathways.

module.exports = {
  id: 'key-global-annelida-lineages',
  title: 'Diagnostic Key to the Major Classes & Lineages of Phylum Annelida',
  titleBn: 'অ্যানেলিডা (বলয়ী প্রাণী) পর্বের প্রধান শ্রেণি ও বংশধারার শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-annelida-marine',
  majorGroup: 'invertebrates',
  taxonScope: 'Phylum Annelida (Segmented Worms: Polychaetes, Oligochaetes, Leeches)',
  taxonScopeBn: 'অ্যানেলিডা পর্ব (বলয়ী কৃমি: পলিকিট, কেঁচো ও জোঁক)',
  description: 'Authoritative dichotomous key distinguishing the primary classes and canonical species of Phylum Annelida based on chaetae arrangement, clitellum presence/absence, parapodial development, suckers, and cephalic appendages.',
  descriptionBn: 'প্যারাপোডিয়া, কিটি/সিটা, ক্লাইটেলাম, চোষক ও মস্তকীয় উপাঙ্গের ওপর ভিত্তি করে অ্যানেলিডা পর্বের প্রধান দল ও প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-ruppert-2004', 'ref-hickman-2020', 'ref-world-polychaeta-2026'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Parapodia & Setae vs Clitellar Organization',
      titleBn: 'প্যারাপোডিয়া ও সিটা বনাম ক্লাইটেলাম সংগঠন',
      character: 'Presence or absence of fleshy lateral parapodia and a reproductive clitellum',
      characterBn: 'পার্শ্বীয় মাংসল প্যারাপোডিয়া এবং প্রজনন ক্লাইটেলামের উপস্থিতি বা অনুপস্থিতি',
      couplets: [
        {
          lead: 'Lateral unjointed fleshy appendages (parapodia) bearing numerous chitinous chaetae present; distinct cephalic prostomial sensory appendages (tentacles, palps, eyes) typically well developed; reproductive organs temporary; permanent clitellum absent; primarily marine.',
          leadBn: 'বহু কাইটিনযুক্ত কিটি/সিটাবিশিষ্ট মাংসল প্যারাপোডিয়া উপস্থিত; সুগঠিত মস্তকীয় সংবেদী উপাঙ্গ (কর্ষিকা, প্যাল্প, চক্ষু) বিদ্যমান; অস্থায়ী জননাঙ্গ; ক্লাইটেলাম অনুপস্থিত; প্রধানত সামুদ্রিক।',
          diagnosticFeature: 'Class Polychaeta: Parapodia with multiple chaetae, cephalic sensory organs, no clitellum',
          diagnosticFeatureBn: 'শ্রেণি পলিকিটা: প্যারাপোডিয়া, বহু সিটা, মস্তকীয় সংবেদী অঙ্গ, ক্লাইটেলামহীন',
          resultType: 'next_step',
          nextStepId: 2
        },
        {
          lead: 'Parapodia completely absent; chaetae few per segment or entirely absent; cephalic sensory appendages reduced or absent; glandular reproductive collar (clitellum) present during breeding or permanently; hermaphroditic; terrestrial or freshwater.',
          leadBn: 'প্যারাপোডিয়া সম্পূর্ণ অনুপস্থিত; খণ্ডক প্রতি সিটা সংখ্যায় অল্প বা অনুপস্থিত; মস্তকীয় উপাঙ্গ হ্রাসপ্রাপ্ত; প্রজনন ঋতুতে গ্রন্থিময় ক্লাইটেলাম বিদ্যমান; উভলিঙ্গ; স্থলচর বা মিঠাপানির।',
          diagnosticFeature: 'Class Clitellata: Parapodia absent, clitellum present, hermaphroditic',
          diagnosticFeatureBn: 'শ্রেণি ক্লাইটেলাটা: প্যারাপোডিয়াহীন, ক্লাইটেলামযুক্ত, উভলিঙ্গ',
          resultType: 'next_step',
          nextStepId: 4
        }
      ]
    },
    {
      id: 2,
      title: 'Polychaete Habit: Errantia vs Sedentaria',
      titleBn: 'পলিকিট জীবনপ্রণালী: মুক্তজীবী বনাম নালীবাসী/স্থায়ী',
      character: 'Segmental homonomy, mobility, and cephalic/pharyngeal specialization',
      characterBn: 'দৈহিক খণ্ডকের সমরূপতা, চলনক্ষমতা এবং গলবিলীয় বিশেষায়ন',
      couplets: [
        {
          lead: 'Segments essentially homonomous throughout body; large biramous parapodia with protruding acicula and sensory cirri; active free-moving crawler/burrower with eversible muscular pharynx equipped with chitinous pincer-like jaws and paragnaths.',
          leadBn: 'দেহজুড়ে খণ্ডকসমূহ সমরূপ; সুগঠিত দ্বিশাখ প্যারাপোডিয়া ও সংবেদী সিরিযুক্ত; কাইটিন নির্মিত চোয়াল ও প্রোগ্লটিডসমন্বিত পরিবর্তনীয় গলবিলবিশিষ্ট মুক্ত সাঁতারু বা শিকারী।',
          diagnosticFeature: 'Errant polychaete: Homonomous somites, biramous parapodia, dentate eversible proboscis',
          diagnosticFeatureBn: 'মুক্তজীবী পলিকিট: সমরূপ খণ্ডকায়ন, দ্বিশাখ প্যারাপোডিয়া, দাঁতযুক্ত গলবিল',
          resultType: 'species',
          speciesId: 'sp-alitta-virens',
          rationaleEn: 'Resolves to King ragworm (Alitta virens: Nereididae)',
          rationaleBn: 'কিং র্যাগওয়ার্ম (অ্যালিটা ভিরেন্স: নেরিডিডি পরিবার)'
        },
        {
          lead: 'Body segments heteronomous, regionally differentiated into thorax and abdomen; parapodia modified, reduced, or bearing specialized uncini (hooks); tubicolous or sedentary burrowing detritivore or suspension feeder.',
          leadBn: 'দেহ বক্ষ ও উদরে বিভক্ত বিষমরূপ খণ্ডকবিশিষ্ট; প্যারাপোডিয়া হ্রাসপ্রাপ্ত বা হুকযুক্ত; নালীবাসী বা গর্তবাসী তলানিভোজী/ভাসমান খাদ্য সংগ্রহকারী।',
          diagnosticFeature: 'Sedentary polychaetes: Regionally specialized segments, reduced parapodia, specialized burrow/tube',
          diagnosticFeatureBn: 'স্থায়ী পলিকিট: অঞ্চলভিত্তিক বিশেষায়িত খণ্ডক, হ্রাসপ্রাপ্ত প্যারাপোডিয়া',
          resultType: 'next_step',
          nextStepId: 3
        }
      ]
    },
    {
      id: 3,
      title: 'Sedentary Polychaetes: Branchial Crown vs Burrowing Lugworm',
      titleBn: 'স্থায়ী পলিকিট: ফুলকা মুকুট বনাম বালুর গর্তবাসী কৃমি',
      character: 'Presence of anterior tentacular branchial fan vs parapodial branchiae',
      characterBn: 'অগ্রবর্তী ফুলকা মুকুট বনাম মধ্যবর্তী প্যারাপোডিয়াল ফুলকা',
      couplets: [
        {
          lead: 'Anterior prostomium/peristomium transformed into a prominent funnel-shaped or spiraled branchial crown of ciliated pinnate radioles used for suspension feeding and gas exchange; lives inside a flexible membranous mucous-mud tube; body lacks mid-body branched gills.',
          leadBn: 'অগ্রপ্রান্ত খাদ্য গ্রহণ ও শ্বসনের জন্য পালকসদৃশ ফুলকা মুকুটে রূপান্তরিত; নমনীয় শ্লেষ্মা-কাদার নালীর মধ্যে বসবাস করে; দেহের মাঝখানে বহুরূপী ফুলকা অনুপস্থিত।',
          diagnosticFeature: 'Sabellid fanworm: Plumose tentacular crown (radioles), parchment tube',
          diagnosticFeatureBn: 'স্যাবেলিড ফ্যানওয়ার্ম: পালকসদৃশ সংবেদী ফুলকা মুকুট, সুরক্ষানালী',
          resultType: 'species',
          speciesId: 'sp-sabella-spallanzanii',
          rationaleEn: 'Resolves to Mediterranean fanworm (Sabella spallanzanii: Sabellidae)',
          rationaleBn: 'ভূমধ্যসাগরীয় ফ্যানওয়ার্ম (স্যাবেলা স্প্যালানজানি)'
        },
        {
          lead: 'Anterior end lacks a ciliated plumose tentacular crown; stout cylindrical body with thick muscular cuticle; middle abdominal segments bear pairs of red branched tufted gills (branchiae); produces coiled fecal sand casts at burrow entrance.',
          leadBn: 'অগ্রপ্রান্তে পালকযুক্ত মুকুট অনুপস্থিত; স্থূল নলাকার দেহ; মধ্য উদরীয় খণ্ডকসমূহে উজ্জ্বল লাল শাখান্বিত ফুলকা গুচ্ছ বর্তমান; বালুর ওপর কয়েল সদৃশ মল জমা করে।',
          diagnosticFeature: 'Arenicolid lugworm: J-shaped burrower, tufted branchiae on mid-body somites, sand casts',
          diagnosticFeatureBn: 'অ্যারেনিকোলিড লাগওয়ার্ম: মধ্যদেহে ফুলকা গুচ্ছ, বালুর গর্তে বসবাসকারী',
          resultType: 'species',
          speciesId: 'sp-arenicola-marina',
          rationaleEn: 'Resolves to Lugworm (Arenicola marina: Arenicolidae)',
          rationaleBn: 'লাগওয়ার্ম (অ্যারেনিকোলা মারিনা: অ্যারেনিকোলিডি পরিবার)'
        }
      ]
    },
    {
      id: 4,
      title: 'Clitellata: Setae-Bearing Oligochaetes vs Suctorial Leeches',
      titleBn: 'ক্লাইটেলাটা: সিটাবিশিষ্ট অলিগোকিট বনাম চোষকযুক্ত জোঁক',
      character: 'Presence of chaetae and absence of suckers vs complete lack of chaetae and dual suckers',
      characterBn: 'সিটার উপস্থিতি ও চোষকহীনতা বনাম সিটাহীনতা ও উভয় প্রান্তে চোষক',
      couplets: [
        {
          lead: 'Chitinous chaetae (setae) present, typically arranged in four pairs per segment or in bundles; anterior and posterior terminal suckers completely absent; internal metameric septa fully developed; coelomic cavity spacious and fluid-filled.',
          leadBn: 'কাইটিনময় সিটা উপস্থিত, সাধারণত প্রতি খণ্ডকে ৪ জোড়া বা গুচ্ছে বিন্যস্ত; অগ্র ও পশ্চাৎ প্রান্তীয় চোষক অনুপস্থিত; অভ্যন্তরীণ সেপ্টা সুগঠিত; সিলোম তরলপূর্ণ ও প্রশস্ত।',
          diagnosticFeature: 'Subclass Oligochaeta: Chaetae present, suckers absent, fluid hydrostatic coelom',
          diagnosticFeatureBn: 'উপশ্রেণি অলিগোকিটা: সিটা উপস্থিত, চোষক অনুপস্থিত, প্রশস্ত সিলোম',
          resultType: 'next_step',
          nextStepId: 5
        },
        {
          lead: 'Chaetae completely absent; fixed number of 34 true segments obscured externally by numerous secondary superficial annuli; both anterior oral sucker surrounding mouth and large disc-like posterior ventral sucker present; coelom reduced to lacunar channels by botryoidal tissue.',
          leadBn: 'সিটা সম্পূর্ণ অনুপস্থিত; ৩৪টি প্রকৃত খণ্ডক অসংখ্য উপবলয় দ্বারা আবৃত; মুখের চারপাশের অগ্র চোষক এবং প্রশস্ত পশ্চাৎ চোষক বর্তমান; সিলোম বোটিঅয়ডাল কলায় পূর্ণ।',
          diagnosticFeature: 'Subclass Hirudinea: Chaetae absent, 34 segments with annuli, anterior/posterior suckers',
          diagnosticFeatureBn: 'উপশ্রেণি হিরুডিনিয়া: সিটাহীন, ৩৪টি খণ্ডক, অগ্র ও পশ্চাৎ চোষকযুক্ত',
          resultType: 'species',
          speciesId: 'sp-hirudo-medicinalis',
          rationaleEn: 'Resolves to European medicinal leech (Hirudo medicinalis: Hirudinidae)',
          rationaleBn: 'ঔষধি জোঁক (হিরুডো মেডিসিনালিস: হিরুডিনিডি পরিবার)'
        }
      ]
    },
    {
      id: 5,
      title: 'Oligochaeta: Slender Aquatic Sludge Worms vs Terrestrial Earthworms',
      titleBn: 'অলিগোকিটা: সরু জলজ স্লাজ ওয়ার্ম বনাম স্থলচর কেঁচো',
      character: 'Aquatic habit with dorsal hair chaetae vs terrestrial habit with paired lumbricine setae',
      characterBn: 'পৃষ্ঠীয় লোমশ সিটাযুক্ত জলজ জীবন বনাম জোড়াবদ্ধ সিটাযুক্ত স্থলচর জীবন',
      couplets: [
        {
          lead: 'Delicate, slender reddish-pink freshwater aquatic worm up to 2-8 cm; dorsal chaetal bundles contain both hair-like and pectinate capilliform setae; colonial mud-dwelling detritivore in anaerobic sediments with posterior body undulating for cutaneous respiration.',
          leadBn: 'সূক্ষ্ম, সরু লালচে-গোলাপি মিঠাপানির জলজ কৃমি (২-৮ সেমি); পৃষ্ঠীয় কিটি গুচ্ছে চুলসদৃশ ও চিরুনিসদৃশ সিটা থাকে; কাদামাটিতে নালীবদ্ধ কলোনি তৈরি করে শ্বসনের জন্য লেজ নাড়ায়।',
          diagnosticFeature: 'Family Naididae (Tubificinae): Aquatic, hair-like dorsal chaetae, tail-undulating sludge dweller',
          diagnosticFeatureBn: 'পারিবারিক নাইডিডি (টিউবিফিসিন): জলজ, লোমসদৃশ পৃষ্ঠীয় সিটা, লেজ আন্দোলনকারী',
          resultType: 'species',
          speciesId: 'sp-tubifex-tubifex',
          rationaleEn: 'Resolves to Tubifex worm / Sludge worm (Tubifex tubifex: Naididae)',
          rationaleBn: 'টিউবিফেক্স কৃমি / স্লাজ ওয়ার্ম (টিউবিফেক্স টিউবিফেক্স: নাইডিডি পরিবার)'
        },
        {
          lead: 'Robust cylindrical terrestrial earthworms; chaetae simple, strictly 4 pairs (8 setae) per segment without hair setae; well-developed muscular gizzard, dorsal blood vessel, and conspicuous permanent or seasonal glandular clitellum across multiple segments.',
          leadBn: 'স্থূল নলাকার স্থলচর কেঁচো; প্রতি খণ্ডকে ৪ জোড়া (৮টি) সাধারণ সিটা থাকে, চুলসদৃশ সিটা নেই; পেশল গিজার্ড ও সুনির্দিষ্ট ক্লাইটেলাম বিদ্যমান।',
          diagnosticFeature: 'Family Lumbricidae: Terrestrial megadriles, 8 setae per somite, muscular gizzard',
          diagnosticFeatureBn: 'লুম্ব্রিসিডি পরিবার: স্থলচর মেগাড্রিল, প্রতি খণ্ডকে ৮টি সিটা, পেশল গিজার্ড',
          resultType: 'next_step',
          nextStepId: 6
        }
      ]
    },
    {
      id: 6,
      title: 'Lumbricidae Earthworms: Deep Anecic Burrower vs Epigeic Tiger Worm',
      titleBn: 'লুম্ব্রিসিডি কেঁচো: গভীর গর্তবাসী বনাম পৃষ্ঠীয় কম্পোস্ট কেঁচো',
      character: 'Clitellum position, tubercula pubertatis, coloration, and burrowing tier',
      characterBn: 'ক্লাইটেলামের খণ্ডক অবস্থান, টিউবারকুলা পিউবারটাটিস, বর্ণ ও বাসস্থল',
      couplets: [
        {
          lead: 'Large anecic deep-burrowing earthworm (15-30 cm); uniform cylindrical body with reddish-brown to violet anterior dorsum and flattened spatulate paddle-like posterior end; clitellum saddle-shaped occupying segments 31/32 to 37; tubercula pubertatis on segments 33-36.',
          leadBn: 'বৃহৎ গভীর গর্তবাসী কেঁচো (১৫-৩০ সেমি); লালচে-বাদামি অগ্রভাগ ও চ্যাপ্টা বৈঠাসদৃশ পশ্চাৎভাগ; ক্লাইটেলাম ৩১/৩২ থেকে ৩৭তম খণ্ডকে বিস্তৃত; টিউবারকুলা ৩৩-৩৬ খণ্ডকে।',
          diagnosticFeature: 'Lumbricus terrestris: Clitellum 31/32-37, tubercula pubertatis 33-36, spatulate tail, anecic',
          diagnosticFeatureBn: 'লুমব্রিকাস টেরেস্ট্রিস: ক্লাইটেলাম ৩১/৩২-৩৭, টিউবারকুলা ৩৩-৩৬, বৈঠাকৃতি লেজ',
          resultType: 'species',
          speciesId: 'sp-lumbricus-terrestris',
          rationaleEn: 'Resolves to Common earthworm / Nightcrawler (Lumbricus terrestris: Lumbricidae)',
          rationaleBn: 'সাধারণ কেঁচো (লুমব্রিকাস টেরেস্ট্রিস: লুম্ব্রিসিডি পরিবার)'
        },
        {
          lead: 'Medium-sized epigeic surface/compost earthworm (6-13 cm); distinct alternating yellowish-buff and purplish-brown transverse intersegmental banding (tiger striping); clitellum saddle-shaped occupying segments 24/25/26 to 32; tubercula pubertatis on segments 28-30/31; exudes pungent yellow coelomic fluid when handled.',
          leadBn: 'মাঝারি পৃষ্ঠীয় কম্পোস্ট কেঁচো (৬-১৩ সেমি); হলুদ ও রক্তিম বাদামি সুস্পষ্ট ডোরাকাটা বা বাঘের মতো দাগ; ক্লাইটেলাম ২৪-৩২ খণ্ডকে; বিরক্ত করলে ঝাঁঝালো হলুদ তরল নিঃসরণ করে।',
          diagnosticFeature: 'Eisenia fetida: Clitellum 24/26-32, tubercula pubertatis 28-30, transverse tiger stripes, pungent coelomic fluid',
          diagnosticFeatureBn: 'আইসেনিয়া ফেটিডা: ক্লাইটেলাম ২৪/২৬-৩২, ডোরাকাটা দাগ, হলুদ আত্মরক্ষামূলক তরল',
          resultType: 'species',
          speciesId: 'sp-eisenia-fetida',
          rationaleEn: 'Resolves to Red wiggler / Tiger worm (Eisenia fetida: Lumbricidae)',
          rationaleBn: 'লাল কেঁচো / টাইগার ওয়ার্ম (আইসেনিয়া ফেটিডা: লুম্ব্রিসিডি পরিবার)'
        }
      ]
    }
  ]
};
