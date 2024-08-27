---
title: github.commit
id: github.commit
sidebar_label: github.commit
displayed_sidebar: MQL
description: GitHub repository commit
---

# github.commit

**Description**

GitHub repository commit

**Fields**

| ID            | TYPE                          | DESCRIPTION            |
| ------------- | ----------------------------- | ---------------------- |
| owner         | string                        | Commit owner           |
| repository    | string                        | Commit repository      |
| sha           | string                        | Commit SHA             |
| url           | string                        | Commit URL             |
| author        | [github.user](github.user.md) | Commit author          |
| committer     | [github.user](github.user.md) | Commit committer       |
| commit        | [git.commit](git.commit.md)   | Commit resource object |
| stats         | dict                          | Commit stats           |
| authoredDate  | time                          | Authored Date          |
| committedDate | time                          | Committed Date         |
