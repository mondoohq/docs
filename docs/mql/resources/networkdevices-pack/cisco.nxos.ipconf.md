---
title: cisco.nxos.ipConf
id: cisco.nxos.ipConf
sidebar_label: cisco.nxos.ipConf
displayed_sidebar: MQL
description: Cisco NX-OS IP configuration
---

# cisco.nxos.ipConf

**Description**

Cisco NX-OS IP configuration

**Fields**

| ID                                 | TYPE                                                      | DESCRIPTION                                                                |
| ---------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| sourceRouteEnabled                 | bool                                                      | Whether source routing is enabled.                                         |
| dhcpSnoopingEnabled                | bool                                                      | Whether DHCP snooping is enabled.                                          |
| dhcpSnoopingVlanIds                | &#91;&#93;int                                             | The ids of VLAN interfaces for which DHCP snooping is enabled.             |
| dhcpSnoopingVlanInterfaces         | &#91;&#93;[cisco.nxos.interface](cisco.nxos.interface.md) | The VLAN interfaces for which DHCP snooping is enabled.                    |
| dhcpSnoopingDisabledVlanIds        | &#91;&#93;int                                             | The ids of VLAN interfaces for which DHCP snooping is explicitly disabled. |
| dhcpSnoopingDisabledVlanInterfaces | &#91;&#93;[cisco.nxos.interface](cisco.nxos.interface.md) | The VLAN interfaces for which DHCP snooping is explicitly disabled.        |
