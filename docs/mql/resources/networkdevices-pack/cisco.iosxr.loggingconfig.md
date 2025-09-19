---
title: cisco.iosxr.loggingConfig
id: cisco.iosxr.loggingConfig
sidebar_label: cisco.iosxr.loggingConfig
displayed_sidebar: MQL
description: Cisco IOS XR Logging configuration
---

# cisco.iosxr.loggingConfig

**Description**

Cisco IOS XR Logging configuration

**Fields**

| ID              | TYPE   | DESCRIPTION                    |
| --------------- | ------ | ------------------------------ |
| enabled         | bool   | Whether logging is enabled     |
| dropped         | int    | Messages dropped count         |
| flushes         | int    | Flushes count                  |
| overruns        | int    | Overruns count                 |
| consoleLogLevel | string | Console log level              |
| consoleMessages | int    | Messages logged to the console |
| monitorLogLevel | string | Monitor log level              |
| monitorMessages | int    | Messages logged to the monitor |
| bufferLogLevel  | string | Buffer log level               |
| bufferMessages  | int    | Messages logged to the buffer  |
| trapLogLevel    | string | Trap log level                 |
| trapMessages    | int    | Messages logged to the trap    |
