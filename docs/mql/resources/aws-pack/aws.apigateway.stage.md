---
title: aws.apigateway.stage
id: aws.apigateway.stage
sidebar_label: aws.apigateway.stage
displayed_sidebar: MQL
description: Amazon API Gateway REST API stages
---

# aws.apigateway.stage

**Supported platform**

- aws

**Description**

Amazon API Gateway REST API stages

The `aws.apigateway.stage` resource provides fields representing an individual stage configured on a REST API. For usage, read the `aws.apigateway` resource documentation.

**Fields**

| ID             | TYPE   | DESCRIPTION                                           |
| -------------- | ------ | ----------------------------------------------------- |
| arn            | string | ARN for the REST API stage                            |
| name           | string | Name for the stage                                    |
| tracingEnabled | bool   | Bool that denotes if tracing is enabled for the stage |
| description    | string | Description for the stage                             |
| deploymentId   | string | ID of the deployment the stage is attached to         |
| methodSettings | dict   | Method settings for the stage                         |

**Examples**

Return a list of AWS API Gateway REST APIs configured across all enabled regions in the AWS account and the values for the arn and stages

```coffeescript
aws.apigateway.restApis {
  arn
  stages
}
```
