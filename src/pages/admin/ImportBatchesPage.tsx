// BiotaElite 2.0 Import Batches History Page
// MASTER-BUILD-02: View all import batches with rollback capability
import React, { useState } from 'react';
import { Database, CheckCircle, RotateCcw, AlertTriangle, Clock, XCircle, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { rollbackImportBatch } from '../../utils/batchImporter';
import type { BatchImportRecord } from '../../types/provenance';
import type { SpeciesRecord } from '../../types/biodiversity';

const STATUS_CONFIG = {
  committed: { label: 'Committed', color: '#10b981', Icon: CheckCircle },
  staged: { label: 'Staged', color: '#3b82f6', Icon: Clock },
  rolled_back: { label: 'Rolled Back', color: '#6b7280', Icon: XCircle },
};

export const ImportBatchesPage: React.FC = () => {
  const { batches = [], species, dispatch } = useBiodiversity();
  const [expandedBatch, setExpandedBatch] = useState<string | null>(null);
  const [rollbackConfirm, setRollbackConfirm] = useState<string | null>(null);
  const [rollbackNote, setRollbackNote] = useState('');

  const handleRollback = (batchId: string) => {
    const { filteredSpecies, updatedBatches } = rollbackImportBatch(batchId, species, batches);
    dispatch({ type: 'BATCH_ROLLBACK', filteredSpecies, updatedBatches });
    setRollbackConfirm(null);
    setRollbackNote('');
  };

  const sortedBatches: BatchImportRecord[] = [...batches].sort(
    (a, b) => new Date(b.importedAt).getTime() - new Date(a.importedAt).getTime()
  );

  return (
    <div className="import-batches-page">
      <div className="page-header">
        <h1 className="page-title">
          <Database size={24} />
          Import Batches
        </h1>
        <p className="page-subtitle">
          All batch import operations with status, statistics, and rollback capability.
          Rolled-back batches are permanently removed from the species catalog.
        </p>
      </div>

      {sortedBatches.length === 0 ? (
        <div className="empty-state">
          <FileText size={48} className="empty-icon" />
          <h3>No Import Batches Yet</h3>
          <p>Use the Batch Import tool to ingest species data from CSV or JSON files.</p>
          <a href="/admin/batch-import" className="btn-primary">
            Go to Batch Import →
          </a>
        </div>
      ) : (
        <div className="batches-list">
          {sortedBatches.map((batch: BatchImportRecord) => {
            const { label, color, Icon } = STATUS_CONFIG[batch.status] || STATUS_CONFIG.staged;
            const isExpanded = expandedBatch === batch.id;
            const batchSpecies = species.filter((sp: SpeciesRecord) => sp.importBatchId === batch.id);

            return (
              <div key={batch.id} className={`batch-card status-${batch.status}`}>
                {/* Batch Header */}
                <div
                  className="batch-header"
                  onClick={() => setExpandedBatch(isExpanded ? null : batch.id)}
                >
                  <div className="batch-header-left">
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    <div className="batch-info">
                      <div className="batch-filename">
                        <FileText size={14} />
                        {batch.sourceFile}
                        <span className="batch-format-badge">{batch.sourceFormat.toUpperCase()}</span>
                      </div>
                      <div className="batch-meta">
                        <span>ID: <code>{batch.id.slice(0, 12)}…</code></span>
                        <span>by {batch.importedBy}</span>
                        <span>{new Date(batch.importedAt).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="batch-header-right">
                    {/* Stats */}
                    <div className="batch-stats">
                      <span className="stat valid" title="Valid/Committed">{batch.committedCount} committed</span>
                      {batch.invalidRows > 0 && <span className="stat invalid" title="Invalid">{batch.invalidRows} invalid</span>}
                      {batch.duplicateRows > 0 && <span className="stat duplicate" title="Duplicates">{batch.duplicateRows} dupes</span>}
                      {batch.conflictRows > 0 && <span className="stat conflict" title="Conflicts">{batch.conflictRows} conflicts</span>}
                    </div>
                    {/* Status Badge */}
                    <span className="status-badge" style={{ color, borderColor: color }}>
                      <Icon size={12} />
                      {label}
                    </span>
                    {/* Rollback Button */}
                    {batch.status === 'committed' && (
                      <button
                        className="btn-rollback"
                        onClick={e => { e.stopPropagation(); setRollbackConfirm(batch.id); }}
                      >
                        <RotateCcw size={14} />
                        Rollback
                      </button>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="batch-details">
                    <div className="batch-detail-grid">
                      <div className="detail-item">
                        <span className="detail-label">Total Rows</span>
                        <span className="detail-value">{batch.totalRows}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Valid Rows</span>
                        <span className="detail-value valid">{batch.validRows}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Committed</span>
                        <span className="detail-value">{batch.committedCount}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Invalid</span>
                        <span className="detail-value invalid">{batch.invalidRows}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Duplicates</span>
                        <span className="detail-value">{batch.duplicateRows}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Conflicts</span>
                        <span className="detail-value">{batch.conflictRows}</span>
                      </div>
                    </div>

                    {batch.rollbackAt && (
                      <div className="rollback-info">
                        <RotateCcw size={14} />
                        Rolled back by {batch.rollbackBy} at {new Date(batch.rollbackAt).toLocaleString()}
                      </div>
                    )}

                    {/* Species List */}
                    {batchSpecies.length > 0 && (
                      <div className="batch-species-list">
                        <h4>Species in this batch ({batchSpecies.length})</h4>
                        <div className="batch-species-grid">
                          {batchSpecies.map((sp: SpeciesRecord) => (
                            <div key={sp.id} className="batch-species-item">
                              <em>{sp.scientificName}</em>
                              <span className="sp-status-dot" data-status={sp.lifecycleStatus}></span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Rollback Confirmation Modal */}
                {rollbackConfirm === batch.id && (
                  <div className="rollback-confirm-overlay" onClick={() => setRollbackConfirm(null)}>
                    <div className="rollback-confirm-modal" onClick={e => e.stopPropagation()}>
                      <div className="rollback-confirm-header">
                        <AlertTriangle size={20} style={{ color: '#f59e0b' }} />
                        <h3>Confirm Rollback</h3>
                      </div>
                      <p>
                        This will <strong>permanently remove</strong> all <strong>{batchSpecies.length} species records</strong> committed under batch <code>{batch.id.slice(0, 12)}…</code> from the catalog.
                      </p>
                      <p className="rollback-warning">
                        This action cannot be undone. Only draft/unverified records will be removed; verified/published records are protected by governance rules.
                      </p>
                      <textarea
                        className="rollback-note"
                        placeholder="Reason for rollback (optional)..."
                        value={rollbackNote}
                        onChange={e => setRollbackNote(e.target.value)}
                        rows={3}
                      />
                      <div className="rollback-actions">
                        <button className="btn-cancel" onClick={() => setRollbackConfirm(null)}>
                          Cancel
                        </button>
                        <button className="btn-rollback-confirm" onClick={() => handleRollback(batch.id)}>
                          <RotateCcw size={14} />
                          Confirm Rollback
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        .import-batches-page { padding: 0; }
        .batches-list { display: flex; flex-direction: column; gap: 1rem; }
        .batch-card { background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; transition: all 0.2s; }
        .batch-card.status-committed { border-left: 3px solid #10b981; }
        .batch-card.status-staged { border-left: 3px solid #3b82f6; }
        .batch-card.status-rolled_back { border-left: 3px solid #6b7280; opacity: 0.7; }
        .batch-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; cursor: pointer; gap: 1rem; }
        .batch-header:hover { background: rgba(255,255,255,0.02); }
        .batch-header-left { display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 0; }
        .batch-info { min-width: 0; }
        .batch-filename { display: flex; align-items: center; gap: 0.5rem; font-weight: 600; font-size: 0.9rem; color: var(--text-primary); }
        .batch-format-badge { font-size: 0.65rem; font-weight: 700; background: var(--color-primary); color: white; padding: 0.1rem 0.4rem; border-radius: 4px; }
        .batch-meta { display: flex; gap: 1rem; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; flex-wrap: wrap; }
        .batch-meta code { font-family: monospace; background: var(--bg-surface); padding: 0.1rem 0.3rem; border-radius: 3px; }
        .batch-header-right { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; flex-wrap: wrap; }
        .batch-stats { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .stat { font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.5rem; border-radius: 20px; }
        .stat.valid { background: rgba(16, 185, 129, 0.12); color: #10b981; }
        .stat.invalid { background: rgba(239, 68, 68, 0.12); color: #ef4444; }
        .stat.duplicate { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }
        .stat.conflict { background: rgba(249, 115, 22, 0.12); color: #f97316; }
        .status-badge { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.72rem; font-weight: 600; border: 1px solid; border-radius: 20px; padding: 0.2rem 0.5rem; }
        .btn-rollback { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.75rem; background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; cursor: pointer; font-size: 0.8rem; font-weight: 600; transition: all 0.2s; }
        .btn-rollback:hover { background: rgba(239, 68, 68, 0.2); }
        .batch-details { padding: 0 1.25rem 1.25rem; border-top: 1px solid var(--border-color); margin-top: 0; padding-top: 1rem; }
        .batch-detail-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 0.75rem; margin-bottom: 1rem; }
        .detail-item { background: var(--bg-surface); border-radius: 8px; padding: 0.75rem; text-align: center; }
        .detail-label { display: block; font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.25rem; }
        .detail-value { font-size: 1.2rem; font-weight: 700; color: var(--text-primary); }
        .detail-value.valid { color: #10b981; }
        .detail-value.invalid { color: #ef4444; }
        .rollback-info { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-muted); background: var(--bg-surface); padding: 0.5rem 0.75rem; border-radius: 6px; margin-bottom: 1rem; }
        .batch-species-list h4 { font-size: 0.85rem; color: var(--text-muted); margin: 0 0 0.75rem; }
        .batch-species-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.5rem; }
        .batch-species-item { display: flex; align-items: center; justify-content: space-between; background: var(--bg-surface); border-radius: 6px; padding: 0.4rem 0.75rem; font-size: 0.8rem; }
        .batch-species-item em { font-style: italic; }
        .sp-status-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; flex-shrink: 0; }
        .empty-state { text-align: center; padding: 4rem 2rem; color: var(--text-muted); }
        .empty-icon { opacity: 0.3; margin-bottom: 1rem; }
        .empty-state h3 { color: var(--text-primary); font-size: 1.2rem; margin-bottom: 0.5rem; }
        .empty-state p { margin-bottom: 1.5rem; }
        .btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.5rem; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: all 0.2s; }
        .rollback-confirm-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
        .rollback-confirm-modal { background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; max-width: 500px; width: 90%; }
        .rollback-confirm-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
        .rollback-confirm-header h3 { margin: 0; font-size: 1.1rem; }
        .rollback-warning { color: #f59e0b; font-size: 0.85rem; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; padding: 0.75rem; margin: 1rem 0; }
        .rollback-note { width: 100%; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-primary); padding: 0.75rem; font-family: inherit; font-size: 0.85rem; resize: vertical; box-sizing: border-box; }
        .rollback-actions { display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1rem; }
        .btn-cancel { padding: 0.6rem 1.25rem; background: var(--bg-glass); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; font-size: 0.9rem; }
        .btn-rollback-confirm { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.25rem; background: #ef4444; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 600; }
      `}</style>
    </div>
  );
};

export default ImportBatchesPage;
