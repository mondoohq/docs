---
title: cisco.iosxr.runLineTransportIO
id: cisco.iosxr.runLineTransportIO
sidebar_label: cisco.iosxr.runLineTransportIO
displayed_sidebar: MQL
description: Running Config Line Transport input
---

# cisco.iosxr.runLineTransportIO

**Description**

Running Config Line Transport input

**Init**

cisco.iosxr.runLineTransportIO(lineTemplate string)

**Fields**

| ID           | TYPE                                                                                    | DESCRIPTION                                        |
| ------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| lineTemplate | string                                                                                  | Line template name (e.g. default, ssh-only-config) |
| entries      | &#91;&#93;[cisco.iosxr.runLineTransportIOEntry](cisco.iosxr.runlinetransportioentry.md) | Transport confirations for the line                |
