---
title: python
id: python
sidebar_label: python
displayed_sidebar: MQL
description: Python package details found on the operating system image
---

# python

**Description**

Python package details found on the operating system image

**Init**

python(path string)

**Fields**

| ID       | TYPE                                          | DESCRIPTION                                                                                        |
| -------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| path     | string                                        | Path to a specific site-packages location to exclusively scan (empty means scan default locations) |
| packages | &#91;&#93;[python.package](python.package.md) | List of all discovered packages                                                                    |
| toplevel | &#91;&#93;[python.package](python.package.md) | List of all packages that were specifically installed (i.e., not auto-installed as a dependency)   |
