---
title: microsoft.rolemanagement.roledefinition
id: microsoft.rolemanagement.roledefinition
sidebar_label: microsoft.rolemanagement.roledefinition
displayed_sidebar: MQL
description: Microsoft role definition
---

# microsoft.rolemanagement.roledefinition

**Description**

Microsoft role definition

**Fields**

| ID              | TYPE                                                                                            | DESCRIPTION                         |
| --------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- |
| id              | string                                                                                          | Role definition ID                  |
| description     | string                                                                                          | Role definition description         |
| displayName     | string                                                                                          | Role definition display name        |
| isBuiltIn       | bool                                                                                            | Whether the role is built in        |
| isEnabled       | bool                                                                                            | Whether the role is enabled         |
| rolePermissions | &#91;&#93;dict                                                                                  | Role definition permissions         |
| templateId      | string                                                                                          | Role definition template ID         |
| version         | string                                                                                          | Role definition version             |
| assignments     | &#91;&#93;[microsoft.rolemanagement.roleassignment](microsoft.rolemanagement.roleassignment.md) | List of role definition assignments |
