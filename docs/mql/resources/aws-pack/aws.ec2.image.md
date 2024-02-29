---
title: aws.ec2.image
id: aws.ec2.image
sidebar_label: aws.ec2.image
displayed_sidebar: MQL
description: Amazon EC2 image (AMI)
---

# aws.ec2.image

**Supported platform**

- aws

**Description**

Amazon EC2 image (AMI)

The `aws.ec2.image` resource provides fields for assessing AMIs within an account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID           | TYPE   | DESCRIPTION                            |
| ------------ | ------ | -------------------------------------- |
| arn          | string | ARN for the AMI                        |
| id           | string | ID of the image                        |
| name         | string | Name for the image                     |
| architecture | string | Architecture associated with the image |
| ownerId      | string | AWS account ID of the image owner      |
| ownerAlias   | string | Alias for the image owner              |
