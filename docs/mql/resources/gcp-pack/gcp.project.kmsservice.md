---
title: gcp.project.kmsService
id: gcp.project.kmsService
sidebar_label: gcp.project.kmsService
displayed_sidebar: MQL
description: GCP KMS resources
---

# gcp.project.kmsService

**Supported platform**

- gcp

**Description**

GCP KMS resources

**Fields**

| ID        | TYPE                                                                          | DESCRIPTION                             |
| --------- | ----------------------------------------------------------------------------- | --------------------------------------- |
| projectId | string                                                                        | Project ID                              |
| locations | &#91;&#93;string                                                              | Available locations for the service     |
| keyrings  | &#91;&#93;[gcp.project.kmsService.keyring](gcp.project.kmsservice.keyring.md) | List of keyrings in the current project |

**References**

- [Cloud KMS resources](https://cloud.google.com/kms/docs/resource-hierarchy)
