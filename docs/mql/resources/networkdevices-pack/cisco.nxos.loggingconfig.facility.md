---
title: cisco.nxos.loggingConfig.facility
id: cisco.nxos.loggingConfig.facility
sidebar_label: cisco.nxos.loggingConfig.facility
displayed_sidebar: MQL
description: Cisco NX-OS Logging Facility configuration
---

# cisco.nxos.loggingConfig.facility

**Description**

Cisco NX-OS Logging Facility configuration

**Fields**

| ID              | TYPE   | DESCRIPTION                                                                                                                                                             |
|-----------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name            | string | The name of the facility (software component) generating logs.                                                                                                          |
| defaultSeverity | string | The default severity level for this logging facility., Can be `emergencies`, `alerts`, `critical`, `errors`, `warnings`, `notifications`, `information` or `debugging`. |
| currentSeverity | string | The current severity level for this logging facility., Can be `emergencies`, `alerts`, `critical`, `errors`, `warnings`, `notifications`, `information` or `debugging`. |

