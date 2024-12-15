---
title: nmap.port
id: nmap.port
sidebar_label: nmap.port
displayed_sidebar: MQL
description: Nmap port
---

# nmap.port

**Description**

Nmap port

**Fields**

| ID       | TYPE   | DESCRIPTION                                       |
| -------- | ------ | ------------------------------------------------- |
| port     | int    | Port number                                       |
| service  | string | Service running on the port                       |
| method   | string | Method used to discover the port (e.g., SYN scan) |
| protocol | string | Protocol used (e.g., TCP or UDP)                  |
| product  | string | Product running on the port                       |
| version  | string | Version of the product running on the port        |
| state    | string | State of the port (e.g., open or closed)          |
