---
title: registrykey
id: registrykey
sidebar_label: registrykey
displayed_sidebar: MQL
description: Windows registry key
---

# registrykey

**Description**

Windows registry key

**Init**

registrykey(path string)

**Fields**

| ID         | TYPE                                                      | DESCRIPTION                     |
| ---------- | --------------------------------------------------------- | ------------------------------- |
| path       | string                                                    | Registry key path               |
| exists     | bool                                                      | Whether the property exists     |
| properties | map[string]string                                         | Deprecated; use `items` instead |
| items      | &#91;&#93;[registrykey.property](registrykey.property.md) | Registry key items              |
| children   | &#91;&#93;string                                          | Registry key children           |
