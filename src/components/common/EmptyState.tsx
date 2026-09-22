// BiotaElite 2.0 Empty State & Loading State Components
import React from 'react';
import { SearchX, Database, AlertCircle, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  icon?: 'search' | 'database' | 'error';
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionText,
  onAction,
  icon = 'search',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px dashed var(--border-subtle)',
        margin: '1.5rem 0',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)',
          marginBottom: '1rem',
        }}
      >
        {icon === 'search' && <SearchX size={28} />}
        {icon === 'database' && <Database size={28} />}
        {icon === 'error' && <AlertCircle size={28} />}
      </div>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '440px', marginBottom: '1.25rem' }}>
        {description}
      </p>
      {actionText && onAction && (
        <button onClick={onAction} className="btn btn-secondary btn-sm" style={{ gap: '0.4rem' }}>
          <RefreshCw size={14} />
          <span>{actionText}</span>
        </button>
      )}
    </div>
  );
};

export const LoadingState: React.FC<{ message?: string }> = ({
  message = 'Retrieving verified zoological records...',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          border: '3px solid rgba(16, 185, 129, 0.2)',
          borderTopColor: 'var(--accent-emerald)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
          marginBottom: '1rem',
        }}
      />
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{message}</p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
