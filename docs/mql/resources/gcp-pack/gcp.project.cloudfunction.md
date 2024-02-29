---
title: gcp.project.cloudFunction
id: gcp.project.cloudFunction
sidebar_label: gcp.project.cloudFunction
displayed_sidebar: MQL
description: GCP cloud function
---

# gcp.project.cloudFunction

**Supported platform**

- gcp

**Description**

GCP cloud function

**Fields**

| ID                  | TYPE              | DESCRIPTION                                                                         |
| ------------------- | ----------------- | ----------------------------------------------------------------------------------- |
| projectId           | string            | Project ID                                                                          |
| name                | string            | Cloud function name                                                                 |
| description         | string            | Cloud function description                                                          |
| sourceArchiveUrl    | string            | Location of the archive with the function's source code                             |
| sourceRepository    | dict              | Repository reference for the function's source code                                 |
| sourceUploadUrl     | string            | Location of the upload with the function's source code                              |
| httpsTrigger        | dict              | HTTPS endpoint of source that can be triggered via URL                              |
| eventTrigger        | dict              | Source that fires events in response to a condition in another service              |
| status              | string            | Status of the function deployment                                                   |
| entryPoint          | string            | Name of the function (as defined in source code) that is executed                   |
| runtime             | string            | Runtime in which to run the function                                                |
| timeout             | time              | Function execution timeout                                                          |
| availableMemoryMb   | int               | Amount of memory in MB available for a function                                     |
| serviceAccountEmail | string            | Email of the function's service account                                             |
| updated             | time              | Update timestamp                                                                    |
| versionId           | int               | Version identifier of the cloud function                                            |
| labels              | map[string]string | Labels associated with this cloud function                                          |
| envVars             | map[string]string | Environment variables that are available during function execution                  |
| buildEnvVars        | map[string]string | Build environment variables that are available during build time                    |
| network             | string            | VPC network that this cloud function can connect to                                 |
| maxInstances        | int               | Maximum number of function instances that may coexist at a given time               |
| minInstances        | int               | Lower bound for the number of function instances that may coexist at a given time   |
| vpcConnector        | string            | VPC network connector that this cloud function can connect to                       |
| egressSettings      | string            | Egress settings for the connector controlling what traffic is diverted              |
| ingressSettings     | string            | Ingress settings for the function controlling what traffic can reach                |
| kmsKeyName          | string            | Resource name of a KMS crypto key used to encrypt/decrypt function resources        |
| buildWorkerPool     | string            | Name of the Cloud Build custom WorkerPool that should be used to build the function |
| buildId             | string            | Cloud Build ID of the latest successful deployment of the function                  |
| buildName           | string            | Cloud Build name of the function deployment                                         |
| secretEnvVars       | map[string]dict   | Secret environment variables                                                        |
| secretVolumes       | &#91;&#93;dict    | Secret volumes                                                                      |
| dockerRepository    | string            | User-managed repository created in Artifact Registry                                |
| dockerRegistry      | string            | Docker registry to use for this deployment                                          |

**References**

- [Cloud Functions](https://cloud.google.com/functions)
