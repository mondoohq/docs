---
title: auditd.rules
id: auditd.rules
sidebar_label: auditd.rules
displayed_sidebar: MQL
description: auditd (Linux Audit Daemon) rules aggregated on disk
---

# auditd.rules

**Description**

auditd (Linux Audit Daemon) rules aggregated on disk

**Fields**

| ID       | TYPE                                                    | DESCRIPTION                     |
| -------- | ------------------------------------------------------- | ------------------------------- |
| path     | string                                                  | path to folder to look up rules |
| controls | &#91;&#93;[auditd.rule.control](auditd.rule.control.md) | all controls for auditd         |
| files    | &#91;&#93;[auditd.rule.file](auditd.rule.file.md)       | all file rules                  |
| syscalls | &#91;&#93;[auditd.rule.syscall](auditd.rule.syscall.md) | all syscall rules               |
