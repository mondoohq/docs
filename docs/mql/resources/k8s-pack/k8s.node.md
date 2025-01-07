---
title: k8s.node
id: k8s.node
sidebar_label: k8s.node
displayed_sidebar: MQL
description: Kubernetes node
---

# k8s.node

**Supported platform**

- kubernetes

**Description**

Kubernetes node

**Fields**

| ID              | TYPE              | DESCRIPTION                          |
| --------------- | ----------------- | ------------------------------------ |
| id              | string            | Mondoo ID for the Kubernetes object  |
| uid             | string            | Kubernetes object UID                |
| labels          | map[string]string | Kubernetes labels                    |
| annotations     | map[string]string | Kubernetes annotations               |
| resourceVersion | string            | Kubernetes resource version          |
| name            | string            | Plural name of the resource          |
| kind            | string            | Kubernetes object type               |
| created         | time              | Kubernetes object creation timestamp |
| nodeInfo        | dict              | Node configuration information       |
| kubeletPort     | int               | Kubelet port                         |

**References**

- [Nodes Documentation](https://kubernetes.io/docs/concepts/architecture/nodes/)
