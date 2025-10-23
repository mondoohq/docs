---
title: azure.subscription.privateEndpointConnection
id: azure.subscription.privateEndpointConnection
sidebar_label: azure.subscription.privateEndpointConnection
displayed_sidebar: MQL
description: Azure private endpoint connection
---

# azure.subscription.privateEndpointConnection

**Supported platform**

- azure

**Description**

Azure private endpoint connection

**Fields**

| ID                                | TYPE                                                                                                                            | DESCRIPTION                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| id                                | string                                                                                                                          | Private endpoint connection ID                        |
| name                              | string                                                                                                                          | Private endpoint connection name                      |
| type                              | string                                                                                                                          | Private endpoint connection type                      |
| ipAddresses                       | &#91;&#93;string                                                                                                                | Private endpoint connection IP addresses              |
| privateEndpointId                 | string                                                                                                                          | ID of the associated private endpoint                 |
| privateLinkServiceConnectionState | [azure.subscription.privateEndpointConnection.connectionState](azure.subscription.privateendpointconnection.connectionstate.md) | Private link service connection state details         |
| provisioningState                 | string                                                                                                                          | Provisioning state of the private endpoint connection |
| properties                        | dict                                                                                                                            | privateEndpointConnection properties                  |
