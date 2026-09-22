// src/pages/public/AnimalKingdomPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AnimalKingdomExplorer } from '../../components/zoology/AnimalKingdomExplorer';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

export const AnimalKingdomPage: React.FC = () => {
  const { phylumSlug } = useParams<{ phylumSlug?: string }>();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
        <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
          <li>
            <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Home size={14} />
              {isBn ? 'নীড়পাতা' : 'Home'}
            </Link>
          </li>
          <li><ChevronRight size={14} /></li>
          <li>
            <Link to="/animal-kingdom" style={{ color: phylumSlug ? 'var(--text-muted)' : 'var(--text-accent)' }}>
              {isBn ? 'প্রাণিজগৎ ও পর্বসমূহ' : 'Animal Kingdom'}
            </Link>
          </li>
          {phylumSlug && (
            <>
              <li><ChevronRight size={14} /></li>
              <li style={{ color: 'var(--text-accent)', textTransform: 'capitalize' }}>
                Phylum {phylumSlug}
              </li>
            </>
          )}
        </ol>
      </nav>

      {/* Main Explorer Module */}
      <AnimalKingdomExplorer initialPhylumSlug={phylumSlug} />
    </div>
  );
};
export default AnimalKingdomPage;
