---
title: user
id: user
sidebar_label: user
displayed_sidebar: MQL
description: User on this system
---

# user

**Description**

User on this system

**Fields**

| ID             | TYPE                                  | DESCRIPTION                          |
| -------------- | ------------------------------------- | ------------------------------------ |
| uid            | int                                   | User ID                              |
| gid            | int                                   | User's group ID                      |
| sid            | string                                | User's security identifier (Windows) |
| name           | string                                | Name of the user                     |
| home           | string                                | Home folder                          |
| shell          | string                                | Default shell configured             |
| enabled        | bool                                  | Whether the user is enabled          |
| authorizedkeys | [authorizedkeys](authorizedkeys.md)   | List of authorized keys              |
| sshkeys        | &#91;&#93;[privatekey](privatekey.md) | List of SSH keys                     |
| group          | [group](group.md)                     | Group of which user is a member      |
