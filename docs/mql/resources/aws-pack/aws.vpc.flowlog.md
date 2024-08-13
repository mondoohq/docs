---
title: aws.vpc.flowlog
id: aws.vpc.flowlog
sidebar_label: aws.vpc.flowlog
displayed_sidebar: MQL
description: Amazon Virtual Private Cloud (VPC) flow log
---

# aws.vpc.flowlog

**Supported platform**

- aws

**Description**

Amazon Virtual Private Cloud (VPC) flow log

**Fields**

| ID                     | TYPE              | DESCRIPTION                                                                                                                                                  |
| ---------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                     | string            | Unique ID of the flow log                                                                                                                                    |
| vpc                    | string            | VPC in which the flow log exists                                                                                                                             |
| region                 | string            | Region in which the VPC flow log exists                                                                                                                      |
| status                 | string            | Status of the flow log                                                                                                                                       |
| tags                   | map[string]string | Tags on the flow log                                                                                                                                         |
| createdAt              | time              | Creation timestamp                                                                                                                                           |
| destination            | string            | Destination for the flow log data                                                                                                                            |
| destinationType        | string            | Destination type for the flow log data                                                                                                                       |
| deliverLogsStatus      | string            | Delivery log status for the flow log data                                                                                                                    |
| maxAggregationInterval | int               | Maximum interval of time during which a flow of packets is captured and aggregated into a flow log record: 60 seconds (1 minute) or 600 seconds (10 minutes) |
| trafficType            | string            | Type of traffic to monitor: ACCEPT, ALL, and REJECT                                                                                                          |
