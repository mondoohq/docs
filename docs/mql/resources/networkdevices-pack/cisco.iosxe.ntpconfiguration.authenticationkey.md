---
title: cisco.iosxe.ntpConfiguration.authenticationKey
id: cisco.iosxe.ntpConfiguration.authenticationKey
sidebar_label: cisco.iosxe.ntpConfiguration.authenticationKey
displayed_sidebar: MQL
description: Cisco IOS XE NTP authentication key
---

# cisco.iosxe.ntpConfiguration.authenticationKey

**Description**

Cisco IOS XE NTP authentication key

**Fields**

| ID             | TYPE   | DESCRIPTION                                       |
| -------------- | ------ | ------------------------------------------------- |
| keyId          | int    | The identifier of the key.                        |
| algorithm      | string | The algorithm. Currently only 'md5' is supported. |
| key            | string | The key value.                                    |
| encryptionType | string | Optional, the authentication key encryption type  |
