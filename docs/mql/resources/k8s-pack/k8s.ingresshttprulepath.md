---
title: k8s.ingresshttprulepath
id: k8s.ingresshttprulepath
sidebar_label: k8s.ingresshttprulepath
displayed_sidebar: MQL
description: Kubernetes Ingress HTTP rule
---

# k8s.ingresshttprulepath

**Supported platform**

- kubernetes

**Description**

Kubernetes Ingress HTTP rule

**Fields**

| ID       | TYPE                                        | DESCRIPTION                                 |
| -------- | ------------------------------------------- | ------------------------------------------- |
| id       | string                                      | Mondoo ID for object                        |
| path     | string                                      | HTTP path for Ingress rule                  |
| pathType | string                                      | PathType for Ingress rule                   |
| backend  | [k8s.ingressbackend](k8s.ingressbackend.md) | Backend to forward matching Ingress traffic |
