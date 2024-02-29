---
title: equinix.metal.user
id: equinix.metal.user
sidebar_label: equinix.metal.user
displayed_sidebar: MQL
description: Equinix Metal user
---

# equinix.metal.user

**Supported platform**

- equinix

**Maturity**

experimental

**Description**

Equinix Metal user

**Fields**

| ID            | TYPE   | DESCRIPTION                        |
| ------------- | ------ | ---------------------------------- |
| id            | string | User ID                            |
| firstName     | string | User's first name                  |
| lastName      | string | User's last name                   |
| fullName      | string | User's full name                   |
| email         | string | User's email address               |
| twoFactorAuth | string | User's two-factor authentication   |
| avatarUrl     | string | User's avatar                      |
| twitter       | string | User's X (formerly Twitter) handle |
| facebook      | string | User's facebook account            |
| linkedin      | string | User's LinkedIn account            |
| createdAt     | time   | When the user was created          |
| updatedAt     | time   | When the user was last updated     |
| timezone      | string | User's time zone                   |
| phoneNumber   | string | User's phone number                |
| url           | string | URL                                |

**References**

- [User Accounts](https://deploy.equinix.com/developers/docs/metal/accounts/users/)
