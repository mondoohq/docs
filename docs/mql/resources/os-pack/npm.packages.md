---
title: npm.packages
id: npm.packages
sidebar_label: npm.packages
displayed_sidebar: MQL
description: npm packages
---

# npm.packages

**Description**

npm packages

**Init**

npm.packages(path string)

**List**

[]npm.package

**Fields**

| ID                 | TYPE                                    | DESCRIPTION                          |
| ------------------ | --------------------------------------- | ------------------------------------ |
| path               | string                                  | Optional path to search for packages |
| root               | [npm.package](npm.package.md)           | Root Package (may not exist)         |
| directDependencies | &#91;&#93;[npm.package](npm.package.md) | List of direct dependencies          |
| files              | &#91;&#93;[pkgFileInfo](pkgfileinfo.md) | Files used to determine the packages |
| scripts            | map[string]string                       | scripts defined in package json      |
| list               | &#91;&#93;[npm.package](npm.package.md) |                                      |
