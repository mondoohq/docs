---
title: k8s.rbac.clusterrolebinding
id: k8s.rbac.clusterrolebinding
sidebar_label: k8s.rbac.clusterrolebinding
displayed_sidebar: MQL
description: Kubernetes ClusterRoleBinding
---

# k8s.rbac.clusterrolebinding

**Supported platform**

- kubernetes

**Description**

Kubernetes ClusterRoleBinding

**Fields**

| ID              | TYPE              | DESCRIPTION                                   |
| --------------- | ----------------- | --------------------------------------------- |
| id              | string            | Mondoo ID for the Kubernetes object           |
| uid             | string            | Kubernetes object UID                         |
| resourceVersion | string            | Kubernetes resource version                   |
| labels          | map[string]string | Kubernetes labels                             |
| annotations     | map[string]string | Kubernetes annotations                        |
| name            | string            | Kubernetes object name                        |
| kind            | string            | Kubernetes object type                        |
| created         | time              | Kubernetes object creation timestamp          |
| manifest        | dict              | Full resource manifest                        |
| subjects        | &#91;&#93;dict    | References to the objects the role applies to |
| roleRef         | dict              | ClusterRole in the global namespace           |

**References**

- [Using RBAC Authorization Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding)
