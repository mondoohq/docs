---
title: microsoft.conditionalAccess.policy.grantControls.authenticationStrength
id: microsoft.conditionalAccess.policy.grantControls.authenticationStrength
sidebar_label: microsoft.conditionalAccess.policy.grantControls.authenticationStrength
displayed_sidebar: MQL
description: A collection of settings that define specific combinations of authentication methods and metadata
---

# microsoft.conditionalAccess.policy.grantControls.authenticationStrength

**Description**

A collection of settings that define specific combinations of authentication methods and metadata

**Fields**

| ID                    | TYPE             | DESCRIPTION                                                                                                                                                       |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | string           | The system-generated identifier for this mode                                                                                                                     |
| allowedCombinations   | &#91;&#93;string | A collection of authentication method modes that are required be used to satisfy this authentication strength                                                     |
| displayName           | string           | The human-readable display name of this policy                                                                                                                    |
| description           | string           | The human-readable description of this policy                                                                                                                     |
| policyType            | string           | A descriptor if this policy is built into Microsoft Entra ID or created by an admin for the tenant. The possible values are: builtIn, custom, unknownFutureValue. |
| requirementsSatisfied | string           | A descriptor if this authentication strength grants the MFA claim upon successful satisfaction. The possible values are: none, mfa, unknownFutureValue.           |
| createdDateTime       | time             | The time when this policy was created                                                                                                                             |
| modifiedDateTime      | time             | The time when this policy was last modified                                                                                                                       |
