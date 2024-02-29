---
title: aws.ecr.repository
id: aws.ecr.repository
sidebar_label: aws.ecr.repository
displayed_sidebar: MQL
description: AWS Elastic Container Registry repository
---

# aws.ecr.repository

**Supported platform**

- aws

**Description**

AWS Elastic Container Registry repository

Use the `aws.ecr.repository` resource to assess the Amazon Elastic Container Registry repositories.

**Fields**

| ID              | TYPE                                        | DESCRIPTION                                                        |
| --------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| arn             | string                                      | ARN of the repository                                              |
| name            | string                                      | Name of the repository                                             |
| uri             | string                                      | URI of the repository, used for push/pull operations               |
| registryId      | string                                      | AWS Account ID associated with public registry for this repository |
| public          | bool                                        | Whether the repository is public                                   |
| images          | &#91;&#93;[aws.ecr.image](aws.ecr.image.md) | List of images in the repository                                   |
| region          | string                                      | Region where the image is stored                                   |
| imageScanOnPush | bool                                        | Repository option to scan on image push                            |

**Examples**

Return a list of `aws.ecr.repository` resources representing the public repositories.

```coffee
aws.ecr {
  publicRepositories {
    name
    uri
  }
}
```
