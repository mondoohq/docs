---
title: gcp.resourcemanager.binding
id: gcp.resourcemanager.binding
sidebar_label: gcp.resourcemanager.binding
displayed_sidebar: MQL
description: GCP Resource Manager binding
---

# gcp.resourcemanager.binding

**Supported platform**

- gcp

**Description**

GCP Resource Manager binding

**Fields**

| ID      | TYPE             | DESCRIPTION                                              |
| ------- | ---------------- | -------------------------------------------------------- |
| id      | string           | Internal ID                                              |
| members | &#91;&#93;string | Principals requesting access for a Google Cloud resource |
| role    | string           | Role assigned to the list of members or principals       |

**References**

- [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
