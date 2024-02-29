---
title: github.workflow
id: github.workflow
sidebar_label: github.workflow
displayed_sidebar: MQL
description: GitHub workflow
---

# github.workflow

**Description**

GitHub workflow

**Fields**

| ID            | TYPE                          | DESCRIPTION            |
| ------------- | ----------------------------- | ---------------------- |
| id            | int                           | Workflow ID            |
| name          | string                        | Workflow name          |
| path          | string                        | Workflow path          |
| state         | string                        | Workflow state         |
| createdAt     | time                          | Workflow create time   |
| updatedAt     | time                          | Workflow update time   |
| file          | [github.file](github.file.md) | Workflow file          |
| configuration | dict                          | Workflow configuration |
