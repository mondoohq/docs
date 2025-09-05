---
title: aws.iam.instanceProfile
id: aws.iam.instanceProfile
sidebar_label: aws.iam.instanceProfile
displayed_sidebar: MQL
description: AWS IAM instance profile
---

# aws.iam.instanceProfile

**Supported platform**

- aws

**Description**

AWS IAM instance profile

**Fields**

| ID                  | TYPE                                      | DESCRIPTION                                |
| ------------------- | ----------------------------------------- | ------------------------------------------ |
| arn                 | string                                    | ARN of the instance profile                |
| createdAt           | time                                      | Time when the instance profile was created |
| instanceProfileId   | string                                    | ID of the IAM instance profile             |
| instanceProfileName | string                                    | Name of the instance profile               |
| tags                | map[string]string                         | Tags for the instance profile              |
| iamRoles            | &#91;&#93;[aws.iam.role](aws.iam.role.md) | Role attached to the instanceProfile       |
