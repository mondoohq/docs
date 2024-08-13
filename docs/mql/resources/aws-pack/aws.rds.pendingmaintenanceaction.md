---
title: aws.rds.pendingMaintenanceAction
id: aws.rds.pendingMaintenanceAction
sidebar_label: aws.rds.pendingMaintenanceAction
displayed_sidebar: MQL
description: Amazon RDS pending maintenance action
---

# aws.rds.pendingMaintenanceAction

**Supported platform**

- aws

**Description**

Amazon RDS pending maintenance action

**Fields**

| ID                   | TYPE   | DESCRIPTION               |
| -------------------- | ------ | ------------------------- |
| resourceArn          | string | ARN for resource          |
| action               | string | Action to take            |
| description          | string | Description of the action |
| autoAppliedAfterDate | time   | Auto applied after date   |
| currentApplyDate     | time   | Current apply date        |
| forcedApplyDate      | time   | Forced apply date         |
| optInStatus          | string | Opt-in status             |
