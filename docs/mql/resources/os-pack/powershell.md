---
title: powershell
id: powershell
sidebar_label: powershell
displayed_sidebar: MQL
description: Results of running a PowerShell script on the system
---

# powershell

**Description**

Results of running a PowerShell script on the system

**Init**

powershell(script string)

**Fields**

| ID       | TYPE   | DESCRIPTION                                   |
| -------- | ------ | --------------------------------------------- |
| script   | string | Raw contents of the script                    |
| stdout   | string | Standard output from running the script       |
| stderr   | string | Standard error output from running the script |
| exitcode | int    | Exit code the script returned                 |

**Examples**

Run custom powershell command

```coffee
powershell('Get-WmiObject -Class Win32_volume -Filter "DriveType=3"| Select Label') {
  stdout == /PAGEFILE/
  stderr == ''
}
```

Check the timezone

```coffee
powershell('tzutil /g') {
  stdout.trim == 'GMT Standard Time'
  stderr == ''
}
```
