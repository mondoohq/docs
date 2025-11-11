---
title: microsoft.policies.authenticationMethodsPolicy
id: microsoft.policies.authenticationMethodsPolicy
sidebar_label: microsoft.policies.authenticationMethodsPolicy
displayed_sidebar: MQL
description: The tenant-wide policy that controls which authentication methods are allowed
---

# microsoft.policies.authenticationMethodsPolicy

**Description**

The tenant-wide policy that controls which authentication methods are allowed

**Fields**

| ID                                 | TYPE                                                                                                                      | DESCRIPTION                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| id                                 | string                                                                                                                    | Policy ID                                          |
| displayName                        | string                                                                                                                    | Policy display name                                |
| description                        | string                                                                                                                    | Policy description                                 |
| lastModifiedDateTime               | time                                                                                                                      | The date and time the policy was last modified     |
| policyVersion                      | string                                                                                                                    | The version of the policy                          |
| authenticationMethodConfigurations | &#91;&#93;[microsoft.policies.authenticationMethodConfiguration](microsoft.policies.authenticationmethodconfiguration.md) | Configurations for specific authentication methods |
