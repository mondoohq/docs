---
title: audit.advisory
id: audit.advisory
sidebar_label: audit.advisory
displayed_sidebar: MQL
description: Platform/package advisory
---

# audit.advisory

**Description**

Platform/package advisory

**Fields**

| ID          | TYPE                        | DESCRIPTION                           |
| ----------- | --------------------------- | ------------------------------------- |
| id          | string                      | Advisory ID                           |
| mrn         | string                      | Mondoo advisory identifier            |
| title       | string                      | Advisory title                        |
| description | string                      | Advisory description                  |
| published   | time                        | Advisory publication date             |
| modified    | time                        | Last modification date                |
| worstScore  | [audit.cvss](audit.cvss.md) | Worst CVSS score of all assigned CVEs |
