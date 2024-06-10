---
title: snowflake.stage
id: snowflake.stage
sidebar_label: snowflake.stage
displayed_sidebar: MQL
description: Snowflake Stage
---

# snowflake.stage

**Description**

Snowflake Stage

**Fields**

| ID               | TYPE   | DESCRIPTION                                        |
| ---------------- | ------ | -------------------------------------------------- |
| name             | string | Name of the stage                                  |
| databaseName     | string | Database name                                      |
| schemaName       | string | Schema name                                        |
| owner            | string | Owner of the stage                                 |
| comment          | string | Comment for the stage                              |
| createdAt        | time   | When the stage was created                         |
| hasCredentials   | bool   | Whether the stage has credentials                  |
| hasEncryptionKey | bool   | Whether the stage has encryption key               |
| url              | string | URL of the stage                                   |
| type             | string | Stage type                                         |
| cloud            | string | Cloud provider of the stage                        |
| storeIntegration | string | Storage integration of the stage                   |
| endpoint         | string | Endpoint of the stage                              |
| ownerRoleType    | string | Owner role type                                    |
| directoryEnabled | bool   | Whether a directory table is enabled for the stage |
