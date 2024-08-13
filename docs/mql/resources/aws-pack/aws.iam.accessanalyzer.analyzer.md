---
title: aws.iam.accessanalyzer.analyzer
id: aws.iam.accessanalyzer.analyzer
sidebar_label: aws.iam.accessanalyzer.analyzer
displayed_sidebar: MQL
description: AWS IAM Access Analyzer resource (provides an object representing an individual AWS IAM Access Analyzer configuration)
---

# aws.iam.accessanalyzer.analyzer

**Supported platform**

- aws

**Description**

AWS IAM Access Analyzer resource (provides an object representing an individual AWS IAM Access Analyzer configuration)

**Fields**

| ID                     | TYPE              | DESCRIPTION                                                   |
| ---------------------- | ----------------- | ------------------------------------------------------------- |
| arn                    | string            | ARN for the analyzer                                          |
| name                   | string            | Name for the analyzer                                         |
| status                 | string            | Status of the analyzer: ACTIVE, CREATING, DISABLED, or FAILED |
| type                   | string            | Type of analyzer: ACCOUNT or ORGANIZATION                     |
| region                 | string            | Region where the analyzer exists                              |
| tags                   | map[string]string | Tags for the analyzer                                         |
| lastResourceAnalyzed   | string            | Name of the last resource that was analyzed                   |
| lastResourceAnalyzedAt | time              | Last scan timestamp                                           |
| createdAt              | time              | Creation timestamp                                            |
