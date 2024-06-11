---
title: azure.subscription.sqlService.server
id: azure.subscription.sqlService.server
sidebar_label: azure.subscription.sqlService.server
displayed_sidebar: MQL
description: Azure SQL Database server
---

# azure.subscription.sqlService.server

**Supported platform**

- azure

**Description**

Azure SQL Database server

**Fields**

| ID                              | TYPE                                                                                                                                            | DESCRIPTION                                           |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| id                              | string                                                                                                                                          | SQL Database server ID                                |
| name                            | string                                                                                                                                          | SQL Database server name                              |
| location                        | string                                                                                                                                          | SQL Database server location                          |
| tags                            | map[string]string                                                                                                                               | SQL Database server tags                              |
| type                            | string                                                                                                                                          | SQL Database server type                              |
| properties                      | dict                                                                                                                                            | SQL Database server properties                        |
| databases                       | &#91;&#93;[azure.subscription.sqlService.database](azure.subscription.sqlservice.database.md)                                                   | SQL Database server databases                         |
| firewallRules                   | &#91;&#93;[azure.subscription.sqlService.firewallrule](azure.subscription.sqlservice.firewallrule.md)                                           | SQL Database server firewall rules                    |
| azureAdAdministrators           | &#91;&#93;[azure.subscription.sqlService.server.administrator](azure.subscription.sqlservice.server.administrator.md)                           | SQL Database server Entra ID administrators           |
| connectionPolicy                | dict                                                                                                                                            | SQL Database server connection policy                 |
| auditingPolicy                  | dict                                                                                                                                            | SQL Database server auditing policy                   |
| securityAlertPolicy             | dict                                                                                                                                            | SQL Database server security alert policy             |
| encryptionProtector             | dict                                                                                                                                            | SQL Database server encryption protector              |
| threatDetectionPolicy           | dict                                                                                                                                            | SQL Database server threat detection policy           |
| vulnerabilityAssessmentSettings | [azure.subscription.sqlService.server.vulnerabilityassessmentsettings](azure.subscription.sqlservice.server.vulnerabilityassessmentsettings.md) | SQL Database server vulnerability assessment settings |
| virtualNetworkRules             | &#91;&#93;[azure.subscription.sqlService.virtualNetworkRule](azure.subscription.sqlservice.virtualnetworkrule.md)                               |                                                       |

**References**

- [Azure SQL documentation](https://learn.microsoft.com/en-us/azure/azure-sql/)
