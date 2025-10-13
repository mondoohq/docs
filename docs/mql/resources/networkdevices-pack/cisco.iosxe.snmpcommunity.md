---
title: cisco.iosxe.snmpCommunity
id: cisco.iosxe.snmpCommunity
sidebar_label: cisco.iosxe.snmpCommunity
displayed_sidebar: MQL
description: Cisco IOS XE SNMP Community String configuration
---

# cisco.iosxe.snmpCommunity

**Description**

Cisco IOS XE SNMP Community String configuration

**Fields**

| ID           | TYPE                                                          | DESCRIPTION                                                                             |
| ------------ | ------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| name         | string                                                        | The name of the community string.                                                       |
| index        | string                                                        | The index of the community string.                                                      |
| securityName | string                                                        | The security name for the community                                                     |
| accessType   | string                                                        | The access type for the community. This can be either 'RO' or 'RW'.                     |
| aclId        | string                                                        | The identifier of the access list applied to the community, if any.                     |
| acl          | [cisco.iosxe.accessListEntry](cisco.iosxe.accesslistentry.md) | Optional. The ACL entry applied to the community. Retrieved by using the 'aclId' field. |
