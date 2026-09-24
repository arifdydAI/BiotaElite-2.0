// BiotaElite 2.0 Auth Context & RBAC Manager
// Production Firebase Authentication with Role-Based Access Control and Local Dev Fallback.
//
// Security Architecture:
// 1. Authoritative Identity: Firebase Authentication UID.
// 2. Authoritative Profile & Role: Cloud Firestore `/users/{uid}` collection.
// 3. Fallback: Local simulated session for development/offline mode when Firebase credentials are not configured.
// 4. Default State: null (unauthenticated). Loading state shown during verification.
// 5. Passwords: Never stored in Firestore or localStorage.

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User as FirebaseUser
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import { auth, db, shouldUseLocalFallback } from '../config/firebase';
import { ROLE_PERMISSIONS, type UserProfile, type UserRole, type PermissionMatrix } from '../types/auth';

export type AuthStatus = 'loading' | 'unauthenticated' | 'authenticated' | 'error';

interface AuthContextType {
  currentUser: UserProfile | null;
  role: UserRole;
  permissions: PermissionMatrix;
  isAuthenticated: boolean;
  authStatus: AuthStatus;
  login: (email: string, password: string, devRole?: UserRole) => Promise<void>;
  logout: () => void | Promise<void>;
  // DEV-ONLY: undefined in production builds. Cannot grant real backend privileges.
  devOnlySetRole: ((newRole: UserRole) => void) | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>('unauthenticated');

  // ---------------------------------------------------------------------------
  // Authentication State Initialization & Persistence
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const activeAuth = auth;
    const activeDb = db;

    // Branch A: Local Development Fallback Mode
    if (shouldUseLocalFallback || !activeAuth || !activeDb) {
      if (typeof window !== 'undefined') {
        try {
          const cached = window.sessionStorage.getItem('biota_dev_session');
          if (cached) {
            const user = JSON.parse(cached);
            setCurrentUser(user);
            setAuthStatus('authenticated');
          } else {
            setAuthStatus('unauthenticated');
          }
        } catch {
          setAuthStatus('unauthenticated');
        }
      } else {
        setAuthStatus('unauthenticated');
      }
      return;
    }

    // Branch B: Production Firebase Authentication Listener
    setAuthStatus('loading');
    const unsubscribe = onAuthStateChanged(activeAuth, async (firebaseUser: FirebaseUser | null) => {
      if (!firebaseUser) {
        setCurrentUser(null);
        setAuthStatus('unauthenticated');
        return;
      }

      try {
        const userDocRef = doc(activeDb, 'users', firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          if (data.isActive === false) {
            // Deactivated account — revoke session immediately
            await signOut(activeAuth);
            setCurrentUser(null);
            setAuthStatus('unauthenticated');
            return;
          }

          const profile: UserProfile = {
            uid: firebaseUser.uid,
            email: firebaseUser.email || (data.email as string) || '',
            displayName: (data.displayName as string) || firebaseUser.displayName || (firebaseUser.email?.split('@')[0] ?? 'Staff User'),
            role: (data.role as UserRole) || 'public_user',
            institution: data.institution as string | undefined,
            specialization: data.specialization as string | undefined,
            createdAt: (data.createdAt as string) || new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
            isActive: true,
          };

          // Asynchronously record lastLoginAt timestamp
          updateDoc(userDocRef, { lastLoginAt: new Date().toISOString() }).catch(() => {});

          setCurrentUser(profile);
          setAuthStatus('authenticated');
        } else {
          // New authenticated user document creation with default safe role
          const newProfile: UserProfile = {
            uid: firebaseUser.uid,
            email: firebaseUser.email || '',
            displayName: firebaseUser.displayName || (firebaseUser.email?.split('@')[0] ?? 'User'),
            role: 'public_user',
            createdAt: new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
            isActive: true,
          };

          await setDoc(userDocRef, newProfile);
          setCurrentUser(newProfile);
          setAuthStatus('authenticated');
        }
      } catch (err) {
        console.error('[AuthContext] Error retrieving user profile from Firestore:', err);
        // Fallback: minimal authenticated profile with zero administrative privileges
        setCurrentUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || (firebaseUser.email?.split('@')[0] ?? 'User'),
          role: 'public_user',
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          isActive: true,
        });
        setAuthStatus('authenticated');
      }
    });

    return () => unsubscribe();
  }, []);

  // Role and permissions derived from authoritative currentUser profile
  const role: UserRole = currentUser ? currentUser.role : 'public_user';
  const permissions: PermissionMatrix = ROLE_PERMISSIONS[role];
  const isAuthenticated = authStatus === 'authenticated' && currentUser !== null;

  // ---------------------------------------------------------------------------
  // login — Explicit Authentication Action
  // ---------------------------------------------------------------------------
  const login = async (email: string, password: string, devRole: UserRole = 'admin'): Promise<void> => {
    const activeAuth = auth;

    if (shouldUseLocalFallback || !activeAuth) {
      // DEV FALLBACK ONLY: mock session for local development
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
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('biota_dev_session', JSON.stringify(mockUser));
      }
      setCurrentUser(mockUser);
      setAuthStatus('authenticated');
      return;
    }

    // Production Firebase Authentication
    try {
      setAuthStatus('loading');
      await signInWithEmailAndPassword(activeAuth, email, password);
      // onAuthStateChanged will handle profile retrieval and state propagation
    } catch (err: unknown) {
      setAuthStatus('unauthenticated');
      const firebaseError = err as { code?: string; message?: string };
      switch (firebaseError.code) {
        case 'auth/invalid-credential':
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          throw new Error('Invalid email or password.');
        case 'auth/user-disabled':
          throw new Error('This account has been disabled. Please contact a Super Administrator.');
        case 'auth/too-many-requests':
          throw new Error('Too many failed login attempts. Access temporarily restricted. Try again later.');
        case 'auth/network-request-failed':
          throw new Error('Network error connecting to authentication service. Check your connection.');
        case 'auth/invalid-email':
          throw new Error('Please enter a valid email address.');
        default:
          throw new Error(firebaseError.message || 'Authentication failed. Please check your credentials.');
      }
    }
  };

  // ---------------------------------------------------------------------------
  // logout — Revoke Session
  // ---------------------------------------------------------------------------
  const logout = async () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem('biota_dev_session');
    }
    const activeAuth = auth;
    if (activeAuth && !shouldUseLocalFallback) {
      try {
        await signOut(activeAuth);
      } catch (err) {
        console.warn('[AuthContext] Firebase signOut warning:', err);
      }
    }
    setCurrentUser(null);
    setAuthStatus('unauthenticated');
  };

  // ---------------------------------------------------------------------------
  // DEV-ONLY: Role emulation for RBAC QA testing in development mode
  // ---------------------------------------------------------------------------
  const devOnlySetRole: ((newRole: UserRole) => void) | undefined = import.meta.env.DEV
    ? (newRole: UserRole) => {
        if (newRole === 'public_user') {
          if (typeof window !== 'undefined') {
            window.sessionStorage.removeItem('biota_dev_session');
          }
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
          if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('biota_dev_session', JSON.stringify(emulatedUser));
          }
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
