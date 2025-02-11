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

| ID                              | TYPE                                                                                                                            | DESCRIPTION                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| subscriptionId                  | string                                                                                                                          | Subscription identifier                                               |
| monitoringAgentAutoProvision    | bool                                                                                                                            | Whether the monitoring agent is automatically provisioned on new VMs  |
| defenderForServers              | dict                                                                                                                            | List of Defender for Servers components and whether they are enabled  |
| defenderForAppServices          | dict                                                                                                                            | Microsoft Defender for App Service configuration                      |
| defenderForSqlServersOnMachines | dict                                                                                                                            | Microsoft Defender for SQL servers on machines configuration          |
| defenderForSqlDatabases         | dict                                                                                                                            | Microsoft Defender for Azure SQL Databases configuration              |
| defenderForOpenSourceDatabases  | dict                                                                                                                            | Microsoft Defender for open-source relational databases configuration |
| defenderForCosmosDb             | dict                                                                                                                            | Microsoft Defender for Azure Cosmos DB configuration                  |
| defenderForStorageAccounts      | dict                                                                                                                            | Microsoft Defender for Storage Accounts configuration                 |
| defenderForKeyVaults            | dict                                                                                                                            | Microsoft Defender for Key Vault configuration                        |
| defenderForResourceManager      | dict                                                                                                                            | Microsoft Defender for Resource Manager configuration                 |
| defenderForContainers           | dict                                                                                                                            | Defender for Containers components configuration                      |
| securityContacts                | &#91;&#93;[azure.subscription.cloudDefenderService.securityContact](azure.subscription.clouddefenderservice.securitycontact.md) | List of configured security contacts                                  |
| settingsMCAS                    | [azure.subscription.cloudDefenderService.settings](azure.subscription.clouddefenderservice.settings.md)                         | Settings for MCAS                                                     |
| settingsWDATP                   | [azure.subscription.cloudDefenderService.settings](azure.subscription.clouddefenderservice.settings.md)                         | Settings for WDATP                                                    |
| settingsSentinel                | [azure.subscription.cloudDefenderService.settings](azure.subscription.clouddefenderservice.settings.md)                         | Settings for Sentinel                                                 |

**References**

- [Microsoft Defender for Cloud Apps overview](https://learn.microsoft.com/en-us/defender-cloud-apps/what-is-defender-for-cloud-apps)
