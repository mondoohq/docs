---
title: github.gist
id: github.gist
sidebar_label: github.gist
displayed_sidebar: MQL
description: GitHub gist
---

# github.gist

**Description**

GitHub gist

**Fields**

| ID          | TYPE                                            | DESCRIPTION                |
| ----------- | ----------------------------------------------- | -------------------------- |
| id          | string                                          | Gist ID                    |
| description | string                                          | Gist description           |
| createdAt   | time                                            | Gist create time           |
| updatedAt   | time                                            | Gist update time           |
| owner       | [github.user](github.user.md)                   | Gist owner                 |
| public      | bool                                            | Whether the gist is public |
| files       | &#91;&#93;[github.gistfile](github.gistfile.md) | Gist files                 |
