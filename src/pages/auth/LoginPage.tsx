// BiotaElite 2.0 Login Page
// SECURITY HARDENED — MASTER-FIX-01
//
// This page is the entry point for all admin access.
// In local fallback/development mode: displays a clearly labeled DEV MODE form.
// In production mode: would render Firebase Auth UI.
//
// The DEV MODE login:
//   - Requires explicit user action (no auto-login)
//   - Clearly labels itself as development-only
//   - Cannot grant real Firebase or backend privileges
//   - Does NOT restore state from localStorage
import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types/auth';
import { Shield, LogIn, AlertTriangle, Compass } from 'lucide-react';

const IS_LOCAL_FALLBACK =
  import.meta.env.VITE_USE_LOCAL_FALLBACK === 'true' ||
  !import.meta.env.VITE_FIREBASE_API_KEY ||
  import.meta.env.VITE_FIREBASE_API_KEY === '';

export const LoginPage: React.FC = () => {
  const { authStatus, login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [devRole, setDevRole] = useState<UserRole>('admin');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If already authenticated, redirect to original destination or /admin
  if (authStatus === 'authenticated') {
    const from = (location.state as { from?: Location })?.from?.pathname || '/admin';
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login(email, password, IS_LOCAL_FALLBACK ? devRole : undefined);
      const from = (location.state as { from?: Location })?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg-base, #0a1015)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div style={{ width: '100%', maxWidth: '440px' }}>
        {/* Brand */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                background: 'linear-gradient(135deg, #10b981, #0ea5e9)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Compass size={24} color="#fff" />
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>
              BiotaElite <span style={{ color: '#10b981' }}>2.0</span>
            </span>
          </div>
          <p style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.9rem' }}>
            Administrative Portal — Authentication Required
          </p>
        </div>

        {/* DEV MODE Warning Banner */}
        {IS_LOCAL_FALLBACK && (
          <div
            style={{
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              borderRadius: '8px',
              padding: '0.85rem 1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              gap: '0.6rem',
              alignItems: 'flex-start',
            }}
          >
            <AlertTriangle size={16} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f59e0b', marginBottom: '0.2rem' }}>
                DEV MODE — LOCAL FALLBACK ACTIVE
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(245, 158, 11, 0.8)', lineHeight: 1.5 }}>
                Firebase is not configured. This login creates a local mock session only.
                No real backend privileges are granted. Role selection is for UI testing purposes only.
              </div>
            </div>
          </div>
        )}

        {/* Login Form */}
        <div
          style={{
            background: 'var(--bg-surface, #0f1921)',
            border: '1px solid var(--border-subtle, rgba(255,255,255,0.07))',
            borderRadius: '12px',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Shield size={18} style={{ color: '#10b981' }} />
            <h1 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
              {IS_LOCAL_FALLBACK ? 'Development Login' : 'Administrator Login'}
            </h1>
          </div>

          {error && (
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '6px',
                padding: '0.7rem 0.9rem',
                marginBottom: '1.25rem',
                fontSize: '0.85rem',
                color: '#f87171',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label
                htmlFor="login-email"
                style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}
              >
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder={IS_LOCAL_FALLBACK ? 'dev@biotaelite.org' : 'admin@biotaelite.org'}
                className="form-input"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary, #94a3b8)', marginBottom: '0.4rem' }}
              >
                Password {IS_LOCAL_FALLBACK && <span style={{ fontWeight: 400, color: 'var(--text-muted, #475569)' }}>(any value in DEV mode)</span>}
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="form-input"
                style={{ width: '100%' }}
              />
            </div>

            {/* DEV MODE: Role selection for QA testing */}
            {IS_LOCAL_FALLBACK && (
              <div>
                <label
                  htmlFor="login-dev-role"
                  style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#f59e0b', marginBottom: '0.4rem' }}
                >
                  ⚠ DEV: Select Role to Emulate
                </label>
                <select
                  id="login-dev-role"
                  value={devRole}
                  onChange={e => setDevRole(e.target.value as UserRole)}
                  className="form-select"
                  style={{ width: '100%', borderColor: 'rgba(245, 158, 11, 0.4)' }}
                >
                  <option value="super_admin">Super Admin (Full Access)</option>
                  <option value="admin">Admin (Broad Management)</option>
                  <option value="reviewer">Reviewer (Verification/Peer Review)</option>
                  <option value="editor">Editor (Create/Edit Drafts)</option>
                  <option value="data_manager">Data Manager (Taxa & Nomenclature)</option>
                </select>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted, #475569)', marginTop: '0.3rem' }}>
                  This selection has no effect on any backend. For UI/RBAC testing only.
                </p>
              </div>
            )}

            <button
              id="login-submit"
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
            >
              <LogIn size={16} />
              <span>{isLoading ? 'Authenticating…' : IS_LOCAL_FALLBACK ? 'Login (DEV MODE)' : 'Sign In'}</span>
            </button>
          </form>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a
            href="/"
            style={{ fontSize: '0.85rem', color: 'var(--text-muted, #64748b)', textDecoration: 'none' }}
          >
            ← Return to Public Site
          </a>
        </div>
      </div>
    </div>
  );
};
