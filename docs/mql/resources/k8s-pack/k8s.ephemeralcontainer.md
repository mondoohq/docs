---
title: k8s.ephemeralContainer
id: k8s.ephemeralContainer
sidebar_label: k8s.ephemeralContainer
displayed_sidebar: MQL
description: Kubernetes ephemeral container
---

# k8s.ephemeralContainer

**Supported platform**

- kubernetes

**Description**

Kubernetes ephemeral container

**Fields**

| ID              | TYPE               | DESCRIPTION                                             |
| --------------- | ------------------ | ------------------------------------------------------- |
| uid             | string             | Kubernetes object UID                                   |
| name            | string             | Name of the container                                   |
| imageName       | string             | Container image name                                    |
| image           | string             | Deprecated; use `imageName` instead                     |
| containerImage  | os.container.image | Container image                                         |
| command         | &#91;&#93;string   | Entry point array                                       |
| args            | &#91;&#93;string   | Arguments to the entry point                            |
| volumeMounts    | &#91;&#93;dict     | Pod volumes to mount into the container's file system   |
| volumeDevices   | &#91;&#93;dict     | List of block devices to be used by the container       |
| imagePullPolicy | string             | Image pull policy: Always, Never, or IfNotPresent       |
| securityContext | dict               | Security options the Pod should run with                |
| workingDir      | string             | Container's working directory                           |
| tty             | bool               | Whether this container should allocate a TTY for itself |
| env             | dict               | env variables                                           |
| envFrom         | dict               | envFrom settings                                        |
