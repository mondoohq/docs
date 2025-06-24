---
title: microsoft.conditionalAccess.authenticationMethodsPolicy
id: microsoft.conditionalAccess.authenticationMethodsPolicy
sidebar_label: microsoft.conditionalAccess.authenticationMethodsPolicy
displayed_sidebar: MQL
description: The tenant-wide policy that controls which authentication methods are allowed
---

# microsoft.conditionalAccess.authenticationMethodsPolicy

**Description**

The tenant-wide policy that controls which authentication methods are allowed

**Fields**

| ID                                 | TYPE                                                                                                                                        | DESCRIPTION                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| id                                 | string                                                                                                                                      | The identifier of the policy                           |
| displayName                        | string                                                                                                                                      | The name of the policy                                 |
| description                        | string                                                                                                                                      | A description of the policy                            |
| lastModifiedDateTime               | time                                                                                                                                        | The date and time of the last update to the policy     |
| policyVersion                      | string                                                                                                                                      | The version of the policy in use                       |
| authenticationMethodConfigurations | &#91;&#93;[microsoft.conditionalAccess.authenticationMethodConfiguration](microsoft.conditionalaccess.authenticationmethodconfiguration.md) | Represents the settings for each authentication method |
