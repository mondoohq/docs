---
title: aws.sagemaker.endpoint
id: aws.sagemaker.endpoint
sidebar_label: aws.sagemaker.endpoint
displayed_sidebar: MQL
description: AWS SageMaker endpoint
---

# aws.sagemaker.endpoint

**Supported platform**

- aws

**Description**

AWS SageMaker endpoint

**Fields**

| ID     | TYPE              | DESCRIPTION                                |
| ------ | ----------------- | ------------------------------------------ |
| arn    | string            | ARN for the endpoint                       |
| name   | string            | Name of the endpoint                       |
| config | dict              | Configuration information for the endpoint |
| region | string            | Region where the endpoint exists           |
| tags   | map[string]string | Tags for the endpoint                      |
