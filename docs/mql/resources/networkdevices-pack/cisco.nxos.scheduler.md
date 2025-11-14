---
title: cisco.nxos.scheduler
id: cisco.nxos.scheduler
sidebar_label: cisco.nxos.scheduler
displayed_sidebar: MQL
description: Cisco NX-OS Scheduler configuration
---

# cisco.nxos.scheduler

**Description**

Cisco NX-OS Scheduler configuration

**Fields**

| ID            | TYPE                                                                        | DESCRIPTION                                                                                                                                                                                         |
|---------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| logFileSizeKb | int                                                                         | The size of the log file in KiloBytes (KB). The range is from 16 to 1024. The default is 16., If the size of the job output is greater than the size of the log file, then the output is truncated. |
| schedules     | &#91;&#93;[cisco.nxos.scheduler.schedule](cisco.nxos.scheduler.schedule.md) | The list of schedules.                                                                                                                                                                              |
| jobs          | &#91;&#93;[cisco.nxos.scheduler.job](cisco.nxos.scheduler.job.md)           | The list of jobs.                                                                                                                                                                                   |

