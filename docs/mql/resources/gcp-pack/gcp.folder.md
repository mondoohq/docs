---
title: gcp.folder
id: gcp.folder
sidebar_label: gcp.folder
displayed_sidebar: MQL
description: Google Cloud (GCP) folder
---

# gcp.folder

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) folder

**Fields**

| ID       | TYPE                            | DESCRIPTION        |
| -------- | ------------------------------- | ------------------ |
| id       | string                          | Folder ID          |
| name     | string                          | Folder name        |
| created  | time                            | Creation timestamp |
| updated  | time                            | Update timestamp   |
| parentId | string                          | Parent ID          |
| state    | string                          | Folder state       |
| folders  | [gcp.folders](gcp.folders.md)   | List of folders    |
| projects | [gcp.projects](gcp.projects.md) | List of projects   |

**References**

- [Creating and managing Folders](https://cloud.google.com/resource-manager/docs/creating-managing-folders)
