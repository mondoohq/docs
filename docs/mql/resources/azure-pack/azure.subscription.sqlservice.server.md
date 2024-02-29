---
title: azure.subscription.sqlService.server
id: azure.subscription.sqlService.server
sidebar_label: azure.subscription.sqlService.server
displayed_sidebar: MQL
description: Azure SQL server
---

# azure.subscription.sqlService.server

**Supported platform**

- azure

**Description**

Azure SQL server

**Fields**

| ID                              | TYPE                                                                                                                                            | DESCRIPTION                                  |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| id                              | string                                                                                                                                          | SQL server ID                                |
| name                            | string                                                                                                                                          | SQL server name                              |
| location                        | string                                                                                                                                          | SQL server location                          |
| tags                            | map[string]string                                                                                                                               | SQL server tags                              |
| type                            | string                                                                                                                                          | SQL server type                              |
| properties                      | dict                                                                                                                                            | SQL server properties                        |
| databases                       | &#91;&#93;[azure.subscription.sqlService.database](azure.subscription.sqlservice.database.md)                                                   | SQL server databases                         |
| firewallRules                   | &#91;&#93;[azure.subscription.sqlService.firewallrule](azure.subscription.sqlservice.firewallrule.md)                                           | SQL server firewall rules                    |
| azureAdAdministrators           | &#91;&#93;[azure.subscription.sqlService.server.administrator](azure.subscription.sqlservice.server.administrator.md)                           | SQL server AD administrators                 |
| connectionPolicy                | dict                                                                                                                                            | SQL server connection policy                 |
| auditingPolicy                  | dict                                                                                                                                            | SQL server auditing policy                   |
| securityAlertPolicy             | dict                                                                                                                                            | SQL server security alert policy             |
| encryptionProtector             | dict                                                                                                                                            | SQL server encryption protector              |
| threatDetectionPolicy           | dict                                                                                                                                            | SQL server threat detection policy           |
| vulnerabilityAssessmentSettings | [azure.subscription.sqlService.server.vulnerabilityassessmentsettings](azure.subscription.sqlservice.server.vulnerabilityassessmentsettings.md) | SQL server vulnerability assessment settings |
| virtualNetworkRules             | &#91;&#93;[azure.subscription.sqlService.virtualNetworkRule](azure.subscription.sqlservice.virtualnetworkrule.md)                               |                                              |

**References**

- [Azure SQL documentation](https://learn.microsoft.com/en-us/azure/azure-sql/)
