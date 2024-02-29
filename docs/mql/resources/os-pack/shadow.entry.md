---
title: shadow.entry
id: shadow.entry
sidebar_label: shadow.entry
displayed_sidebar: MQL
description: Shadowed password file entry
---

# shadow.entry

**Description**

Shadowed password file entry

**Fields**

| ID           | TYPE   | DESCRIPTION                        |
| ------------ | ------ | ---------------------------------- |
| user         | string | User                               |
| password     | string | Password                           |
| lastchanged  | time   | Date of last password change       |
| mindays      | int    | Minimum password age in days       |
| maxdays      | int    | Maximum password age in days       |
| warndays     | int    | Password warning period in days    |
| inactivedays | int    | Password inactivity period in days |
| expirydates  | string | Account expiration date            |
| reserved     | string | Reserved field                     |
