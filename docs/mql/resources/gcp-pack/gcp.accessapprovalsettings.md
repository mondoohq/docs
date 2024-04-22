---
title: gcp.accessApprovalSettings
id: gcp.accessApprovalSettings
sidebar_label: gcp.accessApprovalSettings
displayed_sidebar: MQL
description: Google Cloud (GCP) access approval settings
---

# gcp.accessApprovalSettings

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) access approval settings

**Fields**

| ID                          | TYPE             | DESCRIPTION                                                                                                                                                                        |
| --------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resourcePath                | string           | Resource path                                                                                                                                                                      |
| notificationEmails          | &#91;&#93;string | List of email addresses to which notifications relating to approval requests should be sent                                                                                        |
| enrolledServices            | &#91;&#93;dict   | List of Google Cloud services for which the given resource has access approval enrolled                                                                                            |
| enrolledAncestor            | bool             | Whether at least one service is enrolled for access approval in one or more ancestors of the project or folder (unset for organizations since organizations do not have ancestors) |
| activeKeyVersion            | string           | Asymmetric crypto key version to use for signing approval requests                                                                                                                 |
| ancestorHasActiveKeyVersion | bool             | Whether an ancestor of this project or folder has set active key version (unset for organizations since organizations do not have ancestors)                                       |
| invalidKeyVersion           | bool             | Whether there is some configuration issue with the active key version configured at this level of the resource hierarchy                                                           |

**References**

- [Access Approval documentation](https://cloud.google.com/assured-workloads/access-approval/docs)
