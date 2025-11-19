---
title: microsoft.security
id: microsoft.security
sidebar_label: microsoft.security
displayed_sidebar: MQL
description: Microsoft Security
---

# microsoft.security

**Description**

Microsoft Security

**Fields**

| ID                 | TYPE                                                                              | DESCRIPTION                                |
| ------------------ | --------------------------------------------------------------------------------- | ------------------------------------------ |
| secureScores       | &#91;&#93;[microsoft.security.securityscore](microsoft.security.securityscore.md) | List of security scores                    |
| latestSecureScores | [microsoft.security.securityscore](microsoft.security.securityscore.md)           | Latest security score                      |
| riskyUsers         | &#91;&#93;[microsoft.security.riskyUser](microsoft.security.riskyuser.md)         | List Microsoft Entra users who are at risk |
| exchange           | [microsoft.security.exchange](microsoft.security.exchange.md)                     | Exchange security settings                 |
