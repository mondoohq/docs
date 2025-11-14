---
title: cisco.nxos.scheduler.schedule
id: cisco.nxos.scheduler.schedule
sidebar_label: cisco.nxos.scheduler.schedule
displayed_sidebar: MQL
description: Cisco NX-OS Scheduler Schedule
---

# cisco.nxos.scheduler.schedule

**Description**

Cisco NX-OS Scheduler Schedule

**Fields**

| ID           | TYPE                                                              | DESCRIPTION                                        |
|--------------|-------------------------------------------------------------------|----------------------------------------------------|
| name         | string                                                            | The name of the schedule.                          |
| scheduleType | string                                                            | The type of schedule (e.g., daily, weekly, start). |
| time         | string                                                            | The time the schedule is set to run.               |
| assignedJobs | &#91;&#93;[cisco.nxos.scheduler.job](cisco.nxos.scheduler.job.md) | The jobs assigned to this schedule.                |

