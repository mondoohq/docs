---
title: cisco.nxos.snmpConfiguration.settings
id: cisco.nxos.snmpConfiguration.settings
sidebar_label: cisco.nxos.snmpConfiguration.settings
displayed_sidebar: MQL
description: Cisco NX-OS SNMP Settings
---

# cisco.nxos.snmpConfiguration.settings

**Description**

Cisco NX-OS SNMP Settings

**Fields**

| ID                      | TYPE                                            | DESCRIPTION                                                                    |
|-------------------------|-------------------------------------------------|--------------------------------------------------------------------------------|
| encryptionEnforced      | bool                                            | Whether SNMPv3 encryption is enforced globally for all users.                  |
| trapsSrcInterfaceName   | string                                          | The SNMP source interface name used for sending out SNMP trap notifications.   |
| trapsSrcInterface       | [cisco.nxos.interface](cisco.nxos.interface.md) | The SNMP source interface used for sending out SNMP trap notifications.        |
| informsSrcInterfaceName | string                                          | The SNMP source interface name used for sending out SNMP inform notifications. |
| informsSrcInterface     | [cisco.nxos.interface](cisco.nxos.interface.md) | The SNMP source interface used for sending out SNMP inform notifications.      |

