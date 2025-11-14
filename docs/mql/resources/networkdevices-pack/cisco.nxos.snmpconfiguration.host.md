---
title: cisco.nxos.snmpConfiguration.host
id: cisco.nxos.snmpConfiguration.host
sidebar_label: cisco.nxos.snmpConfiguration.host
displayed_sidebar: MQL
description: Cisco NX-OS SNMP Host configuration
---

# cisco.nxos.snmpConfiguration.host

**Description**

Cisco NX-OS SNMP Host configuration

**Fields**

| ID               | TYPE                                            | DESCRIPTION                                                                                    |
|------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------|
| address          | string                                          | The hostname, IPv4 or IPv6 address of the SNMP host.                                           |
| notificationType | string                                          | `traps` or `informs` notification type.                                                        |
| snmpVersion      | string                                          | The SNMP version used for notification messages.                                               |
| useVrf           | string                                          | Optional. Configures SNMP to use the selected VRF to communicate with the host receiver.       |
| filterVrf        | string                                          | Optional. Filters notifications to the notification host receiver based on the configured VRF. |
| srcInterfaceName | string                                          | Optional. The SNMP source interface name used for sending out SNMP notifications to this host. |
| srcInterface     | [cisco.nxos.interface](cisco.nxos.interface.md) | Optional. The SNMP source interface used for sending out SNMP notifications to this host.      |
| udpPort          | int                                             | Optional. The UDP port number used for sending out SNMP notifications to this host.            |

