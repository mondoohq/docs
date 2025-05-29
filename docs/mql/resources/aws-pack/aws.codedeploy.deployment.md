---
title: aws.codedeploy.deployment
id: aws.codedeploy.deployment
sidebar_label: aws.codedeploy.deployment
displayed_sidebar: MQL
description: AWS CodeDeploy Deployment
---

# aws.codedeploy.deployment

**Supported platform**

- aws

**Description**

AWS CodeDeploy Deployment

**Fields**

| ID                            | TYPE   | DESCRIPTION                                                                                                                  |
| ----------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| applicationName               | string | Application name for the deployment                                                                                          |
| deploymentId                  | string | Deployment ID                                                                                                                |
| arn                           | string | ARN of the deployment (Note: Deployments themselves don't have ARNs, this will be a synthetic ID or the deploymentId itself) |
| status                        | string | Status of the deployment (Created, Queued, InProgress, Succeeded, Failed, Stopped, Ready)                                    |
| deploymentGroupName           | string | Deployment group name                                                                                                        |
| deploymentConfigName          | string | Deployment configuration name                                                                                                |
| createdAt                     | time   | Time the deployment was created                                                                                              |
| compleatedAt                  | time   | Time the deployment was completed                                                                                            |
| description                   | string | Description of the deployment                                                                                                |
| creator                       | string | Creator of the deployment (user, autoscaling, codeDeployRollback, etc.)                                                      |
| ignoreApplicationStopFailures | bool   | Whether to ignore application stop failures                                                                                  |
| targetInstances               | dict   | Information about the instances targeted by the deployment (complex structure, represented as dict)                          |
| revision                      | dict   | Revision information for the deployment (S3 location, GitHub location, etc.)                                                 |
| region                        | string | Region of the deployment                                                                                                     |
| errorInformation              | dict   | Error information, if any                                                                                                    |
| deploymentOverview            | dict   | Deployment overview (counts for Pending, InProgress, Succeeded, Failed, Skipped, Ready)                                      |
| isRollback                    | bool   | Whether this deployment is a rollback                                                                                        |
| rollbackInfo                  | dict   | Rollback information if this deployment is a rollback or was rolled back                                                     |
