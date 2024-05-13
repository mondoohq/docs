---
title: package
id: package
sidebar_label: package
displayed_sidebar: MQL
description: Package on the platform or OS
---

# package

**Description**

Package on the platform or OS

**Init**

package(name string)

**Fields**

| ID          | TYPE                                    | DESCRIPTION                                                 |
| ----------- | --------------------------------------- | ----------------------------------------------------------- |
| name        | string                                  | Name of the package                                         |
| description | string                                  | Package description                                         |
| version     | string                                  | Current version of the package                              |
| arch        | string                                  | Architecture of this package                                |
| epoch       | string                                  | Epoch of this package                                       |
| format      | string                                  | Format of this package (e.g., rpm, deb)                     |
| status      | string                                  | Status of this package (e.g., if it is needed)              |
| purl        | string                                  | Package URL                                                 |
| cpes        | &#91;&#93;core.cpe                      | Common Platform Enumeration (CPE) for the package           |
| origin      | string                                  | Package origin, may include version if available (optional) |
| available   | string                                  | Available version                                           |
| installed   | bool                                    | Whether the package is installed                            |
| outdated    | bool                                    | Whether the package is outdated                             |
| files       | &#91;&#93;[pkgFileInfo](pkgfileinfo.md) | Package files                                               |

**Examples**

Check if a package is installed

```coffeescript
package('git').installed
```
