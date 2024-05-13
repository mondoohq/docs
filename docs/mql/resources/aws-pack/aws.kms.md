---
title: aws.kms
id: aws.kms
sidebar_label: aws.kms
displayed_sidebar: MQL
description: AWS Key Management Service (KMS)
---

# aws.kms

**Supported platform**

- aws

**Description**

AWS Key Management Service (KMS)

Use the `aws.kms` resource to assess the configuration of AWS KMS keys.

**Fields**

| ID   | TYPE                                    | DESCRIPTION                                                                                |
| ---- | --------------------------------------- | ------------------------------------------------------------------------------------------ |
| keys | &#91;&#93;[aws.kms.key](aws.kms.key.md) | A list of all customer master keys (CMKs) in the caller's AWS account (across all regions) |

**Examples**

Ensure rotation for customer created CMKs is enabled

```coffeescript
aws.kms.keys.where( metadata['KeyState'] == "Enabled" ).all( keyRotationEnabled == true )
```
