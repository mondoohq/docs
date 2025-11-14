---
title: cisco.nxos.clockConfiguration
id: cisco.nxos.clockConfiguration
sidebar_label: cisco.nxos.clockConfiguration
displayed_sidebar: MQL
description: Cisco NX-OS Clock Configuration
---

# cisco.nxos.clockConfiguration

**Description**

Cisco NX-OS Clock Configuration

**Fields**

| ID                   | TYPE   | DESCRIPTION                                                                                        |
| -------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| timezone             | string | Optional. The timezone name (e.g., UTC, PST, EST)., Default is UTC.                                |
| offsetHours          | int    | Optional. The timezone offset from UTC in hours. Can be both positive and negative., Default is 0. |
| offsetMinutes        | int    | Optional. The timezone offset from UTC in minutes. Can only be positive., Default is 0.            |
| summerTimeConfigured | bool   | Whether daylight saving time (DST) is configured.                                                  |
