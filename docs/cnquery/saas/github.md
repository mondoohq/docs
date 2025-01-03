---
title: Query GitHub organizations and repositories
sidebar_label: GitHub
sidebar_position: 2
displayed_sidebar: cnquery
description: Query GitHub configuration with cnquery
image: /img/featured_img/mondoo-feature.jpg
---

Rely on cnquery to query and inventory your GitHub organizations and private repositories (repos) as well as public repos and open source projects your team depends on.

## Give cnquery access to your GitHub organization

To scan GitHub organizations and repos, cnquery needs access. There are two ways to do this:

- Option 1: Give cnquery access using a personal access token and an environment variable. This approach is easier to set up but isn't recommended for very large GitHub organizations. To learn how to give cnquery access using a personal access token, continue reading below.

- Option 2: Give cnquery access using custom GitHub application credentials. This approach takes longer to set up, but scales for very large GitHub organizations (with API rate limits as much as 3x higher than personal access tokens). To learn how to give cnquery access using custom app credentials, read [Give cnquery Access to GitHub Using Custom GitHub App Credentials](/cnquery/saas/gh-app/).

### Create a GitHub personal access token

cnquery needs a personal access token to query a GitHub organization, public repo, or private repo. The token's level of access determines how much information cnquery can retrieve.

To learn how to create a personal access token, read [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in the GitHub documentation. We recommend creating a classic token with these scopes:

- public_repo
- read:org
- read:repo_hook
- admin:org_hook
- read:project

### Configure a GITHUB_TOKEN environment variable

You supply your personal access token to cnquery using the `GITHUB_TOKEN` environment variable.

#### Linux / macOS

```bash
export GITHUB_TOKEN=<your personal access token>
```

#### Windows

```powershell
$Env:GITHUB_TOKEN = "<personal-access-token>"
```

## Query GitHub

To answer any question about your environment, use cnquery's interactive shell. It has auto-complete to guide you, which is especially helpful when you're new to cnquery and learning MQL.

To launch a shell into your GitHub organization, enter:

```bash
cnquery shell github org YOUR-ORG
```

For `YOUR-ORG`, substitute the name of your GitHub organization.

### Discover capabilities with the `help` command

Once inside the shell, use the `help` command to learn what GitHub resources you can query. This command lists all the GitHub resources:

```coffeescript
help github
```

From the resulting list, you can drill down further. For example, enter this command to list all the GitHub resources you can query:

```coffeescript
help github.organization
```

### Example query

Now that you know how to discover what's possible with cnquery, let's run some actual queries in the shell.

This query returns the number of private repos in the organization:

```coffeescript
github.organization.totalPrivateRepos
```

#### Filter results

You can filter results based on any fields. Specify the criteria using the `where` function and standard boolean operators.

For example, this query asks for repo branches, and filters results to show only protected branches:

```coffeescript
github.repository.branches.where( protected == true )
```

### Exit the cnquery shell

To exit the cnquery shell, either press `Ctrl + D` or type `exit`.## Query a GitHub organization

To query the configuration of your GitHub organization, run this command:

```bash
cnquery shell github org <ORG_NAME>
```

## Learn more

- To learn about all the GitHub resources and properties, read the [Mondoo GitHub Resource Pack Reference](/mql/resources/github-pack/).

- To learn how to write queries, read [Write Effective MQL](/mql/mql.write).

---
