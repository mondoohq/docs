---
title: Assess Docker Image Security with cnspec
sidebar_label: Docker
sidebar_position: 1
displayed_sidebar: cnspec
description: This page provides an overview of how to use Mondoo to scan Docker images for security vulnerabilities.
image: /img/featured_img/mondoo-docker.jpg
---

Use cnspec to scan Docker images and containers for security misconfigurations, CVEs, and end of life operating systems using the built in Mondoo security policies or your own custom policies.

![Docker Image Scan](/img/platform/infra/supply/docker-image-scan.png)

## Docker images

Use cnspec to scan Docker images in public or private container registries using their registry name:

```bash
cnspec scan docker ubuntu:latest
cnspec scan docker elastic/elasticsearch:7.2.0
cnspec scan docker gcr.io/google-containers/ubuntu:22.04
cnspec scan docker registry.access.redhat.com/ubi8/ubi
```

If the Docker agent is installed, you can scan images by their id:

```bash
cnspec scan docker docker-image-id
```

## Docker containers

Scan a running or stopped Docker container by the container ID:

```bash
cnspec scan docker docker-container-id
```

:::note

You can only scan Docker containers if the Docker engine is installed.

:::

## Manage cnspec providers for containers

_Providers_ are the components of cnspec that allow it to evaluate specific platforms. To learn how to manage cnspec providers most efficiently for containers, read [Manage cnspec Providers](/cnspec/cnspec-adv-install/providers/).

## Learn more

- To learn more about how the MQL query language works, read [Write Effective MQL](/mql/mql.write/).

- Explore [Mondoo's Docker resources](/mql/resources/os-pack/).

---
