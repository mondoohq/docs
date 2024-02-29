---
title: platform.advisories
id: platform.advisories
sidebar_label: platform.advisories
displayed_sidebar: MQL
description: All platform/package advisories
---

# platform.advisories

**Description**

All platform/package advisories

**List**

[]audit.advisory

**Fields**

| ID    | TYPE                                          | DESCRIPTION                                                                |
| ----- | --------------------------------------------- | -------------------------------------------------------------------------- |
| cvss  | [audit.cvss](audit.cvss.md)                   | Worst CVSS score for all advisories                                        |
| stats | dict                                          | Statistical information: total, critical, high, medium, low, none, unknown |
| list  | &#91;&#93;[audit.advisory](audit.advisory.md) |                                                                            |
