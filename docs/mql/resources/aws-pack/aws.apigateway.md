---
title: aws.apigateway
id: aws.apigateway
sidebar_label: aws.apigateway
displayed_sidebar: MQL
description: Amazon API Gateway
---

# aws.apigateway

**Supported platform**

- aws

**Description**

Amazon API Gateway

Use the `aws.apigateway` resource to assess the configuration of the AWS API Gateway service.

**Fields**

| ID       | TYPE                                                          | DESCRIPTION                                                                                                   |
| -------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| restApis | &#91;&#93;[aws.apigateway.restapi](aws.apigateway.restapi.md) | List of `aws.apigateway.restapi` objects representing all rest APIs across all enabled regions in the account |

**Examples**

Return a list of `aws.apigateway.restapi` resources for all REST APIs configured with the account across all enabled regions

```coffee
aws.apigateway.restApis
```

Return a list of `aws.apigateway.restapi` resources for all REST APIs configured with the account across all enabled regions and the value for specified fields

```coffee
aws.apigateway.restApis {
  createdDate
  description
  stages
  region
  arn
  id
  name
}
```

Check that all methods in Amazon API Gateway have caching enabled and encrypted

```coffee
aws.apigateway.restApis.all(stages.all(
  methodSettings['CachingEnabled'] == true &&
    methodSettings['CacheDataEncrypted'] == true
))
```

Check that all methods in Amazon API Gateway have logging enabled

```coffee
aws.apigateway.restApis.all(stages.all(
methodSettings['LoggingLevel'] == "ERROR" || methodSettings['LoggingLevel'] == "INFO"
))
```

**References**

- [What is Amazon API Gateway?](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [Security in Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/security.html)
