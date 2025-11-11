---
title: microsoft.devicemanagement.manageddevice
id: microsoft.devicemanagement.manageddevice
sidebar_label: microsoft.devicemanagement.manageddevice
displayed_sidebar: MQL
description: Microsoft managed device
---

# microsoft.devicemanagement.manageddevice

**Description**

Microsoft managed device

**Fields**

| ID                           | TYPE   | DESCRIPTION                                                         |
| ---------------------------- | ------ | ------------------------------------------------------------------- |
| id                           | string | Managed device ID                                                   |
| userId                       | string | Unique identifier for the user associated with the device           |
| name                         | string | Name of the device                                                  |
| operatingSystem              | string | Operating system of the device                                      |
| jailBroken                   | string | Whether the device is jail broken or rooted                         |
| osVersion                    | string | Operating system version of the device                              |
| easActivated                 | bool   | Whether the device is Exchange ActiveSync activated                 |
| easDeviceId                  | string | Exchange ActiveSync Id of the device                                |
| azureADRegistered            | bool   | Whether the device is Entra ID (previously Azure AD) registered     |
| emailAddress                 | string | Email(s) for the user associated with the device                    |
| azureActiveDirectoryDeviceId | string | The unique identifier for the Entra ID (previously Azure AD) device |
| deviceCategoryDisplayName    | string | Device category display name                                        |
| isSupervised                 | bool   | Device supervised status                                            |
| isEncrypted                  | bool   | Device encryption status                                            |
| userPrincipalName            | string | Device user principal name                                          |
| model                        | string | Device model                                                        |
| manufacturer                 | string | Device manufacturer                                                 |
| imei                         | string | International Mobile Equipment Identity (IMEI)                      |
| serialNumber                 | string | Serial number of the device                                         |
| androidSecurityPatchLevel    | string | Android security patch level                                        |
| userDisplayName              | string | User display name                                                   |
| wiFiMacAddress               | string | Wi-Fi MAC address                                                   |
| meid                         | string | Mobile Equipment Identifier (MEID)                                  |
| iccid                        | string | Integrated Circuit Card Identifier (ICCID)                          |
| udid                         | string | Unique Device Identifier (UDID) for iOS and macOS devices           |
| notes                        | string | Notes on the device created by IT                                   |
| ethernetMacAddress           | string | Ethernet MAC address of the device                                  |
| enrollmentProfileName        | string | Name of the enrollment profile assigned to the device               |
| windowsProtectionState       | dict   | Protection state of the device                                      |
