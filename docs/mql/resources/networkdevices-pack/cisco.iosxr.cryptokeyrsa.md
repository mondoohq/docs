---
title: cisco.iosxr.cryptoKeyRsa
id: cisco.iosxr.cryptoKeyRsa
sidebar_label: cisco.iosxr.cryptoKeyRsa
displayed_sidebar: MQL
description: Cisco IOS XR Router public key from `show crypto key mypubkey rsa`
---

# cisco.iosxr.cryptoKeyRsa

**Description**

Cisco IOS XR Router public key from `show crypto key mypubkey rsa`

**Fields**

| ID           | TYPE   | DESCRIPTION                           |
| ------------ | ------ | ------------------------------------- |
| label        | string | Key label                             |
| type         | string | Key type (e.g., RSA)                  |
| modulusSize  | int    | Key modulus size in bits (e.g., 2048) |
| creationDate | string | Key creation date                     |
