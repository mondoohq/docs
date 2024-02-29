---
title: logindefs
id: logindefs
sidebar_label: logindefs
displayed_sidebar: MQL
description: Shadow password suite configuration
---

# logindefs

**Description**

Shadow password suite configuration

**Init**

logindefs(path string)

**Fields**

| ID      | TYPE              | DESCRIPTION                             |
| ------- | ----------------- | --------------------------------------- |
| file    | [file](file.md)   | Current configuration file for resource |
| content | string            | Content of the configuration file       |
| params  | map[string]string | Parsed logindef parameter               |
