---
title: k8s.secret
id: k8s.secret
sidebar_label: k8s.secret
displayed_sidebar: MQL
description: Kubernetes Secret
---

# k8s.secret

**Supported platform**

- kubernetes

**Description**

Kubernetes Secret

**Fields**

| ID              | TYPE                          | DESCRIPTION                          |
| --------------- | ----------------------------- | ------------------------------------ |
| id              | string                        | Mondoo ID for the Kubernetes object  |
| uid             | string                        | Kubernetes object UID                |
| resourceVersion | string                        | Kubernetes resource version          |
| labels          | map[string]string             | Kubernetes labels                    |
| annotations     | map[string]string             | Kubernetes annotations               |
| name            | string                        | Kubernetes object name               |
| namespace       | string                        | Kubernetes object namespace          |
| kind            | string                        | Kubernetes object type               |
| created         | time                          | Kubernetes object creation timestamp |
| manifest        | dict                          | Full resource manifest               |
| type            | string                        | Secret type                          |
| certificates    | &#91;&#93;network.certificate | Secret certificates                  |

**References**

- [Secrets Documentation](https://kubernetes.io/docs/concepts/configuration/secret/)
