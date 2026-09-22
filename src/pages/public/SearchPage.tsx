// BiotaElite 2.0 Multi-Dimensional Biodiversity Search Engine
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../../components/species/SpeciesCard';
import { TaxonKnowledgeCard } from '../../components/knowledge/TaxonKnowledgeCard';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { BackButton } from '../../components/common/BackButton';
import { EmptyState } from '../../components/common/EmptyState';
import { Search, Database, BookOpen } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const { species, taxonKnowledge, taxa, resolveTaxonRoute } = useBiodiversity();
  const { t, language } = useLanguage();

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: query });
  };

  const cleanQ = query.trim().toLowerCase();

  const matchedTaxa = cleanQ
    ? taxa
        .filter(t => {
          const matchName = t.scientificName.toLowerCase().includes(cleanQ) || (t.name && t.name.toLowerCase().includes(cleanQ));
          const matchRank = t.rank.toLowerCase().includes(cleanQ);
          const matchBn = (t.banglaName && t.banglaName.includes(cleanQ)) || (t.commonNameBn && t.commonNameBn.includes(cleanQ));
          const matchEn = t.commonNameEn && t.commonNameEn.toLowerCase().includes(cleanQ);
          return matchName || matchRank || matchBn || matchEn;
        })
        .slice(0, 10)
    : [];

  const matchedKnowledge = cleanQ
    ? taxonKnowledge.filter(tk => {
        const matchSci = tk.scientificName.toLowerCase().includes(cleanQ);
        const matchEn = tk.englishName.toLowerCase().includes(cleanQ);
        const matchBn = tk.bengaliName.includes(cleanQ);
        const matchDesc =
          tk.shortDescription.en.toLowerCase().includes(cleanQ) ||
          tk.shortDescription.bn.includes(cleanQ);
        const matchSubclass = tk.subclasses?.some(
          sc =>
            sc.name.toLowerCase().includes(cleanQ) ||
            sc.commonEn.toLowerCase().includes(cleanQ) ||
            sc.commonBn.includes(cleanQ)
        );
        return matchSci || matchEn || matchBn || matchDesc || matchSubclass;
      })
    : [];

  const results = species.filter(s => {
    if (!cleanQ) return true;
    const matchScientific = s.scientificName.toLowerCase().includes(cleanQ);
    const matchAuthorship = s.scientificNameAuthorship.toLowerCase().includes(cleanQ);
    const matchCommonEn = s.commonNames.en.some(c => c.toLowerCase().includes(cleanQ));
    const matchCommonBn = s.commonNames.bn.some(c => c.includes(cleanQ));
    const matchFamily = s.taxonomy.family.toLowerCase().includes(cleanQ);
    const matchGenus = s.taxonomy.genus.toLowerCase().includes(cleanQ);
    const matchOrder = s.taxonomy.order.toLowerCase().includes(cleanQ);
    const matchClass = s.taxonomy.class.toLowerCase().includes(cleanQ);
    const matchSynonym = s.synonyms.some(syn => syn.name.toLowerCase().includes(cleanQ));
    const matchRegion = s.bangladeshOccurrence.regions.some(r => r.toLowerCase().includes(cleanQ));

    return (
      matchScientific ||
      matchAuthorship ||
      matchCommonEn ||
      matchCommonBn ||
      matchFamily ||
      matchGenus ||
      matchOrder ||
      matchClass ||
      matchSynonym ||
      matchRegion
    );
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <BackButton fallbackPath="/species" />
        <Breadcrumbs items={[{ label: t('crumb.search') }]} />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
          {t('search.title')}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '750px' }}>
          {language === 'bn'
            ? 'বৈজ্ঞানিক নাম, ইংরেজি ও বাংলা নাম, গোত্র, বর্গ, সমার্থক নাম এবং বাংলাদেশের নদী অববাহিকা অনুসারে প্রজাতি ও উচ্চতর ট্যাক্সন অনুসন্ধান করুন।'
            : 'Query species and higher taxa across scientific names, English/Bangla vernaculars, family, order, synonyms, and regional Bangladesh river basins.'}
        </p>
      </div>

      {/* Search Input */}
      <form onSubmit={handleSearch} style={{ maxWidth: '650px', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder={language === 'bn' ? 'বৈজ্ঞানিক নাম, বাংলা নাম, গোত্র, বর্গ বা নদী খুঁজুন...' : 'Search by scientific name, Bangla name, family, order, river...'}
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.5rem', fontSize: '1rem', padding: '0.75rem 1rem 0.75rem 2.6rem' }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {t('crumb.search')}
          </button>
        </div>
      </form>

      {/* Search Architecture Notice */}
      <div
        style={{
          background: 'rgba(2, 132, 199, 0.08)',
          border: '1px solid rgba(2, 132, 199, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '0.85rem 1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontSize: '0.825rem',
          color: 'var(--text-secondary)',
        }}
      >
        <Database size={16} style={{ color: 'var(--accent-marine-light)', flexShrink: 0 }} />
        <div>
          <strong>{language === 'bn' ? 'অনুসন্ধান স্থাপত্য' : 'Search Engine Architecture'}:</strong> Active indexed fields: <code style={{ color: 'var(--accent-emerald-light)' }}>scientificName</code>, <code style={{ color: 'var(--accent-emerald-light)' }}>commonNames.en/bn</code>, <code style={{ color: 'var(--accent-emerald-light)' }}>family</code>, <code style={{ color: 'var(--accent-emerald-light)' }}>genus</code>, <code style={{ color: 'var(--accent-emerald-light)' }}>order</code>, <code style={{ color: 'var(--accent-emerald-light)' }}>class</code>, and <code style={{ color: 'var(--accent-emerald-light)' }}>bangladeshOccurrence.regions</code>.
        </div>
      </div>

      {/* Matched Higher Taxa / Taxon Knowledge Section */}
      {matchedKnowledge.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} style={{ color: 'var(--accent-emerald-light)' }} />
              <span>
                {language === 'bn' ? 'সংশ্লিষ্ট উচ্চতর ট্যাক্সন ও জ্ঞান রেকর্ড' : 'Matching Higher Taxa & Knowledge Records'}
              </span>
            </h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {matchedKnowledge.length} {language === 'bn' ? 'টি ট্যাক্সন' : 'Taxa'}
            </span>
          </div>

          <div className="knowledge-grid">
            {matchedKnowledge.map(tk => {
              const linkTo =
                tk.category === 'zoology' || tk.category === 'general'
                  ? `/taxonomy/${tk.canonicalSlug || tk.id}`
                  : tk.category === 'fish'
                  ? (tk.rank === 'class' || tk.rank === 'superclass')
                    ? (tk.id === 'group-agnatha' || tk.id === 'superclass-osteichthyes' ? `/fish/group/${tk.id}` : `/fish/class/${tk.id}`)
                    : `/fish/order/${tk.id}`
                  : tk.rank === 'phylum'
                  ? `/marine/phylum/${tk.id}`
                  : tk.rank === 'class'
                  ? `/marine/class/${tk.id}`
                  : `/marine/order/${tk.id}`;
              return (
                <TaxonKnowledgeCard
                  key={tk.id}
                  record={tk}
                  category={tk.category}
                  linkTo={linkTo}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Matched Taxon Nodes from Unified Graph */}
      {matchedTaxa.length > 0 && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database size={16} style={{ color: 'var(--accent-emerald-light)' }} />
            <span>{language === 'bn' ? 'ট্যাক্সোনমি শাখা ও শ্রেণি মিল' : 'Matching Taxonomy Nodes & Ranks'}</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {matchedTaxa.map(tax => {
              const route = resolveTaxonRoute(tax.rank, tax.id, tax.module === 'fish' ? 'fish' : 'marine');
              return (
                <Link
                  key={tax.id}
                  to={route}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.4rem 0.75rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.825rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                  className="hover-card"
                >
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent-emerald-light)', textTransform: 'uppercase', fontWeight: 700 }}>
                    {tax.rank}:
                  </span>
                  <em className="taxonomic-name-italic">{tax.scientificName}</em>
                  {tax.banglaName && <span style={{ color: 'var(--text-muted)' }}>({tax.banglaName})</span>}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Species Results */}
      <div style={{ marginBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        {t('search.queryFor')} <strong style={{ color: '#ffffff' }}>"{query || (language === 'bn' ? 'সকল প্রজাতি' : 'all')}"</strong> ({results.length} {t('crumb.species')}):
      </div>

      {results.length > 0 ? (
        <div className="grid-species">
          {results.map(sp => (
            <SpeciesCard key={sp.id} species={sp} />
          ))}
        </div>
      ) : (
        <EmptyState
          title={t('search.noMatch')}
          description={language === 'bn' ? `"${query}" এর জন্য কোনো প্রাণী শনাক্ত করা যায়নি। অন্য নাম বা বাংলা নাম দিয়ে চেষ্টা করুন।` : `No zoological entities matched your query "${query}". Try searching by family, genus, or Bangla name.`}
          actionText={language === 'bn' ? 'অনুসন্ধান মুছুন' : 'Clear Search'}
          onAction={() => { setQuery(''); setSearchParams({}); }}
          icon="search"
        />
      )}
    </div>
  );
};
