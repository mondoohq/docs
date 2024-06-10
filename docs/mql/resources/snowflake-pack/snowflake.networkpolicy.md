---
title: snowflake.networkPolicy
id: snowflake.networkPolicy
sidebar_label: snowflake.networkPolicy
displayed_sidebar: MQL
description: Snowflake Network Policy
---

# snowflake.networkPolicy

**Description**

Snowflake Network Policy

**Fields**

| ID                           | TYPE             | DESCRIPTION                                                                        |
| ---------------------------- | ---------------- | ---------------------------------------------------------------------------------- |
| name                         | string           | Name of the network policy                                                         |
| comment                      | string           | Comment for the network policy                                                     |
| entriesInAllowedIpList       | int              | Number of entries in the allowed IP list                                           |
| entriesInBlockedIpList       | int              | Number of entries in the blocked IP list                                           |
| entriesInAllowedNetworkRules | int              | Number of entries in the allowed network rules                                     |
| entriesInBlockedNetworkRules | int              | Number of entries in the blocked network rules                                     |
| allowedIpList                | &#91;&#93;string | List of IP addresses that are allowed access                                       |
| blockedIpList                | &#91;&#93;string | List of IP addresses that are denied access                                        |
| allowedNetworkRules          | &#91;&#93;string | List of network rules that contain the network identifiers that are allowed access |
| blockedNetworkRules          | &#91;&#93;string | List of network rules that contain the network identifiers that are denied access  |
| createdAt                    | time             | When the network policy was created                                                |
