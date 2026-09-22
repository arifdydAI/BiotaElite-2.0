// src/pages/public/AnatomyPhysiologyPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { OrganSystemDetail } from '../../components/zoology/OrganSystemDetail';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

export const AnatomyPhysiologyPage: React.FC = () => {
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
          <li style={{ color: 'var(--text-accent)' }}>
            {isBn ? 'শারীরস্থান ও শারীরবিদ্যা' : 'Anatomy & Physiology'}
          </li>
        </ol>
      </nav>

      <OrganSystemDetail />
    </div>
  );
};
export default AnatomyPhysiologyPage;
