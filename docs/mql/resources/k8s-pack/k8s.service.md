---
title: k8s.service
id: k8s.service
sidebar_label: k8s.service
displayed_sidebar: MQL
description: Kubernetes Service
---

# k8s.service

**Supported platform**

- kubernetes

**Description**

Kubernetes Service

**Fields**

| ID              | TYPE              | DESCRIPTION                          |
| --------------- | ----------------- | ------------------------------------ |
| id              | string            | Mondoo ID for the Kubernetes object  |
| uid             | string            | Kubernetes object UID                |
| resourceVersion | string            | Kubernetes resource version          |
| labels          | map[string]string | Kubernetes labels                    |
| annotations     | map[string]string | Kubernetes annotations               |
| name            | string            | Kubernetes object name               |
| namespace       | string            | Kubernetes object namespace          |
| kind            | string            | Kubernetes object type               |
| created         | time              | Kubernetes object creation timestamp |
| manifest        | dict              | Full resource manifest               |
| spec            | dict              | Service Spec                         |

**References**

- [Service Documentation](https://kubernetes.io/docs/concepts/services-networking/service/)
