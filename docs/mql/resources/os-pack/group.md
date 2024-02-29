---
title: group
id: group
sidebar_label: group
displayed_sidebar: MQL
description: Group on this system
---

# group

**Description**

Group on this system

**Init**

group(id string)

**Fields**

| ID      | TYPE                      | DESCRIPTION                           |
| ------- | ------------------------- | ------------------------------------- |
| gid     | int                       | Group ID                              |
| sid     | string                    | Group's security identifier (Windows) |
| name    | string                    | Name of this group                    |
| members | &#91;&#93;[user](user.md) | Users who are members of this group   |
