---
title: gcp.project.cloudRunService.job
id: gcp.project.cloudRunService.job
sidebar_label: gcp.project.cloudRunService.job
displayed_sidebar: MQL
description: Google Cloud (GCP) Run job
---

# gcp.project.cloudRunService.job

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Run job

**Fields**

| ID                 | TYPE                                                                                                      | DESCRIPTION                                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| id                 | string                                                                                                    | Job identifier                                                                                                                      |
| projectId          | string                                                                                                    | Project ID                                                                                                                          |
| region             | string                                                                                                    | Region                                                                                                                              |
| name               | string                                                                                                    | Job name                                                                                                                            |
| generation         | int                                                                                                       | Number that monotonically increases every time the user modifies the desired state                                                  |
| labels             | map[string]string                                                                                         | User-defined labels                                                                                                                 |
| annotations        | map[string]string                                                                                         | Unstructured key-value map that may be set by external tools to store an arbitrary metadata                                         |
| created            | time                                                                                                      | Creation timestamp                                                                                                                  |
| updated            | time                                                                                                      | Update timestamp                                                                                                                    |
| deleted            | time                                                                                                      | Deletion timestamp                                                                                                                  |
| expired            | time                                                                                                      | Timestamp after which a deleted service will be permanently deleted                                                                 |
| creator            | string                                                                                                    | Email address of the authenticated creator                                                                                          |
| lastModifier       | string                                                                                                    | Email address of the last authenticated modifier                                                                                    |
| client             | string                                                                                                    | Arbitrary identifier for the API client                                                                                             |
| clientVersion      | string                                                                                                    | Arbitrary version identifier for the API client                                                                                     |
| launchStage        | string                                                                                                    | Launch stage                                                                                                                        |
| template           | [gcp.project.cloudRunService.job.executionTemplate](gcp.project.cloudrunservice.job.executiontemplate.md) | Template used to create executions for this job                                                                                     |
| observedGeneration | int                                                                                                       | Generation of this service currently serving traffic                                                                                |
| terminalCondition  | [gcp.project.cloudRunService.condition](gcp.project.cloudrunservice.condition.md)                         | Conditions of this service, containing its readiness status and detailed error information in case it did not reach a serving state |
| conditions         | &#91;&#93;[gcp.project.cloudRunService.condition](gcp.project.cloudrunservice.condition.md)               | Conditions of all other associated sub-resources                                                                                    |
| executionCount     | int                                                                                                       | Number of executions created for this job                                                                                           |
| reconciling        | bool                                                                                                      | Whether the service is currently being acted upon by the system to bring it into the desired state                                  |

**References**

- [Cloud Run Jobs](https://cloud.google.com/run/docs/overview/what-is-cloud-run#jobs)
