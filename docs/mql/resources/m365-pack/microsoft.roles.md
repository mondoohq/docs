---
title: microsoft.roles
id: microsoft.roles
sidebar_label: microsoft.roles
displayed_sidebar: MQL
description: List of Microsoft Entra role definitions with optional filters
---

# microsoft.roles

**Description**

List of Microsoft Entra role definitions with optional filters

**Init**

microsoft.roles(filter string)
microsoft.roles(search string)

**List**

[]microsoft.rolemanagement.roledefinition

**Fields**

| ID     | TYPE                                                                                            | DESCRIPTION                     |
| ------ | ----------------------------------------------------------------------------------------------- | ------------------------------- |
| filter | string                                                                                          | Filter roles by property values |
| search | string                                                                                          | Search roles by search phrases  |
| list   | &#91;&#93;[microsoft.rolemanagement.roledefinition](microsoft.rolemanagement.roledefinition.md) |                                 |
