---
title: aws.rds
id: aws.rds
sidebar_label: aws.rds
displayed_sidebar: MQL
description: Amazon Relational Database Service (RDS)
---

# aws.rds

**Supported platform**

- aws

**Description**

Amazon Relational Database Service (RDS)

Use the `aws.rds` resource to assess the configuration of AWS RDS deployments. The resource returns lists of `aws.rds.dbcluster`, `aws.rds.dbinstance`, and `aws.rds.snapshot` resources, each with fields for assessing the configuration of those assets.

**Fields**

| ID                           | TYPE                                                                              | DESCRIPTION                                                       |
| ---------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| instances                    | &#91;&#93;[aws.rds.dbinstance](aws.rds.dbinstance.md)                             | List of database instances                                        |
| clusters                     | &#91;&#93;[aws.rds.dbcluster](aws.rds.dbcluster.md)                               | List of RDS database clusters                                     |
| allPendingMaintenanceActions | &#91;&#93;[aws.rds.pendingMaintenanceAction](aws.rds.pendingmaintenanceaction.md) | List of all pending maintenance actions for the database instance |
| parameterGroups              | &#91;&#93;[aws.rds.parameterGroup](aws.rds.parametergroup.md)                     | List of all parameter groups                                      |
| clusterParameterGroups       | &#91;&#93;[aws.rds.clusterParameterGroup](aws.rds.clusterparametergroup.md)       | List of all cluster parameter groups                              |

**Examples**

Check whether RDS DB instances have backups enabled

```coffee
aws.rds.instances.all(snapshots.length > 0)
```

Check whether high availability is enabled for all rds instances

```coffee
aws.rds.instances.all(multiAZ == true)
```

Return a list of RDS Clusters across all regions where snapshots are not encrypted and return the `arn` `region` and `id` for the cluster

```coffee
aws.rds.clusters { snapshots.where( encrypted == false) } { arn region id }
```

**References**

- [Security in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html)
