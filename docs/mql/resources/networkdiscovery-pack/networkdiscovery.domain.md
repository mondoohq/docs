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

| ID           | TYPE             | DESCRIPTION                                                             |
| ------------ | ---------------- | ----------------------------------------------------------------------- |
| fqdn         | string           | Target FQDN being analyzed for subdomain enumeration                    |
| subdomains   | &#91;&#93;string | Subdomain discovery and returns array of discovered subdomains as FQDNs |
| title        | string           | Title of the domain being analyzed                                      |
| aRecords     | &#91;&#93;string | Extracted A records from the domain                                     |
| aaaaRecords  | &#91;&#93;string | Extracted AAAA records from the domain                                  |
| cnameRecords | &#91;&#93;string | Extracted CNAME records from the domain                                 |
| cspDomains   | &#91;&#93;string | Extracted CSP domains from the domain                                   |
| cspFqdns     | &#91;&#93;string | Extracted CSP FQDNs from the domain                                     |
| technologies | &#91;&#93;string | Probe for technologies used by the domain                               |
