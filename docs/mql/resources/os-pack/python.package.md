---
title: python.package
id: python.package
sidebar_label: python.package
displayed_sidebar: MQL
description: Python package information
---

# python.package

**Description**

Python package information

**Init**

python.package(path string)

**Fields**

| ID           | TYPE                                          | DESCRIPTION                                       |
| ------------ | --------------------------------------------- | ------------------------------------------------- |
| id           | string                                        | ID is the python.package unique identifier        |
| name         | string                                        | Name of the package                               |
| file         | [file](file.md)                               | File containing the package metadata              |
| version      | string                                        | Version of the package                            |
| license      | string                                        | License of the package                            |
| author       | string                                        | Author of the package                             |
| authorEmail  | string                                        | Author email of the package                       |
| summary      | string                                        | Short package description                         |
| purl         | string                                        | Package URL                                       |
| cpes         | &#91;&#93;core.cpe                            | Common Platform Enumeration (CPE) for the package |
| dependencies | &#91;&#93;[python.package](python.package.md) | List of packages depended on                      |
