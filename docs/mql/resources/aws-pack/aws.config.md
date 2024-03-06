---
title: aws.config
id: aws.config
sidebar_label: aws.config
displayed_sidebar: MQL
description: AWS Config
---

# aws.config

**Supported platform**

- aws

**Description**

AWS Config

Use the `aws.config` resource to assess the configuration of the AWS Config service. The resource provides the `.recorders` field, which returns a list of `aws.config.recorder` resources representing all AWS Config recorders configured across all enabled regions, as well as the `.rules` field, which returns a list of `aws.config.rule` resources representing all AWS Config rules configured across all enabled regions in the account.

**Fields**

| ID        | TYPE                                                    | DESCRIPTION                                                    |
| --------- | ------------------------------------------------------- | -------------------------------------------------------------- |
| recorders | &#91;&#93;[aws.config.recorder](aws.config.recorder.md) | List of configuration recorders for each region in the account |
| rules     | &#91;&#93;[aws.config.rule](aws.config.rule.md)         | List of AWS Config rules                                       |

**Examples**

Return a list of `aws.config.rule` resources representing AWS Config rules configured across all enabled regions and the values for specified fields

```coffee
aws.config.rules {
  arn
  state
  source
}
```

Return a list of AWS Config recorders configured across all enabled regions and the values for specified fields

```coffee
aws.config.recorders {
  name
  roleArn
  allSupported
  includeGlobalResourceTypes
  resourceTypes
  recording
  lastStatus
  region
}
```

Ensure AWS Config is enabled in all regions

```coffee
aws.config.recorders.any(allSupported == true && includeGlobalResourceTypes == true)
aws.config.recorders.where(allSupported == true && includeGlobalResourceTypes == true).all(
  recording == true && lastStatus == "SUCCESS"
)
```

**References**

- [Security in AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/security.html)
- [AWS Config best practices](https://aws.amazon.com/blogs/mt/aws-config-best-practices/)
