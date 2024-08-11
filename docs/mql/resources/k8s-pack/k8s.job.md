---
title: k8s.job
id: k8s.job
sidebar_label: k8s.job
displayed_sidebar: MQL
description: Kubernetes Job
---

# k8s.job

**Supported platform**

- kubernetes

**Description**

Kubernetes Job

**Fields**

| ID              | TYPE                                                | DESCRIPTION                          |
| --------------- | --------------------------------------------------- | ------------------------------------ |
| id              | string                                              | Mondoo ID for the Kubernetes object  |
| uid             | string                                              | Kubernetes object UID                |
| resourceVersion | string                                              | Kubernetes resource version          |
| labels          | map[string]string                                   | Kubernetes labels                    |
| annotations     | map[string]string                                   | Kubernetes annotations               |
| name            | string                                              | Kubernetes object name               |
| namespace       | string                                              | Kubernetes object namespace          |
| kind            | string                                              | Kubernetes object type               |
| created         | time                                                | Kubernetes object creation timestamp |
| manifest        | dict                                                | Full resource manifest               |
| podSpec         | dict                                                | Pod description                      |
| initContainers  | &#91;&#93;[k8s.initContainer](k8s.initcontainer.md) | Init containers                      |
| containers      | &#91;&#93;[k8s.container](k8s.container.md)         | Contained containers                 |

**References**

- [Jobs Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/job/)
