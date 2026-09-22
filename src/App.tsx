// BiotaElite 2.0 Root Application & Routing Architecture
// SECURITY HARDENED — MASTER-FIX-01
//
// All /admin routes are protected by RequireAuth.
// Unauthenticated users are redirected to /login.
// Insufficient-role users are redirected to /access-denied.
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { BiodiversityProvider } from './context/BiodiversityContext';

// Security components
import { RequireAuth } from './components/auth/RequireAuth';

// Common Components
import { Header } from './components/common/Header';
import { Navigation } from './components/common/Navigation';
import { Footer } from './components/common/Footer';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Immediate Landing Page (eager for fast initial paint)
import { HomePage } from './pages/public/HomePage';

// Auth Pages (Lazy)
const LoginPage = React.lazy(() => import('./pages/auth/LoginPage').then(m => ({ default: m.LoginPage })));
const AccessDeniedPage = React.lazy(() => import('./pages/auth/AccessDeniedPage').then(m => ({ default: m.AccessDeniedPage })));

// Secondary Public Pages (Lazy)
const SpeciesPage = React.lazy(() => import('./pages/public/SpeciesPage').then(m => ({ default: m.SpeciesPage })));
const SpeciesDetailPage = React.lazy(() => import('./pages/public/SpeciesDetailPage').then(m => ({ default: m.SpeciesDetailPage })));
const FishPage = React.lazy(() => import('./pages/public/FishPage').then(m => ({ default: m.FishPage })));
const MarinePage = React.lazy(() => import('./pages/public/MarinePage').then(m => ({ default: m.MarinePage })));
const BangladeshPage = React.lazy(() => import('./pages/public/BangladeshPage').then(m => ({ default: m.BangladeshPage })));
const TaxonomyPage = React.lazy(() => import('./pages/public/TaxonomyPage').then(m => ({ default: m.TaxonomyPage })));
const ScientificNamesPage = React.lazy(() => import('./pages/public/ScientificNamesPage').then(m => ({ default: m.ScientificNamesPage })));
const IdentificationPage = React.lazy(() => import('./pages/public/IdentificationPage').then(m => ({ default: m.IdentificationPage })));
const ReferencesPage = React.lazy(() => import('./pages/public/ReferencesPage').then(m => ({ default: m.ReferencesPage })));
const SearchPage = React.lazy(() => import('./pages/public/SearchPage').then(m => ({ default: m.SearchPage })));
const AboutPage = React.lazy(() => import('./pages/public/AboutPage').then(m => ({ default: m.AboutPage })));

// Core Zoology & Dichotomous Key Pages (Lazy)
const AnimalKingdomPage = React.lazy(() => import('./pages/public/AnimalKingdomPage').then(m => ({ default: m.AnimalKingdomPage })));
const AnimalBiodiversityPage = React.lazy(() => import('./pages/public/AnimalBiodiversityPage').then(m => ({ default: m.AnimalBiodiversityPage })));
const ComparativeZoologyPage = React.lazy(() => import('./pages/public/ComparativeZoologyPage').then(m => ({ default: m.ComparativeZoologyPage })));
const EvolutionPhylogenyPage = React.lazy(() => import('./pages/public/EvolutionPhylogenyPage').then(m => ({ default: m.EvolutionPhylogenyPage })));
const AnatomyPhysiologyPage = React.lazy(() => import('./pages/public/AnatomyPhysiologyPage').then(m => ({ default: m.AnatomyPhysiologyPage })));
const VertebrateExplorerPage = React.lazy(() => import('./pages/public/VertebrateExplorerPage').then(m => ({ default: m.VertebrateExplorerPage })));
const DichotomousKeyPage = React.lazy(() => import('./pages/public/DichotomousKeyPage').then(m => ({ default: m.DichotomousKeyPage })));

// Admin Components & Pages (Lazy)
const AdminLayout = React.lazy(() => import('./components/admin/AdminLayout').then(m => ({ default: m.AdminLayout })));
const DashboardPage = React.lazy(() => import('./pages/admin/DashboardPage').then(m => ({ default: m.DashboardPage })));
const SpeciesManagerPage = React.lazy(() => import('./pages/admin/SpeciesManagerPage').then(m => ({ default: m.SpeciesManagerPage })));
const TaxonomyManagerPage = React.lazy(() => import('./pages/admin/TaxonomyManagerPage').then(m => ({ default: m.TaxonomyManagerPage })));
const ReviewQueuePage = React.lazy(() => import('./pages/admin/ReviewQueuePage').then(m => ({ default: m.ReviewQueuePage })));
const ReferenceManagerPage = React.lazy(() => import('./pages/admin/ReferenceManagerPage').then(m => ({ default: m.ReferenceManagerPage })));
const AuditLogPage = React.lazy(() => import('./pages/admin/AuditLogPage').then(m => ({ default: m.AuditLogPage })));
const UsersPage = React.lazy(() => import('./pages/admin/UsersPage').then(m => ({ default: m.UsersPage })));
const SettingsPage = React.lazy(() => import('./pages/admin/SettingsPage').then(m => ({ default: m.SettingsPage })));
const BatchImportPage = React.lazy(() => import('./pages/admin/BatchImportPage').then(m => ({ default: m.BatchImportPage })));
const ImportBatchesPage = React.lazy(() => import('./pages/admin/ImportBatchesPage').then(m => ({ default: m.ImportBatchesPage })));
const ConflictCenterPage = React.lazy(() => import('./pages/admin/ConflictCenterPage').then(m => ({ default: m.ConflictCenterPage })));

// Lightweight Route Transition Fallback
const RouteLoadingFallback: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', padding: '2rem' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      <div
        style={{
          width: '32px',
          height: '32px',
          border: '3px solid rgba(16, 185, 129, 0.2)',
          borderTopColor: 'var(--color-primary, #10b981)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }}
      />
      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted, #94a3b8)' }}>Loading module...</span>
    </div>
  </div>
);

// Public Layout Wrapper
const PublicLayout: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <main className="main-content">
        <ErrorBoundary>
          <React.Suspense fallback={<RouteLoadingFallback />}>
            <Outlet />
          </React.Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LanguageProvider>
          <BiodiversityProvider>
            <Routes>
              {/* ----------------------------------------------------------------
                PUBLIC AUTH ROUTES — No authentication required.
              ---------------------------------------------------------------- */}
              <Route path="/login" element={<React.Suspense fallback={<RouteLoadingFallback />}><LoginPage /></React.Suspense>} />
              <Route path="/access-denied" element={<React.Suspense fallback={<RouteLoadingFallback />}><AccessDeniedPage /></React.Suspense>} />

              {/* ----------------------------------------------------------------
                PUBLIC BIODIVERSITY SURFACE — No authentication required.
                Preserves public read access to all published content.
              ---------------------------------------------------------------- */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/species" element={<SpeciesPage />} />
                <Route path="/species/:id" element={<SpeciesDetailPage />} />
                <Route path="/fish" element={<FishPage />} />
                <Route path="/fish/group/:groupId" element={<FishPage />} />
                <Route path="/fish/class/:classId" element={<FishPage />} />
                <Route path="/fish/order/:orderId" element={<FishPage />} />
                <Route path="/fish/family/:familyId" element={<FishPage />} />
                <Route path="/fish/genus/:genusId" element={<FishPage />} />
                <Route path="/fish/:taxonSlug" element={<FishPage />} />
                <Route path="/marine" element={<MarinePage />} />
                <Route path="/marine/phylum/:phylumId" element={<MarinePage />} />
                <Route path="/marine/class/:classId" element={<MarinePage />} />
                <Route path="/marine/order/:orderId" element={<MarinePage />} />
                <Route path="/bangladesh" element={<BangladeshPage />} />
                <Route path="/taxonomy" element={<TaxonomyPage />} />
                <Route path="/taxonomy/:taxonSlug" element={<TaxonomyPage />} />
                <Route path="/taxonomy/:rank/:taxonSlug" element={<TaxonomyPage />} />
                <Route path="/scientific-names" element={<ScientificNamesPage />} />
                <Route path="/synonyms" element={<ScientificNamesPage />} />
                <Route path="/identification" element={<IdentificationPage />} />
                <Route path="/dichotomous-key" element={<DichotomousKeyPage />} />
                <Route path="/dichotomous-key/:keyId" element={<DichotomousKeyPage />} />
                <Route path="/animal-kingdom" element={<AnimalKingdomPage />} />
                <Route path="/animal-kingdom/:phylumSlug" element={<AnimalKingdomPage />} />
                <Route path="/animal-biodiversity" element={<AnimalBiodiversityPage />} />
                <Route path="/comparative-zoology" element={<ComparativeZoologyPage />} />
                <Route path="/evolution-phylogeny" element={<EvolutionPhylogenyPage />} />
                <Route path="/anatomy-physiology" element={<AnatomyPhysiologyPage />} />
                <Route path="/vertebrates" element={<VertebrateExplorerPage />} />
                <Route path="/vertebrates/:classSlug" element={<VertebrateExplorerPage />} />
                <Route path="/references" element={<ReferencesPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Route>

              {/* ----------------------------------------------------------------
                ADMINISTRATIVE GOVERNANCE SURFACE — PROTECTED.
                RequireAuth enforces: authenticated session + minimum role.
                Unauthenticated → redirect to /login
                Insufficient role → redirect to /access-denied
                All /admin sub-routes inherit this protection.
              ---------------------------------------------------------------- */}
              <Route element={<RequireAuth minimumRole="admin" />}>
                <Route path="/admin" element={<React.Suspense fallback={<RouteLoadingFallback />}><AdminLayout /></React.Suspense>}>
                  <Route index element={<DashboardPage />} />
                  <Route path="species" element={<SpeciesManagerPage />} />
                  <Route path="taxonomy" element={<TaxonomyManagerPage />} />
                  <Route path="reviews" element={<ReviewQueuePage />} />
                  <Route path="references" element={<ReferenceManagerPage />} />
                  <Route path="audit-logs" element={<AuditLogPage />} />
                  <Route path="batch-import" element={<BatchImportPage />} />
                  <Route path="import-batches" element={<ImportBatchesPage />} />
                  <Route path="conflicts" element={<ConflictCenterPage />} />
                  {/* Users & Settings: super_admin only */}
                  <Route element={<RequireAuth minimumRole="super_admin" />}>
                    <Route path="users" element={<UsersPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </BiodiversityProvider>
        </LanguageProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

