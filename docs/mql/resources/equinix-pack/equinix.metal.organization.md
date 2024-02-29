---
title: equinix.metal.organization
id: equinix.metal.organization
sidebar_label: equinix.metal.organization
displayed_sidebar: MQL
description: Equinix Metal organization
---

# equinix.metal.organization

**Supported platform**

- equinix

**Maturity**

experimental

**Description**

Equinix Metal organization

**Fields**

| ID           | TYPE                                                  | DESCRIPTION                              |
| ------------ | ----------------------------------------------------- | ---------------------------------------- |
| id           | string                                                | Organization ID                          |
| name         | string                                                | Organization name                        |
| description  | string                                                | Organization description                 |
| website      | string                                                | Organization website URL                 |
| twitter      | string                                                | Organization X (formerly Twitter) handle |
| createdAt    | time                                                  | When the organization was created        |
| updatedAt    | time                                                  | When the organization was last updated   |
| address      | dict                                                  | Address information for the organization |
| taxId        | string                                                | Organization's tax ID                    |
| mainPhone    | string                                                | Organization's main phone number         |
| billingPhone | string                                                | Organization's billing phone number      |
| creditAmount | float                                                 | Organization's credit amount             |
| url          | string                                                | URL                                      |
| users        | &#91;&#93;[equinix.metal.user](equinix.metal.user.md) | Users in the organization                |

**References**

- [Organizations](https://deploy.equinix.com/developers/docs/metal/accounts/organizations/)
