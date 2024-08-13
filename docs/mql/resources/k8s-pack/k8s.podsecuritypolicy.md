---
title: k8s.podsecuritypolicy
id: k8s.podsecuritypolicy
sidebar_label: k8s.podsecuritypolicy
displayed_sidebar: MQL
description: Kubernetes PodSecurityPolicy (deprecated as of Kubernetes v1.21)
---

# k8s.podsecuritypolicy

**Supported platform**

- kubernetes

**Description**

Kubernetes PodSecurityPolicy (deprecated as of Kubernetes v1.21)

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
| spec            | dict              | Policy Spec                          |

**References**

- [Pod Security Policies Documentation](https://kubernetes.io/docs/concepts/security/pod-security-policy/)
