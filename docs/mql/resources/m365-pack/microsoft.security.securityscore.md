---
title: microsoft.security.securityscore
id: microsoft.security.securityscore
sidebar_label: microsoft.security.securityscore
displayed_sidebar: MQL
description: Microsoft Secure Score
---

# microsoft.security.securityscore

**Description**

Microsoft Secure Score

**Fields**

| ID                       | TYPE             | DESCRIPTION                            |
| ------------------------ | ---------------- | -------------------------------------- |
| id                       | string           | Secure Score ID                        |
| activeUserCount          | int              | Secure Score active user count         |
| averageComparativeScores | &#91;&#93;dict   | Secure Score average comparative score |
| azureTenantId            | string           | Secure Score tenant ID                 |
| controlScores            | &#91;&#93;dict   | Secure Score control scores            |
| createdDateTime          | time             | Secure Score creation time             |
| currentScore             | float            | Secure Score current score             |
| enabledServices          | &#91;&#93;string | Secure Score enabled services          |
| licensedUserCount        | int              | Secure Score licensed user count       |
| maxScore                 | float            | Secure Score max score                 |
| vendorInformation        | dict             | Secure Score vendor information        |
