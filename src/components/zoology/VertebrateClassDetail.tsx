// src/components/zoology/VertebrateClassDetail.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VERTEBRATE_CLASSES_DATA } from '../../data/vertebratesData';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../species/SpeciesCard';
import {
  ShieldCheck,
  Fish,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface VertebrateClassDetailProps {
  initialClassSlug?: string;
}

export const VertebrateClassDetail: React.FC<VertebrateClassDetailProps> = ({ initialClassSlug }) => {
  const { species, references } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [selectedSlug, setSelectedSlug] = useState<string>(initialClassSlug || VERTEBRATE_CLASSES_DATA[0].slug);
  const [activeTab, setActiveTab] = useState<'overview' | 'systems' | 'orders' | 'species'>('overview');

  const selectedClass = VERTEBRATE_CLASSES_DATA.find(c => c.slug === selectedSlug) || VERTEBRATE_CLASSES_DATA[0];

  // Map canonical species
  const canonicalSpeciesList = (selectedClass.canonicalSpeciesIds || [])
    .map(id => species.find(s => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Authoritative references
  const classReferences = (selectedClass.referenceIds || [])
    .map(refId => references.find(r => r.id === refId))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <div className="vertebrate-class-explorer">
      {/* Top Banner */}
      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(3, 105, 161, 0.25) 0%, rgba(15, 23, 42, 0.6) 100%)', border: '1px solid var(--border-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <ShieldCheck className="text-accent" size={26} />
          <span className="badge badge-accent" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            {isBn ? 'উপপর্ব ভার্টিব্রাটা (মেরুদণ্ডী প্রাণী)' : 'SUBPHYLUM VERTEBRATA — CRANIATA'}
          </span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {isBn ? 'মেরুদণ্ডী প্রাণী এক্সপ্লোরার' : 'Vertebrate Explorer'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: 1.6 }}>
          {isBn
            ? 'চোয়ালবিহীন মাছ (অ্যাগনাথা), হাঙর ও শাপলাপাতা (কনড্রিকথিস), অস্থিময় মাছ (অস্টিকথিস/৭৩ বর্গ), উভচর, সরীসৃপ, পাখি এবং স্তন্যপায়ী প্রাণীর সামগ্রিক অঙ্গসংস্থানিক ও শ্রেণিবিন্যাস কাঠামো।'
            : 'Authoritative comparative framework of the 7 living vertebrate lineages from jawless cyclostomes to tetrapods, directly linked to canonical species and the 73 living Fish Orders portal.'}
        </p>
      </div>

      {/* Class Selector Bar */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.75rem' }}>
        {VERTEBRATE_CLASSES_DATA.map(cls => {
          const isSelected = cls.slug === selectedClass.slug;
          return (
            <button
              key={cls.id}
              onClick={() => {
                setSelectedSlug(cls.slug);
                setActiveTab('overview');
              }}
              className={`btn ${isSelected ? 'btn-primary' : 'btn-outline'}`}
              style={{ fontSize: '0.85rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              {cls.isFishGroup && <Fish size={14} />}
              {isBn ? cls.commonNameBn : cls.className}
            </button>
          );
        })}
      </div>

      {/* Class Profile Details */}
      <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--border-accent)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className="badge badge-accent" style={{ fontSize: '0.7rem' }}>
                Vertebrate Lineage
              </span>
              {selectedClass.isFishGroup && (
                <span className="badge" style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontSize: '0.7rem' }}>
                  Integrated with 73 Fish Orders
                </span>
              )}
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0.25rem 0', color: 'var(--text-primary)' }}>
              {selectedClass.className}
            </h2>
            <div style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              {isBn ? selectedClass.commonNameBn : selectedClass.commonNameEn}
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginLeft: '0.75rem' }}>
                ({isBn ? `আনুমানিক প্রজাতি: ~${selectedClass.estimatedLivingSpecies.toLocaleString()}` : `Est. Living Species: ~${selectedClass.estimatedLivingSpecies.toLocaleString()}`})
              </span>
            </div>
          </div>

          {/* Special Deep-Link for Fish Groups */}
          {selectedClass.isFishGroup && selectedClass.fishPortalRoute && (
            <Link
              to={selectedClass.fishPortalRoute}
              className="btn btn-primary"
              style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Fish size={16} />
              {isBn ? 'মৎস্য জীববৈচিত্র্য পোর্টালে দেখুন' : 'Open in Fish Portal'}
              <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {/* Fish Rule Compliance Banner */}
        {selectedClass.isFishGroup && (
          <div style={{ marginTop: '1.25rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Fish size={18} className="text-accent" style={{ flexShrink: 0 }} />
            <span>
              {isBn
                ? 'এই শ্রেণিটির বিশদ ট্যাক্সোনমি, ৭৩টি জীবিত বর্গ এবং সমস্ত শনাক্তকারী চিত্রাবলি প্রজেক্টের যাচাইকৃত মৎস্য জীববৈচিত্র্য (Fish Biodiversity) পোর্টালের সাথে সরাসরি সংযুক্ত।'
                : 'Directly linked to BiotaElite’s verified 73 living Fish Orders. Access all orders, families, diagnostic traits, and Bangladesh occurrence in the Fish Biodiversity Portal.'}
            </span>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button
          onClick={() => setActiveTab('overview')}
          className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'সংক্ষিপ্ত পরিচয় ও নিরূপক বৈশিষ্ট্য' : 'Overview & Diagnostics'}
        </button>
        <button
          onClick={() => setActiveTab('systems')}
          className={`btn ${activeTab === 'systems' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'শারীরিক অঙ্গসংস্থান ও অঙ্গতন্ত্র' : 'Systems & Physiology'}
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`btn ${activeTab === 'orders' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'প্রধান বর্গসমূহ' : 'Key Orders'} ({selectedClass.majorOrders.length})
        </button>
        <button
          onClick={() => setActiveTab('species')}
          className={`btn ${activeTab === 'species' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ fontSize: '0.85rem' }}
        >
          {isBn ? 'প্রতিনিধি প্রজাতি' : 'Representative Species'} ({canonicalSpeciesList.length})
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Diagnostic Traits */}
          <div className="card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={20} className="text-accent" />
              {isBn ? 'প্রধান শনাক্তকারী বৈশিষ্ট্য' : 'Diagnostic Characteristics'}
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {(isBn ? selectedClass.diagnosticCharacteristics.bn : selectedClass.diagnosticCharacteristics.en).map((trait, idx) => (
                <li key={idx} style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{trait}</strong>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Form & Skeleton */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div className="card">
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                {isBn ? 'দেহের গঠন ও রূপতত্ত্ব' : 'Body Form Architecture'}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {isBn ? selectedClass.bodyForm.bn : selectedClass.bodyForm.en}
              </p>
            </div>
            <div className="card">
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.4rem' }}>
                {isBn ? 'কঙ্কালতন্ত্র' : 'Skeletal System'}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {isBn ? selectedClass.skeletalSystem.bn : selectedClass.skeletalSystem.en}
              </p>
            </div>
          </div>

          {/* Evolutionary Significance */}
          <div className="card" style={{ background: 'var(--bg-surface)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} className="text-accent" />
              {isBn ? 'বিবর্তনীয় গুরুত্ব ও রূপান্তর' : 'Evolutionary Milestone & Significance'}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {isBn ? selectedClass.evolutionarySignificance.bn : selectedClass.evolutionarySignificance.en}
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: SYSTEMS */}
      {activeTab === 'systems' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
              {isBn ? 'বহিঃত্বক (Integument)' : 'Integument & Scales'}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {isBn ? selectedClass.integument.bn : selectedClass.integument.en}
            </p>
          </div>
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
              {isBn ? 'পরিপাকতন্ত্র' : 'Feeding & Digestion'}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {isBn ? selectedClass.feedingAndDigestion.bn : selectedClass.feedingAndDigestion.en}
            </p>
          </div>
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
              {isBn ? 'শ্বসনতন্ত্র' : 'Respiration'}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {isBn ? selectedClass.respiration.bn : selectedClass.respiration.en}
            </p>
          </div>
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
              {isBn ? 'সংবহনতন্ত্র' : 'Circulation & Heart'}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {isBn ? selectedClass.circulation.bn : selectedClass.circulation.en}
            </p>
          </div>
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
              {isBn ? 'রেচনতন্ত্র' : 'Excretion & Osmoregulation'}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {isBn ? selectedClass.excretion.bn : selectedClass.excretion.en}
            </p>
          </div>
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
              {isBn ? 'স্নায়ুতন্ত্র ও সংবেদী অঙ্গ' : 'Nervous & Sensory Systems'}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {isBn ? selectedClass.nervousSystem.bn : selectedClass.nervousSystem.en}
            </p>
          </div>
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
              {isBn ? 'জনন ও প্রজনন' : 'Reproduction & Life History'}
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              {isBn ? selectedClass.reproduction.bn : selectedClass.reproduction.en}
            </p>
          </div>

          {selectedClass.thermoregulation && (
            <div className="card">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
                {isBn ? 'তাপ নিয়ন্ত্রণ ও মেটাবলিজম' : 'Thermoregulation & Metabolism'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isBn ? selectedClass.thermoregulation.bn : selectedClass.thermoregulation.en}
              </p>
            </div>
          )}

          {selectedClass.sensorySystems && (
            <div className="card">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
                {isBn ? 'সংবেদী অঙ্গ ও বিশেষায়ন' : 'Sensory Organs & Specializations'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isBn ? selectedClass.sensorySystems.bn : selectedClass.sensorySystems.en}
              </p>
            </div>
          )}

          {selectedClass.muscularSystem && (
            <div className="card">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
                {isBn ? 'পেশিতন্ত্র ও চলন ক্ষমতা' : 'Muscular System & Biomechanics'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isBn ? selectedClass.muscularSystem.bn : selectedClass.muscularSystem.en}
              </p>
            </div>
          )}

          {selectedClass.development && (
            <div className="card">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-accent)', marginBottom: '0.35rem' }}>
                {isBn ? 'ভ্রূণীয় বিকাশ ও রূপান্তর' : 'Development & Metamorphosis'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isBn ? selectedClass.development.bn : selectedClass.development.en}
              </p>
            </div>
          )}

          {selectedClass.adaptations && (
            <div className="card" style={{ gridColumn: '1 / -1', borderLeft: '3px solid #10b981' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10b981', marginBottom: '0.35rem' }}>
                {isBn ? 'প্রধান কার্যকরী ও রূপতাত্ত্বিক অভিযোজন' : 'Key Functional & Morphological Adaptations'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isBn ? selectedClass.adaptations.bn : selectedClass.adaptations.en}
              </p>
            </div>
          )}

          {selectedClass.ecologicalRole && (
            <div className="card" style={{ gridColumn: '1 / -1', borderLeft: '3px solid #3b82f6' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#3b82f6', marginBottom: '0.35rem' }}>
                {isBn ? 'বাস্তুতান্ত্রিক ভূমিকা ও খাদ্যজাল প্রভাব' : 'Ecological Role & Trophic Function'}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isBn ? selectedClass.ecologicalRole.bn : selectedClass.ecologicalRole.en}
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: KEY ORDERS */}
      {activeTab === 'orders' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {selectedClass.isFishGroup && (
            <div className="card" style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem', display: 'block' }}>
                  {isBn ? 'সকল ৭৩টি জীবিত মৎস্য বর্গ এক্সপ্লোর করুন' : 'Explore all 73 living Fish Orders'}
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {isBn ? 'সম্পূর্ণ শ্রেণিবিন্যাস কাঠামো মৎস্য পোর্টালে সংরক্ষিত।' : 'Full orders, fin formulas, diagnostic traits & IUCN Red List status in Fish portal.'}
                </span>
              </div>
              <Link to="/fish" className="btn btn-primary" style={{ fontSize: '0.8rem' }}>
                {isBn ? 'মৎস্য পোর্টালে যান' : 'Go to Fish Biodiversity'}
              </Link>
            </div>
          )}

          {selectedClass.majorOrders.map((ord, idx) => (
            <div key={idx} className="card" style={{ borderLeft: '3px solid var(--border-accent)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  Order {ord.name}
                </h4>
                <span className="badge" style={{ fontSize: '0.75rem' }}>{isBn ? ord.nameBn : ord.name}</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isBn ? ord.descBn : ord.descEn}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: CANONICAL SPECIES */}
      {activeTab === 'species' && (
        <div>
          {canonicalSpeciesList.length === 0 ? (
            <div className="card text-center" style={{ padding: '3rem 1rem' }}>
              <p style={{ color: 'var(--text-secondary)' }}>
                {isBn ? 'এই শ্রেণির সাথে সরাসরি যুক্ত প্রজাতিসমূহ মৎস্য বা মেরুদণ্ডী পোর্টালে ব্রাউজ করুন।' : 'Browse all catalogued vertebrate species in the biodiversity catalog.'}
              </p>
              <Link to="/species" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                {isBn ? 'সকল প্রজাতি দেখুন' : 'View All Species'}
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

      {/* Authoritative References */}
      {classReferences.length > 0 && (
        <div className="card" style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.02)' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={16} />
            {isBn ? 'প্রামাণ্য রেফারেন্স ও সাহিত্যসূত্র' : 'Authoritative References'}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {classReferences.map(ref => (
              <div key={ref.id} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <strong>{ref.authors?.join(', ') || 'Author'}</strong> ({ref.year}). <em>{ref.title}</em>. {ref.publicationName}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
