---
title: gcp.project.dataprocService.cluster.config.lifecycle
id: gcp.project.dataprocService.cluster.config.lifecycle
sidebar_label: gcp.project.dataprocService.cluster.config.lifecycle
displayed_sidebar: MQL
description: Google Cloud (GCP) Dataproc cluster lifecycle config
---

# gcp.project.dataprocService.cluster.config.lifecycle

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Dataproc cluster lifecycle config

**Fields**

| ID             | TYPE   | DESCRIPTION                                     |
| -------------- | ------ | ----------------------------------------------- |
| id             | string | Internal ID                                     |
| autoDeleteTime | string | Time when the cluster will be auto-deleted      |
| autoDeleteTtl  | string | Lifetime duration of the cluster                |
| idleDeleteTtl  | string | Duration to keep the cluster alive while idling |
| idleStartTime  | string | Time when the cluster will be auto-resumed      |

**References**

- [Create a cluster](https://cloud.google.com/dataproc/docs/guides/create-cluster)
