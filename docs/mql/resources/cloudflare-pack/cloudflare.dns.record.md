---
title: cloudflare.dns.record
id: cloudflare.dns.record
sidebar_label: cloudflare.dns.record
displayed_sidebar: MQL
description: DNS record
---

# cloudflare.dns.record

**Description**

DNS record

**Fields**

| ID         | TYPE             | DESCRIPTION                                              |
| ---------- | ---------------- | -------------------------------------------------------- |
| id         | string           | Cloudflare internal ID                                   |
| name       | string           | Record name                                              |
| comment    | string           | Comment                                                  |
| tags       | &#91;&#93;string | Tags                                                     |
| proxied    | bool             | Whether the record is proxied (false indicated DNS only) |
| proxiable  | bool             | Whether the record can be proxied                        |
| type       | string           | Type of record (e.g., A, AAAA, or CNAME)                 |
| content    | string           | Content of the record (e.g., hostname or IP Address)     |
| ttl        | int              | Time to live (in seconds)                                |
| createdOn  | time             | Time the record was created                              |
| modifiedOn | time             | Time the record was last modified                        |
