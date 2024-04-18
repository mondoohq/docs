---
title: aws.inspector.coverage
id: aws.inspector.coverage
sidebar_label: aws.inspector.coverage
displayed_sidebar: MQL
---

# aws.inspector.coverage

**Supported platform**

- aws

**Fields**

| ID            | TYPE                                                                      | DESCRIPTION                                                   |
| ------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| accountId     | string                                                                    | AccountId for the coverage finding                            |
| resourceId    | string                                                                    | Resource Id for the coverage finding                          |
| resourceType  | string                                                                    | Resource type, e.g. AWS_EC2_INSTANCE                          |
| lastScannedAt | time                                                                      | Time when the coverage finding was last scanned               |
| statusReason  | string                                                                    | Reason for the coverage finding status                        |
| statusCode    | string                                                                    | Code for the coverage finding status                          |
| scanType      | string                                                                    | Type of coverage finding                                      |
| region        | string                                                                    | Region where it was found                                     |
| ec2Instance   | [aws.inspector.coverage.instance](aws.inspector.coverage.instance.md)     | Details about the ec2 instance associated with the finding    |
| ecrImage      | [aws.inspector.coverage.image](aws.inspector.coverage.image.md)           | Details about the ecr image associated with the finding       |
| ecrRepo       | [aws.inspector.coverage.repository](aws.inspector.coverage.repository.md) | Details about the ecr repo associated with the finding        |
| lambda        | [aws.lambda.function](aws.lambda.function.md)                             | Details about the lambda function associated with the finding |
