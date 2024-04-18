---
title: aws.inspector.coverage.instance
id: aws.inspector.coverage.instance
sidebar_label: aws.inspector.coverage.instance
displayed_sidebar: MQL
---

# aws.inspector.coverage.instance

**Supported platform**

- aws

**Fields**

| ID       | TYPE                              | DESCRIPTION                            |
| -------- | --------------------------------- | -------------------------------------- |
| platform | string                            | Platform for the EC2 instance          |
| tags     | map[string]string                 | Tags associated with the EC2 instance  |
| image    | [aws.ec2.image](aws.ec2.image.md) | Image associated with the EC2 instance |
| region   | string                            | Region where the EC2 instance is found |
