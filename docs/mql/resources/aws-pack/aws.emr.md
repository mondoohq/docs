---
title: aws.emr
id: aws.emr
sidebar_label: aws.emr
displayed_sidebar: MQL
description: Amazon EMR
---

# aws.emr

**Supported platform**

- aws

**Description**

Amazon EMR

Use the `aws.emr` resource to assess the configuration of Amazon EMR clusters. This resource provides a list of `aws.emr.cluster` resources representing EMR clusters deployed across all enabled regions.

**Fields**

| ID       | TYPE                                            | DESCRIPTION          |
| -------- | ----------------------------------------------- | -------------------- |
| clusters | &#91;&#93;[aws.emr.cluster](aws.emr.cluster.md) | List of EMR clusters |

**Examples**

Return a list of EMR clusters deployed across all enabled regions and the value for specified fields

```coffee
aws.emr.clusters {
  arn
  name
  normalizedInstanceHours
  outpostArn
  status
  masterInstances
  id
}
```

Check whether EMR cluster master nodes have public ips

```coffee
aws.emr.clusters.all(
  masterInstances { _['PublicIpAddress'] == null }
)
```

**References**

- [Security in Amazon EMR](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-security.html)
