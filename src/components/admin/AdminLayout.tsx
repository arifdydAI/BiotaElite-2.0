// BiotaElite 2.0 Admin Portal Layout & Role-Aware Shell
// SECURITY HARDENED - MASTER-FIX-01
//
// QA Role Switcher is ONLY rendered in development builds (import.meta.env.DEV).
// In production: devOnlySetRole is undefined and the switcher is not rendered.
// The switcher calls devOnlySetRole which cannot affect real Firebase auth.
import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types/auth';
import {
  LayoutDashboard, Fish, Layers, CheckSquare, Library, History,
  Users, Settings, ArrowLeft, Shield, Upload, Database,
  AlertTriangle, LogOut, FlaskConical
} from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { currentUser, role, devOnlySetRole, logout } = useAuth();

  const handleDevRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (devOnlySetRole) {
      devOnlySetRole(e.target.value as UserRole);
    }
  };

  const menuItems = [
    { to: '/admin', end: true, label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { to: '/admin/species', label: 'Species Manager', icon: <Fish size={18} /> },
    { to: '/admin/taxonomy', label: 'Taxonomy Manager', icon: <Layers size={18} /> },
    { to: '/admin/reviews', label: 'Verification Queue', icon: <CheckSquare size={18} /> },
    { to: '/admin/references', label: 'Reference Sources', icon: <Library size={18} /> },
    { to: '/admin/audit-logs', label: 'Audit Trail', icon: <History size={18} /> },
    { separator: true, label: 'Data Ingestion' },
    { to: '/admin/batch-import', label: 'Batch Import', icon: <Upload size={18} /> },
    { to: '/admin/import-batches', label: 'Import History', icon: <Database size={18} /> },
    { to: '/admin/conflicts', label: 'Conflict Center', icon: <AlertTriangle size={18} /> },
    { separator: true, label: 'System' },
    { to: '/admin/users', label: 'Users & Roles', icon: <Users size={18} /> },
    { to: '/admin/settings', label: 'System Settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="admin-shell">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="brand-icon-box" style={{ width: '32px', height: '32px' }}>
              <Shield size={18} />
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>BiotaElite Admin</span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Governance & Curation System</span>
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
          {menuItems.map((item, idx) => {
            if ('separator' in item && item.separator) {
              return (
                <div key={idx} style={{ padding: '0.6rem 0.85rem 0.25rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', opacity: 0.7, marginTop: '0.25rem' }}>
                  {item.label}
                </div>
              );
            }
            const navItem = item as { to: string; end?: boolean; label: string; icon: React.ReactNode };
            return (
              <NavLink
                key={navItem.to}
                to={navItem.to}
                end={navItem.end}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={{ padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-md)', gap: '0.65rem' }}
              >
                {navItem.icon}
                <span style={{ fontSize: '0.875rem' }}>{navItem.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div style={{ padding: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link
            to="/"
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', justifyContent: 'center', gap: '0.4rem', fontSize: '0.8rem' }}
          >
            <ArrowLeft size={14} />
            <span>Return to Public Site</span>
          </Link>
          <button
            onClick={logout}
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', justifyContent: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#f87171', borderColor: 'rgba(248, 113, 113, 0.3)' }}
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Header */}
        <header
          style={{
            height: '60px',
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Active Operator:</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {currentUser?.displayName || 'Administrator'}
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                padding: '0.15rem 0.4rem',
                borderRadius: '3px',
                background: 'rgba(16, 185, 129, 0.12)',
                color: 'var(--accent-emerald-light)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}
            >
              {role.replace('_', ' ')}
            </span>
          </div>

          {/* SECURITY: QA Role Switcher - DEV builds ONLY.
              import.meta.env.DEV is statically false in production (Vite replacement).
              devOnlySetRole is also undefined in production as a second guard.
              This block is eliminated by tree-shaking in production builds. */}
          {import.meta.env.DEV && devOnlySetRole && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: '6px',
                padding: '0.3rem 0.75rem',
              }}
            >
              <FlaskConical size={13} style={{ color: '#f59e0b' }} />
              <label style={{ fontSize: '0.72rem', color: '#f59e0b', fontWeight: 700 }}>
                DEV - Emulate Role:
              </label>
              <select
                id="dev-qa-role-switcher"
                value={role}
                onChange={handleDevRoleChange}
                className="form-select"
                style={{ width: 'auto', padding: '0.25rem 0.6rem', fontSize: '0.78rem', borderColor: 'rgba(245, 158, 11, 0.4)' }}
              >
                <option value="super_admin">Super Admin (Full Access)</option>
                <option value="admin">Admin (Broad Management)</option>
                <option value="reviewer">Reviewer (Verification/Peer Review)</option>
                <option value="editor">Editor (Create/Edit Drafts)</option>
                <option value="data_manager">Data Manager (Taxa &amp; Nomenclature)</option>
                <option value="public_user">Public User (Read Only)</option>
              </select>
            </div>
          )}
        </header>

        {/* Page Content */}
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
