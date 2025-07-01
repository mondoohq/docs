---
title: microsoft.policies.externalIdentitiesPolicy
id: microsoft.policies.externalIdentitiesPolicy
sidebar_label: microsoft.policies.externalIdentitiesPolicy
displayed_sidebar: MQL
description: Tenant-wide policy that controls whether external users can leave a tenant via self-service controls
---

# microsoft.policies.externalIdentitiesPolicy

**Description**

Tenant-wide policy that controls whether external users can leave a tenant via self-service controls

**Fields**

| ID                             | TYPE   | DESCRIPTION                                                                                                                                                            |
| ------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                             | string | Policy ID                                                                                                                                                              |
| displayName                    | string | Policy display name                                                                                                                                                    |
| description                    | string | Policy description                                                                                                                                                     |
| allowExternalIdentitiesToLeave | bool   | Defines whether external users can leave the guest tenant., If set to false, self-service controls are disabled, and the admin must manually remove the external user. |
