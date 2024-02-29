---
title: http.get
id: http.get
sidebar_label: http.get
displayed_sidebar: MQL
description: HTTP GET requests
---

# http.get

**Description**

HTTP GET requests

**Init**

http.get(rawUrl string)

**Fields**

| ID         | TYPE                          | DESCRIPTION                              |
| ---------- | ----------------------------- | ---------------------------------------- |
| url        | [url](url.md)                 | URL for this request                     |
| header     | [http.header](http.header.md) | Header returned from this request        |
| statusCode | int                           | Status returned from this request        |
| version    | string                        | Version of the HTTP request, (e.g., 1.1) |
| body       | string                        | Body returned from this request          |
