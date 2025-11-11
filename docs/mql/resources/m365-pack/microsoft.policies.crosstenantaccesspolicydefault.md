---
title: microsoft.policies.crossTenantAccessPolicyDefault
id: microsoft.policies.crossTenantAccessPolicyDefault
sidebar_label: microsoft.policies.crossTenantAccessPolicyDefault
displayed_sidebar: MQL
description: Default configuration of cross-tenant access policy
---

# microsoft.policies.crossTenantAccessPolicyDefault

**Description**

Default configuration of cross-tenant access policy

**Fields**

| ID                                                | TYPE                                                                                                                                                                                                          | DESCRIPTION                                                                                                                                                    |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isServiceDefault                                  | bool                                                                                                                                                                                                          | True if the default configuration is inherited from the service default. False if the default configuration has been customized.                               |
| automaticUserConsentSettings                      | [microsoft.policies.crossTenantAccessPolicyDefault.automaticUserConsentSettings](microsoft.policies.crosstenantaccesspolicydefault.automaticuserconsentsettings.md)                                           | Determines the default configuration for automatic user consent settings. Controls if users consent automatically to apps on behalf of users in other tenants. |
| b2bCollaborationInbound                           | [microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting](microsoft.policies.crosstenantaccesspolicydefault.b2bsetting.md)                                                                               | Defines your default configuration for users from other organizations accessing your resources via Microsoft Entra B2B collaboration.                          |
| b2bCollaborationOutbound                          | [microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting](microsoft.policies.crosstenantaccesspolicydefault.b2bsetting.md)                                                                               | Defines your default configuration for users in your organization going outbound to access other organizations via Microsoft Entra B2B collaboration.          |
| b2bDirectConnectInbound                           | [microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting](microsoft.policies.crosstenantaccesspolicydefault.b2bsetting.md)                                                                               | Defines your default configuration for users from other organizations accessing your resources via Azure AD B2B direct connect.                                |
| b2bDirectConnectOutbound                          | [microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting](microsoft.policies.crosstenantaccesspolicydefault.b2bsetting.md)                                                                               | Defines your default configuration for users in your organization going outbound to access other organizations via Azure AD B2B direct connect.                |
| invitationRedemptionIdentityProviderConfiguration | [microsoft.policies.crossTenantAccessPolicyDefault.invitationRedemptionIdentityProviderConfiguration](microsoft.policies.crosstenantaccesspolicydefault.invitationredemptionidentityproviderconfiguration.md) | Specifies the default configuration for invitation redemption for external users in your organization.                                                         |
| inboundTrust                                      | [microsoft.policies.crossTenantAccessPolicyDefault.inboundTrust](microsoft.policies.crosstenantaccesspolicydefault.inboundtrust.md)                                                                           | Defines if MFA, compliant devices, and hybrid Azure AD joined devices from external tenants are accepted.                                                      |
| tenantRestrictions                                | [microsoft.policies.crossTenantAccessPolicyDefault.b2bSetting](microsoft.policies.crosstenantaccesspolicydefault.b2bsetting.md)                                                                               | Defines the default configuration for tenant restrictions settings.                                                                                            |
