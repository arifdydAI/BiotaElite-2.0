// src/components/zoology/AnimalKingdomExplorer.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZOOLOGY_PHYLA_DATA } from '../../data/zoologyPhylaData';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../species/SpeciesCard';
import {
  Layers,
  Sparkles,
  Search,
  BookOpen,
  ShieldAlert,
  GitBranch,
  CheckCircle2
} from 'lucide-react';

interface AnimalKingdomExplorerProps {
  initialPhylumSlug?: string;
}

export const AnimalKingdomExplorer: React.FC<AnimalKingdomExplorerProps> = ({ initialPhylumSlug }) => {
  const { species, references } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [selectedSlug, setSelectedSlug] = useState<string>(initialPhylumSlug || ZOOLOGY_PHYLA_DATA[0].slug);
  const [filterQuery, setFilterQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'ecology' | 'classes' | 'species'>('overview');

  const selectedPhylum = ZOOLOGY_PHYLA_DATA.find(p => p.slug === selectedSlug) || ZOOLOGY_PHYLA_DATA[0];

  // Map canonical species records
  const canonicalSpeciesList = (selectedPhylum.canonicalSpeciesIds || [])
    .map(id => species.find(s => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Phylum references
  const phylumReferences = (selectedPhylum.referenceIds || [])
    .map(refId => references.find(r => r.id === refId))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  // Filtered list of phyla for the sidebar/selector
  const filteredPhyla = ZOOLOGY_PHYLA_DATA.filter(p => {
    const q = filterQuery.toLowerCase();
    return (
      p.scientificName.toLowerCase().includes(q) ||
      p.commonNameEn.toLowerCase().includes(q) ||
      p.commonNameBn.includes(q)
    );
  });

  return (
    <div className="animal-kingdom-explorer">
      {/* Top Banner / Hero */}
      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.25) 0%, rgba(15, 23, 42, 0.6) 100%)', border: '1px solid var(--border-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Layers className="text-accent" size={26} />
          <span className="badge badge-accent" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            {isBn ? 'প্রাণিজগতের শ্রেণিবিন্যাস ও অঙ্গসংস্থান' : 'KINGDOM ANIMALIA — METAZOA'}
          </span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {isBn ? 'প্রাণিজগৎ ও প্রধান পর্বসমূহ' : 'Animal Kingdom & Major Phyla'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: 1.6 }}>
          {isBn
            ? 'মেটাজোয়ার ১০টি প্রধান প্রাণী পর্বের সামগ্রিক শ্রেণিবিন্যাস, নিরূপক বৈশিষ্ট্য, ভ্রূণস্তর, সিলোম, শারীরিক সংগঠন এবং অনুমোদিত প্রজাতি সংবলিত প্রামাণ্য শিক্ষামূলক প্ল্যাটফর্ম।'
            : 'Comprehensive evolutionary, anatomical, and taxonomic framework of the 10 major animal phyla from basal Parazoa to crown Deuterostomia, linked directly to canonical voucher species.'}
        </p>

        {/* Global Kingdom Quick Metrics */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'প্রধান পর্ব' : 'Major Phyla'}</span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>10 Phyla</strong>
          </div>
          <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }} />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'উপজগৎ' : 'Subkingdoms'}</span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Parazoa & Eumetazoa</strong>
          </div>
          <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }} />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'ডাটাবেজ প্রজাতি' : 'Canonical Catalogued'}</span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--text-accent)' }}>{species.length} Species</strong>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) 1fr', gap: '2rem' }}>
        {/* Left Column: Phyla Selector / List */}
        <div>
          <div className="card" style={{ position: 'sticky', top: '90px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>
                {isBn ? 'পর্ব নির্বাচন করুন' : 'Select Animal Phylum'}
              </h3>
              <span className="badge" style={{ fontSize: '0.7rem' }}>{ZOOLOGY_PHYLA_DATA.length} Phyla</span>
            </div>

            {/* Search filter for phyla */}
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={filterQuery}
                onChange={e => setFilterQuery(e.target.value)}
                placeholder={isBn ? 'পর্ব খুঁজুন...' : 'Search phyla...'}
                className="input"
                style={{ paddingLeft: '2.25rem', width: '100%', fontSize: '0.85rem' }}
              />
            </div>

            {/* List of Phyla */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '560px', overflowY: 'auto' }}>
              {filteredPhyla.map(phylum => {
                const isSelected = phylum.slug === selectedPhylum.slug;
                return (
                  <button
                    key={phylum.id}
                    onClick={() => {
                      setSelectedSlug(phylum.slug);
                      setActiveTab('overview');
                    }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isSelected ? 'var(--bg-accent-subtle)' : 'var(--bg-surface)',
                      border: isSelected ? '1px solid var(--border-accent)' : '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: isSelected ? 'var(--text-accent)' : 'var(--text-primary)' }}>
                        Phylum {phylum.scientificName}
                      </span>
                      <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.4rem', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.06)' }}>
                        {phylum.subkingdom}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                      {isBn ? phylum.commonNameBn : phylum.commonNameEn}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Selected Phylum Detail Pane */}
        <div>
          {/* Header of selected phylum */}
          <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--border-accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span className="badge badge-accent" style={{ textTransform: 'uppercase', fontSize: '0.7rem' }}>
                    {selectedPhylum.subkingdom}
                  </span>
                  <span className="badge" style={{ fontSize: '0.7rem' }}>
                    {selectedPhylum.bodyOrganization}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0.25rem 0', color: 'var(--text-primary)' }}>
                  Phylum {selectedPhylum.scientificName}
                </h2>
                <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {isBn ? selectedPhylum.commonNameBn : selectedPhylum.commonNameEn}
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginLeft: '0.75rem' }}>
                    ({isBn ? `আনুমানিক বৈশ্বিক প্রজাতি: ~${selectedPhylum.estimatedSpeciesGlobal.toLocaleString()}` : `Est. Global: ~${selectedPhylum.estimatedSpeciesGlobal.toLocaleString()} species`})
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link
                  to={`/animal-biodiversity?phylum=${selectedPhylum.scientificName}`}
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Search size={14} />
                  {isBn ? 'পর্বের প্রজাতি দেখুন' : 'Explore Species'}
                </Link>
                {selectedPhylum.taxonId && (
                  <Link
                    to={`/taxonomy?highlight=${selectedPhylum.taxonId}`}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <GitBranch size={14} />
                    {isBn ? 'শ্রেণিবিন্যাস গাছ' : 'Taxon Graph'}
                  </Link>
                )}
              </div>
            </div>

            {/* Quick Diagnostic Pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ background: 'var(--bg-surface)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'প্রতিসাম্য' : 'Symmetry'}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{selectedPhylum.symmetry}</span>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'ভ্রূণীয় স্তর' : 'Germ Layers'}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{selectedPhylum.germLayers}</span>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'সিলোমের ধরন' : 'Coelom Type'}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{selectedPhylum.coelomType}</span>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'আবাসস্থল' : 'Habitats'}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {(selectedPhylum.habitatAndEcology.primaryHabitats || ['Marine', 'Freshwater', 'Terrestrial']).join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('overview')}
              className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-ghost'}`}
              style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
            >
              {isBn ? 'সংক্ষিপ্ত বিবরণ ও বৈশিষ্ট্য' : 'Overview & Diagnostic'}
            </button>
            <button
              onClick={() => setActiveTab('anatomy')}
              className={`btn ${activeTab === 'anatomy' ? 'btn-primary' : 'btn-ghost'}`}
              style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
            >
              {isBn ? 'শারীরস্থান ও অঙ্গতন্ত্র' : 'Anatomy & Organ Systems'}
            </button>
            <button
              onClick={() => setActiveTab('ecology')}
              className={`btn ${activeTab === 'ecology' ? 'btn-primary' : 'btn-ghost'}`}
              style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
            >
              {isBn ? 'বাস্তুসংস্থান ও লার্ভা বিকাশ' : 'Ecology & Development'}
            </button>
            <button
              onClick={() => setActiveTab('classes')}
              className={`btn ${activeTab === 'classes' ? 'btn-primary' : 'btn-ghost'}`}
              style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
            >
              {isBn ? 'প্রধান শ্রেণিসমূহ' : 'Key Classes'} ({selectedPhylum.importantClasses.length})
            </button>
            <button
              onClick={() => setActiveTab('species')}
              className={`btn ${activeTab === 'species' ? 'btn-primary' : 'btn-ghost'}`}
              style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}
            >
              {isBn ? 'প্রতিনিধি প্রজাতি' : 'Canonical Species'} ({canonicalSpeciesList.length})
            </button>
          </div>

          {/* Tab 1: Overview & Diagnostic Characteristics */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Diagnostic Characteristics Card */}
              <div className="card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 className="text-accent" size={20} />
                  {isBn ? 'প্রধান শনাক্তকারী বৈশিষ্ট্য' : 'Diagnostic Characteristics'}
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {(isBn ? selectedPhylum.diagnosticCharacteristics.bn : selectedPhylum.diagnosticCharacteristics.en).map((trait, idx) => (
                    <li key={idx} style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <strong style={{ color: 'var(--text-primary)' }}>{trait}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body Plan & Organization */}
              <div className="card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {isBn ? 'শারীরিক গঠন কাঠামো ও রূপতত্ত্ব' : 'Body Plan Architecture'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {isBn ? selectedPhylum.bodyPlanOverview.bn : selectedPhylum.bodyPlanOverview.en}
                </p>
              </div>

              {/* Evolutionary Significance */}
              <div className="card" style={{ background: 'var(--bg-surface)' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={18} className="text-accent" />
                  {isBn ? 'বিবর্তনীয় গুরুত্ব ও মাইলফলক' : 'Evolutionary Significance'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {isBn ? selectedPhylum.evolutionarySignificance.bn : selectedPhylum.evolutionarySignificance.en}
                </p>
              </div>

              {/* Larval and Development */}
              <div className="card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {isBn ? 'ভ্রূণবিকাশ ও লার্ভা পর্যায়' : 'Embryology & Larval Development'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  {isBn ? selectedPhylum.developmentAndLarvae.bn : selectedPhylum.developmentAndLarvae.en}
                </p>
                {selectedPhylum.developmentAndLarvae.larvalTypes.length > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {isBn ? 'পরিচিত লার্ভার ধরন:' : 'Typical Larvae:'}
                    </span>
                    {selectedPhylum.developmentAndLarvae.larvalTypes.map((larva, idx) => (
                      <span key={idx} className="badge badge-accent" style={{ fontSize: '0.75rem' }}>
                        {larva}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Anatomy and Organ Systems */}
          {activeTab === 'anatomy' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div className="card">
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                  {isBn ? '১. পরিপাকতন্ত্র' : '1. Digestive System'}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {isBn ? selectedPhylum.anatomyAndSystems.digestive.bn : selectedPhylum.anatomyAndSystems.digestive.en}
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                  {isBn ? '২. শ্বসনতন্ত্র' : '2. Respiratory System'}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {isBn ? selectedPhylum.anatomyAndSystems.respiratory.bn : selectedPhylum.anatomyAndSystems.respiratory.en}
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                  {isBn ? '৩. সংবহনতন্ত্র' : '3. Circulatory System'}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {isBn ? selectedPhylum.anatomyAndSystems.circulatory.bn : selectedPhylum.anatomyAndSystems.circulatory.en}
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                  {isBn ? '৪. রেচনতন্ত্র' : '4. Excretory System'}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {isBn ? selectedPhylum.anatomyAndSystems.excretory.bn : selectedPhylum.anatomyAndSystems.excretory.en}
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                  {isBn ? '৫. স্নায়ুতন্ত্র' : '5. Nervous System'}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {isBn ? selectedPhylum.anatomyAndSystems.nervous.bn : selectedPhylum.anatomyAndSystems.nervous.en}
                </p>
              </div>

              <div className="card">
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                  {isBn ? '৬. জননতন্ত্র' : '6. Reproductive System'}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {isBn ? selectedPhylum.anatomyAndSystems.reproductive.bn : selectedPhylum.anatomyAndSystems.reproductive.en}
                </p>
              </div>

              <div className="card" style={{ gridColumn: '1 / -1' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                  {isBn ? '৭. কঙ্কাল ও চলন কাঠামো' : '7. Skeletal & Support Framework'}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {isBn ? selectedPhylum.anatomyAndSystems.skeletal.bn : selectedPhylum.anatomyAndSystems.skeletal.en}
                </p>
              </div>
            </div>
          )}

          {/* Tab: Ecology & Development */}
          {activeTab === 'ecology' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Habitat & Ecological Niches */}
              <div className="card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={18} className="text-accent" />
                  {isBn ? 'বাসস্থান, প্রতিবেশ ও বাস্তুতান্ত্রিক ভূমিকা' : 'Habitat, Ecosystem & Ecological Niches'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {isBn ? selectedPhylum.habitatAndEcology.bn : selectedPhylum.habitatAndEcology.en}
                </p>
                {selectedPhylum.habitatAndEcology.primaryHabitats && selectedPhylum.habitatAndEcology.primaryHabitats.length > 0 && (
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                      {isBn ? 'প্রধান বাস্তুতান্ত্রিক বিস্তার:' : 'Primary Ecosystems & Habitats:'}
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {selectedPhylum.habitatAndEcology.primaryHabitats.map((hab, idx) => (
                        <span key={idx} className="badge badge-accent" style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}>
                          {hab}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Development & Larval Forms */}
              <div className="card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GitBranch size={18} className="text-accent" />
                  {isBn ? 'ভ্রূণবিকাশ ও লার্ভা পর্যায়' : 'Embryology & Larval Metamorphosis'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {isBn ? selectedPhylum.developmentAndLarvae.bn : selectedPhylum.developmentAndLarvae.en}
                </p>
                {selectedPhylum.developmentAndLarvae.larvalTypes.length > 0 && (
                  <div style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
                      {isBn ? 'স্বতন্ত্র লার্ভার রূপসমূহ:' : 'Characteristic Diagnostic Larvae:'}
                    </span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {selectedPhylum.developmentAndLarvae.larvalTypes.map((larva, idx) => (
                        <span key={idx} className="badge" style={{ fontSize: '0.8rem', padding: '0.3rem 0.7rem', background: 'var(--bg-card)', border: '1px solid var(--border-accent)' }}>
                          {larva}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Evolutionary Trajectory */}
              <div className="card" style={{ background: 'var(--bg-surface)' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={18} className="text-accent" />
                  {isBn ? 'বিবর্তনীয় ধারা ও অভিযোজন' : 'Evolutionary Trajectory & Radiation'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {isBn ? selectedPhylum.evolutionarySignificance.bn : selectedPhylum.evolutionarySignificance.en}
                </p>
              </div>

              {/* Ecological Context Summary Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="card text-center" style={{ padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    ~{selectedPhylum.estimatedSpeciesGlobal.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {isBn ? 'বৈশ্বিক আনুমানিক প্রজাতি' : 'Global Estimated Species'}
                  </div>
                </div>
                <div className="card text-center" style={{ padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    {selectedPhylum.bodyOrganization}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {isBn ? 'শারীরিক সংগঠন' : 'Body Organization'}
                  </div>
                </div>
                <div className="card text-center" style={{ padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    {selectedPhylum.coelomType}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {isBn ? 'সিলমের প্রকৃতি' : 'Coelom Architecture'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Important Classes */}
          {activeTab === 'classes' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {selectedPhylum.importantClasses.map((cls, idx) => (
                <div key={idx} className="card" style={{ borderLeft: '3px solid var(--border-accent)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                      Class {cls.name}
                    </h4>
                    <span className="badge" style={{ fontSize: '0.75rem' }}>{isBn ? cls.nameBn : cls.name}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>
                    {isBn ? cls.descriptionBn : cls.descriptionEn}
                  </p>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{isBn ? 'প্রতিনিধি গণসমূহ:' : 'Representative Genera:'}</strong>{' '}
                    <span style={{ fontStyle: 'italic' }}>{cls.representativeTaxa}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Canonical Species */}
          {activeTab === 'species' && (
            <div>
              {canonicalSpeciesList.length === 0 ? (
                <div className="card text-center" style={{ padding: '3rem 1rem' }}>
                  <ShieldAlert size={36} className="text-muted" style={{ margin: '0 auto 1rem' }} />
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {isBn ? 'এই পর্বের সাথে সংযুক্ত কোনো প্রামাণ্য প্রজাতি ডাটাবেজে নেই।' : 'No canonical species linked directly to this phylum currently.'}
                  </p>
                  <Link to="/species" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                    {isBn ? 'সকল প্রজাতি ব্রাউজ করুন' : 'Browse All Catalogued Species'}
                  </Link>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {canonicalSpeciesList.map(sp => (
                    <SpeciesCard key={sp.id} species={sp} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Authoritative References for this Phylum */}
          {phylumReferences.length > 0 && (
            <div className="card" style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.02)' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={16} />
                {isBn ? 'প্রামাণ্য রেফারেন্স ও সাহিত্যসূত্র' : 'Authoritative References & Provenance'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {phylumReferences.map(ref => (
                  <div key={ref.id} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <strong>{ref.authors?.join(', ') || 'Author'}</strong> ({ref.year}). <em>{ref.title}</em>. {ref.publicationName}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
