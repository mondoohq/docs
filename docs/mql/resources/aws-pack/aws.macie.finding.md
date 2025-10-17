---
title: aws.macie.finding
id: aws.macie.finding
sidebar_label: aws.macie.finding
displayed_sidebar: MQL
description: Amazon Macie finding
---

# aws.macie.finding

**Supported platform**

- aws

**Description**

Amazon Macie finding

**Fields**

| ID                    | TYPE   | DESCRIPTION                                       |
| --------------------- | ------ | ------------------------------------------------- |
| id                    | string | Unique ID of the finding                          |
| arn                   | string | ARN of the finding                                |
| region                | string | Region where the finding was discovered           |
| accountId             | string | Account ID where the finding was discovered       |
| type                  | string | Type of the finding                               |
| severity              | dict   | Severity details of the finding                   |
| category              | string | Category of the finding: CLASSIFICATION or POLICY |
| archived              | bool   | Whether the finding is archived                   |
| count                 | int    | Count of occurrences for this finding             |
| createdAt             | time   | Date and time when the finding was created        |
| updatedAt             | time   | Date and time when the finding was last updated   |
| title                 | string | Title of the finding                              |
| description           | string | Description of the finding                        |
| classificationDetails | dict   | Classification details for the finding            |
| resourcesAffected     | dict   | Resources affected by the finding                 |
