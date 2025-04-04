---
title: cloudInstance
id: cloudInstance
sidebar_label: cloudInstance
displayed_sidebar: MQL
description: Cloud instance metadata
---

# cloudInstance

**Description**

Cloud instance metadata

**Fields**

| ID              | TYPE                                | DESCRIPTION                               |
| --------------- | ----------------------------------- | ----------------------------------------- |
| publicHostname  | string                              | Cloud instance public hostname            |
| publicIpv4      | &#91;&#93;[ipAddress](ipaddress.md) | List of public IPv4 addresses             |
| privateHostname | string                              | Cloud instance private hostname           |
| privateIpv4     | &#91;&#93;[ipAddress](ipaddress.md) | List of private IPv4 addresses            |
| metadata        | dict                                | Raw access to the cloud instance metadata |
