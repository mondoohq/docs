---
title: microsoft.user.authenticationMethods.userRegistrationDetails
id: microsoft.user.authenticationMethods.userRegistrationDetails
sidebar_label: microsoft.user.authenticationMethods.userRegistrationDetails
displayed_sidebar: MQL
description: Represents the state of a user's authentication methods, including which methods are registered and capable
---

# microsoft.user.authenticationMethods.userRegistrationDetails

**Description**

Represents the state of a user's authentication methods, including which methods are registered and capable

**Fields**

| ID                                            | TYPE             | DESCRIPTION                                                                                                                                                         |
| --------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                            | string           | User's object identifier in Microsoft Entra ID                                                                                                                      |
| isAdmin                                       | bool             | True if the user has an administrator role in the tenant                                                                                                            |
| isMfaCapable                                  | bool             | True if the user has registered a strong auth method that is enabled by the multifactor authentication policy                                                       |
| isMfaRegistered                               | bool             | True if the user has registered at least one strong authentication method, regardless of whether it is enabled by policy                                            |
| isPasswordlessCapable                         | bool             | True if the user has registered a strong authentication method that doesn't require a password and is enabled by policy                                             |
| isSsprCapable                                 | bool             | True if the user is capable of self-service password reset by having registered the required number of methods and being included in the policy                     |
| isSsprEnabled                                 | bool             | True if the user is allowed to perform self-service password reset by policy, even if they have not yet registered the required number of methods                   |
| isSsprRegistered                              | bool             | True if the user has registered the required number of authentication methods for self-service password reset, regardless of whether they are enabled for by policy |
| isSystemPreferredAuthenticationMethodEnabled  | bool             | True if system-preferred authentication is enabled, which allows the system to dynamically determine the most secure authentication method for the user             |
| lastUpdatedDateTime                           | time             | The date and time when the user's registration details were last updated                                                                                            |
| methodsRegistered                             | &#91;&#93;string | Collection of authentication methods registered by the user, such as "mobilePhone", "email", and "fido2SecurityKey"                                                 |
| systemPreferredAuthenticationMethods          | &#91;&#93;string | Collection of authentication methods that the system determined to be the most secure for the user to perform multifactor authentication                            |
| userDisplayName                               | string           | The user's display name                                                                                                                                             |
| userPreferredMethodForSecondaryAuthentication | string           | The method the user selected as their default for second-factor authentication. This is used when system-preferred authentication is disabled.                      |
| userPrincipalName                             | string           | The user's principal name                                                                                                                                           |
| userType                                      | string           | The user's type, which can be "member", "guest", or "unknownFutureValue"                                                                                            |
