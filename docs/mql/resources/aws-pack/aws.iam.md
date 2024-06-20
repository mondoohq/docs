---
title: aws.iam
id: aws.iam
sidebar_label: aws.iam
displayed_sidebar: MQL
description: AWS service to create and manage permissions for users and groups
---

# aws.iam

**Supported platform**

- aws

**Description**

AWS service to create and manage permissions for users and groups

Use the `aws.iam` resource to assess the configuration of the AWS IAM service. The resource provides a list of `aws.iam.user` resources representing GuardDuty Detectors deployed across all enabled regions.

**Fields**

| ID                    | TYPE                                                                                | DESCRIPTION                                             |
| --------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------- |
| users                 | &#91;&#93;[aws.iam.user](aws.iam.user.md)                                           | List of IAM users in the account                        |
| roles                 | &#91;&#93;[aws.iam.role](aws.iam.role.md)                                           | List of IAM roles in the account                        |
| groups                | &#91;&#93;[aws.iam.group](aws.iam.group.md)                                         | List of IAM groups in the account                       |
| policies              | &#91;&#93;[aws.iam.policy](aws.iam.policy.md)                                       | List of IAM policies in the account                     |
| attachedPolicies      | &#91;&#93;[aws.iam.policy](aws.iam.policy.md)                                       | List of IAM policies attached to a user, role, or group |
| credentialReport      | &#91;&#93;[aws.iam.usercredentialreportentry](aws.iam.usercredentialreportentry.md) | IAM credential report                                   |
| accountPasswordPolicy | dict                                                                                | IAM account password policy for the account             |
| accountSummary        | map[string]int                                                                      | IAM account summary                                     |
| virtualMfaDevices     | &#91;&#93;[aws.iam.virtualmfadevice](aws.iam.virtualmfadevice.md)                   | List of virtual mfs devices associated with the account |
| serverCertificates    | &#91;&#93;dict                                                                      | List of server certificates stored in IAM               |

**Examples**

Return a list of `aws.iam.user` resources representing IAM users in the account and specified fields

```coffee
aws.iam.users {
  users
  roles
  groups
  policies
  attachedPolicies
  accountSummary
  virtualMfaDevices
  serverCertificates
}
```

Return a list of users that do not have MFA configured along with the ARN, name, and associated IAM Groups

```coffee
aws.iam.credentialReport.where(mfaActive == false) {
  user {
    arn
    name
    groups
  }
}
```

Do not setup access keys during initial user setup for all IAM users that have a console password

```coffee
aws.iam.credentialReport.
  where(
    passwordEnabled &&
    accessKey1Active &&
    userCreationTime < time.today
  ).
  all(
    accessKey1LastUsedDate != null
  )
```

**References**

- [AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [Security in IAM and AWS STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/security.html)
