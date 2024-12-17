---
title: nmap.network
id: nmap.network
sidebar_label: nmap.network
displayed_sidebar: MQL
description: Nmap network
---

# nmap.network

**Description**

Nmap network

**Init**

nmap.network(target string)

**Fields**

| ID       | TYPE                                | DESCRIPTION                        |
| -------- | ----------------------------------- | ---------------------------------- |
| target   | string                              | Target IP address or hostname      |
| hosts    | &#91;&#93;[nmap.host](nmap.host.md) | Hosts discovered for the target    |
| warnings | &#91;&#93;string                    | Errors encountered during the scan |
