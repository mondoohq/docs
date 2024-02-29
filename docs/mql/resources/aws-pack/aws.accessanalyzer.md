---
title: aws.accessAnalyzer
id: aws.accessAnalyzer
sidebar_label: aws.accessAnalyzer
displayed_sidebar: MQL
description: AWS IAM Access Analyzer resource (for assessing the configuration of AWS IAM Access Analyzer)
---

# aws.accessAnalyzer

**Supported platform**

- aws

**Description**

AWS IAM Access Analyzer resource (for assessing the configuration of AWS IAM Access Analyzer)

The `aws.accessAnalyzer` resource returns a list AWS IAM Access Analyzers configured across the AWS account.

**Fields**

| ID        | TYPE                                                                    | DESCRIPTION                                                                                                  |
| --------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| analyzers | &#91;&#93;[aws.accessanalyzer.analyzer](aws.accessanalyzer.analyzer.md) | List of `aws.accessanalyzer.analyzer` objects for all AWS IAM Access Analyzers configured within the account |

**Examples**

Return a list of AWS IAM Access Analyzers configured across the AWS account

```coffee
aws.accessAnalyzer.analyzers
```

Return a list of `aws.accessAnalyzer.analyzer` resources and the value for specified fields

```coffee
aws.accessAnalyzer.analyzers {
  arn
  name
  status
  type
}
```

Ensure that IAM Access analyzer is enabled for all regions

```coffee
aws.accessAnalyzer.analyzers.all(
  status == "ACTIVE"
)
```

**References**

- [Using AWS IAM Access Analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html)
