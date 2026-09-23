const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const rootDir = path.resolve(__dirname, '..');

function loadTs(relPath) {
  const fullPath = path.join(rootDir, relPath);
  const code = fs.readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { 
      module: ts.ModuleKind.CommonJS, 
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.React
    }
  }).outputText;
  const m = { exports: {} };
  const customRequire = (p) => {
    if (p.includes('react-router-dom')) {
      return { Navigate: () => null, Outlet: () => null, useLocation: () => ({ pathname: '/' }) };
    }
    if (p.includes('AuthContext')) {
      return { useAuth: () => ({}) };
    }
    if (p === 'react') {
      return { createElement: () => null };
    }
    return require(p);
  };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', js);
  fn(m, m.exports, customRequire, path.dirname(fullPath), fullPath);
  return m.exports;
}

console.log('================================================================');
console.log('BIOTAELITE 2.0: ADMIN PORTAL VISIBILITY AUDIT');
console.log('================================================================\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASSED: ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAILED: ${message}`);
    failed++;
  }
}

// 1. Verify hasMinimumRole RBAC logic
try {
  const { hasMinimumRole, ROLE_HIERARCHY } = loadTs('src/components/auth/RequireAuth.tsx');
  
  assert(Array.isArray(ROLE_HIERARCHY) && ROLE_HIERARCHY.length === 6, 'ROLE_HIERARCHY contains 6 defined roles');
  assert(!hasMinimumRole('public_user', 'admin'), 'public_user is NOT authorized for admin');
  assert(!hasMinimumRole('data_manager', 'admin'), 'data_manager is NOT authorized for admin');
  assert(!hasMinimumRole('editor', 'admin'), 'editor is NOT authorized for admin');
  assert(!hasMinimumRole('reviewer', 'admin'), 'reviewer is NOT authorized for admin');
  assert(hasMinimumRole('admin', 'admin'), 'admin is authorized for admin');
  assert(hasMinimumRole('super_admin', 'admin'), 'super_admin is authorized for admin');
} catch (e) {
  assert(false, `RequireAuth logic error: ${e.message}`);
}

// 2. Audit Header.tsx for conditional rendering
try {
  const headerPath = path.join(rootDir, 'src/components/common/Header.tsx');
  const headerContent = fs.readFileSync(headerPath, 'utf8');

  // Verify that the unauthenticated fallback <Link to="/login">...nav.admin is gone
  assert(!headerContent.includes("to=\"/login\""), 'Header does NOT contain hardcoded login link for public visitors');
  assert(!headerContent.includes("ShieldAlert"), 'Header does NOT import or display ShieldAlert icon');
  assert(headerContent.includes("isAuthorizedAdmin"), 'Header calculates isAuthorizedAdmin from auth context');
  assert(headerContent.includes("hasMinimumRole(role, 'admin')"), 'Header uses canonical hasMinimumRole check');
  assert(headerContent.includes("{isAuthorizedAdmin && ("), 'Admin badge is strictly conditioned on isAuthorizedAdmin');
} catch (e) {
  assert(false, `Header.tsx audit error: ${e.message}`);
}

// 3. Audit Navigation.tsx (ensure no stray admin links)
try {
  const navPath = path.join(rootDir, 'src/components/common/Navigation.tsx');
  const navContent = fs.readFileSync(navPath, 'utf8');

  assert(!navContent.includes("nav.admin"), 'Navigation does NOT contain nav.admin');
  assert(!navContent.includes("to=\"/admin\""), 'Navigation does NOT contain /admin routes');
  assert(!navContent.includes("to=\"/login\""), 'Navigation does NOT contain /login routes');
} catch (e) {
  assert(false, `Navigation.tsx audit error: ${e.message}`);
}

// 4. Audit Footer.tsx for conditional rendering
try {
  const footerPath = path.join(rootDir, 'src/components/common/Footer.tsx');
  const footerContent = fs.readFileSync(footerPath, 'utf8');

  assert(footerContent.includes("isAuthorizedAdmin"), 'Footer calculates isAuthorizedAdmin from auth context');
  assert(footerContent.includes("hasMinimumRole(role, 'admin')"), 'Footer uses canonical hasMinimumRole check');
  assert(footerContent.includes("{isAuthorizedAdmin && ("), 'Admin link in Footer is strictly conditioned on isAuthorizedAdmin');
  assert(!footerContent.includes("to=\"/login\""), 'Footer does NOT contain hardcoded login link');
} catch (e) {
  assert(false, `Footer.tsx audit error: ${e.message}`);
}

console.log('\n================================================================');
console.log(`TOTAL: ${passed} passed, ${failed} failed`);
console.log('================================================================\n');

if (failed > 0) {
  process.exit(1);
}
