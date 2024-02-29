---
title: googleworkspace.report.usage
id: googleworkspace.report.usage
sidebar_label: googleworkspace.report.usage
displayed_sidebar: MQL
description: Google workspace usage report
---

# googleworkspace.report.usage

**Description**

Google workspace usage report

**Fields**

| ID         | TYPE           | DESCRIPTION                                     |
| ---------- | -------------- | ----------------------------------------------- |
| customerId | string         | The unique identifier of the customer's account |
| entityId   | string         | Google Workspace entity ID                      |
| profileId  | string         | Google Workspace profile identifier             |
| type       | string         | Entity type                                     |
| userEmail  | string         | Email of user                                   |
| date       | time           | Date of the report                              |
| parameters | &#91;&#93;dict | Parameter value pairs                           |
| account    | dict           | Account Settings                                |
| security   | dict           | Security Settings                               |
| appUsage   | dict           | App Usage                                       |
