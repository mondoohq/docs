---
title: cisco.nxos.lineConfig
id: cisco.nxos.lineConfig
sidebar_label: cisco.nxos.lineConfig
displayed_sidebar: MQL
description: Cisco NX-OS Line Configuration
---

# cisco.nxos.lineConfig

**Description**

Cisco NX-OS Line Configuration

**Fields**

| ID                 | TYPE                                                            | DESCRIPTION                                                                                                    |
| ------------------ | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| type               | string                                                          | Line type (e.g. vty, console)                                                                                  |
| execTimeout        | int                                                             | Executive timeout in minutes                                                                                   |
| sessionLimit       | int                                                             | Session limit (max number of sessions)                                                                         |
| accessClassInName  | string                                                          | The name of the access control list (ACL) applied inbound on this line.                                        |
| accessClassIn      | [cisco.nxos.accessControlList](cisco.nxos.accesscontrollist.md) | The access control list (ACL) applied inbound on this line. Obtained by using the 'accessClassInName' field.   |
| accessClassOutName | string                                                          | The name of the access control list (ACL) applied outbound on this line.                                       |
| accessClassOut     | [cisco.nxos.accessControlList](cisco.nxos.accesscontrollist.md) | The access control list (ACL) applied outbound on this line. Obtained by using the 'accessClassOutName' field. |
