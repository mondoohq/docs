---
title: microsoft.organization
id: microsoft.organization
sidebar_label: microsoft.organization
displayed_sidebar: MQL
description: Microsoft organization
---

# microsoft.organization

**Description**

Microsoft organization

**Fields**

| ID                    | TYPE           | DESCRIPTION                                                  |
| --------------------- | -------------- | ------------------------------------------------------------ |
| id                    | string         | Organization ID                                              |
| assignedPlans         | &#91;&#93;dict | Organization assigned plans                                  |
| createdDateTime       | time           | Organization creation date                                   |
| displayName           | string         | Organization display name                                    |
| verifiedDomains       | &#91;&#93;dict | Organization verified domains                                |
| onPremisesSyncEnabled | bool           | Whether password hash sync is enabled for hybrid deployments |
