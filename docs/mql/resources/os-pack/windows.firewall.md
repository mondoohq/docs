---
title: windows.firewall
id: windows.firewall
sidebar_label: windows.firewall
displayed_sidebar: MQL
description: Windows Firewall resource
---

# windows.firewall

**Description**

Windows Firewall resource

**Fields**

| ID       | TYPE                                                              | DESCRIPTION                                                                                          |
| -------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| settings | dict                                                              | Global firewall settings                                                                             |
| profiles | &#91;&#93;[windows.firewall.profile](windows.firewall.profile.md) | Settings that apply to the per-profile configurations of the Windows Firewall with Advanced Security |
| rules    | &#91;&#93;[windows.firewall.rule](windows.firewall.rule.md)       | Firewall rules                                                                                       |

**Examples**

Check a specific Windows Firewall rule

```coffeescript
windows.firewall.rules.where ( displayName == "File and Printer Sharing (Echo Request - ICMPv4-In)") {
  enabled == 1
}
```
