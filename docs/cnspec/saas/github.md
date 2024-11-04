---
title: Assess the Configuration of GitHub Organizations and Repositories with cnspec
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

## Give cnspec access to your GitHub organization

To scan GitHub organizations and repos, cnspec needs access. There are two ways to do this:

- Option 1: Give cnspec access using a personal access token and an environment variable. This approach is easier to set up but isn't recommended for very large GitHub organizations. To learn how to give cnspec access using a personal access token, continue reading below.

- Option 2: Give cnspec access using custom GitHub application credentials. This approach takes longer to set up, but scales for very large GitHub organizations. To learn how to give cnspec access using custom app credentials, read [Give cnspec Access to GitHub Using Custom GitHub App Credentials](/cnspec/saas/gh-app/).

### Give cnspec access using a personal access token and an environment variable

With this approach, you give cnspec the access it needs through the GitHub API. First, you create GitHub personal access token. Then you share that token with cnspec using an environment variable.

#### Create a GitHub personal access token

cnspec needs a personal access token to scan a GitHub organization, public repo, or private repo. The token's level of access determines how much information cnspec can retrieve.

To learn how to create a personal access token, read [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) in the GitHub documentation. We recommend creating a classic token with these scopes:

- public_repo
- read:org
- read:repo_hook
- admin:org_hook
- read:project

#### Configure a GITHUB_TOKEN environment variable

You supply your personal access token to cnspec by setting the `GITHUB_TOKEN` environment variable.

**On Linux / macOS:**

```bash
export GITHUB_TOKEN=<your personal access token>
```

**On Windows, using PowerShell:**

```powershell
$Env:GITHUB_TOKEN = "<your personal access token>"
```

## Scan a GitHub organization

To scan the configuration of your GitHub organization and all repos within it, run this command:

```bash
cnspec scan github org <YOUR-GITHUB-ORG>
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

### Scan specific repos in an organization

You can specify which repos in an organization to scan. This command scans only two repos:

```bash
cnspec scan github org <ORG_NAME> --repos "<REPO1>,<REPO2>" --discover repos
```

This command scans the repos and the organization:

```
cnspec scan github org <ORG_NAME> --repos "<REPO1>,<REPO2>"
```

You can achieve the same scan using a Mondoo inventory file. This is especially helpful when you have a long list of repos to scan.

github-inventory.yml:

```yml
spec:
  assets:
    - connections:
        - type: github
          options:
            organization: <ORG>
            repos: <REPO1>,<REPO2>
            repos-exclude: ""
          discover:
            targets:
              - auto
```

To run a scan using this inventory, enter:

```bash
cnspec scan --inventory-file github-inventory.yml
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
