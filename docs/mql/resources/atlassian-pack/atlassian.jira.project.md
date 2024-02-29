---
title: atlassian.jira.project
id: atlassian.jira.project
sidebar_label: atlassian.jira.project
displayed_sidebar: MQL
description: Jira project
---

# atlassian.jira.project

**Description**

Jira project

**Fields**

| ID         | TYPE                                                                            | DESCRIPTION                         |
| ---------- | ------------------------------------------------------------------------------- | ----------------------------------- |
| id         | string                                                                          | Project ID                          |
| name       | string                                                                          | Project name                        |
| uuid       | string                                                                          | UUID                                |
| key        | string                                                                          | Key                                 |
| url        | string                                                                          | URL                                 |
| email      | string                                                                          | Email                               |
| private    | bool                                                                            | Whether the group is private        |
| deleted    | bool                                                                            | Whether the group has been deleted  |
| archived   | bool                                                                            | Whether the group has been archived |
| properties | &#91;&#93;[atlassian.jira.project.property](atlassian.jira.project.property.md) | Properties                          |
