---
title: azure.subscription.monitorService.activityLog.alert
id: azure.subscription.monitorService.activityLog.alert
sidebar_label: azure.subscription.monitorService.activityLog.alert
displayed_sidebar: MQL
description: Azure Monitor activity log alert
---

# azure.subscription.monitorService.activityLog.alert

**Supported platform**

- azure

**Description**

Azure Monitor activity log alert

**Fields**

| ID          | TYPE              | DESCRIPTION                                                     |
| ----------- | ----------------- | --------------------------------------------------------------- |
| id          | string            | ID of the activity log alert                                    |
| type        | string            | Type of the activity log alert                                  |
| name        | string            | Name of the activity log alert                                  |
| description | string            | Description of the activity log alert                           |
| conditions  | &#91;&#93;dict    | Conditions for the activity log alert, all of which must be met |
| location    | string            | Location of the alert                                           |
| tags        | map[string]string | Tags of the alert                                               |
| actions     | &#91;&#93;dict    | Actions that activate when the conditions are met               |
| scopes      | &#91;&#93;string  | List of resource IDs that must be present to trigger the alert  |

**References**

- [Azure Database for MariaDB documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/)
