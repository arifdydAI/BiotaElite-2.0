// BiotaElite 2.0 Audit Log Types

export type AuditAction = 
  | 'create' 
  | 'update' 
  | 'verify' 
  | 'publish' 
  | 'unpublish' 
  | 'archive' 
  | 'delete'
  | 'role_change'
  | 'correction';

export type CorrectionType =
  | 'TAXONOMIC_CORRECTION'
  | 'AUTHORSHIP_CORRECTION'
  | 'SYNONYM_CORRECTION'
  | 'BANGLADESH_OCCURRENCE_CORRECTION'
  | 'CONSERVATION_STATUS_CORRECTION'
  | 'IDENTIFICATION_KEY_CORRECTION'
  | 'LOCALIZATION_CORRECTION'
  | 'DATA_FILTER_CORRECTION'
  | 'NAVIGATION_CORRECTION';

export type AuditEntity = 
  | 'species' 
  | 'taxon' 
  | 'reference' 
  | 'user' 
  | 'identification_key'
  | 'system';

export interface AuditLogEntry {
  id: string;
  actorId: string;
  actorEmail: string;
  actorRole: string;
  action: AuditAction;
  correctionType?: CorrectionType;
  entity: AuditEntity;
  entityId: string;
  entityName?: string;
  field?: string;
  oldValue?: string;
  newValue?: string;
  reason?: string;
  source?: string;
  timestamp: string;
  details?: string;
  previousState?: Record<string, unknown>;
  newState?: Record<string, unknown>;
}
