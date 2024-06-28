---
title: azure.subscription.aksService.cluster
id: azure.subscription.aksService.cluster
sidebar_label: azure.subscription.aksService.cluster
displayed_sidebar: MQL
description: Azure Kubernetes Service cluster
---

# azure.subscription.aksService.cluster

**Supported platform**

- azure

**Description**

Azure Kubernetes Service cluster

**Fields**

| ID                        | TYPE              | DESCRIPTION                                        |
| ------------------------- | ----------------- | -------------------------------------------------- |
| id                        | string            | ID of the AKS cluster                              |
| name                      | string            | Name of the AKS cluster                            |
| location                  | string            | Location of the AKS cluster                        |
| kubernetesVersion         | string            | The Kubernetes version of the AKS cluster          |
| provisioningState         | string            | The provisioning state of the AKS cluster          |
| powerState                | string            | The power state of the AKS cluster                 |
| tags                      | map[string]string | The tags of the AKS cluster                        |
| nodeResourceGroup         | string            | The node resource group of the AKS cluster         |
| createdAt                 | time              | Time the AKS cluster was created                   |
| rbacEnabled               | bool              | Whether RBAC is enabled for the AKS cluster        |
| fqdn                      | string            | The fully qualified domain name of the AKS cluster |
| dnsPrefix                 | string            | The DNS prefix of the AKS cluster                  |
| storageProfile            | dict              | The storage profile of the AKS cluster             |
| workloadAutoScalerProfile | dict              | The workload autoscaler profile of the AKS cluster |
| securityProfile           | dict              | The security profile of the AKS cluster            |
| podIdentityProfile        | dict              | The pod identity profile of the AKS cluster        |
| networkProfile            | dict              | The network profile of the AKS cluster             |
| httpProxyConfig           | dict              | The HTTP proxy config of the AKS cluster           |
| addonProfiles             | &#91;&#93;dict    | The add-on profiles of the AKS cluster             |
| agentPoolProfiles         | &#91;&#93;dict    | The agent pool profiles of the AKS cluster         |
| apiServerAccessProfile    | dict              | The API server access profile                      |

**References**

- [What is Azure Kubernetes Service (AKS)?](https://learn.microsoft.com/en-us/azure/aks/what-is-aks)
- [Azure Kubernetes Service (AKS) documentation](https://learn.microsoft.com/en-us/azure/aks/)
