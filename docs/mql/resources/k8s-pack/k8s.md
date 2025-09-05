---
title: k8s
id: k8s
sidebar_label: k8s
displayed_sidebar: MQL
description: Kubernetes cluster
---

# k8s

**Supported platform**

- kubernetes

**Description**

Kubernetes cluster

**Fields**

| ID                              | TYPE                                                                                                      | DESCRIPTION                                 |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| serverVersion                   | dict                                                                                                      | Cluster version                             |
| apiResources                    | &#91;&#93;[k8s.apiresource](k8s.apiresource.md)                                                           | Available resource types                    |
| namespaces                      | &#91;&#93;[k8s.namespace](k8s.namespace.md)                                                               | Cluster namespaces                          |
| nodes                           | &#91;&#93;[k8s.node](k8s.node.md)                                                                         | Cluster nodes                               |
| pods                            | &#91;&#93;[k8s.pod](k8s.pod.md)                                                                           | Cluster Pods                                |
| deployments                     | &#91;&#93;[k8s.deployment](k8s.deployment.md)                                                             | Cluster deployments                         |
| daemonsets                      | &#91;&#93;[k8s.daemonset](k8s.daemonset.md)                                                               | Cluster DaemonSets                          |
| statefulsets                    | &#91;&#93;[k8s.statefulset](k8s.statefulset.md)                                                           | Cluster StatefulSets                        |
| replicasets                     | &#91;&#93;[k8s.replicaset](k8s.replicaset.md)                                                             | Cluster ReplicaSets                         |
| jobs                            | &#91;&#93;[k8s.job](k8s.job.md)                                                                           | Cluster Jobs                                |
| cronjobs                        | &#91;&#93;[k8s.cronjob](k8s.cronjob.md)                                                                   | Cluster CronJobs                            |
| secrets                         | &#91;&#93;[k8s.secret](k8s.secret.md)                                                                     | Cluster Secrets                             |
| configmaps                      | &#91;&#93;[k8s.configmap](k8s.configmap.md)                                                               | ConfigMaps                                  |
| services                        | &#91;&#93;[k8s.service](k8s.service.md)                                                                   | Kubernetes Services                         |
| ingresses                       | &#91;&#93;[k8s.ingress](k8s.ingress.md)                                                                   | Kubernetes Ingresses                        |
| serviceaccounts                 | &#91;&#93;[k8s.serviceaccount](k8s.serviceaccount.md)                                                     | Kubernetes service accounts                 |
| clusterroles                    | &#91;&#93;[k8s.rbac.clusterrole](k8s.rbac.clusterrole.md)                                                 | Kubernetes RBAC ClusterRoles                |
| clusterrolebindings             | &#91;&#93;[k8s.rbac.clusterrolebinding](k8s.rbac.clusterrolebinding.md)                                   | Kubernetes RBAC ClusterRoleBindings         |
| roles                           | &#91;&#93;[k8s.rbac.role](k8s.rbac.role.md)                                                               | Kubernetes RBAC roles                       |
| rolebindings                    | &#91;&#93;[k8s.rbac.rolebinding](k8s.rbac.rolebinding.md)                                                 | Kubernetes RBAC RoleBindings                |
| networkPolicies                 | &#91;&#93;[k8s.networkpolicy](k8s.networkpolicy.md)                                                       | Kubernetes network policies                 |
| customresources                 | &#91;&#93;[k8s.customresource](k8s.customresource.md)                                                     | Kubernetes custom resources                 |
| validatingWebhookConfigurations | &#91;&#93;[k8s.admission.validatingwebhookconfiguration](k8s.admission.validatingwebhookconfiguration.md) | Kubernetes admission webhook configurations |
| apps                            | &#91;&#93;[k8s.app](k8s.app.md)                                                                           | Kubernetes applications                     |

**Examples**

List kubernetes pods with privileged containers

```coffee
k8s.pods { containers.where(securityContext["privileged"] == true) name }
```

Check if the default namespace is used

```coffee
k8s.pods.all( namespace != "default")
```

Query services accounts

```coffee
k8s.serviceaccounts { name namespace secrets  }
```

Query RBAC cluster roles

```coffee
k8s.roles { name namespace rules  }
```

Query RBAC role bindings

```coffee
k8s.rolebindings { name namespace subjects  }
```

Query RBAC cluster role bindings

```coffee
k8s.clusterrolebindings { name subjects  }
```

Query pod security policies

```coffee
k8s.podSecurityPolicies { name manifest }
```

Query network policies

```coffee
k8s.networkPolicies { name manifest }
```

**References**

- [Kubernetes Documentation](https://kubernetes.io/docs/home/)
