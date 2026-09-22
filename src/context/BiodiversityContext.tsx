// BiotaElite 2.0 Central Biodiversity Store & Governance Engine
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  SpeciesRecord, 
  TaxonNode, 
  ReferenceSource, 
  IdentificationKey, 
  AquaticSystem, 
  IUCNStatus, 
  BangladeshResidency, 
  LifecycleStatus,
  TaxonomicRank,
  TaxonKnowledgeRecord 
} from '../types/biodiversity';
import { compareSpeciesByPriority } from '../types/biodiversity';
import type { AuditLogEntry, AuditAction } from '../types/audit';
import type { BatchImportRecord, ConflictRecord } from '../types/provenance';
import { SEED_SPECIES } from '../data/seedSpecies';
import { SEED_TAXA } from '../data/seedTaxa';
import { SEED_REFERENCES } from '../data/seedReferences';
import { SEED_IDENTIFICATION_KEYS } from '../data/seedIdentKeys';
import { SEED_TAXON_KNOWLEDGE } from '../data/seedTaxonKnowledge';
import { useAuth } from './AuthContext';

export interface FilterState {
  searchQuery: string;
  habitat: AquaticSystem | 'all';
  conservation: IUCNStatus | 'all';
  bangladeshPresenceOnly: boolean;
  residency: BangladeshResidency | 'all';
  classFilter: string | 'all';
  lifecycleStatus: LifecycleStatus | 'all';
}

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  habitat: 'all',
  conservation: 'all',
  bangladeshPresenceOnly: false,
  residency: 'all',
  classFilter: 'all',
  lifecycleStatus: 'all',
};

const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'log-seed-001',
    actorId: 'usr-admin-001',
    actorEmail: 'admin.lead@biotaelite.org',
    actorRole: 'super_admin',
    action: 'publish',
    entity: 'species',
    entityId: 'sp-tenualosa-ilisha',
    entityName: 'Tenualosa ilisha (Hamilton, 1822)',
    timestamp: '2026-09-12T08:30:00Z',
    details: 'Verified against primary monograph Hamilton (1822) and FishBase ID 1599. Published to public index.'
  },
  {
    id: 'log-seed-002',
    actorId: 'usr-admin-001',
    actorEmail: 'admin.lead@biotaelite.org',
    actorRole: 'super_admin',
    action: 'publish',
    entity: 'species',
    entityId: 'sp-labeo-rohita',
    entityName: 'Labeo rohita (Hamilton, 1822)',
    timestamp: '2026-09-12T08:31:00Z',
    details: 'Verified against Hamilton (1822) and IUCN Bangladesh (2015) Volume 5.'
  },
  {
    id: 'log-seed-003',
    actorId: 'usr-admin-001',
    actorEmail: 'admin.lead@biotaelite.org',
    actorRole: 'super_admin',
    action: 'publish',
    entity: 'species',
    entityId: 'sp-orcaella-brevirostris',
    entityName: 'Orcaella brevirostris (Owen in Gray, 1866)',
    timestamp: '2026-09-12T08:32:00Z',
    details: 'Verified against WoRMS AphiaID 137107 and Smith et al. (2008) cetacean surveys in Bangladesh waters.'
  }
];

interface BiodiversityContextType {
  species: SpeciesRecord[];
  taxa: TaxonNode[];
  references: ReferenceSource[];
  identKeys: IdentificationKey[];
  auditLogs: AuditLogEntry[];
  batches: BatchImportRecord[];
  conflicts: ConflictRecord[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  filteredSpecies: SpeciesRecord[];

  getSpeciesById: (id: string) => SpeciesRecord | undefined;
  getTaxonById: (id: string) => TaxonNode | undefined;
  getTaxonByScientificName: (name: string, rank?: TaxonomicRank) => TaxonNode | undefined;
  getChildTaxa: (parentId: string | null) => TaxonNode[];
  getTaxonAncestry: (taxonId: string) => TaxonNode[];
  resolveTaxonRoute: (rank: TaxonomicRank, nameOrId: string, module?: 'fish' | 'marine' | 'taxonomy') => string;
  getReferenceById: (id: string) => ReferenceSource | undefined;
  
  // Strict Module Data Separation & Filtering API
  getSpeciesByModule: (module: 'species' | 'fish' | 'marine' | 'bangladesh' | 'threatened') => SpeciesRecord[];
  getSpeciesByHabitat: (system: AquaticSystem) => SpeciesRecord[];
  getSpeciesByTaxon: (rank: TaxonomicRank, taxonName: string) => SpeciesRecord[];
  getSpeciesByBangladeshOccurrence: (region?: string) => SpeciesRecord[];
  getSpeciesByConservationStatus: (status: IUCNStatus, isNational?: boolean) => SpeciesRecord[];

  // MASTER-BUILD-02B: Taxon Knowledge Base API
  taxonKnowledge: TaxonKnowledgeRecord[];
  getTaxonKnowledgeById: (id: string) => TaxonKnowledgeRecord | undefined;
  getTaxonKnowledgeByCategory: (category: 'fish' | 'marine_non_fish') => TaxonKnowledgeRecord[];
  getTaxonKnowledgeByRank: (rank: TaxonomicRank) => TaxonKnowledgeRecord[];
  getTaxonKnowledgeChildren: (parentId: string) => TaxonKnowledgeRecord[];
  getDynamicTaxonomicCounts: (scope: 'fish' | 'marine_non_fish' | 'all') => {
    classes: number;
    subclasses: number;
    orders: number;
    families: number;
    genera: number;
    species: number;
  };
  updateTaxonKnowledge: (id: string, updates: Partial<TaxonKnowledgeRecord>) => void;

  // CRUD & Governance
  addSpecies: (speciesData: Omit<SpeciesRecord, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateSpecies: (id: string, updates: Partial<SpeciesRecord>, reason?: string) => void;
  verifySpecies: (id: string, verifierNotes?: string) => void;
  publishSpecies: (id: string) => void;
  unpublishSpecies: (id: string) => void;
  archiveSpecies: (id: string) => void;
  deleteSpecies: (id: string) => void;

  addTaxon: (taxonData: Omit<TaxonNode, 'id'>) => void;
  updateTaxon: (id: string, updates: Partial<TaxonNode>) => void;
  addReference: (refData: Omit<ReferenceSource, 'id'>) => void;
  updateReference: (id: string, updates: Partial<ReferenceSource>) => void;

  resetToInitialSeed: () => void;

  // MASTER-BUILD-02: Batch import & conflict dispatch
  dispatch: (action: BatchDispatchAction) => void;
}

// Dispatch action types for batch import & conflict operations
type BatchDispatchAction =
  | { type: 'BATCH_COMMIT'; records: SpeciesRecord[]; batchRecord: BatchImportRecord }
  | { type: 'BATCH_ROLLBACK'; filteredSpecies: SpeciesRecord[]; updatedBatches: BatchImportRecord[] }
  | { type: 'RESOLVE_CONFLICT'; conflictId: string; resolution: string; resolutionNote: string; resolvedAt: string; resolvedBy: string };

const SEED_VERSION_KEY = 'biota_seed_version';
const CURRENT_SEED_VERSION = 'v2o_master_fix_15_17_expansion';

// Storage safety utilities protecting against quota, disabled storage, or corrupted JSON
function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    console.warn(`[BiodiversityContext] Failed to read ${key} from storage:`, err);
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.warn(`[BiodiversityContext] Failed to write ${key} to storage:`, err);
  }
}

function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.warn(`[BiodiversityContext] Failed to remove ${key} from storage:`, err);
  }
}

function safeParseJson<T>(raw: string | null, fallback: T): { value: T; corrupted: boolean } {
  if (!raw) return { value: fallback, corrupted: false };
  try {
    const parsed = JSON.parse(raw);
    return {
      value: (parsed !== null && parsed !== undefined) ? parsed : fallback,
      corrupted: parsed === null || parsed === undefined
    };
  } catch (err) {
    console.warn('[BiodiversityContext] JSON parse failure, falling back to seed:', err);
    return { value: fallback, corrupted: true };
  }
}

interface AuditedBiodiversityState {
  species: SpeciesRecord[];
  taxa: TaxonNode[];
  taxonKnowledge: TaxonKnowledgeRecord[];
  references: ReferenceSource[];
  auditLogs: AuditLogEntry[];
  batches: BatchImportRecord[];
  conflicts: ConflictRecord[];
}

function loadAuditedBiodiversityData(): AuditedBiodiversityState {
  const version = safeGetItem(SEED_VERSION_KEY);
  const isVersionMatch = version === CURRENT_SEED_VERSION;

  if (!isVersionMatch) {
    // Stale or missing version: write current version and fresh authoritative seed
    safeSetItem(SEED_VERSION_KEY, CURRENT_SEED_VERSION);
    safeSetItem('biota_species', JSON.stringify(SEED_SPECIES));
    safeSetItem('biota_taxa', JSON.stringify(SEED_TAXA));
    safeSetItem('biota_taxon_knowledge', JSON.stringify(SEED_TAXON_KNOWLEDGE));
    safeSetItem('biota_references', JSON.stringify(SEED_REFERENCES));
    return {
      species: SEED_SPECIES,
      taxa: SEED_TAXA,
      taxonKnowledge: SEED_TAXON_KNOWLEDGE,
      references: SEED_REFERENCES,
      auditLogs: INITIAL_AUDIT_LOGS,
      batches: [],
      conflicts: []
    };
  }

  // Version matches; safely parse and validate structural integrity
  const parsedSpeciesRes = safeParseJson<SpeciesRecord[]>(safeGetItem('biota_species'), SEED_SPECIES);
  const parsedTaxaRes = safeParseJson<TaxonNode[]>(safeGetItem('biota_taxa'), SEED_TAXA);
  const parsedKnowledgeRes = safeParseJson<TaxonKnowledgeRecord[]>(safeGetItem('biota_taxon_knowledge'), SEED_TAXON_KNOWLEDGE);
  const parsedRefsRes = safeParseJson<ReferenceSource[]>(safeGetItem('biota_references'), SEED_REFERENCES);
  const parsedLogsRes = safeParseJson<AuditLogEntry[]>(safeGetItem('biota_audit_logs'), INITIAL_AUDIT_LOGS);
  const parsedBatchesRes = safeParseJson<BatchImportRecord[]>(safeGetItem('biota_batches'), []);
  const parsedConflictsRes = safeParseJson<ConflictRecord[]>(safeGetItem('biota_conflicts'), []);

  // Validate integrity: must be arrays and meet minimum node count
  const validTaxa = (Array.isArray(parsedTaxaRes.value) && parsedTaxaRes.value.length >= 190) ? parsedTaxaRes.value : SEED_TAXA;
  const validKnowledge = (Array.isArray(parsedKnowledgeRes.value) && parsedKnowledgeRes.value.length >= 80) ? parsedKnowledgeRes.value : SEED_TAXON_KNOWLEDGE;
  const validSpecies = (Array.isArray(parsedSpeciesRes.value) && parsedSpeciesRes.value.length > 0) ? parsedSpeciesRes.value : SEED_SPECIES;
  const validRefs = (Array.isArray(parsedRefsRes.value) && parsedRefsRes.value.length > 0) ? parsedRefsRes.value : SEED_REFERENCES;
  const validLogs = Array.isArray(parsedLogsRes.value) ? parsedLogsRes.value : INITIAL_AUDIT_LOGS;
  const validBatches = Array.isArray(parsedBatchesRes.value) ? parsedBatchesRes.value : [];
  const validConflicts = Array.isArray(parsedConflictsRes.value) ? parsedConflictsRes.value : [];

  // Heal storage if corruption occurred or fallback was applied
  if (parsedTaxaRes.corrupted || validTaxa !== parsedTaxaRes.value) safeSetItem('biota_taxa', JSON.stringify(validTaxa));
  if (parsedKnowledgeRes.corrupted || validKnowledge !== parsedKnowledgeRes.value) safeSetItem('biota_taxon_knowledge', JSON.stringify(validKnowledge));
  if (parsedSpeciesRes.corrupted || validSpecies !== parsedSpeciesRes.value) safeSetItem('biota_species', JSON.stringify(validSpecies));
  if (parsedRefsRes.corrupted || validRefs !== parsedRefsRes.value) safeSetItem('biota_references', JSON.stringify(validRefs));

  return {
    species: validSpecies,
    taxa: validTaxa,
    taxonKnowledge: validKnowledge,
    references: validRefs,
    auditLogs: validLogs,
    batches: validBatches,
    conflicts: validConflicts
  };
}

const BiodiversityContext = createContext<BiodiversityContextType | undefined>(undefined);
export { BiodiversityContext };

export const BiodiversityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, role } = useAuth();

  // Load state deterministically with version validation & safe fallback
  const [initialData] = useState<AuditedBiodiversityState>(() => loadAuditedBiodiversityData());

  const [species, setSpecies] = useState<SpeciesRecord[]>(initialData.species);
  const [taxa, setTaxa] = useState<TaxonNode[]>(initialData.taxa);
  const [taxonKnowledge, setTaxonKnowledge] = useState<TaxonKnowledgeRecord[]>(initialData.taxonKnowledge);
  const [references, setReferences] = useState<ReferenceSource[]>(initialData.references);
  const [identKeys] = useState<IdentificationKey[]>(SEED_IDENTIFICATION_KEYS);
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(initialData.auditLogs);
  const [batches, setBatches] = useState<BatchImportRecord[]>(initialData.batches);
  const [conflicts, setConflicts] = useState<ConflictRecord[]>(initialData.conflicts);

  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  // Sync to localStorage safely
  useEffect(() => {
    safeSetItem('biota_species', JSON.stringify(species));
  }, [species]);

  useEffect(() => {
    safeSetItem('biota_taxa', JSON.stringify(taxa));
  }, [taxa]);

  useEffect(() => {
    safeSetItem('biota_taxon_knowledge', JSON.stringify(taxonKnowledge));
  }, [taxonKnowledge]);

  useEffect(() => {
    safeSetItem('biota_references', JSON.stringify(references));
  }, [references]);

  useEffect(() => {
    safeSetItem('biota_audit_logs', JSON.stringify(auditLogs));
  }, [auditLogs]);

  useEffect(() => {
    safeSetItem('biota_batches', JSON.stringify(batches));
  }, [batches]);

  useEffect(() => {
    safeSetItem('biota_conflicts', JSON.stringify(conflicts));
  }, [conflicts]);

  const logAudit = (action: AuditAction, entity: 'species' | 'taxon' | 'reference' | 'user', entityId: string, entityName: string, details?: string, previousState?: Record<string, unknown>, newState?: Record<string, unknown>) => {
    const newEntry: AuditLogEntry = {
      id: 'log-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
      actorId: currentUser?.uid || 'system',
      actorEmail: currentUser?.email || 'system@biotaelite.org',
      actorRole: role,
      action,
      entity,
      entityId,
      entityName,
      timestamp: new Date().toISOString(),
      details,
      previousState,
      newState
    };
    setAuditLogs(prev => [newEntry, ...prev]);
  };

  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  const getSpeciesById = (id: string) => species.find(s => s.id === id);
  const getTaxonById = (id: string) => taxa.find(t => t.id === id);
  const getReferenceById = (id: string) => references.find(r => r.id === id);

  const getTaxonByScientificName = (name: string, rank?: TaxonomicRank): TaxonNode | undefined => {
    const clean = name.trim().toLowerCase();
    return taxa.find(t => {
      const matchName = t.scientificName.toLowerCase() === clean || (t.name && t.name.toLowerCase() === clean);
      if (!matchName) return false;
      if (rank) return t.rank === rank;
      return true;
    });
  };

  const getChildTaxa = (parentId: string | null): TaxonNode[] => {
    return taxa.filter(t => (t.parentTaxonId ?? t.parentId) === parentId);
  };

  const getTaxonAncestry = (taxonId: string): TaxonNode[] => {
    const ancestry: TaxonNode[] = [];
    let current = taxa.find(t => t.id === taxonId);
    while (current) {
      ancestry.unshift(current);
      const parentId = current.parentTaxonId ?? current.parentId;
      if (!parentId) break;
      current = taxa.find(t => t.id === parentId);
    }
    return ancestry;
  };

  const resolveTaxonRoute = (rank: TaxonomicRank, nameOrId: string, moduleHint?: 'fish' | 'marine' | 'taxonomy'): string => {
    // 1. Check direct knowledge record match (by id, taxonId, canonicalSlug, or scientificName)
    const directKnowledge = taxonKnowledge.find(
      k =>
        k.id === nameOrId ||
        k.taxonId === nameOrId ||
        k.canonicalSlug === nameOrId ||
        k.scientificName.toLowerCase() === nameOrId.toLowerCase()
    );
    if (directKnowledge) {
      if (moduleHint === 'taxonomy' || directKnowledge.category === 'zoology' || directKnowledge.category === 'general') {
        return `/taxonomy/${directKnowledge.canonicalSlug || directKnowledge.id}`;
      }
      const base = directKnowledge.category === 'fish' ? '/fish' : '/marine';
      if (directKnowledge.rank === 'superclass') {
        return `/fish/group/${directKnowledge.id}`;
      }
      if (directKnowledge.rank === 'class') {
        return `${base}/class/${directKnowledge.id}`;
      }
      if (directKnowledge.rank === 'order' || directKnowledge.rank === 'infraorder' || directKnowledge.rank === 'suborder') {
        return `${base}/order/${directKnowledge.id}`;
      }
      if (directKnowledge.rank === 'superfamily' || directKnowledge.rank === 'family' || directKnowledge.rank === 'subfamily') {
        return directKnowledge.category === 'fish' ? `/fish/family/${directKnowledge.id}` : `${base}/order/${directKnowledge.id}`;
      }
      if (directKnowledge.rank === 'phylum') {
        return `/marine/phylum/${directKnowledge.id}`;
      }
    }

    // 2. Lookup in normalized taxa graph
    const found = taxa.find(
      t => t.id === nameOrId || t.scientificName.toLowerCase() === nameOrId.toLowerCase() || (t.name && t.name.toLowerCase() === nameOrId.toLowerCase())
    );
    if (moduleHint === 'taxonomy') {
      const slug = found ? found.name.toLowerCase() : nameOrId.toLowerCase().replace(/[^a-z0-9]/g, '-');
      return `/taxonomy/${slug}`;
    }
    const isFish = moduleHint === 'fish' || (found && found.module === 'fish');
    const base = isFish ? '/fish' : '/marine';
    const targetId = found ? found.id : nameOrId.toLowerCase().replace(/[^a-z0-9]/g, '-');

    if (rank === 'order' || rank === 'infraorder' || rank === 'suborder') return `${base}/order/${targetId}`;
    if (rank === 'superclass') return isFish ? `/fish/group/${targetId}` : `${base}/class/${targetId}`;
    if (rank === 'class') return `${base}/class/${targetId}`;
    if (rank === 'family' || rank === 'superfamily' || rank === 'subfamily') {
      return isFish ? `/fish/family/${targetId}` : `${base}/order/${targetId}`;
    }
    if (rank === 'genus') return isFish ? `/fish/genus/${targetId}` : `${base}`;
    if (rank === 'phylum') return `/marine/phylum/${targetId}`;
    return `${base}`;
  };

  // MASTER-BUILD-02: Synonym-aware filtered species
  // Public filters only show published species; admin filters show all
  const filteredSpecies = species.filter(s => {
    // Search query: also checks synonyms for synonym resolution
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase();
      const matchSci = s.scientificName.toLowerCase().includes(q);
      const matchAuth = s.scientificNameAuthorship.toLowerCase().includes(q);
      const matchFamily = s.taxonomy.family.toLowerCase().includes(q);
      const matchGenus = s.taxonomy.genus.toLowerCase().includes(q);
      const matchCommonEn = s.commonNames.en.some(name => name.toLowerCase().includes(q));
      const matchCommonBn = s.commonNames.bn.some(name => name.includes(q));
      // Synonym name search
      const matchSynonym = s.synonyms.some(syn => syn.name.toLowerCase().includes(q));
      if (!matchSci && !matchAuth && !matchFamily && !matchGenus && !matchCommonEn && !matchCommonBn && !matchSynonym) {
        return false;
      }
    }

    // Habitat system
    if (filters.habitat !== 'all') {
      if (!s.habitat.systems.includes(filters.habitat)) return false;
    }

    // Conservation status
    if (filters.conservation !== 'all') {
      if (s.conservation.iucnGlobalStatus !== filters.conservation) return false;
    }

    // Bangladesh presence
    if (filters.bangladeshPresenceOnly) {
      if (!s.bangladeshOccurrence.present) return false;
    }

    // Bangladesh residency
    if (filters.residency !== 'all') {
      if (s.bangladeshOccurrence.residencyStatus !== filters.residency) return false;
    }

    // Class filter
    if (filters.classFilter !== 'all') {
      if (s.taxonomy.class.toLowerCase() !== filters.classFilter.toLowerCase()) return false;
    }

    // Lifecycle status filter
    if (filters.lifecycleStatus !== 'all') {
      if (s.lifecycleStatus !== filters.lifecycleStatus) return false;
    }

    return true;
  }).sort(compareSpeciesByPriority);

  // Species Actions
  const addSpecies = (speciesData: Omit<SpeciesRecord, 'id' | 'createdAt' | 'updatedAt'>) => {
    const id = 'sp-' + speciesData.scientificName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const newRecord: SpeciesRecord = {
      ...speciesData,
      id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSpecies(prev => [newRecord, ...prev]);
    logAudit('create', 'species', id, newRecord.scientificName, 'New species draft created.');
  };

  const updateSpecies = (id: string, updates: Partial<SpeciesRecord>, reason?: string) => {
    const existing = species.find(s => s.id === id);
    if (!existing) return;

    setSpecies(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          ...updates,
          updatedAt: new Date().toISOString(),
        };
      }
      return s;
    }));

    logAudit('update', 'species', id, existing.scientificName, reason || 'Species updated.', existing as unknown as Record<string, unknown>, updates as unknown as Record<string, unknown>);
  };

  const verifySpecies = (id: string, verifierNotes?: string) => {
    const existing = species.find(s => s.id === id);
    if (!existing) return;

    const now = new Date().toISOString();
    setSpecies(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          isVerified: true,
          lifecycleStatus: 'verified',
          verifiedAt: now,
          verifiedBy: currentUser?.displayName || 'Scientific Reviewer',
          updatedAt: now,
        };
      }
      return s;
    }));

    logAudit('verify', 'species', id, existing.scientificName, verifierNotes || 'Species taxonomically and nomenclaturally verified.');
  };

  const publishSpecies = (id: string) => {
    const existing = species.find(s => s.id === id);
    if (!existing) return;

    const now = new Date().toISOString();
    setSpecies(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          isPublished: true,
          lifecycleStatus: 'published',
          updatedAt: now,
        };
      }
      return s;
    }));

    logAudit('publish', 'species', id, existing.scientificName, 'Species published to public catalog.');
  };

  const unpublishSpecies = (id: string) => {
    const existing = species.find(s => s.id === id);
    if (!existing) return;

    setSpecies(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          isPublished: false,
          lifecycleStatus: 'under_review',
          updatedAt: new Date().toISOString(),
        };
      }
      return s;
    }));

    logAudit('unpublish', 'species', id, existing.scientificName, 'Species unpublished to review state.');
  };

  const archiveSpecies = (id: string) => {
    const existing = species.find(s => s.id === id);
    if (!existing) return;

    setSpecies(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          isPublished: false,
          lifecycleStatus: 'archived',
          updatedAt: new Date().toISOString(),
        };
      }
      return s;
    }));

    logAudit('archive', 'species', id, existing.scientificName, 'Species record archived.');
  };

  const deleteSpecies = (id: string) => {
    const existing = species.find(s => s.id === id);
    if (!existing) return;

    setSpecies(prev => prev.filter(s => s.id !== id));
    logAudit('delete', 'species', id, existing.scientificName, 'Species permanently removed.');
  };

  // Taxa Actions
  const addTaxon = (taxonData: Omit<TaxonNode, 'id'>) => {
    const id = 'taxon-' + taxonData.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const newTaxon: TaxonNode = { ...taxonData, id };
    setTaxa(prev => [...prev, newTaxon]);
    logAudit('create', 'taxon', id, newTaxon.name, `New taxon node added at rank: ${newTaxon.rank}`);
  };

  const updateTaxon = (id: string, updates: Partial<TaxonNode>) => {
    const existing = taxa.find(t => t.id === id);
    if (!existing) return;

    setTaxa(prev => prev.map(t => (t.id === id ? { ...t, ...updates } : t)));
    logAudit('update', 'taxon', id, existing.name, 'Taxon node updated.');
  };

  // Reference Actions
  const addReference = (refData: Omit<ReferenceSource, 'id'>) => {
    const id = 'ref-' + Date.now();
    const newRef: ReferenceSource = { ...refData, id };
    setReferences(prev => [...prev, newRef]);
    logAudit('create', 'reference', id, newRef.title, 'New literature citation added.');
  };

  const updateReference = (id: string, updates: Partial<ReferenceSource>) => {
    const existing = references.find(r => r.id === id);
    if (!existing) return;

    setReferences(prev => prev.map(r => (r.id === id ? { ...r, ...updates } : r)));
    logAudit('update', 'reference', id, existing.title, 'Reference record modified.');
  };

  const resetToInitialSeed = () => {
    setSpecies(SEED_SPECIES);
    setTaxa(SEED_TAXA);
    setReferences(SEED_REFERENCES);
    setTaxonKnowledge(SEED_TAXON_KNOWLEDGE);
    setAuditLogs(INITIAL_AUDIT_LOGS);
    setBatches([]);
    setConflicts([]);
    safeSetItem(SEED_VERSION_KEY, CURRENT_SEED_VERSION);
    safeSetItem('biota_species', JSON.stringify(SEED_SPECIES));
    safeSetItem('biota_taxa', JSON.stringify(SEED_TAXA));
    safeSetItem('biota_references', JSON.stringify(SEED_REFERENCES));
    safeSetItem('biota_taxon_knowledge', JSON.stringify(SEED_TAXON_KNOWLEDGE));
    safeRemoveItem('biota_audit_logs');
    safeRemoveItem('biota_batches');
    safeRemoveItem('biota_conflicts');
  };

  // Strict Module Data Separation & Filtering Implementations
  const getSpeciesByModule = (module: 'species' | 'fish' | 'marine' | 'bangladesh' | 'threatened'): SpeciesRecord[] => {
    let result: SpeciesRecord[] = [];
    switch (module) {
      case 'fish':
        // Finfishes only (Actinopterygii, Chondrichthyes, Sarcopterygii, Agnatha), strictly exclude Mammalia/Reptilia
        result = species.filter(s => 
          s.isPublished && 
          (s.module === 'fish' || ['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzontida'].includes(s.taxonomy.class)) &&
          s.taxonomy.class !== 'Mammalia' &&
          s.taxonomy.class !== 'Reptilia'
        );
        break;
      case 'marine':
        // Strictly non-fish marine & estuarine taxa (Mammalia, Invertebrates, Reptiles)
        // Finfishes must NEVER leak into this module
        result = species.filter(s => {
          if (!s.isPublished) return false;
          const isFinfish = ['Actinopterygii', 'Chondrichthyes', 'Sarcopterygii', 'Myxini', 'Petromyzontida'].includes(s.taxonomy.class);
          if (isFinfish) return false;
          return (
            s.module === 'marine' || 
            (s.module !== 'fish' && 
             (s.habitat.systems.includes('marine') || 
              (s.habitat.systems.includes('brackish') && s.bangladeshOccurrence.regions.some(r => {
                const lr = r.toLowerCase();
                return lr.includes('bay') || lr.includes('coastal') || lr.includes('sundarban') || lr.includes('shelf') || lr.includes('estuary');
              }))
             )
            )
          );
        });
        break;
      case 'bangladesh':
        // Evidence-backed presence in Bangladesh territory
        result = species.filter(s => s.bangladeshOccurrence.present && s.isPublished);
        break;
      case 'threatened':
        // Nationally or globally threatened (CR, EN, VU)
        result = species.filter(s => {
          const nat = s.bangladeshOccurrence.threatCategoryNational;
          const glob = s.conservation.iucnGlobalStatus;
          return (nat === 'CR' || nat === 'EN' || nat === 'VU' || glob === 'CR' || glob === 'EN' || glob === 'VU') && s.isPublished;
        });
        break;
      case 'species':
      default:
        // Broad catalogue of all published species
        result = species.filter(s => s.isPublished);
        break;
    }
    return result.sort(compareSpeciesByPriority);
  };

  const getSpeciesByHabitat = (system: AquaticSystem): SpeciesRecord[] => {
    return species.filter(s => s.habitat.systems.includes(system) && s.isPublished).sort(compareSpeciesByPriority);
  };

  const getSpeciesByTaxon = (rank: TaxonomicRank, taxonName: string): SpeciesRecord[] => {
    return species.filter(s => {
      const match = s.taxonomy[rank as keyof typeof s.taxonomy];
      return match && match.toLowerCase() === taxonName.toLowerCase() && s.isPublished;
    }).sort(compareSpeciesByPriority);
  };

  const getSpeciesByBangladeshOccurrence = (region?: string): SpeciesRecord[] => {
    return species.filter(s => {
      if (!s.bangladeshOccurrence.present || !s.isPublished) return false;
      if (!region || region.toLowerCase() === 'all') return true;
      return s.bangladeshOccurrence.regions.some(r => r.toLowerCase().includes(region.toLowerCase()));
    }).sort(compareSpeciesByPriority);
  };

  const getSpeciesByConservationStatus = (status: IUCNStatus, isNational = false): SpeciesRecord[] => {
    return species.filter(s => {
      if (!s.isPublished) return false;
      if (isNational) {
        return s.bangladeshOccurrence.threatCategoryNational === status || s.bangladeshOccurrence.bangladeshNationalStatus === status;
      }
      return s.conservation.iucnGlobalStatus === status || s.conservation.globalIucnStatus === status;
    }).sort(compareSpeciesByPriority);
  };

  // MASTER-BUILD-02B: Taxon Knowledge Base Helpers
  const getTaxonKnowledgeById = (id: string): TaxonKnowledgeRecord | undefined => {
    if (!id) return undefined;
    const cleanId = id.trim().toLowerCase();
    return taxonKnowledge.find(
      k =>
        k.id.toLowerCase() === cleanId ||
        (k.taxonId && k.taxonId.toLowerCase() === cleanId) ||
        k.scientificName.toLowerCase() === cleanId
    );
  };

  const getTaxonKnowledgeByCategory = (category: 'fish' | 'marine_non_fish'): TaxonKnowledgeRecord[] => {
    return taxonKnowledge.filter(k => k.category === category && k.publishedStatus);
  };

  const getTaxonKnowledgeByRank = (rank: TaxonomicRank): TaxonKnowledgeRecord[] => {
    return taxonKnowledge.filter(k => k.rank === rank && k.publishedStatus);
  };

  const getTaxonKnowledgeChildren = (parentId: string): TaxonKnowledgeRecord[] => {
    if (!parentId) return [];
    const cleanParent = parentId.trim().toLowerCase();
    return taxonKnowledge.filter(
      k =>
        k.publishedStatus &&
        (k.parentTaxonId?.toLowerCase() === cleanParent ||
          (k.classificationHierarchy &&
            k.classificationHierarchy.some(
              h => h.name.toLowerCase() === cleanParent
            )))
    );
  };

  const getDynamicTaxonomicCounts = (scope: 'fish' | 'marine_non_fish' | 'all') => {
    if (scope === 'fish') {
      const fishSpecies = species.filter(s => (s.taxonomy.class === 'Actinopterygii' || s.taxonomy.class === 'Chondrichthyes' || s.taxonomy.class === 'Sarcopterygii' || s.taxonomy.class === 'Myxini' || s.taxonomy.class === 'Petromyzontida') && s.isPublished);
      const classes = taxonKnowledge.filter(k => k.category === 'fish' && k.rank === 'class').length;
      const subclasses = taxa.filter(t => t.rank === 'subclass' && (t.parentId === 'taxon-chondrichthyes' || t.parentId === 'taxon-actinopterygii' || t.parentId === 'taxon-sarcopterygii')).length;
      const orders = taxonKnowledge.filter(k => k.category === 'fish' && k.rank === 'order').length || taxa.filter(t => t.module === 'fish' && t.rank === 'order').length;
      const families = new Set(fishSpecies.map(s => s.taxonomy.family.toLowerCase())).size;
      const genera = new Set(fishSpecies.map(s => s.taxonomy.genus.toLowerCase())).size;
      return {
        classes: classes || 3,
        subclasses: subclasses || 5,
        orders: orders || 73,
        families: families || 13,
        genera: genera || 19,
        species: fishSpecies.length
      };
    } else if (scope === 'marine_non_fish') {
      const nonFishMarineSpecies = species.filter(s => (s.habitat.systems.includes('marine') || s.habitat.systems.includes('brackish')) && s.taxonomy.class !== 'Actinopterygii' && s.taxonomy.class !== 'Chondrichthyes' && s.isPublished);
      const phyla = taxonKnowledge.filter(k => k.category === 'marine_non_fish' && k.rank === 'phylum').length;
      const classes = taxonKnowledge.filter(k => k.category === 'marine_non_fish' && k.rank === 'class').length;
      const orders = taxonKnowledge.filter(k => k.category === 'marine_non_fish' && k.rank === 'order').length;
      const families = new Set(nonFishMarineSpecies.map(s => s.taxonomy.family.toLowerCase())).size;
      const genera = new Set(nonFishMarineSpecies.map(s => s.taxonomy.genus.toLowerCase())).size;
      return {
        classes: classes || 6,
        subclasses: phyla || 6, // maps to phyla count for marine overview
        orders: orders || 5,
        families: families || 1,
        genera: genera || 1,
        species: nonFishMarineSpecies.length
      };
    } else {
      return {
        classes: new Set(species.map(s => s.taxonomy.class.toLowerCase())).size,
        subclasses: taxa.filter(t => t.rank === 'subclass').length,
        orders: new Set(species.map(s => s.taxonomy.order.toLowerCase())).size,
        families: new Set(species.map(s => s.taxonomy.family.toLowerCase())).size,
        genera: new Set(species.map(s => s.taxonomy.genus.toLowerCase())).size,
        species: species.filter(s => s.isPublished).length
      };
    }
  };

  const updateTaxonKnowledge = (id: string, updates: Partial<TaxonKnowledgeRecord>) => {
    setTaxonKnowledge(prev => {
      const updated = prev.map(k => k.id === id ? { ...k, ...updates } : k);
      localStorage.setItem('biota_taxon_knowledge', JSON.stringify(updated));
      return updated;
    });
    logAudit('update', 'taxon', id, `Updated taxon knowledge record ${id}`, JSON.stringify(updates));
  };

  // MASTER-BUILD-02: Batch dispatch handler
  const dispatch = (action: BatchDispatchAction) => {
    switch (action.type) {
      case 'BATCH_COMMIT':
        setSpecies(prev => [...prev, ...action.records]);
        setBatches(prev => [...prev, action.batchRecord]);
        logAudit('create', 'species', action.batchRecord.id, `Batch import ${action.batchRecord.sourceFile}`, `Committed ${action.records.length} records from batch ${action.batchRecord.id}.`);
        break;
      case 'BATCH_ROLLBACK':
        setSpecies(action.filteredSpecies);
        setBatches(action.updatedBatches);
        logAudit('delete', 'species', 'batch-rollback', 'Batch rollback', 'Batch import rolled back; all associated draft records removed.');
        break;
      case 'RESOLVE_CONFLICT':
        setConflicts(prev => prev.map(c =>
          c.id === action.conflictId
            ? { ...c, resolution: action.resolution as ConflictRecord['resolution'], resolutionNote: action.resolutionNote, resolvedAt: action.resolvedAt, resolvedBy: action.resolvedBy }
            : c
        ));
        break;
    }
  };

  return (
    <BiodiversityContext.Provider
      value={{
        species,
        taxa,
        references,
        identKeys,
        auditLogs,
        batches,
        conflicts,
        filters,
        setFilters,
        resetFilters,
        filteredSpecies,
        getSpeciesById,
        getTaxonById,
        getTaxonByScientificName,
        getChildTaxa,
        getTaxonAncestry,
        resolveTaxonRoute,
        getReferenceById,
        getSpeciesByModule,
        getSpeciesByHabitat,
        getSpeciesByTaxon,
        getSpeciesByBangladeshOccurrence,
        getSpeciesByConservationStatus,
        taxonKnowledge,
        getTaxonKnowledgeById,
        getTaxonKnowledgeByCategory,
        getTaxonKnowledgeByRank,
        getTaxonKnowledgeChildren,
        getDynamicTaxonomicCounts,
        updateTaxonKnowledge,
        addSpecies,
        updateSpecies,
        verifySpecies,
        publishSpecies,
        unpublishSpecies,
        archiveSpecies,
        deleteSpecies,
        addTaxon,
        updateTaxon,
        addReference,
        updateReference,
        resetToInitialSeed,
        dispatch,
      }}
    >
      {children}
    </BiodiversityContext.Provider>
  );
};

export const useBiodiversity = (): BiodiversityContextType => {
  const context = useContext(BiodiversityContext);
  if (!context) {
    throw new Error('useBiodiversity must be used within a BiodiversityProvider');
  }
  return context;
};
