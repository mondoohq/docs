---
title: mondoo.asset
id: mondoo.asset
sidebar_label: mondoo.asset
displayed_sidebar: MQL
description: Mondoo Asset
---

# mondoo.asset

**Description**

Mondoo Asset

**Fields**

| ID          | TYPE                                            | DESCRIPTION                            |
| ----------- | ----------------------------------------------- | -------------------------------------- |
| name        | string                                          | Asset name                             |
| mrn         | string                                          | Asset identifier                       |
| platform    | string                                          | Platform name                          |
| annotations | map[string]string                               | Annotations associated with this asset |
| labels      | map[string]string                               | Labels associated with this asset      |
| updatedAt   | time                                            | Time this asset was last updated       |
| scoreValue  | int                                             | Asset score value                      |
| scoreGrade  | string                                          | Asset score grade                      |
| resources   | &#91;&#93;[mondoo.resource](mondoo.resource.md) | Asset resources                        |
