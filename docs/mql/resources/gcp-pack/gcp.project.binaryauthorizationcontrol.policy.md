---
title: gcp.project.binaryAuthorizationControl.policy
id: gcp.project.binaryAuthorizationControl.policy
sidebar_label: gcp.project.binaryAuthorizationControl.policy
displayed_sidebar: MQL
---

# gcp.project.binaryAuthorizationControl.policy

**Supported platform**

- gcp

**Fields**

| ID                                     | TYPE                                                                                                                       | DESCRIPTION                                                                                                                              |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| name                                   | string                                                                                                                     | The resource name                                                                                                                        |
| globalPolicyEvaluationMode             | string                                                                                                                     | Controls the evaluation of a Google-maintained global admission policy for common system-level images                                    |
| admissionWhitelistPatterns             | &#91;&#93;string                                                                                                           | Admission policy allowlisting                                                                                                            |
| clusterAdmissionRules                  | map[string][gcp.project.binaryAuthorizationControl.admissionRule](gcp.project.binaryauthorizationcontrol.admissionrule.md) | Per-cluster admission rules                                                                                                              |
| kubernetesNamespaceAdmissionRules      | map[string][gcp.project.binaryAuthorizationControl.admissionRule](gcp.project.binaryauthorizationcontrol.admissionrule.md) | Per-kubernetes-namespace admission rules                                                                                                 |
| kubernetesServiceAccountAdmissionRules | map[string][gcp.project.binaryAuthorizationControl.admissionRule](gcp.project.binaryauthorizationcontrol.admissionrule.md) | Per-kubernetes-service-account admission rules                                                                                           |
| istioServiceIdentityAdmissionRules     | map[string][gcp.project.binaryAuthorizationControl.admissionRule](gcp.project.binaryauthorizationcontrol.admissionrule.md) | Per-istio-service-identity admission rules                                                                                               |
| defaultAdmissionRule                   | [gcp.project.binaryAuthorizationControl.admissionRule](gcp.project.binaryauthorizationcontrol.admissionrule.md)            | Default admission rule for a cluster without a per-cluster, per-kubernetes-service-account, or per-istio-service-identity admission rule |
| updated                                | time                                                                                                                       | Time when the policy was last updated                                                                                                    |
