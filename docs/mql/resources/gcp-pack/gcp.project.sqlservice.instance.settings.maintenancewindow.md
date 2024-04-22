---
title: gcp.project.sqlService.instance.settings.maintenanceWindow
id: gcp.project.sqlService.instance.settings.maintenanceWindow
sidebar_label: gcp.project.sqlService.instance.settings.maintenanceWindow
displayed_sidebar: MQL
description: Google Cloud (GCP) SQL instance settings maintenance window
---

# gcp.project.sqlService.instance.settings.maintenanceWindow

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) SQL instance settings maintenance window

**Fields**

| ID          | TYPE   | DESCRIPTION                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| id          | string | Internal ID                                                  |
| day         | int    | Day of week (1-7, 1 is Monday)                               |
| hour        | int    | Hour of day (0 to 23)                                        |
| updateTrack | string | Maintenance time setting: canary (earlier) or stable (later) |

**References**

- [Cloud SQL overview](https://cloud.google.com/sql/docs/introduction)
