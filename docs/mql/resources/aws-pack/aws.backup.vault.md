---
title: aws.backup.vault
id: aws.backup.vault
sidebar_label: aws.backup.vault
displayed_sidebar: MQL
description: AWS Backup vault
---

# aws.backup.vault

**Supported platform**

- aws

**Description**

AWS Backup vault

The `aws.backup.vault` resource provides fields representing an individual AWS Backup vaults within the account. For usage, read the `aws.backup` resource documentation.

**Fields**

| ID               | TYPE                                                                        | DESCRIPTION                                        |
| ---------------- | --------------------------------------------------------------------------- | -------------------------------------------------- |
| arn              | string                                                                      | ARN of the vault                                   |
| name             | string                                                                      | Name of the vault                                  |
| recoveryPoints   | &#91;&#93;[aws.backup.vaultRecoveryPoint](aws.backup.vaultrecoverypoint.md) | List of recovery points stored in the backup vault |
| region           | string                                                                      | The region of the vault                            |
| createdAt        | time                                                                        | Date the backup vault was created                  |
| locked           | bool                                                                        | Whether the backup is locked                       |
| encryptionKeyArn | string                                                                      | The ARN of the encryption key                      |
