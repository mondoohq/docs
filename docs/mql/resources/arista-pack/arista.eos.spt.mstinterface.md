---
title: arista.eos.spt.mstInterface
id: arista.eos.spt.mstInterface
sidebar_label: arista.eos.spt.mstInterface
displayed_sidebar: MQL
description: Multiple Spanning Tree Protocol (MSTP) information for a specified interface
---

# arista.eos.spt.mstInterface

**Supported platform**

- arista-eos

**Description**

Multiple Spanning Tree Protocol (MSTP) information for a specified interface

**Fields**

| ID                   | TYPE   | DESCRIPTION                                                                                     |
| -------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| id                   | string |                                                                                                 |
| mstInstanceId        | string | MST instance number                                                                             |
| name                 | string | Name of STP instance                                                                            |
| priority             | int    | Interface priority                                                                              |
| linkType             | string | Link type                                                                                       |
| state                | string | Interface state                                                                                 |
| cost                 | int    | Cost value for the interface                                                                    |
| role                 | string | Port role                                                                                       |
| inconsistentFeatures | dict   | Interface inconsistent features                                                                 |
| portNumber           | int    | Port Number                                                                                     |
| isEdgePort           | bool   | Whether the interface is an edge port                                                           |
| detail               | dict   | Details about Designated root, Designated bridge and Designated port                            |
| boundaryType         | string | Interface Boundary Type                                                                         |
| counters             | dict   | Number of BPDU transactions on this interface                                                   |
| features             | dict   | Interface features: BPDU filter, specifies the BPDU reception rate & link type of the interface |

**Examples**

Verify the Spanning-Tree Version

```coffee
arista.eos.stp.mstInstances {
 protocol == "mstp"
}
```
