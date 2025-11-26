---
title: ipinfo
id: ipinfo
sidebar_label: ipinfo
displayed_sidebar: MQL
description: IP information from ipinfo.io service
---

# ipinfo

**Description**

IP information from ipinfo.io service

**Init**

ipinfo(ip ip)

**Fields**

| ID           | TYPE   | DESCRIPTION                                                                 |
| ------------ | ------ | --------------------------------------------------------------------------- |
| requested_ip | ip     | The IP address that was requested (empty if querying for your public IP)    |
| returned_ip  | ip     | The IP address returned by ipinfo.io                                        |
| hostname     | string | Hostname for this IP address                                                |
| bogon        | bool   | True if the IP is from a special use, non-public range.                     |
| city         | string | City where the IP is located, e.g. Los Angeles                              |
| region       | string | Region where the IP is located, e.g. California                             |
| country      | string | Country code where the IP is located, e.g. US                               |
| country_name | string | Country name of the location, e.g. United States                            |
| is_eu        | bool   | True if the IP address is located in the European Union (EU).               |
| location     | string | Geocode location, e.g. 34.0522,-118.2437                                    |
| org          | string | Name of the organization that manages the IP, e.g. AS13335 Cloudflare, Inc. |
| postal       | string | Postal code of the location, e.g. 90076                                     |
| timezone     | string | Timezone of the location, e.g. America/Los_Angeles                          |
