---
title: azure.subscription.aksService
id: azure.subscription.aksService
sidebar_label: azure.subscription.aksService
displayed_sidebar: MQL
description: Azure Kubernetes Service
---

# azure.subscription.aksService

**Supported platform**

- azure

**Description**

Azure Kubernetes Service

**Fields**

| ID             | TYPE                                                                                        | DESCRIPTION                                       |
| -------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| subscriptionId | string                                                                                      | Subscription identifier                           |
| clusters       | &#91;&#93;[azure.subscription.aksService.cluster](azure.subscription.aksservice.cluster.md) | List all the AKS clusters inside the subscription |
