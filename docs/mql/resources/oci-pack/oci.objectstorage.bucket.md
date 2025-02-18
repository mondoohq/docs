---
title: oci.objectStorage.bucket
id: oci.objectStorage.bucket
sidebar_label: oci.objectStorage.bucket
displayed_sidebar: MQL
description: Oracle Cloud Infrastructure (OCI) Object Storage bucket
---

# oci.objectStorage.bucket

**Description**

Oracle Cloud Infrastructure (OCI) Object Storage bucket

**Fields**

| ID                  | TYPE                        | DESCRIPTION                                         |
| ------------------- | --------------------------- | --------------------------------------------------- |
| namespace           | string                      | Bucket namespace                                    |
| name                | string                      | Bucket name                                         |
| compartmentID       | string                      | Tenancy containing the bucket                       |
| created             | time                        | Time when the vcn was created                       |
| region              | [oci.region](oci.region.md) | Region                                              |
| publicAccessType    | string                      | Type of public access enabled                       |
| storageTier         | string                      | Storage tier type                                   |
| autoTiering         | string                      | Auto tiering status                                 |
| versioning          | string                      | Bucket versioning                                   |
| objectEventsEnabled | bool                        | Whether events are emitted for object state changes |
| replicationEnabled  | bool                        | Whether the bucket is a replication source          |

**References**

- [Object Storage Buckets](https://docs.oracle.com/en-us/iaas/Content/Object/Tasks/managingbuckets.htm)
