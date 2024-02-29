---
title: vcd.vdcGroup
id: vcd.vdcGroup
sidebar_label: vcd.vdcGroup
displayed_sidebar: MQL
description: VMware Cloud Director NSX-T VDC groups
---

# vcd.vdcGroup

**Description**

VMware Cloud Director NSX-T VDC groups

**Fields**

| ID                         | TYPE   | DESCRIPTION                                                                               |
| -------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| name                       | string | Name of VDC group                                                                         |
| description                | string | Description of the VDC group                                                              |
| localEgress                | bool   | Whether local egress is enabled for a universal router belonging to a universal VDC group |
| status                     | string | Status of the VDC group                                                                   |
| type                       | string | VDC group type (LOCAL or UNIVERSAL)                                                       |
| universalNetworkingEnabled | bool   | Whether a VDC group router has been created                                               |
| dfwEnabled                 | bool   | Whether distributed firewall is enabled for the VDC group                                 |
