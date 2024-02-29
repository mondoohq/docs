---
title: k8s.pod
id: k8s.pod
sidebar_label: k8s.pod
displayed_sidebar: MQL
description: Kubernetes Pod
---

# k8s.pod

**Supported platform**

- kubernetes

**Description**

Kubernetes Pod

**Fields**

| ID                  | TYPE                                                          | DESCRIPTION                          |
| ------------------- | ------------------------------------------------------------- | ------------------------------------ |
| id                  | string                                                        | Mondoo ID for the Kubernetes object  |
| uid                 | string                                                        | Kubernetes object UID                |
| resourceVersion     | string                                                        | Kubernetes resource version          |
| labels              | map[string]string                                             | Kubernetes labels                    |
| annotations         | map[string]string                                             | Kubernetes annotations               |
| name                | string                                                        | Kubernetes object name               |
| namespace           | string                                                        | Kubernetes object namespace          |
| apiVersion          | string                                                        | Kubernetes object version            |
| kind                | string                                                        | Kubernetes object type               |
| created             | time                                                          | Kubernetes object creation timestamp |
| manifest            | dict                                                          | Full resource manifest               |
| podSpec             | dict                                                          | Pod description                      |
| ephemeralContainers | &#91;&#93;[k8s.ephemeralContainer](k8s.ephemeralcontainer.md) | Ephemeral containers                 |
| initContainers      | &#91;&#93;[k8s.initContainer](k8s.initcontainer.md)           | Init containers                      |
| containers          | &#91;&#93;[k8s.container](k8s.container.md)                   | Contained containers                 |
| node                | [k8s.node](k8s.node.md)                                       | Node the pod runs on                 |
