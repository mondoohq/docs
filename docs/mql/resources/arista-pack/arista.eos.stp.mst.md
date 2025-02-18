---
title: arista.eos.stp.mst
id: arista.eos.stp.mst
sidebar_label: arista.eos.stp.mst
displayed_sidebar: MQL
description: Arista Multiple Spanning Tree Protocol (MSTP) resource instance
---

# arista.eos.stp.mst

**Supported platform**

- arista-eos

**Description**

Arista Multiple Spanning Tree Protocol (MSTP) resource instance

**Fields**

| ID                 | TYPE                                                                    | DESCRIPTION                                                |
| ------------------ | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| instanceId         | string                                                                  | MST instance number                                        |
| name               | string                                                                  | MST instance name                                          |
| protocol           | string                                                                  | SPT protocol                                               |
| bridge             | dict                                                                    | Detailed bridge information (Forward Delay, MAC, Priority) |
| rootBridge         | dict                                                                    | Root bridge information                                    |
| regionalRootBridge | dict                                                                    | Regional root bridge information                           |
| interfaces         | &#91;&#93;[arista.eos.spt.mstInterface](arista.eos.spt.mstinterface.md) | Interfaces on the specified MST instances                  |
