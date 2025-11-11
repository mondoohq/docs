---
title: microsoft.users
id: microsoft.users
sidebar_label: microsoft.users
displayed_sidebar: MQL
description: List of Microsoft Entra users with optional filters
---

# microsoft.users

**Description**

List of Microsoft Entra users with optional filters

**Init**

microsoft.users(filter string)
microsoft.users(search string)

**List**

[]microsoft.user

**Fields**

| ID     | TYPE                                          | DESCRIPTION                     |
| ------ | --------------------------------------------- | ------------------------------- |
| filter | string                                        | Filter users by property values |
| search | string                                        | Search users by search phrases  |
| list   | &#91;&#93;[microsoft.user](microsoft.user.md) |                                 |
