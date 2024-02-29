---
title: gcp.project.kmsService.keyring.cryptokey
id: gcp.project.kmsService.keyring.cryptokey
sidebar_label: gcp.project.kmsService.keyring.cryptokey
displayed_sidebar: MQL
description: GCP KMS crypto key
---

# gcp.project.kmsService.keyring.cryptokey

**Supported platform**

- gcp

**Description**

GCP KMS crypto key

**Fields**

| ID                       | TYPE                                                                                                              | DESCRIPTION                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| resourcePath             | string                                                                                                            | Full resource path                                                                                 |
| name                     | string                                                                                                            | Crypto key name                                                                                    |
| primary                  | [gcp.project.kmsService.keyring.cryptokey.version](gcp.project.kmsservice.keyring.cryptokey.version.md)           | Primary version for encrypt to use for this crypto key                                             |
| purpose                  | string                                                                                                            | Crypto key purpose                                                                                 |
| created                  | time                                                                                                              | Creation timestamp                                                                                 |
| nextRotation             | time                                                                                                              | Time at which KMS will create a new version of this key and mark it as primary                     |
| rotationPeriod           | time                                                                                                              | Rotation period                                                                                    |
| versionTemplate          | dict                                                                                                              | Template describing the settings for new crypto key versions                                       |
| labels                   | map[string]string                                                                                                 | User-defined labels                                                                                |
| importOnly               | bool                                                                                                              | Whether this key may contain imported versions only                                                |
| destroyScheduledDuration | time                                                                                                              | Period of time that versions of this key spend in DESTROY_SCHEDULED state before being destroyed   |
| cryptoKeyBackend         | string                                                                                                            | Resource name of the backend environment where the key material for all crypto key versions reside |
| versions                 | &#91;&#93;[gcp.project.kmsService.keyring.cryptokey.version](gcp.project.kmsservice.keyring.cryptokey.version.md) | List of cryptokey versions                                                                         |
| iamPolicy                | &#91;&#93;[gcp.resourcemanager.binding](gcp.resourcemanager.binding.md)                                           | Crypto key IAM policy                                                                              |

**References**

- [Create a key ring](https://cloud.google.com/kms/docs/create-key-ring)
