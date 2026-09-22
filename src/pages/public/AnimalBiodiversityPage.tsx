// src/pages/public/AnimalBiodiversityPage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useBiodiversity } from '../../context/BiodiversityContext';
import { useLanguage } from '../../context/LanguageContext';
import { SpeciesCard } from '../../components/species/SpeciesCard';
import {
  Globe,
  Search,
  ShieldAlert,
  RotateCcw,
  SlidersHorizontal,
  X,
  Filter
} from 'lucide-react';
import type { SpeciesRecord } from '../../types/biodiversity';

export const AnimalBiodiversityPage: React.FC = () => {
  const { species } = useBiodiversity();
  const { language } = useLanguage();
  const isBn = language === 'bn';

  const [searchParams] = useSearchParams();

  // State initialized from URL query params if present
  const initialPhylum = searchParams.get('phylum') || 'ALL';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhylum, setSelectedPhylum] = useState<string>(initialPhylum);
  const [selectedOrder, setSelectedOrder] = useState<string>('ALL');
  const [selectedFamily, setSelectedFamily] = useState<string>('ALL');
  const [selectedBroadGroup, setSelectedBroadGroup] = useState<'ALL' | 'VERTEBRATE' | 'INVERTEBRATE'>('ALL');
  const [selectedBangladeshScope, setSelectedBangladeshScope] = useState<'ALL' | 'BD_ONLY' | 'GLOBAL_ONLY'>('ALL');
  const [selectedIUCN, setSelectedIUCN] = useState<string>('ALL');
  const [selectedHabitatSystem, setSelectedHabitatSystem] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'name_asc' | 'name_desc' | 'status'>('name_asc');

  // Sync if URL search params change
  useEffect(() => {
    const ph = searchParams.get('phylum');
    if (ph) {
      setSelectedPhylum(ph);
      setSelectedOrder('ALL');
      setSelectedFamily('ALL');
    }
    const sc = searchParams.get('scope');
    if (sc === 'bd') setSelectedBangladeshScope('BD_ONLY');
    if (sc === 'global') setSelectedBangladeshScope('GLOBAL_ONLY');
  }, [searchParams]);

  // Extract distinct phyla, orders, families, habitat systems, and IUCN categories from canonical species
  const { distinctPhyla, distinctOrders, distinctFamilies, distinctHabitatSystems, distinctIUCN } = useMemo(() => {
    const phylaSet = new Set<string>();
    const ordersSet = new Set<string>();
    const familiesSet = new Set<string>();
    const systemSet = new Set<string>();
    const iucnSet = new Set<string>();

    species.forEach(sp => {
      if (sp.taxonomy?.phylum) {
        phylaSet.add(sp.taxonomy.phylum);
      }
      if (sp.taxonomy?.order) {
        if (selectedPhylum === 'ALL' || sp.taxonomy.phylum === selectedPhylum) {
          ordersSet.add(sp.taxonomy.order);
        }
      }
      if (sp.taxonomy?.family) {
        const phylumMatches = selectedPhylum === 'ALL' || sp.taxonomy.phylum === selectedPhylum;
        const orderMatches = selectedOrder === 'ALL' || sp.taxonomy.order === selectedOrder;
        if (phylumMatches && orderMatches) {
          familiesSet.add(sp.taxonomy.family);
        }
      }
      (sp.habitat?.systems || []).forEach(sys => systemSet.add(sys));
      if (sp.conservation?.iucnGlobalStatus) {
        iucnSet.add(sp.conservation.iucnGlobalStatus);
      }
    });

    return {
      distinctPhyla: Array.from(phylaSet).sort(),
      distinctOrders: Array.from(ordersSet).sort(),
      distinctFamilies: Array.from(familiesSet).sort(),
      distinctHabitatSystems: Array.from(systemSet).sort(),
      distinctIUCN: Array.from(iucnSet).sort()
    };
  }, [species, selectedPhylum, selectedOrder]);

  // Vertebrate identification helper
  const isVertebrate = (sp: SpeciesRecord): boolean => {
    const phylum = sp.taxonomy?.phylum?.toLowerCase() || '';
    if (phylum.includes('chordat')) return true;
    const cls = sp.taxonomy?.class?.toLowerCase() || '';
    const vertClasses = ['actinopterygii', 'chondrichthyes', 'sarcopterygii', 'amphibia', 'reptilia', 'aves', 'mammalia', 'myxini', 'petromyzontida'];
    return vertClasses.some(vc => cls.includes(vc));
  };

  // Filtered & Sorted species
  const filteredSpecies = useMemo(() => {
    return species.filter(sp => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const scMatch = sp.scientificName.toLowerCase().includes(q);
        const enMatch = (sp.commonNames?.en || []).some(n => n.toLowerCase().includes(q));
        const bnMatch = (sp.commonNames?.bn || []).some(n => n.includes(q));
        if (!scMatch && !enMatch && !bnMatch) return false;
      }

      // Broad group (Vert vs Invert)
      if (selectedBroadGroup === 'VERTEBRATE' && !isVertebrate(sp)) return false;
      if (selectedBroadGroup === 'INVERTEBRATE' && isVertebrate(sp)) return false;

      // Phylum
      if (selectedPhylum !== 'ALL') {
        const ph = sp.taxonomy?.phylum;
        if (ph !== selectedPhylum) return false;
      }

      // Order
      if (selectedOrder !== 'ALL') {
        const ord = sp.taxonomy?.order;
        if (ord !== selectedOrder) return false;
      }

      // Family
      if (selectedFamily !== 'ALL') {
        const fam = sp.taxonomy?.family;
        if (fam !== selectedFamily) return false;
      }

      // Bangladesh vs Global Scope
      const isBdOccurring = Boolean(sp.bangladeshOccurrence?.present);
      if (selectedBangladeshScope === 'BD_ONLY' && !isBdOccurring) return false;
      if (selectedBangladeshScope === 'GLOBAL_ONLY' && isBdOccurring) return false;

      // IUCN
      if (selectedIUCN !== 'ALL' && sp.conservation?.iucnGlobalStatus !== selectedIUCN) return false;

      // Habitat system
      if (selectedHabitatSystem !== 'ALL' && !(sp.habitat?.systems || []).includes(selectedHabitatSystem as any)) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name_asc') return a.scientificName.localeCompare(b.scientificName);
      if (sortBy === 'name_desc') return b.scientificName.localeCompare(a.scientificName);
      if (sortBy === 'status') {
        const rank = (status?: string) => {
          switch (status) {
            case 'CR': return 1;
            case 'EN': return 2;
            case 'VU': return 3;
            case 'NT': return 4;
            case 'LC': return 5;
            default: return 6;
          }
        };
        return rank(a.conservation?.iucnGlobalStatus) - rank(b.conservation?.iucnGlobalStatus);
      }
      return 0;
    });
  }, [species, searchQuery, selectedBroadGroup, selectedPhylum, selectedOrder, selectedFamily, selectedBangladeshScope, selectedIUCN, selectedHabitatSystem, sortBy]);

  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedPhylum('ALL');
    setSelectedOrder('ALL');
    setSelectedFamily('ALL');
    setSelectedBroadGroup('ALL');
    setSelectedBangladeshScope('ALL');
    setSelectedIUCN('ALL');
    setSelectedHabitatSystem('ALL');
    setSortBy('name_asc');
  };

  return (
    <div className="page-container">
      {/* Top Banner */}
      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(15, 23, 42, 0.6) 100%)', border: '1px solid var(--border-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Globe className="text-accent" size={26} />
          <span className="badge badge-accent" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            {isBn ? 'প্রাণী জীববৈচিত্র্য অনুসন্ধান ইঞ্জিন' : 'CANONICAL ANIMAL BIODIVERSITY PORTAL'}
          </span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {isBn ? 'প্রাণী জীববৈচিত্র্য এক্সপ্লোরার' : 'Animal Biodiversity'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: 1.6 }}>
          {isBn
            ? 'কর্ডাটা, আর্থ্রোপোডা, মলাস্কা, অ্যানেলিডা ও অন্যান্য পর্বের মোট ২৩৮টি প্রামাণ্য প্রজাতি, যার মধ্যে বাংলাদেশে প্রাপ্ত ১১৬টি ও বৈশ্বিক ১২২টি প্রজাতির ফিল্টারিং, অনুসন্ধান এবং শ্রেণিবিন্যাস পর্যবেক্ষণ।'
            : 'Explore, filter, and interrogate all 238 canonical zoological voucher species across Bangladesh and global biogeographic realms with multi-tier taxonomic, conservation, and ecosystem filters.'}
        </p>

        {/* Live Counters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'মোট প্রামাণ্য প্রজাতি' : 'Total Canonical'}</span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--text-accent)' }}>{species.length} Species</strong>
          </div>
          <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }} />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'ফিল্টারকৃত ফলাফল' : 'Filtered Matches'}</span>
            <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{filteredSpecies.length} Species</strong>
          </div>
          <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }} />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'বাংলাদেশে উপস্থিতি' : 'BD Occurring'}</span>
            <strong style={{ fontSize: '1.2rem', color: '#4ade80' }}>
              {filteredSpecies.filter(s => Boolean(s.bangladeshOccurrence?.present)).length} Species
            </strong>
          </div>
          <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }} />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>{isBn ? 'বৈশ্বিক বহির্ভাগ' : 'Global Extralimital'}</span>
            <strong style={{ fontSize: '1.2rem', color: '#38bdf8' }}>
              {filteredSpecies.filter(s => !s.bangladeshOccurrence?.present).length} Species
            </strong>
          </div>
        </div>
      </div>

      {/* Filter Toolbar Card */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        {/* Search and Quick Actions Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 1fr) auto', gap: '1rem', marginBottom: '1rem' }}>
          {/* Search box */}
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={isBn ? 'বৈজ্ঞানিক নাম বা সাধারণ নাম দিয়ে খুঁজুন...' : 'Search by scientific or common name...'}
              className="input"
              style={{ paddingLeft: '2.5rem', width: '100%', fontSize: '0.9rem' }}
            />
          </div>

          {/* Reset Filters */}
          <button
            onClick={resetFilters}
            className="btn btn-outline"
            style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap' }}
          >
            <RotateCcw size={15} />
            {isBn ? 'ফিল্টার রিসেট' : 'Reset Filters'}
          </button>
        </div>

        {/* Ecosystem Quick-Filter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem', paddingTop: '0.25rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginRight: '0.25rem' }}>
            <Filter size={14} />
            {isBn ? 'বাস্তুতন্ত্র চয়ন:' : 'Ecosystem:'}
          </span>
          {[
            { id: 'ALL', labelEn: 'All Habitats', labelBn: 'সকল বাস্তুতন্ত্র' },
            { id: 'Freshwater', labelEn: 'Freshwater', labelBn: 'স্বাদু পানি' },
            { id: 'Marine', labelEn: 'Marine', labelBn: 'সামুদ্রিক' },
            { id: 'Terrestrial', labelEn: 'Terrestrial', labelBn: 'স্থলজ' },
            { id: 'Brackish', labelEn: 'Brackish', labelBn: 'লোনা পানি' }
          ].map(eco => {
            const isActive = selectedHabitatSystem === eco.id;
            return (
              <button
                key={eco.id}
                type="button"
                onClick={() => setSelectedHabitatSystem(eco.id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-ghost'}`}
                style={{ fontSize: '0.78rem', padding: '0.25rem 0.7rem', borderRadius: '9999px', height: 'auto', minHeight: 'unset' }}
              >
                {isBn ? eco.labelBn : eco.labelEn}
              </button>
            );
          })}
        </div>

        {/* Dropdown Filters Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
          {/* Broad Group: Vert vs Invert */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              {isBn ? 'প্রাণী দল (সংগঠন)' : 'Broad Lineage'}
            </label>
            <select
              value={selectedBroadGroup}
              onChange={e => setSelectedBroadGroup(e.target.value as any)}
              className="input"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <option value="ALL">{isBn ? 'সকল দল (All)' : 'All Animals'}</option>
              <option value="VERTEBRATE">{isBn ? 'মেরুদণ্ডী (Vertebrates)' : 'Vertebrates (Chordata)'}</option>
              <option value="INVERTEBRATE">{isBn ? 'অমেরুদণ্ডী (Invertebrates)' : 'Invertebrates'}</option>
            </select>
          </div>

          {/* Phylum */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              {isBn ? 'পর্ব (Phylum)' : 'Phylum'}
            </label>
            <select
              value={selectedPhylum}
              onChange={e => {
                setSelectedPhylum(e.target.value);
                setSelectedOrder('ALL');
                setSelectedFamily('ALL');
              }}
              className="input"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <option value="ALL">{isBn ? 'সকল পর্ব (All Phyla)' : 'All Phyla'}</option>
              {distinctPhyla.map(ph => (
                <option key={ph} value={ph}>{ph}</option>
              ))}
            </select>
          </div>

          {/* Order */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              {isBn ? 'বর্গ (Order)' : 'Order'} ({distinctOrders.length})
            </label>
            <select
              value={selectedOrder}
              onChange={e => {
                setSelectedOrder(e.target.value);
                setSelectedFamily('ALL');
              }}
              className="input"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <option value="ALL">{isBn ? 'সকল বর্গ (All Orders)' : 'All Orders'}</option>
              {distinctOrders.map(ord => (
                <option key={ord} value={ord}>{ord}</option>
              ))}
            </select>
          </div>

          {/* Family */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              {isBn ? 'গোত্র (Family)' : 'Family'} ({distinctFamilies.length})
            </label>
            <select
              value={selectedFamily}
              onChange={e => setSelectedFamily(e.target.value)}
              className="input"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <option value="ALL">{isBn ? 'সকল গোত্র (All Families)' : 'All Families'}</option>
              {distinctFamilies.map(fam => (
                <option key={fam} value={fam}>{fam}</option>
              ))}
            </select>
          </div>

          {/* Bangladesh vs Global */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              {isBn ? 'ভৌগোলিক পরিধি' : 'Geographic Scope'}
            </label>
            <select
              value={selectedBangladeshScope}
              onChange={e => setSelectedBangladeshScope(e.target.value as any)}
              className="input"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <option value="ALL">{isBn ? 'বাংলাদেশ ও বৈশ্বিক সকল' : 'All Geographic Regions'}</option>
              <option value="BD_ONLY">{isBn ? 'শুধু বাংলাদেশ উপস্থিতি (116)' : 'Bangladesh Only (116 sp)'}</option>
              <option value="GLOBAL_ONLY">{isBn ? 'শুধু বহির্দেশীয়/বৈশ্বিক (122)' : 'Global Extralimital (122 sp)'}</option>
            </select>
          </div>

          {/* IUCN Red List */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              {isBn ? 'আইইউসিএন স্থিতি' : 'Conservation Status'}
            </label>
            <select
              value={selectedIUCN}
              onChange={e => setSelectedIUCN(e.target.value)}
              className="input"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <option value="ALL">{isBn ? 'সকল সংরক্ষণ স্থিতি' : 'All IUCN Categories'}</option>
              {distinctIUCN.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* Habitat System */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              {isBn ? 'আবাসস্থল তন্ত্র' : 'Aquatic / Terrestrial'}
            </label>
            <select
              value={selectedHabitatSystem}
              onChange={e => setSelectedHabitatSystem(e.target.value)}
              className="input"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <option value="ALL">{isBn ? 'সকল তন্ত্র' : 'All Habitat Systems'}</option>
              {distinctHabitatSystems.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              {isBn ? 'সাজানোর ক্রম' : 'Sort Order'}
            </label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="input"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <option value="name_asc">{isBn ? 'বৈজ্ঞানিক নাম (A–Z)' : 'Scientific Name (A–Z)'}</option>
              <option value="name_desc">{isBn ? 'বৈজ্ঞানিক নাম (Z–A)' : 'Scientific Name (Z–A)'}</option>
              <option value="status">{isBn ? 'হুমকির মাত্রা (CR → LC)' : 'Threat Level (CR → LC)'}</option>
            </select>
          </div>
        </div>

        {/* Active Filters Pill Bar */}
        {(searchQuery || selectedPhylum !== 'ALL' || selectedOrder !== 'ALL' || selectedFamily !== 'ALL' || selectedBroadGroup !== 'ALL' || selectedBangladeshScope !== 'ALL' || selectedIUCN !== 'ALL' || selectedHabitatSystem !== 'ALL') && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <SlidersHorizontal size={13} />
              {isBn ? 'সক্রিয় ফিল্টারসমূহ:' : 'Active Filters:'}
            </span>

            {searchQuery && (
              <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                {isBn ? 'অনুসন্ধান:' : 'Search:'} "{searchQuery}"
                <button type="button" onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}>
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedPhylum !== 'ALL' && (
              <span className="badge badge-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                Phylum: {selectedPhylum}
                <button type="button" onClick={() => { setSelectedPhylum('ALL'); setSelectedOrder('ALL'); setSelectedFamily('ALL'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}>
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedOrder !== 'ALL' && (
              <span className="badge badge-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                Order: {selectedOrder}
                <button type="button" onClick={() => { setSelectedOrder('ALL'); setSelectedFamily('ALL'); }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}>
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedFamily !== 'ALL' && (
              <span className="badge badge-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                Family: {selectedFamily}
                <button type="button" onClick={() => setSelectedFamily('ALL')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}>
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedBroadGroup !== 'ALL' && (
              <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                Lineage: {selectedBroadGroup}
                <button type="button" onClick={() => setSelectedBroadGroup('ALL')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}>
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedBangladeshScope !== 'ALL' && (
              <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                Scope: {selectedBangladeshScope === 'BD_ONLY' ? 'BD Only' : 'Global Only'}
                <button type="button" onClick={() => setSelectedBangladeshScope('ALL')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}>
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedIUCN !== 'ALL' && (
              <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                IUCN: {selectedIUCN}
                <button type="button" onClick={() => setSelectedIUCN('ALL')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}>
                  <X size={12} />
                </button>
              </span>
            )}

            {selectedHabitatSystem !== 'ALL' && (
              <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem' }}>
                Habitat: {selectedHabitatSystem}
                <button type="button" onClick={() => setSelectedHabitatSystem('ALL')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'inherit' }}>
                  <X size={12} />
                </button>
              </span>
            )}

            <button
              type="button"
              onClick={resetFilters}
              className="btn btn-ghost"
              style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', color: 'var(--text-accent)' }}
            >
              {isBn ? 'সকল মুছুন' : 'Clear all'}
            </button>
          </div>
        )}
      </div>

      {/* Species Grid */}
      {filteredSpecies.length === 0 ? (
        <div className="card text-center" style={{ padding: '3.5rem 1rem' }}>
          <ShieldAlert size={42} className="text-muted" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {isBn ? 'কোনো প্রজাতি খুঁজে পাওয়া যায়নি' : 'No species matched your filter criteria'}
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 1.5rem' }}>
            {isBn
              ? 'আপনার অনুসন্ধান শব্দ বা ফিল্টারের পরামিতি পরিবর্তন করে পুনরায় চেষ্টা করুন।'
              : 'Try clearing some of your filter parameters or search terms to broaden the results.'}
          </p>
          <button onClick={resetFilters} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <RotateCcw size={16} />
            {isBn ? 'সকল ফিল্টার রিসেট করুন' : 'Clear All Filters'}
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filteredSpecies.map(sp => (
            <SpeciesCard key={sp.id} species={sp} />
          ))}
        </div>
      )}
    </div>
  );
};
export default AnimalBiodiversityPage;
