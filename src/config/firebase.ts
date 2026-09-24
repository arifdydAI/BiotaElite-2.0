// BiotaElite 2.0 Firebase Architecture & Initialization
// Production-grade client initialization for Authentication, Cloud Firestore, and Storage.
// Follows singleton pattern with graceful fallback for local development and offline environments.

import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

// Determine if live Firebase credentials have been configured via environment variables
export const isLiveFirebaseConfigured = Boolean(
  import.meta.env.VITE_FIREBASE_API_KEY &&
  import.meta.env.VITE_FIREBASE_PROJECT_ID &&
  import.meta.env.VITE_FIREBASE_API_KEY !== 'demo-api-key' &&
  import.meta.env.VITE_FIREBASE_API_KEY !== 'your-api-key-here' &&
  import.meta.env.VITE_USE_LOCAL_FALLBACK !== 'true'
);

export const shouldUseLocalFallback = !isLiveFirebaseConfigured;

// Initialize Firebase App safely (singleton pattern)
let firebaseApp: FirebaseApp | null = null;
let firebaseAuth: Auth | null = null;
let firestoreDb: Firestore | null = null;
let firebaseStorageInstance: FirebaseStorage | null = null;

if (isLiveFirebaseConfigured) {
  try {
    firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    firebaseAuth = getAuth(firebaseApp);
    firestoreDb = getFirestore(firebaseApp);
    firebaseStorageInstance = getStorage(firebaseApp);
  } catch (error) {
    console.warn('[Firebase] Production initialization warning, falling back to local mode:', error);
    firebaseApp = null;
    firebaseAuth = null;
    firestoreDb = null;
    firebaseStorageInstance = null;
  }
}

export const app: FirebaseApp | null = firebaseApp;
export const auth: Auth | null = firebaseAuth;
export const db: Firestore | null = firestoreDb;
export const storage: FirebaseStorage | null = firebaseStorageInstance;
