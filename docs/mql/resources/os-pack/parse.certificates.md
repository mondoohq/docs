---
title: parse.certificates
id: parse.certificates
sidebar_label: parse.certificates
displayed_sidebar: MQL
description: Parse certificates from files
---

# parse.certificates

**Description**

Parse certificates from files

**Init**

parse.certificates(path string)

**List**

[]network.certificate

**Fields**

| ID      | TYPE                          | DESCRIPTION              |
| ------- | ----------------------------- | ------------------------ |
| path    | string                        | Certificate file path    |
| file    | [file](file.md)               | Certificate file         |
| content | string                        | Certificate file content |
| list    | &#91;&#93;network.certificate |                          |

**Examples**

Parse Certificates from target file system

```coffee
parse.certificates('/etc/ssl/cert.pem').list { issuer.dn }
```

Parse Certificates from content

```coffee
parse.certificates(content: 'PEM CONTENT').list { issuer.dn }
```
