---
title: windows
id: windows
sidebar_label: windows
displayed_sidebar: MQL
description: Windows-specific resource to get operating system details
---

# windows

**Description**

Windows-specific resource to get operating system details

**Fields**

| ID           | TYPE                                            | DESCRIPTION                                                                                                                                                                                               |
| ------------ | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| computerInfo | dict                                            | A consolidated object of system and operating system properties, see https://docs.microsoft.com/en-us/dotnet/api/microsoft.powershell.commands.computerinfo?view=powershellsdk-1.1.0 for more information |
| hotfixes     | &#91;&#93;[windows.hotfix](windows.hotfix.md)   | Hotfixes installed on the computer                                                                                                                                                                        |
| features     | &#91;&#93;[windows.feature](windows.feature.md) | Information about Windows Server roles, role services, and features that are available for installation and installed on a specified server.                                                              |

**Examples**

Check the OS Edition

```coffeescript
windows.computerInfo['WindowsInstallationType'] == 'Server Core'
```
