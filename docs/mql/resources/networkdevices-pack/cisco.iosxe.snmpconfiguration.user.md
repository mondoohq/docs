---
title: cisco.iosxe.snmpConfiguration.user
id: cisco.iosxe.snmpConfiguration.user
sidebar_label: cisco.iosxe.snmpConfiguration.user
displayed_sidebar: MQL
description: Cisco IOS XE SNMP User
---

# cisco.iosxe.snmpConfiguration.user

**Description**

Cisco IOS XE SNMP User

**Fields**

| ID              | TYPE   | DESCRIPTION                                                      |
| --------------- | ------ | ---------------------------------------------------------------- |
| username        | string | The username of the SNMP user.                                   |
| engineId        | string | The engine ID of the SNMP user.                                  |
| storageType     | string | A string identifying the name of the copy of SNMP on the device. |
| aclId           | string | The access list name or number associated to the user, if any.   |
| rowStatus       | string | The row status (e.g., active).                                   |
| authProtocol    | string | The authentication protocol (e.g., md5, sha), if any.            |
| privacyProtocol | string | The privacy protocol (e.g., aes, des), if any.                   |
| groupName       | string | The group name the user belongs to, if any.                      |
