---
title: googleworkspace.role
id: googleworkspace.role
sidebar_label: googleworkspace.role
displayed_sidebar: MQL
description: Google Workspace role
---

# googleworkspace.role

**Description**

Google Workspace role

**Fields**

| ID               | TYPE           | DESCRIPTION                               |
| ---------------- | -------------- | ----------------------------------------- |
| id               | int            | ID of the role                            |
| name             | string         | Name of the role                          |
| description      | string         | A short description of the role           |
| isSystemRole     | bool           | Whether this is a pre-defined system role |
| isSuperAdminRole | bool           | Whether the role is a super admin role    |
| privileges       | &#91;&#93;dict | The set of privileges                     |
