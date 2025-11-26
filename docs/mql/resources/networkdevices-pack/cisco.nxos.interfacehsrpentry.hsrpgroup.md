---
title: cisco.nxos.interfaceHsrpEntry.hsrpGroup
id: cisco.nxos.interfaceHsrpEntry.hsrpGroup
sidebar_label: cisco.nxos.interfaceHsrpEntry.hsrpGroup
displayed_sidebar: MQL
description: Cisco NX-OS HSRP Group configuration
---

# cisco.nxos.interfaceHsrpEntry.hsrpGroup

**Description**

Cisco NX-OS HSRP Group configuration

**Fields**

| ID                        | TYPE   | DESCRIPTION                                                                             |
| ------------------------- | ------ | --------------------------------------------------------------------------------------- |
| groupId                   | int    | The HSRP group number.                                                                  |
| protocol                  | string | The protocol of this HSRP group (IPv4 or IPv6).                                         |
| md5AuthenticationKey      | string | Optional. The MD5 authentication key for this HSRP group.                               |
| md5AuthenticationKeyType  | int    | Optional. The MD5 authentication key encryption type. 0 for plaintext, 7 for encrypted. |
| md5AuthenticationKeychain | string | Optional. The MD5 authentication keychain for this HSRP group.                          |
| authenticationText        | string | Optional. The authentication text.                                                      |
