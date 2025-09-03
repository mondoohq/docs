---
title: k8s.initContainer
id: k8s.initContainer
sidebar_label: k8s.initContainer
displayed_sidebar: MQL
description: Kubernetes init container
---

# k8s.initContainer

**Supported platform**

- kubernetes

**Description**

Kubernetes init container

**Fields**

| ID              | TYPE               | DESCRIPTION                                             |
| --------------- | ------------------ | ------------------------------------------------------- |
| uid             | string             | Kubernetes object UID                                   |
| name            | string             | Name of the container                                   |
| imageName       | string             | Container image name                                    |
| containerImage  | os.container.image | Container image                                         |
| command         | &#91;&#93;string   | Entrypoint array                                        |
| args            | &#91;&#93;string   | Arguments to the entrypoint                             |
| resources       | dict               | Compute resources required by this container            |
| volumeMounts    | &#91;&#93;dict     | Pod volumes to mount into the container's file system   |
| volumeDevices   | &#91;&#93;dict     | List of block devices to be used by the container       |
| imagePullPolicy | string             | Image pull policy: Always, Never, or IfNotPresent       |
| securityContext | dict               | Security options the pod should run with                |
| workingDir      | string             | Container's working directory                           |
| tty             | bool               | Whether this container should allocate a TTY for itself |
| env             | dict               | env variables                                           |
| envFrom         | dict               | envFrom settings                                        |

**References**

- [Init Containers Documentation](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)
