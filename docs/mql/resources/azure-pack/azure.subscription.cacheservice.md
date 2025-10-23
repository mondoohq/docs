---
title: azure.subscription.cacheService
id: azure.subscription.cacheService
sidebar_label: azure.subscription.cacheService
displayed_sidebar: MQL
description: Azure Cache for Redis
---

# azure.subscription.cacheService

**Supported platform**

- azure

**Description**

Azure Cache for Redis

**Fields**

| ID             | TYPE                                                                                                        | DESCRIPTION             |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------- |
| subscriptionId | string                                                                                                      | Subscription identifier |
| redis          | &#91;&#93;[azure.subscription.cacheService.redisInstance](azure.subscription.cacheservice.redisinstance.md) | List of redis caches    |
