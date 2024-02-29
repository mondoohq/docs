---
title: aws.config.deliverychannel
id: aws.config.deliverychannel
sidebar_label: aws.config.deliverychannel
displayed_sidebar: MQL
description: AWS Config delivery channel
---

# aws.config.deliverychannel

**Supported platform**

- aws

**Description**

AWS Config delivery channel

The `aws.config.deliverychannel` resource provides fields representing an individual AWS Config delivery channel configured within an account. For usage, read the `aws.config` resource documentation.

**Fields**

| ID           | TYPE   | DESCRIPTION                                                          |
| ------------ | ------ | -------------------------------------------------------------------- |
| name         | string | Name of the delivery channel                                         |
| s3BucketName | string | S3 bucket name where configuration snapshots are delivered           |
| s3KeyPrefix  | string | Prefix for the S3 bucket where configuration snapshots are delivered |
| snsTopicARN  | string | ARN of the SNS topic that AWS Config delivers notifications to       |
| region       | string | Region for the delivery channel                                      |
