---
title: aws.iam.virtualmfadevice
id: aws.iam.virtualmfadevice
sidebar_label: aws.iam.virtualmfadevice
displayed_sidebar: MQL
description: AWS IAM virtual MFA device
---

# aws.iam.virtualmfadevice

**Supported platform**

- aws

**Description**

AWS IAM virtual MFA device

The `aws.iam.virtualmfadevice` resource provides fields for assessing the metadata for individual virtual MFA devices associated with IAM users. For usage, read the `aws.iam` resource documentation.

**Fields**

| ID           | TYPE                            | DESCRIPTION                          |
| ------------ | ------------------------------- | ------------------------------------ |
| serialNumber | string                          | Serial number for the MFA device     |
| enableDate   | time                            | Time when the MFA device was enabled |
| user         | [aws.iam.user](aws.iam.user.md) | User associated with the MFA device  |
