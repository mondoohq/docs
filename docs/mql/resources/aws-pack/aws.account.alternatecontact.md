---
title: aws.account.alternateContact
id: aws.account.alternateContact
sidebar_label: aws.account.alternateContact
displayed_sidebar: MQL
description: AWS Account alternate contact
---

# aws.account.alternateContact

**Supported platform**

- aws

**Description**

AWS Account alternate contact

**Fields**

| ID           | TYPE   | DESCRIPTION                                                 |
| ------------ | ------ | ----------------------------------------------------------- |
| accountId    | string | Account ID this contact belongs to                          |
| contactType  | string | Type of alternate contact: BILLING, OPERATIONS, or SECURITY |
| emailAddress | string | Email address of the contact                                |
| name         | string | Name of the contact                                         |
| phoneNumber  | string | Phone number of the contact                                 |
| title        | string | Title of the contact                                        |
| exists       | bool   | Whether this contact exists and is configured               |
