---
title: azure.subscription.advisorService.timeSeries
id: azure.subscription.advisorService.timeSeries
sidebar_label: azure.subscription.advisorService.timeSeries
displayed_sidebar: MQL
description: Azure Advisor time series
---

# azure.subscription.advisorService.timeSeries

**Supported platform**

- azure

**Description**

Azure Advisor time series

**Fields**

| ID               | TYPE                                                                                                            | DESCRIPTION                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| id               | string                                                                                                          | Advisor time series identifier            |
| aggregationLevel | string                                                                                                          | The aggregation level for the time series |
| scores           | &#91;&#93;[azure.subscription.advisorService.securityScore](azure.subscription.advisorservice.securityscore.md) | The scores in the time series             |
