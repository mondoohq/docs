---
title: cisco.nxos.interface
id: cisco.nxos.interface
sidebar_label: cisco.nxos.interface
displayed_sidebar: MQL
description: Cisco NX-OS Network interface resource
---

# cisco.nxos.interface

**Description**

Cisco NX-OS Network interface resource

**Fields**

| ID                        | TYPE   | DESCRIPTION                                   |
| ------------------------- | ------ | --------------------------------------------- |
| name                      | string | Interface name/identifier                     |
| description               | string | Interface description                         |
| adminState                | string | Administrative state (up/down)                |
| linkStatus                | string | Link status (up/down)                         |
| hardwareType              | string | Hardware type (e.g., VLAN, Ethernet, Tunnel)  |
| encapsulation             | string | Encapsulation type (e.g., 802.1Q Virtual LAN) |
| macAddress                | string | MAC address                                   |
| bia                       | string | Burned-in address                             |
| ipAddress                 | string | IP address with subnet mask                   |
| mtu                       | string | Maximum transmission unit                     |
| bandwidth                 | string | Interface bandwidth                           |
| speed                     | string | Interface speed                               |
| duplex                    | string | Duplex setting (full/half)                    |
| vlanId                    | string | VLAN ID for VLAN interfaces                   |
| inputRate                 | string | Input bit rate                                |
| outputRate                | string | Output bit rate                               |
| inputPackets              | string | Total input packets                           |
| outputPackets             | string | Total output packets                          |
| inputErrors               | string | Input error count                             |
| outputErrors              | string | Output error count                            |
| mode                      | string | Interface mode                                |
| switchportEnabled         | bool   | Whether the switchport is enabled.            |
| switchportMonitorEnabled  | bool   | Whether the switchport monitor is enabled.    |
| switchportOperationalMode | string | The operational mode of the switchport.       |
