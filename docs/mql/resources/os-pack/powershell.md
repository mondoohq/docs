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
