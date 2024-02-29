---
title: vuln.cve
id: vuln.cve
sidebar_label: vuln.cve
displayed_sidebar: MQL
description: CVE information
---

# vuln.cve

**Description**

CVE information

**Fields**

| ID         | TYPE                        | DESCRIPTION                           |
| ---------- | --------------------------- | ------------------------------------- |
| id         | string                      | CVE ID                                |
| state      | string                      | CVE state                             |
| summary    | string                      | Summary description                   |
| unscored   | bool                        | Whether the CVE has a CVSS score      |
| published  | time                        | Publication date                      |
| modified   | time                        | Last modification date                |
| worstScore | [audit.cvss](audit.cvss.md) | Worst CVSS score of all assigned CVEs |
