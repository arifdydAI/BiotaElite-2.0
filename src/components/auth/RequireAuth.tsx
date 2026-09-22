// BiotaElite 2.0 Route Guard — RequireAuth
// SECURITY HARDENED — MASTER-FIX-01
//
// This component MUST wrap all /admin/* routes.
// It enforces authentication and minimum role requirements at the routing layer.
//
// Security model:
//   authStatus === 'loading'       → show loading spinner (no admin content shown)
//   authStatus === 'unauthenticated' → redirect to /login (no admin content shown)
//   authStatus === 'error'         → redirect to /login with error (no admin content shown)
//   authenticated + role < required → show AccessDenied (no admin content shown)
//   authenticated + role >= required → render admin content
//
// SECURITY: This guard prevents:
//   - Unauthenticated visitors from reaching /admin routes (Case 1, 2)
//   - Public users from reaching admin routes (Case 3)
//   - Lower-privileged users from reaching high-privilege routes (Cases 3, 4)
//   - localStorage manipulation from granting access (auth state is not from localStorage)
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types/auth';

// Role hierarchy — used to check minimum role requirement.
// Higher index = higher privilege.
export const ROLE_HIERARCHY: UserRole[] = [
  'public_user',
  'data_manager',
  'editor',
  'reviewer',
  'admin',
  'super_admin',
];

export function hasMinimumRole(currentRole: UserRole, minimumRole: UserRole): boolean {
  const currentIdx = ROLE_HIERARCHY.indexOf(currentRole);
  const minimumIdx = ROLE_HIERARCHY.indexOf(minimumRole);
  if (currentIdx === -1 || minimumIdx === -1) return false;
  return currentIdx >= minimumIdx;
}

interface RequireAuthProps {
  // Minimum role required to access this route. Defaults to 'admin'.
  minimumRole?: UserRole;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ minimumRole = 'admin' }) => {
  const { authStatus, currentUser, role } = useAuth();
  const location = useLocation();

  // CASE: Auth check in progress — show loading, do NOT render protected content.
  if (authStatus === 'loading') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: 'var(--bg-base, #0a1015)',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(16, 185, 129, 0.2)',
            borderTopColor: '#10b981',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <span style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.9rem' }}>
          Verifying authentication…
        </span>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // CASE: Auth error — fail closed, redirect to login.
  if (authStatus === 'error') {
    return <Navigate to="/login" state={{ from: location, error: 'auth_error' }} replace />;
  }

  // CASE: Not authenticated — redirect to login, preserve intended destination.
  if (authStatus !== 'authenticated' || currentUser === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // CASE: Authenticated but insufficient role — show access denied.
  if (!hasMinimumRole(role, minimumRole)) {
    return <Navigate to="/access-denied" state={{ requiredRole: minimumRole, currentRole: role }} replace />;
  }

  // CASE: Authenticated and authorized — render the protected route.
  return <Outlet />;
};
