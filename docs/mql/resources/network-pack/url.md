---
title: url
id: url
sidebar_label: url
displayed_sidebar: MQL
description: URL resource, generally represented as
---

# url

**Description**

URL resource, generally represented as:

**Init**

url(raw string)

**Fields**

| ID          | TYPE              | DESCRIPTION                                                                  |
| ----------- | ----------------- | ---------------------------------------------------------------------------- |
| string      | string            | The full URL as a string                                                     |
| scheme      | string            | Scheme (e.g., http, https, ssh)                                              |
| user        | string            | User component (can contain username or token but no password)               |
| password    | string            | Password, an additional optional component of the user info                  |
| host        | string            | Host, either registered name or IP (e.g., mondoo.com)                        |
| port        | int               | Port, optional decimal number (e.g., 80)                                     |
| path        | string            | Path, consisting of segments separated by '/'                                |
| query       | map[string]string | Query, optional, attached to path via '?', parsed via '&' and ';' delimiters |
| rawQuery    | string            | Raw query, optional raw string attached to path after '?'                    |
| rawFragment | string            | Fragment, optional raw string attached to path after '#'                     |
