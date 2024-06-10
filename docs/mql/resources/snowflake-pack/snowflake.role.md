---
title: snowflake.role
id: snowflake.role
sidebar_label: snowflake.role
displayed_sidebar: MQL
description: Snowflake Role
---

# snowflake.role

**Description**

Snowflake Role

**Fields**

| ID              | TYPE   | DESCRIPTION                          |
| --------------- | ------ | ------------------------------------ |
| name            | string | Role name                            |
| isDefault       | bool   | Whether the role is the default role |
| isCurrent       | bool   | Whether the role is a current role   |
| isInherited     | bool   | Whether the role is a shared role    |
| assignedToUsers | int    | Number of users assigned to the role |
| grantedToRoles  | int    | Number of roles granted to           |
| grantedRoles    | int    | Number of roles granted              |
| owner           | string | Owner of the role                    |
| comment         | string | Comment for the role                 |
