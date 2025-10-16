---
title: cisco.iosxe.ntpConfiguration.server
id: cisco.iosxe.ntpConfiguration.server
sidebar_label: cisco.iosxe.ntpConfiguration.server
displayed_sidebar: MQL
description: Cisco IOS XE NTP server
---

# cisco.iosxe.ntpConfiguration.server

**Description**

Cisco IOS XE NTP server

**Fields**

| ID      | TYPE   | DESCRIPTION                                                                                       |
| ------- | ------ | ------------------------------------------------------------------------------------------------- |
| address | string | The address (either host or IP address) of the NTP server.                                        |
| keyId   | int    | Optional, the key associated with the NTP server.                                                 |
| vrf     | string | Optional, the VPN routing and forwarding (VRF) instance that the NTP peer should use for routing. |
| version | int    | Optional, the NTP version number.                                                                 |
| maxPoll | int    | Optional, the maximum time interval, in seconds, between client requests sent to the server.      |
| minPoll | int    | Optional, the minimum time interval, in seconds, between client requests sent to the server.      |
| burst   | bool   | Whether burst mode is enabled.                                                                    |
| iburst  | bool   | Whether initial burst mode is enabled.                                                            |
