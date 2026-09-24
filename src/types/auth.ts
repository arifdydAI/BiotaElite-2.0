// BiotaElite 2.0 Auth and Role-Based Access Control (RBAC) Types

export type UserRole = 
  | 'super_admin' 
  | 'admin' 
  | 'editor' 
  | 'reviewer' 
  | 'data_manager'
  | 'public_user';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  institution?: string;
  specialization?: string;
  createdAt: string;
  lastLoginAt: string;
  isActive: boolean;
}

export interface PermissionMatrix {
  canCreateSpecies: boolean;
  canEditSpecies: boolean;
  canVerifySpecies: boolean;
  canPublishSpecies: boolean;
  canArchiveSpecies: boolean;
  canDeleteSpecies: boolean;
  canManageTaxonomy: boolean;
  canManageReferences: boolean;
  canManageUsers: boolean;
  canViewAuditLogs: boolean;
  canManageKeys: boolean;
  canManageMedia: boolean;
}

export const ROLE_PERMISSIONS: Record<UserRole, PermissionMatrix> = {
  super_admin: {
    canCreateSpecies: true,
    canEditSpecies: true,
    canVerifySpecies: true,
    canPublishSpecies: true,
    canArchiveSpecies: true,
    canDeleteSpecies: true,
    canManageTaxonomy: true,
    canManageReferences: true,
    canManageUsers: true,
    canViewAuditLogs: true,
    canManageKeys: true,
    canManageMedia: true,
  },
  admin: {
    canCreateSpecies: true,
    canEditSpecies: true,
    canVerifySpecies: true,
    canPublishSpecies: true,
    canArchiveSpecies: true,
    canDeleteSpecies: false,
    canManageTaxonomy: true,
    canManageReferences: true,
    canManageUsers: false,
    canViewAuditLogs: true,
    canManageKeys: true,
    canManageMedia: true,
  },
  reviewer: {
    canCreateSpecies: false,
    canEditSpecies: true,
    canVerifySpecies: true,
    canPublishSpecies: false,
    canArchiveSpecies: false,
    canDeleteSpecies: false,
    canManageTaxonomy: false,
    canManageReferences: true,
    canManageUsers: false,
    canViewAuditLogs: true,
    canManageKeys: true,
    canManageMedia: true,
  },
  editor: {
    canCreateSpecies: true,
    canEditSpecies: true,
    canVerifySpecies: false,
    canPublishSpecies: false,
    canArchiveSpecies: false,
    canDeleteSpecies: false,
    canManageTaxonomy: true,
    canManageReferences: true,
    canManageUsers: false,
    canViewAuditLogs: false,
    canManageKeys: true,
    canManageMedia: true,
  },
  data_manager: {
    canCreateSpecies: true,
    canEditSpecies: true,
    canVerifySpecies: false,
    canPublishSpecies: false,
    canArchiveSpecies: false,
    canDeleteSpecies: false,
    canManageTaxonomy: true,
    canManageReferences: true,
    canManageUsers: false,
    canViewAuditLogs: true,
    canManageKeys: true,
    canManageMedia: true,
  },
  public_user: {
    canCreateSpecies: false,
    canEditSpecies: false,
    canVerifySpecies: false,
    canPublishSpecies: false,
    canArchiveSpecies: false,
    canDeleteSpecies: false,
    canManageTaxonomy: false,
    canManageReferences: false,
    canManageUsers: false,
    canViewAuditLogs: false,
    canManageKeys: false,
    canManageMedia: false,
  },
};
