---
title: Scan From Your Workstation
sidebar_label: Scan From Your Workstation
sidebar_position: 2
image: /img/featured_img/mondoo-kubernetes.jpg
description: This document provides detailed information on how to scan Kubernetes clusters from your workstation
---

Mondoo's security assessment CLI, cnspec, makes it easy to secure your Kubernetes cluster and all running workloads.

:::note

To ensure the maximum security, we recommend scanning container images before they are deployed into production, such as within a CI/CD pipelines or within a container registry. To learn more, read the [Mondoo CI/CD Overview](/platform/infra/supply/cicd/overview/).

:::

## Requirements

To scan a Kubernetes cluster with Mondoo's cnspec CLI, you must install and set up [kubectl](https://kubernetes.io/docs/tasks/tools/) to communicate with your cluster. Make sure you can see your pods:

```shell
kubectl get pods
NAME                             READY   STATUS    RESTARTS      AGE
luna-frontend-7fb96c846b-jjnhz   1/1     Running   0             30d
luna-frontend-7fb96c846b-tmg95   1/1     Running   0             30d
luna-frontend-7fb96c846b-xrl6c   1/1     Running   0             30d
postgresql-5bb9d69b96-d9zzg      1/1     Running   0             30d
```

## Scan

Mondoo leverages the configuration from `kubectl`. No additional configuration is required. To scan all namespaces, run:

```shell
cnspec scan k8s
```

### Scanning container images in pods

To optionally scan container images defined in Kubernetes pods run:

```shell
cnspec scan k8s --discover container-images
```

### Scanning specific namespaces

By default Mondoo will scan all Kubernetes namespace. To target a specific namespace use the `--namespace` flag:

```shell
cnspec scan k8s --namespace EXAMPLE_NAMESPACE
```

---
