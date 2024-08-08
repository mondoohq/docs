---
title: aws.iam.accessAnalyzer
id: aws.iam.accessAnalyzer
sidebar_label: aws.iam.accessAnalyzer
displayed_sidebar: MQL
description: AWS IAM Access Analyzer resource (for assessing the configuration of AWS IAM Access Analyzer)
---

# aws.iam.accessAnalyzer

**Supported platform**

- aws

**Description**

AWS IAM Access Analyzer resource (for assessing the configuration of AWS IAM Access Analyzer)

**Fields**

| ID        | TYPE                                                                            | DESCRIPTION                                                                                                      |
| --------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| analyzers | &#91;&#93;[aws.iam.accessanalyzer.analyzer](aws.iam.accessanalyzer.analyzer.md) | List of `aws.iam.accessanalyzer.analyzer` objects for all AWS IAM Access Analyzers configured within the account |
| findings  | &#91;&#93;[aws.iam.accessanalyzer.finding](aws.iam.accessanalyzer.finding.md)   | List of all active findings for all analyzers and regions                                                        |

**Examples**

Return a list of AWS IAM Access Analyzers configured across the AWS account

```coffee
aws.iam.accessAnalyzer.analyzers
```

Return a list of `aws.iam.accessAnalyzer.analyzer` resources and the value for specified fields

```coffee
aws.iam.accessAnalyzer.analyzers {
  arn
  name
  status
  type
}
```

Ensure that IAM Access analyzer is enabled for all regions

```coffee
aws.iam.accessAnalyzer.analyzers.all(
  status == "ACTIVE"
)
```

**References**

- [Using AWS IAM Access Analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html)
