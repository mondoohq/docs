---
title: tls
id: tls
sidebar_label: tls
displayed_sidebar: MQL
description: TLS
---

# tls

**Description**

TLS

**Init**

tls(target string)

**Fields**

| ID                 | TYPE                                    | DESCRIPTION                                                |
| ------------------ | --------------------------------------- | ---------------------------------------------------------- |
| socket             | [socket](socket.md)                     | Socket of this connection                                  |
| domainName         | string                                  | An optional domain name to test                            |
| params             | dict                                    | List of all parameters for this TLS/SSL connection         |
| versions           | &#91;&#93;string                        | Version of TLS/SSL that is being used                      |
| ciphers            | &#91;&#93;string                        | Ciphers supported by this TLS/SSL connection               |
| extensions         | &#91;&#93;string                        | Extensions supported by this TLS/SSL connection            |
| certificates       | &#91;&#93;[certificate](certificate.md) | Certificates provided in this TLS/SSL connection           |
| nonSniCertificates | &#91;&#93;[certificate](certificate.md) | Certificates provided without server name indication (SNI) |
