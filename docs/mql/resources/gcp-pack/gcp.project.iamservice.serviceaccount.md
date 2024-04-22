---
title: gcp.project.iamService.serviceAccount
id: gcp.project.iamService.serviceAccount
sidebar_label: gcp.project.iamService.serviceAccount
displayed_sidebar: MQL
description: Google Cloud (GCP) service account
---

# gcp.project.iamService.serviceAccount

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) service account

**Fields**

| ID             | TYPE                                                                                                | DESCRIPTION                                                 |
| -------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| projectId      | string                                                                                              | Project ID                                                  |
| name           | string                                                                                              | Service account name                                        |
| uniqueId       | string                                                                                              | Unique, stable, numeric ID for the service account          |
| email          | string                                                                                              | Email address of the service account                        |
| displayName    | string                                                                                              | User-specified, human-readable name for the service account |
| description    | string                                                                                              | Service account description                                 |
| oauth2ClientId | string                                                                                              | OAuth 2.0 client ID                                         |
| disabled       | bool                                                                                                | Whether the service account is disabled                     |
| keys           | &#91;&#93;[gcp.project.iamService.serviceAccount.key](gcp.project.iamservice.serviceaccount.key.md) | Service account keys                                        |

**References**

- [Identities for workloads](https://cloud.google.com/iam/docs/workload-identities)
