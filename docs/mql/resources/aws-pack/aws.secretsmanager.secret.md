---
title: aws.secretsmanager.secret
id: aws.secretsmanager.secret
sidebar_label: aws.secretsmanager.secret
displayed_sidebar: MQL
description: AWS Secrets Manager secret
---

# aws.secretsmanager.secret

**Supported platform**

- aws

**Description**

AWS Secrets Manager secret

**Fields**

| ID               | TYPE              | DESCRIPTION                                        |
| ---------------- | ----------------- | -------------------------------------------------- |
| arn              | string            | ARN for the secret                                 |
| createdAt        | time              | Creation date of the secret                        |
| description      | string            | Description of the secret                          |
| lastChangedDate  | time              | The last date the secret was changed               |
| lastRotatedDate  | time              | The last date the secret was automatically rotated |
| name             | string            | Name of the secret                                 |
| nextRotationDate | time              | The date of the next secret rotation               |
| primaryRegion    | string            | The primary region of the secret                   |
| rotationEnabled  | bool              | Whether rotation is enabled for the secret         |
| tags             | map[string]string | Tags for the secret                                |
