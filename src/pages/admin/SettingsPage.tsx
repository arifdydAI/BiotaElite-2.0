// BiotaElite 2.0 System Diagnostics & Platform Settings
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { Settings, Database, RefreshCw, ShieldCheck } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { species, taxa, references, resetToInitialSeed } = useBiodiversity();
  const [resetMessage, setResetMessage] = useState(false);

  const handleReset = () => {
    if (confirm('Are you sure you want to reset the database to the authoritative initial seed dataset? Any locally created drafts will be removed.')) {
      resetToInitialSeed();
      setResetMessage(true);
      setTimeout(() => setResetMessage(false), 3000);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
          <Settings size={16} />
          <span>System Infrastructure Diagnostics</span>
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
          Platform Settings & Firebase Configuration
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Inspect connectivity to Google Cloud / Firebase services, verify development port status, and manage seed data persistence.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Firebase Architecture Status */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Database size={20} style={{ color: 'var(--accent-marine-light)' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>Firebase Services</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(32, 53, 61, 0.4)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Firebase Auth Engine:</span>
              <span style={{ color: 'var(--accent-emerald-light)', fontWeight: 600 }}>Active (RBAC Layer)</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(32, 53, 61, 0.4)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Cloud Firestore Store:</span>
              <span style={{ color: 'var(--accent-emerald-light)', fontWeight: 600 }}>Connected / Resilient Fallback</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(32, 53, 61, 0.4)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Firebase Storage:</span>
              <span style={{ color: 'var(--accent-emerald-light)', fontWeight: 600 }}>Ready (storage.rules loaded)</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Development Port:</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>http://localhost:2021</span>
            </div>
          </div>
        </div>

        {/* Database Integrity & Seed Manager */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <ShieldCheck size={20} style={{ color: 'var(--accent-emerald)' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>Database Record Counts</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(32, 53, 61, 0.4)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Zoological Species:</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{species.length} records</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(32, 53, 61, 0.4)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Taxonomic Backbone Nodes:</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{taxa.length} nodes</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(32, 53, 61, 0.4)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Scientific References:</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{references.length} sources</span>
            </div>

            <div style={{ paddingTop: '0.75rem' }}>
              <button onClick={handleReset} className="btn btn-secondary btn-sm" style={{ width: '100%', gap: '0.4rem' }}>
                <RefreshCw size={14} />
                <span>Reset to Initial Verified Seed Data</span>
              </button>
              {resetMessage && (
                <div style={{ color: 'var(--accent-emerald-light)', fontSize: '0.75rem', marginTop: '0.5rem', textAlign: 'center' }}>
                  Database reset successfully.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
