---
title: azure.subscription.cloudDefenderService.settings
id: azure.subscription.cloudDefenderService.settings
sidebar_label: azure.subscription.cloudDefenderService.settings
displayed_sidebar: MQL
description: Microsoft Defender for Cloud security settings
---

# azure.subscription.cloudDefenderService.settings

**Supported platform**

- azure

**Description**

Microsoft Defender for Cloud security settings

**Fields**

| ID         | TYPE   | DESCRIPTION                                       |
| ---------- | ------ | ------------------------------------------------- |
| id         | string | Resource ID                                       |
| name       | string | The settings name                                 |
| kind       | string | The settings kind (data export, alert sync, etc.) |
| type       | string | The settings type                                 |
| properties | dict   | The properties dict (enabled)                     |
