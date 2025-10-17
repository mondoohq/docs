---
title: aws.macie.session
id: aws.macie.session
sidebar_label: aws.macie.session
displayed_sidebar: MQL
description: Amazon Macie session
---

# aws.macie.session

**Supported platform**

- aws

**Description**

Amazon Macie session

**Fields**

| ID                         | TYPE   | DESCRIPTION                                                           |
| -------------------------- | ------ | --------------------------------------------------------------------- |
| arn                        | string | ARN of the Macie session                                              |
| region                     | string | Region where Macie is enabled                                         |
| status                     | string | Status of the Macie session: ENABLED or PAUSED                        |
| createdAt                  | time   | Date and time when the Macie session was created                      |
| updatedAt                  | time   | Date and time when the Macie session was last updated                 |
| findingPublishingFrequency | string | Finding publishing frequency: FIFTEEN_MINUTES, ONE_HOUR, or SIX_HOURS |
| serviceRole                | string | Service role ARN used by Macie                                        |
| s3BucketCount              | int    | Number of S3 buckets monitored by Macie                               |
