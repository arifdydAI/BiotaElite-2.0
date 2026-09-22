// BiotaElite 2.0 Status Badge Component
import React from 'react';
import type { LifecycleStatus } from '../../types/biodiversity';
import { LIFECYCLE_STATUS_CONFIG } from '../../config/constants';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircle2, AlertCircle, Clock, Archive, XCircle, AlertTriangle } from 'lucide-react';

interface StatusBadgeProps {
  status: LifecycleStatus;
  isVerified?: boolean;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, isVerified, size = 'md' }) => {
  const { t } = useLanguage();
  const config = LIFECYCLE_STATUS_CONFIG[status] || LIFECYCLE_STATUS_CONFIG.draft;
  const isSm = size === 'sm';

  const getIcon = () => {
    switch (status) {
      case 'published':
      case 'verified':
        return <CheckCircle2 size={isSm ? 12 : 14} />;
      case 'under_review':
        return <Clock size={isSm ? 12 : 14} />;
      case 'archived':
        return <Archive size={isSm ? 12 : 14} />;
      case 'rejected':
        return <XCircle size={isSm ? 12 : 14} />;
      case 'requires_review':
        return <AlertTriangle size={isSm ? 12 : 14} />;
      default:
        return <AlertCircle size={isSm ? 12 : 14} />;
    }
  };

  const getLabel = () => {
    switch (status) {
      case 'published':
        return t('status.published');
      case 'verified':
        return t('status.verified');
      case 'under_review':
        return t('status.underReview');
      case 'archived':
        return t('status.archived');
      case 'rejected':
        return t('status.rejected');
      case 'requires_review':
        return t('status.requiresReview');
      case 'draft':
        return t('status.draft');
      default:
        return config.label;
    }
  };

  return (
    <span
      className={`badge ${isVerified ? 'badge-verified' : ''}`}
      style={{
        padding: isSm ? '0.15rem 0.45rem' : '0.25rem 0.65rem',
        fontSize: isSm ? '0.7rem' : '0.75rem',
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.color}40`,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        borderRadius: '9999px',
        fontWeight: 600,
      }}
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </span>
  );
};
