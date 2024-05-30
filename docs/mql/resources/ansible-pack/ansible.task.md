---
title: ansible.task
id: ansible.task
sidebar_label: ansible.task
displayed_sidebar: MQL
description: Ansible Task
---

# ansible.task

**Description**

Ansible Task

**Fields**

| ID              | TYPE                                      | DESCRIPTION                                       |
| --------------- | ----------------------------------------- | ------------------------------------------------- |
| name            | string                                    | Name of the task                                  |
| action          | dict                                      | Task action                                       |
| vars            | map[string]dict                           | Task variables                                    |
| register        | string                                    | Register variable to store the result             |
| when            | string                                    | Condition to run the task                         |
| failedWhen      | string                                    | Failed condition                                  |
| changedWhen     | string                                    | Changed condition                                 |
| notify          | &#91;&#93;string                          | Notify handlers                                   |
| importPlaybook  | string                                    | Pre-process playbook file when playbook is parsed |
| includePlaybook | string                                    | Include playbook file                             |
| importTasks     | string                                    | Pre-process tasks file when playbook is parsed    |
| includeTasks    | string                                    | Include tasks file                                |
| block           | &#91;&#93;[ansible.task](ansible.task.md) | Block tasks                                       |
| rescue          | &#91;&#93;[ansible.task](ansible.task.md) | Rescue tasks                                      |
