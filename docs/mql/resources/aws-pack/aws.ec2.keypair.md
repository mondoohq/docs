---
title: aws.ec2.keypair
id: aws.ec2.keypair
sidebar_label: aws.ec2.keypair
displayed_sidebar: MQL
description: Amazon EC2 key pair
---

# aws.ec2.keypair

**Supported platform**

- aws

**Description**

Amazon EC2 key pair

**Fields**

| ID          | TYPE              | DESCRIPTION                      |
| ----------- | ----------------- | -------------------------------- |
| arn         | string            | ARN of the key pair              |
| fingerprint | string            | Fingerprint for the key pair     |
| name        | string            | Name of the key pair             |
| type        | string            | Type of key, such as RSA         |
| tags        | map[string]string | Tags for the key pair            |
| region      | string            | Region where the key pair exists |
| createdAt   | time              | Date the keypair was created     |
