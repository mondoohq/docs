---
title: gcp.project.monitoringService.alertPolicy
id: gcp.project.monitoringService.alertPolicy
sidebar_label: gcp.project.monitoringService.alertPolicy
displayed_sidebar: MQL
description: GCP monitoring alert policy
---

# gcp.project.monitoringService.alertPolicy

**Supported platform**

- gcp

**Description**

GCP monitoring alert policy

**Fields**

| ID                      | TYPE              | DESCRIPTION                                                                                         |
| ----------------------- | ----------------- | --------------------------------------------------------------------------------------------------- |
| projectId               | string            | Project ID                                                                                          |
| name                    | string            | Alert policy name                                                                                   |
| displayName             | string            | Display name                                                                                        |
| documentation           | dict              | Documentation included with notifications and incidents related to this policy                      |
| labels                  | map[string]string | User-defined labels                                                                                 |
| conditions              | &#91;&#93;dict    | List of conditions for the policy                                                                   |
| combiner                | string            | How to combine the results of multiple conditions to determine if an incident should be opened      |
| enabled                 | bool              | Whether the policy is enabled                                                                       |
| validity                | dict              | Description of how the alert policy is invalid                                                      |
| notificationChannelUrls | &#91;&#93;string  | Notification channel URLs to which notifications should be sent when incidents are opened or closed |
| created                 | time              | Creation timestamp                                                                                  |
| createdBy               | string            | Email address of the user who created the alert policy                                              |
| updated                 | time              | Update timestamp                                                                                    |
| updatedBy               | string            | Email address of the user who last updated the alert policy                                         |
| alertStrategy           | dict              | Configuration for notification channels notifications                                               |

**References**

- [Alerting overview](https://cloud.google.com/monitoring/alerts)
