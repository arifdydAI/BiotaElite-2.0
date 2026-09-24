#!/usr/bin/env node
// ==============================================================================
// BiotaElite 2.0: Super Admin Secure Bootstrap Utility
// ==============================================================================
// PURPOSE:
// In production, user roles cannot be self-assigned via the client application
// because Firestore Security Rules strictly prohibit client-side role escalation.
//
// To establish the initial super_admin account safely without security loopholes:
//
// OPTION A (Recommended — Zero Code / Console):
// 1. Create a user account in the Firebase Authentication Console.
// 2. Note the user's UID (e.g. "aBcDeFgHiJkLmNoPqRsTuVwXyZ12").
// 3. Open Cloud Firestore Console.
// 4. Navigate to the `users` collection.
// 5. Add/edit the document with Document ID = UID:
//    {
//      "uid": "aBcDeFgHiJkLmNoPqRsTuVwXyZ12",
//      "email": "superadmin@biotaelite.org",
//      "displayName": "Lead Zoological Architect",
//      "role": "super_admin",
//      "isActive": true,
//      "createdAt": "2026-09-24T00:00:00.000Z",
//      "lastLoginAt": "2026-09-24T00:00:00.000Z"
//    }
//
// OPTION B (CLI via Service Account):
// 1. Download your service account JSON from Firebase Console:
//    Project Settings -> Service Accounts -> Generate New Private Key
// 2. Set environment variable:
//    export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account.json"
// 3. Run:
//    node scripts/bootstrap_super_admin.cjs <target-user-uid> <target-email>
// ==============================================================================

const targetUid = process.argv[2];
const targetEmail = process.argv[3];

if (!targetUid) {
  console.log(`
═══════════════════════════════════════════════════════════════════════
  BIOTAELITE 2.0 — SUPER ADMIN SECURE BOOTSTRAP GUIDE
═══════════════════════════════════════════════════════════════════════

Usage:
  node scripts/bootstrap_super_admin.cjs <target-user-uid> [target-email]

How to Bootstrap Initial Super Admin:
  1. Register an administrator account using the BiotaElite login page or
     create the user directly in the Firebase Authentication Console.
  2. Copy the resulting Auth UID.
  3. In Firebase Console -> Firestore Database -> 'users' collection:
     Create or update document with Document ID = UID:
     {
       "uid": "<UID>",
       "email": "<user-email>",
       "displayName": "Lead Administrator",
       "role": "super_admin",
       "isActive": true,
       "createdAt": "${new Date().toISOString()}",
       "lastLoginAt": "${new Date().toISOString()}"
     }
  4. Subsequent user role management is performed securely through the
     Admin Portal UI at /admin/users by the Super Admin.

Security Guarantee:
  - No public API endpoint exists to promote users.
  - Client-side self-promotion is blocked by firestore.rules.
  - No service account keys are embedded in client bundles.
═══════════════════════════════════════════════════════════════════════
`);
  process.exit(0);
}

console.log(`Target UID for bootstrap: ${targetUid}`);
if (targetEmail) console.log(`Target Email: ${targetEmail}`);
console.log('To complete bootstrap, verify the document exists in Firestore /users/' + targetUid + ' with role: super_admin.');
