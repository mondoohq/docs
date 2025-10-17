---
title: aws.macie.classificationJob
id: aws.macie.classificationJob
sidebar_label: aws.macie.classificationJob
displayed_sidebar: MQL
description: Amazon Macie classification job
---

# aws.macie.classificationJob

**Supported platform**

- aws

**Description**

Amazon Macie classification job

**Fields**

| ID                 | TYPE              | DESCRIPTION                                                                   |
| ------------------ | ----------------- | ----------------------------------------------------------------------------- |
| arn                | string            | ARN of the classification job                                                 |
| jobId              | string            | Unique ID of the job                                                          |
| name               | string            | Name of the job                                                               |
| region             | string            | Region where the job runs                                                     |
| status             | string            | Status of the job: RUNNING, PAUSED, CANCELLED, COMPLETE, IDLE, or USER_PAUSED |
| jobType            | string            | Type of job: ONE_TIME or SCHEDULED                                            |
| createdAt          | time              | Date and time when the job was created                                        |
| lastRunTime        | time              | Date and time when the job was last run                                       |
| samplingPercentage | int               | Sampling percentage for the job                                               |
| bucketDefinitions  | &#91;&#93;dict    | Bucket definitions for the job                                                |
| scheduleFrequency  | dict              | Schedule frequency for the job                                                |
| statistics         | dict              | Statistics for the job                                                        |
| tags               | map[string]string | Tags for the job                                                              |
