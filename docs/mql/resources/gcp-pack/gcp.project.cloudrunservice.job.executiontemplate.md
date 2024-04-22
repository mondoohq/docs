---
title: gcp.project.cloudRunService.job.executionTemplate
id: gcp.project.cloudRunService.job.executionTemplate
sidebar_label: gcp.project.cloudRunService.job.executionTemplate
displayed_sidebar: MQL
description: Google Cloud (GCP) Run job execution template
---

# gcp.project.cloudRunService.job.executionTemplate

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Run job execution template

**Fields**

| ID          | TYPE                                                                                                                                | DESCRIPTION                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| id          | string                                                                                                                              | Internal ID                                                                                 |
| labels      | map[string]string                                                                                                                   | User-defined labels                                                                         |
| annotations | map[string]string                                                                                                                   | Unstructured key-value map that may be set by external tools to store an arbitrary metadata |
| parallelism | int                                                                                                                                 | Specifies the maximum desired number of tasks the execution should run at a given time      |
| taskCount   | int                                                                                                                                 | Specifies the desired number of tasks the execution should run                              |
| template    | [gcp.project.cloudRunService.job.executionTemplate.taskTemplate](gcp.project.cloudrunservice.job.executiontemplate.tasktemplate.md) | Describes the task that will be create when executing an execution                          |

**References**

- [Create jobs](https://cloud.google.com/run/docs/create-jobs)
