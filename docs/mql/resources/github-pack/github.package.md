---
title: github.package
id: github.package
sidebar_label: github.package
displayed_sidebar: MQL
description: GitHub package
---

# github.package

**Description**

GitHub package

**Fields**

| ID           | TYPE                                      | DESCRIPTION                    |
| ------------ | ----------------------------------------- | ------------------------------ |
| id           | int                                       | Package ID                     |
| name         | string                                    | Package name                   |
| packageType  | string                                    | Package type                   |
| owner        | [github.user](github.user.md)             | Package owner                  |
| createdAt    | time                                      | Package create time            |
| updatedAt    | time                                      | Package update time            |
| versionCount | int                                       | Package version numbers        |
| visibility   | string                                    | Package visibility             |
| repository   | [github.repository](github.repository.md) | Package repository information |
