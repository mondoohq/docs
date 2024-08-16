---
title: azure.subscription
id: azure.subscription
sidebar_label: azure.subscription
displayed_sidebar: MQL
description: Azure subscription
---

# azure.subscription

**Supported platform**

- azure

**Description**

Azure subscription

Use the `azure.subscription` resource to assess the configuration of Azure subscriptions.

**Fields**

| ID                    | TYPE                                                                                  | DESCRIPTION                                   |
| --------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------- |
| id                    | string                                                                                | Full resource identifier of the subscription  |
| name                  | string                                                                                | Name of the subscription                      |
| subscriptionId        | string                                                                                | Subscription identifier                       |
| tenantId              | string                                                                                | Subscription tenant identifier                |
| managedByTenants      | &#91;&#93;string                                                                      | List of tenants that manage the subscription  |
| tags                  | map[string]string                                                                     | Subscription tags                             |
| state                 | string                                                                                | Subscription state                            |
| authorizationSource   | string                                                                                | Subscription authorization source             |
| subscriptionsPolicies | dict                                                                                  | Subscription policies                         |
| resources             | &#91;&#93;[azure.subscription.resource](azure.subscription.resource.md)               | All resources in a subscription               |
| resourceGroups        | &#91;&#93;[azure.subscription.resourcegroup](azure.subscription.resourcegroup.md)     | Resource groups in the subscription           |
| compute               | [azure.subscription.computeService](azure.subscription.computeservice.md)             | Compute resources in the subscription         |
| network               | [azure.subscription.networkService](azure.subscription.networkservice.md)             | Network resources in the subscription         |
| storage               | [azure.subscription.storageService](azure.subscription.storageservice.md)             | Storage resources in the subscription         |
| web                   | [azure.subscription.webService](azure.subscription.webservice.md)                     | Web resources in the subscription             |
| sql                   | [azure.subscription.sqlService](azure.subscription.sqlservice.md)                     | SQL resources in the subscription             |
| mySql                 | [azure.subscription.mySqlService](azure.subscription.mysqlservice.md)                 | MySQL resources inside the subscription       |
| postgreSql            | [azure.subscription.postgreSqlService](azure.subscription.postgresqlservice.md)       | PostgreSQL resources in the subscription      |
| mariaDb               | [azure.subscription.mariaDbService](azure.subscription.mariadbservice.md)             | MariaDB resources in the subscription         |
| cosmosDb              | [azure.subscription.cosmosDbService](azure.subscription.cosmosdbservice.md)           | Cosmos DB resources in the subscription       |
| keyVault              | [azure.subscription.keyVaultService](azure.subscription.keyvaultservice.md)           | Azure Key Vault resources in the subscription |
| authorization         | [azure.subscription.authorizationService](azure.subscription.authorizationservice.md) | Authorization resources in the subscription   |
| monitor               | [azure.subscription.monitorService](azure.subscription.monitorservice.md)             | Monitor resources in the subscription         |
| cloudDefender         | [azure.subscription.cloudDefenderService](azure.subscription.clouddefenderservice.md) | Cloud defender resources in the subscription  |
| aks                   | [azure.subscription.aksService](azure.subscription.aksservice.md)                     | AKS resources in the subscription             |
| advisor               | [azure.subscription.advisorService](azure.subscription.advisorservice.md)             | Advisor resources in the subscription         |
| policy                | [azure.subscription.policy](azure.subscription.policy.md)                             | Policy service in the subscription            |

**Examples**

Return the subscription ID and a list of tenants that manage the subscription

```coffee
azure.subscription {
  subscriptionId
  managedByTenants
}
```

**References**

- [Subscriptions, licenses, accounts, and tenants for Microsoft's cloud offerings](https://learn.microsoft.com/en-us/microsoft-365/enterprise/subscriptions-licenses-accounts-and-tenants-for-microsoft-cloud-offerings)
