---
title: vcd.vm
id: vcd.vm
sidebar_label: vcd.vm
displayed_sidebar: MQL
description: VMware Cloud Director VM resource
---

# vcd.vm

**Description**

VMware Cloud Director VM resource

**Fields**

| ID                       | TYPE   | DESCRIPTION                                         |
| ------------------------ | ------ | --------------------------------------------------- |
| id                       | string | ID for the standalone VM in the VDC                 |
| name                     | string | Name of the standalone VM in the VDC                |
| containerName            | string | The name of the containing vApp or vApp template    |
| containerID              | string | vApp or vApp template ID                            |
| ownerId                  | string | Owner ID of the VM                                  |
| ownerName                | string | Owner name of the VM                                |
| isDeleted                | bool   | Whether the entity is deleted                       |
| guestOs                  | string | Guest operating system                              |
| numberOfCpus             | int    | Number of CPUs                                      |
| memoryMB                 | int    | Memory in MB                                        |
| status                   | string | Status                                              |
| networkName              | string | Network name                                        |
| ipAddress                | string | IP Address of the VM on the primary network         |
| isBusy                   | bool   | Whether the VM is busy                              |
| isDeployed               | bool   | Whether the VM is deployed                          |
| isPublished              | bool   | Whether the VM is in a published catalog            |
| catalogName              | string | Catalog name                                        |
| hardwareVersion          | int    | Hardware version                                    |
| vmToolsStatus            | string | VM tools status                                     |
| isInMaintenanceMode      | bool   | Whether the VM is in maintenance mode               |
| isAutoNature             | bool   | Whether the parent vApp is a managed vApp           |
| storageProfileName       | string | Storage profile name                                |
| gcStatus                 | string | GC status of this VM                                |
| isComputePolicyCompliant | bool   | Whether the VM is compliant with the compute policy |
| encrypted                | bool   | Whether the VM is encrypted                         |
| totalStorageAllocatedMb  | int    | Total storage allocation in MB                      |
| isExpired                | bool   | Whether the VM's storage lease has expired          |
| hostName                 | string | ESXi host for this VM                               |
