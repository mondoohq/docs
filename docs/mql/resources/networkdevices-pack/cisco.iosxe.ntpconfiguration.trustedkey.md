---
title: cisco.iosxe.ntpConfiguration.trustedKey
id: cisco.iosxe.ntpConfiguration.trustedKey
sidebar_label: cisco.iosxe.ntpConfiguration.trustedKey
displayed_sidebar: MQL
description: Cisco IOS XE NTP trusted key
---

# cisco.iosxe.ntpConfiguration.trustedKey

**Description**

Cisco IOS XE NTP trusted key

**Fields**

| ID          | TYPE                                                                                                          | DESCRIPTION                                                                                                                                                          |
|-------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| keyId       | int                                                                                                           | The key number of the authentication key to be trusted                                                                                                               |
| keyRangeEnd | int                                                                                                           | The end range of authentication keys to be trusted, if a range is configured.                                                                                        |
| keys        | &#91;&#93;[cisco.iosxe.ntpConfiguration.authenticationKey](cisco.iosxe.ntpconfiguration.authenticationkey.md) | The keys that are configured as trusted. If there's a key range, all keys in the range are included., If only a single key is configured, only that key is included. |

