---
title: aws.s3
id: aws.s3
sidebar_label: aws.s3
displayed_sidebar: MQL
description: Amazon S3 cloud object storage
---

# aws.s3

**Supported platform**

- aws

**Description**

Amazon S3 cloud object storage

Amazon Simple Storage Service (Amazon S3) is an object storage service

**Fields**

| ID      | TYPE                                        | DESCRIPTION                           |
| ------- | ------------------------------------------- | ------------------------------------- |
| buckets | &#91;&#93;[aws.s3.bucket](aws.s3.bucket.md) | List of S3 buckets across the account |

**Examples**

Return a list of AWS S3 buckets and the values for specified fields

```coffee
aws.s3.buckets {
  arn
  name
  policy
  tags
  acl
  owner
  public
  cors
  location
  versioning
  logging
  staticWebsiteHosting
  defaultLock
  replication
  encryption
  publicAccessBlock
  exists
}
```

Return a list of AWS S3 buckets that are public and return the values for the `arn` `name` `location` `tags` and `publicAccessBlock`

```coffee
aws.s3.buckets.where( public == true ) {
  arn
  name
  location
  tags
  publicAccessBlock
}
```

Check whether S3 buckets have cross-region replication enabled

```coffee
aws.s3.buckets.all(
  replication['Rules'] { _['Status'] == "Enabled" }
)
```

Check that all buckets are encrypted with kms

```coffee
aws.s3.buckets.all(
  encryption['Rules'] { _['ApplyServerSideEncryptionByDefault']['KMSMasterKeyID'] == /^arn:aws:kms:.*/}
)
```

**References**

- [Amazon S3 Product Page](https://aws.amazon.com/s3/)
- [AWS Documentation: What is Amazon S3?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
