// Key 4: Global Diagnostic Key to Marine Sponges, Cnidarians & Comb Jellies
// Comprehensive expansion resolving all 19 canonical Porifera, Cnidaria & Ctenophora species.

module.exports = {
  id: 'key-global-sponges-cnidarians',
  title: 'Diagnostic Key to Marine Sponges, Cnidarians & Comb Jellies',
  titleBn: 'সামুদ্রিক স্পঞ্জ, নিডারিয়ান ও কম্ব জেলি শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-animalia',
  majorGroup: 'invertebrates',
  taxonScope: 'Porifera, Cnidaria & Ctenophora (Non-bilaterian Metazoans)',
  taxonScopeBn: 'পরিফেরা, নিডারিয়া ও টিনোফোরা পর্ব (অদ্বিপার্শ্বীয় প্রাণী)',
  description: 'Authoritative diagnostic dichotomous key differentiating basal metazoan phyla and their representative canonical species through skeletal mineralogy, cnidocyte presence, ciliary ctene rows, and morphological architecture.',
  descriptionBn: 'কঙ্কাল গঠন, নিডোসাইট দংশক কোষ, সিলিয়ারি কম্ব প্লেট ও শারীরিক সংগঠনের ওপর ভিত্তি করে স্পঞ্জ, নিডারিয়া ও কম্ব জেলির প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-hickman-2020', 'ref-ruppert-2004', 'ref-world-porifera-2024'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Major Basal Phylum Determination',
      titleBn: 'প্রাথমিক ভিত্তি পর্ব নির্ধারণ',
      character: 'Presence of porous water canal system, cnidocyte tentacles, or ciliated ctene rows',
      characterBn: 'ছিদ্রাল সংবহন নালী, নিডোসাইটযুক্ত কর্ষিকা বা সিলিয়ারি কম্ব প্লেট',
      couplets: [
        {
          lead: 'Asymmetrical or superficial radial body with porous outer walls (ostia) and one or more large excurrent oscula; inner chambers lined by flagellated collar cells (choanocytes); lacking true tissues, gastrovascular cavity, and nervous system; internal skeleton of spicules or spongin.',
          leadBn: 'অপ্রতিসম বা অগভীর অরীয় দেহ যাতে অসটিয়া ও অস্কুলাম ছিদ্র বিদ্যমান; ভেতরের প্রকোষ্ঠে চোয়ানোসাইট কোষ উপস্থিত; প্রকৃত কলা বা স্নায়ুতন্ত্র নেই; স্পিকিউল বা স্পঞ্জিন কঙ্কাল।',
          diagnosticFeature: 'Phylum Porifera: Cellular grade, choanocytes, ostia/oscula canal system',
          diagnosticFeatureBn: 'পরিফেরা পর্ব: কোষীয় সংগঠন, চোয়ানোসাইট, নালীতন্ত্র',
          resultType: 'next_step',
          nextStepId: 2
        },
        {
          lead: 'Radially or biradially symmetrical eumetazoans with distinct tissue layers separated by mesoglea; possessing an internal gastrovascular cavity with an oral opening and sensory/nervous network.',
          leadBn: 'মেসোগ্লিয়া দ্বারা পৃথক প্রকৃত কলাস্তরযুক্ত অরীয় বা দ্বি-অরীয় প্রাণী; মুখ ও স্নায়ুজালিকাযুক্ত অভ্যন্তরীণ গ্যাস্ট্রোভাস্কুলার গহ্বর উপস্থিত।',
          diagnosticFeature: 'Radiate Eumetazoans: True tissues, gastrovascular cavity, nerve net',
          diagnosticFeatureBn: 'রেডিয়াটা ইউমেটাজোয়া: প্রকৃত কলা, গ্যাস্ট্রোভাস্কুলার গহ্বর, স্নায়ুজাল',
          resultType: 'next_step',
          nextStepId: 5
        }
      ]
    },
    {
      id: 2,
      title: 'Porifera: Skeletal Architecture & Spicule Mineralogy',
      titleBn: 'পরিফেরা: কঙ্কাল গঠন ও স্পিকিউলের উপাদান',
      character: 'Calcium carbonate spicules vs siliceous spicules or spongin fibers',
      characterBn: 'ক্যালসিয়াম কার্বনেট স্পিকিউল বনাম সিলিকা স্পিকিউল বা স্পঞ্জিন তন্তু',
      couplets: [
        {
          lead: 'Skeletal spicules composed exclusively of calcium carbonate (calcite), 1-, 3-, or 4-rayed; body structure asconoid, syconoid, or leuconoid; strictly marine.',
          leadBn: 'কঙ্কাল শুধুমাত্র ক্যালসিয়াম কার্বনেট (ক্যালসাইট) নির্মিত ১, ৩ বা ৪-রশ্মিবিশিষ্ট স্পিকিউল দ্বারা গঠিত; আসকোনয়েড বা সাইকোনয়েড কাঠামো; সম্পূর্ণ সামুদ্রিক।',
          diagnosticFeature: 'Class Calcarea: Calcareous spicules, strictly marine',
          diagnosticFeatureBn: 'ক্যালকেরিয়া শ্রেণি: চুনযুক্ত স্পিকিউল, সামুদ্রিক',
          resultType: 'next_step',
          nextStepId: 3
        },
        {
          lead: 'Skeletal spicules composed of hydrated amorphous silica (silicon dioxide), or skeleton formed of fibrous organic spongin network, or a combination of both; never calcareous.',
          leadBn: 'কঙ্কাল হাইড্রেটেড সিলিকা দ্বারা গঠিত স্পিকিউল, বা কোলাজেনাস স্পঞ্জিন তন্তুর জালক, বা উভয়ের সমন্বয়ে গঠিত; চুনবিহীন।',
          diagnosticFeature: 'Siliceous & Spongin Sponges: Hexactinellida & Demospongiae',
          diagnosticFeatureBn: 'সিলিকা ও স্পঞ্জিন স্পঞ্জ: হেক্সাক্টিনেলিডা ও ডেমোস্পঞ্জিয়া',
          resultType: 'next_step',
          nextStepId: 4
        }
      ]
    },
    {
      id: 3,
      title: 'Class Calcarea: Asconoid vs Syconoid Architecture',
      titleBn: 'ক্যালকেরিয়া শ্রেণি: আসকোনয়েড বনাম সাইকোনয়েড গঠন',
      character: 'Simple tubular branching network vs thick-walled urn-shaped with radial canals',
      characterBn: 'সরল নলাকার শাখান্বিত জালক বনাম পুরু প্রাচীরের কলসাকৃতি দেহ',
      couplets: [
        {
          lead: 'Colonial network of delicate thin-walled, branching and anastomosing white tubes; simplest asconoid grade with continuous choanocyte-lined spongocoel.',
          leadBn: 'সূক্ষ্ম সাদা পাতলা প্রাচীরবিশিষ্ট শাখান্বিত ও জালকবদ্ধ নালীর কলোনি; অবিচ্ছিন্ন চোয়ানোসাইটযুক্ত সরল আসকোনয়েড কাঠামো।',
          diagnosticFeature: 'Leucosolenia botryoides: Asconoid colonial network, monaxon/triradiate calcite spicules',
          diagnosticFeatureBn: 'লিউকোসোলেনিয়া বট্রিয়য়েডস: আসকোনয়েড কলোনি, ক্যালসাইট স্পিকিউল',
          resultType: 'species',
          speciesId: 'sp-leucosolenia-botryoides',
          rationaleEn: 'Resolves to White lace sponge (Leucosolenia botryoides: Calcarea)',
          rationaleBn: 'হোয়াইট লেইস স্পঞ্জ (লিউকোসোলেনিয়া বট্রিয়য়েডস)'
        },
        {
          lead: 'Solitary or clustered urn-shaped or purse-like vases up to 2-5 cm; syconoid body wall folded into distinct finger-like radial flagellated chambers; osculum crowned by a conspicuous ring of long straight monaxon calcite spicules.',
          leadBn: 'কলসাকৃতি বা থলের মতো একক বা গুচ্ছবদ্ধ দেহ (২-৫ সেমি); সাইকোনয়েড ভাঁজযুক্ত প্রাচীর; অস্কুলামের মুখে দীর্ঘ সোজা স্পিকিউলের বিশিষ্ট মুকুট।',
          diagnosticFeature: 'Sycon ciliatum: Syconoid radial canals, oscular spicule fringe',
          diagnosticFeatureBn: 'সাইকন সিলিয়াটাম: সাইকোনয়েড নালী, অস্কুলার স্পিকিউল বলয়',
          resultType: 'species',
          speciesId: 'sp-sycon-ciliatum',
          rationaleEn: 'Resolves to White purse sponge (Sycon ciliatum: Calcarea)',
          rationaleBn: 'হোয়াইট পার্স স্পঞ্জ (সাইকন সিলিয়াটাম)'
        }
      ]
    },
    {
      id: 4,
      title: 'Hexactinellida vs Demospongiae',
      titleBn: 'হেক্সাক্টিনেলিডা বনাম ডেমোস্পঞ্জিয়া',
      character: '6-rayed triaxonic glass spicules in syncytium vs spongin/monaxon demosponges',
      characterBn: 'সিনসিটিয়ামে ৬-রশ্মিযুক্ত কাঁচ স্পিকিউল বনাম স্পঞ্জিন/মনাক্সন ডেমোস্পঞ্জ',
      couplets: [
        {
          lead: 'Deep-sea glass sponges with triaxonic, 6-rayed siliceous spicules fused into an exquisite rigid lattice framework; body tissue organized as a trabecular syncytium.',
          leadBn: 'গভীর সমুদ্রের গ্লাস স্পঞ্জ যার ৬-রশ্মিবিশিষ্ট সিলিকা স্পিকিউল মিলে জটিল জালক তৈরি করে; ট্রাবেকুলার সিনসিটিয়াম কলাযুক্ত।',
          diagnosticFeature: 'Class Hexactinellida: 6-rayed triaxonic spicules, syncytial trabecular tissue',
          diagnosticFeatureBn: 'হেক্সাক্টিনেলিডা শ্রেণি: ৬-রশ্মি কাঁচ স্পিকিউল, সিনসিটিয়াম কাঠামো',
          resultType: 'next_step',
          nextStepId: 6
        },
        {
          lead: 'Skeleton composed of fibrous spongin network, siliceous spicules (never 6-rayed), or both; leuconoid grade with flagellated chambers; comprises over 85% of all living sponges.',
          leadBn: 'কঙ্কাল কোলাজেনাস স্পঞ্জিন তন্তু, সিলিকা স্পিকিউল (কখনও ৬-রশ্মি নয়) বা উভয় দ্বারা গঠিত; লিউকোনয়েড নালীতন্ত্র।',
          diagnosticFeature: 'Class Demospongiae: Spongin network and/or siliceous monaxons/tetraxons, leuconoid',
          diagnosticFeatureBn: 'ডেমোস্পঞ্জিয়া শ্রেণি: স্পঞ্জিন তন্তু ও সিলিকা স্পিকিউল, লিউকোনয়েড',
          resultType: 'next_step',
          nextStepId: 7
        }
      ]
    },
    {
      id: 5,
      title: 'Radiate Phyla: Cnidocytes vs Comb Rows',
      titleBn: 'রেডিয়াটা পর্বসমূহ: নিডোসাইট বনাম সিলিয়ারি কম্ব রো',
      character: 'Tentacles bearing stinging cnidocytes vs 8 rows of ciliated swimming ctenes',
      characterBn: 'দংশক নিডোসাইটযুক্ত কর্ষিকা বনাম ৮টি সিলিয়াযুক্ত সাঁতারু কম্ব প্লেট',
      couplets: [
        {
          lead: 'Possess specialized stinging organelles (cnidocytes containing nematocysts); alternating polyp and medusa body forms or solitary/colonial polyp stages; no ciliary comb plates.',
          leadBn: 'নেমাটোসিস্টযুক্ত বিশেষায়িত নিডোসাইট বা দংশক কোষ উপস্থিত; পলিপ বা মেডুসা রূপবিশিষ্ট; সিলিয়ারি কম্ব প্লেট অনুপস্থিত।',
          diagnosticFeature: 'Phylum Cnidaria: Cnidocytes, nematocysts, planula larva',
          diagnosticFeatureBn: 'নিডারিয়া পর্ব: নিডোসাইট, নেমাটোসিস্ট, প্লানুলা লার্ভা',
          resultType: 'next_step',
          nextStepId: 10
        },
        {
          lead: 'Completely lacking cnidocytes; eight longitudinal meridional rows of fused ciliated swimming plates (ctenes); biradial symmetry; adhesive colloblast cells or voracious macrocilia; comb rows refract light with brilliant iridescence.',
          leadBn: 'নিডোসাইট সম্পূর্ণ অনুপস্থিত; ৮টি অনুদৈর্ঘ্য সিলিয়াযুক্ত কম্ব প্লেট (টিন); আঠালো কলোব্লাস্ট কোষ বা ম্যাক্রোসিলিয়াযুক্ত শিকারী মুখ; রংধনু বর্ণের আলোক বিচ্ছুরণ।',
          diagnosticFeature: 'Phylum Ctenophora: 8 ctene rows, apical organ, colloblasts or macrocilia',
          diagnosticFeatureBn: 'টিনোফোরা পর্ব: ৮টি কম্ব প্লেট, শীর্ষ সংবেদী অঙ্গ, কলোব্লাস্ট/ম্যাক্রোসিলিয়া',
          resultType: 'next_step',
          nextStepId: 8
        }
      ]
    },
    {
      id: 6,
      title: 'Hexactinellida: Venus Flower Basket vs Glass Rope Sponge',
      titleBn: 'হেক্সাক্টিনেলিডা: ভেনাস ফ্লাওয়ার বাস্কেট বনাম গ্লাস রোপ স্পঞ্জ',
      character: 'Curved lattice cylinder with parietal sieve vs spiral anchoring glass spicule stalk',
      characterBn: 'বাঁকানো নলাকার জালক কাঠামো বনাম সর্পিলাকার নোঙর কাঁচ স্পিকিউল দণ্ড',
      couplets: [
        {
          lead: 'Curved cylindrical vase of fused silica lattice with perforated parietal oscular sieve plate at apex; permanently houses a symbiotic breeding pair of spongicolid shrimps inside its cavity.',
          leadBn: 'বাঁকানো নলাকার কাঁচের ঝুড়ি কাঠামো যার শীর্ষে চালুনির মতো ঢাকনা থাকে; গহ্বরে একজোড়া মিথোজীবী চিংড়ি আজীবন বসবাস করে।',
          diagnosticFeature: 'Euplectella aspergillum: Rigid cylindrical glass lattice, oscular sieve, symbiotic shrimp',
          diagnosticFeatureBn: 'ইউপ্লেকটেলা অ্যাসপারজিলাম: নলাকার কাঁচের জালক, অস্কুলার ছাঁকনি',
          resultType: 'species',
          speciesId: 'sp-euplectella-aspergillum',
          rationaleEn: 'Resolves to Venus flower basket (Euplectella aspergillum: Hexactinellida)',
          rationaleBn: 'ভেনাস ফ্লাওয়ার বাস্কেট (ইউপ্লেকটেলা অ্যাসপারজিলাম)'
        },
        {
          lead: 'Subglobular or cup-shaped upper sponge body anchored deep into abyssal soft ooze by a massive spirally twisted rope-like stalk composed of extremely long glass monaxon spicules.',
          leadBn: 'গোলাকার বা পেয়ালাকৃতির দেহ যা গভীর সমুদ্রের কাদায় দীর্ঘ সর্পিলাকার কাঁচের সুতাযুক্ত দণ্ড দ্বারা নোঙর করা থাকে।',
          diagnosticFeature: 'Hyalonema sieboldii: Globose body supported on spirally twisted glass anchoring stalk',
          diagnosticFeatureBn: 'হায়ালোনেমা সিবোল্ডি: পেঁচানো কাঁচের নোঙর দণ্ডবিশিষ্ট গ্লাস রোপ স্পঞ্জ',
          resultType: 'species',
          speciesId: 'sp-hyalonema-sieboldii',
          rationaleEn: 'Resolves to Glass rope sponge (Hyalonema sieboldii: Hexactinellida)',
          rationaleBn: 'গ্লাস রোপ স্পঞ্জ (হায়ালোনেমা সিবোল্ডি)'
        }
      ]
    },
    {
      id: 7,
      title: 'Demospongiae: Commercial Bath Sponge vs Hermit Crab Orange Sponge',
      titleBn: 'ডেমোস্পঞ্জিয়া: প্রাকৃতিক বাথ স্পঞ্জ বনাম হার্মিট ক্র্যাব অরেঞ্জ স্পঞ্জ',
      character: 'Pure spongin fiber matrix without mineral spicules vs dense tylostyle spicules',
      characterBn: 'খনিজ স্পিকিউলহীন বিশুদ্ধ স্পঞ্জিন তন্তু বনাম টাইলোস্টাইল স্পিকিউল',
      couplets: [
        {
          lead: 'Skeleton composed exclusively of a compressible, highly absorbent network of keratin-like organic spongin fibers; siliceous mineral spicules completely absent; harvested as natural bath sponge.',
          leadBn: 'কঙ্কাল সম্পূর্ণভাবে স্থিতিস্থাপক ও পানি শোষণকারী স্পঞ্জিন তন্তুর জালক দ্বারা গঠিত; সিলিকা স্পিকিউল সম্পূর্ণ অনুপস্থিত; প্রসাধন বাথ স্পঞ্জ।',
          diagnosticFeature: 'Spongia officinalis: Elastic spongin-only matrix, no mineral spicules, compressible',
          diagnosticFeatureBn: 'স্পঞ্জিয়া অফিসিনালিস: শুধুমাত্র স্থিতিস্থাপক স্পঞ্জিন কঙ্কাল, খনিজ স্পিকিউলহীন',
          resultType: 'species',
          speciesId: 'sp-spongia-officinalis',
          rationaleEn: 'Resolves to Commercial bath sponge (Spongia officinalis: Demospongiae)',
          rationaleBn: 'বাথ স্পঞ্জ (স্পঞ্জিয়া অফিসিনালিস)'
        },
        {
          lead: 'Massive compact orange or reddish-yellow sponge with pin-headed siliceous tylostyle spicules; commonly encrusts gastropod shells inhabited by pagurid hermit crabs, eventually dissolving the shell.',
          leadBn: 'কমলা বা লালচে-হলুদ নিরেট স্পঞ্জ যাতে পিনসদৃশ টাইলোস্টাইল সিলিকা স্পিকিউল থাকে; হার্মিট কাঁকড়া বহনকারী শামুকের খোলসে আবরণ তৈরি করে।',
          diagnosticFeature: 'Suberites domuncula: Compact orange tissue, tylostyle megascleres, hermit crab commensalism',
          diagnosticFeatureBn: 'সুবারাইটস ডমুঙ্কুলা: কমলা স্পঞ্জ, টাইলোস্টাইল স্পিকিউল, হার্মিট কাঁকড়ার সহজীবী',
          resultType: 'species',
          speciesId: 'sp-suberites-domuncula',
          rationaleEn: 'Resolves to Sea orange sponge (Suberites domuncula: Demospongiae)',
          rationaleBn: 'সি অরেঞ্জ স্পঞ্জ (সুবারাইটস ডমুঙ্কুলা)'
        }
      ]
    },
    {
      id: 8,
      title: 'Ctenophora: Tentaculata vs Nuda',
      titleBn: 'টিনোফোরা: কর্ষিকাযুক্ত (টেন্টাকুলাটা) বনাম কর্ষিকাহীন (নুডা)',
      character: 'Presence of paired tentacles/lobes with colloblasts vs complete absence of tentacles and presence of macrocilia',
      characterBn: 'জোড়া কর্ষিকা ও কলোব্লাস্টের উপস্থিতি বনাম কর্ষিকাহীনতা ও ম্যাক্রোসিলিয়ার উপস্থিতি',
      couplets: [
        {
          lead: 'Possess a pair of retractile feeding tentacles equipped with adhesive colloblasts (glue cells), or modified oral feeding lobes and auricles; mouth of moderate size.',
          leadBn: 'আঠালো কলোব্লাস্টযুক্ত জোড়া পরিবর্তনীয় শিকারী কর্ষিকা, বা পরিবর্তিত মৌখিক লোব ও অরিকেল বিদ্যমান; স্বাভাবিক মুখছিদ্র।',
          diagnosticFeature: 'Class Tentaculata: Tentacles or oral feeding lobes present, colloblasts',
          diagnosticFeatureBn: 'টেন্টাকুলাটা শ্রেণি: কর্ষিকা বা মৌখিক লোবযুক্ত, কলোব্লাস্ট কোষ',
          resultType: 'next_step',
          nextStepId: 9
        },
        {
          lead: 'Tentacles and tentacle sheaths completely absent at all developmental stages; body conical, mitre-shaped, or thimble-like up to 10-15 cm; wide gaping mouth occupying entire oral pole; inner lips lined with macroscopic ciliary teeth (macrocilia) used to swallow other comb jellies whole.',
          leadBn: 'জীবনচক্রের কোনো দশাতেই কর্ষিকা বা কর্ষিকা খাপ থাকে না; থলে বা শঙ্কু আকৃতির দেহ (১০-১৫ সেমি); বিশাল বিস্তৃত হাঁ-মুখ; ভেতরের ঠোঁটে ম্যাক্রোসিলিয়ার সারি যা দিয়ে অন্য কম্ব জেলি গিলে খায়।',
          diagnosticFeature: 'Class Nuda (Beroida: Beroe ovata): Tentacles absent, cavernous mouth, macrociliary teeth',
          diagnosticFeatureBn: 'নুডা শ্রেণি (বেরোয়ে ওভাটা): কর্ষিকাহীন, বিশাল হাঁ-মুখ, ম্যাক্রোসিলিয়া দাঁত',
          resultType: 'species',
          speciesId: 'sp-beroe-ovata',
          rationaleEn: 'Resolves to Oval comb jelly (Beroe ovata: Nuda / Beroidae)',
          rationaleBn: 'ওভাল কম্ব জেলি (বেরোয়ে ওভাটা: বেরোইডা বর্গ)'
        }
      ]
    },
    {
      id: 9,
      title: 'Class Tentaculata: Cydippida vs Lobata vs Cestida',
      titleBn: 'টেন্টাকুলাটা শ্রেণি: সাইডিপ্পিডা বনাম লোবাটা বনাম সেস্টিডা',
      character: 'Spherical body with long branched tentacles vs oral lobes vs ribbon-like compression',
      characterBn: 'গোলাকার দেহ ও দীর্ঘ কর্ষিকা বনাম প্রশস্ত মৌখিক লোব বনাম ফিতার মতো চ্যাপ্টা দেহ',
      couplets: [
        {
          lead: 'Spherical or pea-shaped translucent body up to 2.5 cm; pair of extremely long, trailing plumose tentacles bearing fine lateral tentilla, fully retractable into deep basal sheaths.',
          leadBn: 'গোলাকার বা মটরদানার মতো স্বচ্ছ দেহ (২.৫ সেমি); পার্শ্বীয় শাখাযুক্ত দুটি অত্যন্ত দীর্ঘ পালকসদৃশ কর্ষিকা যা গভীর খাপে গুটিয়ে নেওয়া যায়।',
          diagnosticFeature: 'Pleurobrachia pileus: Spherical cydippid, 2 long plumose tentacles with retractile sheaths',
          diagnosticFeatureBn: 'প্লুরোব্রাকিয়া পাইলাস: গোলাকার সাইডিপ্পিড, দুটি দীর্ঘ পরিবর্তনীয় কর্ষিকা',
          resultType: 'species',
          speciesId: 'sp-pleurobrachia-pileus',
          rationaleEn: 'Resolves to Sea gooseberry (Pleurobrachia pileus: Cydippida)',
          rationaleBn: 'সি গুজবেরি (প্লুরোব্রাকিয়া পাইলাস)'
        },
        {
          lead: 'Laterally compressed oval body with two large, flexible oral muscular lobes extending past the mouth and four flabellate auricles; tentacles reduced and sheaths absent in adults.',
          leadBn: 'পার্শ্বীয়ভাবে চ্যাপ্টা ডিম্বাকৃতি দেহ যাতে মুখের সামনে দুটি প্রশস্ত মাংসল লোব ও ৪টি অরিকেল থাকে; প্রাপ্তবয়স্কদের কর্ষিকা ক্ষুদ্র।',
          diagnosticFeature: 'Mnemiopsis leidyi: Lobate ctenophore with 2 large oral lobes, 4 auricles, bioluminescent',
          diagnosticFeatureBn: 'নেমিওপসিস লেইডি: দুটি বৃহৎ মৌখিক লোব ও ৪টি অরিকেলযুক্ত কম্ব জেলি',
          resultType: 'species',
          speciesId: 'sp-mnemiopsis-leidyi',
          rationaleEn: 'Resolves to Sea walnut / Warty comb jelly (Mnemiopsis leidyi: Lobata)',
          rationaleBn: 'সি ওয়ালনাট (নেমিওপসিস লেইডি)'
        },
        {
          lead: 'Extremely laterally compressed, flat ribbon-like or belt-like iridescent gelatinous body extending horizontally up to 1-1.5 meters; undulates like a silvery belt through the water.',
          leadBn: 'অত্যন্ত চ্যাপ্টা ফিতার মতো চকচকে স্বচ্ছ দেহ যা ১ থেকে ১.৫ মিটার লম্বা হতে পারে; রূপালী বেল্টের মতো তরঙ্গায়িত গতিতে সাঁতার কাটে।',
          diagnosticFeature: 'Cestum veneris: Long ribbon-shaped body up to 1.5 m, pelagic undulating belt',
          diagnosticFeatureBn: 'সেস্টাম ভেনেরিস: ফিতাকৃতি চ্যাপ্টা দেহাংশ (১.৫ মি), ভেনাস গার্ডল',
          resultType: 'species',
          speciesId: 'sp-cestum-veneris',
          rationaleEn: 'Resolves to Venus girdle (Cestum veneris: Cestida)',
          rationaleBn: 'ভেনাস গার্ডল (সেস্টাম ভেনেরিস: সেস্টিডা বর্গ)'
        }
      ]
    },
    {
      id: 10,
      title: 'Phylum Cnidaria: Primary Classes',
      titleBn: 'নিডারিয়া পর্ব: প্রধান শ্রেণিসমূহ',
      character: 'Polyp-only organization with partitioned coelenteron vs medusa dominant stages',
      characterBn: 'পর্দাযুক্ত গহ্বরবিশিষ্ট একক পলিপ দশা বনাম মেডুসা প্রধান জীবনচক্র',
      couplets: [
        {
          lead: 'Medusa stage completely absent; solitary or colonial benthic polyps; gastrovascular cavity partitioned longitudinally by vertical tissue septa (mesenteries); pharynx invaginated with siphonoglyphs.',
          leadBn: 'মেডুসা দশা সম্পূর্ণ অনুপস্থিত; একক বা কলোনিয়াল তলদেশবাসী পলিপ; গ্যাস্ট্রোভাস্কুলার গহ্বর উলম্ব পর্দা দ্বারা বিভক্ত; সাইফোনোগ্লিফযুক্ত গলবিল।',
          diagnosticFeature: 'Class Anthozoa: No medusa, septate gastrovascular cavity, siphonoglyphs',
          diagnosticFeatureBn: 'অ্যান্থোজোয়া শ্রেণি: মেডুসাহীন, পর্দাবিশিষ্ট গ্যাস্ট্রোভাস্কুলার গহ্বর',
          resultType: 'next_step',
          nextStepId: 11
        },
        {
          lead: 'Life cycle includes a prominent medusa stage (or specialized polymorphic siphonophore medusoids); gastrovascular cavity without cellular mesenterial partitions.',
          leadBn: 'জীবনচক্রে মুক্ত সাঁতারু মেডুসা দশা (অথবা বিশেষায়িত সাইফোনোফোর রূপ) প্রধান; গহ্বরে কোষীয় পর্দা অনুপস্থিত।',
          diagnosticFeature: 'Medusozoa: Scyphozoa, Cubozoa & Hydrozoa',
          diagnosticFeatureBn: 'মেডুসোজোয়া: সাইফোজোয়া, কিউবোজোয়া ও হাইড্রোজোয়া',
          resultType: 'next_step',
          nextStepId: 12
        }
      ]
    },
    {
      id: 11,
      title: 'Class Anthozoa: Corals vs Sea Anemones',
      titleBn: 'অ্যান্থোজোয়া শ্রেণি: প্রবাল বনাম সাগর কুসুম (অ্যানিমোন)',
      character: 'Massive aragonite calcium skeleton vs solitary soft-bodied pedal disc attachment',
      characterBn: 'অ্যারাগোনাইট চুনযুক্ত প্রবাল কঙ্কাল বনাম নরম দেহের পেডাল ডিস্কযুক্ত সাগর কুসুম',
      couplets: [
        {
          lead: 'Colonial stony coral with erect branching cervicorn morphology resembling deer antlers; corallites small with apical axial corallite directing rapid growth.',
          leadBn: 'হরিণের শিং-এর মতো খাড়া শাখান্বিত কলোনিয়াল পাথুরে প্রবাল কঙ্কাল; ডগায় অক্ষীয় বিশেষায়িত প্রবাল কীট থাকে।',
          diagnosticFeature: 'Acropora cervicornis: Branching staghorn skeleton, apical corallite',
          diagnosticFeatureBn: 'অ্যাক্রোপোরা সার্বিকর্নিস: শিং-সদৃশ শাখান্বিত প্রবাল কঙ্কাল',
          resultType: 'species',
          speciesId: 'sp-acropora-cervicornis',
          rationaleEn: 'Resolves to Staghorn coral (Acropora cervicornis: Scleractinia)',
          rationaleBn: 'স্ট্যাগহর্ন কোরাল (অ্যাক্রোপোরা সার্বিকর্নিস)'
        },
        {
          lead: 'Colonial massive hemisphere-shaped brain coral; surface scored with deep, continuous sinuous meandroid ridges and valleys resembling cerebral convolutions.',
          leadBn: 'মস্তিষ্কের খাঁজের মতো গভীর আঁকাবাঁকা খাঁজ ও উপত্যকাযুক্ত নিরেট অর্ধগোলাকার প্রবাল কঙ্কাল।',
          diagnosticFeature: 'Diploria labyrinthiformis: Meandroid cerebral valleys with ambulacral grooving',
          diagnosticFeatureBn: 'ডিপ্লোরিয়া ল্যাবিরিন্থিফরমিস: মস্তিষ্কের ন্যায় খাঁজযুক্ত ব্রেন কোরাল',
          resultType: 'species',
          speciesId: 'sp-diploria-labyrinthiformis',
          rationaleEn: 'Resolves to Grooved brain coral (Diploria labyrinthiformis: Scleractinia)',
          rationaleBn: 'গ্রুভড ব্রেন কোরাল (ডিপ্লোরিয়া ল্যাবিরিন্থিফরমিস)'
        },
        {
          lead: 'Solitary, soft-bodied columnar sea anemone without mineral skeleton; attaches to intertidal rocks via muscular pedal disc; red or greenish-brown column ringed beneath the 192 tentacles by a circle of bright blue spherules (acrorhagi) containing defensive nematocysts.',
          leadBn: 'খনিজ কঙ্কালবিহীন নরম নলাকার একক সাগর কুসুম; পেডাল ডিস্ক দিয়ে পাথরে আটকায়; কর্ষিকার নিচে উজ্জ্বল নীল রঙের বিষাক্ত অ্যাক্রোরেজি পুঁতি থাকে।',
          diagnosticFeature: 'Actinia equina: Soft columnar sea anemone, 192 tentacles, blue defensive acrorhagi',
          diagnosticFeatureBn: 'অ্যাক্টিনিয়া ইকুইনা: নরম সাগর কুসুম, নীল অ্যাক্রোরেজি থলি',
          resultType: 'species',
          speciesId: 'sp-actinia-equina',
          rationaleEn: 'Resolves to Beadlet anemone (Actinia equina: Actiniaria)',
          rationaleBn: 'বিডলেট অ্যানিমোন (অ্যাক্টিনিয়া ইকুইনা)'
        }
      ]
    },
    {
      id: 12,
      title: 'Medusozoa: Cubozoa vs Scyphozoa vs Hydrozoa',
      titleBn: 'মেডুসোজোয়া: কিউবোজোয়া বনাম সাইফোজোয়া বনাম হাইড্রোজোয়া',
      character: 'Box-shaped bell with velarium vs true scyphomedusa with rhopalia vs hydrozoan polymorphic colonies',
      characterBn: 'ভেলেয়ারিয়ামযুক্ত ঘনকাকৃতি মেডুসা বনাম খাঁজযুক্ত সাইফোমেডুসা বনাম বহুরূপী হাইড্রোয়েড',
      couplets: [
        {
          lead: 'Square, cube-shaped bell margin with an internal flap-like velarium; tentacles hang exclusively from interradial bladelike pedalium cushions at the four bell corners; advanced lens-bearing eyes; extraordinarily potent neurotoxin.',
          leadBn: 'ভেলেয়ারিয়ামযুক্ত চারকোনা ঘনকাকৃতি মেডুসা; চার কোণায় পেডালিয়াম প্যাড থেকে কর্ষিকা ঝুলে; লেন্সযুক্ত চোখ; অত্যন্ত প্রাণঘাতী বিষ।',
          diagnosticFeature: 'Class Cubozoa: Cuboidal bell, velarium, pedalia, advanced rhopalial eyes',
          diagnosticFeatureBn: 'কিউবোজোয়া শ্রেণি: বাক্স আকৃতির ছাতা, পেডালিয়াম, লেন্সযুক্ত চক্ষু',
          resultType: 'species',
          speciesId: 'sp-chironex-fleckeri',
          rationaleEn: 'Resolves to Sea wasp / Box jellyfish (Chironex fleckeri: Chirodropida)',
          rationaleBn: 'সি ওয়াস্প / বক্স জেলিফিশ (কাইরোনেক্স ফ্লেকেরি)'
        },
        {
          lead: 'True jellyfish: Umbrella bell margin scalloped with 8 or 16 marginal notches containing sensory rhopalia and lappets; velum absent; thick gelatinous mesoglea; polyp stage small strobilating scyphistoma.',
          leadBn: 'প্রকৃত জেলিফিশ: ছাতার কিনারা খাঁজকাটা এবং রোপালিয়াম সংবেদী অঙ্গযুক্ত; ভেলাম অনুপস্থিত; পুরু জেলিময় মেসোগ্লিয়া; স্ট্রোবিলেটিং সিস্ট।',
          diagnosticFeature: 'Class Scyphozoa: Scalloped margin with rhopalia, no true velum, tetramerous',
          diagnosticFeatureBn: 'সাইফোজোয়া শ্রেণি: রোপালিয়ামযুক্ত খাঁজকাটা ছাতা, ভেলামহীন',
          resultType: 'next_step',
          nextStepId: 13
        },
        {
          lead: 'Class Hydrozoa: Dominant colonial or solitary polyp phase; when medusa present, possesses a true craspedote shelf-like inner margin (velum); polymorphic colonies with gastrozooids, gonozooids, dactylozooids, or pneumatophore float.',
          leadBn: 'হাইড্রোজোয়া শ্রেণি: পলিপ প্রধান বা ভেলামযুক্ত সূক্ষ্ম মেডুসা; খাদ্য গ্রহণ, প্রজনন ও প্রতিরক্ষার জন্য বিশেষায়িত বহুরূপী জুঅয়েড বা গ্যাসথলি কলোনি।',
          diagnosticFeature: 'Class Hydrozoa: Velum present in medusae, polymorphic zoids or solitary freshwater polyp',
          diagnosticFeatureBn: 'হাইড্রোজোয়া শ্রেণি: ভেলামযুক্ত মেডুসা, বহুরূপী সাইফোনোফোর বা মিঠাপানির পলিপ',
          resultType: 'next_step',
          nextStepId: 14
        }
      ]
    },
    {
      id: 13,
      title: 'Class Scyphozoa: Moon Jelly vs Compass Jelly',
      titleBn: 'সাইফোজোয়া শ্রেণি: মুন জেলি বনাম কম্পাস জেলি',
      character: 'Four horseshoe-shaped gonads vs 16 radiating brown radial V-shaped bands',
      characterBn: 'চারটি ঘোড়ার খুরসদৃশ জননাঙ্গ বনাম ১৬টি বাদামি কম্পাস কাঁটা সদৃশ দাগ',
      couplets: [
        {
          lead: 'Flattened translucent saucer-shaped umbrella up to 25-40 cm; four conspicuous pinkish-purple horseshoe-shaped or circular gastric gonads clearly visible through the top of bell; fringe of short marginal tentacles and four frilled oral arms.',
          leadBn: 'স্বচ্ছ চ্যাপ্টা পিরিচ আকৃতির ছাতা (২৫-৪০ সেমি); পিঠের ওপর চারটি ঘোড়ার খুরের মতো গোলাপি-বেগুনি জননাঙ্গ স্পষ্টভাবে দৃশ্যমান; ছোট প্রান্তীয় কর্ষিকা।',
          diagnosticFeature: 'Aurelia aurita: 4 horseshoe gonads, saucer bell, short marginal fringe',
          diagnosticFeatureBn: 'অরেলিয়া অরিতা: চারটি খুরসদৃশ জননাঙ্গ, স্বচ্ছ পিরিচ ছাতা',
          resultType: 'species',
          speciesId: 'sp-aurelia-aurita',
          rationaleEn: 'Resolves to Moon jellyfish (Aurelia aurita: Semaeostomeae)',
          rationaleBn: 'মুন জেলিফিশ (অরেলিয়া অরিতা)'
        },
        {
          lead: 'Convex bell up to 30 cm decorated with 16 distinctive radiating triangular or V-shaped dark brown bands resembling a compass rose; 24 long stinging marginal tentacles arranged in groups of three alternating with 8 rhopalia.',
          leadBn: 'উত্তল ছাতা যাতে কম্পাসের কাঁটার মতো ১৬টি ত্রিভুজাকার গাঢ় বাদামি ডোরা দাগ থাকে; ২৪টি দীর্ঘ দংশক কর্ষিকা গুচ্ছবদ্ধভাবে থাকে।',
          diagnosticFeature: 'Chrysaora hysoscella: 16 radiating brown compass bands, 24 marginal tentacles',
          diagnosticFeatureBn: 'ক্রিসাওরা হাইসোসেল্লা: ১৬টি কম্পাস সদৃশ ডোরা দাগ, ২৪টি কর্ষিকা',
          resultType: 'species',
          speciesId: 'sp-chrysaora-hysoscella',
          rationaleEn: 'Resolves to Compass jellyfish (Chrysaora hysoscella: Pelagiidae)',
          rationaleBn: 'কম্পাস জেলিফিশ (ক্রিসাওরা হাইসোসেল্লা)'
        }
      ]
    },
    {
      id: 14,
      title: 'Class Hydrozoa: Siphonophore vs Freshwater Hydra vs Marine Hydroid',
      titleBn: 'হাইড্রোজোয়া শ্রেণি: পর্তুগিজ যুদ্ধজাহাজ বনাম মিঠাপানির হাইড্রা বনাম সামুদ্রিক ওবেলিয়া',
      character: 'Pelagic floating pneumatophore colony vs solitary freshwater polyp vs colonial thecate hydroid',
      characterBn: 'ভাসমান গ্যাস বেলুন কলোনি বনাম মিঠাপানির একক পলিপ বনাম সামুদ্রিক কাঠি কলোনি',
      couplets: [
        {
          lead: 'Pelagic colonial siphonophore floating on sea surface by a large, iridescent blue to pinkish-purple gas-filled sail/float (pneumatophore); suspended beneath are trailing fishing dactylozooid tentacles reaching 10-30 meters delivering agonizing stings.',
          leadBn: 'সমুদ্রের উপরিভাগে ভাসমান গ্যাসভর্তি নীল-গোলাপি পালযুক্ত বেলুন (নিউম্যাটোফোর); নিচে ১০-৩০ মিটার দীর্ঘ তীব্র বিষাক্ত শিকারী কর্ষিকা ঝুলন্ত থাকে।',
          diagnosticFeature: 'Physalia physalis: Pneumatophore float, trailing dactylozooids up to 30 m',
          diagnosticFeatureBn: 'ফাইসিলিয়া ফাইসালিস: ভাসমান গ্যাস বেলুন, দীর্ঘ শিকারী কর্ষিকা',
          resultType: 'species',
          speciesId: 'sp-physalia-physalis',
          rationaleEn: 'Resolves to Portuguese man o war (Physalia physalis: Siphonophorae)',
          rationaleBn: 'পর্তুগিজ যুদ্ধজাহাজ / ম্যান ও ওয়ার (ফাইসিলিয়া ফাইসালিস)'
        },
        {
          lead: 'Solitary, naked cylindrical freshwater polyp up to 1-3 cm; attached to aquatic weeds by a basal pedal disc; oral hypostome surrounded by 6-10 hollow slender tentacles; no medusa stage; reproduces by lateral budding or sexual eggs.',
          leadBn: 'মিঠাপানির জলজ উদ্ভিদে পেডাল ডিস্ক দিয়ে আটকানো একক নলাকার পলিপ (১-৩ সেমি); মুখের চারপাশে ৬-১০টি ফাঁপা কর্ষিকা; মেডুসাহীন; কুঁড়ি সৃষ্টি করে।',
          diagnosticFeature: 'Hydra vulgaris: Solitary freshwater polyp, 6-10 tentacles, no medusa stage',
          diagnosticFeatureBn: 'হাইড্রা ভালগারিস: মিঠাপানির একক পলিপ, ৬-১০টি কর্ষিকা, কুঁড়ি',
          resultType: 'species',
          speciesId: 'sp-hydra-vulgaris',
          rationaleEn: 'Resolves to Common hydra (Hydra vulgaris: Anthoathecata)',
          rationaleBn: 'সাধারণ হাইড্রা (হাইড্রা ভালগারিস)'
        },
        {
          lead: 'Colonial marine hydroid growing on kelp and rocks with zigzag erect hydrocaulus stems enclosed in transparent chitinous perisarc; hydranths housed in bell-shaped hydrothecae with single thickened knee-like node; releases tiny free-swimming medusae with 16 tentacles.',
          leadBn: 'পাথর বা শ্যাওলায় জিগজ্যাগ কাঠি কলোনি তৈরি করা সামুদ্রিক হাইড্রোয়েড; কাইটিনের তৈরি প্রতিরক্ষী খোলের মধ্যে পলিপ ও প্রজনন অঙ্গ থাকে; ক্ষুদ্র মেডুসা ছাড়ে।',
          diagnosticFeature: 'Obelia geniculata: Zigzag perisarc stem, knee joint swellings, thecate hydrothecae',
          diagnosticFeatureBn: 'ওবেলিয়া জেনিকুলাটা: জিগজ্যাগ কাইটিন কাঠি কলোনি, হাইড্রোথিকা',
          resultType: 'species',
          speciesId: 'sp-obelia-geniculata',
          rationaleEn: 'Resolves to Knotted thread hydroid (Obelia geniculata: Leptothecata)',
          rationaleBn: 'ওবেলিয়া জেনিকুলাটা (লেপ্টোথেকেটা বর্গ)'
        }
      ]
    }
  ]
};
