---
title: vcd.vdc
id: vcd.vdc
sidebar_label: vcd.vdc
displayed_sidebar: MQL
description: VMware Cloud Director organization VDC resource
---

# vcd.vdc

**Description**

VMware Cloud Director organization VDC resource

**Fields**

| ID               | TYPE   | DESCRIPTION                                                |
| ---------------- | ------ | ---------------------------------------------------------- |
| id               | string | ID of the VDC                                              |
| name             | string | Name of the VDC                                            |
| status           | int    | Creation status of the VDC (0=creating, 1=ready, -1=error) |
| description      | string | Optional description                                       |
| allocationModel  | string | Used allocation model                                      |
| nicQuota         | int    | Maximum number of virtual NICs allowed (0=unlimited)       |
| networkQuota     | int    | Maximum number of network objects allowed (0=unlimited)    |
| usedNetworkCount | int    | Number of networks in use for/by this VDC                  |
| vmQuota          | int    | Quota of VMs that can be created in this VDC               |
| isEnabled        | bool   | Whether VDC is enabled                                     |
