---
title: cisco.nxos.snmpConfiguration
id: cisco.nxos.snmpConfiguration
sidebar_label: cisco.nxos.snmpConfiguration
displayed_sidebar: MQL
description: Cisco NX-OS SNMP Configuration
---

# cisco.nxos.snmpConfiguration

**Description**

Cisco NX-OS SNMP Configuration

**Fields**

| ID          | TYPE                                                                                          | DESCRIPTION                                                      |
|-------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| settings    | [cisco.nxos.snmpConfiguration.settings](cisco.nxos.snmpconfiguration.settings.md)             | SNMP settings.                                                   |
| users       | &#91;&#93;[cisco.nxos.snmpConfiguration.user](cisco.nxos.snmpconfiguration.user.md)           | SNMP Users configuration.                                        |
| communities | &#91;&#93;[cisco.nxos.snmpConfiguration.community](cisco.nxos.snmpconfiguration.community.md) | SNMP Communities configuration.                                  |
| hosts       | &#91;&#93;[cisco.nxos.snmpConfiguration.host](cisco.nxos.snmpconfiguration.host.md)           | SNMP Hosts configuration.                                        |
| traps       | &#91;&#93;[cisco.nxos.snmpConfiguration.trap](cisco.nxos.snmpconfiguration.trap.md)           | SNMP Traps configuration., Obtained by running `show snmp trap`. |

