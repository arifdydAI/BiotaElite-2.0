// BiotaElite 2.0 Access Denied Page
// SECURITY HARDENED — MASTER-FIX-01
//
// Shown when an authenticated user attempts to access a route
// that requires a higher privilege level than their assigned role.
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AccessDeniedPage: React.FC = () => {
  const { role, currentUser, logout } = useAuth();
  const location = useLocation();
  const requiredRole = (location.state as { requiredRole?: string })?.requiredRole;

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
      <div style={{ width: '100%', maxWidth: '480px', textAlign: 'center' }}>
        <div
          style={{
            width: '72px',
            height: '72px',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <ShieldOff size={32} style={{ color: '#f87171' }} />
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
          Access Denied
        </h1>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '0.95rem', marginBottom: '0.5rem', lineHeight: 1.6 }}>
          Your account does not have sufficient privileges to access this area.
        </p>

        {requiredRole && (
          <p style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            Required role: <strong style={{ color: '#f87171' }}>{requiredRole.replace('_', ' ')}</strong>
            {currentUser && (
              <> | Your role: <strong style={{ color: '#94a3b8' }}>{role.replace('_', ' ')}</strong></>
            )}
          </p>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link
            to="/"
            className="btn btn-primary"
            style={{ gap: '0.4rem' }}
          >
            <ArrowLeft size={14} />
            Return to Public Site
          </Link>

          {currentUser && (
            <button
              onClick={logout}
              className="btn btn-secondary"
              style={{ gap: '0.4rem' }}
            >
              Sign Out
            </button>
          )}
        </div>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted, #475569)', marginTop: '2rem' }}>
          If you believe this is an error, contact your system administrator.
        </p>
      </div>
    </div>
  );
};
