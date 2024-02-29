---
title: azure.subscription.advisorService.securityScore
id: azure.subscription.advisorService.securityScore
sidebar_label: azure.subscription.advisorService.securityScore
displayed_sidebar: MQL
description: Azure Advisor security score
---

# azure.subscription.advisorService.securityScore

**Supported platform**

- azure

**Description**

Azure Advisor security score

**Fields**

| ID                     | TYPE   | DESCRIPTION                                                                                                        |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| id                     | string | Security score identifier                                                                                          |
| score                  | float  | Security score score                                                                                               |
| date                   | time   | The date the score was calculated                                                                                  |
| potentialScoreIncrease | float  | The potential percentage increase in overall score at subscription level after all recommendations are implemented |
| impactedResourcesCount | int    | The number of impacted resources                                                                                   |
| categoryCount          | int    | The count of impacted categories                                                                                   |
| consumptionUnits       | float  | The consumption units for the score                                                                                |
