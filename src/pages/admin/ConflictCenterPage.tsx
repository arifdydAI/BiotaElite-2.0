// BiotaElite 2.0 Conflict Resolution Center
// MASTER-BUILD-02: View and resolve detected taxonomic/status conflicts
import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, GitMerge, Eye, Clock } from 'lucide-react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import type { ConflictRecord } from '../../types/provenance';
import type { SpeciesRecord } from '../../types/biodiversity';

const CONFLICT_TYPE_LABELS: Record<string, { label: string; color: string; description: string }> = {
  family_mismatch: { label: 'Family Mismatch', color: '#f97316', description: 'Species placed in different families across records.' },
  authorship_mismatch: { label: 'Authorship Mismatch', color: '#8b5cf6', description: 'Conflicting authorship or year for same binomial.' },
  bd_status_conflict: { label: 'BD Status Conflict', color: '#ef4444', description: 'Contradictory Bangladesh occurrence assertions.' },
  iucn_status_conflict: { label: 'IUCN Global Conflict', color: '#f59e0b', description: 'Conflicting global IUCN Red List status.' },
  national_status_conflict: { label: 'BD National Status', color: '#ec4899', description: 'Conflicting Bangladesh Red List status.' },
  synonym_collision: { label: 'Synonym Collision', color: '#3b82f6', description: 'Synonym listed as accepted name in another record.' },
};

const RESOLUTION_OPTIONS = [
  { value: 'accept_incoming', label: 'Accept Incoming Value', icon: CheckCircle, color: '#10b981' },
  { value: 'keep_existing', label: 'Keep Existing Value', icon: XCircle, color: '#6b7280' },
  { value: 'manual_merge', label: 'Manual Merge Required', icon: GitMerge, color: '#3b82f6' },
  { value: 'deferred', label: 'Defer (Flag for Later)', icon: Clock, color: '#f59e0b' },
];

export const ConflictCenterPage: React.FC = () => {
  const { conflicts = [], species, dispatch } = useBiodiversity();
  const [selectedConflict, setSelectedConflict] = useState<ConflictRecord | null>(null);
  const [resolutionNote, setResolutionNote] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredConflicts = conflicts.filter((c: ConflictRecord) =>
    filterType === 'all' ? true : filterType === 'unresolved' ? !c.resolution : c.conflictType === filterType
  );

  const handleResolve = (conflict: ConflictRecord, resolution: string) => {
    dispatch({
      type: 'RESOLVE_CONFLICT',
      conflictId: conflict.id,
      resolution,
      resolutionNote,
      resolvedAt: new Date().toISOString(),
      resolvedBy: 'Admin'
    });
    setSelectedConflict(null);
    setResolutionNote('');
  };

  const getSpeciesName = (id: string) => {
    const sp = species.find((s: SpeciesRecord) => s.id === id);
    return sp ? sp.scientificName : id;
  };

  const unresolvedCount = conflicts.filter((c: ConflictRecord) => !c.resolution).length;

  return (
    <div className="conflict-center-page">
      <div className="page-header">
        <h1 className="page-title">
          <AlertTriangle size={24} />
          Conflict Resolution Center
        </h1>
        <p className="page-subtitle">
          Review and resolve detected taxonomic conflicts between incoming and existing records.
          Unresolved conflicts prevent batch records from advancing to verification.
        </p>
      </div>

      {/* Summary Banner */}
      <div className="conflict-summary">
        <div className="conflict-stat">
          <span className="cstat-value">{conflicts.length}</span>
          <span className="cstat-label">Total Conflicts</span>
        </div>
        <div className="conflict-stat unresolved">
          <span className="cstat-value">{unresolvedCount}</span>
          <span className="cstat-label">Unresolved</span>
        </div>
        <div className="conflict-stat resolved">
          <span className="cstat-value">{conflicts.length - unresolvedCount}</span>
          <span className="cstat-label">Resolved</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="conflict-filters">
        <button
          className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
          onClick={() => setFilterType('all')}
        >
          All ({conflicts.length})
        </button>
        <button
          className={`filter-btn ${filterType === 'unresolved' ? 'active' : ''}`}
          onClick={() => setFilterType('unresolved')}
        >
          Unresolved ({unresolvedCount})
        </button>
        {Object.entries(CONFLICT_TYPE_LABELS).map(([type, config]) => {
          const count = conflicts.filter((c: ConflictRecord) => c.conflictType === type).length;
          if (count === 0) return null;
          return (
            <button
              key={type}
              className={`filter-btn ${filterType === type ? 'active' : ''}`}
              style={{ '--filter-color': config.color } as React.CSSProperties}
              onClick={() => setFilterType(type)}
            >
              {config.label} ({count})
            </button>
          );
        })}
      </div>

      {filteredConflicts.length === 0 ? (
        <div className="empty-state">
          <CheckCircle size={48} className="empty-icon success" />
          <h3>{conflicts.length === 0 ? 'No Conflicts Detected' : 'All Filtered Conflicts Resolved'}</h3>
          <p>
            {conflicts.length === 0
              ? 'The validation pipeline found no taxonomic conflicts in the current dataset.'
              : 'Change the filter to view other conflict types.'
            }
          </p>
        </div>
      ) : (
        <div className="conflicts-list">
          {filteredConflicts.map((conflict: ConflictRecord) => {
            const typeConfig = CONFLICT_TYPE_LABELS[conflict.conflictType] || { label: conflict.conflictType, color: '#6b7280', description: '' };
            const isResolved = !!conflict.resolution;

            return (
              <div key={conflict.id} className={`conflict-card ${isResolved ? 'resolved' : 'unresolved'}`}>
                <div className="conflict-card-header">
                  <div className="conflict-type-badge" style={{ color: typeConfig.color, borderColor: typeConfig.color }}>
                    <AlertTriangle size={12} />
                    {typeConfig.label}
                  </div>
                  {isResolved ? (
                    <span className="resolved-badge">
                      <CheckCircle size={12} />
                      Resolved: {conflict.resolution?.replace('_', ' ')}
                    </span>
                  ) : (
                    <span className="unresolved-badge">
                      <Clock size={12} />
                      Pending
                    </span>
                  )}
                </div>

                <div className="conflict-body">
                  <div className="conflict-comparison">
                    <div className="conflict-side existing">
                      <span className="conflict-side-label">Existing Record</span>
                      <span className="conflict-species-name">
                        <em>{getSpeciesName(conflict.existingSpeciesId)}</em>
                      </span>
                      <div className="conflict-field">
                        <span className="field-label">{conflict.field}:</span>
                        <span className="field-value existing-value">{conflict.existingValue}</span>
                      </div>
                    </div>
                    <div className="conflict-divider">
                      <AlertTriangle size={16} />
                      CONFLICT
                    </div>
                    <div className="conflict-side incoming">
                      <span className="conflict-side-label">Incoming Value</span>
                      <span className="conflict-species-name">
                        {conflict.importBatchId ? (
                          <span className="batch-ref">Batch {conflict.importBatchId.slice(0, 8)}…</span>
                        ) : 'Manual Entry'}
                      </span>
                      <div className="conflict-field">
                        <span className="field-label">{conflict.field}:</span>
                        <span className="field-value incoming-value">{conflict.conflictingValue}</span>
                      </div>
                    </div>
                  </div>

                  {conflict.resolution && conflict.resolutionNote && (
                    <div className="resolution-note">
                      <strong>Resolution note:</strong> {conflict.resolutionNote}
                      {conflict.resolvedAt && (
                        <span className="resolved-at">— {new Date(conflict.resolvedAt).toLocaleString()}</span>
                      )}
                    </div>
                  )}

                  {!isResolved && (
                    <button
                      className="btn-resolve"
                      onClick={() => setSelectedConflict(conflict)}
                    >
                      <Eye size={14} />
                      Resolve Conflict
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Resolution Modal */}
      {selectedConflict && (
        <div className="modal-overlay" onClick={() => setSelectedConflict(null)}>
          <div className="resolution-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Resolve Conflict</h3>
              <button className="modal-close" onClick={() => setSelectedConflict(null)}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-conflict-type">
                <span style={{ color: CONFLICT_TYPE_LABELS[selectedConflict.conflictType]?.color }}>
                  {CONFLICT_TYPE_LABELS[selectedConflict.conflictType]?.label}
                </span>
              </p>
              <div className="modal-comparison">
                <div className="modal-value">
                  <span className="label">Existing: <em>{getSpeciesName(selectedConflict.existingSpeciesId)}</em></span>
                  <code className="value-code">{selectedConflict.existingValue}</code>
                </div>
                <div className="modal-value">
                  <span className="label">Incoming:</span>
                  <code className="value-code incoming">{selectedConflict.conflictingValue}</code>
                </div>
              </div>
              <textarea
                className="resolution-note-input"
                placeholder="Add a resolution note explaining the decision..."
                value={resolutionNote}
                onChange={e => setResolutionNote(e.target.value)}
                rows={3}
              />
              <div className="resolution-options">
                {RESOLUTION_OPTIONS.map(({ value, label, icon: Icon, color }) => (
                  <button
                    key={value}
                    className="resolution-option"
                    style={{ '--option-color': color } as React.CSSProperties}
                    onClick={() => handleResolve(selectedConflict, value)}
                  >
                    <Icon size={16} style={{ color }} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .conflict-center-page { padding: 0; }
        .conflict-summary { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
        .conflict-stat { background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 10px; padding: 1rem 1.5rem; text-align: center; flex: 1; }
        .conflict-stat.unresolved { border-color: rgba(239, 68, 68, 0.3); }
        .conflict-stat.resolved { border-color: rgba(16, 185, 129, 0.3); }
        .cstat-value { display: block; font-size: 2rem; font-weight: 800; color: var(--text-primary); }
        .conflict-stat.unresolved .cstat-value { color: #ef4444; }
        .conflict-stat.resolved .cstat-value { color: #10b981; }
        .cstat-label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; }
        .conflict-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .filter-btn { padding: 0.4rem 0.9rem; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 20px; color: var(--text-muted); font-size: 0.8rem; cursor: pointer; transition: all 0.2s; }
        .filter-btn.active { background: var(--color-primary); color: white; border-color: var(--color-primary); }
        .filter-btn:hover:not(.active) { border-color: var(--color-primary); color: var(--text-primary); }
        .conflicts-list { display: flex; flex-direction: column; gap: 1rem; }
        .conflict-card { background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem; }
        .conflict-card.resolved { opacity: 0.7; }
        .conflict-card.unresolved { border-left: 3px solid #ef4444; }
        .conflict-card-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .conflict-type-badge { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.75rem; font-weight: 600; border: 1px solid; border-radius: 20px; padding: 0.2rem 0.6rem; }
        .resolved-badge { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.75rem; color: #10b981; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); border-radius: 20px; padding: 0.2rem 0.6rem; margin-left: auto; }
        .unresolved-badge { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.75rem; color: #f59e0b; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); border-radius: 20px; padding: 0.2rem 0.6rem; margin-left: auto; }
        .conflict-comparison { display: grid; grid-template-columns: 1fr auto 1fr; gap: 1rem; align-items: center; margin-bottom: 1rem; }
        .conflict-side { background: var(--bg-surface); border-radius: 8px; padding: 0.75rem 1rem; }
        .conflict-side-label { display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.25rem; }
        .conflict-species-name { display: block; font-size: 0.85rem; margin-bottom: 0.5rem; }
        .conflict-field { display: flex; gap: 0.5rem; align-items: flex-start; font-size: 0.8rem; }
        .field-label { color: var(--text-muted); flex-shrink: 0; }
        .field-value { font-weight: 600; }
        .existing-value { color: #6b7280; }
        .incoming-value { color: #ef4444; }
        .conflict-divider { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; font-size: 0.65rem; font-weight: 800; color: #f59e0b; letter-spacing: 0.05em; }
        .batch-ref { font-family: monospace; font-size: 0.75rem; background: var(--bg-glass); padding: 0.1rem 0.3rem; border-radius: 4px; }
        .resolution-note { font-size: 0.8rem; color: var(--text-muted); background: var(--bg-surface); border-radius: 6px; padding: 0.5rem 0.75rem; margin-bottom: 0.75rem; }
        .resolved-at { margin-left: 0.5rem; opacity: 0.7; }
        .btn-resolve { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1rem; background: rgba(16,185,129,0.1); color: var(--color-primary); border: 1px solid rgba(16,185,129,0.3); border-radius: 8px; cursor: pointer; font-size: 0.8rem; font-weight: 600; transition: all 0.2s; }
        .btn-resolve:hover { background: rgba(16,185,129,0.2); }
        .empty-state { text-align: center; padding: 4rem 2rem; color: var(--text-muted); }
        .empty-icon { opacity: 0.3; margin-bottom: 1rem; }
        .empty-icon.success { opacity: 0.6; color: #10b981; }
        .empty-state h3 { color: var(--text-primary); font-size: 1.2rem; margin-bottom: 0.5rem; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
        .resolution-modal { background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; max-width: 560px; width: 90%; }
        .modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
        .modal-header h3 { margin: 0; font-size: 1.1rem; }
        .modal-close { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-muted); padding: 0; line-height: 1; }
        .modal-conflict-type { font-weight: 700; margin-bottom: 1rem; }
        .modal-comparison { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1rem; }
        .modal-value { background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 8px; padding: 0.75rem; }
        .modal-value .label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem; }
        .value-code { display: block; font-family: monospace; font-size: 0.9rem; color: var(--text-primary); }
        .value-code.incoming { color: #ef4444; }
        .resolution-note-input { width: 100%; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-primary); padding: 0.75rem; font-family: inherit; font-size: 0.85rem; resize: vertical; box-sizing: border-box; margin-bottom: 1rem; }
        .resolution-options { display: flex; flex-direction: column; gap: 0.5rem; }
        .resolution-option { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; font-size: 0.9rem; text-align: left; transition: all 0.2s; }
        .resolution-option:hover { background: rgba(255,255,255,0.04); border-color: var(--color-primary); }
      `}</style>
    </div>
  );
};

export default ConflictCenterPage;
