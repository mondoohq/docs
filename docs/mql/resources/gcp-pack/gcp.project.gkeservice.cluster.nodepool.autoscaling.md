---
title: gcp.project.gkeService.cluster.nodepool.autoscaling
id: gcp.project.gkeService.cluster.nodepool.autoscaling
sidebar_label: gcp.project.gkeService.cluster.nodepool.autoscaling
displayed_sidebar: MQL
---

# gcp.project.gkeService.cluster.nodepool.autoscaling

**Supported platform**

- gcp

**Fields**

| ID                | TYPE | DESCRIPTION                                                                                                                                                                                                                                    |
| ----------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled           | bool | Is autoscaling enabled for this node pool.                                                                                                                                                                                                     |
| minNodeCount      | int  | Minimum number of nodes for one location in the node pool. Must be greater, than or equal to 0 and less than or equal to max_node_count.                                                                                                       |
| maxNodeCount      | int  | Maximum number of nodes for one location in the node pool. Must be >=, min_node_count. There has to be enough quota to scale up the cluster.                                                                                                   |
| autoprovisioned   | bool | Can this node pool be deleted automatically.                                                                                                                                                                                                   |
| totalMinNodeCount | int  | Minimum number of nodes in the node pool. Must be greater than or equal, to 0 and less than or equal to total*max_node_count., The total*_\_node_count fields are mutually exclusive with the _\_node_count, fields.                           |
| totalMaxNodeCount | int  | Maximum number of nodes in the node pool. Must be greater than or equal to, total*min_node_count. There has to be enough quota to scale up the cluster., The total*_\_node_count fields are mutually exclusive with the _\_node_count, fields. |
