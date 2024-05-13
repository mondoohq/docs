---
title: aws.efs
id: aws.efs
sidebar_label: aws.efs
displayed_sidebar: MQL
description: AWS Elastic File System (EFS) service
---

# aws.efs

**Supported platform**

- aws

**Description**

AWS Elastic File System (EFS) service

Use the `aws.efs` resource to assess the configuration of Amazon Elastic File System deployments.

**Fields**

| ID          | TYPE                                                  | DESCRIPTION                                   |
| ----------- | ----------------------------------------------------- | --------------------------------------------- |
| filesystems | &#91;&#93;[aws.efs.filesystem](aws.efs.filesystem.md) | A list of file systems managed by the service |

**Examples**

Return a list of `aws.efs.filesystem` resources representing any EFS deployments across all enabled regions in the account

```coffeescript
aws.efs.filesystems {
  name
  id
  arn
  encrypted
  kmsKey
  backupPolicy
  region
}
```

Check whether all EFS systems are configured to encrypt file data using KMS

```coffeescript
aws.efs.filesystems.all(
  encrypted == true && kmsKey.arn == /^arn:aws:kms:.*/
)
```

**References**

- [Security in Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/security-considerations.html)
