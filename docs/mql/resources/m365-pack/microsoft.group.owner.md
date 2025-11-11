---
title: microsoft.group.owner
id: microsoft.group.owner
sidebar_label: microsoft.group.owner
displayed_sidebar: MQL
description: Group owner (can be a user or service principal)
---

# microsoft.group.owner

**Description**

Group owner (can be a user or service principal)

**Fields**

| ID               | TYPE                                                        | DESCRIPTION                                                           |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| id               | string                                                      | The unique identifier for the owner                                   |
| displayName      | string                                                      | The owner's display name                                              |
| ownerType        | string                                                      | The type of owner: "user" or "servicePrincipal"                       |
| user             | [microsoft.user](microsoft.user.md)                         | The owner as a user (if ownerType is "user")                          |
| servicePrincipal | [microsoft.serviceprincipal](microsoft.serviceprincipal.md) | The owner as a service principal (if ownerType is "servicePrincipal") |
