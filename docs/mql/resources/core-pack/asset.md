---
title: asset
id: asset
sidebar_label: asset
displayed_sidebar: MQL
description: General asset information
---

# asset

**Description**

General asset information

**Fields**

| ID          | TYPE              | DESCRIPTION                                                                                                                |
| ----------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| name        | string            | Human readable name of the asset                                                                                           |
| ids         | &#91;&#93;string  | All identifiers for this asset                                                                                             |
| platform    | string            | Platform for this asset (redhat, windows, k8s-pod)                                                                         |
| kind        | string            | Kind of platform, for example:, api, baremetal, vm, vm-image, container, container-image, network, ...                     |
| runtime     | string            | Runtime is the specific kind of the platform. Examples include:, docker-container, podman-container, aws-ec2-instance, ... |
| version     | string            | Version of the platform                                                                                                    |
| arch        | string            | Architecture this OS is running on                                                                                         |
| title       | string            | Human-readable title of the platform (e.g., "Red Hat 8, Container")                                                        |
| family      | &#91;&#93;string  | List of platform families that this platform belongs to                                                                    |
| fqdn        | string            | Fully qualified domain name (optional)                                                                                     |
| build       | string            | Build version of the platform (optional)                                                                                   |
| labels      | map[string]string | Optional platform information                                                                                              |
| annotations | map[string]string | Custom annotations (tags) on the asset                                                                                     |
