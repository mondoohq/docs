---
title: cisco.iosxe.routerOspfEntry.area
id: cisco.iosxe.routerOspfEntry.area
sidebar_label: cisco.iosxe.routerOspfEntry.area
displayed_sidebar: MQL
description: Cisco IOS XE Routing OSPF Area configuration
---

# cisco.iosxe.routerOspfEntry.area

**Description**

Cisco IOS XE Routing OSPF Area configuration

**Fields**

| ID                       | TYPE   | DESCRIPTION                                                                              |
| ------------------------ | ------ | ---------------------------------------------------------------------------------------- |
| areaId                   | string | The identifier of the area. Can be specified as either a decimal value or an IP address. |
| authenticationEnabled    | bool   | Whether authentication is enabled for the area.                                          |
| md5AuthenticationEnabled | bool   | Whether message digest 5 (md5) authentication is enabled for the area.                   |
| defaultCost              | int    | Optional. How expensive the default route is for this area.                              |
