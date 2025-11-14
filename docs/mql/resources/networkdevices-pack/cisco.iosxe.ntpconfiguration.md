---
title: cisco.iosxe.ntpConfiguration
id: cisco.iosxe.ntpConfiguration
sidebar_label: cisco.iosxe.ntpConfiguration
displayed_sidebar: MQL
description: Cisco IOS XE NTP configuration
---

# cisco.iosxe.ntpConfiguration

**Description**

Cisco IOS XE NTP configuration

**Fields**

| ID                  | TYPE                                                                                                          | DESCRIPTION                                                                                                                        |
|---------------------|---------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| authenticate        | bool                                                                                                          | Whether NTP authentication is enabled.                                                                                             |
| sourceInterfaceName | string                                                                                                        | The interface that acts as a source interface for NTP packets, if configured.                                                      |
| sourceInterface     | [cisco.iosxe.interface](cisco.iosxe.interface.md)                                                             | The source interface that acts as a source interface for NTP packets, if configured. Retrieved by using the 'sourceInterfaceName'. |
| authenticationKeys  | &#91;&#93;[cisco.iosxe.ntpConfiguration.authenticationKey](cisco.iosxe.ntpconfiguration.authenticationkey.md) | The list of NTP authentication keys.                                                                                               |
| trustedKeys         | &#91;&#93;[cisco.iosxe.ntpConfiguration.trustedKey](cisco.iosxe.ntpconfiguration.trustedkey.md)               | The list of trusted NTP keys.                                                                                                      |
| servers             | &#91;&#93;[cisco.iosxe.ntpConfiguration.server](cisco.iosxe.ntpconfiguration.server.md)                       | The list of NTP servers.                                                                                                           |

