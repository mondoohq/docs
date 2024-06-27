---
title: aws.codebuild
id: aws.codebuild
sidebar_label: aws.codebuild
displayed_sidebar: MQL
description: AWS CodeBuild for building and testing code
---

# aws.codebuild

**Supported platform**

- aws

**Description**

AWS CodeBuild for building and testing code

Use the `aws.codebuild` resource to assess the configuration of the AWS CodeBuild service and the projects within.

**Fields**

| ID       | TYPE                                                        | DESCRIPTION            |
| -------- | ----------------------------------------------------------- | ---------------------- |
| projects | &#91;&#93;[aws.codebuild.project](aws.codebuild.project.md) | List of build projects |

**Examples**

Return a list of `aws.codebuild.project` resources representing all AWS CodeBuild projects configured across all enabled regions within the account and the values for specified fields

```coffee
aws.codebuild.projects {
  arn
  description
  name
  environment
  region
  source
}
```

Check that all projects containing env variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are not in plaintext

```coffee
aws.codebuild.projects {
  environment ['EnvironmentVariables'].where(_['Name'] == "AWS_ACCESS_KEY_ID") { _['Type'] != "PLAINTEXT"}
  environment ['EnvironmentVariables'].where(_['Name'] == "AWS_SECRET_ACCESS_KEY") { _['Type'] != "PLAINTEXT"}
}
```

Check that all projects using GitHub or Bitbucket as the source use oauth

```coffee
aws.codebuild.projects.where( source['Type'] == "BITBUCKET" || source['Type'] == "GITHUB" ) {
  source['Auth']['Type'] == "OAUTH"
}
```

**References**

- [Security in AWS CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/security.html)
