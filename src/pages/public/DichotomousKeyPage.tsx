// src/pages/public/DichotomousKeyPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DichotomousKeyEngine } from '../../components/zoology/DichotomousKeyEngine';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

export const DichotomousKeyPage: React.FC = () => {
  const { keyId } = useParams<{ keyId?: string }>();
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
            <Link to="/identification" style={{ color: 'var(--text-muted)' }}>
              {isBn ? 'শনাক্তকরণ কুঞ্জি' : 'Identification Keys'}
            </Link>
          </li>
          <li><ChevronRight size={14} /></li>
          <li style={{ color: 'var(--text-accent)' }}>
            {isBn ? 'ইন্টারেক্টিভ ডাইকোটোমাস কী ইঞ্জিন' : 'Interactive Dichotomous Key'}
          </li>
        </ol>
      </nav>

      <DichotomousKeyEngine initialKeyId={keyId} />
    </div>
  );
};
export default DichotomousKeyPage;
