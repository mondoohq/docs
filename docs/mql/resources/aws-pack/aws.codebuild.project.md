---
title: aws.codebuild.project
id: aws.codebuild.project
sidebar_label: aws.codebuild.project
displayed_sidebar: MQL
description: AWS CodeBuild project
---

# aws.codebuild.project

**Supported platform**

- aws

**Description**

AWS CodeBuild project

The `aws.codebuild.project` resource provides fields representing an individual AWS CodeBuild project configured within the account. For usage, read the `aws.codebuild` documentation.

**Fields**

| ID          | TYPE              | DESCRIPTION                                     |
| ----------- | ----------------- | ----------------------------------------------- |
| arn         | string            | ARN for the project                             |
| description | string            | Description of the project                      |
| name        | string            | Name of the project                             |
| environment | dict              | Build environment information about the project |
| region      | string            | Region where the project exists                 |
| source      | dict              | Source used for the build project               |
| tags        | map[string]string | Tags for the project                            |
