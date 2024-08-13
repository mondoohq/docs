---
title: k8s.deployment
id: k8s.deployment
sidebar_label: k8s.deployment
displayed_sidebar: MQL
description: Kubernetes Deployment
---

# k8s.deployment

**Supported platform**

- kubernetes

**Description**

Kubernetes Deployment

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

- [Deployments Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
