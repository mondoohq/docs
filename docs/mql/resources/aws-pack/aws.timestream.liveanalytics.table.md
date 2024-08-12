---
title: aws.timestream.liveanalytics.table
id: aws.timestream.liveanalytics.table
sidebar_label: aws.timestream.liveanalytics.table
displayed_sidebar: MQL
description: Amazon Timestream for LiveAnalytics table
---

# aws.timestream.liveanalytics.table

**Supported platform**

- aws

**Description**

Amazon Timestream for LiveAnalytics table

**Fields**

| ID                           | TYPE   | DESCRIPTION                                 |
| ---------------------------- | ------ | ------------------------------------------- |
| arn                          | string | ARN for the table                           |
| name                         | string | Name of the table                           |
| databaseName                 | string | Name of the database                        |
| region                       | string | Region where the table exists               |
| createdAt                    | time   | Time when the table was created             |
| updatedAt                    | time   | Time when the table was last updated        |
| magneticStoreWriteProperties | dict   | magnetic store properties for the table     |
| retentionProperties          | dict   | retention duration properties for the table |
