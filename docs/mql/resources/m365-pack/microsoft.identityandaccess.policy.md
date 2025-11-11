---
title: microsoft.identityAndAccess.policy
id: microsoft.identityAndAccess.policy
sidebar_label: microsoft.identityAndAccess.policy
displayed_sidebar: MQL
description: A PIM role management policy for Microsoft Entra ID roles
---

# microsoft.identityAndAccess.policy

**Description**

A PIM role management policy for Microsoft Entra ID roles

**Fields**

| ID                    | TYPE                                                                                            | DESCRIPTION                                             |
| --------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| id                    | string                                                                                          | Policy ID                                               |
| displayName           | string                                                                                          | Policy display name                                     |
| description           | string                                                                                          | Policy description                                      |
| isOrganizationDefault | bool                                                                                            | True if this policy is the default organization policy  |
| scopeId               | string                                                                                          | The identifier of the scope where the policy is defined |
| scopeType             | string                                                                                          | The type of the scope where the policy is defined       |
| lastModifiedDateTime  | time                                                                                            | The time when this policy was last modified             |
| lastModifiedBy        | dict                                                                                            | The identity of the user who last modified the policy   |
| rules                 | &#91;&#93;[microsoft.identityAndAccess.policy.rule](microsoft.identityandaccess.policy.rule.md) | The collection of rules that are part of the policy     |
