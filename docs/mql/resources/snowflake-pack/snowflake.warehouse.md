---
title: snowflake.warehouse
id: snowflake.warehouse
sidebar_label: snowflake.warehouse
displayed_sidebar: MQL
description: Snowflake Warehouse
---

# snowflake.warehouse

**Description**

Snowflake Warehouse

**Fields**

| ID                              | TYPE   | DESCRIPTION                                                                                                      |
| ------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| name                            | string | Name of the warehouse                                                                                            |
| state                           | string | Whether the warehouse is active/running, inactive or resizing                                                    |
| type                            | string | Warehouse type                                                                                                   |
| size                            | string | Warehouse size                                                                                                   |
| minClusterCount                 | int    | Minimum cluster count                                                                                            |
| maxClusterCount                 | int    | Maximum cluster count                                                                                            |
| startedClusterCount             | int    | Number of started clusters                                                                                       |
| running                         | int    | Number of running clusters                                                                                       |
| queued                          | int    | Number of queued clusters                                                                                        |
| isDefault                       | bool   | Whether the warehouse is a default warehouse                                                                     |
| isCurrent                       | bool   | Whether the warehouse is a current warehouse                                                                     |
| autoSuspend                     | int    | Period of inactivity, in seconds, after which a running warehouse automatically suspends and stops using credits |
| autoResume                      | bool   | Whether the warehouse, if suspended, automatically resumes                                                       |
| available                       | float  | Percentage of the warehouse compute resources available                                                          |
| provisioning                    | float  | Percentage of the warehouse compute resources in provisioning                                                    |
| quiescing                       | float  | Percentage of the warehouse compute resources that execute queries                                               |
| other                           | float  | Percentage of the warehouse compute not in available, provisioning, or quiescing state                           |
| owner                           | string | Warehouse owner                                                                                                  |
| comment                         | string | Comment for the warehouse                                                                                        |
| enableQueryAcceleration         | bool   | Whether query acceleration is enabled                                                                            |
| queryAccelerationMaxScaleFactor | int    | Query acceleration scale factor                                                                                  |
| resourceMonitor                 | string | Resource monitor of the warehouse                                                                                |
| scalingPolicy                   | string | Scaling policy of the warehouse                                                                                  |
| ownerRoleType                   | string | Owner role type                                                                                                  |
| createdAt                       | time   | When the warehouse was created                                                                                   |
| resumedAt                       | time   | When the warehouse resumed                                                                                       |
| updatedAt                       | time   | When the warehouse was updated                                                                                   |
