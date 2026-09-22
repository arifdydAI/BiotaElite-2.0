// BiotaElite 2.0 Scientific Homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../../components/species/SpeciesCard';
import { 
  Fish, 
  Waves, 
  MapPin, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Sparkles,
  GitFork,
  Globe,
  Activity,
  GitCompare,
  TreeDeciduous
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { species, taxa, references } = useBiodiversity();
  const { t } = useLanguage();

  const publishedSpecies = species.filter(s => s.isPublished);
  const featuredSpecies = publishedSpecies.slice(0, 3);
  const bangladeshCount = species.filter(s => s.bangladeshOccurrence.present).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      {/* Scientific Hero Banner */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 2rem',
          borderRadius: 'var(--radius-xl)',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(2, 132, 199, 0.08) 50%, rgba(15, 25, 29, 0.95) 100%)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden',
          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        }}
      >
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '850px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: 'var(--accent-emerald-light)',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '1.25rem',
            }}
          >
            <ShieldCheck size={16} />
            <span>ICZN Compliant Zoological Information System</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}
          >
            {t('home.heroTitle')}
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '720px',
            }}
          >
            {t('home.heroSubtitle')}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/species" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              <span>{t('home.exploreSpecies')}</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/taxonomy" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              <Layers size={16} />
              <span>{t('home.browseTaxonomy')}</span>
            </Link>
            <Link to="/bangladesh" className="btn btn-marine" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
              <MapPin size={16} />
              <span>Bangladesh Biome</span>
            </Link>
          </div>
        </div>

        {/* Scientific Metrics Ribbon */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(32, 53, 61, 0.8)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-emerald-light)' }}>
              {publishedSpecies.length}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Verified Species
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-marine-light)' }}>
              {taxa.length}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Taxonomic Nodes
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>
              {bangladeshCount}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Bangladesh Records
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#a855f7' }}>
              {references.length}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Authoritative Citations
            </div>
          </div>
        </div>
      </section>

      {/* Major Biodiversity Discovery Portals */}
      <section>
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
            Systematic Biodiversity Portals
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Curated exploration environments structured according to biological systematics and ecological domains.
          </p>
        </div>

        <div className="grid-cols-4">
          <Link to="/fish" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Fish size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
              Fish Biodiversity
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Actinopterygii (Ray-finned fishes) and Chondrichthyes (Cartilaginous sharks & rays), including major carps, clupeids, and river catfishes.
            </p>
          </Link>

          <Link to="/marine" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(2, 132, 199, 0.15)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Waves size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
              Marine Life
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Pelagic and demersal marine organisms inhabiting the Bay of Bengal continental shelf and deep-water Swatch of No Ground.
            </p>
          </Link>

          <Link to="/bangladesh" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(217, 119, 6, 0.15)', color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <MapPin size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
              Bangladesh Biome
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Ecological zones: Padma-Meghna-Jamuna delta, Halda River carp sanctuary, Sylhet haors, and the Sundarbans mangrove wilderness.
            </p>
          </Link>

          <Link to="/taxonomy" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Layers size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
              Taxonomy Explorer
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Hierarchical Linnaean classification tree from Kingdom Animalia down to Genus and verified biological species.
            </p>
          </Link>
        </div>
      </section>

      {/* Core Zoology & Interactive Identification Engines Showcase */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-accent)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
              <Sparkles size={16} />
              <span>Zoological Learning & Identification Suite</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Core Zoology & Dichotomous Key
            </h2>
          </div>
          <Link to="/animal-kingdom" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
            Explore All 7 Modules <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          <Link to="/animal-kingdom" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '3px solid var(--border-accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <Layers size={20} className="text-accent" />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Animal Kingdom</h3>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              10 major animal phyla from Porifera to Chordata with diagnostic traits, symmetry, germ layers, and canonical species.
            </p>
          </Link>

          <Link to="/animal-biodiversity" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '3px solid #10b981' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <Globe size={20} style={{ color: '#10b981' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Animal Biodiversity</h3>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Explore and filter 238 canonical voucher species by vertebrate, invertebrate, phylum, class, habitat, and Bangladesh status.
            </p>
          </Link>

          <Link to="/comparative-zoology" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '3px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <GitCompare size={20} style={{ color: '#3b82f6' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Comparative Zoology</h3>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Invertebrate vs vertebrate polarity, organ system comparisons (digestion, respiration, circulation), and functional adaptations.
            </p>
          </Link>

          <Link to="/evolution-phylogeny" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '3px solid #a855f7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <TreeDeciduous size={20} style={{ color: '#a855f7' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Evolution & Phylogeny</h3>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Ediacaran to Cenozoic timescale, major transitions (multicellularity, jaws, amniotic egg), and cladistic node trees.
            </p>
          </Link>

          <Link to="/anatomy-physiology" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '3px solid #14b8a6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <Activity size={20} style={{ color: '#14b8a6' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Anatomy & Physiology</h3>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Integumentary, skeletal, and muscular biomechanics alongside osmoregulatory and thermoregulatory mechanisms.
            </p>
          </Link>

          <Link to="/vertebrates" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '3px solid #0284c7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <ShieldCheck size={20} style={{ color: '#0284c7' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Vertebrate Explorer</h3>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              7 living vertebrate lineages connecting Agnatha, Chondrichthyes, and Osteichthyes to all 73 living Fish Orders.
            </p>
          </Link>

          <Link to="/dichotomous-key" className="card card-hoverable" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '3px solid #f59e0b', gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <GitFork size={20} style={{ color: '#f59e0b' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Dichotomous Key Engine</h3>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Interactive step-by-step diagnostic key runner resolving to verified canonical voucher species profiles.
            </p>
          </Link>
        </div>
      </section>

      {/* Scientific Integrity Guarantee Section */}
      <section
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            <CheckCircle2 size={16} />
            <span>Strict Verification Protocol</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
            {t('home.verifiedGuarantee')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            {t('home.verifiedDesc')}
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
              No AI-hallucinated or synthetic scientific facts.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
              Mandatory ICZN binomial styling (Open Sans Italic).
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
              Verified and Published states are strictly decoupled.
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
              Full provenance metadata, licensing, and DOI references.
            </li>
          </ul>
        </div>

        <div style={{ background: 'var(--bg-surface)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={16} style={{ color: 'var(--accent-marine-light)' }} />
            Authoritative Taxonomic Backbone
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
            <div style={{ padding: '0.6rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Eschmeyer's Catalog of Fishes</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Nomenclatural validation & type designations</div>
            </div>
            <div style={{ padding: '0.6rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>World Register of Marine Species (WoRMS)</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Marine taxon hierarchy & AphiaID synchrony</div>
            </div>
            <div style={{ padding: '0.6rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>IUCN Red List of Bangladesh (2015)</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>National conservation assessments for freshwater fishes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Verified Species Spotlight */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
              Spotlight Species Records
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Authentic zoological profiles with morphological diagnoses and Bangladesh occurrence records.
            </p>
          </div>

          <Link to="/species" className="btn btn-secondary btn-sm" style={{ gap: '0.4rem' }}>
            <span>View All ({publishedSpecies.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid-species">
          {featuredSpecies.map(sp => (
            <SpeciesCard key={sp.id} species={sp} />
          ))}
        </div>
      </section>
    </div>
  );
};
