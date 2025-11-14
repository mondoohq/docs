---
title: cisco.iosxe.serviceConfig
id: cisco.iosxe.serviceConfig
sidebar_label: cisco.iosxe.serviceConfig
displayed_sidebar: MQL
description: Cisco IOS XE Service configuration
---

# cisco.iosxe.serviceConfig

**Description**

Cisco IOS XE Service configuration

**Fields**

| ID                        | TYPE                                                                    | DESCRIPTION                                                  |
| ------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------ |
| padEnabled                | bool                                                                    | Whether X.25 Packet Assembler/Disassembler (PAD) is enabled. |
| tcpKeepalivesInEnabled    | bool                                                                    | Whether tcp-keepalives-in is enabled.                        |
| tcpKeepalivesOutEnabled   | bool                                                                    | Whether tcp-keepalives-out is enabled.                       |
| passwordEncryptionEnabled | bool                                                                    | Whether password-encryption is enabled.                      |
| logTimestampFormats       | &#91;&#93;[cisco.iosxe.timestampFormat](cisco.iosxe.timestampformat.md) | Configuration for timestamps in log messages.                |
