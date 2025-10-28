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

| ID                        | TYPE                                                                                                | DESCRIPTION                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------- |
| hostname                  | string                                                                                              | Hostname of the device                                                                                  |
| interfaces                | &#91;&#93;[cisco.nxos.interface](cisco.nxos.interface.md)                                           | Interfaces                                                                                              |
| users                     | &#91;&#93;[cisco.nxos.user](cisco.nxos.user.md)                                                     | Usernames and user credential information., Obtained by running `show running-config                    | include username`               |
| features                  | &#91;&#93;[cisco.nxos.feature](cisco.nxos.feature.md)                                               | Features, Command: `show feature`                                                                       |
| runTacacsServers          | &#91;&#93;[cisco.nxos.runTacacsServer](cisco.nxos.runtacacsserver.md)                               | Running Config TACACS+ servers, Obtained by running `show running-config tacacs+                        | include tacacs-server`          |
| runRadiusServers          | &#91;&#93;[cisco.nxos.runRadiusServer](cisco.nxos.runradiusserver.md)                               | Running Config RADIUS servers, Obtained by running `show running-config radius                          | include radius-server`          |
| runAaaGroupsServerTacacs  | &#91;&#93;[cisco.nxos.runAaaGroupServerTacacs](cisco.nxos.runaaagroupservertacacs.md)               | Running Config AAA Group Server TACACS+ configuration, Obtained by running `show running-config tacacs+ | section "aaa group server"`     |
| runAaaGroupsServerRadius  | &#91;&#93;[cisco.nxos.runAaaGroupServerRadius](cisco.nxos.runaaagroupserverradius.md)               | Running Config AAA Group Server RADIUS configuration, Obtained by running `show running-config radius   | section "aaa group server"`     |
| runAaaAuthenticationLogin | &#91;&#93;[cisco.nxos.runAaaAuthenticationLoginEntry](cisco.nxos.runaaaauthenticationloginentry.md) | Running Config AAA authentication login method lists, Obtained by running `show running-config aaa      | include "authentication login"` |
| copp                      | [cisco.nxos.coppConfig](cisco.nxos.coppconfig.md)                                                   | Control Plane Policing (CoPP) configuration, Obtained by running `show running-config                   | include copp`                   |
| eigrp                     | &#91;&#93;[cisco.nxos.routerEigrpEntry](cisco.nxos.routereigrpentry.md)                             | Running Config router EIGRP configuration, Obtained by running `show running-config eigrp`              |
| schedulerConfig           | [cisco.nxos.scheduler](cisco.nxos.scheduler.md)                                                     | Scheduler configuration, Obtained by running `show scheduler config`                                    |
