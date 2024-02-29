---
title: command
id: command
sidebar_label: command
displayed_sidebar: MQL
description: Results of running a command on the system
---

# command

**Description**

Results of running a command on the system

**Init**

command(command string)

**Fields**

| ID       | TYPE   | DESCRIPTION                                    |
| -------- | ------ | ---------------------------------------------- |
| command  | string | Raw contents of the command                    |
| stdout   | string | Standard output from running the command       |
| stderr   | string | Standard error output from running the command |
| exitcode | int    | Exit code the command returned                 |
