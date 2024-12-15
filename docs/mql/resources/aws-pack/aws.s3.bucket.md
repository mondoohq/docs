---
title: aws.s3.bucket
id: aws.s3.bucket
sidebar_label: aws.s3.bucket
displayed_sidebar: MQL
description: Amazon S3 bucket
---

# aws.s3.bucket

**Supported platform**

- aws

**Description**

Amazon S3 bucket

The `aws.s3.bucket` resource provides fields for assessing the configuration of AWS S3 buckets. For usage, read the `aws.s3` resource documentation.

**Fields**

| ID                   | TYPE                                                          | DESCRIPTION                                                   |
| -------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| arn                  | string                                                        | ARN of the bucket                                             |
| name                 | string                                                        | Name of the bucket                                            |
| policy               | [aws.s3.bucket.policy](aws.s3.bucket.policy.md)               | Policy associated with the bucket                             |
| tags                 | map[string]string                                             | Tags for the bucket                                           |
| acl                  | &#91;&#93;[aws.s3.bucket.grant](aws.s3.bucket.grant.md)       | List of access control grants associated with the bucket      |
| owner                | map[string]string                                             | Owner for the bucket                                          |
| public               | bool                                                          | Whether the bucket is public                                  |
| cors                 | &#91;&#93;[aws.s3.bucket.corsrule](aws.s3.bucket.corsrule.md) | List of CORS information for the bucket                       |
| location             | string                                                        | Location of the bucket                                        |
| versioning           | map[string]string                                             | Versioning state and MFA delete status of bucket              |
| logging              | map[string]string                                             | Logging status and user permissions for bucket logging status |
| staticWebsiteHosting | map[string]string                                             | Website configuration for the bucket                          |
| defaultLock          | string                                                        | Whether the bucket is locked by default                       |
| replication          | dict                                                          | Bucket cross-region replication configuration                 |
| encryption           | dict                                                          | Bucket encryption configuration                               |
| publicAccessBlock    | dict                                                          | Public access block configuration for the bucket              |
| exists               | bool                                                          | Whether the bucket still exists (stale reference)             |
| createdTime          | time                                                          | Deprecated (use `createdAt` instead)                          |
| createdAt            | time                                                          | Date and time the bucket was created                          |

**References**

- [Amazon S3 Product Page](https://aws.amazon.com/s3/)
- [AWS Documentation: Buckets overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html)
