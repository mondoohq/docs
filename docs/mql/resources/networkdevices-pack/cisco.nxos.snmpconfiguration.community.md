---
title: cisco.nxos.snmpConfiguration.community
id: cisco.nxos.snmpConfiguration.community
sidebar_label: cisco.nxos.snmpConfiguration.community
displayed_sidebar: MQL
description: Cisco NX-OS SNMP Community configuration
---

# cisco.nxos.snmpConfiguration.community

**Description**

Cisco NX-OS SNMP Community configuration

**Fields**

| ID        | TYPE                                  | DESCRIPTION                                                          |
| --------- | ------------------------------------- | -------------------------------------------------------------------- |
| name      | string                                | The name of the community.                                           |
| groupName | string                                | The name of the SNMP group (user role) associated to this community. |
| group     | [cisco.nxos.role](cisco.nxos.role.md) | The SNMP group (user role) associated to this community.             |
| ipv4Acl   | string                                | Optional. The ipv4 ACL applied to this community.                    |
| ipv6Acl   | string                                | Optional. The ipv6 ACL applied to this community.                    |
