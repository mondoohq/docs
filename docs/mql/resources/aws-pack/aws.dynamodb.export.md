---
title: aws.dynamodb.export
id: aws.dynamodb.export
sidebar_label: aws.dynamodb.export
displayed_sidebar: MQL
description: Amazon DynamoDB Export
---

# aws.dynamodb.export

**Supported platform**

- aws

**Description**

Amazon DynamoDB Export

**Fields**

| ID             | TYPE                                        | DESCRIPTION                                              |
| -------------- | ------------------------------------------- | -------------------------------------------------------- |
| table          | [aws.dynamodb.table](aws.dynamodb.table.md) | Table associated with the export                         |
| s3Bucket       | [aws.s3.bucket](aws.s3.bucket.md)           | S3 bucket associated with the export                     |
| s3Prefix       | string                                      | S3 prefix for the export                                 |
| itemCount      | int                                         | Count of items in the export                             |
| type           | string                                      | Type of the export (FULL_EXPORT or INCREMENTAL_EXPORT)   |
| status         | string                                      | Status of the export (IN_PROGRESS, COMPLETED, or FAILED) |
| format         | string                                      | Format of the export (DYNAMODB_JSON or ION)              |
| startTime      | time                                        | Start time of the export                                 |
| endTime        | time                                        | End time of the export                                   |
| s3SseAlgorithm | string                                      | S3 SSE Algorithm for the export                          |
| kmsKey         | [aws.kms.key](aws.kms.key.md)               | SSE KMS Key Id                                           |
| arn            | string                                      | ARN for the export                                       |
