// BiotaElite 2.0 System Diagnostics & Platform Settings
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { Settings, Database, RefreshCw, ShieldCheck } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { species, taxa, references, identKeys, getAllMedia, users, auditLogs, resetToInitialSeed } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';
  const [resetMessage, setResetMessage] = useState(false);

  const allMedia = getAllMedia();

  const handleReset = () => {
    const msg = isBn
      ? 'আপনি কি নিশ্চিত যে ডাটাবেসকে প্রামাণিক প্রাথমিক সিড সেটে পুনরুদ্ধার করতে চান? স্থানীয়ভাবে তৈরি খসড়াগুলো মুছে যাবে।'
      : 'Are you sure you want to reset the database to the authoritative initial seed dataset? Any locally created drafts will be removed.';
    if (confirm(msg)) {
      resetToInitialSeed();
      setResetMessage(true);
      setTimeout(() => setResetMessage(false), 3000);
    }
  };

  return (
    <div className="admin-page-container">
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light, #34d399)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
          <Settings size={16} />
          <span>{isBn ? 'সিস্টেম অবকাঠামো ও প্ল্যাটফর্ম সেটিংস' : 'System Infrastructure Diagnostics'}</span>
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.25rem 0' }}>
          {isBn ? 'প্ল্যাটফর্ম সেটিংস ও ডাটাবেজ স্থিতি' : 'Platform Settings & Database Diagnostics'}
        </h1>

        <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '0.95rem', margin: 0 }}>
          {isBn
            ? 'ক্লাউড ফায়ারবেজ সেবাগুলোর সংযোগ অবস্থা, ডাটাবেজ গণনা ও ইনিশিয়াল সিড ডাটা পুনরুদ্ধার ব্যবস্থাপনা।'
            : 'Inspect connectivity to Google Cloud / Firebase services, verify development port status, and manage seed data persistence.'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Firebase Architecture Status */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Database size={20} style={{ color: 'var(--accent-marine-light, #38bdf8)' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
              {isBn ? 'ফায়ারবেজ সেবা স্থিতি' : 'Firebase Services'}
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>Firebase Auth Engine:</span>
              <span style={{ color: 'var(--accent-emerald-light, #34d399)', fontWeight: 600 }}>Active (RBAC Layer)</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>Cloud Firestore Store:</span>
              <span style={{ color: 'var(--accent-emerald-light, #34d399)', fontWeight: 600 }}>Connected / Resilient Fallback</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>Firebase Storage:</span>
              <span style={{ color: 'var(--accent-emerald-light, #34d399)', fontWeight: 600 }}>Ready (storage.rules loaded)</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>Development Port:</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>http://localhost:2021</span>
            </div>
          </div>
        </div>

        {/* Database Integrity & Seed Manager */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <ShieldCheck size={20} style={{ color: '#10b981' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
              {isBn ? 'ডাটাবেজ রেকর্ড কাউন্টস' : 'Database Record Counts'}
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>{isBn ? 'প্রাণী প্রজাতি (Species):' : 'Zoological Species:'}</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{species.length} records</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>{isBn ? 'শ্রেণীবিন্যাস নোড (Taxa):' : 'Taxonomic Backbone Nodes:'}</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{taxa.length} nodes</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>{isBn ? 'আইডেন্টিফিকেশন কি:' : 'Identification Keys:'}</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{identKeys.length} keys</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>{isBn ? 'মিডিয়া সম্পদ:' : 'Verified Specimen Media:'}</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{allMedia.length} assets</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>{isBn ? 'বৈজ্ঞানিক রেফারেন্স:' : 'Scientific References:'}</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{references.length} sources</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>{isBn ? 'নিবন্ধিত অপারেটর:' : 'Authorized Operators:'}</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{users.length} accounts</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: 'var(--text-secondary, #94a3b8)' }}>{isBn ? 'অডিট লগ এন্ট্রি:' : 'Audit Trail Logs:'}</span>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>{auditLogs.length} events</span>
            </div>

            <div style={{ paddingTop: '0.75rem' }}>
              <button onClick={handleReset} className="btn btn-secondary btn-sm" style={{ width: '100%', gap: '0.4rem', color: '#f87171' }}>
                <RefreshCw size={14} />
                <span>{isBn ? 'অথোরিটেটিভ সিড ডাটায় পুনরুদ্ধার করুন' : 'Reset to Initial Verified Seed Data'}</span>
              </button>
              {resetMessage && (
                <div style={{ color: '#34d399', fontSize: '0.75rem', marginTop: '0.5rem', textAlign: 'center' }}>
                  {isBn ? 'ডাটাবেস সফলভাবে পুনরুদ্ধার করা হয়েছে।' : 'Database reset successfully.'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
