---
title: k8s.containerStatus
id: k8s.containerStatus
sidebar_label: k8s.containerStatus
displayed_sidebar: MQL
description: Kubernetes container status
---

# k8s.containerStatus

**Supported platform**

- kubernetes

**Description**

Kubernetes container status

**Fields**

| ID           | TYPE   | DESCRIPTION                                                         |
| ------------ | ------ | ------------------------------------------------------------------- |
| name         | string | Name of the container                                               |
| ready        | bool   | Whether the container is currently passing its readiness check      |
| restartCount | int    | The amount of times the container has been restarted                |
| image        | string | Name of the container image that the container is running           |
| imageId      | string | The image ID of the container's image                               |
| containerId  | string | The ID of the container in the format '\<type\>://\<container_id\>' |
