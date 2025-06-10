---
title: microsoft.conditionalAccess.policy
id: microsoft.conditionalAccess.policy
sidebar_label: microsoft.conditionalAccess.policy
displayed_sidebar: MQL
description: Represents a Microsoft Entra Conditional Access policy. Conditional access policies are custom rules that define an access scenario.
---

# microsoft.conditionalAccess.policy

**Description**

Represents a Microsoft Entra Conditional Access policy. Conditional access policies are custom rules that define an access scenario.

**Fields**

| ID               | TYPE                                                                                                        | DESCRIPTION                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| id               | string                                                                                                      | Specifies the identifier of a conditionalAccessPolicy object.                                                                         |
| displayName      | string                                                                                                      | Specifies a display name for the conditionalAccessPolicy object.                                                                      |
| state            | string                                                                                                      | Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled, enabledForReportingButNotEnforced. |
| createdDateTime  | time                                                                                                        | The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time.                              |
| modifiedDateTime | time                                                                                                        | The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time.                              |
| conditions       | [microsoft.conditionalAccess.policy.conditions](microsoft.conditionalaccess.policy.conditions.md)           | Policy conditions                                                                                                                     |
| grantControls    | [microsoft.conditionalAccess.policy.grantControls](microsoft.conditionalaccess.policy.grantcontrols.md)     | Specifies the grant controls that must be fulfilled to pass the policy.                                                               |
| sessionControls  | [microsoft.conditionalAccess.policy.sessionControls](microsoft.conditionalaccess.policy.sessioncontrols.md) | Specifies the session controls that are enforced after sign-in.                                                                       |
| templateId       | string                                                                                                      | Template ID (if created from template)                                                                                                |
