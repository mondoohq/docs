---
title: gcp.projects
id: gcp.projects
sidebar_label: gcp.projects
displayed_sidebar: MQL
description: Google Cloud (GCP) projects
---

# gcp.projects

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) projects

**List**

[]gcp.project

**Fields**

| ID       | TYPE                                    | DESCRIPTION                                        |
| -------- | --------------------------------------- | -------------------------------------------------- |
| parentId | string                                  | Parent ID                                          |
| children | &#91;&#93;[gcp.project](gcp.project.md) | List of the children projects only (non-recursive) |
| list     | &#91;&#93;[gcp.project](gcp.project.md) |                                                    |

**References**

- [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
