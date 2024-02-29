---
title: aws.ecr
id: aws.ecr
sidebar_label: aws.ecr
displayed_sidebar: MQL
description: AWS Elastic Container Registry (ECR)
---

# aws.ecr

**Supported platform**

- aws

**Description**

AWS Elastic Container Registry (ECR)

The `aws.ecr` resource to assess the configuration of an Amazon Elastic Container Registry.

**Fields**

| ID                  | TYPE                                                  | DESCRIPTION                                                 |
| ------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| privateRepositories | &#91;&#93;[aws.ecr.repository](aws.ecr.repository.md) | List of private repositories                                |
| publicRepositories  | &#91;&#93;[aws.ecr.repository](aws.ecr.repository.md) | List of public repositories associated with the AWS account |
| images              | &#91;&#93;[aws.ecr.image](aws.ecr.image.md)           | List of images                                              |

**Examples**

Return a `aws.ecr` resource representing the Elastic Container Registry.

```coffee
aws.ecr {*}
```

**References**

- [Security in Amazon Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/security.html)
