---
title: github.issue
id: github.issue
sidebar_label: github.issue
displayed_sidebar: MQL
description: GitHub issue
---

# github.issue

**Description**

GitHub issue

**Fields**

| ID        | TYPE                                    | DESCRIPTION                         |
| --------- | --------------------------------------- | ----------------------------------- |
| id        | int                                     | Issue ID                            |
| number    | int                                     | Issue number                        |
| title     | string                                  | Issue title                         |
| state     | string                                  | Issue state                         |
| body      | string                                  | Issue body                          |
| url       | string                                  | Issue URL                           |
| createdAt | time                                    | Issue create time                   |
| updatedAt | time                                    | Issue update time                   |
| closedAt  | time                                    | Issue closed time                   |
| assignees | &#91;&#93;[github.user](github.user.md) | Users to whom the issue is assigned |
| closedBy  | [github.user](github.user.md)           | User who closed the issue           |
