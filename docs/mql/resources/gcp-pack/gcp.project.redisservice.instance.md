---
title: gcp.project.redisService.instance
id: gcp.project.redisService.instance
sidebar_label: gcp.project.redisService.instance
displayed_sidebar: MQL
description: Google Cloud (GCP) Redis instance
---

# gcp.project.redisService.instance

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Redis instance

**Fields**

| ID                           | TYPE                                                                                                  | DESCRIPTION                                                                                                                                                                                |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name                         | string                                                                                                | Unique name of the resource in this scope including project and location                                                                                                                   |
| projectId                    | string                                                                                                | Project ID                                                                                                                                                                                 |
| displayName                  | string                                                                                                | An arbitrary and optional user-provided name for the instance                                                                                                                              |
| labels                       | map[string]string                                                                                     | Resource labels to represent user provided metadata                                                                                                                                        |
| locationId                   | string                                                                                                | The zone where the instance will be provisioned                                                                                                                                            |
| redisVersion                 | string                                                                                                | The version of Redis software                                                                                                                                                              |
| reservedIpRange              | string                                                                                                | The CIDR range of internal addresses that are reserved for this instance                                                                                                                   |
| secondaryIpRange             | string                                                                                                | Additional IP range for node placement                                                                                                                                                     |
| host                         | string                                                                                                | Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service                                                                                             |
| port                         | int                                                                                                   | The port number of the exposed Redis endpoint                                                                                                                                              |
| currentLocationId            | string                                                                                                | The current zone where the Redis primary node is located                                                                                                                                   |
| createTime                   | time                                                                                                  | The time the instance was created                                                                                                                                                          |
| state                        | string                                                                                                | The current state of this instance                                                                                                                                                         |
| statusMessage                | string                                                                                                | Additional information about the current status of this instance, if available                                                                                                             |
| redisConfigs                 | map[string]string                                                                                     | Redis configuration parameters, according to http://redis.io/topics/config                                                                                                                 |
| memorySizeGb                 | int                                                                                                   | Redis memory size in GiB                                                                                                                                                                   |
| AuthorizedNetwork            | string                                                                                                | The full name of the Google Compute Engine, [network](https://cloud.google.com/vpc/docs/vpc) to which the, instance is connected. If left unspecified, the `default` network, will be used |
| persistenceIamIdentity       | string                                                                                                | Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage                                                                                               |
| connectMode                  | string                                                                                                | The network connect mode of the Redis instance                                                                                                                                             |
| authEnabled                  | bool                                                                                                  | Redis AUTH is enabled or not for the instance. If set to "true" AUTH is enabled on the instance                                                                                            |
| replicaCount                 | int                                                                                                   | The number of replica nodes                                                                                                                                                                |
| nodes                        | &#91;&#93;[gcp.project.redisService.instance.nodeInfo](gcp.project.redisservice.instance.nodeinfo.md) | Info per node                                                                                                                                                                              |
| readEndpoint                 | string                                                                                                | Hostname or IP address of the exposed readonly Redis endpoint                                                                                                                              |
| readEndpointPort             | int                                                                                                   | The port number of the exposed readonly redis endpoint                                                                                                                                     |
| customerManagedKey           | string                                                                                                | The KMS key reference that the customer provides when trying to create the instance                                                                                                        |
| maintenanceVersion           | string                                                                                                | The self service update maintenance version                                                                                                                                                |
| availableMaintenanceVersions | &#91;&#93;string                                                                                      | The available maintenance versions that an instance could update to                                                                                                                        |
