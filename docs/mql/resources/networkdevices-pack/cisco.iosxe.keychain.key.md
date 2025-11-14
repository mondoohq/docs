---
title: cisco.iosxe.keyChain.key
id: cisco.iosxe.keyChain.key
sidebar_label: cisco.iosxe.keyChain.key
displayed_sidebar: MQL
description: Cisco IOS XE key resource from within a key chain.
---

# cisco.iosxe.keyChain.key

**Description**

Cisco IOS XE key resource from within a key chain.

**Fields**

| ID             | TYPE                                                                      | DESCRIPTION                                                                                          |
|----------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| keychain       | string                                                                    | The name of the key chain this key belongs to.                                                       |
| id             | int                                                                       | The identifier for the key.                                                                          |
| encryptionType | string                                                                    | Optional. The type of encryption of the key string.                                                  |
| keyString      | string                                                                    | Optional. The key string value.                                                                      |
| acceptLifetime | [cisco.iosxe.keyChain.key.lifetime](cisco.iosxe.keychain.key.lifetime.md) | Optional. The time period during which a key is considered valid for accepting authentication.       |
| sendLifetime   | [cisco.iosxe.keyChain.key.lifetime](cisco.iosxe.keychain.key.lifetime.md) | Optional. The time period during which a key is considered valid for sending routing update packets. |

