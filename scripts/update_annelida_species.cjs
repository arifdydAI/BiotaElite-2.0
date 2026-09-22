const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/seedSpecies.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Eisenia fetida: order Haplotaxida -> Crassiclitellata
const eiseniaOld = `    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Annelida",
      "class": "Clitellata",
      "order": "Haplotaxida",
      "family": "Lumbricidae",
      "genus": "Eisenia",
      "species": "Eisenia fetida"
    },`;
const eiseniaNew = `    "taxonomy": {
      "kingdom": "Animalia",
      "phylum": "Annelida",
      "class": "Clitellata",
      "order": "Crassiclitellata",
      "family": "Lumbricidae",
      "genus": "Eisenia",
      "species": "Eisenia fetida"
    },`;
if (!content.includes(eiseniaOld)) {
  console.error('Could not find eiseniaOld');
  process.exit(1);
}
content = content.replace(eiseniaOld, eiseniaNew);

// 2. Sabella spallanzanii: speciesPriority common_educational -> scientifically_important
const sabellaOld = `    "taxonId": "taxon-sabella",
    "speciesPriority": "common_educational",`;
const sabellaNew = `    "taxonId": "taxon-sabella",
    "speciesPriority": "scientifically_important",`;
if (!content.includes(sabellaOld)) {
  console.error('Could not find sabellaOld');
  process.exit(1);
}
content = content.replace(sabellaOld, sabellaNew);

// 3. Alitta virens: add provenance
const alittaOld = `        "verifiedBy": "Annelid Taxonomic Panel",
        "verifiedAt": "2026-09-15T08:00:00Z"
      }
    ],
    "version": 1,
    "createdAt": "2026-09-15T08:00:00Z",
    "updatedAt": "2026-09-15T08:00:00Z",
    "speciesPriority": "scientifically_important"
  },
  {
    "id": "sp-tubifex-tubifex",`;
const alittaNew = `        "verifiedBy": "Annelid Taxonomic Panel",
        "verifiedAt": "2026-09-15T08:00:00Z"
      }
    ],
    "provenance": {
      "taxonomicStatus": "World Polychaeta Database / WoRMS 2024",
      "distribution": "North Atlantic and boreal intertidal marine mudflats",
      "morphology": "Ruppert et al. (2004) Invertebrate Zoology; Hickman et al. (2020)"
    },
    "version": 1,
    "createdAt": "2026-09-15T08:00:00Z",
    "updatedAt": "2026-09-15T08:00:00Z",
    "speciesPriority": "scientifically_important"
  },
  {
    "id": "sp-tubifex-tubifex",`;
if (!content.includes(alittaOld)) {
  console.error('Could not find alittaOld');
  process.exit(1);
}
content = content.replace(alittaOld, alittaNew);

// 4. Tubifex tubifex: add residency: "resident" and provenance
const tubifexResOld = `      "habitatTypes": [
        "organically rich sewage-polluted mud, aquaculture pond bottoms"
      ],
      "residencyStatus": "resident",
      "localNamesBn": [`;
const tubifexResNew = `      "habitatTypes": [
        "organically rich sewage-polluted mud, aquaculture pond bottoms"
      ],
      "residencyStatus": "resident",
      "residency": "resident",
      "localNamesBn": [`;
if (!content.includes(tubifexResOld)) {
  console.error('Could not find tubifexResOld');
  process.exit(1);
}
content = content.replace(tubifexResOld, tubifexResNew);

const tubifexOld = `        "verifiedBy": "Freshwater Invertebrate Panel",
        "verifiedAt": "2026-09-15T08:00:00Z"
      }
    ],
    "version": 1,
    "createdAt": "2026-09-15T08:00:00Z",
    "updatedAt": "2026-09-15T08:00:00Z",
    "speciesPriority": "scientifically_important"
  },
  {
    "id": "sp-conus-geographus",`;
const tubifexNew = `        "verifiedBy": "Freshwater Invertebrate Panel",
        "verifiedAt": "2026-09-15T08:00:00Z"
      }
    ],
    "provenance": {
      "taxonomicStatus": "Catalogue of Life 2026 / World Register of Marine Species",
      "distribution": "Cosmopolitan freshwater benthic sediments",
      "morphology": "Brinkhurst & Jamieson (1971) Aquatic Oligochaeta of the World"
    },
    "version": 1,
    "createdAt": "2026-09-15T08:00:00Z",
    "updatedAt": "2026-09-15T08:00:00Z",
    "speciesPriority": "scientifically_important"
  },
  {
    "id": "sp-conus-geographus",`;
if (!content.includes(tubifexOld)) {
  console.error('Could not find tubifexOld');
  process.exit(1);
}
content = content.replace(tubifexOld, tubifexNew);

// 5. Arenicola marina: change speciesPriority to scientifically_important, add provenance
const arenicolaOld = `        "verifiedBy": "Taxonomic Audit Panel",
        "verifiedAt": "2026-09-15T10:00:00Z",
        "notes": "Adult voucher specimen displaying characteristic polychaete gills and tagmatized regions."
      }
    ],
    "version": 1,
    "createdAt": "2026-09-15T10:00:00Z",
    "updatedAt": "2026-09-15T10:00:00Z",
    "speciesPriority": "common_educational"
  },
  {
    "id": "sp-lumbricus-terrestris",`;
const arenicolaNew = `        "verifiedBy": "Taxonomic Audit Panel",
        "verifiedAt": "2026-09-15T10:00:00Z",
        "notes": "Adult voucher specimen displaying characteristic polychaete gills and tagmatized regions."
      }
    ],
    "provenance": {
      "taxonomicStatus": "World Polychaeta Database / WoRMS 2024",
      "distribution": "North Atlantic intertidal sandflats and shallow coastal waters",
      "morphology": "Ruppert et al. (2004) Invertebrate Zoology; Read & Fauchald (2024)"
    },
    "version": 1,
    "createdAt": "2026-09-15T10:00:00Z",
    "updatedAt": "2026-09-15T10:00:00Z",
    "speciesPriority": "scientifically_important"
  },
  {
    "id": "sp-lumbricus-terrestris",`;
if (!content.includes(arenicolaOld)) {
  console.error('Could not find arenicolaOld');
  process.exit(1);
}
content = content.replace(arenicolaOld, arenicolaNew);

// 6. Lumbricus terrestris: add provenance
const lumbricusOld = `        "verifiedBy": "Taxonomic Audit Panel",
        "verifiedAt": "2026-09-15T10:00:00Z",
        "notes": "Adult voucher specimen showing characteristic clitellum spanning segments 32-37."
      }
    ],
    "version": 1,
    "createdAt": "2026-09-15T10:00:00Z",
    "updatedAt": "2026-09-15T10:00:00Z",
    "speciesPriority": "common_educational"
  },
  {
    "id": "sp-hirudo-medicinalis",`;
const lumbricusNew = `        "verifiedBy": "Taxonomic Audit Panel",
        "verifiedAt": "2026-09-15T10:00:00Z",
        "notes": "Adult voucher specimen showing characteristic clitellum spanning segments 32-37."
      }
    ],
    "provenance": {
      "taxonomicStatus": "Catalogue of Life 2026 / Linnaean Typification",
      "distribution": "Global Palearctic native; worldwide cosmopolitan introduction",
      "morphology": "Hickman et al. (2020) Integrated Principles of Zoology; Ruppert et al. (2004)"
    },
    "version": 1,
    "createdAt": "2026-09-15T10:00:00Z",
    "updatedAt": "2026-09-15T10:00:00Z",
    "speciesPriority": "common_educational"
  },
  {
    "id": "sp-hirudo-medicinalis",`;
if (!content.includes(lumbricusOld)) {
  console.error('Could not find lumbricusOld');
  process.exit(1);
}
content = content.replace(lumbricusOld, lumbricusNew);

// 7. Hirudo medicinalis: add provenance
const hirudoOld = `        "verifiedBy": "Taxonomic Audit Panel",
        "verifiedAt": "2026-09-15T10:00:00Z",
        "notes": "Voucher photograph showing dorsal striping and anterior/posterior sucker conformation."
      }
    ],
    "version": 1,
    "createdAt": "2026-09-15T10:00:00Z",
    "updatedAt": "2026-09-15T10:00:00Z",
    "speciesPriority": "common_educational"
  },
  {
    "id": "sp-helix-pomatia",`;
const hirudoNew = `        "verifiedBy": "Taxonomic Audit Panel",
        "verifiedAt": "2026-09-15T10:00:00Z",
        "notes": "Voucher photograph showing dorsal striping and anterior/posterior sucker conformation."
      }
    ],
    "provenance": {
      "taxonomicStatus": "Catalogue of Life 2026 / IUCN Red List Assessment",
      "distribution": "Western Palearctic freshwater wetlands; cultivated internationally",
      "morphology": "Sawyer (1986) Leech Biology and Behaviour; Hickman et al. (2020)"
    },
    "version": 1,
    "createdAt": "2026-09-15T10:00:00Z",
    "updatedAt": "2026-09-15T10:00:00Z",
    "speciesPriority": "common_educational"
  },
  {
    "id": "sp-helix-pomatia",`;
if (!content.includes(hirudoOld)) {
  console.error('Could not find hirudoOld');
  process.exit(1);
}
content = content.replace(hirudoOld, hirudoNew);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated seedSpecies.ts for Annelida species!');
