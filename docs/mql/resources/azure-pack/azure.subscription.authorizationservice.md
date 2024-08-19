---
title: azure.subscription.authorizationService
id: azure.subscription.authorizationService
sidebar_label: azure.subscription.authorizationService
displayed_sidebar: MQL
description: Azure IAM service
---

# azure.subscription.authorizationService

**Supported platform**

- azure

**Description**

Azure IAM service

**Fields**

| ID              | TYPE                                                                                                                          | DESCRIPTION                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| subscriptionId  | string                                                                                                                        | Subscription identifier                     |
| roles           | &#91;&#93;[azure.subscription.authorizationService.roleDefinition](azure.subscription.authorizationservice.roledefinition.md) | Role definitions for the Azure subscription |
| roleDefinitions | &#91;&#93;[azure.subscription.authorizationService.roleDefinition](azure.subscription.authorizationservice.roledefinition.md) | Deprecated: use `roles` instead             |

**References**

- [Azure RBAC documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/)
