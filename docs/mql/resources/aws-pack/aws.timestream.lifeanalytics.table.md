---
title: aws.timestream.lifeanalytics.table
id: aws.timestream.lifeanalytics.table
sidebar_label: aws.timestream.lifeanalytics.table
displayed_sidebar: MQL
description: Amazon Timestream for LifeAnalytics table
---

# aws.timestream.lifeanalytics.table

**Supported platform**

- aws

**Description**

Amazon Timestream for LifeAnalytics table

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
