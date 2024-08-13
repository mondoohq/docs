---
title: k8s.replicaset
id: k8s.replicaset
sidebar_label: k8s.replicaset
displayed_sidebar: MQL
description: Kubernetes ReplicaSet
---

# k8s.replicaset

**Supported platform**

- kubernetes

**Description**

Kubernetes ReplicaSet

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

- [ReplicaSet Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding)
