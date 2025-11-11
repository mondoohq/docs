---
title: microsoft.security.riskyUser
id: microsoft.security.riskyUser
sidebar_label: microsoft.security.riskyUser
displayed_sidebar: MQL
description: Microsoft Entra users who are at risk
---

# microsoft.security.riskyUser

**Description**

Microsoft Entra users who are at risk

**Fields**

| ID            | TYPE                                | DESCRIPTION       |
| ------------- | ----------------------------------- | ----------------- |
| id            | string                              | Risky user ID     |
| name          | string                              | User name         |
| principalName | string                              | User principal    |
| user          | [microsoft.user](microsoft.user.md) | Entra User        |
| riskDetail    | string                              | Risk detail       |
| riskLevel     | string                              | Risk level        |
| riskState     | string                              | Risk state        |
| lastUpdatedAt | time                                | Risk last updated |
