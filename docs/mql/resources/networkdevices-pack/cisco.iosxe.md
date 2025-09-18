---
title: cisco.iosxe
id: cisco.iosxe
sidebar_label: cisco.iosxe
displayed_sidebar: MQL
description: Cisco IOS XE
---

# cisco.iosxe

**Description**

Cisco IOS XE

**Fields**

| ID         | TYPE                                                        | DESCRIPTION                                                                                       |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------- |
| hostname   | string                                                      | Hostname of the device                                                                            |
| interfaces | &#91;&#93;[cisco.iosxe.interface](cisco.iosxe.interface.md) | Interfaces                                                                                        |
| aaa        | [cisco.iosxe.aaa](cisco.iosxe.aaa.md)                       | AAA configuration                                                                                 |
| users      | &#91;&#93;[cisco.iosxe.user](cisco.iosxe.user.md)           | usernames and privilege level and password information., Obtained by running 'show running-config | include username' |
