---
title: azure.subscription.advisorService
id: azure.subscription.advisorService
sidebar_label: azure.subscription.advisorService
displayed_sidebar: MQL
description: Azure Advisor
---

# azure.subscription.advisorService

**Supported platform**

- azure

**Description**

Azure Advisor

Use the `azure.subscription.advisorService` resource to retrieve scoring and recommendations from Microsoft Azure Advisor.

**Fields**

| ID              | TYPE                                                                                                              | DESCRIPTION                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| subscriptionId  | string                                                                                                            | Subscription identifier                    |
| recommendations | &#91;&#93;[azure.subscription.advisorService.recommendation](azure.subscription.advisorservice.recommendation.md) | List of all recommendations by the advisor |
| scores          | &#91;&#93;[azure.subscription.advisorService.score](azure.subscription.advisorservice.score.md)                   | List of scores by categories               |
| averageScore    | float                                                                                                             | Average advisory score                     |
