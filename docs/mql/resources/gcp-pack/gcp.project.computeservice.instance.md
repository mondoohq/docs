---
title: gcp.project.computeService.instance
id: gcp.project.computeService.instance
sidebar_label: gcp.project.computeService.instance
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute instances
---

# gcp.project.computeService.instance

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute instances

**Fields**

| ID                         | TYPE                                                                                                | DESCRIPTION                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| id                         | string                                                                                              | Unique identifier for the instance                                                                      |
| projectId                  | string                                                                                              | Project ID                                                                                              |
| name                       | string                                                                                              | User-friendly name for this instance                                                                    |
| description                | string                                                                                              | User-friendly name for this instance                                                                    |
| confidentialInstanceConfig | dict                                                                                                | Confidential instance configuration                                                                     |
| canIpForward               | bool                                                                                                | Whether the instance is allowed to send and receive packets with non-matching destination or source IPs |
| cpuPlatform                | string                                                                                              | CPU platform used by this instance                                                                      |
| created                    | time                                                                                                | Creation timestamp                                                                                      |
| deletionProtection         | bool                                                                                                | Whether the instance is protected against deletion                                                      |
| enableDisplay              | bool                                                                                                | Whether the instance has display enabled                                                                |
| guestAccelerators          | &#91;&#93;dict                                                                                      | Attached list of accelerator cards                                                                      |
| fingerprint                | string                                                                                              | Instance fingerprint                                                                                    |
| hostname                   | string                                                                                              | Hostname of the instance                                                                                |
| keyRevocationActionType    | string                                                                                              | KeyRevocationActionType of the instance                                                                 |
| labels                     | map[string]string                                                                                   | User-provided labels                                                                                    |
| lastStartTimestamp         | time                                                                                                | Last start timestamp                                                                                    |
| lastStopTimestamp          | time                                                                                                | Last stop timestamp                                                                                     |
| lastSuspendedTimestamp     | time                                                                                                | Last suspended timestamp                                                                                |
| metadata                   | map[string]string                                                                                   | Instance metadata                                                                                       |
| minCpuPlatform             | string                                                                                              | Minimum CPU platform for the VM instance                                                                |
| networkInterfaces          | &#91;&#93;dict                                                                                      | Network configurations for the instance                                                                 |
| privateIpv6GoogleAccess    | string                                                                                              | Private IPv6 google access type for the VM                                                              |
| reservationAffinity        | dict                                                                                                | Reservations from which this instance can consume                                                       |
| resourcePolicies           | &#91;&#93;string                                                                                    | Resource policies applied to this instance                                                              |
| physicalHostResourceStatus | string                                                                                              | Resource status for physical host                                                                       |
| scheduling                 | dict                                                                                                | Scheduling options                                                                                      |
| enableIntegrityMonitoring  | bool                                                                                                | Whether Shielded Instance integrity monitoring is enabled                                               |
| enableSecureBoot           | bool                                                                                                | Whether Shielded Instance secure boot is enabled                                                        |
| enableVtpm                 | bool                                                                                                | Whether Shielded Instance vTPM is enabled                                                               |
| startRestricted            | bool                                                                                                | Whether VM has been restricted from starting because Compute Engine has detected suspicious activity    |
| status                     | string                                                                                              | Instance status                                                                                         |
| statusMessage              | string                                                                                              | Human-readable explanation of the status                                                                |
| sourceMachineImage         | string                                                                                              | Source machine image                                                                                    |
| tags                       | &#91;&#93;string                                                                                    | Tags associated with this instance                                                                      |
| totalEgressBandwidthTier   | string                                                                                              | Network performance configuration                                                                       |
| serviceAccounts            | &#91;&#93;[gcp.project.computeService.serviceaccount](gcp.project.computeservice.serviceaccount.md) | Service accounts authorized for this instance                                                           |
| disks                      | &#91;&#93;[gcp.project.computeService.attachedDisk](gcp.project.computeservice.attacheddisk.md)     | Disks associated with the instance                                                                      |
| machineType                | [gcp.project.computeService.machineType](gcp.project.computeservice.machinetype.md)                 | Machine type                                                                                            |
| zone                       | [gcp.project.computeService.zone](gcp.project.computeservice.zone.md)                               | Instance zone                                                                                           |

**References**

- [Virtual machine instances](https://cloud.google.com/compute/docs/instances)
