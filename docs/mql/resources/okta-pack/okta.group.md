---
title: okta.group
id: okta.group
sidebar_label: okta.group
displayed_sidebar: MQL
description: Okta group
---

# okta.group

**Description**

Okta group

**Fields**

| ID                    | TYPE                                | DESCRIPTION                                                  |
| --------------------- | ----------------------------------- | ------------------------------------------------------------ |
| id                    | string                              | Unique key for the group                                     |
| name                  | string                              | Group name                                                   |
| description           | string                              | Group description                                            |
| type                  | dict                                | Determines how a group's profile and memberships are managed |
| created               | time                                | Timestamp when group was created                             |
| lastMembershipUpdated | time                                | Timestamp when group's memberships were last updated         |
| lastUpdated           | time                                | Timestamp when group's profile was last updated              |
| profile               | dict                                | The group's profile properties                               |
| members               | &#91;&#93;[okta.user](okta.user.md) | Group members                                                |
| roles                 | &#91;&#93;[okta.role](okta.role.md) | Group roles                                                  |
