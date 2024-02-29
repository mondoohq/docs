---
title: aws.ec2.internetgateway
id: aws.ec2.internetgateway
sidebar_label: aws.ec2.internetgateway
displayed_sidebar: MQL
description: Amazon EC2 internet gateway
---

# aws.ec2.internetgateway

**Supported platform**

- aws

**Description**

Amazon EC2 internet gateway

The `aws.ec2.internetgateway` resource provides fields for assessing the configuration of internet gateways within an AWS account. For usage, see `aws.ec2` resource documentation.

**Fields**

| ID          | TYPE           | DESCRIPTION         |
| ----------- | -------------- | ------------------- |
| arn         | string         | ARN for the gateway |
| id          | string         | ID for the gateway  |
| attachments | &#91;&#93;dict | VPC attachments     |
