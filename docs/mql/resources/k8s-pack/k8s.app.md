---
title: k8s.app
id: k8s.app
sidebar_label: k8s.app
displayed_sidebar: MQL
description: Kubernetes Application
---

# k8s.app

**Supported platform**

- kubernetes

**Description**

Kubernetes Application

**Fields**

| ID         | TYPE             | DESCRIPTION                          |
| ---------- | ---------------- | ------------------------------------ |
| name       | string           | Application name                     |
| version    | string           | Application version                  |
| instance   | string           | Application instance                 |
| managedBy  | string           | Managed by                           |
| partOf     | string           | Name of the higher-level application |
| components | &#91;&#93;string | Components                           |
