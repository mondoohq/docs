---
title: cloudflare.zone
id: cloudflare.zone
sidebar_label: cloudflare.zone
displayed_sidebar: MQL
description: Cloudflare DNS zone
---

# cloudflare.zone

**Description**

Cloudflare DNS zone

**Fields**

| ID                  | TYPE                                                                      | DESCRIPTION                                                              |
| ------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| id                  | string                                                                    | Zone identifier                                                          |
| name                | string                                                                    | Zone name                                                                |
| nameServers         | &#91;&#93;string                                                          | Nameservers for this zone                                                |
| originalNameServers | &#91;&#93;string                                                          | Original name servers                                                    |
| status              | string                                                                    | The current status of the zone (initializing, pending, active, or moved) |
| paused              | bool                                                                      | Whether the zone is paused                                               |
| type                | string                                                                    | DNS zone type (full or partial)                                          |
| createdOn           | time                                                                      | Time the zone was created                                                |
| modifiedOn          | time                                                                      | Time the zone was last modified                                          |
| account             | [cloudflare.zone.account](cloudflare.zone.account.md)                     | Zone owner account                                                       |
| dns                 | [cloudflare.dns](cloudflare.dns.md)                                       | DNS records associated with the zone                                     |
| liveInputs          | &#91;&#93;[cloudflare.streams.liveInput](cloudflare.streams.liveinput.md) | Live inputs                                                              |
| videos              | &#91;&#93;[cloudflare.streams.video](cloudflare.streams.video.md)         | Videos                                                                   |
| r2                  | [cloudflare.r2](cloudflare.r2.md)                                         | R2                                                                       |
| workers             | [cloudflare.workers](cloudflare.workers.md)                               | Workers                                                                  |
| one                 | [cloudflare.one](cloudflare.one.md)                                       |                                                                          |
