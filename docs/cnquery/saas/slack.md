---
title: Query Slack
sidebar_label: Slack
sidebar_position: 40
displayed_sidebar: cnquery
description: Query your Slack workspaces with cnquery
image: /img/featured_img/mondoo-feature.jpg
---

Rely on cnquery to query and inventory your Slack workspaces. Unlock the powerful data available in the Slack API with the ease of MQL.

## Configure access to a Slack organization

Access to the Slack API requires an [Access Token](https://api.slack.com/authentication/token-types). We recommend using a bot token.

1. As a workspace administrator, [create an app](https://api.slack.com/apps): Select the **Create an App** button and then select **From Scratch**.
2. Specify an app name (such as **Mondoo**) and select the appropriate workspace.
3. Select **Create App**.
4. In the left-side navigation, select **OAuth & Permissions**.
5. Scroll to **Scopes**. Under **User Token Scopes**, add these scopes:

   - **admin**: (This permission is required to view access logs. For details, read [scopes: admin](https://api.slack.com/scopes/admin).)
   - **channels:read**
   - **groups:read**
   - **im:read**
   - **mpim:read**
   - **team:read**
   - **usergroups:read**
   - **users:read**
   - **users:read.email**

6. Scroll to **OAuth Tokens for Your Workspace** and select **Install to Workspace**. Once you authorize the app, Slack provides a token. Copy the token; you need it to retrieve data from Slack.

You can now test using the cnquery shell:

```bash
$ cnquery shell slack --token <api-token>
cnquery> slack.team
slack.team: {
  domain: "mondoo"
  id: "T030KKBABCDE"
}
```

You can also use the `SLACK_TOKEN` environment variable, which makes the `--token` parameter optional. Note that if both are present, the `SLACK_TOKEN` environment variable takes precedence.

```bash
$ export SLACK_TOKEN=xoxb-3014687468594-456546543219-5ampl3.70ck3n
$ cnquery shell slack
cnquery> slack.team
slack.team: {
  domain: "mondoo"
  id: "T030KKBABCDE"
}
```

## Example queries

### Users

Here is an example of all the data available for a single user:

```coffeescript
> slack.users[1]{ * }
slack.users.list[1]: {
  profile: {
    displayName: ""
    displayNameNormalized: ""
    email: "suki@lunalectric.io"
    firstName: "Suki"
    lastName: "Mbeze"
    phone: ""
    realName: "Suki Mbeze"
    realNameNormalized: "Suki Mbeze"
    skype: ""
    statusExpiration: "1969-12-31T16:00:00-08:00"
    team: "T030KKBUGHG"
    title: ""
  }
  timeZoneOffset: -28800
  isBot: false
  isInvitedUser: false
  deleted: false
  name: "suki"
  enterpriseUser: null
  isUltraRestricted: false
  id: "U030KL5BMDH"
  presence: ""
  hasFiles: false
  timeZone: "America/Los_Angeles"
  teamId: "T030KKBUGHG"
  isAdmin: true
  has2FA: false
  locale: "en-US"
  realName: "Suki Mbeze"
  isStranger: false
  isAppUser: false
  isOwner: true
  isRestricted: false
  timeZoneLabel: "Pacific Standard Time"
  isPrimaryOwner: true
  color: "9f69e7"
}
```

You can find which users have 2FA enabled:

```coffeescript
slack.users.where{ has2FA == true }
```

### Conversations (channels)

The `conversations` resource lets you inspect channels and direct message metadata.

This query asks the purpose of each channel:

```coffeescript
slack.conversations.where( isChannel == true ) { name purpose }
```

## Learn more

- To learn more about how the MQL query language works, read [Write Effective MQL](/mql/mql.write/).

- Explore the complete [Mondoo Slack Resource Pack Reference](/mql/resources/slack-pack/) for complete details.
