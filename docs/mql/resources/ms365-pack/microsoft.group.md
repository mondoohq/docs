---
title: microsoft.group
id: microsoft.group
sidebar_label: microsoft.group
displayed_sidebar: MQL
description: Microsoft group
---

# microsoft.group

**Description**

Microsoft group

**Fields**

| ID                            | TYPE                                          | DESCRIPTION                                                           |
| ----------------------------- | --------------------------------------------- | --------------------------------------------------------------------- |
| id                            | string                                        | Group ID                                                              |
| displayName                   | string                                        | Group display name                                                    |
| securityEnabled               | bool                                          | Group security enabled status                                         |
| mailEnabled                   | bool                                          | Group email enabled status                                            |
| mailNickname                  | string                                        | Group email nickname                                                  |
| mail                          | string                                        | Group email                                                           |
| visibility                    | string                                        | Group visibility state                                                |
| members                       | &#91;&#93;[microsoft.user](microsoft.user.md) | List of group members                                                 |
| groupTypes                    | &#91;&#93;string                              | Group types indicating the membership and classification of the group |
| membershipRule                | string                                        | Membership rule used for dynamic group membership                     |
| membershipRuleProcessingState | string                                        | State of the processing for the dynamic membership rule               |
