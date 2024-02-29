---
title: vcd.vdcProvider
id: vcd.vdcProvider
sidebar_label: vcd.vdcProvider
displayed_sidebar: MQL
description: VMware Cloud Director provider VDC
---

# vcd.vdcProvider

**Description**

VMware Cloud Director provider VDC

**Fields**

| ID                      | TYPE              | DESCRIPTION                               |
| ----------------------- | ----------------- | ----------------------------------------- |
| name                    | string            | Name of the provider VDC                  |
| status                  | string            | Status of the provider VDC                |
| isBusy                  | bool              | Whether the provider VDC is busy          |
| isDeleted               | bool              | Whether the provider VDC is deleted       |
| isEnabled               | bool              | Whether the provider VDC is enabled       |
| cpuAllocationMhz        | int               | CPU allocation in MHz                     |
| cpuLimitMhz             | int               | CPU limit in MHz                          |
| cpuUsedMhz              | int               | CPU used in MHz                           |
| numberOfDatastores      | int               | Number of datastores                      |
| numberOfStorageProfiles | int               | Number of storage profiles                |
| numberOfVdcs            | int               | Number of VDCs                            |
| memoryAllocationMB      | int               | Memory allocation in MB                   |
| memoryLimitMB           | int               | Memory limit in MB                        |
| memoryUsedMB            | int               | Memory used in MB                         |
| storageAllocationMB     | int               | Storage allocation in MB                  |
| storageLimitMB          | int               | Storage limit in MB                       |
| storageUsedMB           | int               | Storage used in MB                        |
| cpuOverheadMhz          | int               | CPU overhead in MHz                       |
| storageOverheadMB       | int               | Storage overhead in MB                    |
| memoryOverheadMB        | int               | Memory overhead in MB                     |
| metadata                | map[string]string | Key-value pairs for provider VDC metadata |
