---
title: git.commit
id: git.commit
sidebar_label: git.commit
displayed_sidebar: MQL
description: Git commit
---

# git.commit

**Description**

Git commit

**Fields**

| ID                    | TYPE                                    | DESCRIPTION                                     |
| --------------------- | --------------------------------------- | ----------------------------------------------- |
| sha                   | string                                  | Git commit SHA                                  |
| message               | string                                  | Git commit message                              |
| author                | [git.commitAuthor](git.commitauthor.md) | Git commit author                               |
| committer             | [git.commitAuthor](git.commitauthor.md) | Git commit committer                            |
| signatureVerification | [git.gpgSignature](git.gpgsignature.md) | The GPG signature of the commit if there is one |
