---
title: aws.backup
id: aws.backup
sidebar_label: aws.backup
displayed_sidebar: MQL
description: AWS Backup
---

# aws.backup

**Supported platform**

- aws

**Description**

AWS Backup

Use the `aws.backup` resource to assess the configuration of AWS Backup vaults in an AWS account. This resource provides the `.vaults` field, which returns a list of all AWS Backup vaults configured across all enabled regions across the account.

**Fields**

| ID     | TYPE                                              | DESCRIPTION                    |
| ------ | ------------------------------------------------- | ------------------------------ |
| vaults | &#91;&#93;[aws.backup.vault](aws.backup.vault.md) | List of vaults for the service |

**Examples**

Return a list of all AWS Backup vaults configured across all enabled regions across the account and all their recovery points

```coffeescript
aws.backup.vaults {
  arn
  region
  recoveryPoints
  name
}
```

**References**

- [What is AWS Backup?](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html)
- [Compliance validation for AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-compliance.html)
