---
title: k8s.configmap
id: k8s.configmap
sidebar_label: k8s.configmap
displayed_sidebar: MQL
description: Kubernetes ConfigMap
---

# k8s.configmap

**Supported platform**

- kubernetes

**Description**

Kubernetes ConfigMap

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
| data            | map[string]string | Configuration data                   |
