---
title: aws.sqs.queue
id: aws.sqs.queue
sidebar_label: aws.sqs.queue
displayed_sidebar: MQL
description: Amazon Simple Queue Service (SQS) Queue
---

# aws.sqs.queue

**Supported platform**

- aws

**Description**

Amazon Simple Queue Service (SQS) Queue

**Fields**

| ID                            | TYPE                              | DESCRIPTION                                                  |
| ----------------------------- | --------------------------------- | ------------------------------------------------------------ |
| arn                           | string                            | ARN for the queue                                            |
| createdAt                     | time                              | Time when the queue was created                              |
| deadLetterQueue               | [aws.sqs.queue](aws.sqs.queue.md) | Dead letter SQS queue, if any                                |
| deliveryDelaySeconds          | int                               | Delay seconds set on the queue                               |
| kmsKey                        | [aws.kms.key](aws.kms.key.md)     | KMS Key for SSE, if any                                      |
| lastModified                  | time                              | Time when the queue was last modified                        |
| maxReceiveCount               | int                               | Maximum amount of messages that can be received by the queue |
| maximumMessageSize            | int                               | Maximum message size for the queue                           |
| messageRetentionPeriodSeconds | int                               | Time in seconds the queue retains messages                   |
| receiveMessageWaitTimeSeconds | int                               | Time in seconds the queue waits for messages                 |
| region                        | string                            | Region for the queue                                         |
| sqsManagedSseEnabled          | bool                              | Whether SSE is enabled for the queue                         |
| queueType                     | string                            | Type of queue: Fifo or Standard                              |
| url                           | string                            | URL for the queue                                            |
| visibilityTimeoutSeconds      | int                               | Visibility timeout for the queue                             |
