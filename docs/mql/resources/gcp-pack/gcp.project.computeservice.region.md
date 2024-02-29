---
title: gcp.project.computeService.region
id: gcp.project.computeService.region
sidebar_label: gcp.project.computeService.region
displayed_sidebar: MQL
description: GCP Compute region
---

# gcp.project.computeService.region

**Supported platform**

- gcp

**Description**

GCP Compute region

**Fields**

| ID          | TYPE             | DESCRIPTION                    |
| ----------- | ---------------- | ------------------------------ |
| id          | string           | Unique identifier              |
| name        | string           | Name of the resource           |
| description | string           | Resource description           |
| status      | string           | Status of the region           |
| created     | time             | Creation timestamp             |
| quotas      | map[string]float | Quotas assigned to this region |
| deprecated  | dict             | Deprecation status             |

**References**

- [Regions and zones](https://cloud.google.com/compute/docs/regions-zones)
