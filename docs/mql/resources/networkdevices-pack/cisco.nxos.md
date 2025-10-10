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

| ID         | TYPE                                                      | DESCRIPTION                                                                          |
| ---------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------------- |
| hostname   | string                                                    | Hostname of the device                                                               |
| interfaces | &#91;&#93;[cisco.nxos.interface](cisco.nxos.interface.md) | Interfaces                                                                           |
| users      | &#91;&#93;[cisco.nxos.user](cisco.nxos.user.md)           | Usernames and user credential information., Obtained by running 'show running-config | include username' |
