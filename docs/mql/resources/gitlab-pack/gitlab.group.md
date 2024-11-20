---
title: gitlab.group
id: gitlab.group
sidebar_label: gitlab.group
displayed_sidebar: MQL
description: GitLab group
---

# gitlab.group

**Description**

GitLab group

**Fields**

| ID                             | TYPE                                          | DESCRIPTION                                                                      |
| ------------------------------ | --------------------------------------------- | -------------------------------------------------------------------------------- |
| id                             | int                                           | Group ID                                                                         |
| name                           | string                                        | Group name                                                                       |
| path                           | string                                        | Group path                                                                       |
| createdAt                      | time                                          | Create date of the group                                                         |
| description                    | string                                        | Group description                                                                |
| webURL                         | string                                        | URL of the group                                                                 |
| visibility                     | string                                        | The group's visibility level: private, internal, or public                       |
| requireTwoFactorAuthentication | bool                                          | Whether all users in this group are required to set up two-factor authentication |
| preventForkingOutsideGroup     | bool                                          | Whether forking projects outside this group is forbidden                         |
| emailsDisabled                 | bool                                          | Whether group email notifications are disabled                                   |
| mentionsDisabled               | bool                                          | Whether group mentions within issues and merge requests are disabled             |
| projects                       | &#91;&#93;[gitlab.project](gitlab.project.md) | List of all projects that belong to the group                                    |
