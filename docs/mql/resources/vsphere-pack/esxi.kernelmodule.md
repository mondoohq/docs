---
title: esxi.kernelmodule
id: esxi.kernelmodule
sidebar_label: esxi.kernelmodule
displayed_sidebar: MQL
description: vSphere ESXi kernel module resource
---

# esxi.kernelmodule

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

vSphere ESXi kernel module resource

**Fields**

| ID                   | TYPE   | DESCRIPTION                   |
| -------------------- | ------ | ----------------------------- |
| name                 | string | Module name                   |
| modulefile           | string | Module file location          |
| version              | string | Module version                |
| loaded               | bool   | Flag if the module is loaded  |
| license              | string | Module license                |
| enabled              | bool   | Flag if the module is enabled |
| signedStatus         | string | Module signed status          |
| signatureDigest      | string | Module signed digest          |
| signatureFingerprint | string | Module signed fingerprint     |
| vibAcceptanceLevel   | string | Module acceptance level       |
