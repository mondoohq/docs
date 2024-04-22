---
title: gcp.project.dnsService.recordset
id: gcp.project.dnsService.recordset
sidebar_label: gcp.project.dnsService.recordset
displayed_sidebar: MQL
description: Google Cloud (GCP) DNS record set
---

# gcp.project.dnsService.recordset

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) DNS record set

**Fields**

| ID               | TYPE             | DESCRIPTION                                                                |
| ---------------- | ---------------- | -------------------------------------------------------------------------- |
| projectId        | string           | Project ID                                                                 |
| name             | string           | User-friendly name of the resource                                         |
| rrdatas          | &#91;&#93;string | Rrdatas: As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)   |
| signatureRrdatas | &#91;&#93;string | SignatureRrdatas: As defined in RFC 4034                                   |
| ttl              | int              | Number of seconds that this resource record set can be cached by resolvers |
| type             | string           | The identifier of a supported record type                                  |

**References**

- [DNS records overview](https://cloud.google.com/dns/docs/records-overview)
