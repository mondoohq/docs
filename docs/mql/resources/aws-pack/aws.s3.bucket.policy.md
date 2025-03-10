---
title: aws.s3.bucket.policy
id: aws.s3.bucket.policy
sidebar_label: aws.s3.bucket.policy
displayed_sidebar: MQL
description: Amazon S3 bucket policy
---

# aws.s3.bucket.policy

**Supported platform**

- aws

**Description**

Amazon S3 bucket policy

Bucket policies grant permission to your Amazon S3 resources

**Fields**

| ID         | TYPE           | DESCRIPTION                          |
| ---------- | -------------- | ------------------------------------ |
| id         | string         | Unique ID for the policy             |
| name       | string         | Deprecated. Use `bucketName` instead |
| bucketName | string         | Bucket name that this policy belongs |
| document   | string         | Document for the policy              |
| version    | string         | Version of the policy                |
| statements | &#91;&#93;dict | List of statements for the policy    |

**References**

- [AWS Documentation: Using bucket policies](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html)
