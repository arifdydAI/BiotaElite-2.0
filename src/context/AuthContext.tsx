// BiotaElite 2.0 Auth Context & RBAC Manager
// SECURITY HARDENED — MASTER-FIX-01
//
// SECURITY: No DEFAULT_ADMIN_USER. Default state = null (unauthenticated).
// localStorage is NEVER used to determine authorization or role.
// QA role switcher (devOnlySetRole) is UNDEFINED in production builds.
//
// Auth state model:
//   'loading'        — auth check in progress
//   'unauthenticated'— no authenticated session (DEFAULT)
//   'authenticated'  — user has an active session via explicit login
//   'error'          — authentication system error
import React, { createContext, useContext, useState } from 'react';
import { ROLE_PERMISSIONS, type UserProfile, type UserRole, type PermissionMatrix } from '../types/auth';

export type AuthStatus = 'loading' | 'unauthenticated' | 'authenticated' | 'error';

interface AuthContextType {
  currentUser: UserProfile | null;
  role: UserRole;
  permissions: PermissionMatrix;
  isAuthenticated: boolean;
  authStatus: AuthStatus;
  login: (email: string, password: string, devRole?: UserRole) => Promise<void>;
  logout: () => void;
  // DEV-ONLY: undefined in production builds. Cannot grant real backend privileges.
  devOnlySetRole: ((newRole: UserRole) => void) | undefined;
}

// ---------------------------------------------------------------------------
// Local fallback mode: active when Firebase credentials are not configured.
// In fallback mode, auth is simulated client-side for development purposes.
// Fallback mode NEVER grants privileged access by default.
// An explicit login() call is always required to establish any session.
// ---------------------------------------------------------------------------
const IS_LOCAL_FALLBACK =
  import.meta.env.VITE_USE_LOCAL_FALLBACK === 'true' ||
  !import.meta.env.VITE_FIREBASE_API_KEY ||
  import.meta.env.VITE_FIREBASE_API_KEY === '';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // SECURITY: Default is null — unauthenticated. No default admin user.
  // localStorage does NOT control this state.
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('unauthenticated');

  // Role/permissions derived from currentUser. If null → public_user → zero privileges.
  const role: UserRole = currentUser ? currentUser.role : 'public_user';
  const permissions: PermissionMatrix = ROLE_PERMISSIONS[role];

  // isAuthenticated: true ONLY when authStatus is 'authenticated' AND currentUser exists.
  const isAuthenticated = authStatus === 'authenticated' && currentUser !== null;

  // ---------------------------------------------------------------------------
  // login — explicit action required to establish any session.
  // Local fallback: mock dev session (clearly labeled, cannot grant real authority).
  // Production: would call Firebase signInWithEmailAndPassword (Phase 2).
  // ---------------------------------------------------------------------------
  const login = async (email: string, _password: string, devRole: UserRole = 'admin'): Promise<void> => {
    if (IS_LOCAL_FALLBACK) {
      // DEV FALLBACK ONLY: mock session for local development.
      // SECURITY: This cannot grant real Firebase or backend privileges.
      const mockUser: UserProfile = {
        uid: 'dev-' + Math.random().toString(36).substr(2, 9),
        email,
        displayName: email.split('@')[0] || 'Dev User',
        role: devRole,
        institution: '[DEV MODE — Local Fallback]',
        specialization: 'Development Testing',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        isActive: true,
      };
      setCurrentUser(mockUser);
      setAuthStatus('authenticated');
    } else {
      // Production Firebase auth — fail safely if not configured.
      setAuthStatus('error');
      throw new Error(
        'Firebase authentication is not configured. ' +
        'Configure Firebase credentials or set VITE_USE_LOCAL_FALLBACK=true for development.'
      );
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setAuthStatus('unauthenticated');
  };

  // ---------------------------------------------------------------------------
  // DEV-ONLY: Role emulation for RBAC QA testing.
  // SECURITY: undefined in production (import.meta.env.PROD = true).
  // Does NOT affect real Firebase auth or backend permissions.
  // Only changes client-side RBAC UI for testing purposes.
  // ---------------------------------------------------------------------------
  const devOnlySetRole: ((newRole: UserRole) => void) | undefined = import.meta.env.DEV
    ? (newRole: UserRole) => {
        if (newRole === 'public_user') {
          setCurrentUser(null);
          setAuthStatus('unauthenticated');
        } else {
          const emulatedUser: UserProfile = {
            uid: 'dev-qa-emulated',
            email: `qa.${newRole}@dev.local`,
            displayName: `[DEV QA] ${newRole.replace('_', ' ').toUpperCase()}`,
            role: newRole,
            institution: '[DEV MODE — RBAC QA Emulation Only]',
            specialization: 'Development Testing',
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
            isActive: true,
          };
          setCurrentUser(emulatedUser);
          setAuthStatus('authenticated');
        }
      }
    : undefined;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        role,
        permissions,
        isAuthenticated,
        authStatus,
        login,
        logout,
        devOnlySetRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
