---
title: cisco.nxos.loggingConfig.server
id: cisco.nxos.loggingConfig.server
sidebar_label: cisco.nxos.loggingConfig.server
displayed_sidebar: MQL
description: Cisco NX-OS Logging Remote Server configuration
---

# cisco.nxos.loggingConfig.server

**Description**

Cisco NX-OS Logging Remote Server configuration

**Fields**

| ID       | TYPE   | DESCRIPTION                                                                                                                                                   |
|----------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| severity | string | The severity level for this logging server., Can be `emergencies`, `alerts`, `critical`, `errors`, `warnings`, `notifications`, `information` or `debugging`. |
| address  | string | The hostname, IPv4 or IPv6 address of the logging server.                                                                                                     |
| port     | int    | The port number used to connect to the logging server.                                                                                                        |
| vrf      | string | The VRF to use for the logging server connection.                                                                                                             |
| facility | string | The logging facility to use for the logging server connection.                                                                                                |

