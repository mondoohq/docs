---
title: gcp.project.computeService.backendService.cdnPolicy
id: gcp.project.computeService.backendService.cdnPolicy
sidebar_label: gcp.project.computeService.backendService.cdnPolicy
displayed_sidebar: MQL
description: GCP Compute backend service CDN policy
---

# gcp.project.computeService.backendService.cdnPolicy

**Supported platform**

- gcp

**Description**

GCP Compute backend service CDN policy

**Fields**

| ID                          | TYPE             | DESCRIPTION                                                                                                                          |
| --------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| id                          | string           | Internal ID                                                                                                                          |
| bypassCacheOnRequestHeaders | &#91;&#93;dict   | Bypass the cache when the specified request headers are matched                                                                      |
| cacheKeyPolicy              | dict             | Cache key policy                                                                                                                     |
| cacheMode                   | string           | Cache mode for all responses from this backend                                                                                       |
| clientTtl                   | int              | Client maximum TTL                                                                                                                   |
| defaultTtl                  | int              | Default TTL for cached content                                                                                                       |
| maxTtl                      | int              | Maximum allowed TTL for cached content                                                                                               |
| negativeCaching             | bool             | Whether negative caching allows per-status code TTLs to be set in order to apply fine-grained caching for common errors or redirects |
| negativeCachingPolicy       | &#91;&#93;dict   | Negative caching policy                                                                                                              |
| requestCoalescing           | bool             | Whether Cloud CDN combines multiple concurrent cache fill requests into a small number of requests to the origin                     |
| serveWhileStale             | int              | Serve existing content from the cache when revalidating content with the origin                                                      |
| signedUrlCacheMaxAgeSec     | int              | Maximum number of seconds the response to a signed URL request is considered fresh                                                   |
| signedUrlKeyNames           | &#91;&#93;string | Names of the keys for signing request URLs                                                                                           |

**References**

- [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service)
