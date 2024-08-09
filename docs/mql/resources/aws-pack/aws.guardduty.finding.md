---
title: aws.guardduty.finding
id: aws.guardduty.finding
sidebar_label: aws.guardduty.finding
displayed_sidebar: MQL
description: AWS Guard Duty finding
---

# aws.guardduty.finding

**Supported platform**

- aws

**Description**

AWS Guard Duty finding

**Fields**

| ID          | TYPE   | DESCRIPTION                        |
| ----------- | ------ | ---------------------------------- |
| arn         | string | Unique ID for the finding          |
| id          | string | ID of the finding                  |
| region      | string | Region where the finding was found |
| title       | string | Title                              |
| description | string | Description                        |
| severity    | float  | Severity of the finding            |
| confidence  | float  | Confidence level of the finding    |
| type        | string | Type of finding                    |
| createdAt   | time   | Created at time                    |
| updatedAt   | time   | Updated at time                    |
