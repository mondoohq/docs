---
title: cloudflare.workers.worker
id: cloudflare.workers.worker
sidebar_label: cloudflare.workers.worker
displayed_sidebar: MQL
description: Cloudflare worker
---

# cloudflare.workers.worker

**Description**

Cloudflare worker

**Fields**

| ID               | TYPE   | DESCRIPTION                                 |
| ---------------- | ------ | ------------------------------------------- |
| id               | string | Worker ID                                   |
| etag             | string | Worker etag                                 |
| size             | int    | Worker size                                 |
| deploymentId     | string | Deployment for the worker                   |
| pipelineHash     | string | CI/CD pipeline for the worker               |
| placementMode    | string | Placement mode for the worker (e.g., smart) |
| lastDeployedFrom | string | Worker was last deployed from               |
| logPush          | bool   | Whether LogPush is enabled for the worker   |
| createdOn        | time   | Time the worker was created                 |
| modifiedOn       | time   | Time the worker was last modified           |
