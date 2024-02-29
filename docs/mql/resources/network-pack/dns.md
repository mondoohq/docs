---
title: dns
id: dns
sidebar_label: dns
displayed_sidebar: MQL
description: DNS resource
---

# dns

**Maturity**

experimental

**Description**

DNS resource

**Init**

dns(fqdn string)

**Fields**

| ID      | TYPE                                          | DESCRIPTION                                     |
| ------- | --------------------------------------------- | ----------------------------------------------- |
| fqdn    | string                                        | Fully qualified domain name (FQDN)              |
| params  | dict                                          | Params is a list of all parameters for DNS FQDN |
| records | &#91;&#93;[dns.record](dns.record.md)         | Successful DNS records                          |
| mx      | &#91;&#93;[dns.mxRecord](dns.mxrecord.md)     | Successful DNS MX records                       |
| dkim    | &#91;&#93;[dns.dkimRecord](dns.dkimrecord.md) | DKIM TXT records                                |
