---
title: rsyslog.conf
id: rsyslog.conf
sidebar_label: rsyslog.conf
displayed_sidebar: MQL
description: rsyslog service configuration
---

# rsyslog.conf

**Description**

rsyslog service configuration

**Init**

rsyslog.conf(path string)

**Fields**

| ID       | TYPE                      | DESCRIPTION                                           |
| -------- | ------------------------- | ----------------------------------------------------- |
| path     | string                    | Path for the main rsyslog file and search             |
| files    | &#91;&#93;[file](file.md) | Files that make up this rsyslog service configuration |
| content  | string                    | Raw contents of this rsyslog service configuration    |
| settings | &#91;&#93;string          | List of settings for this rsyslog service             |
