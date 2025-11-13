---
title: cisco.nxos.role.rule
id: cisco.nxos.role.rule
sidebar_label: cisco.nxos.role.rule
displayed_sidebar: MQL
description: Cisco NX-OS Role Rule
---

# cisco.nxos.role.rule

**Description**

Cisco NX-OS Role Rule

**Fields**

| ID         | TYPE   | DESCRIPTION                                                   |
| ---------- | ------ | ------------------------------------------------------------- |
| number     | int    | The number of the rule.                                       |
| permission | string | The access type of the rule, e.g. `permit` or `deny`.         |
| accessType | string | The type of the rule, e.g. `read`, `read-write` or `command`. |
| scope      | string | Optional. The scope of the rule.                              |
| entity     | string | Optional. The entity the rule applies to.                     |
