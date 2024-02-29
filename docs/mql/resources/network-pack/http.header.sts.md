---
title: http.header.sts
id: http.header.sts
sidebar_label: http.header.sts
displayed_sidebar: MQL
description: HTTP header for Strict-Transport-Security
---

# http.header.sts

**Maturity**

experimental

**Description**

HTTP header for Strict-Transport-Security

**Fields**

| ID                | TYPE | DESCRIPTION                                    |
| ----------------- | ---- | ---------------------------------------------- |
| maxAge            | time | How long to cache HTTPS-only policy in seconds |
| includeSubDomains | bool | Whether caching applies to subdomains          |
| preload           | bool | Non-standard directive for preloading STS      |
