---
title: gcp.project.bigqueryService.table
id: gcp.project.bigqueryService.table
sidebar_label: gcp.project.bigqueryService.table
displayed_sidebar: MQL
description: GCP BigQuery table
---

# gcp.project.bigqueryService.table

**Supported platform**

- gcp

**Description**

GCP BigQuery table

**Fields**

| ID                     | TYPE              | DESCRIPTION                                                                              |
| ---------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| id                     | string            | Table ID                                                                                 |
| projectId              | string            | Project ID                                                                               |
| datasetId              | string            | Dataset ID                                                                               |
| name                   | string            | The user-friendly name for the table                                                     |
| location               | string            | Location of the table                                                                    |
| description            | string            | User-friendly description of the table                                                   |
| labels                 | map[string]string | User-provided labels                                                                     |
| useLegacySQL           | bool              | Indicates if Legacy SQL is used for the view query                                       |
| requirePartitionFilter | bool              | Indicates if queries that reference this table must specify a partition filter           |
| created                | time              | Creation timestamp                                                                       |
| modified               | time              | Modified timestamp                                                                       |
| numBytes               | int               | Size of the table in bytes                                                               |
| numLongTermBytes       | int               | Number of bytes in the table considered "long-term storage" for reduced billing purposes |
| numRows                | int               | Number of rows of data in this table                                                     |
| type                   | string            | Table Type                                                                               |
| expirationTime         | time              | Time when this table expires                                                             |
| kmsName                | string            | Cloud KMS encryption key that is used to protect BigQuery table                          |
| snapshotTime           | time              | Indicates when the base table was snapshot                                               |
| viewQuery              | string            | Query to use for a logical view                                                          |
| clusteringFields       | dict              | Data clustering configuration                                                            |
| externalDataConfig     | dict              | Information about table stored outside of BigQuery.                                      |
| materializedView       | dict              | Information for materialized views                                                       |
| rangePartitioning      | dict              | Integer-range-based partitioning on a table                                              |
| timePartitioning       | dict              | Time-based date partitioning on a table                                                  |
| schema                 | &#91;&#93;dict    | Table schema                                                                             |

**References**

- [Introduction to tables](https://cloud.google.com/bigquery/docs/tables-intro)
