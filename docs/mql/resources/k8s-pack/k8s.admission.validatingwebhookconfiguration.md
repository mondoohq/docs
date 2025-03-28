---
title: k8s.admission.validatingwebhookconfiguration
id: k8s.admission.validatingwebhookconfiguration
sidebar_label: k8s.admission.validatingwebhookconfiguration
displayed_sidebar: MQL
---

# k8s.admission.validatingwebhookconfiguration

**Supported platform**

- kubernetes

**Fields**

| ID              | TYPE              | DESCRIPTION                          |
| --------------- | ----------------- | ------------------------------------ |
| id              | string            | Mondoo ID for the Kubernetes object  |
| uid             | string            | Kubernetes object UID                |
| resourceVersion | string            | Kubernetes resource version          |
| labels          | map[string]string | Kubernetes labels                    |
| annotations     | map[string]string | Kubernetes annotations               |
| name            | string            | Kubernetes object name               |
| kind            | string            | Kubernetes object type               |
| created         | time              | Kubernetes object creation timestamp |
| manifest        | dict              | Full resource manifest               |
| webhooks        | &#91;&#93;dict    | Webhooks configuration               |
