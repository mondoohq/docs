---
title: microsoft.security.exchange.antispam.hostedConnectionFilterPolicy
id: microsoft.security.exchange.antispam.hostedConnectionFilterPolicy
sidebar_label: microsoft.security.exchange.antispam.hostedConnectionFilterPolicy
displayed_sidebar: MQL
description: Microsoft Security Exchange Antispam Hosted Connection Filter Policy
---

# microsoft.security.exchange.antispam.hostedConnectionFilterPolicy

**Description**

Microsoft Security Exchange Antispam Hosted Connection Filter Policy

**Fields**

| ID               | TYPE             | DESCRIPTION                          |
| ---------------- | ---------------- | ------------------------------------ |
| identity         | string           | Policy identity                      |
| adminDisplayName | string           | Admin display name for the policy    |
| ipAllowList      | &#91;&#93;string | IP addresses that are always allowed |
| ipBlockList      | &#91;&#93;string | IP addresses that are always blocked |
| enableSafeList   | bool             | Whether to use the safe list         |
