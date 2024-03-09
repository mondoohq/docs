---
title: Assess the configuration of GitLab organizations and repositories with cnspec
sidebar_label: GitLab
sidebar_position: 3
displayed_sidebar: cnspec
description: Secure and enforce policy for GitLab
image: /img/featured_img/mondoo-feature.jpg
---

Rely on cnspec to ensure your GitLab groups and projects follow recommended security and operational best practices.

## Give cnspec access using a GitLab personal access token

To scan GitLab groups and projects, cnspec needs access. You give cnspec the access it needs through the GitLab API. First, you create GitLab personal access token. Then you share that token with cnspec using an environment variable. The token's level of access determines how much information cnspec can retrieve.

To learn how to create a personal access token, read [Personal access tokens](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) in the GitLab documentation.

### Configure a GitLab_TOKEN environment variable

You supply your personal access token to cnspec using the `GITLAB_TOKEN` environment variable.

#### Linux / macOS

```bash
export GITLAB_TOKEN=<your personal access token>
```

#### Windows

```powershell
$Env:GITLAB_TOKEN = "<personal-access-token>"
```

## Scan GitLab groups and projects

To scan the configuration of a GitLab group, run this command:

```bash
cnspec scan gitlab --group <GROUP_NAME>
```

To scan all the groups you have access to, run this command:

```bash
cnspec scan gitlab --discover projects
```

To scan a project, run this command:

```bash
cnspec scan gitlab --group <GROUP_NAME> --project <PROJECT_NAME>
```

To scan all projects in a group, run this command:

```bash
cnspec scan gitlab --group <GROUP_NAME> --discover projects
```

To scan all Terraform files in all the projects discovered in all the groups you have access to, run this command:

```bash
cnspec scan gitlab --discover terraform
```

## Example checks

Run `cnspec shell` to open the cnspec interactive shell. From there you can make checks like the examples below.

Ensure group email notifications are disabled for a GitLab group:

```coffee
cnspec> gitlab.group.emailsDisabled
[failed] gitlab.group.emailsDisabled
  expected: == true
  actual:   false
```

Ensure the GitLab group is private:

```coffee
cnspec> gitlab.group.visibility=="private"
[ok] value: "private"
```

Ensure the GitLab organization default permissions is set to _read_:

```coffee
cnspec> gitlab.organization.defaultRepositoryPermission == "read"
[ok] value: "read"
```

Ensure the default branch is configured with branch protection:

```coffee
cnspec> gitlab.repository.branches.where( isDefault == true ).all( protected == true )
[ok] value: true
```

## Learn more

- To learn about all the GitLab resources and properties, read the [Mondoo GitLab Resource Pack Reference](/mql/resources/gitlab-pack/).

- To learn how to write checks, read [Write Effective MQL](/mql/mql.write).

---
