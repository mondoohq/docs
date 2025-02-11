---
title: azure.subscription.cloudDefenderService.securityContact
id: azure.subscription.cloudDefenderService.securityContact
sidebar_label: azure.subscription.cloudDefenderService.securityContact
displayed_sidebar: MQL
description: Microsoft Defender for Cloud security contact
---

# azure.subscription.cloudDefenderService.securityContact

**Supported platform**

- azure

**Description**

Microsoft Defender for Cloud security contact

**Fields**

| ID                  | TYPE             | DESCRIPTION                                                   |
| ------------------- | ---------------- | ------------------------------------------------------------- |
| id                  | string           | ID of the security contact                                    |
| name                | string           | Name of the security contact                                  |
| emails              | &#91;&#93;string | Emails that receive security alerts                           |
| alertNotifications  | dict             | Deprecated: use `notificationSources` instead                 |
| notificationSources | dict             | A collection of sources which evaluate the email notification |
| notificationsByRole | dict             | Notifications by role settings                                |

**References**

- [Microsoft Defender for Cloud Apps overview](https://learn.microsoft.com/en-us/defender-cloud-apps/what-is-defender-for-cloud-apps)
