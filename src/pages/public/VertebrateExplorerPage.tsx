// src/pages/public/VertebrateExplorerPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { VertebrateClassDetail } from '../../components/zoology/VertebrateClassDetail';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

export const VertebrateExplorerPage: React.FC = () => {
  const { classSlug } = useParams<{ classSlug?: string }>();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
        <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <li>
            <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Home size={14} />
              {isBn ? 'নীড়পাতা' : 'Home'}
            </Link>
          </li>
          <li><ChevronRight size={14} /></li>
          <li>
            <Link to="/vertebrates" style={{ color: classSlug ? 'var(--text-muted)' : 'var(--text-accent)' }}>
              {isBn ? 'মেরুদণ্ডী প্রাণী এক্সপ্লোরার' : 'Vertebrate Explorer'}
            </Link>
          </li>
          {classSlug && (
            <>
              <li><ChevronRight size={14} /></li>
              <li style={{ color: 'var(--text-accent)', textTransform: 'capitalize' }}>
                Class {classSlug}
              </li>
            </>
          )}
        </ol>
      </nav>

      <VertebrateClassDetail initialClassSlug={classSlug} />
    </div>
  );
};
export default VertebrateExplorerPage;
