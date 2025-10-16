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

| ID               | TYPE                                                                      | DESCRIPTION                                                                                           |
| ---------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------- |
| hostname         | string                                                                    | Hostname of the device                                                                                |
| domainNames      | &#91;&#93;[cisco.iosxe.domainName](cisco.iosxe.domainname.md)             | The default domain names configured on the device, obtained by running 'show running-config           | include domain name'. |
| interfaces       | &#91;&#93;[cisco.iosxe.interface](cisco.iosxe.interface.md)               | Interfaces                                                                                            |
| interfaceConfigs | &#91;&#93;[cisco.iosxe.interfaceConfig](cisco.iosxe.interfaceconfig.md)   | Interface configurations obtained by running 'show running-config all                                 | sec interface'        |
| ssh              | [cisco.iosxe.sshConfig](cisco.iosxe.sshconfig.md)                         | SSH configuration obtained by running `show ip ssh`                                                   |
| cdp              | [cisco.iosxe.cdpConfig](cisco.iosxe.cdpconfig.md)                         | Cisco Discovery Protocol (CDP) configuration obtained by running 'show cdp'                           |
| dhcp             | [cisco.iosxe.dhcpConfig](cisco.iosxe.dhcpconfig.md)                       | Dynamic Host Configuration Protocol (DHCP) configuration obtained by running 'show running-config all | include dhcp'         |
| bootp            | [cisco.iosxe.bootpConfig](cisco.iosxe.bootpconfig.md)                     | Bootstrap protocol (BOOTP) configuration obtained by running 'show running-config all                 | include bootp'        |
| aaa              | [cisco.iosxe.aaa](cisco.iosxe.aaa.md)                                     | AAA configuration                                                                                     |
| users            | &#91;&#93;[cisco.iosxe.user](cisco.iosxe.user.md)                         | Usernames and privilege level and password information., Obtained by running 'show running-config     | include username'     |
| vtyLines         | &#91;&#93;[cisco.iosxe.vtyLine](cisco.iosxe.vtyline.md)                   | The VTY lines, obtained by running 'show running-config                                               | sec vty'              |
| auxLine          | [cisco.iosxe.auxLineEntry](cisco.iosxe.auxlineentry.md)                   | The auxiliary (aux) line 0, obtained by running 'show running-config all                              | sec line aux 0'       |
| consoleLine      | [cisco.iosxe.consoleLineEntry](cisco.iosxe.consolelineentry.md)           | The console (con) line 0, obtained by running 'show running-config all                                | sec line con 0'       |
| accessLists      | &#91;&#93;[cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md)   | The access-lists configured on the device, obtained by running 'show ip access-lists'.                |
| ip               | [cisco.iosxe.ipConf](cisco.iosxe.ipconf.md)                               | The IPv4 configuration obtained by running 'show running-config all                                   | sec ip'               |
| keychains        | &#91;&#93;[cisco.iosxe.keyChain](cisco.iosxe.keychain.md)                 | The key chains configured on the device, obtained by running 'show running-config                     | sec key chain'        |
| configuration    | [cisco.iosxe.config](cisco.iosxe.config.md)                               | Obtains the device's configuration which holds various global settings.                               |
| routerEigrp      | &#91;&#93;[cisco.iosxe.routerEigrpEntry](cisco.iosxe.routereigrpentry.md) | The running config router EIGRP configurations obtained by running 'show running-config all           | sec router eigrp'     |
| routerOspf       | &#91;&#93;[cisco.iosxe.routerOspfEntry](cisco.iosxe.routerospfentry.md)   | The running config router OSPF configuration obtained by running 'show running-config all             | sec router ospf'      |
| cryptoKeysRsa    | &#91;&#93;[cisco.iosxe.cryptoKeyRsa](cisco.iosxe.cryptokeyrsa.md)         | The RSA public keys configured on the device, obtained by running 'show crypto key mypubkey rsa'      |
| snmp             | [cisco.iosxe.snmpConfiguration](cisco.iosxe.snmpconfiguration.md)         | The SNMP configuration on the device.                                                                 |
| ntp              | [cisco.iosxe.ntpConfiguration](cisco.iosxe.ntpconfiguration.md)           | The NTP configuration on the device.                                                                  |
| logging          | [cisco.iosxe.loggingConfiguration](cisco.iosxe.loggingconfiguration.md)   | The logging configuration on the device.                                                              |
