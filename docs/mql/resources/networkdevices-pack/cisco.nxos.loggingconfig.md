---
title: cisco.nxos.loggingConfig
id: cisco.nxos.loggingConfig
sidebar_label: cisco.nxos.loggingConfig
displayed_sidebar: MQL
description: Cisco NX-OS Logging configuration
---

# cisco.nxos.loggingConfig

**Description**

Cisco NX-OS Logging configuration

**Fields**

| ID               | TYPE                                                                                | DESCRIPTION                                                                                                                                                                        |
|------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| timestampFormat  | string                                                                              | The timestamp attached to log messages. Can be `Seconds`, `MilliSeconds` or `MicroSeconds`.                                                                                        |
| consoleEnabled   | bool                                                                                | Whether console logging is enabled.                                                                                                                                                |
| consoleSeverity  | string                                                                              | Optional. When enabled, the severity level for console logging., Can be `emergencies`, `alerts`, `critical`, `errors`, `warnings`, `notifications`, `information` or `debugging`.  |
| monitorEnabled   | bool                                                                                | Whether monitor logging is enabled.                                                                                                                                                |
| monitorSeverity  | string                                                                              | Optional. When enabled, the severity level for monitor logging., Can be `emergencies`, `alerts`, `critical`, `errors`, `warnings`, `notifications`, `information` or `debugging`.  |
| linecardEnabled  | bool                                                                                | Whether linecard logging is enabled.                                                                                                                                               |
| linecardSeverity | string                                                                              | Optional. When enabled, the severity level for linecard logging., Can be `emergencies`, `alerts`, `critical`, `errors`, `warnings`, `notifications`, `information` or `debugging`. |
| serverEnabled    | bool                                                                                | Whether remote logging is enabled.                                                                                                                                                 |
| remoteServers    | &#91;&#93;[cisco.nxos.loggingConfig.server](cisco.nxos.loggingconfig.server.md)     | The logging server configuration.                                                                                                                                                  |
| facilities       | &#91;&#93;[cisco.nxos.loggingConfig.facility](cisco.nxos.loggingconfig.facility.md) | The logging facilities.                                                                                                                                                            |
| srcInterfaceName | string                                                                              | Optional. The name of the interface used as the source for outgoing packets sent to remote logging servers.                                                                        |
| srcInterface     | [cisco.nxos.interface](cisco.nxos.interface.md)                                     | Optional. The interface used as the source for outgoing packets sent to remote logging servers.                                                                                    |

