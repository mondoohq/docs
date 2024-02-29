---
title: privatekey
id: privatekey
sidebar_label: privatekey
displayed_sidebar: MQL
description: Private key resource
---

# privatekey

**Description**

Private key resource

**Fields**

| ID        | TYPE            | DESCRIPTION                       |
| --------- | --------------- | --------------------------------- |
| pem       | string          | PEM data                          |
| path      | string          | Deprecated; use file instead      |
| file      | [file](file.md) | File on disk for this private key |
| encrypted | bool            | Whether the file is encrypted     |
