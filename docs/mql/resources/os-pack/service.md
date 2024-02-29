---
title: service
id: service
sidebar_label: service
displayed_sidebar: MQL
description: Service on this system
---

# service

**Description**

Service on this system

**Init**

service(name string)

**Fields**

| ID          | TYPE   | DESCRIPTION                                    |
| ----------- | ------ | ---------------------------------------------- |
| name        | string | Name of the service                            |
| description | string | Service description                            |
| installed   | bool   | Whether the service is installed               |
| running     | bool   | Whether the service is running                 |
| enabled     | bool   | Whether the service is enabled (start at boot) |
| type        | string | Type information                               |
| masked      | bool   | Whether the service is masked                  |
