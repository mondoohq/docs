---
title: windows.hotfix
id: windows.hotfix
sidebar_label: windows.hotfix
displayed_sidebar: MQL
description: Windows hotfix resource
---

# windows.hotfix

**Description**

Windows hotfix resource

**Init**

windows.hotfix(hotfixId string)

**Fields**

| ID          | TYPE   | DESCRIPTION                                      |
| ----------- | ------ | ------------------------------------------------ |
| hotfixId    | string | Hotfix ID                                        |
| description | string | Type of hotfix (e.g., Update or Security Update) |
| caption     | string | Reference to knowledge base                      |
| installedOn | time   | Date when the hotfix was installed               |
| installedBy | string | User that installed the hotfix                   |
