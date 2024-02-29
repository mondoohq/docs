---
title: azure.subscription.authorizationService.roleDefinition.permission
id: azure.subscription.authorizationService.roleDefinition.permission
sidebar_label: azure.subscription.authorizationService.roleDefinition.permission
displayed_sidebar: MQL
description: Azure role definition permission
---

# azure.subscription.authorizationService.roleDefinition.permission

**Supported platform**

- azure

**Description**

Azure role definition permission

**Fields**

| ID                 | TYPE             | DESCRIPTION                                                      |
| ------------------ | ---------------- | ---------------------------------------------------------------- |
| id                 | string           | ID of the permission                                             |
| allowedActions     | &#91;&#93;string | List of allowed actions that are attached to the permission      |
| deniedActions      | &#91;&#93;string | List of denied actions that are attached to the permission       |
| allowedDataActions | &#91;&#93;string | List of allowed data actions that are attached to the permission |
| deniedDataActions  | &#91;&#93;string | List of denied data actions that are attached to the permission  |

**References**

- [Azure RBAC documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/)
