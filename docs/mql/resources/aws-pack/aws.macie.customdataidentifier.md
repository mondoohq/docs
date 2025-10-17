---
title: aws.macie.customDataIdentifier
id: aws.macie.customDataIdentifier
sidebar_label: aws.macie.customDataIdentifier
displayed_sidebar: MQL
description: Amazon Macie custom data identifier
---

# aws.macie.customDataIdentifier

**Supported platform**

- aws

**Description**

Amazon Macie custom data identifier

**Fields**

| ID          | TYPE              | DESCRIPTION                                   |
| ----------- | ----------------- | --------------------------------------------- |
| id          | string            | Unique ID of the custom data identifier       |
| arn         | string            | ARN of the custom data identifier             |
| name        | string            | Name of the custom data identifier            |
| description | string            | Description of the custom data identifier     |
| regex       | string            | Regular expression pattern for the identifier |
| keywords    | &#91;&#93;string  | Keywords for the identifier                   |
| createdAt   | time              | Date and time when the identifier was created |
| tags        | map[string]string | Tags for the identifier                       |
