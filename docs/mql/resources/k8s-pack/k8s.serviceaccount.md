---
title: k8s.serviceaccount
id: k8s.serviceaccount
sidebar_label: k8s.serviceaccount
displayed_sidebar: MQL
description: Kubernetes service account
---

# k8s.serviceaccount

**Supported platform**

- kubernetes

**Description**

Kubernetes service account

**Fields**

| ID                           | TYPE              | DESCRIPTION                                                                                 |
| ---------------------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| id                           | string            | Mondoo ID for the Kubernetes object                                                         |
| uid                          | string            | Kubernetes object UID                                                                       |
| resourceVersion              | string            | Kubernetes resource version                                                                 |
| labels                       | map[string]string | Kubernetes labels                                                                           |
| annotations                  | map[string]string | Kubernetes annotations                                                                      |
| name                         | string            | Kubernetes object name                                                                      |
| namespace                    | string            | Kubernetes object namespace                                                                 |
| kind                         | string            | Kubernetes object type                                                                      |
| created                      | time              | Kubernetes object creation timestamp                                                        |
| manifest                     | dict              | Full resource manifest                                                                      |
| secrets                      | &#91;&#93;dict    | List of secrets that Pods running using this service account are allowed to use             |
| imagePullSecrets             | &#91;&#93;dict    | List of references to secrets in the same namespace to use for pulling any images           |
| automountServiceAccountToken | bool              | Whether pods running as this service account should have an API token automatically mounted |
