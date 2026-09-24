// BiotaElite 2.0 Admin Portal Layout & Role-Aware Shell
// Complete 13-Module Responsive Governance Interface
import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useBiodiversity } from '../../context/BiodiversityContext';
import type { UserRole } from '../../types/auth';
import {
  LayoutDashboard, Fish, Layers, CheckSquare, Library, History,
  Users, Settings, ArrowLeft, Shield, Upload, Database,
  AlertTriangle, LogOut, FlaskConical, MapPin, Key, Image,
  Tag, Activity, Menu, X, Globe
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { currentUser, role, permissions, devOnlySetRole, logout } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const { species, conflicts } = useBiodiversity();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const pendingReviewsCount = species.filter(s => s.lifecycleStatus === 'under_review').length;
  const pendingConflictsCount = conflicts.filter(c => !c.resolution).length;

  const handleDevRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (devOnlySetRole) {
      devOnlySetRole(e.target.value as UserRole);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  interface NavItem {
    to: string;
    end?: boolean;
    label: string;
    icon: React.ReactNode;
    badge?: number | string;
    badgeColor?: string;
    visible?: boolean;
  }

  interface NavSection {
    separator: true;
    label: string;
  }

  type MenuItem = NavItem | NavSection;

  const menuItems: MenuItem[] = [
    // 1. Overview
    { 
      to: '/admin', 
      end: true, 
      label: t('admin.nav.dashboard', 'Dashboard'), 
      icon: <LayoutDashboard size={18} /> 
    },

    // 2. Taxonomic & Monograph Curation
    { separator: true, label: language === 'bn' ? 'প্রাণিবিজ্ঞান কিউরেশন' : 'Zoological Curation' },
    { 
      to: '/admin/species', 
      label: t('admin.nav.species', 'Species Manager'), 
      icon: <Fish size={18} /> 
    },
    { 
      to: '/admin/reviews', 
      label: t('admin.nav.reviewQueue', 'Review Queue'), 
      icon: <CheckSquare size={18} />,
      badge: pendingReviewsCount > 0 ? pendingReviewsCount : undefined,
      badgeColor: '#f59e0b'
    },
    { 
      to: '/admin/bangladesh', 
      label: t('admin.nav.bangladesh', 'Bangladesh Fauna'), 
      icon: <MapPin size={18} /> 
    },
    { 
      to: '/admin/taxonomy', 
      label: t('admin.nav.taxonomy', 'Taxonomy Tree'), 
      icon: <Layers size={18} /> 
    },
    { 
      to: '/admin/ident-keys', 
      label: t('admin.nav.identKeys', 'Identification Keys'), 
      icon: <Key size={18} /> 
    },
    { 
      to: '/admin/media', 
      label: t('admin.nav.media', 'Media & Photos'), 
      icon: <Image size={18} /> 
    },
    { 
      to: '/admin/scientific-names', 
      label: t('admin.nav.scientificNames', 'Names & Synonyms'), 
      icon: <Tag size={18} /> 
    },
    { 
      to: '/admin/references', 
      label: t('admin.nav.references', 'Literature Sources'), 
      icon: <Library size={18} /> 
    },

    // 3. Ingestion & Quality Governance
    { separator: true, label: language === 'bn' ? 'ডেটা ইনজেস্টিং ও মাননিয়ন্ত্রণ' : 'Ingestion & Quality' },
    { 
      to: '/admin/batch-import', 
      label: t('admin.nav.batchImport', 'Batch Data Ingestion'), 
      icon: <Upload size={18} /> 
    },
    { 
      to: '/admin/import-batches', 
      label: language === 'bn' ? 'ইনজেস্টিং ইতিহাস' : 'Import History', 
      icon: <Database size={18} /> 
    },
    { 
      to: '/admin/conflicts', 
      label: language === 'bn' ? 'দ্বন্দ্ব সমাধান' : 'Conflict Center', 
      icon: <AlertTriangle size={18} />,
      badge: pendingConflictsCount > 0 ? pendingConflictsCount : undefined,
      badgeColor: '#ef4444'
    },
    { 
      to: '/admin/data-health', 
      label: t('admin.nav.dataHealth', 'Data Health & QA'), 
      icon: <Activity size={18} /> 
    },
    { 
      to: '/admin/audit-logs', 
      label: t('admin.nav.auditLogs', 'Audit Logs'), 
      icon: <History size={18} />,
      visible: permissions.canViewAuditLogs
    },

    // 4. Administration
    { separator: true, label: language === 'bn' ? 'সিস্টেম প্রশাসন' : 'System Administration' },
    { 
      to: '/admin/users', 
      label: t('admin.nav.users', 'Users & Roles'), 
      icon: <Users size={18} />,
      visible: permissions.canManageUsers || role === 'super_admin'
    },
    { 
      to: '/admin/settings', 
      label: t('admin.nav.settings', 'System Settings'), 
      icon: <Settings size={18} /> 
    },
  ];

  const visibleMenuItems = menuItems.filter(item => {
    if ('separator' in item) return true;
    return item.visible !== false;
  });

  return (
    <div className="admin-shell">
      {/* Mobile Drawer Backdrop */}
      {mobileDrawerOpen && (
        <div
          className="admin-sidebar-backdrop"
          onClick={() => setMobileDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${mobileDrawerOpen ? 'open' : ''}`}>
        <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="brand-icon-box" style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #0284c7, #0d9488)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Shield size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#ffffff', letterSpacing: '-0.01em' }}>BiotaElite</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{t('admin.curationSuite', 'Zoological Curation Suite')}</div>
            </div>
          </div>
          {mobileDrawerOpen && (
            <button
              onClick={() => setMobileDrawerOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.3rem', minWidth: '32px' }}
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: '0.85rem 0.65rem', display: 'flex', flexDirection: 'column', gap: '0.2rem', flex: 1, overflowY: 'auto' }}>
          {visibleMenuItems.map((item, idx) => {
            if ('separator' in item && item.separator) {
              return (
                <div key={idx} style={{ padding: '0.75rem 0.85rem 0.25rem', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', opacity: 0.8 }}>
                  {item.label}
                </div>
              );
            }
            const navItem = item as NavItem;
            return (
              <NavLink
                key={navItem.to}
                to={navItem.to}
                end={navItem.end}
                onClick={() => setMobileDrawerOpen(false)}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={{ padding: '0.55rem 0.8rem', borderRadius: 'var(--radius-md)', gap: '0.65rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              >
                {navItem.icon}
                <span style={{ fontSize: '0.85rem', flex: 1 }}>{navItem.label}</span>
                {navItem.badge !== undefined && (
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '0.1rem 0.45rem',
                      borderRadius: '10px',
                      background: navItem.badgeColor || 'var(--accent-teal)',
                      color: '#000',
                      lineHeight: 1.2
                    }}
                  >
                    {navItem.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div style={{ padding: '0.85rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.4rem', background: 'rgba(0,0,0,0.15)' }}>
          <Link
            to="/"
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', justifyContent: 'center', gap: '0.4rem', fontSize: '0.8rem' }}
          >
            <ArrowLeft size={14} />
            <span>{t('admin.nav.backToSite', 'Public Website')}</span>
          </Link>
          <button
            id="admin-logout-btn"
            onClick={logout}
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', justifyContent: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#f87171', borderColor: 'rgba(248, 113, 113, 0.3)' }}
          >
            <LogOut size={14} />
            <span>{t('admin.nav.logout', 'Sign Out')}</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Header */}
        <header
          style={{
            height: '62px',
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '0 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            position: 'sticky',
            top: 0,
            zIndex: 30,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setMobileDrawerOpen(prev => !prev)}
              className="btn btn-secondary btn-sm admin-mobile-toggle"
              style={{ padding: '0.35rem 0.5rem', alignItems: 'center' }}
              aria-label="Toggle navigation drawer"
            >
              <Menu size={18} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Operator:</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {currentUser?.displayName || 'Administrator'}
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '4px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: 'var(--accent-emerald-light, #34d399)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                }}
              >
                {role.replace('_', ' ')}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Bilingual Toggle */}
            <button
              onClick={toggleLanguage}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.78rem', padding: '0.25rem 0.6rem', gap: '0.35rem' }}
              title="Switch language between English and Bengali"
            >
              <Globe size={13} />
              <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            {/* QA Role Switcher (DEV ONLY) */}
            {import.meta.env.DEV && devOnlySetRole && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.55rem',
                }}
              >
                <FlaskConical size={13} style={{ color: '#f59e0b' }} />
                <span style={{ fontSize: '0.7rem', color: '#f59e0b', fontWeight: 700 }}>DEV:</span>
                <select
                  id="dev-qa-role-switcher"
                  value={role}
                  onChange={handleDevRoleChange}
                  className="form-select"
                  style={{ width: 'auto', padding: '0.2rem 0.5rem', fontSize: '0.75rem', borderColor: 'rgba(245, 158, 11, 0.4)', background: 'transparent' }}
                >
                  <option value="super_admin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="reviewer">Reviewer</option>
                  <option value="editor">Editor</option>
                  <option value="data_manager">Data Manager</option>
                  <option value="public_user">Public User</option>
                </select>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
