// BiotaElite 2.0 Universal Accessible Back Navigation Component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface BackButtonProps {
  fallbackTo?: string;
  fallbackPath?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const BackButton: React.FC<BackButtonProps> = ({
  fallbackTo: propFallbackTo,
  fallbackPath,
  label,
  className = '',
  style = {},
}) => {
  const fallbackTo = fallbackPath || propFallbackTo || '/species';
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallbackTo);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (window.history.length > 2) {
        navigate(-1);
      } else {
        navigate(fallbackTo);
      }
    }
  };

  const displayLabel = label || t('common.back');

  return (
    <button
      type="button"
      onClick={handleBack}
      onKeyDown={handleKeyDown}
      className={`btn-back ${className}`}
      style={style}
      aria-label={displayLabel}
      tabIndex={0}
    >
      <ArrowLeft size={16} aria-hidden="true" />
      <span>{displayLabel}</span>
    </button>
  );
};
