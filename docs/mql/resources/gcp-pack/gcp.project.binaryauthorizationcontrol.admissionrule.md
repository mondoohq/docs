---
title: gcp.project.binaryAuthorizationControl.admissionRule
id: gcp.project.binaryAuthorizationControl.admissionRule
sidebar_label: gcp.project.binaryAuthorizationControl.admissionRule
displayed_sidebar: MQL
---

# gcp.project.binaryAuthorizationControl.admissionRule

**Supported platform**

- gcp

**Fields**

| ID                    | TYPE             | DESCRIPTION                                                               |
| --------------------- | ---------------- | ------------------------------------------------------------------------- |
| evaluationMode        | string           | How this admission rule will be evaluated                                 |
| enforcementMode       | string           | The action when a pod creation is denied by the admission rule            |
| requireAttestationsBy | &#91;&#93;string | The resource names of the attestors that must attest to a container image |
