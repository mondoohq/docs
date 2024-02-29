---
title: gcp.project.kmsService.keyring.cryptokey.version
id: gcp.project.kmsService.keyring.cryptokey.version
sidebar_label: gcp.project.kmsService.keyring.cryptokey.version
displayed_sidebar: MQL
description: GCP KMS crypto key version
---

# gcp.project.kmsService.keyring.cryptokey.version

**Supported platform**

- gcp

**Description**

GCP KMS crypto key version

**Fields**

| ID                             | TYPE                                                                                                                                                                  | DESCRIPTION                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| resourcePath                   | string                                                                                                                                                                | Full resource path                                                                     |
| name                           | string                                                                                                                                                                | Crypto key version name                                                                |
| state                          | string                                                                                                                                                                | Crypto key version's current state                                                     |
| protectionLevel                | string                                                                                                                                                                | Protection level describing how crypto operations perform with this crypto key version |
| algorithm                      | string                                                                                                                                                                | Algorithm that the crypto key version supports                                         |
| attestation                    | [gcp.project.kmsService.keyring.cryptokey.version.attestation](gcp.project.kmsservice.keyring.cryptokey.version.attestation.md)                                       | Statement generated and signed by HSM at key creation time                             |
| created                        | time                                                                                                                                                                  | Time created                                                                           |
| generated                      | time                                                                                                                                                                  | Time generated                                                                         |
| destroyed                      | time                                                                                                                                                                  | Time destroyed                                                                         |
| destroyEventTime               | time                                                                                                                                                                  | Destroy event timestamp                                                                |
| importJob                      | string                                                                                                                                                                | Name of the import job used in the most recent import of the crypto key version        |
| importTime                     | time                                                                                                                                                                  | Time at which this crypto key version's key material was imported                      |
| importFailureReason            | string                                                                                                                                                                | The root cause of an import failure                                                    |
| externalProtectionLevelOptions | [gcp.project.kmsService.keyring.cryptokey.version.externalProtectionLevelOptions](gcp.project.kmsservice.keyring.cryptokey.version.externalprotectionleveloptions.md) | Additional fields for configuring external protection level                            |
| reimportEligible               | bool                                                                                                                                                                  | Whether the crypto key version is eligible for reimport                                |

**References**

- [Create a key ring](https://cloud.google.com/kms/docs/create-key-ring)
