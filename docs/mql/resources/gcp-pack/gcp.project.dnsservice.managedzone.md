---
title: gcp.project.dnsService.managedzone
id: gcp.project.dnsService.managedzone
sidebar_label: gcp.project.dnsService.managedzone
displayed_sidebar: MQL
description: Google Cloud (GCP) DNS managed zone (a resource that represents a DNS zone hosted by the Cloud DNS service)
---

# gcp.project.dnsService.managedzone

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) DNS managed zone (a resource that represents a DNS zone hosted by the Cloud DNS service)

**Fields**

| ID            | TYPE                                                                              | DESCRIPTION                                                    |
| ------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| id            | string                                                                            | Managed zone ID                                                |
| projectId     | string                                                                            | Project ID                                                     |
| name          | string                                                                            | User-friendly name of the resource                             |
| description   | string                                                                            | User-friendly description of the resource                      |
| dnssecConfig  | dict                                                                              | DNSSEC configuration                                           |
| dnsName       | string                                                                            | DNS name of this managed zone                                  |
| nameServerSet | string                                                                            | Optionally specifies the name server set for this managed zone |
| nameServers   | &#91;&#93;string                                                                  | Delegated to these virtual name servers                        |
| visibility    | string                                                                            | Zone's visibility                                              |
| created       | time                                                                              | Creation timestamp                                             |
| recordSets    | &#91;&#93;[gcp.project.dnsService.recordset](gcp.project.dnsservice.recordset.md) | Cloud DNS record set in the zone                               |

**References**

- [DNS zones overview](https://cloud.google.com/dns/docs/zones)
