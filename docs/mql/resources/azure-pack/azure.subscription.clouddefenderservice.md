---
title: azure.subscription.cloudDefenderService
id: azure.subscription.cloudDefenderService
sidebar_label: azure.subscription.cloudDefenderService
displayed_sidebar: MQL
description: Microsoft Defender for Cloud
---

# azure.subscription.cloudDefenderService

**Supported platform**

- azure

**Description**

Microsoft Defender for Cloud

**Fields**

| ID                           | TYPE                                                                                                                            | DESCRIPTION                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| subscriptionId               | string                                                                                                                          | Subscription identifier                                                |
| monitoringAgentAutoProvision | bool                                                                                                                            | Whether the monitoring agent is automatically provisioned on new VMs   |
| defenderForServers           | dict                                                                                                                            | List of Defender for Server components and whether they are enabled    |
| defenderForContainers        | dict                                                                                                                            | List of Defender for Container components and whether they are enabled |
| securityContacts             | &#91;&#93;[azure.subscription.cloudDefenderService.securityContact](azure.subscription.clouddefenderservice.securitycontact.md) | List of configured security contacts                                   |

**References**

- [Microsoft Defender for Cloud Apps overview](https://learn.microsoft.com/en-us/defender-cloud-apps/what-is-defender-for-cloud-apps)
