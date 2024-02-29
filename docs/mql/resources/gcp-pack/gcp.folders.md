---
title: gcp.folders
id: gcp.folders
sidebar_label: gcp.folders
displayed_sidebar: MQL
description: GCP folders
---

# gcp.folders

**Supported platform**

- gcp

**Description**

GCP folders

**List**

[]gcp.folder

**Fields**

| ID       | TYPE                                  | DESCRIPTION                                       |
| -------- | ------------------------------------- | ------------------------------------------------- |
| parentId | string                                | Parent ID                                         |
| children | &#91;&#93;[gcp.folder](gcp.folder.md) | List of the children folders only (non-recursive) |
| list     | &#91;&#93;[gcp.folder](gcp.folder.md) |                                                   |

**References**

- [Creating and managing Folders](https://cloud.google.com/resource-manager/docs/creating-managing-folders)
