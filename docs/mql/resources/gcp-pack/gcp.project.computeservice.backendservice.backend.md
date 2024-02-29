---
title: gcp.project.computeService.backendService.backend
id: gcp.project.computeService.backendService.backend
sidebar_label: gcp.project.computeService.backendService.backend
displayed_sidebar: MQL
description: GCP Compute backend service backend
---

# gcp.project.computeService.backendService.backend

**Supported platform**

- gcp

**Description**

GCP Compute backend service backend

**Fields**

| ID                        | TYPE   | DESCRIPTION                                                                                                                    |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| id                        | string | Internal ID                                                                                                                    |
| balancingMode             | string | How to determine whether the backend of a load balancer can handle additional traffic or is fully loaded                       |
| capacityScaler            | float  | Multiplier applied to the backend's target capacity of its balancing mode                                                      |
| description               | string | Backend description                                                                                                            |
| failover                  | bool   | Whether this is a failover backend                                                                                             |
| groupUrl                  | string | Fully-qualified URL of an instance group or network endpoint group determining what types of backends a load balancer supports |
| maxConnections            | int    | Maximum number of simultaneous connections                                                                                     |
| maxConnectionsPerEndpoint | int    | Maximum number of simultaneous connections per endpoint                                                                        |
| maxConnectionsPerInstance | int    | Maximum number of simultaneous connections per instance                                                                        |
| maxRate                   | int    | Maximum number of HTTP requests per second                                                                                     |
| maxRatePerEndpoint        | float  | Maximum number for requests per second per endpoint                                                                            |
| maxRatePerInstance        | float  | Maximum number for requests per second per instance                                                                            |
| maxUtilization            | float  | Target capacity for the utilization balancing mode                                                                             |

**References**

- [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service)
