// BiotaElite 2.0 Scientific Image Integrity Placeholder
// MASTER-FIX-07: Displayed whenever a species lacks a verified museum/field voucher photograph
import React from 'react';
import { CameraOff, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SpeciesImagePlaceholderProps {
  height?: string | number;
  compact?: boolean;
  showSubtext?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const SpeciesImagePlaceholder: React.FC<SpeciesImagePlaceholderProps> = ({
  height = '100%',
  compact = false,
  showSubtext = false,
  className = '',
  style = {},
}) => {
  const { language } = useLanguage();

  const isBn = language === 'bn';

  return (
    <div
      className={`species-image-placeholder ${className}`}
      role="img"
      aria-label={isBn ? 'এই প্রজাতির জন্য যাচাইকৃত ছবি পাওয়া যায়নি' : 'No verified species image available'}
      style={{
        width: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(15, 23, 28, 0.85)',
        backgroundImage: `radial-gradient(circle at 50% 40%, rgba(32, 53, 61, 0.4) 0%, rgba(9, 14, 17, 0.95) 100%)`,
        border: '1px dashed rgba(56, 189, 248, 0.2)',
        borderRadius: 'inherit',
        padding: compact ? '0.75rem 0.5rem' : '1.5rem',
        textAlign: 'center',
        userSelect: 'none',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Subtle scientific grid watermark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          pointerEvents: 'none',
        }}
      />

      {/* Icon badge */}
      <div
        style={{
          width: compact ? '32px' : '44px',
          height: compact ? '32px' : '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(56, 189, 248, 0.08)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted, #94a3b8)',
          marginBottom: compact ? '0.35rem' : '0.75rem',
          zIndex: 1,
        }}
      >
        <CameraOff size={compact ? 16 : 22} />
      </div>

      {/* Primary bilingual title */}
      <div
        style={{
          fontSize: compact ? '0.75rem' : '0.875rem',
          fontWeight: 600,
          color: 'var(--text-secondary, #cbd5e1)',
          lineHeight: 1.35,
          zIndex: 1,
          maxWidth: '240px',
        }}
      >
        {isBn ? (
          <>
            <div>এই প্রজাতির জন্য যাচাইকৃত ছবি পাওয়া যায়নি</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted, #64748b)', fontWeight: 400, marginTop: '0.15rem' }}>
              No verified species image available
            </div>
          </>
        ) : (
          <>
            <div>No verified species image available</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted, #64748b)', fontWeight: 400, marginTop: '0.15rem' }}>
              এই প্রজাতির জন্য যাচাইকৃত ছবি পাওয়া যায়নি
            </div>
          </>
        )}
      </div>

      {/* Optional subtext for detailed view */}
      {showSubtext && (
        <div
          style={{
            marginTop: '0.5rem',
            fontSize: '0.72rem',
            color: 'var(--text-muted, #64748b)',
            lineHeight: 1.4,
            maxWidth: '380px',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <ShieldAlert size={13} style={{ color: 'var(--accent-emerald-light, #34d399)', flexShrink: 0 }} />
          <span>
            {isBn
              ? 'বায়োটাএলিট কেবলমাত্র বৈজ্ঞানিকভাবে যাচাইকৃত প্রমাণ্য আলোকচিত্র প্রদর্শন করে।'
              : 'BiotaElite strictly displays verified museum voucher or field photographs.'}
          </span>
        </div>
      )}
    </div>
  );
};
