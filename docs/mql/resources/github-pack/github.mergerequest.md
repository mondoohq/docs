---
title: github.mergeRequest
id: github.mergeRequest
sidebar_label: github.mergeRequest
displayed_sidebar: MQL
description: GitHub repository pull request
---

# github.mergeRequest

**Description**

GitHub repository pull request

**Fields**

| ID        | TYPE                                        | DESCRIPTION                         |
| --------- | ------------------------------------------- | ----------------------------------- |
| id        | int                                         | Pull request ID                     |
| number    | int                                         | Pull request number                 |
| state     | string                                      | Pull request state                  |
| createdAt | time                                        | Pull request creation time (in UTC) |
| labels    | &#91;&#93;dict                              | Pull request labels                 |
| title     | string                                      | Pull request title                  |
| owner     | [github.user](github.user.md)               | Pull request owner                  |
| assignees | &#91;&#93;[github.user](github.user.md)     | Pull request assignees              |
| commits   | &#91;&#93;[github.commit](github.commit.md) | Pull request commits                |
| reviews   | &#91;&#93;[github.review](github.review.md) | Pull request reviews                |
| repoName  | string                                      | Pull request repository name        |
