---
title: esxi.service
id: esxi.service
sidebar_label: esxi.service
displayed_sidebar: MQL
description: vSphere ESXi management service resource
---

# esxi.service

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere ESXi management service resource

**Fields**

| ID       | TYPE             | DESCRIPTION                                                            |
| -------- | ---------------- | ---------------------------------------------------------------------- |
| key      | string           | Brief identifier for the service                                       |
| label    | string           | Display label for the service                                          |
| required | bool             | Flag indicating whether the service is required and cannot be disabled |
| running  | bool             | Flag indicating whether the service is currently running               |
| ruleset  | &#91;&#93;string | Firewall rulesets used by this service                                 |
| policy   | string           | Service activation policy                                              |
