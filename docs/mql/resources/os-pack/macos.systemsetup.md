---
title: macos.systemsetup
id: macos.systemsetup
sidebar_label: macos.systemsetup
displayed_sidebar: MQL
description: macOS machine settings
---

# macos.systemsetup

**Description**

macOS machine settings

**Fields**

| ID                                        | TYPE             | DESCRIPTION                                                                    |
| ----------------------------------------- | ---------------- | ------------------------------------------------------------------------------ |
| date                                      | string           | Current date                                                                   |
| time                                      | string           | Current time in 24-hour format                                                 |
| timeZone                                  | string           | Current time zone                                                              |
| usingNetworkTime                          | string           | Whether network time is on or off                                              |
| networkTimeServer                         | string           | Configured network time server                                                 |
| sleep                                     | &#91;&#93;string | Amount of idle time until the machine sleeps                                   |
| displaySleep                              | string           | Amount of idle time until the display sleeps                                   |
| harddiskSleep                             | string           | Amount of idle time until the hard disk sleeps                                 |
| wakeOnModem                               | string           | Whether wake on modem is on or off                                             |
| wakeOnNetworkAccess                       | string           | Whether wake on network access is on or off                                    |
| restartPowerFailure                       | string           | Whether restart on power failure is on or off                                  |
| restartFreeze                             | string           | Whether restart on freeze is on or off                                         |
| allowPowerButtonToSleepComputer           | string           | Whether the power button can sleep the computer                                |
| remoteLogin                               | string           | Whether remote login (SSH) is on or off                                        |
| remoteAppleEvents                         | string           | Whether remote Apple events are on or off                                      |
| computerName                              | string           | Computer name                                                                  |
| localSubnetName                           | string           | Local subnet name                                                              |
| startupDisk                               | string           | Current startup disk                                                           |
| waitForStartupAfterPowerFailure           | string           | Number of seconds after which the computer will start up after a power failure |
| disableKeyboardWhenEnclosureLockIsEngaged | string           | Whether the keyboard is disabled when the X Serve enclosure lock is engaged    |
