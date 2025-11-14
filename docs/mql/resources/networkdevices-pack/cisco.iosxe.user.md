---
title: cisco.iosxe.user
id: cisco.iosxe.user
sidebar_label: cisco.iosxe.user
displayed_sidebar: MQL
description: Cisco IOS XE User configuration
---

# cisco.iosxe.user

**Description**

Cisco IOS XE User configuration

**Fields**

| ID             | TYPE   | DESCRIPTION                                                                                                                        |
|----------------|--------|------------------------------------------------------------------------------------------------------------------------------------|
| username       | string | Username                                                                                                                           |
| privilegeLevel | int    | The privilege level for the user. Ranges from 1 to 15.                                                                             |
| credentialType | string | Credential type, this can be either 'password' or 'secret'                                                                         |
| encryptionType | string | The encryption type, used for the credential. For passwords this, can be '0' or '7', for secrets this can be '0', '5', '8' or '9'. |
| credential     | string | The encoded credential value for the user.                                                                                         |

