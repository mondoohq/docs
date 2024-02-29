---
title: k8s.rbac.clusterrole
id: k8s.rbac.clusterrole
sidebar_label: k8s.rbac.clusterrole
displayed_sidebar: MQL
description: Kubernetes ClusterRole
---

# k8s.rbac.clusterrole

**Supported platform**

- kubernetes

**Description**

Kubernetes ClusterRole

**Fields**

| ID              | TYPE              | DESCRIPTION                          |
| --------------- | ----------------- | ------------------------------------ |
| id              | string            | Mondoo ID for the Kubernetes object  |
| uid             | string            | Kubernetes object UID                |
| resourceVersion | string            | Kubernetes resource version          |
| labels          | map[string]string | Kubernetes labels                    |
| annotations     | map[string]string | Kubernetes annotations               |
| name            | string            | Kubernetes object name               |
| kind            | string            | Kubernetes object type               |
| created         | time              | Kubernetes object creation timestamp |
| manifest        | dict              | Full resource manifest               |
| rules           | &#91;&#93;dict    | ClusterRole rules                    |
| aggregationRule | dict              | ClusterRole aggregation rule         |
