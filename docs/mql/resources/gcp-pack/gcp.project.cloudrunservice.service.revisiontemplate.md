---
title: gcp.project.cloudRunService.service.revisionTemplate
id: gcp.project.cloudRunService.service.revisionTemplate
sidebar_label: gcp.project.cloudRunService.service.revisionTemplate
displayed_sidebar: MQL
description: Google Cloud (GCP) Run service revision template
---

# gcp.project.cloudRunService.service.revisionTemplate

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Run service revision template

**Fields**

| ID                            | TYPE                                                                                        | DESCRIPTION                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| id                            | string                                                                                      | Internal ID                                                                                 |
| projectId                     | string                                                                                      | Project ID                                                                                  |
| name                          | string                                                                                      | Revision name                                                                               |
| labels                        | map[string]string                                                                           | User-provided labels                                                                        |
| annotations                   | map[string]string                                                                           | Unstructured key-value map that may be set by external tools to store an arbitrary metadata |
| scaling                       | dict                                                                                        | Scaling settings                                                                            |
| vpcAccess                     | dict                                                                                        | VPC access configuration                                                                    |
| timeout                       | time                                                                                        | Maximum allowed time for an instance to respond to a request                                |
| serviceAccountEmail           | string                                                                                      | Email address of the IAM service account associated with the revision of the service        |
| serviceAccount                | [gcp.project.iamService.serviceAccount](gcp.project.iamservice.serviceaccount.md)           | IAM service account associated with the revision of the service                             |
| containers                    | &#91;&#93;[gcp.project.cloudRunService.container](gcp.project.cloudrunservice.container.md) | Containers for this revision                                                                |
| volumes                       | &#91;&#93;dict                                                                              | List of volumes to make available to containers                                             |
| executionEnvironment          | string                                                                                      | Sandbox environment to host the revision                                                    |
| encryptionKey                 | string                                                                                      | Reference to a customer-managed encryption key to use to encrypt this container image       |
| maxInstanceRequestConcurrency | int                                                                                         | Maximum number of requests that each serving instance can receive                           |

**References**

- [Rollbacks, gradual rollouts, and traffic migration](https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration)
