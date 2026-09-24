# BiotaElite 2.0 — Admin Data Architecture
**Document ID:** `ADMIN-DATA-ARCHITECTURE.md`  
**Task Identifier:** `MASTER-ADMIN-DEVELOPMENT-01`  
**Date:** September 23, 2026  
**Status:** Approved & Implemented  

---

## 1. Overview & Single Source of Truth Principle

BiotaElite 2.0 enforces a strict single-source-of-truth policy:
- **Canonical Biodiversity Entities**: Species records, taxonomy nodes, identification keys, references, and verified media are authoritative and normalized.
- **Zero Duplicate Entities**: No second species record is created for a synonym or geographic occurrence. No parallel taxonomy tree exists.
- **Draft vs Published Boundary**: Only records with `lifecycleStatus === 'published'` and `isPublished === true` are queryable on the public website.
- **Production Backend**: Cloud Firestore collections represent the persistence layer in live production; when offline or unconfigured, local development uses versioned, debounced local state caching with zero impact on production schemas.

---

## 2. Cloud Firestore Collections & Schemas

### A. Collection: `species`
- **Document ID**: Canonical species ID formatted as `sp-[genus]-[species]` (e.g., `sp-tenualosa-ilisha`).
- **Fields**:
  - `id`: string (Canonical ID)
  - `scientificName`: string (Binomial, e.g. "Tenualosa ilisha")
  - `scientificNameAuthorship`: string (e.g. "(Hamilton, 1822)")
  - `taxonomicStatus`: `'accepted' | 'synonym' | 'provisionally_accepted'`
  - `acceptedNameId`: string (optional, if synonym)
  - `synonyms`: Array of `SynonymRecord` (`{ name, authorship, status, year, isBasionym, sourceId }`)
  - `commonNames`: `{ en: string[], bn: string[] }`
  - `taxonomy`: `{ kingdom, phylum, class, order, family, genus, species, subspecies? }`
  - `taxonId`: string (Stable reference to TaxonNode genus/family)
  - `module`: `'fish' | 'marine' | 'general'`
  - `morphology`: `{ diagnosticFeatures: string[], description: string, maxStandardLengthCm?, dorsalSpinesRays?, analSpinesRays?, coloration? }`
  - `habitat`: `{ systems: AquaticSystem[], zones: string[], depthRangeMeters?: { min, max }, temperatureRangeC?: { min, max } }`
  - `bangladeshOccurrence`: `{ present: boolean, regions: string[], habitatTypes: string[], residencyStatus: BangladeshResidency, threatCategoryNational?: IUCNStatus, nationalAssessmentYear?, nationalStatusSource?, localNamesBn?: string[] }`
  - `ecology`: `{ dietCategory?, dietSummary?, behavior?, reproduction?, ecologicalRole? }`
  - `conservation`: `{ iucnGlobalStatus: IUCNStatus, iucnAssessmentYear: number, globalStatusSource?: string, threats: string[], citesAppendix? }`
  - `lifecycleStatus`: `'draft' | 'under_review' | 'verified' | 'published' | 'archived' | 'rejected'`
  - `isVerified`: boolean
  - `isPublished`: boolean
  - `referenceIds`: string[] (IDs referencing documents in `references`)
  - `media`: Array of `MediaMetadata`
  - `createdAt`, `updatedAt`, `verifiedAt?`, `verifiedBy?`
- **Security Rules**:
  - Public read: `resource.data.isPublished == true || isStaff()`
  - Create: `super_admin`, `admin`, `editor`, `data_manager`
  - Update: `isStaff()`, but only verifiers (`super_admin`, `admin`, `reviewer`) can change `isVerified`, `isPublished`, or `lifecycleStatus`.
  - Delete: `super_admin` only.

---

### B. Collection: `taxa`
- **Document ID**: Canonical taxon ID formatted as `txn-[name]` (e.g., `txn-actinopterygii`, `txn-clupeiformes`).
- **Fields**:
  - `id`: string
  - `scientificName`: string
  - `rank`: `TaxonomicRank` (`kingdom` down to `species`)
  - `parentTaxonId`: string | null (Normalized graph hierarchy)
  - `module`: `'fish' | 'marine' | 'general'`
  - `authorYear`: string (optional)
  - `commonNameEn`: string (optional)
  - `commonNameBn`: string (optional)
  - `description`: string (optional)
  - `isVerified`: boolean
  - `speciesCount`: number
- **Security Rules**:
  - Public read: `true`
  - Write: `isAnyRole(['super_admin', 'admin', 'data_manager', 'editor'])`

---

### C. Collection: `identificationKeys`
- **Document ID**: Canonical key ID formatted as `key-[target]` (e.g., `key-living-fish-classes`, `key-chondrichthyes-orders`).
- **Fields**:
  - `id`: string
  - `title`: string
  - `titleBn`: string (optional)
  - `scope`: `'global' | 'bangladesh'`
  - `targetTaxonId`: string (optional)
  - `targetTaxonRank`: `TaxonomicRank` (optional)
  - `majorGroup`: `KeyMajorGroup`
  - `taxonScope`: string
  - `description`: string
  - `steps`: Array of `KeyStep`:
    - `id`: number (Step number)
    - `couplets`: Array of `KeyStepOption`:
      - `lead`: string
      - `diagnosticFeature`: string
      - `resultType`: `'species' | 'taxon' | 'next_step' | 'unresolved'`
      - `speciesId`: string (optional)
      - `taxonId`: string (optional)
      - `nextStepId`: number (optional)
  - `sourceReferenceIds`: string[]
  - `verificationStatus`: `LifecycleStatus`
- **Security Rules**:
  - Public read: `true`
  - Write: `isStaff()`

---

### D. Collection: `references`
- **Document ID**: Canonical reference ID formatted as `ref-[author]-[year]` (e.g., `ref-hamilton-1822`, `ref-iucn-bd-2015-v5`).
- **Fields**:
  - `id`: string
  - `title`: string
  - `authors`: string[]
  - `year`: number
  - `sourceType`: `'journal_article' | 'monograph' | 'database' | 'government_report' | 'iucn_assessment'`
  - `publicationName`: string
  - `volume`, `issue`, `pages`, `doi`, `url`
  - `authorityTier`: `'tier_1_primary_literature' | 'tier_2_authoritative_database' | 'tier_3_government_report' | 'tier_4_secondary_literature' | 'tier_5_observation'`
  - `notes`: string (optional)
- **Security Rules**:
  - Public read: `true`
  - Write: `isStaff()`

---

### E. Collection: `media`
- **Document ID**: Media asset ID formatted as `med-[species/taxon]-[hash]`
- **Fields**:
  - `id`: string
  - `speciesId`: string (optional)
  - `taxonId`: string (optional)
  - `url`: string (Storage download URL or authoritative external URL)
  - `caption`: string
  - `photographer`, `creator`, `institution`
  - `license`: `'CC0' | 'CC-BY' | 'CC-BY-SA' | 'CC-BY-NC' | 'Public Domain' | string`
  - `attribution`: string
  - `isVerified`: boolean
  - `verificationStatus`: `'verified' | 'pending' | 'rejected'`
  - `isAuthenticPhotography`: boolean (Must be `true`; AI animal imagery disallowed)
  - `imageType`: `'specimen_photo' | 'habitat_photo' | 'diagnostic_drawing' | 'distribution_map'`
  - `verifiedBy`, `verifiedAt`
- **Security Rules**:
  - Public read: `true`
  - Write: `isStaff()`

---

### F. Collection: `users`
- **Document ID**: Firebase Auth UID (`request.auth.uid`).
- **Fields**:
  - `uid`: string (Matching Firebase Auth UID)
  - `email`: string
  - `displayName`: string
  - `role`: `UserRole` (`'super_admin' | 'admin' | 'reviewer' | 'editor' | 'data_manager' | 'public_user'`)
  - `institution`: string
  - `specialization`: string
  - `isActive`: boolean
  - `createdAt`: string
  - `lastLoginAt`: string
- **Security Rules**:
  - Read: `isSignedIn() && (request.auth.uid == userId || isAdmin())`
  - Create: `isSignedIn()`
  - Update: `isAdmin()` or owner modifying non-privilege fields.
  - Delete: `hasRole('super_admin')` only.

---

### G. Collection: `auditLogs`
- **Document ID**: Auto-generated log ID (`log-[timestamp]-[random]`).
- **Fields**:
  - `id`: string
  - `actorId`: string (UID)
  - `actorEmail`: string
  - `actorRole`: `UserRole`
  - `action`: `'create' | 'update' | 'verify' | 'publish' | 'unpublish' | 'archive' | 'delete'`
  - `entity`: `'species' | 'taxon' | 'key' | 'reference' | 'media' | 'user' | 'system'`
  - `entityId`: string
  - `entityName`: string
  - `timestamp`: string (ISO 8601 UTC)
  - `details`: string
  - `beforeState`, `afterState` (optional serialized snapshots)
- **Security Rules**:
  - Read: `isAdmin()`
  - Create: `isStaff()`
  - Update, Delete: `false` (Strictly immutable audit trail).

---

## 3. Data Lifecycle & Controlled Workflow

```
[Import / Ingestion]
         │
         ▼
[Parse & Normalize]
         │
         ▼
[Validation & Duplicate/Conflict Check] ──(Conflicts)──► [Conflict Center]
         │
         ▼
[Draft Created] (lifecycleStatus: 'draft')
         │
         ▼
[Submit for Review] (lifecycleStatus: 'under_review')
         │
         ▼
[Peer Review Queue] ──(Rejected)──► [Draft with Verifier Notes]
         │
         ▼ (Approved & Verified)
[Verified Status] (isVerified: true)
         │
         ▼ (Publish Action)
[Published to Public Surface] (isPublished: true, lifecycleStatus: 'published')
         │
         ▼ (Optional)
[Archived] (lifecycleStatus: 'archived', isPublished: false)
```

**Every state transition emits an immutable `AuditLogEntry`.**
