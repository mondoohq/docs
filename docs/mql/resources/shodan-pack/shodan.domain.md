---
title: shodan.domain
id: shodan.domain
sidebar_label: shodan.domain
displayed_sidebar: MQL
description: Shodan Search Engine domain information
---

# shodan.domain

**Description**

Shodan Search Engine domain information

**Init**

shodan.domain(name string)

**Fields**

| ID         | TYPE                                            | DESCRIPTION        |
| ---------- | ----------------------------------------------- | ------------------ |
| name       | string                                          | Domain name        |
| tags       | &#91;&#93;string                                | Domain tags        |
| subdomains | &#91;&#93;string                                | List of subdomains |
| nsrecords  | &#91;&#93;[shodan.nsrecord](shodan.nsrecord.md) | DNS NS records     |
