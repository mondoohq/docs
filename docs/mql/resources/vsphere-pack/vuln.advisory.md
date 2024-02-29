---
title: vuln.advisory
id: vuln.advisory
sidebar_label: vuln.advisory
displayed_sidebar: MQL
description: Advisory information
---

# vuln.advisory

**Description**

Advisory information

**Fields**

| ID          | TYPE                        | DESCRIPTION                           |
| ----------- | --------------------------- | ------------------------------------- |
| id          | string                      | Advisory ID                           |
| title       | string                      | Title of the advisory                 |
| description | string                      | Description of the advisory           |
| published   | time                        | Advisory publication date             |
| modified    | time                        | Last modification date                |
| worstScore  | [audit.cvss](audit.cvss.md) | Worst CVSS score of all assigned CVEs |
