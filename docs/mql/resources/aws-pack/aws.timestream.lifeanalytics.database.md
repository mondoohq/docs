---
title: aws.timestream.lifeanalytics.database
id: aws.timestream.lifeanalytics.database
sidebar_label: aws.timestream.lifeanalytics.database
displayed_sidebar: MQL
description: Amazon Timestream for LifeAnalytics database
---

# aws.timestream.lifeanalytics.database

**Supported platform**

- aws

**Description**

Amazon Timestream for LifeAnalytics database

**Fields**

| ID         | TYPE   | DESCRIPTION                                             |
| ---------- | ------ | ------------------------------------------------------- |
| arn        | string | ARN for the database                                    |
| name       | string | Name of the database                                    |
| kmsKeyId   | string | KMS key used to encrypt the data stored in the database |
| region     | string | Region where the database exists                        |
| createdAt  | time   | Time when the database was created                      |
| updatedAt  | time   | Time when the database was last updated                 |
| tableCount | int    | Total number of tables in database                      |
