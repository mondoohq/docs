---
title: okta.organization
id: okta.organization
sidebar_label: okta.organization
displayed_sidebar: MQL
description: Okta organization
---

# okta.organization

**Description**

Okta organization

**Fields**

| ID                         | TYPE                                                      | DESCRIPTION                                                       |
| -------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------- |
| id                         | string                                                    | ID of organization                                                |
| companyName                | string                                                    | Name of the company                                               |
| status                     | string                                                    | Status of organization. Accepted values: ACTIVE, INACTIVE         |
| subdomain                  | string                                                    | Subdomain of organization                                         |
| address1                   | string                                                    | Primary address of organization                                   |
| address2                   | string                                                    | Secondary address of organization                                 |
| city                       | string                                                    | City of organization                                              |
| state                      | string                                                    | State of organization                                             |
| phoneNumber                | string                                                    | Phone number of organization                                      |
| postalCode                 | string                                                    | Postal code of organization                                       |
| country                    | string                                                    | Country code of organization                                      |
| supportPhoneNumber         | string                                                    | Support help phone of organization                                |
| website                    | string                                                    | The organization's website                                        |
| endUserSupportHelpURL      | string                                                    | Support link of organization                                      |
| created                    | time                                                      | Timestamp when organization was created                           |
| lastUpdated                | time                                                      | Timestamp when org was last updated                               |
| expiresAt                  | time                                                      | Expiration of organization                                        |
| optOutCommunicationEmails  | bool                                                      | Whether the organization's users receive Okta communication email |
| billingContact             | [okta.user](okta.user.md)                                 | Billing contact of organization                                   |
| technicalContact           | [okta.user](okta.user.md)                                 | Technical contact of organization                                 |
| securityNotificationEmails | dict                                                      | Security notification email                                       |
| threatInsightSettings      | [okta.threatsConfiguration](okta.threatsconfiguration.md) | Okta ThreatInsight settings                                       |
