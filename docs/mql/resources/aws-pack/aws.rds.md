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

| ID          | TYPE                                                  | DESCRIPTION                   |
| ----------- | ----------------------------------------------------- | ----------------------------- |
| dbInstances | &#91;&#93;[aws.rds.dbinstance](aws.rds.dbinstance.md) | List of database instances    |
| dbClusters  | &#91;&#93;[aws.rds.dbcluster](aws.rds.dbcluster.md)   | List of RDS database clusters |

**Examples**

Check whether RDS DB instances have backups enabled

```coffee
aws.rds.dbInstances.all(snapshots.length > 0)
```

Check whether high availability is enabled for all rds instances

```coffee
aws.rds.dbInstances.all(multiAZ == true)
```

Return a list of RDS Clusters across all regions where snapshots are not encrypted and return the `arn` `region` and `id` for the cluster

```coffee
aws.rds.dbClusters { snapshots.where( encrypted == false) } { arn region id }
```

**References**

- [Security in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html)
