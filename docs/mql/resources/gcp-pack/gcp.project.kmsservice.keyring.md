---
title: gcp.project.kmsService.keyring
id: gcp.project.kmsService.keyring
sidebar_label: gcp.project.kmsService.keyring
displayed_sidebar: MQL
description: Google Cloud (GCP) KMS keyring
---

# gcp.project.kmsService.keyring

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) KMS keyring

**Fields**

| ID           | TYPE                                                                                              | DESCRIPTION                               |
| ------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| projectId    | string                                                                                            | Project ID                                |
| resourcePath | string                                                                                            | Full resource path                        |
| name         | string                                                                                            | Keyring name                              |
| created      | time                                                                                              | Time created                              |
| location     | string                                                                                            | Keyring location                          |
| cryptokeys   | &#91;&#93;[gcp.project.kmsService.keyring.cryptokey](gcp.project.kmsservice.keyring.cryptokey.md) | List of cryptokeys in the current keyring |

**References**

- [Create a key ring](https://cloud.google.com/kms/docs/create-key-ring)
