---
title: github.branchprotection
id: github.branchprotection
sidebar_label: github.branchprotection
displayed_sidebar: MQL
description: GitHub repository branch protection
---

# github.branchprotection

**Description**

GitHub repository branch protection

**Fields**

| ID                             | TYPE   | DESCRIPTION                                    |
| ------------------------------ | ------ | ---------------------------------------------- |
| id                             | string | Repository branch protection ID                |
| requiredStatusChecks           | dict   | Require status checks to pass before merging   |
| requiredPullRequestReviews     | dict   | Require a pull request before merging          |
| requiredConversationResolution | dict   | Require conversation resolution before merging |
| requiredSignatures             | bool   | Require signed commits                         |
| requireLinearHistory           | dict   | Require linear history                         |
| enforceAdmins                  | dict   | Include administrators                         |
| restrictions                   | dict   | Restrict who can push to matching branches     |
| allowForcePushes               | dict   | Allow force pushes                             |
| allowDeletions                 | dict   | Allow deletions                                |
