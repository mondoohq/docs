---
title: auditd.rule.syscall
id: auditd.rule.syscall
sidebar_label: auditd.rule.syscall
displayed_sidebar: MQL
description: auditd (Linux Audit Daemon) rule for a syscall
---

# auditd.rule.syscall

**Description**

auditd (Linux Audit Daemon) rule for a syscall

**Fields**

| ID       | TYPE             | DESCRIPTION                                                 |
| -------- | ---------------- | ----------------------------------------------------------- |
| action   | string           | the action specified by -a                                  |
| list     | string           | the list, the second value specified by -a                  |
| syscalls | &#91;&#93;string | the list of syscalls that this rule matches specified by -S |
| fields   | &#91;&#93;dict   | all field entries as raw values as specified by -F          |
| keyname  | string           | the key name for related rules as specified by -k           |
