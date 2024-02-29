---
title: gcp.project.dnsService
id: gcp.project.dnsService
sidebar_label: gcp.project.dnsService
displayed_sidebar: MQL
description: GCP Cloud DNS
---

# gcp.project.dnsService

**Supported platform**

- gcp

**Description**

GCP Cloud DNS

**Fields**

| ID           | TYPE                                                                                  | DESCRIPTION                       |
| ------------ | ------------------------------------------------------------------------------------- | --------------------------------- |
| projectId    | string                                                                                | Project ID                        |
| managedZones | &#91;&#93;[gcp.project.dnsService.managedzone](gcp.project.dnsservice.managedzone.md) | Cloud DNS managed zone in project |
| policies     | &#91;&#93;[gcp.project.dnsService.policy](gcp.project.dnsservice.policy.md)           | Cloud DNS rules in project        |

**References**

- [Cloud DNS overview](https://cloud.google.com/dns/docs/overview/)
