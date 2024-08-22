---
title: azure.subscription.managedIdentity
id: azure.subscription.managedIdentity
sidebar_label: azure.subscription.managedIdentity
displayed_sidebar: MQL
description: Azure managed identity
---

# azure.subscription.managedIdentity

**Supported platform**

- azure

**Description**

Azure managed identity

**Fields**

| ID              | TYPE                                                                                                                          | DESCRIPTION |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| name            | string                                                                                                                        |             |
| clientId        | string                                                                                                                        |             |
| principalId     | string                                                                                                                        |             |
| tenantId        | string                                                                                                                        |             |
| roleAssignments | &#91;&#93;[azure.subscription.authorizationService.roleAssignment](azure.subscription.authorizationservice.roleassignment.md) |             |
