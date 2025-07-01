---
title: microsoft.policies
id: microsoft.policies
sidebar_label: microsoft.policies
displayed_sidebar: MQL
description: Microsoft policies
---

# microsoft.policies

**Description**

Microsoft policies

**Fields**

| ID                                        | TYPE                                                                                                        | DESCRIPTION                                                                |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| authorizationPolicy                       | dict                                                                                                        | Authorization policy                                                       |
| identitySecurityDefaultsEnforcementPolicy | dict                                                                                                        | Identity security default enforcement policy                               |
| adminConsentRequestPolicy                 | [microsoft.adminConsentRequestPolicy](microsoft.adminconsentrequestpolicy.md)                               | Admin consent request policy                                               |
| permissionGrantPolicies                   | &#91;&#93;dict                                                                                              | Permission grant policies                                                  |
| consentPolicySettings                     | dict                                                                                                        | Consent policy settings                                                    |
| authenticationMethodsPolicy               | [microsoft.policies.authenticationMethodsPolicy](microsoft.policies.authenticationmethodspolicy.md)         | Authentication methods policy                                              |
| activityBasedTimeoutPolicies              | &#91;&#93;[microsoft.policies.activityBasedTimeoutPolicy](microsoft.policies.activitybasedtimeoutpolicy.md) | Activity-based timeout policies                                            |
| externalIdentitiesPolicy                  | [microsoft.policies.externalIdentitiesPolicy](microsoft.policies.externalidentitiespolicy.md)               | Tenant-wide policy that controls whether external users can leave a tenant |
