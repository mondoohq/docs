---
title: aws
id: aws
sidebar_label: aws
displayed_sidebar: MQL
description: AWS resource
---

# aws

**Supported platform**

- aws

**Description**

AWS resource

Use the `aws` resource to assess the configuration of AWS accounts. It features the `aws.regions` field, which returns a list of enabled AWS regions in the account, and the `aws.vpcs` field, which provides a list of VPCs configured within the account.

**Fields**

| ID      | TYPE                            | DESCRIPTION                                                                               |
| ------- | ------------------------------- | ----------------------------------------------------------------------------------------- |
| vpcs    | &#91;&#93;[aws.vpc](aws.vpc.md) | List of `aws.vpc` objects representing all VPCs in the account across all enabled regions |
| regions | &#91;&#93;string                | List of all enabled regions in the account                                                |

**Examples**

List all enabled regions within the AWS account

```coffeescript
aws.regions
```

List of `aws.vpc` resources for all VPCs across all enabled regions

```coffeescript
aws.vpcs
```

List of `aws.vpc` resources for all VPCs across all enabled regions and the values for specified fields

```coffeescript
aws.vpcs {
  arn
  id
  state
  isDefault
  region
  flowLogs
  routeTables
}
```

Ensure VPC flow logging is enabled in all VPCs

```coffeescript
aws.vpcs.all( flowLogs.any(status == "ACTIVE") )
```

**References**

- [AWS Documentation: Managing AWS Regions](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html)
- [AWS Documentation: Security in Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/security.html)
