---
title: aws.accessanalyzer.analyzer
id: aws.accessanalyzer.analyzer
sidebar_label: aws.accessanalyzer.analyzer
displayed_sidebar: MQL
description: AWS IAM Access Analyzer resource (provides an object representing an individual AWS IAM Access Analyzer configuration)
---

# aws.accessanalyzer.analyzer

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
| tags                   | map[string]string | Tags for the analyzer                                         |
| lastResourceAnalyzed   | string            | The name of the last resource that was analyzed               |
| lastResourceAnalyzedAt | time              | Last scan timestamp                                           |
| createdAt              | time              | Creation timestamp                                            |
