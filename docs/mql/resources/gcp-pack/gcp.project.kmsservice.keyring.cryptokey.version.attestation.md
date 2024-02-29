---
title: gcp.project.kmsService.keyring.cryptokey.version.attestation
id: gcp.project.kmsService.keyring.cryptokey.version.attestation
sidebar_label: gcp.project.kmsService.keyring.cryptokey.version.attestation
displayed_sidebar: MQL
description: GCP KMS crypto key version attestation
---

# gcp.project.kmsService.keyring.cryptokey.version.attestation

**Supported platform**

- gcp

**Description**

GCP KMS crypto key version attestation

**Fields**

| ID                   | TYPE                                                                                                                                                                | DESCRIPTION                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| cryptoKeyVersionName | string                                                                                                                                                              | Crypto key version name                               |
| format               | string                                                                                                                                                              | Format of the attestation data                        |
| certificateChains    | [gcp.project.kmsService.keyring.cryptokey.version.attestation.certificatechains](gcp.project.kmsservice.keyring.cryptokey.version.attestation.certificatechains.md) | Certificate chains needed to validate the attestation |

**References**

- [Create a key ring](https://cloud.google.com/kms/docs/create-key-ring)
