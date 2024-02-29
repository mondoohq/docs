---
title: gcp.project.kmsService.keyring.cryptokey.version.externalProtectionLevelOptions
id: gcp.project.kmsService.keyring.cryptokey.version.externalProtectionLevelOptions
sidebar_label: gcp.project.kmsService.keyring.cryptokey.version.externalProtectionLevelOptions
displayed_sidebar: MQL
description: GCP KMS crypto key version external protection level options
---

# gcp.project.kmsService.keyring.cryptokey.version.externalProtectionLevelOptions

**Supported platform**

- gcp

**Description**

GCP KMS crypto key version external protection level options

**Fields**

| ID                   | TYPE   | DESCRIPTION                                                            |
| -------------------- | ------ | ---------------------------------------------------------------------- |
| cryptoKeyVersionName | string | Crypto key version name                                                |
| externalKeyUri       | string | URI for an external resource that the crypto key version represents    |
| ekmConnectionKeyPath | string | Path to the external key material on the EKM when using EKM connection |

**References**

- [Create a key ring](https://cloud.google.com/kms/docs/create-key-ring)
