---
title: gcp.project.cloudRunService.container
id: gcp.project.cloudRunService.container
sidebar_label: gcp.project.cloudRunService.container
displayed_sidebar: MQL
description: Google Cloud (GCP) Run service revision template container
---

# gcp.project.cloudRunService.container

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Run service revision template container

**Fields**

| ID            | TYPE                                                                                          | DESCRIPTION                                                                         |
| ------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| id            | string                                                                                        | Internal ID                                                                         |
| name          | string                                                                                        | Container name                                                                      |
| image         | string                                                                                        | URL of the container image in Google Container Registry or Google Artifact Registry |
| command       | &#91;&#93;string                                                                              | Entrypoint array                                                                    |
| args          | &#91;&#93;string                                                                              | Arguments to the entrypoint                                                         |
| env           | &#91;&#93;dict                                                                                | Environment variables                                                               |
| resources     | dict                                                                                          | Compute resource requirements by the container                                      |
| ports         | &#91;&#93;dict                                                                                | List of ports to expose from the container                                          |
| volumeMounts  | &#91;&#93;dict                                                                                | Volumes to mount into the container's file system                                   |
| workingDir    | string                                                                                        | Container's working directory                                                       |
| livenessProbe | [gcp.project.cloudRunService.container.probe](gcp.project.cloudrunservice.container.probe.md) | Periodic probe of container liveness                                                |
| startupProbe  | [gcp.project.cloudRunService.container.probe](gcp.project.cloudrunservice.container.probe.md) | Startup probe of application within the container                                   |

**References**

- [Container](https://cloud.google.com/run/docs/reference/rest/v1/Container)
