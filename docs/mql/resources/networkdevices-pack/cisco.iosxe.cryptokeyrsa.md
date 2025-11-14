---
title: cisco.iosxe.cryptoKeyRsa
id: cisco.iosxe.cryptoKeyRsa
sidebar_label: cisco.iosxe.cryptoKeyRsa
displayed_sidebar: MQL
description: Cisco IOS XR Router public key from `show crypto key mypubkey rsa`
---

# cisco.iosxe.cryptoKeyRsa

**Description**

Cisco IOS XR Router public key from `show crypto key mypubkey rsa`

**Fields**

| ID           | TYPE             | DESCRIPTION                           |
|--------------|------------------|---------------------------------------|
| label        | string           | Key label                             |
| keyType      | string           | Key type (e.g., RSA)                  |
| modulusSize  | int              | Key modulus size in bits (e.g., 2048) |
| creationDate | time             | Key creation date                     |
| usage        | string           | Key usage (e.g. General purpose key)  |
| keyData      | &#91;&#93;string | The raw key data                      |

