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

| ID               | TYPE                                                                    | DESCRIPTION                                                                                       |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------- |
| hostname         | string                                                                  | Hostname of the device                                                                            |
| interfaces       | &#91;&#93;[cisco.iosxe.interface](cisco.iosxe.interface.md)             | Interfaces                                                                                        |
| interfaceConfigs | &#91;&#93;[cisco.iosxe.interfaceConfig](cisco.iosxe.interfaceconfig.md) | Interface configurations obtained by running 'show running-config all                             | sec interface'    |
| aaa              | [cisco.iosxe.aaa](cisco.iosxe.aaa.md)                                   | AAA configuration                                                                                 |
| users            | &#91;&#93;[cisco.iosxe.user](cisco.iosxe.user.md)                       | Usernames and privilege level and password information., Obtained by running 'show running-config | include username' |
| vtyLines         | &#91;&#93;[cisco.iosxe.vtyLine](cisco.iosxe.vtyline.md)                 | The VTY lines, obtained by running 'show running-config                                           | sec vty'          |
| auxLine          | [cisco.iosxe.auxLineEntry](cisco.iosxe.auxlineentry.md)                 | The auxiliary (aux) line 0, obtained by running 'show running-config all                          | sec line aux 0'   |
| consoleLine      | [cisco.iosxe.consoleLineEntry](cisco.iosxe.consolelineentry.md)         | The console (con) line 0, obtained by running 'show running-config all                            | sec line con 0'   |
| accessLists      | &#91;&#93;[cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md) | The access-lists configured on the device, obtained by running 'show ip access-lists'.            |
| ip               | [cisco.iosxe.ipConf](cisco.iosxe.ipconf.md)                             | The IPv4 configuration obtained by running 'show running-config all                               | sec ip'           |
