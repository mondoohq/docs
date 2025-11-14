---
title: cisco.nxos.interfaceHsrpEntry
id: cisco.nxos.interfaceHsrpEntry
sidebar_label: cisco.nxos.interfaceHsrpEntry
displayed_sidebar: MQL
description: Cisco NX-OS HSRP configuration per interface
---

# cisco.nxos.interfaceHsrpEntry

**Description**

Cisco NX-OS HSRP configuration per interface

**Fields**

| ID            | TYPE                                                                                            | DESCRIPTION                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| interfaceName | string                                                                                          | The name of the interface.                                                            |
| hsrpInterface | [cisco.nxos.interface](cisco.nxos.interface.md)                                                 | The interface associated to the HSRP configuration.                                   |
| version       | int                                                                                             | The HSRP version (1 or 2). MD5 authentication is only applied when version 2 is used. |
| groups        | &#91;&#93;[cisco.nxos.interfaceHsrpEntry.hsrpGroup](cisco.nxos.interfacehsrpentry.hsrpgroup.md) | The HSRP groups configured on this interface.                                         |
