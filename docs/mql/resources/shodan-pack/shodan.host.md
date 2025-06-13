---
title: shodan.host
id: shodan.host
sidebar_label: shodan.host
displayed_sidebar: MQL
description: Shodan Search Engine host information
---

# shodan.host

**Description**

Shodan Search Engine host information

**Init**

shodan.host(ip string)

**Fields**

| ID              | TYPE             | DESCRIPTION                          |
| --------------- | ---------------- | ------------------------------------ |
| ip              | string           | Host IP                              |
| os              | string           | Host Operating System                |
| org             | string           | Organization that owns the IP        |
| isp             | string           | ISP that owns the IP                 |
| asn             | string           | Host ASN                             |
| tags            | &#91;&#93;string | Host tags                            |
| hostnames       | &#91;&#93;string | List of hostnames assigned to the IP |
| ports           | &#91;&#93;int    | Open ports                           |
| vulnerabilities | &#91;&#93;string | Vulnerabilities                      |
| country         | string           | Country                              |
| city            | string           | City                                 |
