---
title: azure.subscription.advisorService.score
id: azure.subscription.advisorService.score
sidebar_label: azure.subscription.advisorService.score
displayed_sidebar: MQL
description: Azure Advisor score
---

# azure.subscription.advisorService.score

**Supported platform**

- azure

**Description**

Azure Advisor score

**Fields**

| ID           | TYPE                                                                                                      | DESCRIPTION                                                      |
| ------------ | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| id           | string                                                                                                    | Score identifier                                                 |
| name         | string                                                                                                    | Score name                                                       |
| type         | string                                                                                                    | Score type                                                       |
| currentScore | [azure.subscription.advisorService.securityScore](azure.subscription.advisorservice.securityscore.md)     | Current score for the advisor category                           |
| timeSeries   | &#91;&#93;[azure.subscription.advisorService.timeSeries](azure.subscription.advisorservice.timeseries.md) | List of time series, containing previous scores for the category |
