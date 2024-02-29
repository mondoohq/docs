---
title: okta.network
id: okta.network
sidebar_label: okta.network
displayed_sidebar: MQL
description: Okta network zone
---

# okta.network

**Description**

Okta network zone

**Fields**

| ID          | TYPE             | DESCRIPTION                                                         |
| ----------- | ---------------- | ------------------------------------------------------------------- |
| id          | string           | Unique identifier for the network zone                              |
| name        | string           | Name for the network zone                                           |
| type        | string           | Type of the network zone                                            |
| created     | time             | Timestamp when the network zone was created                         |
| lastUpdated | time             | Timestamp when the network zone was last updated                    |
| status      | string           | Status of the network zone                                          |
| system      | bool             | Whether the network zone is system-defined                          |
| asns        | &#91;&#93;string | ISP ASNs for the network zone                                       |
| usage       | string           | Usage of zone: POLICY or BLOCKLIST                                  |
| proxyType   | string           | IP type                                                             |
| proxies     | &#91;&#93;dict   | IP addresses that are allowed to forward a request from the gateway |
| locations   | &#91;&#93;dict   | Locations for the network zone                                      |
| gateways    | &#91;&#93;dict   | IP addresses of this zone                                           |
