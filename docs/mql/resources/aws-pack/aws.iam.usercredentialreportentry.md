---
title: aws.iam.usercredentialreportentry
id: aws.iam.usercredentialreportentry
sidebar_label: aws.iam.usercredentialreportentry
displayed_sidebar: MQL
description: Entry in AWS IAM credential report
---

# aws.iam.usercredentialreportentry

**Supported platform**

- aws

**Description**

Entry in AWS IAM credential report

The `aws.iam.credentialreportentry` resource provides fields for assessing the metadata for individual IAM Credential Report entries. For usage, read the `aws.iam` resource documentation.

**Init**

aws.iam.usercredentialreportentry(properties map[string]string)

**Fields**

| ID                        | TYPE                            | DESCRIPTION                                  |
| ------------------------- | ------------------------------- | -------------------------------------------- |
| properties                | map[string]string               | Properties on the IAM user credential report |
| arn                       | string                          | ARN for the credential report                |
| accessKey1Active          | bool                            | Whether the access key is active             |
| accessKey1LastRotated     | time                            | Time when key was last rotated               |
| accessKey1LastUsedDate    | time                            | Time when key was last used                  |
| accessKey1LastUsedRegion  | string                          | Region in which the key was last used        |
| accessKey1LastUsedService | string                          | Service that last used the key               |
| accessKey2Active          | bool                            | Whether the access key is active             |
| accessKey2LastRotated     | time                            | Time when key was last rotated               |
| accessKey2LastUsedDate    | time                            | Time when key was last used                  |
| accessKey2LastUsedRegion  | string                          | Region in which the key was last used        |
| accessKey2LastUsedService | string                          | Service that last used the key               |
| cert1Active               | bool                            | Whether the cert is active                   |
| cert1LastRotated          | time                            | Time when the cert was last rotated          |
| cert2Active               | bool                            | Whether the cert is active                   |
| cert2LastRotated          | time                            | Time when the cert was last rotated          |
| mfaActive                 | bool                            | Whether MFA is active in the account         |
| passwordEnabled           | bool                            | Whether passwords are enabled                |
| passwordLastChanged       | time                            | Time when the password was last changed      |
| passwordLastUsed          | time                            | Time when the password was last used         |
| passwordNextRotation      | time                            | Next time when the password should rotate    |
| user                      | [aws.iam.user](aws.iam.user.md) | IAM user                                     |
| createdAt                 | time                            | Time when user was created                   |
