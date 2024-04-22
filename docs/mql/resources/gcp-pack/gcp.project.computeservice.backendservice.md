---
title: gcp.project.computeService.backendService
id: gcp.project.computeService.backendService
sidebar_label: gcp.project.computeService.backendService
displayed_sidebar: MQL
description: Google Cloud (GCP) Compute backend service
---

# gcp.project.computeService.backendService

**Supported platform**

- gcp

**Description**

Google Cloud (GCP) Compute backend service

**Fields**

| ID                       | TYPE                                                                                                                | DESCRIPTION                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| id                       | string                                                                                                              | Unique identifier                                                                                                             |
| affinityCookieTtlSec     | int                                                                                                                 | Lifetime of cookies in seconds                                                                                                |
| backends                 | &#91;&#93;[gcp.project.computeService.backendService.backend](gcp.project.computeservice.backendservice.backend.md) | List of backends that serve this backend service                                                                              |
| cdnPolicy                | [gcp.project.computeService.backendService.cdnPolicy](gcp.project.computeservice.backendservice.cdnpolicy.md)       | Cloud CDN configuration                                                                                                       |
| circuitBreakers          | dict                                                                                                                | Circuit breakers                                                                                                              |
| compressionMode          | string                                                                                                              | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header                        |
| connectionDraining       | dict                                                                                                                | Connection draining configuration                                                                                             |
| connectionTrackingPolicy | dict                                                                                                                | Connection tracking configuration                                                                                             |
| consistentHash           | dict                                                                                                                | Consistent hash-based load balancing used to provide soft session affinity based on HTTP headers, cookies or other properties |
| created                  | time                                                                                                                | Creation timestamp                                                                                                            |
| customRequestHeaders     | &#91;&#93;string                                                                                                    | Headers that the load balancer adds to proxied requests                                                                       |
| customResponseHeaders    | &#91;&#93;string                                                                                                    | Headers that the load balancer adds to proxied responses                                                                      |
| description              | string                                                                                                              | Backend service description                                                                                                   |
| edgeSecurityPolicy       | string                                                                                                              | Resource URL for the edge security policy associated with this backend service                                                |
| enableCDN                | bool                                                                                                                | Whether to enable Cloud CDN                                                                                                   |
| failoverPolicy           | dict                                                                                                                | Failover policy                                                                                                               |
| healthChecks             | &#91;&#93;string                                                                                                    | List of URLs to the health checks                                                                                             |
| iap                      | dict                                                                                                                | Identity-aware proxy configuration                                                                                            |
| loadBalancingScheme      | string                                                                                                              | Load balancer type                                                                                                            |
| localityLbPolicies       | &#91;&#93;dict                                                                                                      | List of locality load balancing policies to be used in order of preference                                                    |
| localityLbPolicy         | string                                                                                                              | Load balancing algorithm used within the scope of the locality                                                                |
| logConfig                | dict                                                                                                                | Log configuration                                                                                                             |
| maxStreamDuration        | time                                                                                                                | Default maximum duration (timeout) for streams to this service                                                                |
| name                     | string                                                                                                              | Backend service name                                                                                                          |
| networkUrl               | string                                                                                                              | URL to the network to which this backend service belongs                                                                      |
| portName                 | string                                                                                                              | Named port on a backend instance group representing the port for communication to the backend VMs in that group               |
| protocol                 | string                                                                                                              | Protocol used for communication                                                                                               |
| regionUrl                | string                                                                                                              | Region URL                                                                                                                    |
| securityPolicyUrl        | string                                                                                                              | Security policy URL                                                                                                           |
| securitySettings         | dict                                                                                                                | Security settings                                                                                                             |
| serviceBindingUrls       | &#91;&#93;string                                                                                                    | Service binding URLs                                                                                                          |
| sessionAffinity          | string                                                                                                              | Session affinity type                                                                                                         |
| timeoutSec               | int                                                                                                                 | Backend service timeout in settings                                                                                           |

**References**

- [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service)
