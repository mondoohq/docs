---
title: gcp.project.cloudRunService.container.probe
id: gcp.project.cloudRunService.container.probe
sidebar_label: gcp.project.cloudRunService.container.probe
displayed_sidebar: MQL
description: GCP Cloud Run service revision template container probe
---

# gcp.project.cloudRunService.container.probe

**Supported platform**

- gcp

**Description**

GCP Cloud Run service revision template container probe

**Fields**

| ID                  | TYPE   | DESCRIPTION                                                                     |
| ------------------- | ------ | ------------------------------------------------------------------------------- |
| id                  | string | Internal ID                                                                     |
| initialDelaySeconds | int    | Number of seconds after the container has started before the probe is initiated |
| timeoutSeconds      | int    | Number of seconds after which the probe times out                               |
| periodSeconds       | int    | Number of seconds indicating how often to perform the probe                     |
| failureThreshold    | int    | Minimum consecutive successes for the probe to be considered failed             |
| httpGet             | dict   | HTTP GET probe configuration                                                    |
| tcpSocket           | dict   | TCP socket probe configuration                                                  |

**References**

- [Container](https://cloud.google.com/run/docs/reference/rest/v1/Container)
