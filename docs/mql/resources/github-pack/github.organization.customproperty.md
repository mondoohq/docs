---
title: github.organization.customProperty
id: github.organization.customProperty
sidebar_label: github.organization.customProperty
displayed_sidebar: MQL
description: GitHub organization-level custom property
---

# github.organization.customProperty

**Description**

GitHub organization-level custom property

**Fields**

| ID               | TYPE             | DESCRIPTION                                           |
| ---------------- | ---------------- | ----------------------------------------------------- |
| name             | string           | The name of the property                              |
| description      | string           | Short description of the property                     |
| sourceType       | string           | Source type of the property (where it was created)    |
| valueType        | string           | Type of the value for the property                    |
| required         | bool             | Whether the property is required                      |
| defaultValue     | string           | Default value of the property                         |
| allowedValues    | &#91;&#93;string | An ordered list of the allowed values of the property |
| valuesEditableBy | string           | Who can edit the values of the property               |
