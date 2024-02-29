---
title: github.branch
id: github.branch
sidebar_label: github.branch
displayed_sidebar: MQL
description: GitHub repository branch
---

# github.branch

**Description**

GitHub repository branch

**Fields**

| ID              | TYPE                                                  | DESCRIPTION                              |
| --------------- | ----------------------------------------------------- | ---------------------------------------- |
| name            | string                                                | Repository branch name                   |
| protected       | bool                                                  | Deprecated; use isProtected instead      |
| isProtected     | bool                                                  | Whether branch protection is enabled     |
| headCommit      | [github.commit](github.commit.md)                     | Repository branch HEAD commit            |
| protectionRules | [github.branchprotection](github.branchprotection.md) | Repository branch protection rules       |
| repoName        | string                                                | Repository branch repository name        |
| owner           | [github.user](github.user.md)                         | Repository branch owner                  |
| isDefault       | bool                                                  | Whether the branch is the default branch |
