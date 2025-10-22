---
title: aws.kms.key
id: aws.kms.key
sidebar_label: aws.kms.key
displayed_sidebar: MQL
description: AWS Key Management Service (KMS) key
---

# aws.kms.key

**Supported platform**

- aws

**Description**

AWS Key Management Service (KMS) key

The `aws.kms.key` resource provides fields for assessing the configuration of individual KMS keys. For usage, read the `aws.kms` resource documentation.

**Fields**

| ID                 | TYPE              | DESCRIPTION                     |
| ------------------ | ----------------- | ------------------------------- |
| id                 | string            | Unique identifier for the key   |
| arn                | string            | ARN of the key                  |
| region             | string            | Region the key lives in         |
| keyRotationEnabled | bool              | Whether key rotation is enabled |
| metadata           | dict              | Metadata for the key            |
| tags               | map[string]string | Tags for the KMS key            |
| aliases            | &#91;&#93;string  | Aliases for the KMS key         |
