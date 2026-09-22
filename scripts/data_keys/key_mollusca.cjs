// Key 5: Global Diagnostic Key to Major Classes & Species of Phylum Mollusca
// Comprehensive expansion resolving all 12 canonical Mollusca species.

module.exports = {
  id: 'key-global-mollusca-classes',
  title: 'Diagnostic Key to Major Classes & Lineages of Phylum Mollusca',
  titleBn: 'মলাস্কা (কম্বোজ প্রাণী) পর্বের প্রধান শ্রেণি ও বংশধারার শনাক্তকরণ কুঞ্জি',
  scope: 'global',
  targetTaxonId: 'taxon-mollusca',
  majorGroup: 'mollusca',
  taxonScope: 'Phylum Mollusca (Chitons, Bivalves, Gastropods, Cephalopods)',
  taxonScopeBn: 'মলাস্কা পর্ব (কাইটন, ঝিনুক, শামুক ও কর্ষিকাযুক্ত কম্বোজ)',
  description: 'Authoritative dichotomous key distinguishing the four major classes of Phylum Mollusca and their canonical species based on shell valves, foot modifications, mantle cavity, radula, and cephalic appendages.',
  descriptionBn: 'খোলক সংখ্যা, মাংসল পদ, ম্যান্টল গহ্বর, র্যাডুলা এবং মস্তকীয় উপাঙ্গের ওপর ভিত্তি করে মলাস্কা পর্বের প্রধান শ্রেণি ও প্রামাণ্য প্রজাতি শনাক্তকরণ কুঞ্জি।',
  educationalLevel: 'intermediate',
  keyType: 'dichotomous',
  sourceReferenceIds: ['ref-ruppert-2004', 'ref-hickman-2020', 'ref-worms-2024'],
  verificationStatus: 'verified',
  steps: [
    {
      id: 1,
      title: 'Molluscan Shell and Foot Architecture',
      titleBn: 'মলাস্কার খোলক ও পদের গঠন কাঠামো',
      character: 'Eight dorsal articulating valves vs two lateral hinged valves vs single/internal/absent shell',
      characterBn: 'আটটি প্লেটবিশিষ্ট খোলক বনাম দুই কপাটবিশিষ্ট খোলক বনাম একক/অভ্যন্তরীণ/খোলকহীন দেহ',
      couplets: [
        {
          lead: 'Shell composed of an overlapping dorsal series of exactly 8 articulating calcareous plates (valves) surrounded by an encircling leathery muscular girdle; broad ventral flattened sole-like foot adapted for adhering tenaciously to marine intertidal rocks; multiple pairs of bipectinate ctenidia in mantle groove.',
          leadBn: 'পিঠের ওপর ৮টি পরস্পর সমাপতিত ক্যালসিয়াম কার্বনেট প্লেট যা চামড়ার মতো গার্ডল দ্বারা বেষ্টিত; পাথরে আটকে থাকার জন্য চ্যাপ্টা মাংসল পদ; ম্যান্টল খাঁজে বহু জোড়া ফুলকা।',
          diagnosticFeature: 'Class Polyplacophora: 8 articulating dorsal valves, girdle, multiple ctenidia',
          diagnosticFeatureBn: 'পলিট্যাকোফোরা শ্রেণি: ৮টি খোলক প্লেট, গার্ডল, বহু ফুলকা',
          resultType: 'species',
          speciesId: 'sp-tonicella-lineata',
          rationaleEn: 'Resolves to Lined chiton (Tonicella lineata: Polyplacophora)',
          rationaleBn: 'লাইনড কাইটন (টনিসেলা লিনিয়াটা: পলিট্যাকোফোরা)'
        },
        {
          lead: 'Shell of two lateral hinged calcareous valves joined dorsally by an elastic ligament, or shell univalve/conical/spiral, or internal/absent; plates never arranged as eight articulating dorsal series.',
          leadBn: 'খোলক দুই কপাটবিশিষ্ট যা লিগামেন্ট দিয়ে যুক্ত, অথবা এক কপাটবিশিষ্ট সর্পিলাকার খোলক, বা খোলক অভ্যন্তরীণ বা অনুপস্থিত; কখনই ৮টি প্লেটে বিভক্ত নয়।',
          diagnosticFeature: 'Non-polyplacophoran molluscs: Bivalvia, Gastropoda & Cephalopoda',
          diagnosticFeatureBn: 'দ্বিকপাটী, উদরপদী ও শীর্ষপদী মলাস্কা',
          resultType: 'next_step',
          nextStepId: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Bivalvia vs Head-Bearing Molluscs',
      titleBn: 'দ্বিকপাটী (বাইভালভিয়া) বনাম মস্তকযুক্ত মলাস্কা',
      character: 'Two-valved shell with laterally compressed foot and no radula vs distinct head with radula or tentacles',
      characterBn: 'র্যাডুলাহীন ও দুই কপাটযুক্ত চ্যাপ্টা দেহ বনাম র্যাডুলা বা কর্ষিকাযুক্ত সুস্পষ্ট মস্তক',
      couplets: [
        {
          lead: 'Shell of two lateral calcareous valves closed by adductor muscles; head completely absent; radula and salivary glands absent; foot laterally compressed (wedge-shaped or hatchet-shaped) or reduced; large ciliated lamellibranch gills used for both respiration and suspension filter feeding.',
          leadBn: 'অ্যাডাক্টর পেশি দ্বারা বন্ধ হওয়া দুই কপাটবিশিষ্ট খোলক; মস্তক সম্পূর্ণ অনুপস্থিত; র্যাডুলাহীন; পার্শ্বীয়ভাবে চ্যাপ্টা পদ; ছাঁকনভোজী প্রশস্ত ল্যামেলিফুলকা।',
          diagnosticFeature: 'Class Bivalvia: Two hinged valves, no head, no radula, lamellibranch gills',
          diagnosticFeatureBn: 'বাইভালভিয়া শ্রেণি: দুই কপাটবিশিষ্ট খোলক, মস্তকহীন, র্যাডুলাহীন',
          resultType: 'next_step',
          nextStepId: 3
        },
        {
          lead: 'Distinct head present with eyes and sensory tentacles; radula ribbon with chitinous teeth present in buccal mass (or beak-like jaws); foot modified as a crawling sole, swimming fins, or circumoral grasping arms/tentacles.',
          leadBn: 'চোখ ও সংবেদী কর্ষিকাসহ সুস্পষ্ট মস্তক উপস্থিত; মুখে কাইটিনের তৈরি দাঁতযুক্ত র্যাডুলা ফিতা বর্তমান; পদ হামাগুড়ি দেওয়া তলা বা শিকারী বাহুতে রূপান্তরিত।',
          diagnosticFeature: 'Head-bearing molluscs: Gastropoda & Cephalopoda',
          diagnosticFeatureBn: 'মস্তকযুক্ত মলাস্কা: গ্যাস্ট্রোপোডা ও সেফালোপোডা',
          resultType: 'next_step',
          nextStepId: 5
        }
      ]
    },
    {
      id: 3,
      title: 'Class Bivalvia: Free-Lying / Cemented / Byssus / Swimming Lineages',
      titleBn: 'বাইভালভিয়া শ্রেণি: বৃহৎ প্রবাল ঝিনুক, মুক্তাঝিনুক, কাদার ঝিনুক ও স্ক্যালপ',
      character: 'Gigantic fluted valves with zooxanthellae vs byssal attachment vs cemented valve vs auriculate swimming',
      characterBn: 'খাঁজকাটা বিশাল খোলক বনাম বাইসাস সুতা বনাম সিমেন্টযুক্ত খোলক বনাম ডানাযুক্ত স্ক্যালপ',
      couplets: [
        {
          lead: 'Gigantic, massive fluted shells weighing up to 200-250 kg; shell margin deeply scalloped into 4-5 interlocking vertical folds; brightly colored fleshy mantle lobes exposed to sunlight containing billions of symbiotic photosynthetic zooxanthellae dinoflagellates.',
          leadBn: 'বিশাল ভারী খাঁজকাটা খোলক (২০০-২৫০ কেজি পর্যন্ত); কিনারায় ৪-৫টি পরস্পর লক হওয়া গভীর খাঁজ; ম্যান্টলে কোটি কোটি সালোকসংশ্লেষী জুক্সানথিলি শৈবাল থাকে।',
          diagnosticFeature: 'Tridacna gigas: Gigantic fluted scalloped valves, symbiotic zooxanthellate mantle',
          diagnosticFeatureBn: 'ট্রিডাকনা গিগাস: দৈত্যাকার খোলক, সালোকসংশ্লেষী রঙিন ম্যান্টল',
          resultType: 'species',
          speciesId: 'sp-tridacna-gigas',
          rationaleEn: 'Resolves to Giant clam (Tridacna gigas: Cardiidae)',
          rationaleBn: 'জায়ান্ট ক্ল্যাম / দৈত্যাকার ঝিনুক (ট্রিডাকনা গিগাস)'
        },
        {
          lead: 'Moderate to smaller-sized bivalves (5-20 cm); mantle without photosynthetic zooxanthellae; attached by byssus threads, cemented to hard substrate, or free-swimming via valve clapping.',
          leadBn: 'মাঝারি বা ছোট আকৃতির ঝিনুক (৫-২০ সেমি); জুক্সানথিলিহীন; বাইসাস সুতা দ্বারা আটকানো, বা পাথরে সিমেন্টযুক্ত, বা খোলক ঝাপটে সাঁতারু।',
          diagnosticFeature: 'Other Canonical Bivalves: Mytilus, Crassostrea, Pecten',
          diagnosticFeatureBn: 'অন্যান্য প্রামাণ্য ঝিনুক: মাইটিলাস, ক্র্যাসোস্ট্রিয়া, পেক্টেন',
          resultType: 'next_step',
          nextStepId: 4
        }
      ]
    },
    {
      id: 4,
      title: 'Bivalvia: Mussel vs Oyster vs Scallop',
      titleBn: 'বাইভালভিয়া: ব্লু মাসেল বনাম প্যাসিফিক অয়েস্টার বনাম গ্রেট স্ক্যালপ',
      character: 'Wedge-shaped byssus-anchored shell vs irregular cemented cupped valve vs fan-shaped ribbed with ears',
      characterBn: 'কীলকাকার বাইসাসযুক্ত খোলক বনাম অনিয়মিত সিমেন্টযুক্ত খোলক বনাম পাখার মতো খাঁজকাটা কানযুক্ত খোলক',
      couplets: [
        {
          lead: 'Equivalve, elongated wedge-shaped or teardrop shell with pointed anterior umbo; blue-black or violet smooth periostracum; securely anchored to rocky intertidal substrates by strong proteinaceous byssal threads secreted by foot gland.',
          leadBn: 'কীলকাকৃতি বা অশ্রুবিন্দুর মতো নীল-কালো মসৃণ দুই কপাটবিশিষ্ট খোলক; মাংসল পদ থেকে ক্ষরিত শক্তিশালী প্রোটিনময় বাইসাস সুতা দিয়ে পাথরে আঁকড়ে থাকে।',
          diagnosticFeature: 'Mytilus edulis: Wedge-shaped blue-black shell, byssal thread attachment, intertidal beds',
          diagnosticFeatureBn: 'মাইটিলাস এডুলিস: কীলকাকৃতি নীল-কালো খোলক, বাইসাস সুতার বন্ধন',
          resultType: 'species',
          speciesId: 'sp-mytilus-edulis',
          rationaleEn: 'Resolves to Blue mussel (Mytilus edulis: Mytilidae)',
          rationaleBn: 'ব্লু মাসেল (মাইটিলাস এডুলিস: মাইটিলিডি পরিবার)'
        },
        {
          lead: 'Inequivalve, highly irregular and rough layered shell; lower left valve deeply cupped and permanently cemented to solid rocky or shelly substrate; right upper valve flat; single large adductor muscle scar; prominent commercial edible oyster.',
          leadBn: 'অসম কপাটবিশিষ্ট অত্যন্ত খাঁজকাটা ও স্তরযুক্ত অমসৃণ খোলক; নিচের কপাটটি পেয়ালার মতো গভীর এবং পাথরের সাথে সিমেন্টের মতো আজীবন জোড়া লাগানো থাকে।',
          diagnosticFeature: 'Crassostrea gigas: Cemented cupped left valve, laminated rough surface, single adductor scar',
          diagnosticFeatureBn: 'ক্র্যাসোস্ট্রিয়া গিগাস: সিমেন্টযুক্ত পেয়ালা কপাট, স্তরযুক্ত অমসৃণ প্রাচীর',
          resultType: 'species',
          speciesId: 'sp-crassostrea-gigas',
          rationaleEn: 'Resolves to Pacific oyster (Crassostrea gigas: Ostreidae)',
          rationaleBn: 'প্যাসিফিক অয়েস্টার (ক্র্যাসোস্ট্রিয়া গিগাস: অস্ট্রেইডি পরিবার)'
        },
        {
          lead: 'Subcircular fan-shaped shell with symmetrical lateral triangular wings (auricles) flanking the hinge line; lower valve deeply convex, upper valve flat; 15-17 prominent rounded radiating ribs; capable of agile escape swimming by clapping valves together; mantle margin ringed with bright blue sensory ocelli.',
          leadBn: 'পাখার মতো গোল খোলক যাতে হিঞ্জের দুই পাশে কান সদৃশ ত্রিভুজাকার ডানা থাকে; ১৫-১৭টি খাঁজ; খোলক হাততালির মতো ঝাপটে সাঁতার কাটে; কিনারায় নীল চোখ থাকে।',
          diagnosticFeature: 'Pecten maximus: Fan-shaped with auricles, radiating ribs, swimming via jet-propulsion, sensory ocelli',
          diagnosticFeatureBn: 'পেক্টেন ম্যাক্সিমাস: কানযুক্ত পাখার মতো খোলক, খাঁজকাটা পাঁজর, সাঁতারু স্ক্যালপ',
          resultType: 'species',
          speciesId: 'sp-pecten-maximus',
          rationaleEn: 'Resolves to Great scallop (Pecten maximus: Pectinidae)',
          rationaleBn: 'গ্রেট স্ক্যালপ (পেক্টেন ম্যাক্সিমাস: পেক্টিনিডি পরিবার)'
        }
      ]
    },
    {
      id: 5,
      title: 'Gastropoda vs Cephalopoda',
      titleBn: 'গ্যাস্ট্রোপোডা (শামুক/স্লাগ) বনাম সেফালোপোডা (অক্টোপাস/স্কুইড)',
      character: 'Creeping flat sole foot with torsion vs foot modified into circumoral arms/tentacles and siphon',
      characterBn: 'টর্শনযুক্ত হামাগুড়ি দেওয়া একক পদ বনাম মুখে কর্ষিকাযুক্ত বাহু ও সাইফন',
      couplets: [
        {
          lead: 'Broad, flat, muscular creeping ventral foot; body undergoes developmental torsion (180° visceral rotation bringing mantle cavity and anus forward over head); shell univalve (spiral, cap-shaped, or secondarily lost as in slugs); head with 1-2 pairs of sensory tentacles and basal/apical eyes.',
          leadBn: 'চ্যাপ্টা মাংসল পদ যা দিয়ে হামাগুড়ি দেয়; ১৮০ ডিগ্রি টর্শন বা পাক খায় ফলে পায়ু মাথার ওপর আসে; একক প্যাঁচানো খোলক বা খোলকহীন স্লাগ; মাথায় সংবেদী কর্ষিকা ও চোখ।',
          diagnosticFeature: 'Class Gastropoda: Asymmetrical body, torsion, ventral creeping foot, univalve/slug',
          diagnosticFeatureBn: 'গ্যাস্ট্রোপোডা শ্রেণি: টর্শনযুক্ত দেহ, চ্যাপ্টা পদ, একক খোলক/স্লাগ',
          resultType: 'next_step',
          nextStepId: 6
        },
        {
          lead: 'Active predatory marine molluscs; foot modified into a circumoral circle of 8 or 10 prehensile grasping arms and tentacles equipped with suckers, plus a muscular ventral funnel/siphon for jet propulsion; closed circulatory system; large camera-type eyes; powerful chitinous beak-like jaws.',
          leadBn: 'সক্রিয় শিকারী সামুদ্রিক মলাস্কা; পদ পরিবর্তিত হয়ে মুখের চারপাশে ৮ বা ১০টি চোষকযুক্ত বাহু ও জেট প্রপালশনের জন্য সাইফনে রূপান্তরিত; সংবৃত রক্ত সংবহন; উন্নত চোখ ও চঞ্চু।',
          diagnosticFeature: 'Class Cephalopoda: Circumoral arms/tentacles with suckers, siphon, closed circulation, beak',
          diagnosticFeatureBn: 'সেফালোপোডা শ্রেণি: চোষকযুক্ত বাহু, সাইফন, সংবৃত রক্ত সংবহন, চঞ্চু',
          resultType: 'next_step',
          nextStepId: 8
        }
      ]
    },
    {
      id: 6,
      title: 'Class Gastropoda: Terrestrial Pulmonates vs Marine Venomous Cones',
      titleBn: 'গ্যাস্ট্রোপোডা শ্রেণি: স্থলচর ফুসফুসধারী শামুক/স্লাগ বনাম সামুদ্রিক বিষাক্ত কোন স্নেইল',
      character: 'Vascularized pulmonary mantle cavity (pulmonate) vs marine prosobranch with harpoon toxoglossan radula',
      characterBn: 'ভাস্কুলার ফুসফুসযুক্ত ম্যান্টল গহ্বর বনাম বিষাক্ত হারপুন র্যাডুলাযুক্ত সামুদ্রিক শামুক',
      couplets: [
        {
          lead: 'Air-breathing terrestrial pulmonates; mantle cavity roof richly vascularized to function as a lung, breathing through a contractile opening (pneumostome); gills absent; head with two pairs of retractile tentacles (upper bearing eyes).',
          leadBn: 'বায়ুজীবী স্থলচর পালমোনেট; ম্যান্টল প্রাচীর রক্তনালীসমৃদ্ধ ফুসফুসে রূপান্তরিত যা নিউমোস্টোম ছিদ্র দিয়ে শ্বাস নেয়; দুই জোড়া গুটিয়ে নেওয়া যায় এমন কর্ষিকা।',
          diagnosticFeature: 'Order Stylommatophora: Terrestrial pulmonates, pneumostome, 2 pairs retractile tentacles',
          diagnosticFeatureBn: 'স্টাইলোমাটোফোরা বর্গ: স্থলচর পালমোনেট, ফুসফুস গহ্বর, দুটি চোখযুক্ত কর্ষিকা',
          resultType: 'next_step',
          nextStepId: 7
        },
        {
          lead: 'Marine predatory cone snail; thick conical shell with wide aperture; radular teeth modified into disposable, hollow barbed venomous harpoons shot from an eversible proboscis; delivers powerful paralyzing neurotoxins (conopeptides) capable of causing human fatalities.',
          leadBn: 'সামুদ্রিক শিকারী কোন শামুক; পুরু শঙ্কু আকৃতির খোলক; র্যাডুলার দাঁত ফাঁপা বিষাক্ত হারপুনে রূপান্তরিত যা দিয়ে মাছ শিকার করে; তীব্র নিউরোটক্সিনযুক্ত।',
          diagnosticFeature: 'Conus geographus: Conical shell, toxoglossan venomous harpoon radula, lethal conotoxins',
          diagnosticFeatureBn: 'কোনাস জিওগ্রাফাস: শঙ্কু খোলক, বিষাক্ত হারপুন র্যাডুলা, প্রাণঘাতী বিষ',
          resultType: 'species',
          speciesId: 'sp-conus-geographus',
          rationaleEn: 'Resolves to Geography cone snail (Conus geographus: Conidae)',
          rationaleBn: 'জিওগ্রাফি কোন স্নেইল (কোনাস জিওগ্রাফাস: কনিডি পরিবার)'
        }
      ]
    },
    {
      id: 7,
      title: 'Stylommatophora: Shelled Roman Snail vs Naked Leopard Slug',
      titleBn: 'স্টাইলোমাটোফোরা: খোলকযুক্ত রোমান শামুক বনাম খোলকহীন চিতাবাঘ স্লাগ',
      character: 'Large globose calcareous external shell vs naked slug with internal vestigial shell plate',
      characterBn: 'বৃহৎ গোলাকার চুনযুক্ত বহিস্থ খোলক বনাম চামড়ায় দাগযুক্ত খোলকহীন স্লাগ',
      couplets: [
        {
          lead: 'Large globose exterior shell up to 4-5 cm in diameter with 4 to 5 convex whorls; shell creamy buff to yellowish-brown with faint spiral stripes; hibernates by secreting a thick chalky calcareous epiphragm over the aperture; quintessential textbook land snail.',
          leadBn: '৪-৫ সেমি প্রশস্ত গোলাকার প্যাঁচানো বহিস্থ খোলক; হাল্কা বাদামি রঙের; শীতকালে খোলকের মুখে চুনযুক্ত এপিফ্রাগম ঢাকনা তৈরি করে নিষ্ক্রিয় থাকে।',
          diagnosticFeature: 'Helix pomatia: Large globose external spiral shell, calcareous epiphragm in winter, terrestrial',
          diagnosticFeatureBn: 'হেলিক্স পোমাটিয়া: বৃহৎ গোলাকার বহিস্থ খোলক, রোমান শামুক',
          resultType: 'species',
          speciesId: 'sp-helix-pomatia',
          rationaleEn: 'Resolves to Roman snail / Burgundy snail (Helix pomatia: Helicidae)',
          rationaleBn: 'রোমান শামুক (হেলিক্স পোমাটিয়া: হেলিচিডি পরিবার)'
        },
        {
          lead: 'Large terrestrial slug up to 10-20 cm lacking an external shell; anterior mantle shield bears a small internal hidden calcareous shell disc; body pale brown or grey marked with distinctive dark leopard-like spots and longitudinal stripes; pneumostome located on posterior half of mantle.',
          leadBn: '১০-২০ সেমি দীর্ঘ বহিস্থ খোলকহীন স্থলচর স্লাগ; ম্যান্টলের নিচে একটি ক্ষুদ্র লুকানো প্লেট থাকে; পিঠের ওপর চিতাবাঘের মতো ফুটকি ও ডোরা দাগ থাকে।',
          diagnosticFeature: 'Limax maximus: Naked slug, internal shell disc, leopard-spotted dorsal pattern, nocturnal',
          diagnosticFeatureBn: 'লিমেক্স ম্যাক্সিমাস: খোলকহীন স্লাগ, চিতাবাঘের মতো দাগ, চিতাবাঘ স্লাগ',
          resultType: 'species',
          speciesId: 'sp-limax-maximus',
          rationaleEn: 'Resolves to Leopard slug / Great grey slug (Limax maximus: Limacidae)',
          rationaleBn: 'চিতাবাঘ স্লাগ (লিমেক্স ম্যাক্সিমাস: লিমাসিডি পরিবার)'
        }
      ]
    },
    {
      id: 8,
      title: 'Class Cephalopoda: External Chambered Shell vs Internal Shell / Shell-less',
      titleBn: 'সেফালোপোডা শ্রেণি: বহিস্থ প্রকোষ্ঠযুক্ত খোলক বনাম অভ্যন্তরীণ খোলক/খোলকহীন',
      character: 'Multi-chambered external spiral planospiral shell with siphuncle vs internal shell or shell lost',
      characterBn: 'সাইফাঙ্কলযুক্ত বহিস্থ বহুপ্রকোষ্ঠী খোলক বনাম অভ্যন্তরীণ কঙ্কাল বা খোলকহীন দেহ',
      couplets: [
        {
          lead: 'Possesses a smooth, multi-chambered external planospiral calcareous shell partitioned into gas-filled buoyant chambers connected by a central living tissue tube (siphuncle); up to 90 slender suckerless tentacles; primitive eye lacking lens; 4 gills.',
          leadBn: 'গ্যাসপূর্ণ বহু প্রকোষ্ঠে বিভক্ত বহিস্থ চ্যাপ্টা সর্পিলাকার খোলক যা সাইফাঙ্কল নালী দ্বারা যুক্ত; চোষকবিহীন ৯০টি কর্ষিকা; লেন্সবিহীন চোখ; ৪টি ফুলকা।',
          diagnosticFeature: 'Subclass Nautiloidea (Nautilus pompilius): External multichambered gas shell, siphuncle, 90 tentacles',
          diagnosticFeatureBn: 'নটিলোইডিয়া (নটিলাস পম্পিলিয়াস): বহিস্থ প্রকোষ্ঠময় খোলক, ৯০টি কর্ষিকা',
          resultType: 'species',
          speciesId: 'sp-nautilus-pompilius',
          rationaleEn: 'Resolves to Chambered nautilus (Nautilus pompilius: Nautilidae)',
          rationaleBn: 'চেম্বার্ড নটিলাস (নটিলাস পম্পিলিয়াস: নটিলিডি পরিবার)'
        },
        {
          lead: 'Subclass Coleoidea: Shell internalized, reduced, or completely absent; 2 gills; 8 arms (plus 2 retractile tentacles in decapods) equipped with cups/suckers; ink sac present; advanced lens-bearing eyes with iris.',
          leadBn: 'কোলিঅইডিয়া উপশ্রেণি: খোলক অভ্যন্তরীণ, হ্রাসপ্রাপ্ত বা সম্পূর্ণ অনুপস্থিত; ২টি ফুলকা; ৮টি বা ১০টি চোষকযুক্ত বাহু; কালিথলি ও লেন্সযুক্ত উন্নত চোখ।',
          diagnosticFeature: 'Subclass Coleoidea: Internalized or absent shell, 8 or 10 sucker-bearing appendages, ink sac',
          diagnosticFeatureBn: 'কোলিঅইডিয়া: অভ্যন্তরীণ বা বিলুপ্ত খোলক, চোষকযুক্ত বাহু, কালিথলি',
          resultType: 'next_step',
          nextStepId: 9
        }
      ]
    },
    {
      id: 9,
      title: 'Coleoidea: 8-Armed Octopuses vs 10-Appendage Decapodiformes (Squid & Cuttlefish)',
      titleBn: 'কোলিঅইডিয়া: ৮-বাহুযুক্ত অক্টোপাস বনাম ১০-উপাঙ্গযুক্ত স্কুইড ও ক্যাটলফিশ',
      character: '8 sessile equal arms without tentacles or internal shell vs 8 arms + 2 longer retractile tentacles with internal cuttlebone/gladius',
      characterBn: 'খোলকহীন ৮টি সমান বাহু বনাম ক্যাটলবোন/গ্লাডিয়াসযুক্ত ৮টি বাহু ও ২টি দীর্ঘ কর্ষিকা',
      couplets: [
        {
          lead: 'Globose, bag-like mantle with eight flexible equal-length arms bearing two rows of muscular suckers; tentacles completely absent; shell completely lost; benthic rock/reef inhabitant displaying complex camouflage and cognitive behaviors.',
          leadBn: 'গোলাকার থলের মতো দেহ যাতে দুই সারির চোষকযুক্ত ৮টি নমনীয় বাহু থাকে; কর্ষিকা নেই; খোলক সম্পূর্ণরূপে বিলুপ্ত; অসাধারণ ক্যামোফ্লেজ ও বুদ্ধিমত্তা।',
          diagnosticFeature: 'Octopus vulgaris: 8 equal arms with biserial suckers, no shell or tentacles, benthic',
          diagnosticFeatureBn: 'অক্টোপাস ভালগারিস: ৮টি চোষক বাহু, খোলক ও কর্ষিকাহীন, সাধারণ অক্টোপাস',
          resultType: 'species',
          speciesId: 'sp-octopus-vulgaris',
          rationaleEn: 'Resolves to Common octopus (Octopus vulgaris: Octopodidae)',
          rationaleBn: 'সাধারণ অক্টোপাস (অক্টোপাস ভালগারিস: অকটোপোডিডি পরিবার)'
        },
        {
          lead: 'Superorder Decapodiformes: Ten appendages (8 sessile arms plus 2 longer extensible prey-capturing tentacles with expanded terminal clubs); internal support structure present inside dorsal mantle.',
          leadBn: 'ডেকাপোডিফরমিস: দশটি উপাঙ্গ (৮টি সাধারণ বাহু এবং শিকার ধরার জন্য ২টি দীর্ঘ সম্প্রসারণশীল কর্ষিকা); ম্যান্টলের ভেতরে কঙ্কাল কাঠামো থাকে।',
          diagnosticFeature: 'Decapodiformes: 8 arms + 2 tentacles, internal cuttlebone or chitinous pen',
          diagnosticFeatureBn: 'ডেকাপোডিফরমিস: ৮টি বাহু ও ২টি কর্ষিকা, ক্যাটলবোন বা পেন',
          resultType: 'next_step',
          nextStepId: 10
        }
      ]
    },
    {
      id: 10,
      title: 'Decapodiformes: Cuttlefish vs Squid',
      titleBn: 'ডেকাপোডিফরমিস: ক্যাটলফিশ বনাম স্কুইড',
      character: 'Broad body with internal porous calcified cuttlebone vs slender torpedo body with flexible chitinous gladius',
      characterBn: 'ক্যাটলবোনযুক্ত প্রশস্ত চ্যাপ্টা দেহ বনাম গ্লাডিয়াসযুক্ত সরু টর্পেডো আকৃতির দেহ',
      couplets: [
        {
          lead: 'Broad, dorsoventrally flattened oval mantle bordered along its entire length by a narrow undulating fin ribbon; internal skeleton is a thick, oval porous chalky-calcified buoyancy cuttlebone; distinctive W-shaped pupil.',
          leadBn: 'উভয় পাশে অবিচ্ছিন্ন পাখনাযুক্ত প্রশস্ত চ্যাপ্টা ডিম্বাকৃতি দেহ; ভেতরে পুরু ছিদ্রাল চুনময় ক্যাটলবোন থাকে; চোখের তারারন্ধ্র ইংরেজি W বর্ণের মতো।',
          diagnosticFeature: 'Sepia officinalis: Broad flattened mantle, internal calcified cuttlebone, W-shaped pupil, ribbon fins',
          diagnosticFeatureBn: 'সেপিয়া অফিসিনালিস: চ্যাপ্টা দেহ, চুনযুক্ত ক্যাটলবোন, ডব্লিউ আকৃতির চোখ',
          resultType: 'species',
          speciesId: 'sp-sepia-officinalis',
          rationaleEn: 'Resolves to Common cuttlefish (Sepia officinalis: Sepiidae)',
          rationaleBn: 'কমন ক্যাটলফিশ (সেপিয়া অফিসিনালিস: সেপিয়িডি পরিবার)'
        },
        {
          lead: 'Elongated, streamlined torpedo-shaped cylindrical mantle equipped with a pair of large rhomboid or triangular terminal swimming fins on posterior third; internal skeleton is a thin, flexible feather-shaped transparent chitinous rod (gladius or pen); fast pelagic jet-propelled swimmer.',
          leadBn: 'পেছনের দিকে একজোড়া ত্রিভুজাকার পাখনাযুক্ত সরু টর্পেডো আকৃতির দ্রুত সাঁতারু দেহ; ভেতরে পাতলা স্বচ্ছ পালকসদৃশ কাইটিনময় গ্লাডিয়াস বা পেন থাকে।',
          diagnosticFeature: 'Loligo vulgaris: Streamlined torpedo mantle, terminal triangular fins, internal chitinous gladius',
          diagnosticFeatureBn: 'ললিগো ভালগারিস: টর্পেডো আকৃতির দেহ, ত্রিভুজাকার পাখনা, কাইটিন গ্লাডিয়াস',
          resultType: 'species',
          speciesId: 'sp-loligo-vulgaris',
          rationaleEn: 'Resolves to European squid (Loligo vulgaris: Loliginidae)',
          rationaleBn: 'ইউরোপিয়ান স্কুইড (ললিগো ভালগারিস: লোলিগিনিডি পরিবার)'
        }
      ]
    }
  ]
};
