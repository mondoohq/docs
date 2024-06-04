---
title: aws.ecr.image
id: aws.ecr.image
sidebar_label: aws.ecr.image
displayed_sidebar: MQL
description: AWS Elastic Container Registry image
---

# aws.ecr.image

**Supported platform**

- aws

**Description**

AWS Elastic Container Registry image

Use the `aws.ecr.image` resource to assess a container image stored in an Amazon Elastic Container Registry.

**Fields**

| ID         | TYPE             | DESCRIPTION                                                   |
| ---------- | ---------------- | ------------------------------------------------------------- |
| digest     | string           | SHA256 of the image manifest                                  |
| mediaType  | string           | Type of image manifest                                        |
| tags       | &#91;&#93;string | List of tags associated with image                            |
| registryId | string           | AWS account ID associated with public registry for this image |
| repoName   | string           | Name of the repository for the image                          |
| region     | string           | Region where the ECR image is located                         |
| arn        | string           | ARN for the image                                             |
| uri        | string           | uri for the image repository                                  |

**Examples**

Return a list of `aws.ecr.image` resources representing the images stored in public repositories.

```coffeescript
aws.ecr {
  publicRepositories {
    images {
      digest
      repoName
      tags
    }
  }
}
```
