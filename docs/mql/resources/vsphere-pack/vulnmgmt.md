---
title: vulnmgmt
id: vulnmgmt
sidebar_label: vulnmgmt
displayed_sidebar: MQL
description: Vulnerability Information
---

# vulnmgmt

**Description**

Vulnerability Information

**Fields**

| ID             | TYPE                                        | DESCRIPTION                                         |
| -------------- | ------------------------------------------- | --------------------------------------------------- |
| cves           | &#91;&#93;[vuln.cve](vuln.cve.md)           | List of all CVEs affecting the asset                |
| advisories     | &#91;&#93;[vuln.advisory](vuln.advisory.md) | List of all Advisories affecting the asset          |
| packages       | &#91;&#93;[vuln.package](vuln.package.md)   | List of all packages affected by vulnerabilities    |
| lastAssessment | time                                        | Last time the vulnerability information was updated |
| stats          | [audit.cvss](audit.cvss.md)                 | Statistics about the vulnerabilities                |
