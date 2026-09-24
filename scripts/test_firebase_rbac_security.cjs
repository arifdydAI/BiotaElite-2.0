#!/usr/bin/env node
// ==============================================================================
// BiotaElite 2.0: Firebase & RBAC Security Verification Suite
// Tests all 17 security scenarios specified in Section 25
// ==============================================================================
'use strict';

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const ROOT = path.resolve(__dirname, '..');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  \x1b[32m✓ PASS\x1b[0m: ${message}`);
    passed++;
  } else {
    console.error(`  \x1b[31m✗ FAIL\x1b[0m: ${message}`);
    failed++;
  }
}

function loadTs(relPath) {
  const fullPath = path.join(ROOT, relPath);
  let code = fs.readFileSync(fullPath, 'utf8');
  code = code.replace(/import\.meta/g, '({ env: { VITE_USE_LOCAL_FALLBACK: "true" } })');
  const js = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.React,
    }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (p) => {
    if (p.startsWith('../') || p.startsWith('./')) {
      const resolved = path.join(path.dirname(fullPath), p);
      if (fs.existsSync(resolved + '.ts')) return loadTs(path.relative(ROOT, resolved + '.ts'));
      if (fs.existsSync(resolved + '.tsx')) return loadTs(path.relative(ROOT, resolved + '.tsx'));
      if (fs.existsSync(resolved)) return loadTs(path.relative(ROOT, resolved));
    }
    if (p === 'firebase/auth') {
      return {
        signInWithEmailAndPassword: () => Promise.resolve(),
        signOut: () => Promise.resolve(),
        onAuthStateChanged: () => () => {},
      };
    }
    if (p === 'firebase/firestore') {
      return {
        doc: () => ({}),
        getDoc: () => Promise.resolve({ exists: () => false }),
        setDoc: () => Promise.resolve(),
        updateDoc: () => Promise.resolve(),
      };
    }
    if (p === 'react-router-dom') {
      return {
        Navigate: () => null,
        Outlet: () => null,
        useLocation: () => ({ pathname: '/admin' }),
      };
    }
    return require(p);
  };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

console.log('================================================================');
console.log('BIOTAELITE 2.0: FIREBASE, AUTH & RBAC SECURITY TEST SUITE');
console.log('================================================================\n');

// Load RBAC definitions and route guard logic
const { ROLE_PERMISSIONS } = loadTs('src/types/auth.ts');
const { ROLE_HIERARCHY, hasMinimumRole } = loadTs('src/components/auth/RequireAuth.tsx');
const firestoreRules = fs.readFileSync(path.join(ROOT, 'firestore.rules'), 'utf8');
const storageRules = fs.readFileSync(path.join(ROOT, 'storage.rules'), 'utf8');

// -----------------------------------------------------------------------------
// Scenario 1: Unauthenticated access to /admin
// -----------------------------------------------------------------------------
console.log('[Scenario 1] Unauthenticated Access Protection');
assert(!hasMinimumRole('public_user', 'admin'), 'Unauthenticated / public users cannot satisfy admin role requirement');
assert(ROLE_HIERARCHY[0] === 'public_user', 'public_user is at lowest ordinal position (level 0)');

// -----------------------------------------------------------------------------
// Scenario 2: Authenticated public_user access
// -----------------------------------------------------------------------------
console.log('\n[Scenario 2] Authenticated public_user Route Gate');
assert(hasMinimumRole('public_user', 'public_user') === true, 'public_user can access public routes');
assert(hasMinimumRole('public_user', 'data_manager') === false, 'public_user denied data_manager route');
assert(hasMinimumRole('public_user', 'admin') === false, 'public_user denied admin portal access');

// -----------------------------------------------------------------------------
// Scenario 3: data_manager access boundaries
// -----------------------------------------------------------------------------
console.log('\n[Scenario 3] data_manager RBAC Boundaries');
assert(hasMinimumRole('data_manager', 'data_manager') === true, 'data_manager can access data_manager routes');
assert(hasMinimumRole('data_manager', 'admin') === false, 'data_manager cannot access general admin portal');
assert(ROLE_PERMISSIONS.data_manager.canCreateSpecies === true, 'data_manager can create species drafts');
assert(ROLE_PERMISSIONS.data_manager.canVerifySpecies === false, 'data_manager CANNOT verify species');
assert(ROLE_PERMISSIONS.data_manager.canPublishSpecies === false, 'data_manager CANNOT publish species');
assert(ROLE_PERMISSIONS.data_manager.canManageUsers === false, 'data_manager CANNOT manage users');

// -----------------------------------------------------------------------------
// Scenario 4: editor access boundaries
// -----------------------------------------------------------------------------
console.log('\n[Scenario 4] editor RBAC Boundaries');
assert(hasMinimumRole('editor', 'editor') === true, 'editor satisfies editor role requirement');
assert(hasMinimumRole('editor', 'admin') === false, 'editor cannot access general admin portal');
assert(ROLE_PERMISSIONS.editor.canCreateSpecies === true, 'editor can author species records');
assert(ROLE_PERMISSIONS.editor.canEditSpecies === true, 'editor can edit species records');
assert(ROLE_PERMISSIONS.editor.canVerifySpecies === false, 'editor CANNOT verify species');
assert(ROLE_PERMISSIONS.editor.canPublishSpecies === false, 'editor CANNOT publish species');
assert(ROLE_PERMISSIONS.editor.canManageUsers === false, 'editor CANNOT manage users');

// -----------------------------------------------------------------------------
// Scenario 5: reviewer access boundaries
// -----------------------------------------------------------------------------
console.log('\n[Scenario 5] reviewer RBAC Boundaries');
assert(hasMinimumRole('reviewer', 'reviewer') === true, 'reviewer satisfies reviewer requirement');
assert(hasMinimumRole('reviewer', 'admin') === false, 'reviewer cannot access general admin portal');
assert(ROLE_PERMISSIONS.reviewer.canVerifySpecies === true, 'reviewer CAN perform scientific verification');
assert(ROLE_PERMISSIONS.reviewer.canPublishSpecies === false, 'reviewer CANNOT publish species directly');
assert(ROLE_PERMISSIONS.reviewer.canManageUsers === false, 'reviewer CANNOT manage users');

// -----------------------------------------------------------------------------
// Scenario 6: admin access boundaries
// -----------------------------------------------------------------------------
console.log('\n[Scenario 6] admin Access Boundaries');
assert(hasMinimumRole('admin', 'admin') === true, 'admin satisfies admin portal access');
assert(hasMinimumRole('admin', 'super_admin') === false, 'admin CANNOT access super_admin routes (/admin/users, /admin/settings)');
assert(ROLE_PERMISSIONS.admin.canPublishSpecies === true, 'admin CAN publish verified species');
assert(ROLE_PERMISSIONS.admin.canManageUsers === false, 'admin CANNOT manage users (super_admin exclusive)');
assert(ROLE_PERMISSIONS.admin.canDeleteSpecies === false, 'admin CANNOT delete species records');

// -----------------------------------------------------------------------------
// Scenario 7: super_admin access privileges
// -----------------------------------------------------------------------------
console.log('\n[Scenario 7] super_admin Access Privileges');
assert(hasMinimumRole('super_admin', 'super_admin') === true, 'super_admin satisfies super_admin requirement');
assert(hasMinimumRole('super_admin', 'admin') === true, 'super_admin satisfies admin portal requirement');
assert(ROLE_PERMISSIONS.super_admin.canManageUsers === true, 'super_admin CAN manage user roles');
assert(ROLE_PERMISSIONS.super_admin.canDeleteSpecies === true, 'super_admin CAN delete species records');

// -----------------------------------------------------------------------------
// Scenario 8: Unauthorized role escalation prevention (Firestore Rules)
// -----------------------------------------------------------------------------
console.log('\n[Scenario 8] Unauthorized Role Escalation Prevention');
assert(
  firestoreRules.includes("request.resource.data.role == 'public_user'"),
  'firestore.rules enforces that newly created user documents default to public_user'
);

// -----------------------------------------------------------------------------
// Scenario 9: Self-role modification attempt prevention (Firestore Rules)
// -----------------------------------------------------------------------------
console.log('\n[Scenario 9] Self-Role Modification Prevention');
assert(
  firestoreRules.includes(".hasAny(['role', 'permissions', 'isActive'])"),
  'firestore.rules prevents users from modifying their own role, permissions, or isActive status'
);

// -----------------------------------------------------------------------------
// Scenario 10: Unauthorized Firestore write prevention
// -----------------------------------------------------------------------------
console.log('\n[Scenario 10] Unauthorized Firestore Write Prevention');
assert(
  firestoreRules.includes("match /{document=**} {\n      allow read, write: if false;\n    }") ||
  firestoreRules.includes("allow read, write: if false;"),
  'firestore.rules enforces default explicit deny on unspecified document paths'
);

// -----------------------------------------------------------------------------
// Scenario 11: Unauthorized audit-log modification prevention (Immutable trail)
// -----------------------------------------------------------------------------
console.log('\n[Scenario 11] Immutable Audit Log Trail Protection');
assert(
  firestoreRules.includes("match /auditLogs/{logId}") &&
  firestoreRules.includes("allow update, delete: if false;"),
  'firestore.rules strictly denies update and delete on /auditLogs (immutable audit trail)'
);
assert(
  firestoreRules.includes("request.resource.data.actorId == request.auth.uid"),
  'firestore.rules requires actorId to match the authenticated UID on audit creation'
);

// -----------------------------------------------------------------------------
// Scenario 12: Unauthorized settings access prevention
// -----------------------------------------------------------------------------
console.log('\n[Scenario 12] Admin Settings Access Protection');
assert(
  firestoreRules.includes("match /adminSettings/{settingId}") &&
  firestoreRules.includes("allow write: if hasRole('super_admin');"),
  'firestore.rules restricts admin settings writes strictly to super_admin'
);

// -----------------------------------------------------------------------------
// Scenario 13: Unauthorized user-role modification prevention
// -----------------------------------------------------------------------------
console.log('\n[Scenario 13] User-Role Modification Protection');
assert(
  firestoreRules.includes("hasRole('super_admin')") &&
  firestoreRules.includes("resource.data.role != 'super_admin'"),
  'firestore.rules prevents non-super_admin users from assigning or modifying super_admin roles'
);

// -----------------------------------------------------------------------------
// Scenario 14: Unauthorized Storage upload prevention
// -----------------------------------------------------------------------------
console.log('\n[Scenario 14] Firebase Storage Security Protection');
assert(
  storageRules.includes("function isStaffUser()"),
  'storage.rules requires staff verification via Firestore users collection'
);
assert(
  storageRules.includes("request.resource.size < 15 * 1024 * 1024"),
  'storage.rules enforces 15MB file size limit on species imagery'
);
assert(
  storageRules.includes("request.resource.contentType.matches('image/"),
  'storage.rules enforces strict image MIME-type validation'
);
assert(
  storageRules.includes("match /{allPaths=**} {\n      allow read, write: if false;\n    }") ||
  storageRules.includes("allow read, write: if false;"),
  'storage.rules enforces default explicit deny on arbitrary storage paths'
);

// -----------------------------------------------------------------------------
// Scenario 15: Authorized Admin operations & State Transition Gate
// -----------------------------------------------------------------------------
console.log('\n[Scenario 15] State Transition Governance Gate');
assert(
  firestoreRules.includes(".hasAny(['isVerified', 'isPublished', 'lifecycleStatus']))") &&
  firestoreRules.includes("|| isVerifier()"),
  'firestore.rules enforces that modifying isVerified, isPublished, or lifecycleStatus strictly requires isVerifier()'
);

// -----------------------------------------------------------------------------
// Scenario 16: Logout / session revocation
// -----------------------------------------------------------------------------
console.log('\n[Scenario 16] Logout & Session Revocation');
const authContextCode = fs.readFileSync(path.join(ROOT, 'src/context/AuthContext.tsx'), 'utf8');
assert(
  authContextCode.includes("signOut(activeAuth)") || authContextCode.includes("signOut(auth)"),
  'AuthContext invokes Firebase signOut to revoke authenticated session'
);
assert(
  authContextCode.includes("sessionStorage.removeItem('biota_dev_session')"),
  'AuthContext clears local dev session cache on logout'
);

// -----------------------------------------------------------------------------
// Scenario 17: Page refresh authentication persistence
// -----------------------------------------------------------------------------
console.log('\n[Scenario 17] Page Refresh Session Persistence');
assert(
  authContextCode.includes("onAuthStateChanged(activeAuth"),
  'AuthContext subscribes to onAuthStateChanged for automatic session restoration across refreshes'
);

console.log('\n================================================================');
console.log(`RESULTS: ${passed} checks passed, ${failed} checks failed.`);
if (failed === 0) {
  console.log('🎉 ALL 17 FIREBASE & RBAC SECURITY SCENARIOS PASS!');
} else {
  console.error('❌ SOME SECURITY CHECKS FAILED!');
  process.exit(1);
}
console.log('================================================================\n');
