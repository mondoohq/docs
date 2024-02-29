---
title: gcp.project.computeService.machineType
id: gcp.project.computeService.machineType
sidebar_label: gcp.project.computeService.machineType
displayed_sidebar: MQL
description: GCP machine type
---

# gcp.project.computeService.machineType

**Supported platform**

- gcp

**Description**

GCP machine type

**Fields**

| ID                           | TYPE                                                                  | DESCRIPTION                                               |
| ---------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------- |
| id                           | string                                                                | Unique identifier                                         |
| projectId                    | string                                                                | Project ID                                                |
| name                         | string                                                                | Name of the resource                                      |
| description                  | string                                                                | Resource Description                                      |
| guestCpus                    | int                                                                   | Number of virtual CPUs that are available to the instance |
| isSharedCpu                  | bool                                                                  | Whether the machine has a shared CPU                      |
| maximumPersistentDisks       | int                                                                   | Maximum persistent disks allowed                          |
| maximumPersistentDisksSizeGb | int                                                                   | Maximum total persistent disks size (GB) allowed          |
| memoryMb                     | int                                                                   | Physical memory available to the instance (MB)            |
| created                      | time                                                                  | Creation timestamp                                        |
| zone                         | [gcp.project.computeService.zone](gcp.project.computeservice.zone.md) | The zone where the machine type resides                   |

**References**

- [Machine families resource and comparison guide](https://cloud.google.com/compute/docs/machine-resource)
