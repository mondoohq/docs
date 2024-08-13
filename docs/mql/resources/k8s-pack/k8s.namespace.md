---
title: k8s.namespace
id: k8s.namespace
sidebar_label: k8s.namespace
displayed_sidebar: MQL
description: Kubernetes namespace
---

# k8s.namespace

**Supported platform**

- kubernetes

**Description**

Kubernetes namespace

**Fields**

| ID          | TYPE              | DESCRIPTION                          |
| ----------- | ----------------- | ------------------------------------ |
| id          | string            | Mondoo ID for the Kubernetes object  |
| uid         | string            | Kubernetes object UID                |
| name        | string            | Kubernetes object name               |
| created     | time              | Kubernetes object creation timestamp |
| manifest    | dict              | Full resource manifest               |
| kind        | string            | Kubernetes object type               |
| labels      | map[string]string | Kubernetes labels                    |
| annotations | map[string]string | Kubernetes annotations               |

**References**

- [Namespaces Documentation](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
