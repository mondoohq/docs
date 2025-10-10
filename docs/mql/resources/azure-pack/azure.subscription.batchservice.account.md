---
title: azure.subscription.batchService.account
id: azure.subscription.batchService.account
sidebar_label: azure.subscription.batchService.account
displayed_sidebar: MQL
description: Azure Batch account
---

# azure.subscription.batchService.account

**Supported platform**

- azure

**Description**

Azure Batch account

**Fields**

| ID                                    | TYPE                                                                                                                    | DESCRIPTION                                            |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| id                                    | string                                                                                                                  | Batch account ID                                       |
| name                                  | string                                                                                                                  | Batch account name                                     |
| location                              | string                                                                                                                  | Batch account location                                 |
| tags                                  | map[string]string                                                                                                       | Batch account tags                                     |
| type                                  | string                                                                                                                  | Batch account type                                     |
| identity                              | dict                                                                                                                    | Batch account identity                                 |
| properties                            | dict                                                                                                                    | Batch account properties                               |
| accountEndpoint                       | string                                                                                                                  | Batch account endpoint                                 |
| provisioningState                     | string                                                                                                                  | Batch account provisioning state                       |
| poolAllocationMode                    | string                                                                                                                  | Batch account pool allocation mode                     |
| publicNetworkAccess                   | string                                                                                                                  | Batch account public network access level              |
| nodeManagementEndpoint                | string                                                                                                                  | Batch account node management endpoint                 |
| activeJobAndJobScheduleQuota          | int                                                                                                                     | Batch account active job and job schedule quota        |
| dedicatedCoreQuota                    | int                                                                                                                     | Batch account dedicated core quota                     |
| dedicatedCoreQuotaPerVmFamilyEnforced | bool                                                                                                                    | Whether dedicated core quota per VM family is enforced |
| dedicatedCoreQuotaPerVmFamily         | &#91;&#93;dict                                                                                                          | Batch account dedicated core quota per VM family       |
| lowPriorityCoreQuota                  | int                                                                                                                     | Batch account low priority core quota                  |
| poolQuota                             | int                                                                                                                     | Batch account pool quota                               |
| allowedAuthenticationModes            | &#91;&#93;string                                                                                                        | Batch account allowed authentication modes             |
| autoStorage                           | dict                                                                                                                    | Batch account auto storage settings                    |
| encryption                            | dict                                                                                                                    | Batch account encryption settings                      |
| keyVaultReference                     | dict                                                                                                                    | Batch account key vault reference                      |
| networkProfile                        | dict                                                                                                                    | Batch account network profile                          |
| privateEndpointConnections            | &#91;&#93;dict                                                                                                          | Batch account private endpoint connections             |
| pools                                 | &#91;&#93;[azure.subscription.batchService.account.pool](azure.subscription.batchservice.account.pool.md)               | Batch account pools                                    |
| diagnosticSettings                    | &#91;&#93;[azure.subscription.monitorService.diagnosticsetting](azure.subscription.monitorservice.diagnosticsetting.md) | Batch account diagnostic settings                      |
