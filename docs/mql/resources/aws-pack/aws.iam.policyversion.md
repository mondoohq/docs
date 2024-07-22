---
title: aws.iam.policyversion
id: aws.iam.policyversion
sidebar_label: aws.iam.policyversion
displayed_sidebar: MQL
description: AWS IAM policy version
---

# aws.iam.policyversion

**Supported platform**

- aws

**Description**

AWS IAM policy version

The `aws.iam.policyversion` resource provides fields for assessing the metadata for IAM Policy versions. For usage, read the `aws.iam` resource documentation.

**Fields**

| ID               | TYPE   | DESCRIPTION                                        |
| ---------------- | ------ | -------------------------------------------------- |
| arn              | string | ARN of the policy version                          |
| versionId        | string | Version ID                                         |
| isDefaultVersion | bool   | Whether this version is the policy default version |
| document         | dict   | JSON statements for this policy version            |
| createDate       | time   | Time when this policy version was created          |
