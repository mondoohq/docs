---
title: aws.sns.topic
id: aws.sns.topic
sidebar_label: aws.sns.topic
displayed_sidebar: MQL
description: AWS Simple Notification Service (SNS) topic
---

# aws.sns.topic

**Supported platform**

- aws

**Description**

AWS Simple Notification Service (SNS) topic

**Fields**

| ID            | TYPE                                                      | DESCRIPTION                                           |
| ------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| arn           | string                                                    | SNS topic ARN                                         |
| region        | string                                                    | Region where the SNS topic exists                     |
| subscriptions | &#91;&#93;[aws.sns.subscription](aws.sns.subscription.md) | List of subscriptions associated with the topic ARN   |
| attributes    | dict                                                      | Attributes for the SNS topic, including KMS ID if any |
| tags          | map[string]string                                         | Tags for the topic                                    |
