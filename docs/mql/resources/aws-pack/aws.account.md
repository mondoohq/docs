---
title: aws.account
id: aws.account
sidebar_label: aws.account
displayed_sidebar: MQL
description: AWS Account
---

# aws.account

**Supported platform**

- aws

**Description**

AWS Account

The `aws.account` resource provides configuration for AWS accounts, including the account number and configured aliases.

**Fields**

| ID                 | TYPE                                                                      | DESCRIPTION                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                 | string                                                                    | Account ID                                                                                                                                                                                             |
| aliases            | &#91;&#93;string                                                          | Account aliases                                                                                                                                                                                        |
| organization       | [aws.organization](aws.organization.md)                                   | Information about the associated organization, if any                                                                                                                                                  |
| tags               | map[string]string                                                         | Tags on the account, Note: This operation can only be called from the organization's management, account or by a member account that is a delegated administrator for an, Amazon Web Services service. |
| contactInformation | dict                                                                      | Primary contact information for the account                                                                                                                                                            |
| alternateContacts  | &#91;&#93;[aws.account.alternateContact](aws.account.alternatecontact.md) | All alternate contacts configured for the account                                                                                                                                                      |
| securityContact    | [aws.account.alternateContact](aws.account.alternatecontact.md)           | Security alternate contact for the account                                                                                                                                                             |
| billingContact     | [aws.account.alternateContact](aws.account.alternatecontact.md)           | Billing alternate contact for the account                                                                                                                                                              |
| operationsContact  | [aws.account.alternateContact](aws.account.alternatecontact.md)           | Operations alternate contact for the account                                                                                                                                                           |

**Examples**

Return the account ID (number) and any configured account aliases

```coffee
aws.account {
  id
  aliases
}
```
