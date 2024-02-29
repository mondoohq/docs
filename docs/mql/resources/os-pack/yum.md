---
title: yum
id: yum
sidebar_label: yum
displayed_sidebar: MQL
description: Yum package manager resource
---

# yum

**Description**

Yum package manager resource

**Fields**

| ID    | TYPE                              | DESCRIPTION                                                                                               |
| ----- | --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| vars  | map[string]string                 | Variables defined in Yum configuration files (/etc/yum.conf and all .repo files in the /etc/yum.repos.d/) |
| repos | &#91;&#93;[yum.repo](yum.repo.md) | List of all configured Yum repositories                                                                   |
