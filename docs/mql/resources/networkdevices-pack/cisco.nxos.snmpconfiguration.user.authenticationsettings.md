---
title: cisco.nxos.snmpConfiguration.user.authenticationSettings
id: cisco.nxos.snmpConfiguration.user.authenticationSettings
sidebar_label: cisco.nxos.snmpConfiguration.user.authenticationSettings
displayed_sidebar: MQL
description: Cisco NX-OS SNMP User Authentication and Encryption settings
---

# cisco.nxos.snmpConfiguration.user.authenticationSettings

**Description**

Cisco NX-OS SNMP User Authentication and Encryption settings

**Fields**

| ID                  | TYPE                                  | DESCRIPTION                                                                                                                                                                                                              |
|---------------------|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| groupName           | string                                | Optional. The SNMP group (user role) name associated to this user and these authentication settings.                                                                                                                     |
| group               | [cisco.nxos.role](cisco.nxos.role.md) | Optional. The SNMP group (user role) associated to this user and these authentication settings.                                                                                                                          |
| passwordEncType     | int                                   | Optional. The password encryption type.                                                                                                                                                                                  |
| authAlgorithm       | string                                | Optional. The authentication algorithm.                                                                                                                                                                                  |
| authPassword        | string                                | Optional. The authentication password (key).                                                                                                                                                                             |
| encryptionAlgorithm | string                                | Optional. The encryption algorithm.                                                                                                                                                                                      |
| encryptionPassword  | string                                | Optional. The encryption password (key).                                                                                                                                                                                 |
| engineId            | string                                | Optional. The SNMP engine ID.                                                                                                                                                                                            |
| passwordFormat      | string                                | Optional. Authentication password format. Can be either `localizedkey`, or `localizedV2key`., When `localizedkey`, the passwords are in localized format., When `localizedV2key`, the passwords are in encrypted format. |

