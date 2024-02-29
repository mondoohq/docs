---
title: audit.cve
id: audit.cve
sidebar_label: audit.cve
displayed_sidebar: MQL
description: Common Vulnerabilities and Exposures (CVEs)
---

# audit.cve

**Description**

Common Vulnerabilities and Exposures (CVEs)

**Fields**

| ID         | TYPE                        | DESCRIPTION                           |
| ---------- | --------------------------- | ------------------------------------- |
| id         | string                      | CVE ID                                |
| mrn        | string                      | Mondoo CVE identifier                 |
| state      | string                      | CVE state                             |
| summary    | string                      | Summary description                   |
| unscored   | bool                        | Whether the CVE has a CVSS score      |
| published  | time                        | Publication date                      |
| modified   | time                        | Last modification date                |
| worstScore | [audit.cvss](audit.cvss.md) | Worst CVSS score of all assigned CVEs |
