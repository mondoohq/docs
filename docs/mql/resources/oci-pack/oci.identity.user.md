---
title: oci.identity.user
id: oci.identity.user
sidebar_label: oci.identity.user
displayed_sidebar: MQL
description: Oracle Cloud Infrastructure (OCI) identity user
---

# oci.identity.user

**Description**

Oracle Cloud Infrastructure (OCI) identity user

**Fields**

| ID                 | TYPE                                                                          | DESCRIPTION                                                   |
| ------------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------- |
| id                 | string                                                                        | User ID                                                       |
| compartmentID      | string                                                                        | Tenancy containing the user                                   |
| name               | string                                                                        | Name of the user                                              |
| description        | string                                                                        | Description of the user                                       |
| created            | time                                                                          | Time when the user was created                                |
| state              | string                                                                        | Instance state                                                |
| mfaActivated       | bool                                                                          | Whether MFA is activated                                      |
| email              | string                                                                        | User email address                                            |
| emailVerified      | bool                                                                          | Whether email is verified                                     |
| capabilities       | map[string]bool                                                               | Properties indicating how the user is allowed to authenticate |
| lastLogin          | time                                                                          | Most recent login                                             |
| previousLogin      | time                                                                          | Previous login                                                |
| apiKeys            | &#91;&#93;[oci.identity.apiKey](oci.identity.apikey.md)                       | API keys                                                      |
| customerSecretKeys | &#91;&#93;[oci.identity.customerSecretKey](oci.identity.customersecretkey.md) | Customer secret keys                                          |
| authTokens         | &#91;&#93;[oci.identity.authToken](oci.identity.authtoken.md)                 | Auth tokens                                                   |
| groups             | &#91;&#93;[oci.identity.group](oci.identity.group.md)                         | User groups                                                   |
