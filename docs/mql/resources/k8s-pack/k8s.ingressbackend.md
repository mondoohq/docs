---
title: k8s.ingressbackend
id: k8s.ingressbackend
sidebar_label: k8s.ingressbackend
displayed_sidebar: MQL
description: Kubernetes Ingress backend
---

# k8s.ingressbackend

**Supported platform**

- kubernetes

**Description**

Kubernetes Ingress backend

**Fields**

| ID          | TYPE                                                      | DESCRIPTION                                       |
| ----------- | --------------------------------------------------------- | ------------------------------------------------- |
| id          | string                                                    | Mondoo ID for object                              |
| service     | [k8s.ingressservicebackend](k8s.ingressservicebackend.md) | Kubernetes service for Ingress backend            |
| resourceRef | [k8s.ingressresourceref](k8s.ingressresourceref.md)       | Kubernetes resource reference for Ingress backend |
