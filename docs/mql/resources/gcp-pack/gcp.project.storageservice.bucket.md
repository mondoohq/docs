---
title: gcp.project.storageService.bucket
id: gcp.project.storageService.bucket
sidebar_label: gcp.project.storageService.bucket
displayed_sidebar: MQL
description: Google Cloud (GCP) Storage bucket
---

# gcp.project.storageService.bucket

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Storage bucket

**Fields**

| ID               | TYPE                                                                    | DESCRIPTION           |
| ---------------- | ----------------------------------------------------------------------- | --------------------- |
| id               | string                                                                  | Bucket ID             |
| projectId        | string                                                                  | Project ID            |
| name             | string                                                                  | Bucket name           |
| labels           | map[string]string                                                       | User-defined labels   |
| location         | string                                                                  | Bucket location       |
| locationType     | string                                                                  | Bucket location type  |
| projectNumber    | string                                                                  | Project number        |
| storageClass     | string                                                                  | Default storage class |
| created          | time                                                                    | Creation timestamp    |
| updated          | time                                                                    | Update timestamp      |
| iamPolicy        | &#91;&#93;[gcp.resourcemanager.binding](gcp.resourcemanager.binding.md) | IAM policy            |
| iamConfiguration | dict                                                                    | IAM configuration     |
| retentionPolicy  | dict                                                                    | Retention policy      |

**References**

- [About Cloud Storage buckets](https://cloud.google.com/storage/docs/buckets)
