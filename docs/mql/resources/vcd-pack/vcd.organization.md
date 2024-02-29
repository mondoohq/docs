---
title: vcd.organization
id: vcd.organization
sidebar_label: vcd.organization
displayed_sidebar: MQL
description: VMware Cloud Director organization resource
---

# vcd.organization

**Description**

VMware Cloud Director organization resource

**Fields**

| ID                | TYPE                                                              | DESCRIPTION                          |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------ |
| id                | string                                                            | Organization ID                      |
| name              | string                                                            | Organization name                    |
| fullName          | string                                                            | Organization full name               |
| isEnabled         | bool                                                              | Whether this organization is enabled |
| description       | string                                                            | Organization description             |
| vms               | &#91;&#93;[vcd.vm](vcd.vm.md)                                     | Virtual machines                     |
| rights            | &#91;&#93;[vcd.right](vcd.right.md)                               | Rights                               |
| vdcs              | &#91;&#93;[vcd.vdc](vcd.vdc.md)                                   | Virtual data centers (VDCs)          |
| vdcGroups         | &#91;&#93;[vcd.vdcGroup](vcd.vdcgroup.md)                         | VDC groups                           |
| roles             | &#91;&#93;[vcd.role](vcd.role.md)                                 | Organization roles                   |
| settings          | dict                                                              | Organization settings                |
| ldapConfiguration | [vcd.organization.ldapSettings](vcd.organization.ldapsettings.md) | Organization LDAP configuration      |
