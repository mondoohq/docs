---
title: gcp.project.sqlService.instance.ipMapping
id: gcp.project.sqlService.instance.ipMapping
sidebar_label: gcp.project.sqlService.instance.ipMapping
displayed_sidebar: MQL
description: Google Cloud (GCP) SQL instance IP mapping
---

# gcp.project.sqlService.instance.ipMapping

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) SQL instance IP mapping

**Fields**

| ID           | TYPE   | DESCRIPTION                    |
| ------------ | ------ | ------------------------------ |
| id           | string | Internal ID                    |
| ipAddress    | string | Assigned IP address            |
| timeToRetire | time   | Due time for this IP to retire |
| type         | string | Type of this IP address        |

**References**

- [Cloud SQL overview](https://cloud.google.com/sql/docs/introduction)
