---
title: okta.user
id: okta.user
sidebar_label: okta.user
displayed_sidebar: MQL
description: Okta user
---

# okta.user

**Description**

Okta user

**Fields**

| ID                    | TYPE                                | DESCRIPTION                                                    |
| --------------------- | ----------------------------------- | -------------------------------------------------------------- |
| id                    | string                              | Unique key for user                                            |
| typeId                | string                              | User's type identifier                                         |
| type                  | dict                                | User's type object                                             |
| credentials           | dict                                | User credentials                                               |
| activated             | time                                | Timestamp when the user was activated                          |
| created               | time                                | Timestamp when user was created                                |
| lastLogin             | time                                | Timestamp of last login                                        |
| lastUpdated           | time                                | Timestamp when user was last updated                           |
| passwordChanged       | time                                | Timestamp when password last changed                           |
| profile               | dict                                | User profile properties                                        |
| status                | string                              | Current status of user                                         |
| statusChanged         | time                                | Timestamp when status last changed                             |
| transitioningToStatus | string                              | Target status of an in-progress asynchronous status transition |
| roles                 | &#91;&#93;[okta.role](okta.role.md) | The roles assigned to the user                                 |
