---
title: gcp.project.gkeService
id: gcp.project.gkeService
sidebar_label: gcp.project.gkeService
displayed_sidebar: MQL
description: GCP GKE
---

# gcp.project.gkeService

**Supported platform**

- gcp

**Description**

GCP GKE

**Fields**

| ID        | TYPE                                                                          | DESCRIPTION                                 |
| --------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| projectId | string                                                                        | Project ID                                  |
| clusters  | &#91;&#93;[gcp.project.gkeService.cluster](gcp.project.gkeservice.cluster.md) | List of GKE clusters in the current project |

**References**

- [GKE overview](https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview)
