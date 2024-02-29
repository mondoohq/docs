---
title: gcp.project
id: gcp.project
sidebar_label: gcp.project
displayed_sidebar: MQL
description: Google Cloud Platform project
---

# gcp.project

**Supported platform**

- gcp

**Description**

Google Cloud Platform project

**Fields**

| ID                     | TYPE                                                                    | DESCRIPTION                                            |
| ---------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------ |
| id                     | string                                                                  | Unique, user-assigned ID of the project                |
| name                   | string                                                                  | Unique resource name                                   |
| parentId               | string                                                                  | Parent ID                                              |
| number                 | string                                                                  | Deprecated. Use `id` instead.                          |
| state                  | string                                                                  | Project lifecycle state                                |
| lifecycleState         | string                                                                  | Deprecated. Use `state` instead.                       |
| createTime             | time                                                                    | Creation time                                          |
| labels                 | map[string]string                                                       | Labels associated with this project                    |
| iamPolicy              | &#91;&#93;[gcp.resourcemanager.binding](gcp.resourcemanager.binding.md) | IAM policy                                             |
| services               | &#91;&#93;[gcp.service](gcp.service.md)                                 | List of available and enabled services for the project |
| recommendations        | &#91;&#93;[gcp.recommendation](gcp.recommendation.md)                   | List of recommendations                                |
| gke                    | [gcp.project.gkeService](gcp.project.gkeservice.md)                     | GCP GKE resources                                      |
| compute                | [gcp.project.computeService](gcp.project.computeservice.md)             | GCP Compute resources for the project                  |
| pubsub                 | [gcp.project.pubsubService](gcp.project.pubsubservice.md)               | GCP pub/sub-related resources                          |
| kms                    | [gcp.project.kmsService](gcp.project.kmsservice.md)                     | KMS-related resources                                  |
| essentialContacts      | &#91;&#93;[gcp.essentialContact](gcp.essentialcontact.md)               | GCP contacts for the project                           |
| apiKeys                | &#91;&#93;[gcp.project.apiKey](gcp.project.apikey.md)                   | API keys                                               |
| logging                | [gcp.project.loggingservice](gcp.project.loggingservice.md)             | Logging resources                                      |
| sql                    | [gcp.project.sqlService](gcp.project.sqlservice.md)                     | GCP Cloud SQL resources                                |
| iam                    | [gcp.project.iamService](gcp.project.iamservice.md)                     | GCP IAM resources                                      |
| commonInstanceMetadata | map[string]string                                                       | Common instance metadata for the project               |
| dns                    | [gcp.project.dnsService](gcp.project.dnsservice.md)                     | GCP Cloud DNS                                          |
| bigquery               | [gcp.project.bigqueryService](gcp.project.bigqueryservice.md)           | GCP BigQuery resources                                 |
| cloudFunctions         | &#91;&#93;[gcp.project.cloudFunction](gcp.project.cloudfunction.md)     | GCP Cloud Functions                                    |
| dataproc               | [gcp.project.dataprocService](gcp.project.dataprocservice.md)           | GCP Dataproc resources                                 |
| cloudRun               | [gcp.project.cloudRunService](gcp.project.cloudrunservice.md)           | GCP Cloud Run resources                                |
| accessApprovalSettings | [gcp.accessApprovalSettings](gcp.accessapprovalsettings.md)             | Access approval settings                               |
| storage                | [gcp.project.storageService](gcp.project.storageservice.md)             | GCP Storage resources                                  |
| monitoring             | [gcp.project.monitoringService](gcp.project.monitoringservice.md)       | Monitoring resources                                   |

**References**

- [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
