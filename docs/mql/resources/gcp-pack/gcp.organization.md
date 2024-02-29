---
title: gcp.organization
id: gcp.organization
sidebar_label: gcp.organization
displayed_sidebar: MQL
description: GCP cloud organization
---

# gcp.organization

**Supported platform**

- gcp

**Description**

GCP cloud organization

**Fields**

| ID                     | TYPE                                                                    | DESCRIPTION                      |
| ---------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| id                     | string                                                                  | Organization ID                  |
| name                   | string                                                                  | Organization name                |
| state                  | string                                                                  | Organization state               |
| lifecycleState         | string                                                                  | Deprecated. Use `state` instead. |
| iamPolicy              | &#91;&#93;[gcp.resourcemanager.binding](gcp.resourcemanager.binding.md) | Organization IAM policy          |
| accessApprovalSettings | [gcp.accessApprovalSettings](gcp.accessapprovalsettings.md)             | Access approval settings         |
| folders                | [gcp.folders](gcp.folders.md)                                           | List of folders                  |
| projects               | [gcp.projects](gcp.projects.md)                                         | List of projects                 |

**References**

- [Resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)
