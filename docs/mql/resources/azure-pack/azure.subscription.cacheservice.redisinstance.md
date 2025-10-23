---
title: azure.subscription.cacheService.redisInstance
id: azure.subscription.cacheService.redisInstance
sidebar_label: azure.subscription.cacheService.redisInstance
displayed_sidebar: MQL
description: Azure Cache for Redis instance
---

# azure.subscription.cacheService.redisInstance

**Supported platform**

- azure

**Description**

Azure Cache for Redis instance

**Fields**

| ID                  | TYPE   | DESCRIPTION                                                                             |
| ------------------- | ------ | --------------------------------------------------------------------------------------- |
| id                  | string | ID of the Redis cache                                                                   |
| name                | string | Name of the Redis cache                                                                 |
| location            | string | Location of the Redis cache                                                             |
| type                | string | Type of the Redis cache                                                                 |
| properties          | dict   | Properties of the Redis cache                                                           |
| enableNonSslPort    | bool   | Specifies whether the non-ssl Redis server port (6379) is enabled                       |
| hostName            | string | Redis host name                                                                         |
| publicNetworkAccess | string | publicNetworkAccess possible values are "Enabled" and "Disabled"                        |
| port                | int    | Redis port (non-SSL)                                                                    |
| sslPort             | int    | Redis SSL port                                                                          |
| provisioningState   | string | Provisioning state with possible values Creating, Deleting, Failed, Succeeded, Updating |
| redisVersion        | string | Redis version                                                                           |
| replicasPerMaster   | int    | Number of replicas per master                                                           |
| replicasPerPrimary  | int    | Number of replicas per primary                                                          |
| sku                 | dict   | SKU information for the Redis cache                                                     |
| tags                | dict   | Tags of redis cache                                                                     |
