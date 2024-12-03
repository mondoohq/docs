---
title: cloudflare.one.app
id: cloudflare.one.app
sidebar_label: cloudflare.one.app
displayed_sidebar: MQL
description: Cloudflare One application
---

# cloudflare.one.app

**Description**

Cloudflare One application

**Fields**

| ID                       | TYPE                                                | DESCRIPTION                                                                                                                                             |
| ------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                       | string                                              |                                                                                                                                                         |
| aud                      | string                                              | UUID                                                                                                                                                    |
| name                     | string                                              | Audience tag                                                                                                                                            |
| domain                   | string                                              | Name of the application                                                                                                                                 |
| allowedIdentityProviders | &#91;&#93;string                                    | Domain of the application                                                                                                                               |
| appLauncherVisible       | bool                                                | Allowed identity providers                                                                                                                              |
| autoRedirectToIdentity   | bool                                                | Whether the application displays in the App Launcher                                                                                                    |
| corsHeaders              | [cloudflare.corsHeaders](cloudflare.corsheaders.md) | Whether users skip the identity provider selection step during login                                                                                    |
| optionsPreflightBypass   | bool                                                | CORS headers                                                                                                                                            |
| customDenyMessage        | string                                              | Whether preflight requests are allowed to bypass Access authentication and go directly to the origin (can't be true if corsHeaders is set)              |
| customDenyUrl            | string                                              | Custom error message shown to a user when they are denied access to the application                                                                     |
| serviceAuth401Redirect   | bool                                                | Custom URL to redirect a user to when they are denied access to the application                                                                         |
| enableBindingCookie      | bool                                                | Whether to return a 401 status code when the request is blocked by a Service Auth policy                                                                |
| httpOnlyCookieAttribute  | bool                                                | Whether to allow the binding cookie, which increases security against compromised authorization tokens and CSRF attacks                                 |
| sameSiteCookieAttribute  | string                                              | Whether the HttpOnly cookie attribute, which increases security against XSS attacks, is enabled                                                         |
| logoUrl                  | string                                              | SameSite cookie setting, which provides increased security against CSRF attacks                                                                         |
| sessionDuration          | string                                              | URL of the application's logo                                                                                                                           |
| skipInterstitial         | bool                                                | Amount of time that tokens issued for this application will be valid (Format is 300ms or 2h45m. Valid time units are: ns, us (or µs), ms, s, m, and h.) |
| type                     | string                                              | Whether automatic authentication through cloudflared is enabled                                                                                         |
| createdAt                | time                                                | Application type, Time the application was created                                                                                                      |
| updatedAt                | time                                                | Time the application was last updated                                                                                                                   |
