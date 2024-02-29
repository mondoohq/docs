---
title: k8s.container
id: k8s.container
sidebar_label: k8s.container
displayed_sidebar: MQL
description: Kubernetes workload container
---

# k8s.container

**Supported platform**

- kubernetes

**Description**

Kubernetes workload container

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
| resources       | dict               | Compute resources required by this container            |
| volumeMounts    | &#91;&#93;dict     | Pod volumes to mount into the container's file system   |
| volumeDevices   | &#91;&#93;dict     | List of block devices to be used by the container       |
| livenessProbe   | dict               | Periodic probe of container liveness                    |
| readinessProbe  | dict               | Periodic probe of container service readiness           |
| imagePullPolicy | string             | Image pull policyL Always, Never, or IfNotPresent       |
| securityContext | dict               | Security options the pod should run with                |
| workingDir      | string             | Container's working directory                           |
| tty             | bool               | Whether this container should allocate a TTY for itself |
| env             | dict               | env variables                                           |
| envFrom         | dict               | envFrom settings                                        |
