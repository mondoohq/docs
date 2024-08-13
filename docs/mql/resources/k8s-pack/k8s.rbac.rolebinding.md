---
title: k8s.rbac.rolebinding
id: k8s.rbac.rolebinding
sidebar_label: k8s.rbac.rolebinding
displayed_sidebar: MQL
description: Kubernetes RoleBinding
---

# k8s.rbac.rolebinding

**Supported platform**

- kubernetes

**Description**

Kubernetes RoleBinding

**Fields**

| ID              | TYPE              | DESCRIPTION                                                      |
| --------------- | ----------------- | ---------------------------------------------------------------- |
| id              | string            | Mondoo ID for the Kubernetes object                              |
| uid             | string            | Kubernetes object UID                                            |
| resourceVersion | string            | Kubernetes resource version                                      |
| labels          | map[string]string | Kubernetes labels                                                |
| annotations     | map[string]string | Kubernetes annotations                                           |
| name            | string            | Kubernetes object name                                           |
| namespace       | string            | Kubernetes object namespace                                      |
| kind            | string            | Kubernetes object type                                           |
| created         | time              | Kubernetes object creation timestamp                             |
| manifest        | dict              | Full resource manifest                                           |
| subjects        | &#91;&#93;dict    | Subjects holds references to the objects the role applies to     |
| roleRef         | dict              | RoleRef can only reference a ClusterRole in the global namespace |

**References**

- [Using RBAC Authorization Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding)
