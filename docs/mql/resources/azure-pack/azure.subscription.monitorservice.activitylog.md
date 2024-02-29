---
title: azure.subscription.monitorService.activityLog
id: azure.subscription.monitorService.activityLog
sidebar_label: azure.subscription.monitorService.activityLog
displayed_sidebar: MQL
description: Azure Monitor activity log
---

# azure.subscription.monitorService.activityLog

**Supported platform**

- azure

**Description**

Azure Monitor activity log

**Fields**

| ID             | TYPE                                                                                                                    | DESCRIPTION                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| subscriptionId | string                                                                                                                  | Subscription identifier     |
| alerts         | &#91;&#93;[azure.subscription.monitorService.activityLog.alert](azure.subscription.monitorservice.activitylog.alert.md) | List of activity log alerts |

**References**

- [Azure Database for MariaDB documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/)
