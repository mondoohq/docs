---
title: uuid
id: uuid
sidebar_label: uuid
displayed_sidebar: MQL
description: UUIDs based on RFC 4122 and DCE 1.1
---

# uuid

**Description**

UUIDs based on RFC 4122 and DCE 1.1

**Init**

uuid(value string)

**Fields**

| ID      | TYPE   | DESCRIPTION                                                          |
| ------- | ------ | -------------------------------------------------------------------- |
| value   | string | Canonical string representation xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx |
| urn     | string | URN returns the RFC 2141 URN form of uuid                            |
| version | int    | Version of UUID                                                      |
| variant | string | Variant encoded in UUID                                              |
