---
title: microsoft.domain
id: microsoft.domain
sidebar_label: microsoft.domain
displayed_sidebar: MQL
description: Microsoft domain
---

# microsoft.domain

**Description**

Microsoft domain

**Fields**

| ID                               | TYPE                                                                | DESCRIPTION                                |
| -------------------------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| id                               | string                                                              | Domain ID                                  |
| authenticationType               | string                                                              | Domain authentication type                 |
| availabilityStatus               | string                                                              | Domain availability status                 |
| isAdminManaged                   | bool                                                                | Whether the domain is admin managed        |
| isDefault                        | bool                                                                | Whether the domain is the default domain   |
| isInitial                        | bool                                                                | Whether the domain is the initial domain   |
| isRoot                           | bool                                                                | Whether the domain is a root domain        |
| isVerified                       | bool                                                                | Whether the domain is verified             |
| passwordNotificationWindowInDays | int                                                                 | Domain password notification window (days) |
| passwordValidityPeriodInDays     | int                                                                 | Domain password validity period (days)     |
| supportedServices                | &#91;&#93;string                                                    | List of supported services                 |
| serviceConfigurationRecords      | &#91;&#93;[microsoft.domaindnsrecord](microsoft.domaindnsrecord.md) | List of service configuration records      |
