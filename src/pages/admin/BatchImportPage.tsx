// BiotaElite 2.0 Batch Import Admin Page
// MASTER-BUILD-02: Drag & drop CSV/JSON ingestion with validation pipeline
import React, { useState, useRef, useCallback } from 'react';
import { Upload, FileText, AlertTriangle, CheckCircle, XCircle, AlertCircle, Download, ChevronDown, ChevronRight, Loader } from 'lucide-react';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { generateImportPreview, commitImportBatch, generateValidationReportCSV, STANDARD_CSV_HEADERS } from '../../utils/batchImporter';
import type { ImportPreview, ImportRowPreview } from '../../types/provenance';

type ImportStep = 'upload' | 'preview' | 'committed';

const STATUS_CONFIG = {
  valid: { label: 'Valid', color: '#10b981', Icon: CheckCircle },
  invalid: { label: 'Invalid', color: '#ef4444', Icon: XCircle },
  duplicate: { label: 'Duplicate', color: '#f59e0b', Icon: AlertCircle },
  conflict: { label: 'Conflict', color: '#f97316', Icon: AlertTriangle },
  missing_reference: { label: 'Missing Ref', color: '#8b5cf6', Icon: AlertCircle },
};

export const BatchImportPage: React.FC = () => {
  const { species, references, dispatch } = useBiodiversity();

  const [step, setStep] = useState<ImportStep>('upload');
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<ImportPreview | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [committedBatchId, setCommittedBatchId] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    setError(null);
    setIsProcessing(true);
    const format = file.name.toLowerCase().endsWith('.json') ? 'json' : 'csv';
    try {
      const content = await file.text();
      const result = generateImportPreview(content, format, file.name, species);
      setPreview(result);
      setStep('preview');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse file. Check the format and try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [species]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  }, [processFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleCommit = () => {
    if (!preview) return;
    const { batchRecord, newSpeciesRecords } = commitImportBatch(preview, 'Admin', references);
    dispatch({ type: 'BATCH_COMMIT', records: newSpeciesRecords, batchRecord });
    setCommittedBatchId(batchRecord.id);
    setStep('committed');
  };

  const handleDownloadReport = () => {
    if (!preview) return;
    const csv = generateValidationReportCSV(preview);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `validation-report-${preview.batchId.slice(0, 8)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleRow = (idx: number) => {
    setExpandedRows(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const handleReset = () => {
    setStep('upload');
    setPreview(null);
    setError(null);
    setCommittedBatchId(null);
    setExpandedRows(new Set());
    if (fileRef.current) fileRef.current.value = '';
  };

  return (
    <div className="batch-import-page">
      <div className="page-header">
        <h1 className="page-title">
          <Upload size={24} />
          Batch Species Import
        </h1>
        <p className="page-subtitle">
          Import species records from CSV or JSON files. All records are validated, deduplicated, and staged for curator review before publishing.
        </p>
      </div>

      {/* Step Indicator */}
      <div className="import-steps">
        {['upload', 'preview', 'committed'].map((s, i) => (
          <div key={s} className={`import-step ${step === s ? 'active' : ''} ${['preview', 'committed'].slice(0, ['upload', 'preview', 'committed'].indexOf(step)).includes(s) ? 'done' : ''}`}>
            <span className="step-number">{i + 1}</span>
            <span className="step-label">{s === 'upload' ? 'Upload File' : s === 'preview' ? 'Review & Validate' : 'Committed'}</span>
          </div>
        ))}
      </div>

      {/* Step 1: Upload */}
      {step === 'upload' && (
        <div className="import-upload-section">
          <div
            className={`drop-zone ${isDragging ? 'dragging' : ''}`}
            onDragEnter={e => { e.preventDefault(); setIsDragging(true); }}
            onDragOver={e => e.preventDefault()}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
          >
            {isProcessing ? (
              <div className="drop-zone-content">
                <Loader size={48} className="spin" />
                <p>Processing file...</p>
              </div>
            ) : (
              <div className="drop-zone-content">
                <Upload size={48} />
                <h3>Drop your CSV or JSON file here</h3>
                <p>or click to browse</p>
                <span className="drop-zone-hint">Supported: .csv, .json</span>
              </div>
            )}
            <input ref={fileRef} type="file" accept=".csv,.json" hidden onChange={handleFileChange} />
          </div>

          {error && (
            <div className="import-error">
              <XCircle size={16} />
              {error}
            </div>
          )}

          {/* CSV Schema Reference */}
          <div className="schema-reference">
            <h3><FileText size={16} /> Expected CSV Column Headers</h3>
            <div className="schema-columns">
              {STANDARD_CSV_HEADERS.map(h => (
                <code key={h} className="schema-column">{h}</code>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Preview */}
      {step === 'preview' && preview && (
        <div className="import-preview-section">
          {/* Summary Cards */}
          <div className="validation-summary">
            {([
              { key: 'valid', label: 'Valid', color: '#10b981', Icon: CheckCircle },
              { key: 'invalid', label: 'Invalid', color: '#ef4444', Icon: XCircle },
              { key: 'duplicates', label: 'Duplicate', color: '#f59e0b', Icon: AlertCircle },
              { key: 'conflicts', label: 'Conflict', color: '#f97316', Icon: AlertTriangle },
              { key: 'missingReferences', label: 'Missing Ref', color: '#8b5cf6', Icon: AlertCircle },
            ] as const).map(({ key, label, color, Icon }) => {
              const count = preview.summary[key as keyof typeof preview.summary] ?? 0;
              return (
                <div key={key} className="summary-card" style={{ borderColor: color }}>
                  <Icon size={20} style={{ color }} />
                  <span className="summary-count" style={{ color }}>{count}</span>
                  <span className="summary-label">{label}</span>
                </div>
              );
            })}
          </div>

          {/* File Info */}
          <div className="import-file-info">
            <FileText size={16} />
            <strong>{preview.sourceFile}</strong>
            <span>— {preview.totalRows} rows detected</span>
            <span className="batch-id">Batch ID: {preview.batchId.slice(0, 12)}…</span>
          </div>

          {/* Validation Table */}
          <div className="validation-table-wrapper">
            <table className="validation-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}></th>
                  <th>Row</th>
                  <th>Scientific Name</th>
                  <th>Family</th>
                  <th>IUCN BD</th>
                  <th>Status</th>
                  <th>Issues</th>
                </tr>
              </thead>
              <tbody>
                {preview.rows.map((row: ImportRowPreview) => {
                  const { Icon, color, label } = STATUS_CONFIG[row.status] || STATUS_CONFIG.invalid;
                  const isExpanded = expandedRows.has(row.rowIndex);
                  const hasDetails = row.errors.length + row.warnings.length > 0;
                  return (
                    <React.Fragment key={row.rowIndex}>
                      <tr
                        className={`validation-row status-${row.status}`}
                        onClick={() => hasDetails && toggleRow(row.rowIndex)}
                        style={{ cursor: hasDetails ? 'pointer' : 'default' }}
                      >
                        <td>
                          {hasDetails && (isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}
                        </td>
                        <td>{row.rowIndex}</td>
                        <td className="scientific-name-cell">
                          {row.parsedScientificName ? <em>{row.parsedScientificName}</em> : <span className="missing">—</span>}
                        </td>
                        <td>{row.parsedFamily || '—'}</td>
                        <td>{row.parsedIucnNational || '—'}</td>
                        <td>
                          <span className="status-badge" style={{ color, borderColor: color }}>
                            <Icon size={12} />
                            {label}
                          </span>
                        </td>
                        <td>{(row.errors.length + row.warnings.length) || '—'}</td>
                      </tr>
                      {isExpanded && (
                        <tr className="validation-row-details">
                          <td colSpan={7}>
                            <div className="detail-panel">
                              {row.errors.map((e, i) => (
                                <div key={i} className="detail-error"><XCircle size={12} />{e}</div>
                              ))}
                              {row.warnings.map((w, i) => (
                                <div key={i} className="detail-warning"><AlertTriangle size={12} />{w}</div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="import-actions">
            <button className="btn-secondary" onClick={handleReset}>
              ← Start Over
            </button>
            <button className="btn-secondary" onClick={handleDownloadReport}>
              <Download size={16} /> Download Validation Report
            </button>
            {preview.summary.valid > 0 && (
              <button className="btn-primary" onClick={handleCommit}>
                <CheckCircle size={16} />
                Commit {preview.summary.valid} Valid Records
              </button>
            )}
          </div>

          {preview.summary.valid === 0 && (
            <div className="import-warning-banner">
              <AlertTriangle size={16} />
              No valid rows found. Please fix errors in the source file and re-upload.
            </div>
          )}
        </div>
      )}

      {/* Step 3: Committed */}
      {step === 'committed' && (
        <div className="import-committed-section">
          <div className="commit-success">
            <CheckCircle size={64} className="commit-icon" />
            <h2>Batch Committed Successfully</h2>
            <p>
              <strong>{preview?.summary.valid}</strong> species records have been staged as drafts with batch ID:
            </p>
            <code className="commit-batch-id">{committedBatchId}</code>
            <p className="commit-note">
              These records are in <strong>draft</strong> status. They must pass reviewer verification before being published to the public catalog.
            </p>
            <div className="commit-actions">
              <button className="btn-secondary" onClick={handleReset}>
                Import Another File
              </button>
              <a href="/admin/reviews" className="btn-primary">
                Go to Review Queue →
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .batch-import-page { padding: 0; }
        .import-steps { display: flex; gap: 0; margin-bottom: 2rem; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; }
        .import-step { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.5rem; flex: 1; border-right: 1px solid var(--border-color); opacity: 0.5; transition: all 0.3s; }
        .import-step:last-child { border-right: none; }
        .import-step.active { opacity: 1; background: rgba(16, 185, 129, 0.08); }
        .import-step.done { opacity: 0.8; }
        .step-number { width: 28px; height: 28px; border-radius: 50%; background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; flex-shrink: 0; }
        .import-step.active .step-number { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.25); }
        .step-label { font-weight: 500; font-size: 0.9rem; }
        .drop-zone { border: 2px dashed var(--border-color); border-radius: 16px; padding: 4rem; text-align: center; cursor: pointer; transition: all 0.3s; background: var(--bg-glass); }
        .drop-zone:hover, .drop-zone.dragging { border-color: var(--color-primary); background: rgba(16, 185, 129, 0.05); }
        .drop-zone-content { display: flex; flex-direction: column; align-items: center; gap: 1rem; color: var(--text-muted); }
        .drop-zone-content svg { opacity: 0.5; }
        .drop-zone-content h3 { color: var(--text-primary); font-size: 1.2rem; margin: 0; }
        .drop-zone-content p { margin: 0; }
        .drop-zone-hint { font-size: 0.8rem; background: var(--bg-surface); padding: 0.25rem 0.75rem; border-radius: 20px; border: 1px solid var(--border-color); }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .import-error { display: flex; align-items: center; gap: 0.5rem; color: #ef4444; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 0.75rem 1rem; margin-top: 1rem; }
        .schema-reference { margin-top: 2rem; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; }
        .schema-reference h3 { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted); margin: 0 0 1rem; }
        .schema-columns { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .schema-column { background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.2rem 0.5rem; font-size: 0.75rem; color: var(--color-primary); }
        .validation-summary { display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .summary-card { display: flex; align-items: center; gap: 0.5rem; background: var(--bg-glass); border: 1px solid; border-radius: 10px; padding: 0.75rem 1rem; flex: 1; min-width: 120px; }
        .summary-count { font-size: 1.5rem; font-weight: 800; }
        .summary-label { font-size: 0.75rem; color: var(--text-muted); }
        .import-file-info { display: flex; align-items: center; gap: 0.75rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; padding: 0.75rem 1rem; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 8px; }
        .batch-id { margin-left: auto; font-family: monospace; font-size: 0.75rem; background: var(--bg-surface); padding: 0.2rem 0.5rem; border-radius: 4px; }
        .validation-table-wrapper { overflow-x: auto; border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 1.5rem; }
        .validation-table { width: 100%; border-collapse: collapse; }
        .validation-table th { padding: 0.75rem 1rem; background: var(--bg-surface); font-size: 0.8rem; font-weight: 600; color: var(--text-muted); text-align: left; border-bottom: 1px solid var(--border-color); }
        .validation-table td { padding: 0.6rem 1rem; border-bottom: 1px solid var(--border-color); font-size: 0.85rem; color: var(--text-primary); }
        .validation-row:last-child td { border-bottom: none; }
        .validation-row.status-invalid { background: rgba(239, 68, 68, 0.04); }
        .validation-row.status-duplicate { background: rgba(245, 158, 11, 0.04); }
        .validation-row.status-conflict { background: rgba(249, 115, 22, 0.04); }
        .status-badge { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.72rem; font-weight: 600; border: 1px solid; border-radius: 20px; padding: 0.2rem 0.5rem; }
        .scientific-name-cell em { font-style: italic; }
        .missing { color: var(--text-muted); }
        .validation-row-details td { padding: 0; background: var(--bg-surface); }
        .detail-panel { padding: 0.75rem 1.5rem; display: flex; flex-direction: column; gap: 0.4rem; }
        .detail-error, .detail-warning { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8rem; }
        .detail-error { color: #ef4444; }
        .detail-warning { color: #f59e0b; }
        .import-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
        .import-warning-banner { display: flex; align-items: center; gap: 0.5rem; color: #f59e0b; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; padding: 0.75rem 1rem; margin-top: 1rem; font-size: 0.85rem; }
        .import-committed-section { display: flex; justify-content: center; padding: 2rem 0; }
        .commit-success { text-align: center; max-width: 500px; }
        .commit-icon { color: var(--color-primary); margin-bottom: 1rem; }
        .commit-success h2 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .commit-success p { color: var(--text-muted); }
        .commit-batch-id { display: block; font-family: monospace; font-size: 0.9rem; background: var(--bg-glass); border: 1px solid var(--border-color); padding: 0.75rem 1rem; border-radius: 8px; margin: 1rem 0; word-break: break-all; }
        .commit-note { font-size: 0.85rem; }
        .commit-actions { display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem; }
        .btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.5rem; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: all 0.2s; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-secondary { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.5rem; background: var(--bg-glass); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 0.9rem; transition: all 0.2s; }
        .btn-secondary:hover { border-color: var(--color-primary); }
      `}</style>
    </div>
  );
};

export default BatchImportPage;
