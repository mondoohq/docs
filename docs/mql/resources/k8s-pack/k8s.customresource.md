---
title: k8s.customresource
id: k8s.customresource
sidebar_label: k8s.customresource
displayed_sidebar: MQL
description: Kubernetes CustomResource
---

# k8s.customresource

**Supported platform**

- kubernetes

**Description**

Kubernetes CustomResource

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
