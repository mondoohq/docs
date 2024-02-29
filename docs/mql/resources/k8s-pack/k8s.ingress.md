---
title: k8s.ingress
id: k8s.ingress
sidebar_label: k8s.ingress
displayed_sidebar: MQL
description: Kubernetes Ingress
---

# k8s.ingress

**Supported platform**

- kubernetes

**Description**

Kubernetes Ingress

**Fields**

| ID              | TYPE                                            | DESCRIPTION                          |
| --------------- | ----------------------------------------------- | ------------------------------------ |
| id              | string                                          | Mondoo ID for the Kubernetes object  |
| uid             | string                                          | Kubernetes object UID                |
| resourceVersion | string                                          | Kubernetes resource version          |
| labels          | map[string]string                               | Kubernetes labels                    |
| annotations     | map[string]string                               | Kubernetes annotations               |
| name            | string                                          | Kubernetes object name               |
| namespace       | string                                          | Kubernetes object namespace          |
| kind            | string                                          | Kubernetes object type               |
| created         | time                                            | Kubernetes object creation timestamp |
| manifest        | dict                                            | Full resource manifest               |
| rules           | &#91;&#93;[k8s.ingressrule](k8s.ingressrule.md) | Ingress rules                        |
| tls             | &#91;&#93;[k8s.ingresstls](k8s.ingresstls.md)   | Ingress TLS data                     |
