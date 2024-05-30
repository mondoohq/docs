---
title: shodan.apiPlan
id: shodan.apiPlan
sidebar_label: shodan.apiPlan
displayed_sidebar: MQL
description: Shodan Search Engine API plan information
---

# shodan.apiPlan

**Description**

Shodan Search Engine API plan information

**Fields**

| ID           | TYPE   | DESCRIPTION                     |
| ------------ | ------ | ------------------------------- |
| scanCredits  | int    | Number of scan credits          |
| plan         | string | Name of the plan                |
| unlocked     | bool   | Indicates if the plan is active |
| unlockedLeft | int    | Number of scan credits left     |
| telnet       | bool   | Indicated if Telnet is allowed  |
| monitoredIps | int    | Number of monitored IPs         |
