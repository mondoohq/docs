---
title: snowflake.database
id: snowflake.database
sidebar_label: snowflake.database
displayed_sidebar: MQL
description: Snowflake Database
---

# snowflake.database

**Description**

Snowflake Database

**Fields**

| ID            | TYPE   | DESCRIPTION                                |
| ------------- | ------ | ------------------------------------------ |
| name          | string | Name of the database                       |
| isDefault     | bool   | Whether the database is a default database |
| isCurrent     | bool   | Whether the database is a current database |
| origin        | string | Database origin                            |
| owner         | string | Database owner                             |
| comment       | string | Comment for the database                   |
| options       | string | Database options string                    |
| retentionTime | int    | Retention time of the database             |
| resourceGroup | string | Resource group of the database             |
| transient     | bool   | Whether the database is transient          |
| createdAt     | time   | When the database was created              |
| droppedAt     | time   | When the database was dropped              |
