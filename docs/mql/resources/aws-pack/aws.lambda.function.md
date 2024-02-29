---
title: aws.lambda.function
id: aws.lambda.function
sidebar_label: aws.lambda.function
displayed_sidebar: MQL
description: AWS Lambda function
---

# aws.lambda.function

**Supported platform**

- aws

**Description**

AWS Lambda function

The `aws.lambda.function` provides fields for assessing the configuration of individual AWS Lambda functions. For usage, read the `aws.lambda` resource documentation.

**Fields**

| ID           | TYPE              | DESCRIPTION                                |
| ------------ | ----------------- | ------------------------------------------ |
| arn          | string            | ARN of the function                        |
| name         | string            | Name of the function                       |
| runtime      | string            | Runtime environment for the function       |
| concurrency  | int               | Concurrency limit for the function         |
| dlqTargetArn | string            | Target ARN of the dead-letter queue config |
| policy       | dict              | Policy for the function                    |
| vpcConfig    | dict              | VPC configuration for the lambda function  |
| region       | string            | Region where the function exists           |
| tags         | map[string]string | Tags for the function                      |
