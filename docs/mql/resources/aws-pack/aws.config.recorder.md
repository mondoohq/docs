---
title: aws.config.recorder
id: aws.config.recorder
sidebar_label: aws.config.recorder
displayed_sidebar: MQL
description: AWS config recorder
---

# aws.config.recorder

**Supported platform**

- aws

**Description**

AWS config recorder

The `aws.config.recorder` resource provides fields representing an individual AWS Config recorder configured within an account. For usage, read the `aws.config` resource documentation.

**Fields**

| ID                         | TYPE             | DESCRIPTION                                                                               |
| -------------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| name                       | string           | Name of the recorder                                                                      |
| roleArn                    | string           | ARN of the IAM role used to describe the AWS resources associated with the account        |
| allSupported               | bool             | Whether the recorder records config changes for every supported type of regional resource |
| includeGlobalResourceTypes | bool             | Whether the recorder records all supported types of global resources                      |
| recording                  | bool             | Whether the recorder is currently recording                                               |
| lastStatus                 | string           | Last (previous) status of the recorder                                                    |
| region                     | string           | Region for the recorder                                                                   |
| resourceTypes              | &#91;&#93;string | Whether the recorder records specific resource types                                      |
