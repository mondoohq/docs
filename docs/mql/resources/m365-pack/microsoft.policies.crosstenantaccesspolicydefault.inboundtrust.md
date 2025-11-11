---
title: microsoft.policies.crossTenantAccessPolicyDefault.inboundTrust
id: microsoft.policies.crossTenantAccessPolicyDefault.inboundTrust
sidebar_label: microsoft.policies.crossTenantAccessPolicyDefault.inboundTrust
displayed_sidebar: MQL
description: Inbound trust settings for cross-tenant access policy
---

# microsoft.policies.crossTenantAccessPolicyDefault.inboundTrust

**Description**

Inbound trust settings for cross-tenant access policy

**Fields**

| ID                                  | TYPE | DESCRIPTION                                                                 |
| ----------------------------------- | ---- | --------------------------------------------------------------------------- |
| isMfaAccepted                       | bool | If true, MFA from external tenants is accepted.                             |
| isCompliantDeviceAccepted           | bool | If true, compliant devices from external tenants are accepted.              |
| isHybridAzureADJoinedDeviceAccepted | bool | If true, hybrid Azure AD joined devices from external tenants are accepted. |
