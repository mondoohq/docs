---
title: aws.ssm.parameter
id: aws.ssm.parameter
sidebar_label: aws.ssm.parameter
displayed_sidebar: MQL
description: Amazon SSM parameter
---

# aws.ssm.parameter

**Supported platform**

- aws

**Description**

Amazon SSM parameter

**Fields**

| ID               | TYPE                          | DESCRIPTION                                                        |
| ---------------- | ----------------------------- | ------------------------------------------------------------------ |
| allowedPattern   | string                        | Allowed pattern for the parameter                                  |
| arn              | string                        | ARN for the parameter                                              |
| region           | string                        | Region for the parameter                                           |
| dataType         | string                        | Data type for the parameter                                        |
| description      | string                        | Description for the parameter                                      |
| kmsKey           | [aws.kms.key](aws.kms.key.md) | KMS key associated with the parameter (if any)                     |
| lastModifiedDate | time                          | Date when the parameter was last modified                          |
| name             | string                        | Name of the parameter                                              |
| tier             | string                        | Tier of the parameter (Standard, Advanced, or Intelligent-Tiering) |
| type             | string                        | Type of the parameter (String, StringList, or SecureString)        |
| version          | int                           | Version of the parameter                                           |
