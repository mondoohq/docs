---
title: esxi.command
id: esxi.command
sidebar_label: esxi.command
displayed_sidebar: MQL
description: Run a command on ESXi
---

# esxi.command

**Supported platform**

- vmware-esxi
- vmware-vsphere

**Description**

Run a command on ESXi

**Init**

esxi.command(command string)

**Fields**

| ID            | TYPE           | DESCRIPTION            |
| ------------- | -------------- | ---------------------- |
| inventoryPath | string         | vSphere inventory path |
| command       | string         | Raw command            |
| result        | &#91;&#93;dict | Command result         |
