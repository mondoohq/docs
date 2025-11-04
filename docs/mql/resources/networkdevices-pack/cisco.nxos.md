---
title: cisco.nxos
id: cisco.nxos
sidebar_label: cisco.nxos
displayed_sidebar: MQL
description: Cisco NX-OS
---

# cisco.nxos

**Description**

Cisco NX-OS

**Fields**

| ID                          | TYPE                                                                                                | DESCRIPTION                                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| hostname                    | string                                                                                              | Hostname of the device                                                                                  |
| interfaces                  | &#91;&#93;[cisco.nxos.interface](cisco.nxos.interface.md)                                           | Interfaces                                                                                              |
| users                       | &#91;&#93;[cisco.nxos.user](cisco.nxos.user.md)                                                     | Usernames and user credential information., Obtained by running `show running-config                    | include username`                                                                          |
| features                    | &#91;&#93;[cisco.nxos.feature](cisco.nxos.feature.md)                                               | Features, Command: `show feature`                                                                       |
| runTacacsServers            | &#91;&#93;[cisco.nxos.runTacacsServer](cisco.nxos.runtacacsserver.md)                               | Running Config TACACS+ servers, Obtained by running `show running-config tacacs+                        | include tacacs-server`                                                                     |
| runRadiusServers            | &#91;&#93;[cisco.nxos.runRadiusServer](cisco.nxos.runradiusserver.md)                               | Running Config RADIUS servers, Obtained by running `show running-config radius                          | include radius-server`                                                                     |
| runAaaGroupsServerTacacs    | &#91;&#93;[cisco.nxos.runAaaGroupServerTacacs](cisco.nxos.runaaagroupservertacacs.md)               | Running Config AAA Group Server TACACS+ configuration, Obtained by running `show running-config tacacs+ | section "aaa group server"`                                                                |
| runAaaGroupsServerRadius    | &#91;&#93;[cisco.nxos.runAaaGroupServerRadius](cisco.nxos.runaaagroupserverradius.md)               | Running Config AAA Group Server RADIUS configuration, Obtained by running `show running-config radius   | section "aaa group server"`                                                                |
| runAaaAuthenticationLogin   | &#91;&#93;[cisco.nxos.runAaaAuthenticationLoginEntry](cisco.nxos.runaaaauthenticationloginentry.md) | Running Config AAA authentication login method lists, Obtained by running `show running-config aaa      | include "authentication login"`                                                            |
| copp                        | [cisco.nxos.coppConfig](cisco.nxos.coppconfig.md)                                                   | Control Plane Policing (CoPP) configuration, Obtained by running `show running-config                   | include copp`                                                                              |
| eigrp                       | &#91;&#93;[cisco.nxos.routerEigrpEntry](cisco.nxos.routereigrpentry.md)                             | Running Config router EIGRP configuration, Obtained by running `show running-config eigrp`              |
| ospf                        | &#91;&#93;[cisco.nxos.routerOspfEntry](cisco.nxos.routerospfentry.md)                               | Running Config router OSPF configuration, Obtained by running `show running-config ospf`                |
| hsrp                        | &#91;&#93;[cisco.nxos.interfaceHsrpEntry](cisco.nxos.interfacehsrpentry.md)                         | Running Config HSRP configuration, Obtained by running `show running-config hsrp`                       |
| schedulerConfig             | [cisco.nxos.scheduler](cisco.nxos.scheduler.md)                                                     | Scheduler configuration, Obtained by running `show scheduler config`                                    |
| fips                        | [cisco.nxos.fipsConfig](cisco.nxos.fipsconfig.md)                                                   | FIPS configuration, Obtained by running `show fips status`                                              |
| boot                        | [cisco.nxos.bootConfig](cisco.nxos.bootconfig.md)                                                   | Boot configuration, Obtained by running `show running-config                                            | include boot`                                                                              |
| ssh                         | [cisco.nxos.sshConfig](cisco.nxos.sshconfig.md)                                                     | SSH configuration, Obtained by running `show running-config                                             | include ssh`                                                                               |
| logging                     | [cisco.nxos.loggingConfig](cisco.nxos.loggingconfig.md)                                             | Logging configuration, Obtained by running `show logging info`                                          |
| bgp                         | &#91;&#93;[cisco.nxos.bgpRouterConfig](cisco.nxos.bgprouterconfig.md)                               | Running Config BGP configuration, Obtained by running `show running-config bgp`                         |
| cdpAll                      | &#91;&#93;[cisco.nxos.cdpAllEntry](cisco.nxos.cdpallentry.md)                                       | CDP status for all interfaces, Obtained by running `show cdp all`                                       |
| runInterfaces               | &#91;&#93;[cisco.nxos.runInterface](cisco.nxos.runinterface.md)                                     | Running Config Interfaces, Obtained by running `show running-config interface`                          |
| acl                         | &#91;&#93;[cisco.nxos.accessControlList](cisco.nxos.accesscontrollist.md)                           | Access Control Lists (ACLs), Obtained by running `show access-lists`                                    |
| passwordStrengthCheck       | bool                                                                                                | Password Strength-Check status, Obtained by running `show password strength-check`                      |
| encryptionService           | [cisco.nxos.encryptionServiceConfig](cisco.nxos.encryptionserviceconfig.md)                         | Encryption service configuration, Obtained by running `show encryption service stat`                    |
| userPassphraseTimevalues    | &#91;&#93;[cisco.nxos.passphraseTimevalues](cisco.nxos.passphrasetimevalues.md)                     | Users Passphrase configuration, Obtained by running `show running-config                                | include passphrase`, Note: if user exists but absent from output - default values are used |
| passphraseDefaultTimevalues | [cisco.nxos.passphraseTimevalues](cisco.nxos.passphrasetimevalues.md)                               | User Passphrase default time values configuration, Obtained by running `show userpassphrase timevalues` |
