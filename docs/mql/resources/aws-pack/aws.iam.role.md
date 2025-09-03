---
title: aws.iam.role
id: aws.iam.role
sidebar_label: aws.iam.role
displayed_sidebar: MQL
description: AWS IAM role
---

# aws.iam.role

**Supported platform**

- aws

**Description**

AWS IAM role

The `aws.iam.role` resource provides fields for assessing the configuration of individual IAM Roles. For usage, read the `aws.iam` resource documentation.

**Fields**

| ID                       | TYPE              | DESCRIPTION                                                         |
| ------------------------ | ----------------- | ------------------------------------------------------------------- |
| arn                      | string            | ARN of the role                                                     |
| id                       | string            | ID of the role                                                      |
| name                     | string            | Name of the role                                                    |
| description              | string            | Description of the role                                             |
| tags                     | map[string]string | Tags associated with the role                                       |
| createdAt                | time              | Time when the role was created                                      |
| assumeRolePolicyDocument | dict              | Policy document that grants an entity permission to assume the role |
