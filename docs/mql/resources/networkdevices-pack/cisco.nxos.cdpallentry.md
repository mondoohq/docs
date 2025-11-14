---
title: cisco.nxos.cdpAllEntry
id: cisco.nxos.cdpAllEntry
sidebar_label: cisco.nxos.cdpAllEntry
displayed_sidebar: MQL
description: Cisco NX-OS CDP status entry for interface
---

# cisco.nxos.cdpAllEntry

**Description**

Cisco NX-OS CDP status entry for interface

**Fields**

| ID            | TYPE                                  | DESCRIPTION                             |
|---------------|---------------------------------------|-----------------------------------------|
| interface     | [cisco.interface](cisco.interface.md) | Interface name                          |
| status        | string                                | Interface status (up/down)              |
| enabled       | bool                                  | CDP enabled flag on this interface      |
| enabledGlobal | bool                                  | CDP globally enabled flag               |
| refreshTime   | int                                   | Refresh time in seconds (if configured) |
| holdTime      | int                                   | Hold time in seconds (if configured)    |

