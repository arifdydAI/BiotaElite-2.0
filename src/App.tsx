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

// Auth Pages
import { LoginPage } from './pages/auth/LoginPage';
import { AccessDeniedPage } from './pages/auth/AccessDeniedPage';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { SpeciesPage } from './pages/public/SpeciesPage';
import { SpeciesDetailPage } from './pages/public/SpeciesDetailPage';
import { FishPage } from './pages/public/FishPage';
import { MarinePage } from './pages/public/MarinePage';
import { BangladeshPage } from './pages/public/BangladeshPage';
import { TaxonomyPage } from './pages/public/TaxonomyPage';
import { ScientificNamesPage } from './pages/public/ScientificNamesPage';
import { IdentificationPage } from './pages/public/IdentificationPage';
import { ReferencesPage } from './pages/public/ReferencesPage';
import { SearchPage } from './pages/public/SearchPage';
import { AboutPage } from './pages/public/AboutPage';

// Core Zoology & Dichotomous Key Pages
import { AnimalKingdomPage } from './pages/public/AnimalKingdomPage';
import { AnimalBiodiversityPage } from './pages/public/AnimalBiodiversityPage';
import { ComparativeZoologyPage } from './pages/public/ComparativeZoologyPage';
import { EvolutionPhylogenyPage } from './pages/public/EvolutionPhylogenyPage';
import { AnatomyPhysiologyPage } from './pages/public/AnatomyPhysiologyPage';
import { VertebrateExplorerPage } from './pages/public/VertebrateExplorerPage';
import { DichotomousKeyPage } from './pages/public/DichotomousKeyPage';

// Admin Components & Pages
import { AdminLayout } from './components/admin/AdminLayout';
import { DashboardPage } from './pages/admin/DashboardPage';
import { SpeciesManagerPage } from './pages/admin/SpeciesManagerPage';
import { TaxonomyManagerPage } from './pages/admin/TaxonomyManagerPage';
import { ReviewQueuePage } from './pages/admin/ReviewQueuePage';
import { ReferenceManagerPage } from './pages/admin/ReferenceManagerPage';
import { AuditLogPage } from './pages/admin/AuditLogPage';
import { UsersPage } from './pages/admin/UsersPage';
import { SettingsPage } from './pages/admin/SettingsPage';
import { BatchImportPage } from './pages/admin/BatchImportPage';
import { ImportBatchesPage } from './pages/admin/ImportBatchesPage';
import { ConflictCenterPage } from './pages/admin/ConflictCenterPage';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Public Layout Wrapper
const PublicLayout: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <main className="main-content">
        <ErrorBoundary>
          <Outlet />
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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/access-denied" element={<AccessDeniedPage />} />

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
                <Route path="/admin" element={<AdminLayout />}>
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

