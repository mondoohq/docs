---
title: gcp.project.sqlService
id: gcp.project.sqlService
sidebar_label: gcp.project.sqlService
displayed_sidebar: MQL
description: GCP Cloud SQL resources
---

# gcp.project.sqlService

**Supported platform**

- gcp

**Description**

GCP Cloud SQL resources

**Fields**

| ID        | TYPE                                                                            | DESCRIPTION                                        |
| --------- | ------------------------------------------------------------------------------- | -------------------------------------------------- |
| projectId | string                                                                          | Project ID                                         |
| instances | &#91;&#93;[gcp.project.sqlService.instance](gcp.project.sqlservice.instance.md) | List of Cloud SQL instances in the current project |

**References**

- [Cloud SQL overview](https://cloud.google.com/sql/docs/introduction)
