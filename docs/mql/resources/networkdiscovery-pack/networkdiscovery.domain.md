---
title: networkdiscovery.domain
id: networkdiscovery.domain
sidebar_label: networkdiscovery.domain
displayed_sidebar: MQL
description: Network Discovery Domain
---

# networkdiscovery.domain

**Description**

Network Discovery Domain

**Init**

networkdiscovery.domain(fqdn string)

**Fields**

| ID         | TYPE             | DESCRIPTION                                                             |
| ---------- | ---------------- | ----------------------------------------------------------------------- |
| fqdn       | string           | Target FQDN being analyzed for subdomain enumeration                    |
| subdomains | &#91;&#93;string | Subdomain discovery and returns array of discovered subdomains as FQDNs |
