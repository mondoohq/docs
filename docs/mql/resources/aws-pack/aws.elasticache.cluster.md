---
title: aws.elasticache.cluster
id: aws.elasticache.cluster
sidebar_label: aws.elasticache.cluster
displayed_sidebar: MQL
description: Amazon ElastiCache cluster
---

# aws.elasticache.cluster

**Supported platform**

- aws

**Description**

Amazon ElastiCache cluster

**Fields**

| ID                        | TYPE                                                        | DESCRIPTION                                                                                                                                                     |
| ------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| arn                       | string                                                      | ARN for the cluster                                                                                                                                             |
| atRestEncryptionEnabled   | bool                                                        | Whether the cluster has at rest encryption enabled                                                                                                              |
| authTokenEnabled          | bool                                                        | Whether Redis authentication tokens (or passwords) enable Redis to require a password before allowing clients to run commands                                   |
| authTokenLastModifiedDate | time                                                        | Date and time authentication token was last modified                                                                                                            |
| autoMinorVersionUpgrade   | bool                                                        | Whether the cluster is configured to auto-upgrade to the next minor version (Redis 6.0 or later)                                                                |
| cacheClusterCreateTime    | time                                                        | Date and time when the cluster was created                                                                                                                      |
| cacheClusterId            | string                                                      | User-supplied unique key that identifies the cluster                                                                                                            |
| cacheClusterStatus        | string                                                      | Current state of the cluster: available, creating, deleted, deleting, incompatible-network, modifying, rebooting cluster nodes, restore-failed, or snapshotting |
| cacheNodeType             | string                                                      | Name of the compute and memory capacity node type for the cluster                                                                                               |
| cacheNodes                | &#91;&#93;string                                            | A list of cache nodes that are members of the cluster                                                                                                           |
| cacheSecurityGroups       | &#91;&#93;string                                            | A list of cache security group elements, composed of name and status sub-elements                                                                               |
| cacheSubnetGroupName      | string                                                      | Name of the cache subnet group associated with the cluster                                                                                                      |
| clientDownloadLandingPage | string                                                      | URL of the web page where you can download the latest ElastiCache client library                                                                                |
| nodeType                  | string                                                      | Node type for the nodes in the cluster                                                                                                                          |
| engine                    | string                                                      | Name of the cache engine used for this cluster: Memcached or Redis                                                                                              |
| engineVersion             | string                                                      | Version of the cache engine that is used in this cluster                                                                                                        |
| ipDiscovery               | string                                                      | Network type associated with the cluster: ipv4 or ipv6                                                                                                          |
| logDeliveryConfigurations | &#91;&#93;dict                                              | Log delivery configurations being modified                                                                                                                      |
| networkType               | string                                                      | Supported network connection type for the cluster: ipv4, ipv6, or dual_stack                                                                                    |
| notificationConfiguration | string                                                      | Describes a notification topic and its status                                                                                                                   |
| numCacheNodes             | int                                                         | Number of cache nodes in the cluster                                                                                                                            |
| preferredAvailabilityZone | string                                                      | Name of the availability zone in which the cluster is located or "Multiple" if the cache nodes are located in different availability zones                      |
| region                    | string                                                      | Region where the cluster exists                                                                                                                                 |
| securityGroups            | &#91;&#93;[aws.ec2.securitygroup](aws.ec2.securitygroup.md) | A list of VPC security groups associated with the cluster                                                                                                       |
| snapshotRetentionLimit    | int                                                         | Number of days ElastiCache retains automatic cluster snapshots before deleting them                                                                             |
| snapshotWindow            | string                                                      | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your shard.                                                            |
| transitEncryptionEnabled  | bool                                                        | Whether in-transit encryption is enabled                                                                                                                        |
| transitEncryptionMode     | string                                                      | Whether migrating clients to use in-transit encryption (with no downtime) is allowed                                                                            |
