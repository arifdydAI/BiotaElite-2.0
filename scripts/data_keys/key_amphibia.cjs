// Key 8: Global Diagnostic Key to the Orders & Canonical Species of Living Amphibia
// Comprehensive expansion resolving all 9 canonical Amphibia species (including newly added Duttaphrynus melanostictus).

module.exports = {
  id: 'key-global-amphibia-orders',
  title: 'Diagnostic Key to Orders & Canonical Species of Living Amphibia',
  titleBn: 'উভচর শ্রেণির জীবিত বর্গ ও প্রামাণ্য প্রজাতির শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-amphibia',
  majorGroup: 'amphibia',
  taxonScope: 'Class Amphibia (Caecilians, Salamanders, Frogs & Toads)',
  taxonScopeBn: 'অ্যাম্ফিবিয়া বা উভচর শ্রেণি (সিসিলিয়ান, স্যালামান্ডার, ব্যাঙ)',
  description: 'Authoritative dichotomous key distinguishing the three extant amphibian orders (Gymnophiona, Caudata, Anura) and their canonical representative species through limbless fossorial body, persistent tail, neotenic gills, parotoid glands, and cranial ridge morphology.',
  descriptionBn: 'পদহীন সিসিলিয়ান, লেজযুক্ত স্যালামান্ডার ও লেজহীন ব্যাঙের ৩টি বর্গ এবং ৯টি প্রামাণ্য উভচর প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-amphibiaweb-2026', 'ref-kardong-2018', 'ref-hickman-2020'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Limbs and Body Plan: Limbless Caecilians vs Tetrapod Amphibians',
      titleBn: 'পদ ও শারীরিক গঠন: পদহীন সিসিলিয়ান বনাম চতুস্পদী উভচর',
      character: 'Limbless worm-like body with dermal annuli vs two pairs of limbs (tetrapod)',
      characterBn: 'উপবলয়যুক্ত পদহীন কৃমিসদৃশ দেহ বনাম দুই জোড়া পদযুক্ত চতুস্পদী দেহ',
      couplets: [
        {
          lead: 'Order Gymnophiona (Caecilians): Completely limbless, elongated, cylindrical, serpentine or worm-like body adapted for subterranean fossorial burrowing; dermal folds (annuli) encircle body containing embedded microscopic dermal scales; eyes vestigial and skin-covered; specialized sensory tentacle between eye and nostril; tail short or absent.',
          leadBn: 'জিমনোফিওনা বর্গ (সিসিলিয়ান): সম্পূর্ণ পদহীন, মাটিতে গর্ত খুঁড়ে বাস করার উপযোগী নলাকার শরীর; চামড়ার ভাঁজে আণুবীক্ষণিক অস্থিকা লুকানো থাকে; চোখ ত্বক দ্বারা ঢাকা; সংবেদী কর্ষিকা বিদ্যমান; লেজ ক্ষুদ্র বা নেই।',
          diagnosticFeature: 'Ichthyophis bannanicus: Limbless, 300+ annuli, lateral yellow stripe, subterranean fossorial',
          diagnosticFeatureBn: 'ইকথায়োফিস বান্নানিকাস: পদহীন সিসিলিয়ান, হলুদ পার্শ্বীয় দাগ, গর্তবাসী',
          resultType: 'species',
          speciesId: 'sp-ichthyophis-bannanicus',
          rationaleEn: 'Resolves to Banna caecilian (Ichthyophis bannanicus: Ichthyophiidae)',
          rationaleBn: 'বান্না সিসিলিয়ান (ইকথায়োফিস বান্নানিকাস: ইকথায়োফিডি পরিবার)'
        },
        {
          lead: 'Tetrapod amphibians possessing two pairs of well-developed ambulatory limbs (forelimbs and hindlimbs); pectoral and pelvic girdles present; eyes large and functional.',
          leadBn: 'দুই জোড়া সুগঠিত চলন পদযুক্ত (অগ্র ও পশ্চাৎ পদ) চতুস্পদী উভচর; বক্ষ ও শ্রোণী অস্থিচক্র বিদ্যমান; চোখ উন্মুক্ত ও কার্যকরী।',
          diagnosticFeature: 'Tetrapod Amphibia: Caudata (Salamanders) & Anura (Frogs & Toads)',
          diagnosticFeatureBn: 'চতুস্পদী উভচর: কডাটা (স্যালামান্ডার) ও অ্যানুরা (ব্যাঙ)',
          resultType: 'next_step',
          nextStepId: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Adult Tail Retention: Caudata vs Anura',
      titleBn: 'লেজের স্থায়িত্ব: কডাটা (লেজযুক্ত) বনাম অ্যানুরা (লেজহীন ব্যাঙ)',
      character: 'Retention of prominent caudal tail in adults with equal limbs vs absence of tail in saltatorial adults',
      characterBn: 'প্রাপ্তবয়স্কদের লেজ অক্ষুণ্ন থাকা ও সমান পদ বনাম লেজহীন শরীর ও দীর্ঘ লাফানোর পা',
      couplets: [
        {
          lead: 'Order Caudata (Urodela): Adults possess a long, prominent, well-developed tail throughout life; limbs short and roughly equal in length, held horizontally at right angles to trunk; skull lacks otic notch and eardrum (tympanum); body cylindrical with distinct costal grooves.',
          leadBn: 'কডাটা বর্গ (স্যালামান্ডার): প্রাপ্তবয়স্ক দশাতেও আজীবন দীর্ঘ লেজ অক্ষুণ্ন থাকে; চারটি পা প্রায় সমান দৈর্ঘ্যের; কানের পর্দা বা টিম্প্যানাম নেই; পাঁজরে স্পষ্ট খাঁজ থাকে।',
          diagnosticFeature: 'Order Caudata: Persistent adult tail, roughly equal limbs, costal grooves',
          diagnosticFeatureBn: 'কডাটা বর্গ: আজীবন লেজযুক্ত স্যালামান্ডার, প্রায় সমান পা',
          resultType: 'next_step',
          nextStepId: 3
        },
        {
          lead: 'Order Anura (Salientia): Adults completely lack a tail (coccyx vertebrae fused into a rigid internal rod, the urostyle); body short, robust, tailless, and compact; hindlimbs greatly elongated and powerful with webbed feet modified for leaping (saltation) and swimming; tympanic membrane usually conspicuous behind eye.',
          leadBn: 'অ্যানুরা বর্গ (ব্যাঙ): প্রাপ্তবয়স্কদের লেজ সম্পূর্ণ অনুপস্থিত (লেজের কশেরুকা মিলে শক্ত ইউরোস্টাইল গঠন করে); দেহ চওড়া ও লেজহীন; পেছনের পা দুটি লাফানো ও সাঁতারের জন্য অত্যন্ত লম্বা ও পেশিবহুল; চোখের পেছনে টিম্প্যানাম পর্দা স্পষ্ট।',
          diagnosticFeature: 'Order Anura: Tailless adults, urostyle, elongated saltatorial hindlimbs, tympanum',
          diagnosticFeatureBn: 'অ্যানুরা বর্গ: লেজহীন ব্যাঙ, ইউরোস্টাইল, দীর্ঘ লাফানোর পা, টিম্প্যানাম',
          resultType: 'next_step',
          nextStepId: 4
        }
      ]
    },
    {
      id: 3,
      title: 'Order Caudata: Terrestrial Warning Coloration vs Neotenic Gills',
      titleBn: 'কডাটা বর্গ: স্থলচর সতর্কতাকারী স্যালামান্ডার বনাম জলজ চির-লার্ভা অ্যাক্সোলট্ল',
      character: 'Fully metamorphosed adult with yellow-black aposematic blotches vs neotenic retaining bushy external gills',
      characterBn: 'হলুদ-কালো আত্মরক্ষামূলক দাগযুক্ত স্থলচর বনাম আজীবন বহিস্থ লাল ফুলকাযুক্ত অ্যাক্সোলট্ল',
      couplets: [
        {
          lead: 'Metamorphosed terrestrial adult; lungs functional, external gills completely lost; cylindrical black body decorated boldly with vibrant bright yellow or orange spots and longitudinal blotches (aposematic warning coloration); parotoid glands behind eyes secrete toxic neurotoxic samandarin alkaloids.',
          leadBn: 'রূপান্তরিত স্থলচর স্যালামান্ডার; ফুলকা বিলুপ্ত ও ফুসফুস কার্যকরী; কালো চামড়ায় উজ্জ্বল হলুদ দাগ (বিষাক্ততার সংকেত); বিষাক্ত সামানডারিন ক্ষরণকারী প্যারোটয়েড গ্রন্থিযুক্ত।',
          diagnosticFeature: 'Salamandra salamandra: Terrestrial metamorphosed adult, vivid yellow/black aposematism, samandarin',
          diagnosticFeatureBn: 'স্যালামান্ড্রা স্যালামান্ড্রা: ফায়ার স্যালামান্ডার, হলুদ-কালো দাগ, প্যারোটয়েড গ্রন্থি',
          resultType: 'species',
          speciesId: 'sp-salamandra-salamandra',
          rationaleEn: 'Resolves to Fire salamander (Salamandra salamandra: Salamandridae)',
          rationaleBn: 'ফায়ার স্যালামান্ডার (স্যালামান্ড্রা স্যালামান্ড্রা: স্যালামান্ড্রিডি পরিবার)'
        },
        {
          lead: 'Obligate neotenic/paedomorphic aquatic salamander; fails to metamorphose under natural conditions, retaining larval traits into sexual maturity: 3 pairs of prominent, bushy external red feathery gills behind head and a persistent broad dorsal/caudal fin; extraordinary capacity to regenerate entire limbs, heart, and spinal cord.',
          leadBn: 'চির-লার্ভা বা নিওটেনিক জলজ স্যালামান্ডার; রূপান্তর ঘটে না ফলে প্রাপ্তবয়স্ক অবস্থাতেও মাথার পেছনে ৩ জোড়া লালচে পালকসদৃশ বহিস্থ ফুলকা ও লেজের পাখনা থাকে; হারানো অঙ্গ পুনরুৎপাদনে শীর্ষ মডেল।',
          diagnosticFeature: 'Ambystoma mexicanum: Neotenic aquatic adult, 3 pairs external bushy gills, caudal fin, limb regeneration',
          diagnosticFeatureBn: 'অ্যাম্বিস্টোমা মেক্সিকানাম: অ্যাক্সোলট্ল, ৩ জোড়া বহিস্থ লাল ফুলকা, অঙ্গ পুনরুৎপাদন',
          resultType: 'species',
          speciesId: 'sp-ambystoma-mexicanum',
          rationaleEn: 'Resolves to Axolotl (Ambystoma mexicanum: Ambystomatidae)',
          rationaleBn: 'অ্যাক্সোলট্ল (অ্যাম্বিস্টোমা মেক্সিকানাম: অ্যাম্বিস্টোমাটিডি পরিবার)'
        }
      ]
    },
    {
      id: 4,
      title: 'Order Anura: Warty Toads with Parotoids vs Smooth-Skinned / Toxic Frogs',
      titleBn: 'অ্যানুরা বর্গ: প্যারোটয়েডযুক্ত কুনোব্যাঙ বনাম মসৃণ ত্বক ও বিষাক্ত ডার্ট ফ্রগ',
      character: 'Thick dry warty skin with large parotoid glands behind eyes vs smooth/glandular skin without prominent parotoid glands',
      characterBn: 'প্যারোটয়েড গ্রন্থি ও আঁচিলযুক্ত খসখসে চামড়া বনাম মসৃণ ত্বক বা উজ্জ্বল বিষাক্ত ডার্ট ফ্রগ',
      couplets: [
        {
          lead: 'Family Bufonidae (True Toads): Heavy, robust terrestrial body; skin thick, dry, and heavily covered in elevated glandular warts/tubercles; large, conspicuous paired parotoid glands located immediately behind eyes secreting defensive bufotoxins; teeth completely absent from jaws; short hopping hindlimbs.',
          leadBn: 'বুফোনিডি পরিবার (কুনোব্যাঙ): মোটা ও ভারী শরীর; চামড়া পুরু, শুষ্ক এবং অসংখ্য উঁচু আঁচিলে ভরা; চোখের পেছনে বিষাক্ত বাফোটক্সিন ক্ষরণকারী একজোড়া বৃহৎ প্যারোটয়েড গ্রন্থি; চোয়ালে দাঁত নেই।',
          diagnosticFeature: 'Family Bufonidae: Parotoid glands behind eyes, warty skin, toothless jaws, short terrestrial legs',
          diagnosticFeatureBn: 'বুফোনিডি পরিবার (কুনোব্যাঙ): প্যারোটয়েড গ্রন্থি, আঁচিলযুক্ত ত্বক, দাঁতহীন চোয়াল',
          resultType: 'next_step',
          nextStepId: 5
        },
        {
          lead: 'Skin moist, smooth, or with narrow longitudinal glandular ridges; prominent elevated parotoid glands absent; teeth present on upper jaw (maxillary teeth) and vomerine bones; leaping legs long and powerful, or exhibiting extreme toxic aposematic coloration.',
          leadBn: 'চামড়া ভেজা, মসৃণ বা লম্বা খাঁজযুক্ত; সুস্পষ্ট প্যারোটয়েড গ্রন্থি নেই; উপরের চোয়ালে ম্যাক্সিলারি দাঁত ও ভোমারাইন দাঁত উপস্থিত; লম্বা লাফানোর পা বা উজ্জ্বল বিষাক্ত দেহ।',
          diagnosticFeature: 'Non-bufonid anurans: Dendrobatidae, Ranidae, Dicroglossidae',
          diagnosticFeatureBn: 'অন্যান্য অ্যানুরান: ডেনড্রোবেটিডি, রানিডি, ডাইক্রোগ্লসিডি',
          resultType: 'next_step',
          nextStepId: 6
        }
      ]
    },
    {
      id: 5,
      title: 'Family Bufonidae: Cranial Ridges and Tubercles',
      titleBn: 'বুফোনিডি পরিবার: মস্তকীয় খাঁজ (ক্রেনিয়াল রিজ) এবং আঁচিল',
      character: 'Prominent black-cornified cranial ridges vs smooth unridged head',
      characterBn: 'কালো খাঁজযুক্ত মস্তকীয় ক্রেস্ট বনাম খাঁজহীন মসৃণ মাথার কুনোব্যাঙ',
      couplets: [
        {
          lead: 'Prominent, elevated bony cranial ridges (canthal, preorbital, supraorbital, postorbital) heavily lined with black cornified keratinous spinules; kidney-shaped parotoid glands immediately behind postorbital ridges; warts capped with sharp dark spines; the ubiquitous Asian toad.',
          leadBn: 'মাথার ওপর কালো রঙের খাঁজকাটা উঁচু হাড়ের শৈলশিরা (ক্রেনিয়াল রিজ) সুস্পষ্ট; প্যারোটয়েড গ্রন্থি বৃক্কাকার; পিঠের আঁচিলগুলোর ডগায় কালো কাঁটা থাকে; এশিয়ার সাধারণ কুনোব্যাঙ।',
          diagnosticFeature: 'Duttaphrynus melanostictus: Black cornified cranial ridges, reniform parotoids, black-spined warts, common Asian toad',
          diagnosticFeatureBn: 'দত্তাফ্রাইনাস মেলানোস্টিকটাস: কালো খাঁজযুক্ত কুনোব্যাঙ, বৃক্কাকার প্যারোটয়েড',
          resultType: 'species',
          speciesId: 'sp-duttaphrynus-melanostictus',
          rationaleEn: 'Resolves to Asian common toad / Black-spined toad (Duttaphrynus melanostictus: Bufonidae)',
          rationaleBn: 'কুনোব্যাঙ (দত্তাফ্রাইনাস মেলানোস্টিকটাস: বুফোনিডি পরিবার)'
        },
        {
          lead: 'Crown of head completely flat and smooth, completely lacking elevated bony cranial ridges; parotoid glands large, prominent, and slightly diverging posteriorly; skin brownish-grey with rounded, blunt non-spiny warts; classic European common toad.',
          leadBn: 'মাথার ওপর কোনো উঁচু হাড়ের খাঁজ বা ক্রেনিয়াল রিজ নেই; প্যারোটয়েড গ্রন্থি দুটি পেছনের দিকে কিছুটা ছড়ানো; ভোঁতা আঁচিলযুক্ত বাদামি ত্বক; ইউরোপের সাধারণ কুনোব্যাঙ।',
          diagnosticFeature: 'Bufo bufo: No cranial ridges, large diverging parotoids, blunt non-cornified warts',
          diagnosticFeatureBn: 'বুফো বুফো: ক্রেনিয়াল রিজহীন, ভোঁতা আঁচিল, ইউরোপিয়ান কুনোব্যাঙ',
          resultType: 'species',
          speciesId: 'sp-bufo-bufo',
          rationaleEn: 'Resolves to Common toad (Bufo bufo: Bufonidae)',
          rationaleBn: 'ইউরোপিয়ান কুনোব্যাঙ (বুফো বুফো: বুফোনিডি পরিবার)'
        },
        {
          lead: 'Cranial ridges present but delicate and low, joining in a distinctive postorbital spur; dorsal skin with dark blotches that each enclose only 1 or 2 large warts; enlarged warty tibia.',
          leadBn: 'মাথায় নিচু সূক্ষ্ম খাঁজ থাকে; পিঠের প্রতিটি কালো ছোপের ভেতরে কেবল ১ বা ২টি বড় আঁচিল থাকে; আমেরিকার সাধারণ কুনোব্যাঙ।',
          diagnosticFeature: 'Anaxyrus americanus: Low cranial ridges with spurs, dark spots enclosing 1-2 warts',
          diagnosticFeatureBn: 'অ্যানাক্সাইরাস আমেরিক্যানাস: অ্যামেরিকান কুনোব্যাঙ, ছোপে ১-২টি আঁচিল',
          resultType: 'species',
          speciesId: 'sp-anaxyrus-americanus',
          rationaleEn: 'Resolves to American toad (Anaxyrus americanus: Bufonidae)',
          rationaleBn: 'আমেরিকান কুনোব্যাঙ (অ্যানাক্সাইরাস আমেরিক্যানাস: বুফোনিডি পরিবার)'
        }
      ]
    },
    {
      id: 6,
      title: 'Toxic Aposematic Dart Frog vs Large Semiaquatic True Frogs',
      titleBn: 'বিষাক্ত ডার্ট ফ্রগ বনাম বৃহৎ জলজ ট্রু ফ্রগ',
      character: 'Minute vibrant blue-black skin with alkaloid batrachotoxins vs large camouflaged frogs with long webbed leaping legs',
      characterBn: 'নীল-কালো উজ্জ্বল বিষাক্ত ডার্ট ফ্রগ বনাম ছদ্মবেশী সবুজ-বাদামি বৃহৎ শিকারী ব্যাঙ',
      couplets: [
        {
          lead: 'Small diurnal Neotropical frog (3-5 cm); skin smooth and saturated with vibrant aposematic warning coloration (deep sapphire blue limbs with black dorsal blotches); granular skin glands secrete potent alkaloid neurotoxins historically used by indigenous hunters on blowgun darts; fingers with adhesive pads.',
          leadBn: 'ক্ষুদ্র উজ্জ্বল রঙের দিবাচর ব্যাঙ (৩-৫ সেমি); নীল ও কালো রঙের উজ্জ্বল সতর্কতা ত্বক; চামড়া থেকে তীব্র বিষাক্ত অ্যালকালয়েড নিঃসৃত হয় যা শিকারের বিষতীরে ব্যবহৃত হতো; আঙুলে প্যাডযুক্ত।',
          diagnosticFeature: 'Dendrobates tinctorius: Vibrant blue/black aposematism, alkaloid toxins, digital scutes, diurnal',
          diagnosticFeatureBn: 'ডেনড্রোবেটস টিঙ্কটোরিয়াস: বিষাক্ত ডার্ট ফ্রগ, নীল-কালো বর্ণ, অ্যালকালয়েড বিষ',
          resultType: 'species',
          speciesId: 'sp-dendrobates-tinctorius',
          rationaleEn: 'Resolves to Dyeing poison dart frog (Dendrobates tinctorius: Dendrobatidae)',
          rationaleBn: 'পয়জন ডার্ট ফ্রগ (ডেনড্রোবেটস টিঙ্কটোরিয়াস: ডেনড্রোবেটিডি পরিবার)'
        },
        {
          lead: 'Large, robust, camouflaged semiaquatic predatory frogs; skin olive-green or brown; powerful elongated hindlimbs with extensively webbed toes adapted for explosive leaping and deep swimming.',
          leadBn: 'বৃহৎ ছদ্মবেশী জলজ শিকারী ব্যাঙ; জলপাই-সবুজ বা বাদামি চামড়া; পানিতে সাঁতার কাটা ও লাফানোর জন্য পেছনের পায়ে প্রশস্ত লিপ্তপদী পর্দা।',
          diagnosticFeature: 'Semiaquatic True Frogs: Ranidae & Dicroglossidae',
          diagnosticFeatureBn: 'জলজ শিকারী ব্যাঙ: রানিডি ও ডাইক্রোগ্লসিডি',
          resultType: 'next_step',
          nextStepId: 7
        }
      ]
    },
    {
      id: 7,
      title: 'Ranidae vs Dicroglossidae: Bullfrog vs Indus Valley Bullfrog',
      titleBn: 'রানিডি বনাম ডাইক্রোগ্লসিডি: আমেরিকান বুলফ্রগ বনাম কোলাব্যাঙ / সোনাব্যাঙ',
      character: 'Huge flat tympanum exceeding eye without dorsolateral folds vs longitudinal glandular ridges with yellow dorsal stripe',
      characterBn: 'চোখের চেয়ে বড় টিম্প্যানাম ও ভাঁজহীন ত্বক বনাম পিঠে দৈর্ঘ্য বরাবর উঁচু চামড়ার খাঁজ ও হলুদ ডোরা',
      couplets: [
        {
          lead: 'Enormous heavy-bodied North American aquatic frog up to 20 cm; dorsolateral glandular folds completely absent along back; tympanum enormous, equal to eye in females and significantly larger than eye in males; deep booming bull-like mating bellow.',
          leadBn: 'উত্তর আমেরিকার বিশালাকার ভারী ব্যাঙ (২০ সেমি); পিঠের দুই পাশে কোনো চামড়ার ভাঁজ নেই; পুরুষের কানের পর্দা (টিম্প্যানাম) চোখের চেয়েও অনেক বড়; ষাঁড়ের মতো ডাক।',
          diagnosticFeature: 'Lithobates catesbeianus: Enormous tympanum exceeding eye, no dorsolateral folds, giant aquatic',
          diagnosticFeatureBn: 'লিথোবেটস ক্যাটসবেইয়ানাস: আমেরিকান বুলফ্রগ, বিশাল টিম্প্যানাম, ভাঁজহীন পিঠ',
          resultType: 'species',
          speciesId: 'sp-lithobates-catesbeianus',
          rationaleEn: 'Resolves to American bullfrog (Lithobates catesbeianus: Ranidae)',
          rationaleBn: 'আমেরিকান বুলফ্রগ (লিথোবেটস ক্যাটসবেইয়ানাস: রানিডি পরিবার)'
        },
        {
          lead: 'Large robust South Asian semiaquatic frog up to 15-17 cm; dorsum marked with multiple prominent, raised longitudinal glandular skin folds running from neck to vent; often bears a narrow pale yellow or cream vertebral line down midline; breeding males turn electric yellow with bright blue vocal sacs; iconic Kolabang of Bangladesh.',
          leadBn: 'দক্ষিণ এশিয়ার পরিচিত কোলাব্যাঙ বা সোনাব্যাঙ (১৫-১৭ সেমি); পিঠজুড়ে দৈর্ঘ্য বরাবর একাধিক উঁচু চামড়ার খাঁজ থাকে; প্রজননকালে পুরুষ উজ্জ্বল হলুদ বর্ণ ধারণ করে ও নীল স্বরথলি ফোলায়।',
          diagnosticFeature: 'Hoplobatrachus tigerinus: Prominent longitudinal skin folds, yellow breeding morph in males, blue vocal sacs',
          diagnosticFeatureBn: 'হপ্লোব্যাট্রাকাস টাইগারিনাস: কোলাব্যাঙ / সোনাব্যাঙ, পিঠে চামড়ার খাঁজ, হলুদ বর্ণ',
          resultType: 'species',
          speciesId: 'sp-hoplobatrachus-tigerinus',
          rationaleEn: 'Resolves to Indus Valley bullfrog / Tiger frog (Hoplobatrachus tigerinus: Dicroglossidae)',
          rationaleBn: 'কোলাব্যাঙ / সোনাব্যাঙ (হপ্লোব্যাট্রাকাস টাইগারিনাস: ডাইক্রোগ্লসিডি পরিবার)'
        }
      ]
    }
  ]
};
