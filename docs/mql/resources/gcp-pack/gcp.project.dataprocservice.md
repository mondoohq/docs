---
title: gcp.project.dataprocService
id: gcp.project.dataprocService
sidebar_label: gcp.project.dataprocService
displayed_sidebar: MQL
description: GCP Dataproc resources
---

# gcp.project.dataprocService

**Supported platform**

- gcp

**Description**

GCP Dataproc resources

**Fields**

| ID        | TYPE                                                                                    | DESCRIPTION                                                   |
| --------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| projectId | string                                                                                  | Project ID                                                    |
| enabled   | bool                                                                                    | Whether the DataProc service is enabled in the project or not |
| regions   | &#91;&#93;string                                                                        | List of available regions                                     |
| clusters  | &#91;&#93;[gcp.project.dataprocService.cluster](gcp.project.dataprocservice.cluster.md) | List of Dataproc clusters in the current project              |

**References**

- [Dataproc documentation](https://cloud.google.com/dataproc/docs#docs)
