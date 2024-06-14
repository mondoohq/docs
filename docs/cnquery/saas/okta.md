---
title: Query Okta
sidebar_label: Okta
sidebar_position: 5
displayed_sidebar: cnquery
description: Query Okta configuration with cnquery
image: /img/featured_img/mondoo-feature.jpg
---

Rely on cnquery to query and inventory your Okta domain, including users, groups, policies, rules, applications and more.

## Configure access to Okta

Create an Okta [API token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/). Carefully record the API token and your Okta domain.

:::note

Okta API tokens have a [fixed expiration period of 30 days](https://developer.okta.com/docs/guides/create-an-api-token/main/#token-expiration).

:::

Test access using the cnquery shell in a terminal. If your domain includes '-admin', you must remove it when specifying the organization to cnquery. For example, if your Okta URL is 'dev-22556123-admin.okta.com', specify your organization as 'dev-22556123.okta.com'.

```bash
$ cnquery shell okta --organization dev-22556123.okta.com --token <api-token>
cnquery> okta.organization{ * }
okta.organization: {
  address2: ""
  subdomain: "dev-22556123"
  created: 2023-01-19 19:35:32 +0000 UTC
  lastUpdated: 2023-01-19 19:35:38 +0000 UTC
  country: ""
  status: "ACTIVE"
  website: "https://developer.okta.com"
  endUserSupportHelpURL: ""
  state: ""
  address1: ""
  city: ""
  phoneNumber: ""
  expiresAt: null
  supportPhoneNumber: ""
  postalCode: ""
  companyName: "okta-dev-22556123"
  id: "<REDACTED>"
}
```

You can also use the `OKTA_CLIENT_TOKEN` environment variable, which makes the `--token` parameter optional. Note that if both are present, the `OKTA_CLIENT_TOKEN` environment variable takes precedence.

```bash
export OKTA_CLIENT_TOKEN='00zr0k74_-s5mp13t0k3n'
cnquery shell okta --organization dev-22556123.okta.com
```

:::info

Want a place to experiment? Okta makes it easy to obtain Developer Accounts. Sign up at [developer.okta.com/signup](https://developer.okta.com/signup/).

:::

## Example queries

### Query users

Example query:

```coffeescript
okta.users{
    profile
    status
    lastUpdated
    credentials['provider']['name']
}
```

Example shell output:

```coffeescript
okta.users: [
  0: {
    status: "PROVISIONED"
    profile: &map[email:suki@lunalectric.com firstName:Suki lastName:Mbeze login:suki@lunalectric.com mobilePhone:<nil> secondEmail:<nil>]
    lastUpdated: 2023-01-20 23:49:58 +0000 UTC
    credentials[provider][name]: "OKTA"
  }
  1: {
    status: "PROVISIONED"
    profile: &map[email:alice@lunalectric.com firstName:Alice lastName:Freedman login:alice@lunalectric.com mobilePhone:<nil> secondEmail:<nil>]
    lastUpdated: 2023-01-20 23:49:41 +0000 UTC
    credentials[provider][name]: "OKTA"
  }
  2: {
    status: "RECOVERY"
    profile: &map[email:ben@lunalectric.com firstName:Ben lastName:Pesoa login:ben@lunalectric.com mobilePhone:<nil> secondEmail:<nil>]
    lastUpdated: 2023-01-19 20:14:53 +0000 UTC
    credentials[provider][name]: "OKTA"
  }
]

```

### Audit applications

This query requests the name, status, label, and sign-on mode for each configuration application:

```coffeescript
okta.applications {
    status
    name
    label
    signOnMode
}
```

Example shell output:

```coffeescript
okta.applications: [
  0: {
    status: "ACTIVE"
    name: "saasure"
    label: "Okta Admin Console"
    signOnMode: "OPENID_CONNECT"
  }
  1: {
    status: "ACTIVE"
    name: "okta_end_user"
    label: "Okta Dashboard"
    signOnMode: "OPENID_CONNECT"
  }
  2: {
    status: "ACTIVE"
    name: "okta_browser_plugin"
    label: "Okta Browser Plugin"
    signOnMode: "OPENID_CONNECT"
  }
  3: {
    status: "ACTIVE"
    name: "dev-22556257_pagerduty_1"
    label: "PagerDuty"
    signOnMode: "AUTO_LOGIN"
  }
]
```

## Learn more

- To learn more about how the MQL query language works, read [Write Effective MQL](/mql/mql.write/).

- To learn about all the Okta resources and properties you can query, read the [Mondoo Okta Resource Pack Reference](/mql/resources/okta-pack/).
