---
title: gcp.project.computeService.attachedDisk
id: gcp.project.computeService.attachedDisk
sidebar_label: gcp.project.computeService.attachedDisk
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute attached disk
---

# gcp.project.computeService.attachedDisk

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute attached disk

**Fields**

| ID              | TYPE                                                                  | DESCRIPTION                                         |
| --------------- | --------------------------------------------------------------------- | --------------------------------------------------- |
| id              | string                                                                | Attached Disk ID                                    |
| projectId       | string                                                                | Project ID                                          |
| architecture    | string                                                                | Architecture of the attached disk                   |
| autoDelete      | bool                                                                  | Indicates if disk will be auto-deleted              |
| boot            | bool                                                                  | Indicates that this is a boot disk                  |
| deviceName      | string                                                                | Unique device name                                  |
| diskSizeGb      | int                                                                   | Size of the disk in GB                              |
| forceAttach     | bool                                                                  | Indicates whether to force attach the regional disk |
| guestOsFeatures | &#91;&#93;string                                                      | Features to enable on the guest operating           |
| index           | int                                                                   | Index to this disk                                  |
| interface       | string                                                                | Disk interface                                      |
| licenses        | &#91;&#93;string                                                      | Publicly visible licenses                           |
| mode            | string                                                                | Mode in which to the disk is attached               |
| source          | [gcp.project.computeService.disk](gcp.project.computeservice.disk.md) | Attached Persistent Disk resource                   |
| type            | string                                                                | Disk Type                                           |

**References**

- [About Persistent Disk](https://cloud.google.com/compute/docs/disks/persistent-disks)
