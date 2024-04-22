---
title: gcp.project.kmsService.keyring.cryptokey.version.attestation.certificatechains
id: gcp.project.kmsService.keyring.cryptokey.version.attestation.certificatechains
sidebar_label: gcp.project.kmsService.keyring.cryptokey.version.attestation.certificatechains
displayed_sidebar: MQL
description: Google Cloud (GCP) KMS crypto key version attestation certificate chains
---

# gcp.project.kmsService.keyring.cryptokey.version.attestation.certificatechains

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) KMS crypto key version attestation certificate chains

**Fields**

| ID                   | TYPE             | DESCRIPTION                                                         |
| -------------------- | ---------------- | ------------------------------------------------------------------- |
| cryptoKeyVersionName | string           | Crypto key version name                                             |
| caviumCerts          | &#91;&#93;string | Cavium certificate chain corresponding to the attestation           |
| googleCardCerts      | &#91;&#93;string | Google card certificate chain corresponding to the attestation      |
| googlePartitionCerts | &#91;&#93;string | Google partition certificate chain corresponding to the attestation |

**References**

- [Create a key ring](https://cloud.google.com/kms/docs/create-key-ring)
