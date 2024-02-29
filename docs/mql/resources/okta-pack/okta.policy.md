---
title: okta.policy
id: okta.policy
sidebar_label: okta.policy
displayed_sidebar: MQL
description: Okta policy
---

# okta.policy

**Description**

Okta policy

**Fields**

| ID          | TYPE                                            | DESCRIPTION                                 |
| ----------- | ----------------------------------------------- | ------------------------------------------- |
| id          | string                                          | Identifier of the policy                    |
| name        | string                                          | Name of the policy                          |
| description | string                                          | Description of the policy                   |
| priority    | int                                             | Priority of the policy                      |
| status      | string                                          | Status of the policy: ACTIVE or INACTIVE    |
| system      | bool                                            | Whether the policy is a system policy       |
| type        | string                                          | Specifies the type of policy                |
| conditions  | dict                                            | Conditions for policy                       |
| settings    | dict                                            | Settings for the policy                     |
| created     | time                                            | Timestamp when the policy was created       |
| lastUpdated | time                                            | Timestamp when the policy was last modified |
| rules       | &#91;&#93;[okta.policyRule](okta.policyrule.md) | Rules attached to the policy                |
