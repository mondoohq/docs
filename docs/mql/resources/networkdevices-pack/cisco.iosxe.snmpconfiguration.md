---
title: cisco.iosxe.snmpConfiguration
id: cisco.iosxe.snmpConfiguration
sidebar_label: cisco.iosxe.snmpConfiguration
displayed_sidebar: MQL
description: Cisco IOS XE SNMP configuration
---

# cisco.iosxe.snmpConfiguration

**Description**

Cisco IOS XE SNMP configuration

**Fields**

| ID                | TYPE                                                                                              | DESCRIPTION                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| enabled           | bool                                                                                              | Whether SNMP is enabled on the device, obtained by running 'show snmp community''                                         |
| communities       | &#91;&#93;[cisco.iosxe.snmpCommunity](cisco.iosxe.snmpcommunity.md)                               | The SNMP communities configured on the device, obtained by running 'show running-config \| include snmp-server community' |
| notificationTraps | &#91;&#93;[cisco.iosxe.snmpConfiguration.trapConfig](cisco.iosxe.snmpconfiguration.trapconfig.md) | The SNMP notification traps, obtained by running 'show running-config \| include snmp-server'                             |
| notificationHosts | &#91;&#93;[cisco.iosxe.snmpConfiguration.hostConfig](cisco.iosxe.snmpconfiguration.hostconfig.md) | The hosts configured to receive SNMP notifications, obtained by running 'show running-config \| include snmp-server'      |
| groups            | &#91;&#93;[cisco.iosxe.snmpConfiguration.group](cisco.iosxe.snmpconfiguration.group.md)           | The SNMP groups configured on the device, obtained by running 'show snmp group'                                           |
| users             | &#91;&#93;[cisco.iosxe.snmpConfiguration.user](cisco.iosxe.snmpconfiguration.user.md)             | The SNMP users configured on the device, obtained by running 'show snmp user'                                             |
