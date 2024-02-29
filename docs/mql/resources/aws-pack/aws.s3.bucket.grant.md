---
title: aws.s3.bucket.grant
id: aws.s3.bucket.grant
sidebar_label: aws.s3.bucket.grant
displayed_sidebar: MQL
description: Amazon S3 bucket grant
---

# aws.s3.bucket.grant

**Supported platform**

- aws

**Description**

Amazon S3 bucket grant

**Fields**

| ID         | TYPE              | DESCRIPTION                          |
| ---------- | ----------------- | ------------------------------------ |
| id         | string            | ID of the bucket grant               |
| name       | string            | Name for the bucket grant            |
| permission | string            | Permission associated with the grant |
| grantee    | map[string]string | Grantee associated with the grant    |
