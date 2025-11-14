---
title: cisco.iosxe.passwordEncryption
id: cisco.iosxe.passwordEncryption
sidebar_label: cisco.iosxe.passwordEncryption
displayed_sidebar: MQL
description: Cisco IOS XE Password encryption configuration
---

# cisco.iosxe.passwordEncryption

**Description**

Cisco IOS XE Password encryption configuration

**Fields**

| ID             | TYPE   | DESCRIPTION                                                                                                                                                      |
|----------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type           | string | The type of password encryption. This can be either 'password' or 'secret'                                                                                       |
| encryptionType | string | The encryption type. May not be present if no encryption is enabled.                                                                                             |
| value          | string | The encryption value. Depending on the encryption type, this can be either plain text or an encrypted value. It can also be a reversible or non-reversible hash. |
| level          | int    | Optional, the level this encryption applies to.                                                                                                                  |

