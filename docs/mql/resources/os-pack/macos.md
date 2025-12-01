---
title: macos
id: macos
sidebar_label: macos
displayed_sidebar: MQL
description: macOS specific resources
---

# macos

**Description**

macOS specific resources

**Fields**

| ID                    | TYPE                                                        | DESCRIPTION                          |
| --------------------- | ----------------------------------------------------------- | ------------------------------------ |
| computerName          | string                                                      | macOS computer name                  |
| userPreferences       | map[string]dict                                             | macOS user defaults                  |
| userHostPreferences   | map[string]dict                                             | macOS user defaults for current host |
| globalAccountPolicies | dict                                                        | macOS global account policies        |
| systemExtensions      | &#91;&#93;[macos.systemExtension](macos.systemextension.md) | System extensions                    |
