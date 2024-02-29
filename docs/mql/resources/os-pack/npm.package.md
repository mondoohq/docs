---
title: npm.package
id: npm.package
sidebar_label: npm.package
displayed_sidebar: MQL
---

# npm.package

**Fields**

| ID      | TYPE                                    | DESCRIPTION                                       |
| ------- | --------------------------------------- | ------------------------------------------------- |
| id      | string                                  | ID is the npm.package unique identifier           |
| name    | string                                  | Name of the package                               |
| version | string                                  | Version of the package                            |
| purl    | string                                  | Package URL                                       |
| cpes    | &#91;&#93;core.cpe                      | Common Platform Enumeration (CPE) for the package |
| files   | &#91;&#93;[pkgFileInfo](pkgfileinfo.md) | Package files                                     |
