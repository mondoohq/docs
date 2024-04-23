---
title: aws.iam.user
id: aws.iam.user
sidebar_label: aws.iam.user
displayed_sidebar: MQL
description: AWS IAM user
---

# aws.iam.user

**Supported platform**

- aws

**Description**

AWS IAM user

The `aws.iam.user` resource provides fields for assessing the configuration of individual IAM users. For usage, read the `aws.iam` resource documentation.

**Fields**

| ID               | TYPE                                            | DESCRIPTION                                           |
| ---------------- | ----------------------------------------------- | ----------------------------------------------------- |
| arn              | string                                          | ARN of the IAM user                                   |
| id               | string                                          | ID of the IAM user                                    |
| name             | string                                          | Name of the user                                      |
| createDate       | time                                            | Time when user was created                            |
| passwordLastUsed | time                                            | Time when password was last used                      |
| tags             | map[string]string                               | Tags for the IAM user                                 |
| policies         | &#91;&#93;string                                | List of inline policies attached to the user          |
| attachedPolicies | &#91;&#93;[aws.iam.policy](aws.iam.policy.md)   | List of managed policies attached to the user         |
| groups           | &#91;&#93;string                                | List of group ARNs that the user belongs to           |
| accessKeys       | &#91;&#93;dict                                  | List of access keys metadata associated with the user |
| loginProfile     | [aws.iam.loginProfile](aws.iam.loginprofile.md) | Login profile for the user                            |
