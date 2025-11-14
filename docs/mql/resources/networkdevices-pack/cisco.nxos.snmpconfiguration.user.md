---
title: cisco.nxos.snmpConfiguration.user
id: cisco.nxos.snmpConfiguration.user
sidebar_label: cisco.nxos.snmpConfiguration.user
displayed_sidebar: MQL
description: Cisco NX-OS SNMP User configuration
---

# cisco.nxos.snmpConfiguration.user

**Description**

Cisco NX-OS SNMP User configuration

**Fields**

| ID                 | TYPE                                                                                                                              | DESCRIPTION                                      |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| username           | string                                                                                                                            | The SNMP username.                               |
| encryptionEnforced | bool                                                                                                                              | Whether encryption is enforced for this user.    |
| authSettings       | &#91;&#93;[cisco.nxos.snmpConfiguration.user.authenticationSettings](cisco.nxos.snmpconfiguration.user.authenticationsettings.md) | The SNMP authentication and encryption settings. |

