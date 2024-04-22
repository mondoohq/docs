---
title: gcp.project.computeService.snapshot
id: gcp.project.computeService.snapshot
sidebar_label: gcp.project.computeService.snapshot
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute persistent disk snapshot
---

# gcp.project.computeService.snapshot

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute persistent disk snapshot

**Fields**

| ID                 | TYPE              | DESCRIPTION                                                                       |
| ------------------ | ----------------- | --------------------------------------------------------------------------------- |
| id                 | string            | Unique identifier                                                                 |
| name               | string            | Name of the resource                                                              |
| description        | string            | Optional description                                                              |
| architecture       | string            | Architecture of the snapshot                                                      |
| autoCreated        | bool              | Indicates if snapshot was automatically created                                   |
| chainName          | string            | Snapshot chain                                                                    |
| creationSizeBytes  | int               | Size in bytes of the snapshot at creation time                                    |
| diskSizeGb         | int               | Size of the source disk, specified in GB                                          |
| downloadBytes      | int               | Number of bytes downloaded to restore a snapshot to a disk                        |
| storageBytes       | int               | Size of the storage used by the snapshot                                          |
| storageBytesStatus | string            | An indicator whether storageBytes is in a stable state or in storage reallocation |
| snapshotType       | string            | Indicates the type of the snapshot                                                |
| licenses           | &#91;&#93;string  | Public visible licenses                                                           |
| labels             | map[string]string | Snapshot Labels                                                                   |
| created            | time              | Creation timestamp                                                                |
| status             | string            | The status of the snapshot                                                        |

**References**

- [About archive and standard disk snapshots](https://cloud.google.com/compute/docs/disks/snapshots)
