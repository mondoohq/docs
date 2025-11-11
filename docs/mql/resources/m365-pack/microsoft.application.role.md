---
title: microsoft.application.role
id: microsoft.application.role
sidebar_label: microsoft.application.role
displayed_sidebar: MQL
description: Microsoft Entra ID app roles are custom roles to assign permissions to users or apps
---

# microsoft.application.role

**Description**

Microsoft Entra ID app roles are custom roles to assign permissions to users or apps

**Fields**

| ID                 | TYPE             | DESCRIPTION          |
| ------------------ | ---------------- | -------------------- |
| id                 | string           | App role ID          |
| name               | string           | Display name         |
| description        | string           | Description          |
| value              | string           | Value                |
| allowedMemberTypes | &#91;&#93;string | Allowed member types |
| isEnabled          | bool             | App state            |
