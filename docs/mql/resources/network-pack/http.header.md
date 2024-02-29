---
title: http.header
id: http.header
sidebar_label: http.header
displayed_sidebar: MQL
description: HTTP header
---

# http.header

**Maturity**

experimental

**Description**

HTTP header

**Fields**

| ID                  | TYPE                                                      | DESCRIPTION                                                               |
| ------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------- |
| params              | map[string]&#91;&#93;string                               | Raw list of parameters for this header                                    |
| sts                 | [http.header.sts](http.header.sts.md)                     | HTTP Strict-Transport-Security (HSTS) header                              |
| xFrameOptions       | string                                                    | X-Frame-Options header: DENY, SAMEORIGIN, or ALLOW-FROM origin (obsolete) |
| xXssProtection      | [http.header.xssProtection](http.header.xssprotection.md) | X-XSS-Protection header                                                   |
| xContentTypeOptions | string                                                    | X-Content-Type-Options header: nosniff                                    |
| referrerPolicy      | string                                                    | Referrer-Policy header                                                    |
| contentType         | [http.header.contentType](http.header.contenttype.md)     | Content-Type header                                                       |
| setCookie           | [http.header.setCookie](http.header.setcookie.md)         | Set-Cookie header                                                         |
| csp                 | map[string]string                                         | Content-Security-Policy header                                            |
