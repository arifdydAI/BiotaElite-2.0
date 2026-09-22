import type { TaxonNode } from '../types/biodiversity';

export const SEED_TAXA: TaxonNode[] = [
  {
    "id": "taxon-eisenia",
    "scientificName": "Eisenia",
    "name": "Eisenia",
    "rank": "genus",
    "parentId": "taxon-lumbricidae",
    "parentTaxonId": "taxon-lumbricidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Malm, 1877",
    "commonNameEn": "Compost earthworms",
    "commonNameBn": "কম্পোস্ট কেঁচো গণ",
    "description": "Epigeic composting earthworms widely utilized in vermiculture and soil ecology research.",
    "isVerified": true
  },
  {
    "id": "taxon-sabellida",
    "scientificName": "Sabellida",
    "name": "Sabellida",
    "rank": "order",
    "parentId": "taxon-polychaeta",
    "parentTaxonId": "taxon-polychaeta",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fauchald, 1977",
    "commonNameEn": "Fan worms and feather dusters",
    "commonNameBn": "পাখাযুক্ত সামুদ্রিক নালী-কৃমি বর্গ",
    "description": "Sedentary polychaete tube-dwelling worms possessing a prominent ciliated branchial radiolar crown.",
    "isVerified": true
  },
  {
    "id": "taxon-sabellidae",
    "scientificName": "Sabellidae",
    "name": "Sabellidae",
    "rank": "family",
    "parentId": "taxon-sabellida",
    "parentTaxonId": "taxon-sabellida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Latreille, 1825",
    "commonNameEn": "Feather duster worms",
    "commonNameBn": "পালক-ঝাড়ু কৃমি পরিবার",
    "description": "Tube-building marine polychaetes lacking operculum and utilizing mucilaginous radioles for filter feeding.",
    "isVerified": true
  },
  {
    "id": "taxon-sabella",
    "scientificName": "Sabella",
    "name": "Sabella",
    "rank": "genus",
    "parentId": "taxon-sabellidae",
    "parentTaxonId": "taxon-sabellidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1767",
    "commonNameEn": "Fanworms",
    "commonNameBn": "পাখা-কৃমি গণ",
    "description": "Large benthic tubiculous polychaetes with bilateral radiolar spirals.",
    "isVerified": true
  },
  {
    "id": "taxon-sepiida",
    "scientificName": "Sepiida",
    "name": "Sepiida",
    "rank": "order",
    "parentId": "taxon-cephalopoda",
    "parentTaxonId": "taxon-cephalopoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "de Blainville, 1824",
    "commonNameEn": "Cuttlefishes",
    "commonNameBn": "কাটলফিশ বর্গ",
    "description": "Decapodiform cephalopods possessing an internal calcified aragonitic porous cuttlebone and w-shaped pupils.",
    "isVerified": true
  },
  {
    "id": "taxon-sepiidae",
    "scientificName": "Sepiidae",
    "name": "Sepiidae",
    "rank": "family",
    "parentId": "taxon-sepiida",
    "parentTaxonId": "taxon-sepiida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Leach, 1817",
    "commonNameEn": "True cuttlefishes",
    "commonNameBn": "আদর্শ কাটলফিশ পরিবার",
    "description": "Benthic cuttlefishes capable of instantaneous neuro-chromatophore physiological camouflage.",
    "isVerified": true
  },
  {
    "id": "taxon-sepia",
    "scientificName": "Sepia",
    "name": "Sepia",
    "rank": "genus",
    "parentId": "taxon-sepiidae",
    "parentTaxonId": "taxon-sepiidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Common cuttlefishes",
    "commonNameBn": "কাটলফিশ গণ",
    "description": "Archetypal cuttlefish genus with high-acuity polarized vision and chitinous suckered tentacular arms.",
    "isVerified": true
  },
  {
    "id": "taxon-myopsida",
    "scientificName": "Myopsida",
    "name": "Myopsida",
    "rank": "order",
    "parentId": "taxon-cephalopoda",
    "parentTaxonId": "taxon-cephalopoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "d'Orbigny, 1841",
    "commonNameEn": "Inshore squids",
    "commonNameBn": "উপকূলীয় স্কুইড বর্গ",
    "description": "Pelagic decapodiformes possessing eyes covered by a corneal membrane and eight arms plus two feeding tentacles.",
    "isVerified": true
  },
  {
    "id": "taxon-loliginidae",
    "scientificName": "Loliginidae",
    "name": "Loliginidae",
    "rank": "family",
    "parentId": "taxon-myopsida",
    "parentTaxonId": "taxon-myopsida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lesueur, 1821",
    "commonNameEn": "Pencil squids",
    "commonNameBn": "পেন্সিল স্কুইড পরিবার",
    "description": "Commercially vital inshore squids with elongate torpedo-like mantle and terminal lateral fins.",
    "isVerified": true
  },
  {
    "id": "taxon-loligo",
    "scientificName": "Loligo",
    "name": "Loligo",
    "rank": "genus",
    "parentId": "taxon-loliginidae",
    "parentTaxonId": "taxon-loliginidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lamarck, 1798",
    "commonNameEn": "Common squids",
    "commonNameBn": "স্কুইড গণ",
    "description": "Textbook cephalopod dissection genus possessing giant axon system historic to neurobiology.",
    "isVerified": true
  },
  {
    "id": "taxon-pectinida",
    "scientificName": "Pectinida",
    "name": "Pectinida",
    "rank": "order",
    "parentId": "taxon-bivalvia",
    "parentTaxonId": "taxon-bivalvia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1854",
    "commonNameEn": "Scallops and allies",
    "commonNameBn": "ঝিনুক স্কেলাপ বর্গ",
    "description": "Epifaunal and swimming bivalves with single large adductor muscle and numerous mantle photoreceptors.",
    "isVerified": true
  },
  {
    "id": "taxon-pectinidae",
    "scientificName": "Pectinidae",
    "name": "Pectinidae",
    "rank": "family",
    "parentId": "taxon-pectinida",
    "parentTaxonId": "taxon-pectinida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "True scallops",
    "commonNameBn": "স্কেলাপ পরিবার",
    "description": "Fan-shaped bivalves capable of jet propulsion swimming by rapid shell clapping.",
    "isVerified": true
  },
  {
    "id": "taxon-pecten",
    "scientificName": "Pecten",
    "name": "Pecten",
    "rank": "genus",
    "parentId": "taxon-pectinidae",
    "parentTaxonId": "taxon-pectinidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "O. F. Müller, 1776",
    "commonNameEn": "Scallops",
    "commonNameBn": "স্কেলাপ গণ",
    "description": "Classic textbook bivalve with radiating ribbed valve margins and sensory mantle eyes.",
    "isVerified": true
  },
  {
    "id": "taxon-limacidae",
    "scientificName": "Limacidae",
    "name": "Limacidae",
    "rank": "family",
    "parentId": "taxon-stylommatophora",
    "parentTaxonId": "taxon-stylommatophora",
    "status": "accepted",
    "module": "general",
    "authorYear": "Lamarck, 1801",
    "commonNameEn": "Keelback slugs",
    "commonNameBn": "স্থলজ স্লাগ পরিবার",
    "description": "Air-breathing pulmonate terrestrial gastropods with shell internalized to a vestigial calcified plate.",
    "isVerified": true
  },
  {
    "id": "taxon-limax",
    "scientificName": "Limax",
    "name": "Limax",
    "rank": "genus",
    "parentId": "taxon-limacidae",
    "parentTaxonId": "taxon-limacidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Leopard slugs",
    "commonNameBn": "চিতাবাঘ স্লাগ গণ",
    "description": "Large omnivorous nocturnal terrestrial pulmonates featuring aerial courtship suspended by mucus cords.",
    "isVerified": true
  },
  {
    "id": "taxon-scorpiones",
    "scientificName": "Scorpiones",
    "name": "Scorpiones",
    "rank": "order",
    "parentId": "taxon-arachnida",
    "parentTaxonId": "taxon-arachnida",
    "status": "accepted",
    "module": "general",
    "authorYear": "C. L. Koch, 1837",
    "commonNameEn": "Scorpions",
    "commonNameBn": "বিচ্ছু বা কাঁকড়াবিছা বর্গ",
    "description": "Arachnids with grasping chelate pedipalps and narrow segmented metasoma terminating in a venomous telson.",
    "isVerified": true
  },
  {
    "id": "taxon-scorpionidae",
    "scientificName": "Scorpionidae",
    "name": "Scorpionidae",
    "rank": "family",
    "parentId": "taxon-scorpiones",
    "parentTaxonId": "taxon-scorpiones",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Burrowing scorpions",
    "commonNameBn": "গর্তজীবী বিচ্ছু পরিবার",
    "description": "Robust scorpions with massive crab-like pedipalp claws and strong fossorial legs.",
    "isVerified": true
  },
  {
    "id": "taxon-pandinus",
    "scientificName": "Pandinus",
    "name": "Pandinus",
    "rank": "genus",
    "parentId": "taxon-scorpionidae",
    "parentTaxonId": "taxon-scorpionidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Thorell, 1876",
    "commonNameEn": "Emperor scorpions",
    "commonNameBn": "সম্রাট বিচ্ছু গণ",
    "description": "Giant African rainforest scorpions exhibiting brilliant cyan UV fluorescence.",
    "isVerified": true
  },
  {
    "id": "taxon-branchiopoda",
    "scientificName": "Branchiopoda",
    "name": "Branchiopoda",
    "rank": "class",
    "parentId": "taxon-arthropoda",
    "parentTaxonId": "taxon-arthropoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1817",
    "commonNameEn": "Branchiopods and water fleas",
    "commonNameBn": "ব্রাঙ্কিওপড ক্রাস্টেসিয়ান শ্রেণি",
    "description": "Freshwater crustaceans with leaf-like (phyllopodous) thoracic appendages serving both gas exchange and filter-feeding.",
    "isVerified": true
  },
  {
    "id": "taxon-anomopoda",
    "scientificName": "Anomopoda",
    "name": "Anomopoda",
    "rank": "order",
    "parentId": "taxon-branchiopoda",
    "parentTaxonId": "taxon-branchiopoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Sars, 1865",
    "commonNameEn": "Water fleas",
    "commonNameBn": "জলের মাছি বর্গ",
    "description": "Microscopic bivalved carapace planktonic crustaceans with large compound eye and swimming antennae.",
    "isVerified": true
  },
  {
    "id": "taxon-daphniidae",
    "scientificName": "Daphniidae",
    "name": "Daphniidae",
    "rank": "family",
    "parentId": "taxon-anomopoda",
    "parentTaxonId": "taxon-anomopoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Straus, 1820",
    "commonNameEn": "Common water fleas",
    "commonNameBn": "ডাফনিয়া পরিবার",
    "description": "Cyclical parthenogens forming vital trophic base in limnetic freshwater ecosystems worldwide.",
    "isVerified": true
  },
  {
    "id": "taxon-daphnia",
    "scientificName": "Daphnia",
    "name": "Daphnia",
    "rank": "genus",
    "parentId": "taxon-daphniidae",
    "parentTaxonId": "taxon-daphniidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "O. F. Müller, 1785",
    "commonNameEn": "Daphnia water fleas",
    "commonNameBn": "ডাফনিয়া গণ",
    "description": "Premier model organism in ecotoxicology, developmental biology, and phenotypic plasticity.",
    "isVerified": true
  },
  {
    "id": "taxon-blattodea",
    "scientificName": "Blattodea",
    "name": "Blattodea",
    "rank": "order",
    "parentId": "taxon-insecta",
    "parentTaxonId": "taxon-insecta",
    "status": "accepted",
    "module": "general",
    "authorYear": "Brunner von Wattenwyl, 1882",
    "commonNameEn": "Cockroaches and termites",
    "commonNameBn": "আরশোলা ও উইপোকা বর্গ",
    "description": "Hemimetabolous neopteran insects with flattened dorsoventral body, shielding pronotum, and cerci.",
    "isVerified": true
  },
  {
    "id": "taxon-blattidae",
    "scientificName": "Blattidae",
    "name": "Blattidae",
    "rank": "family",
    "parentId": "taxon-blattodea",
    "parentTaxonId": "taxon-blattodea",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1810",
    "commonNameEn": "True cockroaches",
    "commonNameBn": "আদর্শ আরশোলা পরিবার",
    "description": "Cosmopolitan synanthropic cockroaches with cursorial spiny legs and omnivorous chewing mouthparts.",
    "isVerified": true
  },
  {
    "id": "taxon-periplaneta",
    "scientificName": "Periplaneta",
    "name": "Periplaneta",
    "rank": "genus",
    "parentId": "taxon-blattidae",
    "parentTaxonId": "taxon-blattidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Burmeister, 1838",
    "commonNameEn": "American cockroaches",
    "commonNameBn": "তেলাপোকা গণ",
    "description": "The standard textbook insect dissection and neurophysiology laboratory subject globally.",
    "isVerified": true
  },
  {
    "id": "taxon-drosophilidae",
    "scientificName": "Drosophilidae",
    "name": "Drosophilidae",
    "rank": "family",
    "parentId": "taxon-diptera",
    "parentTaxonId": "taxon-diptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rondani, 1856",
    "commonNameEn": "Fruit flies and vinegar flies",
    "commonNameBn": "ফল মাছি পরিবার",
    "description": "Small acalyptrate dipterans feeding on fermenting fruit, yeasts, and sap exudates.",
    "isVerified": true
  },
  {
    "id": "taxon-drosophila",
    "scientificName": "Drosophila",
    "name": "Drosophila",
    "rank": "genus",
    "parentId": "taxon-drosophilidae",
    "parentTaxonId": "taxon-drosophilidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fallén, 1823",
    "commonNameEn": "Model fruit flies",
    "commonNameBn": "ড্রসোফিলা গণ",
    "description": "The paramount genetic and developmental model organism in modern biological science.",
    "isVerified": true
  },
  {
    "id": "taxon-odonata",
    "scientificName": "Odonata",
    "name": "Odonata",
    "rank": "order",
    "parentId": "taxon-insecta",
    "parentTaxonId": "taxon-insecta",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fabricius, 1793",
    "commonNameEn": "Dragonflies and damselflies",
    "commonNameBn": "ফড়িং ও ড্যামসেলফ্লাই বর্গ",
    "description": "Paleopterous aerial predatory insects with multifacetted compound eyes and aquatic predatory naiads.",
    "isVerified": true
  },
  {
    "id": "taxon-aeshnidae",
    "scientificName": "Aeshnidae",
    "name": "Aeshnidae",
    "rank": "family",
    "parentId": "taxon-odonata",
    "parentTaxonId": "taxon-odonata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rambur, 1842",
    "commonNameEn": "Darner dragonflies",
    "commonNameBn": "ডায়নামিক শিকারী ফড়িং পরিবার",
    "description": "Large swift-flying dragonflies with contiguous compound eyes and high aerial maneuverability.",
    "isVerified": true
  },
  {
    "id": "taxon-anax",
    "scientificName": "Anax",
    "name": "Anax",
    "rank": "genus",
    "parentId": "taxon-aeshnidae",
    "parentTaxonId": "taxon-aeshnidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Leach, 1815",
    "commonNameEn": "Green darners",
    "commonNameBn": "সবুজ ডার্নার ফড়িং গণ",
    "description": "Iconic textbook migratory dragonfly genus with prehensile labial mask in aquatic nymphs.",
    "isVerified": true
  },
  {
    "id": "taxon-anthoathecata",
    "scientificName": "Anthoathecata",
    "name": "Anthoathecata",
    "rank": "order",
    "parentId": "taxon-hydrozoa",
    "parentTaxonId": "taxon-hydrozoa",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cornelius, 1992",
    "commonNameEn": "Athecate hydroids and hydras",
    "commonNameBn": "অ্যাথেকেট হাইড্রয়েড বর্গ",
    "description": "Hydrozoans lacking rigid theca around hydranths; includes solitary freshwater polyps.",
    "isVerified": true
  },
  {
    "id": "taxon-hydridae",
    "scientificName": "Hydridae",
    "name": "Hydridae",
    "rank": "family",
    "parentId": "taxon-anthoathecata",
    "parentTaxonId": "taxon-anthoathecata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Dana, 1846",
    "commonNameEn": "Hydras",
    "commonNameBn": "হাইড্রা পরিবার",
    "description": "Solitary freshwater polyps exhibiting stem cell-mediated continuous regeneration and budding.",
    "isVerified": true
  },
  {
    "id": "taxon-hydra",
    "scientificName": "Hydra",
    "name": "Hydra",
    "rank": "genus",
    "parentId": "taxon-hydridae",
    "parentTaxonId": "taxon-hydridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Freshwater hydras",
    "commonNameBn": "মিঠাপানির হাইড্রা গণ",
    "description": "The universally standard school and university textbook cnidarian demonstrating tissue-grade diploblasty.",
    "isVerified": true
  },
  {
    "id": "taxon-mussidae",
    "scientificName": "Mussidae",
    "name": "Mussidae",
    "rank": "family",
    "parentId": "taxon-scleractinia",
    "parentTaxonId": "taxon-scleractinia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Ortmann, 1890",
    "commonNameEn": "Brain corals",
    "commonNameBn": "মস্তিষ্ক প্রবাল পরিবার",
    "description": "Massive reef-building scleractinian stony corals with meandroid valley-and-ridge corallite valleys.",
    "isVerified": true
  },
  {
    "id": "taxon-diploria",
    "scientificName": "Diploria",
    "name": "Diploria",
    "rank": "genus",
    "parentId": "taxon-mussidae",
    "parentTaxonId": "taxon-mussidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Milne Edwards & Haime, 1848",
    "commonNameEn": "Grooved brain corals",
    "commonNameBn": "খাঁজযুক্ত মস্তিষ্ক প্রবাল গণ",
    "description": "Colonial zooxanthellate stony corals building massive hemispherical heads in tropical reefs.",
    "isVerified": true
  },
  {
    "id": "taxon-leucosoleniida",
    "scientificName": "Leucosoleniida",
    "name": "Leucosoleniida",
    "rank": "order",
    "parentId": "taxon-calcarea",
    "parentTaxonId": "taxon-calcarea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Hartman, 1958",
    "commonNameEn": "Asconoid calcareous sponges",
    "commonNameBn": "অ্যাসকনয়েড চুনযুক্ত স্পঞ্জ বর্গ",
    "description": "Primitive calcareous sponges with simplest asconoid tubular organization lacking choanocyte folding.",
    "isVerified": true
  },
  {
    "id": "taxon-leucosoleniidae",
    "scientificName": "Leucosoleniidae",
    "name": "Leucosoleniidae",
    "rank": "family",
    "parentId": "taxon-leucosoleniida",
    "parentTaxonId": "taxon-leucosoleniida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Kölliker, 1864",
    "commonNameEn": "Leucosolenia sponges",
    "commonNameBn": "লিউকোসোলেনিয়া পরিবার",
    "description": "Branching networks of thin-walled asconoid tubes with simple oscular chimneys.",
    "isVerified": true
  },
  {
    "id": "taxon-leucosolenia",
    "scientificName": "Leucosolenia",
    "name": "Leucosolenia",
    "rank": "genus",
    "parentId": "taxon-leucosoleniidae",
    "parentTaxonId": "taxon-leucosoleniidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bowerbank, 1864",
    "commonNameEn": "White lace sponges",
    "commonNameBn": "লিউকোসোলেনিয়া গণ",
    "description": "The definitive textbook representative of the fundamental asconoid body construction in Metazoa.",
    "isVerified": true
  },
  {
    "id": "taxon-cestida",
    "scientificName": "Cestida",
    "name": "Cestida",
    "rank": "order",
    "parentId": "taxon-tentaculata",
    "parentTaxonId": "taxon-tentaculata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gegenbaur, 1856",
    "commonNameEn": "Ribbon comb jellies",
    "commonNameBn": "ফিতাকৃতির কম্ব জেলি বর্গ",
    "description": "Pelagic tentaculate ctenophores extremely compressed in sagittal plane forming undulating ribbons up to 1.5 m long.",
    "isVerified": true
  },
  {
    "id": "taxon-cestidae",
    "scientificName": "Cestidae",
    "name": "Cestidae",
    "rank": "family",
    "parentId": "taxon-cestida",
    "parentTaxonId": "taxon-cestida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gegenbaur, 1856",
    "commonNameEn": "Venus' girdles",
    "commonNameBn": "ভেনাস গার্ডল পরিবার",
    "description": "Elongate ribbon-like ctenophores swimming with serpentine muscular undulations.",
    "isVerified": true
  },
  {
    "id": "taxon-cestum",
    "scientificName": "Cestum",
    "name": "Cestum",
    "rank": "genus",
    "parentId": "taxon-cestidae",
    "parentTaxonId": "taxon-cestidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lesueur, 1813",
    "commonNameEn": "Venus' girdle ribbons",
    "commonNameBn": "ভেনাস গার্ডল গণ",
    "description": "Classic textbook ctenophore demonstrating extreme morphological radiation within Tentaculata.",
    "isVerified": true
  },
  {
    "id": "taxon-forcipulatida",
    "scientificName": "Forcipulatida",
    "name": "Forcipulatida",
    "rank": "order",
    "parentId": "taxon-asteroidea",
    "parentTaxonId": "taxon-asteroidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Perrier, 1884",
    "commonNameEn": "Forcipulate sea stars",
    "commonNameBn": "ফরসিপুলেটা তারা মাছ বর্গ",
    "description": "Order of sea stars characterized by distinctive pedunculate pedicellariae with three skeletal ossicles.",
    "isVerified": true
  },
  {
    "id": "taxon-asteriidae",
    "scientificName": "Asteriidae",
    "name": "Asteriidae",
    "rank": "family",
    "parentId": "taxon-forcipulatida",
    "parentTaxonId": "taxon-forcipulatida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1840",
    "commonNameEn": "Common sea stars",
    "commonNameBn": "আদর্শ তারা মাছ পরিবার",
    "description": "Forcipulate sea stars equipped with crossed and straight pedicellariae and eversible cardiac stomach.",
    "isVerified": true
  },
  {
    "id": "taxon-asterias",
    "scientificName": "Asterias",
    "name": "Asterias",
    "rank": "genus",
    "parentId": "taxon-asteriidae",
    "parentTaxonId": "taxon-asteriidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Starfishes",
    "commonNameBn": "তারা মাছ গণ",
    "description": "The premier textbook dissection type representing water vascular system and pentaradial symmetry.",
    "isVerified": true
  },
  {
    "id": "taxon-echinidae",
    "scientificName": "Echinidae",
    "name": "Echinidae",
    "rank": "family",
    "parentId": "taxon-camarodonta",
    "parentTaxonId": "taxon-camarodonta",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1825",
    "commonNameEn": "Edible sea urchins",
    "commonNameBn": "খাদ্যোপযোগী সামুদ্রিক আর্চিন পরিবার",
    "description": "Globular regular echinoids with rigid test and Aristotle's lantern equipped with keeled teeth.",
    "isVerified": true
  },
  {
    "id": "taxon-echinus",
    "scientificName": "Echinus",
    "name": "Echinus",
    "rank": "genus",
    "parentId": "taxon-echinidae",
    "parentTaxonId": "taxon-echinidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "European sea urchins",
    "commonNameBn": "আর্চিন গণ",
    "description": "Historical textbook model organism for embryological cleavage and deuterostome fertilization experiments.",
    "isVerified": true
  },
  {
    "id": "taxon-crinoidea",
    "scientificName": "Crinoidea",
    "name": "Crinoidea",
    "rank": "class",
    "parentId": "taxon-echinodermata",
    "parentTaxonId": "taxon-echinodermata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Miller, 1821",
    "commonNameEn": "Sea lilies and feather stars",
    "commonNameBn": "পালক তারা ও সি-লিলি শ্রেণি",
    "description": "The most basal living echinoderm class; sessile stalked or motile unstalked suspension feeders with upward-facing mouth.",
    "isVerified": true
  },
  {
    "id": "taxon-comatulida",
    "scientificName": "Comatulida",
    "name": "Comatulida",
    "rank": "order",
    "parentId": "taxon-crinoidea",
    "parentTaxonId": "taxon-crinoidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "A. H. Clark, 1908",
    "commonNameEn": "Feather stars",
    "commonNameBn": "পালক তারা বর্গ",
    "description": "Free-living crinoids shedding larval stalk and swimming or crawling with branched pinnulate arms.",
    "isVerified": true
  },
  {
    "id": "taxon-antedonidae",
    "scientificName": "Antedonidae",
    "name": "Antedonidae",
    "rank": "family",
    "parentId": "taxon-comatulida",
    "parentTaxonId": "taxon-comatulida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Norman, 1865",
    "commonNameEn": "Mediterranean feather stars",
    "commonNameBn": "অ্যান্টিডন পরিবার",
    "description": "Feather stars equipped with cirri on the centrodorsal plate and ten pinnulated flexible arms.",
    "isVerified": true
  },
  {
    "id": "taxon-antedon",
    "scientificName": "Antedon",
    "name": "Antedon",
    "rank": "genus",
    "parentId": "taxon-antedonidae",
    "parentTaxonId": "taxon-antedonidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "de Fréminville, 1811",
    "commonNameEn": "Feather stars",
    "commonNameBn": "অ্যান্টিডন গণ",
    "description": "Textbook representative of Class Crinoidea illustrating the ancestral echinoderm ambulacral filter-feeding mechanism.",
    "isVerified": true
  },
  {
    "id": "taxon-ambystomatidae",
    "scientificName": "Ambystomatidae",
    "name": "Ambystomatidae",
    "rank": "family",
    "parentId": "taxon-caudata",
    "parentTaxonId": "taxon-caudata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1850",
    "commonNameEn": "Mole salamanders",
    "commonNameBn": "মোল স্যালামান্ডার পরিবার",
    "description": "Robust terrestrial and aquatic urodeles with costal grooves, internal fertilization, and frequent neoteny.",
    "isVerified": true
  },
  {
    "id": "taxon-ambystoma",
    "scientificName": "Ambystoma",
    "name": "Ambystoma",
    "rank": "genus",
    "parentId": "taxon-ambystomatidae",
    "parentTaxonId": "taxon-ambystomatidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Tschudi, 1838",
    "commonNameEn": "Mole salamanders and axolotls",
    "commonNameBn": "অ্যাক্সোলটল গণ",
    "description": "Renowned worldwide in regenerative biology, genetics, and comparative vertebrate embryology.",
    "isVerified": true
  },
  {
    "id": "taxon-dendrobatidae",
    "scientificName": "Dendrobatidae",
    "name": "Dendrobatidae",
    "rank": "family",
    "parentId": "taxon-anura",
    "parentTaxonId": "taxon-anura",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cope, 1865",
    "commonNameEn": "Poison dart frogs",
    "commonNameBn": "বিষাক্ত তীর ব্যাঙ পরিবার",
    "description": "Aposematically colored diurnal neotropical anurans sequestering potent batrachotoxin alkaloids.",
    "isVerified": true
  },
  {
    "id": "taxon-dendrobates",
    "scientificName": "Dendrobates",
    "name": "Dendrobates",
    "rank": "genus",
    "parentId": "taxon-dendrobatidae",
    "parentTaxonId": "taxon-dendrobatidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Wagler, 1830",
    "commonNameEn": "Poison dart frogs",
    "commonNameBn": "তীর ব্যাঙ গণ",
    "description": "Classic textbook example of aposematism, warning coloration, and specialized parental care in amphibians.",
    "isVerified": true
  },
  {
    "id": "taxon-crocodilidae",
    "scientificName": "Crocodylidae",
    "name": "Crocodylidae",
    "rank": "family",
    "parentId": "taxon-crocodylia",
    "parentTaxonId": "taxon-crocodylia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cuvier, 1807",
    "commonNameEn": "True crocodiles",
    "commonNameBn": "প্রকৃত কুমির পরিবার",
    "description": "Large aquatic archosaurian reptiles with narrow triangular snout and interlocking lower 4th teeth.",
    "isVerified": true
  },
  {
    "id": "taxon-crocodylus",
    "scientificName": "Crocodylus",
    "name": "Crocodylus",
    "rank": "genus",
    "parentId": "taxon-crocodilidae",
    "parentTaxonId": "taxon-crocodilidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Laurenti, 1768",
    "commonNameEn": "Crocodiles",
    "commonNameBn": "কুমির গণ",
    "description": "Apex amphibious predatory reptiles exhibiting sensory lingual salt glands and four-chambered hearts.",
    "isVerified": true
  },
  {
    "id": "taxon-gavialidae",
    "scientificName": "Gavialidae",
    "name": "Gavialidae",
    "rank": "family",
    "parentId": "taxon-crocodylia",
    "parentTaxonId": "taxon-crocodylia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Adams, 1854",
    "commonNameEn": "Gharials and false gharials",
    "commonNameBn": "ঘড়িয়াল পরিবার",
    "description": "Specialized piscivorous crocodylians with extremely narrow elongate jaws lined with interlocking needle teeth.",
    "isVerified": true
  },
  {
    "id": "taxon-gavialis",
    "scientificName": "Gavialis",
    "name": "Gavialis",
    "rank": "genus",
    "parentId": "taxon-gavialidae",
    "parentTaxonId": "taxon-gavialidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Oppel, 1811",
    "commonNameEn": "Fish-eating crocodiles",
    "commonNameBn": "ঘড়িয়াল গণ",
    "description": "Native to South Asian major river systems (including historical Padma/Meghna in Bangladesh); bulbous ghara on mature males.",
    "isVerified": true
  },
  {
    "id": "taxon-naja",
    "scientificName": "Naja",
    "name": "Naja",
    "rank": "genus",
    "parentId": "taxon-elapidae",
    "parentTaxonId": "taxon-elapidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Laurenti, 1768",
    "commonNameEn": "True cobras",
    "commonNameBn": "গোখরা গণ",
    "description": "Proteroglyphous elapid snakes with expandable cervical ribs producing the defensive hood and potent post-synaptic neurotoxin.",
    "isVerified": true
  },
  {
    "id": "taxon-chamaeleonidae",
    "scientificName": "Chamaeleonidae",
    "name": "Chamaeleonidae",
    "rank": "family",
    "parentId": "taxon-squamata",
    "parentTaxonId": "taxon-squamata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1825",
    "commonNameEn": "Chameleons",
    "commonNameBn": "গিরগিটি বা ক্যামেলিয়ন পরিবার",
    "description": "Specialized arboreal squamates with zygodactylous feet, independently mobile stereoscopic eyes, prehensile tail, and ballistic tongue.",
    "isVerified": true
  },
  {
    "id": "taxon-chamaeleo",
    "scientificName": "Chamaeleo",
    "name": "Chamaeleo",
    "rank": "genus",
    "parentId": "taxon-chamaeleonidae",
    "parentTaxonId": "taxon-chamaeleonidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Laurenti, 1768",
    "commonNameEn": "Typical chameleons",
    "commonNameBn": "ক্যামেলিয়ন গণ",
    "description": "Archetypal textbook lizard demonstrating structural crystal-mediated color change and ballistic tongue projection.",
    "isVerified": true
  },
  {
    "id": "taxon-columbiformes",
    "scientificName": "Columbiformes",
    "name": "Columbiformes",
    "rank": "order",
    "parentId": "taxon-aves",
    "parentTaxonId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latham, 1790",
    "commonNameEn": "Pigeons and doves",
    "commonNameBn": "কবুতর ও ঘুঘু বর্গ",
    "description": "Stout-bodied birds with short necks, fleshy cere, and specialized esophageal crop producing crop milk.",
    "isVerified": true
  },
  {
    "id": "taxon-columbidae",
    "scientificName": "Columbidae",
    "name": "Columbidae",
    "rank": "family",
    "parentId": "taxon-columbiformes",
    "parentTaxonId": "taxon-columbiformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Leach, 1820",
    "commonNameEn": "Pigeons and doves",
    "commonNameBn": "কবুতর পরিবার",
    "description": "Cosmopolitan granivorous and frugivorous birds with powerful flight pectoral musculature.",
    "isVerified": true
  },
  {
    "id": "taxon-columba",
    "scientificName": "Columba",
    "name": "Columba",
    "rank": "genus",
    "parentId": "taxon-columbidae",
    "parentTaxonId": "taxon-columbidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Pigeons",
    "commonNameBn": "কবুতর গণ",
    "description": "The universal textbook bird dissection and avian physiology model organism worldwide.",
    "isVerified": true
  },
  {
    "id": "taxon-galliformes",
    "scientificName": "Galliformes",
    "name": "Galliformes",
    "rank": "order",
    "parentId": "taxon-aves",
    "parentTaxonId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Temminck, 1820",
    "commonNameEn": "Gamefowl and pheasants",
    "commonNameBn": "মুরগি ও তিতির বর্গ",
    "description": "Heavy-bodied ground-feeding birds with blunt wings, strong scratching feet, and precocial chicks.",
    "isVerified": true
  },
  {
    "id": "taxon-phasianidae",
    "scientificName": "Phasianidae",
    "name": "Phasianidae",
    "rank": "family",
    "parentId": "taxon-galliformes",
    "parentTaxonId": "taxon-galliformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Horsfield, 1821",
    "commonNameEn": "Pheasants, junglefowl, and peafowl",
    "commonNameBn": "ময়ূর ও বনমোরগ পরিবার",
    "description": "Ground birds exhibiting pronounced sexual dimorphism, spurs on tarsi, and elaborate male displays.",
    "isVerified": true
  },
  {
    "id": "taxon-gallus",
    "scientificName": "Gallus",
    "name": "Gallus",
    "rank": "genus",
    "parentId": "taxon-phasianidae",
    "parentTaxonId": "taxon-phasianidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Brisson, 1760",
    "commonNameEn": "Junglefowl and chickens",
    "commonNameBn": "বনমোরগ গণ",
    "description": "Ancestral genus of the domestic chicken and primary experimental model in developmental embryology.",
    "isVerified": true
  },
  {
    "id": "taxon-pavo",
    "scientificName": "Pavo",
    "name": "Pavo",
    "rank": "genus",
    "parentId": "taxon-phasianidae",
    "parentTaxonId": "taxon-phasianidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Peafowl",
    "commonNameBn": "ময়ূর গণ",
    "description": "Iconic Asian birds demonstrating extreme sexual selection via iridescent elongated upper tail covert trains.",
    "isVerified": true
  },
  {
    "id": "taxon-passeridae",
    "scientificName": "Passeridae",
    "name": "Passeridae",
    "rank": "family",
    "parentId": "taxon-passeriformes",
    "parentTaxonId": "taxon-passeriformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Old World sparrows",
    "commonNameBn": "চড়ুই পরিবার",
    "description": "Small granivorous passerines with conical seed-cracking bills and high sociability.",
    "isVerified": true
  },
  {
    "id": "taxon-passer",
    "scientificName": "Passer",
    "name": "Passer",
    "rank": "genus",
    "parentId": "taxon-passeridae",
    "parentTaxonId": "taxon-passeridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Brisson, 1760",
    "commonNameEn": "True sparrows",
    "commonNameBn": "চড়ুই গণ",
    "description": "Ubiquitous synanthropic birds familiar to millions worldwide across school and university biology curricula.",
    "isVerified": true
  },
  {
    "id": "taxon-corvidae",
    "scientificName": "Corvidae",
    "name": "Corvidae",
    "rank": "family",
    "parentId": "taxon-passeriformes",
    "parentTaxonId": "taxon-passeriformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Leach, 1820",
    "commonNameEn": "Crows, ravens, and jays",
    "commonNameBn": "কাক পরিবার",
    "description": "Highly intelligent oscine passerines with massive brain-to-body ratios and advanced tool use.",
    "isVerified": true
  },
  {
    "id": "taxon-corvus",
    "scientificName": "Corvus",
    "name": "Corvus",
    "rank": "genus",
    "parentId": "taxon-corvidae",
    "parentTaxonId": "taxon-corvidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Crows and ravens",
    "commonNameBn": "কাক গণ",
    "description": "The standard textbook representative of avian cognitive intelligence and behavioral plasticity.",
    "isVerified": true
  },
  {
    "id": "taxon-phoenicopteriformes",
    "scientificName": "Phoenicopteriformes",
    "name": "Phoenicopteriformes",
    "rank": "order",
    "parentId": "taxon-aves",
    "parentTaxonId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fürbringer, 1888",
    "commonNameEn": "Flamingos",
    "commonNameBn": "ফ্ল্যামিঙ্গো বর্গ",
    "description": "Long-legged wading birds with specialized down-bent lamellar filter-feeding bill and pink carotenoid plumage.",
    "isVerified": true
  },
  {
    "id": "taxon-phoenicopteridae",
    "scientificName": "Phoenicopteridae",
    "name": "Phoenicopteridae",
    "rank": "family",
    "parentId": "taxon-phoenicopteriformes",
    "parentTaxonId": "taxon-phoenicopteriformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Bonaparte, 1831",
    "commonNameEn": "True flamingos",
    "commonNameBn": "ফ্ল্যামিঙ্গো পরিবার",
    "description": "Colonial saline and alkaline lake wading birds filter-feeding microscopic algae and brine shrimp.",
    "isVerified": true
  },
  {
    "id": "taxon-phoenicopterus",
    "scientificName": "Phoenicopterus",
    "name": "Phoenicopterus",
    "rank": "genus",
    "parentId": "taxon-phoenicopteridae",
    "parentTaxonId": "taxon-phoenicopteridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Flamingos",
    "commonNameBn": "ফ্ল্যামিঙ্গো গণ",
    "description": "Classic textbook avian representative of extreme trophic specialization and lamellar filtration.",
    "isVerified": true
  },
  {
    "id": "taxon-homo",
    "scientificName": "Homo",
    "name": "Homo",
    "rank": "genus",
    "parentId": "taxon-hominidae",
    "parentTaxonId": "taxon-hominidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Humans",
    "commonNameBn": "মানুষ গণ",
    "description": "Obligate bipedal hominins characterized by expanded encephalization quotient, symbolic language, and cumulative culture.",
    "isVerified": true
  },
  {
    "id": "taxon-felis",
    "scientificName": "Felis",
    "name": "Felis",
    "rank": "genus",
    "parentId": "taxon-felidae",
    "parentTaxonId": "taxon-felidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Small cats",
    "commonNameBn": "বিড়াল গণ",
    "description": "Carnivoran felids possessing non-roaring ossified hyoid apparatus, retractable claws, and vertical slit pupils.",
    "isVerified": true
  },
  {
    "id": "taxon-perissodactyla",
    "scientificName": "Perissodactyla",
    "name": "Perissodactyla",
    "rank": "order",
    "parentId": "taxon-mammalia",
    "parentTaxonId": "taxon-mammalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Owen, 1848",
    "commonNameEn": "Odd-toed ungulates",
    "commonNameBn": "বিজোড়-আঙ্গুলযুক্ত খুরওয়ালা প্রাণী বর্গ",
    "description": "Ungulate mammals in which the weight is borne predominantly on the third (central) digit (mesaxonic foot structure).",
    "isVerified": true
  },
  {
    "id": "taxon-equidae",
    "scientificName": "Equidae",
    "name": "Equidae",
    "rank": "family",
    "parentId": "taxon-perissodactyla",
    "parentTaxonId": "taxon-perissodactyla",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1821",
    "commonNameEn": "Horses, zebras, and donkeys",
    "commonNameBn": "ঘোড়া পরিবার",
    "description": "Fast-running cursorial herbivores with single functional monodactyl hooves and hypsodont grinding dentition.",
    "isVerified": true
  },
  {
    "id": "taxon-equus",
    "scientificName": "Equus",
    "name": "Equus",
    "rank": "genus",
    "parentId": "taxon-equidae",
    "parentTaxonId": "taxon-equidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Horses",
    "commonNameBn": "ঘোড়া গণ",
    "description": "Classic textbook evolutionary sequence demonstrating transitional morphological adaptations from forest browser to grassland runner.",
    "isVerified": true
  },
  {
    "id": "taxon-proboscidea",
    "scientificName": "Proboscidea",
    "name": "Proboscidea",
    "rank": "order",
    "parentId": "taxon-mammalia",
    "parentTaxonId": "taxon-mammalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Illiger, 1811",
    "commonNameEn": "Elephants",
    "commonNameBn": "হাতি বর্গ",
    "description": "Afrotherian megaherbivores characterized by a muscular prehensile proboscis (trunk) and modified incisor tusks.",
    "isVerified": true
  },
  {
    "id": "taxon-elephantidae",
    "scientificName": "Elephantidae",
    "name": "Elephantidae",
    "rank": "family",
    "parentId": "taxon-proboscidea",
    "parentTaxonId": "taxon-proboscidea",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1821",
    "commonNameEn": "True elephants",
    "commonNameBn": "হাতি পরিবার",
    "description": "The largest living terrestrial mammals with graviportal columnar limbs and horizontal molar replacement.",
    "isVerified": true
  },
  {
    "id": "taxon-elephas",
    "scientificName": "Elephas",
    "name": "Elephas",
    "rank": "genus",
    "parentId": "taxon-elephantidae",
    "parentTaxonId": "taxon-elephantidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Asian elephants",
    "commonNameBn": "এশীয় হাতি গণ",
    "description": "Critically important educational and cultural keystone species indigenous to South Asian forests, including Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-muridae",
    "scientificName": "Muridae",
    "name": "Muridae",
    "rank": "family",
    "parentId": "taxon-rodentia",
    "parentTaxonId": "taxon-rodentia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Illiger, 1811",
    "commonNameEn": "True mice and rats",
    "commonNameBn": "ইঁদুর পরিবার",
    "description": "The largest mammalian family comprising gnawing rodents with continuously growing chisel-like incisors.",
    "isVerified": true
  },
  {
    "id": "taxon-mus",
    "scientificName": "Mus",
    "name": "Mus",
    "rank": "genus",
    "parentId": "taxon-muridae",
    "parentTaxonId": "taxon-muridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Mice",
    "commonNameBn": "ইঁদুর গণ",
    "description": "The premier mammalian genetic, physiological, and biomedical laboratory model organism on Earth.",
    "isVerified": true
  },
  {
    "id": "taxon-phascolarctidae",
    "scientificName": "Phascolarctidae",
    "name": "Phascolarctidae",
    "rank": "family",
    "parentId": "taxon-diprotodontia",
    "parentTaxonId": "taxon-diprotodontia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Owen, 1839",
    "commonNameEn": "Koalas",
    "commonNameBn": "কোয়ালা পরিবার",
    "description": "Arboreal herbivorous marsupials with syndactylous feet, backward-opening pouch, and vestigial tail.",
    "isVerified": true
  },
  {
    "id": "taxon-phascolarctos",
    "scientificName": "Phascolarctos",
    "name": "Phascolarctos",
    "rank": "genus",
    "parentId": "taxon-phascolarctidae",
    "parentTaxonId": "taxon-phascolarctidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "de Blainville, 1816",
    "commonNameEn": "Koalas",
    "commonNameBn": "কোয়ালা গণ",
    "description": "World-famous marsupial specialized obligate folivore on Eucalyptus foliage.",
    "isVerified": true
  },
  {
    "id": "taxon-suberitida",
    "scientificName": "Suberitida",
    "name": "Suberitida",
    "rank": "order",
    "parentId": "taxon-demospongiae",
    "parentTaxonId": "taxon-demospongiae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Chombard & Boury-Esnault, 1999",
    "commonNameEn": "Suberitid demosponges",
    "commonNameBn": "সুবেইরিটা পর্বভুক্ত ডেমোস্পঞ্জ",
    "description": "Demosponges characterized by tylostyle megascleres arranged in dense radiating surface bouquets.",
    "isVerified": true
  },
  {
    "id": "taxon-suberitidae",
    "scientificName": "Suberitidae",
    "name": "Suberitidae",
    "rank": "family",
    "parentId": "taxon-suberitida",
    "parentTaxonId": "taxon-suberitida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Schmidt, 1870",
    "commonNameEn": "Sea orange sponges",
    "commonNameBn": "সি অরেঞ্জ স্পঞ্জ পরিবার",
    "description": "Compact demosponges often living symbiotically on gastropod shells inhabited by hermit crabs.",
    "isVerified": true
  },
  {
    "id": "taxon-suberites",
    "scientificName": "Suberites",
    "name": "Suberites",
    "rank": "genus",
    "parentId": "taxon-suberitidae",
    "parentTaxonId": "taxon-suberitidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Nardo, 1833",
    "commonNameEn": "Suberites sponges",
    "commonNameBn": "সুবেইরাইটিস স্পঞ্জ গণ",
    "description": "Dome-shaped demosponges with smooth velvet-like surface and intense pigmentation.",
    "isVerified": true
  },
  {
    "id": "taxon-amphidiscosida",
    "scientificName": "Amphidiscosida",
    "name": "Amphidiscosida",
    "rank": "order",
    "parentId": "taxon-hexactinellida",
    "parentTaxonId": "taxon-hexactinellida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Schrammen, 1924",
    "commonNameEn": "Amphidisc glass sponges",
    "commonNameBn": "এমফিডিস্ক কাচ স্পঞ্জ",
    "description": "Hexactinellid sponges with amphidisc microscleres and continuous anchoring spicular tufts.",
    "isVerified": true
  },
  {
    "id": "taxon-hyalonematidae",
    "scientificName": "Hyalonematidae",
    "name": "Hyalonematidae",
    "rank": "family",
    "parentId": "taxon-amphidiscosida",
    "parentTaxonId": "taxon-amphidiscosida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1857",
    "commonNameEn": "Glass rope sponges",
    "commonNameBn": "কাচ দড়ি স্পঞ্জ পরিবার",
    "description": "Deep-sea hexactinellids elevated on a twisted anchoring stalk of long glass spicules.",
    "isVerified": true
  },
  {
    "id": "taxon-hyalonema",
    "scientificName": "Hyalonema",
    "name": "Hyalonema",
    "rank": "genus",
    "parentId": "taxon-hyalonematidae",
    "parentTaxonId": "taxon-hyalonematidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1832",
    "commonNameEn": "Glass rope sponge genus",
    "commonNameBn": "হায়ালোনেমা কাচ স্পঞ্জ গণ",
    "description": "Goblet or mushroom-shaped sponge supported by a long braided stalk of siliceous spicules anchoring in deep mud.",
    "isVerified": true
  },
  {
    "id": "taxon-actiniaria",
    "scientificName": "Actiniaria",
    "name": "Actiniaria",
    "rank": "order",
    "parentId": "taxon-anthozoa",
    "parentTaxonId": "taxon-anthozoa",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Hertwig, 1882",
    "commonNameEn": "Sea anemones",
    "commonNameBn": "সি অ্যানিমোন বর্গ",
    "description": "Solitary, predatory hexacorallians lacking mineralized skeletons, anchored by pedal disc.",
    "isVerified": true
  },
  {
    "id": "taxon-actiniidae",
    "scientificName": "Actiniidae",
    "name": "Actiniidae",
    "rank": "family",
    "parentId": "taxon-actiniaria",
    "parentTaxonId": "taxon-actiniaria",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "True sea anemones",
    "commonNameBn": "প্রকৃত সি অ্যানিমোন পরিবার",
    "description": "The largest family of sea anemones with smooth or verrucose column and numerous simple tentacles.",
    "isVerified": true
  },
  {
    "id": "taxon-actinia",
    "scientificName": "Actinia",
    "name": "Actinia",
    "rank": "genus",
    "parentId": "taxon-actiniidae",
    "parentTaxonId": "taxon-actiniidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1767",
    "commonNameEn": "Beadlet anemones",
    "commonNameBn": "বিডলেট অ্যানিমোন গণ",
    "description": "Intertidal anemones with a ring of marginal spherules packed with specialized cnidocytes.",
    "isVerified": true
  },
  {
    "id": "taxon-pelagiidae",
    "scientificName": "Pelagiidae",
    "name": "Pelagiidae",
    "rank": "family",
    "parentId": "taxon-semaeostomeae",
    "parentTaxonId": "taxon-semaeostomeae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gegenbaur, 1856",
    "commonNameEn": "Pelagic jellyfish",
    "commonNameBn": "মুক্তসাঁতারু জেলিফিশ পরিবার",
    "description": "Open-ocean scyphomedusae with 8 or 16 marginal tentacles and stinging nematocysts.",
    "isVerified": true
  },
  {
    "id": "taxon-chrysaora",
    "scientificName": "Chrysaora",
    "name": "Chrysaora",
    "rank": "genus",
    "parentId": "taxon-pelagiidae",
    "parentTaxonId": "taxon-pelagiidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Péron & Lesueur, 1810",
    "commonNameEn": "Sea nettles",
    "commonNameBn": "সি নেটেল জেলিফিশ গণ",
    "description": "Prominent marine medusae with distinct radial banding patterns on bell and long stinging tentacles.",
    "isVerified": true
  },
  {
    "id": "taxon-leptothecata",
    "scientificName": "Leptothecata",
    "name": "Leptothecata",
    "rank": "order",
    "parentId": "taxon-hydrozoa",
    "parentTaxonId": "taxon-hydrozoa",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Cornelius, 1992",
    "commonNameEn": "Thecate hydroids",
    "commonNameBn": "আবরণযুক্ত হাইড্রয়েড বর্গ",
    "description": "Hydrozoans whose polyps are encased in a chitinous protective cup known as a hydrotheca.",
    "isVerified": true
  },
  {
    "id": "taxon-campanulariidae",
    "scientificName": "Campanulariidae",
    "name": "Campanulariidae",
    "rank": "family",
    "parentId": "taxon-leptothecata",
    "parentTaxonId": "taxon-leptothecata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Johnston, 1837",
    "commonNameEn": "Bell hydroids",
    "commonNameBn": "ঘণ্টা হাইড্রয়েড পরিবার",
    "description": "Colonial hydroids with wine-glass or bell-shaped hydrothecae on branched stalks.",
    "isVerified": true
  },
  {
    "id": "taxon-obelia",
    "scientificName": "Obelia",
    "name": "Obelia",
    "rank": "genus",
    "parentId": "taxon-campanulariidae",
    "parentTaxonId": "taxon-campanulariidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Péron & Lesueur, 1810",
    "commonNameEn": "Sea furs",
    "commonNameBn": "সি ফার / ওবেলিয়া গণ",
    "description": "Classic textbook hydrozoan displaying distinct metagenesis between sessile branching hydroid colony and tiny free-swimming medusae.",
    "isVerified": true
  },
  {
    "id": "taxon-lobata",
    "scientificName": "Lobata",
    "name": "Lobata",
    "rank": "order",
    "parentId": "taxon-tentaculata",
    "parentTaxonId": "taxon-tentaculata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Eschscholtz, 1829",
    "commonNameEn": "Lobed comb jellies",
    "commonNameBn": "খণ্ডিত কম্ব জেলি বর্গ",
    "description": "Tentaculate ctenophores possessing a pair of prominent muscular feeding oral lobes and four auricles.",
    "isVerified": true
  },
  {
    "id": "taxon-bolinopsidae",
    "scientificName": "Bolinopsidae",
    "name": "Bolinopsidae",
    "rank": "family",
    "parentId": "taxon-lobata",
    "parentTaxonId": "taxon-lobata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bigelow, 1912",
    "commonNameEn": "Sea walnut family",
    "commonNameBn": "সি ওয়ালনাট কম্ব জেলি পরিবার",
    "description": "Transparent lobate ctenophores with short tentacle sheaths and ciliated oral lobes.",
    "isVerified": true
  },
  {
    "id": "taxon-mnemiopsis",
    "scientificName": "Mnemiopsis",
    "name": "Mnemiopsis",
    "rank": "genus",
    "parentId": "taxon-bolinopsidae",
    "parentTaxonId": "taxon-bolinopsidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "L. Agassiz, 1860",
    "commonNameEn": "Warty comb jellies",
    "commonNameBn": "নেমিওপসিস কম্ব জেলি গণ",
    "description": "Carnivorous pelagic ctenophores famous for intense bioluminescence and invasive potential in semi-enclosed seas.",
    "isVerified": true
  },
  {
    "id": "taxon-phyllodocida",
    "scientificName": "Phyllodocida",
    "name": "Phyllodocida",
    "rank": "order",
    "parentId": "taxon-polychaeta",
    "parentTaxonId": "taxon-polychaeta",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Dales, 1962",
    "commonNameEn": "Paddle worms and ragworms",
    "commonNameBn": "প্যাডেল কীট ও র্যাগওয়ার্ম বর্গ",
    "description": "Errant polychaete worms with well-developed prostomial sensory appendages, muscular eversible pharynx, and chaeta-bearing parapodia.",
    "isVerified": true
  },
  {
    "id": "taxon-nereididae",
    "scientificName": "Nereididae",
    "name": "Nereididae",
    "rank": "family",
    "parentId": "taxon-phyllodocida",
    "parentTaxonId": "taxon-phyllodocida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Blainville, 1818",
    "commonNameEn": "Ragworms / Clam worms",
    "commonNameBn": "র্যাগওয়ার্ম পরিবার",
    "description": "Predatory and scavenger marine worms with four pairs of peristomial tentacular cirri and jaw-bearing proboscis.",
    "isVerified": true
  },
  {
    "id": "taxon-alitta",
    "scientificName": "Alitta",
    "name": "Alitta",
    "rank": "genus",
    "parentId": "taxon-nereididae",
    "parentTaxonId": "taxon-nereididae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Kinberg, 1865",
    "commonNameEn": "King ragworms",
    "commonNameBn": "কিং র্যাগওয়ার্ম গণ",
    "description": "Large coastal nereidid polychaetes extensively utilized as marine live bait and benthic ecological indicators.",
    "isVerified": true
  },
  {
    "id": "taxon-haplotaxida",
    "scientificName": "Haplotaxida",
    "name": "Haplotaxida",
    "rank": "order",
    "parentId": "taxon-clitellata",
    "parentTaxonId": "taxon-clitellata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Brinkhurst, 1971",
    "commonNameEn": "Aquatic and terrestrial oligochaetes",
    "commonNameBn": "অলিগোকিট বর্গ",
    "description": "Clitellate annelids with simple segmented chaetae and hermaphroditic reproductive systems producing cocoons.",
    "isVerified": true
  },
  {
    "id": "taxon-naididae",
    "scientificName": "Naididae",
    "name": "Naididae",
    "rank": "family",
    "parentId": "taxon-haplotaxida",
    "parentTaxonId": "taxon-haplotaxida",
    "status": "accepted",
    "module": "general",
    "authorYear": "Ehrenberg, 1828",
    "commonNameEn": "Sludge worms and aquatic oligochaetes",
    "commonNameBn": "স্লাজ ওয়ার্ম পরিবার",
    "description": "Benthic freshwater oligochaetes capable of surviving in extreme hypoxia through erythrocruorin hemoglobin pigments.",
    "isVerified": true
  },
  {
    "id": "taxon-tubifex",
    "scientificName": "Tubifex",
    "name": "Tubifex",
    "rank": "genus",
    "parentId": "taxon-naididae",
    "parentTaxonId": "taxon-naididae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Lamarck, 1816",
    "commonNameEn": "Tubifex worms",
    "commonNameBn": "টিউবিফেক্স কেঁচো গণ",
    "description": "Colonial sludge worms anchoring heads in organic sediment while undulating red tails for respiratory gas exchange.",
    "isVerified": true
  },
  {
    "id": "taxon-neogastropoda",
    "scientificName": "Neogastropoda",
    "name": "Neogastropoda",
    "rank": "order",
    "parentId": "taxon-gastropoda",
    "parentTaxonId": "taxon-gastropoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Wenz, 1938",
    "commonNameEn": "Carnivorous marine snails",
    "commonNameBn": "মাংসাশী সামুদ্রিক শামুক বর্গ",
    "description": "Advanced marine gastropods with a siphonal canal, radula adapted for predation, and single bipectinate ctenidium.",
    "isVerified": true
  },
  {
    "id": "taxon-conidae",
    "scientificName": "Conidae",
    "name": "Conidae",
    "rank": "family",
    "parentId": "taxon-neogastropoda",
    "parentTaxonId": "taxon-neogastropoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fleming, 1822",
    "commonNameEn": "Cone snails",
    "commonNameBn": "কোন শামুক পরিবার",
    "description": "Predatory marine snails armed with harpoon-like hollow radular teeth injecting complex conotoxin venom cocktails.",
    "isVerified": true
  },
  {
    "id": "taxon-conus",
    "scientificName": "Conus",
    "name": "Conus",
    "rank": "genus",
    "parentId": "taxon-conidae",
    "parentTaxonId": "taxon-conidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "True cone snails",
    "commonNameBn": "কোন শামুক গণ",
    "description": "Invert- and fish-hunting marine snails with heavy conical shells and lethal neurotoxic stings.",
    "isVerified": true
  },
  {
    "id": "taxon-mytilida",
    "scientificName": "Mytilida",
    "name": "Mytilida",
    "rank": "order",
    "parentId": "taxon-bivalvia",
    "parentTaxonId": "taxon-bivalvia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Férussac, 1822",
    "commonNameEn": "True marine mussels",
    "commonNameBn": "সামুদ্রিক ঝিনুক বর্গ",
    "description": "Bivalves attached to hard substrate via proteinaceous byssal threads, with heteromyarian adductor muscle structure.",
    "isVerified": true
  },
  {
    "id": "taxon-mytilidae",
    "scientificName": "Mytilidae",
    "name": "Mytilidae",
    "rank": "family",
    "parentId": "taxon-mytilida",
    "parentTaxonId": "taxon-mytilida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Mussel family",
    "commonNameBn": "মাইটিলিড ঝিনুক পরিবার",
    "description": "Epifaunal filter-feeding bivalves with wedge-shaped shells and strong byssus anchoring systems.",
    "isVerified": true
  },
  {
    "id": "taxon-mytilus",
    "scientificName": "Mytilus",
    "name": "Mytilus",
    "rank": "genus",
    "parentId": "taxon-mytilidae",
    "parentTaxonId": "taxon-mytilidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Blue mussels",
    "commonNameBn": "ব্লু মাসেল গণ",
    "description": "Commercially vital intertidal blue and black mussels forming extensive biogenic mussel beds on temperate coasts.",
    "isVerified": true
  },
  {
    "id": "taxon-ostreida",
    "scientificName": "Ostreida",
    "name": "Ostreida",
    "rank": "order",
    "parentId": "taxon-bivalvia",
    "parentTaxonId": "taxon-bivalvia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Férussac, 1822",
    "commonNameEn": "True oysters",
    "commonNameBn": "প্রকৃত ঝিনুক বর্গ",
    "description": "Monomarian marine bivalves cementing their left valve permanently onto hard substrate.",
    "isVerified": true
  },
  {
    "id": "taxon-ostreidae",
    "scientificName": "Ostreidae",
    "name": "Ostreidae",
    "rank": "family",
    "parentId": "taxon-ostreida",
    "parentTaxonId": "taxon-ostreida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Oyster family",
    "commonNameBn": "অয়েস্টার পরিবার",
    "description": "Irregular-shelled bivalves forming massive biogenic reef systems in estuaries and coastal lagoons.",
    "isVerified": true
  },
  {
    "id": "taxon-crassostrea",
    "scientificName": "Crassostrea",
    "name": "Crassostrea",
    "rank": "genus",
    "parentId": "taxon-ostreidae",
    "parentTaxonId": "taxon-ostreidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Sacco, 1897",
    "commonNameEn": "Cupped oysters",
    "commonNameBn": "কাপড অয়েস্টার গণ",
    "description": "Deep-cupped oysters representing the most widely cultivated marine bivalves in global aquaculture.",
    "isVerified": true
  },
  {
    "id": "taxon-callinectes",
    "scientificName": "Callinectes",
    "name": "Callinectes",
    "rank": "genus",
    "parentId": "taxon-portunidae",
    "parentTaxonId": "taxon-portunidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Stimpson, 1860",
    "commonNameEn": "Blue crabs",
    "commonNameBn": "নীল কাঁকড়া গণ",
    "description": "Fast-swimming coastal and estuarine crabs with strong chelipeds and broad lateral spine on carapace.",
    "isVerified": true
  },
  {
    "id": "taxon-palinuridae",
    "scientificName": "Palinuridae",
    "name": "Palinuridae",
    "rank": "family",
    "parentId": "taxon-decapoda",
    "parentTaxonId": "taxon-decapoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Spiny lobsters",
    "commonNameBn": "স্পাইনি লবস্টার পরিবার",
    "description": "Decapods lacking large claws, equipped with long spiny antennae and phyllosoma planktonic larvae.",
    "isVerified": true
  },
  {
    "id": "taxon-panulirus",
    "scientificName": "Panulirus",
    "name": "Panulirus",
    "rank": "genus",
    "parentId": "taxon-palinuridae",
    "parentTaxonId": "taxon-palinuridae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "White, 1847",
    "commonNameEn": "Tropical spiny lobsters",
    "commonNameBn": "ক্রান্তীয় কাঁটা লবস্টার গণ",
    "description": "Nocturnal reef-dwelling decapod crustaceans characterized by cylindrical cephalothorax and long antennular flagella.",
    "isVerified": true
  },
  {
    "id": "taxon-arachnida",
    "scientificName": "Arachnida",
    "name": "Arachnida",
    "rank": "class",
    "parentId": "taxon-arthropoda",
    "parentTaxonId": "taxon-arthropoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cuvier, 1812",
    "commonNameEn": "Arachnids",
    "commonNameBn": "অ্যারাকনিডা / মাকড়সা-জাতীয় শ্রেণি",
    "description": "Eight-legged terrestrial chelicerate arthropods with body divided into prosoma and opisthosoma.",
    "isVerified": true
  },
  {
    "id": "taxon-araneae",
    "scientificName": "Araneae",
    "name": "Araneae",
    "rank": "order",
    "parentId": "taxon-arachnida",
    "parentTaxonId": "taxon-arachnida",
    "status": "accepted",
    "module": "general",
    "authorYear": "Clerck, 1757",
    "commonNameEn": "Spiders",
    "commonNameBn": "মাকড়সা বর্গ",
    "description": "Chelicerates with eight legs, chelicerae modified into venom-injecting fangs, and abdominal spinnerets spinning silk.",
    "isVerified": true
  },
  {
    "id": "taxon-theridiidae",
    "scientificName": "Theridiidae",
    "name": "Theridiidae",
    "rank": "family",
    "parentId": "taxon-araneae",
    "parentTaxonId": "taxon-araneae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Sundevall, 1833",
    "commonNameEn": "Cobweb spiders / Comb-footed spiders",
    "commonNameBn": "জালবোনা মাকড়সা পরিবার",
    "description": "Araneomorph spiders constructing irregular tangled webs and possessing serrated setae on fourth tarsi.",
    "isVerified": true
  },
  {
    "id": "taxon-latrodectus",
    "scientificName": "Latrodectus",
    "name": "Latrodectus",
    "rank": "genus",
    "parentId": "taxon-theridiidae",
    "parentTaxonId": "taxon-theridiidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Walckenaer, 1805",
    "commonNameEn": "Widow spiders",
    "commonNameBn": "উইডো মাকড়সা গণ",
    "description": "Venomous cobweb spiders producing potent alpha-latrotoxin causing severe systemic latrodectism.",
    "isVerified": true
  },
  {
    "id": "taxon-diptera",
    "scientificName": "Diptera",
    "name": "Diptera",
    "rank": "order",
    "parentId": "taxon-insecta",
    "parentTaxonId": "taxon-insecta",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "True flies and mosquitoes",
    "commonNameBn": "মাছি ও মশা বর্গ",
    "description": "Insects possessing only a single pair of functional flight wings; hindwings reduced to gyroscopic halteres.",
    "isVerified": true
  },
  {
    "id": "taxon-culicidae",
    "scientificName": "Culicidae",
    "name": "Culicidae",
    "rank": "family",
    "parentId": "taxon-diptera",
    "parentTaxonId": "taxon-diptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Meigen, 1818",
    "commonNameEn": "Mosquitoes",
    "commonNameBn": "মশা পরিবার",
    "description": "Slender nematoceran flies with piercing-sucking proboscis in females and aquatic larval development.",
    "isVerified": true
  },
  {
    "id": "taxon-aedes",
    "scientificName": "Aedes",
    "name": "Aedes",
    "rank": "genus",
    "parentId": "taxon-culicidae",
    "parentTaxonId": "taxon-culicidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Meigen, 1818",
    "commonNameEn": "Aedes mosquitoes",
    "commonNameBn": "এডিস মশা গণ",
    "description": "Day-biting striped mosquitoes serving as primary vectors for dengue, yellow fever, chikungunya, and Zika virus.",
    "isVerified": true
  },
  {
    "id": "taxon-coleoptera",
    "scientificName": "Coleoptera",
    "name": "Coleoptera",
    "rank": "order",
    "parentId": "taxon-insecta",
    "parentTaxonId": "taxon-insecta",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Beetles",
    "commonNameBn": "গুবরে পোকা / বিটল বর্গ",
    "description": "The largest insect order, defined by hardened protective front wings (elytra) covering membranous flight wings.",
    "isVerified": true
  },
  {
    "id": "taxon-scarabaeidae",
    "scientificName": "Scarabaeidae",
    "name": "Scarabaeidae",
    "rank": "family",
    "parentId": "taxon-coleoptera",
    "parentTaxonId": "taxon-coleoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Scarab beetles",
    "commonNameBn": "স্কারাব বিটল পরিবার",
    "description": "Heavy-bodied beetles with distinctive lamellate antennae that fan out to sense pheromones and dung odors.",
    "isVerified": true
  },
  {
    "id": "taxon-scarabaeus",
    "scientificName": "Scarabaeus",
    "name": "Scarabaeus",
    "rank": "genus",
    "parentId": "taxon-scarabaeidae",
    "parentTaxonId": "taxon-scarabaeidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Sacred scarab beetles",
    "commonNameBn": "পবিত্র স্কারাব বিটল গণ",
    "description": "Dung-rolling beetles exhibiting complex brood ball construction and celestial navigation.",
    "isVerified": true
  },
  {
    "id": "taxon-oreasteridae",
    "scientificName": "Oreasteridae",
    "name": "Oreasteridae",
    "rank": "family",
    "parentId": "taxon-valvatida",
    "parentTaxonId": "taxon-valvatida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fisher, 1911",
    "commonNameEn": "Cushion stars and knobby stars",
    "commonNameBn": "কুশন স্টার পরিবার",
    "description": "Massive tropical reef sea stars with heavy calcified tubercles or spines on aboral disc.",
    "isVerified": true
  },
  {
    "id": "taxon-protoreaster",
    "scientificName": "Protoreaster",
    "name": "Protoreaster",
    "rank": "genus",
    "parentId": "taxon-oreasteridae",
    "parentTaxonId": "taxon-oreasteridae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Döderlein, 1916",
    "commonNameEn": "Horned sea stars",
    "commonNameBn": "শিংযুক্ত তারা মাছ গণ",
    "description": "Sturdy tropical Indo-Pacific sea stars with prominent black or dark red horn-like knobs.",
    "isVerified": true
  },
  {
    "id": "taxon-mesocentrotus",
    "scientificName": "Mesocentrotus",
    "name": "Mesocentrotus",
    "rank": "genus",
    "parentId": "taxon-strongylocentrotidae",
    "parentTaxonId": "taxon-strongylocentrotidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Tatarenko & Poltaraus, 1993",
    "commonNameEn": "Giant red sea urchins",
    "commonNameBn": "দৈত্যাকার লাল আর্চিন গণ",
    "description": "Large, long-lived Pacific sea urchins with sharp protective spines and immense commercial roe fishery value.",
    "isVerified": true
  },
  {
    "id": "taxon-rhincodontidae",
    "scientificName": "Rhincodontidae",
    "name": "Rhincodontidae",
    "rank": "family",
    "parentId": "taxon-orectolobiformes",
    "parentTaxonId": "taxon-orectolobiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller & Henle, 1839",
    "commonNameEn": "Whale sharks",
    "commonNameBn": "তিমি হাঙর পরিবার",
    "description": "Monotypic family of giant filter-feeding carpet sharks cruising tropical pelagic oceans.",
    "isVerified": true
  },
  {
    "id": "taxon-rhincodon",
    "scientificName": "Rhincodon",
    "name": "Rhincodon",
    "rank": "genus",
    "parentId": "taxon-rhincodontidae",
    "parentTaxonId": "taxon-rhincodontidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Smith, 1828",
    "commonNameEn": "Whale shark genus",
    "commonNameBn": "তিমি হাঙর গণ",
    "description": "The largest extant non-mammalian vertebrate, possessing a broad flattened head and filter-feeding gill apparatus.",
    "isVerified": true
  },
  {
    "id": "taxon-phycodurus",
    "scientificName": "Phycodurus",
    "name": "Phycodurus",
    "rank": "genus",
    "parentId": "taxon-syngnathidae",
    "parentTaxonId": "taxon-syngnathidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gill, 1896",
    "commonNameEn": "Leafy seadragons",
    "commonNameBn": "পাতাসদৃশ সিড্রাগন গণ",
    "description": "Masterfully camouflaged syngnathid with leaf-like appendages providing mimicry among kelp and macroalgae.",
    "isVerified": true
  },
  {
    "id": "taxon-diodontidae",
    "scientificName": "Diodontidae",
    "name": "Diodontidae",
    "rank": "family",
    "parentId": "taxon-tetraodontiformes",
    "parentTaxonId": "taxon-tetraodontiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bilberg, 1820",
    "commonNameEn": "Porcupinefishes / Burrfish",
    "commonNameBn": "সজারু মাছ পরিবার",
    "description": "Tetraodontiform fishes covered in sharp, erectile spines that inflate when threatened.",
    "isVerified": true
  },
  {
    "id": "taxon-diodon",
    "scientificName": "Diodon",
    "name": "Diodon",
    "rank": "genus",
    "parentId": "taxon-diodontidae",
    "parentTaxonId": "taxon-diodontidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Porcupinefishes",
    "commonNameBn": "সজারু মাছ গণ",
    "description": "Reef and coastal globose fishes with fused beak-like dental plates crushing hard-shelled molluscs and crabs.",
    "isVerified": true
  },
  {
    "id": "taxon-muraenidae",
    "scientificName": "Muraenidae",
    "name": "Muraenidae",
    "rank": "family",
    "parentId": "taxon-anguilliformes",
    "parentTaxonId": "taxon-anguilliformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Moray eels",
    "commonNameBn": "মোরে ঈল পরিবার",
    "description": "Scaleless predatory eels possessing powerful pharyngeal jaws for grasping and swallowing prey.",
    "isVerified": true
  },
  {
    "id": "taxon-gymnothorax",
    "scientificName": "Gymnothorax",
    "name": "Gymnothorax",
    "rank": "genus",
    "parentId": "taxon-muraenidae",
    "parentTaxonId": "taxon-muraenidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bloch, 1795",
    "commonNameEn": "Moray eel genus",
    "commonNameBn": "জিম্নোথোরাক্স মোরে ঈল গণ",
    "description": "Apex nocturnal ambush predators inhabiting crevice systems in tropical coral and rocky reefs.",
    "isVerified": true
  },
  {
    "id": "taxon-anaxyrus",
    "scientificName": "Anaxyrus",
    "name": "Anaxyrus",
    "rank": "genus",
    "parentId": "taxon-bufonidae",
    "parentTaxonId": "taxon-bufonidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Tschudi, 1845",
    "commonNameEn": "North American toads",
    "commonNameBn": "উত্তর আমেরিকান কুনোব্যাঙ গণ",
    "description": "Terrestrial toads with prominent cranial crests and musical breeding trills in springtime ponds.",
    "isVerified": true
  },
  {
    "id": "taxon-ranidae",
    "scientificName": "Ranidae",
    "name": "Ranidae",
    "rank": "family",
    "parentId": "taxon-anura",
    "parentTaxonId": "taxon-anura",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1814",
    "commonNameEn": "True frogs",
    "commonNameBn": "প্রকৃত ব্যাঙ পরিবার",
    "description": "Smooth-skinned, long-legged aquatic and riparian frogs with strong webbing on hind feet.",
    "isVerified": true
  },
  {
    "id": "taxon-lithobates",
    "scientificName": "Lithobates",
    "name": "Lithobates",
    "rank": "genus",
    "parentId": "taxon-ranidae",
    "parentTaxonId": "taxon-ranidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fitzinger, 1843",
    "commonNameEn": "American water frogs",
    "commonNameBn": "আমেরিকান পানি ব্যাঙ গণ",
    "description": "Large semi-aquatic frogs with prominent dorsolateral folds and powerful jumping hindlimbs.",
    "isVerified": true
  },
  {
    "id": "taxon-viperidae",
    "scientificName": "Viperidae",
    "name": "Viperidae",
    "rank": "family",
    "parentId": "taxon-squamata",
    "parentTaxonId": "taxon-squamata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Oppel, 1811",
    "commonNameEn": "Vipers and pit vipers",
    "commonNameBn": "চন্দ্রবোড়া ও পিট ভাইপার পরিবার",
    "description": "Solenoglyphous venomous snakes with long hinged hollow fangs folding against roof of mouth.",
    "isVerified": true
  },
  {
    "id": "taxon-crotalus",
    "scientificName": "Crotalus",
    "name": "Crotalus",
    "rank": "genus",
    "parentId": "taxon-viperidae",
    "parentTaxonId": "taxon-viperidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Rattlesnakes",
    "commonNameBn": "র‌্যাটলস্নেক গণ",
    "description": "New World pit vipers with infrared heat-sensing loreal facial pits and interlocking keratinous tail rattles.",
    "isVerified": true
  },
  {
    "id": "taxon-boidae",
    "scientificName": "Boidae",
    "name": "Boidae",
    "rank": "family",
    "parentId": "taxon-squamata",
    "parentTaxonId": "taxon-squamata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1825",
    "commonNameEn": "Boas",
    "commonNameBn": "বোয়া সাপ পরিবার",
    "description": "Primitive non-venomous constricting snakes retaining pelvic spurs and functional vestigial hindlimb girdles.",
    "isVerified": true
  },
  {
    "id": "taxon-boa",
    "scientificName": "Boa",
    "name": "Boa",
    "rank": "genus",
    "parentId": "taxon-boidae",
    "parentTaxonId": "taxon-boidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "True boas",
    "commonNameBn": "বোয়া কনস্ট্রিক্টর গণ",
    "description": "Neotropical heavy-bodied viviparous constrictors possessing saddle markings providing camouflage.",
    "isVerified": true
  },
  {
    "id": "taxon-alligatoridae",
    "scientificName": "Alligatoridae",
    "name": "Alligatoridae",
    "rank": "family",
    "parentId": "taxon-crocodylia",
    "parentTaxonId": "taxon-crocodylia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cuvier, 1807",
    "commonNameEn": "Alligators and caimans",
    "commonNameBn": "অ্যালিগেটর ও কেইম্যান পরিবার",
    "description": "Crocodilians with broad, U-shaped snouts whose lower fourth teeth fit into pits within upper jaw when closed.",
    "isVerified": true
  },
  {
    "id": "taxon-alligator",
    "scientificName": "Alligator",
    "name": "Alligator",
    "rank": "genus",
    "parentId": "taxon-alligatoridae",
    "parentTaxonId": "taxon-alligatoridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cuvier, 1807",
    "commonNameEn": "Alligators",
    "commonNameBn": "অ্যালিগেটর গণ",
    "description": "Freshwater apex predators native to temperate and subtropical wetlands in the Americas and China.",
    "isVerified": true
  },
  {
    "id": "taxon-strigiformes",
    "scientificName": "Strigiformes",
    "name": "Strigiformes",
    "rank": "order",
    "parentId": "taxon-aves",
    "parentTaxonId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Wagler, 1830",
    "commonNameEn": "Owls",
    "commonNameBn": "পেঁচা বর্গ",
    "description": "Nocturnal birds of prey with forward-facing eyes set in facial discs, asymmetrical ears, and silent flight feathers.",
    "isVerified": true
  },
  {
    "id": "taxon-strigidae",
    "scientificName": "Strigidae",
    "name": "Strigidae",
    "rank": "family",
    "parentId": "taxon-strigiformes",
    "parentTaxonId": "taxon-strigiformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Leach, 1820",
    "commonNameEn": "True owls",
    "commonNameBn": "প্রকৃত পেঁচা পরিবার",
    "description": "Typical owls with round facial discs, zygodactyl talons, and dense soft plumage allowing silent hunting.",
    "isVerified": true
  },
  {
    "id": "taxon-bubo",
    "scientificName": "Bubo",
    "name": "Bubo",
    "rank": "genus",
    "parentId": "taxon-strigidae",
    "parentTaxonId": "taxon-strigidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Duméril, 1805",
    "commonNameEn": "Eagle-owls and horned owls",
    "commonNameBn": "হুতুম পেঁচা গণ",
    "description": "Powerful apex nocturnal raptors possessing prominent ear tufts and immense crushing talon strength.",
    "isVerified": true
  },
  {
    "id": "taxon-psittaciformes",
    "scientificName": "Psittaciformes",
    "name": "Psittaciformes",
    "rank": "order",
    "parentId": "taxon-aves",
    "parentTaxonId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Wagler, 1830",
    "commonNameEn": "Parrots and macaws",
    "commonNameBn": "টিয়া ও ম্যাকাও বর্গ",
    "description": "Intelligent pantropical birds with strong curved decurved bills, prehensile muscular tongues, and zygodactyl feet.",
    "isVerified": true
  },
  {
    "id": "taxon-psittacidae",
    "scientificName": "Psittacidae",
    "name": "Psittacidae",
    "rank": "family",
    "parentId": "taxon-psittaciformes",
    "parentTaxonId": "taxon-psittaciformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "True parrots and macaws",
    "commonNameBn": "প্রকৃত তোতা ও ম্যাকাও পরিবার",
    "description": "Vibrantly plumaged arboreal birds with high encephalization quotients capable of vocal mimicry.",
    "isVerified": true
  },
  {
    "id": "taxon-ara",
    "scientificName": "Ara",
    "name": "Ara",
    "rank": "genus",
    "parentId": "taxon-psittacidae",
    "parentTaxonId": "taxon-psittacidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Lacépède, 1799",
    "commonNameEn": "Macaws",
    "commonNameBn": "ম্যাকাও গণ",
    "description": "Large Neotropical parrots with long graduated tails, bare facial skin patches, and brilliant plumage.",
    "isVerified": true
  },
  {
    "id": "taxon-canidae",
    "scientificName": "Canidae",
    "name": "Canidae",
    "rank": "family",
    "parentId": "taxon-carnivora",
    "parentTaxonId": "taxon-carnivora",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fischer von Waldheim, 1817",
    "commonNameEn": "Dogs, wolves, and foxes",
    "commonNameBn": "কুকুর ও নেকড়ে পরিবার",
    "description": "Cursorial social carnivorans adapted for endurance pursuit hunting with non-retractile claws and acute olfaction.",
    "isVerified": true
  },
  {
    "id": "taxon-canis",
    "scientificName": "Canis",
    "name": "Canis",
    "rank": "genus",
    "parentId": "taxon-canidae",
    "parentTaxonId": "taxon-canidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "True dogs and wolves",
    "commonNameBn": "নেকড়ে ও কুকুর গণ",
    "description": "Intelligent pack-hunting carnivores displaying complex social hierarchies and vocal howling communication.",
    "isVerified": true
  },
  {
    "id": "taxon-gorilla",
    "scientificName": "Gorilla",
    "name": "Gorilla",
    "rank": "genus",
    "parentId": "taxon-hominidae",
    "parentTaxonId": "taxon-hominidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "I. Geoffroy Saint-Hilaire, 1852",
    "commonNameEn": "Gorillas",
    "commonNameBn": "গরিলা গণ",
    "description": "Ground-dwelling, predominantly herbivorous African apes that knuckle-walk through equatorial rainforests.",
    "isVerified": true
  },
  {
    "id": "taxon-castoridae",
    "scientificName": "Castoridae",
    "name": "Castoridae",
    "rank": "family",
    "parentId": "taxon-rodentia",
    "parentTaxonId": "taxon-rodentia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Hemprich, 1820",
    "commonNameEn": "Beavers",
    "commonNameBn": "বিভার পরিবার",
    "description": "Semiaquatic rodents equipped with broad scaly tails, iron-rich orange incisors, and keystone dam-building habits.",
    "isVerified": true
  },
  {
    "id": "taxon-castor",
    "scientificName": "Castor",
    "name": "Castor",
    "rank": "genus",
    "parentId": "taxon-castoridae",
    "parentTaxonId": "taxon-castoridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Beaver genus",
    "commonNameBn": "বিভার গণ",
    "description": "Ecosystem engineers constructing elaborate lodges and wetlands regulating riparian hydrology.",
    "isVerified": true
  },
  {
    "id": "taxon-animalia",
    "scientificName": "Animalia",
    "name": "Animalia",
    "rank": "kingdom",
    "parentTaxonId": null,
    "parentId": null,
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Animals",
    "commonNameBn": "প্রাণিজগৎ",
    "banglaName": "প্রাণিজগৎ",
    "description": "Multicellular, eukaryotic organisms comprising the biological kingdom Animalia.",
    "speciesCount": 23,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Systema Naturae (10th ed.)",
        "citation": "Linnaeus, C. 1758. Holmiae: Laurentii Salvii.",
        "notes": "Foundational zoological nomenclature"
      }
    ]
  },
  {
    "id": "taxon-chordata",
    "scientificName": "Chordata",
    "name": "Chordata",
    "rank": "phylum",
    "parentTaxonId": "taxon-animalia",
    "parentId": "taxon-animalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Haeckel, 1874",
    "commonNameEn": "Chordates",
    "commonNameBn": "কর্ডাটা",
    "banglaName": "কর্ডাটা",
    "description": "Deuterostome animals possessing a notochord, a hollow dorsal nerve cord, pharyngeal slits, and a post-anal tail.",
    "speciesCount": 23,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Anthropogenie oder Entwickelungsgeschichte des Menschen",
        "citation": "Haeckel, E. 1874. Leipzig: Engelmann."
      }
    ]
  },
  {
    "id": "taxon-fishes",
    "scientificName": "Pisces",
    "name": "Pisces (Fishes)",
    "rank": "grade",
    "parentTaxonId": "taxon-chordata",
    "parentId": "taxon-chordata",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Fishes",
    "commonNameBn": "মাছসমূহ",
    "banglaName": "মাছসমূহ",
    "description": "Aquatic craniate vertebrates characterized by gills throughout life and paired or median limbs in the shape of fins.",
    "speciesCount": 34000,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. On-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-porifera",
    "scientificName": "Porifera",
    "name": "Porifera",
    "rank": "phylum",
    "parentTaxonId": "taxon-animalia",
    "parentId": "taxon-animalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Grant, 1836",
    "commonNameEn": "Sponges",
    "commonNameBn": "স্পঞ্জ বা পরিফেরা",
    "banglaName": "স্পঞ্জ বা পরিফেরা",
    "description": "Basal multicellular animals with porous bodies and choanocyte flagellated chambers.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "World Register of Marine Species"
      }
    ]
  },
  {
    "id": "taxon-cnidaria",
    "scientificName": "Cnidaria",
    "name": "Cnidaria",
    "rank": "phylum",
    "parentTaxonId": "taxon-animalia",
    "parentId": "taxon-animalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Hatschek, 1888",
    "commonNameEn": "Corals, Jellyfish & Sea Anemones",
    "commonNameBn": "নিডারিয়া (প্রবাল ও জেলিফিশ)",
    "banglaName": "নিডারিয়া",
    "description": "Diploblastic radially symmetrical marine animals possessing stinging cnidocytes.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "World Register of Marine Species"
      }
    ]
  },
  {
    "id": "taxon-mollusca",
    "scientificName": "Mollusca",
    "name": "Mollusca",
    "rank": "phylum",
    "parentTaxonId": "taxon-animalia",
    "parentId": "taxon-animalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Molluscs",
    "commonNameBn": "কম্বোজ প্রাণী (মোলাস্কা)",
    "banglaName": "কম্বোজ প্রাণী",
    "description": "Soft-bodied unsegmented coelomates with a mantle, muscular foot, and shell.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "World Register of Marine Species"
      }
    ]
  },
  {
    "id": "taxon-arthropoda",
    "scientificName": "Arthropoda",
    "name": "Arthropoda",
    "rank": "phylum",
    "parentTaxonId": "taxon-animalia",
    "parentId": "taxon-animalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "von Siebold, 1848",
    "commonNameEn": "Arthropods (Crustaceans & Allies)",
    "commonNameBn": "সন্ধিপদী প্রাণী",
    "banglaName": "সন্ধিপদী প্রাণী",
    "description": "Segmented animals encased in a jointed chitinous exoskeleton with jointed limbs.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "World Register of Marine Species"
      }
    ]
  },
  {
    "id": "taxon-echinodermata",
    "scientificName": "Echinodermata",
    "name": "Echinodermata",
    "rank": "phylum",
    "parentTaxonId": "taxon-animalia",
    "parentId": "taxon-animalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bruguière, 1791",
    "commonNameEn": "Echinoderms",
    "commonNameBn": "কন্টকত্বকী প্রাণী",
    "banglaName": "কন্টকত্বকী প্রাণী",
    "description": "Marine deuterostomes with secondary pentaradial symmetry and hydraulic tube feet.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "World Register of Marine Species"
      }
    ]
  },
  {
    "id": "taxon-ctenophora",
    "scientificName": "Ctenophora",
    "name": "Ctenophora",
    "rank": "phylum",
    "parentTaxonId": "taxon-animalia",
    "parentId": "taxon-animalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Eschscholtz, 1829",
    "commonNameEn": "Comb Jellies",
    "commonNameBn": "চিরুনি জেলি বা টেনোফোরা",
    "banglaName": "চিরুনি জেলি",
    "description": "Biradially symmetrical gelatinous marine invertebrates bearing 8 rows of locomotor ciliary comb plates.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "World Register of Marine Species"
      }
    ]
  },
  {
    "id": "taxon-annelida-marine",
    "scientificName": "Annelida",
    "name": "Annelida",
    "rank": "phylum",
    "parentTaxonId": "taxon-animalia",
    "parentId": "taxon-animalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Lamarck, 1809",
    "commonNameEn": "Segmented Worms (Earthworms, Leeches & Polychaetes)",
    "commonNameBn": "অঙ্গুরীমাল / বলয়ী প্রাণী (কেঁচো, জোঁক ও পলিকিট)",
    "banglaName": "অঙ্গুরীমাল / বলয়ী প্রাণী",
    "description": "Coelomate segmented invertebrates with true metamerism, fluid hydrostatic skeleton, and specialized chaetae (including earthworms, leeches, and marine polychaetes).",
    "speciesCount": 7,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "World Register of Marine Species"
      }
    ]
  },
  {
    "id": "taxon-agnatha",
    "scientificName": "Agnatha",
    "name": "Agnatha",
    "rank": "superclass",
    "parentTaxonId": "taxon-fishes",
    "parentId": "taxon-fishes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cope, 1889",
    "commonNameEn": "Jawless Fishes (Hagfishes & Lampreys)",
    "commonNameBn": "চোয়ালবিহীন মাছ (হ্যাগফিশ ও ল্যাম্প্রে)",
    "banglaName": "চোয়ালবিহীন মাছ",
    "description": "Primitive jawless aquatic craniates lacking paired pelvic fins and biting jaws; living lineages comprise hagfishes (Myxini) and lampreys (Petromyzontida). Often treated as infraphylum Agnatha or cyclostomes (Cyclostomi).",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Fishes of the World (5th ed.)",
        "citation": "Nelson, Grande & Wilson (2016)",
        "notes": "Primary higher taxonomic classification for Agnatha/Cyclostomi"
      },
      {
        "source": "WoRMS (2024)",
        "citation": "Agnatha (Superclass)",
        "url": "https://www.marinespecies.org"
      }
    ]
  },
  {
    "id": "taxon-myxiniformes",
    "scientificName": "Myxiniformes",
    "name": "Myxiniformes",
    "rank": "order",
    "parentTaxonId": "taxon-class-myxini",
    "parentId": "taxon-class-myxini",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Hagfish Order",
    "commonNameBn": "হ্যাগফিশ বর্গ",
    "banglaName": "হ্যাগফিশ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-myxinidae",
    "scientificName": "Myxinidae",
    "name": "Myxinidae",
    "rank": "family",
    "parentTaxonId": "taxon-myxiniformes",
    "parentId": "taxon-myxiniformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Hagfish Family",
    "commonNameBn": "হ্যাগফিশ গোত্র",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-myxine",
    "scientificName": "Myxine",
    "name": "Myxine",
    "rank": "genus",
    "parentTaxonId": "taxon-myxinidae",
    "parentId": "taxon-myxinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Atlantic hagfishes",
    "commonNameBn": "হ্যাগফিশ গণ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-petromyzontiformes",
    "scientificName": "Petromyzontiformes",
    "name": "Petromyzontiformes",
    "rank": "order",
    "parentTaxonId": "taxon-class-petromyzonti",
    "parentId": "taxon-class-petromyzonti",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Lamprey Order",
    "commonNameBn": "ল্যাম্প্রে বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-petromyzontidae",
    "scientificName": "Petromyzontidae",
    "name": "Petromyzontidae",
    "rank": "family",
    "parentTaxonId": "taxon-petromyzontiformes",
    "parentId": "taxon-petromyzontiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Risso, 1827",
    "commonNameEn": "Northern Lampreys",
    "commonNameBn": "ল্যাম্প্রে গোত্র",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-petromyzon",
    "scientificName": "Petromyzon",
    "name": "Petromyzon",
    "rank": "genus",
    "parentTaxonId": "taxon-petromyzontidae",
    "parentId": "taxon-petromyzontidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Sea lampreys",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-chondrichthyes",
    "scientificName": "Chondrichthyes",
    "name": "Chondrichthyes",
    "rank": "class",
    "parentTaxonId": "taxon-fishes",
    "parentId": "taxon-fishes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Huxley, 1880",
    "commonNameEn": "Cartilaginous Fishes (Sharks, Rays & Chimaeras)",
    "commonNameBn": "তরুণাস্থিময় মাছ (হাঙ্গর, শঙ্কর ও কাইমেরা)",
    "banglaName": "তরুণাস্থিময় মাছ",
    "description": "Jawed vertebrates with paired fins, placoid dermal scales, and an endoskeleton composed of prismatic calcified cartilage rather than true bone.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Fishes of the World (5th ed.)",
        "citation": "Nelson et al. (2016)",
        "notes": "Class Chondrichthyes"
      },
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-subclass-elasmobranchii",
    "scientificName": "Elasmobranchii",
    "name": "Elasmobranchii",
    "rank": "subclass",
    "parentTaxonId": "taxon-chondrichthyes",
    "parentId": "taxon-chondrichthyes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1838",
    "commonNameEn": "Sharks and Rays",
    "commonNameBn": "ইলাসমোব্রাঙ্কি (হাঙ্গর ও শঙ্কর)",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-subclass-holocephali",
    "scientificName": "Holocephali",
    "name": "Holocephali",
    "rank": "subclass",
    "parentTaxonId": "taxon-chondrichthyes",
    "parentId": "taxon-chondrichthyes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1832",
    "commonNameEn": "Chimaeras & Ghost Sharks",
    "commonNameBn": "হলোসেফালি (কাইমেরা বা ভূত হাঙ্গর)",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-orectolobiformes",
    "scientificName": "Orectolobiformes",
    "name": "Orectolobiformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Applegate, 1974",
    "commonNameEn": "Carpet sharks",
    "commonNameBn": "কার্পেট হাঙর বর্গ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Compagno (2001) Sharks of the World",
        "citation": "FAO Species Catalogue"
      }
    ]
  },
  {
    "id": "taxon-carcharhiniformes",
    "scientificName": "Carcharhiniformes",
    "name": "Carcharhiniformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Compagno, 1973",
    "commonNameEn": "Ground sharks & Requiem sharks",
    "commonNameBn": "গ্রাউন্ড হাঙর বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-lamniformes",
    "scientificName": "Lamniformes",
    "name": "Lamniformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1958",
    "commonNameEn": "Mackerel sharks",
    "commonNameBn": "ম্যাকারেল হাঙর বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-squaliformes",
    "scientificName": "Squaliformes",
    "name": "Squaliformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Goodrich, 1909",
    "commonNameEn": "Dogfish sharks",
    "commonNameBn": "ডগফিশ হাঙর বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-torpediniformes",
    "scientificName": "Torpediniformes",
    "name": "Torpediniformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "de Buen, 1926",
    "commonNameEn": "Electric rays",
    "commonNameBn": "বৈদ্যুতিক শঙ্কর বা টর্পেডো রে বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-rajiformes",
    "scientificName": "Rajiformes",
    "name": "Rajiformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Skates",
    "commonNameBn": "স্কেট মাছ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-myliobatiformes",
    "scientificName": "Myliobatiformes",
    "name": "Myliobatiformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Compagno, 1973",
    "commonNameEn": "Stingrays & Eagle rays",
    "commonNameBn": "স্টিংরে ও ঈগলরে বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-rhinopristiformes",
    "scientificName": "Rhinopristiformes",
    "name": "Rhinopristiformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Naylor et al., 2012",
    "commonNameEn": "Guitarfishes and Sawfishes",
    "commonNameBn": "করাতমাছ ও গিটারফিশ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-chimaeriformes",
    "scientificName": "Chimaeriformes",
    "name": "Chimaeriformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-holocephali",
    "parentId": "taxon-subclass-holocephali",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Obruchev, 1953",
    "commonNameEn": "Chimaeras",
    "commonNameBn": "কাইমেরা বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-osteichthyes",
    "scientificName": "Osteichthyes",
    "name": "Osteichthyes",
    "rank": "superclass",
    "parentTaxonId": "taxon-fishes",
    "parentId": "taxon-fishes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Huxley, 1880",
    "commonNameEn": "Bony Fishes",
    "commonNameBn": "অস্থিময় মাছ",
    "banglaName": "অস্থিময় মাছ",
    "description": "Vertebrates characterized by a bony skeleton formed through endochondral ossification, swim bladders or lungs, opercular gill coverings, and lepidotrichia. Encompasses both ray-finned fishes (Actinopterygii) and lobe-finned fishes (Sarcopterygii).",
    "speciesCount": 20,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Fishes of the World (5th ed.)",
        "citation": "Nelson, Grande & Wilson (2016)",
        "notes": "Osteichthyes parent clade"
      },
      {
        "source": "Eschmeyer Catalog of Fishes (2024)"
      }
    ]
  },
  {
    "id": "taxon-actinopterygii",
    "scientificName": "Actinopterygii",
    "name": "Actinopterygii",
    "rank": "class",
    "parentTaxonId": "taxon-osteichthyes",
    "parentId": "taxon-osteichthyes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Klein, 1885",
    "commonNameEn": "Ray-finned fishes",
    "commonNameBn": "রশ্মিপাখনাযুক্ত মাছ",
    "banglaName": "রশ্মিপাখনাযুক্ত মাছ",
    "description": "The clade of bony fishes characterized by webs of skin supported by bony or horny spines (lepidotrichia). Represents over 96% of all living fish species.",
    "speciesCount": 20,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Fishes of the World (5th ed.)",
        "citation": "Nelson et al. (2016)"
      },
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-subclass-neopterygii",
    "scientificName": "Neopterygii",
    "name": "Neopterygii",
    "rank": "subclass",
    "parentTaxonId": "taxon-actinopterygii",
    "parentId": "taxon-actinopterygii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1923",
    "commonNameEn": "Modern Bony Fishes (Teleosts & Allies)",
    "commonNameBn": "নিওপটেরিগি (আধুনিক অস্থিময় মাছ)",
    "speciesCount": 20,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-polypteriformes",
    "scientificName": "Polypteriformes",
    "name": "Polypteriformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-cladistia",
    "parentId": "taxon-subclass-cladistia",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Bichirs and reedfishes",
    "commonNameBn": "বিচির বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-acipenseriformes",
    "scientificName": "Acipenseriformes",
    "name": "Acipenseriformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-chondrostei",
    "parentId": "taxon-infraclass-chondrostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Sturgeons and paddlefishes",
    "commonNameBn": "স্টার্জিয়ন বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-lepisosteiformes",
    "scientificName": "Lepisosteiformes",
    "name": "Lepisosteiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-holostei",
    "parentId": "taxon-infraclass-holostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Hay, 1929",
    "commonNameEn": "Gars",
    "commonNameBn": "গার মাছ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-amiiformes",
    "scientificName": "Amiiformes",
    "name": "Amiiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-holostei",
    "parentId": "taxon-infraclass-holostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Huxley, 1861",
    "commonNameEn": "Bowfins",
    "commonNameBn": "বোফিন বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-osteoglossiformes",
    "scientificName": "Osteoglossiformes",
    "name": "Osteoglossiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Bony-tongues and featherbacks",
    "commonNameBn": "চিতল ও অস্থিজিহ্বা বর্গ",
    "description": "Basal teleosts with toothed tongues; Chitala chitala (Chital) is an apex riverine predator.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Rahman (2005)"
      }
    ]
  },
  {
    "id": "taxon-anguilliformes",
    "scientificName": "Anguilliformes",
    "name": "Anguilliformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "True eels and morays",
    "commonNameBn": "বান মাছ বা প্রকৃত ইল বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-clupeiformes",
    "scientificName": "Clupeiformes",
    "name": "Clupeiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Herrings, shads, and anchovies",
    "commonNameBn": "ইলিশ ও হেরিং বর্গ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Rahman (2005)"
      }
    ]
  },
  {
    "id": "taxon-gonorynchiformes",
    "scientificName": "Gonorynchiformes",
    "name": "Gonorynchiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Milkfishes and beaked sandfishes",
    "commonNameBn": "মিল্কফিশ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-cypriniformes",
    "scientificName": "Cypriniformes",
    "name": "Cypriniformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Carps, minnows, and loaches",
    "commonNameBn": "কার্প ও পুঁটি বর্গ",
    "description": "The dominant freshwater fish order globally; toothless jaws, pharyngeal teeth, kinethmoid bone present.",
    "speciesCount": 4,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Rahman (2005)"
      }
    ]
  },
  {
    "id": "taxon-characiformes",
    "scientificName": "Characiformes",
    "name": "Characiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1911",
    "commonNameEn": "Characins, tetras, and piranhas",
    "commonNameBn": "টেট্রা ও পিরানহা বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-siluriformes",
    "scientificName": "Siluriformes",
    "name": "Siluriformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1817",
    "commonNameEn": "Catfishes",
    "commonNameBn": "ক্যাটফিশ বর্গ",
    "description": "Scaleless freshwater and estuarine fishes with barbels, pectoral spines, and Weberian apparatus.",
    "speciesCount": 8,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Rahman (2005)"
      }
    ]
  },
  {
    "id": "taxon-salmoniformes",
    "scientificName": "Salmoniformes",
    "name": "Salmoniformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Salmons and trouts",
    "commonNameBn": "স্যামন ও ট্রাউট বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-aulopiformes",
    "scientificName": "Aulopiformes",
    "name": "Aulopiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rosen, 1973",
    "commonNameEn": "Lizardfishes and lancetfishes",
    "commonNameBn": "লিজার্ডফিশ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-gadiformes",
    "scientificName": "Gadiformes",
    "name": "Gadiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Goodrich, 1909",
    "commonNameEn": "Cods and hakes",
    "commonNameBn": "কড ও হেক বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-syngnathiformes",
    "scientificName": "Syngnathiformes",
    "name": "Syngnathiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Pipefishes and seahorses",
    "commonNameBn": "পাইপফিশ ও সী-হর্স বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-synbranchiformes",
    "scientificName": "Synbranchiformes",
    "name": "Synbranchiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Swamp eels and spiny eels",
    "commonNameBn": "কুচিয়া ও শালবাইম বর্গ",
    "description": "Eel-like fishes with reduced pelvic fins; includes spiny eels (Mastacembelidae) and swamp eels.",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Rahman (2005)"
      }
    ]
  },
  {
    "id": "taxon-scombriformes",
    "scientificName": "Scombriformes",
    "name": "Scombriformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Mackerels and tunas",
    "commonNameBn": "ম্যাকারেল ও টুনা বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-anabantiformes",
    "scientificName": "Anabantiformes",
    "name": "Anabantiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Britz, 1995",
    "commonNameEn": "Gouramies and snakeheads",
    "commonNameBn": "কৈ ও শোল বর্গ",
    "description": "Air-breathing freshwater fishes possessing suprabranchial labyrinth organs.",
    "speciesCount": 3,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Britz (1995)"
      }
    ]
  },
  {
    "id": "taxon-pleuronectiformes",
    "scientificName": "Pleuronectiformes",
    "name": "Pleuronectiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Flatfishes (Flounders, Soles, Tonguesoles, Turbots)",
    "commonNameBn": "চ্যাপ্টা মাছ বা ফ্ল্যাটফিশ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "FishBase (2026)",
        "citation": "FishBase OrdersSummary: Pleuronectiformes (16 families)."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons. Order Pleuronectiformes."
      },
      {
        "source": "WoRMS (2026)",
        "citation": "World Register of Marine Species: Pleuronectiformes (AphiaID: 10331, Accepted Order)."
      },
      {
        "source": "Catalogue of Life (2026)",
        "citation": "Catalogue of Life: Order Pleuronectiformes."
      },
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "CAS: Alternative treatment as Suborder Pleuronectoidei within Carangiformes."
      }
    ],
    "description": "Highly specialized benthic marine and estuarine bony fishes characterized by ontogenetic cranial asymmetry (both eyes migrating to one side of the head in adults), extreme lateral compression, and absence of a swimbladder. Accepted as an independent order in FishBase (2026), Nelson et al. (2016), and WoRMS (AphiaID: 10331); treated as Suborder Pleuronectoidei within Carangiformes by Eschmeyer's Catalog of Fishes (2026) and Betancur-R. et al. (2017)."
  },
  {
    "id": "taxon-perciformes",
    "scientificName": "Perciformes",
    "name": "Perciformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Perch-like fishes",
    "commonNameBn": "পার্চ ও ভেটকি বর্গ",
    "description": "Diverse spiny-rayed teleosts; includes Lates calcarifer (Bhetki).",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Rahman (2005)"
      }
    ]
  },
  {
    "id": "taxon-tetraodontiformes",
    "scientificName": "Tetraodontiformes",
    "name": "Tetraodontiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Pufferfishes, boxfishes, and triggerfishes",
    "commonNameBn": "পটকা ও বক্সফিশ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-sarcopterygii",
    "scientificName": "Sarcopterygii",
    "name": "Sarcopterygii",
    "rank": "class",
    "parentTaxonId": "taxon-osteichthyes",
    "parentId": "taxon-osteichthyes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Romer, 1955",
    "commonNameEn": "Lobe-finned fishes (Coelacanths & Lungfishes)",
    "commonNameBn": "মাংসলপাখনাযুক্ত মাছ (সিল্যাকান্থ ও ফুসফুসযুক্ত মাছ)",
    "banglaName": "মাংসলপাখনাযুক্ত মাছ",
    "description": "Bony fishes possessing paired fins with a central fleshy muscular axis homologous to tetrapod limbs. Living groups are coelacanths (Actinistia) and lungfishes (Dipnoi).",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Fishes of the World (5th ed.)",
        "citation": "Nelson et al. (2016)"
      },
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-subclass-actinistia",
    "scientificName": "Actinistia",
    "name": "Actinistia",
    "rank": "subclass",
    "parentTaxonId": "taxon-sarcopterygii",
    "parentId": "taxon-sarcopterygii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cope, 1871",
    "commonNameEn": "Coelacanths",
    "commonNameBn": "এক্টিনিস্টিয়া (সিল্যাকান্থ)",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-subclass-dipnoi",
    "scientificName": "Dipnoi",
    "name": "Dipnoi",
    "rank": "subclass",
    "parentTaxonId": "taxon-sarcopterygii",
    "parentId": "taxon-sarcopterygii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller, 1844",
    "commonNameEn": "Lungfishes",
    "commonNameBn": "ডিপনোই (ফুসফুসযুক্ত মাছ)",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-coelacanthiformes",
    "scientificName": "Coelacanthiformes",
    "name": "Coelacanthiformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-actinistia",
    "parentId": "taxon-subclass-actinistia",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1937",
    "commonNameEn": "Coelacanths",
    "commonNameBn": "সিল্যাকান্থ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-ceratodontiformes",
    "scientificName": "Ceratodontiformes",
    "name": "Ceratodontiformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-dipnoi",
    "parentId": "taxon-subclass-dipnoi",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Lungfishes",
    "commonNameBn": "ফুসফুসযুক্ত মাছ বর্গ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-latimeriidae",
    "scientificName": "Latimeriidae",
    "name": "Latimeriidae",
    "rank": "family",
    "parentTaxonId": "taxon-coelacanthiformes",
    "parentId": "taxon-coelacanthiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Gombessa coelacanths",
    "commonNameBn": "সিল্যাকান্থ গোত্র",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-latimeria",
    "scientificName": "Latimeria",
    "name": "Latimeria",
    "rank": "genus",
    "parentTaxonId": "taxon-latimeriidae",
    "parentId": "taxon-latimeriidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Smith, 1939",
    "commonNameEn": "Living coelacanths",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-protopteridae",
    "scientificName": "Protopteridae",
    "name": "Protopteridae",
    "rank": "family",
    "parentTaxonId": "taxon-ceratodontiformes",
    "parentId": "taxon-ceratodontiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Günther, 1870",
    "commonNameEn": "African lungfishes",
    "commonNameBn": "আফ্রিকান ফুসফুসযুক্ত মাছ গোত্র",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-protopterus",
    "scientificName": "Protopterus",
    "name": "Protopterus",
    "rank": "genus",
    "parentTaxonId": "taxon-protopteridae",
    "parentId": "taxon-protopteridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Owen, 1839",
    "commonNameEn": "African lungfishes",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-mammalia",
    "scientificName": "Mammalia",
    "name": "Mammalia",
    "rank": "class",
    "parentTaxonId": "taxon-chordata",
    "parentId": "taxon-chordata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Mammals",
    "commonNameBn": "স্তন্যপায়ী প্রাণী",
    "banglaName": "স্তন্যপায়ী প্রাণী",
    "description": "Vertebrates characterized by mammary milk glands, fur/hair, and three middle ear bones.",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Systema Naturae (10th ed.)"
      }
    ]
  },
  {
    "id": "taxon-reptilia",
    "scientificName": "Reptilia",
    "name": "Reptilia",
    "rank": "class",
    "parentTaxonId": "taxon-chordata",
    "parentId": "taxon-chordata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Laurenti, 1768",
    "commonNameEn": "Reptiles (including Marine Groups)",
    "commonNameBn": "সরীসৃপ (সামুদ্রিক ট্যাক্সন সহ)",
    "banglaName": "সরীসৃপ",
    "description": "Air-breathing ectothermic amniotes with epidermal keratinous scales; includes sea turtles and sea snakes.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)"
      }
    ]
  },
  {
    "id": "taxon-amphibia",
    "scientificName": "Amphibia",
    "name": "Amphibia",
    "rank": "class",
    "parentTaxonId": "taxon-chordata",
    "parentId": "taxon-chordata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Blainville, 1816",
    "commonNameEn": "Amphibians",
    "commonNameBn": "উভচর প্রাণী",
    "banglaName": "উভচর প্রাণী",
    "description": "Ectothermic anamniote tetrapods characterized by glandular moist permeable skin and typically a biphasic aquatic larval and terrestrial adult life cycle.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb (2026)",
        "citation": "University of California, Berkeley. Information on amphibian biology and conservation."
      },
      {
        "source": "Frost, D. R. (2026)",
        "citation": "Amphibian Species of the World: an Online Reference. American Museum of Natural History."
      }
    ]
  },
  {
    "id": "taxon-aves",
    "scientificName": "Aves",
    "name": "Aves",
    "rank": "class",
    "parentTaxonId": "taxon-chordata",
    "parentId": "taxon-chordata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Birds",
    "commonNameBn": "পাখি বা পক্ষীকুল",
    "banglaName": "পাখি",
    "description": "Endothermic feathered amniotes characterized by toothless beaks, hollow bones, hard-shelled eggs, and forelimbs modified into wings for flight.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Systema Naturae (10th ed.)",
        "citation": "Linnaeus, C. 1758. Holmiae: Laurentii Salvii."
      },
      {
        "source": "IOC World Bird List (v14.1, 2026)",
        "citation": "Gill, F., Donsker, D. & Rasmussen, P. (Eds)."
      }
    ]
  },
  {
    "id": "taxon-artiodactyla",
    "scientificName": "Artiodactyla",
    "name": "Artiodactyla",
    "rank": "order",
    "parentTaxonId": "taxon-mammalia",
    "parentId": "taxon-mammalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Owen, 1848",
    "commonNameEn": "Even-toed ungulates and cetaceans",
    "commonNameBn": "জলজ ও খুরযুক্ত স্তন্যপায়ী",
    "banglaName": "জলজ ও খুরযুক্ত স্তন্যপায়ী",
    "description": "Order incorporating terrestrial artiodactyls and obligate aquatic cetaceans (whales, dolphins, and porpoises).",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-cetacea",
    "scientificName": "Cetacea",
    "name": "Cetacea",
    "rank": "infraorder",
    "parentTaxonId": "taxon-artiodactyla",
    "parentId": "taxon-artiodactyla",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Brisson, 1762",
    "commonNameEn": "Whales, Dolphins & Porpoises",
    "commonNameBn": "তিমি, ডলফিন ও শুশুক",
    "banglaName": "তিমি ও ডলফিন",
    "description": "Obligate aquatic mammals with fusiform bodies, horizontal tail flukes, and nostrils situated atop the head as blowholes.",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      },
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-carnivora",
    "scientificName": "Carnivora",
    "name": "Carnivora",
    "rank": "order",
    "parentTaxonId": "taxon-mammalia",
    "parentId": "taxon-mammalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bowdich, 1821",
    "commonNameEn": "Carnivorans (including marine pinnipeds)",
    "commonNameBn": "মাংসাশী স্তন্যপায়ী (সিল সহ)",
    "banglaName": "মাংসাশী স্তন্যপায়ী",
    "description": "Placental mammals possessing specialized carnassial dentition; includes the fully aquatic and semi-aquatic Pinnipedia.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-pinnipedia",
    "scientificName": "Pinnipedia",
    "name": "Pinnipedia",
    "rank": "suborder",
    "parentTaxonId": "taxon-carnivora",
    "parentId": "taxon-carnivora",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Illiger, 1811",
    "commonNameEn": "Pinnipeds (Seals, Sea Lions & Walruses)",
    "commonNameBn": "পিন্নিপেডিয়া (সিল, সি লায়ন ও ওয়ালরাস)",
    "banglaName": "পিন্নিপেডিয়া",
    "description": "Semi-aquatic marine carnivorans with limbs modified into hydrofoil flippers, dense insulating blubber, and specialized diving physiology.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024) AphiaID 148729",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-sirenia",
    "scientificName": "Sirenia",
    "name": "Sirenia",
    "rank": "order",
    "parentTaxonId": "taxon-mammalia",
    "parentId": "taxon-mammalia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Illiger, 1811",
    "commonNameEn": "Sirenians (Dugongs & Manatees)",
    "commonNameBn": "সাইরেনিয়া (ডুগং ও মানাতি)",
    "banglaName": "সাইরেনিয়া",
    "description": "Obligate aquatic herbivorous mammals inhabiting shallow tropical and subtropical coastal waters and seagrass meadows.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024) AphiaID 136982",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-testudines",
    "scientificName": "Testudines",
    "name": "Testudines",
    "rank": "order",
    "parentTaxonId": "taxon-reptilia",
    "parentId": "taxon-reptilia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Batsch, 1788",
    "commonNameEn": "Turtles, Tortoises & Terrapins",
    "commonNameBn": "কাছিম ও কচ্ছপ বর্গ",
    "banglaName": "কাছিম বর্গ",
    "description": "Amniote vertebrates encased in a specialized bony or cartilaginous carapace and plastron derived from expanded ribs.",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Rhodin et al. (2021) Turtles of the World",
        "citation": "ref-iucn-mtsg-2021"
      }
    ]
  },
  {
    "id": "taxon-chelonioidea",
    "scientificName": "Chelonioidea",
    "name": "Chelonioidea",
    "rank": "superfamily",
    "parentTaxonId": "taxon-testudines",
    "parentId": "taxon-testudines",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Baur, 1893",
    "commonNameEn": "Sea Turtles",
    "commonNameBn": "সামুদ্রিক কাছিম অধিগৌত্র",
    "banglaName": "সামুদ্রিক কাছিম",
    "description": "Superfamily of marine turtles adapted for oceanic pelagic life, possessing elongated paddle-like foreflippers and lachrymal salt glands.",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Rhodin et al. (2021) Turtles of the World",
        "citation": "ref-iucn-mtsg-2021"
      },
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-squamata",
    "scientificName": "Squamata",
    "name": "Squamata",
    "rank": "order",
    "parentTaxonId": "taxon-reptilia",
    "parentId": "taxon-reptilia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Oppel, 1811",
    "commonNameEn": "Scaled Reptiles (Lizards & Snakes)",
    "commonNameBn": "আঁইশযুক্ত সরীসৃপ (সাপ ও গিরগিটি)",
    "banglaName": "আঁইশযুক্ত সরীসৃপ",
    "description": "Largest order of reptiles, characterized by skin covered in horny epidermal scales and highly kinetic skulls.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database (2024)",
        "citation": "ref-reptile-database-2024"
      }
    ]
  },
  {
    "id": "taxon-elapidae",
    "scientificName": "Elapidae",
    "name": "Elapidae",
    "rank": "family",
    "parentTaxonId": "taxon-squamata",
    "parentId": "taxon-squamata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Boie, 1827",
    "commonNameEn": "Elapid Snakes (Cobras, Kraits & Sea Snakes)",
    "commonNameBn": "এলাপিডি গোত্র (গোখরা ও সামুদ্রিক সাপ)",
    "banglaName": "এলাপিডি গোত্র",
    "description": "Venomous snakes characterized by permanently erect hollow fangs (proteroglyphous dentition) at the front of the maxillae.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database (2024)",
        "citation": "ref-reptile-database-2024"
      }
    ]
  },
  {
    "id": "taxon-hydrophiinae",
    "scientificName": "Hydrophiinae",
    "name": "Hydrophiinae",
    "rank": "subfamily",
    "parentTaxonId": "taxon-elapidae",
    "parentId": "taxon-elapidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fitzinger, 1843",
    "commonNameEn": "True Sea Snakes",
    "commonNameBn": "সামুদ্রিক সাপ (হাইড্রোফাইনি উপগোত্র)",
    "banglaName": "সামুদ্রিক সাপ উপগোত্র",
    "description": "Subfamily of marine elapid snakes possessing paddle-like compressed tails, valvular nostrils, and sublingual salt glands.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database (2024)",
        "citation": "ref-reptile-database-2024"
      },
      {
        "source": "WoRMS (2024) AphiaID 147040",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-anthozoa",
    "scientificName": "Anthozoa",
    "name": "Anthozoa",
    "rank": "class",
    "parentTaxonId": "taxon-cnidaria",
    "parentId": "taxon-cnidaria",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Ehrenberg, 1834",
    "commonNameEn": "Corals & Sea Anemones",
    "commonNameBn": "অ্যান্থোজোয়া (প্রবাল ও সাগরকুসুম)",
    "banglaName": "প্রবাল শ্রেণি",
    "description": "Exclusively marine polypoid cnidarians lacking a medusa stage in their lifecycle.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-scleractinia",
    "scientificName": "Scleractinia",
    "name": "Scleractinia",
    "rank": "order",
    "parentTaxonId": "taxon-anthozoa",
    "parentId": "taxon-anthozoa",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bourne, 1900",
    "commonNameEn": "Stony Corals (Hard Corals)",
    "commonNameBn": "পাথুরে প্রবাল বর্গ",
    "banglaName": "পাথুরে প্রবাল",
    "description": "Hermaltypic and ahermatypic hexacorallians secreting hard aragonite calcium carbonate skeletons.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-scyphozoa",
    "scientificName": "Scyphozoa",
    "name": "Scyphozoa",
    "rank": "class",
    "parentTaxonId": "taxon-cnidaria",
    "parentId": "taxon-cnidaria",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Goette, 1887",
    "commonNameEn": "True Jellyfish",
    "commonNameBn": "সাইফোজোয়া (প্রকৃত জেলিফিশ)",
    "banglaName": "প্রকৃত জেলিফিশ",
    "description": "Marine cnidarians in which the free-swimming medusa is the dominant lifecycle phase.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-semaeostomeae",
    "scientificName": "Semaeostomeae",
    "name": "Semaeostomeae",
    "rank": "order",
    "parentTaxonId": "taxon-scyphozoa",
    "parentId": "taxon-scyphozoa",
    "status": "accepted",
    "module": "marine",
    "authorYear": "L. Agassiz, 1862",
    "commonNameEn": "Flag-mouth Jellyfishes",
    "commonNameBn": "পতাকা-মুখ জেলিফিশ বর্গ",
    "banglaName": "পতাকা-মুখ জেলিফিশ",
    "description": "Scyphozoans with four long, frilly oral arms surrounding the central mouth.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-cephalopoda",
    "scientificName": "Cephalopoda",
    "name": "Cephalopoda",
    "rank": "class",
    "parentTaxonId": "taxon-mollusca",
    "parentId": "taxon-mollusca",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Cuvier, 1797",
    "commonNameEn": "Cephalopods (Octopuses, Squids & Cuttlefishes)",
    "commonNameBn": "সেফালোপোডা (অক্টোপাস ও স্কুইড)",
    "banglaName": "সেফালোপোডা",
    "description": "Exclusively marine molluscs with prominent heads, well-developed eyes, and arms or tentacles modified from the foot.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-octopoda",
    "scientificName": "Octopoda",
    "name": "Octopoda",
    "rank": "order",
    "parentTaxonId": "taxon-cephalopoda",
    "parentId": "taxon-cephalopoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Leach, 1818",
    "commonNameEn": "Octopuses",
    "commonNameBn": "অক্টোপাস বর্গ",
    "banglaName": "অক্টোপাস বর্গ",
    "description": "Eight-limbed cephalopod molluscs lacking an internal or external shell and possessing remarkable neuro-cognitive camouflage.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-malacostraca",
    "scientificName": "Malacostraca",
    "name": "Malacostraca",
    "rank": "class",
    "parentTaxonId": "taxon-arthropoda",
    "parentId": "taxon-arthropoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Malacostracans (Crabs, Shrimps & Lobsters)",
    "commonNameBn": "ম্যালাকোস্ট্রাকা (কাঁকড়া ও চিংড়ি)",
    "banglaName": "ম্যালাকোস্ট্রাকা",
    "description": "Largest class of crustaceans, comprising animals with 20 body segments, carapace, and compound eyes.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-decapoda",
    "scientificName": "Decapoda",
    "name": "Decapoda",
    "rank": "order",
    "parentTaxonId": "taxon-malacostraca",
    "parentId": "taxon-malacostraca",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Decapod Crustaceans (Ten-footed Crabs & Shrimps)",
    "commonNameBn": "দশপদী ক্রাস্টাশিয়ান (ডেকাপোডা)",
    "banglaName": "ডেকাপোডা বর্গ",
    "description": "Crustaceans possessing five pairs of thoracic thoracic pereiopods, including chelae (pincers).",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-asteroidea",
    "scientificName": "Asteroidea",
    "name": "Asteroidea",
    "rank": "class",
    "parentTaxonId": "taxon-echinodermata",
    "parentId": "taxon-echinodermata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "de Blainville, 1830",
    "commonNameEn": "Sea Stars (Starfishes)",
    "commonNameBn": "সমুদ্রতারা বা স্টারফিশ",
    "banglaName": "সমুদ্রতারা শ্রেণি",
    "description": "Stellate echinoderms with flattened bodies and radiating arms containing digestive and reproductive organs.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-valvatida",
    "scientificName": "Valvatida",
    "name": "Valvatida",
    "rank": "order",
    "parentTaxonId": "taxon-asteroidea",
    "parentId": "taxon-asteroidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Perrier, 1884",
    "commonNameEn": "Valvatid Sea Stars",
    "commonNameBn": "ভালভাটিডা সমুদ্রতারা বর্গ",
    "banglaName": "ভালভাটিডা বর্গ",
    "description": "Asterozoans with five or more arms bearing conspicuous marginal plates and valvate pedicellariae.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-demospongiae",
    "scientificName": "Demospongiae",
    "name": "Demospongiae",
    "rank": "class",
    "parentTaxonId": "taxon-porifera",
    "parentId": "taxon-porifera",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Sollas, 1885",
    "commonNameEn": "Demosponges",
    "commonNameBn": "ডেমোস্পঞ্জ শ্রেণি",
    "banglaName": "ডেমোস্পঞ্জ",
    "description": "Most diverse class of sponges, with skeletons composed of spongin fibers and/or siliceous spicules.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database (2024)",
        "citation": "ref-world-porifera-2024"
      }
    ]
  },
  {
    "id": "taxon-dictyoceratida",
    "scientificName": "Dictyoceratida",
    "name": "Dictyoceratida",
    "rank": "order",
    "parentTaxonId": "taxon-demospongiae",
    "parentId": "taxon-demospongiae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Minchin, 1900",
    "commonNameEn": "Keratose Horn Sponges",
    "commonNameBn": "হর্ন স্পঞ্জ বা শৃঙ্গাকার স্পঞ্জ",
    "banglaName": "হর্ন স্পঞ্জ বর্গ",
    "description": "Demosponges possessing skeletons constructed entirely of an anastomosing network of spongin fibers without mineral spicules.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database (2024)",
        "citation": "ref-world-porifera-2024"
      }
    ]
  },
  {
    "id": "taxon-clupeidae",
    "scientificName": "Clupeidae",
    "name": "Clupeidae",
    "rank": "family",
    "parentTaxonId": "taxon-clupeiformes",
    "parentId": "taxon-clupeiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1816",
    "commonNameEn": "Herrings and shads",
    "commonNameBn": "ইলিশ গোত্র",
    "banglaName": "ইলিশ গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-cyprinidae",
    "scientificName": "Cyprinidae",
    "name": "Cyprinidae",
    "rank": "family",
    "parentTaxonId": "taxon-cypriniformes",
    "parentId": "taxon-cypriniformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Carps and minnows",
    "commonNameBn": "কার্প গোত্র",
    "banglaName": "কার্প গোত্র",
    "speciesCount": 4,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-pangasiidae",
    "scientificName": "Pangasiidae",
    "name": "Pangasiidae",
    "rank": "family",
    "parentTaxonId": "taxon-siluriformes",
    "parentId": "taxon-siluriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1858",
    "commonNameEn": "Shark catfishes",
    "commonNameBn": "পাঙ্গাস গোত্র",
    "banglaName": "পাঙ্গাস গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-clariidae",
    "scientificName": "Clariidae",
    "name": "Clariidae",
    "rank": "family",
    "parentTaxonId": "taxon-siluriformes",
    "parentId": "taxon-siluriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1846",
    "commonNameEn": "Airbreathing catfishes",
    "commonNameBn": "মাগুর গোত্র",
    "banglaName": "মাগুর গোত্র",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Ng & Kottelat (2008)"
      }
    ]
  },
  {
    "id": "taxon-heteropneustidae",
    "scientificName": "Heteropneustidae",
    "name": "Heteropneustidae",
    "rank": "family",
    "parentTaxonId": "taxon-siluriformes",
    "parentId": "taxon-siluriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Hora, 1936",
    "commonNameEn": "Stinging catfishes",
    "commonNameBn": "শিং গোত্র",
    "banglaName": "শিং গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-bagridae",
    "scientificName": "Bagridae",
    "name": "Bagridae",
    "rank": "family",
    "parentTaxonId": "taxon-siluriformes",
    "parentId": "taxon-siluriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1858",
    "commonNameEn": "Bagrid catfishes",
    "commonNameBn": "টেংরা গোত্র",
    "banglaName": "টেংরা গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-siluridae",
    "scientificName": "Siluridae",
    "name": "Siluridae",
    "rank": "family",
    "parentTaxonId": "taxon-siluriformes",
    "parentId": "taxon-siluriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1816",
    "commonNameEn": "Wels catfishes",
    "commonNameBn": "বোয়াল-পাবদা গোত্র",
    "banglaName": "বোয়াল-পাবদা গোত্র",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-schilbeidae",
    "scientificName": "Schilbeidae",
    "name": "Schilbeidae",
    "rank": "family",
    "parentTaxonId": "taxon-siluriformes",
    "parentId": "taxon-siluriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1858",
    "commonNameEn": "Schilbeid catfishes",
    "commonNameBn": "বাচা গোত্র",
    "banglaName": "বাচা গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-channidae",
    "scientificName": "Channidae",
    "name": "Channidae",
    "rank": "family",
    "parentTaxonId": "taxon-anabantiformes",
    "parentId": "taxon-anabantiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Fowler, 1934",
    "commonNameEn": "Snakehead fishes",
    "commonNameBn": "শোল-টাকি গোত্র",
    "banglaName": "শোল-টাকি গোত্র",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-anabantidae",
    "scientificName": "Anabantidae",
    "name": "Anabantidae",
    "rank": "family",
    "parentTaxonId": "taxon-anabantiformes",
    "parentId": "taxon-anabantiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1831",
    "commonNameEn": "Climbing gouramies",
    "commonNameBn": "কৈ গোত্র",
    "banglaName": "কৈ গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-notopteridae",
    "scientificName": "Notopteridae",
    "name": "Notopteridae",
    "rank": "family",
    "parentTaxonId": "taxon-osteoglossiformes",
    "parentId": "taxon-osteoglossiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Featherfin knifefish / Chitals",
    "commonNameBn": "চিতল গোত্র",
    "banglaName": "চিতল গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-mastacembelidae",
    "scientificName": "Mastacembelidae",
    "name": "Mastacembelidae",
    "rank": "family",
    "parentTaxonId": "taxon-synbranchiformes",
    "parentId": "taxon-synbranchiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Swainson, 1839",
    "commonNameEn": "Spiny eels",
    "commonNameBn": "বাইম গোত্র",
    "banglaName": "বাইম গোত্র",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-latidae",
    "scientificName": "Latidae",
    "name": "Latidae",
    "rank": "family",
    "parentTaxonId": "taxon-perciformes",
    "parentId": "taxon-perciformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Eschmeyer, 1990",
    "commonNameEn": "Nile perches and Barramundis",
    "commonNameBn": "ভেটকি গোত্র",
    "banglaName": "ভেটকি গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      },
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-hemiscylliidae",
    "scientificName": "Hemiscylliidae",
    "name": "Hemiscylliidae",
    "rank": "family",
    "parentTaxonId": "taxon-orectolobiformes",
    "parentId": "taxon-orectolobiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Compagno, 1988",
    "commonNameEn": "Bamboo sharks",
    "commonNameBn": "বাঁশ হাঙর গোত্র",
    "banglaName": "বাঁশ হাঙর গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-delphinidae",
    "scientificName": "Delphinidae",
    "name": "Delphinidae",
    "rank": "family",
    "parentTaxonId": "taxon-cetacea",
    "parentId": "taxon-cetacea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1821",
    "commonNameEn": "Oceanic dolphins",
    "commonNameBn": "ডলফিন গোত্র",
    "banglaName": "ডলফিন গোত্র",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-balaenopteridae",
    "scientificName": "Balaenopteridae",
    "name": "Balaenopteridae",
    "rank": "family",
    "parentTaxonId": "taxon-cetacea",
    "parentId": "taxon-cetacea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1864",
    "commonNameEn": "Rorquals (Baleen Whales)",
    "commonNameBn": "রোরকোয়াল বা তিমি গোত্র",
    "banglaName": "তিমি গোত্র",
    "description": "Largest group of baleen whales, characterized by expandable throat pleats enabling engulfment feeding.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-phocidae",
    "scientificName": "Phocidae",
    "name": "Phocidae",
    "rank": "family",
    "parentTaxonId": "taxon-pinnipedia",
    "parentId": "taxon-pinnipedia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1821",
    "commonNameEn": "True Seals (Earless Seals)",
    "commonNameBn": "প্রকৃত সিল গোত্র",
    "banglaName": "প্রকৃত সিল গোত্র",
    "description": "Pinnipeds lacking external ear flaps; hindflippers cannot be rotated forward for quadrupedal walking on land.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024) AphiaID 136980",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-dugongidae",
    "scientificName": "Dugongidae",
    "name": "Dugongidae",
    "rank": "family",
    "parentTaxonId": "taxon-sirenia",
    "parentId": "taxon-sirenia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1821",
    "commonNameEn": "Dugongs",
    "commonNameBn": "ডুগং গোত্র",
    "banglaName": "ডুগং গোত্র",
    "description": "Herbivorous marine mammals with fluked tails similar to cetaceans and downward-deflected snouts for benthic grazing.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024) AphiaID 136983",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-cheloniidae",
    "scientificName": "Cheloniidae",
    "name": "Cheloniidae",
    "rank": "family",
    "parentTaxonId": "taxon-chelonioidea",
    "parentId": "taxon-chelonioidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Oppel, 1811",
    "commonNameEn": "Hard-shelled Sea Turtles",
    "commonNameBn": "কঠিন খোলসযুক্ত সামুদ্রিক কাছিম",
    "banglaName": "সামুদ্রিক কাছিম গোত্র",
    "description": "Sea turtles possessing a fully ossified, scute-covered shell and paddle-shaped flippers.",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Rhodin et al. (2021) Turtles of the World",
        "citation": "ref-iucn-mtsg-2021"
      }
    ]
  },
  {
    "id": "taxon-dermochelyidae",
    "scientificName": "Dermochelyidae",
    "name": "Dermochelyidae",
    "rank": "family",
    "parentTaxonId": "taxon-chelonioidea",
    "parentId": "taxon-chelonioidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fitzinger, 1843",
    "commonNameEn": "Leatherback Sea Turtles",
    "commonNameBn": "লেদারব্যাক কাছিম গোত্র",
    "banglaName": "লেদারব্যাক কাছিম গোত্র",
    "description": "Monotypic family of gigantic pelagic sea turtles lacking bony scutes, covered instead by thick leathery skin.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Rhodin et al. (2021) Turtles of the World",
        "citation": "ref-iucn-mtsg-2021"
      }
    ]
  },
  {
    "id": "taxon-acroporidae",
    "scientificName": "Acroporidae",
    "name": "Acroporidae",
    "rank": "family",
    "parentTaxonId": "taxon-scleractinia",
    "parentId": "taxon-scleractinia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Verrill, 1901",
    "commonNameEn": "Staghorn and Table Corals",
    "commonNameBn": "অ্যাক্রোপোরিডি প্রবাল গোত্র",
    "banglaName": "অ্যাক্রোপোরিডি গোত্র",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-ulmaridae",
    "scientificName": "Ulmaridae",
    "name": "Ulmaridae",
    "rank": "family",
    "parentTaxonId": "taxon-semaeostomeae",
    "parentId": "taxon-semaeostomeae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Haeckel, 1880",
    "commonNameEn": "Moon Jellyfishes",
    "commonNameBn": "মুন জেলিফিশ গোত্র",
    "banglaName": "মুন জেলিফিশ গোত্র",
    "description": "Scyphozoan jellyfishes characterized by simple or branched radial canals and horseshoe-shaped gonads.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-octopodidae",
    "scientificName": "Octopodidae",
    "name": "Octopodidae",
    "rank": "family",
    "parentTaxonId": "taxon-octopoda",
    "parentId": "taxon-octopoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "d'Orbigny, 1840",
    "commonNameEn": "Common Benthic Octopuses",
    "commonNameBn": "সাধারণ অক্টোপাস গোত্র",
    "banglaName": "অক্টোপাস গোত্র",
    "description": "Benthic octopods with biserial arm suckers and lack of water pores.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-portunidae",
    "scientificName": "Portunidae",
    "name": "Portunidae",
    "rank": "family",
    "parentTaxonId": "taxon-decapoda",
    "parentId": "taxon-decapoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Swimming Crabs and Mud Crabs",
    "commonNameBn": "সাঁতারু ও কাদা কাঁকড়া গোত্র",
    "banglaName": "সাঁতারু কাঁকড়া গোত্র",
    "description": "Decapod brachyurans with the fifth pereiopods flattened into paddle-shaped swimming oars.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-acanthasteridae",
    "scientificName": "Acanthasteridae",
    "name": "Acanthasteridae",
    "rank": "family",
    "parentTaxonId": "taxon-valvatida",
    "parentId": "taxon-valvatida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Sladen, 1889",
    "commonNameEn": "Crown-of-Thorns Sea Stars",
    "commonNameBn": "কাটাযুক্ত সমুদ্রতারা গোত্র",
    "banglaName": "কাটাযুক্ত সমুদ্রতারা গোত্র",
    "description": "Multi-armed corallivorous sea stars armed with sharp, venom-bearing calcified spines.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-spongiidae",
    "scientificName": "Spongiidae",
    "name": "Spongiidae",
    "rank": "family",
    "parentTaxonId": "taxon-dictyoceratida",
    "parentId": "taxon-dictyoceratida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1867",
    "commonNameEn": "Commercial Bath Sponges",
    "commonNameBn": "বাথ স্পঞ্জ গোত্র",
    "banglaName": "বাথ স্পঞ্জ গোত্র",
    "description": "Demosponges possessing elastic, durable spongin fiber networks without mineralized spicules.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database (2024)",
        "citation": "ref-world-porifera-2024"
      }
    ]
  },
  {
    "id": "taxon-platanistidae",
    "scientificName": "Platanistidae",
    "name": "Platanistidae",
    "rank": "family",
    "parentTaxonId": "taxon-cetacea",
    "parentId": "taxon-cetacea",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1846",
    "commonNameEn": "South Asian river dolphins",
    "commonNameBn": "নদীজ শুশুক গোত্র",
    "banglaName": "নদীজ শুশুক গোত্র",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-tenualosa",
    "scientificName": "Tenualosa",
    "name": "Tenualosa",
    "rank": "genus",
    "parentTaxonId": "taxon-clupeidae",
    "parentId": "taxon-clupeidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Fowler, 1934",
    "commonNameEn": "Shads",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-labeo",
    "scientificName": "Labeo",
    "name": "Labeo",
    "rank": "genus",
    "parentTaxonId": "taxon-cyprinidae",
    "parentId": "taxon-cyprinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1816",
    "commonNameEn": "Labeos / Ruhi",
    "commonNameBn": "রুই গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-catla",
    "scientificName": "Catla",
    "name": "Catla",
    "rank": "genus",
    "parentTaxonId": "taxon-cyprinidae",
    "parentId": "taxon-cyprinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Valenciennes, 1844",
    "commonNameEn": "Katla",
    "commonNameBn": "কাতলা",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-cirrhinus",
    "scientificName": "Cirrhinus",
    "name": "Cirrhinus",
    "rank": "genus",
    "parentTaxonId": "taxon-cyprinidae",
    "parentId": "taxon-cyprinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Oken, 1817",
    "commonNameEn": "Mrigals and allied carps",
    "commonNameBn": "মৃগেল",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-pethia",
    "scientificName": "Pethia",
    "name": "Pethia",
    "rank": "genus",
    "parentTaxonId": "taxon-cyprinidae",
    "parentId": "taxon-cyprinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Pethiyagoda, Meegaskumbura & Maduwage, 2012",
    "commonNameEn": "Pethia barbs",
    "commonNameBn": "পুঁটি",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-pangasius",
    "scientificName": "Pangasius",
    "name": "Pangasius",
    "rank": "genus",
    "parentTaxonId": "taxon-pangasiidae",
    "parentId": "taxon-pangasiidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Valenciennes, 1840",
    "commonNameEn": "Pangasiid catfishes",
    "commonNameBn": "পাঙ্গাস",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-clarias",
    "scientificName": "Clarias",
    "name": "Clarias",
    "rank": "genus",
    "parentTaxonId": "taxon-clariidae",
    "parentId": "taxon-clariidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Scopoli, 1777",
    "commonNameEn": "Airbreathing catfishes / Magurs",
    "commonNameBn": "মাগুর গণ",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)",
        "citation": "Scopoli, J. A. 1777. Introductio ad historiam naturalem"
      },
      {
        "source": "Ng & Kottelat (2008)",
        "notes": "Detailed review of Asian Clarias"
      }
    ]
  },
  {
    "id": "taxon-heteropneustes",
    "scientificName": "Heteropneustes",
    "name": "Heteropneustes",
    "rank": "genus",
    "parentTaxonId": "taxon-heteropneustidae",
    "parentId": "taxon-heteropneustidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller, 1840",
    "commonNameEn": "Stinging catfishes",
    "commonNameBn": "শিং",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-mystus",
    "scientificName": "Mystus",
    "name": "Mystus",
    "rank": "genus",
    "parentTaxonId": "taxon-bagridae",
    "parentId": "taxon-bagridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Scopoli, 1777",
    "commonNameEn": "Asian bagrid catfishes",
    "commonNameBn": "টেংরা",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-wallago",
    "scientificName": "Wallago",
    "name": "Wallago",
    "rank": "genus",
    "parentTaxonId": "taxon-siluridae",
    "parentId": "taxon-siluridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1851",
    "commonNameEn": "Boal catfishes",
    "commonNameBn": "বোয়াল",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-ompok",
    "scientificName": "Ompok",
    "name": "Ompok",
    "rank": "genus",
    "parentTaxonId": "taxon-siluridae",
    "parentId": "taxon-siluridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Lacepède, 1803",
    "commonNameEn": "Butter catfishes",
    "commonNameBn": "পাবদা",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-eutropiichthys",
    "scientificName": "Eutropiichthys",
    "name": "Eutropiichthys",
    "rank": "genus",
    "parentTaxonId": "taxon-schilbeidae",
    "parentId": "taxon-schilbeidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1862",
    "commonNameEn": "Indian schilbeid catfishes",
    "commonNameBn": "বাচা",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-channa",
    "scientificName": "Channa",
    "name": "Channa",
    "rank": "genus",
    "parentTaxonId": "taxon-channidae",
    "parentId": "taxon-channidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Scopoli, 1777",
    "commonNameEn": "Snakehead fishes",
    "commonNameBn": "শোল/টাকি",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-anabas",
    "scientificName": "Anabas",
    "name": "Anabas",
    "rank": "genus",
    "parentTaxonId": "taxon-anabantidae",
    "parentId": "taxon-anabantidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1816",
    "commonNameEn": "Climbing perch",
    "commonNameBn": "কৈ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-chitala",
    "scientificName": "Chitala",
    "name": "Chitala",
    "rank": "genus",
    "parentTaxonId": "taxon-notopteridae",
    "parentId": "taxon-notopteridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Fowler, 1934",
    "commonNameEn": "Clown knifefish / Chital",
    "commonNameBn": "চিতল",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-macrognathus",
    "scientificName": "Macrognathus",
    "name": "Macrognathus",
    "rank": "genus",
    "parentTaxonId": "taxon-mastacembelidae",
    "parentId": "taxon-mastacembelidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Lacepède, 1800",
    "commonNameEn": "Eel-like spiny eels",
    "commonNameBn": "বাইম",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-mastacembelus",
    "scientificName": "Mastacembelus",
    "name": "Mastacembelus",
    "rank": "genus",
    "parentTaxonId": "taxon-mastacembelidae",
    "parentId": "taxon-mastacembelidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Scopoli, 1777",
    "commonNameEn": "Spiny eels",
    "commonNameBn": "শাল বাইম",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-lates",
    "scientificName": "Lates",
    "name": "Lates",
    "rank": "genus",
    "parentTaxonId": "taxon-latidae",
    "parentId": "taxon-latidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1828",
    "commonNameEn": "Barramundi and Nile perch",
    "commonNameBn": "ভেটকি",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-chiloscyllium",
    "scientificName": "Chiloscyllium",
    "name": "Chiloscyllium",
    "rank": "genus",
    "parentTaxonId": "taxon-hemiscylliidae",
    "parentId": "taxon-hemiscylliidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller & Henle, 1837",
    "commonNameEn": "Bamboo sharks",
    "commonNameBn": "বাঁশ হাঙর",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-carcharhinus",
    "scientificName": "Carcharhinus",
    "name": "Carcharhinus",
    "rank": "genus",
    "parentTaxonId": "taxon-carcharhinidae",
    "parentId": "taxon-carcharhinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Blainville, 1816",
    "commonNameEn": "Requiem sharks",
    "commonNameBn": "রিকার্ভ হাঙর",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2024)"
      }
    ]
  },
  {
    "id": "taxon-orcaella",
    "scientificName": "Orcaella",
    "name": "Orcaella",
    "rank": "genus",
    "parentTaxonId": "taxon-delphinidae",
    "parentId": "taxon-delphinidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1866",
    "commonNameEn": "Snubfin dolphins",
    "commonNameBn": "ইরাবতী ডলফিন গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-tursiops",
    "scientificName": "Tursiops",
    "name": "Tursiops",
    "rank": "genus",
    "parentTaxonId": "taxon-delphinidae",
    "parentId": "taxon-delphinidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gervais, 1855",
    "commonNameEn": "Bottlenose dolphins",
    "commonNameBn": "বোতলনাক ডলফিন গণ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-balaenoptera",
    "scientificName": "Balaenoptera",
    "name": "Balaenoptera",
    "rank": "genus",
    "parentTaxonId": "taxon-balaenopteridae",
    "parentId": "taxon-balaenopteridae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lacépède, 1804",
    "commonNameEn": "Rorquals",
    "commonNameBn": "নীল ও ব্রাইডস তিমি গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-phoca",
    "scientificName": "Phoca",
    "name": "Phoca",
    "rank": "genus",
    "parentTaxonId": "taxon-phocidae",
    "parentId": "taxon-phocidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Harbor seals",
    "commonNameBn": "হারবার সিল গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-dugong",
    "scientificName": "Dugong",
    "name": "Dugong",
    "rank": "genus",
    "parentTaxonId": "taxon-dugongidae",
    "parentId": "taxon-dugongidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lacépède, 1799",
    "commonNameEn": "Dugongs",
    "commonNameBn": "ডুগং গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-chelonia",
    "scientificName": "Chelonia",
    "name": "Chelonia",
    "rank": "genus",
    "parentTaxonId": "taxon-cheloniidae",
    "parentId": "taxon-cheloniidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Brongniart, 1800",
    "commonNameEn": "Green sea turtles",
    "commonNameBn": "সবুজ সামুদ্রিক কাছিম গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Rhodin et al. (2021)",
        "citation": "ref-iucn-mtsg-2021"
      }
    ]
  },
  {
    "id": "taxon-lepidochelys",
    "scientificName": "Lepidochelys",
    "name": "Lepidochelys",
    "rank": "genus",
    "parentTaxonId": "taxon-cheloniidae",
    "parentId": "taxon-cheloniidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fitzinger, 1843",
    "commonNameEn": "Ridley sea turtles",
    "commonNameBn": "রিডলি কাছিম গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Rhodin et al. (2021)",
        "citation": "ref-iucn-mtsg-2021"
      }
    ]
  },
  {
    "id": "taxon-dermochelys",
    "scientificName": "Dermochelys",
    "name": "Dermochelys",
    "rank": "genus",
    "parentTaxonId": "taxon-dermochelyidae",
    "parentId": "taxon-dermochelyidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Blainville, 1816",
    "commonNameEn": "Leatherback sea turtles",
    "commonNameBn": "লেদারব্যাক কাছিম গণ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Rhodin et al. (2021)",
        "citation": "ref-iucn-mtsg-2021"
      }
    ]
  },
  {
    "id": "taxon-hydrophis",
    "scientificName": "Hydrophis",
    "name": "Hydrophis",
    "rank": "genus",
    "parentTaxonId": "taxon-hydrophiinae",
    "parentId": "taxon-hydrophiinae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Latreille, 1801",
    "commonNameEn": "True sea snakes",
    "commonNameBn": "সামুদ্রিক সাপ গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database (2024)",
        "citation": "ref-reptile-database-2024"
      }
    ]
  },
  {
    "id": "taxon-acropora",
    "scientificName": "Acropora",
    "name": "Acropora",
    "rank": "genus",
    "parentTaxonId": "taxon-acroporidae",
    "parentId": "taxon-acroporidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Oken, 1815",
    "commonNameEn": "Staghorn corals",
    "commonNameBn": "অ্যাক্রোপোরা প্রবাল গণ",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-aurelia",
    "scientificName": "Aurelia",
    "name": "Aurelia",
    "rank": "genus",
    "parentTaxonId": "taxon-ulmaridae",
    "parentId": "taxon-ulmaridae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lamarck, 1816",
    "commonNameEn": "Moon jellies",
    "commonNameBn": "মুন জেলি গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-octopus",
    "scientificName": "Octopus",
    "name": "Octopus",
    "rank": "genus",
    "parentTaxonId": "taxon-octopodidae",
    "parentId": "taxon-octopodidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Cuvier, 1797",
    "commonNameEn": "Common octopuses",
    "commonNameBn": "অক্টোপাস গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-scylla",
    "scientificName": "Scylla",
    "name": "Scylla",
    "rank": "genus",
    "parentTaxonId": "taxon-portunidae",
    "parentId": "taxon-portunidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "De Haan, 1833",
    "commonNameEn": "Mangrove mud crabs",
    "commonNameBn": "কাদা কাঁকড়া গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-acanthaster",
    "scientificName": "Acanthaster",
    "name": "Acanthaster",
    "rank": "genus",
    "parentTaxonId": "taxon-acanthasteridae",
    "parentId": "taxon-acanthasteridae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gervais, 1841",
    "commonNameEn": "Crown-of-thorns starfishes",
    "commonNameBn": "কাটাযুক্ত সমুদ্রতারা গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "WoRMS (2024)",
        "citation": "ref-worms-2024"
      }
    ]
  },
  {
    "id": "taxon-spongia",
    "scientificName": "Spongia",
    "name": "Spongia",
    "rank": "genus",
    "parentTaxonId": "taxon-spongiidae",
    "parentId": "taxon-spongiidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1759",
    "commonNameEn": "Commercial bath sponges",
    "commonNameBn": "বাথ স্পঞ্জ গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database (2024)",
        "citation": "ref-world-porifera-2024"
      }
    ]
  },
  {
    "id": "taxon-platanista",
    "scientificName": "Platanista",
    "name": "Platanista",
    "rank": "genus",
    "parentTaxonId": "taxon-platanistidae",
    "parentId": "taxon-platanistidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Wagler, 1830",
    "commonNameEn": "Ganges river dolphins",
    "commonNameBn": "নদীজ শুশুক গণ",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database (2024)",
        "citation": "ref-mdd-2024"
      }
    ]
  },
  {
    "id": "taxon-class-myxini",
    "scientificName": "Myxini",
    "name": "Myxini",
    "rank": "class",
    "parentTaxonId": "taxon-agnatha",
    "parentId": "taxon-agnatha",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Zittel, 1887",
    "commonNameEn": "Hagfishes",
    "commonNameBn": "মিক্সিনি (হ্যাগফিশ)",
    "banglaName": "মিক্সিনি",
    "description": "Jawless marine craniates with cartilaginous skulls, rasping keratinous lingual teeth, and defensive slime glands.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences"
      }
    ]
  },
  {
    "id": "taxon-class-petromyzonti",
    "scientificName": "Petromyzonti",
    "name": "Petromyzonti",
    "rank": "class",
    "parentTaxonId": "taxon-agnatha",
    "parentId": "taxon-agnatha",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Risso, 1827",
    "commonNameEn": "Lampreys",
    "commonNameBn": "পেট্রোমাইজন্টি (ল্যাম্প্রে)",
    "banglaName": "পেট্রোমাইজন্টি",
    "description": "Jawless aquatic vertebrates characterized by a toothed circular suctorial oral disc and seven pairs of branchial pores.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences"
      }
    ]
  },
  {
    "id": "taxon-subclass-cladistia",
    "scientificName": "Cladistia",
    "name": "Cladistia",
    "rank": "subclass",
    "parentTaxonId": "taxon-actinopterygii",
    "parentId": "taxon-actinopterygii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cope, 1871",
    "commonNameEn": "Bichirs and Reedfishes",
    "commonNameBn": "ক্লাডিস্টয়া (বিচির ও রিডফিশ)",
    "banglaName": "ক্লাডিস্টয়া",
    "description": "Basal ray-finned fishes characterized by ganoid scales, multiple dorsal finlets, and paired pulmonary sacs.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences"
      }
    ]
  },
  {
    "id": "taxon-subclass-actinopteri",
    "scientificName": "Actinopteri",
    "name": "Actinopteri",
    "rank": "subclass",
    "parentTaxonId": "taxon-actinopterygii",
    "parentId": "taxon-actinopterygii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cope, 1871",
    "commonNameEn": "True Ray-finned Fishes",
    "commonNameBn": "অ্যাক্টিনোপ্টেরি",
    "banglaName": "অ্যাক্টিনোপ্টেরি",
    "description": "Subclass uniting sturgeons, paddlefishes, gars, bowfins, and all teleosts.",
    "speciesCount": 30,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences"
      }
    ]
  },
  {
    "id": "taxon-infraclass-chondrostei",
    "scientificName": "Chondrostei",
    "name": "Chondrostei",
    "rank": "infraclass",
    "parentTaxonId": "taxon-subclass-actinopteri",
    "parentId": "taxon-subclass-actinopteri",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller, 1844",
    "commonNameEn": "Sturgeons and Paddlefishes",
    "commonNameBn": "কনড্রোস্টিআই (স্টার্জন ও প্যাডেলফিশ)",
    "banglaName": "কনড্রোস্টিআই",
    "description": "Primitive actinopterygians with largely cartilaginous skeletons and heterocercal tails.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences"
      }
    ]
  },
  {
    "id": "taxon-infraclass-holostei",
    "scientificName": "Holostei",
    "name": "Holostei",
    "rank": "infraclass",
    "parentTaxonId": "taxon-subclass-actinopteri",
    "parentId": "taxon-subclass-actinopteri",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller, 1844",
    "commonNameEn": "Gars and Bowfins",
    "commonNameBn": "হোলোস্টিআই (গার ও বোফিন)",
    "banglaName": "হোলোস্টিআই",
    "description": "Neopterygian bony fishes retaining abbreviate heterocercal tails and cellular swimbladders.",
    "speciesCount": 2,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences"
      }
    ]
  },
  {
    "id": "taxon-infraclass-teleostei",
    "scientificName": "Teleostei",
    "name": "Teleostei",
    "rank": "infraclass",
    "parentTaxonId": "taxon-subclass-actinopteri",
    "parentId": "taxon-subclass-actinopteri",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller, 1844",
    "commonNameEn": "Teleosts / Modern Bony Fishes",
    "commonNameBn": "টেলিয়স্ট (আধুনিক অস্থিময় মাছ)",
    "banglaName": "টেলিয়স্ট",
    "description": "The crowning radiation of actinopterygian fishes possessing mobile premaxillae, homocercal caudal skeletons, and extraordinary ecological diversity.",
    "speciesCount": 30,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences"
      }
    ]
  },
  {
    "id": "taxon-hexanchiformes",
    "scientificName": "Hexanchiformes",
    "name": "Hexanchiformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "de Buen, 1926",
    "commonNameEn": "Six-gill and Seven-gill Sharks",
    "commonNameBn": "হেক্সাঙ্কিফর্মিস",
    "banglaName": "হেক্সাঙ্কিফর্মিস",
    "description": "Primitive deep-water predatory sharks characterized by possessing 6 or 7 pairs of gill slits, a single spineless dorsal fin positioned far back, and amphistylic jaw suspension.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-heterodontiformes",
    "scientificName": "Heterodontiformes",
    "name": "Heterodontiformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Bullhead Sharks",
    "commonNameBn": "হেটেরোডন্টিফর্মিস",
    "banglaName": "হেটেরোডন্টিফর্মিস",
    "description": "Benthic, blunt-headed sharks characterized by two dorsal fins bearing heavy calcified spines, prominent supraorbital ridges, heterodont dentition, and spiral egg cases.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-echinorhiniformes",
    "scientificName": "Echinorhiniformes",
    "name": "Echinorhiniformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "de Buen, 1926",
    "commonNameEn": "Bramble Sharks",
    "commonNameBn": "একাইনোরহাইনিফর্মিস",
    "banglaName": "একাইনোরহাইনিফর্মিস",
    "description": "Sluggish, deep-sea benthic sharks characterized by large thorn-like dermal denticles, two small spineless dorsal fins placed far back, and total absence of an anal fin.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-pristiophoriformes",
    "scientificName": "Pristiophoriformes",
    "name": "Pristiophoriformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Sawsharks",
    "commonNameBn": "প্রিস্টিওফোরিফর্মিস",
    "banglaName": "প্রিস্টিওফোরিফর্মিস",
    "description": "Slender, bottom-dwelling sharks possessing an elongated blade-like rostrum edged with sharp lateral teeth, sensory barbels, and lateral gill slits.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-squatiniformes",
    "scientificName": "Squatiniformes",
    "name": "Squatiniformes",
    "rank": "order",
    "parentTaxonId": "taxon-subclass-elasmobranchii",
    "parentId": "taxon-subclass-elasmobranchii",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Buen, 1926",
    "commonNameEn": "Angel Sharks",
    "commonNameBn": "স্কোয়াটিনিফর্মিস",
    "banglaName": "স্কোয়াটিনিফর্মিস",
    "description": "Flattened, ray-like ambush predatory sharks with laterally expanded wing-like pectoral fins, terminal mouth, dorsal eyes, and lateral gill slits concealed in a pectoral cleft.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-hiodontiformes",
    "scientificName": "Hiodontiformes",
    "name": "Hiodontiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Taverne, 1979",
    "commonNameEn": "Mooneyes and Goldeyes",
    "commonNameBn": "হায়োডন্টিফর্মিস",
    "banglaName": "হায়োডন্টিফর্মিস",
    "description": "Primitive freshwater osteoglossomorph teleosts of North America with glittering silvery compressed bodies, prominent eyes with a golden reflective tapetum, and heavily toothed tongue bones.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-elopiformes",
    "scientificName": "Elopiformes",
    "name": "Elopiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gosline, 1960",
    "commonNameEn": "Tarpons and Ladyfishes",
    "commonNameBn": "ইলোপিফর্মিস",
    "banglaName": "ইলোপিফর্মিস",
    "description": "Primitive marine and estuarine predatory teleosts with silvery elongate bodies, transparent ribbon-like leptocephalus larvae, and a unique gular plate between lower jaw rami.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-albuliformes",
    "scientificName": "Albuliformes",
    "name": "Albuliformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Greenwood et al., 1966",
    "commonNameEn": "Bonefishes",
    "commonNameBn": "আলবুলিফর্মিস",
    "banglaName": "আলবুলিফর্মিস",
    "description": "Silvery coastal marine teleosts with an inferior pig-like snout, heavy molariform crushing toothplates on the roof of the mouth, and transparent leptocephalus larvae.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-notacanthiformes",
    "scientificName": "Notacanthiformes",
    "name": "Notacanthiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1947",
    "commonNameEn": "Deep-sea Spiny Eels and Halosaurs",
    "commonNameBn": "নোটাাক্যান্থিফর্মিস",
    "banglaName": "নোটাাক্যান্থিফর্মিস",
    "description": "Slender, eel-like bathyal deep-sea teleosts with a tapering tail lacking a caudal fin, isolated dorsal spines, and giant pelagic leptocephalus larvae.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-alepocephaliformes",
    "scientificName": "Alepocephaliformes",
    "name": "Alepocephaliformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Marshall, 1962",
    "commonNameEn": "Slickheads and Tubeshoulders",
    "commonNameBn": "আলেপোসেফালিফর্মিস",
    "banglaName": "আলেপোসেফালিফর্মিস",
    "description": "Deep-sea bathyal and abyssal teleosts with scaleless heads, posterior dorsal fins, dark pigmentation, and unique bioluminescent spark-discharging shoulder organs in tubeshoulders.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-gymnotiformes",
    "scientificName": "Gymnotiformes",
    "name": "Gymnotiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Neotropical Knifefishes and Electric Eels",
    "commonNameBn": "জিমনোটিফর্মিস",
    "banglaName": "জিমনোটিফর্মিস",
    "description": "Specialized South American freshwater teleosts with extremely elongated bodies, continuous undulating anal fins, forward-displaced anus, and specialized myogenic electric organs for navigation, communication, or prey capture.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-lepidogalaxiiformes",
    "scientificName": "Lepidogalaxiiformes",
    "name": "Lepidogalaxiiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Betancur-R. et al., 2013",
    "commonNameEn": "Salamanderfish",
    "commonNameBn": "লেপিডোগ্যালাক্সিফর্মিস",
    "banglaName": "লেপিডোগ্যালাক্সিফর্মিস",
    "description": "Enigmatic, tiny freshwater teleost of southwestern Australia capable of bending its neck, burrowing into moist sand to aestivate through summer droughts, and respiring cutaneously.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-argentiniformes",
    "scientificName": "Argentiniformes",
    "name": "Argentiniformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Begle, 1991",
    "commonNameEn": "Marine Smelts and Argentines",
    "commonNameBn": "আর্জেন্টিনিফর্মিস",
    "banglaName": "আর্জেন্টিনিফর্মিস",
    "description": "Silvery oceanic marine teleosts with prominent eyes (often tubular in deep-sea barreleyes), an epibranchial crumenal organ for food processing, and an adipose fin.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-galaxiiformes",
    "scientificName": "Galaxiiformes",
    "name": "Galaxiiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Galaxiids and Southern Freshwater Fishes",
    "commonNameBn": "গ্যালাক্সিফর্মিস",
    "banglaName": "গ্যালাক্সিফর্মিস",
    "description": "Scaleless, cold-adapted freshwater and amphidromous fishes of the Southern Hemisphere with tubular bodies, posterior dorsal fins, and lacking an adipose fin.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-osmeriformes",
    "scientificName": "Osmeriformes",
    "name": "Osmeriformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1913",
    "commonNameEn": "Freshwater Smelts and Ayu",
    "commonNameBn": "অস্মেরিফর্মিস",
    "banglaName": "অস্মেরিফর্মিস",
    "description": "Slender, silvery, cold-temperate Northern Hemisphere teleosts characterized by an adipose fin, cucumber-like skin scent, cycloid scales, and teeth on the tongue and vomer.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-stomiiformes",
    "scientificName": "Stomiiformes",
    "name": "Stomiiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1909",
    "commonNameEn": "Dragonfishes, Bristlemouths, and Marine Hatchetfishes",
    "commonNameBn": "স্টোমিফর্মিস",
    "banglaName": "স্টোমিফর্মিস",
    "description": "Mesopelagic and bathypelagic predatory fishes with ventrolateral rows of discrete bioluminescent photophores, huge gaping mouths with needle-like fangs, and specialized chin lures.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-ateleopodiformes",
    "scientificName": "Ateleopodiformes",
    "name": "Ateleopodiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Jellynose Fishes",
    "commonNameBn": "অ্যাটেলিওপোডিফর্মিস",
    "banglaName": "অ্যাটেলিওপোডিফর্মিস",
    "description": "Bizarre deep-sea benthic fishes with soft, gelatinous bulbous snouts, largely cartilaginous skeletons, elongate tapering bodies, and long anal fins confluent with caudal fins.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-myctophiformes",
    "scientificName": "Myctophiformes",
    "name": "Myctophiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1911",
    "commonNameEn": "Lanternfishes and Blackchins",
    "commonNameBn": "মিক্টোফিফর্মিস",
    "banglaName": "মিক্টোফিফর্মিস",
    "description": "Abundant oceanic mesopelagic teleosts with large eyes, an adipose fin, and species-specific patterns of bioluminescent photophores, renowned for massive daily vertical migrations.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-lampriformes",
    "scientificName": "Lampriformes",
    "name": "Lampriformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1909",
    "commonNameEn": "Opahs, Oarfishes, and Ribbonfishes",
    "commonNameBn": "ল্যাম্প্রিফর্মিস",
    "banglaName": "ল্যাম্প্রিফর্মিস",
    "description": "Remarkable oceanic pelagic teleosts including the world's longest bony fish (the Giant Oarfish) and the first known warm-blooded fish (the Opah), with extraordinarily protrusible jaws.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-polymixiiformes",
    "scientificName": "Polymixiiformes",
    "name": "Polymixiiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rosen & Patterson, 1969",
    "commonNameEn": "Beardfishes",
    "commonNameBn": "পলিমিক্সিসিফর্মিস",
    "banglaName": "পলিমিক্সিসিফর্মিস",
    "description": "Deep-water marine teleosts possessing a prominent pair of long sensory barbels suspended from the hyoid arch beneath the chin, ctenoid scales, and weak spines in the dorsal and anal fins.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-percopsiformes",
    "scientificName": "Percopsiformes",
    "name": "Percopsiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Trout-perches, Pirate Perches, and Cavefishes",
    "commonNameBn": "পারকপসিফর্মিস",
    "banglaName": "পারকপসিফর্মিস",
    "description": "Small North American freshwater teleosts uniting primitive soft-rayed features (adipose fin) with derived spiny-rayed traits, including subterranean blind cavefishes and the jugular-anus pirate perch.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-zeiformes",
    "scientificName": "Zeiformes",
    "name": "Zeiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1909",
    "commonNameEn": "Dories and Oreos",
    "commonNameBn": "জেইফর্মিস",
    "banglaName": "জেইফর্মিস",
    "description": "Deep-bodied, razor-thin compressed marine predatory fishes with enormous protrusible mouths, bony bucklers along the belly margin, and long dorsal fin filaments.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-trachichthyiformes",
    "scientificName": "Trachichthyiformes",
    "name": "Trachichthyiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Nelson, 1969",
    "commonNameEn": "Slimeheads, Roughies, and Pineconefishes",
    "commonNameBn": "ট্র্যাকিকথিফর্মিস",
    "banglaName": "ট্র্যাকিকথিফর্মিস",
    "description": "Deep-sea and reef acanthomorphs with cavernous mucous-filled laterosensory head cavities, heavy ventral abdominal scutes, bioluminescent bacterial organs, and exceptional longevity.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-beryciformes",
    "scientificName": "Beryciformes",
    "name": "Beryciformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1909",
    "commonNameEn": "Alfonsinos, Fangtooths, and Spiny-jawed Fishes",
    "commonNameBn": "বেরিসিফর্মিস",
    "banglaName": "বেরিসিফর্মিস",
    "description": "Basal spiny-rayed marine teleosts characterized by retaining an orbitosphenoid cranial bone, crimson-red coloration in deep taxa, and extreme dental adaptations in the legendary deep-sea Fangtooth.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-ophidiiformes",
    "scientificName": "Ophidiiformes",
    "name": "Ophidiiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Cusk-eels, Brotulas, and Pearlfishes",
    "commonNameBn": "ওফিডিফর্মিস",
    "banglaName": "ওফিডিফর্মিস",
    "description": "Slender, eel-like benthic and inquiline marine teleosts with continuous dorsal and anal fins, jugular pelvic rays on the throat, and holding the world record for the deepest living fish.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-batrachoidiformes",
    "scientificName": "Batrachoidiformes",
    "name": "Batrachoidiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Toadfishes and Midshipmen",
    "commonNameBn": "বাট্রাকয়ডিফর্মিস",
    "banglaName": "বাট্রাকয়ডিফর্মিস",
    "description": "Bottom-dwelling ambush predatory marine teleosts with broad depressed heads, wide frog-like mouths, venomous spines in some taxa, and sonic swimbladders producing loud vocalizations.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-gobiiformes",
    "scientificName": "Gobiiformes",
    "name": "Gobiiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Gobies, Mudskippers, Sleepers, and Nurseryfishes",
    "commonNameBn": "গোবিফর্মিস",
    "banglaName": "গোবিফর্মিস",
    "description": "One of the most diverse vertebrate orders on Earth (>2,200 species), characterized by pelvic fins united into a ventral suction cup, amphibious mudskippers that walk on land, and tiny freshwater and reef gobies.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-carangiformes",
    "scientificName": "Carangiformes",
    "name": "Carangiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Jordan, 1923",
    "commonNameEn": "Jacks, Pompanos, Trevallies, Remoras, and Billfishes",
    "commonNameBn": "কারাঞ্জিফর্মিস",
    "banglaName": "কারাঞ্জিফর্মিস",
    "description": "Diverse global marine radiation of active pelagic predators uniting jacks, pompanos, trevallies (Carangidae), remoras (Echeneidae), cobias (Rachycentridae), dolphinfishes (Coryphaenidae), and billfishes. Note: Eschmeyer (2026) cladistically subsumes flatfishes within Carangiformes as Suborder Pleuronectoidei, while FishBase, Nelson (2016), and WoRMS retain Pleuronectiformes as an independent order.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "FishBase (2026)",
        "citation": "FishBase OrdersSummary: Carangiformes (7 families)."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      },
      {
        "source": "WoRMS (2026)",
        "citation": "World Register of Marine Species: Carangiformes (AphiaID: 1517532)."
      }
    ]
  },
  {
    "id": "taxon-atheriniformes",
    "scientificName": "Atheriniformes",
    "name": "Atheriniformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rosen, 1966",
    "commonNameEn": "Silversides, Hardyheads, and Rainbowfishes",
    "commonNameBn": "অ্যাথেরিনিফর্মিস",
    "banglaName": "অ্যাথেরিনিফর্মিস",
    "description": "Slender, surface-dwelling schooling fishes of coastal seas and freshwaters, characterized by two separate dorsal fins, a distinct silvery lateral band, and high pectoral fin placement.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-beloniformes",
    "scientificName": "Beloniformes",
    "name": "Beloniformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Needlefishes, Flyingfishes, Halfbeaks, and Ricefishes",
    "commonNameBn": "বেলোনিফর্মিস",
    "banglaName": "বেলোনিফর্মিস",
    "description": "Slender surface-dwelling teleosts with elongated beaks or extraordinarily expanded wing-like pectoral fins allowing aerial gliding over the sea surface, including freshwater needlefishes and flyingfishes.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-cyprinodontiformes",
    "scientificName": "Cyprinodontiformes",
    "name": "Cyprinodontiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Killifishes, Toothcarps, and Livebearers",
    "commonNameBn": "সাইপ্রিনোডন্টিফর্মিস",
    "banglaName": "সাইপ্রিনোডন্টিফর্মিস",
    "description": "Small freshwater and brackish teleosts with superior toothed jaws, high tolerance for extreme temperatures and salinities, widespread viviparity (livebearing in guppies and swordtails), and drought-resistant annual eggs.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-cichliformes",
    "scientificName": "Cichliformes",
    "name": "Cichliformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Betancur-R. et al., 2013",
    "commonNameEn": "Cichlids and Convict Blennies",
    "commonNameBn": "সিক্লিফর্মিস",
    "banglaName": "সিক্লিফর্মিস",
    "description": "Extraordinarily diverse freshwater and brackish fishes renowned as evolutionary models of explosive speciation in the African Great Lakes, famous for complex parental care (mouthbrooding) and global food aquaculture (tilapias).",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-mugiliformes",
    "scientificName": "Mugiliformes",
    "name": "Mugiliformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Mullets",
    "commonNameBn": "মুগিলিফর্মিস",
    "banglaName": "মুগিলিফর্মিস",
    "description": "Torpedo-shaped, schooling coastal and freshwater fishes with two well-separated dorsal fins, broad flattened heads, small toothless mouths, and muscular gizzard-like stomachs adapted for detritus digestion.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-blenniiformes",
    "scientificName": "Blenniiformes",
    "name": "Blenniiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Berg, 1940",
    "commonNameEn": "Combtooth Blennies, Kelpfishes, and Clingfishes",
    "commonNameBn": "ব্লেনিফর্মিস",
    "banglaName": "ব্লেনিফর্মিস",
    "description": "Small, bottom-dwelling coastal and reef fishes with scaleless bodies, close-set comb-like teeth in the jaws, tentacle-like cirri above the eyes, and jugular pelvic fins placed in front of pectorals.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-centrarchiformes",
    "scientificName": "Centrarchiformes",
    "name": "Centrarchiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Sunfishes, Black Basses, and Terapon Perches",
    "commonNameBn": "সেন্ট্রার্কিফর্মিস",
    "banglaName": "সেন্ট্রার্কিফর্মিস",
    "description": "Deep-bodied spiny-rayed percomorph teleosts characterized by continuous dorsal fins with anterior spines, thoracic pelvic fins, aggressive nest-guarding behavior, and including iconic North American gamefishes and Indo-Pacific grunters.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-labriformes",
    "scientificName": "Labriformes",
    "name": "Labriformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Regan, 1913",
    "commonNameEn": "Wrasses, Parrotfishes, and Odacids",
    "commonNameBn": "ল্যাব্রিফর্মিস",
    "banglaName": "ল্যাব্রিফর্মিস",
    "description": "Brilliantly colored marine reef fishes characterized by thick protractile lips, coalesced beak-like dental plates in parrotfishes for bioeroding coral, protogynous hermaphroditism, and nocturnal mucous sleeping cocoons.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-acropomatiformes",
    "scientificName": "Acropomatiformes",
    "name": "Acropomatiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Betancur-R. et al., 2013",
    "commonNameEn": "Lanternbellies, Deep-sea Perches, and Temperate Basses",
    "commonNameBn": "অ্যাক্রোপোমাটিফর্মিস",
    "banglaName": "অ্যাক্রোপোমাটিফর্মিস",
    "description": "Deep-water continental slope and shelf percomorph fishes characterized by bioluminescent ventral light organs in lanternbellies, opercular spines, and including massive deep seamount wreckfishes.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-acanthuriformes",
    "scientificName": "Acanthuriformes",
    "name": "Acanthuriformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Jordan, 1923",
    "commonNameEn": "Surgeonfishes, Tangs, Rabbitfishes, and Spadefishes",
    "commonNameBn": "অ্যাকান্থুরিফর্মিস",
    "banglaName": "অ্যাকান্থুরিফর্মিস",
    "description": "Laterally compressed, disc-shaped herbivorous and omnivorous marine and estuarine fishes famous for razor-sharp defensive scalpels on the tail (surgeonfishes), venomous fin spines (rabbitfishes and scats), and high ecological value.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-lophiiformes",
    "scientificName": "Lophiiformes",
    "name": "Lophiiformes",
    "rank": "order",
    "parentTaxonId": "taxon-infraclass-teleostei",
    "parentId": "taxon-infraclass-teleostei",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Garman, 1899",
    "commonNameEn": "Anglerfishes, Monkfishes, Frogfishes, and Batfishes",
    "commonNameBn": "লোফিফর্মিস",
    "banglaName": "লোফিফর্মিস",
    "description": "Specialized ambush predatory marine fishes equipped with a modified first dorsal spine functioning as a fishing rod (illicium) tipped with a bait (esca), including deep-sea ceratioids with dwarf parasitic males and limb-like walking frogfishes.",
    "speciesCount": 0,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes (2026)",
        "citation": "California Academy of Sciences. Species by Family/Subfamily on-line database."
      },
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.). John Wiley & Sons."
      }
    ]
  },
  {
    "id": "taxon-polypteridae",
    "scientificName": "Polypteridae",
    "name": "Polypteridae",
    "rank": "family",
    "parentTaxonId": "taxon-polypteriformes",
    "parentId": "taxon-polypteriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1835",
    "commonNameEn": "Bichirs and Reedfishes",
    "commonNameBn": "বিচির ও রিডফিশ গোত্র",
    "banglaName": "বিচির গোত্র",
    "description": "Ancient basal ray-finned fish family characterized by thick ganoid scales, multiple dorsal finlets, and paired lung-like swim bladders.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)",
        "citation": "Fishes of the World (5th ed.)"
      }
    ]
  },
  {
    "id": "taxon-polypterus",
    "scientificName": "Polypterus",
    "name": "Polypterus",
    "rank": "genus",
    "parentTaxonId": "taxon-polypteridae",
    "parentId": "taxon-polypteridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Geoffroy Saint-Hilaire, 1802",
    "commonNameEn": "Bichirs",
    "commonNameBn": "বিচির গণ",
    "banglaName": "বিচির",
    "description": "Freshwater African genus of archaic bichirs with lobed pectoral fins and obligatory atmospheric air-breathing.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-acipenseridae",
    "scientificName": "Acipenseridae",
    "name": "Acipenseridae",
    "rank": "family",
    "parentTaxonId": "taxon-acipenseriformes",
    "parentId": "taxon-acipenseriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1831",
    "commonNameEn": "Sturgeons",
    "commonNameBn": "স্টার্জন গোত্র",
    "banglaName": "স্টার্জন গোত্র",
    "description": "Primitive chondrostean fishes with five longitudinal rows of bony scutes, a largely cartilaginous endoskeleton, and four sensory barbels.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-acipenser",
    "scientificName": "Acipenser",
    "name": "Acipenser",
    "rank": "genus",
    "parentTaxonId": "taxon-acipenseridae",
    "parentId": "taxon-acipenseridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "True sturgeons",
    "commonNameBn": "স্টার্জন গণ",
    "banglaName": "স্টার্জন",
    "description": "Anadromous and potamodromous sturgeon genus native to rivers and coastal waters of the Northern Hemisphere.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-lepisosteidae",
    "scientificName": "Lepisosteidae",
    "name": "Lepisosteidae",
    "rank": "family",
    "parentTaxonId": "taxon-lepisosteiformes",
    "parentId": "taxon-lepisosteiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1825",
    "commonNameEn": "Gars",
    "commonNameBn": "গার গোত্র",
    "banglaName": "গার গোত্র",
    "description": "Holostean fish family with interlocking diamond-shaped ganoid scales, elongated jaws with sharp teeth, and vascularized swim bladders.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-atractosteus",
    "scientificName": "Atractosteus",
    "name": "Atractosteus",
    "rank": "genus",
    "parentTaxonId": "taxon-lepisosteidae",
    "parentId": "taxon-lepisosteidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1820",
    "commonNameEn": "Broad-snouted gars",
    "commonNameBn": "বৃহৎ গার গণ",
    "banglaName": "বৃহৎ গার",
    "description": "Large predatory gar genus featuring two rows of enlarged teeth on the palatines in the upper jaw.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-amiidae",
    "scientificName": "Amiidae",
    "name": "Amiidae",
    "rank": "family",
    "parentTaxonId": "taxon-amiiformes",
    "parentId": "taxon-amiiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1831",
    "commonNameEn": "Bowfins",
    "commonNameBn": "বোফিন গোত্র",
    "banglaName": "বোফিন গোত্র",
    "description": "Archaic holostean family represented by modern bowfins, possessing an abbreviated heterocercal tail, median gular plate, and long dorsal fin.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-amia",
    "scientificName": "Amia",
    "name": "Amia",
    "rank": "genus",
    "parentTaxonId": "taxon-amiidae",
    "parentId": "taxon-amiidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1766",
    "commonNameEn": "Bowfin genus",
    "commonNameBn": "বোফিন গণ",
    "banglaName": "বোফিন",
    "description": "Freshwater North American genus of predatory holostean fishes capable of atmospheric bimodal breathing.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-anguillidae",
    "scientificName": "Anguillidae",
    "name": "Anguillidae",
    "rank": "family",
    "parentTaxonId": "taxon-anguilliformes",
    "parentId": "taxon-anguilliformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1810",
    "commonNameEn": "Freshwater eels",
    "commonNameBn": "মিঠাপানির বান মাছ গোত্র",
    "banglaName": "আঙ্গুইলিডি",
    "description": "Catadromous true eels possessing minute embedded cycloid scales, well-developed pectoral fins, and continuous dorsal-caudal-anal fins.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-anguilla",
    "scientificName": "Anguilla",
    "name": "Anguilla",
    "rank": "genus",
    "parentTaxonId": "taxon-anguillidae",
    "parentId": "taxon-anguillidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Schrank, 1798",
    "commonNameEn": "Freshwater eels genus",
    "commonNameBn": "বান মাছ গণ",
    "banglaName": "আঙ্গুইলা",
    "description": "Catadromous genus migrating from continental rivers to oceanic abyssopelagic gyres to spawn leptocephalus larvae.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-gymnotidae",
    "scientificName": "Gymnotidae",
    "name": "Gymnotidae",
    "rank": "family",
    "parentTaxonId": "taxon-gymnotiformes",
    "parentId": "taxon-gymnotiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Naked-back knifefishes and Electric eels",
    "commonNameBn": "বৈদ্যুতিক ইল গোত্র",
    "banglaName": "জিমনোটিডি",
    "description": "Neotropical electrogenic knifefishes lacking dorsal and pelvic fins, swimming by continuous undulating motion of an elongated anal fin.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-electrophorus",
    "scientificName": "Electrophorus",
    "name": "Electrophorus",
    "rank": "genus",
    "parentTaxonId": "taxon-gymnotidae",
    "parentId": "taxon-gymnotidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gill, 1864",
    "commonNameEn": "Electric eels",
    "commonNameBn": "বৈদ্যুতিক ইল গণ",
    "banglaName": "ইলেক্ট্রোফোরাস",
    "description": "Apex predator genus of South America equipped with three specialized bioelectric organs capable of generating up to 860 volts of discharge.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-salmonidae",
    "scientificName": "Salmonidae",
    "name": "Salmonidae",
    "rank": "family",
    "parentTaxonId": "taxon-salmoniformes",
    "parentId": "taxon-salmoniformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1816",
    "commonNameEn": "Salmons, Trouts, and Chars",
    "commonNameBn": "স্যামন ও ট্রাউট গোত্র",
    "banglaName": "স্যামনিডি",
    "description": "Coldwater freshwater and anadromous teleost family bearing an adipose fin, fleshy axillary pelvic process, and tetraploid evolutionary ancestry.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-salmo",
    "scientificName": "Salmo",
    "name": "Salmo",
    "rank": "genus",
    "parentTaxonId": "taxon-salmonidae",
    "parentId": "taxon-salmonidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Atlantic salmons and trouts",
    "commonNameBn": "স্যামন গণ",
    "banglaName": "সালমো",
    "description": "Native Atlantic basin genus of renowned coldwater anadromous and potamodromous sport and commercial fishes.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-serrasalmidae",
    "scientificName": "Serrasalmidae",
    "name": "Serrasalmidae",
    "rank": "family",
    "parentTaxonId": "taxon-characiformes",
    "parentId": "taxon-characiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1859",
    "commonNameEn": "Piranhas and Pacus",
    "commonNameBn": "পিরানহা ও পাকু গোত্র",
    "banglaName": "সেরাসালমিডি",
    "description": "Neotropical characiform family possessing compressed deep bodies, sharp abdominal serrae, and specialized tricuspid or interlocking blade-like dentition.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-pygocentrus",
    "scientificName": "Pygocentrus",
    "name": "Pygocentrus",
    "rank": "genus",
    "parentTaxonId": "taxon-serrasalmidae",
    "parentId": "taxon-serrasalmidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller & Troschel, 1844",
    "commonNameEn": "True piranhas",
    "commonNameBn": "পিরানহা গণ",
    "banglaName": "পাইগোসেন্ট্রাস",
    "description": "Aggressive shoaling carnivore genus equipped with razor-sharp triangular unicuspid teeth and strong jaw musculature.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-gadidae",
    "scientificName": "Gadidae",
    "name": "Gadidae",
    "rank": "family",
    "parentTaxonId": "taxon-gadiformes",
    "parentId": "taxon-gadiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1810",
    "commonNameEn": "True cods",
    "commonNameBn": "কড মাছ গোত্র",
    "banglaName": "গ্যাডিডি",
    "description": "Commercially preeminent cold temperate marine gadiform family typically possessing three dorsal fins, two anal fins, and a chin barbel.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-gadus",
    "scientificName": "Gadus",
    "name": "Gadus",
    "rank": "genus",
    "parentTaxonId": "taxon-gadidae",
    "parentId": "taxon-gadidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Cods",
    "commonNameBn": "কড গণ",
    "banglaName": "গ্যাডাস",
    "description": "Demersal marine cod genus foundational to Northern Hemisphere fisheries and maritime economies.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-syngnathidae",
    "scientificName": "Syngnathidae",
    "name": "Syngnathidae",
    "rank": "family",
    "parentTaxonId": "taxon-syngnathiformes",
    "parentId": "taxon-syngnathiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1831",
    "commonNameEn": "Seahorses and Pipefishes",
    "commonNameBn": "সিন্থিয়া বা সিনগ্নাথিডি গোত্র",
    "banglaName": "সিনগ্নাথিডি",
    "description": "Remarkable syngnathiform family encased in bony dermal armor rings, with fused tubular jaws for suction-feeding and exclusive male pregnancy.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-hippocampus",
    "scientificName": "Hippocampus",
    "name": "Hippocampus",
    "rank": "genus",
    "parentTaxonId": "taxon-syngnathidae",
    "parentId": "taxon-syngnathidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1810",
    "commonNameEn": "Seahorses",
    "commonNameBn": "সি-হর্স / সিন্ধুঘোটক গণ",
    "banglaName": "হিপ্পোক্যাম্পাস",
    "description": "Marine genus displaying vertical upright posture, bent neck, prehensile tail, and male brood pouch for carrying embryonic young.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-pleuronectidae",
    "scientificName": "Pleuronectidae",
    "name": "Pleuronectidae",
    "rank": "family",
    "parentTaxonId": "taxon-pleuronectiformes",
    "parentId": "taxon-pleuronectiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Righteye flounders",
    "commonNameBn": "রাইট-আই ফ্ল্যাটফিশ গোত্র",
    "banglaName": "প্লিউরোনেক্টিডি",
    "description": "Asymmetric benthic flatfish family in which both eyes migrate to the right side of the head during larval metamorphosis.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-platichthys",
    "scientificName": "Platichthys",
    "name": "Platichthys",
    "rank": "genus",
    "parentTaxonId": "taxon-pleuronectidae",
    "parentId": "taxon-pleuronectidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Girard, 1854",
    "commonNameEn": "European flounders",
    "commonNameBn": "ফ্লাউন্ডার গণ",
    "banglaName": "প্লাটিকথিস",
    "description": "Euryhaline flatfish genus capable of extensive seasonal migrations between coastal estuaries and freshwater rivers.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-tetraodontidae",
    "scientificName": "Tetraodontidae",
    "name": "Tetraodontidae",
    "rank": "family",
    "parentTaxonId": "taxon-tetraodontiformes",
    "parentId": "taxon-tetraodontiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1832",
    "commonNameEn": "Pufferfishes",
    "commonNameBn": "পটকা মাছ গোত্র",
    "banglaName": "টেট্রাওডন্টিডি",
    "description": "Globally distributed pufferfish family possessing four fused beak-like teeth, distensible stomachs for water inflation, and potent neurotoxins.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-tetraodon",
    "scientificName": "Tetraodon",
    "name": "Tetraodon",
    "rank": "genus",
    "parentTaxonId": "taxon-tetraodontidae",
    "parentId": "taxon-tetraodontidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "African freshwater puffers",
    "commonNameBn": "টেট্রাওডন গণ",
    "banglaName": "টেট্রাওডন",
    "description": "Freshwater riverine genus of puffers native to tropical Africa, including the giant mbu puffer.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-lamnidae",
    "scientificName": "Lamnidae",
    "name": "Lamnidae",
    "rank": "family",
    "parentTaxonId": "taxon-lamniformes",
    "parentId": "taxon-lamniformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller & Henle, 1838",
    "commonNameEn": "Mackerel sharks and White sharks",
    "commonNameBn": "ল্যামনিডি হাঙ্গর গোত্র",
    "banglaName": "ল্যামনিডি",
    "description": "Apex predatory shark family possessing endothermic countercurrent heat-exchange rete mirabile, conical snouts, and crescentic caudal fins.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-carcharodon",
    "scientificName": "Carcharodon",
    "name": "Carcharodon",
    "rank": "genus",
    "parentTaxonId": "taxon-lamnidae",
    "parentId": "taxon-lamnidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Smith, 1838",
    "commonNameEn": "Great white sharks",
    "commonNameBn": "হোয়াইট শার্ক গণ",
    "banglaName": "কার্চারোডন",
    "description": "Monotypic modern macro-predatory shark genus with large triangular serrated teeth adapted for marine mammal predation.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-carcharhinidae",
    "scientificName": "Carcharhinidae",
    "name": "Carcharhinidae",
    "rank": "family",
    "parentTaxonId": "taxon-carcharhiniformes",
    "parentId": "taxon-carcharhiniformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Jordan & Evermann, 1896",
    "commonNameEn": "Requiem sharks",
    "commonNameBn": "রেকোয়েম হাঙ্গর গোত্র",
    "banglaName": "কার্কারহিনিডি",
    "description": "Dominant tropical and warm temperate marine apex shark family possessing nictitating lower eyelids, round eyes, and precaudal pits.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-galeocerdo",
    "scientificName": "Galeocerdo",
    "name": "Galeocerdo",
    "rank": "genus",
    "parentTaxonId": "taxon-carcharhinidae",
    "parentId": "taxon-carcharhinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller & Henle, 1837",
    "commonNameEn": "Tiger sharks",
    "commonNameBn": "বাঘা হাঙ্গর গণ",
    "banglaName": "গ্যালিওসার্ডো",
    "description": "Cosmopolitan marine macropredator genus featuring unique cockscomb-shaped serrated teeth and dark vertical flank tiger striping.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-mobulidae",
    "scientificName": "Mobulidae",
    "name": "Mobulidae",
    "rank": "family",
    "parentTaxonId": "taxon-myliobatiformes",
    "parentId": "taxon-myliobatiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gill, 1893",
    "commonNameEn": "Manta and Devil rays",
    "commonNameBn": "মান্টা রে ও শাপলাপাতা মাছ গোত্র",
    "banglaName": "মোবুলিডি",
    "description": "Pelagic filter-feeding batoid family possessing cephalic lobes/horns for funneling zooplankton, wing-like pectoral discs, and reduced dentition.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-mobula",
    "scientificName": "Mobula",
    "name": "Mobula",
    "rank": "genus",
    "parentTaxonId": "taxon-mobulidae",
    "parentId": "taxon-mobulidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1810",
    "commonNameEn": "Manta and devil rays genus",
    "commonNameBn": "মান্টা রে গণ",
    "banglaName": "মোবুলা",
    "description": "Circumglobal epipelagic ray genus including oceanic mantas, known for acrobatic breaches and massive brain-to-body mass ratios.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-synodontidae",
    "scientificName": "Synodontidae",
    "name": "Synodontidae",
    "rank": "family",
    "parentTaxonId": "taxon-aulopiformes",
    "parentId": "taxon-aulopiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gill, 1861",
    "commonNameEn": "Lizardfishes",
    "commonNameBn": "টিকটিকি মাছ গোত্র",
    "banglaName": "সিনোডন্টিডি",
    "description": "Benthic marine aulopiform ambush predators with elongated cylindrical bodies, large mouths packed with sharp slender teeth even on the tongue.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-synodus",
    "scientificName": "Synodus",
    "name": "Synodus",
    "rank": "genus",
    "parentTaxonId": "taxon-synodontidae",
    "parentId": "taxon-synodontidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Scopoli, 1777",
    "commonNameEn": "Lizardfishes genus",
    "commonNameBn": "টিকটিকি মাছ গণ",
    "banglaName": "সিনোডাস",
    "description": "Marine genus camouflage-adapted for resting on sandy and coral reef substrates to launch high-speed darting ambush strikes.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-scombridae",
    "scientificName": "Scombridae",
    "name": "Scombridae",
    "rank": "family",
    "parentTaxonId": "taxon-scombriformes",
    "parentId": "taxon-scombriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Mackerels, Tunas, and Bonitos",
    "commonNameBn": "ম্যাকারেল ও টুনা গোত্র",
    "banglaName": "স্কমব্রিডি",
    "description": "Hydrodynamic pelagic cruisers with series of detached finlets behind dorsal and anal fins, slender caudal peduncle with keels, and high aerobic capacity.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-scomber",
    "scientificName": "Scomber",
    "name": "Scomber",
    "rank": "genus",
    "parentTaxonId": "taxon-scombridae",
    "parentId": "taxon-scombridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "True mackerels",
    "commonNameBn": "ম্যাকারেল গণ",
    "banglaName": "স্কম্বার",
    "description": "Fast-swimming epipelagic schooling mackerel genus with undulating dorsal vermiculations and oily nutritious flesh.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-carangidae",
    "scientificName": "Carangidae",
    "name": "Carangidae",
    "rank": "family",
    "parentTaxonId": "taxon-carangiformes",
    "parentId": "taxon-carangiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Jacks, Trevallies, and Scads",
    "commonNameBn": "ট্রেভালি ও জ্যাক গোত্র",
    "banglaName": "ক্যারানজিডি",
    "description": "High-speed marine and estuarine predatory teleosts with laterally compressed bodies, slender caudal peduncles, and lateral line with modified scutes.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-caranx",
    "scientificName": "Caranx",
    "name": "Caranx",
    "rank": "genus",
    "parentTaxonId": "taxon-carangidae",
    "parentId": "taxon-carangidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Lacépède, 1801",
    "commonNameEn": "Jacks and Trevallies",
    "commonNameBn": "ট্রেভালি গণ",
    "banglaName": "ক্যারানক্স",
    "description": "Powerful marine predator genus including giant trevallies, celebrated for hunting versatility and apex status on coral reefs.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-arapaimidae",
    "scientificName": "Arapaimidae",
    "name": "Arapaimidae",
    "rank": "family",
    "parentTaxonId": "taxon-osteoglossiformes",
    "parentId": "taxon-osteoglossiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1846",
    "commonNameEn": "Bonytongues and Arapaimas",
    "commonNameBn": "আরাপাইমা গোত্র",
    "banglaName": "আরাপাইমিডি",
    "description": "Basal osteoglossomorph family containing some of the largest freshwater teleosts, with bony toothed tongues and heavy mineralized armor scales.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-arapaima",
    "scientificName": "Arapaima",
    "name": "Arapaima",
    "rank": "genus",
    "parentTaxonId": "taxon-arapaimidae",
    "parentId": "taxon-arapaimidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller, 1843",
    "commonNameEn": "Pirarucus and Arapaimas",
    "commonNameBn": "আরাপাইমা গণ",
    "banglaName": "আরাপাইমা",
    "description": "Megafaunal Amazonian freshwater genus possessing a lung-like labyrinthine swim bladder enabling obligate surface respiration.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-exocoetidae",
    "scientificName": "Exocoetidae",
    "name": "Exocoetidae",
    "rank": "family",
    "parentTaxonId": "taxon-beloniformes",
    "parentId": "taxon-beloniformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Risso, 1827",
    "commonNameEn": "Flyingfishes",
    "commonNameBn": "উড়ুক্কু মাছ গোত্র",
    "banglaName": "একসোকোটিডি",
    "description": "Epipelagic marine beloniforms with enormously enlarged wing-like pectoral fins enabling sustained gliding flight over the ocean surface to evade predators.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-exocoetus",
    "scientificName": "Exocoetus",
    "name": "Exocoetus",
    "rank": "genus",
    "parentTaxonId": "taxon-exocoetidae",
    "parentId": "taxon-exocoetidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Two-wing flyingfishes",
    "commonNameBn": "উড়ুক্কু মাছ গণ",
    "banglaName": "একসোকোটাস",
    "description": "Circumtropical flyingfish genus possessing two large pectoral wings, capable of gliding hundreds of meters above waves.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-lophiidae",
    "scientificName": "Lophiidae",
    "name": "Lophiidae",
    "rank": "family",
    "parentTaxonId": "taxon-lophiiformes",
    "parentId": "taxon-lophiiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1810",
    "commonNameEn": "Goosefishes and Monkfishes",
    "commonNameBn": "মাঙ্কফিশ গোত্র",
    "banglaName": "লোফিইডি",
    "description": "Benthic marine anglerfishes with enormous flattened heads, wide crescentic mouths bristling with depressible teeth, and a modified dorsal spine lure.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-lophius",
    "scientificName": "Lophius",
    "name": "Lophius",
    "rank": "genus",
    "parentTaxonId": "taxon-lophiidae",
    "parentId": "taxon-lophiidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Monkfishes and Anglers",
    "commonNameBn": "মাঙ্কফিশ গণ",
    "banglaName": "লোফিয়াস",
    "description": "North Atlantic and Mediterranean benthic genus harvested commercially for high-value tail meat.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-engraulidae",
    "scientificName": "Engraulidae",
    "name": "Engraulidae",
    "rank": "family",
    "parentTaxonId": "taxon-clupeiformes",
    "parentId": "taxon-clupeiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gill, 1861",
    "commonNameEn": "Anchovies",
    "commonNameBn": "এঙ্কোভি গোত্র",
    "banglaName": "এনগ্রাউলিডি",
    "description": "Small translucent silvery clupeiform schooling fishes with an overhanging snout, extremely wide subterminal mouth, and high forage biomass.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Nelson et al. (2016)"
      }
    ]
  },
  {
    "id": "taxon-engraulis",
    "scientificName": "Engraulis",
    "name": "Engraulis",
    "rank": "genus",
    "parentTaxonId": "taxon-engraulidae",
    "parentId": "taxon-engraulidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1816",
    "commonNameEn": "Anchovies genus",
    "commonNameBn": "এঙ্কোভি গণ",
    "banglaName": "এনগ্রাউলিস",
    "description": "Globally distributed marine pelagic genus supporting massive commercial fisheries and pelagic trophic food chains.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer (2026)"
      }
    ]
  },
  {
    "id": "taxon-calcarea",
    "scientificName": "Calcarea",
    "name": "Calcarea",
    "rank": "class",
    "parentTaxonId": "taxon-porifera",
    "parentId": "taxon-porifera",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bowerbank, 1862",
    "commonNameEn": "Calcareous Sponges",
    "commonNameBn": "চুনময় স্পঞ্জ",
    "banglaName": "চুনময় স্পঞ্জ",
    "description": "Cellular sponges possessing calcitic mineral spicules (calcium carbonate) with one, three, or four rays.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-leucosolenida",
    "scientificName": "Leucosolenida",
    "name": "Leucosolenida",
    "rank": "order",
    "parentTaxonId": "taxon-calcarea",
    "parentId": "taxon-calcarea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Hartman, 1958",
    "commonNameEn": "Leucosolenid Sponges",
    "commonNameBn": "লিউকোসোলেমিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-sycettidae",
    "scientificName": "Sycettidae",
    "name": "Sycettidae",
    "rank": "family",
    "parentTaxonId": "taxon-leucosolenida",
    "parentId": "taxon-leucosolenida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Schmidt, 1870",
    "commonNameEn": "Sycon Sponges",
    "commonNameBn": "সাইসেটিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-sycon",
    "scientificName": "Sycon",
    "name": "Sycon",
    "rank": "genus",
    "parentTaxonId": "taxon-sycettidae",
    "parentId": "taxon-sycettidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Risso, 1826",
    "commonNameEn": "Sycon",
    "commonNameBn": "সাইকন",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-hexactinellida",
    "scientificName": "Hexactinellida",
    "name": "Hexactinellida",
    "rank": "class",
    "parentTaxonId": "taxon-porifera",
    "parentId": "taxon-porifera",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Schmidt, 1870",
    "commonNameEn": "Glass Sponges",
    "commonNameBn": "কাচ স্পঞ্জ",
    "banglaName": "কাচ স্পঞ্জ",
    "description": "Deep-sea sponges possessing triaxonic, six-rayed siliceous spicules fused into delicate architectural lattices.",
    "speciesCount": 1,
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-lyssacinosida",
    "scientificName": "Lyssacinosida",
    "name": "Lyssacinosida",
    "rank": "order",
    "parentTaxonId": "taxon-hexactinellida",
    "parentId": "taxon-hexactinellida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Zittel, 1877",
    "commonNameEn": "Lyssacine Glass Sponges",
    "commonNameBn": "লাইসাসিনোসিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-euplectellidae",
    "scientificName": "Euplectellidae",
    "name": "Euplectellidae",
    "rank": "family",
    "parentTaxonId": "taxon-lyssacinosida",
    "parentId": "taxon-lyssacinosida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1867",
    "commonNameEn": "Venus Flower Basket Family",
    "commonNameBn": "ইউপ্লেকটেলিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-euplectella",
    "scientificName": "Euplectella",
    "name": "Euplectella",
    "rank": "genus",
    "parentTaxonId": "taxon-euplectellidae",
    "parentId": "taxon-euplectellidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Owen, 1841",
    "commonNameEn": "Euplectella",
    "commonNameBn": "ইউপ্লেকটেলা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Porifera Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-hydrozoa",
    "scientificName": "Hydrozoa",
    "name": "Hydrozoa",
    "rank": "class",
    "parentTaxonId": "taxon-cnidaria",
    "parentId": "taxon-cnidaria",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Owen, 1843",
    "commonNameEn": "Hydrozoans",
    "commonNameBn": "হাইড্রোপ্রজাতি",
    "banglaName": "হাইড্রোপ্রজাতি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-siphonophorae",
    "scientificName": "Siphonophorae",
    "name": "Siphonophorae",
    "rank": "order",
    "parentTaxonId": "taxon-hydrozoa",
    "parentId": "taxon-hydrozoa",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Eschscholtz, 1829",
    "commonNameEn": "Siphonophores",
    "commonNameBn": "সাইফোনোফোর",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-physaliidae",
    "scientificName": "Physaliidae",
    "name": "Physaliidae",
    "rank": "family",
    "parentTaxonId": "taxon-siphonophorae",
    "parentId": "taxon-siphonophorae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Brandt, 1835",
    "commonNameEn": "Portuguese Man o' War Family",
    "commonNameBn": "ফাইসালিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-physalia",
    "scientificName": "Physalia",
    "name": "Physalia",
    "rank": "genus",
    "parentTaxonId": "taxon-physaliidae",
    "parentId": "taxon-physaliidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lamarck, 1801",
    "commonNameEn": "Physalia",
    "commonNameBn": "ফাইসালিয়া",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-cubozoa",
    "scientificName": "Cubozoa",
    "name": "Cubozoa",
    "rank": "class",
    "parentTaxonId": "taxon-cnidaria",
    "parentId": "taxon-cnidaria",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Werner, 1973",
    "commonNameEn": "Box Jellyfishes",
    "commonNameBn": "বক্স জেলিফিশ",
    "banglaName": "বক্স জেলিফিশ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-chirodropida",
    "scientificName": "Chirodropida",
    "name": "Chirodropida",
    "rank": "order",
    "parentTaxonId": "taxon-cubozoa",
    "parentId": "taxon-cubozoa",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Haeckel, 1880",
    "commonNameEn": "Chirodropid Box Jellies",
    "commonNameBn": "কায়রোড্রপিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-chirodropidae",
    "scientificName": "Chirodropidae",
    "name": "Chirodropidae",
    "rank": "family",
    "parentTaxonId": "taxon-chirodropida",
    "parentId": "taxon-chirodropida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Haeckel, 1880",
    "commonNameEn": "Sea Wasp Family",
    "commonNameBn": "কায়রোড্রপিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-chironex",
    "scientificName": "Chironex",
    "name": "Chironex",
    "rank": "genus",
    "parentTaxonId": "taxon-chirodropidae",
    "parentId": "taxon-chirodropidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Southcott, 1956",
    "commonNameEn": "Chironex",
    "commonNameBn": "কাইরোনেক্স",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-tentaculata",
    "scientificName": "Tentaculata",
    "name": "Tentaculata",
    "rank": "class",
    "parentTaxonId": "taxon-ctenophora",
    "parentId": "taxon-ctenophora",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Eschscholtz, 1825",
    "commonNameEn": "Tentaculate Comb Jellies",
    "commonNameBn": "টেন্টাকুলেটা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-cydippida",
    "scientificName": "Cydippida",
    "name": "Cydippida",
    "rank": "order",
    "parentTaxonId": "taxon-tentaculata",
    "parentId": "taxon-tentaculata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gegenbaur, 1856",
    "commonNameEn": "Cydippid Comb Jellies",
    "commonNameBn": "সাইডিপ্পিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-pleurobrachiidae",
    "scientificName": "Pleurobrachiidae",
    "name": "Pleurobrachiidae",
    "rank": "family",
    "parentTaxonId": "taxon-cydippida",
    "parentId": "taxon-cydippida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Chun, 1880",
    "commonNameEn": "Sea Gooseberry Family",
    "commonNameBn": "প্লুরোব্রাকিয়া পরিবার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-pleurobrachia",
    "scientificName": "Pleurobrachia",
    "name": "Pleurobrachia",
    "rank": "genus",
    "parentTaxonId": "taxon-pleurobrachiidae",
    "parentId": "taxon-pleurobrachiidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fleming, 1822",
    "commonNameEn": "Pleurobrachia",
    "commonNameBn": "প্লুরোব্রাকিয়া",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-nuda",
    "scientificName": "Nuda",
    "name": "Nuda",
    "rank": "class",
    "parentTaxonId": "taxon-ctenophora",
    "parentId": "taxon-ctenophora",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Chun, 1879",
    "commonNameEn": "Atentaculate Comb Jellies",
    "commonNameBn": "নুডা (স্পর্শকবিহীন চিরুনি জেলি)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-beroida",
    "scientificName": "Beroida",
    "name": "Beroida",
    "rank": "order",
    "parentTaxonId": "taxon-nuda",
    "parentId": "taxon-nuda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Eschscholtz, 1829",
    "commonNameEn": "Beroid Comb Jellies",
    "commonNameBn": "বেরোইডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-beroidae",
    "scientificName": "Beroidae",
    "name": "Beroidae",
    "rank": "family",
    "parentTaxonId": "taxon-beroida",
    "parentId": "taxon-beroida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Eschscholtz, 1825",
    "commonNameEn": "Beroe Family",
    "commonNameBn": "বেরোই পরিবার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-beroe",
    "scientificName": "Beroe",
    "name": "Beroe",
    "rank": "genus",
    "parentTaxonId": "taxon-beroidae",
    "parentId": "taxon-beroidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Browne, 1756",
    "commonNameEn": "Beroe",
    "commonNameBn": "বেরোয়ে",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-polychaeta",
    "scientificName": "Polychaeta",
    "name": "Polychaeta",
    "rank": "class",
    "parentTaxonId": "taxon-annelida-marine",
    "parentId": "taxon-annelida-marine",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Grube, 1850",
    "commonNameEn": "Bristle Worms / Polychaetes",
    "commonNameBn": "পলীকীট / সামুদ্রিক রোমশ কৃমি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Polychaeta Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-capitellida",
    "scientificName": "Capitellida",
    "name": "Capitellida",
    "rank": "order",
    "parentTaxonId": "taxon-polychaeta",
    "parentId": "taxon-polychaeta",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fauchald, 1977",
    "commonNameEn": "Capitellid Lugworms",
    "commonNameBn": "ক্যাপিটেলিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Polychaeta Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-arenicolidae",
    "scientificName": "Arenicolidae",
    "name": "Arenicolidae",
    "rank": "family",
    "parentTaxonId": "taxon-capitellida",
    "parentId": "taxon-capitellida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Johnston, 1835",
    "commonNameEn": "Lugworm Family",
    "commonNameBn": "অ্যারেনিকোলিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Polychaeta Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-arenicola",
    "scientificName": "Arenicola",
    "name": "Arenicola",
    "rank": "genus",
    "parentTaxonId": "taxon-arenicolidae",
    "parentId": "taxon-arenicolidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lamarck, 1801",
    "commonNameEn": "Arenicola",
    "commonNameBn": "অ্যারেনিকোলা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Polychaeta Database",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-clitellata",
    "scientificName": "Clitellata",
    "name": "Clitellata",
    "rank": "class",
    "parentTaxonId": "taxon-annelida-marine",
    "parentId": "taxon-annelida-marine",
    "status": "accepted",
    "module": "general",
    "authorYear": "Michaelsen, 1919",
    "commonNameEn": "Clitellate Annelids",
    "commonNameBn": "ক্লাইটেলাটা (কেঁচো ও জোঁক)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-crassiclitellata",
    "scientificName": "Crassiclitellata",
    "name": "Crassiclitellata",
    "rank": "order",
    "parentTaxonId": "taxon-clitellata",
    "parentId": "taxon-clitellata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Jamieson, 1988",
    "commonNameEn": "Earthworms",
    "commonNameBn": "সাধারণ কেঁচো বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-lumbricidae",
    "scientificName": "Lumbricidae",
    "name": "Lumbricidae",
    "rank": "family",
    "parentTaxonId": "taxon-crassiclitellata",
    "parentId": "taxon-crassiclitellata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Earthworm Family",
    "commonNameBn": "লুম্ব্রিসিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-lumbricus",
    "scientificName": "Lumbricus",
    "name": "Lumbricus",
    "rank": "genus",
    "parentTaxonId": "taxon-lumbricidae",
    "parentId": "taxon-lumbricidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Lumbricus",
    "commonNameBn": "লুমব্রিকাস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-arhynchobdellida",
    "scientificName": "Arhynchobdellida",
    "name": "Arhynchobdellida",
    "rank": "order",
    "parentTaxonId": "taxon-clitellata",
    "parentId": "taxon-clitellata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Blanchard, 1894",
    "commonNameEn": "Jawless & Proboscisless Leeches",
    "commonNameBn": "অ্যারিংকোবডেলিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-hirudinidae",
    "scientificName": "Hirudinidae",
    "name": "Hirudinidae",
    "rank": "family",
    "parentTaxonId": "taxon-arhynchobdellida",
    "parentId": "taxon-arhynchobdellida",
    "status": "accepted",
    "module": "general",
    "authorYear": "Whitman, 1886",
    "commonNameEn": "Medicinal Leech Family",
    "commonNameBn": "হিরুডিনিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-hirudo",
    "scientificName": "Hirudo",
    "name": "Hirudo",
    "rank": "genus",
    "parentTaxonId": "taxon-hirudinidae",
    "parentId": "taxon-hirudinidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Hirudo",
    "commonNameBn": "হিরুডো (জোঁক)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-gastropoda",
    "scientificName": "Gastropoda",
    "name": "Gastropoda",
    "rank": "class",
    "parentTaxonId": "taxon-mollusca",
    "parentId": "taxon-mollusca",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cuvier, 1795",
    "commonNameEn": "Snails & Slugs",
    "commonNameBn": "শামুক ও স্লাগ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-stylommatophora",
    "scientificName": "Stylommatophora",
    "name": "Stylommatophora",
    "rank": "order",
    "parentTaxonId": "taxon-gastropoda",
    "parentId": "taxon-gastropoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Schmidt, 1855",
    "commonNameEn": "Land Snails",
    "commonNameBn": "স্থলজ শামুক",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-helicidae",
    "scientificName": "Helicidae",
    "name": "Helicidae",
    "rank": "family",
    "parentTaxonId": "taxon-stylommatophora",
    "parentId": "taxon-stylommatophora",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Helix Snail Family",
    "commonNameBn": "হেলিসিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-helix",
    "scientificName": "Helix",
    "name": "Helix",
    "rank": "genus",
    "parentTaxonId": "taxon-helicidae",
    "parentId": "taxon-helicidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Helix",
    "commonNameBn": "হিলিক্স",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-bivalvia",
    "scientificName": "Bivalvia",
    "name": "Bivalvia",
    "rank": "class",
    "parentTaxonId": "taxon-mollusca",
    "parentId": "taxon-mollusca",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Bivalves (Clams, Oysters, Mussels)",
    "commonNameBn": "দ্বিকপাটী কম্বোজ (ঝিনুক)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-cardiida",
    "scientificName": "Cardiida",
    "name": "Cardiida",
    "rank": "order",
    "parentTaxonId": "taxon-bivalvia",
    "parentId": "taxon-bivalvia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Férussac, 1822",
    "commonNameEn": "Cockles & Giant Clams",
    "commonNameBn": "কার্ডিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-cardiidae",
    "scientificName": "Cardiidae",
    "name": "Cardiidae",
    "rank": "family",
    "parentTaxonId": "taxon-cardiida",
    "parentId": "taxon-cardiida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lamarck, 1809",
    "commonNameEn": "Cockle & Giant Clam Family",
    "commonNameBn": "কার্ডিইডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-tridacna",
    "scientificName": "Tridacna",
    "name": "Tridacna",
    "rank": "genus",
    "parentTaxonId": "taxon-cardiidae",
    "parentId": "taxon-cardiidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bruguière, 1797",
    "commonNameEn": "Giant Clams",
    "commonNameBn": "ট্রাইড্যাকনা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-polyplacophora",
    "scientificName": "Polyplacophora",
    "name": "Polyplacophora",
    "rank": "class",
    "parentTaxonId": "taxon-mollusca",
    "parentId": "taxon-mollusca",
    "status": "accepted",
    "module": "marine",
    "authorYear": "de Blainville, 1816",
    "commonNameEn": "Chitons",
    "commonNameBn": "কাইটন",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-chitonida",
    "scientificName": "Chitonida",
    "name": "Chitonida",
    "rank": "order",
    "parentTaxonId": "taxon-polyplacophora",
    "parentId": "taxon-polyplacophora",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Thiele, 1909",
    "commonNameEn": "Chitons",
    "commonNameBn": "কাইটনিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-tonicellidae",
    "scientificName": "Tonicellidae",
    "name": "Tonicellidae",
    "rank": "family",
    "parentTaxonId": "taxon-chitonida",
    "parentId": "taxon-chitonida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Simroth, 1894",
    "commonNameEn": "Tonicellid Chitons",
    "commonNameBn": "টনিসেলিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-tonicella",
    "scientificName": "Tonicella",
    "name": "Tonicella",
    "rank": "genus",
    "parentTaxonId": "taxon-tonicellidae",
    "parentId": "taxon-tonicellidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Carpenter, 1873",
    "commonNameEn": "Tonicella",
    "commonNameBn": "টনিসেলা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-nautilida",
    "scientificName": "Nautilida",
    "name": "Nautilida",
    "rank": "order",
    "parentTaxonId": "taxon-cephalopoda",
    "parentId": "taxon-cephalopoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Agassiz, 1847",
    "commonNameEn": "Nautiluses",
    "commonNameBn": "নটিলিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-nautilidae",
    "scientificName": "Nautilidae",
    "name": "Nautilidae",
    "rank": "family",
    "parentTaxonId": "taxon-nautilida",
    "parentId": "taxon-nautilida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "de Blainville, 1825",
    "commonNameEn": "Nautilus Family",
    "commonNameBn": "নটিলিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-nautilus",
    "scientificName": "Nautilus",
    "name": "Nautilus",
    "rank": "genus",
    "parentTaxonId": "taxon-nautilidae",
    "parentId": "taxon-nautilidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Chambered Nautilus",
    "commonNameBn": "নটিলাস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-merostomata",
    "scientificName": "Merostomata",
    "name": "Merostomata",
    "rank": "class",
    "parentTaxonId": "taxon-arthropoda",
    "parentId": "taxon-arthropoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Woodward, 1866",
    "commonNameEn": "Horseshoe Crabs",
    "commonNameBn": "মেরোস্টোমাটা (রাজ কাঁকড়া)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-xiphosura",
    "scientificName": "Xiphosura",
    "name": "Xiphosura",
    "rank": "order",
    "parentTaxonId": "taxon-merostomata",
    "parentId": "taxon-merostomata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Xiphosurids",
    "commonNameBn": "জিফোসিউরা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-limulidae",
    "scientificName": "Limulidae",
    "name": "Limulidae",
    "rank": "family",
    "parentTaxonId": "taxon-xiphosura",
    "parentId": "taxon-xiphosura",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Leach, 1819",
    "commonNameEn": "Horseshoe Crab Family",
    "commonNameBn": "লিমুলিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-limulus",
    "scientificName": "Limulus",
    "name": "Limulus",
    "rank": "genus",
    "parentTaxonId": "taxon-limulidae",
    "parentId": "taxon-limulidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Müller, 1785",
    "commonNameEn": "Limulus",
    "commonNameBn": "লিমুলাস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-insecta",
    "scientificName": "Insecta",
    "name": "Insecta",
    "rank": "class",
    "parentTaxonId": "taxon-arthropoda",
    "parentId": "taxon-arthropoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Insects",
    "commonNameBn": "কীটপতঙ্গ",
    "banglaName": "কীটপতঙ্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-lepidoptera",
    "scientificName": "Lepidoptera",
    "name": "Lepidoptera",
    "rank": "order",
    "parentTaxonId": "taxon-insecta",
    "parentId": "taxon-insecta",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Butterflies & Moths",
    "commonNameBn": "প্রজাপতি ও মথ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-nymphalidae",
    "scientificName": "Nymphalidae",
    "name": "Nymphalidae",
    "rank": "family",
    "parentTaxonId": "taxon-lepidoptera",
    "parentId": "taxon-lepidoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Brush-footed Butterflies",
    "commonNameBn": "নিমফ্যালিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-danaus",
    "scientificName": "Danaus",
    "name": "Danaus",
    "rank": "genus",
    "parentTaxonId": "taxon-nymphalidae",
    "parentId": "taxon-nymphalidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Kluk, 1780",
    "commonNameEn": "Monarch Butterflies",
    "commonNameBn": "ড্যানাউস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-hymenoptera",
    "scientificName": "Hymenoptera",
    "name": "Hymenoptera",
    "rank": "order",
    "parentTaxonId": "taxon-insecta",
    "parentId": "taxon-insecta",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Bees, Wasps & Ants",
    "commonNameBn": "মৌমাছি ও পিঁপড়া",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-apidae",
    "scientificName": "Apidae",
    "name": "Apidae",
    "rank": "family",
    "parentTaxonId": "taxon-hymenoptera",
    "parentId": "taxon-hymenoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Honey Bee Family",
    "commonNameBn": "এপিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-apis",
    "scientificName": "Apis",
    "name": "Apis",
    "rank": "genus",
    "parentTaxonId": "taxon-apidae",
    "parentId": "taxon-apidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Honey Bees",
    "commonNameBn": "মৌমাছি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-nephropidae",
    "scientificName": "Nephropidae",
    "name": "Nephropidae",
    "rank": "family",
    "parentTaxonId": "taxon-decapoda",
    "parentId": "taxon-decapoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Dana, 1852",
    "commonNameEn": "Clawed Lobsters",
    "commonNameBn": "নেফ্রোক্রোপিডি (গলদা লবস্টার)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-homarus",
    "scientificName": "Homarus",
    "name": "Homarus",
    "rank": "genus",
    "parentTaxonId": "taxon-nephropidae",
    "parentId": "taxon-nephropidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Weber, 1795",
    "commonNameEn": "Homarus Lobsters",
    "commonNameBn": "হোমারাস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-chilopoda",
    "scientificName": "Chilopoda",
    "name": "Chilopoda",
    "rank": "class",
    "parentTaxonId": "taxon-arthropoda",
    "parentId": "taxon-arthropoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1817",
    "commonNameEn": "Centipedes",
    "commonNameBn": "শতপদী / কানকাটা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-scolopendromorpha",
    "scientificName": "Scolopendromorpha",
    "name": "Scolopendromorpha",
    "rank": "order",
    "parentTaxonId": "taxon-chilopoda",
    "parentId": "taxon-chilopoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Pocock, 1895",
    "commonNameEn": "Tropical Centipedes",
    "commonNameBn": "স্কোলোপেন্ড্রোমরফা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-scolopendridae",
    "scientificName": "Scolopendridae",
    "name": "Scolopendridae",
    "rank": "family",
    "parentTaxonId": "taxon-scolopendromorpha",
    "parentId": "taxon-scolopendromorpha",
    "status": "accepted",
    "module": "general",
    "authorYear": "Leach, 1814",
    "commonNameEn": "Giant Centipede Family",
    "commonNameBn": "স্কোলোপেন্ড্রিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-scolopendra",
    "scientificName": "Scolopendra",
    "name": "Scolopendra",
    "rank": "genus",
    "parentTaxonId": "taxon-scolopendridae",
    "parentId": "taxon-scolopendridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Scolopendra",
    "commonNameBn": "স্কোলোপেন্ড্রা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Catalogue of Life",
        "citation": "COL, 2026."
      }
    ]
  },
  {
    "id": "taxon-echinoidea",
    "scientificName": "Echinoidea",
    "name": "Echinoidea",
    "rank": "class",
    "parentTaxonId": "taxon-echinodermata",
    "parentId": "taxon-echinodermata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Leske, 1778",
    "commonNameEn": "Sea Urchins & Sand Dollars",
    "commonNameBn": "সাগর আর্চিন",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-camarodonta",
    "scientificName": "Camarodonta",
    "name": "Camarodonta",
    "rank": "order",
    "parentTaxonId": "taxon-echinoidea",
    "parentId": "taxon-echinoidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Jackson, 1912",
    "commonNameEn": "Camarodont Urchins",
    "commonNameBn": "ক্যামারোডন্টা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-strongylocentrotidae",
    "scientificName": "Strongylocentrotidae",
    "name": "Strongylocentrotidae",
    "rank": "family",
    "parentTaxonId": "taxon-camarodonta",
    "parentId": "taxon-camarodonta",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gregory, 1900",
    "commonNameEn": "Strongylocentrotid Urchins",
    "commonNameBn": "স্ট্রংগাইলোসেন্ট্রোটিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-strongylocentrotus",
    "scientificName": "Strongylocentrotus",
    "name": "Strongylocentrotus",
    "rank": "genus",
    "parentTaxonId": "taxon-strongylocentrotidae",
    "parentId": "taxon-strongylocentrotidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Brandt, 1835",
    "commonNameEn": "Strongylocentrotus",
    "commonNameBn": "স্ট্রংগাইলোসেন্ট্রোটাস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-ophiuroidea",
    "scientificName": "Ophiuroidea",
    "name": "Ophiuroidea",
    "rank": "class",
    "parentTaxonId": "taxon-echinodermata",
    "parentId": "taxon-echinodermata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1840",
    "commonNameEn": "Brittle Stars",
    "commonNameBn": "ভঙ্গুর তারা মাছ (অফিউরয়েড)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-ophiurida",
    "scientificName": "Ophiurida",
    "name": "Ophiurida",
    "rank": "order",
    "parentTaxonId": "taxon-ophiuroidea",
    "parentId": "taxon-ophiuroidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Müller & Troschel, 1840",
    "commonNameEn": "Ophiurid Brittle Stars",
    "commonNameBn": "অফিউরিডা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-ophiotrichidae",
    "scientificName": "Ophiotrichidae",
    "name": "Ophiotrichidae",
    "rank": "family",
    "parentTaxonId": "taxon-ophiurida",
    "parentId": "taxon-ophiurida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Ljungman, 1867",
    "commonNameEn": "Ophiotrichid Family",
    "commonNameBn": "অফিউট্রিকিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-ophiothrix",
    "scientificName": "Ophiothrix",
    "name": "Ophiothrix",
    "rank": "genus",
    "parentTaxonId": "taxon-ophiotrichidae",
    "parentId": "taxon-ophiotrichidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Müller & Troschel, 1840",
    "commonNameEn": "Ophiothrix",
    "commonNameBn": "অফিউথ্রিক্স",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-holothuroidea",
    "scientificName": "Holothuroidea",
    "name": "Holothuroidea",
    "rank": "class",
    "parentTaxonId": "taxon-echinodermata",
    "parentId": "taxon-echinodermata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "de Blainville, 1834",
    "commonNameEn": "Sea Cucumbers",
    "commonNameBn": "সমুদ্র শসা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-holothuriida",
    "scientificName": "Holothuriida",
    "name": "Holothuriida",
    "rank": "order",
    "parentTaxonId": "taxon-holothuroidea",
    "parentId": "taxon-holothuroidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Miller et al., 2017",
    "commonNameEn": "Holothuriid Sea Cucumbers",
    "commonNameBn": "হলোথুরিয়া বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-holothuriidae",
    "scientificName": "Holothuriidae",
    "name": "Holothuriidae",
    "rank": "family",
    "parentTaxonId": "taxon-holothuriida",
    "parentId": "taxon-holothuriida",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Burmeister, 1837",
    "commonNameEn": "Sea Cucumber Family",
    "commonNameBn": "হলোথুরিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-holothuria",
    "scientificName": "Holothuria",
    "name": "Holothuria",
    "rank": "genus",
    "parentTaxonId": "taxon-holothuriidae",
    "parentId": "taxon-holothuriidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Linnaeus, 1767",
    "commonNameEn": "Holothuria",
    "commonNameBn": "হলোথুরিয়া",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-leptocardii",
    "scientificName": "Leptocardii",
    "name": "Leptocardii",
    "rank": "class",
    "parentTaxonId": "taxon-chordata",
    "parentId": "taxon-chordata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Müller, 1845",
    "commonNameEn": "Lancelets / Amphioxi",
    "commonNameBn": "লেপ্টোকার্ডাই (অ্যাম্ফিঅক্সাস)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-amphioxiformes",
    "scientificName": "Amphioxiformes",
    "name": "Amphioxiformes",
    "rank": "order",
    "parentTaxonId": "taxon-leptocardii",
    "parentId": "taxon-leptocardii",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bonaparte, 1846",
    "commonNameEn": "Lancelets",
    "commonNameBn": "অ্যাম্ফিঅক্সিফর্মিস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-branchiostomatidae",
    "scientificName": "Branchiostomatidae",
    "name": "Branchiostomatidae",
    "rank": "family",
    "parentTaxonId": "taxon-amphioxiformes",
    "parentId": "taxon-amphioxiformes",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bonaparte, 1839",
    "commonNameEn": "Lancelet Family",
    "commonNameBn": "ব্রাঙ্কিওস্টোমাটিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-branchiostoma",
    "scientificName": "Branchiostoma",
    "name": "Branchiostoma",
    "rank": "genus",
    "parentTaxonId": "taxon-branchiostomatidae",
    "parentId": "taxon-branchiostomatidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Costa, 1834",
    "commonNameEn": "Branchiostoma",
    "commonNameBn": "ব্রাঙ্কিওস্টোমা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-ascidiacea",
    "scientificName": "Ascidiacea",
    "name": "Ascidiacea",
    "rank": "class",
    "parentTaxonId": "taxon-chordata",
    "parentId": "taxon-chordata",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Nielsen, 1995",
    "commonNameEn": "Sea Squirts / Ascidians",
    "commonNameBn": "অ্যাসিডিয়াসিয়া (টিউনিক ফানেল)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-phlebobranchia",
    "scientificName": "Phlebobranchia",
    "name": "Phlebobranchia",
    "rank": "order",
    "parentTaxonId": "taxon-ascidiacea",
    "parentId": "taxon-ascidiacea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lahille, 1886",
    "commonNameEn": "Phlebobranch Ascidians",
    "commonNameBn": "ফ্লেবোব্রাঙ্কিয়া",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-cionidae",
    "scientificName": "Cionidae",
    "name": "Cionidae",
    "rank": "family",
    "parentTaxonId": "taxon-phlebobranchia",
    "parentId": "taxon-phlebobranchia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lahille, 1887",
    "commonNameEn": "Cionid Sea Squirts",
    "commonNameBn": "সায়োনিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-ciona",
    "scientificName": "Ciona",
    "name": "Ciona",
    "rank": "genus",
    "parentTaxonId": "taxon-cionidae",
    "parentId": "taxon-cionidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fleming, 1822",
    "commonNameEn": "Ciona",
    "commonNameBn": "সায়োনা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-chimaeridae",
    "scientificName": "Chimaeridae",
    "name": "Chimaeridae",
    "rank": "family",
    "parentTaxonId": "taxon-chimaeriformes",
    "parentId": "taxon-chimaeriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Shortnose Chimaeras",
    "commonNameBn": "কাইমেরা পরিবার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-chimaera",
    "scientificName": "Chimaera",
    "name": "Chimaera",
    "rank": "genus",
    "parentTaxonId": "taxon-chimaeridae",
    "parentId": "taxon-chimaeridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Chimaera",
    "commonNameBn": "কাইমেরা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-heterodontidae",
    "scientificName": "Heterodontidae",
    "name": "Heterodontidae",
    "rank": "family",
    "parentTaxonId": "taxon-heterodontiformes",
    "parentId": "taxon-heterodontiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gray, 1851",
    "commonNameEn": "Bullhead Sharks",
    "commonNameBn": "হেটেরোডন্টিডি (ষাঁড়মাথা হাঙর)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-heterodontus",
    "scientificName": "Heterodontus",
    "name": "Heterodontus",
    "rank": "genus",
    "parentTaxonId": "taxon-heterodontidae",
    "parentId": "taxon-heterodontidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Blainville, 1816",
    "commonNameEn": "Heterodontus",
    "commonNameBn": "হেটেরোডন্টাস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-squatinidae",
    "scientificName": "Squatinidae",
    "name": "Squatinidae",
    "rank": "family",
    "parentTaxonId": "taxon-squatiniformes",
    "parentId": "taxon-squatiniformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "de Blainville, 1816",
    "commonNameEn": "Angel Sharks",
    "commonNameBn": "স্কোয়াটিনিডি (অ্যাঞ্জেল হাঙর)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-squatina",
    "scientificName": "Squatina",
    "name": "Squatina",
    "rank": "genus",
    "parentTaxonId": "taxon-squatinidae",
    "parentId": "taxon-squatinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Duméril, 1806",
    "commonNameEn": "Squatina",
    "commonNameBn": "স্কোয়াটিনা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-squalidae",
    "scientificName": "Squalidae",
    "name": "Squalidae",
    "rank": "family",
    "parentTaxonId": "taxon-squaliformes",
    "parentId": "taxon-squaliformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "de Blainville, 1816",
    "commonNameEn": "Dogfish Sharks",
    "commonNameBn": "স্কোয়ালিডি (ডগফিশ হাঙর)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-squalus",
    "scientificName": "Squalus",
    "name": "Squalus",
    "rank": "genus",
    "parentTaxonId": "taxon-squalidae",
    "parentId": "taxon-squalidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Squalus",
    "commonNameBn": "স্কোয়ালুস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-torpedinidae",
    "scientificName": "Torpedinidae",
    "name": "Torpedinidae",
    "rank": "family",
    "parentTaxonId": "taxon-torpediniformes",
    "parentId": "taxon-torpediniformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1838",
    "commonNameEn": "Electric Rays",
    "commonNameBn": "টরপেডিনিডি (বৈদ্যুতিক শাপলাপাতা)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-torpedo",
    "scientificName": "Torpedo",
    "name": "Torpedo",
    "rank": "genus",
    "parentTaxonId": "taxon-torpedinidae",
    "parentId": "taxon-torpedinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Duméril, 1806",
    "commonNameEn": "Torpedo",
    "commonNameBn": "টরপেডো",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-rajidae",
    "scientificName": "Rajidae",
    "name": "Rajidae",
    "rank": "family",
    "parentTaxonId": "taxon-rajiformes",
    "parentId": "taxon-rajiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "de Blainville, 1816",
    "commonNameEn": "Skates",
    "commonNameBn": "রাজিডি (স্কেট রে)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-raja",
    "scientificName": "Raja",
    "name": "Raja",
    "rank": "genus",
    "parentTaxonId": "taxon-rajidae",
    "parentId": "taxon-rajidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Raja",
    "commonNameBn": "রাজা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-rhinidae",
    "scientificName": "Rhinidae",
    "name": "Rhinidae",
    "rank": "family",
    "parentTaxonId": "taxon-rhinopristiformes",
    "parentId": "taxon-rhinopristiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Müller & Henle, 1841",
    "commonNameEn": "Wedgefishes & Guitarfishes",
    "commonNameBn": "রাইনিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-rhina",
    "scientificName": "Rhina",
    "name": "Rhina",
    "rank": "genus",
    "parentTaxonId": "taxon-rhinidae",
    "parentId": "taxon-rhinidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bloch & Schneider, 1801",
    "commonNameEn": "Bowmouth Guitarfish",
    "commonNameBn": "রাইনা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-elopidae",
    "scientificName": "Elopidae",
    "name": "Elopidae",
    "rank": "family",
    "parentTaxonId": "taxon-elopiformes",
    "parentId": "taxon-elopiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Valenciennes, 1847",
    "commonNameEn": "Ladyfishes / Tenpounders",
    "commonNameBn": "ইলোপিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-elops",
    "scientificName": "Elops",
    "name": "Elops",
    "rank": "genus",
    "parentTaxonId": "taxon-elopidae",
    "parentId": "taxon-elopidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1766",
    "commonNameEn": "Elops",
    "commonNameBn": "ইলোপস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-albulidae",
    "scientificName": "Albulidae",
    "name": "Albulidae",
    "rank": "family",
    "parentTaxonId": "taxon-albuliformes",
    "parentId": "taxon-albuliformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1849",
    "commonNameEn": "Bonefishes",
    "commonNameBn": "অ্যালবুলিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-albula",
    "scientificName": "Albula",
    "name": "Albula",
    "rank": "genus",
    "parentTaxonId": "taxon-albulidae",
    "parentId": "taxon-albulidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Scopoli, 1777",
    "commonNameEn": "Albula",
    "commonNameBn": "অ্যালবুলা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-zeidae",
    "scientificName": "Zeidae",
    "name": "Zeidae",
    "rank": "family",
    "parentTaxonId": "taxon-zeiformes",
    "parentId": "taxon-zeiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1810",
    "commonNameEn": "Dories",
    "commonNameBn": "জিইডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-zeus",
    "scientificName": "Zeus",
    "name": "Zeus",
    "rank": "genus",
    "parentTaxonId": "taxon-zeidae",
    "parentId": "taxon-zeidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Zeus",
    "commonNameBn": "জিউস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-myctophidae",
    "scientificName": "Myctophidae",
    "name": "Myctophidae",
    "rank": "family",
    "parentTaxonId": "taxon-myctophiformes",
    "parentId": "taxon-myctophiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gill, 1893",
    "commonNameEn": "Lanternfishes",
    "commonNameBn": "মিক্টোফিডি (লণ্ঠন মাছ)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-myctophum",
    "scientificName": "Myctophum",
    "name": "Myctophum",
    "rank": "genus",
    "parentTaxonId": "taxon-myctophidae",
    "parentId": "taxon-myctophidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Rafinesque, 1810",
    "commonNameEn": "Myctophum",
    "commonNameBn": "মিক্টোফাম",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-lampridae",
    "scientificName": "Lampridae",
    "name": "Lampridae",
    "rank": "family",
    "parentTaxonId": "taxon-lampriformes",
    "parentId": "taxon-lampriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Gill, 1862",
    "commonNameEn": "Opahs",
    "commonNameBn": "ল্যামপ্রিডি (ওপাহ মাছ)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-lampris",
    "scientificName": "Lampris",
    "name": "Lampris",
    "rank": "genus",
    "parentTaxonId": "taxon-lampridae",
    "parentId": "taxon-lampridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Retzius, 1799",
    "commonNameEn": "Lampris",
    "commonNameBn": "ল্যামপ্রিস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-berycidae",
    "scientificName": "Berycidae",
    "name": "Berycidae",
    "rank": "family",
    "parentTaxonId": "taxon-beryciformes",
    "parentId": "taxon-beryciformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Lowe, 1839",
    "commonNameEn": "Alfonsinos",
    "commonNameBn": "বেরিসিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-beryx",
    "scientificName": "Beryx",
    "name": "Beryx",
    "rank": "genus",
    "parentTaxonId": "taxon-berycidae",
    "parentId": "taxon-berycidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Cuvier, 1829",
    "commonNameEn": "Beryx",
    "commonNameBn": "বেরিক্স",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-oxudercidae",
    "scientificName": "Oxudercidae",
    "name": "Oxudercidae",
    "rank": "family",
    "parentTaxonId": "taxon-gobiiformes",
    "parentId": "taxon-gobiiformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Günther, 1861",
    "commonNameEn": "Mudskippers & Gobies",
    "commonNameBn": "অক্সুডার্সিডি (ডাহুক ও বেলে মাছ)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-periophthalmodon",
    "scientificName": "Periophthalmodon",
    "name": "Periophthalmodon",
    "rank": "genus",
    "parentTaxonId": "taxon-oxudercidae",
    "parentId": "taxon-oxudercidae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bleeker, 1874",
    "commonNameEn": "Giant Mudskippers",
    "commonNameBn": "পেরিওপথ্যালমোডন",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-acanthuridae",
    "scientificName": "Acanthuridae",
    "name": "Acanthuridae",
    "rank": "family",
    "parentTaxonId": "taxon-acanthuriformes",
    "parentId": "taxon-acanthuriformes",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Bonaparte, 1835",
    "commonNameEn": "Surgeonfishes & Tangs",
    "commonNameBn": "অ্যাকান্থুরিডি (সার্জনফিশ)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-acanthurus",
    "scientificName": "Acanthurus",
    "name": "Acanthurus",
    "rank": "genus",
    "parentTaxonId": "taxon-acanthuridae",
    "parentId": "taxon-acanthuridae",
    "status": "accepted",
    "module": "fish",
    "authorYear": "Forsskål, 1775",
    "commonNameEn": "Acanthurus",
    "commonNameBn": "অ্যাকান্থুরাস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Eschmeyer's Catalog of Fishes",
        "citation": "CAS, 2026."
      }
    ]
  },
  {
    "id": "taxon-anura",
    "scientificName": "Anura",
    "name": "Anura",
    "rank": "order",
    "parentTaxonId": "taxon-amphibia",
    "parentId": "taxon-amphibia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fischer von Waldheim, 1813",
    "commonNameEn": "Frogs & Toads",
    "commonNameBn": "ব্যাঙ",
    "banglaName": "ব্যাঙ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-bufonidae",
    "scientificName": "Bufonidae",
    "name": "Bufonidae",
    "rank": "family",
    "parentTaxonId": "taxon-anura",
    "parentId": "taxon-anura",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1825",
    "commonNameEn": "True Toads",
    "commonNameBn": "কুনোব্যাঙ পরিবার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-bufo",
    "scientificName": "Bufo",
    "name": "Bufo",
    "rank": "genus",
    "parentTaxonId": "taxon-bufonidae",
    "parentId": "taxon-bufonidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Garsault, 1764",
    "commonNameEn": "Bufo",
    "commonNameBn": "বুফো",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-dicroglossidae",
    "scientificName": "Dicroglossidae",
    "name": "Dicroglossidae",
    "rank": "family",
    "parentTaxonId": "taxon-anura",
    "parentId": "taxon-anura",
    "status": "accepted",
    "module": "general",
    "authorYear": "Anderson, 1871",
    "commonNameEn": "Fork-tongued Frogs",
    "commonNameBn": "ডাইক্রোগ্লসিডি (কোলাব্যাঙ পরিবার)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-hoplobatrachus",
    "scientificName": "Hoplobatrachus",
    "name": "Hoplobatrachus",
    "rank": "genus",
    "parentTaxonId": "taxon-dicroglossidae",
    "parentId": "taxon-dicroglossidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fitzinger, 1843",
    "commonNameEn": "Bullfrogs",
    "commonNameBn": "হপ্লোব্যাট্রাকাস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-caudata",
    "scientificName": "Caudata",
    "name": "Caudata",
    "rank": "order",
    "parentTaxonId": "taxon-amphibia",
    "parentId": "taxon-amphibia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fischer von Waldheim, 1813",
    "commonNameEn": "Salamanders & Newts",
    "commonNameBn": "স্যালামান্ডার",
    "banglaName": "স্যালামান্ডার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-salamandridae",
    "scientificName": "Salamandridae",
    "name": "Salamandridae",
    "rank": "family",
    "parentTaxonId": "taxon-caudata",
    "parentId": "taxon-caudata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Goldfuss, 1820",
    "commonNameEn": "True Salamanders & Newts",
    "commonNameBn": "স্যালামান্ড্রিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-salamandra",
    "scientificName": "Salamandra",
    "name": "Salamandra",
    "rank": "genus",
    "parentTaxonId": "taxon-salamandridae",
    "parentId": "taxon-salamandridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Garsault, 1764",
    "commonNameEn": "Salamandra",
    "commonNameBn": "স্যালামান্ড্রা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-gymnophiona",
    "scientificName": "Gymnophiona",
    "name": "Gymnophiona",
    "rank": "order",
    "parentTaxonId": "taxon-amphibia",
    "parentId": "taxon-amphibia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Müller, 1832",
    "commonNameEn": "Caecilians",
    "commonNameBn": "সিসিলিয়ান / অন্ধ উভচর",
    "banglaName": "সিসিলিয়ান",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-ichthyophiidae",
    "scientificName": "Ichthyophiidae",
    "name": "Ichthyophiidae",
    "rank": "family",
    "parentTaxonId": "taxon-gymnophiona",
    "parentId": "taxon-gymnophiona",
    "status": "accepted",
    "module": "general",
    "authorYear": "Taylor, 1968",
    "commonNameEn": "Asian Tailed Caecilians",
    "commonNameBn": "ইকথায়োফিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-ichthyophis",
    "scientificName": "Ichthyophis",
    "name": "Ichthyophis",
    "rank": "genus",
    "parentTaxonId": "taxon-ichthyophiidae",
    "parentId": "taxon-ichthyophiidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fitzinger, 1826",
    "commonNameEn": "Ichthyophis",
    "commonNameBn": "ইকথায়োফিস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  },
  {
    "id": "taxon-testudinidae",
    "scientificName": "Testudinidae",
    "name": "Testudinidae",
    "rank": "family",
    "parentTaxonId": "taxon-testudines",
    "parentId": "taxon-testudines",
    "status": "accepted",
    "module": "general",
    "authorYear": "Batsch, 1788",
    "commonNameEn": "Tortoises",
    "commonNameBn": "স্থলজ কচ্ছপ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "Uetz et al., 2026."
      }
    ]
  },
  {
    "id": "taxon-chelonoidis",
    "scientificName": "Chelonoidis",
    "name": "Chelonoidis",
    "rank": "genus",
    "parentTaxonId": "taxon-testudinidae",
    "parentId": "taxon-testudinidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fitzinger, 1835",
    "commonNameEn": "South American Tortoises",
    "commonNameBn": "কিলোনয়ডিস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "Uetz et al., 2026."
      }
    ]
  },
  {
    "id": "taxon-varanidae",
    "scientificName": "Varanidae",
    "name": "Varanidae",
    "rank": "family",
    "parentTaxonId": "taxon-squamata",
    "parentId": "taxon-squamata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Merrem, 1820",
    "commonNameEn": "Monitor Lizards",
    "commonNameBn": "গোসাপ পরিবার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "Uetz et al., 2026."
      }
    ]
  },
  {
    "id": "taxon-varanus",
    "scientificName": "Varanus",
    "name": "Varanus",
    "rank": "genus",
    "parentTaxonId": "taxon-varanidae",
    "parentId": "taxon-varanidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Merrem, 1820",
    "commonNameEn": "Monitors",
    "commonNameBn": "ভ্যারানাস (গোসাপ)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "Uetz et al., 2026."
      }
    ]
  },
  {
    "id": "taxon-ophiophagus",
    "scientificName": "Ophiophagus",
    "name": "Ophiophagus",
    "rank": "genus",
    "parentTaxonId": "taxon-elapidae",
    "parentId": "taxon-elapidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Günther, 1864",
    "commonNameEn": "King Cobras",
    "commonNameBn": "শঙ্খচূড় / রাজ গোখরা",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "Uetz et al., 2026."
      }
    ]
  },
  {
    "id": "taxon-rhynchocephalia",
    "scientificName": "Rhynchocephalia",
    "name": "Rhynchocephalia",
    "rank": "order",
    "parentTaxonId": "taxon-reptilia",
    "parentId": "taxon-reptilia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Günther, 1867",
    "commonNameEn": "Tuatara Order",
    "commonNameBn": "রিঙ্কোসেফালিয়া",
    "banglaName": "রিঙ্কোসেফালিয়া",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "Uetz et al., 2026."
      }
    ]
  },
  {
    "id": "taxon-crocodylia",
    "scientificName": "Crocodylia",
    "name": "Crocodylia",
    "rank": "order",
    "parentTaxonId": "taxon-reptilia",
    "parentId": "taxon-reptilia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Owen, 1842",
    "commonNameEn": "Crocodilians (Crocodiles, Alligators & Caimans)",
    "commonNameBn": "কুমির বর্গ (ক্রোকোডিলিয়া)",
    "banglaName": "কুমির বর্গ",
    "description": "Large, predatory, semi-aquatic archosaurian reptiles characterized by thecodont teeth in bony sockets, a complete secondary palate, four-chambered heart, and dorsal osteoderms.",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "ref-reptile-database-2026"
      }
    ]
  },
  {
    "id": "taxon-sphenodontidae",
    "scientificName": "Sphenodontidae",
    "name": "Sphenodontidae",
    "rank": "family",
    "parentTaxonId": "taxon-rhynchocephalia",
    "parentId": "taxon-rhynchocephalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cope, 1869",
    "commonNameEn": "Tuatara Family",
    "commonNameBn": "স্ফেনোডন্টিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "Uetz et al., 2026."
      }
    ]
  },
  {
    "id": "taxon-sphenodon",
    "scientificName": "Sphenodon",
    "name": "Sphenodon",
    "rank": "genus",
    "parentTaxonId": "taxon-sphenodontidae",
    "parentId": "taxon-sphenodontidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1831",
    "commonNameEn": "Sphenodon",
    "commonNameBn": "স্ফেনোডন",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "The Reptile Database",
        "citation": "Uetz et al., 2026."
      }
    ]
  },
  {
    "id": "taxon-struthioniformes",
    "scientificName": "Struthioniformes",
    "name": "Struthioniformes",
    "rank": "order",
    "parentTaxonId": "taxon-aves",
    "parentId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latham, 1790",
    "commonNameEn": "Ostriches & Allies",
    "commonNameBn": "উটপাখি বর্গ",
    "banglaName": "উটপাখি বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-struthionidae",
    "scientificName": "Struthionidae",
    "name": "Struthionidae",
    "rank": "family",
    "parentTaxonId": "taxon-struthioniformes",
    "parentId": "taxon-struthioniformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Vigors, 1825",
    "commonNameEn": "Ostrich Family",
    "commonNameBn": "স্ট্রুথিওনিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-struthio",
    "scientificName": "Struthio",
    "name": "Struthio",
    "rank": "genus",
    "parentTaxonId": "taxon-struthionidae",
    "parentId": "taxon-struthionidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Ostriches",
    "commonNameBn": "স্ট্রুথিও (উটপাখি)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-sphenisciformes",
    "scientificName": "Sphenisciformes",
    "name": "Sphenisciformes",
    "rank": "order",
    "parentTaxonId": "taxon-aves",
    "parentId": "taxon-aves",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Sharpe, 1891",
    "commonNameEn": "Penguins",
    "commonNameBn": "পেঙ্গুইন বর্গ",
    "banglaName": "পেঙ্গুইন বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-spheniscidae",
    "scientificName": "Spheniscidae",
    "name": "Spheniscidae",
    "rank": "family",
    "parentTaxonId": "taxon-sphenisciformes",
    "parentId": "taxon-sphenisciformes",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Bonaparte, 1831",
    "commonNameEn": "Penguin Family",
    "commonNameBn": "স্ফেনিসিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-aptenodytes",
    "scientificName": "Aptenodytes",
    "name": "Aptenodytes",
    "rank": "genus",
    "parentTaxonId": "taxon-spheniscidae",
    "parentId": "taxon-spheniscidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Miller, 1778",
    "commonNameEn": "Great Penguins",
    "commonNameBn": "অ্যাপটেনোডাইটস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-accipitriformes",
    "scientificName": "Accipitriformes",
    "name": "Accipitriformes",
    "rank": "order",
    "parentTaxonId": "taxon-aves",
    "parentId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Vieillot, 1816",
    "commonNameEn": "Eagles, Hawks & Vultures",
    "commonNameBn": "ঈগল ও বাজপাখি বর্গ",
    "banglaName": "ঈগল ও বাজপাখি বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-accipitridae",
    "scientificName": "Accipitridae",
    "name": "Accipitridae",
    "rank": "family",
    "parentTaxonId": "taxon-accipitriformes",
    "parentId": "taxon-accipitriformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Vigors, 1824",
    "commonNameEn": "Eagle & Hawk Family",
    "commonNameBn": "অ্যাক্সিপিট্রিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-haliaeetus",
    "scientificName": "Haliaeetus",
    "name": "Haliaeetus",
    "rank": "genus",
    "parentTaxonId": "taxon-accipitridae",
    "parentId": "taxon-accipitridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Savigny, 1809",
    "commonNameEn": "Sea Eagles",
    "commonNameBn": "হ্যালিয়াটাস (সাগর ঈগল)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-coraciiformes",
    "scientificName": "Coraciiformes",
    "name": "Coraciiformes",
    "rank": "order",
    "parentTaxonId": "taxon-aves",
    "parentId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Forbes, 1884",
    "commonNameEn": "Kingfishers & Rollers",
    "commonNameBn": "মাছরাঙা বর্গ",
    "banglaName": "মাছরাঙা বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-alcedinidae",
    "scientificName": "Alcedinidae",
    "name": "Alcedinidae",
    "rank": "family",
    "parentTaxonId": "taxon-coraciiformes",
    "parentId": "taxon-coraciiformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Kingfisher Family",
    "commonNameBn": "অ্যালসেডিনিডি (মাছরাঙা পরিবার)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-alcedo",
    "scientificName": "Alcedo",
    "name": "Alcedo",
    "rank": "genus",
    "parentTaxonId": "taxon-alcedinidae",
    "parentId": "taxon-alcedinidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "River Kingfishers",
    "commonNameBn": "অ্যালসেডো",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-passeriformes",
    "scientificName": "Passeriformes",
    "name": "Passeriformes",
    "rank": "order",
    "parentTaxonId": "taxon-aves",
    "parentId": "taxon-aves",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Perching Birds / Passerines",
    "commonNameBn": "প্যাসারিন / ডালপালাবাসী পাখি",
    "banglaName": "প্যাসারিন",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-muscicapidae",
    "scientificName": "Muscicapidae",
    "name": "Muscicapidae",
    "rank": "family",
    "parentTaxonId": "taxon-passeriformes",
    "parentId": "taxon-passeriformes",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fleming, 1822",
    "commonNameEn": "Old World Flycatchers & Chats",
    "commonNameBn": "মাস্কিকাপিডি (চুটকি ও রবিন পরিবার)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-copsychus",
    "scientificName": "Copsychus",
    "name": "Copsychus",
    "rank": "genus",
    "parentTaxonId": "taxon-muscicapidae",
    "parentId": "taxon-muscicapidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Wagler, 1827",
    "commonNameEn": "Magpie-Robins",
    "commonNameBn": "কপসিকাস (দোয়েল)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "IOC World Bird List",
        "citation": "IOC, 2026."
      }
    ]
  },
  {
    "id": "taxon-monotremata",
    "scientificName": "Monotremata",
    "name": "Monotremata",
    "rank": "order",
    "parentTaxonId": "taxon-mammalia",
    "parentId": "taxon-mammalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Bonaparte, 1837",
    "commonNameEn": "Egg-laying Mammals",
    "commonNameBn": "মনোট্রিমস (ডিমপ্রসবী স্তন্যপায়ী)",
    "banglaName": "মনোট্রিমস",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-ornithorhynchidae",
    "scientificName": "Ornithorhynchidae",
    "name": "Ornithorhynchidae",
    "rank": "family",
    "parentTaxonId": "taxon-monotremata",
    "parentId": "taxon-monotremata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1825",
    "commonNameEn": "Platypus Family",
    "commonNameBn": "অর্নিথোরিঙ্কিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-ornithorhynchus",
    "scientificName": "Ornithorhynchus",
    "name": "Ornithorhynchus",
    "rank": "genus",
    "parentTaxonId": "taxon-ornithorhynchidae",
    "parentId": "taxon-ornithorhynchidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Blumenbach, 1800",
    "commonNameEn": "Platypuses",
    "commonNameBn": "অর্নিথোরিঙ্কাস (প্লাটিপাস)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-diprotodontia",
    "scientificName": "Diprotodontia",
    "name": "Diprotodontia",
    "rank": "order",
    "parentTaxonId": "taxon-mammalia",
    "parentId": "taxon-mammalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Owen, 1866",
    "commonNameEn": "Kangaroos, Possums & Koalas",
    "commonNameBn": "ডাইপ্রোটোডনশিয়া (মারসুপিয়াল)",
    "banglaName": "ডাইপ্রোটোডনশিয়া",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-macropodidae",
    "scientificName": "Macropodidae",
    "name": "Macropodidae",
    "rank": "family",
    "parentTaxonId": "taxon-diprotodontia",
    "parentId": "taxon-diprotodontia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1821",
    "commonNameEn": "Kangaroo & Wallaby Family",
    "commonNameBn": "ম্যাক্রোপোডিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-osphranter",
    "scientificName": "Osphranter",
    "name": "Osphranter",
    "rank": "genus",
    "parentTaxonId": "taxon-macropodidae",
    "parentId": "taxon-macropodidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gould, 1842",
    "commonNameEn": "Red Kangaroos & Wallaroos",
    "commonNameBn": "অস্ফ্র্যান্টার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-chiroptera",
    "scientificName": "Chiroptera",
    "name": "Chiroptera",
    "rank": "order",
    "parentTaxonId": "taxon-mammalia",
    "parentId": "taxon-mammalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Blumenbach, 1779",
    "commonNameEn": "Bats",
    "commonNameBn": "বাদুড় বর্গ",
    "banglaName": "বাদুড় বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-pteropodidae",
    "scientificName": "Pteropodidae",
    "name": "Pteropodidae",
    "rank": "family",
    "parentTaxonId": "taxon-chiroptera",
    "parentId": "taxon-chiroptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1821",
    "commonNameEn": "Fruit Bats & Flying Foxes",
    "commonNameBn": "টেরোপোডিডি (ফলভোজী বাদুড়)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-pteropus",
    "scientificName": "Pteropus",
    "name": "Pteropus",
    "rank": "genus",
    "parentTaxonId": "taxon-pteropodidae",
    "parentId": "taxon-pteropodidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Erxleben, 1777",
    "commonNameEn": "Flying Foxes",
    "commonNameBn": "টেরোপাস (বড় বাদুড়)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-primates",
    "scientificName": "Primates",
    "name": "Primates",
    "rank": "order",
    "parentTaxonId": "taxon-mammalia",
    "parentId": "taxon-mammalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Primates (Apes, Monkeys, Lemurs)",
    "commonNameBn": "প্রাইমেট বর্গ",
    "banglaName": "প্রাইমেট বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-hominidae",
    "scientificName": "Hominidae",
    "name": "Hominidae",
    "rank": "family",
    "parentTaxonId": "taxon-primates",
    "parentId": "taxon-primates",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1825",
    "commonNameEn": "Great Apes",
    "commonNameBn": "হোমিনিডি (বৃহৎ বনমানুষ ও মানুষ)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-pan",
    "scientificName": "Pan",
    "name": "Pan",
    "rank": "genus",
    "parentTaxonId": "taxon-hominidae",
    "parentId": "taxon-hominidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Oken, 1816",
    "commonNameEn": "Chimpanzees",
    "commonNameBn": "প্যান (শিম্পাঞ্জি)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-rodentia",
    "scientificName": "Rodentia",
    "name": "Rodentia",
    "rank": "order",
    "parentTaxonId": "taxon-mammalia",
    "parentId": "taxon-mammalia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Bowdich, 1821",
    "commonNameEn": "Rodents",
    "commonNameBn": "কৃন্তন প্রাণী / ইঁদুর বর্গ",
    "banglaName": "ইঁদুর বর্গ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-caviidae",
    "scientificName": "Caviidae",
    "name": "Caviidae",
    "rank": "family",
    "parentTaxonId": "taxon-rodentia",
    "parentId": "taxon-rodentia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fischer von Waldheim, 1817",
    "commonNameEn": "Cavies & Capybaras",
    "commonNameBn": "ক্যাভিডি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-hydrochoerus",
    "scientificName": "Hydrochoerus",
    "name": "Hydrochoerus",
    "rank": "genus",
    "parentTaxonId": "taxon-caviidae",
    "parentId": "taxon-caviidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Brisson, 1762",
    "commonNameEn": "Capybaras",
    "commonNameBn": "হাইড্রোচোরাস (ক্যাপিবারা)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-felidae",
    "scientificName": "Felidae",
    "name": "Felidae",
    "rank": "family",
    "parentTaxonId": "taxon-carnivora",
    "parentId": "taxon-carnivora",
    "status": "accepted",
    "module": "general",
    "authorYear": "Fischer von Waldheim, 1817",
    "commonNameEn": "Cats and Big Cats",
    "commonNameBn": "বিড়াল ও মার্জার পরিবার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-panthera",
    "scientificName": "Panthera",
    "name": "Panthera",
    "rank": "genus",
    "parentTaxonId": "taxon-felidae",
    "parentId": "taxon-felidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Oken, 1816",
    "commonNameEn": "Roaring Cats",
    "commonNameBn": "প্যানথেরা (বাঘ-সিংহ গণ)",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "Mammal Diversity Database",
        "citation": "ASM, 2026."
      }
    ]
  },
  {
    "id": "taxon-penaeidae",
    "scientificName": "Penaeidae",
    "name": "Penaeidae",
    "rank": "family",
    "parentTaxonId": "taxon-decapoda",
    "parentId": "taxon-decapoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Penaeid Shrimps & Tiger Prawns",
    "commonNameBn": "পেনেইড চিংড়ি পরিবার",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-penaeus",
    "scientificName": "Penaeus",
    "name": "Penaeus",
    "rank": "genus",
    "parentTaxonId": "taxon-penaeidae",
    "parentId": "taxon-penaeidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Fabricius, 1798",
    "commonNameEn": "Tiger Prawns",
    "commonNameBn": "পেনিয়াস চিংড়ি",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "World Register of Marine Species",
        "citation": "WoRMS, 2026."
      }
    ]
  },
  {
    "id": "taxon-duttaphrynus",
    "scientificName": "Duttaphrynus",
    "name": "Duttaphrynus",
    "rank": "genus",
    "parentTaxonId": "taxon-bufonidae",
    "parentId": "taxon-bufonidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Frost et al., 2006",
    "commonNameEn": "Asian Toads",
    "commonNameBn": "কুনোব্যাঙ",
    "isVerified": true,
    "sourceReferences": [
      {
        "source": "AmphibiaWeb",
        "citation": "AmphibiaWeb, 2026."
      }
    ]
  }
,
  {
    "id": "taxon-megascolecidae",
    "scientificName": "Megascolecidae",
    "name": "Megascolecidae",
    "rank": "family",
    "parentTaxonId": "taxon-clitellata",
    "parentId": "taxon-clitellata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rosa, 1891",
    "commonNameEn": "Megascolecid earthworms",
    "commonNameBn": "মেগাস্কোলেসিড কেঁচো পরিবার",
    "description": "Major family of terrestrial earthworms predominantly native to South, Southeast, and East Asia, Australasia, and the Indo-Pacific.",
    "isVerified": true
  },
  {
    "id": "taxon-metaphire",
    "scientificName": "Metaphire",
    "name": "Metaphire",
    "rank": "genus",
    "parentTaxonId": "taxon-megascolecidae",
    "parentId": "taxon-megascolecidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Sims & Easton, 1972",
    "commonNameEn": "Asian earthworms",
    "commonNameBn": "মেটাফায়ার কেঁচো গণ",
    "description": "Genus of terrestrial earthworms containing Metaphire posthuma, the primary textbook earthworm studied and dissected in Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-perionyx",
    "scientificName": "Perionyx",
    "name": "Perionyx",
    "rank": "genus",
    "parentTaxonId": "taxon-megascolecidae",
    "parentId": "taxon-megascolecidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Perrier, 1872",
    "commonNameEn": "Blue worms",
    "commonNameBn": "পেরিয়োনিক্স কেঁচো গণ",
    "description": "Genus of epigeic tropical earthworms including Perionyx excavatus, extensively cultivated for organic vermicomposting in Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-hirudinariidae",
    "scientificName": "Hirudinariidae",
    "name": "Hirudinariidae",
    "rank": "family",
    "parentTaxonId": "taxon-clitellata",
    "parentId": "taxon-clitellata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Whitman, 1886",
    "commonNameEn": "Asian sanguivorous leeches",
    "commonNameBn": "হিরুডিনারিয়া জোঁক পরিবার",
    "description": "Family of jawed blood-feeding leeches native to the Oriental realm, including the textbook Indian cattle leech.",
    "isVerified": true
  },
  {
    "id": "taxon-hirudinaria",
    "scientificName": "Hirudinaria",
    "name": "Hirudinaria",
    "rank": "genus",
    "parentTaxonId": "taxon-hirudinariidae",
    "parentId": "taxon-hirudinariidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Whitman, 1886",
    "commonNameEn": "Cattle leeches",
    "commonNameBn": "হিরুডিনারিয়া গণ",
    "description": "Genus of freshwater sanguivorous leeches containing Hirudinaria granulosa, widely distributed in Bangladesh marshes, ponds, and paddy fields.",
    "isVerified": true
  },
  {
    "id": "taxon-namalycastis",
    "scientificName": "Namalycastis",
    "name": "Namalycastis",
    "rank": "genus",
    "parentTaxonId": "taxon-nereididae",
    "parentId": "taxon-nereididae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Hartman, 1959",
    "commonNameEn": "Estuarine nereid worms",
    "commonNameBn": "মোহনা নেরেইড পলিকিট গণ",
    "description": "Genus of brackish and freshwater nereidid polychaetes abundant in the mangrove mudflats of the Sundarbans and coastal delta estuaries.",
    "isVerified": true
  },
  {
    "id": "taxon-ampullariidae",
    "scientificName": "Ampullariidae",
    "name": "Ampullariidae",
    "rank": "family",
    "parentTaxonId": "taxon-gastropoda",
    "parentId": "taxon-gastropoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1824",
    "commonNameEn": "Apple snails",
    "commonNameBn": "আপেল শামুক পরিবার",
    "description": "Family of large freshwater operculate snails adapted to tropical floodplains with both a gill and a pulmonary lung.",
    "isVerified": true
  },
  {
    "id": "taxon-pila",
    "scientificName": "Pila",
    "name": "Pila",
    "rank": "genus",
    "parentTaxonId": "taxon-ampullariidae",
    "parentId": "taxon-ampullariidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Röding, 1798",
    "commonNameEn": "Old World apple snails",
    "commonNameBn": "পাইলা শামুক গণ",
    "description": "Genus of freshwater ampullariid snails containing Pila globosa, the primary textbook gastropod dissected in Bangladesh zoology syllabi.",
    "isVerified": true
  },
  {
    "id": "taxon-viviparidae",
    "scientificName": "Viviparidae",
    "name": "Viviparidae",
    "rank": "family",
    "parentTaxonId": "taxon-gastropoda",
    "parentId": "taxon-gastropoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1847",
    "commonNameEn": "River snails, mystery snails",
    "commonNameBn": "ভিভিপ্যারিডি শামুক পরিবার",
    "description": "Family of operculate freshwater snails characterized by ovoviviparity and broad global distribution.",
    "isVerified": true
  },
  {
    "id": "taxon-bellamya",
    "scientificName": "Bellamya",
    "name": "Bellamya",
    "rank": "genus",
    "parentTaxonId": "taxon-viviparidae",
    "parentId": "taxon-viviparidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Jousseaume, 1886",
    "commonNameEn": "Swamp snails",
    "commonNameBn": "বেলাআমিয়া গণ",
    "description": "Genus of freshwater snails containing Bellamya bengalensis, an ecologically and culturally prominent species across Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-unionidae",
    "scientificName": "Unionidae",
    "name": "Unionidae",
    "rank": "family",
    "parentTaxonId": "taxon-bivalvia",
    "parentId": "taxon-bivalvia",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1820",
    "commonNameEn": "Freshwater river mussels",
    "commonNameBn": "মিঠাপানির ঝিনুক পরিবার",
    "description": "Cosmopolitan family of freshwater unionoid bivalves producing nacre and natural freshwater pearls.",
    "isVerified": true
  },
  {
    "id": "taxon-lamellidens",
    "scientificName": "Lamellidens",
    "name": "Lamellidens",
    "rank": "genus",
    "parentTaxonId": "taxon-unionidae",
    "parentId": "taxon-unionidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Simpson, 1900",
    "commonNameEn": "Indian river mussels",
    "commonNameBn": "লামেলিডেন্স ঝিনুক গণ",
    "description": "South Asian unionid mussel genus containing Lamellidens marginalis, the iconic textbook bivalve dissected in Bangladesh schools and colleges.",
    "isVerified": true
  },
  {
    "id": "taxon-achatinidae",
    "scientificName": "Achatinidae",
    "name": "Achatinidae",
    "rank": "family",
    "parentTaxonId": "taxon-gastropoda",
    "parentId": "taxon-gastropoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Swainson, 1840",
    "commonNameEn": "Giant land snails",
    "commonNameBn": "অ্যাকাটিনিডি স্থলজ শামুক পরিবার",
    "description": "Family of large air-breathing terrestrial pulmonate land snails native to Africa and introduced pantropically.",
    "isVerified": true
  },
  {
    "id": "taxon-achatina",
    "scientificName": "Achatina",
    "name": "Achatina",
    "rank": "genus",
    "parentTaxonId": "taxon-achatinidae",
    "parentId": "taxon-achatinidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Lamarck, 1799",
    "commonNameEn": "Giant African snails",
    "commonNameBn": "অ্যাকাটিনা গণ",
    "description": "Genus of terrestrial pulmonate gastropods containing Achatina fulica (Lissachatina fulica), widely established throughout Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-magallana",
    "scientificName": "Magallana",
    "name": "Magallana",
    "rank": "genus",
    "parentTaxonId": "taxon-ostreidae",
    "parentId": "taxon-ostreidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Salvi & Mariottini, 2016",
    "commonNameEn": "Asian cupped oysters",
    "commonNameBn": "মাগালানা ঝিনুক গণ",
    "description": "Genus of cupped oysters formerly placed in Crassostrea, including the Indian backwater oyster Magallana bilineata.",
    "isVerified": true
  },
  {
    "id": "taxon-uroteuthis",
    "scientificName": "Uroteuthis",
    "name": "Uroteuthis",
    "rank": "genus",
    "parentTaxonId": "taxon-loliginidae",
    "parentId": "taxon-loliginidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rehder, 1945",
    "commonNameEn": "Indo-Pacific inshore squids",
    "commonNameBn": "ইউরোটেন্থিস স্কুইড গণ",
    "description": "Dominant commercial loliginid squid genus inhabiting coastal and neritic waters of the Bay of Bengal.",
    "isVerified": true
  },
  {
    "id": "taxon-sepiella",
    "scientificName": "Sepiella",
    "name": "Sepiella",
    "rank": "genus",
    "parentTaxonId": "taxon-sepiidae",
    "parentId": "taxon-sepiidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1849",
    "commonNameEn": "Spineless cuttlefishes",
    "commonNameBn": "সেপিয়েলা কাটলফিশ গণ",
    "description": "Genus of cuttlefishes lacking a posterior spine on the cuttlebone, represented by Sepiella inermis in the northern Indian Ocean.",
    "isVerified": true
  },
  {
    "id": "taxon-volutidae",
    "scientificName": "Volutidae",
    "name": "Volutidae",
    "rank": "family",
    "parentTaxonId": "taxon-gastropoda",
    "parentId": "taxon-gastropoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Volute sea snails",
    "commonNameBn": "ভলিউট শামুক পরিবার",
    "description": "Family of predatory marine gastropods with large ornamental shells.",
    "isVerified": true
  },
  {
    "id": "taxon-melo",
    "scientificName": "Melo",
    "name": "Melo",
    "rank": "genus",
    "parentTaxonId": "taxon-volutidae",
    "parentId": "taxon-volutidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Broderip, 1826",
    "commonNameEn": "Bailer shells",
    "commonNameBn": "মেলো গণ",
    "description": "Genus of large Indo-Pacific marine gastropods with bulbous bodies, represented by Melo melo in the Bay of Bengal.",
    "isVerified": true
  },
  {
    "id": "taxon-veneridae",
    "scientificName": "Veneridae",
    "name": "Veneridae",
    "rank": "family",
    "parentTaxonId": "taxon-bivalvia",
    "parentId": "taxon-bivalvia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Venus hard clams",
    "commonNameBn": "ভেনাস ক্ল্যাম পরিবার",
    "description": "Major family of burrowing marine bivalves common on coastal beaches and intertidal flats.",
    "isVerified": true
  },
  {
    "id": "taxon-meretrix",
    "scientificName": "Meretrix",
    "name": "Meretrix",
    "rank": "genus",
    "parentTaxonId": "taxon-veneridae",
    "parentId": "taxon-veneridae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Lamarck, 1799",
    "commonNameEn": "Hard clams",
    "commonNameBn": "মেরেট্রিক্স ক্ল্যাম গণ",
    "description": "Genus of commercial Indo-Pacific venerid clams represented by Meretrix meretrix along Cox's Bazar and Sonadia beaches.",
    "isVerified": true
  },
  {
    "id": "taxon-neritidae",
    "scientificName": "Neritidae",
    "name": "Neritidae",
    "rank": "family",
    "parentTaxonId": "taxon-gastropoda",
    "parentId": "taxon-gastropoda",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Nerite snails",
    "commonNameBn": "নেরিটিডি শামুক পরিবার",
    "description": "Family of small to medium-sized operculate snails inhabiting rocky intertidal, brackish mangrove, and freshwater habitats.",
    "isVerified": true
  },
  {
    "id": "taxon-dostia",
    "scientificName": "Dostia",
    "name": "Dostia",
    "rank": "genus",
    "parentTaxonId": "taxon-neritidae",
    "parentId": "taxon-neritidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1842",
    "commonNameEn": "Mangrove nerites",
    "commonNameBn": "দস্তিয়া মোহনা শামুক গণ",
    "description": "Genus of brackish water neritids common on pneumatophores and mudflats of the Sundarbans mangrove forest.",
    "isVerified": true
  },
  {
    "id": "taxon-palaemonidae",
    "scientificName": "Palaemonidae",
    "name": "Palaemonidae",
    "rank": "family",
    "parentTaxonId": "taxon-decapoda",
    "parentId": "taxon-decapoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rafinesque, 1815",
    "commonNameEn": "Palaemonid river prawns",
    "commonNameBn": "প্যালিওমনিডি চিংড়ি পরিবার",
    "description": "Major family of decapod crustaceans comprising freshwater and marine prawns with enlarged second pereiopods.",
    "isVerified": true
  },
  {
    "id": "taxon-macrobrachium",
    "scientificName": "Macrobrachium",
    "name": "Macrobrachium",
    "rank": "genus",
    "parentTaxonId": "taxon-palaemonidae",
    "parentId": "taxon-palaemonidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Spence Bate, 1868",
    "commonNameEn": "Long-armed freshwater prawns",
    "commonNameBn": "ম্যাক্রোব্রাকিয়াম গলদা চিংড়ি গণ",
    "description": "Genus of freshwater and estuarine prawns containing Macrobrachium rosenbergii (Golda chingri), premier commercial aquaculture species in Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-gecarcinucidae",
    "scientificName": "Gecarcinucidae",
    "name": "Gecarcinucidae",
    "rank": "family",
    "parentTaxonId": "taxon-decapoda",
    "parentId": "taxon-decapoda",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rathbun, 1904",
    "commonNameEn": "Asian freshwater crabs",
    "commonNameBn": "মিঠাপানির কাঁকড়া পরিবার",
    "description": "Family of primary freshwater true crabs restricted to the Asian tropical and subtropical realms.",
    "isVerified": true
  },
  {
    "id": "taxon-sartoriana",
    "scientificName": "Sartoriana",
    "name": "Sartoriana",
    "rank": "genus",
    "parentTaxonId": "taxon-gecarcinucidae",
    "parentId": "taxon-gecarcinucidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Bott, 1969",
    "commonNameEn": "South Asian freshwater field crabs",
    "commonNameBn": "সার্টোরিয়ানা দেশি কাঁকড়া গণ",
    "description": "Genus of freshwater field crabs containing Sartoriana spinigera (Paratelphusa spinigera), common in Bangladesh rice paddies and ponds.",
    "isVerified": true
  },
  {
    "id": "taxon-muscidae",
    "scientificName": "Muscidae",
    "name": "Muscidae",
    "rank": "family",
    "parentTaxonId": "taxon-diptera",
    "parentId": "taxon-diptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Houseflies and stable flies",
    "commonNameBn": "মাস্কিডি মাছি পরিবার",
    "description": "Family of calyptrate cyclorrhaphan flies including cosmopolitan synanthropic species.",
    "isVerified": true
  },
  {
    "id": "taxon-musca",
    "scientificName": "Musca",
    "name": "Musca",
    "rank": "genus",
    "parentTaxonId": "taxon-muscidae",
    "parentId": "taxon-muscidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Housefly genus",
    "commonNameBn": "মাস্কা মাছি গণ",
    "description": "Genus containing Musca domestica, the common housefly and fundamental textbook insect studied worldwide.",
    "isVerified": true
  },
  {
    "id": "taxon-culex",
    "scientificName": "Culex",
    "name": "Culex",
    "rank": "genus",
    "parentTaxonId": "taxon-culicidae",
    "parentId": "taxon-culicidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Culex mosquitoes",
    "commonNameBn": "কিউলেক্স মশা গণ",
    "description": "Genus of culicine mosquitoes containing Culex quinquefasciatus, primary vector of lymphatic filariasis in South Asia.",
    "isVerified": true
  },
  {
    "id": "taxon-anopheles",
    "scientificName": "Anopheles",
    "name": "Anopheles",
    "rank": "genus",
    "parentTaxonId": "taxon-culicidae",
    "parentId": "taxon-culicidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Meigen, 1818",
    "commonNameEn": "Malaria mosquitoes",
    "commonNameBn": "অ্যানোফিলিস মশা গণ",
    "description": "Genus of mosquitoes containing vectors of human malaria parasites, characterized by resting posture at 45-degree angle.",
    "isVerified": true
  },
  {
    "id": "taxon-orthoptera",
    "scientificName": "Orthoptera",
    "name": "Orthoptera",
    "rank": "order",
    "parentTaxonId": "taxon-insecta",
    "parentId": "taxon-insecta",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1793",
    "commonNameEn": "Grasshoppers, crickets, and locusts",
    "commonNameBn": "অর্থোপ্টেরা পতঙ্গ বর্গ",
    "description": "Order of hemimetabolous insects with saltatorial hind legs, chewing mouthparts, and leathery forewings (tegmina).",
    "isVerified": true
  },
  {
    "id": "taxon-acrididae",
    "scientificName": "Acrididae",
    "name": "Acrididae",
    "rank": "family",
    "parentTaxonId": "taxon-orthoptera",
    "parentId": "taxon-orthoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "MacLeay, 1821",
    "commonNameEn": "Short-horned grasshoppers and locusts",
    "commonNameBn": "অ্যাক্রিডিডি ফড়িং ও পঙ্গপাল পরিবার",
    "description": "Dominant family of grasshoppers with short antennae and tympanal organs on first abdominal segment.",
    "isVerified": true
  },
  {
    "id": "taxon-schistocerca",
    "scientificName": "Schistocerca",
    "name": "Schistocerca",
    "rank": "genus",
    "parentTaxonId": "taxon-acrididae",
    "parentId": "taxon-acrididae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Stål, 1873",
    "commonNameEn": "Locust genus",
    "commonNameBn": "সিস্টোসার্কা পঙ্গপাল গণ",
    "description": "Genus containing Schistocerca gregaria, the desert locust, a textbook representative of swarming phase polyphenism.",
    "isVerified": true
  },
  {
    "id": "taxon-gryllidae",
    "scientificName": "Gryllidae",
    "name": "Gryllidae",
    "rank": "family",
    "parentTaxonId": "taxon-orthoptera",
    "parentId": "taxon-orthoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Laicharting, 1781",
    "commonNameEn": "True crickets",
    "commonNameBn": "ঝিঁঝিঁ পোকা পরিবার",
    "description": "Family of ensiferan orthopterans known for stridulatory song production with tegmina.",
    "isVerified": true
  },
  {
    "id": "taxon-gryllus",
    "scientificName": "Gryllus",
    "name": "Gryllus",
    "rank": "genus",
    "parentTaxonId": "taxon-gryllidae",
    "parentId": "taxon-gryllidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "Field crickets",
    "commonNameBn": "গ্রিলাস ঝিঁঝিঁ গণ",
    "description": "Genus of field crickets containing Gryllus bimaculatus, an abundant nocturnal insect in South Asia.",
    "isVerified": true
  },
  {
    "id": "taxon-formicidae",
    "scientificName": "Formicidae",
    "name": "Formicidae",
    "rank": "family",
    "parentTaxonId": "taxon-hymenoptera",
    "parentId": "taxon-hymenoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1809",
    "commonNameEn": "Ants",
    "commonNameBn": "পিঁপড়া পরিবার",
    "description": "Eusocial hymenopteran family with petiolate abdomen, elbowed antennae, and sophisticated caste differentiation.",
    "isVerified": true
  },
  {
    "id": "taxon-camponotus",
    "scientificName": "Camponotus",
    "name": "Camponotus",
    "rank": "genus",
    "parentTaxonId": "taxon-formicidae",
    "parentId": "taxon-formicidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Mayr, 1861",
    "commonNameEn": "Carpenter ants",
    "commonNameBn": "ক্যাম্পোনোটাস পিঁপড়া গণ",
    "description": "Large, globally distributed ant genus containing Camponotus compressus, the common black ant of South Asia.",
    "isVerified": true
  },
  {
    "id": "taxon-oecophylla",
    "scientificName": "Oecophylla",
    "name": "Oecophylla",
    "rank": "genus",
    "parentTaxonId": "taxon-formicidae",
    "parentId": "taxon-formicidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Smith, 1860",
    "commonNameEn": "Weaver ants",
    "commonNameBn": "লাল পিঁপড়া / ডাঁশ পিঁপড়া গণ",
    "description": "Arboreal ant genus known for constructing communal leaf nests bound with larval silk.",
    "isVerified": true
  },
  {
    "id": "taxon-papilionidae",
    "scientificName": "Papilionidae",
    "name": "Papilionidae",
    "rank": "family",
    "parentTaxonId": "taxon-lepidoptera",
    "parentId": "taxon-lepidoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Swallowtail butterflies",
    "commonNameBn": "সোয়ালোটেইল প্রজাপতি পরিবার",
    "description": "Family of large, colorful butterflies featuring osmeterium organs in larvae and hindwing tails in adults.",
    "isVerified": true
  },
  {
    "id": "taxon-papilio",
    "scientificName": "Papilio",
    "name": "Papilio",
    "rank": "genus",
    "parentTaxonId": "taxon-papilionidae",
    "parentId": "taxon-papilionidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "True swallowtails",
    "commonNameBn": "প্যাপিলিও প্রজাপতি গণ",
    "description": "Genus of swallowtails containing Papilio demoleus, the common lime butterfly across South Asia.",
    "isVerified": true
  },
  {
    "id": "taxon-pieridae",
    "scientificName": "Pieridae",
    "name": "Pieridae",
    "rank": "family",
    "parentTaxonId": "taxon-lepidoptera",
    "parentId": "taxon-lepidoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Swainson, 1820",
    "commonNameEn": "Whites and yellows",
    "commonNameBn": "পিয়েরিয়েডি সাদা প্রজাপতি পরিবার",
    "description": "Family of butterflies typically colored white, yellow, or orange with pterin pigments.",
    "isVerified": true
  },
  {
    "id": "taxon-pieris",
    "scientificName": "Pieris",
    "name": "Pieris",
    "rank": "genus",
    "parentTaxonId": "taxon-pieridae",
    "parentId": "taxon-pieridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Schrank, 1801",
    "commonNameEn": "White butterflies",
    "commonNameBn": "পিয়েরিস সাদা প্রজাপতি গণ",
    "description": "Genus of pierid butterflies containing Pieris brassicae, the large white, an important textbook species in insect physiology.",
    "isVerified": true
  },
  {
    "id": "taxon-tenebrionidae",
    "scientificName": "Tenebrionidae",
    "name": "Tenebrionidae",
    "rank": "family",
    "parentTaxonId": "taxon-coleoptera",
    "parentId": "taxon-coleoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1802",
    "commonNameEn": "Darkling beetles",
    "commonNameBn": "টেনেব্রিওনিডি বিটল পরিবার",
    "description": "Large family of beetles with 11-segmented antennae and fused elytral sutures in many species.",
    "isVerified": true
  },
  {
    "id": "taxon-tribolium",
    "scientificName": "Tribolium",
    "name": "Tribolium",
    "rank": "genus",
    "parentTaxonId": "taxon-tenebrionidae",
    "parentId": "taxon-tenebrionidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "MacLeay, 1825",
    "commonNameEn": "Flour beetles",
    "commonNameBn": "ট্রাইবোলিয়াম বিটল গণ",
    "description": "Genus of stored-grain tenebrionid pests containing Tribolium castaneum, a major model organism in genetics.",
    "isVerified": true
  },
  {
    "id": "taxon-coccinellidae",
    "scientificName": "Coccinellidae",
    "name": "Coccinellidae",
    "rank": "family",
    "parentTaxonId": "taxon-coleoptera",
    "parentId": "taxon-coleoptera",
    "status": "accepted",
    "module": "general",
    "authorYear": "Latreille, 1807",
    "commonNameEn": "Ladybird beetles, ladybugs",
    "commonNameBn": "লেডিবার্ড বিটল পরিবার",
    "description": "Family of convex oval beetles important as agricultural predators of aphids and scale insects.",
    "isVerified": true
  },
  {
    "id": "taxon-coccinella",
    "scientificName": "Coccinella",
    "name": "Coccinella",
    "rank": "genus",
    "parentTaxonId": "taxon-coccinellidae",
    "parentId": "taxon-coccinellidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Linnaeus, 1758",
    "commonNameEn": "True ladybirds",
    "commonNameBn": "কক্সিনেলা গণ",
    "description": "Genus of predatory beetles containing Coccinella septempunctata, the seven-spotted ladybird.",
    "isVerified": true
  },
  {
    "id": "taxon-libellulidae",
    "scientificName": "Libellulidae",
    "name": "Libellulidae",
    "rank": "family",
    "parentTaxonId": "taxon-odonata",
    "parentId": "taxon-odonata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Rambur, 1842",
    "commonNameEn": "Skimmers and darters",
    "commonNameBn": "লাইবেলুলিডি ফড়িং পরিবার",
    "description": "The largest family of dragonflies, characterized by unequal wing bases and perched basking habits.",
    "isVerified": true
  },
  {
    "id": "taxon-crocothemis",
    "scientificName": "Crocothemis",
    "name": "Crocothemis",
    "rank": "genus",
    "parentTaxonId": "taxon-libellulidae",
    "parentId": "taxon-libellulidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Brauer, 1868",
    "commonNameEn": "Scarlet skimmers",
    "commonNameBn": "ক্রোকোথেমিস ফড়িং গণ",
    "description": "Genus of brightly colored libellulid dragonflies containing Crocothemis servilia, abundant throughout Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-heterometrus",
    "scientificName": "Heterometrus",
    "name": "Heterometrus",
    "rank": "genus",
    "parentTaxonId": "taxon-scorpionidae",
    "parentId": "taxon-scorpionidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Ehrenberg, 1828",
    "commonNameEn": "Asian giant forest scorpions",
    "commonNameBn": "হেটারোমেট্রাস বন কাঁকড়াবিছা গণ",
    "description": "Genus of large forest scorpions found across South and Southeast Asia, possessing massive chelae.",
    "isVerified": true
  },
  {
    "id": "taxon-araneidae",
    "scientificName": "Araneidae",
    "name": "Araneidae",
    "rank": "family",
    "parentTaxonId": "taxon-araneae",
    "parentId": "taxon-araneae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Clerck, 1757",
    "commonNameEn": "Orb-weaver spiders",
    "commonNameBn": "অরব-ওয়েভার মাকড়সা পরিবার",
    "description": "Family of spiders that build vertical spiral wheel-shaped webs to capture flying insects.",
    "isVerified": true
  },
  {
    "id": "taxon-nephila",
    "scientificName": "Nephila",
    "name": "Nephila",
    "rank": "genus",
    "parentTaxonId": "taxon-araneidae",
    "parentId": "taxon-araneidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Leach, 1815",
    "commonNameEn": "Golden orb-weavers",
    "commonNameBn": "নেফিলা সোনালি মাকড়সা গণ",
    "description": "Genus of large orb-weaving spiders noted for spinning golden silk, represented by Nephila pilipes in Bangladesh forests.",
    "isVerified": true
  },
  {
    "id": "taxon-spongillidae",
    "scientificName": "Spongillidae",
    "name": "Spongillidae",
    "rank": "family",
    "parentTaxonId": "taxon-demospongiae",
    "parentId": "taxon-demospongiae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1867",
    "commonNameEn": "Freshwater sponges",
    "commonNameBn": "মিঠাপানির স্পঞ্জ পরিবার",
    "description": "Family of demosponges adapted to freshwater lakes, rivers, and ponds, producing resistant gemmules.",
    "isVerified": true
  },
  {
    "id": "taxon-spongilla",
    "scientificName": "Spongilla",
    "name": "Spongilla",
    "rank": "genus",
    "parentTaxonId": "taxon-spongillidae",
    "parentId": "taxon-spongillidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Lamarck, 1816",
    "commonNameEn": "Freshwater pond sponges",
    "commonNameBn": "স্পঞ্জিলা গণ",
    "description": "Freshwater sponge genus containing Spongilla lacustris, iconic textbook poriferan harboring endosymbiotic zoochlorellae.",
    "isVerified": true
  },
  {
    "id": "taxon-ephydatia",
    "scientificName": "Ephydatia",
    "name": "Ephydatia",
    "rank": "genus",
    "parentTaxonId": "taxon-spongillidae",
    "parentId": "taxon-spongillidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Lamouroux, 1816",
    "commonNameEn": "River sponges",
    "commonNameBn": "এফাইডাশিয়া গণ",
    "description": "Genus of freshwater sponges with birotulate gemmuloscleres inhabiting rivers and canals across South Asia.",
    "isVerified": true
  },
  {
    "id": "taxon-clionaidae",
    "scientificName": "Clionaidae",
    "name": "Clionaidae",
    "rank": "family",
    "parentTaxonId": "taxon-demospongiae",
    "parentId": "taxon-demospongiae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "D'Orbigny, 1851",
    "commonNameEn": "Boring sponges",
    "commonNameBn": "ছিদ্রকারী স্পঞ্জ পরিবার",
    "description": "Family of marine demosponges that bioerode calcareous coral skeletons and molluscan shells.",
    "isVerified": true
  },
  {
    "id": "taxon-cliona",
    "scientificName": "Cliona",
    "name": "Cliona",
    "rank": "genus",
    "parentTaxonId": "taxon-clionaidae",
    "parentId": "taxon-clionaidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Grant, 1826",
    "commonNameEn": "Red boring sponges",
    "commonNameBn": "ক্লিওনা গণ",
    "description": "Genus of bioeroding sponges containing Cliona celata, prominent on St. Martin's Island coral and rocky substrata.",
    "isVerified": true
  },
  {
    "id": "taxon-poritidae",
    "scientificName": "Poritidae",
    "name": "Poritidae",
    "rank": "family",
    "parentTaxonId": "taxon-scleractinia",
    "parentId": "taxon-scleractinia",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1842",
    "commonNameEn": "Stony finger and boulder corals",
    "commonNameBn": "পোরিটিডি প্রবাল পরিবার",
    "description": "Major family of hermatypic scleractinian corals forming massive mounds and branching colonies in shallow tropical seas.",
    "isVerified": true
  },
  {
    "id": "taxon-porites",
    "scientificName": "Porites",
    "name": "Porites",
    "rank": "genus",
    "parentTaxonId": "taxon-poritidae",
    "parentId": "taxon-poritidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Link, 1807",
    "commonNameEn": "Boulder corals",
    "commonNameBn": "পোরিটিস প্রবাল গণ",
    "description": "Dominant hermatypic coral genus at St. Martin's Island, represented by the massive Porites lutea.",
    "isVerified": true
  },
  {
    "id": "taxon-catostylidae",
    "scientificName": "Catostylidae",
    "name": "Catostylidae",
    "rank": "family",
    "parentTaxonId": "taxon-scyphozoa",
    "parentId": "taxon-scyphozoa",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gegenbaur, 1857",
    "commonNameEn": "Blubber jellyfishes",
    "commonNameBn": "ব্ল্যাবার জেলিফিশ পরিবার",
    "description": "Family of rhizostome scyphozoans characterized by thick, muscular bells and branching oral arms lacking marginal tentacles.",
    "isVerified": true
  },
  {
    "id": "taxon-catostylus",
    "scientificName": "Catostylus",
    "name": "Catostylus",
    "rank": "genus",
    "parentTaxonId": "taxon-catostylidae",
    "parentId": "taxon-catostylidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "L. Agassiz, 1862",
    "commonNameEn": "Estuarine blubber jellies",
    "commonNameBn": "ক্যাটোস্টাইলাস জেলিফিশ গণ",
    "description": "Genus of rhizostome jellyfishes abundant in coastal estuaries, mangrove creeks of the Sundarbans, and the Bay of Bengal.",
    "isVerified": true
  },
  {
    "id": "taxon-astropectinidae",
    "scientificName": "Astropectinidae",
    "name": "Astropectinidae",
    "rank": "family",
    "parentTaxonId": "taxon-asteroidea",
    "parentId": "taxon-asteroidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1840",
    "commonNameEn": "Sand sea stars, comb stars",
    "commonNameBn": "অ্যাস্ট্রোপেকটিনিডি তারা মাছ পরিবার",
    "description": "Family of paxillosid sea stars specialized for burrowing into soft sandy and muddy benthic substrates.",
    "isVerified": true
  },
  {
    "id": "taxon-astropecten",
    "scientificName": "Astropecten",
    "name": "Astropecten",
    "rank": "genus",
    "parentTaxonId": "taxon-astropectinidae",
    "parentId": "taxon-astropectinidae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1840",
    "commonNameEn": "Sand stars",
    "commonNameBn": "অ্যাস্ট্রোপেকটেন তারা মাছ গণ",
    "description": "Genus of sand-dwelling asteroids containing Astropecten indicus, common on sandy shelves in the Bay of Bengal.",
    "isVerified": true
  },
  {
    "id": "taxon-echinometridae",
    "scientificName": "Echinometridae",
    "name": "Echinometridae",
    "rank": "family",
    "parentTaxonId": "taxon-echinoidea",
    "parentId": "taxon-echinoidea",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1855",
    "commonNameEn": "Reef and rock-boring sea urchins",
    "commonNameBn": "পাথুরে সমুদ্র সজারু পরিবার",
    "description": "Family of regular sea urchins with oval tests adapted for boring cavities in shallow intertidal coral reefs and rock platforms.",
    "isVerified": true
  },
  {
    "id": "taxon-echinometra",
    "scientificName": "Echinometra",
    "name": "Echinometra",
    "rank": "genus",
    "parentTaxonId": "taxon-echinometridae",
    "parentId": "taxon-echinometridae",
    "status": "accepted",
    "module": "marine",
    "authorYear": "Gray, 1825",
    "commonNameEn": "Rock-boring urchins",
    "commonNameBn": "একিনোমেট্রা গণ",
    "description": "Genus of reef-dwelling urchins containing Echinometra mathaei, recorded in intertidal rock crevices at St. Martin's Island.",
    "isVerified": true
  },
  {
    "id": "taxon-fejervarya",
    "scientificName": "Fejervarya",
    "name": "Fejervarya",
    "rank": "genus",
    "parentTaxonId": "taxon-dicroglossidae",
    "parentId": "taxon-dicroglossidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Bolkay, 1915",
    "commonNameEn": "Cricket frogs",
    "commonNameBn": "ঝিঁঝিঁ ব্যাঙ গণ",
    "description": "Genus of dicroglossid frogs abundant in agricultural floodplains and ditches across Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-rhacophoridae",
    "scientificName": "Rhacophoridae",
    "name": "Rhacophoridae",
    "rank": "family",
    "parentTaxonId": "taxon-anura",
    "parentId": "taxon-anura",
    "status": "accepted",
    "module": "general",
    "authorYear": "Hoffman, 1932",
    "commonNameEn": "Old World tree frogs",
    "commonNameBn": "গেছো ব্যাঙ পরিবার",
    "description": "Family of arboreal frogs with expanded toe pads and foam-nesting reproductive strategies.",
    "isVerified": true
  },
  {
    "id": "taxon-polypedates",
    "scientificName": "Polypedates",
    "name": "Polypedates",
    "rank": "genus",
    "parentTaxonId": "taxon-rhacophoridae",
    "parentId": "taxon-rhacophoridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Tschudi, 1838",
    "commonNameEn": "Asian whipping tree frogs",
    "commonNameBn": "পলিফিডেটস গেছো ব্যাঙ গণ",
    "description": "Genus of tree frogs containing Polypedates teraiensis, widely distributed across homestead gardens and forests in Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-agamidae",
    "scientificName": "Agamidae",
    "name": "Agamidae",
    "rank": "family",
    "parentTaxonId": "taxon-squamata",
    "parentId": "taxon-squamata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1827",
    "commonNameEn": "Agamid lizards, dragons",
    "commonNameBn": "অ্যাগামিডি গিরগিটি পরিবার",
    "description": "Family of acrodont iguanians containing diurnal arboreal and terrestrial lizards.",
    "isVerified": true
  },
  {
    "id": "taxon-calotes",
    "scientificName": "Calotes",
    "name": "Calotes",
    "rank": "genus",
    "parentTaxonId": "taxon-agamidae",
    "parentId": "taxon-agamidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Cuvier, 1817",
    "commonNameEn": "Garden lizards, bloodsuckers",
    "commonNameBn": "ক্যালোটস গিরগিটি গণ",
    "description": "Genus of agamid lizards containing Calotes versicolor, the oriental garden lizard, ubiquitous in Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-gekkonidae",
    "scientificName": "Gekkonidae",
    "name": "Gekkonidae",
    "rank": "family",
    "parentTaxonId": "taxon-squamata",
    "parentId": "taxon-squamata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Gray, 1825",
    "commonNameEn": "True geckos",
    "commonNameBn": "টিকটিকি পরিবার",
    "description": "Family of nocturnal squamates with adhesive subdigital lamellae enabling vertical wall-climbing.",
    "isVerified": true
  },
  {
    "id": "taxon-hemidactylus",
    "scientificName": "Hemidactylus",
    "name": "Hemidactylus",
    "rank": "genus",
    "parentTaxonId": "taxon-gekkonidae",
    "parentId": "taxon-gekkonidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Oken, 1817",
    "commonNameEn": "House geckos",
    "commonNameBn": "হেমিড্যাক্টাইলাস টিকটিকি গণ",
    "description": "Genus containing Hemidactylus frenatus, the ubiquitous domestic house gecko throughout Bangladesh.",
    "isVerified": true
  },
  {
    "id": "taxon-colubridae",
    "scientificName": "Colubridae",
    "name": "Colubridae",
    "rank": "family",
    "parentTaxonId": "taxon-squamata",
    "parentId": "taxon-squamata",
    "status": "accepted",
    "module": "general",
    "authorYear": "Oppel, 1811",
    "commonNameEn": "Colubrid snakes",
    "commonNameBn": "কলুব্রিডি সাপ পরিবার",
    "description": "Largest snake family, comprising diverse non-venomous and rear-fanged colubroids.",
    "isVerified": true
  },
  {
    "id": "taxon-fowlea",
    "scientificName": "Fowlea",
    "name": "Fowlea",
    "rank": "genus",
    "parentTaxonId": "taxon-colubridae",
    "parentId": "taxon-colubridae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Theobald, 1868",
    "commonNameEn": "Keelbacks",
    "commonNameBn": "ফোউলিয়া ঢোঁড়া সাপ গণ",
    "description": "Genus of semiaquatic Asian natricines containing Fowlea piscator (Xenochrophis piscator), the checkered keelback.",
    "isVerified": true
  },
  {
    "id": "taxon-bungarus",
    "scientificName": "Bungarus",
    "name": "Bungarus",
    "rank": "genus",
    "parentTaxonId": "taxon-elapidae",
    "parentId": "taxon-elapidae",
    "status": "accepted",
    "module": "general",
    "authorYear": "Daudin, 1803",
    "commonNameEn": "Kraits",
    "commonNameBn": "ক্রেইট বা শাঁখামুটি গণ",
    "description": "Genus of highly venomous nocturnal elapids containing the banded krait Bungarus fasciatus, native to Bangladesh.",
    "isVerified": true
  }
];
