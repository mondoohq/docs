---
title: cisco.nxos.ntpConfiguration
id: cisco.nxos.ntpConfiguration
sidebar_label: cisco.nxos.ntpConfiguration
displayed_sidebar: MQL
description: Cisco NX-OS NTP Configuration
---

# cisco.nxos.ntpConfiguration

**Description**

Cisco NX-OS NTP Configuration

**Fields**

| ID                  | TYPE                                                                                  | DESCRIPTION                                         |
| ------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| servers             | &#91;&#93;[cisco.nxos.ntpConfiguration.server](cisco.nxos.ntpconfiguration.server.md) | The list of NTP servers.                            |
| sourceInterfaceName | string                                                                                | The NTP source interface name used for NTP packets. |
| sourceInterface     | [cisco.nxos.interface](cisco.nxos.interface.md)                                       | The NTP source interface used for NTP packets.      |
