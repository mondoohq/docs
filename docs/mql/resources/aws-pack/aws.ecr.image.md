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

| ID                   | TYPE             | DESCRIPTION                                                                               |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| digest               | string           | SHA256 of the image manifest                                                              |
| mediaType            | string           | Type of image manifest                                                                    |
| tags                 | &#91;&#93;string | List of tags associated with image                                                        |
| registryId           | string           | AWS account ID associated with public registry for this image                             |
| repoName             | string           | Name of the repository for the image                                                      |
| region               | string           | Region where the ECR image is located                                                     |
| arn                  | string           | ARN for the image                                                                         |
| uri                  | string           | uri for the image repository                                                              |
| pushedAt             | time             | Time the image was pushed                                                                 |
| sizeInBytes          | int              | Size of the image in bytes                                                                |
| lastRecordedPullTime | time             | Time of the most recent image pull (Amazon only refreshes this data once every 24 hours.) |

**Examples**

Return a list of `aws.ecr.image` resources representing the images stored in public repositories.

```coffee
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
