---
title: aws.iam.policy
id: aws.iam.policy
sidebar_label: aws.iam.policy
displayed_sidebar: MQL
description: AWS IAM policy
---

# aws.iam.policy

**Supported platform**

- aws

**Description**

AWS IAM policy

The `aws.iam.policy` resource provides fields for assessing the configuration of individual IAM Policies. For usage, read the `aws.iam` resource documentation.

**Fields**

| ID              | TYPE                                                        | DESCRIPTION                                                                            |
| --------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| arn             | string                                                      | ARN of the policy                                                                      |
| policyId        | string                                                      | ID of the policy                                                                       |
| name            | string                                                      | Name of the policy                                                                     |
| description     | string                                                      | Description of the policy                                                              |
| isAttachable    | bool                                                        | Whether the policy can be attached                                                     |
| attachmentCount | int                                                         | Number of principal entities (users, groups, and roles) that the policy is attached to |
| createdAt       | time                                                        | Time when the policy was created                                                       |
| updatedAt       | time                                                        | Time when the policy was updated                                                       |
| scope           | string                                                      | Scope of the policy                                                                    |
| versions        | &#91;&#93;[aws.iam.policyversion](aws.iam.policyversion.md) | List of versions for the policy                                                        |
| defaultVersion  | [aws.iam.policyversion](aws.iam.policyversion.md)           | Default version of the policy                                                          |
| attachedUsers   | &#91;&#93;[aws.iam.user](aws.iam.user.md)                   | List of users attached to the policy                                                   |
| attachedRoles   | &#91;&#93;[aws.iam.role](aws.iam.role.md)                   | List of roles attached to the policy                                                   |
| attachedGroups  | &#91;&#93;[aws.iam.group](aws.iam.group.md)                 | List of groups attached to the policy                                                  |
