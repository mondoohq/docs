---
title: azure.subscription.authorizationService
id: azure.subscription.authorizationService
sidebar_label: azure.subscription.authorizationService
displayed_sidebar: MQL
description: Azure authorization
---

# azure.subscription.authorizationService

**Supported platform**

- azure

**Description**

Azure authorization

**Fields**

| ID              | TYPE                                                                                                                          | DESCRIPTION                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| subscriptionId  | string                                                                                                                        | Subscription identifier                     |
| roleDefinitions | &#91;&#93;[azure.subscription.authorizationService.roleDefinition](azure.subscription.authorizationservice.roledefinition.md) | Role definitions for the Azure subscription |

**References**

- [Azure RBAC documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/)
