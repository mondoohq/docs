---
title: pkix.sanExtension
id: pkix.sanExtension
sidebar_label: pkix.sanExtension
displayed_sidebar: MQL
description: X.509 certificate PKIX Subject Alternative Name (SAN) extension
---

# pkix.sanExtension

**Description**

X.509 certificate PKIX Subject Alternative Name (SAN) extension

**Fields**

| ID             | TYPE                                | DESCRIPTION                     |
| -------------- | ----------------------------------- | ------------------------------- |
| extension      | [pkix.extension](pkix.extension.md) | x509 certificate PKIX extension |
| dnsNames       | &#91;&#93;string                    | DNS names                       |
| ipAddresses    | &#91;&#93;string                    | IP addresses                    |
| emailAddresses | &#91;&#93;string                    | Email addresses                 |
| uris           | &#91;&#93;string                    | URIs                            |
