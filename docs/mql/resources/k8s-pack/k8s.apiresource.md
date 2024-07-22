---
title: k8s.apiresource
id: k8s.apiresource
sidebar_label: k8s.apiresource
displayed_sidebar: MQL
description: Kubernetes API resources
---

# k8s.apiresource

**Supported platform**

- kubernetes

**Description**

Kubernetes API resources

**Fields**

| ID           | TYPE             | DESCRIPTION                                   |
| ------------ | ---------------- | --------------------------------------------- |
| name         | string           | Plural name of the resource                   |
| singularName | string           | Singular name of the resource                 |
| namespaced   | bool             | Whether a resource is namespaced              |
| group        | string           | Preferred group of the resource               |
| version      | string           | Preferred version of the resource             |
| kind         | string           | Kubernetes object type                        |
| shortNames   | &#91;&#93;string | List of suggested short names of the resource |
| categories   | &#91;&#93;string | List of the grouped resources                 |
