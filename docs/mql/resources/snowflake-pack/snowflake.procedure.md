---
title: snowflake.procedure
id: snowflake.procedure
sidebar_label: snowflake.procedure
displayed_sidebar: MQL
description: Snowflake Procedure
---

# snowflake.procedure

**Description**

Snowflake Procedure

**Fields**

| ID                   | TYPE   | DESCRIPTION                                    |
| -------------------- | ------ | ---------------------------------------------- |
| name                 | string | Name of the procedure                          |
| description          | string | Procedure description                          |
| schemaName           | string | Schema name                                    |
| isBuiltin            | bool   | Whether the procedure is built in              |
| isAggregate          | bool   | Whether the procedure is an aggregate function |
| isAnsi               | bool   | Whether the procedure is an ANSI procedure     |
| minNumberOfArguments | int    | Minimum number of arguments                    |
| maxNumberOfArguments | int    | Maximum number of arguments                    |
| arguments            | string | Procedure arguments                            |
| catalogName          | string | Catalog name                                   |
| isTableFunction      | bool   | Whether the procedure is a table function      |
| validForClustering   | bool   | Whether the procedure is for clustering        |
| isSecure             | bool   | Whether the procedure is secure                |
