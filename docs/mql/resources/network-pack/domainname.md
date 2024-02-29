---
title: domainName
id: domainName
sidebar_label: domainName
displayed_sidebar: MQL
description: Domain name
---

# domainName

**Description**

Domain name

**Init**

domainName(fqdn string)

**Fields**

| ID                  | TYPE             | DESCRIPTION                                                                    |
| ------------------- | ---------------- | ------------------------------------------------------------------------------ |
| fqdn                | string           | Fully qualified domain name (FQDN)                                             |
| effectiveTLDPlusOne | string           | effectiveTLDPlusOne returns the effective top level domain plus one more label |
| tld                 | string           | Top-level domain                                                               |
| tldIcannManaged     | bool             | Flag indicates if the TLD is ICANN managed                                     |
| labels              | &#91;&#93;string | Domain labels                                                                  |
