---
title: gcp.project.cloudRunService.service
id: gcp.project.cloudRunService.service
sidebar_label: gcp.project.cloudRunService.service
displayed_sidebar: MQL
description: Google Cloud (GCP) Run service
---

# gcp.project.cloudRunService.service

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Run service

**Fields**

| ID                    | TYPE                                                                                                            | DESCRIPTION                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| id                    | string                                                                                                          | Service identifier                                                                                                                  |
| projectId             | string                                                                                                          | Project ID                                                                                                                          |
| region                | string                                                                                                          | Region                                                                                                                              |
| name                  | string                                                                                                          | Service name                                                                                                                        |
| description           | string                                                                                                          | Service description                                                                                                                 |
| generation            | int                                                                                                             | Number that monotonically increases every time the user modifies the desired state                                                  |
| labels                | map[string]string                                                                                               | User-provided labels                                                                                                                |
| annotations           | map[string]string                                                                                               | Unstructured key-value map that may be set by external tools to store an arbitrary metadata                                         |
| created               | time                                                                                                            | Creation timestamp                                                                                                                  |
| updated               | time                                                                                                            | Update timestamp                                                                                                                    |
| deleted               | time                                                                                                            | Deletion timestamp                                                                                                                  |
| expired               | time                                                                                                            | Timestamp after which a deleted service will be permanently deleted                                                                 |
| creator               | string                                                                                                          | Email address of the authenticated creator                                                                                          |
| lastModifier          | string                                                                                                          | Email address of the last authenticated modifier                                                                                    |
| ingress               | string                                                                                                          | Ingress settings                                                                                                                    |
| launchStage           | string                                                                                                          | Launch stage                                                                                                                        |
| template              | [gcp.project.cloudRunService.service.revisionTemplate](gcp.project.cloudrunservice.service.revisiontemplate.md) | Template used to create revisions for the service                                                                                   |
| traffic               | &#91;&#93;dict                                                                                                  | Specifies how to distribute traffic over a collection of revisions belonging to the service                                         |
| observedGeneration    | int                                                                                                             | Generation of this service currently serving traffic                                                                                |
| terminalCondition     | [gcp.project.cloudRunService.condition](gcp.project.cloudrunservice.condition.md)                               | Conditions of this service, containing its readiness status and detailed error information in case it did not reach a serving state |
| conditions            | &#91;&#93;[gcp.project.cloudRunService.condition](gcp.project.cloudrunservice.condition.md)                     | Conditions of all other associated sub-resources                                                                                    |
| latestReadyRevision   | string                                                                                                          | Name of the latest revision that is serving traffic                                                                                 |
| latestCreatedRevision | string                                                                                                          | Name of the last created revision                                                                                                   |
| trafficStatuses       | &#91;&#93;dict                                                                                                  | Detailed status information for corresponding traffic targets                                                                       |
| uri                   | string                                                                                                          | Main URI in which this service is serving traffic                                                                                   |
| reconciling           | bool                                                                                                            | Whether the service is currently being acted upon by the system to bring it into the desired state                                  |

**References**

- [Cloud Run services](https://cloud.google.com/run/docs/resource-model#services)
