---
title: aws.apigateway.restapi
id: aws.apigateway.restapi
sidebar_label: aws.apigateway.restapi
displayed_sidebar: MQL
description: Amazon API Gateway REST API
---

# aws.apigateway.restapi

**Supported platform**

- aws

**Description**

Amazon API Gateway REST API

The `aws.apigateway.restapi` resource provides fields representing an individual REST API configured within the AWS account. For usage, read the `aws.apigateway` resource documentation.

**Fields**

| ID          | TYPE                                                      | DESCRIPTION                        |
| ----------- | --------------------------------------------------------- | ---------------------------------- |
| arn         | string                                                    | ARN for the REST API               |
| id          | string                                                    | Unique ID for the REST API         |
| name        | string                                                    | Name for the REST API              |
| createdDate | time                                                      | Time when the REST API was created |
| description | string                                                    | Description for the REST API       |
| stages      | &#91;&#93;[aws.apigateway.stage](aws.apigateway.stage.md) | Stages for the REST API            |
| region      | string                                                    | Region where the REST API exists   |
| tags        | map[string]string                                         | Tags for the REST API              |
