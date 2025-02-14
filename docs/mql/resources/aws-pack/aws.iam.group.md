---
title: aws.iam.group
id: aws.iam.group
sidebar_label: aws.iam.group
displayed_sidebar: MQL
description: AWS IAM group
---

# aws.iam.group

**Supported platform**

- aws

**Description**

AWS IAM group

The `aws.iam.group` resource provides fields for assessing the configuration of IAM Groups. For usage, read the `aws.iam` resource documentation.

**Fields**

| ID         | TYPE             | DESCRIPTION                                                |
| ---------- | ---------------- | ---------------------------------------------------------- |
| arn        | string           | ARN of the group                                           |
| id         | string           | ID of the group                                            |
| name       | string           | Name of the group                                          |
| createDate | time             | Time when the group was created: deprecated, use createdAt |
| createdAt  | time             | Time when the group was created                            |
| usernames  | &#91;&#93;string | List of usernames that belong to the group                 |
