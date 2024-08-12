---
title: aws.elasticache
id: aws.elasticache
sidebar_label: aws.elasticache
displayed_sidebar: MQL
description: Amazon ElastiCache
---

# aws.elasticache

**Supported platform**

- aws

**Description**

Amazon ElastiCache

Use the `aws.elasticache` resource to assess the configuration of Amazon ElastiCache.

**Fields**

| ID               | TYPE                                                                            | DESCRIPTION                              |
| ---------------- | ------------------------------------------------------------------------------- | ---------------------------------------- |
| clusters         | &#91;&#93;dict                                                                  | Deprecated: Use `cacheClusters` instead. |
| cacheClusters    | &#91;&#93;[aws.elasticache.cluster](aws.elasticache.cluster.md)                 | List of cache clusters                   |
| serverlessCaches | &#91;&#93;[aws.elasticache.serverlessCache](aws.elasticache.serverlesscache.md) | List of serverless caches                |

**Examples**

Check if the ElastiCache Redis clusters have automatic backup turned on

```coffee
aws.elasticache.clusters.all(
  _['SnapshotRetentionLimit'] > _['SnapshotRetentionPeriod']
)
```

**References**

- [Security in Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/redis-security.html)
