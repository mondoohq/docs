---
title: aws.redshift.cluster
id: aws.redshift.cluster
sidebar_label: aws.redshift.cluster
displayed_sidebar: MQL
description: Amazon Redshift cluster
---

# aws.redshift.cluster

**Supported platform**

- aws

**Description**

Amazon Redshift cluster

**Fields**

| ID                               | TYPE              | DESCRIPTION                                                                                    |
| -------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| allowVersionUpgrade              | bool              | Whether major upgrades are applied automatically                                               |
| arn                              | string            | ARN for the cluster                                                                            |
| automatedSnapshotRetentionPeriod | int               | Number of days automatic cluster snapshots are retained                                        |
| availabilityZone                 | string            | Availability zone where the cluster exists                                                     |
| clusterParameterGroupNames       | &#91;&#93;string  | List of cluster parameter group names                                                          |
| clusterRevisionNumber            | string            | Specific revision number of the database in the cluster                                        |
| clusterStatus                    | string            | Current state of this cluster: available, creating, deleting, rebooting, renaming, or resizing |
| clusterSubnetGroupName           | string            | Name of the subnet group associated with the cluster                                           |
| clusterVersion                   | string            | Version of the Redshift engine running on the cluster                                          |
| createdAt                        | time              | Cluster creation timestamp                                                                     |
| dbName                           | string            | Name of the initial database that was created when the cluster was created                     |
| encrypted                        | bool              | Whether the cluster is encrypted at rest                                                       |
| enhancedVpcRouting               | bool              | Whether enhanced VPC routing is enabled for the cluster traffic                                |
| logging                          | dict              | Logging configuration for the cluster                                                          |
| masterUsername                   | string            | Master user name for the cluster.                                                              |
| name                             | string            | Name of the initial database created when cluster was created                                  |
| nextMaintenanceWindowStartTime   | time              | The next scheduled maintenance window                                                          |
| nodeType                         | string            | The node type for the nodes in the cluster                                                     |
| numberOfNodes                    | int               | The number of nodes in the cluster                                                             |
| parameters                       | &#91;&#93;dict    | Detailed list of parameters for each parameter group name                                      |
| preferredMaintenanceWindow       | string            | Weekly time range for system maintenance (in UTC)                                              |
| publiclyAccessible               | bool              | Whether the cluster is publicly accessible                                                     |
| region                           | string            | Region where the cluster exists                                                                |
| tags                             | map[string]string | Tags for the cluster                                                                           |
| vpcId                            | string            | The ID of the VPC where the cluster is running                                                 |
