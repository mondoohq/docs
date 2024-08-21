---
title: microsoft.tenant
id: microsoft.tenant
sidebar_label: microsoft.tenant
displayed_sidebar: MQL
description: Microsoft Entra tenant
---

# microsoft.tenant

**Description**

Microsoft Entra tenant

**Fields**

| ID                    | TYPE           | DESCRIPTION                                                  |
| --------------------- | -------------- | ------------------------------------------------------------ |
| id                    | string         | Organization ID                                              |
| assignedPlans         | &#91;&#93;dict | Service plans associated with the tenant                     |
| provisionedPlans      | &#91;&#93;dict | Provisioned plan                                             |
| createdDateTime       | time           | Deprecated: use `createdAt` instead                          |
| displayName           | string         | Deprecated: use `name` instead                               |
| name                  | string         | Tenant display name                                          |
| verifiedDomains       | &#91;&#93;dict | Organization verified domains                                |
| onPremisesSyncEnabled | bool           | Whether password hash sync is enabled for hybrid deployments |
| createdAt             | time           | Tenant creation date                                         |
| type                  | string         | Tenant type                                                  |
| subscriptions         | &#91;&#93;dict | Commercial subscription                                      |
