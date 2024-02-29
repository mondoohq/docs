---
title: k8s.networkpolicy
id: k8s.networkpolicy
sidebar_label: k8s.networkpolicy
displayed_sidebar: MQL
description: Kubernetes Network Policy
---

# k8s.networkpolicy

**Supported platform**

- kubernetes

**Description**

Kubernetes Network Policy

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
| spec            | dict              | Network policy spec                  |
