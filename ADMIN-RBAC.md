# BiotaElite 2.0 — Role-Based Access Control (RBAC) Specification
**Document ID:** `ADMIN-RBAC.md`  
**Task Identifier:** `MASTER-ADMIN-DEVELOPMENT-01`  
**Date:** September 23, 2026  
**Status:** Approved & Enforced  

---

## 1. Principles of Security & Authorization

1. **Defense in Depth**: Client-side UI visibility checks exist solely for user experience and visual ergonomics. They are **never** considered security boundaries.
2. **Operational Enforcement**: Every mutation (CRUD, publish, verify, delete, import) verifies the operator's assigned capability at the store dispatch level before updating state or sending requests.
3. **Backend Enforcement**: In production, Cloud Firestore Security Rules (`firestore.rules`) validate the operator's role against `/users/$(request.auth.uid)` on every read/write.
4. **Zero-Trust Role Principle**: Role elevation or privilege tampering from browser dev tools fails closed because all route guards and actions require server/store validation.

---

## 2. The 6-Tier Role Hierarchy

The roles are ordered hierarchically from lowest (0) to highest (5):

| Role ID | Display Title | Scope & Intended Operator | Authority Tier |
| :--- | :--- | :--- | :---: |
| `public_user` | Public Visitor | General public, students, researchers without editorial rights. | **0** (Read-only Public) |
| `data_manager` | Nomenclature & Data Manager | Scientific catalogers, nomenclaturists, batch import curators. | **1** (Taxa & Draft Curation) |
| `editor` | Scientific Editor | Field biologists, contributors drafting species monographs. | **2** (Content Authoring) |
| `reviewer` | Peer Reviewer / Verifier | Senior taxonomists, faculty verifying records against monographs. | **3** (Verification & Approval) |
| `admin` | Systematics Administrator | Managing directors, publication leads, system supervisors. | **4** (Broad Management & Publishing) |
| `super_admin` | Lead Zoological Architect | Platform administrators with complete authority. | **5** (Complete Authority) |

---

## 3. Capability Matrix (`ROLE_PERMISSIONS`)

| Capability | `public_user` | `data_manager` | `editor` | `reviewer` | `admin` | `super_admin` |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **View Public Pages** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Access Admin Portal (`/admin`)** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Create Species Drafts** | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **Edit Species Drafts** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Verify Species Records** | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Publish Species to Public Index**| ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Archive Published Species** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Delete Records Permanently** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Manage Linnaean Taxonomy Tree**| ❌ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **Manage Identification Keys** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Manage Zoological Media Assets**| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Manage References & Citations** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Access Verification Review Queue**| ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Execute Batch Data Ingestion** | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ |
| **Manage User Roles & Accounts** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **View Immutable Audit Logs** | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ |
| **System Diagnostics & Database Reset**| ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## 4. Route Protection Matrix

```typescript
// Routing Layer Guarding (src/App.tsx)
<Route element={<RequireAuth minimumRole="admin" />}>
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<DashboardPage />} />
    <Route path="species" element={<SpeciesManagerPage />} />
    <Route path="taxonomy" element={<TaxonomyManagerPage />} />
    <Route path="bangladesh" element={<BangladeshAdminPage />} />
    <Route path="keys" element={<IdentKeyManagerPage />} />
    <Route path="media" element={<MediaManagerPage />} />
    <Route path="references" element={<ReferenceManagerPage />} />
    <Route path="scientific-names" element={<ScientificNamesManagerPage />} />
    <Route path="reviews" element={<ReviewQueuePage />} />
    <Route path="audit-logs" element={<AuditLogPage />} />
    <Route path="batch-import" element={<BatchImportPage />} />
    <Route path="import-batches" element={<ImportBatchesPage />} />
    <Route path="conflicts" element={<ConflictCenterPage />} />
    <Route path="data-health" element={<DataHealthPage />} />
    <Route path="profile" element={<ProfilePage />} />

    {/* High-Privilege Administration (super_admin only) */}
    <Route element={<RequireAuth minimumRole="super_admin" />}>
      <Route path="users" element={<UsersPage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  </Route>
</Route>
```

---

## 5. Security Invariants
- `RequireAuth` evaluates `authStatus` first: if `loading`, renders spinner; if `unauthenticated` or `error`, redirects to `/login`.
- If authenticated, checks `hasMinimumRole(role, minimumRole)`. If false, navigates to `/access-denied`.
- The QA Role Switcher in `AdminLayout.tsx` is strictly guarded by `import.meta.env.DEV && devOnlySetRole` and cannot grant real privileges in production.
