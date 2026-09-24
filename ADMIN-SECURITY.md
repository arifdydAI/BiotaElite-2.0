# BiotaElite 2.0 — Production Admin Security & RBAC Architecture
**Document Version:** 2.0-SEC-FINAL  
**Standard Compliance:** Zero-Trust Data Governance, Least Privilege Access, ICZN & IUCN Scientific Quality Assurance

---

## 1. Executive Security Architecture

BiotaElite 2.0 enforces a multi-layered security architecture designed to prevent unauthorized access, privilege escalation, and scientific data corruption.

```
[ Public Web Visitor ] ──> HTTP(S) CDN ──> React SPA (Public Read-Only Surface)
                                                    │
[ Authenticated Operator ]                          │
       │                                            │
       ▼                                            ▼
Firebase Auth (Token Verification)      Vercel Edge Rewrite Engine
       │                                            │
       ▼                                            ▼
Client-Side Route Guard (RequireAuth)    Public Content (/species, /taxonomy, /fish)
       │ (UX Visibility Layer Only)
       ▼
Cloud Firestore Security Rules (firestore.rules)  <── THE AUTHORITATIVE SECURITY BOUNDARY
       │
       ├── User Profile & Role Check: /users/{uid}
       ├── State Transition Gatekeeper (isVerifier required for verified/published)
       ├── Immutable Append-Only Audit Trail: /auditLogs/{logId}
       └── Storage Media Access Rules: storage.rules
```

---

## 2. Core Principle: Defense-in-Depth

### Rule 1: Client-Side Visibility is NOT Security
- Client-side navigation guards (`RequireAuth`, hidden navigation links, disabled buttons) provide **UX guidance only**.
- A client running in the browser can be modified or manipulated via developer tools.
- **Every privileged operation MUST be rejected at the Firebase Security Rules and Firestore backend layer.**

### Rule 2: User Account Authority
- **Authoritative Identity:** Firebase Authentication (`auth.currentUser.uid`).
- **Authoritative Profile & Role:** Cloud Firestore document `/users/{uid}`.
- **LocalStorage / Client State:** Strictly utilized as a read-through development cache and offline fallback. Client-side role modifications never grant elevated privileges on the Firestore database.

---

## 3. Role-Based Access Control (RBAC) Hierarchy

BiotaElite 2.0 defines 6 distinct roles arranged in a strict ordinal hierarchy:

| Role | Ordinal Level | Intended User Base | Key Authorized Operations |
| :--- | :---: | :--- | :--- |
| **`super_admin`** | 6 | Chief Zoological Architect & Board | All platform features; User role assignments; System reset; Configuration |
| **`admin`** | 5 | Senior Zoological Administrators | Editorial queue review; Data publish/unpublish; Reference/Taxon management |
| **`reviewer`** | 4 | Academic Peer Reviewers & Taxonomists | Review Queue evaluation; Scientific verification sign-off (`isVerified`); Rejections |
| **`editor`** | 3 | Zoological Curators & Monograph Authors | Species editing; Monograph drafts; Media annotation; Key authoring |
| **`data_manager`** | 2 | Nomenclatural & Literature Curators | Batch data import parsing; Conflict staging; Bibliographic citations curation |
| **`public_user`** | 1 | General Public & Students | Read-only access to published, verified biological catalogs |

---

## 4. Firestore Security Rules Matrix (`firestore.rules`)

The authoritative backend enforcement matrix implemented in [`firestore.rules`](./firestore.rules):

| Collection | Read Rule | Create Rule | Update Rule | Delete Rule |
| :--- | :--- | :--- | :--- | :--- |
| `/species/{id}` | `isPublished == true \|\| isStaff()` | `editor`, `data_manager`, `admin`, `super_admin` | Staff; **`isVerifier()` strictly required** if modifying `isVerified` or `isPublished` | `admin`, `super_admin` |
| `/taxa/{id}` | Public `true` | `editor`, `data_manager`, `admin`, `super_admin` | `editor`, `data_manager`, `admin`, `super_admin` | `admin`, `super_admin` |
| `/scientificNames/{id}` | Public `true` | `editor`, `data_manager`, `admin`, `super_admin` | `editor`, `data_manager`, `admin`, `super_admin` | `admin`, `super_admin` |
| `/references/{id}` | Public `true` | `isStaff()` | `isStaff()` | `admin`, `super_admin` |
| `/identificationKeys/{id}` | Public `true` | `isStaff()` | `isStaff()` | `admin`, `super_admin` |
| `/media/{id}` | Public `true` | `isStaff()` | `isStaff()` | `admin`, `super_admin` |
| `/reviews/{id}` | `isStaff()` | `isStaff()` | `isVerifier()` | `admin`, `super_admin` |
| `/auditLogs/{id}` | `isAdmin()` | `isStaff()` | **`false` (Immutable)** | **`false` (Immutable)** |
| `/users/{uid}` | Signed-in owner OR `isAdmin()` | Signed-in self | Owner (cannot alter own `role`/`permissions`) OR `isAdmin()` | `super_admin` only |

---

## 5. Controlled Data Ingestion Pipeline

To satisfy the zero-trust data governance mandate, data imported into BiotaElite 2.0 follows an immutable nine-stage pipeline:

$$\text{Upload (CSV/JSON)} \longrightarrow \text{Parse} \longrightarrow \text{Validate} \longrightarrow \text{Detect Duplicates/Conflicts} \longrightarrow \text{Preview} \longrightarrow \text{Submit} \longrightarrow \text{Peer Review} \longrightarrow \text{Approve} \longrightarrow \text{Publish}$$

### Mandatory Ingestion Safeguards:
1. **Quarantine by Default:** Every record ingested via [`src/utils/batchImporter.ts`](./src/utils/batchImporter.ts) is programmatically stamped with:
   - `lifecycleStatus: 'draft'`
   - `isVerified: false`
   - `isPublished: false`
2. **Zero Automatic Publication:** Under no circumstances does an ingestion script or import batch immediately expose unvetted data to the public website.
3. **Conflict Staging:** Entries with duplicate scientific names or conflicting taxonomic parents are routed to [`/admin/conflicts`](./src/pages/admin/ConflictCenterPage.tsx) for manual human resolution.

---

## 6. Verification Status: Static vs. Live Testing

| Security Check | Method | Status | Details |
| :--- | :--- | :---: | :--- |
| **Privilege Escalation Prevention (`isVerified`, `isPublished`, `lifecycleStatus`)** | Static Analysis (`firestore.rules`) | **PASS** | Validated lines 38-42. `affectedKeys().hasAny(...)` enforces `isVerifier()` requirement. |
| **Audit Logs Append-Only Immutability** | Static Analysis (`firestore.rules`) | **PASS** | Validated lines 85-89. `update, delete: if false` prevents any modification or removal. |
| **Self-Role / Permissions Escalation Prevention** | Static Analysis (`firestore.rules`) | **PASS** | Validated lines 92-97. Owner cannot modify `role` or `permissions`. |
| **Super Admin-Only Deletions** | Static Analysis (`firestore.rules`) | **PASS** | User deletions strictly require `hasRole('super_admin')`. |
| **Storage Staff-Only Media Uploads** | Static Analysis (`storage.rules`) | **PASS** | Uploads require `isStaffUser()` verified against Firestore user document. |
| **Client Route Guarding & RBAC Navigation** | Browser / CDP (`verify_admin_browser_qa.cjs`) | **PASS** | 47 browser QA checks passed across 6 viewports with direct route rejection. |
| **Live Firestore Security Rules Rejection** | Cloud Firebase Project | **REQUIRES LIVE FIREBASE** | Requires deployed Firebase instance or Firebase Emulator Suite with live auth tokens. |
| **Live Storage Rules Network Enforcement** | Cloud Firebase Project | **REQUIRES LIVE FIREBASE** | Requires live Firebase Storage bucket credentials. |

---

## 7. Production Security Checklist

Prior to production deployment or domain rollover:

- [ ] **Deploy Firebase Security Rules:** Execute `firebase deploy --only firestore:rules,storage`. *(Requires live Firebase CLI authentication)*
- [x] **Auth Providers Restricted:** Only institutional email/password authentication enabled; public open sign-up disabled or forced to `role: 'public_user'`.
- [x] **Client Bundle Sanitization:** No Firebase service-account private keys included in Vite client bundle (confirmed: only client public configuration is bundled).
- [x] **HTTPS Strict Transport Security (HSTS):** Enforced via Vercel headers (`vercel.json`).
- [x] **Immutable Baseline Verification:** Baseline automated tests pass with 0 errors (`node scripts/run_verify.cjs`).
- [x] **Initial Bundle Budget:** Initial production JavaScript payload strictly $\le 95\text{ kB}$ gzip (actual: 25.61 kB gzip).
