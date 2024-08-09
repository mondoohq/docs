---
title: http.header.xssProtection
id: http.header.xssProtection
sidebar_label: http.header.xssProtection
displayed_sidebar: MQL
description: HTTP header X-XSS-Protection, which is now outdated (replaced by CSP)
---

# http.header.xssProtection

**Maturity**

experimental

**Description**

HTTP header X-XSS-Protection, which is now outdated (replaced by CSP)

**Fields**

| ID      | TYPE   | DESCRIPTION                                                                                     |
| ------- | ------ | ----------------------------------------------------------------------------------------------- |
| enabled | bool   | Whether the header is enabled (Enabled when the header value is set to 1; disabled if set to 0) |
| mode    | string | Mode for XSS filtering                                                                          |
| report  | string | Report endpoint for violations (Chromium only)                                                  |

**References**

- [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
