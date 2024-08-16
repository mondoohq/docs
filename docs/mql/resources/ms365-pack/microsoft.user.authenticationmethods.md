---
title: microsoft.user.authenticationMethods
id: microsoft.user.authenticationMethods
sidebar_label: microsoft.user.authenticationMethods
displayed_sidebar: MQL
description: Microsoft Entra authentication methods
---

# microsoft.user.authenticationMethods

**Description**

Microsoft Entra authentication methods

**Fields**

| ID                         | TYPE           | DESCRIPTION                                                           |
| -------------------------- | -------------- | --------------------------------------------------------------------- |
| count                      | int            | Count of authentication methods                                       |
| phoneMethods               | &#91;&#93;dict | Phone number and type registered to a user                            |
| emailMethods               | &#91;&#93;dict | Email authentication method for self-service password reset (SSPR)    |
| fido2Methods               | &#91;&#93;dict | FIDO2 security key registered to a user                               |
| softwareMethods            | &#91;&#93;dict | Software OATH token registered to a user                              |
| microsoftAuthenticator     | &#91;&#93;dict | Microsoft Authenticator app registered to a user                      |
| passwordMethods            | &#91;&#93;dict | User password authentication method                                   |
| temporaryAccessPassMethods | &#91;&#93;dict | Temporary Access Pass registered to a user                            |
| windowsHelloMethods        | &#91;&#93;dict | Windows Hello for Business authentication method registered to a user |
