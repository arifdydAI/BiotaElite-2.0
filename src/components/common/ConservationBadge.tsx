// BiotaElite 2.0 IUCN Conservation Status Badge
import React from 'react';
import type { IUCNStatus } from '../../types/biodiversity';
import { IUCN_CATEGORIES } from '../../config/constants';
import { useLanguage } from '../../context/LanguageContext';

interface ConservationBadgeProps {
  status: IUCNStatus;
  showLabel?: boolean;
}

export const ConservationBadge: React.FC<ConservationBadgeProps> = ({ status, showLabel = true }) => {
  const { language } = useLanguage();
  const config = IUCN_CATEGORIES[status] || IUCN_CATEGORIES.NE;
  const label = language === 'bn' ? config.labelBn : config.label;

  return (
    <span
      className="badge-iucn"
      title={`IUCN Red List Status: ${config.label}`}
      style={{
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.color}50`,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontSize: '0.75rem',
        fontWeight: 700,
        padding: '0.15rem 0.5rem',
        borderRadius: '4px',
      }}
    >
      <span style={{ fontWeight: 800 }}>{config.code}</span>
      {showLabel && <span style={{ fontWeight: 500, fontSize: '0.7rem' }}>• {label}</span>}
    </span>
  );
};
