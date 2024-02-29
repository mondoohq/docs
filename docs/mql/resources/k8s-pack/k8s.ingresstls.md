---
title: k8s.ingresstls
id: k8s.ingresstls
sidebar_label: k8s.ingresstls
displayed_sidebar: MQL
description: Kubernetes Ingress TLS
---

# k8s.ingresstls

**Supported platform**

- kubernetes

**Description**

Kubernetes Ingress TLS

**Fields**

| ID           | TYPE                          | DESCRIPTION                                   |
| ------------ | ----------------------------- | --------------------------------------------- |
| id           | string                        | Mondoo ID for object                          |
| hosts        | &#91;&#93;string              | List of hosts associated with TLS certificate |
| certificates | &#91;&#93;network.certificate | Certificates data from the TLS Secret         |
