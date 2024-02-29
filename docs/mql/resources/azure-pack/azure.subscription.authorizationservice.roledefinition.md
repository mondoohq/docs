---
title: azure.subscription.authorizationService.roleDefinition
id: azure.subscription.authorizationService.roleDefinition
sidebar_label: azure.subscription.authorizationService.roleDefinition
displayed_sidebar: MQL
description: Azure role definition
---

# azure.subscription.authorizationService.roleDefinition

**Supported platform**

- azure

**Description**

Azure role definition

**Fields**

| ID          | TYPE                                                                                                                                                | DESCRIPTION                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| id          | string                                                                                                                                              | ID of the role definition                            |
| description | string                                                                                                                                              | Description of the role definition                   |
| name        | string                                                                                                                                              | Name of the role definition                          |
| isCustom    | bool                                                                                                                                                | Whether the role definition is manually created      |
| scopes      | &#91;&#93;string                                                                                                                                    | Scopes for which the role definition applies         |
| permissions | &#91;&#93;[azure.subscription.authorizationService.roleDefinition.permission](azure.subscription.authorizationservice.roledefinition.permission.md) | Permissions that are attached to the role definition |

**References**

- [Azure RBAC documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/)
