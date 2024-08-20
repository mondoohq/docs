---
title: azure.subscription.authorizationService.roleAssignment
id: azure.subscription.authorizationService.roleAssignment
sidebar_label: azure.subscription.authorizationService.roleAssignment
displayed_sidebar: MQL
description: Azure role assignment
---

# azure.subscription.authorizationService.roleAssignment

**Supported platform**

- azure

**Description**

Azure role assignment

**Fields**

| ID          | TYPE                                                                                                                | DESCRIPTION |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| id          | string                                                                                                              |             |
| description | string                                                                                                              |             |
| type        | string                                                                                                              |             |
| scope       | string                                                                                                              |             |
| principalId | string                                                                                                              |             |
| condition   | string                                                                                                              |             |
| createdAt   | time                                                                                                                |             |
| updatedAt   | time                                                                                                                |             |
| role        | [azure.subscription.authorizationService.roleDefinition](azure.subscription.authorizationservice.roledefinition.md) |             |
