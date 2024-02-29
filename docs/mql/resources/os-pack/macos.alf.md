---
title: macos.alf
id: macos.alf
sidebar_label: macos.alf
displayed_sidebar: MQL
description: macOS application layer firewall (ALF) service
---

# macos.alf

**Description**

macOS application layer firewall (ALF) service

**Fields**

| ID                         | TYPE             | DESCRIPTION                                                                                               |
| -------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| allowDownloadSignedEnabled | int              | Whether the firewall service allows downloaded software to receive incoming connections                   |
| allowSignedEnabled         | int              | Whether the firewall service allows built-in software to receive incoming connections for signed software |
| firewallUnload             | int              | Whether the firewall is unloaded                                                                          |
| globalState                | int              | Whether the firewall is enabled                                                                           |
| loggingEnabled             | int              | Whether alf.log is used                                                                                   |
| loggingOption              | int              | Logging flags                                                                                             |
| stealthEnabled             | int              | Whether the firewall service is in stealth mode                                                           |
| version                    | string           | ALF version                                                                                               |
| exceptions                 | &#91;&#93;dict   | Service exceptions                                                                                        |
| explicitAuths              | &#91;&#93;string | Services explicitly allowed to perform networking                                                         |
| applications               | &#91;&#93;dict   | Applications with exceptions for network blocking                                                         |
