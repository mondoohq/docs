---
title: gcp.project.cloudRunService.job.executionTemplate.taskTemplate
id: gcp.project.cloudRunService.job.executionTemplate.taskTemplate
sidebar_label: gcp.project.cloudRunService.job.executionTemplate.taskTemplate
displayed_sidebar: MQL
description: Google Cloud (GCP) Run job execution template task template
---

# gcp.project.cloudRunService.job.executionTemplate.taskTemplate

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Run job execution template task template

**Fields**

| ID                   | TYPE                                                                                        | DESCRIPTION                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| id                   | string                                                                                      | Internal ID                                                                           |
| projectId            | string                                                                                      | Project ID                                                                            |
| vpcAccess            | dict                                                                                        | VPC access configuration                                                              |
| timeout              | time                                                                                        | Maximum allowed time for an instance to respond to a request                          |
| serviceAccountEmail  | string                                                                                      | Email address of the IAM service account associated with the revision of the service  |
| serviceAccount       | [gcp.project.iamService.serviceAccount](gcp.project.iamservice.serviceaccount.md)           | IAM service account associated with the revision of the service                       |
| containers           | &#91;&#93;[gcp.project.cloudRunService.container](gcp.project.cloudrunservice.container.md) | Containers for this revision                                                          |
| volumes              | &#91;&#93;dict                                                                              | List of volumes to make available to containers                                       |
| executionEnvironment | string                                                                                      | Sandbox environment to host the revision                                              |
| encryptionKey        | string                                                                                      | Reference to a customer-managed encryption key to use to encrypt this container image |
| maxRetries           | int                                                                                         | Number of retries allowed per task                                                    |

**References**

- [Create jobs](https://cloud.google.com/run/docs/create-jobs)
