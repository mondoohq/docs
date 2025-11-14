---
title: cisco.nxos.bootConfig
id: cisco.nxos.bootConfig
sidebar_label: cisco.nxos.bootConfig
displayed_sidebar: MQL
description: Cisco NX-OS Boot configuration
---

# cisco.nxos.bootConfig

**Description**

Cisco NX-OS Boot configuration

**Fields**

| ID          | TYPE   | DESCRIPTION                                                                                                                        |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| bootOrder   | string | The current boot order set on the networking device. Can be `bootflash` or `pxe bootflash`., When not set, `bootflash` is implied. |
| poapEnabled | bool   | Whether Power-On Auto Provisioning (POAP) is enabled.                                                                              |
| imageUri    | string | The bootflash NX-OS image URI.                                                                                                     |
