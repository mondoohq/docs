---
title: gcp.project.computeService
id: gcp.project.computeService
sidebar_label: gcp.project.computeService
displayed_sidebar: MQL
description: GCP Compute Engine
---

# gcp.project.computeService

**Supported platform**

- gcp

**Description**

GCP Compute Engine

**Fields**

| ID              | TYPE                                                                                                | DESCRIPTION                                      |
| --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| projectId       | string                                                                                              | Project ID                                       |
| instances       | &#91;&#93;[gcp.project.computeService.instance](gcp.project.computeservice.instance.md)             | Google Compute Engine instances in a project     |
| snapshots       | &#91;&#93;[gcp.project.computeService.snapshot](gcp.project.computeservice.snapshot.md)             | Google Compute Engine snapshots in a project     |
| disks           | &#91;&#93;[gcp.project.computeService.disk](gcp.project.computeservice.disk.md)                     | Google Compute Engine disks in a project         |
| images          | &#91;&#93;[gcp.project.computeService.image](gcp.project.computeservice.image.md)                   | Google Compute Engine images in a project        |
| firewalls       | &#91;&#93;[gcp.project.computeService.firewall](gcp.project.computeservice.firewall.md)             | Google Compute Engine firewalls in a project     |
| networks        | &#91;&#93;[gcp.project.computeService.network](gcp.project.computeservice.network.md)               | Google Compute Engine VPC network in a project   |
| subnetworks     | &#91;&#93;[gcp.project.computeService.subnetwork](gcp.project.computeservice.subnetwork.md)         | Logical partition of a VPC network               |
| routers         | &#91;&#93;[gcp.project.computeService.router](gcp.project.computeservice.router.md)                 | Cloud Routers in a project                       |
| machineTypes    | &#91;&#93;[gcp.project.computeService.machineType](gcp.project.computeservice.machinetype.md)       | Google Compute Engine machine types in a project |
| regions         | &#91;&#93;[gcp.project.computeService.region](gcp.project.computeservice.region.md)                 | Project regions                                  |
| zones           | &#91;&#93;[gcp.project.computeService.zone](gcp.project.computeservice.zone.md)                     | Project zones                                    |
| backendServices | &#91;&#93;[gcp.project.computeService.backendService](gcp.project.computeservice.backendservice.md) | List of backend services                         |
| addresses       | &#91;&#93;[gcp.project.computeService.address](gcp.project.computeservice.address.md)               | List of IP addresses                             |
| forwardingRules | &#91;&#93;[gcp.project.computeService.forwardingRule](gcp.project.computeservice.forwardingrule.md) | List of forwarding rules                         |

**References**

- [Compute Engine documentation](https://cloud.google.com/compute/docs)
