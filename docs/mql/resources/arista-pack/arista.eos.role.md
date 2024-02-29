---
title: arista.eos.role
id: arista.eos.role
sidebar_label: arista.eos.role
displayed_sidebar: MQL
description: Arista EOS role resource
---

# arista.eos.role

**Supported platform**

- arista-eos

**Description**

Arista EOS role resource

**Fields**

| ID      | TYPE           | DESCRIPTION                                               |
| ------- | -------------- | --------------------------------------------------------- |
| name    | string         | Name of role                                              |
| default | bool           | Flag for default role                                     |
| rules   | &#91;&#93;dict | List of rules that restricts access to specified commands |
