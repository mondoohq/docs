---
title: k8s.rbac.role
id: k8s.rbac.role
sidebar_label: k8s.rbac.role
displayed_sidebar: MQL
description: Kubernetes Role
---

# k8s.rbac.role

**Supported platform**

- kubernetes

**Description**

Kubernetes Role

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
| rules           | &#91;&#93;dict    | Cluster Role Rules                   |
