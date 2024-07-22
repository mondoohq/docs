---
title: aws.rds.backupsetting
id: aws.rds.backupsetting
sidebar_label: aws.rds.backupsetting
displayed_sidebar: MQL
description: Amazon RDS Backup Setting
---

# aws.rds.backupsetting

**Supported platform**

- aws

**Description**

Amazon RDS Backup Setting

**Fields**

| ID                       | TYPE                          | DESCRIPTION                                                    |
| ------------------------ | ----------------------------- | -------------------------------------------------------------- |
| target                   | string                        | Target fot the backup setting                                  |
| retentionPeriod          | int                           | Retention period for the backup setting                        |
| dedicatedLogVolume       | bool                          | Whether dedicated log volume is enabled for the backup setting |
| encrypted                | bool                          | Whether backups have encryption turned on                      |
| kmsKey                   | [aws.kms.key](aws.kms.key.md) | KMS key associated with the backup setting                     |
| region                   | string                        | Region for the backup setting                                  |
| status                   | string                        | Status of the backup setting                                   |
| timezone                 | string                        | Timezone for the backup setting                                |
| earliestRestoreAvailable | time                          | Time of earliest available restore                             |
| latestRestoreAvailable   | time                          | Time of latest available restore                               |
