---
title: gcp.project.cloudRunService
id: gcp.project.cloudRunService
sidebar_label: gcp.project.cloudRunService
displayed_sidebar: MQL
description: GCP Cloud Run resources
---

# gcp.project.cloudRunService

**Supported platform**

- gcp

**Description**

GCP Cloud Run resources

**Fields**

| ID         | TYPE                                                                                        | DESCRIPTION               |
| ---------- | ------------------------------------------------------------------------------------------- | ------------------------- |
| projectId  | string                                                                                      | Project ID                |
| regions    | &#91;&#93;string                                                                            | List of available regions |
| operations | &#91;&#93;[gcp.project.cloudRunService.operation](gcp.project.cloudrunservice.operation.md) | List of operations        |
| services   | &#91;&#93;[gcp.project.cloudRunService.service](gcp.project.cloudrunservice.service.md)     | List of services          |
| jobs       | &#91;&#93;[gcp.project.cloudRunService.job](gcp.project.cloudrunservice.job.md)             | List of jobs              |

**References**

- [What is Cloud Run](https://cloud.google.com/run/docs/overview/what-is-cloud-run)
