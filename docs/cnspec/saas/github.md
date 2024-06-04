---
title: Assess the configuration of GitHub organizations and repositories with cnspec
sidebar_label: GitHub
sidebar_position: 2
displayed_sidebar: cnspec
description: Secure and enforce policy for GitHub
image: /img/featured_img/mondoo-feature.jpg
---

Rely on cnspec to ensure your GitHub organizations and private repositories (repos) follow recommended security and operational best practices.

You can also use cnspec to assess public repos and open source projects your team depends on. cnspec evaluates the risk a project poses to your business.

:::tip

Open source projects that don't adhere to GitHub's recommended security best practices pose a higher risk of introducing malicious code into your environments.

:::

## Give cnspec access using the GitHub API

To scan GitHub organizations and repos, cnspec needs access. You give cnspec the access it needs through the GitHub API. First, you create GitHub personal access token. Then you share that token with cnspec using an environment variable.

### Create a GitHub personal access token

cnspec needs a personal access token to scan a GitHub organization, public repo, or private repo. The token's level of access determines how much information cnspec can retrieve.

To learn how to create a personal access token, read [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) in the GitHub documentation.

### Configure a GITHUB_TOKEN environment variable

You supply your personal access token to cnspec using the `GITHUB_TOKEN` environment variable.

#### Linux / macOS

```bash
export GITHUB_TOKEN=<your personal access token>
```

#### Windows

```powershell
$Env:GITHUB_TOKEN = "<personal-access-token>"
```

## Scan a GitHub organization

To scan the configuration of your GitHub organization and all repos within it, run this command:

```bash
cnspec scan github org <ORG_NAME>
```

:::caution

Scanning large GitHub organizations and all repositories may exceed GitHub API rate limits. To learn more, read [About rate limits](https://docs.github.com/en/rest/rate-limit?apiVersion=2022-11-28#about-rate-limits) in the GitHub documentation.

:::

### Scan a GitHub organization but not its repos

Use the `--discover organization` flag to scan your GitHub organization and discover and scan all of the repos within it:

```bash
cnspec scan github org <ORG_NAME> --discover organization
```

### Scan GitHub repos

To scan the configuration of a GitHub repo:

```bash
cnspec scan github repo <ORG_NAME/REPO_NAME>
```

## Example checks

Run `cnspec shell` to open the cnspec interactive shell. From there you can make checks like the examples below.

Ensure two-factor authentication is enabled for GitHub organizations:

```coffeescript
cnspec> github.organization.twoFactorRequirementEnabled
[failed] github.organization.twoFactorRequirementEnabled
  expected: == true
  actual:   false
```

Ensure the GitHub organization domain is verified:

```coffeescript
cnspec> github.organization.isVerified
[failed] github.organization.isVerified
  expected: == true
  actual:   false
```

Ensure the GitHub organization default permissions is set to _read_:

```coffeescript
cnspec> github.organization.defaultRepositoryPermission == "read"
[ok] value: "read"
```

Ensure the default branch is configured with branch protection:

```coffeescript
cnspec> github.repository.branches.where( isDefault == true ).all( protected == true )
[ok] value: true
```

## Learn more

- To learn about all the GitHub resources and properties, read the [Mondoo GitHub Resource Pack Reference](/mql/resources/github-pack/).

- To learn how to write checks, read [Write Effective MQL](/mql/mql.write).

---
