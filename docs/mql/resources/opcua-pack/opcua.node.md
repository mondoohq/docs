---
title: opcua.node
id: opcua.node
sidebar_label: opcua.node
displayed_sidebar: MQL
description: OPC UA node
---

# opcua.node

**Description**

OPC UA node

**Fields**

| ID          | TYPE                                  | DESCRIPTION                    |
| ----------- | ------------------------------------- | ------------------------------ |
| id          | string                                | Node ID                        |
| name        | string                                | Node browser name              |
| namespace   | [opcua.namespace](opcua.namespace.md) | Namespace                      |
| class       | string                                | Node class                     |
| description | string                                | Node description               |
| writeable   | bool                                  | Indicates if value is writable |
| dataType    | string                                | Data type                      |
| min         | string                                | Minimum value                  |
| max         | string                                | Maximum value                  |
| unit        | string                                | Node unit                      |
| accessLevel | string                                | Access level                   |
| properties  | &#91;&#93;[opcua.node](opcua.node.md) | Properties                     |
| components  | &#91;&#93;[opcua.node](opcua.node.md) | Components                     |
| organizes   | &#91;&#93;[opcua.node](opcua.node.md) | Organizes                      |
