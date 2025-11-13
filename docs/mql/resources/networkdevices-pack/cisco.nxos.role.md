---
title: cisco.nxos.role
id: cisco.nxos.role
sidebar_label: cisco.nxos.role
displayed_sidebar: MQL
description: Cisco NX-OS Role configuration
---

# cisco.nxos.role

**Description**

Cisco NX-OS Role configuration

**Fields**

| ID          | TYPE                                                      | DESCRIPTION                        |
| ----------- | --------------------------------------------------------- | ---------------------------------- |
| name        | string                                                    | The name of the SNMP group.        |
| description | string                                                    | The description of the SNMP group. |
| rules       | &#91;&#93;[cisco.nxos.role.rule](cisco.nxos.role.rule.md) | The rules associated to this role. |
