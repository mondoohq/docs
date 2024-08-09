---
title: aws.iam.accessanalyzer.finding
id: aws.iam.accessanalyzer.finding
sidebar_label: aws.iam.accessanalyzer.finding
displayed_sidebar: MQL
description: AWS IAM Access Analyzer finding
---

# aws.iam.accessanalyzer.finding

**Supported platform**

- aws

**Description**

AWS IAM Access Analyzer finding

**Fields**

| ID                   | TYPE   | DESCRIPTION                     |
| -------------------- | ------ | ------------------------------- |
| id                   | string | Finding id                      |
| error                | string | Error message                   |
| resourceArn          | string | Resource                        |
| resourceOwnerAccount | string | Resource owner                  |
| resourceType         | string | Resource type                   |
| type                 | string | Finding type                    |
| status               | string | Finding status                  |
| analyzedAt           | time   | Time the finding was generated  |
| createdAt            | time   | Creation timestamp              |
| updatedAt            | time   | Creation timestamp              |
| region               | string | Region where the finding exists |
| analyzerArn          | string | Analyzer ARN                    |
