---
title: registrykey.property
id: registrykey.property
sidebar_label: registrykey.property
displayed_sidebar: MQL
description: Windows registry key property
---

# registrykey.property

**Description**

Windows registry key property

**Init**

registrykey.property(path string)
registrykey.property(name string)

**Fields**

| ID     | TYPE   | DESCRIPTION                    |
| ------ | ------ | ------------------------------ |
| path   | string | Registry key path              |
| name   | string | Registry key name              |
| exists | bool   | Whether the property exists    |
| value  | string | Deprecated; use `data` instead |
| type   | string | Registry key type              |
| data   | dict   | Registry key data              |
