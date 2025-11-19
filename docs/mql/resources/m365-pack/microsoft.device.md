---
title: microsoft.device
id: microsoft.device
sidebar_label: microsoft.device
displayed_sidebar: MQL
description: Microsoft device
---

# microsoft.device

**Description**

Microsoft device

**Fields**

| ID                     | TYPE             | DESCRIPTION                                                              |
| ---------------------- | ---------------- | ------------------------------------------------------------------------ |
| id                     | string           | Device ID                                                                |
| displayName            | string           | Device display name                                                      |
| deviceId               | string           | Unique identifier set                                                    |
| deviceCategory         | string           | User-defined property set by Intune                                      |
| enrollmentProfileName  | string           | Enrollment profile applied to the device                                 |
| enrollmentType         | string           | Enrollment type of the device                                            |
| isCompliant            | bool             | Whether the device complies with Mobile Device Management (MDM) policies |
| isManaged              | bool             | Whether the device is managed by a Mobile Device Management (MDM) app    |
| manufacturer           | string           | Manufacturer                                                             |
| isRooted               | bool             | Whether the device is rooted or jail-broken                              |
| mdmAppId               | string           | Application identifier used to register device into MDM                  |
| model                  | string           | Model of the device                                                      |
| operatingSystem        | string           | The type of operating system on the device                               |
| operatingSystemVersion | string           | The version of the operating system on the device                        |
| physicalIds            | &#91;&#93;string | Physical IDs                                                             |
| registrationDateTime   | time             | Date and time of when the device was registered                          |
| systemLabels           | &#91;&#93;string | List of labels applied to the device by the system                       |
| trustType              | string           | Type of trust for the joined device                                      |
