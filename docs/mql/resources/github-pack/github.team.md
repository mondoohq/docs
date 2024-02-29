---
title: github.team
id: github.team
sidebar_label: github.team
displayed_sidebar: MQL
description: GitHub team
---

# github.team

**Description**

GitHub team

**Fields**

| ID                | TYPE                                                | DESCRIPTION                |
| ----------------- | --------------------------------------------------- | -------------------------- |
| id                | int                                                 | Team ID                    |
| name              | string                                              | Team name                  |
| description       | string                                              | Team description           |
| slug              | string                                              | Team slug                  |
| privacy           | string                                              | Team privacy configuration |
| defaultPermission | string                                              | Team default permission    |
| members           | &#91;&#93;[github.user](github.user.md)             | Team members               |
| repositories      | &#91;&#93;[github.repository](github.repository.md) | Team owned repositories    |
| organization      | [github.organization](github.organization.md)       | Team organization          |
