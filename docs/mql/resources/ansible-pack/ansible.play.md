---
title: ansible.play
id: ansible.play
sidebar_label: ansible.play
displayed_sidebar: MQL
description: Ansible Play
---

# ansible.play

**Description**

Ansible Play

**Fields**

| ID                | TYPE                                            | DESCRIPTION                                     |
| ----------------- | ----------------------------------------------- | ----------------------------------------------- |
| name              | string                                          | Name of the play                                |
| hosts             | dict                                            | Hosts                                           |
| remoteUser        | string                                          | User for the connection                         |
| become            | bool                                            | Become flag                                     |
| becomeUser        | string                                          | Become user                                     |
| becomeMethod      | string                                          | Become method                                   |
| becomeFlags       | string                                          | Become flags                                    |
| strategy          | string                                          | Strategy                                        |
| maxFailPercentage | int                                             | Maximum number of hosts to fail before quitting |
| ignoreUnreachable | bool                                            | Flag to ignore unreachable hosts                |
| anyErrorsFatal    | bool                                            | Flag to finish fatal on any error               |
| vars              | map[string]dict                                 | Playbook variables                              |
| roles             | &#91;&#93;string                                | Roles                                           |
| tasks             | &#91;&#93;[ansible.task](ansible.task.md)       | Tasks                                           |
| handlers          | &#91;&#93;[ansible.handler](ansible.handler.md) | Handlers                                        |
