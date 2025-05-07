---
title: azure.subscription.webService.appRuntimeStack
id: azure.subscription.webService.appRuntimeStack
sidebar_label: azure.subscription.webService.appRuntimeStack
displayed_sidebar: MQL
description: Azure Web App runtime stack
---

# azure.subscription.webService.appRuntimeStack

**Supported platform**

- azure

**Description**

Azure Web App runtime stack

**Fields**

| ID             | TYPE   | DESCRIPTION                               |
| -------------- | ------ | ----------------------------------------- |
| name           | string | Web App stack name                        |
| preferredOs    | string | Web App stack preferred OS                |
| runtimeVersion | string | Web App runtime version                   |
| majorVersion   | string | Web App stack major version name          |
| minorVersion   | string | Web App stack minor version name          |
| autoUpdate     | bool   | Whether the stack version is auto-updated |
| deprecated     | bool   | Whether the stack is deprecated           |
| hidden         | bool   | Whether the stack is hidden               |
| endOfLifeDate  | time   | End-of-life date for the minor version    |
