---
title: aws.redshift
id: aws.redshift
sidebar_label: aws.redshift
displayed_sidebar: MQL
description: Amazon Redshift
---

# aws.redshift

**Supported platform**

- aws

**Description**

Amazon Redshift

Use the `aws.redshift` resource to assess the configuration of Amazon Redshift deployments. The resource returns lists of `aws.rds.dbcluster`, `aws.rds.dbinstance`, and `aws.rds.snapshot` resources, each with fields for assessing the configuration of those assets.

**Fields**

| ID       | TYPE                                                      | DESCRIPTION      |
| -------- | --------------------------------------------------------- | ---------------- |
| clusters | &#91;&#93;[aws.redshift.cluster](aws.redshift.cluster.md) | List of clusters |

**Examples**

Return a list of Amazon Redshift clusters deployed across all enabled regions and the values for specified fields

```coffeescript
aws.redshift.clusters {
  arn
  encrypted
  nodeType
  allowVersionUpgrade
  preferredMaintenanceWindow
  automatedSnapshotRetentionPeriod
  publiclyAccessible
  parameters
  logging
  name
  region
  clusterParameterGroupNames
}
```

Return a list of Amazon Redshift clusters that are not encrypted and the values for the `arn` `region` and `name` fields

```coffeescript
aws.redshift.clusters.where( encrypted == false ) {
  arn
  region
  name
}
```

**References**

- [Amazon Redshift security overview](https://docs.aws.amazon.com/redshift/latest/dg/c_security-overview.html)
