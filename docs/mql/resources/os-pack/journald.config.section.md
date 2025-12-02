---
title: journald.config.section
id: journald.config.section
sidebar_label: journald.config.section
displayed_sidebar: MQL
description: A section in journald configuration
---

# journald.config.section

**Description**

A section in journald configuration

**Fields**

| ID     | TYPE                                                                        | DESCRIPTION                                     |
| ------ | --------------------------------------------------------------------------- | ----------------------------------------------- |
| name   | string                                                                      | Name of the section (e.g., "Journal", "Upload") |
| params | &#91;&#93;[journald.config.section.param](journald.config.section.param.md) | Key-value pairs in this section                 |
