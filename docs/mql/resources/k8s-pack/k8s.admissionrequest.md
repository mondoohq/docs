---
title: k8s.admissionrequest
id: k8s.admissionrequest
sidebar_label: k8s.admissionrequest
displayed_sidebar: MQL
description: Kubernetes AdmissionRequest
---

# k8s.admissionrequest

**Supported platform**

- kubernetes

**Description**

Kubernetes AdmissionRequest

**Fields**

| ID        | TYPE                            | DESCRIPTION                                                         |
| --------- | ------------------------------- | ------------------------------------------------------------------- |
| name      | string                          | The name of the object presented in the request                     |
| namespace | string                          | The namespace associated with the request (if any)                  |
| operation | string                          | The operation being performed                                       |
| userInfo  | [k8s.userinfo](k8s.userinfo.md) | Information about the requesting user                               |
| object    | dict                            | The incoming object from the request                                |
| oldObject | dict                            | The existing object (only populated for UPDATE and DELETE requests) |
