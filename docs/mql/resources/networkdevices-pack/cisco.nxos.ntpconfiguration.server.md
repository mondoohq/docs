---
title: cisco.nxos.ntpConfiguration.server
id: cisco.nxos.ntpConfiguration.server
sidebar_label: cisco.nxos.ntpConfiguration.server
displayed_sidebar: MQL
description: Cisco NX-OS NTP Server configuration
---

# cisco.nxos.ntpConfiguration.server

**Description**

Cisco NX-OS NTP Server configuration

**Fields**

| ID      | TYPE   | DESCRIPTION                                                             |
|---------|--------|-------------------------------------------------------------------------|
| address | string | The hostname, IPv4 or IPv6 address of the NTP server.                   |
| prefer  | bool   | Whether to prefer this NTP server.                                      |
| keyId   | int    | Optional. The NTP authentication key ID.                                |
| maxPoll | int    | The NTP maximum poll interval in seconds to a power of 2. Default is 6. |
| minPoll | int    | The NTP minimum poll interval in seconds to a power of 2. Default is 6. |
| useVrf  | string | Optional. The VRF to use for NTP communication with this server.        |

