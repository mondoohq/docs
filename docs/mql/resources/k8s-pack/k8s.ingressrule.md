---
title: k8s.ingressrule
id: k8s.ingressrule
sidebar_label: k8s.ingressrule
displayed_sidebar: MQL
description: Kubernetes Ingress rule
---

# k8s.ingressrule

**Supported platform**

- kubernetes

**Description**

Kubernetes Ingress rule

**Fields**

| ID        | TYPE                                                            | DESCRIPTION                        |
| --------- | --------------------------------------------------------------- | ---------------------------------- |
| id        | string                                                          | Mondoo ID for object               |
| host      | string                                                          | Hostname to match for Ingress rule |
| httpPaths | &#91;&#93;[k8s.ingresshttprulepath](k8s.ingresshttprulepath.md) | HTTP paths to manage Ingress for   |
