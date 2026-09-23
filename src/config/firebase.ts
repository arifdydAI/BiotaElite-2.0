// BiotaElite 2.0 Firebase Architecture & Initialization
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-api-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'biotaelite-biodiversity.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'biotaelite-biodiversity',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'biotaelite-biodiversity.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789012',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789012:web:demoapp',
};

// Check if active credentials exist — must be computed before initializeApp.
export const isLiveFirebaseConfigured = Boolean(
  import.meta.env.VITE_FIREBASE_API_KEY && 
  import.meta.env.VITE_FIREBASE_PROJECT_ID &&
  import.meta.env.VITE_FIREBASE_API_KEY !== 'demo-api-key'
);

export const shouldUseLocalFallback = 
  import.meta.env.VITE_USE_LOCAL_FALLBACK === 'true' || !isLiveFirebaseConfigured;

// Initialize Firebase App (always needed for SDK internals even in fallback mode).
export const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Firebase Services — only instantiated when live credentials are present.
// When running in local fallback mode (no real credentials), these are null.
// This prevents the Firebase SDK from attempting network handshakes to
// googleapis.com on startup, which would timeout on slow cellular connections.
export const auth: Auth | null = isLiveFirebaseConfigured ? getAuth(app) : null;
export const db: Firestore | null = isLiveFirebaseConfigured ? getFirestore(app) : null;
export const storage: FirebaseStorage | null = isLiveFirebaseConfigured ? getStorage(app) : null;

