---
title: microsoft.conditionalAccess.policy.grantControls
id: microsoft.conditionalAccess.policy.grantControls
sidebar_label: microsoft.conditionalAccess.policy.grantControls
displayed_sidebar: MQL
description: Represents grant controls that must be fulfilled to pass the policy.
---

# microsoft.conditionalAccess.policy.grantControls

**Description**

Represents grant controls that must be fulfilled to pass the policy.

**Fields**

| ID                          | TYPE                                                                                                                                                  | DESCRIPTION                                                                                                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                          | string                                                                                                                                                | Internal ID based on policy ID                                                                                                                                                                                |
| operator                    | string                                                                                                                                                | Defines the relationship of the grant controls. Possible values: AND, OR.                                                                                                                                     |
| builtInControls             | &#91;&#93;string                                                                                                                                      | List of values of built-in controls required by the policy., Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue. |
| authenticationStrength      | [microsoft.conditionalAccess.policy.grantControls.authenticationStrength](microsoft.conditionalaccess.policy.grantcontrols.authenticationstrength.md) | The authentication strength required by the conditional access policy. Optional.                                                                                                                              |
| customAuthenticationFactors | &#91;&#93;string                                                                                                                                      | List of custom controls IDs required by the policy.                                                                                                                                                           |
| termsOfUse                  | &#91;&#93;string                                                                                                                                      | List of terms of use IDs required by the policy.                                                                                                                                                              |
