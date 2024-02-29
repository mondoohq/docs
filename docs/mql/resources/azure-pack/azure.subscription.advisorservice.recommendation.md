---
title: azure.subscription.advisorService.recommendation
id: azure.subscription.advisorService.recommendation
sidebar_label: azure.subscription.advisorService.recommendation
displayed_sidebar: MQL
description: Azure Advisor recommendation
---

# azure.subscription.advisorService.recommendation

**Supported platform**

- azure

**Description**

Azure Advisor recommendation

**Fields**

| ID                   | TYPE   | DESCRIPTION                         |
| -------------------- | ------ | ----------------------------------- |
| id                   | string | Recommendation ID                   |
| name                 | string | Recommendation name                 |
| type                 | string | Recommendation resource type        |
| category             | string | Recommendation category             |
| risk                 | string | Recommendation risk                 |
| impact               | string | Recommendation risk                 |
| description          | string | Recommendation description          |
| remediation          | string | Recommendation remediation          |
| impactedResourceType | string | The impacted resource category type |
| impactedResource     | string | The impacted resource               |
| properties           | dict   | Recommendation properties           |
