---
title: gcp.project.computeService.disk
id: gcp.project.computeService.disk
sidebar_label: gcp.project.computeService.disk
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute persistent disk
---

# gcp.project.computeService.disk

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute persistent disk

**Fields**

| ID                     | TYPE                                                                  | DESCRIPTION                                |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------ |
| id                     | string                                                                | Unique identifier for the resource         |
| name                   | string                                                                | User-friendly name for this disk           |
| architecture           | string                                                                | The architecture of the disk               |
| description            | string                                                                | Optional description                       |
| guestOsFeatures        | &#91;&#93;string                                                      | Features to enable on the guest operating  |
| labels                 | map[string]string                                                     | Labels to apply to this disk               |
| lastAttachTimestamp    | time                                                                  | Last attach timestamp                      |
| lastDetachTimestamp    | time                                                                  | Last detach timestamp                      |
| licenses               | &#91;&#93;string                                                      | Publicly visible licenses                  |
| locationHint           | string                                                                | An opaque location hint                    |
| physicalBlockSizeBytes | int                                                                   | Physical block size of the persistent disk |
| provisionedIops        | int                                                                   | How many IOPS to provision for the disk    |
| sizeGb                 | int                                                                   | Size, in GB, of the persistent disk        |
| status                 | string                                                                | The status of disk creation                |
| zone                   | [gcp.project.computeService.zone](gcp.project.computeservice.zone.md) | Disk zone                                  |
| created                | time                                                                  | Creation timestamp                         |
| diskEncryptionKey      | dict                                                                  | Disk encryption key                        |

**References**

- [Storage options](https://cloud.google.com/compute/docs/disks)
