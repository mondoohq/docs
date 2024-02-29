---
title: secpol
id: secpol
sidebar_label: secpol
displayed_sidebar: MQL
description: Windows local security policy
---

# secpol

**Description**

Windows local security policy

**Fields**

| ID              | TYPE                        | DESCRIPTION      |
| --------------- | --------------------------- | ---------------- |
| systemaccess    | map[string]string           | System access    |
| eventaudit      | map[string]string           | Event audit      |
| registryvalues  | map[string]string           | Registry values  |
| privilegerights | map[string]&#91;&#93;string | Privilege rights |
