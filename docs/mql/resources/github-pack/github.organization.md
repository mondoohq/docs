---
title: github.organization
id: github.organization
sidebar_label: github.organization
displayed_sidebar: MQL
description: GitHub organization
---

# github.organization

**Description**

GitHub organization

**Fields**

| ID                                   | TYPE                                                    | DESCRIPTION                                                                                                                                             |
| ------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| login                                | string                                                  | Organization login                                                                                                                                      |
| id                                   | int                                                     | Organization ID                                                                                                                                         |
| nodeId                               | string                                                  | Organization global node ID                                                                                                                             |
| name                                 | string                                                  | Organization name                                                                                                                                       |
| company                              | string                                                  | Organization company                                                                                                                                    |
| blog                                 | string                                                  | Organization blog                                                                                                                                       |
| location                             | string                                                  | Organization location                                                                                                                                   |
| email                                | string                                                  | Organization email                                                                                                                                      |
| twitterUsername                      | string                                                  | Organization Twitter handle                                                                                                                             |
| avatarUrl                            | string                                                  | Organization profile picture URL                                                                                                                        |
| followers                            | int                                                     | Organization's number of followers                                                                                                                      |
| following                            | int                                                     | Number of organizations the organization is following                                                                                                   |
| description                          | string                                                  | Organization description                                                                                                                                |
| createdAt                            | time                                                    | Create time for the organization                                                                                                                        |
| updatedAt                            | time                                                    | Update time for the organization                                                                                                                        |
| totalPrivateRepos                    | int                                                     | Number of private repositories                                                                                                                          |
| ownedPrivateRepos                    | int                                                     | Number of owned private repositories for the organization                                                                                               |
| privateGists                         | int                                                     | Number of private gists                                                                                                                                 |
| diskUsage                            | int                                                     | Disk usage for the organization                                                                                                                         |
| collaborators                        | int                                                     | Number of collaborators for the organization                                                                                                            |
| billingEmail                         | string                                                  | Organization billing email                                                                                                                              |
| plan                                 | dict                                                    | GitHub plan the organization is subscribed to                                                                                                           |
| twoFactorRequirementEnabled          | bool                                                    | Whether two-factor authentication is required for all members. This value will be null if the API token does not have owner access on the organization. |
| isVerified                           | bool                                                    | Whether the organization is verified by GitHub                                                                                                          |
| defaultRepositoryPermission          | string                                                  | The default repository permission                                                                                                                       |
| membersCanCreateRepositories         | bool                                                    | Whether members can create repositories                                                                                                                 |
| membersCanCreatePublicRepositories   | bool                                                    | Whether members can create public repositories                                                                                                          |
| membersCanCreatePrivateRepositories  | bool                                                    | Whether members can create private repositories                                                                                                         |
| membersCanCreateInternalRepositories | bool                                                    | Whether members can create internal repositories                                                                                                        |
| membersCanCreatePages                | bool                                                    | Whether members can create pages                                                                                                                        |
| membersCanCreatePublicPages          | bool                                                    | Whether members can create public pages                                                                                                                 |
| membersCanCreatePrivatePages         | bool                                                    | Whether members can create private pages                                                                                                                |
| membersCanForkPrivateRepos           | bool                                                    | Whether members can fork private repositories to their own GitHub account                                                                               |
| owners                               | &#91;&#93;[github.user](github.user.md)                 | List of users that are part of the owners group                                                                                                         |
| members                              | &#91;&#93;[github.user](github.user.md)                 | List of users that are part of the members group                                                                                                        |
| teams                                | &#91;&#93;[github.team](github.team.md)                 | List of users that are part of the teams group                                                                                                          |
| repositories                         | &#91;&#93;[github.repository](github.repository.md)     | List of repositories                                                                                                                                    |
| installations                        | &#91;&#93;[github.installation](github.installation.md) | List of GitHub installations                                                                                                                            |
| webhooks                             | &#91;&#93;[github.webhook](github.webhook.md)           | List of webhooks                                                                                                                                        |
| packages                             | &#91;&#93;[github.package](github.package.md)           | List of packages                                                                                                                                        |
