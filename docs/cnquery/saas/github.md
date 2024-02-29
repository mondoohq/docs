---
title: Query GitHub organizations and repositories with cnquery
sidebar_label: GitHub
sidebar_position: 2
displayed_sidebar: cnquery
description: Query GitHub configuration with cnquery
image: /img/featured_img/mondoo-feature.jpg
---

Rely on cnquery to query and inventory your GitHub organizations and private repositories (repos) as well as public repos and open source projects your team depends on.

## Give cnquery access using the GitHub API

To query GitHub organizations and repos, cnquery needs access. You give cnquery the access it needs through the GitHub API. First, you create GitHub personal access token. Then you share that token with cnquery using an environment variable.

### Create a GitHub personal access token

cnquery needs a personal access token to query a GitHub organization, public repo, or private repo. The token's level of access determines how much information cnquery can retrieve.

To learn how to create a personal access token, read [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in the GitHub documentation.

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

```coffee
help github
```

From the resulting list, you can drill down further. For example, enter this command to list all the GitHub resources you can query:

```coffee
help github.organization
```

### Example query

Now that you know how to discover what's possible with cnquery, let's run some actual queries in the shell.

This query returns the number of private repos in the organization:

```coffee
github.organization.totalPrivateRepos
```

#### Filter results

You can filter results based on any fields. Specify the criteria using the `where` function and standard boolean operators.

For example, this query asks for repo branches, and filters results to show only protected branches:

```coffee
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
