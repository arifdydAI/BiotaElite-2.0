// BiotaElite 2.0 Scientific Peer-Verification Queue
import React, { useState } from 'react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useAuth } from '../../context/AuthContext';
import { ScientificName } from '../../components/common/ScientificName';
import { StatusBadge } from '../../components/common/StatusBadge';
import { ShieldCheck, Check, X, AlertCircle } from 'lucide-react';

export const ReviewQueuePage: React.FC = () => {
  const { species, verifySpecies, updateSpecies, publishSpecies } = useBiodiversity();
  const { permissions, role } = useAuth();
  const [verifierNotes, setVerifierNotes] = useState<Record<string, string>>({});

  const pendingList = species.filter(s => s.lifecycleStatus === 'under_review' || (!s.isVerified && s.lifecycleStatus !== 'archived'));

  const handleVerify = (id: string) => {
    const notes = verifierNotes[id] || 'Verified against primary literature and taxonomic database consensus.';
    verifySpecies(id, notes);
  };

  const handleReject = (id: string) => {
    const notes = verifierNotes[id] || 'Taxonomic diagnosis or authority citation requires additional verification.';
    updateSpecies(id, { lifecycleStatus: 'draft' }, `Review Rejected: ${notes}`);
  };

  const handlePublish = (id: string) => {
    publishSpecies(id);
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-marine-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
          <ShieldCheck size={16} />
          <span>Editorial & Scientific Curation</span>
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
          Verification & Peer-Review Queue
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Evaluate submitted taxonomic records against authoritative literature, verify diagnostic characteristics, and approve records for public publication.
        </p>
      </div>

      {!permissions.canVerifySpecies && (
        <div
          style={{
            background: 'rgba(217, 119, 6, 0.12)',
            border: '1px solid rgba(217, 119, 6, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.85rem',
            color: '#fbbf24',
          }}
        >
          <AlertCircle size={16} />
          <span>
            You are currently viewing as <strong>{role.replace('_', ' ')}</strong>. To approve or reject verifications, switch your role to <strong>Reviewer</strong>, <strong>Admin</strong>, or <strong>Super Admin</strong> using the top bar.
          </span>
        </div>
      )}

      {pendingList.length === 0 ? (
        <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
          <ShieldCheck size={48} style={{ color: 'var(--accent-emerald)', margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
            Verification Queue Clear
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            All active species records in the system have undergone peer verification.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {pendingList.map(item => (
            <div key={item.id} className="card" style={{ padding: '1.75rem', borderLeft: '4px solid var(--accent-marine)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {item.taxonomy.class} • {item.taxonomy.order} • {item.taxonomy.family}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                    <ScientificName name={item.scientificName} authorship={item.scientificNameAuthorship} />
                  </h3>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {item.commonNames.en.join(', ')} {item.commonNames.bn.length > 0 && `(${item.commonNames.bn.join(', ')})`}
                  </div>
                </div>

                <StatusBadge status={item.lifecycleStatus} />
              </div>

              {/* Diagnosis Summary */}
              <div style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Submitted Morphological Diagnosis
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.morphology.description}
                </p>
              </div>

              {/* Citations Count */}
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Referenced Literature Sources: <strong>{item.referenceIds.length}</strong> attached
              </div>

              {/* Verifier Notes Input */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Reviewer Verification Notes / Findings:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Cross-checked against FishBase and original Hamilton (1822) description."
                  value={verifierNotes[item.id] || ''}
                  onChange={e => setVerifierNotes({ ...verifierNotes, [item.id]: e.target.value })}
                  className="form-input"
                  disabled={!permissions.canVerifySpecies}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {permissions.canVerifySpecies && (
                  <>
                    <button
                      onClick={() => handleVerify(item.id)}
                      className="btn btn-primary btn-sm"
                      style={{ gap: '0.35rem' }}
                    >
                      <Check size={14} />
                      <span>Approve & Verify</span>
                    </button>

                    <button
                      onClick={() => handleReject(item.id)}
                      className="btn btn-secondary btn-sm"
                      style={{ gap: '0.35rem', color: '#ef4444' }}
                    >
                      <X size={14} />
                      <span>Reject & Request Edits</span>
                    </button>
                  </>
                )}

                {item.isVerified && permissions.canPublishSpecies && !item.isPublished && (
                  <button
                    onClick={() => handlePublish(item.id)}
                    className="btn btn-marine btn-sm"
                    style={{ gap: '0.35rem' }}
                  >
                    <span>Publish to Public Catalog</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
