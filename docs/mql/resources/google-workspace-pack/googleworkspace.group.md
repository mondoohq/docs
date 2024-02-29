---
title: googleworkspace.group
id: googleworkspace.group
sidebar_label: googleworkspace.group
displayed_sidebar: MQL
description: Google Workspace group
---

# googleworkspace.group

**Description**

Google Workspace group

**Fields**

| ID                 | TYPE                                                          | DESCRIPTION                                                                |
| ------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| id                 | string                                                        | The unique ID of a group                                                   |
| name               | string                                                        | The group's display name                                                   |
| email              | string                                                        | The group's email address                                                  |
| description        | string                                                        | Purpose of the group                                                       |
| aliases            | &#91;&#93;string                                              | A list of a group's alias email addresses                                  |
| directMembersCount | int                                                           | The number of users that are direct members of the group                   |
| adminCreated       | bool                                                          | Indicates if this group was created by an administrator rather than a user |
| members            | &#91;&#93;[googleworkspace.member](googleworkspace.member.md) | Retrieve members of the group                                              |
| settings           | dict                                                          | Group settings                                                             |
| securitySettings   | dict                                                          | Group security settings                                                    |
