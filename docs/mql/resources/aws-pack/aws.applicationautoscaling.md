---
title: aws.applicationAutoscaling
id: aws.applicationAutoscaling
sidebar_label: aws.applicationAutoscaling
displayed_sidebar: MQL
description: AWS Application Auto Scaling
---

# aws.applicationAutoscaling

**Supported platform**

- aws

**Description**

AWS Application Auto Scaling

The aws.applicationAutoscaling resource inspects targets in the AWS Application Auto Scaling service. The AWS Auto Scaling service allows users to load balance multiple AWS services including:

- AppStream 2.0 fleets
- Aurora replicas
- Amazon Comprehend document classification and entity recognizer endpoints
- DynamoDB tables and global secondary indexes
- Amazon Elastic Container Service (ECS) services
- ElastiCache for Redis clusters (replication groups)
- Amazon EMR clusters
- Amazon Keyspaces (for Apache Cassandra) tables
- Lambda function provisioned concurrency
- Amazon Managed Streaming for Apache Kafka (MSK) broker storage
- Amazon Neptune clusters
- SageMaker endpoint variants
- SageMaker inference components
- SageMaker Serverless provisioned concurrency
- Spot Fleet requests

**Init**

aws.applicationAutoscaling(namespace string)

**Fields**

| ID              | TYPE                                                                                | DESCRIPTION                                                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| namespace       | string                                                                              | Service namespace to query for application auto scaling: comprehend, rds, sagemaker, appstream, elasticmapreduce, dynamodb, lambda, ecs, cassandra, ec2, neptune, kafka, custom-resource, or elasticache |
| scalableTargets | &#91;&#93;[aws.applicationautoscaling.target](aws.applicationautoscaling.target.md) | List of scalable targets belonging to the service namespace                                                                                                                                              |
