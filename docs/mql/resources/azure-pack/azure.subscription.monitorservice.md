---
title: azure.subscription.monitorService
id: azure.subscription.monitorService
sidebar_label: azure.subscription.monitorService
displayed_sidebar: MQL
description: Azure Monitor
---

# azure.subscription.monitorService

**Supported platform**

- azure

**Description**

Azure Monitor

**Fields**

| ID                  | TYPE                                                                                                                      | DESCRIPTION                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| subscriptionId      | string                                                                                                                    | Subscription identifier                          |
| logProfiles         | &#91;&#93;[azure.subscription.monitorService.logprofile](azure.subscription.monitorservice.logprofile.md)                 | List of log profiles                             |
| diagnosticSettings  | &#91;&#93;[azure.subscription.monitorService.diagnosticsetting](azure.subscription.monitorservice.diagnosticsetting.md)   | List of diagnostic settings for the subscription |
| applicationInsights | &#91;&#93;[azure.subscription.monitorService.applicationInsight](azure.subscription.monitorservice.applicationinsight.md) | Application insights for the subscription        |
| activityLog         | [azure.subscription.monitorService.activityLog](azure.subscription.monitorservice.activitylog.md)                         | Monitor activity log                             |

**References**

- [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/)
