---
title: microsoft.application
id: microsoft.application
sidebar_label: microsoft.application
displayed_sidebar: MQL
description: Microsoft Entra ID application registration
---

# microsoft.application

**Description**

Microsoft Entra ID application registration

**Init**

microsoft.application(name string)
microsoft.application(id string)

**Fields**

| ID                                | TYPE                                                                      | DESCRIPTION                                                 |
| --------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| id                                | string                                                                    | Object ID                                                   |
| appId                             | string                                                                    | Application (client) ID                                     |
| name                              | string                                                                    | Application display name                                    |
| description                       | string                                                                    | Description                                                 |
| notes                             | string                                                                    | Notes                                                       |
| tags                              | &#91;&#93;string                                                          | Tags                                                        |
| applicationTemplateId             | string                                                                    | Application template ID                                     |
| disabledByMicrosoftStatus         | string                                                                    | Microsoft disabled status                                   |
| groupMembershipClaims             | string                                                                    | Group membership claims                                     |
| createdAt                         | time                                                                      | Application creation date                                   |
| identifierUris                    | &#91;&#93;string                                                          | Application identifier URIs                                 |
| publisherDomain                   | string                                                                    | Application publisher domain                                |
| signInAudience                    | string                                                                    | Application sign-in audience                                |
| info                              | dict                                                                      | Basic profile information                                   |
| api                               | dict                                                                      | Settings for an application that implements a web API       |
| web                               | dict                                                                      | Settings for a web application                              |
| spa                               | dict                                                                      | Settings for a single-page application                      |
| secrets                           | &#91;&#93;[microsoft.passwordCredential](microsoft.passwordcredential.md) | Client secrets                                              |
| certificates                      | &#91;&#93;[microsoft.keyCredential](microsoft.keycredential.md)           | Certificates                                                |
| hasExpiredCredentials             | bool                                                                      | Whether the credentials have expired                        |
| owners                            | &#91;&#93;[microsoft.user](microsoft.user.md)                             | Application owner                                           |
| servicePrincipal                  | [microsoft.serviceprincipal](microsoft.serviceprincipal.md)               | Managed application in local directory                      |
| isDeviceOnlyAuthSupported         | bool                                                                      | Whether the application supports device-only authentication |
| isFallbackPublicClient            | bool                                                                      | Specifies the fallback application type as public client    |
| nativeAuthenticationApisEnabled   | string                                                                    | Whether the application supports native authentication      |
| serviceManagementReference        | string                                                                    | Service management reference                                |
| tokenEncryptionKeyId              | string                                                                    | Token encryption key ID                                     |
| samlMetadataUrl                   | string                                                                    | SAML metadata URL                                           |
| defaultRedirectUri                | string                                                                    | Default redirect URI                                        |
| certification                     | dict                                                                      | Certification metadata                                      |
| optionalClaims                    | dict                                                                      | Optional claims                                             |
| servicePrincipalLockConfiguration | dict                                                                      | Service principal configuration                             |
| requestSignatureVerification      | dict                                                                      | Signature verification                                      |
| parentalControlSettings           | dict                                                                      | Parental control settings                                   |
| publicClient                      | dict                                                                      | Public client configuration                                 |
| appRoles                          | &#91;&#93;[microsoft.application.role](microsoft.application.role.md)     | Application roles                                           |
