---
title: dns.record
id: dns.record
sidebar_label: dns.record
displayed_sidebar: MQL
description: DNS record
---

# dns.record

**Maturity**

experimental

**Description**

DNS record

**Fields**

| ID    | TYPE             | DESCRIPTION                   |
| ----- | ---------------- | ----------------------------- |
| name  | string           | DNS name                      |
| ttl   | int              | Time-to-live (TTL) in seconds |
| class | string           | DNS class                     |
| type  | string           | DNS type                      |
| rdata | &#91;&#93;string | Resource data                 |
