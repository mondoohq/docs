---
title: gcp.project.computeService.image
id: gcp.project.computeService.image
sidebar_label: gcp.project.computeService.image
displayed_sidebar: MQL
description: GCP Compute
---

# gcp.project.computeService.image

**Supported platform**

- gcp

**Description**

GCP Compute

**Fields**

| ID               | TYPE              | DESCRIPTION                                                                |
| ---------------- | ----------------- | -------------------------------------------------------------------------- |
| id               | string            | Unique identifier                                                          |
| projectId        | string            | Project ID                                                                 |
| name             | string            | Name of the resource                                                       |
| description      | string            | Optional description                                                       |
| architecture     | string            | Architecture of the snapshot                                               |
| archiveSizeBytes | int               | Size of the image tar.gz archive stored in Google Cloud Storage (in bytes) |
| diskSizeGb       | int               | Size of the image when restored onto a persistent disk (in GB)             |
| family           | string            | The name of the image family to which this image belongs                   |
| licenses         | &#91;&#93;string  | Public visible licenses                                                    |
| labels           | map[string]string | Snapshot Labels                                                            |
| created          | time              | Creation timestamp                                                         |
| status           | string            | The status of the image                                                    |

**References**

- [OS images](https://cloud.google.com/compute/docs/images)
